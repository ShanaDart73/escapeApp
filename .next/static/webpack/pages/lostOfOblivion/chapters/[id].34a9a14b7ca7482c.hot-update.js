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

eval(__webpack_require__.ts("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../node_modules/next/dist/build/webpack/loaders/css-loader/src/runtime/api.js */ \"./node_modules/next/dist/build/webpack/loaders/css-loader/src/runtime/api.js\");\nvar ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(true);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"\\n/* WRAPPER */\\n.chap_wrapper__oQqTU {\\n    -webkit-user-select: none;\\n    -moz-user-select: none;\\n    user-select: none;\\n\\n    font-size: 1em;\\n    font-family: \\\"Times New Roman\\\", Arial, serif, Verdana, Tahoma;\\n    padding: .5em;\\n    color: rgba(255, 255, 255, 0.5);\\n    background-color: #171157;\\n}\\n@media screen and (min-width: 500px) and (max-width: 767px) {\\n    .chap_wrapper__oQqTU {\\n        font-size: 1.3em;\\n    }\\n}\\n@media screen and (min-width: 768px) and (max-width: 1023px) {\\n    .chap_wrapper__oQqTU {\\n        font-size: 1.5em;\\n    }\\n}\\n@media screen and (min-width: 1024px) {\\n    .chap_wrapper__oQqTU {\\n        font-size: 1.7em;\\n    }\\n}\\n\\n/* CONTAINER */\\n.chap_container__JgAzR {\\n    display: grid;\\n    grid-template-columns: 85% 15%;\\n    grid-template-rows: auto 1fr auto;\\n    grid-template-areas:\\n          \\\"header header\\\"\\n          \\\"content sidebar\\\"\\n          \\\"footer\\\";\\n    text-align: center;\\n    grid-row-gap: 0.5em;\\n    row-gap: 0.5em;\\n}\\n@media screen and (min-width: 768px) {\\n    .chap_container__JgAzR {\\n        grid-template-columns: 25% 65% 10%;\\n        grid-template-areas:\\n            \\\"header header header\\\"\\n            \\\"leftPicture content sidebar\\\"\\n            \\\"footer\\\";\\n    }\\n\\n}\\n\\n/* HEADER */\\n.chap_header__koMaV {\\n    grid-column: 1 / 3;\\n    grid-row: 1 / 2;\\n    font-size: 1.2em;\\n    position: -webkit-sticky;\\n    position: sticky;\\n    top: 0;\\n    align-self: center;\\n    padding: 1em;\\n    border: 2px solid #0804A9;\\n    background: linear-gradient(to bottom, #0804AB, #020139);\\n}\\n@media screen and (min-width: 500px) {\\n    .chap_header__koMaV {\\n        font-size: 1.2em;\\n        padding: 0.8em;\\n    }\\n\\n}\\n@media screen and (min-width: 768px) {\\n    .chap_header__koMaV {\\n        grid-column: 1 / 4;\\n        font-size: 1.3em;\\n    }\\n}\\n\\n/* LEFT PICTURE */\\n.chap_leftPicture__zldJq img {\\n    width: 0;\\n}\\n@media screen and (min-width: 768px) {\\n    .chap_leftPicture__zldJq img {\\n        width: 100%;\\n        height: 100%;\\n        object-fit: cover;\\n        object-position: top;\\n    }\\n}\\n@media screen and (min-width: 768px) {\\n    .chap_leftPicture__zldJq {\\n        grid-column: 1 / 2;\\n        grid-row: 2 / 3;\\n        height: 88vh;\\n        position: -webkit-sticky;\\n        position: sticky;\\n        top: 4em;\\n        align-self: start;\\n    }\\n}\\n\\n/* CONTENT */\\n.chap_content__UMsXa {\\n    grid-column: 1 / 2;\\n    grid-row: 2 / 3;\\n    padding: 0.5em 0.8em 0.5em 0.5em;\\n    text-align: justify;\\n}\\n.chap_content__UMsXa small {\\n    opacity: 0.5;\\n}\\n\\n/* SIDEBAR */\\n.chap_sidebar__duqDh {\\n    grid-column: 2 / 3;\\n    grid-row: 2 / 3;\\n    height: 86vh;\\n    position: -webkit-sticky;\\n    position: sticky;\\n    top: 4em;\\n    align-self: start;\\n    padding-top: 1em;\\n    border-radius: 2px;\\n    border: 2px solid #0804A9;\\n    background: linear-gradient(to right, #4c3434, #CC9696);\\n\\n    display: flex;\\n    flex-direction: column;\\n    align-items: center;\\n    row-gap: 1em;\\n}\\n\\n/* FOOTER */\\n.chap_footer__NS6TI {\\n    grid-column: 1 / 2;\\n    grid-row: 3 / 4;\\n    align-self: center;\\n    text-align: end;\\n    padding: 0 1em;\\n\\n    display: flex;\\n    justify-content: end;\\n    column-gap: 1em;\\n}\\n\\n/* PREV BTN */\\n.chap_prevBtn__97319 {\\n    color: rgba(255, 255, 255, 0.7);\\n    padding: 1em;\\n    border: 2px solid #0804A9;\\n    border-radius: 5px;\\n    background: linear-gradient(to bottom, #020139, #0804AB);\\n}\\n\\n/* NEXT BTN */\\n.chap_nextBtn__vG_Wn {\\n    color: rgba(255, 255, 255, 0.7);\\n    padding: 1em;\\n    border: 2px solid #0804A9;\\n    border-radius: 5px;\\n    background: linear-gradient(to bottom, #020139, #0804AB);\\n}\", \"\",{\"version\":3,\"sources\":[\"webpack://styles/chap.module.css\"],\"names\":[],\"mappings\":\";AACA,YAAY;AACZ;IACI,yBAAyB;IACzB,sBAAsB;IAEtB,iBAAiB;;IAEjB,cAAc;IACd,6DAA6D;IAC7D,aAAa;IACb,+BAA+B;IAC/B,yBAAyB;AAC7B;AACA;IACI;QACI,gBAAgB;IACpB;AACJ;AACA;IACI;QACI,gBAAgB;IACpB;AACJ;AACA;IACI;QACI,gBAAgB;IACpB;AACJ;;AAEA,cAAc;AACd;IACI,aAAa;IACb,8BAA8B;IAC9B,iCAAiC;IACjC;;;kBAGc;IACd,kBAAkB;IAClB,mBAAc;IAAd,cAAc;AAClB;AACA;IACI;QACI,kCAAkC;QAClC;;;oBAGY;IAChB;;AAEJ;;AAEA,WAAW;AACX;IACI,kBAAkB;IAClB,eAAe;IACf,gBAAgB;IAChB,wBAAgB;IAAhB,gBAAgB;IAChB,MAAM;IACN,kBAAkB;IAClB,YAAY;IACZ,yBAAyB;IACzB,wDAAwD;AAC5D;AACA;IACI;QACI,gBAAgB;QAChB,cAAc;IAClB;;AAEJ;AACA;IACI;QACI,kBAAkB;QAClB,gBAAgB;IACpB;AACJ;;AAEA,iBAAiB;AACjB;IACI,QAAQ;AACZ;AACA;IACI;QACI,WAAW;QACX,YAAY;QACZ,iBAAiB;QACjB,oBAAoB;IACxB;AACJ;AACA;IACI;QACI,kBAAkB;QAClB,eAAe;QACf,YAAY;QACZ,wBAAgB;QAAhB,gBAAgB;QAChB,QAAQ;QACR,iBAAiB;IACrB;AACJ;;AAEA,YAAY;AACZ;IACI,kBAAkB;IAClB,eAAe;IACf,gCAAgC;IAChC,mBAAmB;AACvB;AACA;IACI,YAAY;AAChB;;AAEA,YAAY;AACZ;IACI,kBAAkB;IAClB,eAAe;IACf,YAAY;IACZ,wBAAgB;IAAhB,gBAAgB;IAChB,QAAQ;IACR,iBAAiB;IACjB,gBAAgB;IAChB,kBAAkB;IAClB,yBAAyB;IACzB,uDAAuD;;IAEvD,aAAa;IACb,sBAAsB;IACtB,mBAAmB;IACnB,YAAY;AAChB;;AAEA,WAAW;AACX;IACI,kBAAkB;IAClB,eAAe;IACf,kBAAkB;IAClB,eAAe;IACf,cAAc;;IAEd,aAAa;IACb,oBAAoB;IACpB,eAAe;AACnB;;AAEA,aAAa;AACb;IACI,+BAA+B;IAC/B,YAAY;IACZ,yBAAyB;IACzB,kBAAkB;IAClB,wDAAwD;AAC5D;;AAEA,aAAa;AACb;IACI,+BAA+B;IAC/B,YAAY;IACZ,yBAAyB;IACzB,kBAAkB;IAClB,wDAAwD;AAC5D\",\"sourcesContent\":[\"\\n/* WRAPPER */\\n.wrapper {\\n    -webkit-user-select: none;\\n    -moz-user-select: none;\\n    -ms-user-select: none;\\n    user-select: none;\\n\\n    font-size: 1em;\\n    font-family: \\\"Times New Roman\\\", Arial, serif, Verdana, Tahoma;\\n    padding: .5em;\\n    color: rgba(255, 255, 255, 0.5);\\n    background-color: #171157;\\n}\\n@media screen and (min-width: 500px) and (max-width: 767px) {\\n    .wrapper {\\n        font-size: 1.3em;\\n    }\\n}\\n@media screen and (min-width: 768px) and (max-width: 1023px) {\\n    .wrapper {\\n        font-size: 1.5em;\\n    }\\n}\\n@media screen and (min-width: 1024px) {\\n    .wrapper {\\n        font-size: 1.7em;\\n    }\\n}\\n\\n/* CONTAINER */\\n.container {\\n    display: grid;\\n    grid-template-columns: 85% 15%;\\n    grid-template-rows: auto 1fr auto;\\n    grid-template-areas:\\n          \\\"header header\\\"\\n          \\\"content sidebar\\\"\\n          \\\"footer\\\";\\n    text-align: center;\\n    row-gap: 0.5em;\\n}\\n@media screen and (min-width: 768px) {\\n    .container {\\n        grid-template-columns: 25% 65% 10%;\\n        grid-template-areas:\\n            \\\"header header header\\\"\\n            \\\"leftPicture content sidebar\\\"\\n            \\\"footer\\\";\\n    }\\n\\n}\\n\\n/* HEADER */\\n.header {\\n    grid-column: 1 / 3;\\n    grid-row: 1 / 2;\\n    font-size: 1.2em;\\n    position: sticky;\\n    top: 0;\\n    align-self: center;\\n    padding: 1em;\\n    border: 2px solid #0804A9;\\n    background: linear-gradient(to bottom, #0804AB, #020139);\\n}\\n@media screen and (min-width: 500px) {\\n    .header {\\n        font-size: 1.2em;\\n        padding: 0.8em;\\n    }\\n\\n}\\n@media screen and (min-width: 768px) {\\n    .header {\\n        grid-column: 1 / 4;\\n        font-size: 1.3em;\\n    }\\n}\\n\\n/* LEFT PICTURE */\\n.leftPicture img {\\n    width: 0;\\n}\\n@media screen and (min-width: 768px) {\\n    .leftPicture img {\\n        width: 100%;\\n        height: 100%;\\n        object-fit: cover;\\n        object-position: top;\\n    }\\n}\\n@media screen and (min-width: 768px) {\\n    .leftPicture {\\n        grid-column: 1 / 2;\\n        grid-row: 2 / 3;\\n        height: 88vh;\\n        position: sticky;\\n        top: 4em;\\n        align-self: start;\\n    }\\n}\\n\\n/* CONTENT */\\n.content {\\n    grid-column: 1 / 2;\\n    grid-row: 2 / 3;\\n    padding: 0.5em 0.8em 0.5em 0.5em;\\n    text-align: justify;\\n}\\n.content small {\\n    opacity: 0.5;\\n}\\n\\n/* SIDEBAR */\\n.sidebar {\\n    grid-column: 2 / 3;\\n    grid-row: 2 / 3;\\n    height: 86vh;\\n    position: sticky;\\n    top: 4em;\\n    align-self: start;\\n    padding-top: 1em;\\n    border-radius: 2px;\\n    border: 2px solid #0804A9;\\n    background: linear-gradient(to right, #4c3434, #CC9696);\\n\\n    display: flex;\\n    flex-direction: column;\\n    align-items: center;\\n    row-gap: 1em;\\n}\\n\\n/* FOOTER */\\n.footer {\\n    grid-column: 1 / 2;\\n    grid-row: 3 / 4;\\n    align-self: center;\\n    text-align: end;\\n    padding: 0 1em;\\n\\n    display: flex;\\n    justify-content: end;\\n    column-gap: 1em;\\n}\\n\\n/* PREV BTN */\\n.prevBtn {\\n    color: rgba(255, 255, 255, 0.7);\\n    padding: 1em;\\n    border: 2px solid #0804A9;\\n    border-radius: 5px;\\n    background: linear-gradient(to bottom, #020139, #0804AB);\\n}\\n\\n/* NEXT BTN */\\n.nextBtn {\\n    color: rgba(255, 255, 255, 0.7);\\n    padding: 1em;\\n    border: 2px solid #0804A9;\\n    border-radius: 5px;\\n    background: linear-gradient(to bottom, #020139, #0804AB);\\n}\"],\"sourceRoot\":\"\"}]);\n// Exports\n___CSS_LOADER_EXPORT___.locals = {\n\t\"wrapper\": \"chap_wrapper__oQqTU\",\n\t\"container\": \"chap_container__JgAzR\",\n\t\"header\": \"chap_header__koMaV\",\n\t\"leftPicture\": \"chap_leftPicture__zldJq\",\n\t\"content\": \"chap_content__UMsXa\",\n\t\"sidebar\": \"chap_sidebar__duqDh\",\n\t\"footer\": \"chap_footer__NS6TI\",\n\t\"prevBtn\": \"chap_prevBtn__97319\",\n\t\"nextBtn\": \"chap_nextBtn__vG_Wn\"\n};\nmodule.exports = ___CSS_LOADER_EXPORT___;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9jc3MtbG9hZGVyL3NyYy9pbmRleC5qcz8/cnVsZVNldFsxXS5ydWxlc1sxXS5vbmVPZls4XS51c2VbMV0hLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9wb3N0Y3NzLWxvYWRlci9zcmMvaW5kZXguanM/P3J1bGVTZXRbMV0ucnVsZXNbMV0ub25lT2ZbOF0udXNlWzJdIS4vc3R5bGVzL2NoYXAubW9kdWxlLmNzcy5qcyIsIm1hcHBpbmdzIjoiQUFBQTtBQUNBLGtDQUFrQyxtQkFBTyxDQUFDLG1LQUErRTtBQUN6SDtBQUNBO0FBQ0EsaUZBQWlGLGdDQUFnQyw2QkFBNkIsd0JBQXdCLHVCQUF1QixzRUFBc0Usb0JBQW9CLHNDQUFzQyxnQ0FBZ0MsR0FBRywrREFBK0QsNEJBQTRCLDJCQUEyQixPQUFPLEdBQUcsZ0VBQWdFLDRCQUE0QiwyQkFBMkIsT0FBTyxHQUFHLHlDQUF5Qyw0QkFBNEIsMkJBQTJCLE9BQU8sR0FBRyw2Q0FBNkMsb0JBQW9CLHFDQUFxQyx3Q0FBd0MsNkdBQTZHLHlCQUF5QiwwQkFBMEIscUJBQXFCLEdBQUcsd0NBQXdDLDhCQUE4Qiw2Q0FBNkMsMElBQTBJLE9BQU8sS0FBSyx1Q0FBdUMseUJBQXlCLHNCQUFzQix1QkFBdUIsK0JBQStCLHVCQUF1QixhQUFhLHlCQUF5QixtQkFBbUIsZ0NBQWdDLCtEQUErRCxHQUFHLHdDQUF3QywyQkFBMkIsMkJBQTJCLHlCQUF5QixPQUFPLEtBQUssd0NBQXdDLDJCQUEyQiw2QkFBNkIsMkJBQTJCLE9BQU8sR0FBRyxzREFBc0QsZUFBZSxHQUFHLHdDQUF3QyxvQ0FBb0Msc0JBQXNCLHVCQUF1Qiw0QkFBNEIsK0JBQStCLE9BQU8sR0FBRyx3Q0FBd0MsZ0NBQWdDLDZCQUE2QiwwQkFBMEIsdUJBQXVCLG1DQUFtQywyQkFBMkIsbUJBQW1CLDRCQUE0QixPQUFPLEdBQUcseUNBQXlDLHlC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QXlCLHNCQUFzQixxQkFBcUIsc0JBQXNCLDJCQUEyQixzQkFBc0IsR0FBRyw4QkFBOEIsc0NBQXNDLG1CQUFtQixnQ0FBZ0MseUJBQXlCLCtEQUErRCxHQUFHLDhCQUE4QixzQ0FBc0MsbUJBQW1CLGdDQUFnQyx5QkFBeUIsK0RBQStELEdBQUcsbUJBQW1CO0FBQzE3UTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zdHlsZXMvY2hhcC5tb2R1bGUuY3NzPzZjNWMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xudmFyIF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyA9IHJlcXVpcmUoXCIuLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9jc3MtbG9hZGVyL3NyYy9ydW50aW1lL2FwaS5qc1wiKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyh0cnVlKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIlxcbi8qIFdSQVBQRVIgKi9cXG4uY2hhcF93cmFwcGVyX19vUXFUVSB7XFxuICAgIC13ZWJraXQtdXNlci1zZWxlY3Q6IG5vbmU7XFxuICAgIC1tb3otdXNlci1zZWxlY3Q6IG5vbmU7XFxuICAgIHVzZXItc2VsZWN0OiBub25lO1xcblxcbiAgICBmb250LXNpemU6IDFlbTtcXG4gICAgZm9udC1mYW1pbHk6IFxcXCJUaW1lcyBOZXcgUm9tYW5cXFwiLCBBcmlhbCwgc2VyaWYsIFZlcmRhbmEsIFRhaG9tYTtcXG4gICAgcGFkZGluZzogLjVlbTtcXG4gICAgY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC41KTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzE3MTE1NztcXG59XFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNTAwcHgpIGFuZCAobWF4LXdpZHRoOiA3NjdweCkge1xcbiAgICAuY2hhcF93cmFwcGVyX19vUXFUVSB7XFxuICAgICAgICBmb250LXNpemU6IDEuM2VtO1xcbiAgICB9XFxufVxcbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDc2OHB4KSBhbmQgKG1heC13aWR0aDogMTAyM3B4KSB7XFxuICAgIC5jaGFwX3dyYXBwZXJfX29RcVRVIHtcXG4gICAgICAgIGZvbnQtc2l6ZTogMS41ZW07XFxuICAgIH1cXG59XFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTAyNHB4KSB7XFxuICAgIC5jaGFwX3dyYXBwZXJfX29RcVRVIHtcXG4gICAgICAgIGZvbnQtc2l6ZTogMS43ZW07XFxuICAgIH1cXG59XFxuXFxuLyogQ09OVEFJTkVSICovXFxuLmNoYXBfY29udGFpbmVyX19KZ0F6UiB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogODUlIDE1JTtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiBhdXRvIDFmciBhdXRvO1xcbiAgICBncmlkLXRlbXBsYXRlLWFyZWFzOlxcbiAgICAgICAgICBcXFwiaGVhZGVyIGhlYWRlclxcXCJcXG4gICAgICAgICAgXFxcImNvbnRlbnQgc2lkZWJhclxcXCJcXG4gICAgICAgICAgXFxcImZvb3RlclxcXCI7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgZ3JpZC1yb3ctZ2FwOiAwLjVlbTtcXG4gICAgcm93LWdhcDogMC41ZW07XFxufVxcbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDc2OHB4KSB7XFxuICAgIC5jaGFwX2NvbnRhaW5lcl9fSmdBelIge1xcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAyNSUgNjUlIDEwJTtcXG4gICAgICAgIGdyaWQtdGVtcGxhdGUtYXJlYXM6XFxuICAgICAgICAgICAgXFxcImhlYWRlciBoZWFkZXIgaGVhZGVyXFxcIlxcbiAgICAgICAgICAgIFxcXCJsZWZ0UGljdHVyZSBjb250ZW50IHNpZGViYXJcXFwiXFxuICAgICAgICAgICAgXFxcImZvb3RlclxcXCI7XFxuICAgIH1cXG5cXG59XFxuXFxuLyogSEVBREVSICovXFxuLmNoYXBfaGVhZGVyX19rb01hViB7XFxuICAgIGdyaWQtY29sdW1uOiAxIC8gMztcXG4gICAgZ3JpZC1yb3c6IDEgLyAyO1xcbiAgICBmb250LXNpemU6IDEuMmVtO1xcbiAgICBwb3NpdGlvbjogLXdlYmtpdC1zdGlja3k7XFxuICAgIHBvc2l0aW9uOiBzdGlja3k7XFxuICAgIHRvcDogMDtcXG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xcbiAgICBwYWRkaW5nOiAxZW07XFxuICAgIGJvcmRlcjogMnB4IHNvbGlkICMwODA0QTk7XFxuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byBib3R0b20sICMwODA0QUIsICMwMjAxMzkpO1xcbn1cXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA1MDBweCkge1xcbiAgICAuY2hhcF9oZWFkZXJfX2tvTWFWIHtcXG4gICAgICAgIGZvbnQtc2l6ZTogMS4yZW07XFxuICAgICAgICBwYWRkaW5nOiAwLjhlbTtcXG4gICAgfVxcblxcbn1cXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA3NjhweCkge1xcbiAgICAuY2hhcF9oZWFkZXJfX2tvTWFWIHtcXG4gICAgICAgIGdyaWQtY29sdW1uOiAxIC8gNDtcXG4gICAgICAgIGZvbnQtc2l6ZTogMS4zZW07XFxuICAgIH1cXG59XFxuXFxuLyogTEVGVCBQSUNUVVJFICovXFxuLmNoYXBfbGVmdFBpY3R1cmVfX3psZEpxIGltZyB7XFxuICAgIHdpZHRoOiAwO1xcbn1cXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA3NjhweCkge1xcbiAgICAuY2hhcF9sZWZ0UGljdHVyZV9femxkSnEgaW1nIHtcXG4gICAgICAgIHdpZHRoOiAxMDAlO1xcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xcbiAgICAgICAgb2JqZWN0LWZpdDogY292ZXI7XFxuICAgICAgICBvYmplY3QtcG9zaXRpb246IHRvcDtcXG4gICAgfVxcbn1cXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA3NjhweCkge1xcbiAgICAuY2hhcF9sZWZ0UGljdHVyZV9femxkSnEge1xcbiAgICAgICAgZ3JpZC1jb2x1bW46IDEgLyAyO1xcbiAgICAgICAgZ3JpZC1yb3c6IDIgLyAzO1xcbiAgICAgICAgaGVpZ2h0OiA4OHZoO1xcbiAgICAgICAgcG9zaXRpb246IC13ZWJraXQtc3RpY2t5O1xcbiAgICAgICAgcG9zaXRpb246IHN0aWNreTtcXG4gICAgICAgIHRvcDogNGVtO1xcbiAgICAgICAgYWxpZ24tc2VsZjogc3RhcnQ7XFxuICAgIH1cXG59XFxuXFxuLyogQ09OVEVOVCAqL1xcbi5jaGFwX2NvbnRlbnRfX1VNc1hhIHtcXG4gICAgZ3JpZC1jb2x1bW46IDEgLyAyO1xcbiAgICBncmlkLXJvdzogMiAvIDM7XFxuICAgIHBhZGRpbmc6IDAuNWVtIDAuOGVtIDAuNWVtIDAuNWVtO1xcbiAgICB0ZXh0LWFsaWduOiBqdXN0aWZ5O1xcbn1cXG4uY2hhcF9jb250ZW50X19VTXNYYSBzbWFsbCB7XFxuICAgIG9wYWNpdHk6IDAuNTtcXG59XFxuXFxuLyogU0lERUJBUiAqL1xcbi5jaGFwX3NpZGViYXJfX2R1cURoIHtcXG4gICAgZ3JpZC1jb2x1bW46IDIgLyAzO1xcbiAgICBncmlkLXJvdzogMiAvIDM7XFxuICAgIGhlaWdodDogODZ2aDtcXG4gICAgcG9zaXRpb246IC13ZWJraXQtc3RpY2t5O1xcbiAgICBwb3NpdGlvbjogc3RpY2t5O1xcbiAgICB0b3A6IDRlbTtcXG4gICAgYWxpZ24tc2VsZjogc3RhcnQ7XFxuICAgIHBhZGRpbmctdG9wOiAxZW07XFxuICAgIGJvcmRlci1yYWRpdXM6IDJweDtcXG4gICAgYm9yZGVyOiAycHggc29saWQgIzA4MDRBOTtcXG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCAjNGMzNDM0LCAjQ0M5Njk2KTtcXG5cXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgcm93LWdhcDogMWVtO1xcbn1cXG5cXG4vKiBGT09URVIgKi9cXG4uY2hhcF9mb290ZXJfX05TNlRJIHtcXG4gICAgZ3JpZC1jb2x1bW46IDEgLyAyO1xcbiAgICBncmlkLXJvdzogMyAvIDQ7XFxuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcXG4gICAgdGV4dC1hbGlnbjogZW5kO1xcbiAgICBwYWRkaW5nOiAwIDFlbTtcXG5cXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBlbmQ7XFxuICAgIGNvbHVtbi1nYXA6IDFlbTtcXG59XFxuXFxuLyogUFJFViBCVE4gKi9cXG4uY2hhcF9wcmV2QnRuX185NzMxOSB7XFxuICAgIGNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNyk7XFxuICAgIHBhZGRpbmc6IDFlbTtcXG4gICAgYm9yZGVyOiAycHggc29saWQgIzA4MDRBOTtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tLCAjMDIwMTM5LCAjMDgwNEFCKTtcXG59XFxuXFxuLyogTkVYVCBCVE4gKi9cXG4uY2hhcF9uZXh0QnRuX192R19XbiB7XFxuICAgIGNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNyk7XFxuICAgIHBhZGRpbmc6IDFlbTtcXG4gICAgYm9yZGVyOiAycHggc29saWQgIzA4MDRBOTtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tLCAjMDIwMTM5LCAjMDgwNEFCKTtcXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovL3N0eWxlcy9jaGFwLm1vZHVsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIjtBQUNBLFlBQVk7QUFDWjtJQUNJLHlCQUF5QjtJQUN6QixzQkFBc0I7SUFFdEIsaUJBQWlCOztJQUVqQixjQUFjO0lBQ2QsNkRBQTZEO0lBQzdELGFBQWE7SUFDYiwrQkFBK0I7SUFDL0IseUJBQXlCO0FBQzdCO0FBQ0E7SUFDSTtRQUNJLGdCQUFnQjtJQUNwQjtBQUNKO0FBQ0E7SUFDSTtRQUNJLGdCQUFnQjtJQUNwQjtBQUNKO0FBQ0E7SUFDSTtRQUNJLGdCQUFnQjtJQUNwQjtBQUNKOztBQUVBLGNBQWM7QUFDZDtJQUNJLGFBQWE7SUFDYiw4QkFBOEI7SUFDOUIsaUNBQWlDO0lBQ2pDOzs7a0JBR2M7SUFDZCxrQkFBa0I7SUFDbEIsbUJBQWM7SUFBZCxjQUFjO0FBQ2xCO0FBQ0E7SUFDSTtRQUNJLGtDQUFrQztRQUNsQzs7O29CQUdZO0lBQ2hCOztBQUVKOztBQUVBLFdBQVc7QUFDWDtJQUNJLGtCQUFrQjtJQUNsQixlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLHdCQUFnQjtJQUFoQixnQkFBZ0I7SUFDaEIsTUFBTTtJQUNOLGtCQUFrQjtJQUNsQixZQUFZO0lBQ1oseUJBQXlCO0lBQ3pCLHdEQUF3RDtBQUM1RDtBQUNBO0lBQ0k7UUFDSSxnQkFBZ0I7UUFDaEIsY0FBYztJQUNsQjs7QUFFSjtBQUNBO0lBQ0k7UUFDSSxrQkFBa0I7UUFDbEIsZ0JBQWdCO0lBQ3BCO0FBQ0o7O0FBRUEsaUJBQWlCO0FBQ2pCO0lBQ0ksUUFBUTtBQUNaO0FBQ0E7SUFDSTtRQUNJLFdBQVc7UUFDWCxZQUFZO1FBQ1osaUJBQWlCO1FBQ2pCLG9CQUFvQjtJQUN4QjtBQUNKO0FBQ0E7SUFDSTtRQUNJLGtCQUFrQjtRQUNsQixlQUFlO1FBQ2YsWUFBWTtRQUNaLHdCQUFnQjtRQUFoQixnQkFBZ0I7UUFDaEIsUUFBUTtRQUNSLGlCQUFpQjtJQUNyQjtBQUNKOztBQUVBLFlBQVk7QUFDWjtJQUNJLGtCQUFrQjtJQUNsQixlQUFlO0lBQ2YsZ0NBQWdDO0lBQ2hDLG1CQUFtQjtBQUN2QjtBQUNBO0lBQ0ksWUFBWTtBQUNoQjs7QUFFQSxZQUFZO0FBQ1o7SUFDSSxrQkFBa0I7SUFDbEIsZUFBZTtJQUNmLFlBQVk7SUFDWix3QkFBZ0I7SUFBaEIsZ0JBQWdCO0lBQ2hCLFFBQVE7SUFDUixpQkFBaUI7SUFDakIsZ0JBQWdCO0lBQ2hCLGtCQUFrQjtJQUNsQix5QkFBeUI7SUFDekIsdURBQXVEOztJQUV2RCxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLG1CQUFtQjtJQUNuQixZQUFZO0FBQ2hCOztBQUVBLFdBQVc7QUFDWDtJQUNJLGtCQUFrQjtJQUNsQixlQUFlO0lBQ2Ysa0JBQWtCO0lBQ2xCLGVBQWU7SUFDZixjQUFjOztJQUVkLGFBQWE7SUFDYixvQkFBb0I7SUFDcEIsZUFBZTtBQUNuQjs7QUFFQSxhQUFhO0FBQ2I7SUFDSSwrQkFBK0I7SUFDL0IsWUFBWTtJQUNaLHlCQUF5QjtJQUN6QixrQkFBa0I7SUFDbEIsd0RBQXdEO0FBQzVEOztBQUVBLGFBQWE7QUFDYjtJQUNJLCtCQUErQjtJQUMvQixZQUFZO0lBQ1oseUJBQXlCO0lBQ3pCLGtCQUFrQjtJQUNsQix3REFBd0Q7QUFDNURcIixcInNvdXJjZXNDb250ZW50XCI6W1wiXFxuLyogV1JBUFBFUiAqL1xcbi53cmFwcGVyIHtcXG4gICAgLXdlYmtpdC11c2VyLXNlbGVjdDogbm9uZTtcXG4gICAgLW1vei11c2VyLXNlbGVjdDogbm9uZTtcXG4gICAgLW1zLXVzZXItc2VsZWN0OiBub25lO1xcbiAgICB1c2VyLXNlbGVjdDogbm9uZTtcXG5cXG4gICAgZm9udC1zaXplOiAxZW07XFxuICAgIGZvbnQtZmFtaWx5OiBcXFwiVGltZXMgTmV3IFJvbWFuXFxcIiwgQXJpYWwsIHNlcmlmLCBWZXJkYW5hLCBUYWhvbWE7XFxuICAgIHBhZGRpbmc6IC41ZW07XFxuICAgIGNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNSk7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMxNzExNTc7XFxufVxcbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDUwMHB4KSBhbmQgKG1heC13aWR0aDogNzY3cHgpIHtcXG4gICAgLndyYXBwZXIge1xcbiAgICAgICAgZm9udC1zaXplOiAxLjNlbTtcXG4gICAgfVxcbn1cXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA3NjhweCkgYW5kIChtYXgtd2lkdGg6IDEwMjNweCkge1xcbiAgICAud3JhcHBlciB7XFxuICAgICAgICBmb250LXNpemU6IDEuNWVtO1xcbiAgICB9XFxufVxcbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDEwMjRweCkge1xcbiAgICAud3JhcHBlciB7XFxuICAgICAgICBmb250LXNpemU6IDEuN2VtO1xcbiAgICB9XFxufVxcblxcbi8qIENPTlRBSU5FUiAqL1xcbi5jb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDg1JSAxNSU7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogYXV0byAxZnIgYXV0bztcXG4gICAgZ3JpZC10ZW1wbGF0ZS1hcmVhczpcXG4gICAgICAgICAgXFxcImhlYWRlciBoZWFkZXJcXFwiXFxuICAgICAgICAgIFxcXCJjb250ZW50IHNpZGViYXJcXFwiXFxuICAgICAgICAgIFxcXCJmb290ZXJcXFwiO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIHJvdy1nYXA6IDAuNWVtO1xcbn1cXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA3NjhweCkge1xcbiAgICAuY29udGFpbmVyIHtcXG4gICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMjUlIDY1JSAxMCU7XFxuICAgICAgICBncmlkLXRlbXBsYXRlLWFyZWFzOlxcbiAgICAgICAgICAgIFxcXCJoZWFkZXIgaGVhZGVyIGhlYWRlclxcXCJcXG4gICAgICAgICAgICBcXFwibGVmdFBpY3R1cmUgY29udGVudCBzaWRlYmFyXFxcIlxcbiAgICAgICAgICAgIFxcXCJmb290ZXJcXFwiO1xcbiAgICB9XFxuXFxufVxcblxcbi8qIEhFQURFUiAqL1xcbi5oZWFkZXIge1xcbiAgICBncmlkLWNvbHVtbjogMSAvIDM7XFxuICAgIGdyaWQtcm93OiAxIC8gMjtcXG4gICAgZm9udC1zaXplOiAxLjJlbTtcXG4gICAgcG9zaXRpb246IHN0aWNreTtcXG4gICAgdG9wOiAwO1xcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxuICAgIHBhZGRpbmc6IDFlbTtcXG4gICAgYm9yZGVyOiAycHggc29saWQgIzA4MDRBOTtcXG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSwgIzA4MDRBQiwgIzAyMDEzOSk7XFxufVxcbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDUwMHB4KSB7XFxuICAgIC5oZWFkZXIge1xcbiAgICAgICAgZm9udC1zaXplOiAxLjJlbTtcXG4gICAgICAgIHBhZGRpbmc6IDAuOGVtO1xcbiAgICB9XFxuXFxufVxcbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDc2OHB4KSB7XFxuICAgIC5oZWFkZXIge1xcbiAgICAgICAgZ3JpZC1jb2x1bW46IDEgLyA0O1xcbiAgICAgICAgZm9udC1zaXplOiAxLjNlbTtcXG4gICAgfVxcbn1cXG5cXG4vKiBMRUZUIFBJQ1RVUkUgKi9cXG4ubGVmdFBpY3R1cmUgaW1nIHtcXG4gICAgd2lkdGg6IDA7XFxufVxcbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDc2OHB4KSB7XFxuICAgIC5sZWZ0UGljdHVyZSBpbWcge1xcbiAgICAgICAgd2lkdGg6IDEwMCU7XFxuICAgICAgICBoZWlnaHQ6IDEwMCU7XFxuICAgICAgICBvYmplY3QtZml0OiBjb3ZlcjtcXG4gICAgICAgIG9iamVjdC1wb3NpdGlvbjogdG9wO1xcbiAgICB9XFxufVxcbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDc2OHB4KSB7XFxuICAgIC5sZWZ0UGljdHVyZSB7XFxuICAgICAgICBncmlkLWNvbHVtbjogMSAvIDI7XFxuICAgICAgICBncmlkLXJvdzogMiAvIDM7XFxuICAgICAgICBoZWlnaHQ6IDg4dmg7XFxuICAgICAgICBwb3NpdGlvbjogc3RpY2t5O1xcbiAgICAgICAgdG9wOiA0ZW07XFxuICAgICAgICBhbGlnbi1zZWxmOiBzdGFydDtcXG4gICAgfVxcbn1cXG5cXG4vKiBDT05URU5UICovXFxuLmNvbnRlbnQge1xcbiAgICBncmlkLWNvbHVtbjogMSAvIDI7XFxuICAgIGdyaWQtcm93OiAyIC8gMztcXG4gICAgcGFkZGluZzogMC41ZW0gMC44ZW0gMC41ZW0gMC41ZW07XFxuICAgIHRleHQtYWxpZ246IGp1c3RpZnk7XFxufVxcbi5jb250ZW50IHNtYWxsIHtcXG4gICAgb3BhY2l0eTogMC41O1xcbn1cXG5cXG4vKiBTSURFQkFSICovXFxuLnNpZGViYXIge1xcbiAgICBncmlkLWNvbHVtbjogMiAvIDM7XFxuICAgIGdyaWQtcm93OiAyIC8gMztcXG4gICAgaGVpZ2h0OiA4NnZoO1xcbiAgICBwb3NpdGlvbjogc3RpY2t5O1xcbiAgICB0b3A6IDRlbTtcXG4gICAgYWxpZ24tc2VsZjogc3RhcnQ7XFxuICAgIHBhZGRpbmctdG9wOiAxZW07XFxuICAgIGJvcmRlci1yYWRpdXM6IDJweDtcXG4gICAgYm9yZGVyOiAycHggc29saWQgIzA4MDRBOTtcXG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCAjNGMzNDM0LCAjQ0M5Njk2KTtcXG5cXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgcm93LWdhcDogMWVtO1xcbn1cXG5cXG4vKiBGT09URVIgKi9cXG4uZm9vdGVyIHtcXG4gICAgZ3JpZC1jb2x1bW46IDEgLyAyO1xcbiAgICBncmlkLXJvdzogMyAvIDQ7XFxuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcXG4gICAgdGV4dC1hbGlnbjogZW5kO1xcbiAgICBwYWRkaW5nOiAwIDFlbTtcXG5cXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBlbmQ7XFxuICAgIGNvbHVtbi1nYXA6IDFlbTtcXG59XFxuXFxuLyogUFJFViBCVE4gKi9cXG4ucHJldkJ0biB7XFxuICAgIGNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNyk7XFxuICAgIHBhZGRpbmc6IDFlbTtcXG4gICAgYm9yZGVyOiAycHggc29saWQgIzA4MDRBOTtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tLCAjMDIwMTM5LCAjMDgwNEFCKTtcXG59XFxuXFxuLyogTkVYVCBCVE4gKi9cXG4ubmV4dEJ0biB7XFxuICAgIGNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNyk7XFxuICAgIHBhZGRpbmc6IDFlbTtcXG4gICAgYm9yZGVyOiAycHggc29saWQgIzA4MDRBOTtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tLCAjMDIwMTM5LCAjMDgwNEFCKTtcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5sb2NhbHMgPSB7XG5cdFwid3JhcHBlclwiOiBcImNoYXBfd3JhcHBlcl9fb1FxVFVcIixcblx0XCJjb250YWluZXJcIjogXCJjaGFwX2NvbnRhaW5lcl9fSmdBelJcIixcblx0XCJoZWFkZXJcIjogXCJjaGFwX2hlYWRlcl9fa29NYVZcIixcblx0XCJsZWZ0UGljdHVyZVwiOiBcImNoYXBfbGVmdFBpY3R1cmVfX3psZEpxXCIsXG5cdFwiY29udGVudFwiOiBcImNoYXBfY29udGVudF9fVU1zWGFcIixcblx0XCJzaWRlYmFyXCI6IFwiY2hhcF9zaWRlYmFyX19kdXFEaFwiLFxuXHRcImZvb3RlclwiOiBcImNoYXBfZm9vdGVyX19OUzZUSVwiLFxuXHRcInByZXZCdG5cIjogXCJjaGFwX3ByZXZCdG5fXzk3MzE5XCIsXG5cdFwibmV4dEJ0blwiOiBcImNoYXBfbmV4dEJ0bl9fdkdfV25cIlxufTtcbm1vZHVsZS5leHBvcnRzID0gX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./node_modules/next/dist/build/webpack/loaders/css-loader/src/index.js??ruleSet[1].rules[1].oneOf[8].use[1]!./node_modules/next/dist/build/webpack/loaders/postcss-loader/src/index.js??ruleSet[1].rules[1].oneOf[8].use[2]!./styles/chap.module.css\n"));

/***/ })

});