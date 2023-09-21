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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\nvar _this = undefined;\n\nvar _s = $RefreshSig$();\n\nvar DataLayer = function(param) {\n    var data = param.data;\n    var checkClickLocation = function checkClickLocation(x, y) {\n        for(var i = 0; i < data.items.length + 1; i++){\n            if (data.items[i] !== undefined) {\n                if (data.items[i].exactLocation.x === x && data.items[i].exactLocation.y === y) {\n                    console.log(\"found a match\");\n                    break;\n                }\n            }\n        }\n        console.log(\"no match\");\n    };\n    _s();\n    var canvasRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)();\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        var canvas = canvasRef.current;\n        var context = canvas.getContext(\"2d\");\n        canvas.height = 900;\n        canvas.width = 1600;\n        data.items.map(function(item) {\n            if (item.location === \"FountainAve\") {\n                context.beginPath();\n                context.arc(item.exactLocation.x, item.exactLocation.y, 5, 0, 2 * Math.PI);\n                if (item.type === \"computer\") {\n                    context.fillStyle = \"red\";\n                    context.fill();\n                    context.strokeStyle = \"red\";\n                    context.stroke();\n                } else {\n                    context.fillStyle = \"green\";\n                    context.fill();\n                    context.strokeStyle = \"green\";\n                    context.stroke();\n                }\n            }\n        });\n    }, []);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        var canvasEl = document.getElementById(\"dataCanvas\");\n        canvasEl.addEventListener(\"click\", function(event) {\n            var x = event.pageX - (canvasEl.offsetLeft + canvasEl.clientLeft);\n            var y = event.pageY - (canvasEl.offsetTop + canvasEl.clientTop);\n            checkClickLocation(x, y);\n        });\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"canvas\", {\n        id: \"dataCanvas\",\n        ref: canvasRef,\n        style: {\n            display: \"block\",\n            margin: \"0 auto\",\n            position: \"absolute\"\n        }\n    }, void 0, false, {\n        fileName: \"/home/nick/echo/pages/components/DataLayer.js\",\n        lineNumber: 63,\n        columnNumber: 13\n    }, _this);\n};\n_s(DataLayer, \"1O11hef6JMAr7xpSnL0aZ5Ib60Q=\");\n_c = DataLayer;\n/* harmony default export */ __webpack_exports__[\"default\"] = (DataLayer);\nvar _c;\n$RefreshReg$(_c, \"DataLayer\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q08sVUFBVTtZQUNoRSxJQUFJbEMsQ0FBQyxHQUFHK0IsS0FBSyxDQUFDSSxLQUFLLEdBQUlSLENBQUFBLFFBQVEsQ0FBQ1MsU0FBUyxHQUFHVCxRQUFRLENBQUNVLFNBQVM7WUFFOUR2QyxrQkFBa0IsQ0FBQ0MsQ0FBQyxFQUFFQyxDQUFDLENBQUMsQ0FBQztRQUM3QixDQUFDLENBQUM7SUFDRixDQUFDLEVBQUUsRUFBRSxDQUFDO0lBRU4scUJBQ1EsOERBQUNTLFFBQU07UUFBQzZCLEVBQUUsRUFBQyxZQUFZO1FBQUNDLEdBQUcsRUFBRS9CLFNBQVM7UUFBRWdDLEtBQUssRUFBRTtZQUFFQyxPQUFPLEVBQUUsT0FBTztZQUFFQyxNQUFNLEVBQUUsUUFBUTtZQUFFQyxRQUFRLEVBQUUsVUFBVTtTQUFDOzs7OzthQUFXLENBRTVIO0FBQ0wsQ0FBQztHQTlESy9DLFNBQVM7QUFBVEEsS0FBQUEsU0FBUztBQWlFZiwrREFBZUEsU0FBUyxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2NvbXBvbmVudHMvRGF0YUxheWVyLmpzP2M2NWQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VSZWYgfSBmcm9tIFwicmVhY3RcIjtcblxuXG5jb25zdCBEYXRhTGF5ZXIgPSAoeyBkYXRhfSkgPT4ge1xuICAgIGNvbnN0IGNhbnZhc1JlZiA9IHVzZVJlZigpO1xuXG5cbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICB2YXIgY2FudmFzID0gY2FudmFzUmVmLmN1cnJlbnQ7XG4gICAgICAgIHZhciBjb250ZXh0ID0gY2FudmFzLmdldENvbnRleHQoJzJkJyk7XG5cblxuICAgICAgICBjYW52YXMuaGVpZ2h0ID0gOTAwO1xuICAgICAgICBjYW52YXMud2lkdGggPSAxNjAwO1xuXG4gICAgICAgIGRhdGEuaXRlbXMubWFwKChpdGVtKSA9PiB7XG4gICAgICAgICAgICBpZihpdGVtLmxvY2F0aW9uID09PSBcIkZvdW50YWluQXZlXCIpe1xuICAgICAgICAgICAgICAgIGNvbnRleHQuYmVnaW5QYXRoKCk7XG4gICAgICAgICAgICAgICAgY29udGV4dC5hcmMoaXRlbS5leGFjdExvY2F0aW9uLngsaXRlbS5leGFjdExvY2F0aW9uLnksNSwwLDIgKiBNYXRoLlBJKTtcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICBpZihpdGVtLnR5cGUgPT09IFwiY29tcHV0ZXJcIil7XG4gICAgICAgICAgICAgICAgICAgIGNvbnRleHQuZmlsbFN0eWxlID0gXCJyZWRcIjtcbiAgICAgICAgICAgICAgICAgICAgY29udGV4dC5maWxsKCk7XG4gICAgICAgICAgICAgICAgICAgIGNvbnRleHQuc3Ryb2tlU3R5bGUgPSBcInJlZFwiO1xuICAgICAgICAgICAgICAgICAgICBjb250ZXh0LnN0cm9rZSgpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnRleHQuZmlsbFN0eWxlID0gXCJncmVlblwiO1xuICAgICAgICAgICAgICAgICAgICBjb250ZXh0LmZpbGwoKTtcbiAgICAgICAgICAgICAgICAgICAgY29udGV4dC5zdHJva2VTdHlsZSA9IFwiZ3JlZW5cIjtcbiAgICAgICAgICAgICAgICAgICAgY29udGV4dC5zdHJva2UoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pICAgICAgICBcbiAgICB9LCBbXSk7XG5cblxuICAgIGZ1bmN0aW9uIGNoZWNrQ2xpY2tMb2NhdGlvbih4LHkpe1xuICAgICAgICBmb3IodmFyIGkgPSAwOyBpIDwgZGF0YS5pdGVtcy5sZW5ndGggKyAxIDsgaSsrKXtcbiAgICAgICAgICBcbiAgICAgICAgICAgIGlmKGRhdGEuaXRlbXNbaV0gIT09IHVuZGVmaW5lZCl7XG4gICAgICAgICAgICAgICAgaWYoZGF0YS5pdGVtc1tpXS5leGFjdExvY2F0aW9uLnggPT09IHggJiYgZGF0YS5pdGVtc1tpXS5leGFjdExvY2F0aW9uLnkgPT09IHkpe1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdmb3VuZCBhIG1hdGNoJyk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBjb25zb2xlLmxvZygnbm8gbWF0Y2gnKTtcbiAgICB9XG5cbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICB2YXIgY2FudmFzRWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImRhdGFDYW52YXNcIilcbiAgICBcbiAgICBjYW52YXNFbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChldmVudCkgPT4ge1xuICAgICAgICB2YXIgeCA9IGV2ZW50LnBhZ2VYIC0gKGNhbnZhc0VsLm9mZnNldExlZnQgKyBjYW52YXNFbC5jbGllbnRMZWZ0KTtcbiAgICAgICAgdmFyIHkgPSBldmVudC5wYWdlWSAtIChjYW52YXNFbC5vZmZzZXRUb3AgKyBjYW52YXNFbC5jbGllbnRUb3ApO1xuICAgIFxuICAgICAgICBjaGVja0NsaWNrTG9jYXRpb24oeCwgeSk7XG4gICAgfSlcbiAgICB9LCBbXSlcblxuICAgIHJldHVybihcbiAgICAgICAgICAgIDxjYW52YXMgaWQ9XCJkYXRhQ2FudmFzXCIgcmVmPXtjYW52YXNSZWZ9IHN0eWxlPXt7IGRpc3BsYXk6ICdibG9jaycsIG1hcmdpbjogJzAgYXV0bycsIHBvc2l0aW9uOiAnYWJzb2x1dGUnfX0+PC9jYW52YXM+XG4gICAgICAgICAgXG4gICAgKVxufVxuXG5cbmV4cG9ydCBkZWZhdWx0IERhdGFMYXllcjsiXSwibmFtZXMiOlsidXNlRWZmZWN0IiwidXNlUmVmIiwiRGF0YUxheWVyIiwiZGF0YSIsImNoZWNrQ2xpY2tMb2NhdGlvbiIsIngiLCJ5IiwiaSIsIml0ZW1zIiwibGVuZ3RoIiwidW5kZWZpbmVkIiwiZXhhY3RMb2NhdGlvbiIsImNvbnNvbGUiLCJsb2ciLCJjYW52YXNSZWYiLCJjYW52YXMiLCJjdXJyZW50IiwiY29udGV4dCIsImdldENvbnRleHQiLCJoZWlnaHQiLCJ3aWR0aCIsIm1hcCIsIml0ZW0iLCJsb2NhdGlvbiIsImJlZ2luUGF0aCIsImFyYyIsIk1hdGgiLCJQSSIsInR5cGUiLCJmaWxsU3R5bGUiLCJmaWxsIiwic3Ryb2tlU3R5bGUiLCJzdHJva2UiLCJjYW52YXNFbCIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJhZGRFdmVudExpc3RlbmVyIiwiZXZlbnQiLCJwYWdlWCIsIm9mZnNldExlZnQiLCJjbGllbnRMZWZ0IiwicGFnZVkiLCJvZmZzZXRUb3AiLCJjbGllbnRUb3AiLCJpZCIsInJlZiIsInN0eWxlIiwiZGlzcGxheSIsIm1hcmdpbiIsInBvc2l0aW9uIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/components/DataLayer.js\n"));

/***/ })

});