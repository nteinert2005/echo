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

/***/ "./pages/components/Category.new.js":
/*!******************************************!*\
  !*** ./pages/components/Category.new.js ***!
  \******************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"categories\": function() { return /* binding */ categories; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _chakra_ui_icons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @chakra-ui/icons */ \"./node_modules/@chakra-ui/icons/dist/index.mjs\");\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @chakra-ui/react */ \"./node_modules/@chakra-ui/react/dist/chakra-ui-react.esm.js\");\nvar _this = undefined;\n\n\n\nvar categories = [\n    {\n        label: \"Moon\",\n        icon: _chakra_ui_icons__WEBPACK_IMPORTED_MODULE_1__.MoonIcon\n    },\n    {\n        label: \"Link\",\n        icon: _chakra_ui_icons__WEBPACK_IMPORTED_MODULE_1__.LinkIcon\n    }\n];\nvar Categories = function() {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Flex, {\n        width: \"100%\",\n        pt: 4,\n        alignItems: \"center\",\n        justifyContent: \"space-between\",\n        overflowX: \"auto\",\n        children: categories.map(function(item) {\n            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Flex, {\n                color: \"white\",\n                width: \"100px\",\n                textAlign: \"center\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Icon, {\n                    as: item.icon,\n                    fontSize: \"26px\"\n                }, void 0, false, {\n                    fileName: \"/home/sirius/code/echo/pages/components/Category.new.js\",\n                    lineNumber: 20,\n                    columnNumber: 25\n                }, _this)\n            }, void 0, false, {\n                fileName: \"/home/sirius/code/echo/pages/components/Category.new.js\",\n                lineNumber: 19,\n                columnNumber: 21\n            }, _this);\n        })\n    }, void 0, false, {\n        fileName: \"/home/sirius/code/echo/pages/components/Category.new.js\",\n        lineNumber: 17,\n        columnNumber: 13\n    }, _this);\n};\n_c = Categories;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Categories);\nvar _c;\n$RefreshReg$(_c, \"Categories\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9jb21wb25lbnRzL0NhdGVnb3J5Lm5ldy5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBOztBQUFzRDtBQUNFO0FBRWpELElBQU1LLFVBQVUsR0FBRztJQUN0QjtRQUNJQyxLQUFLLEVBQUUsTUFBTTtRQUNiQyxJQUFJLEVBQUVOLHNEQUFRO0tBQ2pCO0lBQUU7UUFDQ0ssS0FBSyxFQUFFLE1BQU07UUFDYkMsSUFBSSxFQUFFUCxzREFBUTtLQUNqQjtDQUNKO0FBR0QsSUFBTVEsVUFBVSxHQUFHLFdBQU07SUFDckIscUJBQ1EsOERBQUNMLGtEQUFJO1FBQUNNLEtBQUssRUFBQyxNQUFNO1FBQUNDLEVBQUUsRUFBRSxDQUFDO1FBQUVDLFVBQVUsRUFBRSxRQUFRO1FBQUVDLGNBQWMsRUFBRSxlQUFlO1FBQUVDLFNBQVMsRUFBRSxNQUFNO2tCQUM1RlIsVUFBVSxDQUFDUyxHQUFHLENBQUMsU0FBQ0MsSUFBSTtpQ0FDbEIsOERBQUNaLGtEQUFJO2dCQUFDYSxLQUFLLEVBQUMsT0FBTztnQkFBQ1AsS0FBSyxFQUFDLE9BQU87Z0JBQUNRLFNBQVMsRUFBRSxRQUFROzBCQUNqRCw0RUFBQ2Isa0RBQUk7b0JBQUNjLEVBQUUsRUFBRUgsSUFBSSxDQUFDUixJQUFJO29CQUFFWSxRQUFRLEVBQUUsTUFBTTs7Ozs7eUJBQUk7Ozs7O3FCQUN0QztTQUNWLENBQUM7Ozs7O2FBQ0MsQ0FDZDtBQUNMLENBQUM7QUFWS1gsS0FBQUEsVUFBVTtBQWFoQiwrREFBZUEsVUFBVSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2NvbXBvbmVudHMvQ2F0ZWdvcnkubmV3LmpzP2U5ZTQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTGlua0ljb24sIE1vb25JY29uIH0gZnJvbSBcIkBjaGFrcmEtdWkvaWNvbnNcIjtcbmltcG9ydCB7IENvbnRhaW5lciwgRmxleCwgSWNvbiB9IGZyb20gXCJAY2hha3JhLXVpL3JlYWN0XCJcblxuZXhwb3J0IGNvbnN0IGNhdGVnb3JpZXMgPSBbXG4gICAge1xuICAgICAgICBsYWJlbDogXCJNb29uXCIsXG4gICAgICAgIGljb246IE1vb25JY29uIFxuICAgIH0sIHtcbiAgICAgICAgbGFiZWw6IFwiTGlua1wiLFxuICAgICAgICBpY29uOiBMaW5rSWNvblxuICAgIH1cbl1cblxuXG5jb25zdCBDYXRlZ29yaWVzID0gKCkgPT4ge1xuICAgIHJldHVybihcbiAgICAgICAgICAgIDxGbGV4IHdpZHRoPVwiMTAwJVwiIHB0PXs0fSBhbGlnbkl0ZW1zPXsnY2VudGVyJ30ganVzdGlmeUNvbnRlbnQ9eydzcGFjZS1iZXR3ZWVuJ30gb3ZlcmZsb3dYPXsnYXV0byd9PlxuICAgICAgICAgICAgICAgIHsgY2F0ZWdvcmllcy5tYXAoKGl0ZW0pID0+IChcbiAgICAgICAgICAgICAgICAgICAgPEZsZXggY29sb3I9XCJ3aGl0ZVwiIHdpZHRoPVwiMTAwcHhcIiB0ZXh0QWxpZ249eydjZW50ZXInfT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxJY29uIGFzPXtpdGVtLmljb259IGZvbnRTaXplPXsnMjZweCd9IC8+IFxuICAgICAgICAgICAgICAgICAgICA8L0ZsZXg+XG4gICAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICA8L0ZsZXg+XG4gICAgKVxufVxuXG5cbmV4cG9ydCBkZWZhdWx0IENhdGVnb3JpZXM7Il0sIm5hbWVzIjpbIkxpbmtJY29uIiwiTW9vbkljb24iLCJDb250YWluZXIiLCJGbGV4IiwiSWNvbiIsImNhdGVnb3JpZXMiLCJsYWJlbCIsImljb24iLCJDYXRlZ29yaWVzIiwid2lkdGgiLCJwdCIsImFsaWduSXRlbXMiLCJqdXN0aWZ5Q29udGVudCIsIm92ZXJmbG93WCIsIm1hcCIsIml0ZW0iLCJjb2xvciIsInRleHRBbGlnbiIsImFzIiwiZm9udFNpemUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/components/Category.new.js\n"));

/***/ })

});