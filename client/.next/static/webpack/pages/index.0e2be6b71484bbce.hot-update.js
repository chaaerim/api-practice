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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Users_chaerimkim_ceos_front_study_api_practice_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"../node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var _Users_chaerimkim_ceos_front_study_api_practice_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Users_chaerimkim_ceos_front_study_api_practice_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"../node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _MsgItem__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./MsgItem */ \"./components/MsgItem.js\");\n/* harmony import */ var _MsgInput__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./MsgInput */ \"./components/MsgInput.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"../node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/router */ \"../node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _fetcher__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../fetcher */ \"./fetcher.js\");\n/* harmony import */ var _hooks_useInfiniteScroll__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../hooks/useInfiniteScroll */ \"./hooks/useInfiniteScroll.js\");\nfunction _arrayLikeToArray(arr, len) {\n    if (len == null || len > arr.length) len = arr.length;\n    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];\n    return arr2;\n}\nfunction _arrayWithoutHoles(arr) {\n    if (Array.isArray(arr)) return _arrayLikeToArray(arr);\n}\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {\n    try {\n        var info = gen[key](arg);\n        var value = info.value;\n    } catch (error) {\n        reject(error);\n        return;\n    }\n    if (info.done) {\n        resolve(value);\n    } else {\n        Promise.resolve(value).then(_next, _throw);\n    }\n}\nfunction _asyncToGenerator(fn) {\n    return function() {\n        var self = this, args = arguments;\n        return new Promise(function(resolve, reject) {\n            var gen = fn.apply(self, args);\n            function _next(value) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);\n            }\n            function _throw(err) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);\n            }\n            _next(undefined);\n        });\n    };\n}\nfunction _defineProperty(obj, key, value) {\n    if (key in obj) {\n        Object.defineProperty(obj, key, {\n            value: value,\n            enumerable: true,\n            configurable: true,\n            writable: true\n        });\n    } else {\n        obj[key] = value;\n    }\n    return obj;\n}\nfunction _iterableToArray(iter) {\n    if (typeof Symbol !== \"undefined\" && iter[Symbol.iterator] != null || iter[\"@@iterator\"] != null) return Array.from(iter);\n}\nfunction _nonIterableSpread() {\n    throw new TypeError(\"Invalid attempt to spread non-iterable instance.\\\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\");\n}\nfunction _objectSpread(target) {\n    for(var i = 1; i < arguments.length; i++){\n        var source = arguments[i] != null ? arguments[i] : {};\n        var ownKeys = Object.keys(source);\n        if (typeof Object.getOwnPropertySymbols === \"function\") {\n            ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {\n                return Object.getOwnPropertyDescriptor(source, sym).enumerable;\n            }));\n        }\n        ownKeys.forEach(function(key) {\n            _defineProperty(target, key, source[key]);\n        });\n    }\n    return target;\n}\nfunction _toConsumableArray(arr) {\n    return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();\n}\nfunction _unsupportedIterableToArray(o, minLen) {\n    if (!o) return;\n    if (typeof o === \"string\") return _arrayLikeToArray(o, minLen);\n    var n = Object.prototype.toString.call(o).slice(8, -1);\n    if (n === \"Object\" && o.constructor) n = o.constructor.name;\n    if (n === \"Map\" || n === \"Set\") return Array.from(n);\n    if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);\n}\n\nvar _this = undefined;\n\n\n\n\n\n\n\nvar _s = $RefreshSig$();\nvar MsgList = function(param) {\n    var smsgs = param.smsgs, users = param.users;\n    var _this1 = _this;\n    _s();\n    //url로 user id 넘기기\n    var query = (0,next_router__WEBPACK_IMPORTED_MODULE_5__.useRouter)().query;\n    var userId = query.userId || query.userid || \"\";\n    var ref3 = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(smsgs), msgs1 = ref3[0], setMsgs = ref3[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(null), editingId = ref1[0], setEditingId = ref1[1];\n    var fetchMoreEl = (0,react__WEBPACK_IMPORTED_MODULE_4__.useRef)(null);\n    var ref2 = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(true), hasNext = ref2[0], setHasNext = ref2[1];\n    //fetchMoreEl을 넘겨받아 무한스크롤에 대한 판단을 훅에서 하고\n    //fetchMoreEl이 화면상에 나타났을 때에는 intersection이 true 그렇지 않을 때에는 false\n    var intersecting = (0,_hooks_useInfiniteScroll__WEBPACK_IMPORTED_MODULE_7__[\"default\"])(fetchMoreEl);\n    var onCreate = function() {\n        var _ref = _asyncToGenerator(_Users_chaerimkim_ceos_front_study_api_practice_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(text) {\n            var newMsg;\n            return _Users_chaerimkim_ceos_front_study_api_practice_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        _ctx.next = 2;\n                        return (0,_fetcher__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(\"post\", \"/messages\", {\n                            text: text,\n                            userId: userId\n                        });\n                    case 2:\n                        newMsg = _ctx.sent;\n                        if (newMsg) {\n                            _ctx.next = 5;\n                            break;\n                        }\n                        return _ctx.abrupt(\"return\");\n                    case 5:\n                        setMsgs(function(msgs) {\n                            return [\n                                newMsg\n                            ].concat(_toConsumableArray(msgs));\n                        });\n                    case 6:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee);\n        }));\n        return function onCreate(text) {\n            return _ref.apply(this, arguments);\n        };\n    }();\n    var onUpdate = function() {\n        var _ref = _asyncToGenerator(_Users_chaerimkim_ceos_front_study_api_practice_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(text, id) {\n            var newMsg;\n            return _Users_chaerimkim_ceos_front_study_api_practice_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        _ctx.next = 2;\n                        return (0,_fetcher__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(\"put\", \"/messages/\".concat(id), {\n                            text: text,\n                            userId: userId\n                        });\n                    case 2:\n                        newMsg = _ctx.sent;\n                        if (newMsg) {\n                            _ctx.next = 5;\n                            break;\n                        }\n                        return _ctx.abrupt(\"return\");\n                    case 5:\n                        setMsgs(function(msgs) {\n                            var targetIndex = msgs.findIndex(function(msg) {\n                                return msg.id === id;\n                            });\n                            if (targetIndex < 0) return msgs;\n                            var newMsgs = _toConsumableArray(msgs);\n                            newMsgs.splice(targetIndex, 1, newMsg);\n                            return newMsgs;\n                        });\n                        doneEdit();\n                    case 7:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee);\n        }));\n        return function onUpdate(text, id) {\n            return _ref.apply(this, arguments);\n        };\n    }();\n    var onDelete = function() {\n        var _ref = _asyncToGenerator(_Users_chaerimkim_ceos_front_study_api_practice_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(id) {\n            var receivedId;\n            return _Users_chaerimkim_ceos_front_study_api_practice_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        _ctx.next = 2;\n                        return (0,_fetcher__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(\"delete\", \"/messages/\".concat(id), {\n                            params: {\n                                userId: userId\n                            }\n                        });\n                    case 2:\n                        receivedId = _ctx.sent;\n                        //recievedid가 json일 때 숫자로 형변환이 가능한 애들이기 때문에 발생하는 문제 typeof으로 출력해봐\n                        setMsgs(function(msgs) {\n                            var targetIndex = msgs.findIndex(function(msg) {\n                                return msg.id === receivedId + \"\";\n                            });\n                            if (targetIndex < 0) return msgs;\n                            var newMsgs = _toConsumableArray(msgs);\n                            newMsgs.splice(targetIndex, 1);\n                            return newMsgs;\n                        });\n                    case 4:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee);\n        }));\n        return function onDelete(id) {\n            return _ref.apply(this, arguments);\n        };\n    }();\n    var doneEdit = function() {\n        return setEditingId(null);\n    };\n    var getMessages = function() {\n        var _ref = _asyncToGenerator(_Users_chaerimkim_ceos_front_study_api_practice_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n            var ref, newMsgs;\n            return _Users_chaerimkim_ceos_front_study_api_practice_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        ;\n                        _ctx.next = 3;\n                        return (0,_fetcher__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(\"get\", \"/messages\", {\n                            params: {\n                                cursor: ((ref = msgs1[msgs1.length - 1]) === null || ref === void 0 ? void 0 : ref.id) || \"\"\n                            }\n                        });\n                    case 3:\n                        newMsgs = _ctx.sent;\n                        if (!(newMsgs.length === 0)) {\n                            _ctx.next = 7;\n                            break;\n                        }\n                        setHasNext(false);\n                        return _ctx.abrupt(\"return\");\n                    case 7:\n                        setMsgs(function(msgs) {\n                            return _toConsumableArray(msgs).concat(_toConsumableArray(newMsgs));\n                        });\n                    case 8:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee);\n        }));\n        return function getMessages() {\n            return _ref.apply(this, arguments);\n        };\n    }();\n    (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(function() {\n        if (intersecting && hasNext) getMessages();\n    }, [\n        intersecting\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment, {\n        children: [\n            userId && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_MsgInput__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                mutate: onCreate\n            }, void 0, false, {\n                fileName: \"/Users/chaerimkim/ceos-front-study/api-practice/client/components/MsgList.js\",\n                lineNumber: 71,\n                columnNumber: 18\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"ul\", {\n                className: \"messages\",\n                children: msgs1.map(function(msg) {\n                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_MsgItem__WEBPACK_IMPORTED_MODULE_2__[\"default\"], _objectSpread({}, msg, {\n                        onUpdate: onUpdate,\n                        onDelete: function() {\n                            return onDelete(msg.id);\n                        },\n                        startEdit: function() {\n                            return setEditingId(msg.id);\n                        },\n                        isEditing: editingId === msg.id,\n                        myId: userId,\n                        user: user.msg.userId\n                    }), msg.id, false, {\n                        fileName: \"/Users/chaerimkim/ceos-front-study/api-practice/client/components/MsgList.js\",\n                        lineNumber: 74,\n                        columnNumber: 11\n                    }, _this1);\n                })\n            }, void 0, false, {\n                fileName: \"/Users/chaerimkim/ceos-front-study/api-practice/client/components/MsgList.js\",\n                lineNumber: 72,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                ref: fetchMoreEl\n            }, void 0, false, {\n                fileName: \"/Users/chaerimkim/ceos-front-study/api-practice/client/components/MsgList.js\",\n                lineNumber: 86,\n                columnNumber: 7\n            }, _this)\n        ]\n    }, void 0, true);\n};\n_s(MsgList, \"H2JML6jA9R23o+1BorYCBPSgdvE=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_5__.useRouter,\n        _hooks_useInfiniteScroll__WEBPACK_IMPORTED_MODULE_7__[\"default\"]\n    ];\n});\n_c = MsgList;\n/* harmony default export */ __webpack_exports__[\"default\"] = (MsgList);\nvar _c;\n$RefreshReg$(_c, \"MsgList\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUU5QixXQUFXOzs7OztxQkFBSTs7b0JBQ3hCLENBQ0g7Q0FDSDtHQWpGS1YsT0FBTzs7UUFFT0gsa0RBQVM7UUFRTkUsZ0VBQWlCOzs7QUFWbENDLEtBQUFBLE9BQU87QUFtRmIsK0RBQWVBLE9BQU8sRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL01zZ0xpc3QuanM/MWFmZSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTXNnSXRlbSBmcm9tICcuL01zZ0l0ZW0nO1xuaW1wb3J0IE1zZ0lucHV0IGZyb20gJy4vTXNnSW5wdXQnO1xuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSwgdXNlUmVmIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInO1xuaW1wb3J0IGZldGNoZXIgZnJvbSAnLi4vZmV0Y2hlcic7XG5pbXBvcnQgdXNlSW5maW5pdGVTY3JvbGwgZnJvbSAnLi4vaG9va3MvdXNlSW5maW5pdGVTY3JvbGwnO1xuXG5jb25zdCBNc2dMaXN0ID0gKHsgc21zZ3MsIHVzZXJzIH0pID0+IHtcbiAgLy91cmzroZwgdXNlciBpZCDrhJjquLDquLBcbiAgY29uc3QgeyBxdWVyeSB9ID0gdXNlUm91dGVyKCk7XG4gIGNvbnN0IHVzZXJJZCA9IHF1ZXJ5LnVzZXJJZCB8fCBxdWVyeS51c2VyaWQgfHwgJyc7XG4gIGNvbnN0IFttc2dzLCBzZXRNc2dzXSA9IHVzZVN0YXRlKHNtc2dzKTtcbiAgY29uc3QgW2VkaXRpbmdJZCwgc2V0RWRpdGluZ0lkXSA9IHVzZVN0YXRlKG51bGwpO1xuICBjb25zdCBmZXRjaE1vcmVFbCA9IHVzZVJlZihudWxsKTtcbiAgY29uc3QgW2hhc05leHQsIHNldEhhc05leHRdID0gdXNlU3RhdGUodHJ1ZSk7XG4gIC8vZmV0Y2hNb3JlRWzsnYQg64SY6rKo67Cb7JWEIOustO2VnOyKpO2BrOuhpOyXkCDrjIDtlZwg7YyQ64uo7J2EIO2bheyXkOyEnCDtlZjqs6BcbiAgLy9mZXRjaE1vcmVFbOydtCDtmZTrqbTsg4Hsl5Ag64KY7YOA64Ks7J2EIOuVjOyXkOuKlCBpbnRlcnNlY3Rpb27snbQgdHJ1ZSDqt7jroIfsp4Ag7JWK7J2EIOuVjOyXkOuKlCBmYWxzZVxuICBjb25zdCBpbnRlcnNlY3RpbmcgPSB1c2VJbmZpbml0ZVNjcm9sbChmZXRjaE1vcmVFbCk7XG5cbiAgY29uc3Qgb25DcmVhdGUgPSBhc3luYyAodGV4dCkgPT4ge1xuICAgIGNvbnN0IG5ld01zZyA9IGF3YWl0IGZldGNoZXIoJ3Bvc3QnLCAnL21lc3NhZ2VzJywgeyB0ZXh0LCB1c2VySWQgfSk7XG4gICAgaWYgKCFuZXdNc2cpIHJldHVybjtcbiAgICBzZXRNc2dzKChtc2dzKSA9PiBbbmV3TXNnLCAuLi5tc2dzXSk7XG4gIH07XG5cbiAgY29uc3Qgb25VcGRhdGUgPSBhc3luYyAodGV4dCwgaWQpID0+IHtcbiAgICBjb25zdCBuZXdNc2cgPSBhd2FpdCBmZXRjaGVyKCdwdXQnLCBgL21lc3NhZ2VzLyR7aWR9YCwgeyB0ZXh0LCB1c2VySWQgfSk7XG4gICAgaWYgKCFuZXdNc2cpIHJldHVybjtcbiAgICBzZXRNc2dzKChtc2dzKSA9PiB7XG4gICAgICBjb25zdCB0YXJnZXRJbmRleCA9IG1zZ3MuZmluZEluZGV4KChtc2cpID0+IG1zZy5pZCA9PT0gaWQpO1xuICAgICAgaWYgKHRhcmdldEluZGV4IDwgMCkgcmV0dXJuIG1zZ3M7XG4gICAgICBjb25zdCBuZXdNc2dzID0gWy4uLm1zZ3NdO1xuICAgICAgbmV3TXNncy5zcGxpY2UodGFyZ2V0SW5kZXgsIDEsIG5ld01zZyk7XG4gICAgICByZXR1cm4gbmV3TXNncztcbiAgICB9KTtcbiAgICBkb25lRWRpdCgpO1xuICB9O1xuXG4gIGNvbnN0IG9uRGVsZXRlID0gYXN5bmMgKGlkKSA9PiB7XG4gICAgY29uc3QgcmVjZWl2ZWRJZCA9IGF3YWl0IGZldGNoZXIoJ2RlbGV0ZScsIGAvbWVzc2FnZXMvJHtpZH1gLCB7XG4gICAgICBwYXJhbXM6IHsgdXNlcklkIH0sXG4gICAgfSk7XG4gICAgLy9yZWNpZXZlZGlk6rCAIGpzb27snbwg65WMIOyIq+yekOuhnCDtmJXrs4DtmZjsnbQg6rCA64ql7ZWcIOyVoOuTpOydtOq4sCDrlYzrrLjsl5Ag67Cc7IOd7ZWY64qUIOusuOygnCB0eXBlb2bsnLzroZwg7Lac66Cl7ZW067SQXG4gICAgc2V0TXNncygobXNncykgPT4ge1xuICAgICAgY29uc3QgdGFyZ2V0SW5kZXggPSBtc2dzLmZpbmRJbmRleCgobXNnKSA9PiBtc2cuaWQgPT09IHJlY2VpdmVkSWQgKyAnJyk7XG4gICAgICBpZiAodGFyZ2V0SW5kZXggPCAwKSByZXR1cm4gbXNncztcbiAgICAgIGNvbnN0IG5ld01zZ3MgPSBbLi4ubXNnc107XG4gICAgICBuZXdNc2dzLnNwbGljZSh0YXJnZXRJbmRleCwgMSk7XG4gICAgICByZXR1cm4gbmV3TXNncztcbiAgICB9KTtcbiAgfTtcblxuICBjb25zdCBkb25lRWRpdCA9ICgpID0+IHNldEVkaXRpbmdJZChudWxsKTtcblxuICBjb25zdCBnZXRNZXNzYWdlcyA9IGFzeW5jICgpID0+IHtcbiAgICBjb25zdCBuZXdNc2dzID0gYXdhaXQgZmV0Y2hlcignZ2V0JywgJy9tZXNzYWdlcycsIHtcbiAgICAgIHBhcmFtczogeyBjdXJzb3I6IG1zZ3NbbXNncy5sZW5ndGggLSAxXT8uaWQgfHwgJycgfSxcbiAgICB9KTtcbiAgICBpZiAobmV3TXNncy5sZW5ndGggPT09IDApIHtcbiAgICAgIHNldEhhc05leHQoZmFsc2UpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBzZXRNc2dzKChtc2dzKSA9PiBbLi4ubXNncywgLi4ubmV3TXNnc10pO1xuICB9O1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKGludGVyc2VjdGluZyAmJiBoYXNOZXh0KSBnZXRNZXNzYWdlcygpO1xuICB9LCBbaW50ZXJzZWN0aW5nXSk7XG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIHt1c2VySWQgJiYgPE1zZ0lucHV0IG11dGF0ZT17b25DcmVhdGV9IC8+fVxuICAgICAgPHVsIGNsYXNzTmFtZT1cIm1lc3NhZ2VzXCI+XG4gICAgICAgIHttc2dzLm1hcCgobXNnKSA9PiAoXG4gICAgICAgICAgPE1zZ0l0ZW1cbiAgICAgICAgICAgIGtleT17bXNnLmlkfVxuICAgICAgICAgICAgey4uLm1zZ31cbiAgICAgICAgICAgIG9uVXBkYXRlPXtvblVwZGF0ZX1cbiAgICAgICAgICAgIG9uRGVsZXRlPXsoKSA9PiBvbkRlbGV0ZShtc2cuaWQpfVxuICAgICAgICAgICAgc3RhcnRFZGl0PXsoKSA9PiBzZXRFZGl0aW5nSWQobXNnLmlkKX1cbiAgICAgICAgICAgIGlzRWRpdGluZz17ZWRpdGluZ0lkID09PSBtc2cuaWR9XG4gICAgICAgICAgICBteUlkPXt1c2VySWR9XG4gICAgICAgICAgICB1c2VyPXt1c2VyLm1zZy51c2VySWR9XG4gICAgICAgICAgLz5cbiAgICAgICAgKSl9XG4gICAgICA8L3VsPlxuICAgICAgPGRpdiByZWY9e2ZldGNoTW9yZUVsfSAvPlxuICAgIDwvPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgTXNnTGlzdDtcbiJdLCJuYW1lcyI6WyJNc2dJdGVtIiwiTXNnSW5wdXQiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsInVzZVJlZiIsInVzZVJvdXRlciIsImZldGNoZXIiLCJ1c2VJbmZpbml0ZVNjcm9sbCIsIk1zZ0xpc3QiLCJzbXNncyIsInVzZXJzIiwicXVlcnkiLCJ1c2VySWQiLCJ1c2VyaWQiLCJtc2dzIiwic2V0TXNncyIsImVkaXRpbmdJZCIsInNldEVkaXRpbmdJZCIsImZldGNoTW9yZUVsIiwiaGFzTmV4dCIsInNldEhhc05leHQiLCJpbnRlcnNlY3RpbmciLCJvbkNyZWF0ZSIsInRleHQiLCJuZXdNc2ciLCJvblVwZGF0ZSIsImlkIiwidGFyZ2V0SW5kZXgiLCJmaW5kSW5kZXgiLCJtc2ciLCJuZXdNc2dzIiwic3BsaWNlIiwiZG9uZUVkaXQiLCJvbkRlbGV0ZSIsInJlY2VpdmVkSWQiLCJwYXJhbXMiLCJnZXRNZXNzYWdlcyIsImN1cnNvciIsImxlbmd0aCIsIm11dGF0ZSIsInVsIiwiY2xhc3NOYW1lIiwibWFwIiwic3RhcnRFZGl0IiwiaXNFZGl0aW5nIiwibXlJZCIsInVzZXIiLCJkaXYiLCJyZWYiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/MsgList.js\n");

/***/ })

});