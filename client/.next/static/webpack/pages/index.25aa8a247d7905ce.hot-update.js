"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/MsgList.js":
/*!*******************************!*\
  !*** ./components/MsgList.js ***!
  \*******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Users_chaerimkim_ceos_front_study_api_practice_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"../node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var _Users_chaerimkim_ceos_front_study_api_practice_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Users_chaerimkim_ceos_front_study_api_practice_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"../node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _MsgItem__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./MsgItem */ \"./components/MsgItem.js\");\n/* harmony import */ var _MsgInput__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./MsgInput */ \"./components/MsgInput.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"../node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/router */ \"../node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _fetcher__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../fetcher */ \"./fetcher.js\");\nfunction _arrayLikeToArray(arr, len) {\n    if (len == null || len > arr.length) len = arr.length;\n    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];\n    return arr2;\n}\nfunction _arrayWithoutHoles(arr) {\n    if (Array.isArray(arr)) return _arrayLikeToArray(arr);\n}\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {\n    try {\n        var info = gen[key](arg);\n        var value = info.value;\n    } catch (error) {\n        reject(error);\n        return;\n    }\n    if (info.done) {\n        resolve(value);\n    } else {\n        Promise.resolve(value).then(_next, _throw);\n    }\n}\nfunction _asyncToGenerator(fn) {\n    return function() {\n        var self = this, args = arguments;\n        return new Promise(function(resolve, reject) {\n            var gen = fn.apply(self, args);\n            function _next(value) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);\n            }\n            function _throw(err) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);\n            }\n            _next(undefined);\n        });\n    };\n}\nfunction _defineProperty(obj, key, value) {\n    if (key in obj) {\n        Object.defineProperty(obj, key, {\n            value: value,\n            enumerable: true,\n            configurable: true,\n            writable: true\n        });\n    } else {\n        obj[key] = value;\n    }\n    return obj;\n}\nfunction _iterableToArray(iter) {\n    if (typeof Symbol !== \"undefined\" && iter[Symbol.iterator] != null || iter[\"@@iterator\"] != null) return Array.from(iter);\n}\nfunction _nonIterableSpread() {\n    throw new TypeError(\"Invalid attempt to spread non-iterable instance.\\\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\");\n}\nfunction _objectSpread(target) {\n    for(var i = 1; i < arguments.length; i++){\n        var source = arguments[i] != null ? arguments[i] : {};\n        var ownKeys = Object.keys(source);\n        if (typeof Object.getOwnPropertySymbols === \"function\") {\n            ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {\n                return Object.getOwnPropertyDescriptor(source, sym).enumerable;\n            }));\n        }\n        ownKeys.forEach(function(key) {\n            _defineProperty(target, key, source[key]);\n        });\n    }\n    return target;\n}\nfunction _toConsumableArray(arr) {\n    return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();\n}\nfunction _unsupportedIterableToArray(o, minLen) {\n    if (!o) return;\n    if (typeof o === \"string\") return _arrayLikeToArray(o, minLen);\n    var n = Object.prototype.toString.call(o).slice(8, -1);\n    if (n === \"Object\" && o.constructor) n = o.constructor.name;\n    if (n === \"Map\" || n === \"Set\") return Array.from(n);\n    if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);\n}\n\nvar _this = undefined;\n\n\n\n\n\n\nvar _s = $RefreshSig$();\nvar UserIds = [\n    \"spiderman\",\n    \"MJ\"\n];\nvar getRandomUserId = function() {\n    return UserIds[Math.round(Math.random())];\n};\n// const msgs = [\n//   { id: 1, userId: getRandomUserId(), timestamp: 1234567890123, text: '' },\n// ];\nvar MsgList = function() {\n    var _this1 = _this;\n    _s();\n    //url로 user id 넘기기\n    var ref = (0,next_router__WEBPACK_IMPORTED_MODULE_5__.useRouter)(), _query = ref.query, _userId = _query.userId, userId = _userId === void 0 ? \"\" : _userId;\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)([]), msgs1 = ref1[0], setMsgs = ref1[1];\n    var ref2 = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(null), editingId = ref2[0], setEditingId = ref2[1];\n    var onCreate = function() {\n        var _ref = _asyncToGenerator(_Users_chaerimkim_ceos_front_study_api_practice_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(text) {\n            var newMsg;\n            return _Users_chaerimkim_ceos_front_study_api_practice_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        _ctx.next = 2;\n                        return \"post\", {\n                            text: text,\n                            userId: userId\n                        };\n                    case 2:\n                        newMsg = _ctx.sent;\n                        setMsgs(function(msgs) {\n                            return [\n                                newMsg\n                            ].concat(_toConsumableArray(msgs));\n                        });\n                    case 4:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee);\n        }));\n        return function onCreate(text) {\n            return _ref.apply(this, arguments);\n        };\n    }();\n    var onUpdate = function() {\n        var _ref = _asyncToGenerator(_Users_chaerimkim_ceos_front_study_api_practice_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(text, id) {\n            var newMsg;\n            return _Users_chaerimkim_ceos_front_study_api_practice_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        _ctx.next = 2;\n                        return (0,_fetcher__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(\"put\", \"/messages/\".concat(id), {\n                            text: text,\n                            userId: userId\n                        });\n                    case 2:\n                        newMsg = _ctx.sent;\n                        setMsgs(function(msgs) {\n                            var targetIndex = msgs.findIndex(function(msg) {\n                                return msg.id === id;\n                            });\n                            if (targetIndex < 0) return msgs;\n                            var newMsgs = _toConsumableArray(msgs);\n                            newMsgs.splice(targetIndex, 1, _objectSpread({}, msgs[targetIndex], {\n                                text: text\n                            }));\n                            return newMsgs;\n                        });\n                        doneEdit();\n                    case 5:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee);\n        }));\n        return function onUpdate(text, id) {\n            return _ref.apply(this, arguments);\n        };\n    }();\n    var onDelete = function(id) {\n        setMsgs(function(msgs) {\n            var targetIndex = msgs.findIndex(function(msg) {\n                return msg.id === id;\n            });\n            if (targetIndex < 0) return msgs;\n            var newMsgs = _toConsumableArray(msgs);\n            newMsgs.splice(targetIndex, 1);\n            return newMsgs;\n        });\n    };\n    var doneEdit = function() {\n        return setEditingId(null);\n    };\n    var getMessages = function() {\n        var _ref = _asyncToGenerator(_Users_chaerimkim_ceos_front_study_api_practice_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n            var msgs;\n            return _Users_chaerimkim_ceos_front_study_api_practice_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        _ctx.next = 2;\n                        return (0,_fetcher__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(\"get\", \"/messages\");\n                    case 2:\n                        msgs = _ctx.sent;\n                        setMsgs(msgs);\n                    case 4:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee);\n        }));\n        return function getMessages() {\n            return _ref.apply(this, arguments);\n        };\n    }();\n    (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(function() {\n        getMessages();\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_MsgInput__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                mutate: onCreate\n            }, void 0, false, {\n                fileName: \"/Users/chaerimkim/ceos-front-study/api-practice/client/components/MsgList.js\",\n                lineNumber: 65,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"ul\", {\n                className: \"messages\",\n                children: msgs1.map(function(msg) {\n                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_MsgItem__WEBPACK_IMPORTED_MODULE_2__[\"default\"], _objectSpread({}, msg, {\n                        onUpdate: onUpdate,\n                        onDelete: function() {\n                            return onDelete(msg.id);\n                        },\n                        startEdit: function() {\n                            return setEditingId(msg.id);\n                        },\n                        isEditing: editingId === msg.id,\n                        myId: userId\n                    }), msg.id, false, {\n                        fileName: \"/Users/chaerimkim/ceos-front-study/api-practice/client/components/MsgList.js\",\n                        lineNumber: 68,\n                        columnNumber: 11\n                    }, _this1);\n                })\n            }, void 0, false, {\n                fileName: \"/Users/chaerimkim/ceos-front-study/api-practice/client/components/MsgList.js\",\n                lineNumber: 66,\n                columnNumber: 7\n            }, _this)\n        ]\n    }, void 0, true);\n};\n_s(MsgList, \"lTDkKXPEKu3XW9sdtPITexBYSLU=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_5__.useRouter\n    ];\n});\n_c = MsgList;\n/* harmony default export */ __webpack_exports__[\"default\"] = (MsgList);\nvar _c;\n$RefreshReg$(_c, \"MsgList\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LEVBQUV4QixNQUFNO3dCQU5QWSxHQUFHLENBQUNILEVBQUU7Ozs7OEJBT1g7aUJBQ0gsQ0FBQzs7Ozs7cUJBQ0M7O29CQUNKLENBQ0g7Q0FDSDtHQW5FS1gsT0FBTzs7UUFLUFAsa0RBQVM7OztBQUxUTyxLQUFBQSxPQUFPO0FBcUViLCtEQUFlQSxPQUFPLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Nc2dMaXN0LmpzPzFhZmUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IE1zZ0l0ZW0gZnJvbSAnLi9Nc2dJdGVtJztcbmltcG9ydCBNc2dJbnB1dCBmcm9tICcuL01zZ0lucHV0JztcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcic7XG5pbXBvcnQgZmV0Y2hlciBmcm9tICcuLi9mZXRjaGVyJztcblxuY29uc3QgVXNlcklkcyA9IFsnc3BpZGVybWFuJywgJ01KJ107XG5jb25zdCBnZXRSYW5kb21Vc2VySWQgPSAoKSA9PiBVc2VySWRzW01hdGgucm91bmQoTWF0aC5yYW5kb20oKSldO1xuXG4vLyBjb25zdCBtc2dzID0gW1xuLy8gICB7IGlkOiAxLCB1c2VySWQ6IGdldFJhbmRvbVVzZXJJZCgpLCB0aW1lc3RhbXA6IDEyMzQ1Njc4OTAxMjMsIHRleHQ6ICcnIH0sXG4vLyBdO1xuXG5jb25zdCBNc2dMaXN0ID0gKCkgPT4ge1xuICAvL3VybOuhnCB1c2VyIGlkIOuEmOq4sOq4sFxuXG4gIGNvbnN0IHtcbiAgICBxdWVyeTogeyB1c2VySWQgPSAnJyB9LFxuICB9ID0gdXNlUm91dGVyKCk7XG4gIGNvbnN0IFttc2dzLCBzZXRNc2dzXSA9IHVzZVN0YXRlKFtdKTtcbiAgY29uc3QgW2VkaXRpbmdJZCwgc2V0RWRpdGluZ0lkXSA9IHVzZVN0YXRlKG51bGwpO1xuICBjb25zdCBvbkNyZWF0ZSA9IGFzeW5jICh0ZXh0KSA9PiB7XG4gICAgY29uc3QgbmV3TXNnID0gYXdhaXQgKCdwb3N0JywgJy9tZXNzYWdlcycsIHsgdGV4dCwgdXNlcklkIH0pO1xuICAgIHNldE1zZ3MoKG1zZ3MpID0+IFtuZXdNc2csIC4uLm1zZ3NdKTtcbiAgfTtcblxuICBjb25zdCBvblVwZGF0ZSA9IGFzeW5jICh0ZXh0LCBpZCkgPT4ge1xuICAgIGNvbnN0IG5ld01zZyA9IGF3YWl0IGZldGNoZXIoJ3B1dCcsIGAvbWVzc2FnZXMvJHtpZH1gLCB7IHRleHQsIHVzZXJJZCB9KTtcbiAgICBzZXRNc2dzKChtc2dzKSA9PiB7XG4gICAgICBjb25zdCB0YXJnZXRJbmRleCA9IG1zZ3MuZmluZEluZGV4KChtc2cpID0+IG1zZy5pZCA9PT0gaWQpO1xuICAgICAgaWYgKHRhcmdldEluZGV4IDwgMCkgcmV0dXJuIG1zZ3M7XG4gICAgICBjb25zdCBuZXdNc2dzID0gWy4uLm1zZ3NdO1xuICAgICAgbmV3TXNncy5zcGxpY2UodGFyZ2V0SW5kZXgsIDEsIHtcbiAgICAgICAgLi4ubXNnc1t0YXJnZXRJbmRleF0sXG4gICAgICAgIHRleHQsXG4gICAgICB9KTtcbiAgICAgIHJldHVybiBuZXdNc2dzO1xuICAgIH0pO1xuICAgIGRvbmVFZGl0KCk7XG4gIH07XG5cbiAgY29uc3Qgb25EZWxldGUgPSAoaWQpID0+IHtcbiAgICBzZXRNc2dzKChtc2dzKSA9PiB7XG4gICAgICBjb25zdCB0YXJnZXRJbmRleCA9IG1zZ3MuZmluZEluZGV4KChtc2cpID0+IG1zZy5pZCA9PT0gaWQpO1xuICAgICAgaWYgKHRhcmdldEluZGV4IDwgMCkgcmV0dXJuIG1zZ3M7XG4gICAgICBjb25zdCBuZXdNc2dzID0gWy4uLm1zZ3NdO1xuICAgICAgbmV3TXNncy5zcGxpY2UodGFyZ2V0SW5kZXgsIDEpO1xuICAgICAgcmV0dXJuIG5ld01zZ3M7XG4gICAgfSk7XG4gIH07XG5cbiAgY29uc3QgZG9uZUVkaXQgPSAoKSA9PiBzZXRFZGl0aW5nSWQobnVsbCk7XG5cbiAgY29uc3QgZ2V0TWVzc2FnZXMgPSBhc3luYyAoKSA9PiB7XG4gICAgY29uc3QgbXNncyA9IGF3YWl0IGZldGNoZXIoJ2dldCcsICcvbWVzc2FnZXMnKTtcbiAgICBzZXRNc2dzKG1zZ3MpO1xuICB9O1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgZ2V0TWVzc2FnZXMoKTtcbiAgfSwgW10pO1xuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxNc2dJbnB1dCBtdXRhdGU9e29uQ3JlYXRlfSAvPlxuICAgICAgPHVsIGNsYXNzTmFtZT1cIm1lc3NhZ2VzXCI+XG4gICAgICAgIHttc2dzLm1hcCgobXNnKSA9PiAoXG4gICAgICAgICAgPE1zZ0l0ZW1cbiAgICAgICAgICAgIGtleT17bXNnLmlkfVxuICAgICAgICAgICAgey4uLm1zZ31cbiAgICAgICAgICAgIG9uVXBkYXRlPXtvblVwZGF0ZX1cbiAgICAgICAgICAgIG9uRGVsZXRlPXsoKSA9PiBvbkRlbGV0ZShtc2cuaWQpfVxuICAgICAgICAgICAgc3RhcnRFZGl0PXsoKSA9PiBzZXRFZGl0aW5nSWQobXNnLmlkKX1cbiAgICAgICAgICAgIGlzRWRpdGluZz17ZWRpdGluZ0lkID09PSBtc2cuaWR9XG4gICAgICAgICAgICBteUlkPXt1c2VySWR9XG4gICAgICAgICAgLz5cbiAgICAgICAgKSl9XG4gICAgICA8L3VsPlxuICAgIDwvPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgTXNnTGlzdDtcbiJdLCJuYW1lcyI6WyJNc2dJdGVtIiwiTXNnSW5wdXQiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsInVzZVJvdXRlciIsImZldGNoZXIiLCJVc2VySWRzIiwiZ2V0UmFuZG9tVXNlcklkIiwiTWF0aCIsInJvdW5kIiwicmFuZG9tIiwiTXNnTGlzdCIsInF1ZXJ5IiwidXNlcklkIiwibXNncyIsInNldE1zZ3MiLCJlZGl0aW5nSWQiLCJzZXRFZGl0aW5nSWQiLCJvbkNyZWF0ZSIsInRleHQiLCJuZXdNc2ciLCJvblVwZGF0ZSIsImlkIiwidGFyZ2V0SW5kZXgiLCJmaW5kSW5kZXgiLCJtc2ciLCJuZXdNc2dzIiwic3BsaWNlIiwiZG9uZUVkaXQiLCJvbkRlbGV0ZSIsImdldE1lc3NhZ2VzIiwibXV0YXRlIiwidWwiLCJjbGFzc05hbWUiLCJtYXAiLCJzdGFydEVkaXQiLCJpc0VkaXRpbmciLCJteUlkIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/MsgList.js\n");

/***/ })

});