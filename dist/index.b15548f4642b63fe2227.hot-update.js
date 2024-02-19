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

function getCenterImage() {
    const centerX = (window.innerWidth || document.documentElement.clientWidth);
    const centerY = (window.innerHeight || document.documentElement.clientHeight);

    const centerElement = document.elementFromPoint(centerX, centerY);

    if (centerElement.tagName === "IMG") {
        console.log(centerElement)
        return centerElement;
    } 
        return null
    
}

setTimeout(getCenterImage, 3000)

/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguYjE1NTQ4ZjQ2NDJiNjNmZTIyMjcuaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFxQjs7QUFFckI7QUFDQTs7QUFFQTtBQUNBOztBQUVBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0EsS0FBSzs7QUFFTCxDQUFDOztBQUVEO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSIsInNvdXJjZXMiOlsid2VicGFjazovL2Jhc2ljLXRlbXBsYXRlLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBcIi4vc3R5bGUuY3NzXCI7XG5cbmNvbnN0IGltYWdlcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCJpbWdcIik7XG5jb25zdCBhID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcImFcIik7XG5cbmltYWdlcy5mb3JFYWNoKChpbWFnZSkgPT4ge1xuICAgIGNvbnN0IGltYWdlX2lkID0gaW1hZ2UuaWRcblxufSlcblxuYS5mb3JFYWNoKGxpbmsgPT4ge1xuICAgIGxpbmsuYWRkRXZlbnRMaXN0ZW5lcignbW91c2VvdmVyJywgKCkgPT4ge1xuICAgICAgICBsaW5rLmNsYXNzTGlzdC5hZGQoJ2hvdmVyZWQnKVxuICAgIH0pXG5cbiAgICBsaW5rLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlb3V0JywgKCkgPT4ge1xuICAgICAgICBsaW5rLmNsYXNzTGlzdC5yZW1vdmUoJ2hvdmVyZWQnKVxuICAgIH0pXG5cbn0pXG5cbmZ1bmN0aW9uIGdldENlbnRlckltYWdlKCkge1xuICAgIGNvbnN0IGNlbnRlclggPSAod2luZG93LmlubmVyV2lkdGggfHwgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsaWVudFdpZHRoKTtcbiAgICBjb25zdCBjZW50ZXJZID0gKHdpbmRvdy5pbm5lckhlaWdodCB8fCBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xpZW50SGVpZ2h0KTtcblxuICAgIGNvbnN0IGNlbnRlckVsZW1lbnQgPSBkb2N1bWVudC5lbGVtZW50RnJvbVBvaW50KGNlbnRlclgsIGNlbnRlclkpO1xuXG4gICAgaWYgKGNlbnRlckVsZW1lbnQudGFnTmFtZSA9PT0gXCJJTUdcIikge1xuICAgICAgICBjb25zb2xlLmxvZyhjZW50ZXJFbGVtZW50KVxuICAgICAgICByZXR1cm4gY2VudGVyRWxlbWVudDtcbiAgICB9IFxuICAgICAgICByZXR1cm4gbnVsbFxuICAgIFxufVxuXG5zZXRUaW1lb3V0KGdldENlbnRlckltYWdlLCAzMDAwKSJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==