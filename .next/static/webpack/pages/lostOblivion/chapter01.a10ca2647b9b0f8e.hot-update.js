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

/***/ "./data/lostOblivion/sidebarIcons/nav.style.js":
/*!*****************************************************!*\
  !*** ./data/lostOblivion/sidebarIcons/nav.style.js ***!
  \*****************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"CloseNav\": function() { return /* binding */ CloseNav; },\n/* harmony export */   \"Menu\": function() { return /* binding */ Menu; },\n/* harmony export */   \"NavLink\": function() { return /* binding */ NavLink; },\n/* harmony export */   \"Sidenav\": function() { return /* binding */ Sidenav; }\n/* harmony export */ });\n/* harmony import */ var _swc_helpers_src_tagged_template_literal_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @swc/helpers/src/_tagged_template_literal.mjs */ \"./node_modules/@swc/helpers/src/_tagged_template_literal.mjs\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);\n\nfunction _templateObject() {\n    const data = (0,_swc_helpers_src_tagged_template_literal_mjs__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\n        \"\\n  height: 100%;\\n  width: \",\n        \";\\n  position: fixed;\\n  z-index: 1;\\n  top: 0;\\n  right: 0;\\n  \\n  background-color: #111111;\\n  overflow-x: hidden;\\n  transition: 0.5s;\\n  padding-top: 60px;\\n  \\n  div {\\n    padding: 8px 32px 8px 8px;\\n    font-size: 25px;\\n    color: #818181;\\n    display: block;\\n    transition: 0.5s;\\n  }\\n\"\n    ]);\n    _templateObject = function() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject1() {\n    const data = (0,_swc_helpers_src_tagged_template_literal_mjs__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\n        \"\\n  padding: 8px 32px 8px 8px;\\n  text-decoration: none;\\n  text-align: left;\\n  font-size: 25px;\\n  color: #818181;\\n  display: block;\\n  transition: 0.5s;\\n\"\n    ]);\n    _templateObject1 = function() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject2() {\n    const data = (0,_swc_helpers_src_tagged_template_literal_mjs__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\n        \"\\n  position: absolute;\\n  top: 0;\\n  left: 25px;\\n  margin-right: 50px;\\n  \\n  span {\\n    font-size: 36px;\\n  }\\n\"\n    ]);\n    _templateObject2 = function() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject3() {\n    const data = (0,_swc_helpers_src_tagged_template_literal_mjs__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\n        \"\\n  font-size: 30px;\\n  cursor: pointer;\\n \\n\"\n    ]);\n    _templateObject3 = function() {\n        return data;\n    };\n    return data;\n}\n\n\nlet Width = \"250px\";\nconst Sidenav = styled_components__WEBPACK_IMPORTED_MODULE_2__[\"default\"].nav(_templateObject(), Width);\nconst NavLink = (0,styled_components__WEBPACK_IMPORTED_MODULE_2__[\"default\"])((next_link__WEBPACK_IMPORTED_MODULE_1___default()))(_templateObject1());\nconst CloseNav = styled_components__WEBPACK_IMPORTED_MODULE_2__[\"default\"].div(_templateObject2());\nconst Menu = styled_components__WEBPACK_IMPORTED_MODULE_2__[\"default\"].span(_templateObject3());\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9kYXRhL2xvc3RPYmxpdmlvbi9zaWRlYmFySWNvbnMvbmF2LnN0eWxlLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBc0M7QUFDVjtBQUU1QixJQUFJRSxRQUFRO0FBRUwsTUFBTUMsVUFBVUgsNkRBQVUsb0JBRXRCRSxPQWtCVDtBQUVLLE1BQU1HLFVBQVVMLDZEQUFNQSxDQUFDQyxrREFBSUEsc0JBUWhDO0FBRUssTUFBTUssV0FBV04sNkRBQVUscUJBU2hDO0FBRUssTUFBTVEsT0FBT1IsOERBQVcscUJBSTdCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2RhdGEvbG9zdE9ibGl2aW9uL3NpZGViYXJJY29ucy9uYXYuc3R5bGUuanM/ZjhiZiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJ1xuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xuXG5sZXQgV2lkdGggPSBcIjI1MHB4XCI7XG5cbmV4cG9ydCBjb25zdCBTaWRlbmF2ID0gc3R5bGVkLm5hdmBcbiAgaGVpZ2h0OiAxMDAlO1xuICB3aWR0aDogJHtXaWR0aH07XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgei1pbmRleDogMTtcbiAgdG9wOiAwO1xuICByaWdodDogMDtcbiAgXG4gIGJhY2tncm91bmQtY29sb3I6ICMxMTExMTE7XG4gIG92ZXJmbG93LXg6IGhpZGRlbjtcbiAgdHJhbnNpdGlvbjogMC41cztcbiAgcGFkZGluZy10b3A6IDYwcHg7XG4gIFxuICBkaXYge1xuICAgIHBhZGRpbmc6IDhweCAzMnB4IDhweCA4cHg7XG4gICAgZm9udC1zaXplOiAyNXB4O1xuICAgIGNvbG9yOiAjODE4MTgxO1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIHRyYW5zaXRpb246IDAuNXM7XG4gIH1cbmA7XG5cbmV4cG9ydCBjb25zdCBOYXZMaW5rID0gc3R5bGVkKExpbmspYFxuICBwYWRkaW5nOiA4cHggMzJweCA4cHggOHB4O1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIGZvbnQtc2l6ZTogMjVweDtcbiAgY29sb3I6ICM4MTgxODE7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICB0cmFuc2l0aW9uOiAwLjVzO1xuYDtcblxuZXhwb3J0IGNvbnN0IENsb3NlTmF2ID0gc3R5bGVkLmRpdmBcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDI1cHg7XG4gIG1hcmdpbi1yaWdodDogNTBweDtcbiAgXG4gIHNwYW4ge1xuICAgIGZvbnQtc2l6ZTogMzZweDtcbiAgfVxuYDtcblxuZXhwb3J0IGNvbnN0IE1lbnUgPSBzdHlsZWQuc3BhbmBcbiAgZm9udC1zaXplOiAzMHB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gXG5gO1xuIl0sIm5hbWVzIjpbInN0eWxlZCIsIkxpbmsiLCJXaWR0aCIsIlNpZGVuYXYiLCJuYXYiLCJOYXZMaW5rIiwiQ2xvc2VOYXYiLCJkaXYiLCJNZW51Iiwic3BhbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./data/lostOblivion/sidebarIcons/nav.style.js\n"));

/***/ })

});