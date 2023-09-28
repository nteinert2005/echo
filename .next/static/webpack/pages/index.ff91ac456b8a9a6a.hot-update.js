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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"categories\": function() { return /* binding */ categories; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _chakra_ui_icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @chakra-ui/icons */ \"./node_modules/@chakra-ui/icons/dist/index.mjs\");\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @chakra-ui/react */ \"./node_modules/@chakra-ui/react/dist/chakra-ui-react.esm.js\");\n/* harmony import */ var _icons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./icons */ \"./pages/components/icons/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\nvar _this = undefined;\n\nvar _s = $RefreshSig$();\n\n\n\n\nvar categories = [\n    {\n        label: \"Routers\",\n        icon: _icons__WEBPACK_IMPORTED_MODULE_1__.RouterIcon,\n        color: \"#3b3734\"\n    },\n    {\n        label: \"Computers\",\n        icon: _chakra_ui_icons__WEBPACK_IMPORTED_MODULE_3__.LinkIcon,\n        color: \"#e60049\"\n    },\n    {\n        label: \"Monitors\",\n        icon: _chakra_ui_icons__WEBPACK_IMPORTED_MODULE_3__.SpinnerIcon,\n        color: \"#0bb4ff\"\n    },\n    {\n        label: \"Apple TV\",\n        icon: _chakra_ui_icons__WEBPACK_IMPORTED_MODULE_3__.SunIcon,\n        color: \"#9b19f5\"\n    },\n    {\n        label: \"Chrome\",\n        icon: _chakra_ui_icons__WEBPACK_IMPORTED_MODULE_3__.SunIcon,\n        color: \"#e6d800\"\n    },\n    {\n        label: \"Switches\",\n        icon: _chakra_ui_icons__WEBPACK_IMPORTED_MODULE_3__.SunIcon,\n        color: \"\"\n    },\n    {\n        label: \"Terminals\",\n        icon: _chakra_ui_icons__WEBPACK_IMPORTED_MODULE_3__.SunIcon,\n        color: \"#50e991\"\n    },\n    {\n        label: \"Scanners\",\n        icon: _chakra_ui_icons__WEBPACK_IMPORTED_MODULE_3__.SunIcon,\n        color: \"#ffa300\"\n    }\n];\nvar Categories = function() {\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(null), activeFilter = ref[0], setActiveFilter = ref[1];\n    var setSelectedFiilter = function(key) {\n        setActiveFilter(key);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.Flex, {\n        width: \"80%\",\n        margin: \"0 auto\",\n        pt: 4,\n        mb: 4,\n        alignItems: \"center\",\n        justifyContent: \"space-between\",\n        overflowX: \"auto\",\n        children: categories.map(function(item, key) {\n            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.Flex, {\n                backgroundColor: activeFilter === key ? item.color : \"none\",\n                borderRadius: \"40px\",\n                onClick: function() {\n                    return setSelectedFiilter(key);\n                },\n                flexDir: \"column\",\n                color: \"white\",\n                p: 3,\n                alignItems: \"center\",\n                textAlign: \"center\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.Icon, {\n                        as: item.icon,\n                        fontSize: \"26px\"\n                    }, void 0, false, {\n                        fileName: \"/home/sirius/code/echo/pages/components/Category.new.js\",\n                        lineNumber: 54,\n                        columnNumber: 25\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.Text, {\n                        marginTop: 3,\n                        fontWeight: \"medium\",\n                        fontSize: \"sm\",\n                        children: [\n                            \" \",\n                            item.label,\n                            \" \"\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/home/sirius/code/echo/pages/components/Category.new.js\",\n                        lineNumber: 55,\n                        columnNumber: 25\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/sirius/code/echo/pages/components/Category.new.js\",\n                lineNumber: 53,\n                columnNumber: 21\n            }, _this);\n        })\n    }, void 0, false, {\n        fileName: \"/home/sirius/code/echo/pages/components/Category.new.js\",\n        lineNumber: 51,\n        columnNumber: 13\n    }, _this);\n};\n_s(Categories, \"JX2RHXcK6vRFQX40l5qJjODCymA=\");\n_c = Categories;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Categories);\nvar _c;\n$RefreshReg$(_c, \"Categories\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9jb21wb25lbnRzL0NhdGVnb3J5Lm5ldy5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBOzs7QUFBNEU7QUFDZDtBQUN6QjtBQUNKO0FBRTFCLElBQU1VLFVBQVUsR0FBRztJQUN0QjtRQUNJQyxLQUFLLEVBQUUsU0FBUztRQUNoQkMsSUFBSSxFQUFFSiw4Q0FBVTtRQUNoQkssS0FBSyxFQUFFLFNBQVM7S0FDbkI7SUFBRTtRQUNDRixLQUFLLEVBQUUsV0FBVztRQUNsQkMsSUFBSSxFQUFFWixzREFBUTtRQUNkYSxLQUFLLEVBQUUsU0FBUztLQUNuQjtJQUFFO1FBQ0NGLEtBQUssRUFBRSxVQUFVO1FBQ2pCQyxJQUFJLEVBQUVWLHlEQUFXO1FBQ2pCVyxLQUFLLEVBQUUsU0FBUztLQUNuQjtJQUFFO1FBQ0NGLEtBQUssRUFBRSxVQUFVO1FBQ2pCQyxJQUFJLEVBQUVULHFEQUFPO1FBQ2JVLEtBQUssRUFBRSxTQUFTO0tBQ25CO0lBQUU7UUFDQ0YsS0FBSyxFQUFFLFFBQVE7UUFDZkMsSUFBSSxFQUFFVCxxREFBTztRQUNiVSxLQUFLLEVBQUUsU0FBUztLQUNuQjtJQUFFO1FBQ0NGLEtBQUssRUFBRSxVQUFVO1FBQ2pCQyxJQUFJLEVBQUVULHFEQUFPO1FBQ2JVLEtBQUssRUFBRSxFQUFFO0tBQ1o7SUFBRTtRQUNDRixLQUFLLEVBQUUsV0FBVztRQUNsQkMsSUFBSSxFQUFFVCxxREFBTztRQUNiVSxLQUFLLEVBQUUsU0FBUztLQUNuQjtJQUFFO1FBQ0NGLEtBQUssRUFBRSxVQUFVO1FBQ2pCQyxJQUFJLEVBQUVULHFEQUFPO1FBQ2JVLEtBQUssRUFBRSxTQUFTO0tBQ25CO0NBQ0o7QUFFRCxJQUFNQyxVQUFVLEdBQUcsV0FBTTs7SUFDckIsSUFBMENMLEdBQWMsR0FBZEEsK0NBQVEsQ0FBQyxJQUFJLENBQUMsRUFBaERNLFlBQVksR0FBc0JOLEdBQWMsR0FBcEMsRUFBRU8sZUFBZSxHQUFLUCxHQUFjLEdBQW5CO0lBRXJDLElBQU1RLGtCQUFrQixHQUFHLFNBQUNDLEdBQUcsRUFBSztRQUNoQ0YsZUFBZSxDQUFDRSxHQUFHLENBQUMsQ0FBQztJQUN6QixDQUFDO0lBR0QscUJBQ1EsOERBQUNiLGtEQUFJO1FBQUNjLEtBQUssRUFBQyxLQUFLO1FBQUNDLE1BQU0sRUFBQyxRQUFRO1FBQUNDLEVBQUUsRUFBRSxDQUFDO1FBQUVDLEVBQUUsRUFBRSxDQUFDO1FBQUVDLFVBQVUsRUFBRSxRQUFRO1FBQUVDLGNBQWMsRUFBRSxlQUFlO1FBQUVDLFNBQVMsRUFBRSxNQUFNO2tCQUNsSGYsVUFBVSxDQUFDZ0IsR0FBRyxDQUFDLFNBQUNDLElBQUksRUFBRVQsR0FBRztpQ0FDdkIsOERBQUNiLGtEQUFJO2dCQUFDdUIsZUFBZSxFQUFFYixZQUFZLEtBQUtHLEdBQUcsR0FBR1MsSUFBSSxDQUFDZCxLQUFLLEdBQUcsTUFBTTtnQkFBRWdCLFlBQVksRUFBRSxNQUFNO2dCQUFFQyxPQUFPLEVBQUU7MkJBQU1iLGtCQUFrQixDQUFDQyxHQUFHLENBQUM7aUJBQUE7Z0JBQUVhLE9BQU8sRUFBRSxRQUFRO2dCQUFFbEIsS0FBSyxFQUFDLE9BQU87Z0JBQUNtQixDQUFDLEVBQUUsQ0FBQztnQkFBRVQsVUFBVSxFQUFFLFFBQVE7Z0JBQUVVLFNBQVMsRUFBRSxRQUFROztrQ0FDN00sOERBQUMzQixrREFBSTt3QkFBQzRCLEVBQUUsRUFBRVAsSUFBSSxDQUFDZixJQUFJO3dCQUFFdUIsUUFBUSxFQUFFLE1BQU07Ozs7OzZCQUFJO2tDQUN6Qyw4REFBQzVCLGtEQUFJO3dCQUFDNkIsU0FBUyxFQUFFLENBQUM7d0JBQUVDLFVBQVUsRUFBRSxRQUFRO3dCQUFFRixRQUFRLEVBQUUsSUFBSTs7NEJBQUUsR0FBQzs0QkFBRVIsSUFBSSxDQUFDaEIsS0FBSzs0QkFBQyxHQUFDOzs7Ozs7NkJBQU87Ozs7OztxQkFDN0U7U0FDVixDQUFDOzs7OzthQUNDLENBQ2Q7QUFDTCxDQUFDO0dBbEJLRyxVQUFVO0FBQVZBLEtBQUFBLFVBQVU7QUFxQmhCLCtEQUFlQSxVQUFVLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvY29tcG9uZW50cy9DYXRlZ29yeS5uZXcuanM/ZTllNCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBMaW5rSWNvbiwgTW9vbkljb24sIFNwaW5uZXJJY29uLCBTdW5JY29uIH0gZnJvbSBcIkBjaGFrcmEtdWkvaWNvbnNcIjtcbmltcG9ydCB7IENvbnRhaW5lciwgRmxleCwgSWNvbiwgVGV4dCB9IGZyb20gXCJAY2hha3JhLXVpL3JlYWN0XCJcbmltcG9ydCB7IFJvdXRlckljb24gfSBmcm9tIFwiLi9pY29uc1wiO1xuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcblxuZXhwb3J0IGNvbnN0IGNhdGVnb3JpZXMgPSBbXG4gICAge1xuICAgICAgICBsYWJlbDogXCJSb3V0ZXJzXCIsXG4gICAgICAgIGljb246IFJvdXRlckljb24sXG4gICAgICAgIGNvbG9yOiBcIiMzYjM3MzRcIlxuICAgIH0sIHtcbiAgICAgICAgbGFiZWw6IFwiQ29tcHV0ZXJzXCIsXG4gICAgICAgIGljb246IExpbmtJY29uLFxuICAgICAgICBjb2xvcjogXCIjZTYwMDQ5XCJcbiAgICB9LCB7XG4gICAgICAgIGxhYmVsOiBcIk1vbml0b3JzXCIsXG4gICAgICAgIGljb246IFNwaW5uZXJJY29uLFxuICAgICAgICBjb2xvcjogXCIjMGJiNGZmXCJcbiAgICB9LCB7XG4gICAgICAgIGxhYmVsOiBcIkFwcGxlIFRWXCIsXG4gICAgICAgIGljb246IFN1bkljb24sIFxuICAgICAgICBjb2xvcjogXCIjOWIxOWY1XCJcbiAgICB9LCB7XG4gICAgICAgIGxhYmVsOiBcIkNocm9tZVwiLFxuICAgICAgICBpY29uOiBTdW5JY29uLFxuICAgICAgICBjb2xvcjogXCIjZTZkODAwXCJcbiAgICB9LCB7XG4gICAgICAgIGxhYmVsOiBcIlN3aXRjaGVzXCIsXG4gICAgICAgIGljb246IFN1bkljb24sXG4gICAgICAgIGNvbG9yOiBcIlwiXG4gICAgfSwge1xuICAgICAgICBsYWJlbDogXCJUZXJtaW5hbHNcIixcbiAgICAgICAgaWNvbjogU3VuSWNvbixcbiAgICAgICAgY29sb3I6IFwiIzUwZTk5MVwiXG4gICAgfSwge1xuICAgICAgICBsYWJlbDogXCJTY2FubmVyc1wiLFxuICAgICAgICBpY29uOiBTdW5JY29uLFxuICAgICAgICBjb2xvcjogXCIjZmZhMzAwXCJcbiAgICB9XG5dXG5cbmNvbnN0IENhdGVnb3JpZXMgPSAoKSA9PiB7XG4gICAgY29uc3QgWyBhY3RpdmVGaWx0ZXIsIHNldEFjdGl2ZUZpbHRlciBdID0gdXNlU3RhdGUobnVsbCk7XG5cbiAgICBjb25zdCBzZXRTZWxlY3RlZEZpaWx0ZXIgPSAoa2V5KSA9PiB7XG4gICAgICAgIHNldEFjdGl2ZUZpbHRlcihrZXkpO1xuICAgIH1cblxuXG4gICAgcmV0dXJuKFxuICAgICAgICAgICAgPEZsZXggd2lkdGg9XCI4MCVcIiBtYXJnaW49XCIwIGF1dG9cIiBwdD17NH0gbWI9ezR9IGFsaWduSXRlbXM9eydjZW50ZXInfSBqdXN0aWZ5Q29udGVudD17J3NwYWNlLWJldHdlZW4nfSBvdmVyZmxvd1g9eydhdXRvJ30+XG4gICAgICAgICAgICAgICAgeyBjYXRlZ29yaWVzLm1hcCgoaXRlbSwga2V5KSA9PiAoXG4gICAgICAgICAgICAgICAgICAgIDxGbGV4IGJhY2tncm91bmRDb2xvcj17YWN0aXZlRmlsdGVyID09PSBrZXkgPyBpdGVtLmNvbG9yIDogXCJub25lXCJ9IGJvcmRlclJhZGl1cz17JzQwcHgnfSBvbkNsaWNrPXsoKSA9PiBzZXRTZWxlY3RlZEZpaWx0ZXIoa2V5KX0gZmxleERpcj17J2NvbHVtbid9IGNvbG9yPVwid2hpdGVcIiBwPXszfSBhbGlnbkl0ZW1zPXsnY2VudGVyJ30gdGV4dEFsaWduPXsnY2VudGVyJ30+XG4gICAgICAgICAgICAgICAgICAgICAgICA8SWNvbiBhcz17aXRlbS5pY29ufSBmb250U2l6ZT17JzI2cHgnfSAvPiBcbiAgICAgICAgICAgICAgICAgICAgICAgIDxUZXh0IG1hcmdpblRvcD17M30gZm9udFdlaWdodD17J21lZGl1bSd9IGZvbnRTaXplPXsnc20nfT4geyBpdGVtLmxhYmVsfSA8L1RleHQ+XG4gICAgICAgICAgICAgICAgICAgIDwvRmxleD5cbiAgICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgIDwvRmxleD5cbiAgICApXG59XG5cblxuZXhwb3J0IGRlZmF1bHQgQ2F0ZWdvcmllczsiXSwibmFtZXMiOlsiTGlua0ljb24iLCJNb29uSWNvbiIsIlNwaW5uZXJJY29uIiwiU3VuSWNvbiIsIkNvbnRhaW5lciIsIkZsZXgiLCJJY29uIiwiVGV4dCIsIlJvdXRlckljb24iLCJ1c2VTdGF0ZSIsImNhdGVnb3JpZXMiLCJsYWJlbCIsImljb24iLCJjb2xvciIsIkNhdGVnb3JpZXMiLCJhY3RpdmVGaWx0ZXIiLCJzZXRBY3RpdmVGaWx0ZXIiLCJzZXRTZWxlY3RlZEZpaWx0ZXIiLCJrZXkiLCJ3aWR0aCIsIm1hcmdpbiIsInB0IiwibWIiLCJhbGlnbkl0ZW1zIiwianVzdGlmeUNvbnRlbnQiLCJvdmVyZmxvd1giLCJtYXAiLCJpdGVtIiwiYmFja2dyb3VuZENvbG9yIiwiYm9yZGVyUmFkaXVzIiwib25DbGljayIsImZsZXhEaXIiLCJwIiwidGV4dEFsaWduIiwiYXMiLCJmb250U2l6ZSIsIm1hcmdpblRvcCIsImZvbnRXZWlnaHQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/components/Category.new.js\n"));

/***/ })

});