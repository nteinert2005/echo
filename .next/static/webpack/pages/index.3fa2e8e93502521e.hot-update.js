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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @swc/helpers/src/_async_to_generator.mjs */ \"./node_modules/@swc/helpers/src/_async_to_generator.mjs\");\n/* harmony import */ var _swc_helpers_src_ts_generator_mjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @swc/helpers/src/_ts_generator.mjs */ \"./node_modules/@swc/helpers/src/_ts_generator.mjs\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _DataDrawer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./DataDrawer */ \"./pages/components/DataDrawer.js\");\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @chakra-ui/react */ \"./node_modules/@chakra-ui/react/dist/chakra-ui-react.esm.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n\n\nvar _this = undefined;\n\nvar _s = $RefreshSig$();\n\n\n\n\nvar DataLayer = function(param) {\n    var data = param.data, filterData = param.filterData;\n    var checkClickLocation = function checkClickLocation(x, y) {\n        data.forEach(function(element) {\n            if (Math.pow(x - element.exactLocation.x, 2) + Math.pow(y - element.exactLocation.y, 2) < Math.pow(10, 2)) {\n                setSingleData(element);\n                onOpen();\n            }\n        });\n        var test = data.some(function(element) {\n            return Math.pow(x - element.exactLocation.x, 2) + Math.pow(y - element.exactLocation.y, 2) < Math.pow(10, 2);\n        });\n        if (test === false) {\n            createNewPoint(x, y).then(function(data) {\n                drawDataPoint(x, y, \"gray\");\n            });\n        }\n    };\n    var drawDataPoint = function drawDataPoint(x, y, color) {\n        var canvas = canvasRef.current;\n        var context = canvas.getContext(\"2d\");\n        context.beginPath();\n        context.arc(x, y, 10, 0, 2 * Math.PI);\n        context.fillStyle = color;\n        context.strokeStyle = color;\n        context.stroke();\n        context.fill();\n    };\n    _s();\n    var canvasRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)();\n    var ref = (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.useDisclosure)(), isOpen = ref.isOpen, onClose = ref.onClose, onOpen = ref.onOpen;\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(), singleData = ref1[0], setSingleData = ref1[1];\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        console.log(data);\n        var canvas = canvasRef.current;\n        canvas.height = 500;\n        canvas.width = 1000;\n        data.map(function(item) {\n            if (item.location === \"FountainAve\") {\n                switch(item.type){\n                    case \"computers\":\n                    case \"monitors\":\n                    case \"terminals\":\n                        drawDataPoint(item.exactLocation.x, item.exactLocation.y, \"red\");\n                        break;\n                    case \"tv\":\n                    case \"apple-tv\":\n                        drawDataPoint(item.exactLocation.x, item.exactLocation.y, \"blue\");\n                        break;\n                    case \"scanners\":\n                        drawDataPoint(item.exactLocation.x, item.exactLocation.y, \"green\");\n                        break;\n                    default:\n                        drawDataPoint(item.exactLocation.x, item.exactLocation.y, \"black\");\n                        break;\n                }\n            }\n        });\n    }, []);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        if (filterData !== \"all\") {\n            console.log(filterData);\n            data.map(function(item) {\n                if (item.location === \"FountainAve\") {\n                    if (item.type === filterData) {\n                        drawDataPoint(item.exactLocation.x, item.exactLocation.y, \"green\");\n                    } else {\n                        drawDataPoint(item.exactLocation.x, item.exactLocation.y, \"gray\");\n                    }\n                }\n            });\n        }\n    }, [\n        filterData\n    ]);\n    function createNewPoint(x, y) {\n        return _createNewPoint.apply(this, arguments);\n    }\n    function _createNewPoint() {\n        _createNewPoint = (0,_swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(function(x, y) {\n            var createNode;\n            return (0,_swc_helpers_src_ts_generator_mjs__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(this, function(_state) {\n                switch(_state.label){\n                    case 0:\n                        return [\n                            4,\n                            (0,axios__WEBPACK_IMPORTED_MODULE_6__[\"default\"])({\n                                method: \"post\",\n                                url: \"/api/inventory/new\",\n                                data: {\n                                    type: \"\",\n                                    x: x,\n                                    y: y\n                                }\n                            })\n                        ];\n                    case 1:\n                        createNode = _state.sent();\n                        return [\n                            2,\n                            createNode\n                        ];\n                }\n            });\n        });\n        return _createNewPoint.apply(this, arguments);\n    }\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        var canvasEl = document.getElementById(\"dataCanvas\");\n        canvasEl.addEventListener(\"click\", function(event) {\n            var x = event.pageX - (canvasEl.offsetLeft + canvasEl.clientLeft);\n            var y = event.pageY - (canvasEl.offsetTop + canvasEl.clientTop);\n            checkClickLocation(x, y);\n        });\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"canvas\", {\n                id: \"dataCanvas\",\n                ref: canvasRef,\n                style: {\n                    left: \"10%\",\n                    top: \"20%\",\n                    position: \"absolute\"\n                }\n            }, void 0, false, {\n                fileName: \"/home/sirius/code/echo/pages/components/DataLayer.js\",\n                lineNumber: 119,\n                columnNumber: 9\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_DataDrawer__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                data: singleData,\n                isOpen: isOpen,\n                onOpen: onOpen,\n                onClose: onClose\n            }, void 0, false, {\n                fileName: \"/home/sirius/code/echo/pages/components/DataLayer.js\",\n                lineNumber: 120,\n                columnNumber: 9\n            }, _this)\n        ]\n    }, void 0, true);\n};\n_s(DataLayer, \"O6T8P0e/WDcUjJDmUOJzt3hlx9Y=\", false, function() {\n    return [\n        _chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.useDisclosure\n    ];\n});\n_c = DataLayer;\n/* harmony default export */ __webpack_exports__[\"default\"] = (DataLayer);\nvar _c;\n$RefreshReg$(_c, \"DataLayer\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Ozs7UUFDdEIsQ0FBQztlQVhjM0IsZUFBYzs7SUEyQzdCdEIsZ0RBQVMsQ0FBQyxXQUFNO1FBQ1osSUFBSW9ELFFBQVEsR0FBR0MsUUFBUSxDQUFDQyxjQUFjLENBQUMsWUFBWSxDQUFDO1FBRXhERixRQUFRLENBQUNHLGdCQUFnQixDQUFDLE9BQU8sRUFBRSxTQUFDQyxLQUFLLEVBQUs7WUFDMUMsSUFBSTdDLENBQUMsR0FBRzZDLEtBQUssQ0FBQ0MsS0FBSyxHQUFJTCxDQUFBQSxRQUFRLENBQUNNLFVBQVUsR0FBR04sUUFBUSxDQUFDTyxVQUFVO1lBQ2hFLElBQUkvQyxDQUFDLEdBQUc0QyxLQUFLLENBQUNJLEtBQUssR0FBSVIsQ0FBQUEsUUFBUSxDQUFDUyxTQUFTLEdBQUdULFFBQVEsQ0FBQ1UsU0FBUztZQUU5RHBELGtCQUFrQixDQUFDQyxDQUFDLEVBQUNDLENBQUMsQ0FBQyxDQUFDO1FBQzVCLENBQUMsQ0FBQztJQUNGLENBQUMsRUFBRSxFQUFFLENBQUM7SUFFTixxQkFDSTs7MEJBQ0EsOERBQUNjLFFBQU07Z0JBQUNxQyxFQUFFLEVBQUMsWUFBWTtnQkFBQ0MsR0FBRyxFQUFFckMsU0FBUztnQkFBRXNDLEtBQUssRUFBRTtvQkFBRUMsSUFBSSxFQUFFLEtBQUs7b0JBQUVDLEdBQUcsRUFBRSxLQUFLO29CQUFFQyxRQUFRLEVBQUUsVUFBVTtpQkFBQzs7Ozs7cUJBQVc7MEJBQzFHLDhEQUFDakUsbURBQVU7Z0JBQUNLLElBQUksRUFBRWdDLFVBQVU7Z0JBQUVGLE1BQU0sRUFBRUEsTUFBTTtnQkFBRW5CLE1BQU0sRUFBRUEsTUFBTTtnQkFBRW9CLE9BQU8sRUFBRUEsT0FBTzs7Ozs7cUJBQUk7O29CQUMvRSxDQUNOO0FBQ0wsQ0FBQztHQXJIS2hDLFNBQVM7O1FBR3lCRiwyREFBYTs7O0FBSC9DRSxLQUFBQSxTQUFTO0FBd0hmLCtEQUFlQSxTQUFTLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvY29tcG9uZW50cy9EYXRhTGF5ZXIuanM/YzY1ZCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVJlZiwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBEYXRhRHJhd2VyIGZyb20gXCIuL0RhdGFEcmF3ZXJcIjtcbmltcG9ydCB7IGZpbHRlciwgdXNlRGlzY2xvc3VyZSB9IGZyb20gXCJAY2hha3JhLXVpL3JlYWN0XCI7XG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XG5cbmNvbnN0IERhdGFMYXllciA9ICh7IGRhdGEsIGZpbHRlckRhdGEgfSkgPT4ge1xuICAgIGNvbnN0IGNhbnZhc1JlZiA9IHVzZVJlZigpO1xuXG4gICAgY29uc3QgeyBpc09wZW4sIG9uQ2xvc2UsIG9uT3BlbiB9ID0gdXNlRGlzY2xvc3VyZSgpO1xuICAgIGNvbnN0IFsgc2luZ2xlRGF0YSwgc2V0U2luZ2xlRGF0YSBdID0gdXNlU3RhdGUoKTtcblxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG5cbiAgICAgICAgY29uc29sZS5sb2coZGF0YSk7XG4gICAgICAgIHZhciBjYW52YXMgPSBjYW52YXNSZWYuY3VycmVudDtcblxuXG4gICAgICAgIGNhbnZhcy5oZWlnaHQgPSA1MDA7XG4gICAgICAgIGNhbnZhcy53aWR0aCA9IDEwMDA7XG5cbiAgICAgICAgZGF0YS5tYXAoKGl0ZW0pID0+IHtcbiAgICAgICAgICAgIGlmKGl0ZW0ubG9jYXRpb24gPT09IFwiRm91bnRhaW5BdmVcIil7XG4gICAgICAgICAgICAgICAgc3dpdGNoIChpdGVtLnR5cGUpIHtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAnY29tcHV0ZXJzJzpcbiAgICAgICAgICAgICAgICAgICAgY2FzZSBcIm1vbml0b3JzXCI6XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgXCJ0ZXJtaW5hbHNcIjpcbiAgICAgICAgICAgICAgICAgICAgICAgIGRyYXdEYXRhUG9pbnQoaXRlbS5leGFjdExvY2F0aW9uLngsIGl0ZW0uZXhhY3RMb2NhdGlvbi55LCAncmVkJylcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAndHYnOlxuICAgICAgICAgICAgICAgICAgICBjYXNlIFwiYXBwbGUtdHZcIjpcbiAgICAgICAgICAgICAgICAgICAgICAgIGRyYXdEYXRhUG9pbnQoaXRlbS5leGFjdExvY2F0aW9uLngsIGl0ZW0uZXhhY3RMb2NhdGlvbi55LCAnYmx1ZScpXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgICAgICAgICBjYXNlICdzY2FubmVycyc6XG4gICAgICAgICAgICAgICAgICAgICAgICBkcmF3RGF0YVBvaW50KGl0ZW0uZXhhY3RMb2NhdGlvbi54LCBpdGVtLmV4YWN0TG9jYXRpb24ueSwgJ2dyZWVuJylcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICAgICAgICAgIGRlZmF1bHQ6IFxuICAgICAgICAgICAgICAgICAgICAgICAgZHJhd0RhdGFQb2ludChpdGVtLmV4YWN0TG9jYXRpb24ueCwgaXRlbS5leGFjdExvY2F0aW9uLnksICdibGFjaycpXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pICAgICAgICBcbiAgICB9LCBbXSk7XG5cbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICBpZihmaWx0ZXJEYXRhICE9PSBcImFsbFwiKXtcbiAgICAgICAgY29uc29sZS5sb2coZmlsdGVyRGF0YSk7XG5cbiAgICAgICAgZGF0YS5tYXAoKGl0ZW0pID0+IHtcbiAgICAgICAgICAgIGlmKGl0ZW0ubG9jYXRpb24gPT09IFwiRm91bnRhaW5BdmVcIil7ICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIGlmKGl0ZW0udHlwZSA9PT0gZmlsdGVyRGF0YSl7XG4gICAgICAgICAgICAgICAgICAgIGRyYXdEYXRhUG9pbnQoaXRlbS5leGFjdExvY2F0aW9uLngsIGl0ZW0uZXhhY3RMb2NhdGlvbi55LCAnZ3JlZW4nKVxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGRyYXdEYXRhUG9pbnQoaXRlbS5leGFjdExvY2F0aW9uLngsIGl0ZW0uZXhhY3RMb2NhdGlvbi55LCAnZ3JheScpXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9KSBcbiAgICAgICAgfVxuICAgIH0sIFtmaWx0ZXJEYXRhXSlcblxuICAgIGFzeW5jIGZ1bmN0aW9uIGNyZWF0ZU5ld1BvaW50KHgsIHkpe1xuICAgICAgICBjb25zdCBjcmVhdGVOb2RlID0gYXdhaXQgYXhpb3Moe1xuICAgICAgICAgICAgbWV0aG9kOiAncG9zdCcsXG4gICAgICAgICAgICB1cmw6ICcvYXBpL2ludmVudG9yeS9uZXcnLFxuICAgICAgICAgICAgZGF0YToge1xuICAgICAgICAgICAgICAgIHR5cGU6IFwiXCIsXG4gICAgICAgICAgICAgICAgeDogeCxcbiAgICAgICAgICAgICAgICB5OiB5LFxuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIGNyZWF0ZU5vZGU7XG4gICAgfVxuXG5cbiAgICBmdW5jdGlvbiBjaGVja0NsaWNrTG9jYXRpb24oeCx5KXtcbiAgICAgICAgZGF0YS5mb3JFYWNoKGVsZW1lbnQgPT4ge1xuICAgICAgICAgICAgaWYoTWF0aC5wb3coeC1lbGVtZW50LmV4YWN0TG9jYXRpb24ueCwgMikgKyBNYXRoLnBvdyh5LWVsZW1lbnQuZXhhY3RMb2NhdGlvbi55LCAyKSA8IE1hdGgucG93KDEwLCAyKSl7XG4gICAgICAgICAgICAgICAgc2V0U2luZ2xlRGF0YShlbGVtZW50KTtcbiAgICAgICAgICAgICAgICBvbk9wZW4oKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cblxuICAgICAgICB2YXIgdGVzdCA9IGRhdGEuc29tZSgoZWxlbWVudCkgPT4gTWF0aC5wb3coeC1lbGVtZW50LmV4YWN0TG9jYXRpb24ueCwgMikgKyBNYXRoLnBvdyh5LWVsZW1lbnQuZXhhY3RMb2NhdGlvbi55LCAyKSA8IE1hdGgucG93KDEwLCAyKSApXG4gICAgICAgIFxuICAgICAgICBpZih0ZXN0ID09PSBmYWxzZSl7XG4gICAgICAgICAgICBjcmVhdGVOZXdQb2ludCh4LHkpLnRoZW4oKGRhdGEpID0+IHtcbiAgICAgICAgICAgICAgICBkcmF3RGF0YVBvaW50KHgsIHksICdncmF5Jyk7XG4gICAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZHJhd0RhdGFQb2ludCh4LHksIGNvbG9yKXtcbiAgICAgICAgdmFyIGNhbnZhcyA9IGNhbnZhc1JlZi5jdXJyZW50O1xuICAgICAgICB2YXIgY29udGV4dCA9IGNhbnZhcy5nZXRDb250ZXh0KCcyZCcpO1xuICAgICAgICBjb250ZXh0LmJlZ2luUGF0aCgpO1xuICAgICAgICBjb250ZXh0LmFyYyh4LHksMTAsMCwyICogTWF0aC5QSSk7XG4gICAgICAgIGNvbnRleHQuZmlsbFN0eWxlID0gY29sb3I7XG4gICAgICAgIGNvbnRleHQuc3Ryb2tlU3R5bGUgPSBjb2xvcjtcbiAgICAgICAgY29udGV4dC5zdHJva2UoKTtcbiAgICAgICAgY29udGV4dC5maWxsKCk7XG4gICAgfVxuXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgdmFyIGNhbnZhc0VsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJkYXRhQ2FudmFzXCIpXG4gICAgXG4gICAgY2FudmFzRWwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZXZlbnQpID0+IHtcbiAgICAgICAgdmFyIHggPSBldmVudC5wYWdlWCAtIChjYW52YXNFbC5vZmZzZXRMZWZ0ICsgY2FudmFzRWwuY2xpZW50TGVmdCk7XG4gICAgICAgIHZhciB5ID0gZXZlbnQucGFnZVkgLSAoY2FudmFzRWwub2Zmc2V0VG9wICsgY2FudmFzRWwuY2xpZW50VG9wKTtcbiAgICBcbiAgICAgICAgY2hlY2tDbGlja0xvY2F0aW9uKHgseSk7XG4gICAgfSlcbiAgICB9LCBbXSlcblxuICAgIHJldHVybihcbiAgICAgICAgPD5cbiAgICAgICAgPGNhbnZhcyBpZD1cImRhdGFDYW52YXNcIiByZWY9e2NhbnZhc1JlZn0gc3R5bGU9e3sgbGVmdDogJzEwJScsIHRvcDogXCIyMCVcIiwgcG9zaXRpb246ICdhYnNvbHV0ZSd9fT48L2NhbnZhcz5cbiAgICAgICAgPERhdGFEcmF3ZXIgZGF0YT17c2luZ2xlRGF0YX0gaXNPcGVuPXtpc09wZW59IG9uT3Blbj17b25PcGVufSBvbkNsb3NlPXtvbkNsb3NlfSAvPiBcbiAgICAgICAgPC8+IFxuICAgICkgICBcbn1cblxuXG5leHBvcnQgZGVmYXVsdCBEYXRhTGF5ZXI7Il0sIm5hbWVzIjpbInVzZUVmZmVjdCIsInVzZVJlZiIsInVzZVN0YXRlIiwiRGF0YURyYXdlciIsImZpbHRlciIsInVzZURpc2Nsb3N1cmUiLCJheGlvcyIsIkRhdGFMYXllciIsImRhdGEiLCJmaWx0ZXJEYXRhIiwiY2hlY2tDbGlja0xvY2F0aW9uIiwieCIsInkiLCJmb3JFYWNoIiwiZWxlbWVudCIsIk1hdGgiLCJwb3ciLCJleGFjdExvY2F0aW9uIiwic2V0U2luZ2xlRGF0YSIsIm9uT3BlbiIsInRlc3QiLCJzb21lIiwiY3JlYXRlTmV3UG9pbnQiLCJ0aGVuIiwiZHJhd0RhdGFQb2ludCIsImNvbG9yIiwiY2FudmFzIiwiY2FudmFzUmVmIiwiY3VycmVudCIsImNvbnRleHQiLCJnZXRDb250ZXh0IiwiYmVnaW5QYXRoIiwiYXJjIiwiUEkiLCJmaWxsU3R5bGUiLCJzdHJva2VTdHlsZSIsInN0cm9rZSIsImZpbGwiLCJpc09wZW4iLCJvbkNsb3NlIiwic2luZ2xlRGF0YSIsImNvbnNvbGUiLCJsb2ciLCJoZWlnaHQiLCJ3aWR0aCIsIm1hcCIsIml0ZW0iLCJsb2NhdGlvbiIsInR5cGUiLCJjcmVhdGVOb2RlIiwibWV0aG9kIiwidXJsIiwiY2FudmFzRWwiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwiYWRkRXZlbnRMaXN0ZW5lciIsImV2ZW50IiwicGFnZVgiLCJvZmZzZXRMZWZ0IiwiY2xpZW50TGVmdCIsInBhZ2VZIiwib2Zmc2V0VG9wIiwiY2xpZW50VG9wIiwiaWQiLCJyZWYiLCJzdHlsZSIsImxlZnQiLCJ0b3AiLCJwb3NpdGlvbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/components/DataLayer.js\n"));

/***/ })

});