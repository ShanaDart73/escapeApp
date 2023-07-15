"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/lostOfOblivion/chapters/[id]",{

/***/ "./lib/lostOfOblivion/navIcons/nav.js":
/*!********************************************!*\
  !*** ./lib/lostOfOblivion/navIcons/nav.js ***!
  \********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _styles_nav_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../styles/nav.module.css */ \"./styles/nav.module.css\");\n/* harmony import */ var _styles_nav_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_nav_module_css__WEBPACK_IMPORTED_MODULE_3__);\n\nvar _s = $RefreshSig$();\n\n\n\nconst Nav = ()=>{\n    _s();\n    const [active, setActive] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const handleClick = ()=>{\n        setActive(!active);\n    };\n    const chapList = [\n        {\n            name: \"Chapter One\",\n            link: \"/lostOfOblivion/chapters/1\",\n            id: 1\n        },\n        {\n            name: \"Chapter Two\",\n            link: \"/lostOfOblivion/chapters/2\",\n            id: 2\n        },\n        {\n            name: \"Chapter Three\",\n            link: \"/lostOfOblivion/chapters/3\",\n            id: 3\n        },\n        {\n            name: \"Chapter Four\",\n            link: \"/lostOfOblivion/chapters/4\",\n            id: 4\n        },\n        {\n            name: \"Chapter Five\",\n            link: \"/lostOfOblivion/chapters/5\",\n            id: 5\n        }\n    ];\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_styles_nav_module_css__WEBPACK_IMPORTED_MODULE_3___default().sideNav),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_styles_nav_module_css__WEBPACK_IMPORTED_MODULE_3___default().closeNav),\n                        onClick: handleClick,\n                        active: true,\n                        children: \"\\xd7\"\n                    }, void 0, false, {\n                        fileName: \"/Users/caroleking/Documents/programming/escapeApp/lib/lostOfOblivion/navIcons/nav.js\",\n                        lineNumber: 21,\n                        columnNumber: 17\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_styles_nav_module_css__WEBPACK_IMPORTED_MODULE_3___default().mapping),\n                        active: true,\n                        children: chapList.map((param)=>/*#__PURE__*/ {\n                            let { name , link , id  } = param;\n                            return (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: (_styles_nav_module_css__WEBPACK_IMPORTED_MODULE_3___default().navRoute),\n                                onClick: ()=>next_router__WEBPACK_IMPORTED_MODULE_2___default().push(link),\n                                children: name\n                            }, id, false, {\n                                fileName: \"/Users/caroleking/Documents/programming/escapeApp/lib/lostOfOblivion/navIcons/nav.js\",\n                                lineNumber: 30,\n                                columnNumber: 25\n                            }, undefined);\n                        })\n                    }, void 0, false, {\n                        fileName: \"/Users/caroleking/Documents/programming/escapeApp/lib/lostOfOblivion/navIcons/nav.js\",\n                        lineNumber: 28,\n                        columnNumber: 17\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/caroleking/Documents/programming/escapeApp/lib/lostOfOblivion/navIcons/nav.js\",\n                lineNumber: 20,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_styles_nav_module_css__WEBPACK_IMPORTED_MODULE_3___default().menu),\n                onClick: handleClick,\n                active: true,\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                    src: \"/logos/nav.svg\",\n                    height: \"auto\",\n                    width: \"100%\",\n                    alt: \"\"\n                }, void 0, false, {\n                    fileName: \"/Users/caroleking/Documents/programming/escapeApp/lib/lostOfOblivion/navIcons/nav.js\",\n                    lineNumber: 45,\n                    columnNumber: 17\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/Users/caroleking/Documents/programming/escapeApp/lib/lostOfOblivion/navIcons/nav.js\",\n                lineNumber: 40,\n                columnNumber: 13\n            }, undefined)\n        ]\n    }, void 0, true);\n};\n_s(Nav, \"1cfVChV6gA1Fk8+xDnwTj3gmgZo=\");\n_c = Nav;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Nav);\nvar _c;\n$RefreshReg$(_c, \"Nav\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9saWIvbG9zdE9mT2JsaXZpb24vbmF2SWNvbnMvbmF2LmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQWdDO0FBQ0E7QUFDbUI7QUFFbkQsTUFBTUcsTUFBTSxJQUFNOztJQUNkLE1BQU0sQ0FBQ0MsUUFBUUMsVUFBVSxHQUFHTCwrQ0FBUUEsQ0FBQyxLQUFLO0lBQzFDLE1BQU1NLGNBQWMsSUFBTTtRQUN0QkQsVUFBVSxDQUFDRDtJQUNmO0lBQ0EsTUFBTUcsV0FBVztRQUNiO1lBQUVDLE1BQU07WUFBZUMsTUFBTTtZQUE4QkMsSUFBSTtRQUFFO1FBQ2pFO1lBQUVGLE1BQU07WUFBZUMsTUFBTTtZQUE4QkMsSUFBSTtRQUFFO1FBQ2pFO1lBQUVGLE1BQU07WUFBaUJDLE1BQU07WUFBOEJDLElBQUk7UUFBRTtRQUNuRTtZQUFFRixNQUFNO1lBQWdCQyxNQUFNO1lBQThCQyxJQUFJO1FBQUU7UUFDbEU7WUFBRUYsTUFBTTtZQUFnQkMsTUFBTTtZQUE4QkMsSUFBSTtRQUFFO0tBQ3JFO0lBRUQscUJBQ0k7OzBCQUNJLDhEQUFDQztnQkFBSUMsV0FBV1YsdUVBQWM7O2tDQUMxQiw4REFBQ1M7d0JBQ0dDLFdBQVdWLHdFQUFlO3dCQUMxQmEsU0FBU1Q7d0JBQ1RGLE1BQU07a0NBQ1Q7Ozs7OztrQ0FHRCw4REFBQ087d0JBQUlDLFdBQVdWLHVFQUFjO3dCQUFFRSxNQUFNO2tDQUNqQ0csU0FBU1UsR0FBRyxDQUFDLHVCQUNWO2dDQURXLEVBQUVULEtBQUksRUFBRUMsS0FBSSxFQUFFQyxHQUFFLEVBQUU7bUNBQzdCLDhEQUFDQztnQ0FDR0MsV0FBV1Ysd0VBQWU7Z0NBRTFCYSxTQUFTLElBQU1kLHVEQUFXLENBQUNROzBDQUUxQkQ7K0JBSElFOzs7Ozt3QkFJSjs7Ozs7Ozs7Ozs7OzBCQUlqQiw4REFBQ0M7Z0JBQ0dDLFdBQVdWLG9FQUFXO2dCQUN0QmEsU0FBU1Q7Z0JBQ1RGLE1BQU07MEJBRU4sNEVBQUNpQjtvQkFBSUMsS0FBSTtvQkFBaUJDLFFBQU87b0JBQU9DLE9BQU07b0JBQU9DLEtBQUk7Ozs7Ozs7Ozs7Ozs7QUFJekU7R0E1Q010QjtLQUFBQTtBQThDTiwrREFBZUEsR0FBR0EsRUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9saWIvbG9zdE9mT2JsaXZpb24vbmF2SWNvbnMvbmF2LmpzP2FhZjMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcbmltcG9ydCBSb3V0ZXIgZnJvbSAnbmV4dC9yb3V0ZXInXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4uLy4uLy4uL3N0eWxlcy9uYXYubW9kdWxlLmNzcydcblxuY29uc3QgTmF2ID0gKCkgPT4ge1xuICAgIGNvbnN0IFthY3RpdmUsIHNldEFjdGl2ZV0gPSB1c2VTdGF0ZShmYWxzZSlcbiAgICBjb25zdCBoYW5kbGVDbGljayA9ICgpID0+IHtcbiAgICAgICAgc2V0QWN0aXZlKCFhY3RpdmUpXG4gICAgfVxuICAgIGNvbnN0IGNoYXBMaXN0ID0gW1xuICAgICAgICB7IG5hbWU6IFwiQ2hhcHRlciBPbmVcIiwgbGluazogXCIvbG9zdE9mT2JsaXZpb24vY2hhcHRlcnMvMVwiLCBpZDogMSB9LFxuICAgICAgICB7IG5hbWU6IFwiQ2hhcHRlciBUd29cIiwgbGluazogXCIvbG9zdE9mT2JsaXZpb24vY2hhcHRlcnMvMlwiLCBpZDogMiB9LFxuICAgICAgICB7IG5hbWU6IFwiQ2hhcHRlciBUaHJlZVwiLCBsaW5rOiBcIi9sb3N0T2ZPYmxpdmlvbi9jaGFwdGVycy8zXCIsIGlkOiAzIH0sXG4gICAgICAgIHsgbmFtZTogXCJDaGFwdGVyIEZvdXJcIiwgbGluazogXCIvbG9zdE9mT2JsaXZpb24vY2hhcHRlcnMvNFwiLCBpZDogNCB9LFxuICAgICAgICB7IG5hbWU6IFwiQ2hhcHRlciBGaXZlXCIsIGxpbms6IFwiL2xvc3RPZk9ibGl2aW9uL2NoYXB0ZXJzLzVcIiwgaWQ6IDUgfVxuICAgIF1cblxuICAgIHJldHVybiAoXG4gICAgICAgIDw+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnNpZGVOYXZ9PlxuICAgICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMuY2xvc2VOYXZ9XG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e2hhbmRsZUNsaWNrfVxuICAgICAgICAgICAgICAgICAgICBhY3RpdmVcbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICZ0aW1lcztcbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLm1hcHBpbmd9IGFjdGl2ZT5cbiAgICAgICAgICAgICAgICAgICAge2NoYXBMaXN0Lm1hcCgoeyBuYW1lLCBsaW5rLCBpZCB9KSA9PiAoXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMubmF2Um91dGV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5PXtpZH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBSb3V0ZXIucHVzaChsaW5rKX1cbiAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7bmFtZX1cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLm1lbnV9XG4gICAgICAgICAgICAgICAgb25DbGljaz17aGFuZGxlQ2xpY2t9XG4gICAgICAgICAgICAgICAgYWN0aXZlXG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPGltZyBzcmM9XCIvbG9nb3MvbmF2LnN2Z1wiIGhlaWdodD1cImF1dG9cIiB3aWR0aD1cIjEwMCVcIiBhbHQ9XCJcIiAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvPlxuICAgIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgTmF2Il0sIm5hbWVzIjpbInVzZVN0YXRlIiwiUm91dGVyIiwic3R5bGVzIiwiTmF2IiwiYWN0aXZlIiwic2V0QWN0aXZlIiwiaGFuZGxlQ2xpY2siLCJjaGFwTGlzdCIsIm5hbWUiLCJsaW5rIiwiaWQiLCJkaXYiLCJjbGFzc05hbWUiLCJzaWRlTmF2IiwiY2xvc2VOYXYiLCJvbkNsaWNrIiwibWFwcGluZyIsIm1hcCIsIm5hdlJvdXRlIiwicHVzaCIsIm1lbnUiLCJpbWciLCJzcmMiLCJoZWlnaHQiLCJ3aWR0aCIsImFsdCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./lib/lostOfOblivion/navIcons/nav.js\n"));

/***/ })

});