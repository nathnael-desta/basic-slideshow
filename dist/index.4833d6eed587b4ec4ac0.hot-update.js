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

  a.hovered {
    opacity: 1;
    scale: 1.25;
    background-color: red;
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
  }`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;IACI,qBAAqB;IACrB,gEAAiE;IACjE,gBAAgB;IAChB,kBAAkB;EACpB;;EAEA;IACE,SAAS;IACT,UAAU;IACV,sBAAsB;EACxB;;EAEA;IACE,WAAW;IACX,aAAa;IACb,kBAAkB;EACpB;;EAEA;IACE,cAAc;IACd,eAAe;IACf,yDAAoD;IACpD,qBAAqB;IACrB,4BAA4B;IAC5B,aAAa;IACb,sBAAsB;IACtB,uBAAuB;IACvB,aAAa;EACf;;EAEA;IACE,kBAAkB;IAClB,SAAS;IACT,OAAO;IACP,aAAa;IACb,uBAAuB;IACvB,mBAAmB;IACnB,eAAe;IACf,yBAAyB;IACzB,SAAS;IACT,eAAe;EACjB;;EAEA;IACE,kBAAkB;IAClB,cAAc;EAChB;;EAEA;IACE,kBAAkB;IAClB,SAAS;IACT,QAAQ;IACR,gCAAgC;IAChC,aAAa;IACb,YAAY;IACZ,oBAAoB;IACpB,gBAAgB;IAChB,6BAA6B;IAC7B,uBAAuB;IACvB,sDAAsD;IACtD,qBAAqB;EACvB;;EAEA;IACE,aAAa;EACf;;EAEA;IACE,cAAc;IACd,uBAAuB;IACvB,iBAAiB;IACjB,YAAY;IACZ,YAAY;EACd;;EAEA;IACE,aAAa;IACb,gBAAgB;IAChB,kBAAkB;IAClB,eAAe;IACf,QAAQ;IACR,SAAS;IACT,2BAA2B;IAC3B,UAAU;EACZ;;EAEA;IACE,cAAc;IACd,eAAe;IACf,kBAAkB;IAClB,sBAAsB;IACtB,aAAa;IACb,QAAQ;IACR,8BAA8B;IAC9B,4BAA4B;EAC9B;;EAEA;IACE,UAAU;IACV,WAAW;IACX,qBAAqB;EACvB;;;;EAIA;IACE,YAAY;IACZ,YAAY;IACZ,eAAe;IACf,eAAe;EACjB;;EAEA;IACE,kBAAkB;IAClB,QAAQ;IACR,aAAa;IACb,YAAY;IACZ,+BAA+B;IAC/B,sCAAsC;EACxC;;EAEA;IACE,iCAAiC;EACnC;;EAEA;IACE,kBAAkB;IAClB,SAAS;IACT,aAAa;IACb,YAAY;IACZ,+BAA+B;IAC/B,sCAAsC;EACxC;;EAEA;IACE,iCAAiC;EACnC","sourcesContent":["@font-face {\n    font-family: 'MyFont';\n    src: url('./Assets/fonts/Roboto-Regular.ttf') format('truetype'),;\n    font-weight: 600;\n    font-style: normal;\n  }\n\n  * {\n    margin: 0;\n    padding: 0;\n    box-sizing: border-box;\n  }\n\n  body {\n    width: 100%;\n    height: 100vh;\n    position: relative;\n  }\n\n  .main {\n    width: inherit;\n    height: inherit;\n    background-image: url(./Assets/images/gradient.jpeg);\n    background-size:cover;\n    background-repeat: no-repeat;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    padding: 2rem;\n  }\n\n  .title {\n    position: absolute;\n    top: 50px;\n    flex: 2;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    font-size: 4rem;\n    color: rgb(212, 230, 247);\n    left: 50%;\n    translate: -50%;\n  }\n\n  .image-container {\n    position: relative;\n    margin: 0 auto;\n  }\n\n  .images {\n    position: absolute;\n    left: 50%;\n    top: 50%;\n    transform: translate(-50%, -50%);\n    display: flex;\n    width: 48rem;\n    aspect-ratio: 16 / 9;\n    overflow-y: auto;\n    scroll-snap-type: x mandatory;\n    scroll-behavior: smooth;\n    box-shadow: 0 1.5rem 3rem -0.75rem hsla(0,0%,0%, 0.25);\n    border-radius: 0.5rem;\n  }\n\n  .images::-webkit-scrollbar {\n    display: none;\n  }\n\n  .images img {\n    flex: 1 0 100%;\n    scroll-snap-align:start;\n    object-fit: cover;\n    width: 48rem;\n    height: auto;\n  }\n\n  .nav {\n    display: flex;\n    column-gap: 1rem;\n    position: absolute;\n    bottom: 1.25rem;\n    top: 70%;\n    left: 50%;\n    transform: translateX(-50%);\n    z-index: 1;\n  }\n\n  .nav a {\n    width: 0.75rem;\n    height: 0.75rem;\n    border-radius: 50%;\n    background-color: #fff;\n    opacity: 0.75;\n    scale: 1;\n    transition: opacity ease 250ms;\n    transition: scale ease 250ms;\n  }\n\n  a.hovered {\n    opacity: 1;\n    scale: 1.25;\n    background-color: red;\n  }\n  \n  \n\n  svg {\n    width: 130px;\n    height: auto;\n    fill: aliceblue;\n    cursor: pointer;\n  }\n\n  .left_div {\n    position: absolute;\n    left: 0%;\n    height: 130px;\n    width: 130px;\n    background-color: rgba(0,0,0,0);\n    transition: background-color 0.3s ease;\n  }\n\n  .left_div:hover {\n    background-color: rgba(0,0,0,0.8);\n  }\n\n  .right_div {\n    position: absolute;\n    right: 0%;\n    height: 130px;\n    width: 130px;\n    background-color: rgba(0,0,0,0);\n    transition: background-color 0.3s ease;\n  }\n\n  .right_div:hover {\n    background-color: rgba(0,0,0,0.8);\n  }"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguNDgzM2Q2ZWVkNTg3YjRlYzRhYzAuaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDMEc7QUFDakI7QUFDTztBQUNoRyw0Q0FBNEMsK0lBQW9EO0FBQ2hHLDRDQUE0Qyx1SUFBZ0Q7QUFDNUYsOEJBQThCLG1GQUEyQixDQUFDLDRGQUFxQztBQUMvRix5Q0FBeUMsc0ZBQStCO0FBQ3hFLHlDQUF5QyxzRkFBK0I7QUFDeEU7QUFDQTtBQUNBO0FBQ0EsZUFBZSxtQ0FBbUM7QUFDbEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSw0QkFBNEIsbUNBQW1DO0FBQy9EO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsR0FBRyxPQUFPLGdGQUFnRixZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLFlBQVksYUFBYSxXQUFXLE1BQU0sS0FBSyxZQUFZLFdBQVcsVUFBVSxVQUFVLFlBQVksYUFBYSxXQUFXLFlBQVksV0FBVyxVQUFVLE9BQU8sS0FBSyxZQUFZLFdBQVcsT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLFlBQVksV0FBVyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLFVBQVUsTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsVUFBVSxVQUFVLFlBQVksV0FBVyxNQUFNLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxXQUFXLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxTQUFTLEtBQUssVUFBVSxVQUFVLFVBQVUsVUFBVSxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLHNDQUFzQyw0QkFBNEIsd0VBQXdFLHVCQUF1Qix5QkFBeUIsS0FBSyxTQUFTLGdCQUFnQixpQkFBaUIsNkJBQTZCLEtBQUssWUFBWSxrQkFBa0Isb0JBQW9CLHlCQUF5QixLQUFLLGFBQWEscUJBQXFCLHNCQUFzQiwyREFBMkQsNEJBQTRCLG1DQUFtQyxvQkFBb0IsNkJBQTZCLDhCQUE4QixvQkFBb0IsS0FBSyxjQUFjLHlCQUF5QixnQkFBZ0IsY0FBYyxvQkFBb0IsOEJBQThCLDBCQUEwQixzQkFBc0IsZ0NBQWdDLGdCQUFnQixzQkFBc0IsS0FBSyx3QkFBd0IseUJBQXlCLHFCQUFxQixLQUFLLGVBQWUseUJBQXlCLGdCQUFnQixlQUFlLHVDQUF1QyxvQkFBb0IsbUJBQW1CLDJCQUEyQix1QkFBdUIsb0NBQW9DLDhCQUE4Qiw2REFBNkQsNEJBQTRCLEtBQUssa0NBQWtDLG9CQUFvQixLQUFLLG1CQUFtQixxQkFBcUIsOEJBQThCLHdCQUF3QixtQkFBbUIsbUJBQW1CLEtBQUssWUFBWSxvQkFBb0IsdUJBQXVCLHlCQUF5QixzQkFBc0IsZUFBZSxnQkFBZ0Isa0NBQWtDLGlCQUFpQixLQUFLLGNBQWMscUJBQXFCLHNCQUFzQix5QkFBeUIsNkJBQTZCLG9CQUFvQixlQUFlLHFDQUFxQyxtQ0FBbUMsS0FBSyxpQkFBaUIsaUJBQWlCLGtCQUFrQiw0QkFBNEIsS0FBSyxtQkFBbUIsbUJBQW1CLG1CQUFtQixzQkFBc0Isc0JBQXNCLEtBQUssaUJBQWlCLHlCQUF5QixlQUFlLG9CQUFvQixtQkFBbUIsc0NBQXNDLDZDQUE2QyxLQUFLLHVCQUF1Qix3Q0FBd0MsS0FBSyxrQkFBa0IseUJBQXlCLGdCQUFnQixvQkFBb0IsbUJBQW1CLHNDQUFzQyw2Q0FBNkMsS0FBSyx3QkFBd0Isd0NBQXdDLEtBQUssbUJBQW1CO0FBQzl5SDtBQUNBLGlFQUFlLHVCQUF1QixFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYmFzaWMtdGVtcGxhdGUvLi9zcmMvc3R5bGUuY3NzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCIuL0Fzc2V0cy9mb250cy9Sb2JvdG8tUmVndWxhci50dGZcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyA9IG5ldyBVUkwoXCIuL0Fzc2V0cy9pbWFnZXMvZ3JhZGllbnQuanBlZ1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYEBmb250LWZhY2Uge1xuICAgIGZvbnQtZmFtaWx5OiAnTXlGb250JztcbiAgICBzcmM6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX199KSBmb3JtYXQoJ3RydWV0eXBlJyksO1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICB9XG5cbiAgKiB7XG4gICAgbWFyZ2luOiAwO1xuICAgIHBhZGRpbmc6IDA7XG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgfVxuXG4gIGJvZHkge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTAwdmg7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB9XG5cbiAgLm1haW4ge1xuICAgIHdpZHRoOiBpbmhlcml0O1xuICAgIGhlaWdodDogaW5oZXJpdDtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19ffSk7XG4gICAgYmFja2dyb3VuZC1zaXplOmNvdmVyO1xuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIHBhZGRpbmc6IDJyZW07XG4gIH1cblxuICAudGl0bGUge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDUwcHg7XG4gICAgZmxleDogMjtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgZm9udC1zaXplOiA0cmVtO1xuICAgIGNvbG9yOiByZ2IoMjEyLCAyMzAsIDI0Nyk7XG4gICAgbGVmdDogNTAlO1xuICAgIHRyYW5zbGF0ZTogLTUwJTtcbiAgfVxuXG4gIC5pbWFnZS1jb250YWluZXIge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBtYXJnaW46IDAgYXV0bztcbiAgfVxuXG4gIC5pbWFnZXMge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBsZWZ0OiA1MCU7XG4gICAgdG9wOiA1MCU7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICB3aWR0aDogNDhyZW07XG4gICAgYXNwZWN0LXJhdGlvOiAxNiAvIDk7XG4gICAgb3ZlcmZsb3cteTogYXV0bztcbiAgICBzY3JvbGwtc25hcC10eXBlOiB4IG1hbmRhdG9yeTtcbiAgICBzY3JvbGwtYmVoYXZpb3I6IHNtb290aDtcbiAgICBib3gtc2hhZG93OiAwIDEuNXJlbSAzcmVtIC0wLjc1cmVtIGhzbGEoMCwwJSwwJSwgMC4yNSk7XG4gICAgYm9yZGVyLXJhZGl1czogMC41cmVtO1xuICB9XG5cbiAgLmltYWdlczo6LXdlYmtpdC1zY3JvbGxiYXIge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cblxuICAuaW1hZ2VzIGltZyB7XG4gICAgZmxleDogMSAwIDEwMCU7XG4gICAgc2Nyb2xsLXNuYXAtYWxpZ246c3RhcnQ7XG4gICAgb2JqZWN0LWZpdDogY292ZXI7XG4gICAgd2lkdGg6IDQ4cmVtO1xuICAgIGhlaWdodDogYXV0bztcbiAgfVxuXG4gIC5uYXYge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgY29sdW1uLWdhcDogMXJlbTtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgYm90dG9tOiAxLjI1cmVtO1xuICAgIHRvcDogNzAlO1xuICAgIGxlZnQ6IDUwJTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSk7XG4gICAgei1pbmRleDogMTtcbiAgfVxuXG4gIC5uYXYgYSB7XG4gICAgd2lkdGg6IDAuNzVyZW07XG4gICAgaGVpZ2h0OiAwLjc1cmVtO1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICAgIG9wYWNpdHk6IDAuNzU7XG4gICAgc2NhbGU6IDE7XG4gICAgdHJhbnNpdGlvbjogb3BhY2l0eSBlYXNlIDI1MG1zO1xuICAgIHRyYW5zaXRpb246IHNjYWxlIGVhc2UgMjUwbXM7XG4gIH1cblxuICBhLmhvdmVyZWQge1xuICAgIG9wYWNpdHk6IDE7XG4gICAgc2NhbGU6IDEuMjU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xuICB9XG4gIFxuICBcblxuICBzdmcge1xuICAgIHdpZHRoOiAxMzBweDtcbiAgICBoZWlnaHQ6IGF1dG87XG4gICAgZmlsbDogYWxpY2VibHVlO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgfVxuXG4gIC5sZWZ0X2RpdiB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGxlZnQ6IDAlO1xuICAgIGhlaWdodDogMTMwcHg7XG4gICAgd2lkdGg6IDEzMHB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwwLDAsMCk7XG4gICAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAwLjNzIGVhc2U7XG4gIH1cblxuICAubGVmdF9kaXY6aG92ZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwwLDAsMC44KTtcbiAgfVxuXG4gIC5yaWdodF9kaXYge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICByaWdodDogMCU7XG4gICAgaGVpZ2h0OiAxMzBweDtcbiAgICB3aWR0aDogMTMwcHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLDAsMCwwKTtcbiAgICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDAuM3MgZWFzZTtcbiAgfVxuXG4gIC5yaWdodF9kaXY6aG92ZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwwLDAsMC44KTtcbiAgfWAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtJQUNJLHFCQUFxQjtJQUNyQixnRUFBaUU7SUFDakUsZ0JBQWdCO0lBQ2hCLGtCQUFrQjtFQUNwQjs7RUFFQTtJQUNFLFNBQVM7SUFDVCxVQUFVO0lBQ1Ysc0JBQXNCO0VBQ3hCOztFQUVBO0lBQ0UsV0FBVztJQUNYLGFBQWE7SUFDYixrQkFBa0I7RUFDcEI7O0VBRUE7SUFDRSxjQUFjO0lBQ2QsZUFBZTtJQUNmLHlEQUFvRDtJQUNwRCxxQkFBcUI7SUFDckIsNEJBQTRCO0lBQzVCLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsdUJBQXVCO0lBQ3ZCLGFBQWE7RUFDZjs7RUFFQTtJQUNFLGtCQUFrQjtJQUNsQixTQUFTO0lBQ1QsT0FBTztJQUNQLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsbUJBQW1CO0lBQ25CLGVBQWU7SUFDZix5QkFBeUI7SUFDekIsU0FBUztJQUNULGVBQWU7RUFDakI7O0VBRUE7SUFDRSxrQkFBa0I7SUFDbEIsY0FBYztFQUNoQjs7RUFFQTtJQUNFLGtCQUFrQjtJQUNsQixTQUFTO0lBQ1QsUUFBUTtJQUNSLGdDQUFnQztJQUNoQyxhQUFhO0lBQ2IsWUFBWTtJQUNaLG9CQUFvQjtJQUNwQixnQkFBZ0I7SUFDaEIsNkJBQTZCO0lBQzdCLHVCQUF1QjtJQUN2QixzREFBc0Q7SUFDdEQscUJBQXFCO0VBQ3ZCOztFQUVBO0lBQ0UsYUFBYTtFQUNmOztFQUVBO0lBQ0UsY0FBYztJQUNkLHVCQUF1QjtJQUN2QixpQkFBaUI7SUFDakIsWUFBWTtJQUNaLFlBQVk7RUFDZDs7RUFFQTtJQUNFLGFBQWE7SUFDYixnQkFBZ0I7SUFDaEIsa0JBQWtCO0lBQ2xCLGVBQWU7SUFDZixRQUFRO0lBQ1IsU0FBUztJQUNULDJCQUEyQjtJQUMzQixVQUFVO0VBQ1o7O0VBRUE7SUFDRSxjQUFjO0lBQ2QsZUFBZTtJQUNmLGtCQUFrQjtJQUNsQixzQkFBc0I7SUFDdEIsYUFBYTtJQUNiLFFBQVE7SUFDUiw4QkFBOEI7SUFDOUIsNEJBQTRCO0VBQzlCOztFQUVBO0lBQ0UsVUFBVTtJQUNWLFdBQVc7SUFDWCxxQkFBcUI7RUFDdkI7Ozs7RUFJQTtJQUNFLFlBQVk7SUFDWixZQUFZO0lBQ1osZUFBZTtJQUNmLGVBQWU7RUFDakI7O0VBRUE7SUFDRSxrQkFBa0I7SUFDbEIsUUFBUTtJQUNSLGFBQWE7SUFDYixZQUFZO0lBQ1osK0JBQStCO0lBQy9CLHNDQUFzQztFQUN4Qzs7RUFFQTtJQUNFLGlDQUFpQztFQUNuQzs7RUFFQTtJQUNFLGtCQUFrQjtJQUNsQixTQUFTO0lBQ1QsYUFBYTtJQUNiLFlBQVk7SUFDWiwrQkFBK0I7SUFDL0Isc0NBQXNDO0VBQ3hDOztFQUVBO0lBQ0UsaUNBQWlDO0VBQ25DXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIkBmb250LWZhY2Uge1xcbiAgICBmb250LWZhbWlseTogJ015Rm9udCc7XFxuICAgIHNyYzogdXJsKCcuL0Fzc2V0cy9mb250cy9Sb2JvdG8tUmVndWxhci50dGYnKSBmb3JtYXQoJ3RydWV0eXBlJyksO1xcbiAgICBmb250LXdlaWdodDogNjAwO1xcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XFxuICB9XFxuXFxuICAqIHtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgfVxcblxcbiAgYm9keSB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IDEwMHZoO1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICB9XFxuXFxuICAubWFpbiB7XFxuICAgIHdpZHRoOiBpbmhlcml0O1xcbiAgICBoZWlnaHQ6IGluaGVyaXQ7XFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCguL0Fzc2V0cy9pbWFnZXMvZ3JhZGllbnQuanBlZyk7XFxuICAgIGJhY2tncm91bmQtc2l6ZTpjb3ZlcjtcXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIHBhZGRpbmc6IDJyZW07XFxuICB9XFxuXFxuICAudGl0bGUge1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHRvcDogNTBweDtcXG4gICAgZmxleDogMjtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGZvbnQtc2l6ZTogNHJlbTtcXG4gICAgY29sb3I6IHJnYigyMTIsIDIzMCwgMjQ3KTtcXG4gICAgbGVmdDogNTAlO1xcbiAgICB0cmFuc2xhdGU6IC01MCU7XFxuICB9XFxuXFxuICAuaW1hZ2UtY29udGFpbmVyIHtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICBtYXJnaW46IDAgYXV0bztcXG4gIH1cXG5cXG4gIC5pbWFnZXMge1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIGxlZnQ6IDUwJTtcXG4gICAgdG9wOiA1MCU7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICB3aWR0aDogNDhyZW07XFxuICAgIGFzcGVjdC1yYXRpbzogMTYgLyA5O1xcbiAgICBvdmVyZmxvdy15OiBhdXRvO1xcbiAgICBzY3JvbGwtc25hcC10eXBlOiB4IG1hbmRhdG9yeTtcXG4gICAgc2Nyb2xsLWJlaGF2aW9yOiBzbW9vdGg7XFxuICAgIGJveC1zaGFkb3c6IDAgMS41cmVtIDNyZW0gLTAuNzVyZW0gaHNsYSgwLDAlLDAlLCAwLjI1KTtcXG4gICAgYm9yZGVyLXJhZGl1czogMC41cmVtO1xcbiAgfVxcblxcbiAgLmltYWdlczo6LXdlYmtpdC1zY3JvbGxiYXIge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbiAgfVxcblxcbiAgLmltYWdlcyBpbWcge1xcbiAgICBmbGV4OiAxIDAgMTAwJTtcXG4gICAgc2Nyb2xsLXNuYXAtYWxpZ246c3RhcnQ7XFxuICAgIG9iamVjdC1maXQ6IGNvdmVyO1xcbiAgICB3aWR0aDogNDhyZW07XFxuICAgIGhlaWdodDogYXV0bztcXG4gIH1cXG5cXG4gIC5uYXYge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBjb2x1bW4tZ2FwOiAxcmVtO1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIGJvdHRvbTogMS4yNXJlbTtcXG4gICAgdG9wOiA3MCU7XFxuICAgIGxlZnQ6IDUwJTtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpO1xcbiAgICB6LWluZGV4OiAxO1xcbiAgfVxcblxcbiAgLm5hdiBhIHtcXG4gICAgd2lkdGg6IDAuNzVyZW07XFxuICAgIGhlaWdodDogMC43NXJlbTtcXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xcbiAgICBvcGFjaXR5OiAwLjc1O1xcbiAgICBzY2FsZTogMTtcXG4gICAgdHJhbnNpdGlvbjogb3BhY2l0eSBlYXNlIDI1MG1zO1xcbiAgICB0cmFuc2l0aW9uOiBzY2FsZSBlYXNlIDI1MG1zO1xcbiAgfVxcblxcbiAgYS5ob3ZlcmVkIHtcXG4gICAgb3BhY2l0eTogMTtcXG4gICAgc2NhbGU6IDEuMjU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJlZDtcXG4gIH1cXG4gIFxcbiAgXFxuXFxuICBzdmcge1xcbiAgICB3aWR0aDogMTMwcHg7XFxuICAgIGhlaWdodDogYXV0bztcXG4gICAgZmlsbDogYWxpY2VibHVlO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICB9XFxuXFxuICAubGVmdF9kaXYge1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIGxlZnQ6IDAlO1xcbiAgICBoZWlnaHQ6IDEzMHB4O1xcbiAgICB3aWR0aDogMTMwcHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwwLDAsMCk7XFxuICAgIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMC4zcyBlYXNlO1xcbiAgfVxcblxcbiAgLmxlZnRfZGl2OmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLDAsMCwwLjgpO1xcbiAgfVxcblxcbiAgLnJpZ2h0X2RpdiB7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgcmlnaHQ6IDAlO1xcbiAgICBoZWlnaHQ6IDEzMHB4O1xcbiAgICB3aWR0aDogMTMwcHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwwLDAsMCk7XFxuICAgIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMC4zcyBlYXNlO1xcbiAgfVxcblxcbiAgLnJpZ2h0X2Rpdjpob3ZlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwwLDAsMC44KTtcXG4gIH1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9