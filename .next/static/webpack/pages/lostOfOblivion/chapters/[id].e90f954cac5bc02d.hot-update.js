/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/lostOfOblivion/chapters/[id]",{

/***/ "./node_modules/next/dist/build/webpack/loaders/css-loader/src/index.js??ruleSet[1].rules[1].oneOf[8].use[1]!./node_modules/next/dist/build/webpack/loaders/postcss-loader/src/index.js??ruleSet[1].rules[1].oneOf[8].use[2]!./styles/nav.module.css":
/*!***********************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/css-loader/src/index.js??ruleSet[1].rules[1].oneOf[8].use[1]!./node_modules/next/dist/build/webpack/loaders/postcss-loader/src/index.js??ruleSet[1].rules[1].oneOf[8].use[2]!./styles/nav.module.css ***!
  \***********************************************************************************************************************************************************************************************************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval(__webpack_require__.ts("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../node_modules/next/dist/build/webpack/loaders/css-loader/src/runtime/api.js */ \"./node_modules/next/dist/build/webpack/loaders/css-loader/src/runtime/api.js\");\nvar ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(true);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"\\n.nav_wrapper__Galaw {\\n    box-sizing: border-box;\\n}\\n\\n.nav_sideNav__jPyq_ {\\n    height: 100%;\\n    width: 250px;\\n    max-width: 70%;\\n    position: fixed;\\n    z-index: 99;\\n    top: 7px;\\n    right: 0;\\n\\n    background-color: rgba(13, 15, 82, 0.98);\\n    overflow-x: hidden;\\n    padding-top: 60px;\\n    transform: translateX(250px);\\n    transition: all 0.7s ease-in-out;\\n}\\n.nav_sideNav__jPyq_.nav_active__NXHW9 {\\n    transform: translateX(10px);\\n}\\n\\n.nav_mapping__GZNzW {\\n    color: #818181;\\n    display: block;\\n    transform: translateX(250px);\\n    /*padding: 8px 32px 8px 8px;*/\\n    background-color: rgba(13, 15, 82, 0.98);\\n}\\n\\n.nav_navRoute__inItm {\\n    padding: 8px 8px 8px 36px;\\n    text-decoration: none;\\n    text-align: left;\\n    font-size: 20px;\\n    color: #818181;\\n    /*display: block;*/\\n}\\n.nav_navRoute__inItm:hover {\\n    color: cornflowerblue;\\n    font-size: 21px;\\n}\\n\\n.nav_closeNav__3de9L {\\n    font-size: 30px;\\n    position: absolute;\\n    top: 10px;\\n    left: 25px;\\n    /*margin-right: 50px;*/\\n    cursor: pointer;\\n    background-color: rgba(13, 15, 82, 0.98);\\n}\\n.nav_closeNav__3de9L:hover {\\n    color: cornflowerblue;\\n}\\n\\n.nav_menu__nuwnV {\\n    width: 30px;\\n    cursor: pointer;\\n}\", \"\",{\"version\":3,\"sources\":[\"webpack://styles/nav.module.css\"],\"names\":[],\"mappings\":\";AACA;IACI,sBAAsB;AAC1B;;AAEA;IACI,YAAY;IACZ,YAAY;IACZ,cAAc;IACd,eAAe;IACf,WAAW;IACX,QAAQ;IACR,QAAQ;;IAER,wCAAwC;IACxC,kBAAkB;IAClB,iBAAiB;IACjB,4BAA4B;IAC5B,gCAAgC;AACpC;AACA;IACI,2BAA2B;AAC/B;;AAEA;IACI,cAAc;IACd,cAAc;IACd,4BAA4B;IAC5B,6BAA6B;IAC7B,wCAAwC;AAC5C;;AAEA;IACI,yBAAyB;IACzB,qBAAqB;IACrB,gBAAgB;IAChB,eAAe;IACf,cAAc;IACd,kBAAkB;AACtB;AACA;IACI,qBAAqB;IACrB,eAAe;AACnB;;AAEA;IACI,eAAe;IACf,kBAAkB;IAClB,SAAS;IACT,UAAU;IACV,sBAAsB;IACtB,eAAe;IACf,wCAAwC;AAC5C;AACA;IACI,qBAAqB;AACzB;;AAEA;IACI,WAAW;IACX,eAAe;AACnB\",\"sourcesContent\":[\"\\n.wrapper {\\n    box-sizing: border-box;\\n}\\n\\n.sideNav {\\n    height: 100%;\\n    width: 250px;\\n    max-width: 70%;\\n    position: fixed;\\n    z-index: 99;\\n    top: 7px;\\n    right: 0;\\n\\n    background-color: rgba(13, 15, 82, 0.98);\\n    overflow-x: hidden;\\n    padding-top: 60px;\\n    transform: translateX(250px);\\n    transition: all 0.7s ease-in-out;\\n}\\n.sideNav.active {\\n    transform: translateX(10px);\\n}\\n\\n.mapping {\\n    color: #818181;\\n    display: block;\\n    transform: translateX(250px);\\n    /*padding: 8px 32px 8px 8px;*/\\n    background-color: rgba(13, 15, 82, 0.98);\\n}\\n\\n.navRoute {\\n    padding: 8px 8px 8px 36px;\\n    text-decoration: none;\\n    text-align: left;\\n    font-size: 20px;\\n    color: #818181;\\n    /*display: block;*/\\n}\\n.navRoute:hover {\\n    color: cornflowerblue;\\n    font-size: 21px;\\n}\\n\\n.closeNav {\\n    font-size: 30px;\\n    position: absolute;\\n    top: 10px;\\n    left: 25px;\\n    /*margin-right: 50px;*/\\n    cursor: pointer;\\n    background-color: rgba(13, 15, 82, 0.98);\\n}\\n.closeNav:hover {\\n    color: cornflowerblue;\\n}\\n\\n.menu {\\n    width: 30px;\\n    cursor: pointer;\\n}\"],\"sourceRoot\":\"\"}]);\n// Exports\n___CSS_LOADER_EXPORT___.locals = {\n\t\"wrapper\": \"nav_wrapper__Galaw\",\n\t\"sideNav\": \"nav_sideNav__jPyq_\",\n\t\"active\": \"nav_active__NXHW9\",\n\t\"mapping\": \"nav_mapping__GZNzW\",\n\t\"navRoute\": \"nav_navRoute__inItm\",\n\t\"closeNav\": \"nav_closeNav__3de9L\",\n\t\"menu\": \"nav_menu__nuwnV\"\n};\nmodule.exports = ___CSS_LOADER_EXPORT___;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9jc3MtbG9hZGVyL3NyYy9pbmRleC5qcz8/cnVsZVNldFsxXS5ydWxlc1sxXS5vbmVPZls4XS51c2VbMV0hLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9wb3N0Y3NzLWxvYWRlci9zcmMvaW5kZXguanM/P3J1bGVTZXRbMV0ucnVsZXNbMV0ub25lT2ZbOF0udXNlWzJdIS4vc3R5bGVzL25hdi5tb2R1bGUuY3NzLmpzIiwibWFwcGluZ3MiOiJBQUFBO0FBQ0Esa0NBQWtDLG1CQUFPLENBQUMsbUtBQStFO0FBQ3pIO0FBQ0E7QUFDQSxpRUFBaUUsNkJBQTZCLEdBQUcseUJBQXlCLG1CQUFtQixtQkFBbUIscUJBQXFCLHNCQUFzQixrQkFBa0IsZUFBZSxlQUFlLGlEQUFpRCx5QkFBeUIsd0JBQXdCLG1DQUFtQyx1Q0FBdUMsR0FBRyx5Q0FBeUMsa0NBQWtDLEdBQUcseUJBQXlCLHFCQUFxQixxQkFBcUIsbUNBQW1DLGtDQUFrQyxpREFBaUQsR0FBRywwQkFBMEIsZ0NBQWdDLDRCQUE0Qix1QkFBdUIsc0JBQXNCLHFCQUFxQix1QkFBdUIsS0FBSyw4QkFBOEIsNEJBQTRCLHNCQUFzQixHQUFHLDBCQUEwQixzQkFBc0IseUJBQXlCLGdCQUFnQixpQkFBaUIsMkJBQTJCLHdCQUF3QiwrQ0FBK0MsR0FBRyw4QkFBOEIsNEJBQTRCLEdBQUcsc0JBQXNCLGtCQUFrQixzQkFBc0IsR0FBRyxPQUFPLGtGQUFrRixLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxVQUFVLFVBQVUsVUFBVSxVQUFVLFdBQVcsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLE1BQU0sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLFdBQVcsVUFBVSxZQUFZLE1BQU0sS0FBSyxZQUFZLFdBQVcsT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFVBQVUsWUFBWSxXQUFXLFlBQVksTUFBTSxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxzQ0FBc0MsNkJBQTZCLEdBQUcsY0FBYyxtQkFBbUIsbUJBQW1CLHFCQUFxQixzQkFBc0Isa0JBQWtCLGVBQWUsZUFBZSxpREFBaUQseUJBQXlCLHdCQUF3QixtQ0FBbUMsdUNBQXVDLEdBQUcsbUJBQW1CLGtDQUFrQyxHQUFHLGNBQWMscUJBQXFCLHFCQUFxQixtQ0FBbUMsa0NBQWtDLGlEQUFpRCxHQUFHLGVBQWUsZ0NBQWdDLDRCQUE0Qix1QkFBdUIsc0JBQXNCLHFCQUFxQix1QkFBdUIsS0FBSyxtQkFBbUIsNEJBQTRCLHNCQUFzQixHQUFHLGVBQWUsc0JBQXNCLHlCQUF5QixnQkFBZ0IsaUJBQWlCLDJCQUEyQix3QkFBd0IsK0NBQStDLEdBQUcsbUJBQW1CLDRCQUE0QixHQUFHLFdBQVcsa0JBQWtCLHNCQUFzQixHQUFHLG1CQUFtQjtBQUNyZ0c7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zdHlsZXMvbmF2Lm1vZHVsZS5jc3M/OWY5ZCJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG52YXIgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fID0gcmVxdWlyZShcIi4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvYnVpbGQvd2VicGFjay9sb2FkZXJzL2Nzcy1sb2FkZXIvc3JjL3J1bnRpbWUvYXBpLmpzXCIpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKHRydWUpO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiXFxuLm5hdl93cmFwcGVyX19HYWxhdyB7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcblxcbi5uYXZfc2lkZU5hdl9falB5cV8ge1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIHdpZHRoOiAyNTBweDtcXG4gICAgbWF4LXdpZHRoOiA3MCU7XFxuICAgIHBvc2l0aW9uOiBmaXhlZDtcXG4gICAgei1pbmRleDogOTk7XFxuICAgIHRvcDogN3B4O1xcbiAgICByaWdodDogMDtcXG5cXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxMywgMTUsIDgyLCAwLjk4KTtcXG4gICAgb3ZlcmZsb3cteDogaGlkZGVuO1xcbiAgICBwYWRkaW5nLXRvcDogNjBweDtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDI1MHB4KTtcXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuN3MgZWFzZS1pbi1vdXQ7XFxufVxcbi5uYXZfc2lkZU5hdl9falB5cV8ubmF2X2FjdGl2ZV9fTlhIVzkge1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMTBweCk7XFxufVxcblxcbi5uYXZfbWFwcGluZ19fR1pOelcge1xcbiAgICBjb2xvcjogIzgxODE4MTtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgyNTBweCk7XFxuICAgIC8qcGFkZGluZzogOHB4IDMycHggOHB4IDhweDsqL1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDEzLCAxNSwgODIsIDAuOTgpO1xcbn1cXG5cXG4ubmF2X25hdlJvdXRlX19pbkl0bSB7XFxuICAgIHBhZGRpbmc6IDhweCA4cHggOHB4IDM2cHg7XFxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcXG4gICAgZm9udC1zaXplOiAyMHB4O1xcbiAgICBjb2xvcjogIzgxODE4MTtcXG4gICAgLypkaXNwbGF5OiBibG9jazsqL1xcbn1cXG4ubmF2X25hdlJvdXRlX19pbkl0bTpob3ZlciB7XFxuICAgIGNvbG9yOiBjb3JuZmxvd2VyYmx1ZTtcXG4gICAgZm9udC1zaXplOiAyMXB4O1xcbn1cXG5cXG4ubmF2X2Nsb3NlTmF2X18zZGU5TCB7XFxuICAgIGZvbnQtc2l6ZTogMzBweDtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB0b3A6IDEwcHg7XFxuICAgIGxlZnQ6IDI1cHg7XFxuICAgIC8qbWFyZ2luLXJpZ2h0OiA1MHB4OyovXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxMywgMTUsIDgyLCAwLjk4KTtcXG59XFxuLm5hdl9jbG9zZU5hdl9fM2RlOUw6aG92ZXIge1xcbiAgICBjb2xvcjogY29ybmZsb3dlcmJsdWU7XFxufVxcblxcbi5uYXZfbWVudV9fbnV3blYge1xcbiAgICB3aWR0aDogMzBweDtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vc3R5bGVzL25hdi5tb2R1bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCI7QUFDQTtJQUNJLHNCQUFzQjtBQUMxQjs7QUFFQTtJQUNJLFlBQVk7SUFDWixZQUFZO0lBQ1osY0FBYztJQUNkLGVBQWU7SUFDZixXQUFXO0lBQ1gsUUFBUTtJQUNSLFFBQVE7O0lBRVIsd0NBQXdDO0lBQ3hDLGtCQUFrQjtJQUNsQixpQkFBaUI7SUFDakIsNEJBQTRCO0lBQzVCLGdDQUFnQztBQUNwQztBQUNBO0lBQ0ksMkJBQTJCO0FBQy9COztBQUVBO0lBQ0ksY0FBYztJQUNkLGNBQWM7SUFDZCw0QkFBNEI7SUFDNUIsNkJBQTZCO0lBQzdCLHdDQUF3QztBQUM1Qzs7QUFFQTtJQUNJLHlCQUF5QjtJQUN6QixxQkFBcUI7SUFDckIsZ0JBQWdCO0lBQ2hCLGVBQWU7SUFDZixjQUFjO0lBQ2Qsa0JBQWtCO0FBQ3RCO0FBQ0E7SUFDSSxxQkFBcUI7SUFDckIsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLGVBQWU7SUFDZixrQkFBa0I7SUFDbEIsU0FBUztJQUNULFVBQVU7SUFDVixzQkFBc0I7SUFDdEIsZUFBZTtJQUNmLHdDQUF3QztBQUM1QztBQUNBO0lBQ0kscUJBQXFCO0FBQ3pCOztBQUVBO0lBQ0ksV0FBVztJQUNYLGVBQWU7QUFDbkJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiXFxuLndyYXBwZXIge1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG5cXG4uc2lkZU5hdiB7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgd2lkdGg6IDI1MHB4O1xcbiAgICBtYXgtd2lkdGg6IDcwJTtcXG4gICAgcG9zaXRpb246IGZpeGVkO1xcbiAgICB6LWluZGV4OiA5OTtcXG4gICAgdG9wOiA3cHg7XFxuICAgIHJpZ2h0OiAwO1xcblxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDEzLCAxNSwgODIsIDAuOTgpO1xcbiAgICBvdmVyZmxvdy14OiBoaWRkZW47XFxuICAgIHBhZGRpbmctdG9wOiA2MHB4O1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMjUwcHgpO1xcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC43cyBlYXNlLWluLW91dDtcXG59XFxuLnNpZGVOYXYuYWN0aXZlIHtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDEwcHgpO1xcbn1cXG5cXG4ubWFwcGluZyB7XFxuICAgIGNvbG9yOiAjODE4MTgxO1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDI1MHB4KTtcXG4gICAgLypwYWRkaW5nOiA4cHggMzJweCA4cHggOHB4OyovXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTMsIDE1LCA4MiwgMC45OCk7XFxufVxcblxcbi5uYXZSb3V0ZSB7XFxuICAgIHBhZGRpbmc6IDhweCA4cHggOHB4IDM2cHg7XFxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcXG4gICAgZm9udC1zaXplOiAyMHB4O1xcbiAgICBjb2xvcjogIzgxODE4MTtcXG4gICAgLypkaXNwbGF5OiBibG9jazsqL1xcbn1cXG4ubmF2Um91dGU6aG92ZXIge1xcbiAgICBjb2xvcjogY29ybmZsb3dlcmJsdWU7XFxuICAgIGZvbnQtc2l6ZTogMjFweDtcXG59XFxuXFxuLmNsb3NlTmF2IHtcXG4gICAgZm9udC1zaXplOiAzMHB4O1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHRvcDogMTBweDtcXG4gICAgbGVmdDogMjVweDtcXG4gICAgLyptYXJnaW4tcmlnaHQ6IDUwcHg7Ki9cXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDEzLCAxNSwgODIsIDAuOTgpO1xcbn1cXG4uY2xvc2VOYXY6aG92ZXIge1xcbiAgICBjb2xvcjogY29ybmZsb3dlcmJsdWU7XFxufVxcblxcbi5tZW51IHtcXG4gICAgd2lkdGg6IDMwcHg7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5sb2NhbHMgPSB7XG5cdFwid3JhcHBlclwiOiBcIm5hdl93cmFwcGVyX19HYWxhd1wiLFxuXHRcInNpZGVOYXZcIjogXCJuYXZfc2lkZU5hdl9falB5cV9cIixcblx0XCJhY3RpdmVcIjogXCJuYXZfYWN0aXZlX19OWEhXOVwiLFxuXHRcIm1hcHBpbmdcIjogXCJuYXZfbWFwcGluZ19fR1pOeldcIixcblx0XCJuYXZSb3V0ZVwiOiBcIm5hdl9uYXZSb3V0ZV9faW5JdG1cIixcblx0XCJjbG9zZU5hdlwiOiBcIm5hdl9jbG9zZU5hdl9fM2RlOUxcIixcblx0XCJtZW51XCI6IFwibmF2X21lbnVfX251d25WXCJcbn07XG5tb2R1bGUuZXhwb3J0cyA9IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./node_modules/next/dist/build/webpack/loaders/css-loader/src/index.js??ruleSet[1].rules[1].oneOf[8].use[1]!./node_modules/next/dist/build/webpack/loaders/postcss-loader/src/index.js??ruleSet[1].rules[1].oneOf[8].use[2]!./styles/nav.module.css\n"));

/***/ })

});