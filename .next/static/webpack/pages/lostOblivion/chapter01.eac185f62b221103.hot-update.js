"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/lostOblivion/chapter01",{

/***/ "./data/lostOblivion/sidebarIcons/nav.js":
/*!***********************************************!*\
  !*** ./data/lostOblivion/sidebarIcons/nav.js ***!
  \***********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _nav_style__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./nav.style */ \"./data/lostOblivion/sidebarIcons/nav.style.js\");\n\nvar _s = $RefreshSig$();\n\n\nconst Nav = ()=>{\n    _s();\n    console.log(\"from Nav function\");\n    const [active, setActive] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);\n    const handleSlideIn = ()=>{};\n    const handleSlideOut = ()=>{\n        setActive(active);\n    };\n    const chapList = [\n        {\n            name: \"Chapter One\",\n            link: \"\",\n            id: 1\n        },\n        {\n            name: \"Chapter Two\",\n            link: \"\",\n            id: 2\n        },\n        {\n            name: \"Chapter Three\",\n            link: \"\",\n            id: 3\n        }\n    ];\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_nav_style__WEBPACK_IMPORTED_MODULE_2__.Sidenav, {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_nav_style__WEBPACK_IMPORTED_MODULE_2__.CloseNav, {\n                        onLoad: handleSlideOut,\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                            children: \"\\xd7\"\n                        }, void 0, false, {\n                            fileName: \"/Users/caroleking/Documents/programming/escapeApp/data/lostOblivion/sidebarIcons/nav.js\",\n                            lineNumber: 21,\n                            columnNumber: 51\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"/Users/caroleking/Documents/programming/escapeApp/data/lostOblivion/sidebarIcons/nav.js\",\n                        lineNumber: 21,\n                        columnNumber: 17\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: chapList.map((param)=>/*#__PURE__*/ {\n                            let { name , link , id  } = param;\n                            return (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_nav_style__WEBPACK_IMPORTED_MODULE_2__.NavLink, {\n                                href: link,\n                                children: name\n                            }, id, false, {\n                                fileName: \"/Users/caroleking/Documents/programming/escapeApp/data/lostOblivion/sidebarIcons/nav.js\",\n                                lineNumber: 24,\n                                columnNumber: 25\n                            }, undefined);\n                        })\n                    }, void 0, false, {\n                        fileName: \"/Users/caroleking/Documents/programming/escapeApp/data/lostOblivion/sidebarIcons/nav.js\",\n                        lineNumber: 22,\n                        columnNumber: 17\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/caroleking/Documents/programming/escapeApp/data/lostOblivion/sidebarIcons/nav.js\",\n                lineNumber: 20,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_nav_style__WEBPACK_IMPORTED_MODULE_2__.Menu, {\n                onClick: handleSlideIn,\n                children: \"☰\"\n            }, void 0, false, {\n                fileName: \"/Users/caroleking/Documents/programming/escapeApp/data/lostOblivion/sidebarIcons/nav.js\",\n                lineNumber: 30,\n                columnNumber: 13\n            }, undefined)\n        ]\n    }, void 0, true);\n};\n_s(Nav, \"8U9J+wJN8vvBTuOPDEeGZkZ5XMY=\");\n_c = Nav;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Nav);\nvar _c;\n$RefreshReg$(_c, \"Nav\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9kYXRhL2xvc3RPYmxpdmlvbi9zaWRlYmFySWNvbnMvbmF2LmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQWdDO0FBQzhCO0FBRTlELE1BQU1LLE1BQU0sSUFBTTs7SUFDZEMsUUFBUUMsR0FBRyxDQUFDO0lBQ1osTUFBTSxDQUFDQyxRQUFRQyxVQUFVLEdBQUdULCtDQUFRQSxDQUFDLElBQUk7SUFDekMsTUFBTVUsZ0JBQWdCLElBQU0sQ0FBQztJQUM3QixNQUFNQyxpQkFBaUIsSUFBTTtRQUN6QkYsVUFBVUQ7SUFDZDtJQUVBLE1BQU1JLFdBQVc7UUFDYjtZQUFFQyxNQUFNO1lBQWVDLE1BQU07WUFBSUMsSUFBSTtRQUFFO1FBQ3ZDO1lBQUVGLE1BQU07WUFBZUMsTUFBTTtZQUFJQyxJQUFJO1FBQUU7UUFDdkM7WUFBRUYsTUFBTTtZQUFpQkMsTUFBTTtZQUFJQyxJQUFJO1FBQUU7S0FDNUM7SUFFRCxxQkFDSTs7MEJBQ0ksOERBQUNkLCtDQUFPQTs7a0NBQ0osOERBQUNFLGdEQUFRQTt3QkFBQ2EsUUFBUUw7a0NBQWdCLDRFQUFDTTtzQ0FBSzs7Ozs7Ozs7Ozs7a0NBQ3hDLDhEQUFDQztrQ0FDSU4sU0FBU08sR0FBRyxDQUFDLHVCQUNWO2dDQURXLEVBQUVOLEtBQUksRUFBRUMsS0FBSSxFQUFFQyxHQUFFLEVBQUU7bUNBQzdCLDhEQUFDYiwrQ0FBT0E7Z0NBQVVrQixNQUFNTjswQ0FDbkJEOytCQURTRTs7Ozs7d0JBRUw7Ozs7Ozs7Ozs7OzswQkFJckIsOERBQUNYLDRDQUFJQTtnQkFBQ2lCLFNBQVNYOzBCQUFlOzs7Ozs7OztBQUcxQztHQTdCTUw7S0FBQUE7QUErQk4sK0RBQWVBLEdBQUdBLEVBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vZGF0YS9sb3N0T2JsaXZpb24vc2lkZWJhckljb25zL25hdi5qcz9iNDc2Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBTaWRlbmF2LCBOYXZMaW5rLCBDbG9zZU5hdiwgTWVudSB9IGZyb20gJy4vbmF2LnN0eWxlJ1xuXG5jb25zdCBOYXYgPSAoKSA9PiB7XG4gICAgY29uc29sZS5sb2coXCJmcm9tIE5hdiBmdW5jdGlvblwiKVxuICAgIGNvbnN0IFthY3RpdmUsIHNldEFjdGl2ZV0gPSB1c2VTdGF0ZSh0cnVlKVxuICAgIGNvbnN0IGhhbmRsZVNsaWRlSW4gPSAoKSA9PiB7fVxuICAgIGNvbnN0IGhhbmRsZVNsaWRlT3V0ID0gKCkgPT4ge1xuICAgICAgICBzZXRBY3RpdmUoYWN0aXZlKVxuICAgIH1cblxuICAgIGNvbnN0IGNoYXBMaXN0ID0gW1xuICAgICAgICB7IG5hbWU6IFwiQ2hhcHRlciBPbmVcIiwgbGluazogXCJcIiwgaWQ6IDEgfSxcbiAgICAgICAgeyBuYW1lOiBcIkNoYXB0ZXIgVHdvXCIsIGxpbms6IFwiXCIsIGlkOiAyIH0sXG4gICAgICAgIHsgbmFtZTogXCJDaGFwdGVyIFRocmVlXCIsIGxpbms6IFwiXCIsIGlkOiAzIH1cbiAgICBdXG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8PlxuICAgICAgICAgICAgPFNpZGVuYXY+XG4gICAgICAgICAgICAgICAgPENsb3NlTmF2IG9uTG9hZD17aGFuZGxlU2xpZGVPdXR9PjxzcGFuPiZ0aW1lczs8L3NwYW4+PC9DbG9zZU5hdj5cbiAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICB7Y2hhcExpc3QubWFwKCh7IG5hbWUsIGxpbmssIGlkIH0pID0+IChcbiAgICAgICAgICAgICAgICAgICAgICAgIDxOYXZMaW5rIGtleT17aWR9IGhyZWY9e2xpbmt9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtuYW1lfVxuICAgICAgICAgICAgICAgICAgICAgICAgPC9OYXZMaW5rPlxuICAgICAgICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvU2lkZW5hdj5cbiAgICAgICAgICAgIDxNZW51IG9uQ2xpY2s9e2hhbmRsZVNsaWRlSW59PiYjOTc3Njs8L01lbnU+XG4gICAgICAgIDwvPlxuICAgIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgTmF2XG4iXSwibmFtZXMiOlsidXNlU3RhdGUiLCJTaWRlbmF2IiwiTmF2TGluayIsIkNsb3NlTmF2IiwiTWVudSIsIk5hdiIsImNvbnNvbGUiLCJsb2ciLCJhY3RpdmUiLCJzZXRBY3RpdmUiLCJoYW5kbGVTbGlkZUluIiwiaGFuZGxlU2xpZGVPdXQiLCJjaGFwTGlzdCIsIm5hbWUiLCJsaW5rIiwiaWQiLCJvbkxvYWQiLCJzcGFuIiwiZGl2IiwibWFwIiwiaHJlZiIsIm9uQ2xpY2siXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./data/lostOblivion/sidebarIcons/nav.js\n"));

/***/ })

});