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

/***/ "./components/lostOfOblivion/sidebarIcons/sound.style.js":
/*!***************************************************************!*\
  !*** ./components/lostOfOblivion/sidebarIcons/sound.style.js ***!
  \***************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"AudioIcon\": function() { return /* binding */ AudioIcon; },\n/* harmony export */   \"CloseSidebar\": function() { return /* binding */ CloseSidebar; },\n/* harmony export */   \"Sidebar\": function() { return /* binding */ Sidebar; },\n/* harmony export */   \"SoundContainer\": function() { return /* binding */ SoundContainer; },\n/* harmony export */   \"SoundList\": function() { return /* binding */ SoundList; }\n/* harmony export */ });\n/* harmony import */ var _swc_helpers_src_tagged_template_literal_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @swc/helpers/src/_tagged_template_literal.mjs */ \"./node_modules/@swc/helpers/src/_tagged_template_literal.mjs\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n\nfunction _templateObject() {\n    const data = (0,_swc_helpers_src_tagged_template_literal_mjs__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\n        \"\\n  height: 100%;\\n  width: 250px;\\n  max-width: 70%;\\n  position: fixed;\\n  z-index: 99;\\n  top: 70px;\\n  right: 0;\\n\\n  display: flex;\\n  justify-content: center;\\n  overflow: scroll;\\n  background-color: #020139;\\n  padding-top: 60px;\\n  translate: \",\n        \";\\n  transition: all 0.7s ease-in-out;\\n\"\n    ]);\n    _templateObject = function() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject1() {\n    const data = (0,_swc_helpers_src_tagged_template_literal_mjs__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\n        \"\\n  position: fixed;\\n  top: 0;\\n  left: 25px;\\n  margin-right: 50px;\\n  cursor: pointer;\\n\\n  span {\\n    font-size: 36px;\\n    cursor: pointer;\\n  }\\n\"\n    ]);\n    _templateObject1 = function() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject2() {\n    const data = (0,_swc_helpers_src_tagged_template_literal_mjs__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\n        \"\\n  padding: 10px;\\n  display: block;\\n  font-size: 16px;\\n\"\n    ]);\n    _templateObject2 = function() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject3() {\n    const data = (0,_swc_helpers_src_tagged_template_literal_mjs__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\n        \"\\n  display: flex;\\n  padding: 10px;\\n  background: linear-gradient(to bottom, #020139, #070392, #020139);\\n  border: 1px solid #020139;\\n\"\n    ]);\n    _templateObject3 = function() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject4() {\n    const data = (0,_swc_helpers_src_tagged_template_literal_mjs__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\n        \"\\n  width: 30px;\\n  cursor: pointer;\\n\\n  @media screen and (min-width: 500px) {\\n    width: 40px;\\n  }\\n\\n  @media screen and (min-width: 768px) {\\n    width: 50px;\\n  }\\n\"\n    ]);\n    _templateObject4 = function() {\n        return data;\n    };\n    return data;\n}\n\nconst Sidebar = styled_components__WEBPACK_IMPORTED_MODULE_1__[\"default\"].div(_templateObject(), (props)=>props.audio ? \"-10px\" : \"250px\");\nconst CloseSidebar = styled_components__WEBPACK_IMPORTED_MODULE_1__[\"default\"].div(_templateObject1());\nconst SoundContainer = styled_components__WEBPACK_IMPORTED_MODULE_1__[\"default\"].div(_templateObject2());\nconst SoundList = styled_components__WEBPACK_IMPORTED_MODULE_1__[\"default\"].div(_templateObject3());\nconst AudioIcon = styled_components__WEBPACK_IMPORTED_MODULE_1__[\"default\"].div(_templateObject4());\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2xvc3RPZk9ibGl2aW9uL3NpZGViYXJJY29ucy9zb3VuZC5zdHlsZS5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBc0M7QUFFL0IsTUFBTUMsVUFBVUQsNkRBQVUsb0JBY2xCRyxDQUFBQSxRQUFTQSxNQUFNQyxLQUFLLEdBQUcsVUFBVSxPQUFPLEVBRXJEO0FBRUssTUFBTUMsZUFBZUwsNkRBQVUscUJBV3BDO0FBRUssTUFBTU0saUJBQWlCTiw2REFBVSxxQkFJdEM7QUFFSyxNQUFNTyxZQUFZUCw2REFBVSxxQkFLakM7QUFFSyxNQUFNUSxZQUFZUiw2REFBVSxxQkFXakMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9sb3N0T2ZPYmxpdmlvbi9zaWRlYmFySWNvbnMvc291bmQuc3R5bGUuanM/M2MwMyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJ1xuXG5leHBvcnQgY29uc3QgU2lkZWJhciA9IHN0eWxlZC5kaXZgXG4gIGhlaWdodDogMTAwJTtcbiAgd2lkdGg6IDI1MHB4O1xuICBtYXgtd2lkdGg6IDcwJTtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB6LWluZGV4OiA5OTtcbiAgdG9wOiA3MHB4O1xuICByaWdodDogMDtcblxuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgb3ZlcmZsb3c6IHNjcm9sbDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAyMDEzOTtcbiAgcGFkZGluZy10b3A6IDYwcHg7XG4gIHRyYW5zbGF0ZTogJHtwcm9wcyA9PiBwcm9wcy5hdWRpbyA/IFwiLTEwcHhcIiA6IFwiMjUwcHhcIn07XG4gIHRyYW5zaXRpb246IGFsbCAwLjdzIGVhc2UtaW4tb3V0O1xuYDtcblxuZXhwb3J0IGNvbnN0IENsb3NlU2lkZWJhciA9IHN0eWxlZC5kaXZgXG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgdG9wOiAwO1xuICBsZWZ0OiAyNXB4O1xuICBtYXJnaW4tcmlnaHQ6IDUwcHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcblxuICBzcGFuIHtcbiAgICBmb250LXNpemU6IDM2cHg7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICB9XG5gO1xuXG5leHBvcnQgY29uc3QgU291bmRDb250YWluZXIgPSBzdHlsZWQuZGl2YFxuICBwYWRkaW5nOiAxMHB4O1xuICBkaXNwbGF5OiBibG9jaztcbiAgZm9udC1zaXplOiAxNnB4O1xuYDtcblxuZXhwb3J0IGNvbnN0IFNvdW5kTGlzdCA9IHN0eWxlZC5kaXZgXG4gIGRpc3BsYXk6IGZsZXg7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byBib3R0b20sICMwMjAxMzksICMwNzAzOTIsICMwMjAxMzkpO1xuICBib3JkZXI6IDFweCBzb2xpZCAjMDIwMTM5O1xuYDtcblxuZXhwb3J0IGNvbnN0IEF1ZGlvSWNvbiA9IHN0eWxlZC5kaXZgXG4gIHdpZHRoOiAzMHB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG5cbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNTAwcHgpIHtcbiAgICB3aWR0aDogNDBweDtcbiAgfVxuXG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDc2OHB4KSB7XG4gICAgd2lkdGg6IDUwcHg7XG4gIH1cbmA7Il0sIm5hbWVzIjpbInN0eWxlZCIsIlNpZGViYXIiLCJkaXYiLCJwcm9wcyIsImF1ZGlvIiwiQ2xvc2VTaWRlYmFyIiwiU291bmRDb250YWluZXIiLCJTb3VuZExpc3QiLCJBdWRpb0ljb24iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/lostOfOblivion/sidebarIcons/sound.style.js\n"));

/***/ })

});