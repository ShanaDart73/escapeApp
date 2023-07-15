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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _styles_nav_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../styles/nav.module.css */ \"./styles/nav.module.css\");\n/* harmony import */ var _styles_nav_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_nav_module_css__WEBPACK_IMPORTED_MODULE_3__);\n\nvar _s = $RefreshSig$();\n\n\n\nconst Nav = ()=>{\n    _s();\n    const [display, setDisplay] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const handleClick = ()=>{\n        setDisplay(!display);\n    };\n    const chapList = [\n        {\n            name: \"Chapter One\",\n            link: \"/lostOfOblivion/chapters/1\",\n            id: 1\n        },\n        {\n            name: \"Chapter Two\",\n            link: \"/lostOfOblivion/chapters/2\",\n            id: 2\n        },\n        {\n            name: \"Chapter Three\",\n            link: \"/lostOfOblivion/chapters/3\",\n            id: 3\n        },\n        {\n            name: \"Chapter Four\",\n            link: \"/lostOfOblivion/chapters/4\",\n            id: 4\n        },\n        {\n            name: \"Chapter Five\",\n            link: \"/lostOfOblivion/chapters/5\",\n            id: 5\n        }\n    ];\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_styles_nav_module_css__WEBPACK_IMPORTED_MODULE_3___default().sideNav),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_styles_nav_module_css__WEBPACK_IMPORTED_MODULE_3___default().closeNav),\n                        onClick: handleClick,\n                        children: \"\\xd7\"\n                    }, void 0, false, {\n                        fileName: \"/Users/caroleking/Documents/programming/escapeApp/lib/lostOfOblivion/navIcons/nav.js\",\n                        lineNumber: 21,\n                        columnNumber: 17\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: display === false ? (_styles_nav_module_css__WEBPACK_IMPORTED_MODULE_3___default().mapping) : (_styles_nav_module_css__WEBPACK_IMPORTED_MODULE_3___default().mapping) + \"\" + (_styles_nav_module_css__WEBPACK_IMPORTED_MODULE_3___default().active),\n                        children: chapList.map((param)=>/*#__PURE__*/ {\n                            let { name , link , id  } = param;\n                            return (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: (_styles_nav_module_css__WEBPACK_IMPORTED_MODULE_3___default().navRoute),\n                                onClick: ()=>next_router__WEBPACK_IMPORTED_MODULE_2___default().push(link),\n                                children: name\n                            }, id, false, {\n                                fileName: \"/Users/caroleking/Documents/programming/escapeApp/lib/lostOfOblivion/navIcons/nav.js\",\n                                lineNumber: 29,\n                                columnNumber: 25\n                            }, undefined);\n                        })\n                    }, void 0, false, {\n                        fileName: \"/Users/caroleking/Documents/programming/escapeApp/lib/lostOfOblivion/navIcons/nav.js\",\n                        lineNumber: 27,\n                        columnNumber: 17\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/caroleking/Documents/programming/escapeApp/lib/lostOfOblivion/navIcons/nav.js\",\n                lineNumber: 20,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: display === false ? (_styles_nav_module_css__WEBPACK_IMPORTED_MODULE_3___default().menu) : (_styles_nav_module_css__WEBPACK_IMPORTED_MODULE_3___default().menu) + \"\" + (_styles_nav_module_css__WEBPACK_IMPORTED_MODULE_3___default().active),\n                onClick: handleClick,\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                    src: \"/logos/nav.svg\",\n                    height: \"auto\",\n                    width: \"100%\",\n                    alt: \"\"\n                }, void 0, false, {\n                    fileName: \"/Users/caroleking/Documents/programming/escapeApp/lib/lostOfOblivion/navIcons/nav.js\",\n                    lineNumber: 43,\n                    columnNumber: 17\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/Users/caroleking/Documents/programming/escapeApp/lib/lostOfOblivion/navIcons/nav.js\",\n                lineNumber: 39,\n                columnNumber: 13\n            }, undefined)\n        ]\n    }, void 0, true);\n};\n_s(Nav, \"nOWmG5C542Nzw1cW1ktURuiMav0=\");\n_c = Nav;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Nav);\nvar _c;\n$RefreshReg$(_c, \"Nav\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9saWIvbG9zdE9mT2JsaXZpb24vbmF2SWNvbnMvbmF2LmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQWdDO0FBQ0E7QUFDbUI7QUFFbkQsTUFBTUcsTUFBTSxJQUFNOztJQUNkLE1BQU0sQ0FBQ0MsU0FBU0MsV0FBVyxHQUFHTCwrQ0FBUUEsQ0FBQyxLQUFLO0lBQzVDLE1BQU1NLGNBQWMsSUFBTTtRQUN0QkQsV0FBVyxDQUFDRDtJQUNoQjtJQUNBLE1BQU1HLFdBQVc7UUFDYjtZQUFFQyxNQUFNO1lBQWVDLE1BQU07WUFBOEJDLElBQUk7UUFBRTtRQUNqRTtZQUFFRixNQUFNO1lBQWVDLE1BQU07WUFBOEJDLElBQUk7UUFBRTtRQUNqRTtZQUFFRixNQUFNO1lBQWlCQyxNQUFNO1lBQThCQyxJQUFJO1FBQUU7UUFDbkU7WUFBRUYsTUFBTTtZQUFnQkMsTUFBTTtZQUE4QkMsSUFBSTtRQUFFO1FBQ2xFO1lBQUVGLE1BQU07WUFBZ0JDLE1BQU07WUFBOEJDLElBQUk7UUFBRTtLQUNyRTtJQUVELHFCQUNJOzswQkFDSSw4REFBQ0M7Z0JBQUlDLFdBQVdWLHVFQUFjOztrQ0FDMUIsOERBQUNTO3dCQUNHQyxXQUFXVix3RUFBZTt3QkFDMUJhLFNBQVNUO2tDQUNaOzs7Ozs7a0NBR0QsOERBQUNLO3dCQUFJQyxXQUFXUixZQUFZLEtBQUssR0FBR0YsdUVBQWMsR0FBR0EsdUVBQWMsR0FBQyxLQUFHQSxzRUFBYTtrQ0FDL0VLLFNBQVNXLEdBQUcsQ0FBQyx1QkFDVjtnQ0FEVyxFQUFFVixLQUFJLEVBQUVDLEtBQUksRUFBRUMsR0FBRSxFQUFFO21DQUM3Qiw4REFBQ0M7Z0NBQ0dDLFdBQVdWLHdFQUFlO2dDQUUxQmEsU0FBUyxJQUFNZCx1REFBVyxDQUFDUTswQ0FFMUJEOytCQUhJRTs7Ozs7d0JBSUo7Ozs7Ozs7Ozs7OzswQkFJakIsOERBQUNDO2dCQUNHQyxXQUFXUixZQUFZLEtBQUssR0FBR0Ysb0VBQVcsR0FBR0Esb0VBQVcsR0FBQyxLQUFHQSxzRUFBYTtnQkFDekVhLFNBQVNUOzBCQUVULDRFQUFDZ0I7b0JBQUlDLEtBQUk7b0JBQWlCQyxRQUFPO29CQUFPQyxPQUFNO29CQUFPQyxLQUFJOzs7Ozs7Ozs7Ozs7O0FBSXpFO0dBMUNNdkI7S0FBQUE7QUE0Q04sK0RBQWVBLEdBQUdBLEVBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbGliL2xvc3RPZk9ibGl2aW9uL25hdkljb25zL25hdi5qcz9hYWYzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgUm91dGVyIGZyb20gJ25leHQvcm91dGVyJ1xuaW1wb3J0IHN0eWxlcyBmcm9tICcuLi8uLi8uLi9zdHlsZXMvbmF2Lm1vZHVsZS5jc3MnXG5cbmNvbnN0IE5hdiA9ICgpID0+IHtcbiAgICBjb25zdCBbZGlzcGxheSwgc2V0RGlzcGxheV0gPSB1c2VTdGF0ZShmYWxzZSlcbiAgICBjb25zdCBoYW5kbGVDbGljayA9ICgpID0+IHtcbiAgICAgICAgc2V0RGlzcGxheSghZGlzcGxheSlcbiAgICB9XG4gICAgY29uc3QgY2hhcExpc3QgPSBbXG4gICAgICAgIHsgbmFtZTogXCJDaGFwdGVyIE9uZVwiLCBsaW5rOiBcIi9sb3N0T2ZPYmxpdmlvbi9jaGFwdGVycy8xXCIsIGlkOiAxIH0sXG4gICAgICAgIHsgbmFtZTogXCJDaGFwdGVyIFR3b1wiLCBsaW5rOiBcIi9sb3N0T2ZPYmxpdmlvbi9jaGFwdGVycy8yXCIsIGlkOiAyIH0sXG4gICAgICAgIHsgbmFtZTogXCJDaGFwdGVyIFRocmVlXCIsIGxpbms6IFwiL2xvc3RPZk9ibGl2aW9uL2NoYXB0ZXJzLzNcIiwgaWQ6IDMgfSxcbiAgICAgICAgeyBuYW1lOiBcIkNoYXB0ZXIgRm91clwiLCBsaW5rOiBcIi9sb3N0T2ZPYmxpdmlvbi9jaGFwdGVycy80XCIsIGlkOiA0IH0sXG4gICAgICAgIHsgbmFtZTogXCJDaGFwdGVyIEZpdmVcIiwgbGluazogXCIvbG9zdE9mT2JsaXZpb24vY2hhcHRlcnMvNVwiLCBpZDogNSB9XG4gICAgXVxuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPD5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuc2lkZU5hdn0+XG4gICAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5jbG9zZU5hdn1cbiAgICAgICAgICAgICAgICAgICAgb25DbGljaz17aGFuZGxlQ2xpY2t9XG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAmdGltZXM7XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2Rpc3BsYXkgPT09IGZhbHNlID8gc3R5bGVzLm1hcHBpbmcgOiBzdHlsZXMubWFwcGluZysnJytzdHlsZXMuYWN0aXZlfT5cbiAgICAgICAgICAgICAgICAgICAge2NoYXBMaXN0Lm1hcCgoeyBuYW1lLCBsaW5rLCBpZCB9KSA9PiAoXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMubmF2Um91dGV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5PXtpZH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBSb3V0ZXIucHVzaChsaW5rKX1cbiAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7bmFtZX1cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17ZGlzcGxheSA9PT0gZmFsc2UgPyBzdHlsZXMubWVudSA6IHN0eWxlcy5tZW51KycnK3N0eWxlcy5hY3RpdmV9XG4gICAgICAgICAgICAgICAgb25DbGljaz17aGFuZGxlQ2xpY2t9XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPGltZyBzcmM9XCIvbG9nb3MvbmF2LnN2Z1wiIGhlaWdodD1cImF1dG9cIiB3aWR0aD1cIjEwMCVcIiBhbHQ9XCJcIiAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvPlxuICAgIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgTmF2Il0sIm5hbWVzIjpbInVzZVN0YXRlIiwiUm91dGVyIiwic3R5bGVzIiwiTmF2IiwiZGlzcGxheSIsInNldERpc3BsYXkiLCJoYW5kbGVDbGljayIsImNoYXBMaXN0IiwibmFtZSIsImxpbmsiLCJpZCIsImRpdiIsImNsYXNzTmFtZSIsInNpZGVOYXYiLCJjbG9zZU5hdiIsIm9uQ2xpY2siLCJtYXBwaW5nIiwiYWN0aXZlIiwibWFwIiwibmF2Um91dGUiLCJwdXNoIiwibWVudSIsImltZyIsInNyYyIsImhlaWdodCIsIndpZHRoIiwiYWx0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./lib/lostOfOblivion/navIcons/nav.js\n"));

/***/ })

});