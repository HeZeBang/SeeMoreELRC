/*! For license information please see video_review_detail.js.LICENSE.txt */
(function () {
	'use strict';
	var __webpack_modules__ = {
			9657: function (e, t, r) {
				function n(e) {
					return n = 'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator ? function (e) {
						return typeof e;
					} : function (e) {
						return e && 'function' == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? 'symbol' : typeof e;
					}, n(e);
				}
				function o(e, t) {
					var r = Object.keys(e);
					if (Object.getOwnPropertySymbols) {
						var n = Object.getOwnPropertySymbols(e);
						t && (n = n.filter(function (t) {
							return Object.getOwnPropertyDescriptor(e, t).enumerable;
						})), r.push.apply(r, n);
					}
					return r;
				}
				function i(e) {
					for (var t = 1; t < arguments.length; t++) {
						var r = null != arguments[t] ? arguments[t] : {};
						t % 2 ? o(Object(r), !0).forEach(function (t) {
							a(e, t, r[t]);
						}) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : o(Object(r)).forEach(function (t) {
							Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
						});
					}
					return e;
				}
				function a(e, t, r) {
					return (t = c(t)) in e ? Object.defineProperty(e, t, {
						value: r,
						enumerable: !0,
						configurable: !0,
						writable: !0
					}) : e[t] = r, e;
				}
				function s(e, t) {
					for (var r = 0; r < t.length; r++) {
						var n = t[r];
						n.enumerable = n.enumerable || !1, n.configurable = !0, 'value' in n && (n.writable = !0), Object.defineProperty(e, c(n.key), n);
					}
				}
				function c(e) {
					var t = function (e, t) {
						if ('object' !== n(e) || null === e)
							return e;
						var r = e[Symbol.toPrimitive];
						if (void 0 !== r) {
							var o = r.call(e, 'string');
							if ('object' !== n(o))
								return o;
							throw new TypeError('@@toPrimitive must return a primitive value.');
						}
						return String(e);
					}(e);
					return 'symbol' === n(t) ? t : String(t);
				}
				r.d(t, {
					h4: function () {
						return l;
					}
				});
				var u = new (function () {
					function e() {
						!function (e, t) {
							if (!(e instanceof t))
								throw new TypeError('Cannot call a class as a function');
						}(this, e), this.debugger = !1, this.deviceInfo = this.getDeviceInfo(), this.terminalInfo = this.getTerminalInfo(), this.xCasToken = localStorage.getItem('x-cas-token'), this.codeMap = {
							login_studySpace: {
								name: '学习空间登录记录',
								modal: '学习模块',
								action: '查看'
							}
						};
					}
					var t, r;
					return t = e, (r = [
						{
							key: 'push',
							value: function (e) {
								var t = this, r = i(i({}, e || {}), {}, {
										eventEnvDeviceSubType: t.getDeviceInfo(),
										eventEnvDeviceType: t.getTerminalInfo(),
										eventEnvOperationTime: new Date(),
										eventEnvOsName: t.getBrowserInfo().browser,
										eventEnvOsVersion: t.getBrowserInfo().version,
										eventEnvUserAgent: navigator.userAgent,
										eventOpeartionResult: e.eventOpeartionResult || '成功'
									}), n = new XMLHttpRequest();
								n.onreadystatechange = function () {
									if (4 === n.readyState)
										if (200 === n.status || 201 === n.status)
											try {
												JSON.parse(n.responseText);
											} catch (e) {
												console.error;
											}
										else
											console.error;
								}, n.open('POST', '/study-event/v1/event', !0), n.setRequestHeader('X-Device-Info', t.deviceInfo), n.setRequestHeader('Content-Type', 'application/json'), 'axxt.nwpu.edu.cn' == location.host && n.setRequestHeader('X-Id-Token', t.xCasToken), n.setRequestHeader('X-Terminal-Info', t.terminalInfo), n.send(JSON.stringify(r));
							}
						},
						{
							key: 'getBrowserInfo',
							value: function () {
								var e, t = navigator.userAgent, r = {
										browser: null,
										version: null
									};
								return (e = t.match(/Chrome\/([\d.]+)/)) ? (r.browser = 'Chrome', r.version = e[1]) : (e = t.match(/Safari\/([\d.]+)/)) ? (r.browser = 'Safari', r.version = e[1]) : (e = t.match(/Edge\/([\d.]+)/)) ? (r.browser = 'Edge', r.version = e[1]) : (e = t.match(/Chrom(e|ium)\/([\d.]+)/)) ? (r.browser = 'Chrome', r.version = e[2]) : (e = t.match(/Trident\/7\..*rv:([\d.]+).*like Gecko/)) ? (r.browser = 'Internet Explorer', r.version = e[1]) : (e = t.match(/Firefox\/([\d.]+)/)) ? (r.browser = 'Mozilla Firefox', r.version = e[1]) : (r.browser = 'unknown', r.version = 'unknown'), r;
							}
						},
						{
							key: 'getDeviceInfo',
							value: function () {
								var e = navigator.userAgent, t = 'Unknown';
								if (/iPhone|iPad|iPod/.test(e))
									t = e.match(/(iPhone|iPod|iPad)/)[0];
								else if (/Android/.test(e)) {
									var r = e.match(/Android\s+([\d.]+);\s*(?:Mobile\s*)?(.+?)\s*Build\/(.*)/);
									r && r[2] && (t = r[2]);
								} else
									t = 'PC';
								return t;
							}
						},
						{
							key: 'getTerminalInfo',
							value: function () {
								for (var e = navigator.userAgent, t = [
											'Android',
											'iPhone',
											'SymbianOS',
											'Windows Phone',
											'iPad',
											'iPod'
										], r = !1, n = 0; n < t.length; n++) {
									if (e.indexOf(t[n]) > 0) {
										r = !0;
										break;
									}
									return r ? 'APP' : 'PC';
								}
							}
						}
					]) && s(t.prototype, r), Object.defineProperty(t, 'prototype', { writable: !1 }), e;
				}())();
				window._npuTracker = u;
				var l = function (e) {
					var t;
					if ('npu' == window.target_custom) {
						var r = (a(t = {
							login_studySpace: {
								name: '学习空间登录记录',
								modal: '学习模块',
								action: '/',
								detail: '记录用户对学习平台进行登录的操作\u3002'
							},
							online_studySpace: {
								name: '学习空间在线记录',
								modal: '学习模块',
								action: '/',
								detail: '记录用户在学习平台的在线时间\u3002'
							},
							view_courseResources: {
								name: '课程资源点播学习',
								modal: '学习模块',
								action: '查看',
								detail: '记录用户在学习空间进行资源点播学习的操作\u3002'
							},
							download_courseResources: {
								name: '课程资源下载',
								modal: '学习模块',
								action: '查看',
								detail: '记录用户在学习空间进行资源下载的操作\u3002'
							},
							view_courseMap: {
								name: '课程地图学习',
								modal: '学习模块',
								action: '查看',
								detail: '记录用户在学习空间进行课程地图学习的操作\u3002'
							},
							create_quiz: {
								name: '发起提问',
								modal: '学习模块',
								action: '新增',
								detail: '记录用户在学习空间对课程发起提问的操作\u3002'
							},
							create_courseRatings: {
								name: '课程评论评分',
								modal: '学习模块',
								action: '新增',
								detail: '记录用户在学习空间对课程进行评论评分的操作\u3002'
							},
							create_note: {
								name: '添加笔记',
								modal: '学习模块',
								action: '新增',
								detail: '记录用户在学习空间对课程进行添加笔记的操作\u3002'
							},
							update_note: {
								name: '编辑笔记',
								modal: '学习模块',
								action: '编辑',
								detail: '记录用户在学习空间对课程进行编辑笔记的操作\u3002'
							},
							delete_note: {
								name: '删除笔记',
								modal: '学习模块',
								action: '删除',
								detail: '记录用户在学习空间对课程进行删除笔记的操作\u3002'
							},
							collect_course: {
								name: '收藏课程',
								modal: '学习模块',
								action: '新增',
								detail: '记录用户在学习空间对课程进行收藏的操作\u3002'
							},
							notCollect_course: {
								name: '取消收藏课程',
								modal: '学习模块',
								action: '删除',
								detail: '记录用户在学习空间对课程进行取消收藏的操作\u3002'
							},
							follow_teacher: {
								name: '关注教师',
								modal: '学习模块',
								action: '新增',
								detail: '记录用户在学习空间对教师进行关注的操作\u3002'
							},
							notFollow_teacher: {
								name: '取消关注教师',
								modal: '学习模块',
								action: '删除',
								detail: '记录用户在学习空间对教师进行取消关注的操作\u3002'
							},
							subscribe_ourse: {
								name: '订阅课程',
								modal: '学习模块',
								action: '新增',
								detail: '记录用户在学习空间对课程进行订阅的操作\u3002'
							},
							notSubscribe_ourse: {
								name: '取消订阅课程',
								modal: '学习模块',
								action: '删除',
								detail: '记录用户在学习空间对课程进行取消订阅的操作\u3002'
							},
							view_shortVideos: {
								name: '查看短视频学习',
								modal: '学习模块',
								action: '查看',
								detail: '记录用户在对短视频学进行查看的操作\u3002'
							},
							collect_shortVideos: {
								name: '收藏短视频学习',
								modal: '学习模块',
								action: '新增',
								detail: '记录用户在对短视频学进行收藏的操作\u3002'
							},
							share_shortVideos: {
								name: '分享短视频学习',
								modal: '学习模块',
								action: '查看',
								detail: '记录用户在对短视频学进行分享的操作\u3002'
							},
							reserve_liveStreaming: {
								name: '预订直播',
								modal: '学习模块',
								action: '新增',
								detail: '记录用户预订直播的操作\u3002'
							},
							notReserve_liveStreaming: {
								name: '取消预订直播',
								modal: '学习模块',
								action: '删除',
								detail: '记录用户取消预订直播的操作\u3002'
							},
							view_liveStreaming: {
								name: '观看直播',
								modal: '学习模块',
								action: '新增',
								detail: '记录用户在对课程中的直播进行发起观看的操作\u3002'
							},
							notView_liveStreaming: {
								name: '取消观看直播',
								modal: '学习模块',
								action: '删除',
								detail: '记录用户在对课程中的直播进行发起取消观看的操作\u3002'
							}
						}, 'view_liveStreaming', {
							name: '观看录播',
							modal: '学习模块',
							action: '新增',
							detail: '记录用户在对课程中的录播进行发起观看的操作\u3002'
						}), a(t, 'notView_liveStreaming', {
							name: '取消观看录播',
							modal: '学习模块',
							action: '删除',
							detail: '记录用户在对课程中的录播进行发起取消观看的操作\u3002'
						}), t)[e.eventCode];
						if (window._npuTracker && window.loginUserInfo && Object.keys(window.loginUserInfo).length && r) {
							var n = i(i({}, e), {}, {
								eventName: r.name,
								eventDetail: r.detail,
								eventModel: r.modal,
								eventEnvOperationUserOrgCode: window.loginUserInfo.extend.orgcodepath,
								eventEnvOperationUserOrgName: window.loginUserInfo.extend.orgpath,
								eventEnvOperationUserOrgDetail: window.loginUserInfo.extend.orgpath,
								eventEnvOperationUsercode: window.loginUserInfo.user_id,
								eventEnvOperationUsername: window.loginUserInfo.nick_name,
								eventAppVersion: window.version,
								eventOpeartionRoleName: (window.loginUserInfo.roles || []).includes('r-student') ? '学生' : '教师',
								eventOperationUserType: (window.loginUserInfo.roles || []).join(','),
								eventOpeartionResult: e.eventOpeartionResult || '成功',
								eventOpeartionObjectCatelogDetail: e.eventOpeartionObjectCatelogDetail || e.eventOpeartionObjectCatelogName || '暂无',
								eventSystemName: '门户'
							});
							window._npuTracker.push(n);
						}
					}
				};
			}
		}, __webpack_module_cache__ = {};
	function __webpack_require__(e) {
		var t = __webpack_module_cache__[e];
		if (void 0 !== t)
			return t.exports;
		var r = __webpack_module_cache__[e] = { exports: {} };
		return __webpack_modules__[e](r, r.exports, __webpack_require__), r.exports;
	}
	__webpack_require__.d = function (e, t) {
		for (var r in t)
			__webpack_require__.o(t, r) && !__webpack_require__.o(e, r) && Object.defineProperty(e, r, {
				enumerable: !0,
				get: t[r]
			});
	}, __webpack_require__.o = function (e, t) {
		return Object.prototype.hasOwnProperty.call(e, t);
	};
	var __webpack_exports__ = {};
	!function () {
		var _utils_npuTracker__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9657);
		function _typeof(e) {
			return _typeof = 'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator ? function (e) {
				return typeof e;
			} : function (e) {
				return e && 'function' == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? 'symbol' : typeof e;
			}, _typeof(e);
		}
		function _toConsumableArray(e) {
			return _arrayWithoutHoles(e) || _iterableToArray(e) || _unsupportedIterableToArray(e) || _nonIterableSpread();
		}
		function _nonIterableSpread() {
			throw new TypeError('Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.');
		}
		function _iterableToArray(e) {
			if ('undefined' != typeof Symbol && null != e[Symbol.iterator] || null != e['@@iterator'])
				return Array.from(e);
		}
		function _arrayWithoutHoles(e) {
			if (Array.isArray(e))
				return _arrayLikeToArray(e);
		}
		function ownKeys(e, t) {
			var r = Object.keys(e);
			if (Object.getOwnPropertySymbols) {
				var n = Object.getOwnPropertySymbols(e);
				t && (n = n.filter(function (t) {
					return Object.getOwnPropertyDescriptor(e, t).enumerable;
				})), r.push.apply(r, n);
			}
			return r;
		}
		function _objectSpread(e) {
			for (var t = 1; t < arguments.length; t++) {
				var r = null != arguments[t] ? arguments[t] : {};
				t % 2 ? ownKeys(Object(r), !0).forEach(function (t) {
					_defineProperty(e, t, r[t]);
				}) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : ownKeys(Object(r)).forEach(function (t) {
					Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
				});
			}
			return e;
		}
		function _slicedToArray(e, t) {
			return _arrayWithHoles(e) || _iterableToArrayLimit(e, t) || _unsupportedIterableToArray(e, t) || _nonIterableRest();
		}
		function _nonIterableRest() {
			throw new TypeError('Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.');
		}
		function _unsupportedIterableToArray(e, t) {
			if (e) {
				if ('string' == typeof e)
					return _arrayLikeToArray(e, t);
				var r = Object.prototype.toString.call(e).slice(8, -1);
				return 'Object' === r && e.constructor && (r = e.constructor.name), 'Map' === r || 'Set' === r ? Array.from(e) : 'Arguments' === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r) ? _arrayLikeToArray(e, t) : void 0;
			}
		}
		function _arrayLikeToArray(e, t) {
			(null == t || t > e.length) && (t = e.length);
			for (var r = 0, n = new Array(t); r < t; r++)
				n[r] = e[r];
			return n;
		}
		function _iterableToArrayLimit(e, t) {
			var r = null == e ? null : 'undefined' != typeof Symbol && e[Symbol.iterator] || e['@@iterator'];
			if (null != r) {
				var n, o, i, a, s = [], c = !0, u = !1;
				try {
					if (i = (r = r.call(e)).next, 0 === t) {
						if (Object(r) !== r)
							return;
						c = !1;
					} else
						for (; !(c = (n = i.call(r)).done) && (s.push(n.value), s.length !== t); c = !0);
				} catch (e) {
					u = !0, o = e;
				} finally {
					try {
						if (!c && null != r.return && (a = r.return(), Object(a) !== a))
							return;
					} finally {
						if (u)
							throw o;
					}
				}
				return s;
			}
		}
		function _arrayWithHoles(e) {
			if (Array.isArray(e))
				return e;
		}
		function _regeneratorRuntime() {
			_regeneratorRuntime = function () {
				return e;
			};
			var e = {}, t = Object.prototype, r = t.hasOwnProperty, n = Object.defineProperty || function (e, t, r) {
					e[t] = r.value;
				}, o = 'function' == typeof Symbol ? Symbol : {}, i = o.iterator || '@@iterator', a = o.asyncIterator || '@@asyncIterator', s = o.toStringTag || '@@toStringTag';
			function c(e, t, r) {
				return Object.defineProperty(e, t, {
					value: r,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}), e[t];
			}
			try {
				c({}, '');
			} catch (e) {
				c = function (e, t, r) {
					return e[t] = r;
				};
			}
			function u(e, t, r, o) {
				var i = t && t.prototype instanceof f ? t : f, a = Object.create(i.prototype), s = new k(o || []);
				return n(a, '_invoke', { value: I(e, r, s) }), a;
			}
			function l(e, t, r) {
				try {
					return {
						type: 'normal',
						arg: e.call(t, r)
					};
				} catch (e) {
					return {
						type: 'throw',
						arg: e
					};
				}
			}
			e.wrap = u;
			var d = {};
			function f() {
			}
			function m() {
			}
			function h() {
			}
			var v = {};
			c(v, i, function () {
				return this;
			});
			var p = Object.getPrototypeOf, y = p && p(p(S([])));
			y && y !== t && r.call(y, i) && (v = y);
			var g = h.prototype = f.prototype = Object.create(v);
			function _(e) {
				[
					'next',
					'throw',
					'return'
				].forEach(function (t) {
					c(e, t, function (e) {
						return this._invoke(t, e);
					});
				});
			}
			function w(e, t) {
				function o(n, i, a, s) {
					var c = l(e[n], e, i);
					if ('throw' !== c.type) {
						var u = c.arg, d = u.value;
						return d && 'object' == _typeof(d) && r.call(d, '__await') ? t.resolve(d.__await).then(function (e) {
							o('next', e, a, s);
						}, function (e) {
							o('throw', e, a, s);
						}) : t.resolve(d).then(function (e) {
							u.value = e, a(u);
						}, function (e) {
							return o('throw', e, a, s);
						});
					}
					s(c.arg);
				}
				var i;
				n(this, '_invoke', {
					value: function (e, r) {
						function n() {
							return new t(function (t, n) {
								o(e, r, t, n);
							});
						}
						return i = i ? i.then(n, n) : n();
					}
				});
			}
			function I(e, t, r) {
				var n = 'suspendedStart';
				return function (o, i) {
					if ('executing' === n)
						throw new Error('Generator is already running');
					if ('completed' === n) {
						if ('throw' === o)
							throw i;
						return {
							value: void 0,
							done: !0
						};
					}
					for (r.method = o, r.arg = i;;) {
						var a = r.delegate;
						if (a) {
							var s = b(a, r);
							if (s) {
								if (s === d)
									continue;
								return s;
							}
						}
						if ('next' === r.method)
							r.sent = r._sent = r.arg;
						else if ('throw' === r.method) {
							if ('suspendedStart' === n)
								throw n = 'completed', r.arg;
							r.dispatchException(r.arg);
						} else
							'return' === r.method && r.abrupt('return', r.arg);
						n = 'executing';
						var c = l(e, t, r);
						if ('normal' === c.type) {
							if (n = r.done ? 'completed' : 'suspendedYield', c.arg === d)
								continue;
							return {
								value: c.arg,
								done: r.done
							};
						}
						'throw' === c.type && (n = 'completed', r.method = 'throw', r.arg = c.arg);
					}
				};
			}
			function b(e, t) {
				var r = t.method, n = e.iterator[r];
				if (void 0 === n)
					return t.delegate = null, 'throw' === r && e.iterator.return && (t.method = 'return', t.arg = void 0, b(e, t), 'throw' === t.method) || 'return' !== r && (t.method = 'throw', t.arg = new TypeError("The iterator does not provide a '" + r + "' method")), d;
				var o = l(n, e.iterator, t.arg);
				if ('throw' === o.type)
					return t.method = 'throw', t.arg = o.arg, t.delegate = null, d;
				var i = o.arg;
				return i ? i.done ? (t[e.resultName] = i.value, t.next = e.nextLoc, 'return' !== t.method && (t.method = 'next', t.arg = void 0), t.delegate = null, d) : i : (t.method = 'throw', t.arg = new TypeError('iterator result is not an object'), t.delegate = null, d);
			}
			function T(e) {
				var t = { tryLoc: e[0] };
				1 in e && (t.catchLoc = e[1]), 2 in e && (t.finallyLoc = e[2], t.afterLoc = e[3]), this.tryEntries.push(t);
			}
			function P(e) {
				var t = e.completion || {};
				t.type = 'normal', delete t.arg, e.completion = t;
			}
			function k(e) {
				this.tryEntries = [{ tryLoc: 'root' }], e.forEach(T, this), this.reset(!0);
			}
			function S(e) {
				if (e) {
					var t = e[i];
					if (t)
						return t.call(e);
					if ('function' == typeof e.next)
						return e;
					if (!isNaN(e.length)) {
						var n = -1, o = function t() {
								for (; ++n < e.length;)
									if (r.call(e, n))
										return t.value = e[n], t.done = !1, t;
								return t.value = void 0, t.done = !0, t;
							};
						return o.next = o;
					}
				}
				return { next: x };
			}
			function x() {
				return {
					value: void 0,
					done: !0
				};
			}
			return m.prototype = h, n(g, 'constructor', {
				value: h,
				configurable: !0
			}), n(h, 'constructor', {
				value: m,
				configurable: !0
			}), m.displayName = c(h, s, 'GeneratorFunction'), e.isGeneratorFunction = function (e) {
				var t = 'function' == typeof e && e.constructor;
				return !!t && (t === m || 'GeneratorFunction' === (t.displayName || t.name));
			}, e.mark = function (e) {
				return Object.setPrototypeOf ? Object.setPrototypeOf(e, h) : (e.__proto__ = h, c(e, s, 'GeneratorFunction')), e.prototype = Object.create(g), e;
			}, e.awrap = function (e) {
				return { __await: e };
			}, _(w.prototype), c(w.prototype, a, function () {
				return this;
			}), e.AsyncIterator = w, e.async = function (t, r, n, o, i) {
				void 0 === i && (i = Promise);
				var a = new w(u(t, r, n, o), i);
				return e.isGeneratorFunction(r) ? a : a.next().then(function (e) {
					return e.done ? e.value : a.next();
				});
			}, _(g), c(g, s, 'Generator'), c(g, i, function () {
				return this;
			}), c(g, 'toString', function () {
				return '[object Generator]';
			}), e.keys = function (e) {
				var t = Object(e), r = [];
				for (var n in t)
					r.push(n);
				return r.reverse(), function e() {
					for (; r.length;) {
						var n = r.pop();
						if (n in t)
							return e.value = n, e.done = !1, e;
					}
					return e.done = !0, e;
				};
			}, e.values = S, k.prototype = {
				constructor: k,
				reset: function (e) {
					if (this.prev = 0, this.next = 0, this.sent = this._sent = void 0, this.done = !1, this.delegate = null, this.method = 'next', this.arg = void 0, this.tryEntries.forEach(P), !e)
						for (var t in this)
							't' === t.charAt(0) && r.call(this, t) && !isNaN(+t.slice(1)) && (this[t] = void 0);
				},
				stop: function () {
					this.done = !0;
					var e = this.tryEntries[0].completion;
					if ('throw' === e.type)
						throw e.arg;
					return this.rval;
				},
				dispatchException: function (e) {
					if (this.done)
						throw e;
					var t = this;
					function n(r, n) {
						return a.type = 'throw', a.arg = e, t.next = r, n && (t.method = 'next', t.arg = void 0), !!n;
					}
					for (var o = this.tryEntries.length - 1; o >= 0; --o) {
						var i = this.tryEntries[o], a = i.completion;
						if ('root' === i.tryLoc)
							return n('end');
						if (i.tryLoc <= this.prev) {
							var s = r.call(i, 'catchLoc'), c = r.call(i, 'finallyLoc');
							if (s && c) {
								if (this.prev < i.catchLoc)
									return n(i.catchLoc, !0);
								if (this.prev < i.finallyLoc)
									return n(i.finallyLoc);
							} else if (s) {
								if (this.prev < i.catchLoc)
									return n(i.catchLoc, !0);
							} else {
								if (!c)
									throw new Error('try statement without catch or finally');
								if (this.prev < i.finallyLoc)
									return n(i.finallyLoc);
							}
						}
					}
				},
				abrupt: function (e, t) {
					for (var n = this.tryEntries.length - 1; n >= 0; --n) {
						var o = this.tryEntries[n];
						if (o.tryLoc <= this.prev && r.call(o, 'finallyLoc') && this.prev < o.finallyLoc) {
							var i = o;
							break;
						}
					}
					i && ('break' === e || 'continue' === e) && i.tryLoc <= t && t <= i.finallyLoc && (i = null);
					var a = i ? i.completion : {};
					return a.type = e, a.arg = t, i ? (this.method = 'next', this.next = i.finallyLoc, d) : this.complete(a);
				},
				complete: function (e, t) {
					if ('throw' === e.type)
						throw e.arg;
					return 'break' === e.type || 'continue' === e.type ? this.next = e.arg : 'return' === e.type ? (this.rval = this.arg = e.arg, this.method = 'return', this.next = 'end') : 'normal' === e.type && t && (this.next = t), d;
				},
				finish: function (e) {
					for (var t = this.tryEntries.length - 1; t >= 0; --t) {
						var r = this.tryEntries[t];
						if (r.finallyLoc === e)
							return this.complete(r.completion, r.afterLoc), P(r), d;
					}
				},
				catch: function (e) {
					for (var t = this.tryEntries.length - 1; t >= 0; --t) {
						var r = this.tryEntries[t];
						if (r.tryLoc === e) {
							var n = r.completion;
							if ('throw' === n.type) {
								var o = n.arg;
								P(r);
							}
							return o;
						}
					}
					throw new Error('illegal catch attempt');
				},
				delegateYield: function (e, t, r) {
					return this.delegate = {
						iterator: S(e),
						resultName: t,
						nextLoc: r
					}, 'next' === this.method && (this.arg = void 0), d;
				}
			}, e;
		}
		function asyncGeneratorStep(e, t, r, n, o, i, a) {
			try {
				var s = e[i](a), c = s.value;
			} catch (e) {
				return void r(e);
			}
			s.done ? t(c) : Promise.resolve(c).then(n, o);
		}
		function _asyncToGenerator(e) {
			return function () {
				var t = this, r = arguments;
				return new Promise(function (n, o) {
					var i = e.apply(t, r);
					function a(e) {
						asyncGeneratorStep(i, n, o, a, s, 'next', e);
					}
					function s(e) {
						asyncGeneratorStep(i, n, o, a, s, 'throw', e);
					}
					a(void 0);
				});
			};
		}
		function _defineProperty(e, t, r) {
			return (t = _toPropertyKey(t)) in e ? Object.defineProperty(e, t, {
				value: r,
				enumerable: !0,
				configurable: !0,
				writable: !0
			}) : e[t] = r, e;
		}
		function _toPropertyKey(e) {
			var t = _toPrimitive(e, 'string');
			return 'symbol' === _typeof(t) ? t : String(t);
		}
		function _toPrimitive(e, t) {
			if ('object' !== _typeof(e) || null === e)
				return e;
			var r = e[Symbol.toPrimitive];
			if (void 0 !== r) {
				var n = r.call(e, t || 'default');
				if ('object' !== _typeof(n))
					return n;
				throw new TypeError('@@toPrimitive must return a primitive value.');
			}
			return ('string' === t ? String : Number)(e);
		}
		new Vue({
			el: '#app',
			data: function () {
				var e;
				return _defineProperty(e = {
					prefix: prefix,
					courseId: courseId,
					courseBackInfo: courseBackInfo,
					id: null,
					leftPanelActive: !0,
					rightPanelActive: !0,
					userTab: -1,
					weekList: [],
					videoInfo: {},
					courseInfo: {
						entityName: '',
						courseName: '',
						teacherList: [],
						videoName: '',
						courseLocation: '',
						courseTime: ''
					},
					knowledgeList: [],
					notesData: {
						page: 1,
						size: 50,
						list: []
					},
					mainPlayer: null,
					collectionCount: 0,
					isCollection: !1,
					originVideoText: [],
					defaultActiveMenu: '',
					currentVideos: [],
					sectionInfo: {},
					resourceInfo: {},
					videoCurrentTime: 0,
					noVideo: !1,
					courseVideoList: [],
					courrentCourseVideo: {},
					showMiniPlayer: !1,
					videoId: '',
					videoHistoryParams: {
						id: '',
						courseId: courseId,
						videoId: '',
						chapterId: '',
						sectionId: ''
					},
					showWatermark: showWatermark,
					noteLength: 0,
					currentEditVideos: [],
					currentFramesTime: 0,
					noteId: '',
					headActive: '2' == bannerPlateType,
					scrollNavStatus: !0,
					liveInfo: {},
					liveCourseInfo: {},
					liveActiveTab: '1',
					liveAddress: [],
					voiceTextStatus: !1,
					voiceTranslation: !1,
					laguage: 'zh',
					middleVoice: '',
					voiceList: [],
					voiceToTextWs: null
				}, 'courseBackInfo', courseBackInfo), _defineProperty(e, 'hasCourseOverview', !1), _defineProperty(e, 'voiceTextShow', !1), _defineProperty(e, 'coursewareScreenshootTotal', 0), _defineProperty(e, 'videoUrls', []), _defineProperty(e, 'isCau', !1), _defineProperty(e, 'cauViewNameObj', {
					1: '教师画面1',
					2: '教师画面2',
					3: '学生画面1',
					4: '学生画面2',
					5: 'PPT画面',
					6: '电子白板画面',
					7: '合成通道画面'
				}), _defineProperty(e, 'courseNo', ''), _defineProperty(e, 'serialNumber', serialNumber), _defineProperty(e, 'startTime', ''), _defineProperty(e, 'endTime', ''), _defineProperty(e, 'areaCode', ''), _defineProperty(e, 'caNowWeek', 1), _defineProperty(e, 'realWeek', 1), _defineProperty(e, 'weiShuiCourseTime', {
					1: {
						startTime: '08:30:00',
						endTime: '09:15:00'
					},
					2: {
						startTime: '09:20:00',
						endTime: '10:05:00'
					},
					3: {
						startTime: '10:25:00',
						endTime: '11:10:00'
					},
					4: {
						startTime: '11:15:00',
						endTime: '12:00:00'
					},
					5: {
						startTime: '14:00:00',
						endTime: '14:45:00'
					},
					6: {
						startTime: '14:50:00',
						endTime: '15:35:00'
					},
					7: {
						startTime: '15:55:00',
						endTime: '16:40:00'
					},
					8: {
						startTime: '16:45:00',
						endTime: '17:30:00'
					},
					9: {
						startTime: '19:00:00',
						endTime: '19:45:00'
					},
					10: {
						startTime: '19:50:00',
						endTime: '20:35:00'
					},
					11: {
						startTime: '20:40:00',
						endTime: '21:25:00'
					}
				}), _defineProperty(e, 'benBuCourseTime', {
					1: {
						startTime: '08:00:00',
						endTime: '08:45:00'
					},
					2: {
						startTime: '08:55:00',
						endTime: '09:40:00'
					},
					3: {
						startTime: '10:10:00',
						endTime: '10:55:00'
					},
					4: {
						startTime: '11:05:00',
						endTime: '12:50:00'
					},
					5: {
						startTime: '14:00:00',
						endTime: '14:45:00'
					},
					6: {
						startTime: '14:55:00',
						endTime: '15:40:00'
					},
					7: {
						startTime: '16:00:00',
						endTime: '16:45:00'
					},
					8: {
						startTime: '16:55:00',
						endTime: '17:40:00'
					},
					9: {
						startTime: '19:00:00',
						endTime: '19:45:00'
					},
					10: {
						startTime: '19:55:00',
						endTime: '20:40:00'
					},
					11: {
						startTime: '20:40:00',
						endTime: '21:25:00'
					}
				}), _defineProperty(e, 'player_sound_source_hide', !1), _defineProperty(e, 'isLive', !1), _defineProperty(e, 'bannerPlateType', bannerPlateType), _defineProperty(e, 'hostName', ''), _defineProperty(e, 'fragmentChecked', 0), _defineProperty(e, 'fragmentList', []), _defineProperty(e, 'fragmentEditIndex', -1), _defineProperty(e, 'fragmentEditType', 'startTime'), _defineProperty(e, 'currentUrls', []), _defineProperty(e, 'liveTextTrackDelay', 0), _defineProperty(e, 'voiceTranslate', !1), _defineProperty(e, 'ifShowResourceQa', !1), _defineProperty(e, 'mainScreenVideoId', ''), _defineProperty(e, 'watermarkPictureUrl', ''), _defineProperty(e, 'watermarkLocation', 0), _defineProperty(e, 'reviewPermission', {}), e;
			},
			mounted: function () {
				var e = this;
				console.log('this.courseBackInfo--->', this.courseBackInfo), this.hostName = window.location.hostname, document.querySelector(".nav_view .menu_view a[href='/learn/videoreview']") && (document.querySelector(".nav_view .menu_view a[href='/learn/videoreview']").className = 'tab_active'), this.id = this.getQueryString('id'), this.noteId = this.getQueryString('noteId'), this.getCollectionCount(), this.$on('ready', _asyncToGenerator(_regeneratorRuntime().mark(function t() {
					return _regeneratorRuntime().wrap(function (t) {
						for (;;)
							switch (t.prev = t.next) {
							case 0:
								return e.liveTextTrackDelay = e.sysModulesObj.live_text_rack_delay || 30, e.initDefaultTab(), e.player_sound_source_hide = e.sysModulesFormat.includes('player_sound_source_hide'), e.initPermission(), t.next = 6, e.checkIsCau();
							case 6:
								return t.next = 8, e.getCaNowWeek();
							case 8:
								return t.next = 10, e.getReviewPermission();
							case 10:
								e.courseInfoInit();
							case 11:
							case 'end':
								return t.stop();
							}
					}, t);
				}))), window.addEventListener('beforeunload', function (e) {
					(0, _utils_npuTracker__WEBPACK_IMPORTED_MODULE_0__.h4)({
						eventCode: 'notView_liveStreaming',
						eventOpeartionObjectCatelogName: '录播',
						eventOpeartionObjectCatelogCode: 'video_review',
						eventOpeartionObjectName: courseBackInfo.courseName,
						eventOpeartionObjectCode: courseBackInfo.id,
						eventOpeartionObjectDetail: '取消观看录播' + courseBackInfo.courseName
					});
				});
			},
			computed: {
				canEdit: function (e) {
					var t = e.loginUserInfo;
					return e.courseInfo.teacherList.map(function (e) {
						return e.userCode;
					}).includes(t.user_code) || t.roles.includes('r_resource_manager') || t.roles.includes('r_sys_manager');
				},
				notePanelInfo: function () {
					return {
						courseId: courseId,
						courseName: this.courseInfo.courseName,
						noteType: 'review',
						note: '',
						pointOut: 0,
						resourceId: '',
						remark: '',
						resourceName: this.sectionNameFormat(this.resourceInfo),
						sectionId: this.sectionInfo ? this.sectionInfo.week : '',
						sectionName: this.getSectionName(),
						schoolYear: schoolYear,
						semester: semester,
						ready: this.mainPlayer && this.mainPlayer.urls && this.mainPlayer.urls.length
					};
				},
				ifNoteTab: function () {
					return '3' === this.userTab;
				},
				test: function () {
					var e = this.courseInfo;
					return console.error('测试computed', e), !0;
				},
				ifFrameEdit: function () {
					var e = this.loginUserInfo, t = this.courseInfo, r = e || {}, n = r.user_code, o = r.roles;
					return !!('sys' == n || 'zhiliao' == n || null != o && o.includes('r_course_manager') || null != o && o.includes('r_resource_manager')) || !!(t.teacherList || []).map(function (e) {
						return e.userCode;
					}).includes(n);
				}
			},
			created: function () {
				this.noteId = this.getQueryVariable('noteId'), this.initCloseEvent(), this.initPlayerWatermark();
			},
			watch: {
				resourceInfo: {
					handler: function (e) {
						e && this.courseBackInfo.courseTimeData && (this.courseBackInfo.courseTimeData[0] = this.resourceInfo.weekDay + ' ' + this.resourceInfo.realSection + '节');
					}
				}
			},
			methods: {
				getReviewPermission: function () {
					var e = this;
					return new Promise(function (t, r) {
						API.reqReviewPermission({ courseId: e.courseBackInfo.courseId }).then(function (t) {
							var r;
							e.reviewPermission = null !== (r = null == t ? void 0 : t.data) && void 0 !== r ? r : {};
						}).finally(function () {
							t();
						});
					});
				},
				getSectionName: function () {
					var e = '';
					try {
						Object.keys(this.sectionInfo).length && (e += '第'.concat(this.sectionInfo.week, '周'), this.sectionInfo.startTime.includes('-') && (e += '\uFF08' + this.sectionInfo.startTime.replaceAll('-', '.') + '-'), this.sectionInfo.endTime.includes('-') && (e += this.sectionInfo.endTime.replaceAll('-', '.') + '\uFF09'));
					} catch (e) {
						console.log('出错了\uFF0C看看this.sectionInfo', this.sectionInfo);
					} finally {
						return e;
					}
				},
				initPermission: function () {
					this.sysModulesFormat && this.sysModulesFormat.length && (this.sysModulesFormat.includes('course_review_small_window') ? this.showMiniPlayer = !0 : this.showMiniPlayer = !1);
				},
				changeUserTab: function (e, t) {
					console.log('tab切换', e, this.userTab, t), this.userTab = t || 0 == this.userTab || parseInt(this.userTab) > parseInt(e) ? String(e) : this.userTab;
				},
				initDefaultTab: function () {
					var e = this, t = this;
					10 == bannerPlateType && this.sysModulesFormat.includes('course_review_voice_show') && this.voiceTextShow ? this.changeUserTab('voice', !0) : this.getIfPc() ? this.noteId ? (this.changeUserTab(3, !0), this.noteId = null) : this.hasCourseOverview ? this.changeUserTab(2) : this.$nextTick(function () {
						var r, n, o = null === (r = e.$refs.tabsRef) || void 0 === r ? void 0 : r.panes;
						o && o.length && (t.userTab = o[0].name);
						var i = null === (n = e.$refs.liveTabsRef) || void 0 === n ? void 0 : n.panes;
						i && i.length && (t.liveActiveTab = i[0].name);
					}) : this.changeUserTab(0, !0);
				},
				addSelectVoiceNote: function (e) {
					var t = e.voiceInfo;
					this.changeUserTab(3, !0), this.$refs.course_note_panel.insertNote({
						type: 'text',
						pointIn: t.pointIn,
						pointOut: t.pointOut,
						text: t.note
					});
				},
				sectionFormat: function (e) {
					if (!e)
						return '-';
					if (e.includes('-') || e.includes(',')) {
						var t = _slicedToArray(e.split(/-|,/), 2), r = t[0], n = t[1];
						return r === n ? r && 'undefined' != r && 'null' != r ? r : '-' : ''.concat(r, '-').concat(n);
					}
					return e;
				},
				sectionNameFormat: function (e) {
					return 0 != e.ifStart && Object.keys(e).length && e.realSection ? this.isCau ? '第' + e.realSection + '节' : e.realSection.length >= 14 ? e.section.replaceAll(',', '-') : -1 != e.realSection.indexOf(':') ? e.section : '第' + this.sectionFormat(e.section) + '节' : '未开始';
				},
				rangeToArray: function (e) {
					for (var t = _slicedToArray(e.split('-').map(Number), 2), r = t[0], n = t[1], o = [], i = r; i <= n; i++)
						o.push(i);
					return o;
				},
				handleCAWeekList: function (e) {
					var t = this;
					if (!e.length)
						return [];
					var r = {
						'周一': 1,
						'周二': 2,
						'周三': 3,
						'周四': 4,
						'周五': 5,
						'周六': 6,
						'周日': 7
					};
					return e.map(function (e) {
						var n = [];
						return e.recordInfoDetailList.forEach(function (e) {
							t.rangeToArray(e.realSection).forEach(function (t) {
								n.push(_objectSpread(_objectSpread({}, e), {}, {
									section: t,
									realSection: t
								}));
							});
						}), n.sort(function (e, t) {
							var n = r[e.weekDay], o = r[t.weekDay];
							return n !== o ? n - o : e.realSection - t.realSection;
						}), _objectSpread(_objectSpread({}, e), {}, { recordInfoDetailList: n });
					});
				},
				courseInfoInit: function (e, t) {
					var r = this, n = this;
					if (n.isLive = !1, this.currentVideos = [], this.currentEditVideos = [], !e || t.courseLiveInfo) {
						if (t && t.courseLiveInfo)
							return n.isLive = !0, void this.initLiveCourse(t);
						var o = {
							courseId: courseId,
							id: this.id,
							schoolYear: schoolYear,
							semester: semester
						};
						this.ifFrameEdit && (o.ifManage = 1), API.reqVidoreviewInfo(o).then(function () {
							var e = _asyncToGenerator(_regeneratorRuntime().mark(function e(t) {
								var o, i, a, s, c, u, l, d, f, m, h, v, p, y, g, _, w, I, b, T;
								return _regeneratorRuntime().wrap(function (e) {
									for (;;)
										switch (e.prev = e.next) {
										case 0:
											if (200 == t.status) {
												e.next = 2;
												break;
											}
											return e.abrupt('return', r.$message.error(t.message));
										case 2:
											(a = t.data).collectionsTotal, a.collegeList, a.courseId, a.courseName, s = a.recordingVideoInfoShows, a.siteCode, c = a.teacherList, u = void 0 === c ? [] : c, a.whetherCollection, l = a.coursePositionList, d = a.courseTime, r.isCau || (s = s.map(function (e) {
												var t = e.recordInfoDetailList.filter(function (e) {
													return !!(e.videoInfoList || []).filter(function (e) {
														return e.videoId && e.scheduleId && e.videoName;
													}).length || e.courseLiveInfo;
												});
												return _objectSpread(_objectSpread({}, e), {}, { recordInfoDetailList: t });
											})), r.weekList = s, r.isCau && (r.weekList = r.handleCAWeekList(r.weekList)), r.$set(r, 'teacherList', u), r.$set(r.courseInfo, 'teacherList', u), console.log('courseInfo', r.courseInfo), console.log('courseName', t.data.courseName), r.$set(r.courseInfo, 'courseName', t.data.courseName), r.courseInfo.courseTime = null === (o = (d || []).map(function (e) {
												return ''.concat(weekMap[e.weekDay], ' ').concat(e.section, '节');
											})) || void 0 === o ? void 0 : o.join('\uFF1B'), r.courseInfo.courseLocation = null == l || null === (i = l.map(function (e) {
												return ''.concat(e.campus, '--').concat(e.academicBuilding).concat(e.classroomNumber);
											})) || void 0 === i ? void 0 : i.join(' '), f = {}, m = {}, h = {}, v = '0-0', p = '', y = r.getQueryVariable('id'), g = r.getQueryVariable('realSection'), _ = r.getQueryVariable('week'), r.isCau ? (w = r.weekList.map(function (e) {
												return e.week;
											}), I = Math.max.apply(Math, _toConsumableArray(w)), b = r.caNowWeek > I ? I : r.caNowWeek, r.realWeek = b, r.weekList.forEach(function (e, t) {
												if (e.week == b) {
													var n = e.recordInfoDetailList[0];
													if (m = n.videoInfoList && n.videoInfoList.length ? n.videoInfoList[0] : {}, p = n.realSection, v = ''.concat(t, '-', 0), f = e, h = n, y) {
														if ((n.videoInfoList || []).filter(function (e) {
																return e.videoId == y;
															}).length)
															return isContinue = !1, console.log('存在笔记跳转章节'), !0;
														r.id = null;
													}
													if (g == n.realSection && _ == week.week)
														return isContinue = !1, !0;
												}
											})) : r.weekList.some(function (e, t) {
												var n = !0;
												if (e.recordInfoDetailList.some(function (o, i) {
														if (0 != e.ifStart && 0 != o.ifStart) {
															if (m = o.videoInfoList && o.videoInfoList.length ? o.videoInfoList[0] : {}, p = o.realSection, v = ''.concat(t, '-').concat(i), f = e, h = o, y) {
																if ((o.videoInfoList || []).filter(function (e) {
																		return e.videoId == y;
																	}).length)
																	return n = !1, console.log('存在笔记跳转章节'), !0;
																r.id = null;
															}
															if (g == o.realSection && _ == e.week)
																return n = !1, !0;
														}
													}), !n)
													return !0;
											}), r.lastWeekDay = m, r.resourceInfo = h, r.defaultActiveMenu = v, r.videoInfo = m, r.sectionInfo = f;
											try {
												r.isCau && (r.startTime = r.formatDateTime(f.startTime, f.recordInfoDetailList[0].weekDay, f.recordInfoDetailList[0].realSection).start, r.endTime = r.formatDateTime(f.startTime, f.recordInfoDetailList[0].weekDay, f.recordInfoDetailList[0].realSection).end);
											} catch (e) {
											}
											if (!(r.resourceInfo && r.resourceInfo.courseLiveInfo && (6 == r.bannerPlateType && r.ifFrameEdit || 6 != r.bannerPlateType))) {
												e.next = 33;
												break;
											}
											return r.initLiveCourse(r.resourceInfo), n.isLive = !0, (0, _utils_npuTracker__WEBPACK_IMPORTED_MODULE_0__.h4)({
												eventCode: 'view_liveStreaming',
												eventOpeartionObjectCatelogName: '课程直播',
												eventOpeartionObjectCatelogCode: 'live_course',
												eventOpeartionObjectName: courseBackInfo.courseName,
												eventOpeartionObjectCode: courseBackInfo.id,
												eventOpeartionObjectDetail: '观看直播' + courseBackInfo.courseName
											}), e.abrupt('return');
										case 33:
											if ((0, _utils_npuTracker__WEBPACK_IMPORTED_MODULE_0__.h4)({
													eventCode: 'view_liveStreaming',
													eventOpeartionObjectCatelogName: '录播',
													eventOpeartionObjectCatelogCode: 'course_review',
													eventOpeartionObjectName: courseBackInfo.courseName,
													eventOpeartionObjectCode: courseBackInfo.id,
													eventOpeartionObjectDetail: '观看回看' + courseBackInfo.courseName
												}), r.isLive = !1, !r.resourceInfo || 1 != r.resourceInfo.ifHolidays) {
												e.next = 40;
												break;
											}
											return r.setVideoError('这节课没有上课哦~'), e.abrupt('return');
										case 40:
											r.resourceInfo && 0 == r.resourceInfo.ifStart && r.setVideoError('课程还没有开始~');
										case 41:
											return T = [], h.videoInfoList && (T = h.videoInfoList.map(function (e) {
												return e.scheduleId;
											})), e.next = 45, r.getAreaCode();
										case 45:
											r.getCourseDetail(T, p);
										case 46:
										case 'end':
											return e.stop();
										}
								}, e);
							}));
							return function (t) {
								return e.apply(this, arguments);
							};
						}());
					} else
						this.getCourseDetail(e.scheduleIds, e.section);
				},
				changeURLStatic: function changeURLStatic(name, value) {
					var url = location.href, reg = eval('/([?|&]' + name + '=)[^&]*/gi'), url2;
					value = value.toString().replace(/(^\s*)|(\s*$)/g, ''), url2 = value ? url.match(reg) ? url.replace(reg, '$1' + value) : url + (url.indexOf('?') > -1 ? '&' : '?') + name + '=' + value : url.replace(reg, ''), history.replaceState(null, null, url2);
				},
				changeVideoHandle: function (e) {
					var t = this;
					return _asyncToGenerator(_regeneratorRuntime().mark(function r() {
						var n, o, i, a, s, c, u;
						return _regeneratorRuntime().wrap(function (r) {
							for (;;)
								switch (r.prev = r.next) {
								case 0:
									10 == bannerPlateType && t.sysModulesFormat.includes('course_review_voice_show') && t.voiceTextShow ? t.userTab = 'voice' : t.userTab = '3', t.changeURLStatic('noteId', '');
									try {
										t.mainPlayer.saveVideoHistory();
									} catch (e) {
									}
									if (n = e.split('-'), o = _slicedToArray(n, 2), i = o[0], a = o[1], t.sectionInfo = t.weekList[i], t.resourceInfo = t.weekList[i].recordInfoDetailList[a], t.courseBackInfo.courseTimeData[0] = t.resourceInfo.weekDay + ' ' + t.resourceInfo.realSection + '节', s = t.weekList[i].recordInfoDetailList[a].realSection, !t.resourceInfo || 1 != t.resourceInfo.ifHolidays) {
										r.next = 11;
										break;
									}
									return t.setVideoError('这节课没有上课哦~'), r.abrupt('return');
								case 11:
									return t.isCau && (t.startTime = t.formatDateTime(t.weekList[i].startTime, t.resourceInfo.weekDay, t.resourceInfo.realSection).start, t.endTime = t.formatDateTime(t.weekList[i].startTime, t.resourceInfo.weekDay, t.resourceInfo.realSection).end), c = t.weekList[i].recordInfoDetailList[a].videoInfoList || [], t.videoInfo = _objectSpread({}, c[0] || {}), u = c.map(function (e) {
										return e.scheduleId;
									}), r.next = 17, t.getAreaCode();
								case 17:
									t.voiceTextShow = !0, t.courseInfoInit({
										scheduleIds: u,
										section: s,
										courseLiveInfo: t.resourceInfo.courseLiveInfo
									}, t.resourceInfo);
								case 19:
								case 'end':
									return r.stop();
								}
						}, r);
					}))();
				},
				setVideoError: function (e) {
					this.mainPlayer && (this.mainPlayer.pause(), this.mainPlayer.destroy(), this.mainPlayer.emit('error', e));
				},
				getVideoAndSort: function (e, t) {
					var r = this;
					return console.log('schedule_id', e), new Promise(function (n, o) {
						if (!e)
							return n([]);
						API.reqVideoreviewSections(e).then(function (e) {
							if (1 != e.success)
								return n([]);
							console.log('videoInfoList', r.resourceInfo.videoInfoList);
							var o = r.resourceInfo.videoInfoList.map(function (e) {
									return e.videoId;
								}), i = e.data.data.filter(function (e) {
									return o.includes(e.contentId_);
								});
							console.log('\u3010currList\u3011', i);
							var a = r.resourceInfo.videoInfoList.filter(function (e) {
									return null == e.ifPublic || 1 == e.ifPublic;
								}).map(function (e) {
									return e.videoId;
								}), s = i.map(function (e) {
									var t = a.includes(e.contentId_) ? 1 : 0;
									return _objectSpread(_objectSpread({}, e), {}, { ifPublic: t });
								});
							if (console.log('videos', s), !s.length)
								return n([]);
							s = s.reduce(function (e, t) {
								return e.find(function (e) {
									return e.seat == t.seat;
								}) || e.push(t), e;
							}, []).filter(function (e) {
								if (!e.section)
									return !1;
								var r = e.section && (t.split(/\-|\,/g).includes(e.section) || e.section.replace(/\-|\,/g, '-') == t.replace(/\-|\,/g, '-')), n = t.split(/\-|\,/g), o = parseFloat(n[0]), i = parseFloat(n[n.length - 1]), a = parseFloat(e.section);
								return a >= o && a <= i || r;
							}), console.log('处理后videos', s);
							var c = [];
							if (r.showMiniPlayer) {
								var u = _slicedToArray(r.sysModules.filter(function (e) {
										return 'course_review_window_rule' === e.code;
									})[0].value.split(/,|，/), 2), l = u[0], d = void 0 === l ? '导切画面' : l, f = u[1], m = void 0 === f ? '教师画面' : f, h = s.filter(function (e) {
										return e && e.seat === d;
									}), v = s.filter(function (e) {
										return e && e.seat == m;
									});
								c = [].concat(_toConsumableArray(h), _toConsumableArray(v));
							} else {
								var p = r.sysModules.filter(function (e) {
										return 'course_review_list_rule' === e.code;
									})[0].value.split(/,|，/), y = [];
								p.map(function (e) {
									y.push.apply(y, _toConsumableArray(s.filter(function (t) {
										return t && t.seat === e;
									})));
								});
								var g = s.filter(function (e) {
									return e && !p.includes(e.seat);
								});
								c = [].concat(y, _toConsumableArray(g));
							}
							if (c.length <= 0)
								return n([]);
							n(c);
						}).catch(function (e) {
							return n([]);
						});
					});
				},
				getNoteListSuccess: function (e) {
					var t = this.getQueryVariable('noteId'), r = e.filter(function (e) {
							return e.id == t;
						});
					if (r.length) {
						var n = r[0].sectionId;
						console.log('当前周', n), this.weekList.some(function (e, t) {
							if (e.week == n)
								return !0;
						});
						var o = this.currentVideos.filter(function (e) {
							return e.contentId_ == r[0].note;
						});
						this.mainPlayerInit(o[0], !0);
					}
				},
				getCourseDetail: function (e, t) {
					var r = this;
					if (!e)
						return this.setVideoError('课程还没有开始~');
					this.isCau ? this.mainPlayerInit() : this.getVideoAndSort(e, t).then(function (e) {
						r.currentVideos = e.filter(function (e) {
							return 1 == e.ifPublic;
						}), r.currentEditVideos = e, r.mainPlayerInit();
					}).catch(function (e) {
						return r.$message.error(e || '暂无课程视频'), r.setVideoError(e || '暂无课程视频');
					});
				},
				courseEditHandle: function (e) {
					var t = this, r = e.section, n = e.videoInfoList[0].scheduleId;
					this.getVideoAndSort([n], r).then(function (e) {
						var r = e[0].contentId_;
						e.forEach(function (e) {
							e.contentId_ == t.mainPlayer.audioVideoId && (r = e.contentId_);
						}), r && window.open(''.concat(t.baseUrl, '/unifiedplatform/#/resource/contentDetail?contentid=').concat(r));
					}).catch(function (e) {
						t.$message.error(e || '暂无课程视频');
					});
				},
				handleEditVideo: function (e) {
					window.open(''.concat(this.baseUrl, '/unifiedplatform/#/resource/contentDetail?contentid=').concat(e));
				},
				playerInitCommonPart: function () {
					var e = this;
					return _asyncToGenerator(_regeneratorRuntime().mark(function t() {
						var r;
						return _regeneratorRuntime().wrap(function (t) {
							for (;;)
								switch (t.prev = t.next) {
								case 0:
									return r = {
										id: 'main_player',
										urls: urls,
										playbackRate: [
											0.5,
											0.75,
											1,
											1.5,
											2
										],
										fluid: !0,
										closeInactive: !0,
										textTrack: [],
										autoplay: !0,
										videoInit: !0,
										screenShot: !0,
										errorTips: '暂无数据',
										memoryPlay: !0,
										videoHistoryParams: e.videoHistoryParams,
										lastPlayTimeHideDelay: 3,
										defaultFrame: 1,
										playsinline: !0,
										preload: !e.sysModulesFormat.includes('player_preload_off')
									}, e.sysModulesFormat.includes('course_review_voice_show') && r.textTrack.push({
										src: urls.map(function (e, t) {
											return '/rman/v1/search/webvtt?contentId=' + contentIds[t] + '&voice=true&isSysAuth=true';
										}),
										kind: 'subtitles',
										label: '简体中文',
										srclang: 'zh',
										default: e.sysModulesFormat.includes('course_review_default_show_texttrack')
									}, {
										src: urls.map(function (e, t) {
											return '/rman/v1/search/webvtt?contentId=' + contentIds[t] + '&lang=en&voice=true&isSysAuth=true';
										}),
										kind: 'subtitles',
										label: '英文',
										srclang: 'en',
										default: e.sysModulesFormat.includes('course_review_default_show_texttrack')
									}), t.prev = 2, t.next = 5, API.getVideoHistory(e.videoHistoryParams).then(function (t) {
										200 == t.status && t.data && (r.lastPlayTime = t.data.watchTime / 10000000, r.videoHistoryParams.id = t.data.id), e.currentFramesTime && (r.lastPlayTime = e.currentFramesTime, e.currentFramesTime = 0);
									});
								case 5:
									t.next = 9;
									break;
								case 7:
									t.prev = 7, t.t0 = t.catch(2);
								case 9:
								case 'end':
									return t.stop();
								}
						}, t, null, [[
								2,
								7
							]]);
					}))();
				},
				onSelectScreenChange: function (e) {
					this.$refs.courseware_screenshoot_panel.init([{ contentId: e.guid }]);
				},
				mainPlayerInit: function (e, t) {
					var r = this;
					return _asyncToGenerator(_regeneratorRuntime().mark(function n() {
						var o, i, a, s, c, u, l, d, f, m, h, v;
						return _regeneratorRuntime().wrap(function (n) {
							for (;;)
								switch (n.prev = n.next) {
								case 0:
									// if (!t || r.reviewPermission.liveAuthority) {
										n.next = 4;
										break;
									// }
									// return n.abrupt('return', r.$message.error('您没有观看直播权限\uFF01'));
								case 4:
									// if (t || r.reviewPermission.courseAuthority) {
										n.next = 6;
										break;
									// }
									// return n.abrupt('return', r.$message.error('您没有观看回看权限\uFF01'));
								case 6:
									if (i = r, console.log('currentEditVideos', r.currentEditVideos), a = r.currentEditVideos.map(function (e) {
											return e.contentId_;
										}), s = {
											id: 'main_player',
											playbackRate: [
												0.5,
												0.75,
												1,
												1.5,
												2
											],
											fluid: !0,
											closeInactive: !0,
											isLive: !!t,
											autoplay: !0,
											videoInit: !0,
											screenShot: !0,
											errorTips: '暂无数据',
											memoryPlay: !0,
											videoHistoryParams: r.videoHistoryParams,
											lastPlayTimeHideDelay: 3,
											defaultFrame: 1,
											playsinline: !0,
											preload: !r.sysModulesFormat.includes('player_preload_off'),
											version: 3,
											display: (r.sysModules.find(function (e) {
												return 'multi_view_player_display' == e.code;
											}) || {}).value || 1
										}, !r.showWatermark && !r.sysModulesFormat.includes('player_all_show_watermark') || r.sysModulesFormat.includes('course_review_watermark_off') || (s.watermark = ''.concat(i.loginUserInfo.nick_name, '\uFF0C').concat(i.loginUserInfo.user_code)), copyrightSetting && 0 == copyrightSetting.copyright && (s.advertisement = [{
												start: 0,
												cover: copyrightSetting.cover,
												duration: parseInt(null !== (c = copyrightSetting.showTime) && void 0 !== c ? c : 0)
											}]), !r.isCau) {
										n.next = 18;
										break;
									}
									if ('' != r.areaCode || !r.hostName.includes('caxt.chd.edu')) {
										n.next = 15;
										break;
									}
									return n.abrupt('return', r.$message.error('通过教室号获取资源失败\uFF01'));
								case 15:
									r.getCustomDayVideo(r.areaCode, r.startTime, r.endTime).then(function () {
										var e = _asyncToGenerator(_regeneratorRuntime().mark(function e(t) {
											var n, o, c, u;
											return _regeneratorRuntime().wrap(function (e) {
												for (;;)
													switch (e.prev = e.next) {
													case 0:
														if ('200' == t.status && t.data && 0 != t.data.records.length) {
															e.next = 2;
															break;
														}
														return e.abrupt('return', i.$message.error('获取资源失败\uFF01'));
													case 2:
														if (console.log('获取到的点播画面资源', t.data.records), 0 != (n = t.data.records[0].deviceViewList).length) {
															e.next = 6;
															break;
														}
														return e.abrupt('return', i.$message.error('获取资源失败\uFF01'));
													case 6:
														return r.currentEditVideos = n.map(function (e) {
															return { videoUrl: e.playUrl };
														}), o = n.map(function (e) {
															return {
																name: r.cauViewNameObj[e.deviViewNum],
																path: e.playUrl
															};
														}).splice(0, 4), i.videoUrls = o, s.urls = o, r.sysModulesFormat.includes('course_review_voice_show') && s.textTrack.push({
															src: o.map(function (e, t) {
																return '/rman/v1/search/webvtt?contentId=' + a[t] + '&voice=true&isSysAuth=true';
															}),
															kind: 'subtitles',
															label: '简体中文',
															srclang: 'zh',
															default: r.sysModulesFormat.includes('course_review_default_show_texttrack')
														}), e.prev = 11, e.next = 14, API.getVideoHistory(r.videoHistoryParams).then(function (e) {
															200 == e.status && e.data && (s.lastPlayTime = e.data.watchTime / 10000000, s.videoHistoryParams.id = e.data.id), r.currentFramesTime && (s.lastPlayTime = r.currentFramesTime, r.currentFramesTime = 0);
														});
													case 14:
														e.next = 18;
														break;
													case 16:
														e.prev = 16, e.t0 = e.catch(11);
													case 18:
														s.defaultFrame = n.map(function (e) {
															return e.deviViewNum;
														}), (c = ((r.sysModules.find(function (e) {
															return 'default_course_review_audio' == e.code;
														}) || {}).value || '').split(/[,|，]/)) && c.length && (u = [], o.map(function (e, t) {
															c.find(function (t) {
																return e.name.includes(t);
															}) && u.push(t + 1);
														}), s.defaultAudio = u), i.mainPlayer = new MultiViewPlayer(s), i.mainPlayer.audioVideoId = '', i.mainPlayer.on('timeupdate', function (e) {
															i.videoCurrentTime = (e.currentTime || 0) * VIDEOTIMEUNIT;
														});
													case 25:
													case 'end':
														return e.stop();
													}
											}, e, null, [[
													11,
													16
												]]);
										}));
										return function (t) {
											return e.apply(this, arguments);
										};
									}()), n.next = 24;
									break;
								case 18:
									if (e && e.length) {
										n.next = 21;
										break;
									}
									return n.next = 21, API.reqVidoreviewDetail(a).then(function () {
										var t = _asyncToGenerator(_regeneratorRuntime().mark(function t(n) {
											return _regeneratorRuntime().wrap(function (t) {
												for (;;)
													switch (t.prev = t.next) {
													case 0:
														if (n.success && n.data && n.data.length) {
															t.next = 3;
															break;
														}
														return e = [], t.abrupt('return');
													case 3:
														console.log('画面资源', n), r.currentEditVideos = r.currentEditVideos.map(function (e, t) {
															return _objectSpread(_objectSpread({}, e), {}, {
																videoUrl: n.data[t] && n.data[t].downloadAddress && n.data[t].downloadAddress[0] || '',
																videoId: n.data[t].contentId
															});
														}), e = r.currentEditVideos.map(function (e) {
															return {
																name: e.seat + (1 == e.ifPublic ? '' : '(未公开)'),
																path: e.videoUrl,
																videoId: e.videoId
															};
														}).splice(0, 4);
													case 6:
													case 'end':
														return t.stop();
													}
											}, t);
										}));
										return function (e) {
											return t.apply(this, arguments);
										};
									}());
								case 21:
									r.currentUrls = e, i.videoUrls = e, s.urls = e;
								case 24:
									return n.prev = 24, n.next = 27, API.getVideoHistory(r.videoHistoryParams).then(function (e) {
										200 == e.status && e.data && (s.lastPlayTime = e.data.watchTime / 10000000, s.videoHistoryParams.id = e.data.id), r.currentFramesTime && (s.lastPlayTime = r.currentFramesTime, r.currentFramesTime = 0);
									});
								case 27:
									n.next = 31;
									break;
								case 29:
									n.prev = 29, n.t0 = n.catch(24);
								case 31:
									(u = ((r.sysModules.find(function (e) {
										return 'course_review_screen_exclude' == e.code;
									}) || {}).value || '').split(/[,|，]/)) && u.length && (s.urls = s.urls.filter(function (e) {
										return !u.find(function (t) {
											return t && e.name.includes(t);
										});
									})), (l = ((r.sysModules.find(function (e) {
										return 'course_review_screen_sort' == e.code;
									}) || {}).value || '').split(/[,|，]/)) && l.length && (s.urls = s.urls.sort(function (e, t) {
										return -1 === l.findIndex(function (t) {
											return -1 != e.name.indexOf(t);
										}) ? 99 : -1 === l.findIndex(function (e) {
											return -1 != t.name.indexOf(e);
										}) ? -99 : l.findIndex(function (t) {
											return -1 != e.name.indexOf(t);
										}) - l.findIndex(function (e) {
											return -1 != t.name.indexOf(e);
										});
									})), d = '', (f = ((r.sysModules.find(function (e) {
										return 'default_course_review_screen' == e.code;
									}) || {}).value || '').split(/[,|，]/)) && f.length && (m = [], s.urls.map(function (e, t) {
										f.find(function (t) {
											return e.name.includes(t);
										}) && (m.push(t + 1), d || (d = e.videoId));
									}), s.defaultFrame = m), d || (d = null === (o = s.urls[0]) || void 0 === o ? void 0 : o.videoId), (h = ((r.sysModules.find(function (e) {
										return 'default_course_review_audio' == e.code;
									}) || {}).value || '').split(/[,|，]/)) && h.length && (v = [], s.urls.map(function (e, t) {
										h.find(function (t) {
											return e.name.includes(t);
										}) && (v.push(t + 1), d = e.videoId);
									}), s.defaultAudio = v), r.sysModulesFormat.includes('course_review_voice_show') && (s.textTrack = []), console.log('option', s), i.mainPlayer && (i.mainPlayer.destroy(), i.mainPlayer = null), s.videoId = d, i.mainPlayer = new MultiViewPlayer(s), i.getFragmentList(), console.log('that.mainPlayer', i.mainPlayer), i.mainPlayer.on('timeupdate', function (e) {
										i.videoCurrentTime = (e.currentTime || 0) * VIDEOTIMEUNIT;
									}), i.mainPlayer.on('change', function (e) {
										var t;
										i.mainScreenVideoId = null === (t = e[0]) || void 0 === t ? void 0 : t.urlInfo.videoId;
									});
								case 50:
								case 'end':
									return n.stop();
								}
						}, n, null, [[
								24,
								29
							]]);
					}))();
				},
				handleAddNote: function () {
					this.changeUserTab(3, !0), this.$refs.course_note_panel.addNoteHandel();
				},
				miniPlayerInit: function (e) {
					var t = this, r = this;
					API.reqVidoreviewDetail([e.contentId_]).then(function (n) {
						if (n.success) {
							var o = n.data.length ? n.data[0] : {};
							r.miniPlayer && (t.mainPlayer.pause(), r.miniPlayer.destroy(), r.miniPlayer = null);
							var i = r.baseUrl + o.downloadAddress[0], a = {
									id: 'mini_player',
									url: i,
									fluid: !0,
									videoInit: !0,
									controls: !1,
									volume: 0,
									errorTips: '暂无数据'
								};
							i.split('?')[0].includes('.flv') ? r.miniPlayer = new FlvJsPlayer(a) : i.split('?')[0].includes('.m3u8') ? r.miniPlayer = new HlsJsPlayer(a) : t.miniPlayer = new Player(a), r.miniPlayer.videoId = e.contentId_, r.miniPlayer.on('error', function (e) {
								console.log(e);
							}), e.currentTime && (r.miniPlayer.currentTime = e.currentTime), $('#mini_player video').unbind('click').on('click', function (e) {
								e.preventDefault(), r.videoExchange();
							});
						}
					});
				},
				collectHandle: function () {
					var e = this, t = this.courseInfo, r = t.courseName, n = t.teacherList, o = t.courseLocation, i = (t.courseTime, this.courseBackInfo.courseTimeData);
					i = (i || []).join(';'), API.reqCourseCollect({
						courseId: courseId,
						courseName: r,
						courseLocation: o,
						courseTime: i,
						teacherList: n.map(function (e) {
							return {
								userCode: e.userCode,
								userName: e.userName
							};
						}),
						collegeName: [],
						courseType: 'review'
					}).then(function (t) {
						200 === t.status && e.$message.success({
							message: '收藏成功',
							duration: 1000
						}), e.getCollectionCount();
					});
				},
				unCollectHandle: function () {
					var e = this;
					API.reqCourseUncollect({ courseId: courseId }).then(function (t) {
						e.getCollectionCount();
					});
				},
				getCollectionCount: function () {
					var e = this;
					API.reqCourseCollectMe({ courseId: courseId }).then(function (t) {
						t.message === config.successMessage && (e.collectionCount = t.data.collectionSize, e.isCollection = t.data.isCollection);
					});
				},
				pointHandle: function (e) {
					var t, r = e.inpoint;
					null === (t = this.mainPlayer) || void 0 === t || t.seek(r);
				},
				getQueryString: function (e) {
					var t = new RegExp('(^|&)' + e + '=([^&]*)(&|$)', 'i'), r = window.location.search.substr(1).match(t);
					return null != r ? unescape(r[2]) : null;
				},
				noteSeek: function (e) {
					var t, r = e.currentTime;
					e.videoId, null === (t = this.mainPlayer) || void 0 === t || t.seek(r);
				},
				initCloseEvent: function () {
					var e = this;
					window.onbeforeunload = function (t) {
						e.mainPlayer.saveVideoHistory();
					};
				},
				handleFramePublicChange: function (e) {
					var t = this, r = e.ifPublic, n = e.contentId_;
					console.log(r, e, n), API.reqSetFramePublic({
						courseId: courseId,
						ifPublic: null == r || 1 == r ? 1 : 0,
						videoId: n
					}).then(function (e) {
						if (200 != e.status)
							return Promise.reject();
					}).catch(function (n) {
						e.ifPublic = null == r || 1 == r ? 0 : 1, t.$message.error('设置失败\uFF01');
					});
				},
				initLiveCourse: function (e) {
					e.courseLiveInfo.kfr = 'zh', e.courseLiveInfo.kto = [
						{
							code: 'zh',
							name: '中文'
						},
						{
							code: 'en',
							name: '英文'
						}
					], console.log('liveInfo', e), this.liveCourseInfo = e.courseLiveInfo, this.voiceTranslation = e.voiceTranslation;
					var t = liveAddressFormat(e.courseLiveInfo ? e.courseLiveInfo.videoUrl : [], courseId);
					console.log('liveAddress', t), this.liveAddress = t.map(function (e, t) {
						return _objectSpread(_objectSpread({}, e), {}, { index: t });
					}), this.liveAddress.length && this.liveChangeHandle(this.liveAddress), console.log('liveAddress', t);
				},
				liveChangeHandle: function (e) {
					this.voiceTextStatus && (this.voiceTextStatus = !1, this.voiceToTextChangeHandle(!1)), console.log('liveArr', e), this.mainPlayerInit(e.map(function (e) {
						return {
							path: e.stream_address,
							name: e.stream_name,
							id: e._id,
							hasAudio: 'false' != e.is_mute
						};
					}), !0);
				},
				voiceToTextChangeHandle: function (e) {
					var t = this;
					if (this.liveInfo = this.liveAddress.find(function (e) {
							return e.stream_address == t.mainPlayer.voiceUrl.path;
						}), console.log('liveInfo', this.liveInfo), e) {
						if (!this.liveInfo._id)
							return this.$message.error('id不存在'), void (this.voiceTextStatus = !1);
						if ('false' == this.liveInfo.is_mute || !this.liveInfo.is_mute)
							return this.$message.error('当前语音流无声音\uFF0C开启语音识别失败\uFF01'), void (this.voiceTextStatus = !1);
						API.reqLiveVoiceToTextOpen({
							live_id: this.liveInfo._id,
							address: this.liveInfo.pull_url || this.liveInfo.push_url,
							ts: !0
						}).then(function (e) {
							return 200 == e.status ? t.voiceToTextStart(wsPrefix + location.host + e.data.ws) : Promise.reject(e);
						}).catch(function (r) {
							t.$message.error(r.message || '开启失败'), t.voiceTextStatus = !e;
						});
					} else {
						try {
							var r;
							null === (r = this.voiceToTextWs) || void 0 === r || r.close();
						} catch (e) {
							console.warn(e);
						}
						'prod' != config.env && API.reqLiveVoiceToTextClose({ live_id: this.liveInfo._id }).then();
					}
				},
				voiceToTextStart: function (e) {
					var t = this;
					return new Promise(function (r, n) {
						'WebSocket' in window ? (t.voiceToTextWs = new WebSocket(e), t.voiceToTextWs.onopen = function () {
							console.log('ws连接成功');
						}, t.voiceToTextWs.onmessage = t.handleWsMessage, t.voiceToTextWs.onclose = function (e) {
							console.log('ws关闭');
						}, t.voiceToTextWs.onerror = function (e) {
							console.error('ws出错', e);
						}) : console.error('您的浏览器不支持WebSocket');
					});
				},
				handleWsMessage: function (e) {
					if (e.data) {
						var t = JSON.parse(e.data);
						switch (t.code) {
						case 0:
						case 1:
						case 2:
						case 4:
							this.handleSmartText(t);
							break;
						case 10:
						case 11:
						default:
							break;
						case 301:
							this.$message.error('流地址解析错误');
							break;
						case 302:
							this.$message.error('语音识别\uFF08翻译\uFF09服务器连接错误');
							break;
						case 300:
							this.$message.error('服务器错误');
						}
					}
				},
				handleSmartText: function (e) {
					if (e.extend.text.match(/^(，|。|；|？|、|：)/) && (e.extend.text = e.extend.text.slice(1)), 'zh' == this.laguage)
						switch (e.code) {
						case 0:
							this.middleVoice = '', this.voiceList.unshift(e.extend);
							break;
						case 1:
							this.middleVoice = e.extend.text;
						}
					else
						switch (e.code) {
						case 2:
							this.middleVoice = '', this.voiceList.unshift(e.extend);
							break;
						case 4:
							this.middleVoice = e.extend.text;
						}
				},
				voiceListCallback: function (e) {
					var t, r, n = this;
					this.voiceTextShow = !!e, this.initDefaultTab(), this.sysModulesFormat.includes('course_review_voice_show') && (e ? null === (t = this.mainPlayer) || void 0 === t || t.setOption({
						textTrack: Object.keys(e).map(function (t) {
							var r;
							return {
								src: null === (r = n.mainPlayer) || void 0 === r ? void 0 : r.option.urls.map(function (e, r) {
									return '/rman/v1/search/webvtt?contentId=' + e.videoId + '&voice=true&isSysAuth=true&lang=' + t;
								}),
								label: e[t],
								srclang: t,
								default: n.sysModulesFormat.includes('course_review_default_show_texttrack')
							};
						})
					}) : null === (r = this.mainPlayer) || void 0 === r || r.setOption({ textTrack: [] }));
				},
				getCoursewareScreenshootTotal: function (e) {
					this.coursewareScreenshootTotal = e, this.showCoursewareScreenshoot = !!e;
				},
				formatDateTime: function (e, t, r) {
					var n, o, i = t && {
							'周一': 0,
							'周二': 1,
							'周三': 2,
							'周四': 3,
							'周五': 4,
							'周六': 5,
							'周日': 6
						}[t] || 0, a = '渭水' === this.courseBackInfo.campus ? this.weiShuiCourseTime : this.benBuCourseTime;
					n = a[r].startTime, o = a[r].endTime;
					var s = new Date(e), c = new Date(s.getTime() + 24 * i * 60 * 60 * 1000), u = c.getFullYear(), l = String(c.getMonth() + 1).padStart(2, '0'), d = String(c.getDate()).padStart(2, '0');
					return {
						start: ''.concat(u, '-').concat(l, '-').concat(d, ' ').concat(n),
						end: ''.concat(u, '-').concat(l, '-').concat(d, ' ').concat(o)
					};
				},
				getAreaCode: function () {
					var e = this;
					return _asyncToGenerator(_regeneratorRuntime().mark(function t() {
						var r;
						return _regeneratorRuntime().wrap(function (t) {
							for (;;)
								switch (t.prev = t.next) {
								case 0:
									if (e.hostName.includes('caxt.chd.edu')) {
										t.next = 2;
										break;
									}
									return t.abrupt('return');
								case 2:
									if (!(r = e.courseBackInfo.classroomNumber).includes(',') && !r.includes('\uFF0C')) {
										t.next = 8;
										break;
									}
									return t.next = 6, API.reqCourseInfoBySerialNo({
										course_no: serialNumber,
										page: 1,
										size: 10,
										key_word: e.courseBackInfo.courseName,
										area_name: e.courseBackInfo.campus + '-' + e.courseBackInfo.academicBuilding,
										semester: courseBackInfo.schoolYear + '学年' + courseBackInfo.semester
									}).then(function () {
										var t = _asyncToGenerator(_regeneratorRuntime().mark(function t(r) {
											var n, o, i;
											return _regeneratorRuntime().wrap(function (t) {
												for (;;)
													switch (t.prev = t.next) {
													case 0:
														'Success' == r.error_msg && (n = {
															'周一': 1,
															'周二': 2,
															'周三': 3,
															'周四': 4,
															'周五': 5,
															'周六': 6,
															'周日': 7
														}, o = e.resourceInfo.realSection, i = n[e.resourceInfo.weekDay], r.extend_message.results.forEach(function (t) {
															t.section.includes(o) && t.week_day == i && (e.areaCode = t.area_code);
														}));
													case 1:
													case 'end':
														return t.stop();
													}
											}, t);
										}));
										return function (e) {
											return t.apply(this, arguments);
										};
									}()).catch(function (e) {
										console.log('获取教室号失败\uFF1A', e);
									});
								case 6:
									t.next = 12;
									break;
								case 8:
									if (e.hostName.includes('caxt.chd.edu')) {
										t.next = 10;
										break;
									}
									return t.abrupt('return');
								case 10:
									return t.next = 12, API.reqCourseInfoBySerialNo({
										course_no: serialNumber,
										page: 1,
										size: 10,
										key_word: e.courseBackInfo.courseName,
										area_name: e.courseBackInfo.campus + '-' + e.courseBackInfo.academicBuilding + '-' + e.courseBackInfo.classroomNumber,
										semester: courseBackInfo.schoolYear + '学年' + courseBackInfo.semester
									}).then(function () {
										var t = _asyncToGenerator(_regeneratorRuntime().mark(function t(r) {
											return _regeneratorRuntime().wrap(function (t) {
												for (;;)
													switch (t.prev = t.next) {
													case 0:
														'Success' == r.error_msg && r.extend_message.results.forEach(function (t) {
															t.course_name == e.courseBackInfo.courseName && t.serial_number == serialNumber && (e.areaCode = t.area_code);
														});
													case 1:
													case 'end':
														return t.stop();
													}
											}, t);
										}));
										return function (e) {
											return t.apply(this, arguments);
										};
									}()).catch(function (e) {
										console.log('获取教室号失败\uFF1A', e);
									});
								case 12:
								case 'end':
									return t.stop();
								}
						}, t);
					}))();
				},
				checkIsCau: function () {
					var e = this;
					return _asyncToGenerator(_regeneratorRuntime().mark(function t() {
						return _regeneratorRuntime().wrap(function (t) {
							for (;;)
								switch (t.prev = t.next) {
								case 0:
									return t.next = 2, API.reqUserInfo().then(function (t) {
										t.data.libraryDate.forEach(function (t) {
											'target_customer' === t.code && 'cau' === t.value && (e.isCau = !0);
										});
									}).catch(function (e) {
									});
								case 2:
								case 'end':
									return t.stop();
								}
						}, t);
					}))();
				},
				getCustomDayVideo: function (e, t, r) {
					return API.reqVideoUrl({
						clroCode: e,
						startTime: t,
						endTime: r
					});
				},
				getCaNowWeek: function () {
					var e = this;
					return _asyncToGenerator(_regeneratorRuntime().mark(function t() {
						return _regeneratorRuntime().wrap(function (t) {
							for (;;)
								switch (t.prev = t.next) {
								case 0:
									if (e.hostName.includes('caxt.chd.edu')) {
										t.next = 2;
										break;
									}
									return t.abrupt('return');
								case 2:
									return t.next = 4, API.reqCourseInfoBySerialNo({
										course_no: serialNumber,
										page: 1,
										size: 10,
										key_word: e.courseBackInfo.courseName,
										area_name: e.courseBackInfo.campus + '-' + e.courseBackInfo.academicBuilding,
										semester: courseBackInfo.schoolYear + '学年' + courseBackInfo.semester
									}).then(function (t) {
										'Success' == t.error_msg && (e.caNowWeek = t.extend_message.now_week);
									}).catch(function (e) {
										console.log('获取当前周\uFF1A', e);
									});
								case 4:
								case 'end':
									return t.stop();
								}
						}, t);
					}))();
				},
				dateFormat: function (e) {
					if (!e)
						return '';
					var t = new Date(e);
					return t.getMonth() + 1 + '月' + t.getDate() + '日';
				},
				getClassTime: function (e) {
					return e ? (console.log('data--->', e), (e.weekDate ? this.dateFormat(e.weekDate) : '') + '   ' + (e.weekDay ? e.weekDay : '') + '   ' + (e.realSection ? e.realSection + '节' : '')) : '';
				},
				second2Time: function (e) {
					var t = parseInt(e), r = Math.floor(t / 3600);
					r < 10 && (r = '0' + r);
					var n = Math.floor(t % 3600 / 60);
					n < 10 && (n = '0' + n);
					var o = Math.floor(t % 3600 % 60);
					return o < 10 && (o = '0' + o), r + ':' + n + ':' + o;
				},
				time2Second: function (e) {
					return 3600 * parseInt(e.split(':')[0]) + 60 * parseInt(e.split(':')[1]) + parseInt(e.split(':')[2]);
				},
				getFragmentList: function (e) {
					var t = this, r = this;
					return new Promise(function (n) {
						var o = [];
						API.reqGetFragment({
							courseId: courseId,
							videoIds: t.currentUrls.map(function (e) {
								return e.videoId;
							})
						}).then(function (t) {
							if (200 == t.status) {
								var n = t.data.filter(function (e) {
									return 1 == e.onFragment;
								});
								if (r.fragmentList = n.map(function (e) {
										return _objectSpread(_objectSpread({}, e), {}, {
											startTime: r.second2Time(e.startTime),
											endTime: r.second2Time(e.endTime)
										});
									}), !r.fragmentList || !r.fragmentList.length)
									return void (r.fragmentChecked = null == e ? 0 : e);
								r.fragmentChecked = 1, o = n.map(function (e) {
									return [
										e.startTime,
										e.endTime
									];
								});
							}
						}).finally(function () {
							r.mainPlayer.setConfig({ fragmentList: o }), n();
						});
					});
				},
				toggleFragment: function (e) {
					var t = this;
					API.reqOpenCloseFragment({
						courseId: courseId,
						videoIds: this.currentUrls.map(function (e) {
							return e.videoId;
						}),
						onFragment: e
					}).then(function (r) {
						200 != r.status && (t.$message.error('操作失败'), t.fragmentChecked = !flag), 1 == e ? t.getFragmentList(!0) : t.mainPlayer.setConfig({ fragmentList: [] });
					});
				},
				handleAddFragmentConfirm: function (e) {
					var t = this;
					return _asyncToGenerator(_regeneratorRuntime().mark(function r() {
						var n, o, i;
						return _regeneratorRuntime().wrap(function (r) {
							for (;;)
								switch (r.prev = r.next) {
								case 0:
									t.fragmentList[e].startTime && t.fragmentList[e].endTime ? (n = [
										t.time2Second(t.fragmentList[e].startTime),
										t.time2Second(t.fragmentList[e].endTime)
									], o = n[0], i = n[1], t.mainPlayer.stopFragment(), t.fragmentList[e].id && API.reqDeleteFragment({ id: t.fragmentList[e].id }), API.reqAddFragment({
										courseId: courseId,
										videoIds: t.currentUrls.map(function (e) {
											return e.videoId;
										}),
										startTime: o,
										endTime: i,
										onFragment: 1
									}).then(function (e) {
										200 == e.status ? (t.fragmentEditIndex = -1, t.getFragmentList(), t.$message.success('添加成功')) : t.$message.error('添加失败');
									})) : fragmentList[e].startTime ? t.$message.error('请输入结束时间') : t.$message.error('请输入开始时间');
								case 1:
								case 'end':
									return r.stop();
								}
						}, r);
					}))();
				},
				handleDeleteFragment: function (e) {
					var t = this;
					this.fragmentList[e].id ? API.reqDeleteFragment({ id: this.fragmentList[e].id }).then(function (e) {
						200 == e.status ? t.$message.success('删除成功') : t.$message.error('删除失败');
					}).catch(function () {
						t.$message.error('删除失败');
					}).finally(function () {
						t.getFragmentList();
					}) : (this.fragmentList.splice(e, 1), console.log(this.fragmentList), this.mainPlayer.setConfig({
						fragmentList: this.fragmentList.map(function (e) {
							return [
								e.startTime,
								e.endTime
							];
						})
					}));
				},
				onFragment: function (e) {
					console.log(e), e = isNaN(e) ? 0 : e, this.fragmentList[this.fragmentEditIndex][this.fragmentEditType] = this.second2Time(e);
				},
				onFragmentFocus: function (e, t) {
					this.fragmentEditIndex = e, this.fragmentEditType = t, this.mainPlayer.startFragment('startTime' == t ? 0 : 1), this.mainPlayer.off('fragment', this.onFragment), this.mainPlayer.on('fragment', this.onFragment);
				},
				onFragmentBlur: function (e, t) {
					var r = this;
					r.fragmentEditIndex = e, r.fragmentEditType = t;
					var n = r.fragmentList[e][t];
					if (n) {
						var o = r.time2Second(n);
						r.onFragment(o);
					}
				},
				initPlayerWatermark: function () {
					var e = this;
					API.reqPlayerWatermark().then(function (t) {
						if ('success' == t.errorCode && t.extendMessage && t.extendMessage.length) {
							var r = t.extendMessage[0], n = r.watermarkModule, o = void 0 === n ? [] : n, i = r.watermarkLocation, a = r.watermarkPictureUrl;
							o.includes(1) && (e.watermarkPictureUrl = a, e.watermarkLocation = i);
						}
					});
				}
			}
		});
	}();
}());	//# sourceMappingURL=video_review_detail.js.map
