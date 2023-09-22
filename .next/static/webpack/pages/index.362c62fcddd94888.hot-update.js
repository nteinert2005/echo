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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @swc/helpers/src/_async_to_generator.mjs */ \"./node_modules/@swc/helpers/src/_async_to_generator.mjs\");\n/* harmony import */ var _swc_helpers_src_ts_generator_mjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @swc/helpers/src/_ts_generator.mjs */ \"./node_modules/@swc/helpers/src/_ts_generator.mjs\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @chakra-ui/react */ \"./node_modules/@chakra-ui/react/dist/chakra-ui-react.esm.js\");\n/* harmony import */ var _components_MapCanvas__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/MapCanvas */ \"./pages/components/MapCanvas.js\");\n/* harmony import */ var _components_DataLayer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/DataLayer */ \"./pages/components/DataLayer.js\");\n/* harmony import */ var _components_DesktopMenu__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/DesktopMenu */ \"./pages/components/DesktopMenu.js\");\n/* harmony import */ var _components_FilterBy__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/FilterBy */ \"./pages/components/FilterBy.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n// default imports \n\n\nvar _this = undefined;\n\nvar _s = $RefreshSig$();\n\n// maps \n\n\n// data \n\n\n\n\n\nvar IndexPage = function(param) {\n    var isConnected = param.isConnected;\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)(\"all\"), filterData = ref[0], setFilterData = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)(null), data = ref1[0], setData = ref1[1];\n    var fetchData = function() {\n        var _ref = (0,_swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(function() {\n            var res;\n            return (0,_swc_helpers_src_ts_generator_mjs__WEBPACK_IMPORTED_MODULE_7__[\"default\"])(this, function(_state) {\n                switch(_state.label){\n                    case 0:\n                        return [\n                            4,\n                            axios__WEBPACK_IMPORTED_MODULE_8__[\"default\"].get(\"/api/inventory/all\")\n                        ];\n                    case 1:\n                        res = _state.sent();\n                        return [\n                            2,\n                            res.data\n                        ];\n                }\n            });\n        });\n        return function fetchData() {\n            return _ref.apply(this, arguments);\n        };\n    }();\n    (0,react__WEBPACK_IMPORTED_MODULE_5__.useEffect)(/*#__PURE__*/ (0,_swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(function() {\n        var fetchedData;\n        return (0,_swc_helpers_src_ts_generator_mjs__WEBPACK_IMPORTED_MODULE_7__[\"default\"])(this, function(_state) {\n            switch(_state.label){\n                case 0:\n                    return [\n                        4,\n                        fetchData()\n                    ];\n                case 1:\n                    fetchedData = _state.sent();\n                    setData(fetchData);\n                    return [\n                        2\n                    ];\n            }\n        });\n    }), []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_DesktopMenu__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, void 0, false, {\n                fileName: \"/home/sirius/code/echo/pages/index.js\",\n                lineNumber: 34,\n                columnNumber: 9\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_9__.Flex, {\n                margin: \"0 auto\",\n                height: \"100%\",\n                style: {\n                    marginTop: \"-20px\"\n                },\n                width: \"100%\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_FilterBy__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                        setFilterData: setFilterData,\n                        filterData: filterData\n                    }, void 0, false, {\n                        fileName: \"/home/sirius/code/echo/pages/index.js\",\n                        lineNumber: 36,\n                        columnNumber: 13\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_MapCanvas__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                        map: \"images/bg.jpg\"\n                    }, void 0, false, {\n                        fileName: \"/home/sirius/code/echo/pages/index.js\",\n                        lineNumber: 37,\n                        columnNumber: 13\n                    }, _this),\n                    data !== null && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_DataLayer__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                        data: data,\n                        filterData: filterData\n                    }, void 0, false, {\n                        fileName: \"/home/sirius/code/echo/pages/index.js\",\n                        lineNumber: 38,\n                        columnNumber: 32\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/sirius/code/echo/pages/index.js\",\n                lineNumber: 35,\n                columnNumber: 9\n            }, _this)\n        ]\n    }, void 0, true);\n};\n_s(IndexPage, \"qHCMj4XwB2H8vGtDWsTHccOGRx0=\");\n_c = IndexPage;\n/* harmony default export */ __webpack_exports__[\"default\"] = (IndexPage);\nvar _c;\n$RefreshReg$(_c, \"IndexPage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQUEsbUJBQW1CO0FBQ25COzs7OztBQUF3QztBQUV4QyxRQUFRO0FBQ3VDO0FBQ0E7QUFFL0MsUUFBUTtBQUNzQztBQUNEO0FBQ1o7QUFDQztBQUNSO0FBSTFCLElBQU1RLFNBQVMsR0FBRyxnQkFBcUI7UUFBbEJDLFdBQVcsU0FBWEEsV0FBVzs7SUFDNUIsSUFBb0NKLEdBQWUsR0FBZkEsK0NBQVEsQ0FBQyxLQUFLLENBQUMsRUFBNUNLLFVBQVUsR0FBbUJMLEdBQWUsR0FBbEMsRUFBRU0sYUFBYSxHQUFJTixHQUFlLEdBQW5CO0lBQ2hDLElBQTBCQSxJQUFjLEdBQWRBLCtDQUFRLENBQUMsSUFBSSxDQUFDLEVBQWhDTyxJQUFJLEdBQWNQLElBQWMsR0FBNUIsRUFBRVEsT0FBTyxHQUFLUixJQUFjLEdBQW5CO0lBRXJCLElBQU1TLFNBQVM7bUJBQUcsK0ZBQVc7Z0JBQ25CQyxHQUFHOzs7O3dCQUFHOzs0QkFBTVIsaURBQVMsQ0FBQyxvQkFBb0IsQ0FBQzswQkFBQTs7d0JBQTNDUSxHQUFHLEdBQUcsYUFBcUM7d0JBQ2pEOzs0QkFBT0EsR0FBRyxDQUFDSCxJQUFJOzBCQUFDOzs7UUFDcEIsQ0FBQzt3QkFIS0UsU0FBUzs7O09BR2Q7SUFHRFIsZ0RBQVMsZUFBQywrRkFBWTtZQUNaVyxXQUFXOzs7O29CQUFHOzt3QkFBTUgsU0FBUyxFQUFFO3NCQUFBOztvQkFBL0JHLFdBQVcsR0FBRyxhQUFpQjtvQkFDckNKLE9BQU8sQ0FBQ0MsU0FBUyxDQUFDLENBQUM7Ozs7OztJQUN2QixDQUFDLEdBQUUsRUFBRSxDQUFDLENBQUM7SUFFUCxxQkFDSTs7MEJBQ0EsOERBQUNYLCtEQUFNOzs7O3FCQUFHOzBCQUNWLDhEQUFDSCxrREFBSTtnQkFBQ2tCLE1BQU0sRUFBQyxRQUFRO2dCQUFDQyxNQUFNLEVBQUMsTUFBTTtnQkFBQ0MsS0FBSyxFQUFFO29CQUFFQyxTQUFTLEVBQUUsT0FBTztpQkFBQztnQkFBRUMsS0FBSyxFQUFDLE1BQU07O2tDQUMxRSw4REFBQ2xCLDREQUFRO3dCQUFDTyxhQUFhLEVBQUVBLGFBQWE7d0JBQUVELFVBQVUsRUFBRUEsVUFBVTs7Ozs7NkJBQUk7a0NBQ2xFLDhEQUFDVCw2REFBUzt3QkFBQ3NCLEdBQUcsRUFBRSxlQUFlOzs7Ozs2QkFBSTtvQkFDakNYLElBQUksS0FBSyxJQUFJLGtCQUFJLDhEQUFDViw2REFBUzt3QkFBQ1UsSUFBSSxFQUFFQSxJQUFJO3dCQUFFRixVQUFVLEVBQUVBLFVBQVU7Ozs7OzZCQUFJOzs7Ozs7cUJBQ2pFOztvQkFDSixDQUNOO0FBQ0wsQ0FBQztHQXpCS0YsU0FBUztBQUFUQSxLQUFBQSxTQUFTO0FBNEJmLCtEQUFlQSxTQUFTLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanM/YmVlNyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBkZWZhdWx0IGltcG9ydHMgXG5pbXBvcnQgeyBGbGV4IH0gZnJvbSBcIkBjaGFrcmEtdWkvcmVhY3RcIjtcblxuLy8gbWFwcyBcbmltcG9ydCBNYXBDYW52YXMgZnJvbSBcIi4vY29tcG9uZW50cy9NYXBDYW52YXNcIjtcbmltcG9ydCBEYXRhTGF5ZXIgZnJvbSBcIi4vY29tcG9uZW50cy9EYXRhTGF5ZXJcIjtcblxuLy8gZGF0YSBcbmltcG9ydCBIZWFkZXIgZnJvbSBcIi4vY29tcG9uZW50cy9EZXNrdG9wTWVudVwiO1xuaW1wb3J0IEZpbHRlckJ5IGZyb20gXCIuL2NvbXBvbmVudHMvRmlsdGVyQnlcIjtcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcblxuXG5cbmNvbnN0IEluZGV4UGFnZSA9ICh7IGlzQ29ubmVjdGVkIH0pID0+IHtcbiAgICBjb25zdCBbZmlsdGVyRGF0YSwgc2V0RmlsdGVyRGF0YV0gPSB1c2VTdGF0ZShcImFsbFwiKTtcbiAgICBjb25zdCBbIGRhdGEsIHNldERhdGEgXSA9IHVzZVN0YXRlKG51bGwpO1xuXG4gICAgY29uc3QgZmV0Y2hEYXRhID0gYXN5bmMoKSA9PiB7XG4gICAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IGF4aW9zLmdldCgnL2FwaS9pbnZlbnRvcnkvYWxsJyk7XG4gICAgICAgIHJldHVybiByZXMuZGF0YTtcbiAgICB9XG5cblxuICAgIHVzZUVmZmVjdChhc3luYyAoKSA9PiB7XG4gICAgICAgIGNvbnN0IGZldGNoZWREYXRhID0gYXdhaXQgZmV0Y2hEYXRhKCk7XG4gICAgICAgIHNldERhdGEoZmV0Y2hEYXRhKTtcbiAgICB9LCBbXSk7XG5cbiAgICByZXR1cm4oXG4gICAgICAgIDw+XG4gICAgICAgIDxIZWFkZXIgLz4gXG4gICAgICAgIDxGbGV4IG1hcmdpbj1cIjAgYXV0b1wiIGhlaWdodD1cIjEwMCVcIiBzdHlsZT17eyBtYXJnaW5Ub3A6IFwiLTIwcHhcIn19IHdpZHRoPVwiMTAwJVwiPlxuICAgICAgICAgICAgPEZpbHRlckJ5IHNldEZpbHRlckRhdGE9e3NldEZpbHRlckRhdGF9IGZpbHRlckRhdGE9e2ZpbHRlckRhdGF9IC8+IFxuICAgICAgICAgICAgPE1hcENhbnZhcyBtYXA9eydpbWFnZXMvYmcuanBnJ30gLz4gICAgIFxuICAgICAgICAgICAgeyBkYXRhICE9PSBudWxsICYmIDxEYXRhTGF5ZXIgZGF0YT17ZGF0YX0gZmlsdGVyRGF0YT17ZmlsdGVyRGF0YX0gLz4gIH1cbiAgICAgICAgPC9GbGV4PlxuICAgICAgICA8Lz5cbiAgICApXG59XG5cblxuZXhwb3J0IGRlZmF1bHQgSW5kZXhQYWdlOyJdLCJuYW1lcyI6WyJGbGV4IiwiTWFwQ2FudmFzIiwiRGF0YUxheWVyIiwiSGVhZGVyIiwiRmlsdGVyQnkiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsImF4aW9zIiwiSW5kZXhQYWdlIiwiaXNDb25uZWN0ZWQiLCJmaWx0ZXJEYXRhIiwic2V0RmlsdGVyRGF0YSIsImRhdGEiLCJzZXREYXRhIiwiZmV0Y2hEYXRhIiwicmVzIiwiZ2V0IiwiZmV0Y2hlZERhdGEiLCJtYXJnaW4iLCJoZWlnaHQiLCJzdHlsZSIsIm1hcmdpblRvcCIsIndpZHRoIiwibWFwIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.js\n"));

/***/ })

});