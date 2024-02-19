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
    const centerX = (window.innerWidth || document.documentElement.clientWidth) / 2;
    const centerY = (window.innerHeight || document.documentElement.clientHeight) / 2;

    const centerElement = document.elementFromPoint(centerX, centerY);

    if (centerElement.tagName === "IMG") {
        return centerElement;
    } 
        return null
    
}

document.addEventListener('click', getCenterImage)

function makeCircleHovered() {
    a.forEach(link => {

    })
}


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguNTIzYjg2MmUzYWM0ZjE5OTNiMDIuaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFxQjs7QUFFckI7QUFDQTs7QUFFQTtBQUNBOztBQUVBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0EsS0FBSzs7QUFFTCxDQUFDOztBQUVEO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQSxLQUFLO0FBQ0wiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9iYXNpYy10ZW1wbGF0ZS8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgXCIuL3N0eWxlLmNzc1wiO1xuXG5jb25zdCBpbWFnZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiaW1nXCIpO1xuY29uc3QgYSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCJhXCIpO1xuXG5pbWFnZXMuZm9yRWFjaCgoaW1hZ2UpID0+IHtcbiAgICBjb25zdCBpbWFnZV9pZCA9IGltYWdlLmlkXG5cbn0pXG5cbmEuZm9yRWFjaChsaW5rID0+IHtcbiAgICBsaW5rLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlb3ZlcicsICgpID0+IHtcbiAgICAgICAgbGluay5jbGFzc0xpc3QuYWRkKCdob3ZlcmVkJylcbiAgICB9KVxuXG4gICAgbGluay5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW91dCcsICgpID0+IHtcbiAgICAgICAgbGluay5jbGFzc0xpc3QucmVtb3ZlKCdob3ZlcmVkJylcbiAgICB9KVxuXG59KVxuXG5mdW5jdGlvbiBnZXRDZW50ZXJJbWFnZSgpIHtcbiAgICBjb25zdCBjZW50ZXJYID0gKHdpbmRvdy5pbm5lcldpZHRoIHx8IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGllbnRXaWR0aCkgLyAyO1xuICAgIGNvbnN0IGNlbnRlclkgPSAod2luZG93LmlubmVySGVpZ2h0IHx8IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGllbnRIZWlnaHQpIC8gMjtcblxuICAgIGNvbnN0IGNlbnRlckVsZW1lbnQgPSBkb2N1bWVudC5lbGVtZW50RnJvbVBvaW50KGNlbnRlclgsIGNlbnRlclkpO1xuXG4gICAgaWYgKGNlbnRlckVsZW1lbnQudGFnTmFtZSA9PT0gXCJJTUdcIikge1xuICAgICAgICByZXR1cm4gY2VudGVyRWxlbWVudDtcbiAgICB9IFxuICAgICAgICByZXR1cm4gbnVsbFxuICAgIFxufVxuXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGdldENlbnRlckltYWdlKVxuXG5mdW5jdGlvbiBtYWtlQ2lyY2xlSG92ZXJlZCgpIHtcbiAgICBhLmZvckVhY2gobGluayA9PiB7XG5cbiAgICB9KVxufVxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9