/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/lostOfOblivion/chapters/[id]",{

/***/ "./node_modules/next/dist/build/webpack/loaders/css-loader/src/index.js??ruleSet[1].rules[1].oneOf[8].use[1]!./node_modules/next/dist/build/webpack/loaders/postcss-loader/src/index.js??ruleSet[1].rules[1].oneOf[8].use[2]!./styles/chap.module.css":
/*!************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/css-loader/src/index.js??ruleSet[1].rules[1].oneOf[8].use[1]!./node_modules/next/dist/build/webpack/loaders/postcss-loader/src/index.js??ruleSet[1].rules[1].oneOf[8].use[2]!./styles/chap.module.css ***!
  \************************************************************************************************************************************************************************************************************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval(__webpack_require__.ts("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../node_modules/next/dist/build/webpack/loaders/css-loader/src/runtime/api.js */ \"./node_modules/next/dist/build/webpack/loaders/css-loader/src/runtime/api.js\");\nvar ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(true);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"\\n/* WRAPPER */\\n.chap_wrapper__oQqTU {\\n    -webkit-user-select: none;\\n    -moz-user-select: none;\\n    user-select: none;\\n\\n    font-size: 1em;\\n    font-family: \\\"Times New Roman\\\", Arial, serif, Verdana, Tahoma;\\n    padding: .5em;\\n    color: rgba(255, 255, 255, 0.5);\\n    background-color: #171157;\\n}\\n@media screen and (min-width: 500px) and (max-width: 767px) {\\n    .chap_wrapper__oQqTU {\\n        font-size: 1.3em;\\n    }\\n}\\n@media screen and (min-width: 768px) and (max-width: 1023px) {\\n    .chap_wrapper__oQqTU {\\n        font-size: 1.5em;\\n    }\\n}\\n@media screen and (min-width: 1024px) {\\n    .chap_wrapper__oQqTU {\\n        font-size: 1.7em;\\n    }\\n}\\n\\n/* CONTAINER */\\n.chap_container__JgAzR {\\n    display: grid;\\n    grid-template-columns: 85% 15%;\\n    grid-template-rows: auto 1fr auto;\\n    grid-template-areas:\\n          \\\"header header\\\"\\n          \\\"content sidebar\\\"\\n          \\\"footer\\\";\\n    text-align: center;\\n    grid-row-gap: 0.5em;\\n    row-gap: 0.5em;\\n}\\n@media screen and (min-width: 768px) {\\n    .chap_container__JgAzR {\\n        grid-template-columns: 25% 65% 10%;\\n        grid-template-areas:\\n            \\\"header header header\\\"\\n            \\\"leftPicture content sidebar\\\"\\n            \\\"footer\\\";\\n    }\\n\\n}\\n\\n/* HEADER */\\n.chap_header__koMaV {\\n    grid-column: 1 / 3;\\n    grid-row: 1 / 2;\\n    font-size: 1.2em;\\n    position: -webkit-sticky;\\n    position: sticky;\\n    top: 0;\\n    align-self: center;\\n    padding: 1em;\\n    border: 2px solid #0804A9;\\n    background: linear-gradient(to bottom, #0804AB, #020139);\\n}\\n@media screen and (min-width: 500px) {\\n    .chap_header__koMaV {\\n        font-size: 1.2em;\\n        padding: 0.8em;\\n    }\\n\\n}\\n@media screen and (min-width: 768px) {\\n    .chap_header__koMaV {\\n        grid-column: 1 / 4;\\n        font-size: 1.3em;\\n    }\\n}\\n\\n/* LEFT PICTURE */\\n@media screen and (max-width: 767px) {\\n    .chap_leftPicture__zldJq img {\\n        width: 0;\\n    }\\n}\\n@media screen and (min-width: 768px) {\\n    .chap_leftPicture__zldJq img {\\n        width: 100%;\\n        height: 100%;\\n        object-fit: cover;\\n        object-position: top;\\n    }\\n}\\n@media screen and (min-width: 768px) {\\n    .chap_leftPicture__zldJq {\\n        grid-column: 1 / 2;\\n        grid-row: 2 / 3;\\n        height: 88vh;\\n        position: -webkit-sticky;\\n        position: sticky;\\n        top: 4em;\\n        align-self: start;\\n    }\\n}\\n\\n/* CONTENT */\\n.chap_content__UMsXa {\\n    grid-column: 1 / 2;\\n    grid-row: 2 / 3;\\n    padding: 0.5em 0.8em 0.5em 0.5em;\\n    text-align: justify;\\n}\\n.chap_content__UMsXa small {\\n    opacity: 0.5;\\n}\\n@media screen and (min-width: 768px) {\\n    .chap_content__UMsXa {\\n        grid-column: 2 / 3;\\n        padding-left: 0.8em;\\n    }\\n}\\n\\n/* SIDEBAR */\\n.chap_sidebar__duqDh {\\n    grid-column: 2 / 3;\\n    grid-row: 2 / 3;\\n    height: 86vh;\\n    position: -webkit-sticky;\\n    position: sticky;\\n    top: 4em;\\n    align-self: start;\\n    padding-top: 1em;\\n    border-radius: 2px;\\n    border: 2px solid #0804A9;\\n    background: linear-gradient(to right, #4c3434, #CC9696);\\n\\n    display: flex;\\n    flex-direction: column;\\n    align-items: center;\\n    row-gap: 1em;\\n}\\n@media screen and (min-width: 768px) {\\n    .chap_sidebar__duqDh {\\n        grid-column: 3 / 4;\\n    }\\n}\\n\\n/* RIGHT PICTURE */\\n.chap_rightPicture__0aEoy img {\\n    width: 0;\\n}\\n\\n/* FOOTER */\\n.chap_footer__NS6TI {\\n    grid-column: 1 / 2;\\n    grid-row: 3 / 4;\\n    align-self: center;\\n    text-align: end;\\n    padding: 0 1em;\\n\\n    display: flex;\\n    justify-content: end;\\n    column-gap: 1em;\\n}\\n@media screen and (min-width: 768px) {\\n    .chap_footer__NS6TI {\\n        grid-column: 2 / 3;\\n    }\\n}\\n\\n/* PREV BTN */\\n.chap_prevBtn__97319 {\\n    color: rgba(255, 255, 255, 0.7);\\n    padding: 1em;\\n    border: 2px solid #0804A9;\\n    border-radius: 5px;\\n    background: linear-gradient(to bottom, #020139, #0804AB);\\n}\\n@media screen and (min-width: 768px) {\\n    .chap_prevBtn__97319 {\\n        font-size: 1em;\\n        padding: 0.5em;\\n    }\\n}\\n\\n/* NEXT BTN */\\n.chap_nextBtn__vG_Wn {\\n    color: rgba(255, 255, 255, 0.7);\\n    padding: 1em;\\n    border: 2px solid #0804A9;\\n    border-radius: 5px;\\n    background: linear-gradient(to bottom, #020139, #0804AB);\\n}\\n@media screen and (min-width: 768px) {\\n    .chap_nextBtn__vG_Wn {\\n        font-size: 1em;\\n        padding: 0.5em;\\n    }\\n}\", \"\",{\"version\":3,\"sources\":[\"webpack://styles/chap.module.css\"],\"names\":[],\"mappings\":\";AACA,YAAY;AACZ;IACI,yBAAyB;IACzB,sBAAsB;IAEtB,iBAAiB;;IAEjB,cAAc;IACd,6DAA6D;IAC7D,aAAa;IACb,+BAA+B;IAC/B,yBAAyB;AAC7B;AACA;IACI;QACI,gBAAgB;IACpB;AACJ;AACA;IACI;QACI,gBAAgB;IACpB;AACJ;AACA;IACI;QACI,gBAAgB;IACpB;AACJ;;AAEA,cAAc;AACd;IACI,aAAa;IACb,8BAA8B;IAC9B,iCAAiC;IACjC;;;kBAGc;IACd,kBAAkB;IAClB,mBAAc;IAAd,cAAc;AAClB;AACA;IACI;QACI,kCAAkC;QAClC;;;oBAGY;IAChB;;AAEJ;;AAEA,WAAW;AACX;IACI,kBAAkB;IAClB,eAAe;IACf,gBAAgB;IAChB,wBAAgB;IAAhB,gBAAgB;IAChB,MAAM;IACN,kBAAkB;IAClB,YAAY;IACZ,yBAAyB;IACzB,wDAAwD;AAC5D;AACA;IACI;QACI,gBAAgB;QAChB,cAAc;IAClB;;AAEJ;AACA;IACI;QACI,kBAAkB;QAClB,gBAAgB;IACpB;AACJ;;AAEA,iBAAiB;AACjB;IACI;QACI,QAAQ;IACZ;AACJ;AACA;IACI;QACI,WAAW;QACX,YAAY;QACZ,iBAAiB;QACjB,oBAAoB;IACxB;AACJ;AACA;IACI;QACI,kBAAkB;QAClB,eAAe;QACf,YAAY;QACZ,wBAAgB;QAAhB,gBAAgB;QAChB,QAAQ;QACR,iBAAiB;IACrB;AACJ;;AAEA,YAAY;AACZ;IACI,kBAAkB;IAClB,eAAe;IACf,gCAAgC;IAChC,mBAAmB;AACvB;AACA;IACI,YAAY;AAChB;AACA;IACI;QACI,kBAAkB;QAClB,mBAAmB;IACvB;AACJ;;AAEA,YAAY;AACZ;IACI,kBAAkB;IAClB,eAAe;IACf,YAAY;IACZ,wBAAgB;IAAhB,gBAAgB;IAChB,QAAQ;IACR,iBAAiB;IACjB,gBAAgB;IAChB,kBAAkB;IAClB,yBAAyB;IACzB,uDAAuD;;IAEvD,aAAa;IACb,sBAAsB;IACtB,mBAAmB;IACnB,YAAY;AAChB;AACA;IACI;QACI,kBAAkB;IACtB;AACJ;;AAEA,kBAAkB;AAClB;IACI,QAAQ;AACZ;;AAEA,WAAW;AACX;IACI,kBAAkB;IAClB,eAAe;IACf,kBAAkB;IAClB,eAAe;IACf,cAAc;;IAEd,aAAa;IACb,oBAAoB;IACpB,eAAe;AACnB;AACA;IACI;QACI,kBAAkB;IACtB;AACJ;;AAEA,aAAa;AACb;IACI,+BAA+B;IAC/B,YAAY;IACZ,yBAAyB;IACzB,kBAAkB;IAClB,wDAAwD;AAC5D;AACA;IACI;QACI,cAAc;QACd,cAAc;IAClB;AACJ;;AAEA,aAAa;AACb;IACI,+BAA+B;IAC/B,YAAY;IACZ,yBAAyB;IACzB,kBAAkB;IAClB,wDAAwD;AAC5D;AACA;IACI;QACI,cAAc;QACd,cAAc;IAClB;AACJ\",\"sourcesContent\":[\"\\n/* WRAPPER */\\n.wrapper {\\n    -webkit-user-select: none;\\n    -moz-user-select: none;\\n    -ms-user-select: none;\\n    user-select: none;\\n\\n    font-size: 1em;\\n    font-family: \\\"Times New Roman\\\", Arial, serif, Verdana, Tahoma;\\n    padding: .5em;\\n    color: rgba(255, 255, 255, 0.5);\\n    background-color: #171157;\\n}\\n@media screen and (min-width: 500px) and (max-width: 767px) {\\n    .wrapper {\\n        font-size: 1.3em;\\n    }\\n}\\n@media screen and (min-width: 768px) and (max-width: 1023px) {\\n    .wrapper {\\n        font-size: 1.5em;\\n    }\\n}\\n@media screen and (min-width: 1024px) {\\n    .wrapper {\\n        font-size: 1.7em;\\n    }\\n}\\n\\n/* CONTAINER */\\n.container {\\n    display: grid;\\n    grid-template-columns: 85% 15%;\\n    grid-template-rows: auto 1fr auto;\\n    grid-template-areas:\\n          \\\"header header\\\"\\n          \\\"content sidebar\\\"\\n          \\\"footer\\\";\\n    text-align: center;\\n    row-gap: 0.5em;\\n}\\n@media screen and (min-width: 768px) {\\n    .container {\\n        grid-template-columns: 25% 65% 10%;\\n        grid-template-areas:\\n            \\\"header header header\\\"\\n            \\\"leftPicture content sidebar\\\"\\n            \\\"footer\\\";\\n    }\\n\\n}\\n\\n/* HEADER */\\n.header {\\n    grid-column: 1 / 3;\\n    grid-row: 1 / 2;\\n    font-size: 1.2em;\\n    position: sticky;\\n    top: 0;\\n    align-self: center;\\n    padding: 1em;\\n    border: 2px solid #0804A9;\\n    background: linear-gradient(to bottom, #0804AB, #020139);\\n}\\n@media screen and (min-width: 500px) {\\n    .header {\\n        font-size: 1.2em;\\n        padding: 0.8em;\\n    }\\n\\n}\\n@media screen and (min-width: 768px) {\\n    .header {\\n        grid-column: 1 / 4;\\n        font-size: 1.3em;\\n    }\\n}\\n\\n/* LEFT PICTURE */\\n@media screen and (max-width: 767px) {\\n    .leftPicture img {\\n        width: 0;\\n    }\\n}\\n@media screen and (min-width: 768px) {\\n    .leftPicture img {\\n        width: 100%;\\n        height: 100%;\\n        object-fit: cover;\\n        object-position: top;\\n    }\\n}\\n@media screen and (min-width: 768px) {\\n    .leftPicture {\\n        grid-column: 1 / 2;\\n        grid-row: 2 / 3;\\n        height: 88vh;\\n        position: sticky;\\n        top: 4em;\\n        align-self: start;\\n    }\\n}\\n\\n/* CONTENT */\\n.content {\\n    grid-column: 1 / 2;\\n    grid-row: 2 / 3;\\n    padding: 0.5em 0.8em 0.5em 0.5em;\\n    text-align: justify;\\n}\\n.content small {\\n    opacity: 0.5;\\n}\\n@media screen and (min-width: 768px) {\\n    .content {\\n        grid-column: 2 / 3;\\n        padding-left: 0.8em;\\n    }\\n}\\n\\n/* SIDEBAR */\\n.sidebar {\\n    grid-column: 2 / 3;\\n    grid-row: 2 / 3;\\n    height: 86vh;\\n    position: sticky;\\n    top: 4em;\\n    align-self: start;\\n    padding-top: 1em;\\n    border-radius: 2px;\\n    border: 2px solid #0804A9;\\n    background: linear-gradient(to right, #4c3434, #CC9696);\\n\\n    display: flex;\\n    flex-direction: column;\\n    align-items: center;\\n    row-gap: 1em;\\n}\\n@media screen and (min-width: 768px) {\\n    .sidebar {\\n        grid-column: 3 / 4;\\n    }\\n}\\n\\n/* RIGHT PICTURE */\\n.rightPicture img {\\n    width: 0;\\n}\\n\\n/* FOOTER */\\n.footer {\\n    grid-column: 1 / 2;\\n    grid-row: 3 / 4;\\n    align-self: center;\\n    text-align: end;\\n    padding: 0 1em;\\n\\n    display: flex;\\n    justify-content: end;\\n    column-gap: 1em;\\n}\\n@media screen and (min-width: 768px) {\\n    .footer {\\n        grid-column: 2 / 3;\\n    }\\n}\\n\\n/* PREV BTN */\\n.prevBtn {\\n    color: rgba(255, 255, 255, 0.7);\\n    padding: 1em;\\n    border: 2px solid #0804A9;\\n    border-radius: 5px;\\n    background: linear-gradient(to bottom, #020139, #0804AB);\\n}\\n@media screen and (min-width: 768px) {\\n    .prevBtn {\\n        font-size: 1em;\\n        padding: 0.5em;\\n    }\\n}\\n\\n/* NEXT BTN */\\n.nextBtn {\\n    color: rgba(255, 255, 255, 0.7);\\n    padding: 1em;\\n    border: 2px solid #0804A9;\\n    border-radius: 5px;\\n    background: linear-gradient(to bottom, #020139, #0804AB);\\n}\\n@media screen and (min-width: 768px) {\\n    .nextBtn {\\n        font-size: 1em;\\n        padding: 0.5em;\\n    }\\n}\"],\"sourceRoot\":\"\"}]);\n// Exports\n___CSS_LOADER_EXPORT___.locals = {\n\t\"wrapper\": \"chap_wrapper__oQqTU\",\n\t\"container\": \"chap_container__JgAzR\",\n\t\"header\": \"chap_header__koMaV\",\n\t\"leftPicture\": \"chap_leftPicture__zldJq\",\n\t\"content\": \"chap_content__UMsXa\",\n\t\"sidebar\": \"chap_sidebar__duqDh\",\n\t\"rightPicture\": \"chap_rightPicture__0aEoy\",\n\t\"footer\": \"chap_footer__NS6TI\",\n\t\"prevBtn\": \"chap_prevBtn__97319\",\n\t\"nextBtn\": \"chap_nextBtn__vG_Wn\"\n};\nmodule.exports = ___CSS_LOADER_EXPORT___;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9jc3MtbG9hZGVyL3NyYy9pbmRleC5qcz8/cnVsZVNldFsxXS5ydWxlc1sxXS5vbmVPZls4XS51c2VbMV0hLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9wb3N0Y3NzLWxvYWRlci9zcmMvaW5kZXguanM/P3J1bGVTZXRbMV0ucnVsZXNbMV0ub25lT2ZbOF0udXNlWzJdIS4vc3R5bGVzL2NoYXAubW9kdWxlLmNzcy5qcyIsIm1hcHBpbmdzIjoiQUFBQTtBQUNBLGtDQUFrQyxtQkFBTyxDQUFDLG1LQUErRTtBQUN6SDtBQUNBO0FBQ0EsaUZBQWlGLGdDQUFnQyw2QkFBNkIsd0JBQXdCLHVCQUF1QixzRUFBc0Usb0JBQW9CLHNDQUFzQyxnQ0FBZ0MsR0FBRywrREFBK0QsNEJBQTRCLDJCQUEyQixPQUFPLEdBQUcsZ0VBQWdFLDRCQUE0QiwyQkFBMkIsT0FBTyxHQUFHLHlDQUF5Qyw0QkFBNEIsMkJBQTJCLE9BQU8sR0FBRyw2Q0FBNkMsb0JBQW9CLHFDQUFxQyx3Q0FBd0MsNkdBQTZHLHlCQUF5QiwwQkFBMEIscUJBQXFCLEdBQUcsd0NBQXdDLDhCQUE4Qiw2Q0FBNkMsMElBQTBJLE9BQU8sS0FBSyx1Q0FBdUMseUJBQXlCLHNCQUFzQix1QkFBdUIsK0JBQStCLHVCQUF1QixhQUFhLHlCQUF5QixtQkFBbUIsZ0NBQWdDLCtEQUErRCxHQUFHLHdDQUF3QywyQkFBMkIsMkJBQTJCLHlCQUF5QixPQUFPLEtBQUssd0NBQXdDLDJCQUEyQiw2QkFBNkIsMkJBQTJCLE9BQU8sR0FBRyw4REFBOEQsb0NBQW9DLG1CQUFtQixPQUFPLEdBQUcsd0NBQXdDLG9DQUFvQyxzQkFBc0IsdUJBQXVCLDRCQUE0QiwrQkFBK0IsT0FBTyxHQUFHLHdDQUF3QyxnQ0FBZ0MsNkJBQTZCLDBCQUEwQix1QkFBdUIsbUNBQW1DLDJCQUEyQixtQkFBbUIsNEJBQTRCLE9BQU8s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QUF5QixPQUFPLEtBQUssd0NBQXdDLGVBQWUsNkJBQTZCLDJCQUEyQixPQUFPLEdBQUcsOERBQThELHdCQUF3QixtQkFBbUIsT0FBTyxHQUFHLHdDQUF3Qyx3QkFBd0Isc0JBQXNCLHVCQUF1Qiw0QkFBNEIsK0JBQStCLE9BQU8sR0FBRyx3Q0FBd0Msb0JBQW9CLDZCQUE2QiwwQkFBMEIsdUJBQXVCLDJCQUEyQixtQkFBbUIsNEJBQTRCLE9BQU8sR0FBRyw2QkFBNkIseUJBQXlCLHNCQUFzQix1Q0FBdUMsMEJBQTBCLEdBQUcsa0JBQWtCLG1CQUFtQixHQUFHLHdDQUF3QyxnQkFBZ0IsNkJBQTZCLDhCQUE4QixPQUFPLEdBQUcsNkJBQTZCLHlCQUF5QixzQkFBc0IsbUJBQW1CLHVCQUF1QixlQUFlLHdCQUF3Qix1QkFBdUIseUJBQXlCLGdDQUFnQyw4REFBOEQsc0JBQXNCLDZCQUE2QiwwQkFBMEIsbUJBQW1CLEdBQUcsd0NBQXdDLGdCQUFnQiw2QkFBNkIsT0FBTyxHQUFHLDRDQUE0QyxlQUFlLEdBQUcsMkJBQTJCLHlCQUF5QixzQkFBc0IseUJBQXlCLHNCQUFzQixxQkFBcUIsc0JBQXNCLDJCQUEyQixzQkFBc0IsR0FBRyx3Q0FBd0MsZUFBZSw2QkFBNkIsT0FBTyxHQUFHLDhCQUE4QixzQ0FBc0MsbUJBQW1CLGdDQUFnQyx5QkFBeUIsK0RBQStELEdBQUcsd0NBQXdDLGdCQUFnQix5QkFBeUIseUJBQXlCLE9BQU8sR0FBRyw4QkFBOEIsc0NBQXNDLG1CQUFtQixnQ0FBZ0MseUJBQXlCLCtEQUErRCxHQUFHLHdDQUF3QyxnQkFBZ0IseUJBQXlCLHlCQUF5QixPQUFPLEdBQUcsbUJBQW1CO0FBQzloVTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3N0eWxlcy9jaGFwLm1vZHVsZS5jc3M/NmM1YyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG52YXIgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fID0gcmVxdWlyZShcIi4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvYnVpbGQvd2VicGFjay9sb2FkZXJzL2Nzcy1sb2FkZXIvc3JjL3J1bnRpbWUvYXBpLmpzXCIpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKHRydWUpO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiXFxuLyogV1JBUFBFUiAqL1xcbi5jaGFwX3dyYXBwZXJfX29RcVRVIHtcXG4gICAgLXdlYmtpdC11c2VyLXNlbGVjdDogbm9uZTtcXG4gICAgLW1vei11c2VyLXNlbGVjdDogbm9uZTtcXG4gICAgdXNlci1zZWxlY3Q6IG5vbmU7XFxuXFxuICAgIGZvbnQtc2l6ZTogMWVtO1xcbiAgICBmb250LWZhbWlseTogXFxcIlRpbWVzIE5ldyBSb21hblxcXCIsIEFyaWFsLCBzZXJpZiwgVmVyZGFuYSwgVGFob21hO1xcbiAgICBwYWRkaW5nOiAuNWVtO1xcbiAgICBjb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjUpO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTcxMTU3O1xcbn1cXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA1MDBweCkgYW5kIChtYXgtd2lkdGg6IDc2N3B4KSB7XFxuICAgIC5jaGFwX3dyYXBwZXJfX29RcVRVIHtcXG4gICAgICAgIGZvbnQtc2l6ZTogMS4zZW07XFxuICAgIH1cXG59XFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNzY4cHgpIGFuZCAobWF4LXdpZHRoOiAxMDIzcHgpIHtcXG4gICAgLmNoYXBfd3JhcHBlcl9fb1FxVFUge1xcbiAgICAgICAgZm9udC1zaXplOiAxLjVlbTtcXG4gICAgfVxcbn1cXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxMDI0cHgpIHtcXG4gICAgLmNoYXBfd3JhcHBlcl9fb1FxVFUge1xcbiAgICAgICAgZm9udC1zaXplOiAxLjdlbTtcXG4gICAgfVxcbn1cXG5cXG4vKiBDT05UQUlORVIgKi9cXG4uY2hhcF9jb250YWluZXJfX0pnQXpSIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiA4NSUgMTUlO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IGF1dG8gMWZyIGF1dG87XFxuICAgIGdyaWQtdGVtcGxhdGUtYXJlYXM6XFxuICAgICAgICAgIFxcXCJoZWFkZXIgaGVhZGVyXFxcIlxcbiAgICAgICAgICBcXFwiY29udGVudCBzaWRlYmFyXFxcIlxcbiAgICAgICAgICBcXFwiZm9vdGVyXFxcIjtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBncmlkLXJvdy1nYXA6IDAuNWVtO1xcbiAgICByb3ctZ2FwOiAwLjVlbTtcXG59XFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNzY4cHgpIHtcXG4gICAgLmNoYXBfY29udGFpbmVyX19KZ0F6UiB7XFxuICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDI1JSA2NSUgMTAlO1xcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1hcmVhczpcXG4gICAgICAgICAgICBcXFwiaGVhZGVyIGhlYWRlciBoZWFkZXJcXFwiXFxuICAgICAgICAgICAgXFxcImxlZnRQaWN0dXJlIGNvbnRlbnQgc2lkZWJhclxcXCJcXG4gICAgICAgICAgICBcXFwiZm9vdGVyXFxcIjtcXG4gICAgfVxcblxcbn1cXG5cXG4vKiBIRUFERVIgKi9cXG4uY2hhcF9oZWFkZXJfX2tvTWFWIHtcXG4gICAgZ3JpZC1jb2x1bW46IDEgLyAzO1xcbiAgICBncmlkLXJvdzogMSAvIDI7XFxuICAgIGZvbnQtc2l6ZTogMS4yZW07XFxuICAgIHBvc2l0aW9uOiAtd2Via2l0LXN0aWNreTtcXG4gICAgcG9zaXRpb246IHN0aWNreTtcXG4gICAgdG9wOiAwO1xcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxuICAgIHBhZGRpbmc6IDFlbTtcXG4gICAgYm9yZGVyOiAycHggc29saWQgIzA4MDRBOTtcXG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSwgIzA4MDRBQiwgIzAyMDEzOSk7XFxufVxcbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDUwMHB4KSB7XFxuICAgIC5jaGFwX2hlYWRlcl9fa29NYVYge1xcbiAgICAgICAgZm9udC1zaXplOiAxLjJlbTtcXG4gICAgICAgIHBhZGRpbmc6IDAuOGVtO1xcbiAgICB9XFxuXFxufVxcbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDc2OHB4KSB7XFxuICAgIC5jaGFwX2hlYWRlcl9fa29NYVYge1xcbiAgICAgICAgZ3JpZC1jb2x1bW46IDEgLyA0O1xcbiAgICAgICAgZm9udC1zaXplOiAxLjNlbTtcXG4gICAgfVxcbn1cXG5cXG4vKiBMRUZUIFBJQ1RVUkUgKi9cXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjdweCkge1xcbiAgICAuY2hhcF9sZWZ0UGljdHVyZV9femxkSnEgaW1nIHtcXG4gICAgICAgIHdpZHRoOiAwO1xcbiAgICB9XFxufVxcbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDc2OHB4KSB7XFxuICAgIC5jaGFwX2xlZnRQaWN0dXJlX196bGRKcSBpbWcge1xcbiAgICAgICAgd2lkdGg6IDEwMCU7XFxuICAgICAgICBoZWlnaHQ6IDEwMCU7XFxuICAgICAgICBvYmplY3QtZml0OiBjb3ZlcjtcXG4gICAgICAgIG9iamVjdC1wb3NpdGlvbjogdG9wO1xcbiAgICB9XFxufVxcbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDc2OHB4KSB7XFxuICAgIC5jaGFwX2xlZnRQaWN0dXJlX196bGRKcSB7XFxuICAgICAgICBncmlkLWNvbHVtbjogMSAvIDI7XFxuICAgICAgICBncmlkLXJvdzogMiAvIDM7XFxuICAgICAgICBoZWlnaHQ6IDg4dmg7XFxuICAgICAgICBwb3NpdGlvbjogLXdlYmtpdC1zdGlja3k7XFxuICAgICAgICBwb3NpdGlvbjogc3RpY2t5O1xcbiAgICAgICAgdG9wOiA0ZW07XFxuICAgICAgICBhbGlnbi1zZWxmOiBzdGFydDtcXG4gICAgfVxcbn1cXG5cXG4vKiBDT05URU5UICovXFxuLmNoYXBfY29udGVudF9fVU1zWGEge1xcbiAgICBncmlkLWNvbHVtbjogMSAvIDI7XFxuICAgIGdyaWQtcm93OiAyIC8gMztcXG4gICAgcGFkZGluZzogMC41ZW0gMC44ZW0gMC41ZW0gMC41ZW07XFxuICAgIHRleHQtYWxpZ246IGp1c3RpZnk7XFxufVxcbi5jaGFwX2NvbnRlbnRfX1VNc1hhIHNtYWxsIHtcXG4gICAgb3BhY2l0eTogMC41O1xcbn1cXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA3NjhweCkge1xcbiAgICAuY2hhcF9jb250ZW50X19VTXNYYSB7XFxuICAgICAgICBncmlkLWNvbHVtbjogMiAvIDM7XFxuICAgICAgICBwYWRkaW5nLWxlZnQ6IDAuOGVtO1xcbiAgICB9XFxufVxcblxcbi8qIFNJREVCQVIgKi9cXG4uY2hhcF9zaWRlYmFyX19kdXFEaCB7XFxuICAgIGdyaWQtY29sdW1uOiAyIC8gMztcXG4gICAgZ3JpZC1yb3c6IDIgLyAzO1xcbiAgICBoZWlnaHQ6IDg2dmg7XFxuICAgIHBvc2l0aW9uOiAtd2Via2l0LXN0aWNreTtcXG4gICAgcG9zaXRpb246IHN0aWNreTtcXG4gICAgdG9wOiA0ZW07XFxuICAgIGFsaWduLXNlbGY6IHN0YXJ0O1xcbiAgICBwYWRkaW5nLXRvcDogMWVtO1xcbiAgICBib3JkZXItcmFkaXVzOiAycHg7XFxuICAgIGJvcmRlcjogMnB4IHNvbGlkICMwODA0QTk7XFxuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgIzRjMzQzNCwgI0NDOTY5Nik7XFxuXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIHJvdy1nYXA6IDFlbTtcXG59XFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNzY4cHgpIHtcXG4gICAgLmNoYXBfc2lkZWJhcl9fZHVxRGgge1xcbiAgICAgICAgZ3JpZC1jb2x1bW46IDMgLyA0O1xcbiAgICB9XFxufVxcblxcbi8qIFJJR0hUIFBJQ1RVUkUgKi9cXG4uY2hhcF9yaWdodFBpY3R1cmVfXzBhRW95IGltZyB7XFxuICAgIHdpZHRoOiAwO1xcbn1cXG5cXG4vKiBGT09URVIgKi9cXG4uY2hhcF9mb290ZXJfX05TNlRJIHtcXG4gICAgZ3JpZC1jb2x1bW46IDEgLyAyO1xcbiAgICBncmlkLXJvdzogMyAvIDQ7XFxuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcXG4gICAgdGV4dC1hbGlnbjogZW5kO1xcbiAgICBwYWRkaW5nOiAwIDFlbTtcXG5cXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBlbmQ7XFxuICAgIGNvbHVtbi1nYXA6IDFlbTtcXG59XFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNzY4cHgpIHtcXG4gICAgLmNoYXBfZm9vdGVyX19OUzZUSSB7XFxuICAgICAgICBncmlkLWNvbHVtbjogMiAvIDM7XFxuICAgIH1cXG59XFxuXFxuLyogUFJFViBCVE4gKi9cXG4uY2hhcF9wcmV2QnRuX185NzMxOSB7XFxuICAgIGNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNyk7XFxuICAgIHBhZGRpbmc6IDFlbTtcXG4gICAgYm9yZGVyOiAycHggc29saWQgIzA4MDRBOTtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tLCAjMDIwMTM5LCAjMDgwNEFCKTtcXG59XFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNzY4cHgpIHtcXG4gICAgLmNoYXBfcHJldkJ0bl9fOTczMTkge1xcbiAgICAgICAgZm9udC1zaXplOiAxZW07XFxuICAgICAgICBwYWRkaW5nOiAwLjVlbTtcXG4gICAgfVxcbn1cXG5cXG4vKiBORVhUIEJUTiAqL1xcbi5jaGFwX25leHRCdG5fX3ZHX1duIHtcXG4gICAgY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC43KTtcXG4gICAgcGFkZGluZzogMWVtO1xcbiAgICBib3JkZXI6IDJweCBzb2xpZCAjMDgwNEE5O1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byBib3R0b20sICMwMjAxMzksICMwODA0QUIpO1xcbn1cXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA3NjhweCkge1xcbiAgICAuY2hhcF9uZXh0QnRuX192R19XbiB7XFxuICAgICAgICBmb250LXNpemU6IDFlbTtcXG4gICAgICAgIHBhZGRpbmc6IDAuNWVtO1xcbiAgICB9XFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly9zdHlsZXMvY2hhcC5tb2R1bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCI7QUFDQSxZQUFZO0FBQ1o7SUFDSSx5QkFBeUI7SUFDekIsc0JBQXNCO0lBRXRCLGlCQUFpQjs7SUFFakIsY0FBYztJQUNkLDZEQUE2RDtJQUM3RCxhQUFhO0lBQ2IsK0JBQStCO0lBQy9CLHlCQUF5QjtBQUM3QjtBQUNBO0lBQ0k7UUFDSSxnQkFBZ0I7SUFDcEI7QUFDSjtBQUNBO0lBQ0k7UUFDSSxnQkFBZ0I7SUFDcEI7QUFDSjtBQUNBO0lBQ0k7UUFDSSxnQkFBZ0I7SUFDcEI7QUFDSjs7QUFFQSxjQUFjO0FBQ2Q7SUFDSSxhQUFhO0lBQ2IsOEJBQThCO0lBQzlCLGlDQUFpQztJQUNqQzs7O2tCQUdjO0lBQ2Qsa0JBQWtCO0lBQ2xCLG1CQUFjO0lBQWQsY0FBYztBQUNsQjtBQUNBO0lBQ0k7UUFDSSxrQ0FBa0M7UUFDbEM7OztvQkFHWTtJQUNoQjs7QUFFSjs7QUFFQSxXQUFXO0FBQ1g7SUFDSSxrQkFBa0I7SUFDbEIsZUFBZTtJQUNmLGdCQUFnQjtJQUNoQix3QkFBZ0I7SUFBaEIsZ0JBQWdCO0lBQ2hCLE1BQU07SUFDTixrQkFBa0I7SUFDbEIsWUFBWTtJQUNaLHlCQUF5QjtJQUN6Qix3REFBd0Q7QUFDNUQ7QUFDQTtJQUNJO1FBQ0ksZ0JBQWdCO1FBQ2hCLGNBQWM7SUFDbEI7O0FBRUo7QUFDQTtJQUNJO1FBQ0ksa0JBQWtCO1FBQ2xCLGdCQUFnQjtJQUNwQjtBQUNKOztBQUVBLGlCQUFpQjtBQUNqQjtJQUNJO1FBQ0ksUUFBUTtJQUNaO0FBQ0o7QUFDQTtJQUNJO1FBQ0ksV0FBVztRQUNYLFlBQVk7UUFDWixpQkFBaUI7UUFDakIsb0JBQW9CO0lBQ3hCO0FBQ0o7QUFDQTtJQUNJO1FBQ0ksa0JBQWtCO1FBQ2xCLGVBQWU7UUFDZixZQUFZO1FBQ1osd0JBQWdCO1FBQWhCLGdCQUFnQjtRQUNoQixRQUFRO1FBQ1IsaUJBQWlCO0lBQ3JCO0FBQ0o7O0FBRUEsWUFBWTtBQUNaO0lBQ0ksa0JBQWtCO0lBQ2xCLGVBQWU7SUFDZixnQ0FBZ0M7SUFDaEMsbUJBQW1CO0FBQ3ZCO0FBQ0E7SUFDSSxZQUFZO0FBQ2hCO0FBQ0E7SUFDSTtRQUNJLGtCQUFrQjtRQUNsQixtQkFBbUI7SUFDdkI7QUFDSjs7QUFFQSxZQUFZO0FBQ1o7SUFDSSxrQkFBa0I7SUFDbEIsZUFBZTtJQUNmLFlBQVk7SUFDWix3QkFBZ0I7SUFBaEIsZ0JBQWdCO0lBQ2hCLFFBQVE7SUFDUixpQkFBaUI7SUFDakIsZ0JBQWdCO0lBQ2hCLGtCQUFrQjtJQUNsQix5QkFBeUI7SUFDekIsdURBQXVEOztJQUV2RCxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLG1CQUFtQjtJQUNuQixZQUFZO0FBQ2hCO0FBQ0E7SUFDSTtRQUNJLGtCQUFrQjtJQUN0QjtBQUNKOztBQUVBLGtCQUFrQjtBQUNsQjtJQUNJLFFBQVE7QUFDWjs7QUFFQSxXQUFXO0FBQ1g7SUFDSSxrQkFBa0I7SUFDbEIsZUFBZTtJQUNmLGtCQUFrQjtJQUNsQixlQUFlO0lBQ2YsY0FBYzs7SUFFZCxhQUFhO0lBQ2Isb0JBQW9CO0lBQ3BCLGVBQWU7QUFDbkI7QUFDQTtJQUNJO1FBQ0ksa0JBQWtCO0lBQ3RCO0FBQ0o7O0FBRUEsYUFBYTtBQUNiO0lBQ0ksK0JBQStCO0lBQy9CLFlBQVk7SUFDWix5QkFBeUI7SUFDekIsa0JBQWtCO0lBQ2xCLHdEQUF3RDtBQUM1RDtBQUNBO0lBQ0k7UUFDSSxjQUFjO1FBQ2QsY0FBYztJQUNsQjtBQUNKOztBQUVBLGFBQWE7QUFDYjtJQUNJLCtCQUErQjtJQUMvQixZQUFZO0lBQ1oseUJBQXlCO0lBQ3pCLGtCQUFrQjtJQUNsQix3REFBd0Q7QUFDNUQ7QUFDQTtJQUNJO1FBQ0ksY0FBYztRQUNkLGNBQWM7SUFDbEI7QUFDSlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJcXG4vKiBXUkFQUEVSICovXFxuLndyYXBwZXIge1xcbiAgICAtd2Via2l0LXVzZXItc2VsZWN0OiBub25lO1xcbiAgICAtbW96LXVzZXItc2VsZWN0OiBub25lO1xcbiAgICAtbXMtdXNlci1zZWxlY3Q6IG5vbmU7XFxuICAgIHVzZXItc2VsZWN0OiBub25lO1xcblxcbiAgICBmb250LXNpemU6IDFlbTtcXG4gICAgZm9udC1mYW1pbHk6IFxcXCJUaW1lcyBOZXcgUm9tYW5cXFwiLCBBcmlhbCwgc2VyaWYsIFZlcmRhbmEsIFRhaG9tYTtcXG4gICAgcGFkZGluZzogLjVlbTtcXG4gICAgY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC41KTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzE3MTE1NztcXG59XFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNTAwcHgpIGFuZCAobWF4LXdpZHRoOiA3NjdweCkge1xcbiAgICAud3JhcHBlciB7XFxuICAgICAgICBmb250LXNpemU6IDEuM2VtO1xcbiAgICB9XFxufVxcbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDc2OHB4KSBhbmQgKG1heC13aWR0aDogMTAyM3B4KSB7XFxuICAgIC53cmFwcGVyIHtcXG4gICAgICAgIGZvbnQtc2l6ZTogMS41ZW07XFxuICAgIH1cXG59XFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTAyNHB4KSB7XFxuICAgIC53cmFwcGVyIHtcXG4gICAgICAgIGZvbnQtc2l6ZTogMS43ZW07XFxuICAgIH1cXG59XFxuXFxuLyogQ09OVEFJTkVSICovXFxuLmNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogODUlIDE1JTtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiBhdXRvIDFmciBhdXRvO1xcbiAgICBncmlkLXRlbXBsYXRlLWFyZWFzOlxcbiAgICAgICAgICBcXFwiaGVhZGVyIGhlYWRlclxcXCJcXG4gICAgICAgICAgXFxcImNvbnRlbnQgc2lkZWJhclxcXCJcXG4gICAgICAgICAgXFxcImZvb3RlclxcXCI7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgcm93LWdhcDogMC41ZW07XFxufVxcbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDc2OHB4KSB7XFxuICAgIC5jb250YWluZXIge1xcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAyNSUgNjUlIDEwJTtcXG4gICAgICAgIGdyaWQtdGVtcGxhdGUtYXJlYXM6XFxuICAgICAgICAgICAgXFxcImhlYWRlciBoZWFkZXIgaGVhZGVyXFxcIlxcbiAgICAgICAgICAgIFxcXCJsZWZ0UGljdHVyZSBjb250ZW50IHNpZGViYXJcXFwiXFxuICAgICAgICAgICAgXFxcImZvb3RlclxcXCI7XFxuICAgIH1cXG5cXG59XFxuXFxuLyogSEVBREVSICovXFxuLmhlYWRlciB7XFxuICAgIGdyaWQtY29sdW1uOiAxIC8gMztcXG4gICAgZ3JpZC1yb3c6IDEgLyAyO1xcbiAgICBmb250LXNpemU6IDEuMmVtO1xcbiAgICBwb3NpdGlvbjogc3RpY2t5O1xcbiAgICB0b3A6IDA7XFxuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcXG4gICAgcGFkZGluZzogMWVtO1xcbiAgICBib3JkZXI6IDJweCBzb2xpZCAjMDgwNEE5O1xcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tLCAjMDgwNEFCLCAjMDIwMTM5KTtcXG59XFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNTAwcHgpIHtcXG4gICAgLmhlYWRlciB7XFxuICAgICAgICBmb250LXNpemU6IDEuMmVtO1xcbiAgICAgICAgcGFkZGluZzogMC44ZW07XFxuICAgIH1cXG5cXG59XFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNzY4cHgpIHtcXG4gICAgLmhlYWRlciB7XFxuICAgICAgICBncmlkLWNvbHVtbjogMSAvIDQ7XFxuICAgICAgICBmb250LXNpemU6IDEuM2VtO1xcbiAgICB9XFxufVxcblxcbi8qIExFRlQgUElDVFVSRSAqL1xcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2N3B4KSB7XFxuICAgIC5sZWZ0UGljdHVyZSBpbWcge1xcbiAgICAgICAgd2lkdGg6IDA7XFxuICAgIH1cXG59XFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNzY4cHgpIHtcXG4gICAgLmxlZnRQaWN0dXJlIGltZyB7XFxuICAgICAgICB3aWR0aDogMTAwJTtcXG4gICAgICAgIGhlaWdodDogMTAwJTtcXG4gICAgICAgIG9iamVjdC1maXQ6IGNvdmVyO1xcbiAgICAgICAgb2JqZWN0LXBvc2l0aW9uOiB0b3A7XFxuICAgIH1cXG59XFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNzY4cHgpIHtcXG4gICAgLmxlZnRQaWN0dXJlIHtcXG4gICAgICAgIGdyaWQtY29sdW1uOiAxIC8gMjtcXG4gICAgICAgIGdyaWQtcm93OiAyIC8gMztcXG4gICAgICAgIGhlaWdodDogODh2aDtcXG4gICAgICAgIHBvc2l0aW9uOiBzdGlja3k7XFxuICAgICAgICB0b3A6IDRlbTtcXG4gICAgICAgIGFsaWduLXNlbGY6IHN0YXJ0O1xcbiAgICB9XFxufVxcblxcbi8qIENPTlRFTlQgKi9cXG4uY29udGVudCB7XFxuICAgIGdyaWQtY29sdW1uOiAxIC8gMjtcXG4gICAgZ3JpZC1yb3c6IDIgLyAzO1xcbiAgICBwYWRkaW5nOiAwLjVlbSAwLjhlbSAwLjVlbSAwLjVlbTtcXG4gICAgdGV4dC1hbGlnbjoganVzdGlmeTtcXG59XFxuLmNvbnRlbnQgc21hbGwge1xcbiAgICBvcGFjaXR5OiAwLjU7XFxufVxcbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDc2OHB4KSB7XFxuICAgIC5jb250ZW50IHtcXG4gICAgICAgIGdyaWQtY29sdW1uOiAyIC8gMztcXG4gICAgICAgIHBhZGRpbmctbGVmdDogMC44ZW07XFxuICAgIH1cXG59XFxuXFxuLyogU0lERUJBUiAqL1xcbi5zaWRlYmFyIHtcXG4gICAgZ3JpZC1jb2x1bW46IDIgLyAzO1xcbiAgICBncmlkLXJvdzogMiAvIDM7XFxuICAgIGhlaWdodDogODZ2aDtcXG4gICAgcG9zaXRpb246IHN0aWNreTtcXG4gICAgdG9wOiA0ZW07XFxuICAgIGFsaWduLXNlbGY6IHN0YXJ0O1xcbiAgICBwYWRkaW5nLXRvcDogMWVtO1xcbiAgICBib3JkZXItcmFkaXVzOiAycHg7XFxuICAgIGJvcmRlcjogMnB4IHNvbGlkICMwODA0QTk7XFxuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgIzRjMzQzNCwgI0NDOTY5Nik7XFxuXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIHJvdy1nYXA6IDFlbTtcXG59XFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNzY4cHgpIHtcXG4gICAgLnNpZGViYXIge1xcbiAgICAgICAgZ3JpZC1jb2x1bW46IDMgLyA0O1xcbiAgICB9XFxufVxcblxcbi8qIFJJR0hUIFBJQ1RVUkUgKi9cXG4ucmlnaHRQaWN0dXJlIGltZyB7XFxuICAgIHdpZHRoOiAwO1xcbn1cXG5cXG4vKiBGT09URVIgKi9cXG4uZm9vdGVyIHtcXG4gICAgZ3JpZC1jb2x1bW46IDEgLyAyO1xcbiAgICBncmlkLXJvdzogMyAvIDQ7XFxuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcXG4gICAgdGV4dC1hbGlnbjogZW5kO1xcbiAgICBwYWRkaW5nOiAwIDFlbTtcXG5cXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBlbmQ7XFxuICAgIGNvbHVtbi1nYXA6IDFlbTtcXG59XFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNzY4cHgpIHtcXG4gICAgLmZvb3RlciB7XFxuICAgICAgICBncmlkLWNvbHVtbjogMiAvIDM7XFxuICAgIH1cXG59XFxuXFxuLyogUFJFViBCVE4gKi9cXG4ucHJldkJ0biB7XFxuICAgIGNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNyk7XFxuICAgIHBhZGRpbmc6IDFlbTtcXG4gICAgYm9yZGVyOiAycHggc29saWQgIzA4MDRBOTtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tLCAjMDIwMTM5LCAjMDgwNEFCKTtcXG59XFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNzY4cHgpIHtcXG4gICAgLnByZXZCdG4ge1xcbiAgICAgICAgZm9udC1zaXplOiAxZW07XFxuICAgICAgICBwYWRkaW5nOiAwLjVlbTtcXG4gICAgfVxcbn1cXG5cXG4vKiBORVhUIEJUTiAqL1xcbi5uZXh0QnRuIHtcXG4gICAgY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC43KTtcXG4gICAgcGFkZGluZzogMWVtO1xcbiAgICBib3JkZXI6IDJweCBzb2xpZCAjMDgwNEE5O1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byBib3R0b20sICMwMjAxMzksICMwODA0QUIpO1xcbn1cXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA3NjhweCkge1xcbiAgICAubmV4dEJ0biB7XFxuICAgICAgICBmb250LXNpemU6IDFlbTtcXG4gICAgICAgIHBhZGRpbmc6IDAuNWVtO1xcbiAgICB9XFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ubG9jYWxzID0ge1xuXHRcIndyYXBwZXJcIjogXCJjaGFwX3dyYXBwZXJfX29RcVRVXCIsXG5cdFwiY29udGFpbmVyXCI6IFwiY2hhcF9jb250YWluZXJfX0pnQXpSXCIsXG5cdFwiaGVhZGVyXCI6IFwiY2hhcF9oZWFkZXJfX2tvTWFWXCIsXG5cdFwibGVmdFBpY3R1cmVcIjogXCJjaGFwX2xlZnRQaWN0dXJlX196bGRKcVwiLFxuXHRcImNvbnRlbnRcIjogXCJjaGFwX2NvbnRlbnRfX1VNc1hhXCIsXG5cdFwic2lkZWJhclwiOiBcImNoYXBfc2lkZWJhcl9fZHVxRGhcIixcblx0XCJyaWdodFBpY3R1cmVcIjogXCJjaGFwX3JpZ2h0UGljdHVyZV9fMGFFb3lcIixcblx0XCJmb290ZXJcIjogXCJjaGFwX2Zvb3Rlcl9fTlM2VElcIixcblx0XCJwcmV2QnRuXCI6IFwiY2hhcF9wcmV2QnRuX185NzMxOVwiLFxuXHRcIm5leHRCdG5cIjogXCJjaGFwX25leHRCdG5fX3ZHX1duXCJcbn07XG5tb2R1bGUuZXhwb3J0cyA9IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./node_modules/next/dist/build/webpack/loaders/css-loader/src/index.js??ruleSet[1].rules[1].oneOf[8].use[1]!./node_modules/next/dist/build/webpack/loaders/postcss-loader/src/index.js??ruleSet[1].rules[1].oneOf[8].use[2]!./styles/chap.module.css\n"));

/***/ })

});