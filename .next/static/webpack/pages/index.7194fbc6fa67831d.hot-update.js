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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Container\": function() { return /* binding */ Container; },\n/* harmony export */   \"Content\": function() { return /* binding */ Content; },\n/* harmony export */   \"Footer\": function() { return /* binding */ Footer; },\n/* harmony export */   \"Header\": function() { return /* binding */ Header; },\n/* harmony export */   \"LeftPhoto\": function() { return /* binding */ LeftPhoto; },\n/* harmony export */   \"RightPhoto\": function() { return /* binding */ RightPhoto; },\n/* harmony export */   \"StoryDetail\": function() { return /* binding */ StoryDetail; },\n/* harmony export */   \"StoryPic\": function() { return /* binding */ StoryPic; },\n/* harmony export */   \"Wrapper\": function() { return /* binding */ Wrapper; }\n/* harmony export */ });\n/* harmony import */ var _swc_helpers_src_tagged_template_literal_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @swc/helpers/src/_tagged_template_literal.mjs */ \"./node_modules/@swc/helpers/src/_tagged_template_literal.mjs\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n\nfunction _templateObject() {\n    const data = (0,_swc_helpers_src_tagged_template_literal_mjs__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\n        '\\n  font-size: 1rem;\\n  font-family: \"Times New Roman\", serif;\\n  background: linear-gradient(rgb(248, 232, 235), rgba(154, 92, 102, 0.87));\\n\\n  @media screen and (min-width: 768px) {\\n    font-size: 1.2rem;\\n  }\\n'\n    ]);\n    _templateObject = function() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject1() {\n    const data = (0,_swc_helpers_src_tagged_template_literal_mjs__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\n        '\\n  display: grid;\\n  grid-template-rows: auto 1fr auto;\\n  grid-template-areas: \\n          \"header\"\\n          \"content\"\\n          \"footer\";\\n  text-align: center;\\n  row-gap: 0.5rem;\\n  \\n  @media screen and (min-width: 1024px) {\\n    grid-template-columns: 17% 66% 17%;\\n    grid-template-areas: \\n            \"header header header\"\\n            \"lelfPhoto content rightPhoto\"\\n            \"footer footer footer\";\\n  }\\n\\n  @media screen and (min-width: 1124px) {\\n    grid-template-columns: 20% 60% 20%;\\n  }\\n\\n  @media screen and (min-width: 1224px) {\\n    grid-template-columns: 23% 54% 23%;\\n  }\\n\\n  @media screen and (min-width: 1324px) {\\n    grid-template-columns: 25% 50% 25%;\\n  }\\n'\n    ]);\n    _templateObject1 = function() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject2() {\n    const data = (0,_swc_helpers_src_tagged_template_literal_mjs__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\n        \"\\n  grid-row: 1 / 2;\\n  \\n  img {\\n    width: 100%;\\n  }\\n  \\n  @media screen and (min-width: 1024px) {\\n    grid-column: 1 / 4;\\n  }\\n\"\n    ]);\n    _templateObject2 = function() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject3() {\n    const data = (0,_swc_helpers_src_tagged_template_literal_mjs__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\n        \"\\n  img {\\n    width: 0;\\n  }\\n  \\n  @media screen and (min-width: 1024px) {\\n    grid-column: 1 / 2;\\n    grid-row: 2 / 3;\\n    \\n    img {\\n      width: 100%;\\n      height: 100%;\\n      object-fit: cover;\\n      object-position: top;\\n    }\\n  }  \\n\"\n    ]);\n    _templateObject3 = function() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject4() {\n    const data = (0,_swc_helpers_src_tagged_template_literal_mjs__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\n        \"\\n  grid-row: 2 / 3;\\n\\n  display: flex;\\n  flex-flow: column wrap;\\n  align-content: center;\\n  row-gap: 30px;\\n  \\n  @media screen and (min-width: 768px) {\\n    flex-flow: row wrap;\\n    justify-content: center;\\n    row-gap: 20px;\\n    column-gap: 20px;\\n  }\\n\\n  @media screen and (min-width: 1024px) {\\n    grid-column: 2 / 3;\\n\\n    position: sticky;\\n    top: 200px;\\n    align-self: start;\\n    //height: 1020px;\\n    //overflow: scroll;\\n    \\n  }\\n\"\n    ]);\n    _templateObject4 = function() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject5() {\n    const data = (0,_swc_helpers_src_tagged_template_literal_mjs__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\n        \"\\n  img {\\n    width: 0;\\n  }\\n  \\n  @media screen and (min-width: 1024px) {\\n    grid-column: 3 / 4;\\n    grid-row: 2 /3;\\n    \\n    img {\\n      width: 100%;\\n      height: 100%;\\n      object-fit: cover;\\n      object-position: top;\\n    }\\n  }\\n\"\n    ]);\n    _templateObject5 = function() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject6() {\n    const data = (0,_swc_helpers_src_tagged_template_literal_mjs__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\n        \"\\n  grid-row: 3 / 4;\\n\\n  color: #ece6d9;\\n  padding: 1rem 1.5rem 0;\\n  text-align: left;\\n  \\n  p {\\n    margin: 0;\\n  }\\n  \\n  @media screen and (min-width: 768px) {\\n    padding: 1rem 2rem 0;\\n  }\\n\\n  @media screen and (min-width: 1024px) {\\n    grid-column: 1 /4;\\n    \\n   font-size: 1.5rem;\\n    padding: 1rem 3rem 3rem;\\n  }\\n\"\n    ]);\n    _templateObject6 = function() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject7() {\n    const data = (0,_swc_helpers_src_tagged_template_literal_mjs__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\n        \"\\n  padding: 1rem;\\n  font-family: cursive;\\n  \\n  h2 {\\n    margin: 0;\\n  }\\n  \\n  img {\\n    width: 100%;\\n    border-radius: 1% 25%;\\n  }\\n\"\n    ]);\n    _templateObject7 = function() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject8() {\n    const data = (0,_swc_helpers_src_tagged_template_literal_mjs__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\n        \"\\n  text-align: left;\\n  padding: 0 1rem;\\n  \\n  span {\\n    font-weight: bold;\\n  }\\n  \\n  p {\\n    margin: 0;\\n    padding-bottom: 0.5rem;\\n  }\\n\"\n    ]);\n    _templateObject8 = function() {\n        return data;\n    };\n    return data;\n}\n\nconst Wrapper = styled_components__WEBPACK_IMPORTED_MODULE_1__[\"default\"].div(_templateObject());\nconst Container = styled_components__WEBPACK_IMPORTED_MODULE_1__[\"default\"].div(_templateObject1());\nconst Header = styled_components__WEBPACK_IMPORTED_MODULE_1__[\"default\"].div(_templateObject2());\nconst LeftPhoto = styled_components__WEBPACK_IMPORTED_MODULE_1__[\"default\"].div(_templateObject3());\nconst Content = styled_components__WEBPACK_IMPORTED_MODULE_1__[\"default\"].div(_templateObject4());\nconst RightPhoto = styled_components__WEBPACK_IMPORTED_MODULE_1__[\"default\"].div(_templateObject5());\nconst Footer = styled_components__WEBPACK_IMPORTED_MODULE_1__[\"default\"].div(_templateObject6());\nconst StoryPic = styled_components__WEBPACK_IMPORTED_MODULE_1__[\"default\"].div(_templateObject7());\nconst StoryDetail = styled_components__WEBPACK_IMPORTED_MODULE_1__[\"default\"].div(_templateObject8());\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2hvbWVwYWdlL2hvbWUuc3R5bGUuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQXNDO0FBRS9CLE1BQU1DLFVBQVVELDZEQUFVLG9CQVEvQjtBQUVLLE1BQU1HLFlBQVlILDZEQUFVLHFCQTZCakM7QUFFSyxNQUFNSSxTQUFTSiw2REFBVSxxQkFVOUI7QUFFSyxNQUFNSyxZQUFZTCw2REFBVSxxQkFnQmpDO0FBRUssTUFBTU0sVUFBVU4sNkRBQVUscUJBeUIvQjtBQUVLLE1BQU1PLGFBQWFQLDZEQUFVLHFCQWdCbEM7QUFFSyxNQUFNUSxTQUFTUiw2REFBVSxxQkFxQjlCO0FBRUssTUFBTVMsV0FBV1QsNkRBQVUscUJBWWhDO0FBRUssTUFBTVUsY0FBY1YsNkRBQVUscUJBWW5DIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvaG9tZXBhZ2UvaG9tZS5zdHlsZS5qcz81ZDc2Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnXG5cbmV4cG9ydCBjb25zdCBXcmFwcGVyID0gc3R5bGVkLmRpdmBcbiAgZm9udC1zaXplOiAxcmVtO1xuICBmb250LWZhbWlseTogXCJUaW1lcyBOZXcgUm9tYW5cIiwgc2VyaWY7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudChyZ2IoMjQ4LCAyMzIsIDIzNSksIHJnYmEoMTU0LCA5MiwgMTAyLCAwLjg3KSk7XG5cbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNzY4cHgpIHtcbiAgICBmb250LXNpemU6IDEuMnJlbTtcbiAgfVxuYDtcblxuZXhwb3J0IGNvbnN0IENvbnRhaW5lciA9IHN0eWxlZC5kaXZgXG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtcm93czogYXV0byAxZnIgYXV0bztcbiAgZ3JpZC10ZW1wbGF0ZS1hcmVhczogXG4gICAgICAgICAgXCJoZWFkZXJcIlxuICAgICAgICAgIFwiY29udGVudFwiXG4gICAgICAgICAgXCJmb290ZXJcIjtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICByb3ctZ2FwOiAwLjVyZW07XG4gIFxuICBAbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxMDI0cHgpIHtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDE3JSA2NiUgMTclO1xuICAgIGdyaWQtdGVtcGxhdGUtYXJlYXM6IFxuICAgICAgICAgICAgXCJoZWFkZXIgaGVhZGVyIGhlYWRlclwiXG4gICAgICAgICAgICBcImxlbGZQaG90byBjb250ZW50IHJpZ2h0UGhvdG9cIlxuICAgICAgICAgICAgXCJmb290ZXIgZm9vdGVyIGZvb3RlclwiO1xuICB9XG5cbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTEyNHB4KSB7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAyMCUgNjAlIDIwJTtcbiAgfVxuXG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDEyMjRweCkge1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMjMlIDU0JSAyMyU7XG4gIH1cblxuICBAbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxMzI0cHgpIHtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDI1JSA1MCUgMjUlO1xuICB9XG5gO1xuXG5leHBvcnQgY29uc3QgSGVhZGVyID0gc3R5bGVkLmRpdmBcbiAgZ3JpZC1yb3c6IDEgLyAyO1xuICBcbiAgaW1nIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxuICBcbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTAyNHB4KSB7XG4gICAgZ3JpZC1jb2x1bW46IDEgLyA0O1xuICB9XG5gO1xuXG5leHBvcnQgY29uc3QgTGVmdFBob3RvID0gc3R5bGVkLmRpdmBcbiAgaW1nIHtcbiAgICB3aWR0aDogMDtcbiAgfVxuICBcbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTAyNHB4KSB7XG4gICAgZ3JpZC1jb2x1bW46IDEgLyAyO1xuICAgIGdyaWQtcm93OiAyIC8gMztcbiAgICBcbiAgICBpbWcge1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICBvYmplY3QtZml0OiBjb3ZlcjtcbiAgICAgIG9iamVjdC1wb3NpdGlvbjogdG9wO1xuICAgIH1cbiAgfSAgXG5gO1xuXG5leHBvcnQgY29uc3QgQ29udGVudCA9IHN0eWxlZC5kaXZgXG4gIGdyaWQtcm93OiAyIC8gMztcblxuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWZsb3c6IGNvbHVtbiB3cmFwO1xuICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XG4gIHJvdy1nYXA6IDMwcHg7XG4gIFxuICBAbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA3NjhweCkge1xuICAgIGZsZXgtZmxvdzogcm93IHdyYXA7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgcm93LWdhcDogMjBweDtcbiAgICBjb2x1bW4tZ2FwOiAyMHB4O1xuICB9XG5cbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTAyNHB4KSB7XG4gICAgZ3JpZC1jb2x1bW46IDIgLyAzO1xuXG4gICAgcG9zaXRpb246IHN0aWNreTtcbiAgICB0b3A6IDIwMHB4O1xuICAgIGFsaWduLXNlbGY6IHN0YXJ0O1xuICAgIC8vaGVpZ2h0OiAxMDIwcHg7XG4gICAgLy9vdmVyZmxvdzogc2Nyb2xsO1xuICAgIFxuICB9XG5gO1xuXG5leHBvcnQgY29uc3QgUmlnaHRQaG90byA9IHN0eWxlZC5kaXZgXG4gIGltZyB7XG4gICAgd2lkdGg6IDA7XG4gIH1cbiAgXG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDEwMjRweCkge1xuICAgIGdyaWQtY29sdW1uOiAzIC8gNDtcbiAgICBncmlkLXJvdzogMiAvMztcbiAgICBcbiAgICBpbWcge1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICBvYmplY3QtZml0OiBjb3ZlcjtcbiAgICAgIG9iamVjdC1wb3NpdGlvbjogdG9wO1xuICAgIH1cbiAgfVxuYDtcblxuZXhwb3J0IGNvbnN0IEZvb3RlciA9IHN0eWxlZC5kaXZgXG4gIGdyaWQtcm93OiAzIC8gNDtcblxuICBjb2xvcjogI2VjZTZkOTtcbiAgcGFkZGluZzogMXJlbSAxLjVyZW0gMDtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgXG4gIHAge1xuICAgIG1hcmdpbjogMDtcbiAgfVxuICBcbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNzY4cHgpIHtcbiAgICBwYWRkaW5nOiAxcmVtIDJyZW0gMDtcbiAgfVxuXG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDEwMjRweCkge1xuICAgIGdyaWQtY29sdW1uOiAxIC80O1xuICAgIFxuICAgZm9udC1zaXplOiAxLjVyZW07XG4gICAgcGFkZGluZzogMXJlbSAzcmVtIDNyZW07XG4gIH1cbmA7XG5cbmV4cG9ydCBjb25zdCBTdG9yeVBpYyA9IHN0eWxlZC5kaXZgXG4gIHBhZGRpbmc6IDFyZW07XG4gIGZvbnQtZmFtaWx5OiBjdXJzaXZlO1xuICBcbiAgaDIge1xuICAgIG1hcmdpbjogMDtcbiAgfVxuICBcbiAgaW1nIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBib3JkZXItcmFkaXVzOiAxJSAyNSU7XG4gIH1cbmA7XG5cbmV4cG9ydCBjb25zdCBTdG9yeURldGFpbCA9IHN0eWxlZC5kaXZgXG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIHBhZGRpbmc6IDAgMXJlbTtcbiAgXG4gIHNwYW4ge1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICB9XG4gIFxuICBwIHtcbiAgICBtYXJnaW46IDA7XG4gICAgcGFkZGluZy1ib3R0b206IDAuNXJlbTtcbiAgfVxuYDsiXSwibmFtZXMiOlsic3R5bGVkIiwiV3JhcHBlciIsImRpdiIsIkNvbnRhaW5lciIsIkhlYWRlciIsIkxlZnRQaG90byIsIkNvbnRlbnQiLCJSaWdodFBob3RvIiwiRm9vdGVyIiwiU3RvcnlQaWMiLCJTdG9yeURldGFpbCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/homepage/home.style.js\n"));

/***/ })

});