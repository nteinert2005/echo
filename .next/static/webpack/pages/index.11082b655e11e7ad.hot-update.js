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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\nvar _this = undefined;\n\nvar _s = $RefreshSig$();\n\nvar DataLayer = function(param) {\n    var data = param.data;\n    var checkClickLocation = function checkClickLocation(x, y) {\n        data.items.forEach(function(element) {\n            if (Math.pow(x - element.exactLocation.x, 2) + Math.pow(y - element.exactLocation.y, 2) < Math.pow(10, 2)) {\n                return element;\n            }\n        });\n    };\n    _s();\n    var canvasRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)();\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        var canvas = canvasRef.current;\n        var context = canvas.getContext(\"2d\");\n        canvas.height = 900;\n        canvas.width = 1600;\n        data.items.map(function(item) {\n            if (item.location === \"FountainAve\") {\n                context.beginPath();\n                context.arc(item.exactLocation.x, item.exactLocation.y, 10, 0, 2 * Math.PI);\n                if (item.type === \"computer\") {\n                    context.fillStyle = \"red\";\n                    context.fill();\n                    context.strokeStyle = \"red\";\n                    context.stroke();\n                } else {\n                    context.fillStyle = \"green\";\n                    context.fill();\n                    context.strokeStyle = \"green\";\n                    context.stroke();\n                }\n            }\n        });\n    }, []);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        var canvasEl = document.getElementById(\"dataCanvas\");\n        canvasEl.addEventListener(\"click\", function(event) {\n            var x = event.pageX - (canvasEl.offsetLeft + canvasEl.clientLeft);\n            var y = event.pageY - (canvasEl.offsetTop + canvasEl.clientTop);\n            var elementPopup = checkClickLocation(x, y);\n            if (elementPopup !== null) {\n                console.log(\"popup goes here\");\n            } else {\n                console.log(\"no popup\");\n            }\n        });\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"canvas\", {\n        id: \"dataCanvas\",\n        ref: canvasRef,\n        style: {\n            display: \"block\",\n            margin: \"0 auto\",\n            position: \"absolute\"\n        }\n    }, void 0, false, {\n        fileName: \"/home/nick/echo/pages/components/DataLayer.js\",\n        lineNumber: 63,\n        columnNumber: 13\n    }, _this);\n};\n_s(DataLayer, \"1O11hef6JMAr7xpSnL0aZ5Ib60Q=\");\n_c = DataLayer;\n/* harmony default export */ __webpack_exports__[\"default\"] = (DataLayer);\nvar _c;\n$RefreshReg$(_c, \"DataLayer\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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a0JBQWtCLENBQUNDLENBQUMsRUFBQ0MsQ0FBQyxDQUFDO1lBRTFDLElBQUdvQyxZQUFZLEtBQUssSUFBSSxFQUFDO2dCQUNyQkMsT0FBTyxDQUFDQyxHQUFHLENBQUMsaUJBQWlCLENBQUMsQ0FBQztZQUNuQyxPQUFPO2dCQUNIRCxPQUFPLENBQUNDLEdBQUcsQ0FBQyxVQUFVLENBQUMsQ0FBQztZQUM1QixDQUFDO1FBQ0wsQ0FBQyxDQUFDO0lBQ0YsQ0FBQyxFQUFFLEVBQUUsQ0FBQztJQUVOLHFCQUNRLDhEQUFDOUIsUUFBTTtRQUFDK0IsRUFBRSxFQUFDLFlBQVk7UUFBQ0MsR0FBRyxFQUFFakMsU0FBUztRQUFFa0MsS0FBSyxFQUFFO1lBQUVDLE9BQU8sRUFBRSxPQUFPO1lBQUVDLE1BQU0sRUFBRSxRQUFRO1lBQUVDLFFBQVEsRUFBRSxVQUFVO1NBQUM7Ozs7O2FBQVcsQ0FFNUg7QUFDTCxDQUFDO0dBOURLaEQsU0FBUztBQUFUQSxLQUFBQSxTQUFTO0FBaUVmLCtEQUFlQSxTQUFTLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvY29tcG9uZW50cy9EYXRhTGF5ZXIuanM/YzY1ZCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVJlZiB9IGZyb20gXCJyZWFjdFwiO1xuXG5cbmNvbnN0IERhdGFMYXllciA9ICh7IGRhdGF9KSA9PiB7XG4gICAgY29uc3QgY2FudmFzUmVmID0gdXNlUmVmKCk7XG5cblxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIHZhciBjYW52YXMgPSBjYW52YXNSZWYuY3VycmVudDtcbiAgICAgICAgdmFyIGNvbnRleHQgPSBjYW52YXMuZ2V0Q29udGV4dCgnMmQnKTtcblxuXG4gICAgICAgIGNhbnZhcy5oZWlnaHQgPSA5MDA7XG4gICAgICAgIGNhbnZhcy53aWR0aCA9IDE2MDA7XG5cbiAgICAgICAgZGF0YS5pdGVtcy5tYXAoKGl0ZW0pID0+IHtcbiAgICAgICAgICAgIGlmKGl0ZW0ubG9jYXRpb24gPT09IFwiRm91bnRhaW5BdmVcIil7XG4gICAgICAgICAgICAgICAgY29udGV4dC5iZWdpblBhdGgoKTtcbiAgICAgICAgICAgICAgICBjb250ZXh0LmFyYyhpdGVtLmV4YWN0TG9jYXRpb24ueCxpdGVtLmV4YWN0TG9jYXRpb24ueSwxMCwwLDIgKiBNYXRoLlBJKTtcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICBpZihpdGVtLnR5cGUgPT09IFwiY29tcHV0ZXJcIil7XG4gICAgICAgICAgICAgICAgICAgIGNvbnRleHQuZmlsbFN0eWxlID0gXCJyZWRcIjtcbiAgICAgICAgICAgICAgICAgICAgY29udGV4dC5maWxsKCk7XG4gICAgICAgICAgICAgICAgICAgIGNvbnRleHQuc3Ryb2tlU3R5bGUgPSBcInJlZFwiO1xuICAgICAgICAgICAgICAgICAgICBjb250ZXh0LnN0cm9rZSgpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnRleHQuZmlsbFN0eWxlID0gXCJncmVlblwiO1xuICAgICAgICAgICAgICAgICAgICBjb250ZXh0LmZpbGwoKTtcbiAgICAgICAgICAgICAgICAgICAgY29udGV4dC5zdHJva2VTdHlsZSA9IFwiZ3JlZW5cIjtcbiAgICAgICAgICAgICAgICAgICAgY29udGV4dC5zdHJva2UoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pICAgICAgICBcbiAgICB9LCBbXSk7XG5cblxuICAgIGZ1bmN0aW9uIGNoZWNrQ2xpY2tMb2NhdGlvbih4LHkpe1xuICAgICAgICBkYXRhLml0ZW1zLmZvckVhY2goZWxlbWVudCA9PiB7XG4gICAgICAgICAgICBpZihNYXRoLnBvdyh4LWVsZW1lbnQuZXhhY3RMb2NhdGlvbi54LCAyKSArIE1hdGgucG93KHktZWxlbWVudC5leGFjdExvY2F0aW9uLnksIDIpIDwgTWF0aC5wb3coMTAsIDIpKXtcbiAgICAgICAgICAgICAgICByZXR1cm4gZWxlbWVudDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgdmFyIGNhbnZhc0VsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJkYXRhQ2FudmFzXCIpXG4gICAgXG4gICAgY2FudmFzRWwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZXZlbnQpID0+IHtcbiAgICAgICAgdmFyIHggPSBldmVudC5wYWdlWCAtIChjYW52YXNFbC5vZmZzZXRMZWZ0ICsgY2FudmFzRWwuY2xpZW50TGVmdCk7XG4gICAgICAgIHZhciB5ID0gZXZlbnQucGFnZVkgLSAoY2FudmFzRWwub2Zmc2V0VG9wICsgY2FudmFzRWwuY2xpZW50VG9wKTtcbiAgICBcbiAgICAgICAgdmFyIGVsZW1lbnRQb3B1cCA9IGNoZWNrQ2xpY2tMb2NhdGlvbih4LHkpO1xuXG4gICAgICAgIGlmKGVsZW1lbnRQb3B1cCAhPT0gbnVsbCl7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygncG9wdXAgZ29lcyBoZXJlJyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygnbm8gcG9wdXAnKTtcbiAgICAgICAgfVxuICAgIH0pXG4gICAgfSwgW10pXG5cbiAgICByZXR1cm4oXG4gICAgICAgICAgICA8Y2FudmFzIGlkPVwiZGF0YUNhbnZhc1wiIHJlZj17Y2FudmFzUmVmfSBzdHlsZT17eyBkaXNwbGF5OiAnYmxvY2snLCBtYXJnaW46ICcwIGF1dG8nLCBwb3NpdGlvbjogJ2Fic29sdXRlJ319PjwvY2FudmFzPlxuICAgICAgICAgIFxuICAgIClcbn1cblxuXG5leHBvcnQgZGVmYXVsdCBEYXRhTGF5ZXI7Il0sIm5hbWVzIjpbInVzZUVmZmVjdCIsInVzZVJlZiIsIkRhdGFMYXllciIsImRhdGEiLCJjaGVja0NsaWNrTG9jYXRpb24iLCJ4IiwieSIsIml0ZW1zIiwiZm9yRWFjaCIsImVsZW1lbnQiLCJNYXRoIiwicG93IiwiZXhhY3RMb2NhdGlvbiIsImNhbnZhc1JlZiIsImNhbnZhcyIsImN1cnJlbnQiLCJjb250ZXh0IiwiZ2V0Q29udGV4dCIsImhlaWdodCIsIndpZHRoIiwibWFwIiwiaXRlbSIsImxvY2F0aW9uIiwiYmVnaW5QYXRoIiwiYXJjIiwiUEkiLCJ0eXBlIiwiZmlsbFN0eWxlIiwiZmlsbCIsInN0cm9rZVN0eWxlIiwic3Ryb2tlIiwiY2FudmFzRWwiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwiYWRkRXZlbnRMaXN0ZW5lciIsImV2ZW50IiwicGFnZVgiLCJvZmZzZXRMZWZ0IiwiY2xpZW50TGVmdCIsInBhZ2VZIiwib2Zmc2V0VG9wIiwiY2xpZW50VG9wIiwiZWxlbWVudFBvcHVwIiwiY29uc29sZSIsImxvZyIsImlkIiwicmVmIiwic3R5bGUiLCJkaXNwbGF5IiwibWFyZ2luIiwicG9zaXRpb24iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/components/DataLayer.js\n"));

/***/ })

});