"use strict";
self["webpackHotUpdatebasic_template"]("index",{

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");


const images = document.querySelectorAll("img");
const a = document.querySelectorAll("a");

images.forEach((image) => {
    const image_id = image.id

})

a.forEach(link => {
    link.addEventListener('mouseover', () => {
        link.classList.add('hovered')
    })

    link.addEventListener('mouseout', () => {
        link.classList.remove('hovered')
    })

})

function getCenterImageId() {
    const centerX = (window.innerWidth || document.documentElement.clientWidth) / 2;
    const centerY = (window.innerHeight || document.documentElement.clientHeight) / 2;

    const centerElement = document.elementFromPoint(centerX, centerY);

    if (centerElement.tagName === "IMG") {
        return centerElement.id;
    } 
        return null
    
}

document.addEventListener('click', getCenterImageId)

function makeCircleHovered() {
    a.forEach(link => {
        if (link.id === getCenterImageId) {
            link.classList.add('hovered')
        } else {
            link.classList.remove('hovered')
        }
    })
}


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguNDlkMzc2MTE1ZThhMGQ1NmFkZGMuaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFxQjs7QUFFckI7QUFDQTs7QUFFQTtBQUNBOztBQUVBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0EsS0FBSzs7QUFFTCxDQUFDOztBQUVEO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBLEtBQUs7QUFDTCIsInNvdXJjZXMiOlsid2VicGFjazovL2Jhc2ljLXRlbXBsYXRlLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBcIi4vc3R5bGUuY3NzXCI7XG5cbmNvbnN0IGltYWdlcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCJpbWdcIik7XG5jb25zdCBhID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcImFcIik7XG5cbmltYWdlcy5mb3JFYWNoKChpbWFnZSkgPT4ge1xuICAgIGNvbnN0IGltYWdlX2lkID0gaW1hZ2UuaWRcblxufSlcblxuYS5mb3JFYWNoKGxpbmsgPT4ge1xuICAgIGxpbmsuYWRkRXZlbnRMaXN0ZW5lcignbW91c2VvdmVyJywgKCkgPT4ge1xuICAgICAgICBsaW5rLmNsYXNzTGlzdC5hZGQoJ2hvdmVyZWQnKVxuICAgIH0pXG5cbiAgICBsaW5rLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlb3V0JywgKCkgPT4ge1xuICAgICAgICBsaW5rLmNsYXNzTGlzdC5yZW1vdmUoJ2hvdmVyZWQnKVxuICAgIH0pXG5cbn0pXG5cbmZ1bmN0aW9uIGdldENlbnRlckltYWdlSWQoKSB7XG4gICAgY29uc3QgY2VudGVyWCA9ICh3aW5kb3cuaW5uZXJXaWR0aCB8fCBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xpZW50V2lkdGgpIC8gMjtcbiAgICBjb25zdCBjZW50ZXJZID0gKHdpbmRvdy5pbm5lckhlaWdodCB8fCBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xpZW50SGVpZ2h0KSAvIDI7XG5cbiAgICBjb25zdCBjZW50ZXJFbGVtZW50ID0gZG9jdW1lbnQuZWxlbWVudEZyb21Qb2ludChjZW50ZXJYLCBjZW50ZXJZKTtcblxuICAgIGlmIChjZW50ZXJFbGVtZW50LnRhZ05hbWUgPT09IFwiSU1HXCIpIHtcbiAgICAgICAgcmV0dXJuIGNlbnRlckVsZW1lbnQuaWQ7XG4gICAgfSBcbiAgICAgICAgcmV0dXJuIG51bGxcbiAgICBcbn1cblxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBnZXRDZW50ZXJJbWFnZUlkKVxuXG5mdW5jdGlvbiBtYWtlQ2lyY2xlSG92ZXJlZCgpIHtcbiAgICBhLmZvckVhY2gobGluayA9PiB7XG4gICAgICAgIGlmIChsaW5rLmlkID09PSBnZXRDZW50ZXJJbWFnZUlkKSB7XG4gICAgICAgICAgICBsaW5rLmNsYXNzTGlzdC5hZGQoJ2hvdmVyZWQnKVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgbGluay5jbGFzc0xpc3QucmVtb3ZlKCdob3ZlcmVkJylcbiAgICAgICAgfVxuICAgIH0pXG59XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=