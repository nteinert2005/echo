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

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @swc/helpers/src/_async_to_generator.mjs */ \"./node_modules/@swc/helpers/src/_async_to_generator.mjs\");\n/* harmony import */ var _swc_helpers_src_ts_generator_mjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @swc/helpers/src/_ts_generator.mjs */ \"./node_modules/@swc/helpers/src/_ts_generator.mjs\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @chakra-ui/react */ \"./node_modules/@chakra-ui/react/dist/chakra-ui-react.esm.js\");\n/* harmony import */ var _components_MapCanvas__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/MapCanvas */ \"./pages/components/MapCanvas.js\");\n/* harmony import */ var _components_DataLayer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/DataLayer */ \"./pages/components/DataLayer.js\");\n/* harmony import */ var _data_testData_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./data/testData.json */ \"./pages/data/testData.json\");\n/* harmony import */ var _components_DesktopMenu__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/DesktopMenu */ \"./pages/components/DesktopMenu.js\");\n/* harmony import */ var _components_FilterBy__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/FilterBy */ \"./pages/components/FilterBy.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n// default imports \n\n\nvar _this = undefined;\n\nvar _s = $RefreshSig$();\n\n// maps \n\n\n// data \n\n\n\n\n\n\nvar IndexPage = function(param) {\n    var isConnected = param.isConnected;\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_6__.useState)(\"all\"), filterData = ref[0], setFilterData = ref[1];\n    var fetchData = function() {\n        var _ref = (0,_swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_7__[\"default\"])(function() {\n            var res;\n            return (0,_swc_helpers_src_ts_generator_mjs__WEBPACK_IMPORTED_MODULE_8__[\"default\"])(this, function(_state) {\n                switch(_state.label){\n                    case 0:\n                        return [\n                            4,\n                            axios__WEBPACK_IMPORTED_MODULE_9__[\"default\"].get(\"/api/inventory/all\")\n                        ];\n                    case 1:\n                        res = _state.sent();\n                        return [\n                            2,\n                            res.data\n                        ];\n                }\n            });\n        });\n        return function fetchData() {\n            return _ref.apply(this, arguments);\n        };\n    }();\n    (0,react__WEBPACK_IMPORTED_MODULE_6__.useEffect)(/*#__PURE__*/ (0,_swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_7__[\"default\"])(function() {\n        var _$data;\n        return (0,_swc_helpers_src_ts_generator_mjs__WEBPACK_IMPORTED_MODULE_8__[\"default\"])(this, function(_state) {\n            switch(_state.label){\n                case 0:\n                    return [\n                        4,\n                        fetchData()\n                    ];\n                case 1:\n                    _$data = _state.sent();\n                    console.log(_$data);\n                    return [\n                        2\n                    ];\n            }\n        });\n    }), []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_DesktopMenu__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {}, void 0, false, {\n                fileName: \"/home/sirius/code/echo/pages/index.js\",\n                lineNumber: 34,\n                columnNumber: 9\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_10__.Flex, {\n                margin: \"0 auto\",\n                height: \"100%\",\n                style: {\n                    marginTop: \"-20px\"\n                },\n                width: \"100%\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_FilterBy__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                        setFilterData: setFilterData,\n                        filterData: filterData\n                    }, void 0, false, {\n                        fileName: \"/home/sirius/code/echo/pages/index.js\",\n                        lineNumber: 36,\n                        columnNumber: 13\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_MapCanvas__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                        map: \"images/bg.jpg\"\n                    }, void 0, false, {\n                        fileName: \"/home/sirius/code/echo/pages/index.js\",\n                        lineNumber: 37,\n                        columnNumber: 13\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_DataLayer__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                        data: _data_testData_json__WEBPACK_IMPORTED_MODULE_3__,\n                        filterData: filterData\n                    }, void 0, false, {\n                        fileName: \"/home/sirius/code/echo/pages/index.js\",\n                        lineNumber: 38,\n                        columnNumber: 13\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/sirius/code/echo/pages/index.js\",\n                lineNumber: 35,\n                columnNumber: 9\n            }, _this)\n        ]\n    }, void 0, true);\n};\n_s(IndexPage, \"o2zCMLoucUtOFAdFC2AJt4NDtBA=\");\n_c = IndexPage;\n/* harmony default export */ __webpack_exports__[\"default\"] = (IndexPage);\nvar _c;\n$RefreshReg$(_c, \"IndexPage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBLG1CQUFtQjtBQUNuQjs7Ozs7QUFBd0M7QUFFeEMsUUFBUTtBQUN1QztBQUNBO0FBRS9DLFFBQVE7QUFDZ0M7QUFDTTtBQUNEO0FBQ1o7QUFDQztBQUNSO0FBSTFCLElBQU1TLFNBQVMsR0FBRyxnQkFBcUI7UUFBbEJDLFdBQVcsU0FBWEEsV0FBVzs7SUFDNUIsSUFBb0NKLEdBQWUsR0FBZkEsK0NBQVEsQ0FBQyxLQUFLLENBQUMsRUFBNUNLLFVBQVUsR0FBbUJMLEdBQWUsR0FBbEMsRUFBRU0sYUFBYSxHQUFJTixHQUFlLEdBQW5CO0lBRWhDLElBQU1PLFNBQVM7bUJBQUcsK0ZBQVc7Z0JBQ25CQyxHQUFHOzs7O3dCQUFHOzs0QkFBTU4saURBQVMsQ0FBQyxvQkFBb0IsQ0FBQzswQkFBQTs7d0JBQTNDTSxHQUFHLEdBQUcsYUFBcUM7d0JBQ2pEOzs0QkFBT0EsR0FBRyxDQUFDWCxJQUFJOzBCQUFDOzs7UUFDcEIsQ0FBQzt3QkFIS1UsU0FBUzs7O09BR2Q7SUFHRE4sZ0RBQVMsZUFBQywrRkFBWTtZQUNaSixNQUFJOzs7O29CQUFHOzt3QkFBTVUsU0FBUyxFQUFFO3NCQUFBOztvQkFBeEJWLE1BQUksR0FBRyxhQUFpQjtvQkFDOUJhLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDZCxNQUFJLENBQUMsQ0FBQzs7Ozs7O0lBQ3RCLENBQUMsR0FBRSxFQUFFLENBQUMsQ0FBQztJQUVQLHFCQUNJOzswQkFDQSw4REFBQ0MsK0RBQU07Ozs7cUJBQUc7MEJBQ1YsOERBQUNKLG1EQUFJO2dCQUFDa0IsTUFBTSxFQUFDLFFBQVE7Z0JBQUNDLE1BQU0sRUFBQyxNQUFNO2dCQUFDQyxLQUFLLEVBQUU7b0JBQUVDLFNBQVMsRUFBRSxPQUFPO2lCQUFDO2dCQUFFQyxLQUFLLEVBQUMsTUFBTTs7a0NBQzFFLDhEQUFDakIsNERBQVE7d0JBQUNPLGFBQWEsRUFBRUEsYUFBYTt3QkFBRUQsVUFBVSxFQUFFQSxVQUFVOzs7Ozs2QkFBSTtrQ0FDbEUsOERBQUNWLDZEQUFTO3dCQUFDc0IsR0FBRyxFQUFFLGVBQWU7Ozs7OzZCQUFJO2tDQUNuQyw4REFBQ3JCLDZEQUFTO3dCQUFDQyxJQUFJLEVBQUVBLGdEQUFJO3dCQUFFUSxVQUFVLEVBQUVBLFVBQVU7Ozs7OzZCQUFJOzs7Ozs7cUJBQzlDOztvQkFDSixDQUNOO0FBQ0wsQ0FBQztHQXhCS0YsU0FBUztBQUFUQSxLQUFBQSxTQUFTO0FBMkJmLCtEQUFlQSxTQUFTLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanM/YmVlNyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBkZWZhdWx0IGltcG9ydHMgXG5pbXBvcnQgeyBGbGV4IH0gZnJvbSBcIkBjaGFrcmEtdWkvcmVhY3RcIjtcblxuLy8gbWFwcyBcbmltcG9ydCBNYXBDYW52YXMgZnJvbSBcIi4vY29tcG9uZW50cy9NYXBDYW52YXNcIjtcbmltcG9ydCBEYXRhTGF5ZXIgZnJvbSBcIi4vY29tcG9uZW50cy9EYXRhTGF5ZXJcIjtcblxuLy8gZGF0YSBcbmltcG9ydCBkYXRhIGZyb20gJy4vZGF0YS90ZXN0RGF0YS5qc29uJztcbmltcG9ydCBIZWFkZXIgZnJvbSBcIi4vY29tcG9uZW50cy9EZXNrdG9wTWVudVwiO1xuaW1wb3J0IEZpbHRlckJ5IGZyb20gXCIuL2NvbXBvbmVudHMvRmlsdGVyQnlcIjtcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcblxuXG5cbmNvbnN0IEluZGV4UGFnZSA9ICh7IGlzQ29ubmVjdGVkIH0pID0+IHtcbiAgICBjb25zdCBbZmlsdGVyRGF0YSwgc2V0RmlsdGVyRGF0YV0gPSB1c2VTdGF0ZShcImFsbFwiKTtcblxuICAgIGNvbnN0IGZldGNoRGF0YSA9IGFzeW5jKCkgPT4ge1xuICAgICAgICBjb25zdCByZXMgPSBhd2FpdCBheGlvcy5nZXQoJy9hcGkvaW52ZW50b3J5L2FsbCcpO1xuICAgICAgICByZXR1cm4gcmVzLmRhdGE7XG4gICAgfVxuXG5cbiAgICB1c2VFZmZlY3QoYXN5bmMgKCkgPT4ge1xuICAgICAgICBjb25zdCBkYXRhID0gYXdhaXQgZmV0Y2hEYXRhKCk7XG4gICAgICAgIGNvbnNvbGUubG9nKGRhdGEpO1xuICAgIH0sIFtdKTtcblxuICAgIHJldHVybihcbiAgICAgICAgPD5cbiAgICAgICAgPEhlYWRlciAvPiBcbiAgICAgICAgPEZsZXggbWFyZ2luPVwiMCBhdXRvXCIgaGVpZ2h0PVwiMTAwJVwiIHN0eWxlPXt7IG1hcmdpblRvcDogXCItMjBweFwifX0gd2lkdGg9XCIxMDAlXCI+XG4gICAgICAgICAgICA8RmlsdGVyQnkgc2V0RmlsdGVyRGF0YT17c2V0RmlsdGVyRGF0YX0gZmlsdGVyRGF0YT17ZmlsdGVyRGF0YX0gLz4gXG4gICAgICAgICAgICA8TWFwQ2FudmFzIG1hcD17J2ltYWdlcy9iZy5qcGcnfSAvPiAgICAgXG4gICAgICAgICAgICA8RGF0YUxheWVyIGRhdGE9e2RhdGF9IGZpbHRlckRhdGE9e2ZpbHRlckRhdGF9IC8+IFxuICAgICAgICA8L0ZsZXg+XG4gICAgICAgIDwvPlxuICAgIClcbn1cblxuXG5leHBvcnQgZGVmYXVsdCBJbmRleFBhZ2U7Il0sIm5hbWVzIjpbIkZsZXgiLCJNYXBDYW52YXMiLCJEYXRhTGF5ZXIiLCJkYXRhIiwiSGVhZGVyIiwiRmlsdGVyQnkiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsImF4aW9zIiwiSW5kZXhQYWdlIiwiaXNDb25uZWN0ZWQiLCJmaWx0ZXJEYXRhIiwic2V0RmlsdGVyRGF0YSIsImZldGNoRGF0YSIsInJlcyIsImdldCIsImNvbnNvbGUiLCJsb2ciLCJtYXJnaW4iLCJoZWlnaHQiLCJzdHlsZSIsIm1hcmdpblRvcCIsIndpZHRoIiwibWFwIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.js\n"));

/***/ })

});