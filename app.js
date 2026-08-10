var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var _this = this;
var API_BASE = String((window.ONTALK_CONFIG && window.ONTALK_CONFIG.apiBase) || '').replace(/\/$/, '');
var FREEPBX_URL = String((window.ONTALK_CONFIG && window.ONTALK_CONFIG.freePbxUrl) || 'https://api-ontalk.suaveforge.com:18444/admin/');
var apiUrl = function (value) { return API_BASE && String(value).startsWith('/') ? API_BASE + value : value; };
'use strict';
if (!Object.assign) {
    Object.assign = function assign(target) {
        if (target == null)
            throw new TypeError('Object.assign target is null or undefined');
        var output = Object(target);
        var _loop_1 = function (index) {
            var source = arguments_1[index];
            if (source == null)
                return "continue";
            Object.keys(Object(source)).forEach(function (key) { output[key] = source[key]; });
        };
        var arguments_1 = arguments;
        for (var index = 1; index < arguments.length; index += 1) {
            _loop_1(index);
        }
        return output;
    };
}
if (!String.prototype.padStart) {
    String.prototype.padStart = function padStart(targetLength, padString) {
        var source = String(this);
        var needed = Math.max(0, Number(targetLength) - source.length);
        var padding = String(padString === undefined ? ' ' : padString);
        if (!padding)
            padding = ' ';
        while (padding.length < needed)
            padding += padding;
        return padding.slice(0, needed) + source;
    };
}
if (!String.prototype.repeat) {
    String.prototype.repeat = function repeat(count) {
        var output = '';
        var source = String(this);
        for (var index = 0; index < Math.max(0, Number(count) || 0); index += 1)
            output += source;
        return output;
    };
}
if (!String.prototype.includes) {
    String.prototype.includes = function includes(search, start) { return String(this).indexOf(String(search), Number(start) || 0) >= 0; };
}
if (!Array.from) {
    Array.from = function from(value, mapper) {
        var output = [];
        var source = Object(value);
        for (var index = 0; index < Number(source.length || 0); index += 1)
            output.push(mapper ? mapper(source[index], index) : source[index]);
        return output;
    };
}
if (!Number.isFinite)
    Number.isFinite = function isFiniteNumber(value) { return typeof value === 'number' && window.isFinite(value); };
if (!Number.isNaN)
    Number.isNaN = function isNaNNumber(value) { return typeof value === 'number' && value !== value; };
