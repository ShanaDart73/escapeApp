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

/***/ "./data/lostOfOblivion/sidebarIcons/nav.style.js":
/*!*******************************************************!*\
  !*** ./data/lostOfOblivion/sidebarIcons/nav.style.js ***!
  \*******************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"CloseNav\": function() { return /* binding */ CloseNav; },\n/* harmony export */   \"Menu\": function() { return /* binding */ Menu; },\n/* harmony export */   \"NavLink\": function() { return /* binding */ NavLink; },\n/* harmony export */   \"Sidenav\": function() { return /* binding */ Sidenav; }\n/* harmony export */ });\n/* harmony import */ var _swc_helpers_src_tagged_template_literal_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @swc/helpers/src/_tagged_template_literal.mjs */ \"./node_modules/@swc/helpers/src/_tagged_template_literal.mjs\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);\n\nfunction _templateObject() {\n    const data = (0,_swc_helpers_src_tagged_template_literal_mjs__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\n        \"\\n  height: 100%;\\n  width: 250px;\\n  max-width: 70%;\\n  position: fixed;\\n  z-index: 99;\\n  top: 7px;\\n  right: 0;\\n\\n  background-color: rgba(13, 15, 82, 0.98);\\n  overflow-x: hidden;\\n  padding-top: 60px;\\n  translate: \",\n        \";\\n  transition: all 0.7s ease-in-out;\\n\\n  div {\\n    padding: 8px 32px 8px 8px;\\n    font-size: 25px;\\n    color: #818181;\\n    display: block;\\n  }\\n  \\n  @media screen and (min-width: 768px) {\\n    translate: \",\n        \";\\n    \\n    div {\\n      padding: 4px 16px 4px 4px;\\n    }\\n  }\\n\"\n    ]);\n    _templateObject = function() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject1() {\n    const data = (0,_swc_helpers_src_tagged_template_literal_mjs__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\n        \"\\n  padding: 8px 8px 8px 36px;\\n  text-decoration: none;\\n  text-align: left;\\n  font-size: 25px;\\n  color: #818181;\\n  display: block;\\n  \\n  :hover {\\n    color: palevioletred;\\n  }\\n  \\n  @media screen and (min-width: 768px) {\\n    font-size: 30px;\\n    padding: 4px 4px 4px 36px;\\n  }\\n\"\n    ]);\n    _templateObject1 = function() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject2() {\n    const data = (0,_swc_helpers_src_tagged_template_literal_mjs__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\n        \"\\n  position: absolute;\\n  top: 0;\\n  left: 25px;\\n  margin-right: 50px;\\n  \\n  span {\\n    font-size: 36px;\\n    cursor: pointer;\\n  }\\n  \\n  @media screen and (min-width: 768px) {\\n    span {\\n      font-size: 46px;\\n    }\\n  }\\n\"\n    ]);\n    _templateObject2 = function() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject3() {\n    const data = (0,_swc_helpers_src_tagged_template_literal_mjs__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\n        \"\\n  width: 30px;\\n  cursor: pointer;\\n  \\n  @media screen and (min-width: 768px) {\\n    width: 50px;\\n  }\\n\"\n    ]);\n    _templateObject3 = function() {\n        return data;\n    };\n    return data;\n}\n\n\nconst Sidenav = styled_components__WEBPACK_IMPORTED_MODULE_2__[\"default\"].nav(_templateObject(), (props)=>props.display ? \"10px\" : \"250px\", (props)=>props.display ? \"-20px\" : \"250px\");\nconst NavLink = (0,styled_components__WEBPACK_IMPORTED_MODULE_2__[\"default\"])((next_link__WEBPACK_IMPORTED_MODULE_1___default()))(_templateObject1());\nconst CloseNav = styled_components__WEBPACK_IMPORTED_MODULE_2__[\"default\"].div(_templateObject2());\nconst Menu = styled_components__WEBPACK_IMPORTED_MODULE_2__[\"default\"].div(_templateObject3());\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9kYXRhL2xvc3RPZk9ibGl2aW9uL3NpZGViYXJJY29ucy9uYXYuc3R5bGUuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBc0M7QUFDVjtBQUVyQixNQUFNRSxVQUFVRiw2REFBVSxvQkFZbEJJLENBQUFBLFFBQVNBLE1BQU1DLE9BQU8sR0FBRyxTQUFTLE9BQU8sRUFXdkNELENBQUFBLFFBQVNBLE1BQU1DLE9BQU8sR0FBRyxVQUFVLE9BQU8sRUFNekQ7QUFFSyxNQUFNQyxVQUFVTiw2REFBTUEsQ0FBQ0Msa0RBQUlBLHNCQWdCaEM7QUFFSyxNQUFNTSxXQUFXUCw2REFBVSxxQkFnQmhDO0FBRUssTUFBTVMsT0FBT1QsNkRBQVUscUJBTzVCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2RhdGEvbG9zdE9mT2JsaXZpb24vc2lkZWJhckljb25zL25hdi5zdHlsZS5qcz9mY2QzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXG5cbmV4cG9ydCBjb25zdCBTaWRlbmF2ID0gc3R5bGVkLm5hdmBcbiAgaGVpZ2h0OiAxMDAlO1xuICB3aWR0aDogMjUwcHg7XG4gIG1heC13aWR0aDogNzAlO1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHotaW5kZXg6IDk5O1xuICB0b3A6IDdweDtcbiAgcmlnaHQ6IDA7XG5cbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxMywgMTUsIDgyLCAwLjk4KTtcbiAgb3ZlcmZsb3cteDogaGlkZGVuO1xuICBwYWRkaW5nLXRvcDogNjBweDtcbiAgdHJhbnNsYXRlOiAke3Byb3BzID0+IHByb3BzLmRpc3BsYXkgPyBcIjEwcHhcIiA6IFwiMjUwcHhcIn07XG4gIHRyYW5zaXRpb246IGFsbCAwLjdzIGVhc2UtaW4tb3V0O1xuXG4gIGRpdiB7XG4gICAgcGFkZGluZzogOHB4IDMycHggOHB4IDhweDtcbiAgICBmb250LXNpemU6IDI1cHg7XG4gICAgY29sb3I6ICM4MTgxODE7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gIH1cbiAgXG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDc2OHB4KSB7XG4gICAgdHJhbnNsYXRlOiAke3Byb3BzID0+IHByb3BzLmRpc3BsYXkgPyBcIi0yMHB4XCIgOiBcIjI1MHB4XCJ9O1xuICAgIFxuICAgIGRpdiB7XG4gICAgICBwYWRkaW5nOiA0cHggMTZweCA0cHggNHB4O1xuICAgIH1cbiAgfVxuYDtcblxuZXhwb3J0IGNvbnN0IE5hdkxpbmsgPSBzdHlsZWQoTGluaylgXG4gIHBhZGRpbmc6IDhweCA4cHggOHB4IDM2cHg7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgZm9udC1zaXplOiAyNXB4O1xuICBjb2xvcjogIzgxODE4MTtcbiAgZGlzcGxheTogYmxvY2s7XG4gIFxuICA6aG92ZXIge1xuICAgIGNvbG9yOiBwYWxldmlvbGV0cmVkO1xuICB9XG4gIFxuICBAbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA3NjhweCkge1xuICAgIGZvbnQtc2l6ZTogMzBweDtcbiAgICBwYWRkaW5nOiA0cHggNHB4IDRweCAzNnB4O1xuICB9XG5gO1xuXG5leHBvcnQgY29uc3QgQ2xvc2VOYXYgPSBzdHlsZWQuZGl2YFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgbGVmdDogMjVweDtcbiAgbWFyZ2luLXJpZ2h0OiA1MHB4O1xuICBcbiAgc3BhbiB7XG4gICAgZm9udC1zaXplOiAzNnB4O1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgfVxuICBcbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNzY4cHgpIHtcbiAgICBzcGFuIHtcbiAgICAgIGZvbnQtc2l6ZTogNDZweDtcbiAgICB9XG4gIH1cbmA7XG5cbmV4cG9ydCBjb25zdCBNZW51ID0gc3R5bGVkLmRpdmBcbiAgd2lkdGg6IDMwcHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgXG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDc2OHB4KSB7XG4gICAgd2lkdGg6IDUwcHg7XG4gIH1cbmA7XG4iXSwibmFtZXMiOlsic3R5bGVkIiwiTGluayIsIlNpZGVuYXYiLCJuYXYiLCJwcm9wcyIsImRpc3BsYXkiLCJOYXZMaW5rIiwiQ2xvc2VOYXYiLCJkaXYiLCJNZW51Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./data/lostOfOblivion/sidebarIcons/nav.style.js\n"));

/***/ })

});