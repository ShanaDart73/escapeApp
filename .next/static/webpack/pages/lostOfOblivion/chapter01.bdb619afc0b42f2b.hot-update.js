"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/lostOfOblivion/chapter01",{

/***/ "./components/lostOfOblivion/chapters/chapter.style.js":
/*!*************************************************************!*\
  !*** ./components/lostOfOblivion/chapters/chapter.style.js ***!
  \*************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Container\": function() { return /* binding */ Container; },\n/* harmony export */   \"Content\": function() { return /* binding */ Content; },\n/* harmony export */   \"Footer\": function() { return /* binding */ Footer; },\n/* harmony export */   \"Header\": function() { return /* binding */ Header; },\n/* harmony export */   \"LeftPicture\": function() { return /* binding */ LeftPicture; },\n/* harmony export */   \"NextBtn\": function() { return /* binding */ NextBtn; },\n/* harmony export */   \"PrevBtn\": function() { return /* binding */ PrevBtn; },\n/* harmony export */   \"RightPicture\": function() { return /* binding */ RightPicture; },\n/* harmony export */   \"Sidebar\": function() { return /* binding */ Sidebar; },\n/* harmony export */   \"Wrapper\": function() { return /* binding */ Wrapper; }\n/* harmony export */ });\n/* harmony import */ var _swc_helpers_src_tagged_template_literal_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @swc/helpers/src/_tagged_template_literal.mjs */ \"./node_modules/@swc/helpers/src/_tagged_template_literal.mjs\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n\nfunction _templateObject() {\n    const data = (0,_swc_helpers_src_tagged_template_literal_mjs__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\n        '\\n  -webkit-user-select: none;\\n  -moz-user-select: none;\\n  -ms-user-select: none;\\n  user-select: none;\\n\\n  ::selection {\\n    background: none;\\n  }\\n  ::-moz-selection {\\n    background: none;\\n  }\\n  \\n  font-size: 1em;\\n  font-family: \"Times New Roman\", Arial, serif, Verdana, Tahoma;\\n  padding: .5em;\\n  color: rgba(255, 255, 255, 0.5);\\n  background-color: #171157;\\n  \\n  @media screen and (min-width: 760px) {\\n    font-size: 1.5em;\\n  }\\n'\n    ]);\n    _templateObject = function() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject1() {\n    const data = (0,_swc_helpers_src_tagged_template_literal_mjs__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\n        '\\n  display: grid;\\n  grid-template-columns: 85% 15%;\\n  grid-template-rows: auto 1fr auto;\\n  grid-template-areas:\\n          \"header header\"\\n          \"content sidebar\"\\n          \"footer\";\\n  text-align: center;\\n  row-gap: 0.5em;\\n  \\n  @media screen and (min-width: 768px) {\\n    grid-template-columns: 25% 65% 10%;\\n    grid-template-areas: \\n            \"header header header\" \\n            \"leftPicture content sidebar\" \\n            \"footer\";\\n  }\\n  \\n  @media screen and (min-width: 1024px) {\\n    grid-template-columns: 20% 53% 7% 20%;\\n    grid-template-areas: \\n            \"header header header header\" \\n            \"leftPicture conteny sidebar rightPicture\" \\n            \"footer\";\\n  }\\n'\n    ]);\n    _templateObject1 = function() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject2() {\n    const data = (0,_swc_helpers_src_tagged_template_literal_mjs__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\n        \"\\n  grid-column: 1 / 3;\\n  grid-row: 1 / 2;\\n  position: sticky;\\n  top: 0;\\n  align-self: center;\\n  padding: 1em;\\n  border: 2px solid #0804A9;\\n  background: linear-gradient(to bottom, #0804AB, #020139);\\n  \\n  @media screen and (min-width: 768px) {\\n    grid-column: 1 / 4;\\n    font-size: 1.3em;\\n  }\\n  \\n  @media screen and (min-width: 1024px) {\\n    grid-column: 1 / 5;\\n    font-size: 1.6em;\\n    padding: 0.8em;\\n  }\\n\"\n    ]);\n    _templateObject2 = function() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject3() {\n    const data = (0,_swc_helpers_src_tagged_template_literal_mjs__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\n        \"\\n  img {\\n    width: 0;\\n  }\\n  \\n  @media screen and (min-width: 768px) {\\n    grid-column: 1 / 2;\\n    grid-row: 2 / 3;\\n    height: 88vh;\\n    position: sticky;\\n    top: 4em;\\n    align-self: start;\\n    \\n    img {\\n      width: 100%;\\n      height: 88vh;\\n    }\\n  }\\n\\n  @media screen and (min-width: 1024px) {\\n    height: 86vh;\\n  }\\n\"\n    ]);\n    _templateObject3 = function() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject4() {\n    const data = (0,_swc_helpers_src_tagged_template_literal_mjs__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\n        \"\\n  grid-column: 1 / 2;\\n  grid-row: 2 / 3;\\n  padding: 0.5em 0.8em 0.5em 0.5em;\\n  text-align: justify;\\n  \\n  small {\\n    opacity: 0.5;\\n  }\\n  \\n  @media screen and (min-width: 768px) {\\n    grid-column: 2 / 3;\\n  }\\n\"\n    ]);\n    _templateObject4 = function() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject5() {\n    const data = (0,_swc_helpers_src_tagged_template_literal_mjs__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\n        \"\\n  grid-column: 2 / 3;\\n  grid-row: 2 / 3;\\n  height: 86vh;\\n  position: sticky;\\n  top: 4em;\\n  align-self: start;\\n  padding-top: 1em;\\n  border-radius: 2px;\\n  border: 2px solid #0804A9;\\n  background: linear-gradient(to right, #4c3434, #CC9696);\\n  \\n  display: flex;\\n  flex-direction: column;\\n  align-items: center;\\n  row-gap: 1em;\\n  \\n  @media screen and (min-width: 768px) {\\n    grid-column: 3 / 4;\\n  }\\n  \\n  @media screen and (min-width: 1024px) {\\n    height: 82vh;\\n  }\\n\"\n    ]);\n    _templateObject5 = function() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject6() {\n    const data = (0,_swc_helpers_src_tagged_template_literal_mjs__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\n        \"\\n  @media screen and (min-width: 1024px) {\\n    grid-column: 4 /5;\\n    grid-row: 2 / 3;\\n  }\\n\"\n    ]);\n    _templateObject6 = function() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject7() {\n    const data = (0,_swc_helpers_src_tagged_template_literal_mjs__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\n        \"\\n  grid-column: 1 / 2;\\n  grid-row: 3 / 4;\\n  align-self: center;\\n  text-align: end;\\n  padding: 0 1em;\\n  \\n  display: flex;\\n  justify-content: end;\\n  column-gap: 1em;\\n  \\n  @media screen and (min-width: 768px) {\\n    grid-column: 2 / 3;\\n  }\\n\"\n    ]);\n    _templateObject7 = function() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject8() {\n    const data = (0,_swc_helpers_src_tagged_template_literal_mjs__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\n        \"\\n  color: rgba(255, 255, 255, 0.7);\\n  padding: 1em;\\n  border: 2px solid #0804A9;\\n  border-radius: 5px;\\n  background: linear-gradient(to bottom, #020139, #0804AB);\\n  \\n  @media screen and (min-width: 768px) {\\n    font-size: 1em;\\n  }\\n\"\n    ]);\n    _templateObject8 = function() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject9() {\n    const data = (0,_swc_helpers_src_tagged_template_literal_mjs__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\n        \"\"\n    ]);\n    _templateObject9 = function() {\n        return data;\n    };\n    return data;\n}\n\nconst Wrapper = styled_components__WEBPACK_IMPORTED_MODULE_1__[\"default\"].div(_templateObject());\nconst Container = styled_components__WEBPACK_IMPORTED_MODULE_1__[\"default\"].div(_templateObject1());\nconst Header = styled_components__WEBPACK_IMPORTED_MODULE_1__[\"default\"].header(_templateObject2());\nconst LeftPicture = styled_components__WEBPACK_IMPORTED_MODULE_1__[\"default\"].div(_templateObject3());\nconst Content = styled_components__WEBPACK_IMPORTED_MODULE_1__[\"default\"].div(_templateObject4());\nconst Sidebar = styled_components__WEBPACK_IMPORTED_MODULE_1__[\"default\"].nav(_templateObject5());\nconst RightPicture = styled_components__WEBPACK_IMPORTED_MODULE_1__[\"default\"].div(_templateObject6());\nconst Footer = styled_components__WEBPACK_IMPORTED_MODULE_1__[\"default\"].footer(_templateObject7());\nconst NextBtn = styled_components__WEBPACK_IMPORTED_MODULE_1__[\"default\"].button(_templateObject8());\nconst PrevBtn = (0,styled_components__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(NextBtn)(_templateObject9());\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2xvc3RPZk9ibGl2aW9uL2NoYXB0ZXJzL2NoYXB0ZXIuc3R5bGUuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFzQztBQUUvQixNQUFNQyxVQUFVRCw2REFBVSxvQkFzQi9CO0FBRUssTUFBTUcsWUFBWUgsNkRBQVUscUJBMEJqQztBQUVLLE1BQU1JLFNBQVNKLGdFQUFhLHFCQW9CakM7QUFFSyxNQUFNTSxjQUFjTiw2REFBVSxxQkFzQm5DO0FBRUssTUFBTU8sVUFBVVAsNkRBQVUscUJBYS9CO0FBRUssTUFBTVEsVUFBVVIsNkRBQVUscUJBd0IvQjtBQUVLLE1BQU1VLGVBQWVWLDZEQUFVLHFCQUtwQztBQUVLLE1BQU1XLFNBQVNYLGdFQUFhLHFCQWNqQztBQUVLLE1BQU1hLFVBQVViLGdFQUFhLHFCQVVsQztBQUVLLE1BQU1lLFVBQVVmLDZEQUFNQSxDQUFDYSw2QkFBVyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL2xvc3RPZk9ibGl2aW9uL2NoYXB0ZXJzL2NoYXB0ZXIuc3R5bGUuanM/MmY0OCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJ1xuXG5leHBvcnQgY29uc3QgV3JhcHBlciA9IHN0eWxlZC5kaXZgXG4gIC13ZWJraXQtdXNlci1zZWxlY3Q6IG5vbmU7XG4gIC1tb3otdXNlci1zZWxlY3Q6IG5vbmU7XG4gIC1tcy11c2VyLXNlbGVjdDogbm9uZTtcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XG5cbiAgOjpzZWxlY3Rpb24ge1xuICAgIGJhY2tncm91bmQ6IG5vbmU7XG4gIH1cbiAgOjotbW96LXNlbGVjdGlvbiB7XG4gICAgYmFja2dyb3VuZDogbm9uZTtcbiAgfVxuICBcbiAgZm9udC1zaXplOiAxZW07XG4gIGZvbnQtZmFtaWx5OiBcIlRpbWVzIE5ldyBSb21hblwiLCBBcmlhbCwgc2VyaWYsIFZlcmRhbmEsIFRhaG9tYTtcbiAgcGFkZGluZzogLjVlbTtcbiAgY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC41KTtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzE3MTE1NztcbiAgXG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDc2MHB4KSB7XG4gICAgZm9udC1zaXplOiAxLjVlbTtcbiAgfVxuYDtcblxuZXhwb3J0IGNvbnN0IENvbnRhaW5lciA9IHN0eWxlZC5kaXZgXG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogODUlIDE1JTtcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiBhdXRvIDFmciBhdXRvO1xuICBncmlkLXRlbXBsYXRlLWFyZWFzOlxuICAgICAgICAgIFwiaGVhZGVyIGhlYWRlclwiXG4gICAgICAgICAgXCJjb250ZW50IHNpZGViYXJcIlxuICAgICAgICAgIFwiZm9vdGVyXCI7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgcm93LWdhcDogMC41ZW07XG4gIFxuICBAbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA3NjhweCkge1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMjUlIDY1JSAxMCU7XG4gICAgZ3JpZC10ZW1wbGF0ZS1hcmVhczogXG4gICAgICAgICAgICBcImhlYWRlciBoZWFkZXIgaGVhZGVyXCIgXG4gICAgICAgICAgICBcImxlZnRQaWN0dXJlIGNvbnRlbnQgc2lkZWJhclwiIFxuICAgICAgICAgICAgXCJmb290ZXJcIjtcbiAgfVxuICBcbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTAyNHB4KSB7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAyMCUgNTMlIDclIDIwJTtcbiAgICBncmlkLXRlbXBsYXRlLWFyZWFzOiBcbiAgICAgICAgICAgIFwiaGVhZGVyIGhlYWRlciBoZWFkZXIgaGVhZGVyXCIgXG4gICAgICAgICAgICBcImxlZnRQaWN0dXJlIGNvbnRlbnkgc2lkZWJhciByaWdodFBpY3R1cmVcIiBcbiAgICAgICAgICAgIFwiZm9vdGVyXCI7XG4gIH1cbmA7XG5cbmV4cG9ydCBjb25zdCBIZWFkZXIgPSBzdHlsZWQuaGVhZGVyYFxuICBncmlkLWNvbHVtbjogMSAvIDM7XG4gIGdyaWQtcm93OiAxIC8gMjtcbiAgcG9zaXRpb246IHN0aWNreTtcbiAgdG9wOiAwO1xuICBhbGlnbi1zZWxmOiBjZW50ZXI7XG4gIHBhZGRpbmc6IDFlbTtcbiAgYm9yZGVyOiAycHggc29saWQgIzA4MDRBOTtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSwgIzA4MDRBQiwgIzAyMDEzOSk7XG4gIFxuICBAbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA3NjhweCkge1xuICAgIGdyaWQtY29sdW1uOiAxIC8gNDtcbiAgICBmb250LXNpemU6IDEuM2VtO1xuICB9XG4gIFxuICBAbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxMDI0cHgpIHtcbiAgICBncmlkLWNvbHVtbjogMSAvIDU7XG4gICAgZm9udC1zaXplOiAxLjZlbTtcbiAgICBwYWRkaW5nOiAwLjhlbTtcbiAgfVxuYDtcblxuZXhwb3J0IGNvbnN0IExlZnRQaWN0dXJlID0gc3R5bGVkLmRpdmBcbiAgaW1nIHtcbiAgICB3aWR0aDogMDtcbiAgfVxuICBcbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNzY4cHgpIHtcbiAgICBncmlkLWNvbHVtbjogMSAvIDI7XG4gICAgZ3JpZC1yb3c6IDIgLyAzO1xuICAgIGhlaWdodDogODh2aDtcbiAgICBwb3NpdGlvbjogc3RpY2t5O1xuICAgIHRvcDogNGVtO1xuICAgIGFsaWduLXNlbGY6IHN0YXJ0O1xuICAgIFxuICAgIGltZyB7XG4gICAgICB3aWR0aDogMTAwJTtcbiAgICAgIGhlaWdodDogODh2aDtcbiAgICB9XG4gIH1cblxuICBAbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxMDI0cHgpIHtcbiAgICBoZWlnaHQ6IDg2dmg7XG4gIH1cbmA7XG5cbmV4cG9ydCBjb25zdCBDb250ZW50ID0gc3R5bGVkLmRpdmBcbiAgZ3JpZC1jb2x1bW46IDEgLyAyO1xuICBncmlkLXJvdzogMiAvIDM7XG4gIHBhZGRpbmc6IDAuNWVtIDAuOGVtIDAuNWVtIDAuNWVtO1xuICB0ZXh0LWFsaWduOiBqdXN0aWZ5O1xuICBcbiAgc21hbGwge1xuICAgIG9wYWNpdHk6IDAuNTtcbiAgfVxuICBcbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNzY4cHgpIHtcbiAgICBncmlkLWNvbHVtbjogMiAvIDM7XG4gIH1cbmA7XG5cbmV4cG9ydCBjb25zdCBTaWRlYmFyID0gc3R5bGVkLm5hdmBcbiAgZ3JpZC1jb2x1bW46IDIgLyAzO1xuICBncmlkLXJvdzogMiAvIDM7XG4gIGhlaWdodDogODZ2aDtcbiAgcG9zaXRpb246IHN0aWNreTtcbiAgdG9wOiA0ZW07XG4gIGFsaWduLXNlbGY6IHN0YXJ0O1xuICBwYWRkaW5nLXRvcDogMWVtO1xuICBib3JkZXItcmFkaXVzOiAycHg7XG4gIGJvcmRlcjogMnB4IHNvbGlkICMwODA0QTk7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgIzRjMzQzNCwgI0NDOTY5Nik7XG4gIFxuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICByb3ctZ2FwOiAxZW07XG4gIFxuICBAbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA3NjhweCkge1xuICAgIGdyaWQtY29sdW1uOiAzIC8gNDtcbiAgfVxuICBcbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTAyNHB4KSB7XG4gICAgaGVpZ2h0OiA4MnZoO1xuICB9XG5gO1xuXG5leHBvcnQgY29uc3QgUmlnaHRQaWN0dXJlID0gc3R5bGVkLmRpdmBcbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTAyNHB4KSB7XG4gICAgZ3JpZC1jb2x1bW46IDQgLzU7XG4gICAgZ3JpZC1yb3c6IDIgLyAzO1xuICB9XG5gO1xuXG5leHBvcnQgY29uc3QgRm9vdGVyID0gc3R5bGVkLmZvb3RlcmBcbiAgZ3JpZC1jb2x1bW46IDEgLyAyO1xuICBncmlkLXJvdzogMyAvIDQ7XG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcbiAgdGV4dC1hbGlnbjogZW5kO1xuICBwYWRkaW5nOiAwIDFlbTtcbiAgXG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogZW5kO1xuICBjb2x1bW4tZ2FwOiAxZW07XG4gIFxuICBAbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA3NjhweCkge1xuICAgIGdyaWQtY29sdW1uOiAyIC8gMztcbiAgfVxuYDtcblxuZXhwb3J0IGNvbnN0IE5leHRCdG4gPSBzdHlsZWQuYnV0dG9uYFxuICBjb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjcpO1xuICBwYWRkaW5nOiAxZW07XG4gIGJvcmRlcjogMnB4IHNvbGlkICMwODA0QTk7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSwgIzAyMDEzOSwgIzA4MDRBQik7XG4gIFxuICBAbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA3NjhweCkge1xuICAgIGZvbnQtc2l6ZTogMWVtO1xuICB9XG5gO1xuXG5leHBvcnQgY29uc3QgUHJldkJ0biA9IHN0eWxlZChOZXh0QnRuKWBgOyJdLCJuYW1lcyI6WyJzdHlsZWQiLCJXcmFwcGVyIiwiZGl2IiwiQ29udGFpbmVyIiwiSGVhZGVyIiwiaGVhZGVyIiwiTGVmdFBpY3R1cmUiLCJDb250ZW50IiwiU2lkZWJhciIsIm5hdiIsIlJpZ2h0UGljdHVyZSIsIkZvb3RlciIsImZvb3RlciIsIk5leHRCdG4iLCJidXR0b24iLCJQcmV2QnRuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/lostOfOblivion/chapters/chapter.style.js\n"));

/***/ })

});