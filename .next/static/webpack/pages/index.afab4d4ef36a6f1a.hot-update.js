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

/***/ "./pages/components/MapCanvas.js":
/*!***************************************!*\
  !*** ./pages/components/MapCanvas.js ***!
  \***************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\nvar _this = undefined;\n\nvar _s = $RefreshSig$();\n\nvar MapCanvas = function(param) {\n    var map = param.map;\n    _s();\n    var canvasRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)();\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        var canvas = canvasRef.current;\n        var context = canvas.getContext(\"2d\");\n        canvas.height = 900;\n        canvas.width = 1600;\n        var newMap = new Image();\n        newMap.onload = function() {\n            context.drawImage(newMap, 0, 0, newMap.width * 2.25, newMap.height * 2.25);\n        };\n        newMap.src = map;\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"canvas\", {\n        ref: canvasRef,\n        style: {\n            position: \"absolute\"\n        }\n    }, void 0, false, {\n        fileName: \"/home/nick/echo/pages/components/MapCanvas.js\",\n        lineNumber: 24,\n        columnNumber: 13\n    }, _this);\n};\n_s(MapCanvas, \"UJgi7ynoup7eqypjnwyX/s32POg=\");\n_c = MapCanvas;\n/* harmony default export */ __webpack_exports__[\"default\"] = (MapCanvas);\nvar _c;\n$RefreshReg$(_c, \"MapCanvas\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9jb21wb25lbnRzL01hcENhbnZhcy5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUFBOzs7QUFBMEM7QUFFMUMsSUFBTUUsU0FBUyxHQUFHLGdCQUFhO1FBQVZDLEdBQUcsU0FBSEEsR0FBRzs7SUFDcEIsSUFBTUMsU0FBUyxHQUFHSCw2Q0FBTSxFQUFFO0lBRzFCRCxnREFBUyxDQUFDLFdBQU07UUFDWixJQUFJSyxNQUFNLEdBQUdELFNBQVMsQ0FBQ0UsT0FBTztRQUM5QixJQUFJQyxPQUFPLEdBQUdGLE1BQU0sQ0FBQ0csVUFBVSxDQUFDLElBQUksQ0FBQztRQUdyQ0gsTUFBTSxDQUFDSSxNQUFNLEdBQUcsR0FBRyxDQUFDO1FBQ3BCSixNQUFNLENBQUNLLEtBQUssR0FBRyxJQUFJLENBQUM7UUFFcEIsSUFBSUMsTUFBTSxHQUFHLElBQUlDLEtBQUssRUFBRTtRQUN4QkQsTUFBTSxDQUFDRSxNQUFNLEdBQUcsV0FBTTtZQUNsQk4sT0FBTyxDQUFDTyxTQUFTLENBQUNILE1BQU0sRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFQSxNQUFNLENBQUNELEtBQUssR0FBRyxJQUFJLEVBQUVDLE1BQU0sQ0FBQ0YsTUFBTSxHQUFHLElBQUksQ0FBQztRQUM5RSxDQUFDLENBQUM7UUFFRkUsTUFBTSxDQUFDSSxHQUFHLEdBQUdaLEdBQUcsQ0FBQztJQUNyQixDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUM7SUFFUCxxQkFDUSw4REFBQ0UsUUFBTTtRQUFDVyxHQUFHLEVBQUVaLFNBQVM7UUFBRWEsS0FBSyxFQUFFO1lBQUNDLFFBQVEsRUFBRSxVQUFVO1NBQUM7Ozs7O2FBQVcsQ0FFdkU7QUFDTCxDQUFDO0dBeEJLaEIsU0FBUztBQUFUQSxLQUFBQSxTQUFTO0FBMkJmLCtEQUFlQSxTQUFTLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvY29tcG9uZW50cy9NYXBDYW52YXMuanM/ZDU4ZSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVJlZiB9IGZyb20gXCJyZWFjdFwiO1xuXG5jb25zdCBNYXBDYW52YXMgPSAoeyBtYXAgfSkgPT4ge1xuICAgIGNvbnN0IGNhbnZhc1JlZiA9IHVzZVJlZigpO1xuXG5cbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICB2YXIgY2FudmFzID0gY2FudmFzUmVmLmN1cnJlbnQ7XG4gICAgICAgIHZhciBjb250ZXh0ID0gY2FudmFzLmdldENvbnRleHQoJzJkJyk7XG5cblxuICAgICAgICBjYW52YXMuaGVpZ2h0ID0gOTAwO1xuICAgICAgICBjYW52YXMud2lkdGggPSAxNjAwO1xuXG4gICAgICAgIHZhciBuZXdNYXAgPSBuZXcgSW1hZ2UoKTtcbiAgICAgICAgbmV3TWFwLm9ubG9hZCA9ICgpID0+IHtcbiAgICAgICAgICAgIGNvbnRleHQuZHJhd0ltYWdlKG5ld01hcCwgMCwgMCwgbmV3TWFwLndpZHRoICogMi4yNSwgbmV3TWFwLmhlaWdodCAqIDIuMjUpXG4gICAgICAgIH07XG5cbiAgICAgICAgbmV3TWFwLnNyYyA9IG1hcDsgXG4gICAgfSwgW10pO1xuXG4gICAgcmV0dXJuKFxuICAgICAgICAgICAgPGNhbnZhcyByZWY9e2NhbnZhc1JlZn0gc3R5bGU9e3twb3NpdGlvbjogJ2Fic29sdXRlJ319PjwvY2FudmFzPlxuICAgICAgICAgIFxuICAgIClcbn1cblxuXG5leHBvcnQgZGVmYXVsdCBNYXBDYW52YXM7Il0sIm5hbWVzIjpbInVzZUVmZmVjdCIsInVzZVJlZiIsIk1hcENhbnZhcyIsIm1hcCIsImNhbnZhc1JlZiIsImNhbnZhcyIsImN1cnJlbnQiLCJjb250ZXh0IiwiZ2V0Q29udGV4dCIsImhlaWdodCIsIndpZHRoIiwibmV3TWFwIiwiSW1hZ2UiLCJvbmxvYWQiLCJkcmF3SW1hZ2UiLCJzcmMiLCJyZWYiLCJzdHlsZSIsInBvc2l0aW9uIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/components/MapCanvas.js\n"));

/***/ })

});