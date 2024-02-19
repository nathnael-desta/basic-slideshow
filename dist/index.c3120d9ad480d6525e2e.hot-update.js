"use strict";
self["webpackHotUpdatebasic_template"]("index",{

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./Assets/fonts/Roboto-Regular.ttf */ "./src/Assets/fonts/Roboto-Regular.ttf"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ./Assets/images/gradient.jpeg */ "./src/Assets/images/gradient.jpeg"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `@font-face {
    font-family: 'MyFont';
    src: url(${___CSS_LOADER_URL_REPLACEMENT_0___}) format('truetype'),;
    font-weight: 600;
    font-style: normal;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    width: 100%;
    height: 100vh;
    position: relative;
  }

  .main {
    width: inherit;
    height: inherit;
    background-image: url(${___CSS_LOADER_URL_REPLACEMENT_1___});
    background-size:cover;
    background-repeat: no-repeat;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 2rem;
  }

  .title {
    position: absolute;
    top: 50px;
    flex: 2;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 4rem;
    color: rgb(212, 230, 247);
    left: 50%;
    translate: -50%;
  }

  .image-container {
    position: relative;
    margin: 0 auto;
  }

  .images {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    display: flex;
    width: 48rem;
    aspect-ratio: 16 / 9;
    overflow-y: auto;
    scroll-snap-type: x mandatory;
    scroll-behavior: smooth;
    box-shadow: 0 1.5rem 3rem -0.75rem hsla(0,0%,0%, 0.25);
    border-radius: 0.5rem;
  }

  .images::-webkit-scrollbar {
    display: none;
  }

  .images img {
    flex: 1 0 100%;
    scroll-snap-align:start;
    object-fit: cover;
    width: 48rem;
    height: auto;
  }

  .nav {
    display: flex;
    column-gap: 1rem;
    position: absolute;
    bottom: 1.25rem;
    top: 70%;
    left: 50%;
    transform: translateX(-50%);
    z-index: 1;
  }

  .nav a {
    width: 0.75rem;
    height: 0.75rem;
    border-radius: 50%;
    background-color: #fff;
    opacity: 0.75;
    scale: 1;
    transition: opacity ease 250ms;
    transition: scale ease 250ms;
  }

  .nav a:hover {
    opacity: 1;
  }
  
  

  svg {
    width: 130px;
    height: auto;
    fill: aliceblue;
    cursor: pointer;
  }

  .left_div {
    position: absolute;
    left: 0%;
    height: 130px;
    width: 130px;
    background-color: rgba(0,0,0,0);
    transition: background-color 0.3s ease;
  }

  .left_div:hover {
    background-color: rgba(0,0,0,0.8);
  }

  .right_div {
    position: absolute;
    right: 0%;
    height: 130px;
    width: 130px;
    background-color: rgba(0,0,0,0);
    transition: background-color 0.3s ease;
  }

  .right_div:hover {
    background-color: rgba(0,0,0,0.8);
  }`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;IACI,qBAAqB;IACrB,gEAAiE;IACjE,gBAAgB;IAChB,kBAAkB;EACpB;;EAEA;IACE,SAAS;IACT,UAAU;IACV,sBAAsB;EACxB;;EAEA;IACE,WAAW;IACX,aAAa;IACb,kBAAkB;EACpB;;EAEA;IACE,cAAc;IACd,eAAe;IACf,yDAAoD;IACpD,qBAAqB;IACrB,4BAA4B;IAC5B,aAAa;IACb,sBAAsB;IACtB,uBAAuB;IACvB,aAAa;EACf;;EAEA;IACE,kBAAkB;IAClB,SAAS;IACT,OAAO;IACP,aAAa;IACb,uBAAuB;IACvB,mBAAmB;IACnB,eAAe;IACf,yBAAyB;IACzB,SAAS;IACT,eAAe;EACjB;;EAEA;IACE,kBAAkB;IAClB,cAAc;EAChB;;EAEA;IACE,kBAAkB;IAClB,SAAS;IACT,QAAQ;IACR,gCAAgC;IAChC,aAAa;IACb,YAAY;IACZ,oBAAoB;IACpB,gBAAgB;IAChB,6BAA6B;IAC7B,uBAAuB;IACvB,sDAAsD;IACtD,qBAAqB;EACvB;;EAEA;IACE,aAAa;EACf;;EAEA;IACE,cAAc;IACd,uBAAuB;IACvB,iBAAiB;IACjB,YAAY;IACZ,YAAY;EACd;;EAEA;IACE,aAAa;IACb,gBAAgB;IAChB,kBAAkB;IAClB,eAAe;IACf,QAAQ;IACR,SAAS;IACT,2BAA2B;IAC3B,UAAU;EACZ;;EAEA;IACE,cAAc;IACd,eAAe;IACf,kBAAkB;IAClB,sBAAsB;IACtB,aAAa;IACb,QAAQ;IACR,8BAA8B;IAC9B,4BAA4B;EAC9B;;EAEA;IACE,UAAU;EACZ;;;;EAIA;IACE,YAAY;IACZ,YAAY;IACZ,eAAe;IACf,eAAe;EACjB;;EAEA;IACE,kBAAkB;IAClB,QAAQ;IACR,aAAa;IACb,YAAY;IACZ,+BAA+B;IAC/B,sCAAsC;EACxC;;EAEA;IACE,iCAAiC;EACnC;;EAEA;IACE,kBAAkB;IAClB,SAAS;IACT,aAAa;IACb,YAAY;IACZ,+BAA+B;IAC/B,sCAAsC;EACxC;;EAEA;IACE,iCAAiC;EACnC","sourcesContent":["@font-face {\n    font-family: 'MyFont';\n    src: url('./Assets/fonts/Roboto-Regular.ttf') format('truetype'),;\n    font-weight: 600;\n    font-style: normal;\n  }\n\n  * {\n    margin: 0;\n    padding: 0;\n    box-sizing: border-box;\n  }\n\n  body {\n    width: 100%;\n    height: 100vh;\n    position: relative;\n  }\n\n  .main {\n    width: inherit;\n    height: inherit;\n    background-image: url(./Assets/images/gradient.jpeg);\n    background-size:cover;\n    background-repeat: no-repeat;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    padding: 2rem;\n  }\n\n  .title {\n    position: absolute;\n    top: 50px;\n    flex: 2;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    font-size: 4rem;\n    color: rgb(212, 230, 247);\n    left: 50%;\n    translate: -50%;\n  }\n\n  .image-container {\n    position: relative;\n    margin: 0 auto;\n  }\n\n  .images {\n    position: absolute;\n    left: 50%;\n    top: 50%;\n    transform: translate(-50%, -50%);\n    display: flex;\n    width: 48rem;\n    aspect-ratio: 16 / 9;\n    overflow-y: auto;\n    scroll-snap-type: x mandatory;\n    scroll-behavior: smooth;\n    box-shadow: 0 1.5rem 3rem -0.75rem hsla(0,0%,0%, 0.25);\n    border-radius: 0.5rem;\n  }\n\n  .images::-webkit-scrollbar {\n    display: none;\n  }\n\n  .images img {\n    flex: 1 0 100%;\n    scroll-snap-align:start;\n    object-fit: cover;\n    width: 48rem;\n    height: auto;\n  }\n\n  .nav {\n    display: flex;\n    column-gap: 1rem;\n    position: absolute;\n    bottom: 1.25rem;\n    top: 70%;\n    left: 50%;\n    transform: translateX(-50%);\n    z-index: 1;\n  }\n\n  .nav a {\n    width: 0.75rem;\n    height: 0.75rem;\n    border-radius: 50%;\n    background-color: #fff;\n    opacity: 0.75;\n    scale: 1;\n    transition: opacity ease 250ms;\n    transition: scale ease 250ms;\n  }\n\n  .nav a:hover {\n    opacity: 1;\n  }\n  \n  \n\n  svg {\n    width: 130px;\n    height: auto;\n    fill: aliceblue;\n    cursor: pointer;\n  }\n\n  .left_div {\n    position: absolute;\n    left: 0%;\n    height: 130px;\n    width: 130px;\n    background-color: rgba(0,0,0,0);\n    transition: background-color 0.3s ease;\n  }\n\n  .left_div:hover {\n    background-color: rgba(0,0,0,0.8);\n  }\n\n  .right_div {\n    position: absolute;\n    right: 0%;\n    height: 130px;\n    width: 130px;\n    background-color: rgba(0,0,0,0);\n    transition: background-color 0.3s ease;\n  }\n\n  .right_div:hover {\n    background-color: rgba(0,0,0,0.8);\n  }"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguYzMxMjBkOWFkNDgwZDY1MjVlMmUuaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDMEc7QUFDakI7QUFDTztBQUNoRyw0Q0FBNEMsK0lBQW9EO0FBQ2hHLDRDQUE0Qyx1SUFBZ0Q7QUFDNUYsOEJBQThCLG1GQUEyQixDQUFDLDRGQUFxQztBQUMvRix5Q0FBeUMsc0ZBQStCO0FBQ3hFLHlDQUF5QyxzRkFBK0I7QUFDeEU7QUFDQTtBQUNBO0FBQ0EsZUFBZSxtQ0FBbUM7QUFDbEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSw0QkFBNEIsbUNBQW1DO0FBQy9EO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxHQUFHLE9BQU8sZ0ZBQWdGLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsWUFBWSxhQUFhLFdBQVcsTUFBTSxLQUFLLFlBQVksV0FBVyxVQUFVLFVBQVUsWUFBWSxhQUFhLFdBQVcsWUFBWSxXQUFXLFVBQVUsT0FBTyxLQUFLLFlBQVksV0FBVyxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsWUFBWSxXQUFXLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsVUFBVSxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxVQUFVLFVBQVUsWUFBWSxXQUFXLE1BQU0sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLFdBQVcsVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsUUFBUSxLQUFLLFVBQVUsVUFBVSxVQUFVLFVBQVUsT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxzQ0FBc0MsNEJBQTRCLHdFQUF3RSx1QkFBdUIseUJBQXlCLEtBQUssU0FBUyxnQkFBZ0IsaUJBQWlCLDZCQUE2QixLQUFLLFlBQVksa0JBQWtCLG9CQUFvQix5QkFBeUIsS0FBSyxhQUFhLHFCQUFxQixzQkFBc0IsMkRBQTJELDRCQUE0QixtQ0FBbUMsb0JBQW9CLDZCQUE2Qiw4QkFBOEIsb0JBQW9CLEtBQUssY0FBYyx5QkFBeUIsZ0JBQWdCLGNBQWMsb0JBQW9CLDhCQUE4QiwwQkFBMEIsc0JBQXNCLGdDQUFnQyxnQkFBZ0Isc0JBQXNCLEtBQUssd0JBQXdCLHlCQUF5QixxQkFBcUIsS0FBSyxlQUFlLHlCQUF5QixnQkFBZ0IsZUFBZSx1Q0FBdUMsb0JBQW9CLG1CQUFtQiwyQkFBMkIsdUJBQXVCLG9DQUFvQyw4QkFBOEIsNkRBQTZELDRCQUE0QixLQUFLLGtDQUFrQyxvQkFBb0IsS0FBSyxtQkFBbUIscUJBQXFCLDhCQUE4Qix3QkFBd0IsbUJBQW1CLG1CQUFtQixLQUFLLFlBQVksb0JBQW9CLHVCQUF1Qix5QkFBeUIsc0JBQXNCLGVBQWUsZ0JBQWdCLGtDQUFrQyxpQkFBaUIsS0FBSyxjQUFjLHFCQUFxQixzQkFBc0IseUJBQXlCLDZCQUE2QixvQkFBb0IsZUFBZSxxQ0FBcUMsbUNBQW1DLEtBQUssb0JBQW9CLGlCQUFpQixLQUFLLG1CQUFtQixtQkFBbUIsbUJBQW1CLHNCQUFzQixzQkFBc0IsS0FBSyxpQkFBaUIseUJBQXlCLGVBQWUsb0JBQW9CLG1CQUFtQixzQ0FBc0MsNkNBQTZDLEtBQUssdUJBQXVCLHdDQUF3QyxLQUFLLGtCQUFrQix5QkFBeUIsZ0JBQWdCLG9CQUFvQixtQkFBbUIsc0NBQXNDLDZDQUE2QyxLQUFLLHdCQUF3Qix3Q0FBd0MsS0FBSyxtQkFBbUI7QUFDNXVIO0FBQ0EsaUVBQWUsdUJBQXVCLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9iYXNpYy10ZW1wbGF0ZS8uL3NyYy9zdHlsZS5jc3MiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fID0gbmV3IFVSTChcIi4vQXNzZXRzL2ZvbnRzL1JvYm90by1SZWd1bGFyLnR0ZlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fID0gbmV3IFVSTChcIi4vQXNzZXRzL2ltYWdlcy9ncmFkaWVudC5qcGVnXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgQGZvbnQtZmFjZSB7XG4gICAgZm9udC1mYW1pbHk6ICdNeUZvbnQnO1xuICAgIHNyYzogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fX30pIGZvcm1hdCgndHJ1ZXR5cGUnKSw7XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XG4gIH1cblxuICAqIHtcbiAgICBtYXJnaW46IDA7XG4gICAgcGFkZGluZzogMDtcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICB9XG5cbiAgYm9keSB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMDB2aDtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIH1cblxuICAubWFpbiB7XG4gICAgd2lkdGg6IGluaGVyaXQ7XG4gICAgaGVpZ2h0OiBpbmhlcml0O1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX199KTtcbiAgICBiYWNrZ3JvdW5kLXNpemU6Y292ZXI7XG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgcGFkZGluZzogMnJlbTtcbiAgfVxuXG4gIC50aXRsZSB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogNTBweDtcbiAgICBmbGV4OiAyO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBmb250LXNpemU6IDRyZW07XG4gICAgY29sb3I6IHJnYigyMTIsIDIzMCwgMjQ3KTtcbiAgICBsZWZ0OiA1MCU7XG4gICAgdHJhbnNsYXRlOiAtNTAlO1xuICB9XG5cbiAgLmltYWdlLWNvbnRhaW5lciB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIG1hcmdpbjogMCBhdXRvO1xuICB9XG5cbiAgLmltYWdlcyB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGxlZnQ6IDUwJTtcbiAgICB0b3A6IDUwJTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIHdpZHRoOiA0OHJlbTtcbiAgICBhc3BlY3QtcmF0aW86IDE2IC8gOTtcbiAgICBvdmVyZmxvdy15OiBhdXRvO1xuICAgIHNjcm9sbC1zbmFwLXR5cGU6IHggbWFuZGF0b3J5O1xuICAgIHNjcm9sbC1iZWhhdmlvcjogc21vb3RoO1xuICAgIGJveC1zaGFkb3c6IDAgMS41cmVtIDNyZW0gLTAuNzVyZW0gaHNsYSgwLDAlLDAlLCAwLjI1KTtcbiAgICBib3JkZXItcmFkaXVzOiAwLjVyZW07XG4gIH1cblxuICAuaW1hZ2VzOjotd2Via2l0LXNjcm9sbGJhciB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxuXG4gIC5pbWFnZXMgaW1nIHtcbiAgICBmbGV4OiAxIDAgMTAwJTtcbiAgICBzY3JvbGwtc25hcC1hbGlnbjpzdGFydDtcbiAgICBvYmplY3QtZml0OiBjb3ZlcjtcbiAgICB3aWR0aDogNDhyZW07XG4gICAgaGVpZ2h0OiBhdXRvO1xuICB9XG5cbiAgLm5hdiB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBjb2x1bW4tZ2FwOiAxcmVtO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBib3R0b206IDEuMjVyZW07XG4gICAgdG9wOiA3MCU7XG4gICAgbGVmdDogNTAlO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKTtcbiAgICB6LWluZGV4OiAxO1xuICB9XG5cbiAgLm5hdiBhIHtcbiAgICB3aWR0aDogMC43NXJlbTtcbiAgICBoZWlnaHQ6IDAuNzVyZW07XG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gICAgb3BhY2l0eTogMC43NTtcbiAgICBzY2FsZTogMTtcbiAgICB0cmFuc2l0aW9uOiBvcGFjaXR5IGVhc2UgMjUwbXM7XG4gICAgdHJhbnNpdGlvbjogc2NhbGUgZWFzZSAyNTBtcztcbiAgfVxuXG4gIC5uYXYgYTpob3ZlciB7XG4gICAgb3BhY2l0eTogMTtcbiAgfVxuICBcbiAgXG5cbiAgc3ZnIHtcbiAgICB3aWR0aDogMTMwcHg7XG4gICAgaGVpZ2h0OiBhdXRvO1xuICAgIGZpbGw6IGFsaWNlYmx1ZTtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gIH1cblxuICAubGVmdF9kaXYge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBsZWZ0OiAwJTtcbiAgICBoZWlnaHQ6IDEzMHB4O1xuICAgIHdpZHRoOiAxMzBweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsMCwwLDApO1xuICAgIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMC4zcyBlYXNlO1xuICB9XG5cbiAgLmxlZnRfZGl2OmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsMCwwLDAuOCk7XG4gIH1cblxuICAucmlnaHRfZGl2IHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgcmlnaHQ6IDAlO1xuICAgIGhlaWdodDogMTMwcHg7XG4gICAgd2lkdGg6IDEzMHB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwwLDAsMCk7XG4gICAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAwLjNzIGVhc2U7XG4gIH1cblxuICAucmlnaHRfZGl2OmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsMCwwLDAuOCk7XG4gIH1gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7SUFDSSxxQkFBcUI7SUFDckIsZ0VBQWlFO0lBQ2pFLGdCQUFnQjtJQUNoQixrQkFBa0I7RUFDcEI7O0VBRUE7SUFDRSxTQUFTO0lBQ1QsVUFBVTtJQUNWLHNCQUFzQjtFQUN4Qjs7RUFFQTtJQUNFLFdBQVc7SUFDWCxhQUFhO0lBQ2Isa0JBQWtCO0VBQ3BCOztFQUVBO0lBQ0UsY0FBYztJQUNkLGVBQWU7SUFDZix5REFBb0Q7SUFDcEQscUJBQXFCO0lBQ3JCLDRCQUE0QjtJQUM1QixhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLHVCQUF1QjtJQUN2QixhQUFhO0VBQ2Y7O0VBRUE7SUFDRSxrQkFBa0I7SUFDbEIsU0FBUztJQUNULE9BQU87SUFDUCxhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtJQUNuQixlQUFlO0lBQ2YseUJBQXlCO0lBQ3pCLFNBQVM7SUFDVCxlQUFlO0VBQ2pCOztFQUVBO0lBQ0Usa0JBQWtCO0lBQ2xCLGNBQWM7RUFDaEI7O0VBRUE7SUFDRSxrQkFBa0I7SUFDbEIsU0FBUztJQUNULFFBQVE7SUFDUixnQ0FBZ0M7SUFDaEMsYUFBYTtJQUNiLFlBQVk7SUFDWixvQkFBb0I7SUFDcEIsZ0JBQWdCO0lBQ2hCLDZCQUE2QjtJQUM3Qix1QkFBdUI7SUFDdkIsc0RBQXNEO0lBQ3RELHFCQUFxQjtFQUN2Qjs7RUFFQTtJQUNFLGFBQWE7RUFDZjs7RUFFQTtJQUNFLGNBQWM7SUFDZCx1QkFBdUI7SUFDdkIsaUJBQWlCO0lBQ2pCLFlBQVk7SUFDWixZQUFZO0VBQ2Q7O0VBRUE7SUFDRSxhQUFhO0lBQ2IsZ0JBQWdCO0lBQ2hCLGtCQUFrQjtJQUNsQixlQUFlO0lBQ2YsUUFBUTtJQUNSLFNBQVM7SUFDVCwyQkFBMkI7SUFDM0IsVUFBVTtFQUNaOztFQUVBO0lBQ0UsY0FBYztJQUNkLGVBQWU7SUFDZixrQkFBa0I7SUFDbEIsc0JBQXNCO0lBQ3RCLGFBQWE7SUFDYixRQUFRO0lBQ1IsOEJBQThCO0lBQzlCLDRCQUE0QjtFQUM5Qjs7RUFFQTtJQUNFLFVBQVU7RUFDWjs7OztFQUlBO0lBQ0UsWUFBWTtJQUNaLFlBQVk7SUFDWixlQUFlO0lBQ2YsZUFBZTtFQUNqQjs7RUFFQTtJQUNFLGtCQUFrQjtJQUNsQixRQUFRO0lBQ1IsYUFBYTtJQUNiLFlBQVk7SUFDWiwrQkFBK0I7SUFDL0Isc0NBQXNDO0VBQ3hDOztFQUVBO0lBQ0UsaUNBQWlDO0VBQ25DOztFQUVBO0lBQ0Usa0JBQWtCO0lBQ2xCLFNBQVM7SUFDVCxhQUFhO0lBQ2IsWUFBWTtJQUNaLCtCQUErQjtJQUMvQixzQ0FBc0M7RUFDeEM7O0VBRUE7SUFDRSxpQ0FBaUM7RUFDbkNcIixcInNvdXJjZXNDb250ZW50XCI6W1wiQGZvbnQtZmFjZSB7XFxuICAgIGZvbnQtZmFtaWx5OiAnTXlGb250JztcXG4gICAgc3JjOiB1cmwoJy4vQXNzZXRzL2ZvbnRzL1JvYm90by1SZWd1bGFyLnR0ZicpIGZvcm1hdCgndHJ1ZXR5cGUnKSw7XFxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XFxuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcXG4gIH1cXG5cXG4gICoge1xcbiAgICBtYXJnaW46IDA7XFxuICAgIHBhZGRpbmc6IDA7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICB9XFxuXFxuICBib2R5IHtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogMTAwdmg7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIH1cXG5cXG4gIC5tYWluIHtcXG4gICAgd2lkdGg6IGluaGVyaXQ7XFxuICAgIGhlaWdodDogaW5oZXJpdDtcXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC4vQXNzZXRzL2ltYWdlcy9ncmFkaWVudC5qcGVnKTtcXG4gICAgYmFja2dyb3VuZC1zaXplOmNvdmVyO1xcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgcGFkZGluZzogMnJlbTtcXG4gIH1cXG5cXG4gIC50aXRsZSB7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgdG9wOiA1MHB4O1xcbiAgICBmbGV4OiAyO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZm9udC1zaXplOiA0cmVtO1xcbiAgICBjb2xvcjogcmdiKDIxMiwgMjMwLCAyNDcpO1xcbiAgICBsZWZ0OiA1MCU7XFxuICAgIHRyYW5zbGF0ZTogLTUwJTtcXG4gIH1cXG5cXG4gIC5pbWFnZS1jb250YWluZXIge1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIG1hcmdpbjogMCBhdXRvO1xcbiAgfVxcblxcbiAgLmltYWdlcyB7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgbGVmdDogNTAlO1xcbiAgICB0b3A6IDUwJTtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIHdpZHRoOiA0OHJlbTtcXG4gICAgYXNwZWN0LXJhdGlvOiAxNiAvIDk7XFxuICAgIG92ZXJmbG93LXk6IGF1dG87XFxuICAgIHNjcm9sbC1zbmFwLXR5cGU6IHggbWFuZGF0b3J5O1xcbiAgICBzY3JvbGwtYmVoYXZpb3I6IHNtb290aDtcXG4gICAgYm94LXNoYWRvdzogMCAxLjVyZW0gM3JlbSAtMC43NXJlbSBoc2xhKDAsMCUsMCUsIDAuMjUpO1xcbiAgICBib3JkZXItcmFkaXVzOiAwLjVyZW07XFxuICB9XFxuXFxuICAuaW1hZ2VzOjotd2Via2l0LXNjcm9sbGJhciB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxuICB9XFxuXFxuICAuaW1hZ2VzIGltZyB7XFxuICAgIGZsZXg6IDEgMCAxMDAlO1xcbiAgICBzY3JvbGwtc25hcC1hbGlnbjpzdGFydDtcXG4gICAgb2JqZWN0LWZpdDogY292ZXI7XFxuICAgIHdpZHRoOiA0OHJlbTtcXG4gICAgaGVpZ2h0OiBhdXRvO1xcbiAgfVxcblxcbiAgLm5hdiB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGNvbHVtbi1nYXA6IDFyZW07XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgYm90dG9tOiAxLjI1cmVtO1xcbiAgICB0b3A6IDcwJTtcXG4gICAgbGVmdDogNTAlO1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSk7XFxuICAgIHotaW5kZXg6IDE7XFxuICB9XFxuXFxuICAubmF2IGEge1xcbiAgICB3aWR0aDogMC43NXJlbTtcXG4gICAgaGVpZ2h0OiAwLjc1cmVtO1xcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XFxuICAgIG9wYWNpdHk6IDAuNzU7XFxuICAgIHNjYWxlOiAxO1xcbiAgICB0cmFuc2l0aW9uOiBvcGFjaXR5IGVhc2UgMjUwbXM7XFxuICAgIHRyYW5zaXRpb246IHNjYWxlIGVhc2UgMjUwbXM7XFxuICB9XFxuXFxuICAubmF2IGE6aG92ZXIge1xcbiAgICBvcGFjaXR5OiAxO1xcbiAgfVxcbiAgXFxuICBcXG5cXG4gIHN2ZyB7XFxuICAgIHdpZHRoOiAxMzBweDtcXG4gICAgaGVpZ2h0OiBhdXRvO1xcbiAgICBmaWxsOiBhbGljZWJsdWU7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gIH1cXG5cXG4gIC5sZWZ0X2RpdiB7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgbGVmdDogMCU7XFxuICAgIGhlaWdodDogMTMwcHg7XFxuICAgIHdpZHRoOiAxMzBweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLDAsMCwwKTtcXG4gICAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAwLjNzIGVhc2U7XFxuICB9XFxuXFxuICAubGVmdF9kaXY6aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsMCwwLDAuOCk7XFxuICB9XFxuXFxuICAucmlnaHRfZGl2IHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICByaWdodDogMCU7XFxuICAgIGhlaWdodDogMTMwcHg7XFxuICAgIHdpZHRoOiAxMzBweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLDAsMCwwKTtcXG4gICAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAwLjNzIGVhc2U7XFxuICB9XFxuXFxuICAucmlnaHRfZGl2OmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLDAsMCwwLjgpO1xcbiAgfVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=