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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _lib_lostOfOblivion_allSounds__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../lib/lostOfOblivion/allSounds */ \"./lib/lostOfOblivion/allSounds.js\");\n/* harmony import */ var _sound_style__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./sound.style */ \"./components/lostOfOblivion/sidebarIcons/sound.style.js\");\n/* harmony import */ var next_dist_client_dev_fouc__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/dist/client/dev/fouc */ \"./node_modules/next/dist/client/dev/fouc.js\");\n/* harmony import */ var next_dist_client_dev_fouc__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_dist_client_dev_fouc__WEBPACK_IMPORTED_MODULE_4__);\n\nvar _s = $RefreshSig$();\n\n\n\n\nconst Sound = ()=>{\n    _s();\n    const [audio, setAudio] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const handleClick = ()=>{\n        setAudio(!audio);\n    };\n    const soundChapList = [\n        {\n            name: \"chapter01\",\n            sound: _lib_lostOfOblivion_allSounds__WEBPACK_IMPORTED_MODULE_2__.chapter01,\n            id: 1\n        },\n        {\n            name: \"chapter02\",\n            sound: _lib_lostOfOblivion_allSounds__WEBPACK_IMPORTED_MODULE_2__.chapter02,\n            id: 2\n        }\n    ];\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_sound_style__WEBPACK_IMPORTED_MODULE_3__.Sidebar, {\n                audio: audio,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_sound_style__WEBPACK_IMPORTED_MODULE_3__.CloseSidebar, {\n                        onClick: handleClick,\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                            children: \"\\xd7\"\n                        }, void 0, false, {\n                            fileName: \"/Users/caroleking/Documents/programming/escapeApp/components/lostOfOblivion/sidebarIcons/sound.js\",\n                            lineNumber: 19,\n                            columnNumber: 53\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"/Users/caroleking/Documents/programming/escapeApp/components/lostOfOblivion/sidebarIcons/sound.js\",\n                        lineNumber: 19,\n                        columnNumber: 17\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_sound_style__WEBPACK_IMPORTED_MODULE_3__.SoundContainer, {\n                        children: soundChapList.map((param)=>/*#__PURE__*/ {\n                            let { name , id , sound  } = param;\n                            return (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                onClick: ()=>sound,\n                                children: name\n                            }, id, false, {\n                                fileName: \"/Users/caroleking/Documents/programming/escapeApp/components/lostOfOblivion/sidebarIcons/sound.js\",\n                                lineNumber: 22,\n                                columnNumber: 25\n                            }, undefined);\n                        })\n                    }, void 0, false, {\n                        fileName: \"/Users/caroleking/Documents/programming/escapeApp/components/lostOfOblivion/sidebarIcons/sound.js\",\n                        lineNumber: 20,\n                        columnNumber: 17\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/caroleking/Documents/programming/escapeApp/components/lostOfOblivion/sidebarIcons/sound.js\",\n                lineNumber: 18,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_sound_style__WEBPACK_IMPORTED_MODULE_3__.AudioIcon, {\n                audio: audio,\n                onClick: handleClick,\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                    src: \"/logos/audio.svg\",\n                    height: \"auto\",\n                    width: \"100%\",\n                    alt: \"\"\n                }, void 0, false, {\n                    fileName: \"/Users/caroleking/Documents/programming/escapeApp/components/lostOfOblivion/sidebarIcons/sound.js\",\n                    lineNumber: 29,\n                    columnNumber: 17\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/Users/caroleking/Documents/programming/escapeApp/components/lostOfOblivion/sidebarIcons/sound.js\",\n                lineNumber: 28,\n                columnNumber: 13\n            }, undefined)\n        ]\n    }, void 0, true);\n};\n_s(Sound, \"3GagGQaGn8puyOFu6t95ws1bYHE=\");\n_c = Sound;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Sound);\nvar _c;\n$RefreshReg$(_c, \"Sound\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2xvc3RPZk9ibGl2aW9uL3NpZGViYXJJY29ucy9zb3VuZC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFnQztBQUM0QztBQUNlO0FBQ2xDO0FBRXpELE1BQU1TLFFBQVEsSUFBTTs7SUFDaEIsTUFBTSxDQUFDQyxPQUFPQyxTQUFTLEdBQUdYLCtDQUFRQSxDQUFDLEtBQUs7SUFDeEMsTUFBTVksY0FBYyxJQUFNO1FBQ3RCRCxTQUFTLENBQUNEO0lBQ2Q7SUFDQSxNQUFNRyxnQkFBZ0I7UUFDbEI7WUFBRUMsTUFBTTtZQUFhQyxPQUFPZCxvRUFBU0E7WUFBRWUsSUFBSTtRQUFFO1FBQzdDO1lBQUVGLE1BQU07WUFBYUMsT0FBT2Isb0VBQVNBO1lBQUVjLElBQUk7UUFBRTtLQUNoRDtJQUVELHFCQUNJOzswQkFDSSw4REFBQ2IsaURBQU9BO2dCQUFDTyxPQUFPQTs7a0NBQ1osOERBQUNOLHNEQUFZQTt3QkFBQ2EsU0FBU0w7a0NBQWEsNEVBQUNNO3NDQUFLOzs7Ozs7Ozs7OztrQ0FDMUMsOERBQUNiLHdEQUFjQTtrQ0FDVlEsY0FBY00sR0FBRyxDQUFDLHVCQUNmO2dDQURnQixFQUFFTCxLQUFJLEVBQUVFLEdBQUUsRUFBRUQsTUFBSyxFQUFFO21DQUNuQyw4REFBQ0s7Z0NBQWFILFNBQVMsSUFBTUY7MENBQ3hCRDsrQkFES0U7Ozs7O3dCQUVMOzs7Ozs7Ozs7Ozs7MEJBSWpCLDhEQUFDVCxtREFBU0E7Z0JBQUNHLE9BQU9BO2dCQUFPTyxTQUFTTDswQkFDOUIsNEVBQUNTO29CQUFLQyxLQUFJO29CQUFtQkMsUUFBTztvQkFBT0MsT0FBTTtvQkFBT0MsS0FBSTs7Ozs7Ozs7Ozs7OztBQUk1RTtHQTNCTWhCO0tBQUFBO0FBNkJOLCtEQUFlQSxLQUFLQSxFQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvbG9zdE9mT2JsaXZpb24vc2lkZWJhckljb25zL3NvdW5kLmpzP2YxNDAiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IGNoYXB0ZXIwMSwgY2hhcHRlcjAyIH0gZnJvbSAnLi4vLi4vLi4vbGliL2xvc3RPZk9ibGl2aW9uL2FsbFNvdW5kcydcbmltcG9ydCB7IFNpZGViYXIsIENsb3NlU2lkZWJhciwgU291bmRDb250YWluZXIsIFNvdW5kTGlzdCwgQXVkaW9JY29uIH0gZnJvbSAnLi9zb3VuZC5zdHlsZSdcbmltcG9ydCB7ZGlzcGxheUNvbnRlbnR9IGZyb20gXCJuZXh0L2Rpc3QvY2xpZW50L2Rldi9mb3VjXCI7XG5cbmNvbnN0IFNvdW5kID0gKCkgPT4ge1xuICAgIGNvbnN0IFthdWRpbywgc2V0QXVkaW9dID0gdXNlU3RhdGUoZmFsc2UpXG4gICAgY29uc3QgaGFuZGxlQ2xpY2sgPSAoKSA9PiB7XG4gICAgICAgIHNldEF1ZGlvKCFhdWRpbylcbiAgICB9XG4gICAgY29uc3Qgc291bmRDaGFwTGlzdCA9IFtcbiAgICAgICAgeyBuYW1lOiBcImNoYXB0ZXIwMVwiLCBzb3VuZDogY2hhcHRlcjAxLCBpZDogMSB9LFxuICAgICAgICB7IG5hbWU6IFwiY2hhcHRlcjAyXCIsIHNvdW5kOiBjaGFwdGVyMDIsIGlkOiAyIH1cbiAgICBdXG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8PlxuICAgICAgICAgICAgPFNpZGViYXIgYXVkaW89e2F1ZGlvfT5cbiAgICAgICAgICAgICAgICA8Q2xvc2VTaWRlYmFyIG9uQ2xpY2s9e2hhbmRsZUNsaWNrfT48c3Bhbj4mdGltZXM7PC9zcGFuPjwvQ2xvc2VTaWRlYmFyPlxuICAgICAgICAgICAgICAgIDxTb3VuZENvbnRhaW5lcj5cbiAgICAgICAgICAgICAgICAgICAge3NvdW5kQ2hhcExpc3QubWFwKCh7IG5hbWUsIGlkLCBzb3VuZCB9KSA9PiAoXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGtleT17aWR9IG9uQ2xpY2s9eygpID0+IHNvdW5kfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7bmFtZX1cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgICAgICA8L1NvdW5kQ29udGFpbmVyPlxuICAgICAgICAgICAgPC9TaWRlYmFyPlxuICAgICAgICAgICAgPEF1ZGlvSWNvbiBhdWRpbz17YXVkaW99IG9uQ2xpY2s9e2hhbmRsZUNsaWNrfT5cbiAgICAgICAgICAgICAgICA8aW1nICBzcmM9XCIvbG9nb3MvYXVkaW8uc3ZnXCIgaGVpZ2h0PVwiYXV0b1wiIHdpZHRoPVwiMTAwJVwiIGFsdD1cIlwiIC8+XG4gICAgICAgICAgICA8L0F1ZGlvSWNvbj5cbiAgICAgICAgPC8+XG4gICAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBTb3VuZCJdLCJuYW1lcyI6WyJ1c2VTdGF0ZSIsImNoYXB0ZXIwMSIsImNoYXB0ZXIwMiIsIlNpZGViYXIiLCJDbG9zZVNpZGViYXIiLCJTb3VuZENvbnRhaW5lciIsIlNvdW5kTGlzdCIsIkF1ZGlvSWNvbiIsImRpc3BsYXlDb250ZW50IiwiU291bmQiLCJhdWRpbyIsInNldEF1ZGlvIiwiaGFuZGxlQ2xpY2siLCJzb3VuZENoYXBMaXN0IiwibmFtZSIsInNvdW5kIiwiaWQiLCJvbkNsaWNrIiwic3BhbiIsIm1hcCIsImRpdiIsImltZyIsInNyYyIsImhlaWdodCIsIndpZHRoIiwiYWx0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/lostOfOblivion/sidebarIcons/sound.js\n"));

/***/ })

});