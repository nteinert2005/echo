"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages_components_Map_new_js",{

/***/ "./pages/components/Map.new.js":
/*!*************************************!*\
  !*** ./pages/components/Map.new.js ***!
  \*************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_leaflet__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-leaflet */ \"./node_modules/react-leaflet/lib/index.js\");\nvar _this = undefined;\n\n\n\n\nvar MapLayer = function() {\n    var position = [\n        41.131,\n        13.31\n    ];\n    var getClick = function(event) {\n        console.log(event);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_leaflet__WEBPACK_IMPORTED_MODULE_1__.MapContainer, {\n        onClick: function(event) {\n            return getClick(event);\n        },\n        center: [\n            0,\n            0\n        ],\n        zoom: 2,\n        scrollWheelZoom: false,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_leaflet__WEBPACK_IMPORTED_MODULE_1__.TileLayer, {\n                attribution: \"its offline\",\n                url: \"../images/SCPlant/{z}/{x}/{y}.png\"\n            }, void 0, false, {\n                fileName: \"/home/sirius/code/echo/pages/components/Map.new.js\",\n                lineNumber: 16,\n                columnNumber: 13\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_leaflet__WEBPACK_IMPORTED_MODULE_1__.Marker, {\n                position: position,\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_leaflet__WEBPACK_IMPORTED_MODULE_1__.Popup, {\n                    children: \"A pretty CSS3 popup.\"\n                }, void 0, false, {\n                    fileName: \"/home/sirius/code/echo/pages/components/Map.new.js\",\n                    lineNumber: 19,\n                    columnNumber: 17\n                }, _this)\n            }, void 0, false, {\n                fileName: \"/home/sirius/code/echo/pages/components/Map.new.js\",\n                lineNumber: 18,\n                columnNumber: 13\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/sirius/code/echo/pages/components/Map.new.js\",\n        lineNumber: 15,\n        columnNumber: 9\n    }, _this);\n};\n_c = MapLayer;\n/* harmony default export */ __webpack_exports__[\"default\"] = (MapLayer);\nvar _c;\n$RefreshReg$(_c, \"MapLayer\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9jb21wb25lbnRzL01hcC5uZXcuanMuanMiLCJtYXBwaW5ncyI6Ijs7OztBQUFBOztBQUE0RDtBQUNsQjtBQUNIO0FBR3ZDLElBQU1LLFFBQVEsR0FBRyxXQUFNO0lBQ25CLElBQU1DLFFBQVEsR0FBRztBQUFDLGNBQU07QUFBRSxhQUFLO0tBQUM7SUFFaEMsSUFBTUMsUUFBUSxHQUFHLFNBQUNDLEtBQUssRUFBSztRQUN4QkMsT0FBTyxDQUFDQyxHQUFHLENBQUNGLEtBQUssQ0FBQyxDQUFDO0lBQ3ZCLENBQUM7SUFHRCxxQkFDSSw4REFBQ1IsdURBQVk7UUFBQ1csT0FBTyxFQUFFLFNBQUNILEtBQUs7bUJBQUtELFFBQVEsQ0FBQ0MsS0FBSyxDQUFDO1NBQUE7UUFBRUksTUFBTSxFQUFFO0FBQUMsYUFBQztBQUFDLGFBQUM7U0FBQztRQUFFQyxJQUFJLEVBQUUsQ0FBQztRQUFFQyxlQUFlLEVBQUUsS0FBSzs7MEJBQzdGLDhEQUFDWCxvREFBUztnQkFBRVksV0FBVyxFQUFDLGFBQWE7Z0JBQUNDLEdBQUcsRUFBRSxtQ0FBbUM7Ozs7O3FCQUFJOzBCQUVsRiw4REFBQ2YsaURBQU07Z0JBQUNLLFFBQVEsRUFBRUEsUUFBUTswQkFDdEIsNEVBQUNKLGdEQUFLOzhCQUFDLHNCQUVQOzs7Ozt5QkFBUTs7Ozs7cUJBQ0g7Ozs7OzthQUNFLENBQ2xCO0FBQ0wsQ0FBQztBQW5CS0csS0FBQUEsUUFBUTtBQXNCZCwrREFBZUEsUUFBUSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2NvbXBvbmVudHMvTWFwLm5ldy5qcz80NTllIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE1hcENvbnRhaW5lciwgTWFya2VyLCBQb3B1cCB9IGZyb20gXCJyZWFjdC1sZWFmbGV0XCI7XG5pbXBvcnQgeyBUaWxlTGF5ZXIgfSBmcm9tIFwicmVhY3QtbGVhZmxldFwiO1xuaW1wb3J0IHsgdXNlTWFwIH0gZnJvbSBcInJlYWN0LWxlYWZsZXRcIjtcblxuXG5jb25zdCBNYXBMYXllciA9ICgpID0+IHtcbiAgICBjb25zdCBwb3NpdGlvbiA9IFs0MS4xMzEsIDEzLjMxXVxuXG4gICAgY29uc3QgZ2V0Q2xpY2sgPSAoZXZlbnQpID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coZXZlbnQpO1xuICAgIH1cblxuXG4gICAgcmV0dXJuKFxuICAgICAgICA8TWFwQ29udGFpbmVyIG9uQ2xpY2s9eyhldmVudCkgPT4gZ2V0Q2xpY2soZXZlbnQpfSBjZW50ZXI9e1swLDBdfSB6b29tPXsyfSBzY3JvbGxXaGVlbFpvb209e2ZhbHNlfT5cbiAgICAgICAgICAgIDxUaWxlTGF5ZXIgIGF0dHJpYnV0aW9uPVwiaXRzIG9mZmxpbmVcIiB1cmw9eycuLi9pbWFnZXMvU0NQbGFudC97en0ve3h9L3t5fS5wbmcnfSAvPlxuXG4gICAgICAgICAgICA8TWFya2VyIHBvc2l0aW9uPXtwb3NpdGlvbn0+XG4gICAgICAgICAgICAgICAgPFBvcHVwPlxuICAgICAgICAgICAgICAgICAgICBBIHByZXR0eSBDU1MzIHBvcHVwLlxuICAgICAgICAgICAgICAgIDwvUG9wdXA+XG4gICAgICAgICAgICA8L01hcmtlcj5cbiAgICAgICAgPC9NYXBDb250YWluZXI+XG4gICAgKVxufVxuXG5cbmV4cG9ydCBkZWZhdWx0IE1hcExheWVyOyJdLCJuYW1lcyI6WyJNYXBDb250YWluZXIiLCJNYXJrZXIiLCJQb3B1cCIsIlRpbGVMYXllciIsInVzZU1hcCIsIk1hcExheWVyIiwicG9zaXRpb24iLCJnZXRDbGljayIsImV2ZW50IiwiY29uc29sZSIsImxvZyIsIm9uQ2xpY2siLCJjZW50ZXIiLCJ6b29tIiwic2Nyb2xsV2hlZWxab29tIiwiYXR0cmlidXRpb24iLCJ1cmwiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/components/Map.new.js\n"));

/***/ })

});