function hasSecureContext() {
    if (window.isSecureContext === true)
        return true;
    return window.location.protocol === 'https:' || window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1';
}
var $ = function (selector) { return document.querySelector(selector); };
var $$ = function (selector) { return Array.prototype.slice.call(document.querySelectorAll(selector)); };
var statusLabels = {
    connected: '통화 중', ringing: '호출 중', dialing: '연결 중',
    available: '상담 가능', on_call: '통화 중', away: '자리 비움', offline: '오프라인'
};
var roleLabels = { customer: '고객', counselor: '상담사', admin: '관리자' };
var CLIENT_TEST_ACCOUNTS = {
    admin: { username: 'client_admin', password: 'ontalk2026' },
    customer: { username: 'client_member', password: 'ontalk2026' },
    counselor: { username: 'client_counselor', password: 'ontalk2026' }
};
var auth = { authenticated: false, role: null, user: null, member: null };
var snapshot = null;
var eventSource = null;
var snapshotPollTimer = null;
var callTimer = null;
var toastTimer = null;
var audioContext = null;
var ringTimer = null;
var callIntentPollTimer = null;
var waitingIntent = null;
var adminViewerRole = 'customer';
var selectedPersonId = null;
var analyticsPeriod = 7;
var ADMIN_PAGE_SIZE = 10;
var historyPage = 1;
var eventPage = 1;
var adminHistoryRows = [];
var adminEventRows = [];
var deferredInstallPrompt = null;
var serviceWorkerRegistration = null;
var pushDeviceToken = null;
var pendingActionIntentId = null;
var acceptedActionIntentId = null;
function xhrJson(url, options) {
    return new Promise(function (resolve, reject) {
        var xhr = new XMLHttpRequest();
        xhr.open(options.method || 'GET', url, true);
        xhr.withCredentials = true;
        Object.keys(options.headers || {}).forEach(function (name) { return xhr.setRequestHeader(name, options.headers[name]); });
        xhr.onreadystatechange = function () {
            if (xhr.readyState !== 4)
                return;
            var data = {};
            try {
                data = xhr.responseText ? JSON.parse(xhr.responseText) : {};
            }
            catch (error) { }
            resolve({ status: xhr.status, ok: xhr.status >= 200 && xhr.status < 300, data: data });
        };
        xhr.onerror = function () { return reject(new Error('네트워크 연결에 실패했습니다.')); };
        xhr.send(options.body || null);
    });
}
function api(url_1) {
    return __awaiter(this, arguments, void 0, function (url, options) {
        var requestOptions, status, ok, data, response, response, replaced, error;
        if (options === void 0) { options = {}; }
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    requestOptions = Object.assign({}, options);
                    requestOptions.credentials = 'include';
                    requestOptions.headers = Object.assign({ 'Content-Type': 'application/json' }, options.headers || {});
                    if (!window.fetch) return [3 /*break*/, 3];
                    return [4 /*yield*/, fetch(apiUrl(url), requestOptions)];
                case 1:
                    response = _a.sent();
                    status = response.status;
                    ok = response.ok;
                    return [4 /*yield*/, response.json().catch(function () { return ({}); })];
                case 2:
                    data = _a.sent();
                    return [3 /*break*/, 5];
                case 3: return [4 /*yield*/, xhrJson(url, requestOptions)];
                case 4:
                    response = _a.sent();
                    status = response.status;
                    ok = response.ok;
                    data = response.data;
                    _a.label = 5;
                case 5:
                    if (status === 401 && url !== '/api/auth/login') {
                        replaced = data && data.code === 'SESSION_REPLACED';
                        showAuth();
                        if (replaced)
                            toast('다른 브라우저에서 로그인하여 이 연결은 종료됐습니다.');
                        throw new Error('AUTH_REQUIRED');
                    }
                    if (!ok) {
                        error = new Error(data.error || "HTTP ".concat(status));
                        error.code = data.code;
                        error.data = data;
                        throw error;
                    }
                    return [2 /*return*/, data];
            }
        });
    });
}
function activateAudio() {
    try {
        if (!audioContext)
            audioContext = new (window.AudioContext || window.webkitAudioContext)();
        if (audioContext.state === 'suspended')
            audioContext.resume().catch(function () { });
    }
    catch (error) { }
}
document.addEventListener('pointerdown', activateAudio, { passive: true });
document.addEventListener('touchstart', activateAudio, { passive: true });
function formValues(form) {
    var values = {};
    Array.prototype.forEach.call(form.elements, function (field) {
        if (!field.name || field.disabled)
            return;
        if ((field.type === 'checkbox' || field.type === 'radio') && !field.checked)
            return;
        values[field.name] = field.value;
    });
    return values;
}
function switchAuthTab(tab) {
    var login = tab === 'login';
    $('#loginTab').setAttribute('aria-selected', login ? 'true' : 'false');
    $('#signupTab').setAttribute('aria-selected', login ? 'false' : 'true');
    $('#loginTab').classList.toggle('active', login);
    $('#signupTab').classList.toggle('active', !login);
    $('#loginForm').classList.toggle('hidden', !login);
    $('#signupForm').classList.toggle('hidden', login);
    $('#loginError').textContent = '';
    $('#signupError').textContent = '';
}
$('#loginTab').addEventListener('click', function () { return switchAuthTab('login'); });
$('#signupTab').addEventListener('click', function () { return switchAuthTab('signup'); });
if (!window.PointerEvent) {
    $('#loginTab').addEventListener('touchend', function (event) { event.preventDefault(); switchAuthTab('login'); });
    $('#signupTab').addEventListener('touchend', function (event) { event.preventDefault(); switchAuthTab('signup'); });
}
$('#clientTestAccount').addEventListener('change', function (event) {
    var account = CLIENT_TEST_ACCOUNTS[event.currentTarget.value];
    if (!account)
        return;
    var form = $('#loginForm');
    form.elements.username.value = account.username;
    form.elements.password.value = account.password;
    $('#loginError').textContent = '';
});
$('#loginForm').addEventListener('submit', function (event) { return __awaiter(_this, void 0, void 0, function () {
    var form, button, result, error_1;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                event.preventDefault();
                activateAudio();
                form = event.currentTarget;
                button = form.querySelector('button[type=submit]');
                $('#loginError').textContent = '';
                setBusy(button, true, '로그인 중…');
                _a.label = 1;
            case 1:
                _a.trys.push([1, 4, 5, 6]);
                return [4 /*yield*/, api('/api/auth/login', { method: 'POST', body: JSON.stringify(formValues(form)) })];
            case 2:
                result = _a.sent();
                auth = Object.assign({ authenticated: true }, result);
                form.reset();
                return [4 /*yield*/, enterApp()];
            case 3:
                _a.sent();
                return [3 /*break*/, 6];
            case 4:
                error_1 = _a.sent();
                if (error_1.message !== 'AUTH_REQUIRED')
                    $('#loginError').textContent = error_1.message;
                return [3 /*break*/, 6];
            case 5:
                setBusy(button, false);
                return [7 /*endfinally*/];
            case 6: return [2 /*return*/];
        }
    });
}); });
$('#signupForm').addEventListener('submit', function (event) { return __awaiter(_this, void 0, void 0, function () {
    var form, button, result, error_2;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                event.preventDefault();
                activateAudio();
                form = event.currentTarget;
                button = form.querySelector('button[type=submit]');
                $('#signupError').textContent = '';
                setBusy(button, true, '내선 생성 중…');
                _a.label = 1;
            case 1:
                _a.trys.push([1, 4, 5, 6]);
                return [4 /*yield*/, api('/api/auth/signup', { method: 'POST', body: JSON.stringify(formValues(form)) })];
            case 2:
                result = _a.sent();
                auth = Object.assign({ authenticated: true }, result);
                form.reset();
                toast("".concat(result.member.extension, " \uB0B4\uC120\uC774 \uC0DD\uC131\uB410\uC2B5\uB2C8\uB2E4."));
                return [4 /*yield*/, enterApp()];
            case 3:
                _a.sent();
                return [3 /*break*/, 6];
            case 4:
                error_2 = _a.sent();
                $('#signupError').textContent = error_2.message;
                return [3 /*break*/, 6];
            case 5:
                setBusy(button, false);
                return [7 /*endfinally*/];
            case 6: return [2 /*return*/];
        }
    });
}); });
$('#logoutButton').addEventListener('click', function () { return __awaiter(_this, void 0, void 0, function () {
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                phone.stop();
                return [4 /*yield*/, api('/api/auth/logout', { method: 'POST' }).catch(function () { })];
            case 1:
                _a.sent();
                showAuth();
                return [2 /*return*/];
        }
    });
}); });
function setBusy(button, busy, label) {
    if (label === void 0) { label = ''; }
    if (!button.dataset.original)
        button.dataset.original = button.textContent;
    button.disabled = busy;
    button.textContent = busy ? label : button.dataset.original;
}
function showAuth() {
    auth = { authenticated: false, role: null, user: null, member: null };
    snapshot = null;
    phone.stop();
    if (eventSource)
        eventSource.close();
    eventSource = null;
    stopSnapshotPolling();
    stopCallIntentPolling();
    waitingIntent = null;
    $('#authView').classList.remove('hidden');
    $('#appView').classList.add('hidden');
    hideCallLayer();
}
function isNativeCounselorApp() { return Boolean(window.GgulAndroid && typeof window.GgulAndroid.registerDevice === 'function'); }
function registerNativeCounselorDevice() {
    return __awaiter(this, void 0, void 0, function () {
        var result, error_3;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (auth.role !== 'counselor' || !isNativeCounselorApp())
                        return [2 /*return*/];
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 3, , 4]);
                    document.documentElement.classList.add('ggul-native-shell');
                    return [4 /*yield*/, api('/api/native/device/register', { method: 'POST', body: '{}' })];
                case 2:
                    result = _a.sent();
                    window.GgulAndroid.registerDevice(String(result.deviceToken || ''), String(result.portalUrl || window.location.origin));
                    return [3 /*break*/, 4];
                case 3:
                    error_3 = _a.sent();
                    toast('상담사 앱 알림 등록 실패: ' + error_3.message);
                    return [3 /*break*/, 4];
                case 4: return [2 /*return*/];
            }
        });
    });
}
function enterApp() {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    $('#authView').classList.add('hidden');
                    $('#appView').classList.remove('hidden');
                    $('#headerUser').textContent = auth.user || (auth.member && auth.member.username) || '-';
                    $('#headerRole').textContent = roleLabels[auth.role] || auth.role;
                    showRole(auth.role);
                    return [4 /*yield*/, registerServiceWorker()];
                case 1:
                    _a.sent();
                    return [4 /*yield*/, loadSnapshot()];
                case 2:
                    _a.sent();
                    connectEvents();
                    if (!(auth.role === 'customer' || auth.role === 'counselor')) return [3 /*break*/, 4];
                    return [4 /*yield*/, phone.start()];
                case 3:
                    _a.sent();
                    _a.label = 4;
                case 4:
                    if (auth.role === 'counselor') {
                        registerNativeCounselorDevice();
                        restorePushToken();
                        renderPushStatus();
                        handlePendingActionIntent();
                    }
                    return [2 /*return*/];
            }
        });
    });
}
function setAdminPage(page) {
    var portal = $('#adminPortalView');
    var viewer = $('#adminViewerView');
    var operations = $('#adminView');
    if (!portal || !viewer || !operations)
        return;
    portal.classList.toggle('hidden', page !== 'home');
    viewer.classList.toggle('hidden', page !== 'viewer');
    operations.classList.toggle('hidden', page !== 'operations');
    if (window.history && window.history.replaceState) {
        var hash = page === 'viewer' ? '#admin-viewer' : page === 'operations' ? '#admin-operations' : '#admin-home';
        window.history.replaceState(null, '', window.location.pathname + window.location.search + hash);
    }
}
function showRole(role) {
    $$('.role-view').forEach(function (view) { return view.classList.add('hidden'); });
    var view = role === 'admin' ? $('#adminPortalView') : $("#".concat(role, "View"));
    if (view)
        view.classList.remove('hidden');
    if (role === 'admin')
        setAdminPage('home');
    $$('#roleNav button').forEach(function (button) {
        var allowed = button.dataset.view === role;
        button.classList.toggle('hidden', !allowed);
        button.classList.toggle('active', allowed);
    });
}
function loadSnapshot() {
    return __awaiter(this, void 0, void 0, function () {
        var _a, error_4;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    _b.trys.push([0, 2, , 3]);
                    _a = render;
                    return [4 /*yield*/, api('/api/snapshot')];
                case 1:
                    _a.apply(void 0, [_b.sent()]);
                    return [3 /*break*/, 3];
                case 2:
                    error_4 = _b.sent();
                    if (error_4.message !== 'AUTH_REQUIRED')
                        toast(error_4.message);
                    return [3 /*break*/, 3];
                case 3: return [2 /*return*/];
            }
        });
    });
}
function startSnapshotPolling() {
    if (snapshotPollTimer)
        return;
    snapshotPollTimer = setInterval(function () { if (auth.authenticated)
        loadSnapshot(); }, 2000);
}
function stopSnapshotPolling() {
    if (snapshotPollTimer)
        clearInterval(snapshotPollTimer);
    snapshotPollTimer = null;
}
function connectEvents() {
    if (eventSource)
        eventSource.close();
    eventSource = null;
    if (snapshot && snapshot.service && snapshot.service.publicHttpsMode === 'cloudflare-tunnel') {
        startSnapshotPolling();
        return;
    }
    eventSource = new EventSource(apiUrl('/api/events'), { withCredentials: true });
    eventSource.addEventListener('snapshot', function (event) { return render(JSON.parse(event.data)); });
    eventSource.addEventListener('session-revoked', function () {
        if (eventSource)
            eventSource.close();
        eventSource = null;
        showAuth();
        toast('다른 브라우저에서 로그인하여 이 연결은 종료됐습니다.');
    });
    eventSource.onopen = stopSnapshotPolling;
    eventSource.onerror = function () {
        if (eventSource)
            eventSource.close();
        eventSource = null;
        startSnapshotPolling();
    };
}
function render(data) {
    snapshot = data;
    if (data.session) {
        auth.role = data.session.role;
        auth.user = data.session.user;
        auth.member = data.session.member;
    }
    $('#headerUser').textContent = auth.user || '-';
    $('#headerRole').textContent = roleLabels[auth.role] || auth.role;
    if (auth.role === 'customer')
        renderMarketplace(data);
    if (auth.role === 'counselor')
        renderCounselorDesk(data);
    if (auth.role === 'admin')
        renderAdmin(data);
}
function renderMarketplace(data) {
    var counselorPriority = { available: 0, on_call: 1, away: 2, offline: 3 };
    var counselors = (data.counselors || []).slice().sort(function (a, b) {
        var pa = Object.prototype.hasOwnProperty.call(counselorPriority, a.status) ? counselorPriority[a.status] : 9;
        var pb = Object.prototype.hasOwnProperty.call(counselorPriority, b.status) ? counselorPriority[b.status] : 9;
        if (pa !== pb)
            return pa - pb;
        return String(a.username || a.extension || '').localeCompare(String(b.username || b.extension || ''), 'ko');
    });
    var available = counselors.filter(function (item) { return item.status === 'available'; }).length;
    $('#customerAvailableCount').textContent = String(available);
    $('#marketUpdated').textContent = "\uC2E4\uC2DC\uAC04 \uC5C5\uB370\uC774\uD2B8 ".concat(formatDate(data.updatedAt));
    $('#marketEmpty').classList.toggle('hidden', counselors.length > 0);
    $('#counselorMarket').innerHTML = counselors.map(function (counselor, index) {
        var profile = counselorProfile(counselor, index);
        var canCall = counselor.status === 'available' && phone.registered && !phone.session;
        var buttonLabel = counselor.status === 'available' ? (phone.registered ? '상담하기' : '통화 준비 중') : statusLabels[counselor.status] || counselor.status;
        return "<article class=\"counselor-card\">\n      <div class=\"counselor-cover cover-".concat(profile.cover, "\">\n        <span class=\"category-chip\">").concat(profile.category, "</span>\n        <div class=\"profile-symbol\">").concat(escapeHtml(profile.symbol), "</div>\n        <span class=\"live-status ").concat(counselor.status, "\"><i></i>").concat(statusLabels[counselor.status] || counselor.status, "</span>\n      </div>\n      <div class=\"counselor-body\">\n        <div class=\"counselor-title\"><div><h3>").concat(escapeHtml(counselor.username), "</h3><p>\uB0B4\uC120 ").concat(escapeHtml(counselor.extension), "</p></div><span class=\"rating\">\u2605 ").concat(profile.rating, "</span></div>\n        <p class=\"counselor-copy\">").concat(escapeHtml(profile.copy), "</p>\n        <div class=\"tag-row\">").concat(profile.tags.map(function (tag) { return "<span>#".concat(escapeHtml(tag), "</span>"); }).join(''), "</div>\n        <button class=\"consult-button\" data-call-extension=\"").concat(counselor.extension, "\" ").concat(canCall ? '' : 'disabled', ">").concat(buttonLabel, "<small>").concat(canCall ? '웹에서 바로 연결' : '실시간 상태 기준', "</small></button>\n      </div>\n    </article>");
    }).join('');
    $$('[data-call-extension]').forEach(function (button) { return button.addEventListener('click', function () { return startCounselorCall(button.dataset.callExtension); }); });
    renderCustomerPhoneNotice();
}
function counselorProfile(counselor, index) {
    var source = Number(counselor.extension || index) || index;
    var profiles = [
        { category: '사주·운세', symbol: '卦', copy: '답답한 흐름을 차분하게 짚고, 지금 필요한 방향을 함께 살펴봅니다.', tags: ['오늘운세', '진로운', '재물운'], cover: 1 },
        { category: '타로 상담', symbol: '✦', copy: '마음속 질문을 중심으로 현재의 감정과 선택지를 또렷하게 정리합니다.', tags: ['연애운', '속마음', '관계'], cover: 2 },
        { category: '마음 상담', symbol: '月', copy: '혼자 정리하기 어려운 고민을 편안하게 듣고 현실적인 다음 걸음을 찾습니다.', tags: ['고민상담', '직장', '인간관계'], cover: 3 }
    ];
    var selected = profiles[source % profiles.length];
    return Object.assign({}, selected, { rating: (4.8 + (source % 3) * 0.1).toFixed(1) });
}
function renderCustomerPhoneNotice() {
    var box = $('#customerPhoneNotice');
    if (!hasSecureContext()) {
        box.className = 'phone-notice error';
        box.textContent = '웹 통화는 HTTPS 주소에서만 사용할 수 있습니다.';
    }
    else if (phone.registered) {
        box.className = 'phone-notice ready';
        box.textContent = "\uC6F9 \uD1B5\uD654 \uC900\uBE44 \uC644\uB8CC \u00B7 \uB0B4\uC120 ".concat(phone.config && phone.config.extension || '-');
    }
    else {
        box.className = 'phone-notice waiting';
        box.textContent = phone.statusMessage || '웹 통화 단말을 연결하고 있습니다.';
    }
}
function startCounselorCall(extension) {
    return __awaiter(this, void 0, void 0, function () {
        var result, error_5;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (!phone.registered)
                        return [2 /*return*/, toast('웹 통화 단말 연결을 기다려 주세요.')];
                    if (phone.session || waitingIntent)
                        return [2 /*return*/, toast('이미 상담 연결이 진행 중입니다.')];
                    activateAudio();
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 3, , 4]);
                    return [4 /*yield*/, api("/api/counselors/".concat(encodeURIComponent(extension), "/call-intent"), { method: 'POST', body: '{}' })];
                case 2:
                    result = _a.sent();
                    waitingIntent = result.intent;
                    showCallLayer('waiting', waitingIntent.counselorUsername || extension, result.push && result.push.success > 0 ? '상담사 잠금화면으로 요청을 보냈습니다.' : '상담사의 응답을 기다리고 있습니다.');
                    startCallIntentPolling(waitingIntent.id);
                    return [3 /*break*/, 4];
                case 3:
                    error_5 = _a.sent();
                    toast(error_5.message);
                    return [3 /*break*/, 4];
                case 4: return [2 /*return*/];
            }
        });
    });
}
function stopCallIntentPolling() {
    if (callIntentPollTimer)
        clearInterval(callIntentPollTimer);
    callIntentPollTimer = null;
}
function cancelWaitingCallIntent() {
    return __awaiter(this, void 0, void 0, function () {
        var button, result, error_6;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (!waitingIntent || waitingIntent.status !== 'pending')
                        return [2 /*return*/];
                    button = $('#cancelCallIntent');
                    setBusy(button, true, '취소 중…');
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 3, 4, 5]);
                    return [4 /*yield*/, api("/api/call-intents/".concat(encodeURIComponent(waitingIntent.id), "/cancel"), { method: 'POST', body: '{}' })];
                case 2:
                    result = _a.sent();
                    stopCallIntentPolling();
                    waitingIntent = null;
                    showCallEnded(result.intent && result.intent.status === 'accepted' ? '이미 상담사가 수락하여 취소할 수 없습니다.' : '상담 요청을 취소했습니다.');
                    return [3 /*break*/, 5];
                case 3:
                    error_6 = _a.sent();
                    toast(error_6.message);
                    return [3 /*break*/, 5];
                case 4:
                    setBusy(button, false);
                    return [7 /*endfinally*/];
                case 5: return [2 /*return*/];
            }
        });
    });
}
function startCallIntentPolling(intentId) {
    var _this = this;
    stopCallIntentPolling();
    var poll = function () { return __awaiter(_this, void 0, void 0, function () {
        var result, peer, error_7;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 5, , 6]);
                    return [4 /*yield*/, api("/api/call-intents/".concat(encodeURIComponent(intentId)))];
                case 1:
                    result = _a.sent();
                    waitingIntent = result.intent;
                    if (!(result.intent.status === 'accepted')) return [3 /*break*/, 3];
                    stopCallIntentPolling();
                    peer = result.intent.counselorUsername || result.intent.counselorExtension;
                    showCallLayer('outgoing', peer, '상담사가 요청을 수락했습니다. 음성 통화를 연결합니다.');
                    return [4 /*yield*/, phone.call(result.targetUri, peer)];
                case 2:
                    _a.sent();
                    waitingIntent = null;
                    return [3 /*break*/, 4];
                case 3:
                    if (result.intent.status === 'rejected') {
                        stopCallIntentPolling();
                        waitingIntent = null;
                        showCallEnded('상담사가 요청을 거절했습니다.');
                    }
                    else if (result.intent.status === 'expired') {
                        stopCallIntentPolling();
                        waitingIntent = null;
                        showCallEnded('상담사가 응답하지 않아 요청이 만료됐습니다.');
                    }
                    else if (result.intent.status === 'cancelled') {
                        stopCallIntentPolling();
                        waitingIntent = null;
                        showCallEnded('상담 요청이 취소됐습니다.');
                    }
                    _a.label = 4;
                case 4: return [3 /*break*/, 6];
                case 5:
                    error_7 = _a.sent();
                    if (error_7.message !== 'AUTH_REQUIRED')
                        toast(error_7.message);
                    return [3 /*break*/, 6];
                case 6: return [2 /*return*/];
            }
        });
    }); };
    poll();
    callIntentPollTimer = setInterval(poll, 1000);
}
function ownPendingIntent(data) {
    var intents = data && data.callIntents || [];
    return intents.find(function (item) { return item.status === 'pending'; }) || null;
}
function renderCounselorDesk(data) {
    var member = data.session && data.session.member;
    var sessionExtension = data.session && data.session.extension;
    var own = (data.agents || []).find(function (agent) { return agent.id === sessionExtension; });
    $('#deskName').textContent = member && member.username || data.session && data.session.user || '상담사';
    var status = own && own.status || 'offline';
    $('#deskStatusBadge').className = "big-status ".concat(status);
    $('#deskStatusBadge').textContent = statusLabels[status] || status;
    $('#availableButton').classList.toggle('active', own && own.manualStatus === 'available');
    $('#awayButton').classList.toggle('active', own && own.manualStatus === 'away');
    $('#availableButton').disabled = !phone.registered;
    $('#awayButton').disabled = !phone.registered;
    renderPhoneState();
    renderDeskCall();
    renderPendingIntent(ownPendingIntent(data));
    renderPushStatus();
}
function setMyStatus(status) {
    return __awaiter(this, void 0, void 0, function () {
        var extension, error_8;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    extension = snapshot && snapshot.session && snapshot.session.extension;
                    if (!extension)
                        return [2 /*return*/];
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 3, , 4]);
                    return [4 /*yield*/, api("/api/agents/".concat(extension, "/status"), { method: 'POST', body: JSON.stringify({ status: status }) })];
                case 2:
                    _a.sent();
                    toast(status === 'available' ? '상담 가능으로 변경했습니다.' : '자리 비움으로 변경했습니다.');
                    return [3 /*break*/, 4];
                case 3:
                    error_8 = _a.sent();
                    toast(error_8.message);
                    return [3 /*break*/, 4];
                case 4: return [2 /*return*/];
            }
        });
    });
}
$('#availableButton').addEventListener('click', function () { return setMyStatus('available'); });
$('#awayButton').addEventListener('click', function () { return setMyStatus('away'); });
$('#phoneReconnect').addEventListener('click', function () { return __awaiter(_this, void 0, void 0, function () { return __generator(this, function (_a) {
    switch (_a.label) {
        case 0:
            activateAudio();
            return [4 /*yield*/, phone.restart()];
        case 1:
            _a.sent();
            return [2 /*return*/];
    }
}); }); });
$('#deskHangup').addEventListener('click', function () { return phone.hangup(); });
function renderPhoneState() {
    $('#phoneIndicator').className = "connection-dot ".concat(phone.registered ? 'ready' : phone.connecting ? 'connecting' : 'offline');
    $('#phoneStateText').textContent = phone.registered ? '수신 준비 완료' : phone.connecting ? '내선 연결 중' : '통화 단말 오프라인';
    $('#phoneStateDetail').textContent = phone.registered
        ? "\uB0B4\uC120 ".concat(phone.config && phone.config.extension, " \u00B7 \uD654\uBA74 \uAEBC\uC9D0 \uC218\uC2E0\uC740 \uC544\uB798 \uC7A0\uAE08\uD654\uBA74 \uC54C\uB9BC\uC744 \uCF1C\uC57C \uD569\uB2C8\uB2E4.")
        : phone.statusMessage || '통화 단말 다시 연결을 눌러 주세요.';
}
function renderDeskCall() {
    var hasCall = Boolean(phone.session);
    $('#deskCallEmpty').classList.toggle('hidden', hasCall);
    $('#deskCallInfo').classList.toggle('hidden', !hasCall);
    $('#deskCallBadge').textContent = hasCall ? (phone.confirmed ? '통화 중' : '연결 중') : '대기 중';
    if (hasCall) {
        $('#deskCaller').textContent = phone.peerName || '고객';
        $('#deskCallTime').textContent = duration(phone.elapsedSeconds());
    }
}
function renderPendingIntent(intent) {
    var card = $('#pendingIntentCard');
    if (!card)
        return;
    var visible = Boolean(intent && intent.status === 'pending' && !phone.session);
    card.classList.toggle('hidden', !visible);
    if (!visible)
        return;
    $('#pendingIntentCustomer').textContent = intent.customerUsername || "\uB0B4\uC120 ".concat(intent.customerExtension);
    $('#pendingIntentAvatar').textContent = String(intent.customerUsername || '고').slice(0, 1);
    var remaining = Math.max(0, Math.ceil((new Date(intent.expiresAt).getTime() - Date.now()) / 1000));
    $('#pendingIntentTimer').textContent = duration(remaining);
    $('#acceptIntentButton').dataset.intentId = intent.id;
    $('#rejectIntentButton').dataset.intentId = intent.id;
}
function acceptPendingIntent(intentId) {
    return __awaiter(this, void 0, void 0, function () {
        var error_9;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (!intentId)
                        return [2 /*return*/];
                    activateAudio();
                    $('#acceptIntentButton').disabled = true;
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 5, 6, 7]);
                    return [4 /*yield*/, phone.waitUntilRegistered(15000)];
                case 2:
                    _a.sent();
                    return [4 /*yield*/, api("/api/call-intents/".concat(encodeURIComponent(intentId), "/accept"), { method: 'POST', body: '{}' })];
                case 3:
                    _a.sent();
                    acceptedActionIntentId = intentId;
                    toast('상담 요청을 수락했습니다. 고객 통화를 연결합니다.');
                    return [4 /*yield*/, loadSnapshot()];
                case 4:
                    _a.sent();
                    return [3 /*break*/, 7];
                case 5:
                    error_9 = _a.sent();
                    toast(error_9.message);
                    return [3 /*break*/, 7];
                case 6:
                    $('#acceptIntentButton').disabled = false;
                    return [7 /*endfinally*/];
                case 7: return [2 /*return*/];
            }
        });
    });
}
function rejectPendingIntent(intentId) {
    return __awaiter(this, void 0, void 0, function () {
        var error_10;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (!intentId)
                        return [2 /*return*/];
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 4, , 5]);
                    return [4 /*yield*/, api("/api/call-intents/".concat(encodeURIComponent(intentId), "/reject"), { method: 'POST', body: '{}' })];
                case 2:
                    _a.sent();
                    toast('상담 요청을 거절했습니다.');
                    return [4 /*yield*/, loadSnapshot()];
                case 3:
                    _a.sent();
                    return [3 /*break*/, 5];
                case 4:
                    error_10 = _a.sent();
                    toast(error_10.message);
                    return [3 /*break*/, 5];
                case 5: return [2 /*return*/];
            }
        });
    });
}
$('#acceptIntentButton').addEventListener('click', function () { acceptPendingIntent(this.dataset.intentId); });
$('#rejectIntentButton').addEventListener('click', function () { rejectPendingIntent(this.dataset.intentId); });
function renderAdmin(data) {
    $('#adminUpdated').textContent = "\uC5C5\uB370\uC774\uD2B8 ".concat(formatDate(data.updatedAt));
    $('#adminViewerUpdated').textContent = "\uC5C5\uB370\uC774\uD2B8 ".concat(formatDate(data.updatedAt));
    $('#metricMembers').textContent = String((data.members || []).filter(function (item) { return item.role === 'customer'; }).length);
    $('#metricCounselors').textContent = String((data.members || []).filter(function (item) { return item.role === 'counselor'; }).length);
    $('#metricActive').textContent = data.counts.active;
    $('#metricWaiting').textContent = data.counts.waiting;
    $('#metricAvailable').textContent = data.counts.available;
    $('#metricOnCall').textContent = data.counts.onCall;
    renderSystemBanner(data);
    renderAdminCalls(data.calls || []);
    renderSystem(data);
    renderAdminAgents((data.agents || []).filter(function (agent) { return agent.role === 'counselor'; }));
    renderHistory(data.callHistory || []);
    renderEvents(data.recentEvents || []);
    renderPeopleViewer(data);
}
function renderSystemBanner(data) {
    var ok = data.ami.connected && data.system.asterisk && data.system.webSocket && data.system.https;
    var banner = $('#systemBanner');
    banner.className = "system-banner ".concat(ok ? 'ok' : 'error');
    banner.innerHTML = "<span class=\"pulse\"></span><strong>".concat(ok ? '웹 통화 시스템 정상' : '웹 통화 시스템 점검 필요', "</strong><span>").concat(ok ? 'Asterisk·AMI·WebSocket·HTTPS가 연결돼 있습니다.' : escapeHtml(data.ami.lastError || '일부 서비스가 준비되지 않았습니다.'), "</span>");
}
function renderAdminCalls(calls) {
    var _this = this;
    $('#callCountBadge').textContent = "".concat(calls.length, "\uAC74");
    $('#liveCallsEmpty').classList.toggle('hidden', calls.length > 0);
    $('#liveCallsBody').innerHTML = calls.map(function (call) { return "<tr>\n    <td><span class=\"status-chip ".concat(call.status, "\">").concat(statusLabels[call.status] || call.status, "</span></td>\n    <td>").concat(escapeHtml(call.customer), "</td><td>").concat(escapeHtml(call.counselor), "</td>\n    <td>").concat(formatDate(call.startedAt), "</td><td data-call-start=\"").concat(escapeHtml(call.startedAt), "\">").concat(duration(call.durationSeconds), "</td>\n    <td><button class=\"danger-small\" data-hangup=\"").concat(encodeURIComponent(call.id), "\">\uAC15\uC81C \uC885\uB8CC</button></td></tr>"); }).join('');
    $$('[data-hangup]').forEach(function (button) { return button.addEventListener('click', function () { return __awaiter(_this, void 0, void 0, function () {
        var error_11;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (!confirm('현재 통화를 종료할까요?'))
                        return [2 /*return*/];
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 3, , 4]);
                    return [4 /*yield*/, api("/api/calls/".concat(button.dataset.hangup, "/hangup"), { method: 'POST' })];
                case 2:
                    _a.sent();
                    toast('통화 종료 명령을 전송했습니다.');
                    return [3 /*break*/, 4];
                case 3:
                    error_11 = _a.sent();
                    toast(error_11.message);
                    return [3 /*break*/, 4];
                case 4: return [2 /*return*/];
            }
        });
    }); }); });
}
function renderSystem(data) {
    var items = [
        ['Asterisk 엔진', data.system.asterisk], ['AMI 실시간 연결', data.ami.connected],
        ['브라우저 WebSocket', data.system.webSocket], ['HTTPS 웹 통화', data.system.https],
        ["SIP UDP ".concat(data.service.sipPort), data.system.sipListener], ['동적 내선 생성', data.system.provisioning]
    ];
    $('#systemList').innerHTML = items.map(function (_a) {
        var name = _a[0], ok = _a[1];
        return "<div class=\"system-item\"><span>".concat(name, "</span><b class=\"status-chip ").concat(ok ? 'available' : 'offline', "\">").concat(ok ? '정상' : '점검', "</b></div>");
    }).join('') + "<div class=\"system-item\"><span>Asterisk \uAC00\uB3D9\uC2DC\uAC04</span><b>".concat(formatUptime(data.system.uptime), "</b></div>");
}
function renderAdminAgents(agents) {
    $('#adminAgentList').innerHTML = agents.length ? agents.map(function (agent) { return "<button class=\"admin-agent\" data-open-counselor=\"".concat(escapeHtml(agent.memberId || agent.id), "\"><div><strong>").concat(escapeHtml(agent.name), "</strong><span>\uB0B4\uC120 ").concat(agent.id, "</span></div><b class=\"status-chip ").concat(agent.status, "\">").concat(statusLabels[agent.status] || agent.status, "</b></button>"); }).join('') : '<div class="empty-state">가입한 상담사가 없습니다.</div>';
    $$('[data-open-counselor]').forEach(function (button) { return button.addEventListener('click', function () {
        adminViewerRole = 'counselor';
        selectedPersonId = button.dataset.openCounselor;
        syncViewerTabs();
        renderPeopleViewer(snapshot);
        var detail = $('#personDetail');
        try {
            detail.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
        catch (error) {
            detail.scrollIntoView(true);
        }
    }); });
}
function pageCount(total) {
    return Math.max(1, Math.ceil(total / ADMIN_PAGE_SIZE));
}
function clampAdminPage(page, total) {
    return Math.max(1, Math.min(Number(page) || 1, pageCount(total)));
}
function renderPagination(prefix, page, total) {
    var pages = pageCount(total);
    var previous = $("#".concat(prefix, "Prev"));
    var next = $("#".concat(prefix, "Next"));
    var info = $("#".concat(prefix, "PageInfo"));
    if (!previous || !next || !info)
        return;
    previous.disabled = page <= 1;
    next.disabled = page >= pages;
    info.textContent = "".concat(page, " / ").concat(pages, " \u00B7 \uCD1D ").concat(total, "\uAC74");
}
function renderHistory(history) {
    adminHistoryRows = Array.isArray(history) ? history : [];
    historyPage = clampAdminPage(historyPage, adminHistoryRows.length);
    var start = (historyPage - 1) * ADMIN_PAGE_SIZE;
    var rows = adminHistoryRows.slice(start, start + ADMIN_PAGE_SIZE);
    $('#historyEmpty').classList.toggle('hidden', adminHistoryRows.length > 0);
    $('#historyBody').innerHTML = rows.map(function (item) { return "<tr><td>".concat(formatDate(item.at), "</td><td>").concat(escapeHtml(item.channel), "</td><td>").concat(escapeHtml(item.caller), "</td><td>").concat(escapeHtml(item.connected), "</td><td>").concat(escapeHtml(item.cause), "</td></tr>"); }).join('');
    renderPagination('history', historyPage, adminHistoryRows.length);
}
function renderEvents(events) {
    adminEventRows = Array.isArray(events) ? events : [];
    eventPage = clampAdminPage(eventPage, adminEventRows.length);
    var start = (eventPage - 1) * ADMIN_PAGE_SIZE;
    var rows = adminEventRows.length ? adminEventRows.slice(start, start + ADMIN_PAGE_SIZE) : [{ at: new Date().toISOString(), type: 'WAITING', message: '이벤트 대기 중' }];
    $('#eventList').innerHTML = rows.map(function (event) { return "<div class=\"event-row\"><time>".concat(formatDate(event.at), "</time><b>").concat(escapeHtml(event.type), "</b><span>").concat(escapeHtml(event.message || [event.endpoint, event.status, event.channel, event.cause].filter(Boolean).join(' · ') || '-'), "</span></div>"); }).join('');
    renderPagination('event', eventPage, adminEventRows.length);
}
function syncViewerTabs() {
    $('#memberViewerTab').classList.toggle('active', adminViewerRole === 'customer');
    $('#counselorViewerTab').classList.toggle('active', adminViewerRole === 'counselor');
    $$('[data-period]').forEach(function (button) { return button.classList.toggle('active', Number(button.dataset.period) === analyticsPeriod); });
}
function viewerPeople(data) {
    var agents = data.agents || [];
    var events = data.activityEvents || [];
    return (data.members || []).filter(function (member) { return member.role === adminViewerRole; }).map(function (member) {
        var agent = agents.find(function (item) { return item.memberId === member.id || item.id === member.extension; });
        var relevant = events.filter(function (event) { return eventMatchesPerson(event, member); });
        return Object.assign({}, member, {
            status: agent && agent.status || 'offline',
            registered: agent && agent.registered || false,
            lastActiveAt: relevant.length ? relevant[0].at : member.createdAt
        });
    }).sort(function (a, b) { return new Date(b.lastActiveAt).getTime() - new Date(a.lastActiveAt).getTime(); });
}
function eventMatchesPerson(event, person) {
    var values = [event.endpoint, event.caller, event.customer, event.counselor, event.user, event.username, event.connected, event.channel];
    return values.some(function (value) { return String(value || '') === String(person.extension) || String(value || '') === String(person.username); }) || String(event.message || '').includes(person.username);
}
function intentMatchesPerson(intent, person) {
    return person.role === 'customer' ? intent.customerExtension === person.extension : intent.counselorExtension === person.extension;
}
function historyMatchesPerson(item, person) {
    var combined = [item.channel, item.caller, item.connected].join(' ');
    return combined.includes(person.extension) || combined.includes(person.username);
}
function renderPeopleViewer(data) {
    if (!data)
        return;
    syncViewerTabs();
    var query = String($('#peopleSearch').value || '').trim().toLowerCase();
    var people = viewerPeople(data).filter(function (person) { return !query || person.username.toLowerCase().includes(query) || person.extension.includes(query); });
    $('#peopleListTitle').textContent = adminViewerRole === 'customer' ? '회원' : '상담사';
    $('#peopleListCount').textContent = "".concat(people.length, "\uBA85");
    if (!selectedPersonId || !people.some(function (person) { return person.id === selectedPersonId; }))
        selectedPersonId = people[0] && people[0].id || null;
    $('#peopleList').innerHTML = people.length ? people.map(function (person) { return "<button class=\"people-item ".concat(person.id === selectedPersonId ? 'active' : '', "\" data-person-id=\"").concat(escapeHtml(person.id), "\"><span class=\"people-item-avatar\">").concat(escapeHtml(person.username.slice(0, 1)), "</span><span class=\"people-item-copy\"><strong>").concat(escapeHtml(person.username), "</strong><span>\uB0B4\uC120 ").concat(escapeHtml(person.extension), " \u00B7 ").concat(formatRelative(person.lastActiveAt), "</span></span><i class=\"people-item-status ").concat(person.status, "\"></i></button>"); }).join('') : '<div class="empty-state">해당 계정이 없습니다.</div>';
    $$('[data-person-id]').forEach(function (button) { return button.addEventListener('click', function () { selectedPersonId = button.dataset.personId; renderPeopleViewer(snapshot); }); });
    var selected = people.find(function (person) { return person.id === selectedPersonId; });
    $('#personEmpty').classList.toggle('hidden', Boolean(selected));
    $('#personDetail').classList.toggle('hidden', !selected);
    if (selected)
        renderPersonDetail(data, selected);
}
function renderPersonDetail(data, person) {
    var startAt = Date.now() - analyticsPeriod * 86400000;
    var events = (data.activityEvents || []).filter(function (event) { return eventMatchesPerson(event, person) && new Date(event.at).getTime() >= startAt; });
    var intents = (data.callIntents || []).filter(function (intent) { return intentMatchesPerson(intent, person) && new Date(intent.createdAt).getTime() >= startAt; });
    var history = (data.callHistory || []).filter(function (item) { return historyMatchesPerson(item, person) && new Date(item.at).getTime() >= startAt; });
    var accepted = intents.filter(function (item) { return item.status === 'accepted'; });
    var responseTimes = accepted.map(function (item) { return item.acceptedAt ? new Date(item.acceptedAt).getTime() - new Date(item.createdAt).getTime() : null; }).filter(function (value) { return Number.isFinite(value) && value >= 0; });
    var requestCount = intents.length;
    var successRate = requestCount ? Math.round(accepted.length / requestCount * 100) : 0;
    var averageResponse = responseTimes.length ? responseTimes.reduce(function (sum, value) { return sum + value; }, 0) / responseTimes.length : null;
    $('#personAvatar').textContent = person.username.slice(0, 1);
    $('#personRoleLabel').textContent = person.role === 'customer' ? 'MEMBER ACTIVITY' : 'COUNSELOR ACTIVITY';
    $('#personName').textContent = person.username;
    $('#personMeta').textContent = "\uB0B4\uC120 ".concat(person.extension, " \u00B7 \uAC00\uC785 ").concat(formatFullDate(person.createdAt), " \u00B7 \uCD5C\uADFC \uD65C\uB3D9 ").concat(formatRelative(person.lastActiveAt));
    $('#personLiveStatus').className = "status-chip ".concat(person.status);
    $('#personLiveStatus').textContent = statusLabels[person.status] || person.status;
    $('#personActivityCount').textContent = String(events.length + history.length);
    $('#personRequestCount').textContent = String(requestCount);
    $('#personSuccessLabel').textContent = person.role === 'customer' ? '연결 성공' : '요청 수락';
    $('#personSuccessRate').textContent = "".concat(successRate, "%");
    $('#personResponseTime').textContent = averageResponse === null ? '-' : formatMilliseconds(averageResponse);
    var daily = buildDailySeries(events, history, analyticsPeriod);
    $('#activityTrendTotal').textContent = "".concat(daily.reduce(function (sum, item) { return sum + item.value; }, 0), " events");
    renderLineChart($('#activityTrendChart'), daily);
    renderOutcomeDonut($('#outcomeDonutChart'), $('#outcomeLegend'), intents);
    renderHourHeatmap($('#hourHeatmapChart'), events.concat(history.map(function (item) { return ({ at: item.at }); })));
    renderPersonTimeline($('#personTimeline'), events, intents, history);
    $('#personTimelineCount').textContent = "".concat(Math.min(50, events.length + intents.length + history.length), "\uAC74");
}
function buildDailySeries(events, history, days) {
    var result = [];
    var byDay = {};
    events.concat(history.map(function (item) { return ({ at: item.at }); })).forEach(function (item) {
        var key = localDateKey(item.at);
        byDay[key] = (byDay[key] || 0) + 1;
    });
    for (var offset = days - 1; offset >= 0; offset -= 1) {
        var date = new Date();
        date.setHours(0, 0, 0, 0);
        date.setDate(date.getDate() - offset);
        var key = localDateKey(date);
        result.push({ key: key, label: "".concat(date.getMonth() + 1, "/").concat(date.getDate()), value: byDay[key] || 0 });
    }
    return result;
}
function localDateKey(value) {
    var date = value instanceof Date ? value : new Date(value);
    return "".concat(date.getFullYear(), "-").concat(String(date.getMonth() + 1).padStart(2, '0'), "-").concat(String(date.getDate()).padStart(2, '0'));
}
function renderLineChart(container, points) {
    var width = 820, height = 225, left = 34, right = 12, top = 15, bottom = 30;
    var plotWidth = width - left - right, plotHeight = height - top - bottom;
    var max = Math.max.apply(Math, __spreadArray([1], points.map(function (item) { return item.value; }), false));
    var coords = points.map(function (item, index) { return ({
        x: left + (points.length === 1 ? plotWidth / 2 : index * plotWidth / (points.length - 1)),
        y: top + plotHeight - item.value / max * plotHeight,
        item: item
    }); });
    var line = coords.map(function (point, index) { return "".concat(index ? 'L' : 'M').concat(point.x.toFixed(2), ",").concat(point.y.toFixed(2)); }).join(' ');
    var area = coords.length ? "".concat(line, " L").concat(coords[coords.length - 1].x, ",").concat(top + plotHeight, " L").concat(coords[0].x, ",").concat(top + plotHeight, " Z") : '';
    var grid = [0, .25, .5, .75, 1].map(function (rate) {
        var y = top + plotHeight * rate;
        var label = Math.round(max * (1 - rate));
        return "<line class=\"chart-grid-line\" x1=\"".concat(left, "\" x2=\"").concat(width - right, "\" y1=\"").concat(y, "\" y2=\"").concat(y, "\"></line><text class=\"chart-axis-label\" x=\"").concat(left - 8, "\" y=\"").concat(y + 4, "\" text-anchor=\"end\">").concat(label, "</text>");
    }).join('');
    var labelEvery = Math.max(1, Math.ceil(points.length / 7));
    var labels = coords.filter(function (point, index) { return index % labelEvery === 0 || index === coords.length - 1; }).map(function (point) { return "<text class=\"chart-axis-label\" x=\"".concat(point.x, "\" y=\"").concat(height - 7, "\" text-anchor=\"middle\">").concat(point.item.label, "</text>"); }).join('');
    var circles = coords.map(function (point, index) { return "<circle class=\"chart-point\" data-chart-index=\"".concat(index, "\" cx=\"").concat(point.x, "\" cy=\"").concat(point.y, "\" r=\"4\"></circle>"); }).join('');
    container.innerHTML = "<svg viewBox=\"0 0 ".concat(width, " ").concat(height, "\" preserveAspectRatio=\"none\"><defs><linearGradient id=\"activityAreaGradient\" x1=\"0\" x2=\"0\" y1=\"0\" y2=\"1\"><stop offset=\"0\" stop-color=\"#7257ef\" stop-opacity=\".25\"></stop><stop offset=\"1\" stop-color=\"#7257ef\" stop-opacity=\"0\"></stop></linearGradient></defs>").concat(grid, "<path class=\"chart-area\" d=\"").concat(area, "\"></path><path class=\"chart-line\" d=\"").concat(line, "\"></path>").concat(circles).concat(labels, "</svg>");
    $$Inside(container, '[data-chart-index]').forEach(function (circle) {
        var index = Number(circle.getAttribute('data-chart-index'));
        var point = coords[index];
        circle.addEventListener('mouseenter', function (event) { return showChartTooltip(container, event, "<strong>".concat(point.item.label, "</strong><br>").concat(point.item.value, "\uAC74")); });
        circle.addEventListener('mouseleave', function () { return hideChartTooltip(container); });
        circle.addEventListener('touchstart', function (event) { event.preventDefault(); showChartTooltip(container, event, "<strong>".concat(point.item.label, "</strong><br>").concat(point.item.value, "\uAC74")); }, { passive: false });
    });
}
function renderOutcomeDonut(container, legend, intents) {
    var categories = [
        { key: 'accepted', label: '수락', color: '#7257ef' },
        { key: 'rejected', label: '거절', color: '#e2645a' },
        { key: 'expired', label: '미응답', color: '#dca23c' },
        { key: 'pending', label: '대기', color: '#8b919d' },
        { key: 'cancelled', label: '취소', color: '#c5c9d1' }
    ];
    var values = categories.map(function (item) { return Object.assign({}, item, { value: intents.filter(function (intent) { return intent.status === item.key; }).length }); }).filter(function (item) { return item.value > 0; });
    var total = values.reduce(function (sum, item) { return sum + item.value; }, 0);
    var radius = 66, circumference = 2 * Math.PI * radius;
    var offset = 0;
    var circles = values.map(function (item) {
        var length = total ? item.value / total * circumference : 0;
        var circle = "<circle class=\"donut-segment\" cx=\"95\" cy=\"95\" r=\"".concat(radius, "\" stroke=\"").concat(item.color, "\" stroke-dasharray=\"").concat(length, " ").concat(circumference - length, "\" stroke-dashoffset=\"").concat(-offset, "\" transform=\"rotate(-90 95 95)\"></circle>");
        offset += length;
        return circle;
    }).join('');
    container.innerHTML = "<svg viewBox=\"0 0 190 190\"><circle class=\"donut-track\" cx=\"95\" cy=\"95\" r=\"".concat(radius, "\"></circle>").concat(circles, "<text class=\"donut-center-value\" x=\"95\" y=\"94\">").concat(total, "</text><text class=\"donut-center-label\" x=\"95\" y=\"116\">\uC694\uCCAD</text></svg>");
    legend.innerHTML = (values.length ? values : categories.slice(0, 4).map(function (item) { return Object.assign({}, item, { value: 0 }); })).map(function (item) { return "<div class=\"legend-item\"><span><i class=\"legend-dot\" style=\"background:".concat(item.color, "\"></i>").concat(item.label, "</span><strong>").concat(item.value, "</strong></div>"); }).join('');
}
function renderHourHeatmap(container, items) {
    var values = Array.from({ length: 24 }, function () { return 0; });
    items.forEach(function (item) { var date = new Date(item.at); if (!Number.isNaN(date.getTime()))
        values[date.getHours()] += 1; });
    var max = Math.max.apply(Math, __spreadArray([1], values, false));
    container.innerHTML = values.map(function (value, hour) {
        var level = value === 0 ? 0 : Math.min(4, Math.ceil(value / max * 4));
        return "<div class=\"heat-cell\" data-level=\"".concat(level, "\" title=\"").concat(String(hour).padStart(2, '0'), "\uC2DC \u00B7 ").concat(value, "\uAC74\" aria-label=\"").concat(hour, "\uC2DC ").concat(value, "\uAC74\"><span class=\"heat-hour-label\">").concat(String(hour).padStart(2, '0'), "</span></div>");
    }).join('');
}
function renderPersonTimeline(container, events, intents, history) {
    var rows = [];
    events.forEach(function (event) { return rows.push({ at: event.at, type: event.type, text: event.message || [event.endpoint, event.status, event.cause].filter(Boolean).join(' · ') || '-' }); });
    intents.forEach(function (intent) { return rows.push({ at: intent.createdAt, type: '상담 요청', text: "".concat(intent.customerUsername, " \u2192 ").concat(intent.counselorUsername, " \u00B7 ").concat(intentStatusLabel(intent.status)) }); });
    history.forEach(function (item) { return rows.push({ at: item.at, type: '통화 종료', text: "".concat(item.caller, " \u2192 ").concat(item.connected, " \u00B7 ").concat(item.cause) }); });
    rows.sort(function (a, b) { return new Date(b.at).getTime() - new Date(a.at).getTime(); });
    container.innerHTML = rows.length ? rows.slice(0, 50).map(function (row) { return "<div class=\"timeline-item\"><time>".concat(formatDate(row.at), "</time><i class=\"timeline-marker\"></i><div class=\"timeline-copy\"><strong>").concat(escapeHtml(eventLabel(row.type)), "</strong><p>").concat(escapeHtml(row.text), "</p></div></div>"); }).join('') : '<div class="empty-state">선택한 기간에 활동이 없습니다.</div>';
}
function eventLabel(type) {
    var labels = { MEMBER_LOGIN: '로그인', MEMBER_SIGNUP: '회원가입', CALL_INTENT: '상담 요청', CALL_INTENT_ACCEPTED: '요청 수락', CALL_INTENT_REJECTED: '요청 거절', CALL_INTENT_EXPIRED: '요청 만료', PUSH_SUBSCRIBED: '잠금화면 알림 등록', AGENT_STATUS_CHANGED: '상담 상태 변경', Hangup: '통화 종료', Newchannel: '통화 시작' };
    return labels[type] || type;
}
function intentStatusLabel(status) { return ({ accepted: '수락', rejected: '거절', expired: '미응답', pending: '대기', cancelled: '취소' })[status] || status; }
function formatMilliseconds(value) { var seconds = Math.round(Number(value) / 1000); return seconds < 60 ? "".concat(seconds, "\uCD08") : "".concat(Math.floor(seconds / 60), "\uBD84 ").concat(seconds % 60, "\uCD08"); }
function formatFullDate(value) { if (!value)
    return '-'; return new Intl.DateTimeFormat('ko-KR', { year: 'numeric', month: '2-digit', day: '2-digit' }).format(new Date(value)); }
function formatRelative(value) { if (!value)
    return '기록 없음'; var seconds = Math.max(0, Math.floor((Date.now() - new Date(value).getTime()) / 1000)); if (seconds < 60)
    return '방금 전'; if (seconds < 3600)
    return "".concat(Math.floor(seconds / 60), "\uBD84 \uC804"); if (seconds < 86400)
    return "".concat(Math.floor(seconds / 3600), "\uC2DC\uAC04 \uC804"); return "".concat(Math.floor(seconds / 86400), "\uC77C \uC804"); }
function $$Inside(root, selector) { return Array.prototype.slice.call(root.querySelectorAll(selector)); }
function showChartTooltip(container, event, html) { hideChartTooltip(container); var rect = container.getBoundingClientRect(); var clientX = event.touches && event.touches[0] ? event.touches[0].clientX : event.clientX; var clientY = event.touches && event.touches[0] ? event.touches[0].clientY : event.clientY; var tip = document.createElement('div'); tip.className = 'chart-tooltip'; tip.innerHTML = html; tip.style.left = "".concat(Math.max(65, Math.min(rect.width - 65, clientX - rect.left)), "px"); tip.style.top = "".concat(Math.max(60, clientY - rect.top), "px"); container.appendChild(tip); }
function hideChartTooltip(container) { var existing = container.querySelector('.chart-tooltip'); if (existing && existing.parentNode)
    existing.parentNode.removeChild(existing); }
$('#memberViewerTab').addEventListener('click', function () { adminViewerRole = 'customer'; selectedPersonId = null; renderPeopleViewer(snapshot); });
$('#counselorViewerTab').addEventListener('click', function () { adminViewerRole = 'counselor'; selectedPersonId = null; renderPeopleViewer(snapshot); });
$$('[data-period]').forEach(function (button) { return button.addEventListener('click', function () { analyticsPeriod = Number(button.dataset.period) || 7; renderPeopleViewer(snapshot); }); });
$('#peopleSearch').addEventListener('input', function () { return renderPeopleViewer(snapshot); });
$('#marketRefresh').addEventListener('click', loadSnapshot);
$('#openAdminViewer').addEventListener('click', function () { return setAdminPage('viewer'); });
$('#openAdminOperations').addEventListener('click', function () { return setAdminPage('operations'); });
$('#openAdminOperationsFromViewer').addEventListener('click', function () { return setAdminPage('operations'); });
$('#openAdminViewerFromOperations').addEventListener('click', function () { return setAdminPage('viewer'); });
$('#backAdminPortalViewer').addEventListener('click', function () { return setAdminPage('home'); });
$('#backAdminPortal').addEventListener('click', function () { return setAdminPage('home'); });
function openFreePbx() {
    var opened = window.open(FREEPBX_URL, '_blank', 'noopener,noreferrer');
    if (!opened)
        toast('팝업이 차단됐습니다. 브라우저에서 새 창 열기를 허용해 주세요.');
}
$('#openFreePbx').addEventListener('click', openFreePbx);
$('#openFreePbxOperations').addEventListener('click', openFreePbx);
$('#historyPrev').addEventListener('click', function () { historyPage -= 1; renderHistory(adminHistoryRows); });
$('#historyNext').addEventListener('click', function () { historyPage += 1; renderHistory(adminHistoryRows); });
$('#eventPrev').addEventListener('click', function () { eventPage -= 1; renderEvents(adminEventRows); });
$('#eventNext').addEventListener('click', function () { eventPage += 1; renderEvents(adminEventRows); });
$('#adminRefresh').addEventListener('click', loadSnapshot);
$('#adminViewerRefresh').addEventListener('click', loadSnapshot);
function isIosDevice() {
    return /iPad|iPhone|iPod/.test(navigator.userAgent) || (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1);
}
function isStandaloneMode() {
    return window.matchMedia && window.matchMedia('(display-mode: standalone)').matches || window.navigator.standalone === true;
}
function supportsPush() {
    return hasSecureContext() && 'serviceWorker' in navigator && 'PushManager' in window && 'Notification' in window;
}
function registerServiceWorker() {
    return __awaiter(this, void 0, void 0, function () {
        var error_12;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (!('serviceWorker' in navigator) || !hasSecureContext())
                        return [2 /*return*/, null];
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 4, , 5]);
                    return [4 /*yield*/, navigator.serviceWorker.register('/service-worker.js?v=101', { scope: '/' })];
                case 2:
                    serviceWorkerRegistration = _a.sent();
                    return [4 /*yield*/, navigator.serviceWorker.ready];
                case 3:
                    _a.sent();
                    restorePushToken();
                    if (pushDeviceToken && serviceWorkerRegistration.active) {
                        serviceWorkerRegistration.active.postMessage({ type: 'GGUL_PUSH_TOKEN', deviceToken: pushDeviceToken });
                    }
                    return [2 /*return*/, serviceWorkerRegistration];
                case 4:
                    error_12 = _a.sent();
                    console.warn('GGUL_SERVICE_WORKER_ERROR', error_12);
                    return [2 /*return*/, null];
                case 5: return [2 /*return*/];
            }
        });
    });
}
function restorePushToken() {
    try {
        pushDeviceToken = window.localStorage.getItem('ggulPushDeviceToken') || null;
    }
    catch (error) {
        pushDeviceToken = null;
    }
}
function savePushToken(token) {
    pushDeviceToken = token || null;
    try {
        if (token)
            window.localStorage.setItem('ggulPushDeviceToken', token);
        else
            window.localStorage.removeItem('ggulPushDeviceToken');
    }
    catch (error) { }
    if (serviceWorkerRegistration && serviceWorkerRegistration.active && token) {
        serviceWorkerRegistration.active.postMessage({ type: 'GGUL_PUSH_TOKEN', deviceToken: token });
    }
}
function urlBase64ToUint8Array(base64String) {
    var padding = '='.repeat((4 - base64String.length % 4) % 4);
    var base64 = (base64String + padding).replace(/-/g, '+').replace(/_/g, '/');
    var rawData = window.atob(base64);
    return Uint8Array.from(Array.prototype.map.call(rawData, function (char) { return char.charCodeAt(0); }));
}
function detectNotificationBrowser() {
    var ua = String(navigator.userAgent || '');
    if (/MiuiBrowser/i.test(ua))
        return 'xiaomi';
    if (/EdgA/i.test(ua))
        return 'edge';
    if (/SamsungBrowser/i.test(ua))
        return 'samsung';
    if (/CriOS|Chrome/i.test(ua))
        return 'chrome';
    if (/Safari/i.test(ua) && !/Chrome|CriOS|Android/i.test(ua))
        return 'safari';
    return /Android/i.test(ua) ? 'android' : 'other';
}
function getNotificationPermissionSnapshot() {
    var supported = 'Notification' in window;
    var permission = supported ? Notification.permission : 'unsupported';
    var browser = detectNotificationBrowser();
    var android = /Android/i.test(String(navigator.userAgent || ''));
    return {
        supported: supported,
        permission: permission,
        browser: browser,
        android: android,
        secure: hasSecureContext(),
        standalone: isStandaloneMode(),
        origin: window.location.origin
    };
}
function notificationGuideSteps(permission, stickyState) {
    var snapshot = getNotificationPermissionSnapshot();
    var browser = snapshot.browser;
    var host = window.location.hostname || '현재 온톡 주소';
    if (isIosDevice() && !isStandaloneMode()) {
        return [
            'Safari 아래쪽 공유 버튼을 누릅니다.',
            '“홈 화면에 추가”를 선택해 온톡 앱을 설치합니다.',
            '홈 화면의 온톡 아이콘으로 다시 실행합니다.',
            '상담사 로그인 후 “잠금화면 알림 켜기”를 다시 누릅니다.'
        ];
    }
    if (permission === 'default' && (stickyState === 'prompt-not-shown' || stickyState === 'site-controls-required')) {
        return [
            '자물쇠 → 권한 화면에 “알림”이 없으면 그 화면에서 더 찾지 마세요.',
            'Chrome 오른쪽 위 ⋮ → 설정 → 사이트 설정 → 알림로 이동합니다.',
            '“사이트에서 알림 전송을 요청할 수 있음”을 켭니다.',
            '차단됨 목록에 ' + host + ' 가 있으면 눌러 “허용” 또는 “재설정”을 선택합니다.',
            '휴대폰 설정 → 앱 → Chrome → 알림에서 “알림 허용”도 켭니다.',
            'Chrome으로 돌아와 이 페이지를 새로고침한 뒤 “알림 권한 다시 요청”을 누릅니다.'
        ];
    }
    if (permission === 'default') {
        return [
            '“알림 권한 다시 요청” 버튼을 누릅니다.',
            '허용창이 나타나면 “허용”을 누릅니다.',
            '허용창이 없고 자물쇠 → 권한에도 알림이 없다면 아래 “알림 항목이 안 보임”을 누릅니다.'
        ];
    }
    if (browser === 'xiaomi') {
        return [
            '샤오미 브라우저 메뉴 → 설정 → 사이트 권한 → 알림을 엽니다.',
            host + ' 항목을 허용으로 변경합니다.',
            '휴대폰 설정 → 앱 → 샤오미 브라우저 → 알림에서도 허용합니다.',
            '이 페이지로 돌아와 “설정 완료 후 다시 확인”을 누릅니다.'
        ];
    }
    if (browser === 'chrome' || browser === 'edge' || browser === 'samsung' || browser === 'android') {
        return [
            'Chrome 오른쪽 위 ⋮ → 설정 → 사이트 설정 → 알림로 이동합니다.',
            '“사이트에서 알림 전송을 요청할 수 있음”을 켭니다.',
            '차단됨 목록에 ' + host + ' 가 있으면 눌러 허용합니다.',
            '휴대폰 설정 → 앱 → Chrome → 알림에서도 알림 허용을 켭니다.',
            '온톡으로 돌아와 “설정 완료 후 다시 확인”을 누릅니다.'
        ];
    }
    return [
        '브라우저 설정의 사이트 권한 → 알림을 엽니다.',
        host + ' 사이트와 브라우저 앱 자체의 알림을 모두 허용합니다.',
        '이 페이지로 돌아와 “설정 완료 후 다시 확인”을 누릅니다.'
    ];
}
var notificationGuideStickyState = null;
function closeNotificationGuide() {
    notificationGuideStickyState = null;
    var guide = $('#notificationGuide');
    if (guide)
        guide.classList.add('hidden');
}
function openNotificationGuide(permission, stickyState) {
    var guide = $('#notificationGuide');
    if (!guide)
        return;
    var actualPermission = permission || ('Notification' in window ? Notification.permission : 'unsupported');
    if (stickyState !== undefined)
        notificationGuideStickyState = stickyState;
    var effectiveState = notificationGuideStickyState;
    var browser = detectNotificationBrowser();
    var browserLabels = { xiaomi: '샤오미 브라우저', chrome: 'Chrome', edge: 'Edge', samsung: '삼성 인터넷', safari: 'Safari', android: '안드로이드 브라우저', other: '현재 브라우저' };
    var intro = $('#notificationGuideIntro');
    var state = $('#notificationGuideState');
    var steps = $('#notificationGuideSteps');
    var primary = $('#notificationGuidePrimary');
    var recheck = $('#notificationGuideRecheck');
    intro.textContent = (browserLabels[browser] || '현재 브라우저') + '에서 상담 요청 알림을 받기 위한 설정입니다. 현재 사이트: ' + window.location.origin;
    state.className = 'permission-state-card';
    if (actualPermission === 'granted') {
        notificationGuideStickyState = null;
        state.classList.add('ready');
        state.innerHTML = '<strong>브라우저 알림 권한: 허용됨</strong>이제 이 기기를 상담 알림 수신 기기로 등록합니다.';
    }
    else if (effectiveState === 'prompt-waiting') {
        state.classList.add('waiting');
        state.innerHTML = '<strong>Chrome 알림 권한 선택을 기다리는 중입니다</strong>최신 Android Chrome은 큰 팝업 대신 주소창 왼쪽의 작은 알림·사이트 컨트롤 표시로 요청할 수 있습니다. 주소창 왼쪽 표시를 눌러 “허용”을 선택하세요. 이 화면은 권한 변경을 자동으로 감지합니다.';
    }
    else if (effectiveState === 'prompt-not-shown' || effectiveState === 'site-controls-required') {
        state.classList.add('blocked');
        state.innerHTML = '<strong>자물쇠 → 권한에 알림 항목이 없음</strong>현재 사이트 권한 화면에서는 해결할 수 없습니다. 아래 그림대로 Chrome 전체 설정과 휴대폰의 Chrome 앱 알림을 먼저 켠 뒤 다시 요청해야 합니다.';
    }
    else if (effectiveState === 'request-error') {
        state.classList.add('blocked');
        state.innerHTML = '<strong>알림 권한 요청을 실행하지 못했습니다</strong>현재 탭의 Chrome 사이트 설정을 직접 열어 알림을 허용한 뒤 다시 확인해 주세요.';
    }
    else if (actualPermission === 'denied') {
        state.classList.add('blocked');
        state.innerHTML = '<strong>브라우저 알림 권한: 차단됨</strong>브라우저는 차단된 권한 요청창을 다시 띄우지 않습니다. 아래 순서대로 직접 허용해야 합니다.';
    }
    else if (actualPermission === 'unsupported') {
        state.classList.add('blocked');
        state.innerHTML = '<strong>브라우저 알림: 지원되지 않음</strong>지원되는 브라우저 또는 홈 화면에 설치한 웹 앱으로 다시 열어야 합니다.';
    }
    else {
        state.innerHTML = '<strong>브라우저 알림 권한: 아직 선택하지 않음</strong>다음 단계에서 휴대폰이 띄우는 허용창을 확인하세요.';
    }
    steps.innerHTML = '';
    notificationGuideSteps(actualPermission, effectiveState).forEach(function (step) {
        var item = document.createElement('li');
        item.textContent = step;
        steps.appendChild(item);
    });
    var promptActive = effectiveState === 'prompt-waiting' || effectiveState === 'site-controls-required' || effectiveState === 'prompt-not-shown' || effectiveState === 'request-error';
    primary.classList.toggle('hidden', actualPermission !== 'default' || promptActive);
    recheck.classList.toggle('hidden', actualPermission === 'unsupported');
    guide.classList.remove('hidden');
}
function continuePushRegistrationAfterPermission() {
    return __awaiter(this, void 0, void 0, function () {
        var registration, _a, config, subscription, stored;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    _a = serviceWorkerRegistration;
                    if (_a) return [3 /*break*/, 2];
                    return [4 /*yield*/, registerServiceWorker()];
                case 1:
                    _a = (_b.sent());
                    _b.label = 2;
                case 2:
                    registration = _a;
                    if (!registration)
                        throw new Error('서비스 워커를 등록하지 못했습니다. HTTPS 주소와 브라우저 설정을 확인하세요.');
                    return [4 /*yield*/, api('/api/push/config')];
                case 3:
                    config = _b.sent();
                    return [4 /*yield*/, registration.pushManager.getSubscription()];
                case 4:
                    subscription = _b.sent();
                    if (!!subscription) return [3 /*break*/, 6];
                    return [4 /*yield*/, registration.pushManager.subscribe({ userVisibleOnly: true, applicationServerKey: urlBase64ToUint8Array(config.publicKey) })];
                case 5:
                    subscription = _b.sent();
                    _b.label = 6;
                case 6: return [4 /*yield*/, api('/api/push/subscribe', { method: 'POST', body: JSON.stringify({ subscription: subscription.toJSON(), platform: navigator.platform || '' }) })];
                case 7:
                    stored = _b.sent();
                    savePushToken(stored.deviceToken);
                    closeNotificationGuide();
                    toast('잠금화면 상담 알림이 켜졌습니다.');
                    return [4 /*yield*/, loadSnapshot()];
                case 8:
                    _b.sent();
                    return [2 /*return*/];
            }
        });
    });
}
function enablePushNotifications() {
    return __awaiter(this, void 0, void 0, function () {
        var permission, button, error_13;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (auth.role !== 'counselor')
                        return [2 /*return*/];
                    if (!supportsPush()) {
                        toast('이 브라우저는 잠금화면 웹 알림을 지원하지 않습니다. Chrome 또는 홈 화면에 설치한 Safari 앱을 사용하세요.');
                        renderPushStatus();
                        return [2 /*return*/];
                    }
                    if (isIosDevice() && !isStandaloneMode()) {
                        $('#iosInstallGuide').classList.remove('hidden');
                        toast('아이폰은 먼저 홈 화면에 추가한 뒤 설치된 온톡 앱에서 알림을 켜야 합니다.');
                        return [2 /*return*/];
                    }
                    permission = Notification.permission;
                    if (permission === 'denied') {
                        openNotificationGuide('denied');
                        return [2 /*return*/];
                    }
                    if (permission === 'default') {
                        openNotificationGuide('default');
                        return [2 /*return*/];
                    }
                    button = $('#enablePushButton');
                    setBusy(button, true, '알림 등록 중…');
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 3, 4, 5]);
                    return [4 /*yield*/, continuePushRegistrationAfterPermission()];
                case 2:
                    _a.sent();
                    return [3 /*break*/, 5];
                case 3:
                    error_13 = _a.sent();
                    toast(error_13.message);
                    openNotificationGuide(Notification.permission);
                    return [3 /*break*/, 5];
                case 4:
                    setBusy(button, false);
                    renderPushStatus();
                    return [7 /*endfinally*/];
                case 5: return [2 /*return*/];
            }
        });
    });
}
function disablePushNotifications() {
    return __awaiter(this, void 0, void 0, function () {
        var subscription, _a, error_14;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    if (!!serviceWorkerRegistration) return [3 /*break*/, 2];
                    return [4 /*yield*/, registerServiceWorker()];
                case 1:
                    serviceWorkerRegistration = _b.sent();
                    _b.label = 2;
                case 2:
                    _b.trys.push([2, 9, , 10]);
                    _a = serviceWorkerRegistration;
                    if (!_a) return [3 /*break*/, 4];
                    return [4 /*yield*/, serviceWorkerRegistration.pushManager.getSubscription()];
                case 3:
                    _a = (_b.sent());
                    _b.label = 4;
                case 4:
                    subscription = _a;
                    return [4 /*yield*/, api('/api/push/unsubscribe', { method: 'POST', body: JSON.stringify({ endpoint: subscription && subscription.endpoint, deviceToken: pushDeviceToken }) }).catch(function () { })];
                case 5:
                    _b.sent();
                    if (!subscription) return [3 /*break*/, 7];
                    return [4 /*yield*/, subscription.unsubscribe()];
                case 6:
                    _b.sent();
                    _b.label = 7;
                case 7:
                    savePushToken(null);
                    toast('잠금화면 상담 알림을 껐습니다.');
                    return [4 /*yield*/, loadSnapshot()];
                case 8:
                    _b.sent();
                    return [3 /*break*/, 10];
                case 9:
                    error_14 = _b.sent();
                    toast(error_14.message);
                    return [3 /*break*/, 10];
                case 10: return [2 /*return*/];
            }
        });
    });
}
function renderPushStatus() {
    var badge = $('#pushStatusBadge');
    if (!badge || auth.role !== 'counselor')
        return;
    var title = $('#pushStatusTitle');
    var detail = $('#pushStatusDetail');
    var button = $('#enablePushButton');
    var devices = snapshot && snapshot.push && snapshot.push.devices || [];
    var supported = supportsPush();
    var notificationPermission = 'Notification' in window ? Notification.permission : 'unsupported';
    var enabled = Boolean(pushDeviceToken && notificationPermission === 'granted' && devices.length);
    $('#iosInstallGuide').classList.toggle('hidden', !(isIosDevice() && !isStandaloneMode()));
    if (enabled) {
        badge.textContent = '수신 준비';
        badge.className = 'mini-badge available';
        title.textContent = '잠금화면 상담 알림이 켜져 있습니다';
        detail.textContent = "\uB4F1\uB85D \uAE30\uAE30 ".concat(devices.length, "\uB300 \u00B7 \uD654\uBA74\uC774 \uAEBC\uC838 \uC788\uC5B4\uB3C4 \uC2DC\uC2A4\uD15C \uC54C\uB9BC\uC5D0\uC11C \uD1B5\uD654 \uD654\uBA74\uC73C\uB85C \uC774\uB3D9\uD569\uB2C8\uB2E4.");
        button.textContent = '잠금화면 알림 끄기';
        button.dataset.mode = 'disable';
    }
    else if (!supported) {
        badge.textContent = '미지원';
        badge.className = 'mini-badge offline';
        title.textContent = '현재 브라우저는 Web Push를 지원하지 않습니다';
        detail.textContent = 'Android Chrome 또는 홈 화면에 설치한 iPhone Safari 웹 앱에서 사용하세요.';
        button.textContent = '지원 환경 확인';
        button.dataset.mode = 'unsupported';
    }
    else if (notificationPermission === 'denied') {
        badge.textContent = '권한 차단';
        badge.className = 'mini-badge offline';
        title.textContent = '브라우저에서 알림 권한이 차단됐습니다';
        detail.textContent = '주소창의 사이트 설정에서 알림을 허용한 뒤 다시 눌러 주세요.';
        button.textContent = '다시 확인';
        button.dataset.mode = 'enable';
    }
    else {
        badge.textContent = '설정 전';
        badge.className = 'mini-badge';
        title.textContent = '잠금화면 알림을 켜 주세요';
        detail.textContent = '상담 요청이 오면 시스템 알림에서 통화 받기 또는 거절을 선택할 수 있습니다.';
        button.textContent = '잠금화면 알림 켜기';
        button.dataset.mode = 'enable';
    }
    var installButton = $('#installPwaButton');
    installButton.classList.toggle('hidden', !deferredInstallPrompt || isStandaloneMode());
}
$('#enablePushButton').addEventListener('click', function () {
    if ($('#enablePushButton').dataset.mode === 'disable')
        disablePushNotifications();
    else
        enablePushNotifications();
});
$('#notificationGuideClose').addEventListener('click', closeNotificationGuide);
Array.prototype.forEach.call(document.querySelectorAll('[data-close-permission-guide]'), function (element) { return element.addEventListener('click', closeNotificationGuide); });
$('#notificationGuidePrimary').addEventListener('click', function () {
    var button = $('#notificationGuidePrimary');
    var permissionRequest;
    try {
        // Chrome must receive the permission request directly inside the user's click handler.
        permissionRequest = Notification.requestPermission();
    }
    catch (error) {
        notificationGuideStickyState = 'request-error';
        openNotificationGuide('Notification' in window ? Notification.permission : 'unsupported', 'request-error');
        return;
    }
    setBusy(button, true, '알림 권한 요청 중…');
    notificationGuideStickyState = 'prompt-waiting';
    openNotificationGuide('default', 'prompt-waiting');
    Promise.resolve(permissionRequest).then(function (permission) {
        if (permission === 'granted') {
            notificationGuideStickyState = null;
            return continuePushRegistrationAfterPermission();
        }
        if (permission === 'default') {
            notificationGuideStickyState = 'prompt-not-shown';
            openNotificationGuide('default', 'prompt-not-shown');
            return;
        }
        openNotificationGuide(permission, null);
    }).catch(function (error) {
        notificationGuideStickyState = 'request-error';
        openNotificationGuide('Notification' in window ? Notification.permission : 'unsupported', 'request-error');
        toast(error && error.message ? error.message : '알림 권한 요청에 실패했습니다.');
    }).then(function () {
        setBusy(button, false);
        renderPushStatus();
    });
});
$('#notificationGuideMissing').addEventListener('click', function () {
    notificationGuideStickyState = 'prompt-not-shown';
    openNotificationGuide('Notification' in window ? Notification.permission : 'unsupported', 'prompt-not-shown');
});
$('#notificationGuideRecheck').addEventListener('click', function () { return __awaiter(_this, void 0, void 0, function () {
    var permission, error_15;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                permission = 'Notification' in window ? Notification.permission : 'unsupported';
                if (!(permission === 'granted')) return [3 /*break*/, 5];
                _a.label = 1;
            case 1:
                _a.trys.push([1, 3, , 4]);
                return [4 /*yield*/, continuePushRegistrationAfterPermission()];
            case 2:
                _a.sent();
                return [3 /*break*/, 4];
            case 3:
                error_15 = _a.sent();
                toast(error_15.message);
                return [3 /*break*/, 4];
            case 4: return [3 /*break*/, 6];
            case 5:
                if (permission === 'default')
                    openNotificationGuide(permission, notificationGuideStickyState || 'site-controls-required');
                else
                    openNotificationGuide(permission, null);
                _a.label = 6;
            case 6:
                renderPushStatus();
                return [2 /*return*/];
        }
    });
}); });
function watchNotificationPermissionChanges() {
    if (!navigator.permissions || !navigator.permissions.query)
        return;
    try {
        navigator.permissions.query({ name: 'notifications' }).then(function (permissionStatus) {
            permissionStatus.onchange = function () {
                var permission = 'Notification' in window ? Notification.permission : permissionStatus.state;
                if (permission === 'granted') {
                    notificationGuideStickyState = null;
                    continuePushRegistrationAfterPermission().catch(function (error) { return toast(error.message); });
                    return;
                }
                if (!$('#notificationGuide').classList.contains('hidden'))
                    openNotificationGuide(permission, notificationGuideStickyState);
                renderPushStatus();
            };
        }).catch(function () { });
    }
    catch (error) { }
}
watchNotificationPermissionChanges();
window.addEventListener('focus', function () {
    if ($('#notificationGuide').classList.contains('hidden'))
        return;
    var permission = 'Notification' in window ? Notification.permission : 'unsupported';
    if (permission === 'granted') {
        notificationGuideStickyState = null;
        continuePushRegistrationAfterPermission().catch(function (error) { return toast(error.message); });
        return;
    }
    openNotificationGuide(permission, notificationGuideStickyState);
});
document.addEventListener('visibilitychange', function () {
    if (document.visibilityState !== 'visible' || $('#notificationGuide').classList.contains('hidden'))
        return;
    var permission = 'Notification' in window ? Notification.permission : 'unsupported';
    if (permission === 'granted') {
        notificationGuideStickyState = null;
        continuePushRegistrationAfterPermission().catch(function (error) { return toast(error.message); });
        return;
    }
    openNotificationGuide(permission, notificationGuideStickyState);
});
window.addEventListener('beforeinstallprompt', function (event) {
    event.preventDefault();
    deferredInstallPrompt = event;
    renderPushStatus();
});
$('#installPwaButton').addEventListener('click', function () { return __awaiter(_this, void 0, void 0, function () {
    var error_16;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (!deferredInstallPrompt)
                    return [2 /*return*/];
                deferredInstallPrompt.prompt();
                _a.label = 1;
            case 1:
                _a.trys.push([1, 3, , 4]);
                return [4 /*yield*/, deferredInstallPrompt.userChoice];
            case 2:
                _a.sent();
                return [3 /*break*/, 4];
            case 3:
                error_16 = _a.sent();
                return [3 /*break*/, 4];
            case 4:
                deferredInstallPrompt = null;
                renderPushStatus();
                return [2 /*return*/];
        }
    });
}); });
window.addEventListener('appinstalled', function () { deferredInstallPrompt = null; renderPushStatus(); toast('온톡 상담사 앱이 홈 화면에 설치됐습니다.'); });
function readQueryValue(name) {
    var query = String(window.location.search || '').replace(/^\?/, '').split('&');
    for (var index = 0; index < query.length; index += 1) {
        var pair = query[index].split('=');
        if (decodeURIComponent(pair[0] || '') === name)
            return decodeURIComponent((pair.slice(1).join('=') || '').replace(/\+/g, ' '));
    }
    return null;
}
function queryIntentAction() {
    var intentId = readQueryValue('intent');
    var action = readQueryValue('action');
    if (intentId && action === 'accept')
        pendingActionIntentId = intentId;
}
queryIntentAction();
function handlePendingActionIntent() {
    return __awaiter(this, void 0, void 0, function () {
        var intentId, error_17;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (auth.role !== 'counselor' || !pendingActionIntentId || acceptedActionIntentId === pendingActionIntentId)
                        return [2 /*return*/];
                    intentId = pendingActionIntentId;
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 5, , 6]);
                    return [4 /*yield*/, phone.waitUntilRegistered(15000)];
                case 2:
                    _a.sent();
                    return [4 /*yield*/, api("/api/call-intents/".concat(encodeURIComponent(intentId), "/accept"), { method: 'POST', body: '{}' })];
                case 3:
                    _a.sent();
                    acceptedActionIntentId = intentId;
                    pendingActionIntentId = null;
                    history.replaceState({}, document.title, '/');
                    toast('상담 요청을 수락했습니다. 고객 통화를 연결합니다.');
                    return [4 /*yield*/, loadSnapshot()];
                case 4:
                    _a.sent();
                    return [3 /*break*/, 6];
                case 5:
                    error_17 = _a.sent();
                    if (error_17.code === 'CALL_INTENT_NOT_FOUND') {
                        pendingActionIntentId = null;
                        history.replaceState({}, document.title, '/');
                        toast('이미 처리됐거나 만료된 상담 요청입니다.');
                    }
                    else {
                        toast(error_17.message);
                    }
                    return [3 /*break*/, 6];
                case 6: return [2 /*return*/];
            }
        });
    });
}
if ('serviceWorker' in navigator) {
    navigator.serviceWorker.addEventListener('message', function (event) {
        var data = event.data || {};
        if (data.type === 'GGUL_ACCEPT_INTENT' && data.intentId) {
            pendingActionIntentId = data.intentId;
            handlePendingActionIntent();
        }
    });
}
var WebPhone = (function () {
    function WebPhone() {
        this.ua = null;
        this.config = null;
        this.session = null;
        this.registered = false;
        this.connecting = false;
        this.confirmed = false;
        this.peerName = '';
        this.startedAt = null;
        this.statusMessage = '';
        this.remoteStream = null;
        this.remoteMediaTimer = null;
        this.boundPeerConnections = [];
        this.audioPlaybackBlocked = false;
    }
    WebPhone.prototype.start = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _a, socket, error_18;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        if (auth.role === 'admin')
                            return [2 /*return*/];
                        if (!hasSecureContext()) {
                            this.statusMessage = 'HTTPS 주소로 접속해야 웹 통화를 사용할 수 있습니다.';
                            this.render();
                            return [2 /*return*/];
                        }
                        if (!window.JsSIP) {
                            this.statusMessage = '웹 통화 모듈을 불러오지 못했습니다. 네트워크를 확인하세요.';
                            this.render();
                            return [2 /*return*/];
                        }
                        this.stop();
                        this.connecting = true;
                        this.statusMessage = 'Asterisk 내선에 자동 등록 중입니다.';
                        this.render();
                        _b.label = 1;
                    case 1:
                        _b.trys.push([1, 3, , 4]);
                        _a = this;
                        return [4 /*yield*/, api('/api/phone/config')];
                    case 2:
                        _a.config = _b.sent();
                        socket = new window.JsSIP.WebSocketInterface(this.config.websocketUrl);
                        this.ua = new window.JsSIP.UA({
                            sockets: [socket], uri: this.config.sipUri, password: this.config.sipSecret,
                            register: true, register_expires: 120, session_timers: false,
                            display_name: this.config.username
                        });
                        this.bindUa();
                        this.ua.start();
                        return [3 /*break*/, 4];
                    case 3:
                        error_18 = _b.sent();
                        this.connecting = false;
                        this.statusMessage = error_18.message;
                        this.render();
                        return [3 /*break*/, 4];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    WebPhone.prototype.restart = function () {
        return __awaiter(this, void 0, void 0, function () { return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    this.stop();
                    return [4 /*yield*/, this.start()];
                case 1:
                    _a.sent();
                    return [2 /*return*/];
            }
        }); });
    };
    WebPhone.prototype.waitUntilRegistered = function (timeoutMs) {
        var _this = this;
        if (timeoutMs === void 0) { timeoutMs = 15000; }
        if (this.registered)
            return Promise.resolve(true);
        return new Promise(function (resolve, reject) {
            var started = Date.now();
            var timer = setInterval(function () {
                if (_this.registered) {
                    clearInterval(timer);
                    resolve(true);
                    return;
                }
                if (Date.now() - started >= timeoutMs) {
                    clearInterval(timer);
                    reject(new Error('웹 통화 단말 연결 시간이 초과됐습니다. 통화 단말 다시 연결을 눌러 주세요.'));
                }
            }, 250);
        });
    };
    WebPhone.prototype.bindUa = function () {
        var _this = this;
        this.ua.on('connected', function () { _this.connecting = true; _this.statusMessage = '통화 서버 연결됨 · 내선 등록 중'; _this.render(); });
        this.ua.on('disconnected', function () { _this.registered = false; _this.connecting = false; _this.statusMessage = '통화 서버 연결이 끊겼습니다.'; _this.render(); });
        this.ua.on('registered', function () {
            _this.registered = true;
            _this.connecting = false;
            _this.statusMessage = '웹 통화 준비 완료';
            _this.render();
            if (auth.role === 'counselor') {
                renderPushStatus();
                handlePendingActionIntent();
            }
        });
        this.ua.on('unregistered', function () { _this.registered = false; _this.connecting = false; _this.statusMessage = '내선 등록이 해제됐습니다.'; _this.render(); });
        this.ua.on('registrationFailed', function (event) {
            _this.registered = false;
            _this.connecting = false;
            _this.statusMessage = "\uB0B4\uC120 \uB4F1\uB85D \uC2E4\uD328: ".concat(event.cause || '원인 미상');
            _this.render();
        });
        this.ua.on('newRTCSession', function (data) { return _this.handleSession(data.session, data.originator); });
    };
    WebPhone.prototype.handleSession = function (session, originator) {
        var _this = this;
        if (this.session && this.session !== session) {
            try {
                session.terminate({ status_code: 486, reason_phrase: 'Busy Here' });
            }
            catch (error) { }
            return;
        }
        this.session = session;
        this.confirmed = false;
        this.startedAt = Date.now();
        var remoteIdentity = session.remote_identity;
        var display = remoteIdentity && remoteIdentity.display_name || remoteIdentity && remoteIdentity.uri && remoteIdentity.uri.user || '상담 상대';
        this.peerName = resolvePeerName(remoteIdentity && remoteIdentity.uri && remoteIdentity.uri.user, display);
        this.attachRemoteMedia(session);
        var incoming = originator === 'remote';
        session.on('progress', function () { showCallLayer(incoming ? 'incoming' : 'outgoing', _this.peerName, '연결 중입니다.'); _this.render(); });
        session.on('accepted', function () {
            _this.confirmed = true;
            _this.startedAt = Date.now();
            stopRinging();
            showCallLayer('active', _this.peerName, '음성 상담이 연결됐습니다.');
            _this.onMediaConnected();
            _this.render();
        });
        session.on('confirmed', function () {
            _this.confirmed = true;
            if (!_this.startedAt)
                _this.startedAt = Date.now();
            stopRinging();
            showCallLayer('active', _this.peerName, '음성 상담이 연결됐습니다.');
            _this.onMediaConnected();
            _this.render();
        });
        session.on('ended', function (data) { return _this.finish(data && data.cause || '정상 종료'); });
        session.on('failed', function (data) { return _this.finish(data && data.cause || '통화 연결 실패'); });
        session.on('muted', function () { $('#muteCall').textContent = '음소거 해제'; });
        session.on('unmuted', function () { $('#muteCall').textContent = '음소거'; });
        if (incoming) {
            startRinging();
            showCallLayer('incoming', this.peerName, '상담 요청이 도착했습니다.');
            showIncomingNotification(this.peerName);
            if (acceptedActionIntentId) {
                setTimeout(function () {
                    if (_this.session === session && !_this.confirmed)
                        _this.answer();
                    acceptedActionIntentId = null;
                }, 350);
            }
        }
        else {
            showCallLayer('outgoing', this.peerName, '상담사에게 연결하고 있습니다.');
        }
        this.render();
    };
    WebPhone.prototype.primeRemoteAudio = function () {
        var _this = this;
        activateAudio();
        var audio = $('#remoteAudio');
        if (!audio)
            return;
        audio.autoplay = true;
        audio.muted = false;
        audio.volume = 1;
        audio.setAttribute('playsinline', '');
        audio.setAttribute('webkit-playsinline', '');
        if (audio.srcObject) {
            this.playRemoteAudio(true);
            return;
        }
        if (audio.getAttribute('src'))
            return;
        audio.src = 'data:audio/wav;base64,UklGRiYAAABXQVZFZm10IBAAAAABAAEAQB8AAIA+AAACABAAZGF0YQIAAAAAAA==';
        var promise = audio.play();
        if (promise && promise.then) {
            promise.then(function () {
                if (audio.srcObject) {
                    _this.playRemoteAudio(true);
                    return;
                }
                audio.pause();
                audio.removeAttribute('src');
                try {
                    audio.load();
                }
                catch (error) { }
            }).catch(function () {
                if (!audio.srcObject) {
                    audio.removeAttribute('src');
                    try {
                        audio.load();
                    }
                    catch (error) { }
                }
            });
        }
    };
    WebPhone.prototype.showAudioPlaybackButton = function (show, message) {
        var button = $('#resumeAudioCall');
        if (button)
            button.classList.toggle('hidden', !show);
        this.audioPlaybackBlocked = Boolean(show);
        if (show && message && this.confirmed)
            $('#callMessage').textContent = message;
    };
    WebPhone.prototype.playRemoteAudio = function (userInitiated) {
        var _this = this;
        if (userInitiated === void 0) { userInitiated = false; }
        var audio = $('#remoteAudio');
        if (!audio || !audio.srcObject)
            return Promise.resolve(false);
        audio.autoplay = true;
        audio.muted = false;
        audio.volume = 1;
        audio.setAttribute('playsinline', '');
        audio.setAttribute('webkit-playsinline', '');
        var promise;
        try {
            promise = audio.play();
        }
        catch (error) {
            this.showAudioPlaybackButton(true, '통화는 연결됐지만 브라우저가 상대 음성 재생을 막았습니다. 소리 켜기를 눌러 주세요.');
            return Promise.resolve(false);
        }
        if (!promise || !promise.then) {
            this.showAudioPlaybackButton(false);
            return Promise.resolve(true);
        }
        return promise.then(function () {
            _this.showAudioPlaybackButton(false);
            return true;
        }).catch(function (error) {
            _this.showAudioPlaybackButton(true, userInitiated
                ? '상대 음성을 재생하지 못했습니다. 휴대폰 미디어 음량과 브라우저 권한을 확인해 주세요.'
                : '통화는 연결됐지만 브라우저가 상대 음성 재생을 막았습니다. 소리 켜기를 눌러 주세요.');
            return false;
        });
    };
    WebPhone.prototype.attachRemoteStream = function (stream, track) {
        var selected = stream;
        if (!selected && track && window.MediaStream)
            selected = new window.MediaStream([track]);
        if (!selected)
            return;
        if (track && selected.getTracks && !selected.getTracks().some(function (item) { return item === track; }) && selected.addTrack) {
            try {
                selected.addTrack(track);
            }
            catch (error) { }
        }
        this.remoteStream = selected;
        var audio = $('#remoteAudio');
        if (!audio)
            return;
        if (audio.srcObject !== selected) {
            try {
                audio.pause();
            }
            catch (error) { }
            audio.removeAttribute('src');
            audio.srcObject = selected;
        }
        this.playRemoteAudio(false);
    };
    WebPhone.prototype.syncRemoteReceivers = function (peerConnection) {
        var pc = peerConnection || this.session && this.session.connection;
        if (!pc || !pc.getReceivers || !window.MediaStream)
            return;
        var tracks = pc.getReceivers()
            .map(function (receiver) { return receiver && receiver.track; })
            .filter(function (track) { return track && track.kind === 'audio' && track.readyState !== 'ended'; });
        if (!tracks.length)
            return;
        var stream = this.remoteStream;
        if (!stream || !stream.getTracks)
            stream = new window.MediaStream();
        tracks.forEach(function (track) {
            if (!stream.getTracks().some(function (item) { return item === track; })) {
                try {
                    stream.addTrack(track);
                }
                catch (error) { }
            }
        });
        this.attachRemoteStream(stream);
    };
    WebPhone.prototype.bindPeerConnection = function (peerConnection) {
        var _this = this;
        var pc = peerConnection;
        if (!pc || this.boundPeerConnections.indexOf(pc) >= 0)
            return;
        this.boundPeerConnections.push(pc);
        if (pc.addEventListener) {
            pc.addEventListener('track', function (event) {
                var stream = event.streams && event.streams.length ? event.streams[0] : null;
                _this.attachRemoteStream(stream, event.track);
            });
            pc.addEventListener('addstream', function (event) { return _this.attachRemoteStream(event.stream); });
            pc.addEventListener('connectionstatechange', function () { return _this.syncRemoteReceivers(pc); });
            pc.addEventListener('iceconnectionstatechange', function () { return _this.syncRemoteReceivers(pc); });
        }
        else {
            pc.ontrack = function (event) {
                var stream = event.streams && event.streams.length ? event.streams[0] : null;
                _this.attachRemoteStream(stream, event.track);
            };
        }
        this.syncRemoteReceivers(pc);
    };
    WebPhone.prototype.attachRemoteMedia = function (session) {
        var _this = this;
        this.clearRemoteMediaWatch();
        this.remoteStream = null;
        this.boundPeerConnections = [];
        this.audioPlaybackBlocked = false;
        this.showAudioPlaybackButton(false);
        if (session && session.on) {
            session.on('peerconnection', function (data) {
                _this.bindPeerConnection(data && data.peerconnection || session.connection);
            });
        }
        this.bindPeerConnection(session && session.connection);
        var started = Date.now();
        this.remoteMediaTimer = setInterval(function () {
            if (!_this.session || _this.session !== session || Date.now() - started > 20000) {
                _this.clearRemoteMediaWatch();
                return;
            }
            _this.bindPeerConnection(session.connection);
            _this.syncRemoteReceivers(session.connection);
        }, 250);
    };
    WebPhone.prototype.clearRemoteMediaWatch = function () {
        if (this.remoteMediaTimer)
            clearInterval(this.remoteMediaTimer);
        this.remoteMediaTimer = null;
    };
    WebPhone.prototype.onMediaConnected = function () {
        var _this = this;
        this.bindPeerConnection(this.session && this.session.connection);
        this.syncRemoteReceivers(this.session && this.session.connection);
        setTimeout(function () {
            if (!_this.session)
                return;
            _this.bindPeerConnection(_this.session.connection);
            _this.syncRemoteReceivers(_this.session.connection);
            _this.playRemoteAudio(false);
        }, 250);
        setTimeout(function () {
            if (!_this.session)
                return;
            _this.syncRemoteReceivers(_this.session.connection);
            _this.playRemoteAudio(false);
        }, 1200);
    };
    WebPhone.prototype.resumeRemoteAudio = function () {
        this.primeRemoteAudio();
        this.bindPeerConnection(this.session && this.session.connection);
        this.syncRemoteReceivers(this.session && this.session.connection);
        this.playRemoteAudio(true);
    };
    WebPhone.prototype.call = function (uri, name) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                if (!this.ua || !this.registered)
                    throw new Error('웹 통화 단말이 아직 준비되지 않았습니다.');
                this.peerName = name;
                this.primeRemoteAudio();
                this.ua.call(uri, {
                    mediaConstraints: { audio: true, video: false },
                    pcConfig: { iceServers: this.config.iceServers || [] },
                    rtcOfferConstraints: { offerToReceiveAudio: true, offerToReceiveVideo: false }
                });
                return [2 /*return*/];
            });
        });
    };
    WebPhone.prototype.answer = function () {
        if (!this.session || this.confirmed)
            return;
        this.primeRemoteAudio();
        try {
            this.session.answer({
                mediaConstraints: { audio: true, video: false },
                pcConfig: { iceServers: this.config && this.config.iceServers || [] }
            });
        }
        catch (error) {
            toast(error.message);
        }
    };
    WebPhone.prototype.reject = function () {
        if (!this.session)
            return;
        try {
            this.session.terminate({ status_code: 486, reason_phrase: 'Busy Here' });
        }
        catch (error) {
            this.finish('통화 거절');
        }
    };
    WebPhone.prototype.hangup = function () {
        if (!this.session)
            return;
        try {
            this.session.terminate();
        }
        catch (error) {
            this.finish('통화 종료');
        }
    };
    WebPhone.prototype.toggleMute = function () {
        if (!this.session)
            return;
        var muted = this.session.isMuted ? this.session.isMuted().audio : false;
        if (muted)
            this.session.unmute({ audio: true });
        else
            this.session.mute({ audio: true });
    };
    WebPhone.prototype.finish = function (cause) {
        stopRinging();
        this.clearRemoteMediaWatch();
        var message = String(cause || '통화 종료').replace(/_/g, ' ');
        this.session = null;
        this.confirmed = false;
        this.startedAt = null;
        this.peerName = '';
        this.remoteStream = null;
        this.boundPeerConnections = [];
        this.showAudioPlaybackButton(false);
        var remoteAudio = $('#remoteAudio');
        if (remoteAudio) {
            try {
                remoteAudio.pause();
            }
            catch (error) { }
            remoteAudio.srcObject = null;
            remoteAudio.removeAttribute('src');
        }
        showCallEnded(message);
        this.render();
        setTimeout(loadSnapshot, 300);
    };
    WebPhone.prototype.elapsedSeconds = function () { return this.startedAt ? Math.max(0, Math.floor((Date.now() - this.startedAt) / 1000)) : 0; };
    WebPhone.prototype.stop = function () {
        stopRinging();
        this.clearRemoteMediaWatch();
        if (this.session) {
            try {
                this.session.terminate();
            }
            catch (error) { }
        }
        if (this.ua) {
            try {
                this.ua.stop();
            }
            catch (error) { }
        }
        this.ua = null;
        this.session = null;
        this.config = null;
        this.registered = false;
        this.connecting = false;
        this.confirmed = false;
        this.peerName = '';
        this.startedAt = null;
        this.statusMessage = '';
        this.remoteStream = null;
        this.boundPeerConnections = [];
        this.audioPlaybackBlocked = false;
        this.showAudioPlaybackButton(false);
        var remoteAudio = $('#remoteAudio');
        if (remoteAudio) {
            try {
                remoteAudio.pause();
            }
            catch (error) { }
            remoteAudio.srcObject = null;
            remoteAudio.removeAttribute('src');
        }
        this.render();
    };
    WebPhone.prototype.render = function () {
        if (auth.role === 'customer')
            renderCustomerPhoneNotice();
        if (auth.role === 'counselor') {
            renderPhoneState();
            renderDeskCall();
        }
        if (snapshot && auth.role === 'customer')
            renderMarketplace(snapshot);
    };
    return WebPhone;
}());
var phone = new WebPhone();
function resolvePeerName(extension, fallback) {
    var agent = snapshot && snapshot.agents ? snapshot.agents.find(function (item) { return item.id === String(extension); }) : null;
    return agent && agent.name || fallback || "\uB0B4\uC120 ".concat(extension);
}
function showCallLayer(mode, peer, message) {
    $('#callLayer').classList.remove('hidden');
    $('#callPeer').textContent = peer || '상담 상대';
    $('#callAvatar').textContent = String(peer || '꿀').trim().slice(0, 1);
    $('#callMessage').textContent = message;
    $('#callDuration').classList.toggle('hidden', mode !== 'active');
    $('#incomingActions').classList.toggle('hidden', mode !== 'incoming');
    $('#waitingActions').classList.toggle('hidden', mode !== 'waiting');
    $('#activeActions').classList.toggle('hidden', mode !== 'active' && mode !== 'outgoing');
    $('#muteCall').classList.toggle('hidden', mode !== 'active');
    $('#resumeAudioCall').classList.add('hidden');
    $('#closeCallLayer').classList.add('hidden');
    $('#callDirection').textContent = mode === 'incoming' ? 'INCOMING CONSULTATION' : mode === 'active' ? 'LIVE CONSULTATION' : mode === 'waiting' ? 'WAITING FOR COUNSELOR' : 'CALLING COUNSELOR';
    startCallTimer();
}
function showCallEnded(message) {
    $('#callLayer').classList.remove('hidden');
    $('#callDirection').textContent = 'CALL ENDED';
    $('#callPeer').textContent = '통화가 종료됐습니다.';
    $('#callMessage').textContent = message;
    $('#callDuration').classList.add('hidden');
    $('#incomingActions').classList.add('hidden');
    $('#waitingActions').classList.add('hidden');
    $('#activeActions').classList.add('hidden');
    $('#closeCallLayer').classList.remove('hidden');
    stopCallTimer();
}
function hideCallLayer() { $('#callLayer').classList.add('hidden'); stopCallTimer(); }
function startCallTimer() {
    stopCallTimer();
    var tick = function () {
        $('#callDuration').textContent = duration(phone.elapsedSeconds());
        if (auth.role === 'counselor')
            $('#deskCallTime').textContent = duration(phone.elapsedSeconds());
        $$('[data-call-start]').forEach(function (cell) { cell.textContent = duration(Math.max(0, Math.floor((Date.now() - new Date(cell.dataset.callStart).getTime()) / 1000))); });
    };
    tick();
    callTimer = setInterval(tick, 1000);
}
function stopCallTimer() { if (callTimer)
    clearInterval(callTimer); callTimer = null; }
