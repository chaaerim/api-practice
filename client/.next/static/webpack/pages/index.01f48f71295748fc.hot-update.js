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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"../node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _MsgItem__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./MsgItem */ \"./components/MsgItem.js\");\n/* harmony import */ var _MsgInput__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./MsgInput */ \"./components/MsgInput.js\");\nfunction _defineProperty(obj, key, value) {\n    if (key in obj) {\n        Object.defineProperty(obj, key, {\n            value: value,\n            enumerable: true,\n            configurable: true,\n            writable: true\n        });\n    } else {\n        obj[key] = value;\n    }\n    return obj;\n}\nfunction _objectSpread(target) {\n    for(var i = 1; i < arguments.length; i++){\n        var source = arguments[i] != null ? arguments[i] : {};\n        var ownKeys = Object.keys(source);\n        if (typeof Object.getOwnPropertySymbols === \"function\") {\n            ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {\n                return Object.getOwnPropertyDescriptor(source, sym).enumerable;\n            }));\n        }\n        ownKeys.forEach(function(key) {\n            _defineProperty(target, key, source[key]);\n        });\n    }\n    return target;\n}\nvar _this = undefined;\n\n\n\nvar UserIds = [\n    \"spiderman\",\n    \"MJ\"\n];\nvar getRandomUserId = function() {\n    return UserIds[Math.round(Math.random())];\n};\nvar msgs = Array(50).fill(0).map(function(_, i) {\n    return {\n        id: i + 1,\n        userId: getRandomUserId(),\n        timestamp: 1234567890123 + i * 1000 * 60,\n        text: \"\".concat(i + 1, \" test message\")\n    };\n}).reverse();\n// const msgs = [\n//   { id: 1, userId: getRandomUserId(), timestamp: 1234567890123, text: '' },\n// ];\nvar MsgList = function() {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n            className: \"messages\",\n            children: msgs.map(function(msg) {\n                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_MsgItem__WEBPACK_IMPORTED_MODULE_1__[\"default\"], _objectSpread({}, msg), msg.id, false, {\n                    fileName: \"/Users/chaerimkim/ceos-front-study/api-practice/client/components/MsgList.js\",\n                    lineNumber: 25,\n                    columnNumber: 9\n                }, _this);\n            })\n        }, void 0, false, {\n            fileName: \"/Users/chaerimkim/ceos-front-study/api-practice/client/components/MsgList.js\",\n            lineNumber: 23,\n            columnNumber: 5\n        }, _this)\n    }, void 0, false);\n};\n_c = MsgList;\n/* harmony default export */ __webpack_exports__[\"default\"] = (MsgList);\nvar _c;\n$RefreshReg$(_c, \"MsgList\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL01zZ0xpc3QuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQWdDO0FBQ0U7QUFFbEMsSUFBTUUsT0FBTyxHQUFHO0lBQUMsV0FBVztJQUFFLElBQUk7Q0FBQztBQUNuQyxJQUFNQyxlQUFlLEdBQUc7V0FBTUQsT0FBTyxDQUFDRSxJQUFJLENBQUNDLEtBQUssQ0FBQ0QsSUFBSSxDQUFDRSxNQUFNLEVBQUUsQ0FBQyxDQUFDO0NBQUE7QUFFaEUsSUFBTUMsSUFBSSxHQUFHQyxLQUFLLENBQUMsRUFBRSxDQUFDLENBQ25CQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQ1BDLEdBQUcsQ0FBQyxTQUFDQyxDQUFDLEVBQUVDLENBQUM7V0FBTTtRQUNkQyxFQUFFLEVBQUVELENBQUMsR0FBRyxDQUFDO1FBQ1RFLE1BQU0sRUFBRVgsZUFBZSxFQUFFO1FBQ3pCWSxTQUFTLEVBQUUsYUFBYSxHQUFHSCxDQUFDLEdBQUcsSUFBSSxHQUFHLEVBQUU7UUFDeENJLElBQUksRUFBRSxFQUFDLENBQVEsTUFBYSxDQUFuQkosQ0FBQyxHQUFHLENBQUMsRUFBQyxlQUFhLENBQUM7S0FDOUI7Q0FBQyxDQUFDLENBQ0ZLLE9BQU8sRUFBRTtBQUVaLGlCQUFpQjtBQUNqQiw4RUFBOEU7QUFDOUUsS0FBSztBQUVMLElBQU1DLE9BQU8sR0FBRzt5QkFDZDtrQkFDRSw0RUFBQ0MsSUFBRTtZQUFDQyxTQUFTLEVBQUMsVUFBVTtzQkFDckJiLElBQUksQ0FBQ0csR0FBRyxDQUFDLFNBQUNXLEdBQUc7cUNBQ1osOERBQUNyQixnREFBTyxvQkFBa0JxQixHQUFHLEdBQWZBLEdBQUcsQ0FBQ1IsRUFBRTs7Ozt5QkFBYTthQUNsQyxDQUFDOzs7OztpQkFDQztxQkFDSjtDQUNKO0FBUktLLEtBQUFBLE9BQU87QUFVYiwrREFBZUEsT0FBTyxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvTXNnTGlzdC5qcz8xYWZlIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBNc2dJdGVtIGZyb20gJy4vTXNnSXRlbSc7XG5pbXBvcnQgTXNnSW5wdXQgZnJvbSAnLi9Nc2dJbnB1dCc7XG5cbmNvbnN0IFVzZXJJZHMgPSBbJ3NwaWRlcm1hbicsICdNSiddO1xuY29uc3QgZ2V0UmFuZG9tVXNlcklkID0gKCkgPT4gVXNlcklkc1tNYXRoLnJvdW5kKE1hdGgucmFuZG9tKCkpXTtcblxuY29uc3QgbXNncyA9IEFycmF5KDUwKVxuICAuZmlsbCgwKVxuICAubWFwKChfLCBpKSA9PiAoe1xuICAgIGlkOiBpICsgMSxcbiAgICB1c2VySWQ6IGdldFJhbmRvbVVzZXJJZCgpLFxuICAgIHRpbWVzdGFtcDogMTIzNDU2Nzg5MDEyMyArIGkgKiAxMDAwICogNjAsXG4gICAgdGV4dDogYCR7aSArIDF9IHRlc3QgbWVzc2FnZWAsXG4gIH0pKVxuICAucmV2ZXJzZSgpO1xuXG4vLyBjb25zdCBtc2dzID0gW1xuLy8gICB7IGlkOiAxLCB1c2VySWQ6IGdldFJhbmRvbVVzZXJJZCgpLCB0aW1lc3RhbXA6IDEyMzQ1Njc4OTAxMjMsIHRleHQ6ICcnIH0sXG4vLyBdO1xuXG5jb25zdCBNc2dMaXN0ID0gKCkgPT4gKFxuICA8PlxuICAgIDx1bCBjbGFzc05hbWU9XCJtZXNzYWdlc1wiPlxuICAgICAge21zZ3MubWFwKChtc2cpID0+IChcbiAgICAgICAgPE1zZ0l0ZW0ga2V5PXttc2cuaWR9IHsuLi5tc2d9IC8+XG4gICAgICApKX1cbiAgICA8L3VsPlxuICA8Lz5cbik7XG5cbmV4cG9ydCBkZWZhdWx0IE1zZ0xpc3Q7XG4iXSwibmFtZXMiOlsiTXNnSXRlbSIsIk1zZ0lucHV0IiwiVXNlcklkcyIsImdldFJhbmRvbVVzZXJJZCIsIk1hdGgiLCJyb3VuZCIsInJhbmRvbSIsIm1zZ3MiLCJBcnJheSIsImZpbGwiLCJtYXAiLCJfIiwiaSIsImlkIiwidXNlcklkIiwidGltZXN0YW1wIiwidGV4dCIsInJldmVyc2UiLCJNc2dMaXN0IiwidWwiLCJjbGFzc05hbWUiLCJtc2ciXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/MsgList.js\n");

/***/ })

});