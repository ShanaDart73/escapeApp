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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Container\": function() { return /* binding */ Container; },\n/* harmony export */   \"Content\": function() { return /* binding */ Content; },\n/* harmony export */   \"Footer\": function() { return /* binding */ Footer; },\n/* harmony export */   \"Header\": function() { return /* binding */ Header; },\n/* harmony export */   \"NextBtn\": function() { return /* binding */ NextBtn; },\n/* harmony export */   \"PrevBtn\": function() { return /* binding */ PrevBtn; },\n/* harmony export */   \"Sidebar\": function() { return /* binding */ Sidebar; },\n/* harmony export */   \"Wrapper\": function() { return /* binding */ Wrapper; }\n/* harmony export */ });\n/* harmony import */ var _swc_helpers_src_tagged_template_literal_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @swc/helpers/src/_tagged_template_literal.mjs */ \"./node_modules/@swc/helpers/src/_tagged_template_literal.mjs\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n\nfunction _templateObject() {\n    const data = (0,_swc_helpers_src_tagged_template_literal_mjs__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\n        '\\n  -webkit-user-select: none;\\n  -moz-user-select: none;\\n  -ms-user-select: none;\\n  user-select: none;\\n\\n  ::selection {\\n    background: none;\\n  }\\n  ::-moz-selection {\\n    background: none;\\n  }\\n  \\n  font-size: 1em;\\n  font-family: \"Times New Roman\", Arial, serif, Verdana, Tahoma;\\n  padding: .5em;\\n  color: rgba(255, 255, 255, 0.7);\\n  background-color: #171157;\\n  \\n  @media screen and (min-width: 760px) {\\n    font-size: 1.5em;\\n  }\\n'\n    ]);\n    _templateObject = function() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject1() {\n    const data = (0,_swc_helpers_src_tagged_template_literal_mjs__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\n        '\\n  display: grid;\\n  grid-template-columns: 85% 15%;\\n  grid-template-rows: auto 1fr auto;\\n  grid-template-areas:\\n          \"header header\"\\n          \"content sidebar\"\\n          \"footer\";\\n  text-align: center;\\n  row-gap: 0.5em;\\n'\n    ]);\n    _templateObject1 = function() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject2() {\n    const data = (0,_swc_helpers_src_tagged_template_literal_mjs__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\n        \"\\n  grid-column: 1 / 3;\\n  grid-row: 1 / 2;\\n  position: sticky;\\n  top: 0;\\n  align-self: center;\\n  padding: 1em;\\n  border: 2px solid #0804A9;\\n  background: linear-gradient(to bottom, #0804AB, #020139);\\n  \\n  @media screen and (min-width: 768px) {\\n    font-size: 1.5em;\\n  }\\n\"\n    ]);\n    _templateObject2 = function() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject3() {\n    const data = (0,_swc_helpers_src_tagged_template_literal_mjs__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\n        \"\\n  grid-column: 1 / 2;\\n  grid-row: 2 / 3;\\n  padding: 0.5em 0.8em 0.5em 0.5em;\\n  text-align: justify;\\n  \\n  small {\\n    opacity: 0.5;\\n  }\\n\"\n    ]);\n    _templateObject3 = function() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject4() {\n    const data = (0,_swc_helpers_src_tagged_template_literal_mjs__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\n        \"\\n  grid-column: 2 / 3;\\n  grid-row: 2 / 3;\\n  height: 90vh;\\n  position: sticky;\\n  top: 4em;\\n  align-self: start;\\n  padding-top: 1em;\\n  border-radius: 2px;\\n  border: 2px solid #0804A9;\\n  background: linear-gradient(to right, #4c3434, #CC9696);\\n  \\n  display: flex;\\n  flex-direction: column;\\n  align-items: center;\\n  row-gap: 1em;\\n\"\n    ]);\n    _templateObject4 = function() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject5() {\n    const data = (0,_swc_helpers_src_tagged_template_literal_mjs__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\n        \"\\n  grid-column: 1 / 2;\\n  grid-row: 3 / 4;\\n  align-self: center;\\n  text-align: end;\\n  padding: 0 1em;\\n  \\n  display: flex;\\n  justify-content: end;\\n  column-gap: 1em;\\n\"\n    ]);\n    _templateObject5 = function() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject6() {\n    const data = (0,_swc_helpers_src_tagged_template_literal_mjs__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\n        \"\\n  color: rgba(255, 255, 255, 0.7);\\n  padding: 1em;\\n  border: 2px solid #0804A9;\\n  border-radius: 5px;\\n  background: linear-gradient(to bottom, #020139, #0804AB);\\n\"\n    ]);\n    _templateObject6 = function() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject7() {\n    const data = (0,_swc_helpers_src_tagged_template_literal_mjs__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\n        \"\"\n    ]);\n    _templateObject7 = function() {\n        return data;\n    };\n    return data;\n}\n\nconst Wrapper = styled_components__WEBPACK_IMPORTED_MODULE_1__[\"default\"].div(_templateObject());\nconst Container = styled_components__WEBPACK_IMPORTED_MODULE_1__[\"default\"].div(_templateObject1());\nconst Header = styled_components__WEBPACK_IMPORTED_MODULE_1__[\"default\"].header(_templateObject2());\nconst Content = styled_components__WEBPACK_IMPORTED_MODULE_1__[\"default\"].div(_templateObject3());\nconst Sidebar = styled_components__WEBPACK_IMPORTED_MODULE_1__[\"default\"].nav(_templateObject4());\nconst Footer = styled_components__WEBPACK_IMPORTED_MODULE_1__[\"default\"].footer(_templateObject5());\nconst NextBtn = styled_components__WEBPACK_IMPORTED_MODULE_1__[\"default\"].button(_templateObject6());\nconst PrevBtn = (0,styled_components__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(NextBtn)(_templateObject7());\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2xvc3RPZk9ibGl2aW9uL2NoYXB0ZXJzL2NoYXB0ZXIuc3R5bGUuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBc0M7QUFFL0IsTUFBTUMsVUFBVUQsNkRBQVUsb0JBc0IvQjtBQUVLLE1BQU1HLFlBQVlILDZEQUFVLHFCQVVqQztBQUVLLE1BQU1JLFNBQVNKLGdFQUFhLHFCQWFqQztBQUVLLE1BQU1NLFVBQVVOLDZEQUFVLHFCQVMvQjtBQUVLLE1BQU1PLFVBQVVQLDZEQUFVLHFCQWdCL0I7QUFFSyxNQUFNUyxTQUFTVCxnRUFBYSxxQkFVakM7QUFFSyxNQUFNVyxVQUFVWCxnRUFBYSxxQkFNbEM7QUFFSyxNQUFNYSxVQUFVYiw2REFBTUEsQ0FBQ1csNkJBQVciLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9sb3N0T2ZPYmxpdmlvbi9jaGFwdGVycy9jaGFwdGVyLnN0eWxlLmpzPzJmNDgiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cydcblxuZXhwb3J0IGNvbnN0IFdyYXBwZXIgPSBzdHlsZWQuZGl2YFxuICAtd2Via2l0LXVzZXItc2VsZWN0OiBub25lO1xuICAtbW96LXVzZXItc2VsZWN0OiBub25lO1xuICAtbXMtdXNlci1zZWxlY3Q6IG5vbmU7XG4gIHVzZXItc2VsZWN0OiBub25lO1xuXG4gIDo6c2VsZWN0aW9uIHtcbiAgICBiYWNrZ3JvdW5kOiBub25lO1xuICB9XG4gIDo6LW1vei1zZWxlY3Rpb24ge1xuICAgIGJhY2tncm91bmQ6IG5vbmU7XG4gIH1cbiAgXG4gIGZvbnQtc2l6ZTogMWVtO1xuICBmb250LWZhbWlseTogXCJUaW1lcyBOZXcgUm9tYW5cIiwgQXJpYWwsIHNlcmlmLCBWZXJkYW5hLCBUYWhvbWE7XG4gIHBhZGRpbmc6IC41ZW07XG4gIGNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNyk7XG4gIGJhY2tncm91bmQtY29sb3I6ICMxNzExNTc7XG4gIFxuICBAbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA3NjBweCkge1xuICAgIGZvbnQtc2l6ZTogMS41ZW07XG4gIH1cbmA7XG5cbmV4cG9ydCBjb25zdCBDb250YWluZXIgPSBzdHlsZWQuZGl2YFxuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDg1JSAxNSU7XG4gIGdyaWQtdGVtcGxhdGUtcm93czogYXV0byAxZnIgYXV0bztcbiAgZ3JpZC10ZW1wbGF0ZS1hcmVhczpcbiAgICAgICAgICBcImhlYWRlciBoZWFkZXJcIlxuICAgICAgICAgIFwiY29udGVudCBzaWRlYmFyXCJcbiAgICAgICAgICBcImZvb3RlclwiO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHJvdy1nYXA6IDAuNWVtO1xuYDtcblxuZXhwb3J0IGNvbnN0IEhlYWRlciA9IHN0eWxlZC5oZWFkZXJgXG4gIGdyaWQtY29sdW1uOiAxIC8gMztcbiAgZ3JpZC1yb3c6IDEgLyAyO1xuICBwb3NpdGlvbjogc3RpY2t5O1xuICB0b3A6IDA7XG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcbiAgcGFkZGluZzogMWVtO1xuICBib3JkZXI6IDJweCBzb2xpZCAjMDgwNEE5O1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tLCAjMDgwNEFCLCAjMDIwMTM5KTtcbiAgXG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDc2OHB4KSB7XG4gICAgZm9udC1zaXplOiAxLjVlbTtcbiAgfVxuYDtcblxuZXhwb3J0IGNvbnN0IENvbnRlbnQgPSBzdHlsZWQuZGl2YFxuICBncmlkLWNvbHVtbjogMSAvIDI7XG4gIGdyaWQtcm93OiAyIC8gMztcbiAgcGFkZGluZzogMC41ZW0gMC44ZW0gMC41ZW0gMC41ZW07XG4gIHRleHQtYWxpZ246IGp1c3RpZnk7XG4gIFxuICBzbWFsbCB7XG4gICAgb3BhY2l0eTogMC41O1xuICB9XG5gO1xuXG5leHBvcnQgY29uc3QgU2lkZWJhciA9IHN0eWxlZC5uYXZgXG4gIGdyaWQtY29sdW1uOiAyIC8gMztcbiAgZ3JpZC1yb3c6IDIgLyAzO1xuICBoZWlnaHQ6IDkwdmg7XG4gIHBvc2l0aW9uOiBzdGlja3k7XG4gIHRvcDogNGVtO1xuICBhbGlnbi1zZWxmOiBzdGFydDtcbiAgcGFkZGluZy10b3A6IDFlbTtcbiAgYm9yZGVyLXJhZGl1czogMnB4O1xuICBib3JkZXI6IDJweCBzb2xpZCAjMDgwNEE5O1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsICM0YzM0MzQsICNDQzk2OTYpO1xuICBcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgcm93LWdhcDogMWVtO1xuYDtcblxuZXhwb3J0IGNvbnN0IEZvb3RlciA9IHN0eWxlZC5mb290ZXJgXG4gIGdyaWQtY29sdW1uOiAxIC8gMjtcbiAgZ3JpZC1yb3c6IDMgLyA0O1xuICBhbGlnbi1zZWxmOiBjZW50ZXI7XG4gIHRleHQtYWxpZ246IGVuZDtcbiAgcGFkZGluZzogMCAxZW07XG4gIFxuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGVuZDtcbiAgY29sdW1uLWdhcDogMWVtO1xuYDtcblxuZXhwb3J0IGNvbnN0IE5leHRCdG4gPSBzdHlsZWQuYnV0dG9uYFxuICBjb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjcpO1xuICBwYWRkaW5nOiAxZW07XG4gIGJvcmRlcjogMnB4IHNvbGlkICMwODA0QTk7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSwgIzAyMDEzOSwgIzA4MDRBQik7XG5gO1xuXG5leHBvcnQgY29uc3QgUHJldkJ0biA9IHN0eWxlZChOZXh0QnRuKWBgOyJdLCJuYW1lcyI6WyJzdHlsZWQiLCJXcmFwcGVyIiwiZGl2IiwiQ29udGFpbmVyIiwiSGVhZGVyIiwiaGVhZGVyIiwiQ29udGVudCIsIlNpZGViYXIiLCJuYXYiLCJGb290ZXIiLCJmb290ZXIiLCJOZXh0QnRuIiwiYnV0dG9uIiwiUHJldkJ0biJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/lostOfOblivion/chapters/chapter.style.js\n"));

/***/ })

});