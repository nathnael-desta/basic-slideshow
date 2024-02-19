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
    outline: 2px red solid;
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
    align-items: center;
    outline: 5px red solid;
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
  }

  .images {
    flex: 9;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    position: relative;
  }

  img {
    height: 400px;
    width: auto;
  }

  .image {
    height: 400px;
    width: auto;
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
  }

  .circles {
    outline: 2px red solid;
    width: 100px;
    height: 20px;
    position: absolute;
    left: 50%;
    transform: translateX(50);

  }

  .circles * {

  } 


  .cross {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 9999;
  }
  
  .cross::before,
  .cross::after {
    content: "";
    position: absolute;
    height: 100%;
    width: 2px;
    background-color: red; /* Change color as needed */
  }
  
  .cross::before {
    left: 50%;
    transform: translateX(-50%);
  }
  
  .cross::after {
    top: 50%;
    transform: translateY(-50%);
  }`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;IACI,qBAAqB;IACrB,gEAAiE;IACjE,gBAAgB;IAChB,kBAAkB;EACpB;;EAEA;IACE,SAAS;IACT,UAAU;IACV,sBAAsB;EACxB;;EAEA;IACE,WAAW;IACX,aAAa;IACb,sBAAsB;IACtB,kBAAkB;EACpB;;EAEA;IACE,cAAc;IACd,eAAe;IACf,yDAAoD;IACpD,qBAAqB;IACrB,4BAA4B;IAC5B,aAAa;IACb,sBAAsB;IACtB,uBAAuB;IACvB,mBAAmB;IACnB,sBAAsB;EACxB;;EAEA;IACE,kBAAkB;IAClB,SAAS;IACT,OAAO;IACP,aAAa;IACb,uBAAuB;IACvB,mBAAmB;IACnB,eAAe;IACf,yBAAyB;EAC3B;;EAEA;IACE,OAAO;IACP,WAAW;IACX,aAAa;IACb,uBAAuB;IACvB,mBAAmB;IACnB,gBAAgB;IAChB,kBAAkB;EACpB;;EAEA;IACE,aAAa;IACb,WAAW;EACb;;EAEA;IACE,aAAa;IACb,WAAW;EACb;;EAEA;IACE,YAAY;IACZ,YAAY;IACZ,eAAe;IACf,eAAe;EACjB;;EAEA;IACE,kBAAkB;IAClB,QAAQ;IACR,aAAa;IACb,YAAY;IACZ,+BAA+B;IAC/B,sCAAsC;EACxC;;EAEA;IACE,iCAAiC;EACnC;;EAEA;IACE,kBAAkB;IAClB,SAAS;IACT,aAAa;IACb,YAAY;IACZ,+BAA+B;IAC/B,sCAAsC;EACxC;;EAEA;IACE,iCAAiC;EACnC;;EAEA;IACE,sBAAsB;IACtB,YAAY;IACZ,YAAY;IACZ,kBAAkB;IAClB,SAAS;IACT,yBAAyB;;EAE3B;;EAEA;;EAEA;;;EAGA;IACE,kBAAkB;IAClB,MAAM;IACN,OAAO;IACP,WAAW;IACX,YAAY;IACZ,aAAa;EACf;;EAEA;;IAEE,WAAW;IACX,kBAAkB;IAClB,YAAY;IACZ,UAAU;IACV,qBAAqB,EAAE,2BAA2B;EACpD;;EAEA;IACE,SAAS;IACT,2BAA2B;EAC7B;;EAEA;IACE,QAAQ;IACR,2BAA2B;EAC7B","sourcesContent":["@font-face {\n    font-family: 'MyFont';\n    src: url('./Assets/fonts/Roboto-Regular.ttf') format('truetype'),;\n    font-weight: 600;\n    font-style: normal;\n  }\n\n  * {\n    margin: 0;\n    padding: 0;\n    box-sizing: border-box;\n  }\n\n  body {\n    width: 100%;\n    height: 100vh;\n    outline: 2px red solid;\n    position: relative;\n  }\n\n  .main {\n    width: inherit;\n    height: inherit;\n    background-image: url(./Assets/images/gradient.jpeg);\n    background-size:cover;\n    background-repeat: no-repeat;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    outline: 5px red solid;\n  }\n\n  .title {\n    position: absolute;\n    top: 50px;\n    flex: 2;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    font-size: 4rem;\n    color: rgb(212, 230, 247);\n  }\n\n  .images {\n    flex: 9;\n    width: 100%;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    overflow: hidden;\n    position: relative;\n  }\n\n  img {\n    height: 400px;\n    width: auto;\n  }\n\n  .image {\n    height: 400px;\n    width: auto;\n  }\n\n  svg {\n    width: 130px;\n    height: auto;\n    fill: aliceblue;\n    cursor: pointer;\n  }\n\n  .left_div {\n    position: absolute;\n    left: 0%;\n    height: 130px;\n    width: 130px;\n    background-color: rgba(0,0,0,0);\n    transition: background-color 0.3s ease;\n  }\n\n  .left_div:hover {\n    background-color: rgba(0,0,0,0.8);\n  }\n\n  .right_div {\n    position: absolute;\n    right: 0%;\n    height: 130px;\n    width: 130px;\n    background-color: rgba(0,0,0,0);\n    transition: background-color 0.3s ease;\n  }\n\n  .right_div:hover {\n    background-color: rgba(0,0,0,0.8);\n  }\n\n  .circles {\n    outline: 2px red solid;\n    width: 100px;\n    height: 20px;\n    position: absolute;\n    left: 50%;\n    transform: translateX(50);\n\n  }\n\n  .circles * {\n\n  } \n\n\n  .cross {\n    position: absolute;\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 100%;\n    z-index: 9999;\n  }\n  \n  .cross::before,\n  .cross::after {\n    content: \"\";\n    position: absolute;\n    height: 100%;\n    width: 2px;\n    background-color: red; /* Change color as needed */\n  }\n  \n  .cross::before {\n    left: 50%;\n    transform: translateX(-50%);\n  }\n  \n  .cross::after {\n    top: 50%;\n    transform: translateY(-50%);\n  }"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguNTk0M2Q1MjliN2IyMzU5YTY2MTEuaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDMEc7QUFDakI7QUFDTztBQUNoRyw0Q0FBNEMsK0lBQW9EO0FBQ2hHLDRDQUE0Qyx1SUFBZ0Q7QUFDNUYsOEJBQThCLG1GQUEyQixDQUFDLDRGQUFxQztBQUMvRix5Q0FBeUMsc0ZBQStCO0FBQ3hFLHlDQUF5QyxzRkFBK0I7QUFDeEU7QUFDQTtBQUNBO0FBQ0EsZUFBZSxtQ0FBbUM7QUFDbEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLDRCQUE0QixtQ0FBbUM7QUFDL0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQkFBMkI7QUFDM0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHLE9BQU8sZ0ZBQWdGLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxVQUFVLFlBQVksYUFBYSxXQUFXLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxNQUFNLEtBQUssVUFBVSxVQUFVLE1BQU0sS0FBSyxVQUFVLFVBQVUsVUFBVSxVQUFVLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLFlBQVksV0FBVyxhQUFhLE9BQU8sTUFBTSxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsVUFBVSxVQUFVLFVBQVUsTUFBTSxNQUFNLFVBQVUsWUFBWSxXQUFXLFVBQVUsd0JBQXdCLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxzQ0FBc0MsNEJBQTRCLHdFQUF3RSx1QkFBdUIseUJBQXlCLEtBQUssU0FBUyxnQkFBZ0IsaUJBQWlCLDZCQUE2QixLQUFLLFlBQVksa0JBQWtCLG9CQUFvQiw2QkFBNkIseUJBQXlCLEtBQUssYUFBYSxxQkFBcUIsc0JBQXNCLDJEQUEyRCw0QkFBNEIsbUNBQW1DLG9CQUFvQiw2QkFBNkIsOEJBQThCLDBCQUEwQiw2QkFBNkIsS0FBSyxjQUFjLHlCQUF5QixnQkFBZ0IsY0FBYyxvQkFBb0IsOEJBQThCLDBCQUEwQixzQkFBc0IsZ0NBQWdDLEtBQUssZUFBZSxjQUFjLGtCQUFrQixvQkFBb0IsOEJBQThCLDBCQUEwQix1QkFBdUIseUJBQXlCLEtBQUssV0FBVyxvQkFBb0Isa0JBQWtCLEtBQUssY0FBYyxvQkFBb0Isa0JBQWtCLEtBQUssV0FBVyxtQkFBbUIsbUJBQW1CLHNCQUFzQixzQkFBc0IsS0FBSyxpQkFBaUIseUJBQXlCLGVBQWUsb0JBQW9CLG1CQUFtQixzQ0FBc0MsNkNBQTZDLEtBQUssdUJBQXVCLHdDQUF3QyxLQUFLLGtCQUFrQix5QkFBeUIsZ0JBQWdCLG9CQUFvQixtQkFBbUIsc0NBQXNDLDZDQUE2QyxLQUFLLHdCQUF3Qix3Q0FBd0MsS0FBSyxnQkFBZ0IsNkJBQTZCLG1CQUFtQixtQkFBbUIseUJBQXlCLGdCQUFnQixnQ0FBZ0MsT0FBTyxrQkFBa0IsUUFBUSxnQkFBZ0IseUJBQXlCLGFBQWEsY0FBYyxrQkFBa0IsbUJBQW1CLG9CQUFvQixLQUFLLDBDQUEwQyxvQkFBb0IseUJBQXlCLG1CQUFtQixpQkFBaUIsNkJBQTZCLGlDQUFpQyx3QkFBd0IsZ0JBQWdCLGtDQUFrQyxLQUFLLHVCQUF1QixlQUFlLGtDQUFrQyxLQUFLLG1CQUFtQjtBQUM1bEg7QUFDQSxpRUFBZSx1QkFBdUIsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2Jhc2ljLXRlbXBsYXRlLy4vc3JjL3N0eWxlLmNzcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSBuZXcgVVJMKFwiLi9Bc3NldHMvZm9udHMvUm9ib3RvLVJlZ3VsYXIudHRmXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18gPSBuZXcgVVJMKFwiLi9Bc3NldHMvaW1hZ2VzL2dyYWRpZW50LmpwZWdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGBAZm9udC1mYWNlIHtcbiAgICBmb250LWZhbWlseTogJ015Rm9udCc7XG4gICAgc3JjOiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19ffSkgZm9ybWF0KCd0cnVldHlwZScpLDtcbiAgICBmb250LXdlaWdodDogNjAwO1xuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgfVxuXG4gICoge1xuICAgIG1hcmdpbjogMDtcbiAgICBwYWRkaW5nOiAwO1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIH1cblxuICBib2R5IHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDEwMHZoO1xuICAgIG91dGxpbmU6IDJweCByZWQgc29saWQ7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB9XG5cbiAgLm1haW4ge1xuICAgIHdpZHRoOiBpbmhlcml0O1xuICAgIGhlaWdodDogaW5oZXJpdDtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19ffSk7XG4gICAgYmFja2dyb3VuZC1zaXplOmNvdmVyO1xuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgb3V0bGluZTogNXB4IHJlZCBzb2xpZDtcbiAgfVxuXG4gIC50aXRsZSB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogNTBweDtcbiAgICBmbGV4OiAyO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBmb250LXNpemU6IDRyZW07XG4gICAgY29sb3I6IHJnYigyMTIsIDIzMCwgMjQ3KTtcbiAgfVxuXG4gIC5pbWFnZXMge1xuICAgIGZsZXg6IDk7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB9XG5cbiAgaW1nIHtcbiAgICBoZWlnaHQ6IDQwMHB4O1xuICAgIHdpZHRoOiBhdXRvO1xuICB9XG5cbiAgLmltYWdlIHtcbiAgICBoZWlnaHQ6IDQwMHB4O1xuICAgIHdpZHRoOiBhdXRvO1xuICB9XG5cbiAgc3ZnIHtcbiAgICB3aWR0aDogMTMwcHg7XG4gICAgaGVpZ2h0OiBhdXRvO1xuICAgIGZpbGw6IGFsaWNlYmx1ZTtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gIH1cblxuICAubGVmdF9kaXYge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBsZWZ0OiAwJTtcbiAgICBoZWlnaHQ6IDEzMHB4O1xuICAgIHdpZHRoOiAxMzBweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsMCwwLDApO1xuICAgIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMC4zcyBlYXNlO1xuICB9XG5cbiAgLmxlZnRfZGl2OmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsMCwwLDAuOCk7XG4gIH1cblxuICAucmlnaHRfZGl2IHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgcmlnaHQ6IDAlO1xuICAgIGhlaWdodDogMTMwcHg7XG4gICAgd2lkdGg6IDEzMHB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwwLDAsMCk7XG4gICAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAwLjNzIGVhc2U7XG4gIH1cblxuICAucmlnaHRfZGl2OmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsMCwwLDAuOCk7XG4gIH1cblxuICAuY2lyY2xlcyB7XG4gICAgb3V0bGluZTogMnB4IHJlZCBzb2xpZDtcbiAgICB3aWR0aDogMTAwcHg7XG4gICAgaGVpZ2h0OiAyMHB4O1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBsZWZ0OiA1MCU7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDUwKTtcblxuICB9XG5cbiAgLmNpcmNsZXMgKiB7XG5cbiAgfSBcblxuXG4gIC5jcm9zcyB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogMDtcbiAgICBsZWZ0OiAwO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICB6LWluZGV4OiA5OTk5O1xuICB9XG4gIFxuICAuY3Jvc3M6OmJlZm9yZSxcbiAgLmNyb3NzOjphZnRlciB7XG4gICAgY29udGVudDogXCJcIjtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIHdpZHRoOiAycHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmVkOyAvKiBDaGFuZ2UgY29sb3IgYXMgbmVlZGVkICovXG4gIH1cbiAgXG4gIC5jcm9zczo6YmVmb3JlIHtcbiAgICBsZWZ0OiA1MCU7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpO1xuICB9XG4gIFxuICAuY3Jvc3M6OmFmdGVyIHtcbiAgICB0b3A6IDUwJTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XG4gIH1gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7SUFDSSxxQkFBcUI7SUFDckIsZ0VBQWlFO0lBQ2pFLGdCQUFnQjtJQUNoQixrQkFBa0I7RUFDcEI7O0VBRUE7SUFDRSxTQUFTO0lBQ1QsVUFBVTtJQUNWLHNCQUFzQjtFQUN4Qjs7RUFFQTtJQUNFLFdBQVc7SUFDWCxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLGtCQUFrQjtFQUNwQjs7RUFFQTtJQUNFLGNBQWM7SUFDZCxlQUFlO0lBQ2YseURBQW9EO0lBQ3BELHFCQUFxQjtJQUNyQiw0QkFBNEI7SUFDNUIsYUFBYTtJQUNiLHNCQUFzQjtJQUN0Qix1QkFBdUI7SUFDdkIsbUJBQW1CO0lBQ25CLHNCQUFzQjtFQUN4Qjs7RUFFQTtJQUNFLGtCQUFrQjtJQUNsQixTQUFTO0lBQ1QsT0FBTztJQUNQLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsbUJBQW1CO0lBQ25CLGVBQWU7SUFDZix5QkFBeUI7RUFDM0I7O0VBRUE7SUFDRSxPQUFPO0lBQ1AsV0FBVztJQUNYLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsbUJBQW1CO0lBQ25CLGdCQUFnQjtJQUNoQixrQkFBa0I7RUFDcEI7O0VBRUE7SUFDRSxhQUFhO0lBQ2IsV0FBVztFQUNiOztFQUVBO0lBQ0UsYUFBYTtJQUNiLFdBQVc7RUFDYjs7RUFFQTtJQUNFLFlBQVk7SUFDWixZQUFZO0lBQ1osZUFBZTtJQUNmLGVBQWU7RUFDakI7O0VBRUE7SUFDRSxrQkFBa0I7SUFDbEIsUUFBUTtJQUNSLGFBQWE7SUFDYixZQUFZO0lBQ1osK0JBQStCO0lBQy9CLHNDQUFzQztFQUN4Qzs7RUFFQTtJQUNFLGlDQUFpQztFQUNuQzs7RUFFQTtJQUNFLGtCQUFrQjtJQUNsQixTQUFTO0lBQ1QsYUFBYTtJQUNiLFlBQVk7SUFDWiwrQkFBK0I7SUFDL0Isc0NBQXNDO0VBQ3hDOztFQUVBO0lBQ0UsaUNBQWlDO0VBQ25DOztFQUVBO0lBQ0Usc0JBQXNCO0lBQ3RCLFlBQVk7SUFDWixZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLFNBQVM7SUFDVCx5QkFBeUI7O0VBRTNCOztFQUVBOztFQUVBOzs7RUFHQTtJQUNFLGtCQUFrQjtJQUNsQixNQUFNO0lBQ04sT0FBTztJQUNQLFdBQVc7SUFDWCxZQUFZO0lBQ1osYUFBYTtFQUNmOztFQUVBOztJQUVFLFdBQVc7SUFDWCxrQkFBa0I7SUFDbEIsWUFBWTtJQUNaLFVBQVU7SUFDVixxQkFBcUIsRUFBRSwyQkFBMkI7RUFDcEQ7O0VBRUE7SUFDRSxTQUFTO0lBQ1QsMkJBQTJCO0VBQzdCOztFQUVBO0lBQ0UsUUFBUTtJQUNSLDJCQUEyQjtFQUM3QlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAZm9udC1mYWNlIHtcXG4gICAgZm9udC1mYW1pbHk6ICdNeUZvbnQnO1xcbiAgICBzcmM6IHVybCgnLi9Bc3NldHMvZm9udHMvUm9ib3RvLVJlZ3VsYXIudHRmJykgZm9ybWF0KCd0cnVldHlwZScpLDtcXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcXG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xcbiAgfVxcblxcbiAgKiB7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgcGFkZGluZzogMDtcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIH1cXG5cXG4gIGJvZHkge1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgaGVpZ2h0OiAxMDB2aDtcXG4gICAgb3V0bGluZTogMnB4IHJlZCBzb2xpZDtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgfVxcblxcbiAgLm1haW4ge1xcbiAgICB3aWR0aDogaW5oZXJpdDtcXG4gICAgaGVpZ2h0OiBpbmhlcml0O1xcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoLi9Bc3NldHMvaW1hZ2VzL2dyYWRpZW50LmpwZWcpO1xcbiAgICBiYWNrZ3JvdW5kLXNpemU6Y292ZXI7XFxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBvdXRsaW5lOiA1cHggcmVkIHNvbGlkO1xcbiAgfVxcblxcbiAgLnRpdGxlIHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB0b3A6IDUwcHg7XFxuICAgIGZsZXg6IDI7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBmb250LXNpemU6IDRyZW07XFxuICAgIGNvbG9yOiByZ2IoMjEyLCAyMzAsIDI0Nyk7XFxuICB9XFxuXFxuICAuaW1hZ2VzIHtcXG4gICAgZmxleDogOTtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICB9XFxuXFxuICBpbWcge1xcbiAgICBoZWlnaHQ6IDQwMHB4O1xcbiAgICB3aWR0aDogYXV0bztcXG4gIH1cXG5cXG4gIC5pbWFnZSB7XFxuICAgIGhlaWdodDogNDAwcHg7XFxuICAgIHdpZHRoOiBhdXRvO1xcbiAgfVxcblxcbiAgc3ZnIHtcXG4gICAgd2lkdGg6IDEzMHB4O1xcbiAgICBoZWlnaHQ6IGF1dG87XFxuICAgIGZpbGw6IGFsaWNlYmx1ZTtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgfVxcblxcbiAgLmxlZnRfZGl2IHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICBsZWZ0OiAwJTtcXG4gICAgaGVpZ2h0OiAxMzBweDtcXG4gICAgd2lkdGg6IDEzMHB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsMCwwLDApO1xcbiAgICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDAuM3MgZWFzZTtcXG4gIH1cXG5cXG4gIC5sZWZ0X2Rpdjpob3ZlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwwLDAsMC44KTtcXG4gIH1cXG5cXG4gIC5yaWdodF9kaXYge1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHJpZ2h0OiAwJTtcXG4gICAgaGVpZ2h0OiAxMzBweDtcXG4gICAgd2lkdGg6IDEzMHB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsMCwwLDApO1xcbiAgICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDAuM3MgZWFzZTtcXG4gIH1cXG5cXG4gIC5yaWdodF9kaXY6aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsMCwwLDAuOCk7XFxuICB9XFxuXFxuICAuY2lyY2xlcyB7XFxuICAgIG91dGxpbmU6IDJweCByZWQgc29saWQ7XFxuICAgIHdpZHRoOiAxMDBweDtcXG4gICAgaGVpZ2h0OiAyMHB4O1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIGxlZnQ6IDUwJTtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDUwKTtcXG5cXG4gIH1cXG5cXG4gIC5jaXJjbGVzICoge1xcblxcbiAgfSBcXG5cXG5cXG4gIC5jcm9zcyB7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgdG9wOiAwO1xcbiAgICBsZWZ0OiAwO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICB6LWluZGV4OiA5OTk5O1xcbiAgfVxcbiAgXFxuICAuY3Jvc3M6OmJlZm9yZSxcXG4gIC5jcm9zczo6YWZ0ZXIge1xcbiAgICBjb250ZW50OiBcXFwiXFxcIjtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIHdpZHRoOiAycHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJlZDsgLyogQ2hhbmdlIGNvbG9yIGFzIG5lZWRlZCAqL1xcbiAgfVxcbiAgXFxuICAuY3Jvc3M6OmJlZm9yZSB7XFxuICAgIGxlZnQ6IDUwJTtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpO1xcbiAgfVxcbiAgXFxuICAuY3Jvc3M6OmFmdGVyIHtcXG4gICAgdG9wOiA1MCU7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcXG4gIH1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9