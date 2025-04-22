/*! For license information please see bundle.js.LICENSE.txt */
(() => {
  var e = {
      39: () => {
        function e(t) {
          return (
            (e =
              'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
                ? function (e) {
                    return typeof e;
                  }
                : function (e) {
                    return e &&
                      'function' == typeof Symbol &&
                      e.constructor === Symbol &&
                      e !== Symbol.prototype
                      ? 'symbol'
                      : typeof e;
                  }),
            e(t)
          );
        }
        function t(e, t) {
          for (var o = 0; o < t.length; o++) {
            var r = t[o];
            (r.enumerable = r.enumerable || !1),
              (r.configurable = !0),
              'value' in r && (r.writable = !0),
              Object.defineProperty(e, n(r.key), r);
          }
        }
        function n(t) {
          var n = (function (t) {
            if ('object' != e(t) || !t) return t;
            var n = t[Symbol.toPrimitive];
            if (void 0 !== n) {
              var o = n.call(t, 'string');
              if ('object' != e(o)) return o;
              throw new TypeError('@@toPrimitive must return a primitive value.');
            }
            return String(t);
          })(t);
          return 'symbol' == e(n) ? n : n + '';
        }
        function o(e) {
          var t = 'function' == typeof Map ? new Map() : void 0;
          return (
            (o = function (e) {
              if (
                null === e ||
                !(function (e) {
                  try {
                    return -1 !== Function.toString.call(e).indexOf('[native code]');
                  } catch (t) {
                    return 'function' == typeof e;
                  }
                })(e)
              )
                return e;
              if ('function' != typeof e)
                throw new TypeError('Super expression must either be null or a function');
              if (void 0 !== t) {
                if (t.has(e)) return t.get(e);
                t.set(e, n);
              }
              function n() {
                return (function (e, t, n) {
                  if (r()) return Reflect.construct.apply(null, arguments);
                  var o = [null];
                  o.push.apply(o, t);
                  var i = new (e.bind.apply(e, o))();
                  return n && a(i, n.prototype), i;
                })(e, arguments, i(this).constructor);
              }
              return (
                (n.prototype = Object.create(e.prototype, {
                  constructor: { value: n, enumerable: !1, writable: !0, configurable: !0 },
                })),
                a(n, e)
              );
            }),
            o(e)
          );
        }
        function r() {
          try {
            var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
          } catch (e) {}
          return (r = function () {
            return !!e;
          })();
        }
        function a(e, t) {
          return (
            (a = Object.setPrototypeOf
              ? Object.setPrototypeOf.bind()
              : function (e, t) {
                  return (e.__proto__ = t), e;
                }),
            a(e, t)
          );
        }
        function i(e) {
          return (
            (i = Object.setPrototypeOf
              ? Object.getPrototypeOf.bind()
              : function (e) {
                  return e.__proto__ || Object.getPrototypeOf(e);
                }),
            i(e)
          );
        }
        var s = (function (n) {
          function o() {
            var t;
            return (
              (function (e, t) {
                if (!(e instanceof t)) throw new TypeError('Cannot call a class as a function');
              })(this, o),
              (t = (function (t, n, o) {
                return (
                  (n = i(n)),
                  (function (t, n) {
                    if (n && ('object' == e(n) || 'function' == typeof n)) return n;
                    if (void 0 !== n)
                      throw new TypeError(
                        'Derived constructors may only return object or undefined'
                      );
                    return (function (e) {
                      if (void 0 === e)
                        throw new ReferenceError(
                          "this hasn't been initialised - super() hasn't been called"
                        );
                      return e;
                    })(t);
                  })(t, r() ? Reflect.construct(n, o || [], i(t).constructor) : n.apply(t, o))
                );
              })(this, o)).attachShadow({ mode: 'open' }),
              t
            );
          }
          return (
            (function (e, t) {
              if ('function' != typeof t && null !== t)
                throw new TypeError('Super expression must either be null or a function');
              (e.prototype = Object.create(t && t.prototype, {
                constructor: { value: e, writable: !0, configurable: !0 },
              })),
                Object.defineProperty(e, 'prototype', { writable: !1 }),
                t && a(e, t);
            })(o, n),
            (s = o),
            (l = [
              {
                key: 'connectedCallback',
                value: function () {
                  this.render();
                },
              },
              {
                key: 'render',
                value: function () {
                  this.shadowRoot.innerHTML =
                    "\n            <style>\n                header {\n                    background-color: #006A71;\n                    color: white;\n                    padding: 1rem 2rem;\n                    text-align: center;\n                    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;\n                    box-shadow: 0 2px 4px rgba(0,0,0,0.1);\n                }\n                h1 {\n                    margin: 0;\n                    font-size: 2rem;\n                }\n            </style>\n            <header>\n                <h1>Notes App</h1>\n            </header>\n        ";
                },
              },
            ]) && t(s.prototype, l),
            Object.defineProperty(s, 'prototype', { writable: !1 }),
            s
          );
          var s, l;
        })(o(HTMLElement));
        customElements.define('notes-header', s);
      },
      56: (e, t, n) => {
        'use strict';
        e.exports = function (e) {
          var t = n.nc;
          t && e.setAttribute('nonce', t);
        };
      },
      72: e => {
        'use strict';
        var t = [];
        function n(e) {
          for (var n = -1, o = 0; o < t.length; o++)
            if (t[o].identifier === e) {
              n = o;
              break;
            }
          return n;
        }
        function o(e, o) {
          for (var a = {}, i = [], s = 0; s < e.length; s++) {
            var l = e[s],
              c = o.base ? l[0] + o.base : l[0],
              u = a[c] || 0,
              d = ''.concat(c, ' ').concat(u);
            a[c] = u + 1;
            var p = n(d),
              h = { css: l[1], media: l[2], sourceMap: l[3], supports: l[4], layer: l[5] };
            if (-1 !== p) t[p].references++, t[p].updater(h);
            else {
              var f = r(h, o);
              (o.byIndex = s), t.splice(s, 0, { identifier: d, updater: f, references: 1 });
            }
            i.push(d);
          }
          return i;
        }
        function r(e, t) {
          var n = t.domAPI(t);
          return (
            n.update(e),
            function (t) {
              if (t) {
                if (
                  t.css === e.css &&
                  t.media === e.media &&
                  t.sourceMap === e.sourceMap &&
                  t.supports === e.supports &&
                  t.layer === e.layer
                )
                  return;
                n.update((e = t));
              } else n.remove();
            }
          );
        }
        e.exports = function (e, r) {
          var a = o((e = e || []), (r = r || {}));
          return function (e) {
            e = e || [];
            for (var i = 0; i < a.length; i++) {
              var s = n(a[i]);
              t[s].references--;
            }
            for (var l = o(e, r), c = 0; c < a.length; c++) {
              var u = n(a[c]);
              0 === t[u].references && (t[u].updater(), t.splice(u, 1));
            }
            a = l;
          };
        };
      },
      106: (e, t, n) => {
        'use strict';
        n.d(t, { A: () => s });
        var o = n(601),
          r = n.n(o),
          a = n(314),
          i = n.n(a)()(r());
        i.push([
          e.id,
          "* {\n  box-sizing: border-box;\n  margin: 0;\n  padding: 0;\n  font-family: 'monserrat', sans-serif;\n}\n\nmain {\n  max-width: 100%;\n  margin: 1rem 5rem;\n  display: flex;\n  flex-direction: column;\n  gap: 2rem;\n  padding: 1rem;\n}\n\nmain > div {\n  background-color: #fff;\n  padding: 1.5rem 2rem;\n  border-radius: 12px;\n  box-shadow: 0 4px 12px #006a71;\n}\n\n.error-message {\n  color: red;\n  font-size: 0.8rem;\n  margin-top: 5px;\n  display: block;\n}\n\ninput:invalid,\ntextarea:invalid {\n  border-color: red;\n}\n\n.filter-buttons {\n  display: flex;\n  justify-content: center;\n  gap: 1rem;\n  padding: 0 1rem;\n  margin-bottom: 1rem;\n}\n\n.filter-buttons button {\n  padding: 0.5rem 1.25rem;\n  border: none;\n  border-radius: 5px;\n  background-color: #006a71;\n  color: white;\n  cursor: pointer;\n  font-size: 0.9rem;\n}\n\n.filter-buttons button:hover {\n  background-color: #049798;\n}\n\n@media (max-width: 600px) {\n  main {\n    margin: 0;\n  }\n  main div {\n    margin: 0 1rem;\n    padding: 1rem 1rem;\n  }\n}\n\n@media (max-width: 450px) {\n  .filter-buttons {\n    flex-direction: column;\n    gap: 1rem;\n  }\n  .filter-buttons button {\n    width: 100%;\n    padding: 0.5rem 0;\n    text-align: center;\n  }\n}\n\n.loading-indicator {\n  position: fixed;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  width: 40px;\n  height: 40px;\n  border: 5px solid #f3f3f3;\n  border-top: 5px solid #f1c40f;\n  border-radius: 50%;\n  animation: spin 2s linear infinite;\n  display: none; /* Hide by default */\n}\n\n@keyframes spin {\n  0% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n}\n",
          '',
        ]);
        const s = i;
      },
      113: e => {
        'use strict';
        e.exports = function (e, t) {
          if (t.styleSheet) t.styleSheet.cssText = e;
          else {
            for (; t.firstChild; ) t.removeChild(t.firstChild);
            t.appendChild(document.createTextNode(e));
          }
        };
      },
      314: e => {
        'use strict';
        e.exports = function (e) {
          var t = [];
          return (
            (t.toString = function () {
              return this.map(function (t) {
                var n = '',
                  o = void 0 !== t[5];
                return (
                  t[4] && (n += '@supports ('.concat(t[4], ') {')),
                  t[2] && (n += '@media '.concat(t[2], ' {')),
                  o && (n += '@layer'.concat(t[5].length > 0 ? ' '.concat(t[5]) : '', ' {')),
                  (n += e(t)),
                  o && (n += '}'),
                  t[2] && (n += '}'),
                  t[4] && (n += '}'),
                  n
                );
              }).join('');
            }),
            (t.i = function (e, n, o, r, a) {
              'string' == typeof e && (e = [[null, e, void 0]]);
              var i = {};
              if (o)
                for (var s = 0; s < this.length; s++) {
                  var l = this[s][0];
                  null != l && (i[l] = !0);
                }
              for (var c = 0; c < e.length; c++) {
                var u = [].concat(e[c]);
                (o && i[u[0]]) ||
                  (void 0 !== a &&
                    (void 0 === u[5] ||
                      (u[1] = '@layer'
                        .concat(u[5].length > 0 ? ' '.concat(u[5]) : '', ' {')
                        .concat(u[1], '}')),
                    (u[5] = a)),
                  n &&
                    (u[2]
                      ? ((u[1] = '@media '.concat(u[2], ' {').concat(u[1], '}')), (u[2] = n))
                      : (u[2] = n)),
                  r &&
                    (u[4]
                      ? ((u[1] = '@supports ('.concat(u[4], ') {').concat(u[1], '}')), (u[4] = r))
                      : (u[4] = ''.concat(r))),
                  t.push(u));
              }
            }),
            t
          );
        };
      },
      465: function (e) {
        (e.exports = (function () {
          'use strict';
          function e(e, t, n) {
            if ('function' == typeof e ? e === t : e.has(t)) return arguments.length < 3 ? t : n;
            throw new TypeError('Private element is not present on this object');
          }
          function t(t, n) {
            return t.get(e(t, n));
          }
          function n(e, t, n) {
            (function (e, t) {
              if (t.has(e))
                throw new TypeError(
                  'Cannot initialize the same private elements twice on an object'
                );
            })(e, t),
              t.set(e, n);
          }
          const o = {},
            r = e =>
              new Promise(t => {
                if (!e) return t();
                const n = window.scrollX,
                  r = window.scrollY;
                (o.restoreFocusTimeout = setTimeout(() => {
                  o.previousActiveElement instanceof HTMLElement
                    ? (o.previousActiveElement.focus(), (o.previousActiveElement = null))
                    : document.body && document.body.focus(),
                    t();
                }, 100)),
                  window.scrollTo(n, r);
              }),
            a = 'swal2-',
            i = [
              'container',
              'shown',
              'height-auto',
              'iosfix',
              'popup',
              'modal',
              'no-backdrop',
              'no-transition',
              'toast',
              'toast-shown',
              'show',
              'hide',
              'close',
              'title',
              'html-container',
              'actions',
              'confirm',
              'deny',
              'cancel',
              'footer',
              'icon',
              'icon-content',
              'image',
              'input',
              'file',
              'range',
              'select',
              'radio',
              'checkbox',
              'label',
              'textarea',
              'inputerror',
              'input-label',
              'validation-message',
              'progress-steps',
              'active-progress-step',
              'progress-step',
              'progress-step-line',
              'loader',
              'loading',
              'styled',
              'top',
              'top-start',
              'top-end',
              'top-left',
              'top-right',
              'center',
              'center-start',
              'center-end',
              'center-left',
              'center-right',
              'bottom',
              'bottom-start',
              'bottom-end',
              'bottom-left',
              'bottom-right',
              'grow-row',
              'grow-column',
              'grow-fullscreen',
              'rtl',
              'timer-progress-bar',
              'timer-progress-bar-container',
              'scrollbar-measure',
              'icon-success',
              'icon-warning',
              'icon-info',
              'icon-question',
              'icon-error',
              'draggable',
              'dragging',
            ].reduce((e, t) => ((e[t] = a + t), e), {}),
            s = ['success', 'warning', 'info', 'question', 'error'].reduce(
              (e, t) => ((e[t] = a + t), e),
              {}
            ),
            l = 'SweetAlert2:',
            c = e => e.charAt(0).toUpperCase() + e.slice(1),
            u = e => {
              console.warn(`${l} ${'object' == typeof e ? e.join(' ') : e}`);
            },
            d = e => {
              console.error(`${l} ${e}`);
            },
            p = [],
            h = function (e) {
              let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
              var n;
              (n = `"${e}" is deprecated and will be removed in the next major release.${t ? ` Use "${t}" instead.` : ''}`),
                p.includes(n) || (p.push(n), u(n));
            },
            f = e => ('function' == typeof e ? e() : e),
            w = e => e && 'function' == typeof e.toPromise,
            m = e => (w(e) ? e.toPromise() : Promise.resolve(e)),
            g = e => e && Promise.resolve(e) === e,
            b = () => document.body.querySelector(`.${i.container}`),
            v = e => {
              const t = b();
              return t ? t.querySelector(e) : null;
            },
            y = e => v(`.${e}`),
            x = () => y(i.popup),
            k = () => y(i.icon),
            E = () => y(i.title),
            C = () => y(i['html-container']),
            L = () => y(i.image),
            A = () => y(i['progress-steps']),
            O = () => y(i['validation-message']),
            j = () => v(`.${i.actions} .${i.confirm}`),
            P = () => v(`.${i.actions} .${i.cancel}`),
            T = () => v(`.${i.actions} .${i.deny}`),
            S = () => v(`.${i.loader}`),
            B = () => y(i.actions),
            $ = () => y(i.footer),
            M = () => y(i['timer-progress-bar']),
            _ = () => y(i.close),
            z = () => {
              const e = x();
              if (!e) return [];
              const t = e.querySelectorAll('[tabindex]:not([tabindex="-1"]):not([tabindex="0"])'),
                n = Array.from(t).sort((e, t) => {
                  const n = parseInt(e.getAttribute('tabindex') || '0'),
                    o = parseInt(t.getAttribute('tabindex') || '0');
                  return n > o ? 1 : n < o ? -1 : 0;
                }),
                o = e.querySelectorAll(
                  '\n  a[href],\n  area[href],\n  input:not([disabled]),\n  select:not([disabled]),\n  textarea:not([disabled]),\n  button:not([disabled]),\n  iframe,\n  object,\n  embed,\n  [tabindex="0"],\n  [contenteditable],\n  audio[controls],\n  video[controls],\n  summary\n'
                ),
                r = Array.from(o).filter(e => '-1' !== e.getAttribute('tabindex'));
              return [...new Set(n.concat(r))].filter(e => ee(e));
            },
            H = () =>
              N(document.body, i.shown) &&
              !N(document.body, i['toast-shown']) &&
              !N(document.body, i['no-backdrop']),
            I = () => {
              const e = x();
              return !!e && N(e, i.toast);
            },
            R = (e, t) => {
              if (((e.textContent = ''), t)) {
                const n = new DOMParser().parseFromString(t, 'text/html'),
                  o = n.querySelector('head');
                o &&
                  Array.from(o.childNodes).forEach(t => {
                    e.appendChild(t);
                  });
                const r = n.querySelector('body');
                r &&
                  Array.from(r.childNodes).forEach(t => {
                    t instanceof HTMLVideoElement || t instanceof HTMLAudioElement
                      ? e.appendChild(t.cloneNode(!0))
                      : e.appendChild(t);
                  });
              }
            },
            N = (e, t) => {
              if (!t) return !1;
              const n = t.split(/\s+/);
              for (let t = 0; t < n.length; t++) if (!e.classList.contains(n[t])) return !1;
              return !0;
            },
            D = (e, t, n) => {
              if (
                (((e, t) => {
                  Array.from(e.classList).forEach(n => {
                    Object.values(i).includes(n) ||
                      Object.values(s).includes(n) ||
                      Object.values(t.showClass || {}).includes(n) ||
                      e.classList.remove(n);
                  });
                })(e, t),
                !t.customClass)
              )
                return;
              const o = t.customClass[n];
              o &&
                ('string' == typeof o || o.forEach
                  ? U(e, o)
                  : u(
                      `Invalid type of customClass.${n}! Expected string or iterable object, got "${typeof o}"`
                    ));
            },
            q = (e, t) => {
              if (!t) return null;
              switch (t) {
                case 'select':
                case 'textarea':
                case 'file':
                  return e.querySelector(`.${i.popup} > .${i[t]}`);
                case 'checkbox':
                  return e.querySelector(`.${i.popup} > .${i.checkbox} input`);
                case 'radio':
                  return (
                    e.querySelector(`.${i.popup} > .${i.radio} input:checked`) ||
                    e.querySelector(`.${i.popup} > .${i.radio} input:first-child`)
                  );
                case 'range':
                  return e.querySelector(`.${i.popup} > .${i.range} input`);
                default:
                  return e.querySelector(`.${i.popup} > .${i.input}`);
              }
            },
            F = e => {
              if ((e.focus(), 'file' !== e.type)) {
                const t = e.value;
                (e.value = ''), (e.value = t);
              }
            },
            V = (e, t, n) => {
              e &&
                t &&
                ('string' == typeof t && (t = t.split(/\s+/).filter(Boolean)),
                t.forEach(t => {
                  Array.isArray(e)
                    ? e.forEach(e => {
                        n ? e.classList.add(t) : e.classList.remove(t);
                      })
                    : n
                      ? e.classList.add(t)
                      : e.classList.remove(t);
                }));
            },
            U = (e, t) => {
              V(e, t, !0);
            },
            Y = (e, t) => {
              V(e, t, !1);
            },
            G = (e, t) => {
              const n = Array.from(e.children);
              for (let e = 0; e < n.length; e++) {
                const o = n[e];
                if (o instanceof HTMLElement && N(o, t)) return o;
              }
            },
            K = (e, t, n) => {
              n === `${parseInt(n)}` && (n = parseInt(n)),
                n || 0 === parseInt(n)
                  ? e.style.setProperty(t, 'number' == typeof n ? `${n}px` : n)
                  : e.style.removeProperty(t);
            },
            W = function (e) {
              let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 'flex';
              e && (e.style.display = t);
            },
            Z = e => {
              e && (e.style.display = 'none');
            },
            X = function (e) {
              let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 'block';
              e &&
                new MutationObserver(() => {
                  Q(e, e.innerHTML, t);
                }).observe(e, { childList: !0, subtree: !0 });
            },
            J = (e, t, n, o) => {
              const r = e.querySelector(t);
              r && r.style.setProperty(n, o);
            },
            Q = function (e, t) {
              t
                ? W(e, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 'flex')
                : Z(e);
            },
            ee = e => !(!e || !(e.offsetWidth || e.offsetHeight || e.getClientRects().length)),
            te = e => !!(e.scrollHeight > e.clientHeight),
            ne = e => {
              const t = window.getComputedStyle(e),
                n = parseFloat(t.getPropertyValue('animation-duration') || '0'),
                o = parseFloat(t.getPropertyValue('transition-duration') || '0');
              return n > 0 || o > 0;
            },
            oe = function (e) {
              let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
              const n = M();
              n &&
                ee(n) &&
                (t && ((n.style.transition = 'none'), (n.style.width = '100%')),
                setTimeout(() => {
                  (n.style.transition = `width ${e / 1e3}s linear`), (n.style.width = '0%');
                }, 10));
            },
            re =
              `\n <div aria-labelledby="${i.title}" aria-describedby="${i['html-container']}" class="${i.popup}" tabindex="-1">\n   <button type="button" class="${i.close}"></button>\n   <ul class="${i['progress-steps']}"></ul>\n   <div class="${i.icon}"></div>\n   <img class="${i.image}" />\n   <h2 class="${i.title}" id="${i.title}"></h2>\n   <div class="${i['html-container']}" id="${i['html-container']}"></div>\n   <input class="${i.input}" id="${i.input}" />\n   <input type="file" class="${i.file}" />\n   <div class="${i.range}">\n     <input type="range" />\n     <output></output>\n   </div>\n   <select class="${i.select}" id="${i.select}"></select>\n   <div class="${i.radio}"></div>\n   <label class="${i.checkbox}">\n     <input type="checkbox" id="${i.checkbox}" />\n     <span class="${i.label}"></span>\n   </label>\n   <textarea class="${i.textarea}" id="${i.textarea}"></textarea>\n   <div class="${i['validation-message']}" id="${i['validation-message']}"></div>\n   <div class="${i.actions}">\n     <div class="${i.loader}"></div>\n     <button type="button" class="${i.confirm}"></button>\n     <button type="button" class="${i.deny}"></button>\n     <button type="button" class="${i.cancel}"></button>\n   </div>\n   <div class="${i.footer}"></div>\n   <div class="${i['timer-progress-bar-container']}">\n     <div class="${i['timer-progress-bar']}"></div>\n   </div>\n </div>\n`.replace(
                /(^|\n)\s*/g,
                ''
              ),
            ae = () => {
              o.currentInstance.resetValidationMessage();
            },
            ie = e => {
              const t = (() => {
                const e = b();
                return (
                  !!e &&
                  (e.remove(),
                  Y(
                    [document.documentElement, document.body],
                    [i['no-backdrop'], i['toast-shown'], i['has-column']]
                  ),
                  !0)
                );
              })();
              if ('undefined' == typeof window || 'undefined' == typeof document)
                return void d('SweetAlert2 requires document to initialize');
              const n = document.createElement('div');
              (n.className = i.container),
                t && U(n, i['no-transition']),
                R(n, re),
                (n.dataset.swal2Theme = e.theme);
              const o = 'string' == typeof (r = e.target) ? document.querySelector(r) : r;
              var r;
              o.appendChild(n),
                (e => {
                  const t = x();
                  t.setAttribute('role', e.toast ? 'alert' : 'dialog'),
                    t.setAttribute('aria-live', e.toast ? 'polite' : 'assertive'),
                    e.toast || t.setAttribute('aria-modal', 'true');
                })(e),
                (e => {
                  'rtl' === window.getComputedStyle(e).direction && U(b(), i.rtl);
                })(o),
                (() => {
                  const e = x(),
                    t = G(e, i.input),
                    n = G(e, i.file),
                    o = e.querySelector(`.${i.range} input`),
                    r = e.querySelector(`.${i.range} output`),
                    a = G(e, i.select),
                    s = e.querySelector(`.${i.checkbox} input`),
                    l = G(e, i.textarea);
                  (t.oninput = ae),
                    (n.onchange = ae),
                    (a.onchange = ae),
                    (s.onchange = ae),
                    (l.oninput = ae),
                    (o.oninput = () => {
                      ae(), (r.value = o.value);
                    }),
                    (o.onchange = () => {
                      ae(), (r.value = o.value);
                    });
                })();
            },
            se = (e, t) => {
              e instanceof HTMLElement
                ? t.appendChild(e)
                : 'object' == typeof e
                  ? le(e, t)
                  : e && R(t, e);
            },
            le = (e, t) => {
              e.jquery ? ce(t, e) : R(t, e.toString());
            },
            ce = (e, t) => {
              if (((e.textContent = ''), 0 in t))
                for (let n = 0; n in t; n++) e.appendChild(t[n].cloneNode(!0));
              else e.appendChild(t.cloneNode(!0));
            },
            ue = (e, t) => {
              const n = B(),
                o = S();
              n &&
                o &&
                (t.showConfirmButton || t.showDenyButton || t.showCancelButton ? W(n) : Z(n),
                D(n, t, 'actions'),
                (function (e, t, n) {
                  const o = j(),
                    r = T(),
                    a = P();
                  o &&
                    r &&
                    a &&
                    (pe(o, 'confirm', n),
                    pe(r, 'deny', n),
                    pe(a, 'cancel', n),
                    (function (e, t, n, o) {
                      o.buttonsStyling
                        ? (U([e, t, n], i.styled),
                          o.confirmButtonColor &&
                            e.style.setProperty(
                              '--swal2-confirm-button-background-color',
                              o.confirmButtonColor
                            ),
                          o.denyButtonColor &&
                            t.style.setProperty(
                              '--swal2-deny-button-background-color',
                              o.denyButtonColor
                            ),
                          o.cancelButtonColor &&
                            n.style.setProperty(
                              '--swal2-cancel-button-background-color',
                              o.cancelButtonColor
                            ),
                          de(e),
                          de(t),
                          de(n))
                        : Y([e, t, n], i.styled);
                    })(o, r, a, n),
                    n.reverseButtons &&
                      (n.toast
                        ? (e.insertBefore(a, o), e.insertBefore(r, o))
                        : (e.insertBefore(a, t), e.insertBefore(r, t), e.insertBefore(o, t))));
                })(n, o, t),
                R(o, t.loaderHtml || ''),
                D(o, t, 'loader'));
            };
          function de(e) {
            const t = window.getComputedStyle(e),
              n = t.backgroundColor.replace(
                /rgba?\((\d+), (\d+), (\d+).*/,
                'rgba($1, $2, $3, 0.5)'
              );
            e.style.setProperty(
              '--swal2-action-button-outline',
              t.getPropertyValue('--swal2-outline').replace(/ rgba\(.*/, ` ${n}`)
            );
          }
          function pe(e, t, n) {
            const o = c(t);
            Q(e, n[`show${o}Button`], 'inline-block'),
              R(e, n[`${t}ButtonText`] || ''),
              e.setAttribute('aria-label', n[`${t}ButtonAriaLabel`] || ''),
              (e.className = i[t]),
              D(e, n, `${t}Button`);
          }
          const he = (e, t) => {
            const n = b();
            n &&
              ((function (e, t) {
                'string' == typeof t
                  ? (e.style.background = t)
                  : t || U([document.documentElement, document.body], i['no-backdrop']);
              })(n, t.backdrop),
              (function (e, t) {
                t &&
                  (t in i
                    ? U(e, i[t])
                    : (u('The "position" parameter is not valid, defaulting to "center"'),
                      U(e, i.center)));
              })(n, t.position),
              (function (e, t) {
                t && U(e, i[`grow-${t}`]);
              })(n, t.grow),
              D(n, t, 'container'));
          };
          var fe = { innerParams: new WeakMap(), domCache: new WeakMap() };
          const we = ['input', 'file', 'range', 'select', 'radio', 'checkbox', 'textarea'],
            me = e => {
              if (!e.input) return;
              if (!Ee[e.input])
                return void d(
                  `Unexpected type of input! Expected ${Object.keys(Ee).join(' | ')}, got "${e.input}"`
                );
              const t = xe(e.input);
              if (!t) return;
              const n = Ee[e.input](t, e);
              W(t),
                e.inputAutoFocus &&
                  setTimeout(() => {
                    F(n);
                  });
            },
            ge = (e, t) => {
              const n = x();
              if (!n) return;
              const o = q(n, e);
              if (o) {
                (e => {
                  for (let t = 0; t < e.attributes.length; t++) {
                    const n = e.attributes[t].name;
                    ['id', 'type', 'value', 'style'].includes(n) || e.removeAttribute(n);
                  }
                })(o);
                for (const e in t) o.setAttribute(e, t[e]);
              }
            },
            be = e => {
              if (!e.input) return;
              const t = xe(e.input);
              t && D(t, e, 'input');
            },
            ve = (e, t) => {
              !e.placeholder && t.inputPlaceholder && (e.placeholder = t.inputPlaceholder);
            },
            ye = (e, t, n) => {
              if (n.inputLabel) {
                const o = document.createElement('label'),
                  r = i['input-label'];
                o.setAttribute('for', e.id),
                  (o.className = r),
                  'object' == typeof n.customClass && U(o, n.customClass.inputLabel),
                  (o.innerText = n.inputLabel),
                  t.insertAdjacentElement('beforebegin', o);
              }
            },
            xe = e => {
              const t = x();
              if (t) return G(t, i[e] || i.input);
            },
            ke = (e, t) => {
              ['string', 'number'].includes(typeof t)
                ? (e.value = `${t}`)
                : g(t) ||
                  u(
                    `Unexpected type of inputValue! Expected "string", "number" or "Promise", got "${typeof t}"`
                  );
            },
            Ee = {};
          (Ee.text =
            Ee.email =
            Ee.password =
            Ee.number =
            Ee.tel =
            Ee.url =
            Ee.search =
            Ee.date =
            Ee['datetime-local'] =
            Ee.time =
            Ee.week =
            Ee.month =
              (e, t) => (ke(e, t.inputValue), ye(e, e, t), ve(e, t), (e.type = t.input), e)),
            (Ee.file = (e, t) => (ye(e, e, t), ve(e, t), e)),
            (Ee.range = (e, t) => {
              const n = e.querySelector('input'),
                o = e.querySelector('output');
              return ke(n, t.inputValue), (n.type = t.input), ke(o, t.inputValue), ye(n, e, t), e;
            }),
            (Ee.select = (e, t) => {
              if (((e.textContent = ''), t.inputPlaceholder)) {
                const n = document.createElement('option');
                R(n, t.inputPlaceholder),
                  (n.value = ''),
                  (n.disabled = !0),
                  (n.selected = !0),
                  e.appendChild(n);
              }
              return ye(e, e, t), e;
            }),
            (Ee.radio = e => ((e.textContent = ''), e)),
            (Ee.checkbox = (e, t) => {
              const n = q(x(), 'checkbox');
              (n.value = '1'), (n.checked = Boolean(t.inputValue));
              const o = e.querySelector('span');
              return R(o, t.inputPlaceholder || t.inputLabel), n;
            }),
            (Ee.textarea = (e, t) => {
              ke(e, t.inputValue), ve(e, t), ye(e, e, t);
              return (
                setTimeout(() => {
                  if ('MutationObserver' in window) {
                    const n = parseInt(window.getComputedStyle(x()).width);
                    new MutationObserver(() => {
                      if (!document.body.contains(e)) return;
                      const o =
                        e.offsetWidth +
                        ((r = e),
                        parseInt(window.getComputedStyle(r).marginLeft) +
                          parseInt(window.getComputedStyle(r).marginRight));
                      var r;
                      o > n ? (x().style.width = `${o}px`) : K(x(), 'width', t.width);
                    }).observe(e, { attributes: !0, attributeFilter: ['style'] });
                  }
                }),
                e
              );
            });
          const Ce = (e, t) => {
              const n = C();
              n &&
                (X(n),
                D(n, t, 'htmlContainer'),
                t.html
                  ? (se(t.html, n), W(n, 'block'))
                  : t.text
                    ? ((n.textContent = t.text), W(n, 'block'))
                    : Z(n),
                ((e, t) => {
                  const n = x();
                  if (!n) return;
                  const o = fe.innerParams.get(e),
                    r = !o || t.input !== o.input;
                  we.forEach(e => {
                    const o = G(n, i[e]);
                    o && (ge(e, t.inputAttributes), (o.className = i[e]), r && Z(o));
                  }),
                    t.input && (r && me(t), be(t));
                })(e, t));
            },
            Le = (e, t) => {
              for (const [n, o] of Object.entries(s)) t.icon !== n && Y(e, o);
              U(e, t.icon && s[t.icon]), je(e, t), Ae(), D(e, t, 'icon');
            },
            Ae = () => {
              const e = x();
              if (!e) return;
              const t = window.getComputedStyle(e).getPropertyValue('background-color'),
                n = e.querySelectorAll('[class^=swal2-success-circular-line], .swal2-success-fix');
              for (let e = 0; e < n.length; e++) n[e].style.backgroundColor = t;
            },
            Oe = (e, t) => {
              if (!t.icon && !t.iconHtml) return;
              let n = e.innerHTML,
                o = '';
              t.iconHtml
                ? (o = Pe(t.iconHtml))
                : 'success' === t.icon
                  ? ((o =
                      '\n  <div class="swal2-success-circular-line-left"></div>\n  <span class="swal2-success-line-tip"></span> <span class="swal2-success-line-long"></span>\n  <div class="swal2-success-ring"></div> <div class="swal2-success-fix"></div>\n  <div class="swal2-success-circular-line-right"></div>\n'),
                    (n = n.replace(/ style=".*?"/g, '')))
                  : 'error' === t.icon
                    ? (o =
                        '\n  <span class="swal2-x-mark">\n    <span class="swal2-x-mark-line-left"></span>\n    <span class="swal2-x-mark-line-right"></span>\n  </span>\n')
                    : t.icon && (o = Pe({ question: '?', warning: '!', info: 'i' }[t.icon])),
                n.trim() !== o.trim() && R(e, o);
            },
            je = (e, t) => {
              if (t.iconColor) {
                (e.style.color = t.iconColor), (e.style.borderColor = t.iconColor);
                for (const n of [
                  '.swal2-success-line-tip',
                  '.swal2-success-line-long',
                  '.swal2-x-mark-line-left',
                  '.swal2-x-mark-line-right',
                ])
                  J(e, n, 'background-color', t.iconColor);
                J(e, '.swal2-success-ring', 'border-color', t.iconColor);
              }
            },
            Pe = e => `<div class="${i['icon-content']}">${e}</div>`;
          let Te = !1,
            Se = 0,
            Be = 0,
            $e = 0,
            Me = 0;
          const _e = e => {
              const t = x();
              if (e.target === t || k().contains(e.target)) {
                Te = !0;
                const n = Ie(e);
                (Se = n.clientX),
                  (Be = n.clientY),
                  ($e = parseInt(t.style.insetInlineStart) || 0),
                  (Me = parseInt(t.style.insetBlockStart) || 0),
                  U(t, 'swal2-dragging');
              }
            },
            ze = e => {
              const t = x();
              if (Te) {
                let { clientX: n, clientY: o } = Ie(e);
                (t.style.insetInlineStart = `${$e + (n - Se)}px`),
                  (t.style.insetBlockStart = `${Me + (o - Be)}px`);
              }
            },
            He = () => {
              const e = x();
              (Te = !1), Y(e, 'swal2-dragging');
            },
            Ie = e => {
              let t = 0,
                n = 0;
              return (
                e.type.startsWith('mouse')
                  ? ((t = e.clientX), (n = e.clientY))
                  : e.type.startsWith('touch') &&
                    ((t = e.touches[0].clientX), (n = e.touches[0].clientY)),
                { clientX: t, clientY: n }
              );
            },
            Re = (e, t) => {
              const n = b(),
                o = x();
              if (n && o) {
                if (t.toast) {
                  K(n, 'width', t.width), (o.style.width = '100%');
                  const e = S();
                  e && o.insertBefore(e, k());
                } else K(o, 'width', t.width);
                K(o, 'padding', t.padding),
                  t.color && (o.style.color = t.color),
                  t.background && (o.style.background = t.background),
                  Z(O()),
                  Ne(o, t),
                  t.draggable && !t.toast
                    ? (U(o, i.draggable),
                      (e => {
                        e.addEventListener('mousedown', _e),
                          document.body.addEventListener('mousemove', ze),
                          e.addEventListener('mouseup', He),
                          e.addEventListener('touchstart', _e),
                          document.body.addEventListener('touchmove', ze),
                          e.addEventListener('touchend', He);
                      })(o))
                    : (Y(o, i.draggable),
                      (e => {
                        e.removeEventListener('mousedown', _e),
                          document.body.removeEventListener('mousemove', ze),
                          e.removeEventListener('mouseup', He),
                          e.removeEventListener('touchstart', _e),
                          document.body.removeEventListener('touchmove', ze),
                          e.removeEventListener('touchend', He);
                      })(o));
              }
            },
            Ne = (e, t) => {
              const n = t.showClass || {};
              (e.className = `${i.popup} ${ee(e) ? n.popup : ''}`),
                t.toast
                  ? (U([document.documentElement, document.body], i['toast-shown']), U(e, i.toast))
                  : U(e, i.modal),
                D(e, t, 'popup'),
                'string' == typeof t.customClass && U(e, t.customClass),
                t.icon && U(e, i[`icon-${t.icon}`]);
            },
            De = e => {
              const t = document.createElement('li');
              return U(t, i['progress-step']), R(t, e), t;
            },
            qe = e => {
              const t = document.createElement('li');
              return (
                U(t, i['progress-step-line']),
                e.progressStepsDistance && K(t, 'width', e.progressStepsDistance),
                t
              );
            },
            Fe = (e, t) => {
              Re(0, t),
                he(0, t),
                ((e, t) => {
                  const n = A();
                  if (!n) return;
                  const { progressSteps: o, currentProgressStep: r } = t;
                  o && 0 !== o.length && void 0 !== r
                    ? (W(n),
                      (n.textContent = ''),
                      r >= o.length &&
                        u(
                          'Invalid currentProgressStep parameter, it should be less than progressSteps.length (currentProgressStep like JS arrays starts from 0)'
                        ),
                      o.forEach((e, a) => {
                        const s = De(e);
                        if (
                          (n.appendChild(s),
                          a === r && U(s, i['active-progress-step']),
                          a !== o.length - 1)
                        ) {
                          const e = qe(t);
                          n.appendChild(e);
                        }
                      }))
                    : Z(n);
                })(0, t),
                ((e, t) => {
                  const n = fe.innerParams.get(e),
                    o = k();
                  if (o) {
                    if (n && t.icon === n.icon) return Oe(o, t), void Le(o, t);
                    if (t.icon || t.iconHtml) {
                      if (t.icon && -1 === Object.keys(s).indexOf(t.icon))
                        return (
                          d(
                            `Unknown icon! Expected "success", "error", "warning", "info" or "question", got "${t.icon}"`
                          ),
                          void Z(o)
                        );
                      W(o),
                        Oe(o, t),
                        Le(o, t),
                        U(o, t.showClass && t.showClass.icon),
                        window
                          .matchMedia('(prefers-color-scheme: dark)')
                          .addEventListener('change', Ae);
                    } else Z(o);
                  }
                })(e, t),
                ((e, t) => {
                  const n = L();
                  n &&
                    (t.imageUrl
                      ? (W(n, ''),
                        n.setAttribute('src', t.imageUrl),
                        n.setAttribute('alt', t.imageAlt || ''),
                        K(n, 'width', t.imageWidth),
                        K(n, 'height', t.imageHeight),
                        (n.className = i.image),
                        D(n, t, 'image'))
                      : Z(n));
                })(0, t),
                ((e, t) => {
                  const n = E();
                  n &&
                    (X(n),
                    Q(n, t.title || t.titleText, 'block'),
                    t.title && se(t.title, n),
                    t.titleText && (n.innerText = t.titleText),
                    D(n, t, 'title'));
                })(0, t),
                ((e, t) => {
                  const n = _();
                  n &&
                    (R(n, t.closeButtonHtml || ''),
                    D(n, t, 'closeButton'),
                    Q(n, t.showCloseButton),
                    n.setAttribute('aria-label', t.closeButtonAriaLabel || ''));
                })(0, t),
                Ce(e, t),
                ue(0, t),
                ((e, t) => {
                  const n = $();
                  n &&
                    (X(n), Q(n, t.footer, 'block'), t.footer && se(t.footer, n), D(n, t, 'footer'));
                })(0, t);
              const n = x();
              'function' == typeof t.didRender && n && t.didRender(n),
                o.eventEmitter.emit('didRender', n);
            },
            Ve = () => {
              var e;
              return null === (e = j()) || void 0 === e ? void 0 : e.click();
            },
            Ue = Object.freeze({
              cancel: 'cancel',
              backdrop: 'backdrop',
              close: 'close',
              esc: 'esc',
              timer: 'timer',
            }),
            Ye = e => {
              e.keydownTarget &&
                e.keydownHandlerAdded &&
                (e.keydownTarget.removeEventListener('keydown', e.keydownHandler, {
                  capture: e.keydownListenerCapture,
                }),
                (e.keydownHandlerAdded = !1));
            },
            Ge = (e, t) => {
              var n;
              const o = z();
              if (o.length)
                return (
                  -2 === (e += t) && (e = o.length - 1),
                  e === o.length ? (e = 0) : -1 === e && (e = o.length - 1),
                  void o[e].focus()
                );
              null === (n = x()) || void 0 === n || n.focus();
            },
            Ke = ['ArrowRight', 'ArrowDown'],
            We = ['ArrowLeft', 'ArrowUp'],
            Ze = (e, t, n) => {
              e &&
                (t.isComposing ||
                  229 === t.keyCode ||
                  (e.stopKeydownPropagation && t.stopPropagation(),
                  'Enter' === t.key
                    ? Xe(t, e)
                    : 'Tab' === t.key
                      ? Je(t)
                      : [...Ke, ...We].includes(t.key)
                        ? Qe(t.key)
                        : 'Escape' === t.key && et(t, e, n)));
            },
            Xe = (e, t) => {
              if (!f(t.allowEnterKey)) return;
              const n = q(x(), t.input);
              if (
                e.target &&
                n &&
                e.target instanceof HTMLElement &&
                e.target.outerHTML === n.outerHTML
              ) {
                if (['textarea', 'file'].includes(t.input)) return;
                Ve(), e.preventDefault();
              }
            },
            Je = e => {
              const t = e.target,
                n = z();
              let o = -1;
              for (let e = 0; e < n.length; e++)
                if (t === n[e]) {
                  o = e;
                  break;
                }
              e.shiftKey ? Ge(o, -1) : Ge(o, 1), e.stopPropagation(), e.preventDefault();
            },
            Qe = e => {
              const t = B(),
                n = j(),
                o = T(),
                r = P();
              if (!(t && n && o && r)) return;
              const a = [n, o, r];
              if (
                document.activeElement instanceof HTMLElement &&
                !a.includes(document.activeElement)
              )
                return;
              const i = Ke.includes(e) ? 'nextElementSibling' : 'previousElementSibling';
              let s = document.activeElement;
              if (s) {
                for (let e = 0; e < t.children.length; e++) {
                  if (((s = s[i]), !s)) return;
                  if (s instanceof HTMLButtonElement && ee(s)) break;
                }
                s instanceof HTMLButtonElement && s.focus();
              }
            },
            et = (e, t, n) => {
              f(t.allowEscapeKey) && (e.preventDefault(), n(Ue.esc));
            };
          var tt = { swalPromiseResolve: new WeakMap(), swalPromiseReject: new WeakMap() };
          const nt = () => {
              Array.from(document.body.children).forEach(e => {
                e.hasAttribute('data-previous-aria-hidden')
                  ? (e.setAttribute(
                      'aria-hidden',
                      e.getAttribute('data-previous-aria-hidden') || ''
                    ),
                    e.removeAttribute('data-previous-aria-hidden'))
                  : e.removeAttribute('aria-hidden');
              });
            },
            ot = 'undefined' != typeof window && !!window.GestureEvent,
            rt = () => {
              const e = b();
              if (!e) return;
              let t;
              (e.ontouchstart = e => {
                t = at(e);
              }),
                (e.ontouchmove = e => {
                  t && (e.preventDefault(), e.stopPropagation());
                });
            },
            at = e => {
              const t = e.target,
                n = b(),
                o = C();
              return !(
                !n ||
                !o ||
                it(e) ||
                st(e) ||
                (t !== n &&
                  (te(n) ||
                    !(t instanceof HTMLElement) ||
                    'INPUT' === t.tagName ||
                    'TEXTAREA' === t.tagName ||
                    (te(o) && o.contains(t))))
              );
            },
            it = e => e.touches && e.touches.length && 'stylus' === e.touches[0].touchType,
            st = e => e.touches && e.touches.length > 1;
          let lt = null;
          const ct = e => {
            null === lt &&
              (document.body.scrollHeight > window.innerHeight || 'scroll' === e) &&
              ((lt = parseInt(
                window.getComputedStyle(document.body).getPropertyValue('padding-right')
              )),
              (document.body.style.paddingRight = `${
                lt +
                (() => {
                  const e = document.createElement('div');
                  (e.className = i['scrollbar-measure']), document.body.appendChild(e);
                  const t = e.getBoundingClientRect().width - e.clientWidth;
                  return document.body.removeChild(e), t;
                })()
              }px`));
          };
          function ut(e, t, n, a) {
            I() ? bt(e, a) : (r(n).then(() => bt(e, a)), Ye(o)),
              ot
                ? (t.setAttribute('style', 'display:none !important'),
                  t.removeAttribute('class'),
                  (t.innerHTML = ''))
                : t.remove(),
              H() &&
                (null !== lt && ((document.body.style.paddingRight = `${lt}px`), (lt = null)),
                (() => {
                  if (N(document.body, i.iosfix)) {
                    const e = parseInt(document.body.style.top, 10);
                    Y(document.body, i.iosfix),
                      (document.body.style.top = ''),
                      (document.body.scrollTop = -1 * e);
                  }
                })(),
                nt()),
              Y(
                [document.documentElement, document.body],
                [i.shown, i['height-auto'], i['no-backdrop'], i['toast-shown']]
              );
          }
          function dt(e) {
            e = wt(e);
            const t = tt.swalPromiseResolve.get(this),
              n = pt(this);
            this.isAwaitingPromise ? e.isDismissed || (ft(this), t(e)) : n && t(e);
          }
          const pt = e => {
            const t = x();
            if (!t) return !1;
            const n = fe.innerParams.get(e);
            if (!n || N(t, n.hideClass.popup)) return !1;
            Y(t, n.showClass.popup), U(t, n.hideClass.popup);
            const o = b();
            return Y(o, n.showClass.backdrop), U(o, n.hideClass.backdrop), mt(e, t, n), !0;
          };
          function ht(e) {
            const t = tt.swalPromiseReject.get(this);
            ft(this), t && t(e);
          }
          const ft = e => {
              e.isAwaitingPromise &&
                (delete e.isAwaitingPromise, fe.innerParams.get(e) || e._destroy());
            },
            wt = e =>
              void 0 === e
                ? { isConfirmed: !1, isDenied: !1, isDismissed: !0 }
                : Object.assign({ isConfirmed: !1, isDenied: !1, isDismissed: !1 }, e),
            mt = (e, t, n) => {
              var r;
              const a = b(),
                i = ne(t);
              'function' == typeof n.willClose && n.willClose(t),
                null === (r = o.eventEmitter) || void 0 === r || r.emit('willClose', t),
                i ? gt(e, t, a, n.returnFocus, n.didClose) : ut(e, a, n.returnFocus, n.didClose);
            },
            gt = (e, t, n, r, a) => {
              o.swalCloseEventFinishedCallback = ut.bind(null, e, n, r, a);
              const i = function (e) {
                var n;
                e.target === t &&
                  (null === (n = o.swalCloseEventFinishedCallback) || void 0 === n || n.call(o),
                  delete o.swalCloseEventFinishedCallback,
                  t.removeEventListener('animationend', i),
                  t.removeEventListener('transitionend', i));
              };
              t.addEventListener('animationend', i), t.addEventListener('transitionend', i);
            },
            bt = (e, t) => {
              setTimeout(() => {
                var n;
                'function' == typeof t && t.bind(e.params)(),
                  null === (n = o.eventEmitter) || void 0 === n || n.emit('didClose'),
                  e._destroy && e._destroy();
              });
            },
            vt = e => {
              let t = x();
              if ((t || new Qn(), (t = x()), !t)) return;
              const n = S();
              I() ? Z(k()) : yt(t, e),
                W(n),
                t.setAttribute('data-loading', 'true'),
                t.setAttribute('aria-busy', 'true'),
                t.focus();
            },
            yt = (e, t) => {
              const n = B(),
                o = S();
              n &&
                o &&
                (!t && ee(j()) && (t = j()),
                W(n),
                t &&
                  (Z(t),
                  o.setAttribute('data-button-to-replace', t.className),
                  n.insertBefore(o, t)),
                U([e, n], i.loading));
            },
            xt = e => (e.checked ? 1 : 0),
            kt = e => (e.checked ? e.value : null),
            Et = e =>
              e.files && e.files.length
                ? null !== e.getAttribute('multiple')
                  ? e.files
                  : e.files[0]
                : null,
            Ct = (e, t) => {
              const n = x();
              if (!n) return;
              const o = e => {
                'select' === t.input
                  ? (function (e, t, n) {
                      const o = G(e, i.select);
                      if (!o) return;
                      const r = (e, t, o) => {
                        const r = document.createElement('option');
                        (r.value = o),
                          R(r, t),
                          (r.selected = Ot(o, n.inputValue)),
                          e.appendChild(r);
                      };
                      t.forEach(e => {
                        const t = e[0],
                          n = e[1];
                        if (Array.isArray(n)) {
                          const e = document.createElement('optgroup');
                          (e.label = t),
                            (e.disabled = !1),
                            o.appendChild(e),
                            n.forEach(t => r(e, t[1], t[0]));
                        } else r(o, n, t);
                      }),
                        o.focus();
                    })(n, At(e), t)
                  : 'radio' === t.input &&
                    (function (e, t, n) {
                      const o = G(e, i.radio);
                      if (!o) return;
                      t.forEach(e => {
                        const t = e[0],
                          r = e[1],
                          a = document.createElement('input'),
                          s = document.createElement('label');
                        (a.type = 'radio'),
                          (a.name = i.radio),
                          (a.value = t),
                          Ot(t, n.inputValue) && (a.checked = !0);
                        const l = document.createElement('span');
                        R(l, r),
                          (l.className = i.label),
                          s.appendChild(a),
                          s.appendChild(l),
                          o.appendChild(s);
                      });
                      const r = o.querySelectorAll('input');
                      r.length && r[0].focus();
                    })(n, At(e), t);
              };
              w(t.inputOptions) || g(t.inputOptions)
                ? (vt(j()),
                  m(t.inputOptions).then(t => {
                    e.hideLoading(), o(t);
                  }))
                : 'object' == typeof t.inputOptions
                  ? o(t.inputOptions)
                  : d(
                      'Unexpected type of inputOptions! Expected object, Map or Promise, got ' +
                        typeof t.inputOptions
                    );
            },
            Lt = (e, t) => {
              const n = e.getInput();
              n &&
                (Z(n),
                m(t.inputValue)
                  .then(o => {
                    (n.value = 'number' === t.input ? `${parseFloat(o) || 0}` : `${o}`),
                      W(n),
                      n.focus(),
                      e.hideLoading();
                  })
                  .catch(t => {
                    d(`Error in inputValue promise: ${t}`),
                      (n.value = ''),
                      W(n),
                      n.focus(),
                      e.hideLoading();
                  }));
            };
          const At = e => {
              const t = [];
              return (
                e instanceof Map
                  ? e.forEach((e, n) => {
                      let o = e;
                      'object' == typeof o && (o = At(o)), t.push([n, o]);
                    })
                  : Object.keys(e).forEach(n => {
                      let o = e[n];
                      'object' == typeof o && (o = At(o)), t.push([n, o]);
                    }),
                t
              );
            },
            Ot = (e, t) => !!t && t.toString() === e.toString(),
            jt = (e, t) => {
              const n = fe.innerParams.get(e);
              if (!n.input)
                return void d(
                  `The "input" parameter is needed to be set when using returnInputValueOn${c(t)}`
                );
              const o = e.getInput(),
                r = ((e, t) => {
                  const n = e.getInput();
                  if (!n) return null;
                  switch (t.input) {
                    case 'checkbox':
                      return xt(n);
                    case 'radio':
                      return kt(n);
                    case 'file':
                      return Et(n);
                    default:
                      return t.inputAutoTrim ? n.value.trim() : n.value;
                  }
                })(e, n);
              n.inputValidator
                ? Pt(e, r, t)
                : o && !o.checkValidity()
                  ? (e.enableButtons(),
                    e.showValidationMessage(n.validationMessage || o.validationMessage))
                  : 'deny' === t
                    ? Tt(e, r)
                    : $t(e, r);
            },
            Pt = (e, t, n) => {
              const o = fe.innerParams.get(e);
              e.disableInput(),
                Promise.resolve()
                  .then(() => m(o.inputValidator(t, o.validationMessage)))
                  .then(o => {
                    e.enableButtons(),
                      e.enableInput(),
                      o ? e.showValidationMessage(o) : 'deny' === n ? Tt(e, t) : $t(e, t);
                  });
            },
            Tt = (e, t) => {
              const n = fe.innerParams.get(e || void 0);
              n.showLoaderOnDeny && vt(T()),
                n.preDeny
                  ? ((e.isAwaitingPromise = !0),
                    Promise.resolve()
                      .then(() => m(n.preDeny(t, n.validationMessage)))
                      .then(n => {
                        !1 === n
                          ? (e.hideLoading(), ft(e))
                          : e.close({ isDenied: !0, value: void 0 === n ? t : n });
                      })
                      .catch(t => Bt(e || void 0, t)))
                  : e.close({ isDenied: !0, value: t });
            },
            St = (e, t) => {
              e.close({ isConfirmed: !0, value: t });
            },
            Bt = (e, t) => {
              e.rejectPromise(t);
            },
            $t = (e, t) => {
              const n = fe.innerParams.get(e || void 0);
              n.showLoaderOnConfirm && vt(),
                n.preConfirm
                  ? (e.resetValidationMessage(),
                    (e.isAwaitingPromise = !0),
                    Promise.resolve()
                      .then(() => m(n.preConfirm(t, n.validationMessage)))
                      .then(n => {
                        ee(O()) || !1 === n
                          ? (e.hideLoading(), ft(e))
                          : St(e, void 0 === n ? t : n);
                      })
                      .catch(t => Bt(e || void 0, t)))
                  : St(e, t);
            };
          function Mt() {
            const e = fe.innerParams.get(this);
            if (!e) return;
            const t = fe.domCache.get(this);
            Z(t.loader),
              I() ? e.icon && W(k()) : _t(t),
              Y([t.popup, t.actions], i.loading),
              t.popup.removeAttribute('aria-busy'),
              t.popup.removeAttribute('data-loading'),
              (t.confirmButton.disabled = !1),
              (t.denyButton.disabled = !1),
              (t.cancelButton.disabled = !1);
          }
          const _t = e => {
            const t = e.popup.getElementsByClassName(
              e.loader.getAttribute('data-button-to-replace')
            );
            t.length ? W(t[0], 'inline-block') : !ee(j()) && !ee(T()) && !ee(P()) && Z(e.actions);
          };
          function zt() {
            const e = fe.innerParams.get(this),
              t = fe.domCache.get(this);
            return t ? q(t.popup, e.input) : null;
          }
          function Ht(e, t, n) {
            const o = fe.domCache.get(e);
            t.forEach(e => {
              o[e].disabled = n;
            });
          }
          function It(e, t) {
            const n = x();
            if (n && e)
              if ('radio' === e.type) {
                const e = n.querySelectorAll(`[name="${i.radio}"]`);
                for (let n = 0; n < e.length; n++) e[n].disabled = t;
              } else e.disabled = t;
          }
          function Rt() {
            Ht(this, ['confirmButton', 'denyButton', 'cancelButton'], !1);
          }
          function Nt() {
            Ht(this, ['confirmButton', 'denyButton', 'cancelButton'], !0);
          }
          function Dt() {
            It(this.getInput(), !1);
          }
          function qt() {
            It(this.getInput(), !0);
          }
          function Ft(e) {
            const t = fe.domCache.get(this),
              n = fe.innerParams.get(this);
            R(t.validationMessage, e),
              (t.validationMessage.className = i['validation-message']),
              n.customClass &&
                n.customClass.validationMessage &&
                U(t.validationMessage, n.customClass.validationMessage),
              W(t.validationMessage);
            const o = this.getInput();
            o &&
              (o.setAttribute('aria-invalid', 'true'),
              o.setAttribute('aria-describedby', i['validation-message']),
              F(o),
              U(o, i.inputerror));
          }
          function Vt() {
            const e = fe.domCache.get(this);
            e.validationMessage && Z(e.validationMessage);
            const t = this.getInput();
            t &&
              (t.removeAttribute('aria-invalid'),
              t.removeAttribute('aria-describedby'),
              Y(t, i.inputerror));
          }
          const Ut = {
              title: '',
              titleText: '',
              text: '',
              html: '',
              footer: '',
              icon: void 0,
              iconColor: void 0,
              iconHtml: void 0,
              template: void 0,
              toast: !1,
              draggable: !1,
              animation: !0,
              theme: 'light',
              showClass: {
                popup: 'swal2-show',
                backdrop: 'swal2-backdrop-show',
                icon: 'swal2-icon-show',
              },
              hideClass: {
                popup: 'swal2-hide',
                backdrop: 'swal2-backdrop-hide',
                icon: 'swal2-icon-hide',
              },
              customClass: {},
              target: 'body',
              color: void 0,
              backdrop: !0,
              heightAuto: !0,
              allowOutsideClick: !0,
              allowEscapeKey: !0,
              allowEnterKey: !0,
              stopKeydownPropagation: !0,
              keydownListenerCapture: !1,
              showConfirmButton: !0,
              showDenyButton: !1,
              showCancelButton: !1,
              preConfirm: void 0,
              preDeny: void 0,
              confirmButtonText: 'OK',
              confirmButtonAriaLabel: '',
              confirmButtonColor: void 0,
              denyButtonText: 'No',
              denyButtonAriaLabel: '',
              denyButtonColor: void 0,
              cancelButtonText: 'Cancel',
              cancelButtonAriaLabel: '',
              cancelButtonColor: void 0,
              buttonsStyling: !0,
              reverseButtons: !1,
              focusConfirm: !0,
              focusDeny: !1,
              focusCancel: !1,
              returnFocus: !0,
              showCloseButton: !1,
              closeButtonHtml: '&times;',
              closeButtonAriaLabel: 'Close this dialog',
              loaderHtml: '',
              showLoaderOnConfirm: !1,
              showLoaderOnDeny: !1,
              imageUrl: void 0,
              imageWidth: void 0,
              imageHeight: void 0,
              imageAlt: '',
              timer: void 0,
              timerProgressBar: !1,
              width: void 0,
              padding: void 0,
              background: void 0,
              input: void 0,
              inputPlaceholder: '',
              inputLabel: '',
              inputValue: '',
              inputOptions: {},
              inputAutoFocus: !0,
              inputAutoTrim: !0,
              inputAttributes: {},
              inputValidator: void 0,
              returnInputValueOnDeny: !1,
              validationMessage: void 0,
              grow: !1,
              position: 'center',
              progressSteps: [],
              currentProgressStep: void 0,
              progressStepsDistance: void 0,
              willOpen: void 0,
              didOpen: void 0,
              didRender: void 0,
              willClose: void 0,
              didClose: void 0,
              didDestroy: void 0,
              scrollbarPadding: !0,
            },
            Yt = [
              'allowEscapeKey',
              'allowOutsideClick',
              'background',
              'buttonsStyling',
              'cancelButtonAriaLabel',
              'cancelButtonColor',
              'cancelButtonText',
              'closeButtonAriaLabel',
              'closeButtonHtml',
              'color',
              'confirmButtonAriaLabel',
              'confirmButtonColor',
              'confirmButtonText',
              'currentProgressStep',
              'customClass',
              'denyButtonAriaLabel',
              'denyButtonColor',
              'denyButtonText',
              'didClose',
              'didDestroy',
              'draggable',
              'footer',
              'hideClass',
              'html',
              'icon',
              'iconColor',
              'iconHtml',
              'imageAlt',
              'imageHeight',
              'imageUrl',
              'imageWidth',
              'preConfirm',
              'preDeny',
              'progressSteps',
              'returnFocus',
              'reverseButtons',
              'showCancelButton',
              'showCloseButton',
              'showConfirmButton',
              'showDenyButton',
              'text',
              'title',
              'titleText',
              'theme',
              'willClose',
            ],
            Gt = { allowEnterKey: void 0 },
            Kt = [
              'allowOutsideClick',
              'allowEnterKey',
              'backdrop',
              'draggable',
              'focusConfirm',
              'focusDeny',
              'focusCancel',
              'returnFocus',
              'heightAuto',
              'keydownListenerCapture',
            ],
            Wt = e => Object.prototype.hasOwnProperty.call(Ut, e),
            Zt = e => -1 !== Yt.indexOf(e),
            Xt = e => Gt[e],
            Jt = e => {
              Wt(e) || u(`Unknown parameter "${e}"`);
            },
            Qt = e => {
              Kt.includes(e) && u(`The parameter "${e}" is incompatible with toasts`);
            },
            en = e => {
              const t = Xt(e);
              t && h(e, t);
            },
            tn = e => {
              !1 === e.backdrop &&
                e.allowOutsideClick &&
                u(
                  '"allowOutsideClick" parameter requires `backdrop` parameter to be set to `true`'
                ),
                e.theme &&
                  !['light', 'dark', 'auto', 'borderless', 'embed-iframe'].includes(e.theme) &&
                  u(
                    `Invalid theme "${e.theme}". Expected "light", "dark", "auto", "borderless", or "embed-iframe"`
                  );
              for (const t in e) Jt(t), e.toast && Qt(t), en(t);
            };
          function nn(e) {
            const t = b(),
              n = x(),
              o = fe.innerParams.get(this);
            if (!n || N(n, o.hideClass.popup))
              return void u(
                "You're trying to update the closed or closing popup, that won't work. Use the update() method in preConfirm parameter or show a new popup."
              );
            const r = on(e),
              a = Object.assign({}, o, r);
            tn(a),
              (t.dataset.swal2Theme = a.theme),
              Fe(this, a),
              fe.innerParams.set(this, a),
              Object.defineProperties(this, {
                params: { value: Object.assign({}, this.params, e), writable: !1, enumerable: !0 },
              });
          }
          const on = e => {
            const t = {};
            return (
              Object.keys(e).forEach(n => {
                Zt(n) ? (t[n] = e[n]) : u(`Invalid parameter to update: ${n}`);
              }),
              t
            );
          };
          function rn() {
            const e = fe.domCache.get(this),
              t = fe.innerParams.get(this);
            t
              ? (e.popup &&
                  o.swalCloseEventFinishedCallback &&
                  (o.swalCloseEventFinishedCallback(), delete o.swalCloseEventFinishedCallback),
                'function' == typeof t.didDestroy && t.didDestroy(),
                o.eventEmitter.emit('didDestroy'),
                an(this))
              : sn(this);
          }
          const an = e => {
              sn(e),
                delete e.params,
                delete o.keydownHandler,
                delete o.keydownTarget,
                delete o.currentInstance;
            },
            sn = e => {
              e.isAwaitingPromise
                ? (ln(fe, e), (e.isAwaitingPromise = !0))
                : (ln(tt, e),
                  ln(fe, e),
                  delete e.isAwaitingPromise,
                  delete e.disableButtons,
                  delete e.enableButtons,
                  delete e.getInput,
                  delete e.disableInput,
                  delete e.enableInput,
                  delete e.hideLoading,
                  delete e.disableLoading,
                  delete e.showValidationMessage,
                  delete e.resetValidationMessage,
                  delete e.close,
                  delete e.closePopup,
                  delete e.closeModal,
                  delete e.closeToast,
                  delete e.rejectPromise,
                  delete e.update,
                  delete e._destroy);
            },
            ln = (e, t) => {
              for (const n in e) e[n].delete(t);
            };
          var cn = Object.freeze({
            __proto__: null,
            _destroy: rn,
            close: dt,
            closeModal: dt,
            closePopup: dt,
            closeToast: dt,
            disableButtons: Nt,
            disableInput: qt,
            disableLoading: Mt,
            enableButtons: Rt,
            enableInput: Dt,
            getInput: zt,
            handleAwaitingPromise: ft,
            hideLoading: Mt,
            rejectPromise: ht,
            resetValidationMessage: Vt,
            showValidationMessage: Ft,
            update: nn,
          });
          const un = (e, t, n) => {
              t.popup.onclick = () => {
                (e && (dn(e) || e.timer || e.input)) || n(Ue.close);
              };
            },
            dn = e =>
              !!(
                e.showConfirmButton ||
                e.showDenyButton ||
                e.showCancelButton ||
                e.showCloseButton
              );
          let pn = !1;
          const hn = e => {
              e.popup.onmousedown = () => {
                e.container.onmouseup = function (t) {
                  (e.container.onmouseup = () => {}), t.target === e.container && (pn = !0);
                };
              };
            },
            fn = e => {
              e.container.onmousedown = t => {
                t.target === e.container && t.preventDefault(),
                  (e.popup.onmouseup = function (t) {
                    (e.popup.onmouseup = () => {}),
                      (t.target === e.popup ||
                        (t.target instanceof HTMLElement && e.popup.contains(t.target))) &&
                        (pn = !0);
                  });
              };
            },
            wn = (e, t, n) => {
              t.container.onclick = o => {
                pn
                  ? (pn = !1)
                  : o.target === t.container && f(e.allowOutsideClick) && n(Ue.backdrop);
              };
            },
            mn = e => e instanceof Element || (e => 'object' == typeof e && e.jquery)(e);
          const gn = () => {
              if (o.timeout)
                return (
                  (() => {
                    const e = M();
                    if (!e) return;
                    const t = parseInt(window.getComputedStyle(e).width);
                    e.style.removeProperty('transition'), (e.style.width = '100%');
                    const n = (t / parseInt(window.getComputedStyle(e).width)) * 100;
                    e.style.width = `${n}%`;
                  })(),
                  o.timeout.stop()
                );
            },
            bn = () => {
              if (o.timeout) {
                const e = o.timeout.start();
                return oe(e), e;
              }
            };
          let vn = !1;
          const yn = {};
          const xn = e => {
            for (let t = e.target; t && t !== document; t = t.parentNode)
              for (const e in yn) {
                const n = t.getAttribute(e);
                if (n) return void yn[e].fire({ template: n });
              }
          };
          o.eventEmitter = new (class {
            constructor() {
              this.events = {};
            }
            _getHandlersByEventName(e) {
              return void 0 === this.events[e] && (this.events[e] = []), this.events[e];
            }
            on(e, t) {
              const n = this._getHandlersByEventName(e);
              n.includes(t) || n.push(t);
            }
            once(e, t) {
              var n = this;
              const o = function () {
                n.removeListener(e, o);
                for (var r = arguments.length, a = new Array(r), i = 0; i < r; i++)
                  a[i] = arguments[i];
                t.apply(n, a);
              };
              this.on(e, o);
            }
            emit(e) {
              for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), o = 1; o < t; o++)
                n[o - 1] = arguments[o];
              this._getHandlersByEventName(e).forEach(e => {
                try {
                  e.apply(this, n);
                } catch (e) {
                  console.error(e);
                }
              });
            }
            removeListener(e, t) {
              const n = this._getHandlersByEventName(e),
                o = n.indexOf(t);
              o > -1 && n.splice(o, 1);
            }
            removeAllListeners(e) {
              void 0 !== this.events[e] && (this.events[e].length = 0);
            }
            reset() {
              this.events = {};
            }
          })();
          var kn = Object.freeze({
            __proto__: null,
            argsToParams: e => {
              const t = {};
              return (
                'object' != typeof e[0] || mn(e[0])
                  ? ['title', 'html', 'icon'].forEach((n, o) => {
                      const r = e[o];
                      'string' == typeof r || mn(r)
                        ? (t[n] = r)
                        : void 0 !== r &&
                          d(
                            `Unexpected type of ${n}! Expected "string" or "Element", got ${typeof r}`
                          );
                    })
                  : Object.assign(t, e[0]),
                t
              );
            },
            bindClickHandler: function () {
              (yn[
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : 'data-swal-template'
              ] = this),
                vn || (document.body.addEventListener('click', xn), (vn = !0));
            },
            clickCancel: () => {
              var e;
              return null === (e = P()) || void 0 === e ? void 0 : e.click();
            },
            clickConfirm: Ve,
            clickDeny: () => {
              var e;
              return null === (e = T()) || void 0 === e ? void 0 : e.click();
            },
            enableLoading: vt,
            fire: function () {
              for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
                t[n] = arguments[n];
              return new this(...t);
            },
            getActions: B,
            getCancelButton: P,
            getCloseButton: _,
            getConfirmButton: j,
            getContainer: b,
            getDenyButton: T,
            getFocusableElements: z,
            getFooter: $,
            getHtmlContainer: C,
            getIcon: k,
            getIconContent: () => y(i['icon-content']),
            getImage: L,
            getInputLabel: () => y(i['input-label']),
            getLoader: S,
            getPopup: x,
            getProgressSteps: A,
            getTimerLeft: () => o.timeout && o.timeout.getTimerLeft(),
            getTimerProgressBar: M,
            getTitle: E,
            getValidationMessage: O,
            increaseTimer: e => {
              if (o.timeout) {
                const t = o.timeout.increase(e);
                return oe(t, !0), t;
              }
            },
            isDeprecatedParameter: Xt,
            isLoading: () => {
              const e = x();
              return !!e && e.hasAttribute('data-loading');
            },
            isTimerRunning: () => !(!o.timeout || !o.timeout.isRunning()),
            isUpdatableParameter: Zt,
            isValidParameter: Wt,
            isVisible: () => ee(x()),
            mixin: function (e) {
              return class extends this {
                _main(t, n) {
                  return super._main(t, Object.assign({}, e, n));
                }
              };
            },
            off: (e, t) => {
              e
                ? t
                  ? o.eventEmitter.removeListener(e, t)
                  : o.eventEmitter.removeAllListeners(e)
                : o.eventEmitter.reset();
            },
            on: (e, t) => {
              o.eventEmitter.on(e, t);
            },
            once: (e, t) => {
              o.eventEmitter.once(e, t);
            },
            resumeTimer: bn,
            showLoading: vt,
            stopTimer: gn,
            toggleTimer: () => {
              const e = o.timeout;
              return e && (e.running ? gn() : bn());
            },
          });
          class En {
            constructor(e, t) {
              (this.callback = e), (this.remaining = t), (this.running = !1), this.start();
            }
            start() {
              return (
                this.running ||
                  ((this.running = !0),
                  (this.started = new Date()),
                  (this.id = setTimeout(this.callback, this.remaining))),
                this.remaining
              );
            }
            stop() {
              return (
                this.started &&
                  this.running &&
                  ((this.running = !1),
                  clearTimeout(this.id),
                  (this.remaining -= new Date().getTime() - this.started.getTime())),
                this.remaining
              );
            }
            increase(e) {
              const t = this.running;
              return t && this.stop(), (this.remaining += e), t && this.start(), this.remaining;
            }
            getTimerLeft() {
              return this.running && (this.stop(), this.start()), this.remaining;
            }
            isRunning() {
              return this.running;
            }
          }
          const Cn = ['swal-title', 'swal-html', 'swal-footer'],
            Ln = e => {
              const t = {};
              return (
                Array.from(e.querySelectorAll('swal-param')).forEach(e => {
                  $n(e, ['name', 'value']);
                  const n = e.getAttribute('name'),
                    o = e.getAttribute('value');
                  n &&
                    o &&
                    (t[n] =
                      'boolean' == typeof Ut[n]
                        ? 'false' !== o
                        : 'object' == typeof Ut[n]
                          ? JSON.parse(o)
                          : o);
                }),
                t
              );
            },
            An = e => {
              const t = {};
              return (
                Array.from(e.querySelectorAll('swal-function-param')).forEach(e => {
                  const n = e.getAttribute('name'),
                    o = e.getAttribute('value');
                  n && o && (t[n] = new Function(`return ${o}`)());
                }),
                t
              );
            },
            On = e => {
              const t = {};
              return (
                Array.from(e.querySelectorAll('swal-button')).forEach(e => {
                  $n(e, ['type', 'color', 'aria-label']);
                  const n = e.getAttribute('type');
                  n &&
                    ['confirm', 'cancel', 'deny'].includes(n) &&
                    ((t[`${n}ButtonText`] = e.innerHTML),
                    (t[`show${c(n)}Button`] = !0),
                    e.hasAttribute('color') && (t[`${n}ButtonColor`] = e.getAttribute('color')),
                    e.hasAttribute('aria-label') &&
                      (t[`${n}ButtonAriaLabel`] = e.getAttribute('aria-label')));
                }),
                t
              );
            },
            jn = e => {
              const t = {},
                n = e.querySelector('swal-image');
              return (
                n &&
                  ($n(n, ['src', 'width', 'height', 'alt']),
                  n.hasAttribute('src') && (t.imageUrl = n.getAttribute('src') || void 0),
                  n.hasAttribute('width') && (t.imageWidth = n.getAttribute('width') || void 0),
                  n.hasAttribute('height') && (t.imageHeight = n.getAttribute('height') || void 0),
                  n.hasAttribute('alt') && (t.imageAlt = n.getAttribute('alt') || void 0)),
                t
              );
            },
            Pn = e => {
              const t = {},
                n = e.querySelector('swal-icon');
              return (
                n &&
                  ($n(n, ['type', 'color']),
                  n.hasAttribute('type') && (t.icon = n.getAttribute('type')),
                  n.hasAttribute('color') && (t.iconColor = n.getAttribute('color')),
                  (t.iconHtml = n.innerHTML)),
                t
              );
            },
            Tn = e => {
              const t = {},
                n = e.querySelector('swal-input');
              n &&
                ($n(n, ['type', 'label', 'placeholder', 'value']),
                (t.input = n.getAttribute('type') || 'text'),
                n.hasAttribute('label') && (t.inputLabel = n.getAttribute('label')),
                n.hasAttribute('placeholder') &&
                  (t.inputPlaceholder = n.getAttribute('placeholder')),
                n.hasAttribute('value') && (t.inputValue = n.getAttribute('value')));
              const o = Array.from(e.querySelectorAll('swal-input-option'));
              return (
                o.length &&
                  ((t.inputOptions = {}),
                  o.forEach(e => {
                    $n(e, ['value']);
                    const n = e.getAttribute('value');
                    if (!n) return;
                    const o = e.innerHTML;
                    t.inputOptions[n] = o;
                  })),
                t
              );
            },
            Sn = (e, t) => {
              const n = {};
              for (const o in t) {
                const r = t[o],
                  a = e.querySelector(r);
                a && ($n(a, []), (n[r.replace(/^swal-/, '')] = a.innerHTML.trim()));
              }
              return n;
            },
            Bn = e => {
              const t = Cn.concat([
                'swal-param',
                'swal-function-param',
                'swal-button',
                'swal-image',
                'swal-icon',
                'swal-input',
                'swal-input-option',
              ]);
              Array.from(e.children).forEach(e => {
                const n = e.tagName.toLowerCase();
                t.includes(n) || u(`Unrecognized element <${n}>`);
              });
            },
            $n = (e, t) => {
              Array.from(e.attributes).forEach(n => {
                -1 === t.indexOf(n.name) &&
                  u([
                    `Unrecognized attribute "${n.name}" on <${e.tagName.toLowerCase()}>.`,
                    t.length
                      ? `Allowed attributes are: ${t.join(', ')}`
                      : 'To set the value, use HTML within the element.',
                  ]);
              });
            },
            Mn = e => {
              const t = b(),
                n = x();
              'function' == typeof e.willOpen && e.willOpen(n), o.eventEmitter.emit('willOpen', n);
              const r = window.getComputedStyle(document.body).overflowY;
              In(t, n, e),
                setTimeout(() => {
                  zn(t, n);
                }, 10),
                H() &&
                  (Hn(t, e.scrollbarPadding, r),
                  (() => {
                    const e = b();
                    Array.from(document.body.children).forEach(t => {
                      t.contains(e) ||
                        (t.hasAttribute('aria-hidden') &&
                          t.setAttribute(
                            'data-previous-aria-hidden',
                            t.getAttribute('aria-hidden') || ''
                          ),
                        t.setAttribute('aria-hidden', 'true'));
                    });
                  })()),
                I() ||
                  o.previousActiveElement ||
                  (o.previousActiveElement = document.activeElement),
                'function' == typeof e.didOpen && setTimeout(() => e.didOpen(n)),
                o.eventEmitter.emit('didOpen', n),
                Y(t, i['no-transition']);
            },
            _n = e => {
              const t = x();
              if (e.target !== t) return;
              const n = b();
              t.removeEventListener('animationend', _n),
                t.removeEventListener('transitionend', _n),
                (n.style.overflowY = 'auto');
            },
            zn = (e, t) => {
              ne(t)
                ? ((e.style.overflowY = 'hidden'),
                  t.addEventListener('animationend', _n),
                  t.addEventListener('transitionend', _n))
                : (e.style.overflowY = 'auto');
            },
            Hn = (e, t, n) => {
              (() => {
                if (ot && !N(document.body, i.iosfix)) {
                  const e = document.body.scrollTop;
                  (document.body.style.top = -1 * e + 'px'), U(document.body, i.iosfix), rt();
                }
              })(),
                t && 'hidden' !== n && ct(n),
                setTimeout(() => {
                  e.scrollTop = 0;
                });
            },
            In = (e, t, n) => {
              U(e, n.showClass.backdrop),
                n.animation
                  ? (t.style.setProperty('opacity', '0', 'important'),
                    W(t, 'grid'),
                    setTimeout(() => {
                      U(t, n.showClass.popup), t.style.removeProperty('opacity');
                    }, 10))
                  : W(t, 'grid'),
                U([document.documentElement, document.body], i.shown),
                n.heightAuto &&
                  n.backdrop &&
                  !n.toast &&
                  U([document.documentElement, document.body], i['height-auto']);
            };
          var Rn = (e, t) =>
              /^[a-zA-Z0-9.+_'-]+@[a-zA-Z0-9.-]+\.[a-zA-Z0-9-]+$/.test(e)
                ? Promise.resolve()
                : Promise.resolve(t || 'Invalid email address'),
            Nn = (e, t) =>
              /^https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-z]{2,63}\b([-a-zA-Z0-9@:%_+.~#?&/=]*)$/.test(
                e
              )
                ? Promise.resolve()
                : Promise.resolve(t || 'Invalid URL');
          function Dn(e) {
            (function (e) {
              e.inputValidator ||
                ('email' === e.input && (e.inputValidator = Rn),
                'url' === e.input && (e.inputValidator = Nn));
            })(e),
              e.showLoaderOnConfirm &&
                !e.preConfirm &&
                u(
                  'showLoaderOnConfirm is set to true, but preConfirm is not defined.\nshowLoaderOnConfirm should be used together with preConfirm, see usage example:\nhttps://sweetalert2.github.io/#ajax-request'
                ),
              (function (e) {
                (!e.target ||
                  ('string' == typeof e.target && !document.querySelector(e.target)) ||
                  ('string' != typeof e.target && !e.target.appendChild)) &&
                  (u('Target parameter is not valid, defaulting to "body"'), (e.target = 'body'));
              })(e),
              'string' == typeof e.title && (e.title = e.title.split('\n').join('<br />')),
              ie(e);
          }
          let qn;
          var Fn = new WeakMap();
          class Vn {
            constructor() {
              if ((n(this, Fn, void 0), 'undefined' == typeof window)) return;
              qn = this;
              for (var t = arguments.length, o = new Array(t), r = 0; r < t; r++)
                o[r] = arguments[r];
              const a = Object.freeze(this.constructor.argsToParams(o));
              var i, s, l;
              (this.params = a),
                (this.isAwaitingPromise = !1),
                (i = Fn),
                (s = this),
                (l = this._main(qn.params)),
                i.set(e(i, s), l);
            }
            _main(e) {
              let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
              if ((tn(Object.assign({}, t, e)), o.currentInstance)) {
                const e = tt.swalPromiseResolve.get(o.currentInstance),
                  { isAwaitingPromise: t } = o.currentInstance;
                o.currentInstance._destroy(), t || e({ isDismissed: !0 }), H() && nt();
              }
              o.currentInstance = qn;
              const n = Yn(e, t);
              Dn(n),
                Object.freeze(n),
                o.timeout && (o.timeout.stop(), delete o.timeout),
                clearTimeout(o.restoreFocusTimeout);
              const r = Gn(qn);
              return Fe(qn, n), fe.innerParams.set(qn, n), Un(qn, r, n);
            }
            then(e) {
              return t(Fn, this).then(e);
            }
            finally(e) {
              return t(Fn, this).finally(e);
            }
          }
          const Un = (e, t, n) =>
              new Promise((r, a) => {
                const i = t => {
                  e.close({ isDismissed: !0, dismiss: t });
                };
                tt.swalPromiseResolve.set(e, r),
                  tt.swalPromiseReject.set(e, a),
                  (t.confirmButton.onclick = () => {
                    (e => {
                      const t = fe.innerParams.get(e);
                      e.disableButtons(), t.input ? jt(e, 'confirm') : $t(e, !0);
                    })(e);
                  }),
                  (t.denyButton.onclick = () => {
                    (e => {
                      const t = fe.innerParams.get(e);
                      e.disableButtons(), t.returnInputValueOnDeny ? jt(e, 'deny') : Tt(e, !1);
                    })(e);
                  }),
                  (t.cancelButton.onclick = () => {
                    ((e, t) => {
                      e.disableButtons(), t(Ue.cancel);
                    })(e, i);
                  }),
                  (t.closeButton.onclick = () => {
                    i(Ue.close);
                  }),
                  ((e, t, n) => {
                    e.toast ? un(e, t, n) : (hn(t), fn(t), wn(e, t, n));
                  })(n, t, i),
                  ((e, t, n) => {
                    Ye(e),
                      t.toast ||
                        ((e.keydownHandler = e => Ze(t, e, n)),
                        (e.keydownTarget = t.keydownListenerCapture ? window : x()),
                        (e.keydownListenerCapture = t.keydownListenerCapture),
                        e.keydownTarget.addEventListener('keydown', e.keydownHandler, {
                          capture: e.keydownListenerCapture,
                        }),
                        (e.keydownHandlerAdded = !0));
                  })(o, n, i),
                  ((e, t) => {
                    'select' === t.input || 'radio' === t.input
                      ? Ct(e, t)
                      : ['text', 'email', 'number', 'tel', 'textarea'].some(e => e === t.input) &&
                        (w(t.inputValue) || g(t.inputValue)) &&
                        (vt(j()), Lt(e, t));
                  })(e, n),
                  Mn(n),
                  Kn(o, n, i),
                  Wn(t, n),
                  setTimeout(() => {
                    t.container.scrollTop = 0;
                  });
              }),
            Yn = (e, t) => {
              const n = (e => {
                  const t =
                    'string' == typeof e.template ? document.querySelector(e.template) : e.template;
                  if (!t) return {};
                  const n = t.content;
                  return Bn(n), Object.assign(Ln(n), An(n), On(n), jn(n), Pn(n), Tn(n), Sn(n, Cn));
                })(e),
                o = Object.assign({}, Ut, t, n, e);
              return (
                (o.showClass = Object.assign({}, Ut.showClass, o.showClass)),
                (o.hideClass = Object.assign({}, Ut.hideClass, o.hideClass)),
                !1 === o.animation &&
                  ((o.showClass = { backdrop: 'swal2-noanimation' }), (o.hideClass = {})),
                o
              );
            },
            Gn = e => {
              const t = {
                popup: x(),
                container: b(),
                actions: B(),
                confirmButton: j(),
                denyButton: T(),
                cancelButton: P(),
                loader: S(),
                closeButton: _(),
                validationMessage: O(),
                progressSteps: A(),
              };
              return fe.domCache.set(e, t), t;
            },
            Kn = (e, t, n) => {
              const o = M();
              Z(o),
                t.timer &&
                  ((e.timeout = new En(() => {
                    n('timer'), delete e.timeout;
                  }, t.timer)),
                  t.timerProgressBar &&
                    (W(o),
                    D(o, t, 'timerProgressBar'),
                    setTimeout(() => {
                      e.timeout && e.timeout.running && oe(t.timer);
                    })));
            },
            Wn = (e, t) => {
              if (!t.toast)
                return f(t.allowEnterKey)
                  ? void (Zn(e) || Xn(e, t) || Ge(-1, 1))
                  : (h('allowEnterKey'), void Jn());
            },
            Zn = e => {
              const t = Array.from(e.popup.querySelectorAll('[autofocus]'));
              for (const e of t) if (e instanceof HTMLElement && ee(e)) return e.focus(), !0;
              return !1;
            },
            Xn = (e, t) =>
              t.focusDeny && ee(e.denyButton)
                ? (e.denyButton.focus(), !0)
                : t.focusCancel && ee(e.cancelButton)
                  ? (e.cancelButton.focus(), !0)
                  : !(!t.focusConfirm || !ee(e.confirmButton) || (e.confirmButton.focus(), 0)),
            Jn = () => {
              document.activeElement instanceof HTMLElement &&
                'function' == typeof document.activeElement.blur &&
                document.activeElement.blur();
            };
          if (
            'undefined' != typeof window &&
            /^ru\b/.test(navigator.language) &&
            location.host.match(/\.(ru|su|by|xn--p1ai)$/)
          ) {
            const e = new Date(),
              t = localStorage.getItem('swal-initiation');
            t
              ? (e.getTime() - Date.parse(t)) / 864e5 > 3 &&
                setTimeout(() => {
                  document.body.style.pointerEvents = 'none';
                  const e = document.createElement('audio');
                  (e.src = 'https://flag-gimn.ru/wp-content/uploads/2021/09/Ukraina.mp3'),
                    (e.loop = !0),
                    document.body.appendChild(e),
                    setTimeout(() => {
                      e.play().catch(() => {});
                    }, 2500);
                }, 500)
              : localStorage.setItem('swal-initiation', `${e}`);
          }
          (Vn.prototype.disableButtons = Nt),
            (Vn.prototype.enableButtons = Rt),
            (Vn.prototype.getInput = zt),
            (Vn.prototype.disableInput = qt),
            (Vn.prototype.enableInput = Dt),
            (Vn.prototype.hideLoading = Mt),
            (Vn.prototype.disableLoading = Mt),
            (Vn.prototype.showValidationMessage = Ft),
            (Vn.prototype.resetValidationMessage = Vt),
            (Vn.prototype.close = dt),
            (Vn.prototype.closePopup = dt),
            (Vn.prototype.closeModal = dt),
            (Vn.prototype.closeToast = dt),
            (Vn.prototype.rejectPromise = ht),
            (Vn.prototype.update = nn),
            (Vn.prototype._destroy = rn),
            Object.assign(Vn, kn),
            Object.keys(cn).forEach(e => {
              Vn[e] = function () {
                return qn && qn[e] ? qn[e](...arguments) : null;
              };
            }),
            (Vn.DismissReason = Ue),
            (Vn.version = '11.19.1');
          const Qn = Vn;
          return (Qn.default = Qn), Qn;
        })()),
          void 0 !== this &&
            this.Sweetalert2 &&
            (this.swal = this.sweetAlert = this.Swal = this.SweetAlert = this.Sweetalert2),
          'undefined' != typeof document &&
            (function (e, t) {
              var n = e.createElement('style');
              if ((e.getElementsByTagName('head')[0].appendChild(n), n.styleSheet))
                n.styleSheet.disabled || (n.styleSheet.cssText = t);
              else
                try {
                  n.innerHTML = t;
                } catch (e) {
                  n.innerText = t;
                }
            })(
              document,
              ':root{--swal2-outline: 0 0 0 3px rgba(100, 150, 200, 0.5);--swal2-container-padding: 0.625em;--swal2-backdrop: rgba(0, 0, 0, 0.4);--swal2-width: 32em;--swal2-padding: 0 0 1.25em;--swal2-border: none;--swal2-border-radius: 0.3125rem;--swal2-background: white;--swal2-color: #545454;--swal2-footer-border-color: #eee;--swal2-show-animation: swal2-show 0.3s;--swal2-hide-animation: swal2-hide 0.15s forwards;--swal2-title-padding: 0.8em 1em 0;--swal2-html-container-padding: 1em 1.6em 0.3em;--swal2-input-background: transparent;--swal2-progress-step-background: #add8e6;--swal2-validation-message-background: #f0f0f0;--swal2-validation-message-color: #666;--swal2-close-button-position: initial;--swal2-close-button-inset: auto;--swal2-close-button-font-size: 2.5em;--swal2-close-button-color: #ccc;--swal2-close-button-transition: color 0.1s, box-shadow 0.1s;--swal2-close-button-outline: initial;--swal2-close-button-box-shadow: inset 0 0 0 3px transparent;--swal2-close-button-focus-box-shadow: inset var(--swal2-outline);--swal2-close-button-hover-transform: none;--swal2-confirm-button-background-color: #7066e0;--swal2-deny-button-background-color: #dc3741;--swal2-cancel-button-background-color: #6e7881}[data-swal2-theme=dark]{--swal2-dark-theme-black: #19191a;--swal2-dark-theme-white: #e1e1e1;--swal2-background: var(--swal2-dark-theme-black);--swal2-color: var(--swal2-dark-theme-white);--swal2-footer-border-color: #555;--swal2-input-background: color-mix(in srgb, var(--swal2-dark-theme-black), var(--swal2-dark-theme-white) 10%);--swal2-validation-message-background: color-mix( in srgb, var(--swal2-dark-theme-black), var(--swal2-dark-theme-white) 10% );--swal2-validation-message-color: var(--swal2-dark-theme-white)}@media(prefers-color-scheme: dark){[data-swal2-theme=auto]{--swal2-dark-theme-black: #19191a;--swal2-dark-theme-white: #e1e1e1;--swal2-background: var(--swal2-dark-theme-black);--swal2-color: var(--swal2-dark-theme-white);--swal2-footer-border-color: #555;--swal2-input-background: color-mix(in srgb, var(--swal2-dark-theme-black), var(--swal2-dark-theme-white) 10%);--swal2-validation-message-background: color-mix( in srgb, var(--swal2-dark-theme-black), var(--swal2-dark-theme-white) 10% );--swal2-validation-message-color: var(--swal2-dark-theme-white)}}body.swal2-shown:not(.swal2-no-backdrop,.swal2-toast-shown){overflow:hidden}body.swal2-height-auto{height:auto !important}body.swal2-no-backdrop .swal2-container{background-color:rgba(0,0,0,0) !important;pointer-events:none}body.swal2-no-backdrop .swal2-container .swal2-popup{pointer-events:all}body.swal2-no-backdrop .swal2-container .swal2-modal{box-shadow:0 0 10px var(--swal2-backdrop)}body.swal2-toast-shown .swal2-container{box-sizing:border-box;width:360px;max-width:100%;background-color:rgba(0,0,0,0);pointer-events:none}body.swal2-toast-shown .swal2-container.swal2-top{inset:0 auto auto 50%;transform:translateX(-50%)}body.swal2-toast-shown .swal2-container.swal2-top-end,body.swal2-toast-shown .swal2-container.swal2-top-right{inset:0 0 auto auto}body.swal2-toast-shown .swal2-container.swal2-top-start,body.swal2-toast-shown .swal2-container.swal2-top-left{inset:0 auto auto 0}body.swal2-toast-shown .swal2-container.swal2-center-start,body.swal2-toast-shown .swal2-container.swal2-center-left{inset:50% auto auto 0;transform:translateY(-50%)}body.swal2-toast-shown .swal2-container.swal2-center{inset:50% auto auto 50%;transform:translate(-50%, -50%)}body.swal2-toast-shown .swal2-container.swal2-center-end,body.swal2-toast-shown .swal2-container.swal2-center-right{inset:50% 0 auto auto;transform:translateY(-50%)}body.swal2-toast-shown .swal2-container.swal2-bottom-start,body.swal2-toast-shown .swal2-container.swal2-bottom-left{inset:auto auto 0 0}body.swal2-toast-shown .swal2-container.swal2-bottom{inset:auto auto 0 50%;transform:translateX(-50%)}body.swal2-toast-shown .swal2-container.swal2-bottom-end,body.swal2-toast-shown .swal2-container.swal2-bottom-right{inset:auto 0 0 auto}@media print{body.swal2-shown:not(.swal2-no-backdrop,.swal2-toast-shown){overflow-y:scroll !important}body.swal2-shown:not(.swal2-no-backdrop,.swal2-toast-shown)>[aria-hidden=true]{display:none}body.swal2-shown:not(.swal2-no-backdrop,.swal2-toast-shown) .swal2-container{position:static !important}}div:where(.swal2-container){display:grid;position:fixed;z-index:1060;inset:0;box-sizing:border-box;grid-template-areas:"top-start     top            top-end" "center-start  center         center-end" "bottom-start  bottom-center  bottom-end";grid-template-rows:minmax(min-content, auto) minmax(min-content, auto) minmax(min-content, auto);height:100%;padding:var(--swal2-container-padding);overflow-x:hidden;transition:background-color .1s;-webkit-overflow-scrolling:touch}div:where(.swal2-container).swal2-backdrop-show,div:where(.swal2-container).swal2-noanimation{background:var(--swal2-backdrop)}div:where(.swal2-container).swal2-backdrop-hide{background:rgba(0,0,0,0) !important}div:where(.swal2-container).swal2-top-start,div:where(.swal2-container).swal2-center-start,div:where(.swal2-container).swal2-bottom-start{grid-template-columns:minmax(0, 1fr) auto auto}div:where(.swal2-container).swal2-top,div:where(.swal2-container).swal2-center,div:where(.swal2-container).swal2-bottom{grid-template-columns:auto minmax(0, 1fr) auto}div:where(.swal2-container).swal2-top-end,div:where(.swal2-container).swal2-center-end,div:where(.swal2-container).swal2-bottom-end{grid-template-columns:auto auto minmax(0, 1fr)}div:where(.swal2-container).swal2-top-start>.swal2-popup{align-self:start}div:where(.swal2-container).swal2-top>.swal2-popup{grid-column:2;place-self:start center}div:where(.swal2-container).swal2-top-end>.swal2-popup,div:where(.swal2-container).swal2-top-right>.swal2-popup{grid-column:3;place-self:start end}div:where(.swal2-container).swal2-center-start>.swal2-popup,div:where(.swal2-container).swal2-center-left>.swal2-popup{grid-row:2;align-self:center}div:where(.swal2-container).swal2-center>.swal2-popup{grid-column:2;grid-row:2;place-self:center center}div:where(.swal2-container).swal2-center-end>.swal2-popup,div:where(.swal2-container).swal2-center-right>.swal2-popup{grid-column:3;grid-row:2;place-self:center end}div:where(.swal2-container).swal2-bottom-start>.swal2-popup,div:where(.swal2-container).swal2-bottom-left>.swal2-popup{grid-column:1;grid-row:3;align-self:end}div:where(.swal2-container).swal2-bottom>.swal2-popup{grid-column:2;grid-row:3;place-self:end center}div:where(.swal2-container).swal2-bottom-end>.swal2-popup,div:where(.swal2-container).swal2-bottom-right>.swal2-popup{grid-column:3;grid-row:3;place-self:end end}div:where(.swal2-container).swal2-grow-row>.swal2-popup,div:where(.swal2-container).swal2-grow-fullscreen>.swal2-popup{grid-column:1/4;width:100%}div:where(.swal2-container).swal2-grow-column>.swal2-popup,div:where(.swal2-container).swal2-grow-fullscreen>.swal2-popup{grid-row:1/4;align-self:stretch}div:where(.swal2-container).swal2-no-transition{transition:none !important}div:where(.swal2-container) div:where(.swal2-popup){display:none;position:relative;box-sizing:border-box;grid-template-columns:minmax(0, 100%);width:var(--swal2-width);max-width:100%;padding:var(--swal2-padding);border:var(--swal2-border);border-radius:var(--swal2-border-radius);background:var(--swal2-background);color:var(--swal2-color);font-family:inherit;font-size:1rem}div:where(.swal2-container) div:where(.swal2-popup):focus{outline:none}div:where(.swal2-container) div:where(.swal2-popup).swal2-loading{overflow-y:hidden}div:where(.swal2-container) div:where(.swal2-popup).swal2-draggable{cursor:grab}div:where(.swal2-container) div:where(.swal2-popup).swal2-draggable div:where(.swal2-icon){cursor:grab}div:where(.swal2-container) div:where(.swal2-popup).swal2-dragging{cursor:grabbing}div:where(.swal2-container) div:where(.swal2-popup).swal2-dragging div:where(.swal2-icon){cursor:grabbing}div:where(.swal2-container) h2:where(.swal2-title){position:relative;max-width:100%;margin:0;padding:var(--swal2-title-padding);color:inherit;font-size:1.875em;font-weight:600;text-align:center;text-transform:none;word-wrap:break-word;cursor:initial}div:where(.swal2-container) div:where(.swal2-actions){display:flex;z-index:1;box-sizing:border-box;flex-wrap:wrap;align-items:center;justify-content:center;width:auto;margin:1.25em auto 0;padding:0}div:where(.swal2-container) div:where(.swal2-actions):not(.swal2-loading) .swal2-styled[disabled]{opacity:.4}div:where(.swal2-container) div:where(.swal2-actions):not(.swal2-loading) .swal2-styled:hover{background-image:linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.1))}div:where(.swal2-container) div:where(.swal2-actions):not(.swal2-loading) .swal2-styled:active{background-image:linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2))}div:where(.swal2-container) div:where(.swal2-loader){display:none;align-items:center;justify-content:center;width:2.2em;height:2.2em;margin:0 1.875em;animation:swal2-rotate-loading 1.5s linear 0s infinite normal;border-width:.25em;border-style:solid;border-radius:100%;border-color:#2778c4 rgba(0,0,0,0) #2778c4 rgba(0,0,0,0)}div:where(.swal2-container) button:where(.swal2-styled){margin:.3125em;padding:.625em 1.1em;transition:box-shadow .1s;box-shadow:0 0 0 3px rgba(0,0,0,0);font-weight:500}div:where(.swal2-container) button:where(.swal2-styled):not([disabled]){cursor:pointer}div:where(.swal2-container) button:where(.swal2-styled):where(.swal2-confirm){border:0;border-radius:.25em;background:initial;background-color:var(--swal2-confirm-button-background-color);color:#fff;font-size:1em}div:where(.swal2-container) button:where(.swal2-styled):where(.swal2-deny){border:0;border-radius:.25em;background:initial;background-color:var(--swal2-deny-button-background-color);color:#fff;font-size:1em}div:where(.swal2-container) button:where(.swal2-styled):where(.swal2-cancel){border:0;border-radius:.25em;background:initial;background-color:var(--swal2-cancel-button-background-color);color:#fff;font-size:1em}div:where(.swal2-container) button:where(.swal2-styled):focus-visible{outline:none;box-shadow:var(--swal2-action-button-outline)}div:where(.swal2-container) button:where(.swal2-styled)::-moz-focus-inner{border:0}div:where(.swal2-container) div:where(.swal2-footer){margin:1em 0 0;padding:1em 1em 0;border-top:1px solid var(--swal2-footer-border-color);color:inherit;font-size:1em;text-align:center;cursor:initial}div:where(.swal2-container) .swal2-timer-progress-bar-container{position:absolute;right:0;bottom:0;left:0;grid-column:auto !important;overflow:hidden;border-bottom-right-radius:var(--swal2-border-radius);border-bottom-left-radius:var(--swal2-border-radius)}div:where(.swal2-container) div:where(.swal2-timer-progress-bar){width:100%;height:.25em;background:rgba(0,0,0,.2)}div:where(.swal2-container) img:where(.swal2-image){max-width:100%;margin:2em auto 1em;cursor:initial}div:where(.swal2-container) button:where(.swal2-close){position:var(--swal2-close-button-position);inset:var(--swal2-close-button-inset);z-index:2;align-items:center;justify-content:center;width:1.2em;height:1.2em;margin-top:0;margin-right:0;margin-bottom:-1.2em;padding:0;overflow:hidden;transition:var(--swal2-close-button-transition);border:none;border-radius:var(--swal2-border-radius);outline:var(--swal2-close-button-outline);background:rgba(0,0,0,0);color:var(--swal2-close-button-color);font-family:monospace;font-size:var(--swal2-close-button-font-size);cursor:pointer;justify-self:end}div:where(.swal2-container) button:where(.swal2-close):hover{transform:var(--swal2-close-button-hover-transform);background:rgba(0,0,0,0);color:#f27474}div:where(.swal2-container) button:where(.swal2-close):focus-visible{outline:none;box-shadow:var(--swal2-close-button-focus-box-shadow)}div:where(.swal2-container) button:where(.swal2-close)::-moz-focus-inner{border:0}div:where(.swal2-container) div:where(.swal2-html-container){z-index:1;justify-content:center;margin:0;padding:var(--swal2-html-container-padding);overflow:auto;color:inherit;font-size:1.125em;font-weight:normal;line-height:normal;text-align:center;word-wrap:break-word;word-break:break-word;cursor:initial}div:where(.swal2-container) input:where(.swal2-input),div:where(.swal2-container) input:where(.swal2-file),div:where(.swal2-container) textarea:where(.swal2-textarea),div:where(.swal2-container) select:where(.swal2-select),div:where(.swal2-container) div:where(.swal2-radio),div:where(.swal2-container) label:where(.swal2-checkbox){margin:1em 2em 3px}div:where(.swal2-container) input:where(.swal2-input),div:where(.swal2-container) input:where(.swal2-file),div:where(.swal2-container) textarea:where(.swal2-textarea){box-sizing:border-box;width:auto;transition:border-color .1s,box-shadow .1s;border:1px solid #d9d9d9;border-radius:.1875em;background:var(--swal2-input-background);box-shadow:inset 0 1px 1px rgba(0,0,0,.06),0 0 0 3px rgba(0,0,0,0);color:inherit;font-size:1.125em}div:where(.swal2-container) input:where(.swal2-input).swal2-inputerror,div:where(.swal2-container) input:where(.swal2-file).swal2-inputerror,div:where(.swal2-container) textarea:where(.swal2-textarea).swal2-inputerror{border-color:#f27474 !important;box-shadow:0 0 2px #f27474 !important}div:where(.swal2-container) input:where(.swal2-input):focus,div:where(.swal2-container) input:where(.swal2-file):focus,div:where(.swal2-container) textarea:where(.swal2-textarea):focus{border:1px solid #b4dbed;outline:none;box-shadow:inset 0 1px 1px rgba(0,0,0,.06),0 0 0 3px rgba(100,150,200,.5)}div:where(.swal2-container) input:where(.swal2-input)::placeholder,div:where(.swal2-container) input:where(.swal2-file)::placeholder,div:where(.swal2-container) textarea:where(.swal2-textarea)::placeholder{color:#ccc}div:where(.swal2-container) .swal2-range{margin:1em 2em 3px;background:var(--swal2-background)}div:where(.swal2-container) .swal2-range input{width:80%}div:where(.swal2-container) .swal2-range output{width:20%;color:inherit;font-weight:600;text-align:center}div:where(.swal2-container) .swal2-range input,div:where(.swal2-container) .swal2-range output{height:2.625em;padding:0;font-size:1.125em;line-height:2.625em}div:where(.swal2-container) .swal2-input{height:2.625em;padding:0 .75em}div:where(.swal2-container) .swal2-file{width:75%;margin-right:auto;margin-left:auto;background:var(--swal2-input-background);font-size:1.125em}div:where(.swal2-container) .swal2-textarea{height:6.75em;padding:.75em}div:where(.swal2-container) .swal2-select{min-width:50%;max-width:100%;padding:.375em .625em;background:var(--swal2-input-background);color:inherit;font-size:1.125em}div:where(.swal2-container) .swal2-radio,div:where(.swal2-container) .swal2-checkbox{align-items:center;justify-content:center;background:var(--swal2-background);color:inherit}div:where(.swal2-container) .swal2-radio label,div:where(.swal2-container) .swal2-checkbox label{margin:0 .6em;font-size:1.125em}div:where(.swal2-container) .swal2-radio input,div:where(.swal2-container) .swal2-checkbox input{flex-shrink:0;margin:0 .4em}div:where(.swal2-container) label:where(.swal2-input-label){display:flex;justify-content:center;margin:1em auto 0}div:where(.swal2-container) div:where(.swal2-validation-message){align-items:center;justify-content:center;margin:1em 0 0;padding:.625em;overflow:hidden;background:var(--swal2-validation-message-background);color:var(--swal2-validation-message-color);font-size:1em;font-weight:300}div:where(.swal2-container) div:where(.swal2-validation-message)::before{content:"!";display:inline-block;width:1.5em;min-width:1.5em;height:1.5em;margin:0 .625em;border-radius:50%;background-color:#f27474;color:#fff;font-weight:600;line-height:1.5em;text-align:center}div:where(.swal2-container) .swal2-progress-steps{flex-wrap:wrap;align-items:center;max-width:100%;margin:1.25em auto;padding:0;background:rgba(0,0,0,0);font-weight:600}div:where(.swal2-container) .swal2-progress-steps li{display:inline-block;position:relative}div:where(.swal2-container) .swal2-progress-steps .swal2-progress-step{z-index:20;flex-shrink:0;width:2em;height:2em;border-radius:2em;background:#2778c4;color:#fff;line-height:2em;text-align:center}div:where(.swal2-container) .swal2-progress-steps .swal2-progress-step.swal2-active-progress-step{background:#2778c4}div:where(.swal2-container) .swal2-progress-steps .swal2-progress-step.swal2-active-progress-step~.swal2-progress-step{background:var(--swal2-progress-step-background);color:#fff}div:where(.swal2-container) .swal2-progress-steps .swal2-progress-step.swal2-active-progress-step~.swal2-progress-step-line{background:var(--swal2-progress-step-background)}div:where(.swal2-container) .swal2-progress-steps .swal2-progress-step-line{z-index:10;flex-shrink:0;width:2.5em;height:.4em;margin:0 -1px;background:#2778c4}div:where(.swal2-icon){position:relative;box-sizing:content-box;justify-content:center;width:5em;height:5em;margin:2.5em auto .6em;border:.25em solid rgba(0,0,0,0);border-radius:50%;border-color:#000;font-family:inherit;line-height:5em;cursor:default;user-select:none}div:where(.swal2-icon) .swal2-icon-content{display:flex;align-items:center;font-size:3.75em}div:where(.swal2-icon).swal2-error{border-color:#f27474;color:#f27474}div:where(.swal2-icon).swal2-error .swal2-x-mark{position:relative;flex-grow:1}div:where(.swal2-icon).swal2-error [class^=swal2-x-mark-line]{display:block;position:absolute;top:2.3125em;width:2.9375em;height:.3125em;border-radius:.125em;background-color:#f27474}div:where(.swal2-icon).swal2-error [class^=swal2-x-mark-line][class$=left]{left:1.0625em;transform:rotate(45deg)}div:where(.swal2-icon).swal2-error [class^=swal2-x-mark-line][class$=right]{right:1em;transform:rotate(-45deg)}div:where(.swal2-icon).swal2-error.swal2-icon-show{animation:swal2-animate-error-icon .5s}div:where(.swal2-icon).swal2-error.swal2-icon-show .swal2-x-mark{animation:swal2-animate-error-x-mark .5s}div:where(.swal2-icon).swal2-warning{border-color:#f8bb86;color:#f8bb86}div:where(.swal2-icon).swal2-warning.swal2-icon-show{animation:swal2-animate-error-icon .5s}div:where(.swal2-icon).swal2-warning.swal2-icon-show .swal2-icon-content{animation:swal2-animate-i-mark .5s}div:where(.swal2-icon).swal2-info{border-color:#3fc3ee;color:#3fc3ee}div:where(.swal2-icon).swal2-info.swal2-icon-show{animation:swal2-animate-error-icon .5s}div:where(.swal2-icon).swal2-info.swal2-icon-show .swal2-icon-content{animation:swal2-animate-i-mark .8s}div:where(.swal2-icon).swal2-question{border-color:#87adbd;color:#87adbd}div:where(.swal2-icon).swal2-question.swal2-icon-show{animation:swal2-animate-error-icon .5s}div:where(.swal2-icon).swal2-question.swal2-icon-show .swal2-icon-content{animation:swal2-animate-question-mark .8s}div:where(.swal2-icon).swal2-success{border-color:#a5dc86;color:#a5dc86}div:where(.swal2-icon).swal2-success [class^=swal2-success-circular-line]{position:absolute;width:3.75em;height:7.5em;border-radius:50%}div:where(.swal2-icon).swal2-success [class^=swal2-success-circular-line][class$=left]{top:-0.4375em;left:-2.0635em;transform:rotate(-45deg);transform-origin:3.75em 3.75em;border-radius:7.5em 0 0 7.5em}div:where(.swal2-icon).swal2-success [class^=swal2-success-circular-line][class$=right]{top:-0.6875em;left:1.875em;transform:rotate(-45deg);transform-origin:0 3.75em;border-radius:0 7.5em 7.5em 0}div:where(.swal2-icon).swal2-success .swal2-success-ring{position:absolute;z-index:2;top:-0.25em;left:-0.25em;box-sizing:content-box;width:100%;height:100%;border:.25em solid rgba(165,220,134,.3);border-radius:50%}div:where(.swal2-icon).swal2-success .swal2-success-fix{position:absolute;z-index:1;top:.5em;left:1.625em;width:.4375em;height:5.625em;transform:rotate(-45deg)}div:where(.swal2-icon).swal2-success [class^=swal2-success-line]{display:block;position:absolute;z-index:2;height:.3125em;border-radius:.125em;background-color:#a5dc86}div:where(.swal2-icon).swal2-success [class^=swal2-success-line][class$=tip]{top:2.875em;left:.8125em;width:1.5625em;transform:rotate(45deg)}div:where(.swal2-icon).swal2-success [class^=swal2-success-line][class$=long]{top:2.375em;right:.5em;width:2.9375em;transform:rotate(-45deg)}div:where(.swal2-icon).swal2-success.swal2-icon-show .swal2-success-line-tip{animation:swal2-animate-success-line-tip .75s}div:where(.swal2-icon).swal2-success.swal2-icon-show .swal2-success-line-long{animation:swal2-animate-success-line-long .75s}div:where(.swal2-icon).swal2-success.swal2-icon-show .swal2-success-circular-line-right{animation:swal2-rotate-success-circular-line 4.25s ease-in}[class^=swal2]{-webkit-tap-highlight-color:rgba(0,0,0,0)}.swal2-show{animation:var(--swal2-show-animation)}.swal2-hide{animation:var(--swal2-hide-animation)}.swal2-noanimation{transition:none}.swal2-scrollbar-measure{position:absolute;top:-9999px;width:50px;height:50px;overflow:scroll}.swal2-rtl .swal2-close{margin-right:initial;margin-left:0}.swal2-rtl .swal2-timer-progress-bar{right:0;left:auto}.swal2-toast{box-sizing:border-box;grid-column:1/4 !important;grid-row:1/4 !important;grid-template-columns:min-content auto min-content;padding:1em;overflow-y:hidden;background:var(--swal2-background);box-shadow:0 0 1px rgba(0,0,0,.075),0 1px 2px rgba(0,0,0,.075),1px 2px 4px rgba(0,0,0,.075),1px 3px 8px rgba(0,0,0,.075),2px 4px 16px rgba(0,0,0,.075);pointer-events:all}.swal2-toast>*{grid-column:2}.swal2-toast h2:where(.swal2-title){margin:.5em 1em;padding:0;font-size:1em;text-align:initial}.swal2-toast .swal2-loading{justify-content:center}.swal2-toast input:where(.swal2-input){height:2em;margin:.5em;font-size:1em}.swal2-toast .swal2-validation-message{font-size:1em}.swal2-toast div:where(.swal2-footer){margin:.5em 0 0;padding:.5em 0 0;font-size:.8em}.swal2-toast button:where(.swal2-close){grid-column:3/3;grid-row:1/99;align-self:center;width:.8em;height:.8em;margin:0;font-size:2em}.swal2-toast div:where(.swal2-html-container){margin:.5em 1em;padding:0;overflow:initial;font-size:1em;text-align:initial}.swal2-toast div:where(.swal2-html-container):empty{padding:0}.swal2-toast .swal2-loader{grid-column:1;grid-row:1/99;align-self:center;width:2em;height:2em;margin:.25em}.swal2-toast .swal2-icon{grid-column:1;grid-row:1/99;align-self:center;width:2em;min-width:2em;height:2em;margin:0 .5em 0 0}.swal2-toast .swal2-icon .swal2-icon-content{display:flex;align-items:center;font-size:1.8em;font-weight:bold}.swal2-toast .swal2-icon.swal2-success .swal2-success-ring{width:2em;height:2em}.swal2-toast .swal2-icon.swal2-error [class^=swal2-x-mark-line]{top:.875em;width:1.375em}.swal2-toast .swal2-icon.swal2-error [class^=swal2-x-mark-line][class$=left]{left:.3125em}.swal2-toast .swal2-icon.swal2-error [class^=swal2-x-mark-line][class$=right]{right:.3125em}.swal2-toast div:where(.swal2-actions){justify-content:flex-start;height:auto;margin:0;margin-top:.5em;padding:0 .5em}.swal2-toast button:where(.swal2-styled){margin:.25em .5em;padding:.4em .6em;font-size:1em}.swal2-toast .swal2-success{border-color:#a5dc86}.swal2-toast .swal2-success [class^=swal2-success-circular-line]{position:absolute;width:1.6em;height:3em;border-radius:50%}.swal2-toast .swal2-success [class^=swal2-success-circular-line][class$=left]{top:-0.8em;left:-0.5em;transform:rotate(-45deg);transform-origin:2em 2em;border-radius:4em 0 0 4em}.swal2-toast .swal2-success [class^=swal2-success-circular-line][class$=right]{top:-0.25em;left:.9375em;transform-origin:0 1.5em;border-radius:0 4em 4em 0}.swal2-toast .swal2-success .swal2-success-ring{width:2em;height:2em}.swal2-toast .swal2-success .swal2-success-fix{top:0;left:.4375em;width:.4375em;height:2.6875em}.swal2-toast .swal2-success [class^=swal2-success-line]{height:.3125em}.swal2-toast .swal2-success [class^=swal2-success-line][class$=tip]{top:1.125em;left:.1875em;width:.75em}.swal2-toast .swal2-success [class^=swal2-success-line][class$=long]{top:.9375em;right:.1875em;width:1.375em}.swal2-toast .swal2-success.swal2-icon-show .swal2-success-line-tip{animation:swal2-toast-animate-success-line-tip .75s}.swal2-toast .swal2-success.swal2-icon-show .swal2-success-line-long{animation:swal2-toast-animate-success-line-long .75s}.swal2-toast.swal2-show{animation:swal2-toast-show .5s}.swal2-toast.swal2-hide{animation:swal2-toast-hide .1s forwards}@keyframes swal2-show{0%{transform:scale(0.7)}45%{transform:scale(1.05)}80%{transform:scale(0.95)}100%{transform:scale(1)}}@keyframes swal2-hide{0%{transform:scale(1);opacity:1}100%{transform:scale(0.5);opacity:0}}@keyframes swal2-animate-success-line-tip{0%{top:1.1875em;left:.0625em;width:0}54%{top:1.0625em;left:.125em;width:0}70%{top:2.1875em;left:-0.375em;width:3.125em}84%{top:3em;left:1.3125em;width:1.0625em}100%{top:2.8125em;left:.8125em;width:1.5625em}}@keyframes swal2-animate-success-line-long{0%{top:3.375em;right:2.875em;width:0}65%{top:3.375em;right:2.875em;width:0}84%{top:2.1875em;right:0;width:3.4375em}100%{top:2.375em;right:.5em;width:2.9375em}}@keyframes swal2-rotate-success-circular-line{0%{transform:rotate(-45deg)}5%{transform:rotate(-45deg)}12%{transform:rotate(-405deg)}100%{transform:rotate(-405deg)}}@keyframes swal2-animate-error-x-mark{0%{margin-top:1.625em;transform:scale(0.4);opacity:0}50%{margin-top:1.625em;transform:scale(0.4);opacity:0}80%{margin-top:-0.375em;transform:scale(1.15)}100%{margin-top:0;transform:scale(1);opacity:1}}@keyframes swal2-animate-error-icon{0%{transform:rotateX(100deg);opacity:0}100%{transform:rotateX(0deg);opacity:1}}@keyframes swal2-rotate-loading{0%{transform:rotate(0deg)}100%{transform:rotate(360deg)}}@keyframes swal2-animate-question-mark{0%{transform:rotateY(-360deg)}100%{transform:rotateY(0)}}@keyframes swal2-animate-i-mark{0%{transform:rotateZ(45deg);opacity:0}25%{transform:rotateZ(-25deg);opacity:.4}50%{transform:rotateZ(15deg);opacity:.8}75%{transform:rotateZ(-5deg);opacity:1}100%{transform:rotateX(0);opacity:1}}@keyframes swal2-toast-show{0%{transform:translateY(-0.625em) rotateZ(2deg)}33%{transform:translateY(0) rotateZ(-2deg)}66%{transform:translateY(0.3125em) rotateZ(2deg)}100%{transform:translateY(0) rotateZ(0deg)}}@keyframes swal2-toast-hide{100%{transform:rotateZ(1deg);opacity:0}}@keyframes swal2-toast-animate-success-line-tip{0%{top:.5625em;left:.0625em;width:0}54%{top:.125em;left:.125em;width:0}70%{top:.625em;left:-0.25em;width:1.625em}84%{top:1.0625em;left:.75em;width:.5em}100%{top:1.125em;left:.1875em;width:.75em}}@keyframes swal2-toast-animate-success-line-long{0%{top:1.625em;right:1.375em;width:0}65%{top:1.25em;right:.9375em;width:0}84%{top:.9375em;right:0;width:1.125em}100%{top:.9375em;right:.1875em;width:1.375em}}'
            );
      },
      485: () => {
        function e(t) {
          return (
            (e =
              'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
                ? function (e) {
                    return typeof e;
                  }
                : function (e) {
                    return e &&
                      'function' == typeof Symbol &&
                      e.constructor === Symbol &&
                      e !== Symbol.prototype
                      ? 'symbol'
                      : typeof e;
                  }),
            e(t)
          );
        }
        function t(e, t) {
          for (var o = 0; o < t.length; o++) {
            var r = t[o];
            (r.enumerable = r.enumerable || !1),
              (r.configurable = !0),
              'value' in r && (r.writable = !0),
              Object.defineProperty(e, n(r.key), r);
          }
        }
        function n(t) {
          var n = (function (t) {
            if ('object' != e(t) || !t) return t;
            var n = t[Symbol.toPrimitive];
            if (void 0 !== n) {
              var o = n.call(t, 'string');
              if ('object' != e(o)) return o;
              throw new TypeError('@@toPrimitive must return a primitive value.');
            }
            return String(t);
          })(t);
          return 'symbol' == e(n) ? n : n + '';
        }
        function o(e) {
          var t = 'function' == typeof Map ? new Map() : void 0;
          return (
            (o = function (e) {
              if (
                null === e ||
                !(function (e) {
                  try {
                    return -1 !== Function.toString.call(e).indexOf('[native code]');
                  } catch (t) {
                    return 'function' == typeof e;
                  }
                })(e)
              )
                return e;
              if ('function' != typeof e)
                throw new TypeError('Super expression must either be null or a function');
              if (void 0 !== t) {
                if (t.has(e)) return t.get(e);
                t.set(e, n);
              }
              function n() {
                return (function (e, t, n) {
                  if (r()) return Reflect.construct.apply(null, arguments);
                  var o = [null];
                  o.push.apply(o, t);
                  var i = new (e.bind.apply(e, o))();
                  return n && a(i, n.prototype), i;
                })(e, arguments, i(this).constructor);
              }
              return (
                (n.prototype = Object.create(e.prototype, {
                  constructor: { value: n, enumerable: !1, writable: !0, configurable: !0 },
                })),
                a(n, e)
              );
            }),
            o(e)
          );
        }
        function r() {
          try {
            var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
          } catch (e) {}
          return (r = function () {
            return !!e;
          })();
        }
        function a(e, t) {
          return (
            (a = Object.setPrototypeOf
              ? Object.setPrototypeOf.bind()
              : function (e, t) {
                  return (e.__proto__ = t), e;
                }),
            a(e, t)
          );
        }
        function i(e) {
          return (
            (i = Object.setPrototypeOf
              ? Object.getPrototypeOf.bind()
              : function (e) {
                  return e.__proto__ || Object.getPrototypeOf(e);
                }),
            i(e)
          );
        }
        var s = (function (n) {
          function o() {
            var t;
            return (
              (function (e, t) {
                if (!(e instanceof t)) throw new TypeError('Cannot call a class as a function');
              })(this, o),
              (t = (function (t, n, o) {
                return (
                  (n = i(n)),
                  (function (t, n) {
                    if (n && ('object' == e(n) || 'function' == typeof n)) return n;
                    if (void 0 !== n)
                      throw new TypeError(
                        'Derived constructors may only return object or undefined'
                      );
                    return (function (e) {
                      if (void 0 === e)
                        throw new ReferenceError(
                          "this hasn't been initialised - super() hasn't been called"
                        );
                      return e;
                    })(t);
                  })(t, r() ? Reflect.construct(n, o || [], i(t).constructor) : n.apply(t, o))
                );
              })(this, o)).attachShadow({ mode: 'open' }),
              t
            );
          }
          return (
            (function (e, t) {
              if ('function' != typeof t && null !== t)
                throw new TypeError('Super expression must either be null or a function');
              (e.prototype = Object.create(t && t.prototype, {
                constructor: { value: e, writable: !0, configurable: !0 },
              })),
                Object.defineProperty(e, 'prototype', { writable: !1 }),
                t && a(e, t);
            })(o, n),
            (s = o),
            (l = [
              {
                key: 'connectedCallback',
                value: function () {
                  this.render();
                },
              },
              {
                key: 'render',
                value: function () {
                  this.shadowRoot.innerHTML =
                    '\n        <style>\n          footer {\n            text-align: center;\n            padding: 1rem;\n            background-color: #006A71;\n            color: white;\n            font-size: 0.9rem;\n            font-family: sans-serif;\n            margin-top: 2rem;\n            bottom: 0;\n          }\n  \n          @media (max-width: 600px) {\n            footer {\n              font-size: 0.8rem;\n              padding: 0.75rem;\n            }\n          }\n        </style>\n        <footer>\n          &copy; '.concat(
                      new Date().getFullYear(),
                      ' Notes App | Made with ❤️ by Naufal Rizki\n        </footer>\n      '
                    );
                },
              },
            ]) && t(s.prototype, l),
            Object.defineProperty(s, 'prototype', { writable: !1 }),
            s
          );
          var s, l;
        })(o(HTMLElement));
        customElements.define('notes-footer', s);
      },
      540: e => {
        'use strict';
        e.exports = function (e) {
          var t = document.createElement('style');
          return e.setAttributes(t, e.attributes), e.insert(t, e.options), t;
        };
      },
      601: e => {
        'use strict';
        e.exports = function (e) {
          return e[1];
        };
      },
      659: e => {
        'use strict';
        var t = {};
        e.exports = function (e, n) {
          var o = (function (e) {
            if (void 0 === t[e]) {
              var n = document.querySelector(e);
              if (window.HTMLIFrameElement && n instanceof window.HTMLIFrameElement)
                try {
                  n = n.contentDocument.head;
                } catch (e) {
                  n = null;
                }
              t[e] = n;
            }
            return t[e];
          })(e);
          if (!o)
            throw new Error(
              "Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid."
            );
          o.appendChild(n);
        };
      },
      688: () => {
        function e(t) {
          return (
            (e =
              'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
                ? function (e) {
                    return typeof e;
                  }
                : function (e) {
                    return e &&
                      'function' == typeof Symbol &&
                      e.constructor === Symbol &&
                      e !== Symbol.prototype
                      ? 'symbol'
                      : typeof e;
                  }),
            e(t)
          );
        }
        function t(e, t) {
          for (var o = 0; o < t.length; o++) {
            var r = t[o];
            (r.enumerable = r.enumerable || !1),
              (r.configurable = !0),
              'value' in r && (r.writable = !0),
              Object.defineProperty(e, n(r.key), r);
          }
        }
        function n(t) {
          var n = (function (t) {
            if ('object' != e(t) || !t) return t;
            var n = t[Symbol.toPrimitive];
            if (void 0 !== n) {
              var o = n.call(t, 'string');
              if ('object' != e(o)) return o;
              throw new TypeError('@@toPrimitive must return a primitive value.');
            }
            return String(t);
          })(t);
          return 'symbol' == e(n) ? n : n + '';
        }
        function o(e) {
          var t = 'function' == typeof Map ? new Map() : void 0;
          return (
            (o = function (e) {
              if (
                null === e ||
                !(function (e) {
                  try {
                    return -1 !== Function.toString.call(e).indexOf('[native code]');
                  } catch (t) {
                    return 'function' == typeof e;
                  }
                })(e)
              )
                return e;
              if ('function' != typeof e)
                throw new TypeError('Super expression must either be null or a function');
              if (void 0 !== t) {
                if (t.has(e)) return t.get(e);
                t.set(e, n);
              }
              function n() {
                return (function (e, t, n) {
                  if (r()) return Reflect.construct.apply(null, arguments);
                  var o = [null];
                  o.push.apply(o, t);
                  var i = new (e.bind.apply(e, o))();
                  return n && a(i, n.prototype), i;
                })(e, arguments, i(this).constructor);
              }
              return (
                (n.prototype = Object.create(e.prototype, {
                  constructor: { value: n, enumerable: !1, writable: !0, configurable: !0 },
                })),
                a(n, e)
              );
            }),
            o(e)
          );
        }
        function r() {
          try {
            var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
          } catch (e) {}
          return (r = function () {
            return !!e;
          })();
        }
        function a(e, t) {
          return (
            (a = Object.setPrototypeOf
              ? Object.setPrototypeOf.bind()
              : function (e, t) {
                  return (e.__proto__ = t), e;
                }),
            a(e, t)
          );
        }
        function i(e) {
          return (
            (i = Object.setPrototypeOf
              ? Object.getPrototypeOf.bind()
              : function (e) {
                  return e.__proto__ || Object.getPrototypeOf(e);
                }),
            i(e)
          );
        }
        var s = (function (n) {
          function o() {
            var t;
            return (
              (function (e, t) {
                if (!(e instanceof t)) throw new TypeError('Cannot call a class as a function');
              })(this, o),
              (t = (function (t, n, o) {
                return (
                  (n = i(n)),
                  (function (t, n) {
                    if (n && ('object' == e(n) || 'function' == typeof n)) return n;
                    if (void 0 !== n)
                      throw new TypeError(
                        'Derived constructors may only return object or undefined'
                      );
                    return (function (e) {
                      if (void 0 === e)
                        throw new ReferenceError(
                          "this hasn't been initialised - super() hasn't been called"
                        );
                      return e;
                    })(t);
                  })(t, r() ? Reflect.construct(n, o || [], i(t).constructor) : n.apply(t, o))
                );
              })(this, o)).attachShadow({ mode: 'open' }),
              t
            );
          }
          return (
            (function (e, t) {
              if ('function' != typeof t && null !== t)
                throw new TypeError('Super expression must either be null or a function');
              (e.prototype = Object.create(t && t.prototype, {
                constructor: { value: e, writable: !0, configurable: !0 },
              })),
                Object.defineProperty(e, 'prototype', { writable: !1 }),
                t && a(e, t);
            })(o, n),
            (s = o),
            (l = [
              {
                key: 'connectedCallback',
                value: function () {
                  this.render();
                },
              },
              {
                key: 'show',
                value: function () {
                  this.classList.add('show');
                },
              },
              {
                key: 'hide',
                value: function () {
                  this.classList.remove('show');
                },
              },
              {
                key: 'render',
                value: function () {
                  this.shadowRoot.innerHTML =
                    '\n      <style>\n        :host {\n          display: flex;\n          opacity: 0;\n          pointer-events: none;\n          position: fixed;\n          top: 0;\n          left: 0;\n          width: 100vw;\n          height: 100vh;\n          background-color: rgba(0, 0, 0, 0.4);\n          z-index: 9999;\n          justify-content: center;\n          align-items: center;\n          transition: opacity 0.3s ease;\n        }\n\n        :host(.show) {\n          opacity: 1;\n          pointer-events: auto;\n        }\n\n        .loader {\n          width: 60px;\n          height: 60px;\n          border: 6px solid #e0e0e0;\n          border-top: 6px solid #1abc9c;\n          border-radius: 50%;\n          animation: spin 1s linear infinite;\n        }\n\n        .loader-text {\n          margin-top: 90px;\n          position: absolute;\n          color: white;\n          font-size: 1rem;\n          font-weight: bold;\n          font-family: sans-serif;\n        }\n\n        @keyframes spin {\n          0% { transform: rotate(0deg); }\n          100% { transform: rotate(360deg); }\n        }\n      </style>\n\n      <div class="loader"></div>\n      <div class="loader-text">Memuat...</div>\n    ';
                },
              },
            ]) && t(s.prototype, l),
            Object.defineProperty(s, 'prototype', { writable: !1 }),
            s
          );
          var s, l;
        })(o(HTMLElement));
        customElements.get('loading-indicator') || customElements.define('loading-indicator', s);
      },
      825: e => {
        'use strict';
        e.exports = function (e) {
          if ('undefined' == typeof document)
            return { update: function () {}, remove: function () {} };
          var t = e.insertStyleElement(e);
          return {
            update: function (n) {
              !(function (e, t, n) {
                var o = '';
                n.supports && (o += '@supports ('.concat(n.supports, ') {')),
                  n.media && (o += '@media '.concat(n.media, ' {'));
                var r = void 0 !== n.layer;
                r && (o += '@layer'.concat(n.layer.length > 0 ? ' '.concat(n.layer) : '', ' {')),
                  (o += n.css),
                  r && (o += '}'),
                  n.media && (o += '}'),
                  n.supports && (o += '}');
                var a = n.sourceMap;
                a &&
                  'undefined' != typeof btoa &&
                  (o += '\n/*# sourceMappingURL=data:application/json;base64,'.concat(
                    btoa(unescape(encodeURIComponent(JSON.stringify(a)))),
                    ' */'
                  )),
                  t.styleTagTransform(o, e, t.options);
              })(t, e, n);
            },
            remove: function () {
              !(function (e) {
                if (null === e.parentNode) return !1;
                e.parentNode.removeChild(e);
              })(t);
            },
          };
        };
      },
    },
    t = {};
  function n(o) {
    var r = t[o];
    if (void 0 !== r) return r.exports;
    var a = (t[o] = { id: o, exports: {} });
    return e[o].call(a.exports, a, a.exports, n), a.exports;
  }
  (n.n = e => {
    var t = e && e.__esModule ? () => e.default : () => e;
    return n.d(t, { a: t }), t;
  }),
    (n.d = (e, t) => {
      for (var o in t)
        n.o(t, o) && !n.o(e, o) && Object.defineProperty(e, o, { enumerable: !0, get: t[o] });
    }),
    (n.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t)),
    (n.nc = void 0),
    (() => {
      'use strict';
      n(39);
      var e = n(465),
        t = n.n(e);
      function o(e) {
        return (
          (o =
            'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
              ? function (e) {
                  return typeof e;
                }
              : function (e) {
                  return e &&
                    'function' == typeof Symbol &&
                    e.constructor === Symbol &&
                    e !== Symbol.prototype
                    ? 'symbol'
                    : typeof e;
                }),
          o(e)
        );
      }
      function r() {
        r = function () {
          return t;
        };
        var e,
          t = {},
          n = Object.prototype,
          a = n.hasOwnProperty,
          i =
            Object.defineProperty ||
            function (e, t, n) {
              e[t] = n.value;
            },
          s = 'function' == typeof Symbol ? Symbol : {},
          l = s.iterator || '@@iterator',
          c = s.asyncIterator || '@@asyncIterator',
          u = s.toStringTag || '@@toStringTag';
        function d(e, t, n) {
          return (
            Object.defineProperty(e, t, {
              value: n,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            }),
            e[t]
          );
        }
        try {
          d({}, '');
        } catch (e) {
          d = function (e, t, n) {
            return (e[t] = n);
          };
        }
        function p(e, t, n, o) {
          var r = t && t.prototype instanceof v ? t : v,
            a = Object.create(r.prototype),
            s = new B(o || []);
          return i(a, '_invoke', { value: j(e, n, s) }), a;
        }
        function h(e, t, n) {
          try {
            return { type: 'normal', arg: e.call(t, n) };
          } catch (e) {
            return { type: 'throw', arg: e };
          }
        }
        t.wrap = p;
        var f = 'suspendedStart',
          w = 'suspendedYield',
          m = 'executing',
          g = 'completed',
          b = {};
        function v() {}
        function y() {}
        function x() {}
        var k = {};
        d(k, l, function () {
          return this;
        });
        var E = Object.getPrototypeOf,
          C = E && E(E($([])));
        C && C !== n && a.call(C, l) && (k = C);
        var L = (x.prototype = v.prototype = Object.create(k));
        function A(e) {
          ['next', 'throw', 'return'].forEach(function (t) {
            d(e, t, function (e) {
              return this._invoke(t, e);
            });
          });
        }
        function O(e, t) {
          function n(r, i, s, l) {
            var c = h(e[r], e, i);
            if ('throw' !== c.type) {
              var u = c.arg,
                d = u.value;
              return d && 'object' == o(d) && a.call(d, '__await')
                ? t.resolve(d.__await).then(
                    function (e) {
                      n('next', e, s, l);
                    },
                    function (e) {
                      n('throw', e, s, l);
                    }
                  )
                : t.resolve(d).then(
                    function (e) {
                      (u.value = e), s(u);
                    },
                    function (e) {
                      return n('throw', e, s, l);
                    }
                  );
            }
            l(c.arg);
          }
          var r;
          i(this, '_invoke', {
            value: function (e, o) {
              function a() {
                return new t(function (t, r) {
                  n(e, o, t, r);
                });
              }
              return (r = r ? r.then(a, a) : a());
            },
          });
        }
        function j(t, n, o) {
          var r = f;
          return function (a, i) {
            if (r === m) throw Error('Generator is already running');
            if (r === g) {
              if ('throw' === a) throw i;
              return { value: e, done: !0 };
            }
            for (o.method = a, o.arg = i; ; ) {
              var s = o.delegate;
              if (s) {
                var l = P(s, o);
                if (l) {
                  if (l === b) continue;
                  return l;
                }
              }
              if ('next' === o.method) o.sent = o._sent = o.arg;
              else if ('throw' === o.method) {
                if (r === f) throw ((r = g), o.arg);
                o.dispatchException(o.arg);
              } else 'return' === o.method && o.abrupt('return', o.arg);
              r = m;
              var c = h(t, n, o);
              if ('normal' === c.type) {
                if (((r = o.done ? g : w), c.arg === b)) continue;
                return { value: c.arg, done: o.done };
              }
              'throw' === c.type && ((r = g), (o.method = 'throw'), (o.arg = c.arg));
            }
          };
        }
        function P(t, n) {
          var o = n.method,
            r = t.iterator[o];
          if (r === e)
            return (
              (n.delegate = null),
              ('throw' === o &&
                t.iterator.return &&
                ((n.method = 'return'), (n.arg = e), P(t, n), 'throw' === n.method)) ||
                ('return' !== o &&
                  ((n.method = 'throw'),
                  (n.arg = new TypeError("The iterator does not provide a '" + o + "' method")))),
              b
            );
          var a = h(r, t.iterator, n.arg);
          if ('throw' === a.type)
            return (n.method = 'throw'), (n.arg = a.arg), (n.delegate = null), b;
          var i = a.arg;
          return i
            ? i.done
              ? ((n[t.resultName] = i.value),
                (n.next = t.nextLoc),
                'return' !== n.method && ((n.method = 'next'), (n.arg = e)),
                (n.delegate = null),
                b)
              : i
            : ((n.method = 'throw'),
              (n.arg = new TypeError('iterator result is not an object')),
              (n.delegate = null),
              b);
        }
        function T(e) {
          var t = { tryLoc: e[0] };
          1 in e && (t.catchLoc = e[1]),
            2 in e && ((t.finallyLoc = e[2]), (t.afterLoc = e[3])),
            this.tryEntries.push(t);
        }
        function S(e) {
          var t = e.completion || {};
          (t.type = 'normal'), delete t.arg, (e.completion = t);
        }
        function B(e) {
          (this.tryEntries = [{ tryLoc: 'root' }]), e.forEach(T, this), this.reset(!0);
        }
        function $(t) {
          if (t || '' === t) {
            var n = t[l];
            if (n) return n.call(t);
            if ('function' == typeof t.next) return t;
            if (!isNaN(t.length)) {
              var r = -1,
                i = function n() {
                  for (; ++r < t.length; )
                    if (a.call(t, r)) return (n.value = t[r]), (n.done = !1), n;
                  return (n.value = e), (n.done = !0), n;
                };
              return (i.next = i);
            }
          }
          throw new TypeError(o(t) + ' is not iterable');
        }
        return (
          (y.prototype = x),
          i(L, 'constructor', { value: x, configurable: !0 }),
          i(x, 'constructor', { value: y, configurable: !0 }),
          (y.displayName = d(x, u, 'GeneratorFunction')),
          (t.isGeneratorFunction = function (e) {
            var t = 'function' == typeof e && e.constructor;
            return !!t && (t === y || 'GeneratorFunction' === (t.displayName || t.name));
          }),
          (t.mark = function (e) {
            return (
              Object.setPrototypeOf
                ? Object.setPrototypeOf(e, x)
                : ((e.__proto__ = x), d(e, u, 'GeneratorFunction')),
              (e.prototype = Object.create(L)),
              e
            );
          }),
          (t.awrap = function (e) {
            return { __await: e };
          }),
          A(O.prototype),
          d(O.prototype, c, function () {
            return this;
          }),
          (t.AsyncIterator = O),
          (t.async = function (e, n, o, r, a) {
            void 0 === a && (a = Promise);
            var i = new O(p(e, n, o, r), a);
            return t.isGeneratorFunction(n)
              ? i
              : i.next().then(function (e) {
                  return e.done ? e.value : i.next();
                });
          }),
          A(L),
          d(L, u, 'Generator'),
          d(L, l, function () {
            return this;
          }),
          d(L, 'toString', function () {
            return '[object Generator]';
          }),
          (t.keys = function (e) {
            var t = Object(e),
              n = [];
            for (var o in t) n.push(o);
            return (
              n.reverse(),
              function e() {
                for (; n.length; ) {
                  var o = n.pop();
                  if (o in t) return (e.value = o), (e.done = !1), e;
                }
                return (e.done = !0), e;
              }
            );
          }),
          (t.values = $),
          (B.prototype = {
            constructor: B,
            reset: function (t) {
              if (
                ((this.prev = 0),
                (this.next = 0),
                (this.sent = this._sent = e),
                (this.done = !1),
                (this.delegate = null),
                (this.method = 'next'),
                (this.arg = e),
                this.tryEntries.forEach(S),
                !t)
              )
                for (var n in this)
                  't' === n.charAt(0) && a.call(this, n) && !isNaN(+n.slice(1)) && (this[n] = e);
            },
            stop: function () {
              this.done = !0;
              var e = this.tryEntries[0].completion;
              if ('throw' === e.type) throw e.arg;
              return this.rval;
            },
            dispatchException: function (t) {
              if (this.done) throw t;
              var n = this;
              function o(o, r) {
                return (
                  (s.type = 'throw'),
                  (s.arg = t),
                  (n.next = o),
                  r && ((n.method = 'next'), (n.arg = e)),
                  !!r
                );
              }
              for (var r = this.tryEntries.length - 1; r >= 0; --r) {
                var i = this.tryEntries[r],
                  s = i.completion;
                if ('root' === i.tryLoc) return o('end');
                if (i.tryLoc <= this.prev) {
                  var l = a.call(i, 'catchLoc'),
                    c = a.call(i, 'finallyLoc');
                  if (l && c) {
                    if (this.prev < i.catchLoc) return o(i.catchLoc, !0);
                    if (this.prev < i.finallyLoc) return o(i.finallyLoc);
                  } else if (l) {
                    if (this.prev < i.catchLoc) return o(i.catchLoc, !0);
                  } else {
                    if (!c) throw Error('try statement without catch or finally');
                    if (this.prev < i.finallyLoc) return o(i.finallyLoc);
                  }
                }
              }
            },
            abrupt: function (e, t) {
              for (var n = this.tryEntries.length - 1; n >= 0; --n) {
                var o = this.tryEntries[n];
                if (o.tryLoc <= this.prev && a.call(o, 'finallyLoc') && this.prev < o.finallyLoc) {
                  var r = o;
                  break;
                }
              }
              r &&
                ('break' === e || 'continue' === e) &&
                r.tryLoc <= t &&
                t <= r.finallyLoc &&
                (r = null);
              var i = r ? r.completion : {};
              return (
                (i.type = e),
                (i.arg = t),
                r ? ((this.method = 'next'), (this.next = r.finallyLoc), b) : this.complete(i)
              );
            },
            complete: function (e, t) {
              if ('throw' === e.type) throw e.arg;
              return (
                'break' === e.type || 'continue' === e.type
                  ? (this.next = e.arg)
                  : 'return' === e.type
                    ? ((this.rval = this.arg = e.arg),
                      (this.method = 'return'),
                      (this.next = 'end'))
                    : 'normal' === e.type && t && (this.next = t),
                b
              );
            },
            finish: function (e) {
              for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                var n = this.tryEntries[t];
                if (n.finallyLoc === e) return this.complete(n.completion, n.afterLoc), S(n), b;
              }
            },
            catch: function (e) {
              for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                var n = this.tryEntries[t];
                if (n.tryLoc === e) {
                  var o = n.completion;
                  if ('throw' === o.type) {
                    var r = o.arg;
                    S(n);
                  }
                  return r;
                }
              }
              throw Error('illegal catch attempt');
            },
            delegateYield: function (t, n, o) {
              return (
                (this.delegate = { iterator: $(t), resultName: n, nextLoc: o }),
                'next' === this.method && (this.arg = e),
                b
              );
            },
          }),
          t
        );
      }
      function a(e, t, n, o, r, a, i) {
        try {
          var s = e[a](i),
            l = s.value;
        } catch (e) {
          return void n(e);
        }
        s.done ? t(l) : Promise.resolve(l).then(o, r);
      }
      function i(e, t) {
        for (var n = 0; n < t.length; n++) {
          var o = t[n];
          (o.enumerable = o.enumerable || !1),
            (o.configurable = !0),
            'value' in o && (o.writable = !0),
            Object.defineProperty(e, s(o.key), o);
        }
      }
      function s(e) {
        var t = (function (e) {
          if ('object' != o(e) || !e) return e;
          var t = e[Symbol.toPrimitive];
          if (void 0 !== t) {
            var n = t.call(e, 'string');
            if ('object' != o(n)) return n;
            throw new TypeError('@@toPrimitive must return a primitive value.');
          }
          return String(e);
        })(e);
        return 'symbol' == o(t) ? t : t + '';
      }
      function l(e) {
        var t = 'function' == typeof Map ? new Map() : void 0;
        return (
          (l = function (e) {
            if (
              null === e ||
              !(function (e) {
                try {
                  return -1 !== Function.toString.call(e).indexOf('[native code]');
                } catch (t) {
                  return 'function' == typeof e;
                }
              })(e)
            )
              return e;
            if ('function' != typeof e)
              throw new TypeError('Super expression must either be null or a function');
            if (void 0 !== t) {
              if (t.has(e)) return t.get(e);
              t.set(e, n);
            }
            function n() {
              return (function (e, t, n) {
                if (c()) return Reflect.construct.apply(null, arguments);
                var o = [null];
                o.push.apply(o, t);
                var r = new (e.bind.apply(e, o))();
                return n && u(r, n.prototype), r;
              })(e, arguments, d(this).constructor);
            }
            return (
              (n.prototype = Object.create(e.prototype, {
                constructor: { value: n, enumerable: !1, writable: !0, configurable: !0 },
              })),
              u(n, e)
            );
          }),
          l(e)
        );
      }
      function c() {
        try {
          var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
        } catch (e) {}
        return (c = function () {
          return !!e;
        })();
      }
      function u(e, t) {
        return (
          (u = Object.setPrototypeOf
            ? Object.setPrototypeOf.bind()
            : function (e, t) {
                return (e.__proto__ = t), e;
              }),
          u(e, t)
        );
      }
      function d(e) {
        return (
          (d = Object.setPrototypeOf
            ? Object.getPrototypeOf.bind()
            : function (e) {
                return e.__proto__ || Object.getPrototypeOf(e);
              }),
          d(e)
        );
      }
      var p = (function (e) {
        function n() {
          var e;
          return (
            (function (e, t) {
              if (!(e instanceof t)) throw new TypeError('Cannot call a class as a function');
            })(this, n),
            (e = (function (e, t, n) {
              return (
                (t = d(t)),
                (function (e, t) {
                  if (t && ('object' == o(t) || 'function' == typeof t)) return t;
                  if (void 0 !== t)
                    throw new TypeError('Derived constructors may only return object or undefined');
                  return (function (e) {
                    if (void 0 === e)
                      throw new ReferenceError(
                        "this hasn't been initialised - super() hasn't been called"
                      );
                    return e;
                  })(e);
                })(e, c() ? Reflect.construct(t, n || [], d(e).constructor) : t.apply(e, n))
              );
            })(this, n)).attachShadow({ mode: 'open' }),
            e
          );
        }
        return (
          (function (e, t) {
            if ('function' != typeof t && null !== t)
              throw new TypeError('Super expression must either be null or a function');
            (e.prototype = Object.create(t && t.prototype, {
              constructor: { value: e, writable: !0, configurable: !0 },
            })),
              Object.defineProperty(e, 'prototype', { writable: !1 }),
              t && u(e, t);
          })(n, e),
          (s = n),
          (l = [
            {
              key: 'connectedCallback',
              value: function () {
                this.render(), this.setupEventListeners();
              },
            },
            {
              key: 'render',
              value: function () {
                this.shadowRoot.innerHTML =
                  '\n      <style>\n        form {\n            display: flex;\n            flex-direction: column;\n            gap: 0.75rem;\n            padding: 2rem;\n            border-radius: 8px;\n            background-color: #f1f2f6;\n            box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);\n            font-family: sans-serif;\n        }\n\n        label {\n            display: flex;\n            flex-direction: column;\n            font-weight: 700;\n            color: #006A71;\n        }\n\n        input,\n        textarea {\n            margin-top: 0.25rem;\n            padding: 1rem;\n            font-size: 1rem;\n            border: 1px solid #ccc;\n            border-radius: 4px;\n            font-family: inherit;\n            resize: vertical;\n        }\n\n        input:focus, textarea:focus {\n            outline: none;\n            border-color: #006A71;\n            box-shadow: 0 0 10px rgba(0, 106, 113, 0.5);\n        }\n\n        .error-message {\n            color: red;\n            font-style: italic;\n            font-size: 0.8rem;\n            margin-top: 5px;\n            display: block;\n        }\n\n        .invalid {\n            border-color: red !important;\n            box-shadow: 0 0 5px rgba(255, 0, 0, 0.5) !important;\n        }\n\n        button {\n            display: flex;\n            margin-top: 1rem;\n            padding: 0.5rem 1.25rem;\n            align-items: center;\n            justify-content: center;\n            font-size: 1rem;\n            border: none;\n            border-radius: 4px;\n            background-color: #006A71;\n            color: #fff;\n            cursor: pointer;\n        }\n\n        button:hover {\n            background-color: rgb(5, 140, 149);\n        }\n      </style>\n\n      <form id="note-form">\n          <label>\n              Judul\n              <input type="text" id="title" placeholder="Title" required autocomplete="off" minlength="3" />\n              <span class="error-message" id="title-error"></span>\n          </label>\n\n          <label>\n              Isi\n              <textarea id="body" required minlength="5" placeholder="Write your note\'s description"></textarea>\n              <span class="error-message" id="body-error"></span>\n          </label>\n\n          <button type="submit">Tambah Catatan</button>\n      </form>\n    ';
              },
            },
            {
              key: 'setupEventListeners',
              value: function () {
                var e = this.shadowRoot.querySelector('#note-form'),
                  n = this.shadowRoot.querySelector('#title'),
                  o = this.shadowRoot.querySelector('#body'),
                  i = this.shadowRoot.querySelector('#title-error'),
                  s = this.shadowRoot.querySelector('#body-error'),
                  l = document.querySelector('loading-indicator');
                function c() {
                  return n.value.trim().length < 3
                    ? ((i.textContent = 'Judul harus minimal 3 karakter.'),
                      n.classList.add('invalid'),
                      !1)
                    : ((i.textContent = ''), n.classList.remove('invalid'), !0);
                }
                function u() {
                  return o.value.trim().length < 5
                    ? ((s.textContent = 'Isi catatan harus minimal 5 karakter.'),
                      o.classList.add('invalid'),
                      !1)
                    : ((s.textContent = ''), o.classList.remove('invalid'), !0);
                }
                n.addEventListener('input', c),
                  o.addEventListener('input', u),
                  e.addEventListener(
                    'submit',
                    (function () {
                      var i,
                        s =
                          ((i = r().mark(function a(i) {
                            var s, d, p, h, f;
                            return r().wrap(
                              function (r) {
                                for (;;)
                                  switch ((r.prev = r.next)) {
                                    case 0:
                                      if ((i.preventDefault(), (s = c()), (d = u()), !s || !d)) {
                                        r.next = 25;
                                        break;
                                      }
                                      return (
                                        (p = { title: n.value.trim(), body: o.value.trim() }),
                                        null == l || l.show(),
                                        (r.prev = 6),
                                        (r.next = 9),
                                        fetch('https://notes-api.dicoding.dev/v2/notes', {
                                          method: 'POST',
                                          headers: { 'Content-Type': 'application/json' },
                                          body: JSON.stringify(p),
                                        })
                                      );
                                    case 9:
                                      return (h = r.sent), (r.next = 12), h.json();
                                    case 12:
                                      (f = r.sent),
                                        h.ok && 'success' === f.status
                                          ? (window.dispatchEvent(
                                              new CustomEvent('note-added', { detail: f.data })
                                            ),
                                            e.reset(),
                                            t().fire({
                                              title: 'Sukses!',
                                              text: 'Catatan berhasil ditambahkan.',
                                              icon: 'success',
                                              confirmButtonText: 'OK',
                                            }))
                                          : t().fire({
                                              title: 'Gagal!',
                                              text: 'Gagal menambahkan catatan: ' + f.message,
                                              icon: 'error',
                                              confirmButtonText: 'OK',
                                            }),
                                        (r.next = 20);
                                      break;
                                    case 16:
                                      (r.prev = 16),
                                        (r.t0 = r.catch(6)),
                                        console.error('Error:', r.t0),
                                        t().fire({
                                          title: 'Terjadi Kesalahan!',
                                          text: 'Terjadi kesalahan saat mengirim data catatan.',
                                          icon: 'error',
                                          confirmButtonText: 'OK',
                                        });
                                    case 20:
                                      return (
                                        (r.prev = 20),
                                        (r.next = 23),
                                        new Promise(function (e) {
                                          return setTimeout(e, 1500);
                                        })
                                      );
                                    case 23:
                                      return null == l || l.hide(), r.finish(20);
                                    case 25:
                                    case 'end':
                                      return r.stop();
                                  }
                              },
                              a,
                              null,
                              [[6, 16, 20, 25]]
                            );
                          })),
                          function () {
                            var e = this,
                              t = arguments;
                            return new Promise(function (n, o) {
                              var r = i.apply(e, t);
                              function s(e) {
                                a(r, n, o, s, l, 'next', e);
                              }
                              function l(e) {
                                a(r, n, o, s, l, 'throw', e);
                              }
                              s(void 0);
                            });
                          });
                      return function (e) {
                        return s.apply(this, arguments);
                      };
                    })()
                  );
              },
            },
          ]),
          l && i(s.prototype, l),
          Object.defineProperty(s, 'prototype', { writable: !1 }),
          s
        );
        var s, l;
      })(l(HTMLElement));
      function h(e) {
        return (
          (h =
            'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
              ? function (e) {
                  return typeof e;
                }
              : function (e) {
                  return e &&
                    'function' == typeof Symbol &&
                    e.constructor === Symbol &&
                    e !== Symbol.prototype
                    ? 'symbol'
                    : typeof e;
                }),
          h(e)
        );
      }
      function f() {
        f = function () {
          return t;
        };
        var e,
          t = {},
          n = Object.prototype,
          o = n.hasOwnProperty,
          r =
            Object.defineProperty ||
            function (e, t, n) {
              e[t] = n.value;
            },
          a = 'function' == typeof Symbol ? Symbol : {},
          i = a.iterator || '@@iterator',
          s = a.asyncIterator || '@@asyncIterator',
          l = a.toStringTag || '@@toStringTag';
        function c(e, t, n) {
          return (
            Object.defineProperty(e, t, {
              value: n,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            }),
            e[t]
          );
        }
        try {
          c({}, '');
        } catch (e) {
          c = function (e, t, n) {
            return (e[t] = n);
          };
        }
        function u(e, t, n, o) {
          var a = t && t.prototype instanceof v ? t : v,
            i = Object.create(a.prototype),
            s = new B(o || []);
          return r(i, '_invoke', { value: j(e, n, s) }), i;
        }
        function d(e, t, n) {
          try {
            return { type: 'normal', arg: e.call(t, n) };
          } catch (e) {
            return { type: 'throw', arg: e };
          }
        }
        t.wrap = u;
        var p = 'suspendedStart',
          w = 'suspendedYield',
          m = 'executing',
          g = 'completed',
          b = {};
        function v() {}
        function y() {}
        function x() {}
        var k = {};
        c(k, i, function () {
          return this;
        });
        var E = Object.getPrototypeOf,
          C = E && E(E($([])));
        C && C !== n && o.call(C, i) && (k = C);
        var L = (x.prototype = v.prototype = Object.create(k));
        function A(e) {
          ['next', 'throw', 'return'].forEach(function (t) {
            c(e, t, function (e) {
              return this._invoke(t, e);
            });
          });
        }
        function O(e, t) {
          function n(r, a, i, s) {
            var l = d(e[r], e, a);
            if ('throw' !== l.type) {
              var c = l.arg,
                u = c.value;
              return u && 'object' == h(u) && o.call(u, '__await')
                ? t.resolve(u.__await).then(
                    function (e) {
                      n('next', e, i, s);
                    },
                    function (e) {
                      n('throw', e, i, s);
                    }
                  )
                : t.resolve(u).then(
                    function (e) {
                      (c.value = e), i(c);
                    },
                    function (e) {
                      return n('throw', e, i, s);
                    }
                  );
            }
            s(l.arg);
          }
          var a;
          r(this, '_invoke', {
            value: function (e, o) {
              function r() {
                return new t(function (t, r) {
                  n(e, o, t, r);
                });
              }
              return (a = a ? a.then(r, r) : r());
            },
          });
        }
        function j(t, n, o) {
          var r = p;
          return function (a, i) {
            if (r === m) throw Error('Generator is already running');
            if (r === g) {
              if ('throw' === a) throw i;
              return { value: e, done: !0 };
            }
            for (o.method = a, o.arg = i; ; ) {
              var s = o.delegate;
              if (s) {
                var l = P(s, o);
                if (l) {
                  if (l === b) continue;
                  return l;
                }
              }
              if ('next' === o.method) o.sent = o._sent = o.arg;
              else if ('throw' === o.method) {
                if (r === p) throw ((r = g), o.arg);
                o.dispatchException(o.arg);
              } else 'return' === o.method && o.abrupt('return', o.arg);
              r = m;
              var c = d(t, n, o);
              if ('normal' === c.type) {
                if (((r = o.done ? g : w), c.arg === b)) continue;
                return { value: c.arg, done: o.done };
              }
              'throw' === c.type && ((r = g), (o.method = 'throw'), (o.arg = c.arg));
            }
          };
        }
        function P(t, n) {
          var o = n.method,
            r = t.iterator[o];
          if (r === e)
            return (
              (n.delegate = null),
              ('throw' === o &&
                t.iterator.return &&
                ((n.method = 'return'), (n.arg = e), P(t, n), 'throw' === n.method)) ||
                ('return' !== o &&
                  ((n.method = 'throw'),
                  (n.arg = new TypeError("The iterator does not provide a '" + o + "' method")))),
              b
            );
          var a = d(r, t.iterator, n.arg);
          if ('throw' === a.type)
            return (n.method = 'throw'), (n.arg = a.arg), (n.delegate = null), b;
          var i = a.arg;
          return i
            ? i.done
              ? ((n[t.resultName] = i.value),
                (n.next = t.nextLoc),
                'return' !== n.method && ((n.method = 'next'), (n.arg = e)),
                (n.delegate = null),
                b)
              : i
            : ((n.method = 'throw'),
              (n.arg = new TypeError('iterator result is not an object')),
              (n.delegate = null),
              b);
        }
        function T(e) {
          var t = { tryLoc: e[0] };
          1 in e && (t.catchLoc = e[1]),
            2 in e && ((t.finallyLoc = e[2]), (t.afterLoc = e[3])),
            this.tryEntries.push(t);
        }
        function S(e) {
          var t = e.completion || {};
          (t.type = 'normal'), delete t.arg, (e.completion = t);
        }
        function B(e) {
          (this.tryEntries = [{ tryLoc: 'root' }]), e.forEach(T, this), this.reset(!0);
        }
        function $(t) {
          if (t || '' === t) {
            var n = t[i];
            if (n) return n.call(t);
            if ('function' == typeof t.next) return t;
            if (!isNaN(t.length)) {
              var r = -1,
                a = function n() {
                  for (; ++r < t.length; )
                    if (o.call(t, r)) return (n.value = t[r]), (n.done = !1), n;
                  return (n.value = e), (n.done = !0), n;
                };
              return (a.next = a);
            }
          }
          throw new TypeError(h(t) + ' is not iterable');
        }
        return (
          (y.prototype = x),
          r(L, 'constructor', { value: x, configurable: !0 }),
          r(x, 'constructor', { value: y, configurable: !0 }),
          (y.displayName = c(x, l, 'GeneratorFunction')),
          (t.isGeneratorFunction = function (e) {
            var t = 'function' == typeof e && e.constructor;
            return !!t && (t === y || 'GeneratorFunction' === (t.displayName || t.name));
          }),
          (t.mark = function (e) {
            return (
              Object.setPrototypeOf
                ? Object.setPrototypeOf(e, x)
                : ((e.__proto__ = x), c(e, l, 'GeneratorFunction')),
              (e.prototype = Object.create(L)),
              e
            );
          }),
          (t.awrap = function (e) {
            return { __await: e };
          }),
          A(O.prototype),
          c(O.prototype, s, function () {
            return this;
          }),
          (t.AsyncIterator = O),
          (t.async = function (e, n, o, r, a) {
            void 0 === a && (a = Promise);
            var i = new O(u(e, n, o, r), a);
            return t.isGeneratorFunction(n)
              ? i
              : i.next().then(function (e) {
                  return e.done ? e.value : i.next();
                });
          }),
          A(L),
          c(L, l, 'Generator'),
          c(L, i, function () {
            return this;
          }),
          c(L, 'toString', function () {
            return '[object Generator]';
          }),
          (t.keys = function (e) {
            var t = Object(e),
              n = [];
            for (var o in t) n.push(o);
            return (
              n.reverse(),
              function e() {
                for (; n.length; ) {
                  var o = n.pop();
                  if (o in t) return (e.value = o), (e.done = !1), e;
                }
                return (e.done = !0), e;
              }
            );
          }),
          (t.values = $),
          (B.prototype = {
            constructor: B,
            reset: function (t) {
              if (
                ((this.prev = 0),
                (this.next = 0),
                (this.sent = this._sent = e),
                (this.done = !1),
                (this.delegate = null),
                (this.method = 'next'),
                (this.arg = e),
                this.tryEntries.forEach(S),
                !t)
              )
                for (var n in this)
                  't' === n.charAt(0) && o.call(this, n) && !isNaN(+n.slice(1)) && (this[n] = e);
            },
            stop: function () {
              this.done = !0;
              var e = this.tryEntries[0].completion;
              if ('throw' === e.type) throw e.arg;
              return this.rval;
            },
            dispatchException: function (t) {
              if (this.done) throw t;
              var n = this;
              function r(o, r) {
                return (
                  (s.type = 'throw'),
                  (s.arg = t),
                  (n.next = o),
                  r && ((n.method = 'next'), (n.arg = e)),
                  !!r
                );
              }
              for (var a = this.tryEntries.length - 1; a >= 0; --a) {
                var i = this.tryEntries[a],
                  s = i.completion;
                if ('root' === i.tryLoc) return r('end');
                if (i.tryLoc <= this.prev) {
                  var l = o.call(i, 'catchLoc'),
                    c = o.call(i, 'finallyLoc');
                  if (l && c) {
                    if (this.prev < i.catchLoc) return r(i.catchLoc, !0);
                    if (this.prev < i.finallyLoc) return r(i.finallyLoc);
                  } else if (l) {
                    if (this.prev < i.catchLoc) return r(i.catchLoc, !0);
                  } else {
                    if (!c) throw Error('try statement without catch or finally');
                    if (this.prev < i.finallyLoc) return r(i.finallyLoc);
                  }
                }
              }
            },
            abrupt: function (e, t) {
              for (var n = this.tryEntries.length - 1; n >= 0; --n) {
                var r = this.tryEntries[n];
                if (r.tryLoc <= this.prev && o.call(r, 'finallyLoc') && this.prev < r.finallyLoc) {
                  var a = r;
                  break;
                }
              }
              a &&
                ('break' === e || 'continue' === e) &&
                a.tryLoc <= t &&
                t <= a.finallyLoc &&
                (a = null);
              var i = a ? a.completion : {};
              return (
                (i.type = e),
                (i.arg = t),
                a ? ((this.method = 'next'), (this.next = a.finallyLoc), b) : this.complete(i)
              );
            },
            complete: function (e, t) {
              if ('throw' === e.type) throw e.arg;
              return (
                'break' === e.type || 'continue' === e.type
                  ? (this.next = e.arg)
                  : 'return' === e.type
                    ? ((this.rval = this.arg = e.arg),
                      (this.method = 'return'),
                      (this.next = 'end'))
                    : 'normal' === e.type && t && (this.next = t),
                b
              );
            },
            finish: function (e) {
              for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                var n = this.tryEntries[t];
                if (n.finallyLoc === e) return this.complete(n.completion, n.afterLoc), S(n), b;
              }
            },
            catch: function (e) {
              for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                var n = this.tryEntries[t];
                if (n.tryLoc === e) {
                  var o = n.completion;
                  if ('throw' === o.type) {
                    var r = o.arg;
                    S(n);
                  }
                  return r;
                }
              }
              throw Error('illegal catch attempt');
            },
            delegateYield: function (t, n, o) {
              return (
                (this.delegate = { iterator: $(t), resultName: n, nextLoc: o }),
                'next' === this.method && (this.arg = e),
                b
              );
            },
          }),
          t
        );
      }
      function w(e, t, n, o, r, a, i) {
        try {
          var s = e[a](i),
            l = s.value;
        } catch (e) {
          return void n(e);
        }
        s.done ? t(l) : Promise.resolve(l).then(o, r);
      }
      function m(e) {
        return function () {
          var t = this,
            n = arguments;
          return new Promise(function (o, r) {
            var a = e.apply(t, n);
            function i(e) {
              w(a, o, r, i, s, 'next', e);
            }
            function s(e) {
              w(a, o, r, i, s, 'throw', e);
            }
            i(void 0);
          });
        };
      }
      function g(e, t) {
        for (var n = 0; n < t.length; n++) {
          var o = t[n];
          (o.enumerable = o.enumerable || !1),
            (o.configurable = !0),
            'value' in o && (o.writable = !0),
            Object.defineProperty(e, b(o.key), o);
        }
      }
      function b(e) {
        var t = (function (e) {
          if ('object' != h(e) || !e) return e;
          var t = e[Symbol.toPrimitive];
          if (void 0 !== t) {
            var n = t.call(e, 'string');
            if ('object' != h(n)) return n;
            throw new TypeError('@@toPrimitive must return a primitive value.');
          }
          return String(e);
        })(e);
        return 'symbol' == h(t) ? t : t + '';
      }
      function v(e) {
        var t = 'function' == typeof Map ? new Map() : void 0;
        return (
          (v = function (e) {
            if (
              null === e ||
              !(function (e) {
                try {
                  return -1 !== Function.toString.call(e).indexOf('[native code]');
                } catch (t) {
                  return 'function' == typeof e;
                }
              })(e)
            )
              return e;
            if ('function' != typeof e)
              throw new TypeError('Super expression must either be null or a function');
            if (void 0 !== t) {
              if (t.has(e)) return t.get(e);
              t.set(e, n);
            }
            function n() {
              return (function (e, t, n) {
                if (y()) return Reflect.construct.apply(null, arguments);
                var o = [null];
                o.push.apply(o, t);
                var r = new (e.bind.apply(e, o))();
                return n && x(r, n.prototype), r;
              })(e, arguments, k(this).constructor);
            }
            return (
              (n.prototype = Object.create(e.prototype, {
                constructor: { value: n, enumerable: !1, writable: !0, configurable: !0 },
              })),
              x(n, e)
            );
          }),
          v(e)
        );
      }
      function y() {
        try {
          var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
        } catch (e) {}
        return (y = function () {
          return !!e;
        })();
      }
      function x(e, t) {
        return (
          (x = Object.setPrototypeOf
            ? Object.setPrototypeOf.bind()
            : function (e, t) {
                return (e.__proto__ = t), e;
              }),
          x(e, t)
        );
      }
      function k(e) {
        return (
          (k = Object.setPrototypeOf
            ? Object.getPrototypeOf.bind()
            : function (e) {
                return e.__proto__ || Object.getPrototypeOf(e);
              }),
          k(e)
        );
      }
      customElements.define('notes-input', p);
      var E = (function (e) {
        function n() {
          var e;
          return (
            (function (e, t) {
              if (!(e instanceof t)) throw new TypeError('Cannot call a class as a function');
            })(this, n),
            (e = (function (e, t, n) {
              return (
                (t = k(t)),
                (function (e, t) {
                  if (t && ('object' == h(t) || 'function' == typeof t)) return t;
                  if (void 0 !== t)
                    throw new TypeError('Derived constructors may only return object or undefined');
                  return (function (e) {
                    if (void 0 === e)
                      throw new ReferenceError(
                        "this hasn't been initialised - super() hasn't been called"
                      );
                    return e;
                  })(e);
                })(e, y() ? Reflect.construct(t, n || [], k(e).constructor) : t.apply(e, n))
              );
            })(this, n)).attachShadow({ mode: 'open' }),
            (e.notes = []),
            e
          );
        }
        return (
          (function (e, t) {
            if ('function' != typeof t && null !== t)
              throw new TypeError('Super expression must either be null or a function');
            (e.prototype = Object.create(t && t.prototype, {
              constructor: { value: e, writable: !0, configurable: !0 },
            })),
              Object.defineProperty(e, 'prototype', { writable: !1 }),
              t && x(e, t);
          })(n, e),
          (o = n),
          (r = [
            {
              key: 'connectedCallback',
              value: function () {
                var e = this;
                this.loadNotesByFilter(),
                  window.addEventListener('note-added', function () {
                    return e.loadNotesByFilter();
                  }),
                  new MutationObserver(function () {
                    return e.loadNotesByFilter();
                  }).observe(this, { attributes: !0, attributeFilter: ['filter'] });
              },
            },
            {
              key: 'loadNotesByFilter',
              value:
                ((c = m(
                  f().mark(function e() {
                    var t;
                    return f().wrap(
                      function (e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              if (
                                ((t = this.getAttribute('filter')),
                                this.showLoader(!0),
                                'archived' !== t)
                              ) {
                                e.next = 7;
                                break;
                              }
                              return (e.next = 5), this.fetchNotesArchived();
                            case 5:
                              e.next = 9;
                              break;
                            case 7:
                              return (e.next = 9), this.fetchNotes();
                            case 9:
                              return (
                                (e.next = 11),
                                new Promise(function (e) {
                                  return setTimeout(e, 1e3);
                                })
                              );
                            case 11:
                              this.render(), this.showLoader(!1);
                            case 13:
                            case 'end':
                              return e.stop();
                          }
                      },
                      e,
                      this
                    );
                  })
                )),
                function () {
                  return c.apply(this, arguments);
                }),
            },
            {
              key: 'fetchNotes',
              value:
                ((l = m(
                  f().mark(function e() {
                    var t, n;
                    return f().wrap(
                      function (e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              return (
                                (e.prev = 0),
                                (e.next = 3),
                                fetch('https://notes-api.dicoding.dev/v2/notes')
                              );
                            case 3:
                              return (t = e.sent), (e.next = 6), t.json();
                            case 6:
                              'success' === (n = e.sent).status
                                ? (this.notes = n.data)
                                : (this.notes = []),
                                (e.next = 14);
                              break;
                            case 10:
                              (e.prev = 10),
                                (e.t0 = e.catch(0)),
                                (this.notes = []),
                                this.showResponseMessage('Terjadi kesalahan saat memuat catatan.');
                            case 14:
                            case 'end':
                              return e.stop();
                          }
                      },
                      e,
                      this,
                      [[0, 10]]
                    );
                  })
                )),
                function () {
                  return l.apply(this, arguments);
                }),
            },
            {
              key: 'fetchNotesArchived',
              value:
                ((s = m(
                  f().mark(function e() {
                    var t, n;
                    return f().wrap(
                      function (e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              return (
                                (e.prev = 0),
                                (e.next = 3),
                                fetch('https://notes-api.dicoding.dev/v2/notes/archived')
                              );
                            case 3:
                              return (t = e.sent), (e.next = 6), t.json();
                            case 6:
                              'success' === (n = e.sent).status
                                ? (this.notes = n.data)
                                : (this.notes = []),
                                (e.next = 14);
                              break;
                            case 10:
                              (e.prev = 10),
                                (e.t0 = e.catch(0)),
                                (this.notes = []),
                                this.showResponseMessage(
                                  'Terjadi kesalahan saat memuat catatan arsip.'
                                );
                            case 14:
                            case 'end':
                              return e.stop();
                          }
                      },
                      e,
                      this,
                      [[0, 10]]
                    );
                  })
                )),
                function () {
                  return s.apply(this, arguments);
                }),
            },
            {
              key: 'toggleArchive',
              value:
                ((i = m(
                  f().mark(function e(t) {
                    var n, o, r;
                    return f().wrap(
                      function (e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              if (
                                (n = this.notes.find(function (e) {
                                  return e.id === t;
                                }))
                              ) {
                                e.next = 3;
                                break;
                              }
                              return e.abrupt('return');
                            case 3:
                              return (
                                (o = n.archived
                                  ? 'https://notes-api.dicoding.dev/v2/notes/'.concat(
                                      t,
                                      '/unarchive'
                                    )
                                  : 'https://notes-api.dicoding.dev/v2/notes/'.concat(
                                      t,
                                      '/archive'
                                    )),
                                (e.prev = 4),
                                this.showLoader(!0),
                                (e.next = 8),
                                fetch(o, { method: 'POST' })
                              );
                            case 8:
                              return (r = e.sent), (e.next = 11), r.json();
                            case 11:
                              'success' === e.sent.status
                                ? this.loadNotesByFilter()
                                : this.showResponseMessage(
                                    'Terjadi kesalahan saat mengubah status arsip.'
                                  ),
                                (e.next = 18);
                              break;
                            case 15:
                              (e.prev = 15),
                                (e.t0 = e.catch(4)),
                                this.showResponseMessage(
                                  'Terjadi kesalahan saat mengubah status arsip.'
                                );
                            case 18:
                              return (e.prev = 18), this.showLoader(!1), e.finish(18);
                            case 21:
                            case 'end':
                              return e.stop();
                          }
                      },
                      e,
                      this,
                      [[4, 15, 18, 21]]
                    );
                  })
                )),
                function (e) {
                  return i.apply(this, arguments);
                }),
            },
            {
              key: 'deleteNote',
              value:
                ((a = m(
                  f().mark(function e(n) {
                    var o;
                    return f().wrap(
                      function (e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              return (
                                (e.next = 2),
                                t().fire({
                                  title: 'Apakah Anda yakin?',
                                  text: 'Catatan ini akan dihapus secara permanen.',
                                  icon: 'warning',
                                  showCancelButton: !0,
                                  confirmButtonText: 'Hapus',
                                  cancelButtonText: 'Batal',
                                  reverseButtons: !0,
                                })
                              );
                            case 2:
                              if (!e.sent.isConfirmed) {
                                e.next = 23;
                                break;
                              }
                              return (
                                (e.prev = 4),
                                this.showLoader(!0),
                                (e.next = 8),
                                fetch('https://notes-api.dicoding.dev/v2/notes/'.concat(n), {
                                  method: 'DELETE',
                                })
                              );
                            case 8:
                              return (o = e.sent), (e.next = 11), o.json();
                            case 11:
                              'success' === e.sent.status
                                ? (this.loadNotesByFilter(),
                                  t().fire('Dihapus!', 'Catatan telah dihapus.', 'success'))
                                : this.showResponseMessage(
                                    'Terjadi kesalahan saat menghapus catatan.'
                                  ),
                                (e.next = 18);
                              break;
                            case 15:
                              (e.prev = 15),
                                (e.t0 = e.catch(4)),
                                this.showResponseMessage(
                                  'Terjadi kesalahan saat menghapus catatan.'
                                );
                            case 18:
                              return (e.prev = 18), this.showLoader(!1), e.finish(18);
                            case 21:
                              e.next = 24;
                              break;
                            case 23:
                              t().fire('Dibatalkan', 'Penghapusan catatan dibatalkan.', 'info');
                            case 24:
                            case 'end':
                              return e.stop();
                          }
                      },
                      e,
                      this,
                      [[4, 15, 18, 21]]
                    );
                  })
                )),
                function (e) {
                  return a.apply(this, arguments);
                }),
            },
            {
              key: 'showResponseMessage',
              value: function () {
                var e =
                  arguments.length > 0 && void 0 !== arguments[0]
                    ? arguments[0]
                    : 'Periksa koneksi internet Anda.';
                t().fire({ icon: 'error', title: 'Oops...', text: e });
              },
            },
            {
              key: 'showLoader',
              value: function (e) {
                var t = document.querySelector('loading-indicator');
                t && (e ? t.show() : t.hide());
              },
            },
            {
              key: 'render',
              value: function () {
                var e = this,
                  t = this.getAttribute('filter'),
                  n = this.notes;
                if (
                  ('active' === t
                    ? (n = this.notes.filter(function (e) {
                        return !e.archived;
                      }))
                    : 'archived' === t &&
                      (n = this.notes.filter(function (e) {
                        return e.archived;
                      })),
                  n.length)
                ) {
                  var o = n
                    .map(function (e) {
                      return '\n        <div class="note-item">\n          <div class="note-title">'
                        .concat(e.title, '</div>\n          <div class="note-body">')
                        .concat(e.body, '</div>\n          <span class="note-date">')
                        .concat(
                          new Date(e.createdAt).toLocaleDateString(),
                          '</span>\n          <span class="note-status '
                        )
                        .concat(e.archived ? 'archived' : '', '">\n            ')
                        .concat(
                          e.archived ? 'Diarsipkan' : 'Aktif',
                          '\n          </span>\n          <div class="button-group">\n            <button class="edit-button" data-id="'
                        )
                        .concat(e.id, '">\n              ')
                        .concat(
                          e.archived ? 'Keluarkan dari Arsip' : 'Arsipkan',
                          '\n            </button>\n            <button class="delete-button" data-id="'
                        )
                        .concat(e.id, '">Hapus</button>\n          </div>\n        </div>\n      ');
                    })
                    .join('');
                  (this.shadowRoot.innerHTML = '\n      '
                    .concat(
                      '\n      <style>\n        .note-list {\n          display: grid;\n          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));\n          gap: 1rem;\n          padding: 1rem;\n          font-family: sans-serif;\n        }\n\n        .note-item {\n          background-color: #fff;\n          border: 1px solid #ddd;\n          border-radius: 8px;\n          padding: 1rem;\n          box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);\n          opacity: 0;\n          transform: translateY(20px);\n          animation: fadeInUp 0.5s forwards;\n        }\n\n        @keyframes fadeInUp {\n          to {\n            opacity: 1;\n            transform: translateY(0);\n          }\n        }\n\n        .note-title {\n          font-weight: bold;\n          margin-bottom: 0.5rem;\n          color: #2d3436;\n        }\n\n        .note-body {\n          font-size: 0.9rem;\n          color: #636e72;\n        }\n\n        .note-date {\n          font-size: 0.75rem;\n          color: #b2bec3;\n          margin-top: 0.5rem;\n          display: block;\n        }\n\n        .note-status {\n          font-size: 0.85rem;\n          font-weight: bold;\n          font-style: italic;\n          margin-top: 0.5rem;\n          padding: 5px 10px;\n          border-radius: 5px;\n          display: inline-block;\n          color: white;\n          background-color: #006A71;\n        }\n\n        .note-status.archived {\n          background-color: #d63031;\n        }\n\n        .button-group {\n          margin-top: 10px;\n          display: flex;\n          gap: 0.5rem;\n        }\n\n        .edit-button,\n        .delete-button {\n          padding: 5px 10px;\n          border: none;\n          border-radius: 5px;\n          cursor: pointer;\n          font-size: 0.9rem;\n        }\n\n        .edit-button {\n          background-color: #006A71;\n          color: white;\n        }\n\n        .edit-button:hover {\n          background-color: #028282;\n        }\n\n        .delete-button {\n          background-color: #d63031;\n          color: white;\n        }\n\n        .delete-button:hover {\n          background-color: #e74c3c;\n        }\n      </style>\n    ',
                      '\n      <div class="note-list">\n        '
                    )
                    .concat(o, '\n      </div>\n    ')),
                    this.shadowRoot.querySelectorAll('.edit-button').forEach(function (t) {
                      t.addEventListener('click', function (t) {
                        var n = t.target.getAttribute('data-id');
                        e.toggleArchive(n);
                      });
                    }),
                    this.shadowRoot.querySelectorAll('.delete-button').forEach(function (t) {
                      t.addEventListener('click', function (t) {
                        var n = t.target.getAttribute('data-id');
                        e.deleteNote(n);
                      });
                    });
                } else
                  this.shadowRoot.innerHTML =
                    '<p style="padding:1rem;">Tidak ada data catatan ditemukan.</p>';
              },
            },
          ]),
          r && g(o.prototype, r),
          Object.defineProperty(o, 'prototype', { writable: !1 }),
          o
        );
        var o, r, a, i, s, l, c;
      })(v(HTMLElement));
      customElements.define('notes-list', E), n(485), n(688);
      var C = n(72),
        L = n.n(C),
        A = n(825),
        O = n.n(A),
        j = n(659),
        P = n.n(j),
        T = n(56),
        S = n.n(T),
        B = n(540),
        $ = n.n(B),
        M = n(113),
        _ = n.n(M),
        z = n(106),
        H = {};
      (H.styleTagTransform = _()),
        (H.setAttributes = S()),
        (H.insert = P().bind(null, 'head')),
        (H.domAPI = O()),
        (H.insertStyleElement = $()),
        L()(z.A, H),
        z.A && z.A.locals && z.A.locals;
    })();
})();
