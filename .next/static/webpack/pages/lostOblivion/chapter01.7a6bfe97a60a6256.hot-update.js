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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"CloseNav\": function() { return /* binding */ CloseNav; },\n/* harmony export */   \"Menu\": function() { return /* binding */ Menu; },\n/* harmony export */   \"NavLink\": function() { return /* binding */ NavLink; },\n/* harmony export */   \"Sidenav\": function() { return /* binding */ Sidenav; }\n/* harmony export */ });\n/* harmony import */ var _swc_helpers_src_tagged_template_literal_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @swc/helpers/src/_tagged_template_literal.mjs */ \"./node_modules/@swc/helpers/src/_tagged_template_literal.mjs\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);\n\nfunction _templateObject() {\n    const data = (0,_swc_helpers_src_tagged_template_literal_mjs__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\n        \"\\n  height: 100%;\\n  width: 6em;\\n  position: fixed;\\n  z-index: 1;\\n  top: 0;\\n  right: 0;\\n  \\n  background-color: #111111;\\n  overflow-x: hidden;\\n  transition: 0.5s;\\n  padding-top: 7.5em;\\n  \\n  div {\\n    padding: 0.5em 4em 0.5em 0.5em;\\n    font-size: 3.1em;\\n    color: #818181;\\n    display: block;\\n    transition: 0.5s;\\n  }\\n\"\n    ]);\n    _templateObject = function() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject1() {\n    const data = (0,_swc_helpers_src_tagged_template_literal_mjs__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\n        \"\\n  /*padding: 0.5em 4em 0.5em 0.5em;\\n  text-decoration: none;\\n  font-size: 3.1em;\\n  color: #818181;\\n  display: block;\\n  transition: 0.3s;*/\\n\"\n    ]);\n    _templateObject1 = function() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject2() {\n    const data = (0,_swc_helpers_src_tagged_template_literal_mjs__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\n        \"\\n  position: absolute;\\n  top: 0;\\n  left: 3.1em;\\n  font-size: 3.5em;\\n  margin-right: 6.2em;\\n\"\n    ]);\n    _templateObject2 = function() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject3() {\n    const data = (0,_swc_helpers_src_tagged_template_literal_mjs__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\n        \"\\n  font-size: 3.7em;\\n  cursor: pointer;\\n\"\n    ]);\n    _templateObject3 = function() {\n        return data;\n    };\n    return data;\n}\n\n\nconst Sidenav = styled_components__WEBPACK_IMPORTED_MODULE_2__[\"default\"].nav(_templateObject());\nconst NavLink = (0,styled_components__WEBPACK_IMPORTED_MODULE_2__[\"default\"])((next_link__WEBPACK_IMPORTED_MODULE_1___default()))(_templateObject1());\nconst CloseNav = styled_components__WEBPACK_IMPORTED_MODULE_2__[\"default\"].div(_templateObject2());\nconst Menu = styled_components__WEBPACK_IMPORTED_MODULE_2__[\"default\"].span(_templateObject3());\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9kYXRhL2xvc3RPYmxpdmlvbi9zaWRlYmFySWNvbnMvbmF2LnN0eWxlLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFzQztBQUNWO0FBRXJCLE1BQU1FLFVBQVVGLDZEQUFVLG9CQW9CL0I7QUFFSyxNQUFNSSxVQUFVSiw2REFBTUEsQ0FBQ0Msa0RBQUlBLHNCQU9oQztBQUVLLE1BQU1JLFdBQVdMLDZEQUFVLHFCQU1oQztBQUVLLE1BQU1PLE9BQU9QLDhEQUFXLHFCQUc3QiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9kYXRhL2xvc3RPYmxpdmlvbi9zaWRlYmFySWNvbnMvbmF2LnN0eWxlLmpzP2Y4YmYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cydcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcblxuZXhwb3J0IGNvbnN0IFNpZGVuYXYgPSBzdHlsZWQubmF2YFxuICBoZWlnaHQ6IDEwMCU7XG4gIHdpZHRoOiA2ZW07XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgei1pbmRleDogMTtcbiAgdG9wOiAwO1xuICByaWdodDogMDtcbiAgXG4gIGJhY2tncm91bmQtY29sb3I6ICMxMTExMTE7XG4gIG92ZXJmbG93LXg6IGhpZGRlbjtcbiAgdHJhbnNpdGlvbjogMC41cztcbiAgcGFkZGluZy10b3A6IDcuNWVtO1xuICBcbiAgZGl2IHtcbiAgICBwYWRkaW5nOiAwLjVlbSA0ZW0gMC41ZW0gMC41ZW07XG4gICAgZm9udC1zaXplOiAzLjFlbTtcbiAgICBjb2xvcjogIzgxODE4MTtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICB0cmFuc2l0aW9uOiAwLjVzO1xuICB9XG5gO1xuXG5leHBvcnQgY29uc3QgTmF2TGluayA9IHN0eWxlZChMaW5rKWBcbiAgLypwYWRkaW5nOiAwLjVlbSA0ZW0gMC41ZW0gMC41ZW07XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgZm9udC1zaXplOiAzLjFlbTtcbiAgY29sb3I6ICM4MTgxODE7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICB0cmFuc2l0aW9uOiAwLjNzOyovXG5gO1xuXG5leHBvcnQgY29uc3QgQ2xvc2VOYXYgPSBzdHlsZWQuZGl2YFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgbGVmdDogMy4xZW07XG4gIGZvbnQtc2l6ZTogMy41ZW07XG4gIG1hcmdpbi1yaWdodDogNi4yZW07XG5gO1xuXG5leHBvcnQgY29uc3QgTWVudSA9IHN0eWxlZC5zcGFuYFxuICBmb250LXNpemU6IDMuN2VtO1xuICBjdXJzb3I6IHBvaW50ZXI7XG5gO1xuIl0sIm5hbWVzIjpbInN0eWxlZCIsIkxpbmsiLCJTaWRlbmF2IiwibmF2IiwiTmF2TGluayIsIkNsb3NlTmF2IiwiZGl2IiwiTWVudSIsInNwYW4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./data/lostOblivion/sidebarIcons/nav.style.js\n"));

/***/ })

});