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

/***/ "./components/chapters/chapter.style.js":
/*!**********************************************!*\
  !*** ./components/chapters/chapter.style.js ***!
  \**********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Container\": function() { return /* binding */ Container; },\n/* harmony export */   \"Content\": function() { return /* binding */ Content; },\n/* harmony export */   \"Footer\": function() { return /* binding */ Footer; },\n/* harmony export */   \"Header\": function() { return /* binding */ Header; },\n/* harmony export */   \"Siderbar\": function() { return /* binding */ Siderbar; },\n/* harmony export */   \"Wrapper\": function() { return /* binding */ Wrapper; }\n/* harmony export */ });\n/* harmony import */ var _swc_helpers_src_tagged_template_literal_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @swc/helpers/src/_tagged_template_literal.mjs */ \"./node_modules/@swc/helpers/src/_tagged_template_literal.mjs\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n\nfunction _templateObject() {\n    const data = (0,_swc_helpers_src_tagged_template_literal_mjs__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\n        \"\\n  padding: .5em;\\n  border-radius: 2px;\\n  color: rgba(255, 255, 255, 0.7);\\n  background-color: #171157;\\n\"\n    ]);\n    _templateObject = function() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject1() {\n    const data = (0,_swc_helpers_src_tagged_template_literal_mjs__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\n        '\\n  display: grid;\\n  height: 90vh;\\n  grid-template-columns: 85% 15%;\\n  grid-template-rows: 10% 70% 20%;\\n  grid-template-areas:\\n          \"header header\"\\n          \"content sidebar\"\\n          \"footer footer\";\\n  text-align: center;\\n  row-gap: 0.5em;\\n'\n    ]);\n    _templateObject1 = function() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject2() {\n    const data = (0,_swc_helpers_src_tagged_template_literal_mjs__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\n        \"\\n  grid-column: 1 / 3;\\n  grid-row: 1 / 2;\\n  align-self: center;\\n  padding: 1em;\\n  border: 2px solid #0804A9;\\n  background: linear-gradient(to bottom, #0804AB, #020139);\\n\"\n    ]);\n    _templateObject2 = function() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject3() {\n    const data = (0,_swc_helpers_src_tagged_template_literal_mjs__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\n        \"\\n  grid-column: 1 / 2;\\n  grid-row: 2 / 3;\\n\"\n    ]);\n    _templateObject3 = function() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject4() {\n    const data = (0,_swc_helpers_src_tagged_template_literal_mjs__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\n        \"\\n  grid-column: 2 / 3;\\n  grid-row: 2 / 3;\\n  background-color: #CC9696;\\n\"\n    ]);\n    _templateObject4 = function() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject5() {\n    const data = (0,_swc_helpers_src_tagged_template_literal_mjs__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\n        \"\\n  grid-column: 1 / 3;\\n  grid-row: 3 / 4;\\n  background-color: #000;\\n\"\n    ]);\n    _templateObject5 = function() {\n        return data;\n    };\n    return data;\n}\n\nconst Wrapper = styled_components__WEBPACK_IMPORTED_MODULE_1__[\"default\"].div(_templateObject());\nconst Container = styled_components__WEBPACK_IMPORTED_MODULE_1__[\"default\"].div(_templateObject1());\nconst Header = styled_components__WEBPACK_IMPORTED_MODULE_1__[\"default\"].header(_templateObject2());\nconst Content = styled_components__WEBPACK_IMPORTED_MODULE_1__[\"default\"].div(_templateObject3());\nconst Siderbar = styled_components__WEBPACK_IMPORTED_MODULE_1__[\"default\"].nav(_templateObject4());\nconst Footer = styled_components__WEBPACK_IMPORTED_MODULE_1__[\"default\"].footer(_templateObject5());\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2NoYXB0ZXJzL2NoYXB0ZXIuc3R5bGUuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQXNDO0FBRS9CLE1BQU1DLFVBQVVELDZEQUFVLG9CQUsvQjtBQUVLLE1BQU1HLFlBQVlILDZEQUFVLHFCQVdqQztBQUVLLE1BQU1JLFNBQVNKLGdFQUFhLHFCQU9qQztBQUVLLE1BQU1NLFVBQVVOLDZEQUFVLHFCQUcvQjtBQUVLLE1BQU1PLFdBQVdQLDZEQUFVLHFCQUloQztBQUVLLE1BQU1TLFNBQVNULGdFQUFhLHFCQUlqQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL2NoYXB0ZXJzL2NoYXB0ZXIuc3R5bGUuanM/ODE4MyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJ1xuXG5leHBvcnQgY29uc3QgV3JhcHBlciA9IHN0eWxlZC5kaXZgXG4gIHBhZGRpbmc6IC41ZW07XG4gIGJvcmRlci1yYWRpdXM6IDJweDtcbiAgY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC43KTtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzE3MTE1NztcbmA7XG5cbmV4cG9ydCBjb25zdCBDb250YWluZXIgPSBzdHlsZWQuZGl2YFxuICBkaXNwbGF5OiBncmlkO1xuICBoZWlnaHQ6IDkwdmg7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogODUlIDE1JTtcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxMCUgNzAlIDIwJTtcbiAgZ3JpZC10ZW1wbGF0ZS1hcmVhczpcbiAgICAgICAgICBcImhlYWRlciBoZWFkZXJcIlxuICAgICAgICAgIFwiY29udGVudCBzaWRlYmFyXCJcbiAgICAgICAgICBcImZvb3RlciBmb290ZXJcIjtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICByb3ctZ2FwOiAwLjVlbTtcbmA7XG5cbmV4cG9ydCBjb25zdCBIZWFkZXIgPSBzdHlsZWQuaGVhZGVyYFxuICBncmlkLWNvbHVtbjogMSAvIDM7XG4gIGdyaWQtcm93OiAxIC8gMjtcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xuICBwYWRkaW5nOiAxZW07XG4gIGJvcmRlcjogMnB4IHNvbGlkICMwODA0QTk7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byBib3R0b20sICMwODA0QUIsICMwMjAxMzkpO1xuYDtcblxuZXhwb3J0IGNvbnN0IENvbnRlbnQgPSBzdHlsZWQuZGl2YFxuICBncmlkLWNvbHVtbjogMSAvIDI7XG4gIGdyaWQtcm93OiAyIC8gMztcbmA7XG5cbmV4cG9ydCBjb25zdCBTaWRlcmJhciA9IHN0eWxlZC5uYXZgXG4gIGdyaWQtY29sdW1uOiAyIC8gMztcbiAgZ3JpZC1yb3c6IDIgLyAzO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjQ0M5Njk2O1xuYDtcblxuZXhwb3J0IGNvbnN0IEZvb3RlciA9IHN0eWxlZC5mb290ZXJgXG4gIGdyaWQtY29sdW1uOiAxIC8gMztcbiAgZ3JpZC1yb3c6IDMgLyA0O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwO1xuYDtcbiJdLCJuYW1lcyI6WyJzdHlsZWQiLCJXcmFwcGVyIiwiZGl2IiwiQ29udGFpbmVyIiwiSGVhZGVyIiwiaGVhZGVyIiwiQ29udGVudCIsIlNpZGVyYmFyIiwibmF2IiwiRm9vdGVyIiwiZm9vdGVyIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/chapters/chapter.style.js\n"));

/***/ })

});