$('#acceptCall').addEventListener('click', function () { return phone.answer(); });
$('#rejectCall').addEventListener('click', function () { return phone.reject(); });
$('#hangupCall').addEventListener('click', function () { return phone.hangup(); });
$('#cancelCallIntent').addEventListener('click', cancelWaitingCallIntent);
$('#muteCall').addEventListener('click', function () { return phone.toggleMute(); });
$('#resumeAudioCall').addEventListener('click', function () { return phone.resumeRemoteAudio(); });
$('#closeCallLayer').addEventListener('click', hideCallLayer);
function startRinging() {
    stopRinging();
    activateAudio();
    var beep = function () {
        if (!audioContext)
            return;
        var oscillator = audioContext.createOscillator();
        var gain = audioContext.createGain();
        oscillator.frequency.value = 720;
        gain.gain.setValueAtTime(0.0001, audioContext.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.18, audioContext.currentTime + 0.02);
        gain.gain.exponentialRampToValueAtTime(0.0001, audioContext.currentTime + 0.42);
        oscillator.connect(gain).connect(audioContext.destination);
        oscillator.start();
        oscillator.stop(audioContext.currentTime + 0.45);
    };
    beep();
    ringTimer = setInterval(beep, 1150);
}
function stopRinging() { if (ringTimer)
    clearInterval(ringTimer); ringTimer = null; }
