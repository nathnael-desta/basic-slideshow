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
    top: 100%;
    left: 50%;
    transform: translateX(-50%);
    z-index: 1;
  }

  .nav a {
    width: 0.5rem;
    height: 0.5rem;
    border-radius: 50%;
    background-color: #fff;
    opacity: 0.75;
    transition: opacity ease 250ms;
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
  }`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;IACI,qBAAqB;IACrB,gEAAiE;IACjE,gBAAgB;IAChB,kBAAkB;EACpB;;EAEA;IACE,SAAS;IACT,UAAU;IACV,sBAAsB;EACxB;;EAEA;IACE,WAAW;IACX,aAAa;IACb,kBAAkB;EACpB;;EAEA;IACE,cAAc;IACd,eAAe;IACf,yDAAoD;IACpD,qBAAqB;IACrB,4BAA4B;IAC5B,aAAa;IACb,sBAAsB;IACtB,uBAAuB;IACvB,aAAa;EACf;;EAEA;IACE,kBAAkB;IAClB,SAAS;IACT,OAAO;IACP,aAAa;IACb,uBAAuB;IACvB,mBAAmB;IACnB,eAAe;IACf,yBAAyB;IACzB,SAAS;IACT,eAAe;EACjB;;EAEA;IACE,kBAAkB;IAClB,cAAc;EAChB;;EAEA;IACE,kBAAkB;IAClB,SAAS;IACT,QAAQ;IACR,gCAAgC;IAChC,aAAa;IACb,YAAY;IACZ,oBAAoB;IACpB,gBAAgB;IAChB,6BAA6B;IAC7B,uBAAuB;IACvB,sDAAsD;IACtD,qBAAqB;EACvB;;EAEA;IACE,aAAa;EACf;;EAEA;IACE,cAAc;IACd,uBAAuB;IACvB,iBAAiB;IACjB,YAAY;IACZ,YAAY;EACd;;EAEA;IACE,aAAa;IACb,gBAAgB;IAChB,kBAAkB;IAClB,eAAe;IACf,SAAS;IACT,SAAS;IACT,2BAA2B;IAC3B,UAAU;EACZ;;EAEA;IACE,aAAa;IACb,cAAc;IACd,kBAAkB;IAClB,sBAAsB;IACtB,aAAa;IACb,8BAA8B;EAChC;;EAEA;IACE,UAAU;EACZ;;;;EAIA;IACE,YAAY;IACZ,YAAY;IACZ,eAAe;IACf,eAAe;EACjB;;EAEA;IACE,kBAAkB;IAClB,QAAQ;IACR,aAAa;IACb,YAAY;IACZ,+BAA+B;IAC/B,sCAAsC;EACxC;;EAEA;IACE,iCAAiC;EACnC;;EAEA;IACE,kBAAkB;IAClB,SAAS;IACT,aAAa;IACb,YAAY;IACZ,+BAA+B;IAC/B,sCAAsC;EACxC;;EAEA;IACE,iCAAiC;EACnC","sourcesContent":["@font-face {\n    font-family: 'MyFont';\n    src: url('./Assets/fonts/Roboto-Regular.ttf') format('truetype'),;\n    font-weight: 600;\n    font-style: normal;\n  }\n\n  * {\n    margin: 0;\n    padding: 0;\n    box-sizing: border-box;\n  }\n\n  body {\n    width: 100%;\n    height: 100vh;\n    position: relative;\n  }\n\n  .main {\n    width: inherit;\n    height: inherit;\n    background-image: url(./Assets/images/gradient.jpeg);\n    background-size:cover;\n    background-repeat: no-repeat;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    padding: 2rem;\n  }\n\n  .title {\n    position: absolute;\n    top: 50px;\n    flex: 2;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    font-size: 4rem;\n    color: rgb(212, 230, 247);\n    left: 50%;\n    translate: -50%;\n  }\n\n  .image-container {\n    position: relative;\n    margin: 0 auto;\n  }\n\n  .images {\n    position: absolute;\n    left: 50%;\n    top: 50%;\n    transform: translate(-50%, -50%);\n    display: flex;\n    width: 48rem;\n    aspect-ratio: 16 / 9;\n    overflow-y: auto;\n    scroll-snap-type: x mandatory;\n    scroll-behavior: smooth;\n    box-shadow: 0 1.5rem 3rem -0.75rem hsla(0,0%,0%, 0.25);\n    border-radius: 0.5rem;\n  }\n\n  .images::-webkit-scrollbar {\n    display: none;\n  }\n\n  .images img {\n    flex: 1 0 100%;\n    scroll-snap-align:start;\n    object-fit: cover;\n    width: 48rem;\n    height: auto;\n  }\n\n  .nav {\n    display: flex;\n    column-gap: 1rem;\n    position: absolute;\n    bottom: 1.25rem;\n    top: 100%;\n    left: 50%;\n    transform: translateX(-50%);\n    z-index: 1;\n  }\n\n  .nav a {\n    width: 0.5rem;\n    height: 0.5rem;\n    border-radius: 50%;\n    background-color: #fff;\n    opacity: 0.75;\n    transition: opacity ease 250ms;\n  }\n\n  .nav a:hover {\n    opacity: 1;\n  }\n  \n  \n\n  svg {\n    width: 130px;\n    height: auto;\n    fill: aliceblue;\n    cursor: pointer;\n  }\n\n  .left_div {\n    position: absolute;\n    left: 0%;\n    height: 130px;\n    width: 130px;\n    background-color: rgba(0,0,0,0);\n    transition: background-color 0.3s ease;\n  }\n\n  .left_div:hover {\n    background-color: rgba(0,0,0,0.8);\n  }\n\n  .right_div {\n    position: absolute;\n    right: 0%;\n    height: 130px;\n    width: 130px;\n    background-color: rgba(0,0,0,0);\n    transition: background-color 0.3s ease;\n  }\n\n  .right_div:hover {\n    background-color: rgba(0,0,0,0.8);\n  }"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguY2M0NGI3NjY1YjM4YWViNDZlMjkuaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDMEc7QUFDakI7QUFDTztBQUNoRyw0Q0FBNEMsK0lBQW9EO0FBQ2hHLDRDQUE0Qyx1SUFBZ0Q7QUFDNUYsOEJBQThCLG1GQUEyQixDQUFDLDRGQUFxQztBQUMvRix5Q0FBeUMsc0ZBQStCO0FBQ3hFLHlDQUF5QyxzRkFBK0I7QUFDeEU7QUFDQTtBQUNBO0FBQ0EsZUFBZSxtQ0FBbUM7QUFDbEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSw0QkFBNEIsbUNBQW1DO0FBQy9EO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEdBQUcsT0FBTyxnRkFBZ0YsWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxZQUFZLGFBQWEsV0FBVyxNQUFNLEtBQUssWUFBWSxXQUFXLFVBQVUsVUFBVSxZQUFZLGFBQWEsV0FBVyxZQUFZLFdBQVcsVUFBVSxPQUFPLEtBQUssWUFBWSxXQUFXLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxZQUFZLFdBQVcsVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxVQUFVLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLFVBQVUsVUFBVSxZQUFZLFdBQVcsTUFBTSxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsV0FBVyxZQUFZLE9BQU8sS0FBSyxVQUFVLFFBQVEsS0FBSyxVQUFVLFVBQVUsVUFBVSxVQUFVLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksc0NBQXNDLDRCQUE0Qix3RUFBd0UsdUJBQXVCLHlCQUF5QixLQUFLLFNBQVMsZ0JBQWdCLGlCQUFpQiw2QkFBNkIsS0FBSyxZQUFZLGtCQUFrQixvQkFBb0IseUJBQXlCLEtBQUssYUFBYSxxQkFBcUIsc0JBQXNCLDJEQUEyRCw0QkFBNEIsbUNBQW1DLG9CQUFvQiw2QkFBNkIsOEJBQThCLG9CQUFvQixLQUFLLGNBQWMseUJBQXlCLGdCQUFnQixjQUFjLG9CQUFvQiw4QkFBOEIsMEJBQTBCLHNCQUFzQixnQ0FBZ0MsZ0JBQWdCLHNCQUFzQixLQUFLLHdCQUF3Qix5QkFBeUIscUJBQXFCLEtBQUssZUFBZSx5QkFBeUIsZ0JBQWdCLGVBQWUsdUNBQXVDLG9CQUFvQixtQkFBbUIsMkJBQTJCLHVCQUF1QixvQ0FBb0MsOEJBQThCLDZEQUE2RCw0QkFBNEIsS0FBSyxrQ0FBa0Msb0JBQW9CLEtBQUssbUJBQW1CLHFCQUFxQiw4QkFBOEIsd0JBQXdCLG1CQUFtQixtQkFBbUIsS0FBSyxZQUFZLG9CQUFvQix1QkFBdUIseUJBQXlCLHNCQUFzQixnQkFBZ0IsZ0JBQWdCLGtDQUFrQyxpQkFBaUIsS0FBSyxjQUFjLG9CQUFvQixxQkFBcUIseUJBQXlCLDZCQUE2QixvQkFBb0IscUNBQXFDLEtBQUssb0JBQW9CLGlCQUFpQixLQUFLLG1CQUFtQixtQkFBbUIsbUJBQW1CLHNCQUFzQixzQkFBc0IsS0FBSyxpQkFBaUIseUJBQXlCLGVBQWUsb0JBQW9CLG1CQUFtQixzQ0FBc0MsNkNBQTZDLEtBQUssdUJBQXVCLHdDQUF3QyxLQUFLLGtCQUFrQix5QkFBeUIsZ0JBQWdCLG9CQUFvQixtQkFBbUIsc0NBQXNDLDZDQUE2QyxLQUFLLHdCQUF3Qix3Q0FBd0MsS0FBSyxtQkFBbUI7QUFDbHFIO0FBQ0EsaUVBQWUsdUJBQXVCLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9iYXNpYy10ZW1wbGF0ZS8uL3NyYy9zdHlsZS5jc3MiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fID0gbmV3IFVSTChcIi4vQXNzZXRzL2ZvbnRzL1JvYm90by1SZWd1bGFyLnR0ZlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fID0gbmV3IFVSTChcIi4vQXNzZXRzL2ltYWdlcy9ncmFkaWVudC5qcGVnXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgQGZvbnQtZmFjZSB7XG4gICAgZm9udC1mYW1pbHk6ICdNeUZvbnQnO1xuICAgIHNyYzogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fX30pIGZvcm1hdCgndHJ1ZXR5cGUnKSw7XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XG4gIH1cblxuICAqIHtcbiAgICBtYXJnaW46IDA7XG4gICAgcGFkZGluZzogMDtcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICB9XG5cbiAgYm9keSB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMDB2aDtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIH1cblxuICAubWFpbiB7XG4gICAgd2lkdGg6IGluaGVyaXQ7XG4gICAgaGVpZ2h0OiBpbmhlcml0O1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX199KTtcbiAgICBiYWNrZ3JvdW5kLXNpemU6Y292ZXI7XG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgcGFkZGluZzogMnJlbTtcbiAgfVxuXG4gIC50aXRsZSB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogNTBweDtcbiAgICBmbGV4OiAyO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBmb250LXNpemU6IDRyZW07XG4gICAgY29sb3I6IHJnYigyMTIsIDIzMCwgMjQ3KTtcbiAgICBsZWZ0OiA1MCU7XG4gICAgdHJhbnNsYXRlOiAtNTAlO1xuICB9XG5cbiAgLmltYWdlLWNvbnRhaW5lciB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIG1hcmdpbjogMCBhdXRvO1xuICB9XG5cbiAgLmltYWdlcyB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGxlZnQ6IDUwJTtcbiAgICB0b3A6IDUwJTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIHdpZHRoOiA0OHJlbTtcbiAgICBhc3BlY3QtcmF0aW86IDE2IC8gOTtcbiAgICBvdmVyZmxvdy15OiBhdXRvO1xuICAgIHNjcm9sbC1zbmFwLXR5cGU6IHggbWFuZGF0b3J5O1xuICAgIHNjcm9sbC1iZWhhdmlvcjogc21vb3RoO1xuICAgIGJveC1zaGFkb3c6IDAgMS41cmVtIDNyZW0gLTAuNzVyZW0gaHNsYSgwLDAlLDAlLCAwLjI1KTtcbiAgICBib3JkZXItcmFkaXVzOiAwLjVyZW07XG4gIH1cblxuICAuaW1hZ2VzOjotd2Via2l0LXNjcm9sbGJhciB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxuXG4gIC5pbWFnZXMgaW1nIHtcbiAgICBmbGV4OiAxIDAgMTAwJTtcbiAgICBzY3JvbGwtc25hcC1hbGlnbjpzdGFydDtcbiAgICBvYmplY3QtZml0OiBjb3ZlcjtcbiAgICB3aWR0aDogNDhyZW07XG4gICAgaGVpZ2h0OiBhdXRvO1xuICB9XG5cbiAgLm5hdiB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBjb2x1bW4tZ2FwOiAxcmVtO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBib3R0b206IDEuMjVyZW07XG4gICAgdG9wOiAxMDAlO1xuICAgIGxlZnQ6IDUwJTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSk7XG4gICAgei1pbmRleDogMTtcbiAgfVxuXG4gIC5uYXYgYSB7XG4gICAgd2lkdGg6IDAuNXJlbTtcbiAgICBoZWlnaHQ6IDAuNXJlbTtcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgICBvcGFjaXR5OiAwLjc1O1xuICAgIHRyYW5zaXRpb246IG9wYWNpdHkgZWFzZSAyNTBtcztcbiAgfVxuXG4gIC5uYXYgYTpob3ZlciB7XG4gICAgb3BhY2l0eTogMTtcbiAgfVxuICBcbiAgXG5cbiAgc3ZnIHtcbiAgICB3aWR0aDogMTMwcHg7XG4gICAgaGVpZ2h0OiBhdXRvO1xuICAgIGZpbGw6IGFsaWNlYmx1ZTtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gIH1cblxuICAubGVmdF9kaXYge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBsZWZ0OiAwJTtcbiAgICBoZWlnaHQ6IDEzMHB4O1xuICAgIHdpZHRoOiAxMzBweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsMCwwLDApO1xuICAgIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMC4zcyBlYXNlO1xuICB9XG5cbiAgLmxlZnRfZGl2OmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsMCwwLDAuOCk7XG4gIH1cblxuICAucmlnaHRfZGl2IHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgcmlnaHQ6IDAlO1xuICAgIGhlaWdodDogMTMwcHg7XG4gICAgd2lkdGg6IDEzMHB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwwLDAsMCk7XG4gICAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAwLjNzIGVhc2U7XG4gIH1cblxuICAucmlnaHRfZGl2OmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsMCwwLDAuOCk7XG4gIH1gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7SUFDSSxxQkFBcUI7SUFDckIsZ0VBQWlFO0lBQ2pFLGdCQUFnQjtJQUNoQixrQkFBa0I7RUFDcEI7O0VBRUE7SUFDRSxTQUFTO0lBQ1QsVUFBVTtJQUNWLHNCQUFzQjtFQUN4Qjs7RUFFQTtJQUNFLFdBQVc7SUFDWCxhQUFhO0lBQ2Isa0JBQWtCO0VBQ3BCOztFQUVBO0lBQ0UsY0FBYztJQUNkLGVBQWU7SUFDZix5REFBb0Q7SUFDcEQscUJBQXFCO0lBQ3JCLDRCQUE0QjtJQUM1QixhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLHVCQUF1QjtJQUN2QixhQUFhO0VBQ2Y7O0VBRUE7SUFDRSxrQkFBa0I7SUFDbEIsU0FBUztJQUNULE9BQU87SUFDUCxhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtJQUNuQixlQUFlO0lBQ2YseUJBQXlCO0lBQ3pCLFNBQVM7SUFDVCxlQUFlO0VBQ2pCOztFQUVBO0lBQ0Usa0JBQWtCO0lBQ2xCLGNBQWM7RUFDaEI7O0VBRUE7SUFDRSxrQkFBa0I7SUFDbEIsU0FBUztJQUNULFFBQVE7SUFDUixnQ0FBZ0M7SUFDaEMsYUFBYTtJQUNiLFlBQVk7SUFDWixvQkFBb0I7SUFDcEIsZ0JBQWdCO0lBQ2hCLDZCQUE2QjtJQUM3Qix1QkFBdUI7SUFDdkIsc0RBQXNEO0lBQ3RELHFCQUFxQjtFQUN2Qjs7RUFFQTtJQUNFLGFBQWE7RUFDZjs7RUFFQTtJQUNFLGNBQWM7SUFDZCx1QkFBdUI7SUFDdkIsaUJBQWlCO0lBQ2pCLFlBQVk7SUFDWixZQUFZO0VBQ2Q7O0VBRUE7SUFDRSxhQUFhO0lBQ2IsZ0JBQWdCO0lBQ2hCLGtCQUFrQjtJQUNsQixlQUFlO0lBQ2YsU0FBUztJQUNULFNBQVM7SUFDVCwyQkFBMkI7SUFDM0IsVUFBVTtFQUNaOztFQUVBO0lBQ0UsYUFBYTtJQUNiLGNBQWM7SUFDZCxrQkFBa0I7SUFDbEIsc0JBQXNCO0lBQ3RCLGFBQWE7SUFDYiw4QkFBOEI7RUFDaEM7O0VBRUE7SUFDRSxVQUFVO0VBQ1o7Ozs7RUFJQTtJQUNFLFlBQVk7SUFDWixZQUFZO0lBQ1osZUFBZTtJQUNmLGVBQWU7RUFDakI7O0VBRUE7SUFDRSxrQkFBa0I7SUFDbEIsUUFBUTtJQUNSLGFBQWE7SUFDYixZQUFZO0lBQ1osK0JBQStCO0lBQy9CLHNDQUFzQztFQUN4Qzs7RUFFQTtJQUNFLGlDQUFpQztFQUNuQzs7RUFFQTtJQUNFLGtCQUFrQjtJQUNsQixTQUFTO0lBQ1QsYUFBYTtJQUNiLFlBQVk7SUFDWiwrQkFBK0I7SUFDL0Isc0NBQXNDO0VBQ3hDOztFQUVBO0lBQ0UsaUNBQWlDO0VBQ25DXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIkBmb250LWZhY2Uge1xcbiAgICBmb250LWZhbWlseTogJ015Rm9udCc7XFxuICAgIHNyYzogdXJsKCcuL0Fzc2V0cy9mb250cy9Sb2JvdG8tUmVndWxhci50dGYnKSBmb3JtYXQoJ3RydWV0eXBlJyksO1xcbiAgICBmb250LXdlaWdodDogNjAwO1xcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XFxuICB9XFxuXFxuICAqIHtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgfVxcblxcbiAgYm9keSB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IDEwMHZoO1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICB9XFxuXFxuICAubWFpbiB7XFxuICAgIHdpZHRoOiBpbmhlcml0O1xcbiAgICBoZWlnaHQ6IGluaGVyaXQ7XFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCguL0Fzc2V0cy9pbWFnZXMvZ3JhZGllbnQuanBlZyk7XFxuICAgIGJhY2tncm91bmQtc2l6ZTpjb3ZlcjtcXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIHBhZGRpbmc6IDJyZW07XFxuICB9XFxuXFxuICAudGl0bGUge1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHRvcDogNTBweDtcXG4gICAgZmxleDogMjtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGZvbnQtc2l6ZTogNHJlbTtcXG4gICAgY29sb3I6IHJnYigyMTIsIDIzMCwgMjQ3KTtcXG4gICAgbGVmdDogNTAlO1xcbiAgICB0cmFuc2xhdGU6IC01MCU7XFxuICB9XFxuXFxuICAuaW1hZ2UtY29udGFpbmVyIHtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICBtYXJnaW46IDAgYXV0bztcXG4gIH1cXG5cXG4gIC5pbWFnZXMge1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIGxlZnQ6IDUwJTtcXG4gICAgdG9wOiA1MCU7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICB3aWR0aDogNDhyZW07XFxuICAgIGFzcGVjdC1yYXRpbzogMTYgLyA5O1xcbiAgICBvdmVyZmxvdy15OiBhdXRvO1xcbiAgICBzY3JvbGwtc25hcC10eXBlOiB4IG1hbmRhdG9yeTtcXG4gICAgc2Nyb2xsLWJlaGF2aW9yOiBzbW9vdGg7XFxuICAgIGJveC1zaGFkb3c6IDAgMS41cmVtIDNyZW0gLTAuNzVyZW0gaHNsYSgwLDAlLDAlLCAwLjI1KTtcXG4gICAgYm9yZGVyLXJhZGl1czogMC41cmVtO1xcbiAgfVxcblxcbiAgLmltYWdlczo6LXdlYmtpdC1zY3JvbGxiYXIge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbiAgfVxcblxcbiAgLmltYWdlcyBpbWcge1xcbiAgICBmbGV4OiAxIDAgMTAwJTtcXG4gICAgc2Nyb2xsLXNuYXAtYWxpZ246c3RhcnQ7XFxuICAgIG9iamVjdC1maXQ6IGNvdmVyO1xcbiAgICB3aWR0aDogNDhyZW07XFxuICAgIGhlaWdodDogYXV0bztcXG4gIH1cXG5cXG4gIC5uYXYge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBjb2x1bW4tZ2FwOiAxcmVtO1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIGJvdHRvbTogMS4yNXJlbTtcXG4gICAgdG9wOiAxMDAlO1xcbiAgICBsZWZ0OiA1MCU7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKTtcXG4gICAgei1pbmRleDogMTtcXG4gIH1cXG5cXG4gIC5uYXYgYSB7XFxuICAgIHdpZHRoOiAwLjVyZW07XFxuICAgIGhlaWdodDogMC41cmVtO1xcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XFxuICAgIG9wYWNpdHk6IDAuNzU7XFxuICAgIHRyYW5zaXRpb246IG9wYWNpdHkgZWFzZSAyNTBtcztcXG4gIH1cXG5cXG4gIC5uYXYgYTpob3ZlciB7XFxuICAgIG9wYWNpdHk6IDE7XFxuICB9XFxuICBcXG4gIFxcblxcbiAgc3ZnIHtcXG4gICAgd2lkdGg6IDEzMHB4O1xcbiAgICBoZWlnaHQ6IGF1dG87XFxuICAgIGZpbGw6IGFsaWNlYmx1ZTtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgfVxcblxcbiAgLmxlZnRfZGl2IHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICBsZWZ0OiAwJTtcXG4gICAgaGVpZ2h0OiAxMzBweDtcXG4gICAgd2lkdGg6IDEzMHB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsMCwwLDApO1xcbiAgICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDAuM3MgZWFzZTtcXG4gIH1cXG5cXG4gIC5sZWZ0X2Rpdjpob3ZlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwwLDAsMC44KTtcXG4gIH1cXG5cXG4gIC5yaWdodF9kaXYge1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHJpZ2h0OiAwJTtcXG4gICAgaGVpZ2h0OiAxMzBweDtcXG4gICAgd2lkdGg6IDEzMHB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsMCwwLDApO1xcbiAgICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDAuM3MgZWFzZTtcXG4gIH1cXG5cXG4gIC5yaWdodF9kaXY6aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsMCwwLDAuOCk7XFxuICB9XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==