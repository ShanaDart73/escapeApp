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

/***/ "./components/lostOfOblivion/sidebarIcons/sound.js":
/*!*********************************************************!*\
  !*** ./components/lostOfOblivion/sidebarIcons/sound.js ***!
  \*********************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _lib_lostOfOblivion_allSounds__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../lib/lostOfOblivion/allSounds */ \"./lib/lostOfOblivion/allSounds.js\");\n/* harmony import */ var _sound_style__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./sound.style */ \"./components/lostOfOblivion/sidebarIcons/sound.style.js\");\n\nvar _s = $RefreshSig$();\n\n\n\nconst Sound = ()=>{\n    _s();\n    const [audio, setAudio] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const handleClick = ()=>{\n        setAudio(!audio);\n    };\n    const soundChapList = [\n        {\n            name: \"chapter01\",\n            id: 1\n        },\n        {\n            name: \"chapter02\",\n            id: 2\n        }\n    ];\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_sound_style__WEBPACK_IMPORTED_MODULE_3__.Sidebar, {\n                audio: audio,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_sound_style__WEBPACK_IMPORTED_MODULE_3__.CloseSidebar, {\n                        onClick: handleClick,\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                            children: \"\\xd7\"\n                        }, void 0, false, {\n                            fileName: \"/Users/caroleking/Documents/programming/escapeApp/components/lostOfOblivion/sidebarIcons/sound.js\",\n                            lineNumber: 18,\n                            columnNumber: 53\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"/Users/caroleking/Documents/programming/escapeApp/components/lostOfOblivion/sidebarIcons/sound.js\",\n                        lineNumber: 18,\n                        columnNumber: 17\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_sound_style__WEBPACK_IMPORTED_MODULE_3__.SoundContainer, {\n                        children: soundChapList.map((param)=>/*#__PURE__*/ {\n                            let { name , id  } = param;\n                            return (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_sound_style__WEBPACK_IMPORTED_MODULE_3__.SoundList, {\n                                children: name\n                            }, id, false, {\n                                fileName: \"/Users/caroleking/Documents/programming/escapeApp/components/lostOfOblivion/sidebarIcons/sound.js\",\n                                lineNumber: 21,\n                                columnNumber: 25\n                            }, undefined);\n                        })\n                    }, void 0, false, {\n                        fileName: \"/Users/caroleking/Documents/programming/escapeApp/components/lostOfOblivion/sidebarIcons/sound.js\",\n                        lineNumber: 19,\n                        columnNumber: 17\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/caroleking/Documents/programming/escapeApp/components/lostOfOblivion/sidebarIcons/sound.js\",\n                lineNumber: 17,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_sound_style__WEBPACK_IMPORTED_MODULE_3__.AudioIcon, {\n                audio: audio,\n                onClick: handleClick,\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                    src: \"/logos/audio.svg\",\n                    height: \"auto\",\n                    width: \"100%\",\n                    alt: \"\"\n                }, void 0, false, {\n                    fileName: \"/Users/caroleking/Documents/programming/escapeApp/components/lostOfOblivion/sidebarIcons/sound.js\",\n                    lineNumber: 28,\n                    columnNumber: 17\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/Users/caroleking/Documents/programming/escapeApp/components/lostOfOblivion/sidebarIcons/sound.js\",\n                lineNumber: 27,\n                columnNumber: 13\n            }, undefined)\n        ]\n    }, void 0, true);\n};\n_s(Sound, \"3GagGQaGn8puyOFu6t95ws1bYHE=\");\n_c = Sound;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Sound);\nvar _c;\n$RefreshReg$(_c, \"Sound\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2xvc3RPZk9ibGl2aW9uL3NpZGViYXJJY29ucy9zb3VuZC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBZ0M7QUFDNEM7QUFDZTtBQUUzRixNQUFNUSxRQUFRLElBQU07O0lBQ2hCLE1BQU0sQ0FBQ0MsT0FBT0MsU0FBUyxHQUFHViwrQ0FBUUEsQ0FBQyxLQUFLO0lBQ3hDLE1BQU1XLGNBQWMsSUFBTTtRQUN0QkQsU0FBUyxDQUFDRDtJQUNkO0lBQ0EsTUFBTUcsZ0JBQWdCO1FBQ2xCO1lBQUVDLE1BQU07WUFBYUMsSUFBSTtRQUFFO1FBQzNCO1lBQUVELE1BQU07WUFBYUMsSUFBSTtRQUFFO0tBQzlCO0lBRUQscUJBQ0k7OzBCQUNJLDhEQUFDWCxpREFBT0E7Z0JBQUNNLE9BQU9BOztrQ0FDWiw4REFBQ0wsc0RBQVlBO3dCQUFDVyxTQUFTSjtrQ0FBYSw0RUFBQ0s7c0NBQUs7Ozs7Ozs7Ozs7O2tDQUMxQyw4REFBQ1gsd0RBQWNBO2tDQUNWTyxjQUFjSyxHQUFHLENBQUMsdUJBQ2Y7Z0NBRGdCLEVBQUVKLEtBQUksRUFBRUMsR0FBRSxFQUFFO21DQUM1Qiw4REFBQ1IsbURBQVNBOzBDQUNMTzsrQkFEV0M7Ozs7O3dCQUVMOzs7Ozs7Ozs7Ozs7MEJBSXZCLDhEQUFDUCxtREFBU0E7Z0JBQUNFLE9BQU9BO2dCQUFPTSxTQUFTSjswQkFDOUIsNEVBQUNPO29CQUFLQyxLQUFJO29CQUFtQkMsUUFBTztvQkFBT0MsT0FBTTtvQkFBT0MsS0FBSTs7Ozs7Ozs7Ozs7OztBQUk1RTtHQTNCTWQ7S0FBQUE7QUE2Qk4sK0RBQWVBLEtBQUtBLEVBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9sb3N0T2ZPYmxpdmlvbi9zaWRlYmFySWNvbnMvc291bmQuanM/ZjE0MCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgY2hhcHRlcjAxLCBjaGFwdGVyMDIgfSBmcm9tICcuLi8uLi8uLi9saWIvbG9zdE9mT2JsaXZpb24vYWxsU291bmRzJ1xuaW1wb3J0IHsgU2lkZWJhciwgQ2xvc2VTaWRlYmFyLCBTb3VuZENvbnRhaW5lciwgU291bmRMaXN0LCBBdWRpb0ljb24gfSBmcm9tICcuL3NvdW5kLnN0eWxlJ1xuXG5jb25zdCBTb3VuZCA9ICgpID0+IHtcbiAgICBjb25zdCBbYXVkaW8sIHNldEF1ZGlvXSA9IHVzZVN0YXRlKGZhbHNlKVxuICAgIGNvbnN0IGhhbmRsZUNsaWNrID0gKCkgPT4ge1xuICAgICAgICBzZXRBdWRpbyghYXVkaW8pXG4gICAgfVxuICAgIGNvbnN0IHNvdW5kQ2hhcExpc3QgPSBbXG4gICAgICAgIHsgbmFtZTogXCJjaGFwdGVyMDFcIiwgaWQ6IDEgfSxcbiAgICAgICAgeyBuYW1lOiBcImNoYXB0ZXIwMlwiLCBpZDogMiB9XG4gICAgXVxuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPD5cbiAgICAgICAgICAgIDxTaWRlYmFyIGF1ZGlvPXthdWRpb30+XG4gICAgICAgICAgICAgICAgPENsb3NlU2lkZWJhciBvbkNsaWNrPXtoYW5kbGVDbGlja30+PHNwYW4+JnRpbWVzOzwvc3Bhbj48L0Nsb3NlU2lkZWJhcj5cbiAgICAgICAgICAgICAgICA8U291bmRDb250YWluZXI+XG4gICAgICAgICAgICAgICAgICAgIHtzb3VuZENoYXBMaXN0Lm1hcCgoeyBuYW1lLCBpZCB9KSA9PiAoXG4gICAgICAgICAgICAgICAgICAgICAgICA8U291bmRMaXN0IGtleT17aWR9ID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7bmFtZX1cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvU291bmRMaXN0PlxuICAgICAgICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgICAgICA8L1NvdW5kQ29udGFpbmVyPlxuICAgICAgICAgICAgPC9TaWRlYmFyPlxuICAgICAgICAgICAgPEF1ZGlvSWNvbiBhdWRpbz17YXVkaW99IG9uQ2xpY2s9e2hhbmRsZUNsaWNrfT5cbiAgICAgICAgICAgICAgICA8aW1nICBzcmM9XCIvbG9nb3MvYXVkaW8uc3ZnXCIgaGVpZ2h0PVwiYXV0b1wiIHdpZHRoPVwiMTAwJVwiIGFsdD1cIlwiIC8+XG4gICAgICAgICAgICA8L0F1ZGlvSWNvbj5cbiAgICAgICAgPC8+XG4gICAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBTb3VuZCJdLCJuYW1lcyI6WyJ1c2VTdGF0ZSIsImNoYXB0ZXIwMSIsImNoYXB0ZXIwMiIsIlNpZGViYXIiLCJDbG9zZVNpZGViYXIiLCJTb3VuZENvbnRhaW5lciIsIlNvdW5kTGlzdCIsIkF1ZGlvSWNvbiIsIlNvdW5kIiwiYXVkaW8iLCJzZXRBdWRpbyIsImhhbmRsZUNsaWNrIiwic291bmRDaGFwTGlzdCIsIm5hbWUiLCJpZCIsIm9uQ2xpY2siLCJzcGFuIiwibWFwIiwiaW1nIiwic3JjIiwiaGVpZ2h0Iiwid2lkdGgiLCJhbHQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/lostOfOblivion/sidebarIcons/sound.js\n"));

/***/ })

});