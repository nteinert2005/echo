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

/***/ "./pages/components/DataLayer.js":
/*!***************************************!*\
  !*** ./pages/components/DataLayer.js ***!
  \***************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\nvar _this = undefined;\n\nvar _s = $RefreshSig$();\n\nvar DataLayer = function(param) {\n    var data = param.data;\n    _s();\n    var canvasRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)();\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        var canvas = canvasRef.current;\n        var context = canvas.getContext(\"2d\");\n        canvas.height = 900;\n        canvas.width = 1600;\n        data.items.map(function(item) {\n            if (item.location === \"FountainAve\") {\n                context.beginPath();\n                context.arc(item.exactLocation.x, item.exactLocation.y, 10, 0, 2 * Math.PI);\n                context.fillStyle = \"red\";\n                context.fill();\n                context.strokeStyle = \"red\";\n                context.stroke();\n            }\n        });\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"canvas\", {\n        ref: canvasRef,\n        style: {\n            display: \"block\",\n            margin: \"0 auto\",\n            position: \"absolute\"\n        }\n    }, void 0, false, {\n        fileName: \"/home/nick/echo/pages/components/DataLayer.js\",\n        lineNumber: 29,\n        columnNumber: 13\n    }, _this);\n};\n_s(DataLayer, \"UJgi7ynoup7eqypjnwyX/s32POg=\");\n_c = DataLayer;\n/* harmony default export */ __webpack_exports__[\"default\"] = (DataLayer);\nvar _c;\n$RefreshReg$(_c, \"DataLayer\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9jb21wb25lbnRzL0RhdGFMYXllci5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUFBOzs7QUFBMEM7QUFHMUMsSUFBTUUsU0FBUyxHQUFHLGdCQUFhO1FBQVZDLElBQUksU0FBSkEsSUFBSTs7SUFDckIsSUFBTUMsU0FBUyxHQUFHSCw2Q0FBTSxFQUFFO0lBRzFCRCxnREFBUyxDQUFDLFdBQU07UUFDWixJQUFJSyxNQUFNLEdBQUdELFNBQVMsQ0FBQ0UsT0FBTztRQUM5QixJQUFJQyxPQUFPLEdBQUdGLE1BQU0sQ0FBQ0csVUFBVSxDQUFDLElBQUksQ0FBQztRQUdyQ0gsTUFBTSxDQUFDSSxNQUFNLEdBQUcsR0FBRyxDQUFDO1FBQ3BCSixNQUFNLENBQUNLLEtBQUssR0FBRyxJQUFJLENBQUM7UUFFcEJQLElBQUksQ0FBQ1EsS0FBSyxDQUFDQyxHQUFHLENBQUMsU0FBQ0MsSUFBSSxFQUFLO1lBQ3JCLElBQUdBLElBQUksQ0FBQ0MsUUFBUSxLQUFLLGFBQWEsRUFBQztnQkFDL0JQLE9BQU8sQ0FBQ1EsU0FBUyxFQUFFLENBQUM7Z0JBQ3BCUixPQUFPLENBQUNTLEdBQUcsQ0FBQ0gsSUFBSSxDQUFDSSxhQUFhLENBQUNDLENBQUMsRUFBQ0wsSUFBSSxDQUFDSSxhQUFhLENBQUNFLENBQUMsRUFBQyxFQUFFLEVBQUMsQ0FBQyxFQUFDLENBQUMsR0FBR0MsSUFBSSxDQUFDQyxFQUFFLENBQUMsQ0FBQztnQkFDeEVkLE9BQU8sQ0FBQ2UsU0FBUyxHQUFHLEtBQUssQ0FBQztnQkFDMUJmLE9BQU8sQ0FBQ2dCLElBQUksRUFBRSxDQUFDO2dCQUNmaEIsT0FBTyxDQUFDaUIsV0FBVyxHQUFHLEtBQUssQ0FBQztnQkFDNUJqQixPQUFPLENBQUNrQixNQUFNLEVBQUUsQ0FBQztZQUNyQixDQUFDO1FBQ0wsQ0FBQyxDQUFDO0lBQ04sQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDO0lBRVAscUJBQ1EsOERBQUNwQixRQUFNO1FBQUNxQixHQUFHLEVBQUV0QixTQUFTO1FBQUV1QixLQUFLLEVBQUU7WUFBRUMsT0FBTyxFQUFFLE9BQU87WUFBRUMsTUFBTSxFQUFFLFFBQVE7WUFBRUMsUUFBUSxFQUFFLFVBQVU7U0FBQzs7Ozs7YUFBVyxDQUU1RztBQUNMLENBQUM7R0E1Qks1QixTQUFTO0FBQVRBLEtBQUFBLFNBQVM7QUErQmYsK0RBQWVBLFNBQVMsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9jb21wb25lbnRzL0RhdGFMYXllci5qcz9jNjVkIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZUVmZmVjdCwgdXNlUmVmIH0gZnJvbSBcInJlYWN0XCI7XG5cblxuY29uc3QgRGF0YUxheWVyID0gKHsgZGF0YX0pID0+IHtcbiAgICBjb25zdCBjYW52YXNSZWYgPSB1c2VSZWYoKTtcblxuXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgdmFyIGNhbnZhcyA9IGNhbnZhc1JlZi5jdXJyZW50O1xuICAgICAgICB2YXIgY29udGV4dCA9IGNhbnZhcy5nZXRDb250ZXh0KCcyZCcpO1xuXG5cbiAgICAgICAgY2FudmFzLmhlaWdodCA9IDkwMDtcbiAgICAgICAgY2FudmFzLndpZHRoID0gMTYwMDtcblxuICAgICAgICBkYXRhLml0ZW1zLm1hcCgoaXRlbSkgPT4ge1xuICAgICAgICAgICAgaWYoaXRlbS5sb2NhdGlvbiA9PT0gXCJGb3VudGFpbkF2ZVwiKXtcbiAgICAgICAgICAgICAgICBjb250ZXh0LmJlZ2luUGF0aCgpO1xuICAgICAgICAgICAgICAgIGNvbnRleHQuYXJjKGl0ZW0uZXhhY3RMb2NhdGlvbi54LGl0ZW0uZXhhY3RMb2NhdGlvbi55LDEwLDAsMiAqIE1hdGguUEkpO1xuICAgICAgICAgICAgICAgIGNvbnRleHQuZmlsbFN0eWxlID0gXCJyZWRcIjtcbiAgICAgICAgICAgICAgICBjb250ZXh0LmZpbGwoKTtcbiAgICAgICAgICAgICAgICBjb250ZXh0LnN0cm9rZVN0eWxlID0gXCJyZWRcIjtcbiAgICAgICAgICAgICAgICBjb250ZXh0LnN0cm9rZSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KSAgICAgICAgXG4gICAgfSwgW10pO1xuXG4gICAgcmV0dXJuKFxuICAgICAgICAgICAgPGNhbnZhcyByZWY9e2NhbnZhc1JlZn0gc3R5bGU9e3sgZGlzcGxheTogJ2Jsb2NrJywgbWFyZ2luOiAnMCBhdXRvJywgcG9zaXRpb246ICdhYnNvbHV0ZSd9fT48L2NhbnZhcz5cbiAgICAgICAgICBcbiAgICApXG59XG5cblxuZXhwb3J0IGRlZmF1bHQgRGF0YUxheWVyOyJdLCJuYW1lcyI6WyJ1c2VFZmZlY3QiLCJ1c2VSZWYiLCJEYXRhTGF5ZXIiLCJkYXRhIiwiY2FudmFzUmVmIiwiY2FudmFzIiwiY3VycmVudCIsImNvbnRleHQiLCJnZXRDb250ZXh0IiwiaGVpZ2h0Iiwid2lkdGgiLCJpdGVtcyIsIm1hcCIsIml0ZW0iLCJsb2NhdGlvbiIsImJlZ2luUGF0aCIsImFyYyIsImV4YWN0TG9jYXRpb24iLCJ4IiwieSIsIk1hdGgiLCJQSSIsImZpbGxTdHlsZSIsImZpbGwiLCJzdHJva2VTdHlsZSIsInN0cm9rZSIsInJlZiIsInN0eWxlIiwiZGlzcGxheSIsIm1hcmdpbiIsInBvc2l0aW9uIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/components/DataLayer.js\n"));

/***/ })

});