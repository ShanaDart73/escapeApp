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

/***/ "./components/homepage/home.style.js":
/*!*******************************************!*\
  !*** ./components/homepage/home.style.js ***!
  \*******************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Container\": function() { return /* binding */ Container; },\n/* harmony export */   \"Content\": function() { return /* binding */ Content; },\n/* harmony export */   \"Footer\": function() { return /* binding */ Footer; },\n/* harmony export */   \"Header\": function() { return /* binding */ Header; },\n/* harmony export */   \"StoryPic\": function() { return /* binding */ StoryPic; }\n/* harmony export */ });\n/* harmony import */ var _swc_helpers_src_tagged_template_literal_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @swc/helpers/src/_tagged_template_literal.mjs */ \"./node_modules/@swc/helpers/src/_tagged_template_literal.mjs\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n\nfunction _templateObject() {\n    const data = (0,_swc_helpers_src_tagged_template_literal_mjs__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\n        '\\n  display: grid;\\n  grid-template-rows: auto 1fr auto;\\n  grid-template-areas: \\n          \"header\"\\n          \"content\"\\n          \"footer\";\\n  text-align: center;\\n  row-gap: 0.5rem;\\n\\n  font-family: \"Times New Roman\", serif;\\n  background-image: linear-gradient(rgb(248, 232, 235), rgba(154, 92, 102, 0.87));\\n'\n    ]);\n    _templateObject = function() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject1() {\n    const data = (0,_swc_helpers_src_tagged_template_literal_mjs__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\n        \"\\n  grid-row: 1 / 2;\\n  \\n  img {\\n    width: 100%;\\n  }\\n\"\n    ]);\n    _templateObject1 = function() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject2() {\n    const data = (0,_swc_helpers_src_tagged_template_literal_mjs__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\n        \"\\n  grid-row: 2 / 3;\\n\\n  display: flex;\\n  flex-flow: column wrap;\\n  align-content: center;\\n  row-gap: 30px;\\n\"\n    ]);\n    _templateObject2 = function() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject3() {\n    const data = (0,_swc_helpers_src_tagged_template_literal_mjs__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\n        \"\\n  grid-row: 3 / 4;\\n\\n  color: #ece6d9;\\n  padding: 1rem 1.5rem;\\n  text-align: left;\\n\"\n    ]);\n    _templateObject3 = function() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject4() {\n    const data = (0,_swc_helpers_src_tagged_template_literal_mjs__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\n        \"\\n  color: #ece6d9;\\n  padding: 1rem;\\n  font-family: cursive;\\n  text-decoration: none;\\n\"\n    ]);\n    _templateObject4 = function() {\n        return data;\n    };\n    return data;\n}\n\nconst Container = styled_components__WEBPACK_IMPORTED_MODULE_1__[\"default\"].div(_templateObject());\nconst Header = styled_components__WEBPACK_IMPORTED_MODULE_1__[\"default\"].div(_templateObject1());\nconst Content = styled_components__WEBPACK_IMPORTED_MODULE_1__[\"default\"].div(_templateObject2());\nconst Footer = styled_components__WEBPACK_IMPORTED_MODULE_1__[\"default\"].div(_templateObject3());\nconst StoryPic = styled_components__WEBPACK_IMPORTED_MODULE_1__[\"default\"].div(_templateObject4());\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2hvbWVwYWdlL2hvbWUuc3R5bGUuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBc0M7QUFFL0IsTUFBTUMsWUFBWUQsNkRBQVUsb0JBWWpDO0FBQ0ssTUFBTUcsU0FBU0gsNkRBQVUscUJBTTlCO0FBRUssTUFBTUksVUFBVUosNkRBQVUscUJBTy9CO0FBRUssTUFBTUssU0FBU0wsNkRBQVUscUJBTTlCO0FBRUssTUFBTU0sV0FBV04sNkRBQVUscUJBS2hDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvaG9tZXBhZ2UvaG9tZS5zdHlsZS5qcz81ZDc2Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnXG5cbmV4cG9ydCBjb25zdCBDb250YWluZXIgPSBzdHlsZWQuZGl2YFxuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLXJvd3M6IGF1dG8gMWZyIGF1dG87XG4gIGdyaWQtdGVtcGxhdGUtYXJlYXM6IFxuICAgICAgICAgIFwiaGVhZGVyXCJcbiAgICAgICAgICBcImNvbnRlbnRcIlxuICAgICAgICAgIFwiZm9vdGVyXCI7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgcm93LWdhcDogMC41cmVtO1xuXG4gIGZvbnQtZmFtaWx5OiBcIlRpbWVzIE5ldyBSb21hblwiLCBzZXJpZjtcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHJnYigyNDgsIDIzMiwgMjM1KSwgcmdiYSgxNTQsIDkyLCAxMDIsIDAuODcpKTtcbmA7XG5leHBvcnQgY29uc3QgSGVhZGVyID0gc3R5bGVkLmRpdmBcbiAgZ3JpZC1yb3c6IDEgLyAyO1xuICBcbiAgaW1nIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxuYDtcblxuZXhwb3J0IGNvbnN0IENvbnRlbnQgPSBzdHlsZWQuZGl2YFxuICBncmlkLXJvdzogMiAvIDM7XG5cbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1mbG93OiBjb2x1bW4gd3JhcDtcbiAgYWxpZ24tY29udGVudDogY2VudGVyO1xuICByb3ctZ2FwOiAzMHB4O1xuYDtcblxuZXhwb3J0IGNvbnN0IEZvb3RlciA9IHN0eWxlZC5kaXZgXG4gIGdyaWQtcm93OiAzIC8gNDtcblxuICBjb2xvcjogI2VjZTZkOTtcbiAgcGFkZGluZzogMXJlbSAxLjVyZW07XG4gIHRleHQtYWxpZ246IGxlZnQ7XG5gO1xuXG5leHBvcnQgY29uc3QgU3RvcnlQaWMgPSBzdHlsZWQuZGl2YFxuICBjb2xvcjogI2VjZTZkOTtcbiAgcGFkZGluZzogMXJlbTtcbiAgZm9udC1mYW1pbHk6IGN1cnNpdmU7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbmA7Il0sIm5hbWVzIjpbInN0eWxlZCIsIkNvbnRhaW5lciIsImRpdiIsIkhlYWRlciIsIkNvbnRlbnQiLCJGb290ZXIiLCJTdG9yeVBpYyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/homepage/home.style.js\n"));

/***/ })

});