function showIncomingNotification(name) {
    if (!('Notification' in window) || Notification.permission !== 'granted' || document.visibilityState === 'visible')
        return;
    var options = { body: "".concat(name, "\uB2D8\uACFC \uC74C\uC131 \uD1B5\uD654\uB97C \uC5F0\uACB0\uD569\uB2C8\uB2E4."), tag: 'ggul-incoming-call', requireInteraction: true, renotify: true, icon: '/icon-192.png?v=101', badge: '/icon-192.png?v=101', vibrate: [450, 180, 450, 180, 800] };
    if (serviceWorkerRegistration)
        serviceWorkerRegistration.showNotification('온톡 상담 요청', options).catch(function () { });
}
function duration(seconds) {
    seconds = Math.max(0, Number(seconds) || 0);
    var h = Math.floor(seconds / 3600), m = Math.floor(seconds % 3600 / 60), s = Math.floor(seconds % 60);
    return h ? "".concat(String(h).padStart(2, '0'), ":").concat(String(m).padStart(2, '0'), ":").concat(String(s).padStart(2, '0')) : "".concat(String(m).padStart(2, '0'), ":").concat(String(s).padStart(2, '0'));
}
function formatDate(value) {
    if (!value)
        return '-';
    return new Intl.DateTimeFormat('ko-KR', { month: '2-digit', day: '2-digit', hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: false }).format(new Date(value));
}
function formatUptime(seconds) {
    if (!Number.isFinite(seconds))
        return '-';
    var d = Math.floor(seconds / 86400), h = Math.floor(seconds % 86400 / 3600), m = Math.floor(seconds % 3600 / 60);
    return "".concat(d ? "".concat(d, "\uC77C ") : '').concat(h, "\uC2DC\uAC04 ").concat(m, "\uBD84");
}
function escapeHtml(value) { return String(value == null ? '' : value).replace(/[&<>'"]/g, function (char) { return ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', "'": '&#39;', '"': '&quot;' }[char]); }); }
function toast(message) {
    var guide = $('#notificationGuide');
    var box = $('#toast');
    box.classList.toggle('above-guide', Boolean(guide && !guide.classList.contains('hidden')));
    box.textContent = message;
    box.classList.add('show');
    clearTimeout(toastTimer);
    toastTimer = setTimeout(function () { return box.classList.remove('show'); }, 2800);
}
(function () { return __awaiter(_this, void 0, void 0, function () {
    var status;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, api('/api/auth/status').catch(function () { return ({ authenticated: false }); })];
            case 1:
                status = _a.sent();
                if (!status.authenticated)
                    return [2 /*return*/, showAuth()];
                auth = status;
                return [4 /*yield*/, enterApp()];
            case 2:
                _a.sent();
                return [2 /*return*/];
        }
    });
}); })();
