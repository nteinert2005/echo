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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\nvar _this = undefined;\n\nvar _s = $RefreshSig$();\n\nvar DataLayer = function(param) {\n    var data = param.data;\n    var checkClickLocation = function checkClickLocation(x, y) {\n        for(var i = 0; i <= data.items.length; i++){\n            if (data.items[i].exactLocation.x === x && data.items[i].exactLocation.y === y) {\n                console.log(\"found a match\");\n                break;\n            }\n        }\n        console.log(\"no match\");\n    };\n    _s();\n    var canvasRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)();\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        var canvas = canvasRef.current;\n        var context = canvas.getContext(\"2d\");\n        canvas.height = 900;\n        canvas.width = 1600;\n        data.items.map(function(item) {\n            if (item.location === \"FountainAve\") {\n                context.beginPath();\n                context.arc(item.exactLocation.x, item.exactLocation.y, 5, 0, 2 * Math.PI);\n                if (item.type === \"computer\") {\n                    context.fillStyle = \"red\";\n                    context.fill();\n                    context.strokeStyle = \"red\";\n                    context.stroke();\n                } else {\n                    context.fillStyle = \"green\";\n                    context.fill();\n                    context.strokeStyle = \"green\";\n                    context.stroke();\n                }\n            }\n        });\n    }, []);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        var canvasEl = document.getElementById(\"dataCanvas\");\n        canvasEl.addEventListener(\"click\", function(event) {\n            var x = event.pageX - (canvasEl.offsetLeft + canvasEl.clientLeft);\n            var y = event.pageY - (canvasEl.offsetTop + canvasEl.clientTop);\n            checkClickLocation(x, y);\n        });\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"canvas\", {\n        id: \"dataCanvas\",\n        ref: canvasRef,\n        style: {\n            display: \"block\",\n            margin: \"0 auto\",\n            position: \"absolute\"\n        }\n    }, void 0, false, {\n        fileName: \"/home/nick/echo/pages/components/DataLayer.js\",\n        lineNumber: 62,\n        columnNumber: 13\n    }, _this);\n};\n_s(DataLayer, \"1O11hef6JMAr7xpSnL0aZ5Ib60Q=\");\n_c = DataLayer;\n/* harmony default export */ __webpack_exports__[\"default\"] = (DataLayer);\nvar _c;\n$RefreshReg$(_c, \"DataLayer\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LFFBQVEsQ0FBQ1UsU0FBUztZQUU5RHRDLGtCQUFrQixDQUFDQyxDQUFDLEVBQUVDLENBQUMsQ0FBQyxDQUFDO1FBQzdCLENBQUMsQ0FBQztJQUNGLENBQUMsRUFBRSxFQUFFLENBQUM7SUFFTixxQkFDUSw4REFBQ1EsUUFBTTtRQUFDNkIsRUFBRSxFQUFDLFlBQVk7UUFBQ0MsR0FBRyxFQUFFL0IsU0FBUztRQUFFZ0MsS0FBSyxFQUFFO1lBQUVDLE9BQU8sRUFBRSxPQUFPO1lBQUVDLE1BQU0sRUFBRSxRQUFRO1lBQUVDLFFBQVEsRUFBRSxVQUFVO1NBQUM7Ozs7O2FBQVcsQ0FFNUg7QUFDTCxDQUFDO0dBN0RLOUMsU0FBUztBQUFUQSxLQUFBQSxTQUFTO0FBZ0VmLCtEQUFlQSxTQUFTLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvY29tcG9uZW50cy9EYXRhTGF5ZXIuanM/YzY1ZCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVJlZiB9IGZyb20gXCJyZWFjdFwiO1xuXG5cbmNvbnN0IERhdGFMYXllciA9ICh7IGRhdGF9KSA9PiB7XG4gICAgY29uc3QgY2FudmFzUmVmID0gdXNlUmVmKCk7XG5cblxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIHZhciBjYW52YXMgPSBjYW52YXNSZWYuY3VycmVudDtcbiAgICAgICAgdmFyIGNvbnRleHQgPSBjYW52YXMuZ2V0Q29udGV4dCgnMmQnKTtcblxuXG4gICAgICAgIGNhbnZhcy5oZWlnaHQgPSA5MDA7XG4gICAgICAgIGNhbnZhcy53aWR0aCA9IDE2MDA7XG5cbiAgICAgICAgZGF0YS5pdGVtcy5tYXAoKGl0ZW0pID0+IHtcbiAgICAgICAgICAgIGlmKGl0ZW0ubG9jYXRpb24gPT09IFwiRm91bnRhaW5BdmVcIil7XG4gICAgICAgICAgICAgICAgY29udGV4dC5iZWdpblBhdGgoKTtcbiAgICAgICAgICAgICAgICBjb250ZXh0LmFyYyhpdGVtLmV4YWN0TG9jYXRpb24ueCxpdGVtLmV4YWN0TG9jYXRpb24ueSw1LDAsMiAqIE1hdGguUEkpO1xuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIGlmKGl0ZW0udHlwZSA9PT0gXCJjb21wdXRlclwiKXtcbiAgICAgICAgICAgICAgICAgICAgY29udGV4dC5maWxsU3R5bGUgPSBcInJlZFwiO1xuICAgICAgICAgICAgICAgICAgICBjb250ZXh0LmZpbGwoKTtcbiAgICAgICAgICAgICAgICAgICAgY29udGV4dC5zdHJva2VTdHlsZSA9IFwicmVkXCI7XG4gICAgICAgICAgICAgICAgICAgIGNvbnRleHQuc3Ryb2tlKCk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgY29udGV4dC5maWxsU3R5bGUgPSBcImdyZWVuXCI7XG4gICAgICAgICAgICAgICAgICAgIGNvbnRleHQuZmlsbCgpO1xuICAgICAgICAgICAgICAgICAgICBjb250ZXh0LnN0cm9rZVN0eWxlID0gXCJncmVlblwiO1xuICAgICAgICAgICAgICAgICAgICBjb250ZXh0LnN0cm9rZSgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSkgICAgICAgIFxuICAgIH0sIFtdKTtcblxuXG4gICAgZnVuY3Rpb24gY2hlY2tDbGlja0xvY2F0aW9uKHgseSl7XG4gICAgICAgIGZvcih2YXIgaSA9IDA7IGkgPD0gZGF0YS5pdGVtcy5sZW5ndGg7IGkrKyl7XG4gICAgICAgICAgXG4gICAgICAgICAgICAgICAgaWYoZGF0YS5pdGVtc1tpXS5leGFjdExvY2F0aW9uLnggPT09IHggJiYgZGF0YS5pdGVtc1tpXS5leGFjdExvY2F0aW9uLnkgPT09IHkpe1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdmb3VuZCBhIG1hdGNoJyk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnNvbGUubG9nKCdubyBtYXRjaCcpO1xuICAgIH1cblxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIHZhciBjYW52YXNFbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZGF0YUNhbnZhc1wiKVxuICAgIFxuICAgIGNhbnZhc0VsLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGV2ZW50KSA9PiB7XG4gICAgICAgIHZhciB4ID0gZXZlbnQucGFnZVggLSAoY2FudmFzRWwub2Zmc2V0TGVmdCArIGNhbnZhc0VsLmNsaWVudExlZnQpO1xuICAgICAgICB2YXIgeSA9IGV2ZW50LnBhZ2VZIC0gKGNhbnZhc0VsLm9mZnNldFRvcCArIGNhbnZhc0VsLmNsaWVudFRvcCk7XG4gICAgXG4gICAgICAgIGNoZWNrQ2xpY2tMb2NhdGlvbih4LCB5KTtcbiAgICB9KVxuICAgIH0sIFtdKVxuXG4gICAgcmV0dXJuKFxuICAgICAgICAgICAgPGNhbnZhcyBpZD1cImRhdGFDYW52YXNcIiByZWY9e2NhbnZhc1JlZn0gc3R5bGU9e3sgZGlzcGxheTogJ2Jsb2NrJywgbWFyZ2luOiAnMCBhdXRvJywgcG9zaXRpb246ICdhYnNvbHV0ZSd9fT48L2NhbnZhcz5cbiAgICAgICAgICBcbiAgICApXG59XG5cblxuZXhwb3J0IGRlZmF1bHQgRGF0YUxheWVyOyJdLCJuYW1lcyI6WyJ1c2VFZmZlY3QiLCJ1c2VSZWYiLCJEYXRhTGF5ZXIiLCJkYXRhIiwiY2hlY2tDbGlja0xvY2F0aW9uIiwieCIsInkiLCJpIiwiaXRlbXMiLCJsZW5ndGgiLCJleGFjdExvY2F0aW9uIiwiY29uc29sZSIsImxvZyIsImNhbnZhc1JlZiIsImNhbnZhcyIsImN1cnJlbnQiLCJjb250ZXh0IiwiZ2V0Q29udGV4dCIsImhlaWdodCIsIndpZHRoIiwibWFwIiwiaXRlbSIsImxvY2F0aW9uIiwiYmVnaW5QYXRoIiwiYXJjIiwiTWF0aCIsIlBJIiwidHlwZSIsImZpbGxTdHlsZSIsImZpbGwiLCJzdHJva2VTdHlsZSIsInN0cm9rZSIsImNhbnZhc0VsIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsImFkZEV2ZW50TGlzdGVuZXIiLCJldmVudCIsInBhZ2VYIiwib2Zmc2V0TGVmdCIsImNsaWVudExlZnQiLCJwYWdlWSIsIm9mZnNldFRvcCIsImNsaWVudFRvcCIsImlkIiwicmVmIiwic3R5bGUiLCJkaXNwbGF5IiwibWFyZ2luIiwicG9zaXRpb24iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/components/DataLayer.js\n"));

/***/ })

});