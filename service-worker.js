const API_BASE='https://api-ontalk.suaveforge.com:18443';
'use strict';

var DB_NAME = 'ggul-push-v1';
var STORE_NAME = 'settings';
var TOKEN_KEY = 'deviceToken';

function openDb() {
  return new Promise(function(resolve, reject) {
    var request = indexedDB.open(DB_NAME, 1);
    request.onupgradeneeded = function() {
      var db = request.result;
      if (!db.objectStoreNames.contains(STORE_NAME)) db.createObjectStore(STORE_NAME);
    };
    request.onsuccess = function() { resolve(request.result); };
    request.onerror = function() { reject(request.error); };
  });
}

function storeValue(key, value) {
  return openDb().then(function(db) {
    return new Promise(function(resolve, reject) {
      var tx = db.transaction(STORE_NAME, 'readwrite');
      tx.objectStore(STORE_NAME).put(value, key);
      tx.oncomplete = function() { resolve(); };
      tx.onerror = function() { reject(tx.error); };
    });
  });
}

function readValue(key) {
  return openDb().then(function(db) {
    return new Promise(function(resolve, reject) {
      var request = db.transaction(STORE_NAME, 'readonly').objectStore(STORE_NAME).get(key);
      request.onsuccess = function() { resolve(request.result || null); };
      request.onerror = function() { reject(request.error); };
    });
  });
}

self.addEventListener('install', function(event) {
  event.waitUntil(self.skipWaiting());
});

self.addEventListener('activate', function(event) {
  event.waitUntil(self.clients.claim());
});

self.addEventListener('message', function(event) {
  var data = event.data || {};
  if (data.type === 'GGUL_PUSH_TOKEN' && data.deviceToken) {
    event.waitUntil(storeValue(TOKEN_KEY, String(data.deviceToken)));
  }
});

function pendingIntent() {
  return readValue(TOKEN_KEY).then(function(token) {
    if (!token) return null;
    return fetch(API_BASE + '/api/push/pending', {
      credentials: 'same-origin', cache: 'no-store', headers: { 'X-GGUL-Push-Token': token }
    }).then(function(response) {
      if (!response.ok) return null;
      return response.json();
    }).then(function(data) {
      if (!data || !data.intent) return null;
      data.deviceToken = token;
      return data;
    });
  });
}

self.addEventListener('push', function(event) {
  event.waitUntil(pendingIntent().then(function(result) {
    if (!result || !result.intent) return;
    var intent = result.intent;
    var url = '/?action=accept&intent=' + encodeURIComponent(intent.id);
    return self.registration.showNotification('온톡 상담 요청', {
      body: intent.customerUsername + '님이 상담을 요청했습니다.',
      icon: '/icon-192.png?v=105',
      badge: '/icon-192.png?v=105',
      tag: 'ggul-call-' + intent.id,
      renotify: true,
      requireInteraction: true,
      silent: false,
      vibrate: [500, 180, 500, 180, 900],
      timestamp: Date.now(),
      actions: [
        { action: 'accept', title: '통화 받기' },
        { action: 'reject', title: '거절' }
      ],
      data: { intentId: intent.id, deviceToken: result.deviceToken, url: url }
    });
  }));
});

function focusOrOpen(url, message) {
  return clients.matchAll({ type: 'window', includeUncontrolled: true }).then(function(windowClients) {
    for (var i = 0; i < windowClients.length; i += 1) {
      var client = windowClients[i];
      if ('navigate' in client) {
        return client.navigate(url).then(function(navigated) {
          if (message && navigated) navigated.postMessage(message);
          return navigated.focus();
        });
      }
    }
    return clients.openWindow(url);
  });
}

self.addEventListener('notificationclick', function(event) {
  event.notification.close();
  var data = event.notification.data || {};
  var intentId = data.intentId;
  var token = data.deviceToken;
  if (event.action === 'reject' && intentId && token) {
    event.waitUntil(fetch(API_BASE + '/api/call-intents/' + encodeURIComponent(intentId) + '/reject-by-device', {
      method: 'POST',
      credentials: 'same-origin',
      headers: { 'X-GGUL-Push-Token': token, 'Content-Type': 'application/json' },
      body: '{}'
    }));
    return;
  }
  var url = data.url || ('/?action=accept&intent=' + encodeURIComponent(intentId || ''));
  event.waitUntil(focusOrOpen(url, { type: 'GGUL_ACCEPT_INTENT', intentId: intentId }));
});
