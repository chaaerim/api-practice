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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Users_chaerimkim_ceos_front_study_api_practice_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"../node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var _Users_chaerimkim_ceos_front_study_api_practice_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Users_chaerimkim_ceos_front_study_api_practice_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"../node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _MsgItem__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./MsgItem */ \"./components/MsgItem.js\");\n/* harmony import */ var _MsgInput__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./MsgInput */ \"./components/MsgInput.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"../node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/router */ \"../node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _fetcher__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../fetcher */ \"./fetcher.js\");\n/* harmony import */ var _hooks_useInfiniteScroll__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../hooks/useInfiniteScroll */ \"./hooks/useInfiniteScroll.js\");\nfunction _arrayLikeToArray(arr, len) {\n    if (len == null || len > arr.length) len = arr.length;\n    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];\n    return arr2;\n}\nfunction _arrayWithoutHoles(arr) {\n    if (Array.isArray(arr)) return _arrayLikeToArray(arr);\n}\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {\n    try {\n        var info = gen[key](arg);\n        var value = info.value;\n    } catch (error) {\n        reject(error);\n        return;\n    }\n    if (info.done) {\n        resolve(value);\n    } else {\n        Promise.resolve(value).then(_next, _throw);\n    }\n}\nfunction _asyncToGenerator(fn) {\n    return function() {\n        var self = this, args = arguments;\n        return new Promise(function(resolve, reject) {\n            var gen = fn.apply(self, args);\n            function _next(value) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);\n            }\n            function _throw(err) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);\n            }\n            _next(undefined);\n        });\n    };\n}\nfunction _defineProperty(obj, key, value) {\n    if (key in obj) {\n        Object.defineProperty(obj, key, {\n            value: value,\n            enumerable: true,\n            configurable: true,\n            writable: true\n        });\n    } else {\n        obj[key] = value;\n    }\n    return obj;\n}\nfunction _iterableToArray(iter) {\n    if (typeof Symbol !== \"undefined\" && iter[Symbol.iterator] != null || iter[\"@@iterator\"] != null) return Array.from(iter);\n}\nfunction _nonIterableSpread() {\n    throw new TypeError(\"Invalid attempt to spread non-iterable instance.\\\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\");\n}\nfunction _objectSpread(target) {\n    for(var i = 1; i < arguments.length; i++){\n        var source = arguments[i] != null ? arguments[i] : {};\n        var ownKeys = Object.keys(source);\n        if (typeof Object.getOwnPropertySymbols === \"function\") {\n            ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {\n                return Object.getOwnPropertyDescriptor(source, sym).enumerable;\n            }));\n        }\n        ownKeys.forEach(function(key) {\n            _defineProperty(target, key, source[key]);\n        });\n    }\n    return target;\n}\nfunction _toConsumableArray(arr) {\n    return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();\n}\nfunction _unsupportedIterableToArray(o, minLen) {\n    if (!o) return;\n    if (typeof o === \"string\") return _arrayLikeToArray(o, minLen);\n    var n = Object.prototype.toString.call(o).slice(8, -1);\n    if (n === \"Object\" && o.constructor) n = o.constructor.name;\n    if (n === \"Map\" || n === \"Set\") return Array.from(n);\n    if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);\n}\n\nvar _this = undefined;\n\n\n\n\n\n\n\nvar _s = $RefreshSig$();\nvar MsgList = function() {\n    var _this1 = _this;\n    _s();\n    //url로 user id 넘기기\n    var query = (0,next_router__WEBPACK_IMPORTED_MODULE_5__.useRouter)().query;\n    var userId = query.userId || query.userid || \"\";\n    var ref2 = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)([]), msgs1 = ref2[0], setMsgs = ref2[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(null), editingId = ref1[0], setEditingId = ref1[1];\n    var fetchMoreEl = (0,react__WEBPACK_IMPORTED_MODULE_4__.useRef)(null);\n    //fetchMoreEl을 넘겨받아 무한스크롤에 대한 판단을 훅에서 하고\n    //fetchMoreEl이 화면상에 나타났을 때에는 intersection이 true 그렇지 않을 때에는 false\n    var intersecting = (0,_hooks_useInfiniteScroll__WEBPACK_IMPORTED_MODULE_7__[\"default\"])(fetchMoreEl);\n    var onCreate = function() {\n        var _ref = _asyncToGenerator(_Users_chaerimkim_ceos_front_study_api_practice_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(text) {\n            var newMsg;\n            return _Users_chaerimkim_ceos_front_study_api_practice_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        _ctx.next = 2;\n                        return (0,_fetcher__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(\"post\", \"/messages\", {\n                            text: text,\n                            userId: userId\n                        });\n                    case 2:\n                        newMsg = _ctx.sent;\n                        if (newMsg) {\n                            _ctx.next = 5;\n                            break;\n                        }\n                        return _ctx.abrupt(\"return\");\n                    case 5:\n                        setMsgs(function(msgs) {\n                            return [\n                                newMsg\n                            ].concat(_toConsumableArray(msgs));\n                        });\n                    case 6:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee);\n        }));\n        return function onCreate(text) {\n            return _ref.apply(this, arguments);\n        };\n    }();\n    var onUpdate = function() {\n        var _ref = _asyncToGenerator(_Users_chaerimkim_ceos_front_study_api_practice_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(text, id) {\n            var newMsg;\n            return _Users_chaerimkim_ceos_front_study_api_practice_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        _ctx.next = 2;\n                        return (0,_fetcher__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(\"put\", \"/messages/\".concat(id), {\n                            text: text,\n                            userId: userId\n                        });\n                    case 2:\n                        newMsg = _ctx.sent;\n                        if (newMsg) {\n                            _ctx.next = 5;\n                            break;\n                        }\n                        return _ctx.abrupt(\"return\");\n                    case 5:\n                        setMsgs(function(msgs) {\n                            var targetIndex = msgs.findIndex(function(msg) {\n                                return msg.id === id;\n                            });\n                            if (targetIndex < 0) return msgs;\n                            var newMsgs = _toConsumableArray(msgs);\n                            newMsgs.splice(targetIndex, 1, newMsg);\n                            return newMsgs;\n                        });\n                        doneEdit();\n                    case 7:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee);\n        }));\n        return function onUpdate(text, id) {\n            return _ref.apply(this, arguments);\n        };\n    }();\n    var onDelete = function() {\n        var _ref = _asyncToGenerator(_Users_chaerimkim_ceos_front_study_api_practice_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(id) {\n            var receivedId;\n            return _Users_chaerimkim_ceos_front_study_api_practice_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        _ctx.next = 2;\n                        return (0,_fetcher__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(\"delete\", \"/messages/\".concat(id), {\n                            params: {\n                                userId: userId\n                            }\n                        });\n                    case 2:\n                        receivedId = _ctx.sent;\n                        //recievedid가 json일 때 숫자로 형변환이 가능한 애들이기 때문에 발생하는 문제 typeof으로 출력해봐\n                        setMsgs(function(msgs) {\n                            var targetIndex = msgs.findIndex(function(msg) {\n                                return msg.id === receivedId + \"\";\n                            });\n                            if (targetIndex < 0) return msgs;\n                            var newMsgs = _toConsumableArray(msgs);\n                            newMsgs.splice(targetIndex, 1);\n                            return newMsgs;\n                        });\n                    case 4:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee);\n        }));\n        return function onDelete(id) {\n            return _ref.apply(this, arguments);\n        };\n    }();\n    var doneEdit = function() {\n        return setEditingId(null);\n    };\n    var getMessages = function() {\n        var _ref = _asyncToGenerator(_Users_chaerimkim_ceos_front_study_api_practice_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n            var ref, newMsgs;\n            return _Users_chaerimkim_ceos_front_study_api_practice_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        ;\n                        _ctx.next = 3;\n                        return (0,_fetcher__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(\"get\", \"/messages\", {\n                            params: {\n                                cursor: ((ref = msgs1[msgs1.length - 1]) === null || ref === void 0 ? void 0 : ref.id) || \"\"\n                            }\n                        });\n                    case 3:\n                        newMsgs = _ctx.sent;\n                        if (!(newMsgs.length === 0)) {\n                            _ctx.next = 7;\n                            break;\n                        }\n                        setHashNext(false);\n                        return _ctx.abrupt(\"return\");\n                    case 7:\n                        setMsgs(function(msgs) {\n                            return _toConsumableArray(msgs).concat(_toConsumableArray(newMsgs));\n                        });\n                    case 8:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee);\n        }));\n        return function getMessages() {\n            return _ref.apply(this, arguments);\n        };\n    }();\n    (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(function() {\n        if (intersecting) getMessages();\n    }, [\n        intersecting\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment, {\n        children: [\n            userId && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_MsgInput__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                mutate: onCreate\n            }, void 0, false, {\n                fileName: \"/Users/chaerimkim/ceos-front-study/api-practice/client/components/MsgList.js\",\n                lineNumber: 70,\n                columnNumber: 18\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"ul\", {\n                className: \"messages\",\n                children: msgs1.map(function(msg) {\n                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_MsgItem__WEBPACK_IMPORTED_MODULE_2__[\"default\"], _objectSpread({}, msg, {\n                        onUpdate: onUpdate,\n                        onDelete: function() {\n                            return onDelete(msg.id);\n                        },\n                        startEdit: function() {\n                            return setEditingId(msg.id);\n                        },\n                        isEditing: editingId === msg.id,\n                        myId: userId\n                    }), msg.id, false, {\n                        fileName: \"/Users/chaerimkim/ceos-front-study/api-practice/client/components/MsgList.js\",\n                        lineNumber: 73,\n                        columnNumber: 11\n                    }, _this1);\n                })\n            }, void 0, false, {\n                fileName: \"/Users/chaerimkim/ceos-front-study/api-practice/client/components/MsgList.js\",\n                lineNumber: 71,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                ref: fetchMoreEl\n            }, void 0, false, {\n                fileName: \"/Users/chaerimkim/ceos-front-study/api-practice/client/components/MsgList.js\",\n                lineNumber: 84,\n                columnNumber: 7\n            }, _this)\n        ]\n    }, void 0, true);\n};\n_s(MsgList, \"3miHWWi8Pf4xDqVW6vpAX3uvu7k=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_5__.useRouter,\n        _hooks_useInfiniteScroll__WEBPACK_IMPORTED_MODULE_7__[\"default\"]\n    ];\n});\n_c = MsgList;\n/* harmony default export */ __webpack_exports__[\"default\"] = (MsgList);\nvar _c;\n$RefreshReg$(_c, \"MsgList\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL01zZ0xpc3QuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQWdDO0FBQ0U7QUFDa0I7QUFDWjtBQUNQO0FBQzBCOztBQUUzRCxJQUFNUSxPQUFPLEdBQUcsV0FBTTs7O0lBQ3BCO0lBQ1EsSUFBRixLQUFPLEdBQUtILHNEQUFTLEVBQUUsQ0FBckJJLEtBQUs7SUFDYixJQUFNQyxNQUFNLEdBQUdELEtBQUssQ0FBQ0MsTUFBTSxJQUFJRCxLQUFLLENBQUNFLE1BQU0sSUFBSSxFQUFFO0lBQ2pELElBQXdCUixJQUFZLEdBQVpBLCtDQUFRLENBQUMsRUFBRSxDQUFDLEVBWHRDLEtBV2EsR0FBYUEsSUFBWSxHQUF6QixFQVhiLE9BV3NCLEdBQUlBLElBQVksR0FBaEI7SUFDcEIsSUFBa0NBLElBQWMsR0FBZEEsK0NBQVEsQ0FBQyxJQUFJLENBQUMsRUFabEQsU0FZa0IsR0FBa0JBLElBQWMsR0FBaEMsRUFabEIsWUFZZ0MsR0FBSUEsSUFBYyxHQUFsQjtJQUM5QixJQUFNYSxXQUFXLEdBQUdaLDZDQUFNLENBQUMsSUFBSSxDQUFDO0lBQ2hDO0lBQzBDO0lBQ0EsSUFBcENhLFlBQVksR0FBR1Ysb0VBQWlCLENBQUNTLFdBQVcsQ0FBQztJQUVuRCxJQUFNRSxRQUFRO21CQUFHLDhMQUFPQyxJQUFJLEVBQUs7Z0JBQ3pCQyxNQUFNOzs7OzsrQkFBU2Qsb0RBQU8sQ0FBQyxNQUFNLEVBQUUsV0FBVyxFQUFFOzRCQUFFYSxJQUFJLEVBQUpBLElBQUk7NEJBQUVULE1BQU0sRUFBTkEsTUFBTTt5QkFBRSxDQUFDOzt3QkFBN0RVLE1BQU0sWUFBdUQ7NEJBQzlEQSxNQUFNOzs7Ozs7d0JBQ1hQLE9BQU8sQ0FBQyxTQUFDRCxJQUFJO21DQUFLO2dDQUFDUSxNQUFNOzZCQUFVLENBQWpCLE1BQWlCLENBQVIsbUJBQUdSLElBQUksQ0FBSkEsQ0FBSzt5QkFBQSxDQUFDLENBQUM7Ozs7OztTQUN0Qzt3QkFKS00sUUFBUSxDQUFVQyxJQUFJOzs7T0FJM0I7SUFFRCxJQUFNRSxRQUFRO21CQUFHLDhMQUFPRixJQUFJLEVBQUVHLEVBQUUsRUFBSztnQkFDN0JGLE1BQU07Ozs7OytCQUFTZCxvREFBTyxDQUFDLEtBQUssRUFBRSxZQUFXLENBQUssT0FBSGdCLEVBQUUsQ0FBRSxFQUFFOzRCQUFFSCxJQUFJLEVBQUpBLElBQUk7NEJBQUVULE1BQU0sRUFBTkEsTUFBTTt5QkFBRSxDQUFDOzt3QkFBbEVVLE1BQU0sWUFBNEQ7NEJBQ25FQSxNQUFNOzs7Ozs7d0JBQ1hQLE9BQU8sQ0FBQyxTQUFDRCxJQUFJLEVBQUs7NEJBQ2hCLElBQU1XLFdBQVcsR0FBR1gsSUFBSSxDQUFDWSxTQUFTLENBQUMsU0FBQ0MsR0FBRzt1Q0FBS0EsR0FBRyxDQUFDSCxFQUFFLEtBQUtBLEVBQUU7NkJBQUEsQ0FBQzs0QkFDMUQsSUFBSUMsV0FBVyxHQUFHLENBQUMsRUFBRSxPQUFPWCxJQUFJLENBQUM7NEJBQ2pDLElBQU1jLE9BQU8sR0FBSSxtQkFBR2QsSUFBSSxDQUFKQTs0QkFDcEJjLE9BQU8sQ0FBQ0MsTUFBTSxDQUFDSixXQUFXLEVBQUUsQ0FBQyxFQUFFSCxNQUFNLENBQUMsQ0FBQzs0QkFDdkMsT0FBT00sT0FBTyxDQUFDO3lCQUNoQixDQUFDLENBQUM7d0JBQ0hFLFFBQVEsRUFBRSxDQUFDOzs7Ozs7U0FDWjt3QkFYS1AsUUFBUSxDQUFVRixJQUFJLEVBQUVHLEVBQUU7OztPQVcvQjtJQUVELElBQU1PLFFBQVE7bUJBQUcsOExBQU9QLEVBQUUsRUFBSztnQkFDdkJRLFVBQVU7Ozs7OytCQUFTeEIsb0RBQU8sQ0FBQyxRQUFRLEVBQUUsWUFBVyxDQUFLLE9BQUhnQixFQUFFLENBQUUsRUFBRTs0QkFDNURTLE1BQU0sRUFBRTtnQ0FBRXJCLE1BQU0sRUFBTkEsTUFBTTs2QkFBRTt5QkFDbkIsQ0FBQzs7d0JBRklvQixVQUFVLFlBRWQ7d0JBQ0Y7d0JBQ0FqQixPQUFPLENBQUMsU0FBQ0QsSUFBSSxFQUFLOzRCQUNoQixJQUFNVyxXQUFXLEdBQUdYLElBQUksQ0FBQ1ksU0FBUyxDQUFDLFNBQUNDLEdBQUc7dUNBQUtBLEdBQUcsQ0FBQ0gsRUFBRSxLQUFLUSxVQUFVLEdBQUcsRUFBRTs2QkFBQSxDQUFDOzRCQUN2RSxJQUFJUCxXQUFXLEdBQUcsQ0FBQyxFQUFFLE9BQU9YLElBQUksQ0FBQzs0QkFDakMsSUFBTWMsT0FBTyxHQUFJLG1CQUFHZCxJQUFJLENBQUpBOzRCQUNwQmMsT0FBTyxDQUFDQyxNQUFNLENBQUNKLFdBQVcsRUFBRSxDQUFDLENBQUMsQ0FBQzs0QkFDL0IsT0FBT0csT0FBTyxDQUFDO3lCQUNoQixDQUFDLENBQUM7Ozs7OztTQUNKO3dCQVpLRyxRQUFRLENBQVVQLEVBQUU7OztPQVl6QjtJQUVELElBQU1NLFFBQVEsR0FBRztlQUFNYixZQUFZLENBQUMsSUFBSSxDQUFDO0tBQUE7SUFFekMsSUFBTWlCLFdBQVc7bUJBQUcsZ01BQVk7Z0JBRVZwQixHQUFxQixFQURuQ2MsT0FBTzs7Ozs7OytCQUFTcEIsb0RBQU8sQ0FBQyxLQUFLLEVBQUUsV0FBVyxFQUFFOzRCQUNoRHlCLE1BQU0sRUFBRTtnQ0FBRUUsTUFBTSxFQUFFckIsQ0FBQUEsQ0FBQUEsR0FBcUIsR0FBckJBLEtBQUksQ0FBQ0EsS0FBSSxDQUFDc0IsTUFBTSxHQUFHLENBQUMsQ0FBQyxjQUFyQnRCLEdBQXFCLFdBQUksR0FBekJBLEtBQUFBLENBQXlCLEdBQXpCQSxHQUFxQixDQUFFVSxFQUFFLEtBQUksRUFBRTs2QkFBRTt5QkFDcEQsQ0FBQzs7d0JBRklJLE9BQU8sWUFFWDs0QkFDRUEsQ0FBQUEsQ0FBQUEsT0FBTyxDQUFDUSxNQUFNLEtBQUssQ0FBQzs7Ozt3QkFDdEJDLFdBQVcsQ0FBQyxLQUFLLENBQUMsQ0FBQzs7O3dCQUdyQnRCLE9BQU8sQ0FBQyxTQUFDRCxJQUFJO21DQUFLLG1CQUFJQSxJQUFJLENBQUpBLFFBQU0sbUJBQUdjLE9BQU8sQ0FBUEEsQ0FBUTt5QkFBQSxDQUFDLENBQUM7Ozs7OztTQUMxQzt3QkFUS00sV0FBVzs7O09BU2hCO0lBRUQ5QixnREFBUyxDQUFDLFdBQU07UUFDZCxJQUFJZSxZQUFZLEVBQUVlLFdBQVcsRUFBRSxDQUFDO0tBQ2pDLEVBQUU7UUFBQ2YsWUFBWTtLQUFDLENBQUMsQ0FBQztJQUNuQixxQkFDRTs7WUFDR1AsTUFBTSxrQkFBSSw4REFBQ1QsaURBQVE7Z0JBQUNtQyxNQUFNLEVBQUVsQixRQUFROzs7OztxQkFBSTswQkFDekMsOERBQUNtQixJQUFFO2dCQUFDQyxTQUFTLEVBQUMsVUFBVTswQkFDckIxQixLQUFJLENBQUMyQixHQUFHLENBQUMsU0FBQ2QsR0FBRzt5Q0FDWiw4REFBQ3pCLGdEQUFPLG9CQUVGeUIsR0FBRzt3QkFDUEosUUFBUSxFQUFFQSxRQUFRO3dCQUNsQlEsUUFBUSxFQUFFO21DQUFNQSxRQUFRLENBQUNKLEdBQUcsQ0FBQ0gsRUFBRSxDQUFDO3lCQUFBO3dCQUNoQ2tCLFNBQVMsRUFBRTttQ0FBTXpCLFlBQVksQ0FBQ1UsR0FBRyxDQUFDSCxFQUFFLENBQUM7eUJBQUE7d0JBQ3JDbUIsU0FBUyxFQUFFM0IsU0FBUyxLQUFLVyxHQUFHLENBQUNILEVBQUU7d0JBQy9Cb0IsSUFBSSxFQUFFaEMsTUFBTTt3QkFOUGUsR0FBRyxDQUFDSCxFQUFFOzs7OzhCQU9YO2lCQUNILENBQUM7Ozs7O3FCQUNDOzBCQUNMLDhEQUFDcUIsS0FBRztnQkFBQ0MsR0FBRyxFQUFFNUIsV0FBVzs7Ozs7cUJBQUk7O29CQUN4QixDQUNIO0NBQ0g7R0EvRUtSLE9BQU87O1FBRU9ILGtEQUFTO1FBT05FLGdFQUFpQjs7O0FBVGxDQyxLQUFBQSxPQUFPO0FBaUZiLCtEQUFlQSxPQUFPLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Nc2dMaXN0LmpzPzFhZmUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IE1zZ0l0ZW0gZnJvbSAnLi9Nc2dJdGVtJztcbmltcG9ydCBNc2dJbnB1dCBmcm9tICcuL01zZ0lucHV0JztcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUsIHVzZVJlZiB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJztcbmltcG9ydCBmZXRjaGVyIGZyb20gJy4uL2ZldGNoZXInO1xuaW1wb3J0IHVzZUluZmluaXRlU2Nyb2xsIGZyb20gJy4uL2hvb2tzL3VzZUluZmluaXRlU2Nyb2xsJztcblxuY29uc3QgTXNnTGlzdCA9ICgpID0+IHtcbiAgLy91cmzroZwgdXNlciBpZCDrhJjquLDquLBcbiAgY29uc3QgeyBxdWVyeSB9ID0gdXNlUm91dGVyKCk7XG4gIGNvbnN0IHVzZXJJZCA9IHF1ZXJ5LnVzZXJJZCB8fCBxdWVyeS51c2VyaWQgfHwgJyc7XG4gIGNvbnN0IFttc2dzLCBzZXRNc2dzXSA9IHVzZVN0YXRlKFtdKTtcbiAgY29uc3QgW2VkaXRpbmdJZCwgc2V0RWRpdGluZ0lkXSA9IHVzZVN0YXRlKG51bGwpO1xuICBjb25zdCBmZXRjaE1vcmVFbCA9IHVzZVJlZihudWxsKTtcbiAgLy9mZXRjaE1vcmVFbOydhCDrhJjqsqjrsJvslYQg66y07ZWc7Iqk7YGs66Gk7JeQIOuMgO2VnCDtjJDri6jsnYQg7ZuF7JeQ7IScIO2VmOqzoFxuICAvL2ZldGNoTW9yZUVs7J20IO2ZlOuptOyDgeyXkCDrgpjtg4DrgqzsnYQg65WM7JeQ64qUIGludGVyc2VjdGlvbuydtCB0cnVlIOq3uOugh+yngCDslYrsnYQg65WM7JeQ64qUIGZhbHNlXG4gIGNvbnN0IGludGVyc2VjdGluZyA9IHVzZUluZmluaXRlU2Nyb2xsKGZldGNoTW9yZUVsKTtcblxuICBjb25zdCBvbkNyZWF0ZSA9IGFzeW5jICh0ZXh0KSA9PiB7XG4gICAgY29uc3QgbmV3TXNnID0gYXdhaXQgZmV0Y2hlcigncG9zdCcsICcvbWVzc2FnZXMnLCB7IHRleHQsIHVzZXJJZCB9KTtcbiAgICBpZiAoIW5ld01zZykgcmV0dXJuO1xuICAgIHNldE1zZ3MoKG1zZ3MpID0+IFtuZXdNc2csIC4uLm1zZ3NdKTtcbiAgfTtcblxuICBjb25zdCBvblVwZGF0ZSA9IGFzeW5jICh0ZXh0LCBpZCkgPT4ge1xuICAgIGNvbnN0IG5ld01zZyA9IGF3YWl0IGZldGNoZXIoJ3B1dCcsIGAvbWVzc2FnZXMvJHtpZH1gLCB7IHRleHQsIHVzZXJJZCB9KTtcbiAgICBpZiAoIW5ld01zZykgcmV0dXJuO1xuICAgIHNldE1zZ3MoKG1zZ3MpID0+IHtcbiAgICAgIGNvbnN0IHRhcmdldEluZGV4ID0gbXNncy5maW5kSW5kZXgoKG1zZykgPT4gbXNnLmlkID09PSBpZCk7XG4gICAgICBpZiAodGFyZ2V0SW5kZXggPCAwKSByZXR1cm4gbXNncztcbiAgICAgIGNvbnN0IG5ld01zZ3MgPSBbLi4ubXNnc107XG4gICAgICBuZXdNc2dzLnNwbGljZSh0YXJnZXRJbmRleCwgMSwgbmV3TXNnKTtcbiAgICAgIHJldHVybiBuZXdNc2dzO1xuICAgIH0pO1xuICAgIGRvbmVFZGl0KCk7XG4gIH07XG5cbiAgY29uc3Qgb25EZWxldGUgPSBhc3luYyAoaWQpID0+IHtcbiAgICBjb25zdCByZWNlaXZlZElkID0gYXdhaXQgZmV0Y2hlcignZGVsZXRlJywgYC9tZXNzYWdlcy8ke2lkfWAsIHtcbiAgICAgIHBhcmFtczogeyB1c2VySWQgfSxcbiAgICB9KTtcbiAgICAvL3JlY2lldmVkaWTqsIAganNvbuydvCDrlYwg7Iir7J6Q66GcIO2YleuzgO2ZmOydtCDqsIDriqXtlZwg7JWg65Ok7J206riwIOuVjOusuOyXkCDrsJzsg53tlZjripQg66y47KCcIHR5cGVvZuycvOuhnCDstpzroKXtlbTrtJBcbiAgICBzZXRNc2dzKChtc2dzKSA9PiB7XG4gICAgICBjb25zdCB0YXJnZXRJbmRleCA9IG1zZ3MuZmluZEluZGV4KChtc2cpID0+IG1zZy5pZCA9PT0gcmVjZWl2ZWRJZCArICcnKTtcbiAgICAgIGlmICh0YXJnZXRJbmRleCA8IDApIHJldHVybiBtc2dzO1xuICAgICAgY29uc3QgbmV3TXNncyA9IFsuLi5tc2dzXTtcbiAgICAgIG5ld01zZ3Muc3BsaWNlKHRhcmdldEluZGV4LCAxKTtcbiAgICAgIHJldHVybiBuZXdNc2dzO1xuICAgIH0pO1xuICB9O1xuXG4gIGNvbnN0IGRvbmVFZGl0ID0gKCkgPT4gc2V0RWRpdGluZ0lkKG51bGwpO1xuXG4gIGNvbnN0IGdldE1lc3NhZ2VzID0gYXN5bmMgKCkgPT4ge1xuICAgIGNvbnN0IG5ld01zZ3MgPSBhd2FpdCBmZXRjaGVyKCdnZXQnLCAnL21lc3NhZ2VzJywge1xuICAgICAgcGFyYW1zOiB7IGN1cnNvcjogbXNnc1ttc2dzLmxlbmd0aCAtIDFdPy5pZCB8fCAnJyB9LFxuICAgIH0pO1xuICAgIGlmIChuZXdNc2dzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgc2V0SGFzaE5leHQoZmFsc2UpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBzZXRNc2dzKChtc2dzKSA9PiBbLi4ubXNncywgLi4ubmV3TXNnc10pO1xuICB9O1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKGludGVyc2VjdGluZykgZ2V0TWVzc2FnZXMoKTtcbiAgfSwgW2ludGVyc2VjdGluZ10pO1xuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICB7dXNlcklkICYmIDxNc2dJbnB1dCBtdXRhdGU9e29uQ3JlYXRlfSAvPn1cbiAgICAgIDx1bCBjbGFzc05hbWU9XCJtZXNzYWdlc1wiPlxuICAgICAgICB7bXNncy5tYXAoKG1zZykgPT4gKFxuICAgICAgICAgIDxNc2dJdGVtXG4gICAgICAgICAgICBrZXk9e21zZy5pZH1cbiAgICAgICAgICAgIHsuLi5tc2d9XG4gICAgICAgICAgICBvblVwZGF0ZT17b25VcGRhdGV9XG4gICAgICAgICAgICBvbkRlbGV0ZT17KCkgPT4gb25EZWxldGUobXNnLmlkKX1cbiAgICAgICAgICAgIHN0YXJ0RWRpdD17KCkgPT4gc2V0RWRpdGluZ0lkKG1zZy5pZCl9XG4gICAgICAgICAgICBpc0VkaXRpbmc9e2VkaXRpbmdJZCA9PT0gbXNnLmlkfVxuICAgICAgICAgICAgbXlJZD17dXNlcklkfVxuICAgICAgICAgIC8+XG4gICAgICAgICkpfVxuICAgICAgPC91bD5cbiAgICAgIDxkaXYgcmVmPXtmZXRjaE1vcmVFbH0gLz5cbiAgICA8Lz5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IE1zZ0xpc3Q7XG4iXSwibmFtZXMiOlsiTXNnSXRlbSIsIk1zZ0lucHV0IiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJ1c2VSZWYiLCJ1c2VSb3V0ZXIiLCJmZXRjaGVyIiwidXNlSW5maW5pdGVTY3JvbGwiLCJNc2dMaXN0IiwicXVlcnkiLCJ1c2VySWQiLCJ1c2VyaWQiLCJtc2dzIiwic2V0TXNncyIsImVkaXRpbmdJZCIsInNldEVkaXRpbmdJZCIsImZldGNoTW9yZUVsIiwiaW50ZXJzZWN0aW5nIiwib25DcmVhdGUiLCJ0ZXh0IiwibmV3TXNnIiwib25VcGRhdGUiLCJpZCIsInRhcmdldEluZGV4IiwiZmluZEluZGV4IiwibXNnIiwibmV3TXNncyIsInNwbGljZSIsImRvbmVFZGl0Iiwib25EZWxldGUiLCJyZWNlaXZlZElkIiwicGFyYW1zIiwiZ2V0TWVzc2FnZXMiLCJjdXJzb3IiLCJsZW5ndGgiLCJzZXRIYXNoTmV4dCIsIm11dGF0ZSIsInVsIiwiY2xhc3NOYW1lIiwibWFwIiwic3RhcnRFZGl0IiwiaXNFZGl0aW5nIiwibXlJZCIsImRpdiIsInJlZiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/MsgList.js\n");

/***/ })

});