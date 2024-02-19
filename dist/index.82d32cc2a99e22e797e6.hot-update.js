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

function makeCircleHovered() {
    a.forEach(link => {
        if (link.classList.contains(getCenterImageId())) {
            link.classList.add('hovered')
        } else {
            
            link.addEventListener('mouseover', () => {
                link.dataset.hovered = 'true';
            })
            
            if (link.dataset.hovered === "true") {
                link.classList.add('hovered')
            } else {
                link.classList.remove('hovered')
            }
        }
    })
}


setInterval(makeCircleHovered,100)



/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguODJkMzJjYzJhOTllMjJlNzk3ZTYuaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFxQjs7QUFFckI7QUFDQTs7QUFFQTtBQUNBOztBQUVBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0EsS0FBSzs7QUFFTCxDQUFDOztBQUVEO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBLGNBQWM7QUFDZDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7OztBQUdBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYmFzaWMtdGVtcGxhdGUvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFwiLi9zdHlsZS5jc3NcIjtcblxuY29uc3QgaW1hZ2VzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcImltZ1wiKTtcbmNvbnN0IGEgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiYVwiKTtcblxuaW1hZ2VzLmZvckVhY2goKGltYWdlKSA9PiB7XG4gICAgY29uc3QgaW1hZ2VfaWQgPSBpbWFnZS5pZFxuXG59KVxuXG5hLmZvckVhY2gobGluayA9PiB7XG4gICAgbGluay5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW92ZXInLCAoKSA9PiB7XG4gICAgICAgIGxpbmsuY2xhc3NMaXN0LmFkZCgnaG92ZXJlZCcpXG4gICAgfSlcblxuICAgIGxpbmsuYWRkRXZlbnRMaXN0ZW5lcignbW91c2VvdXQnLCAoKSA9PiB7XG4gICAgICAgIGxpbmsuY2xhc3NMaXN0LnJlbW92ZSgnaG92ZXJlZCcpXG4gICAgfSlcblxufSlcblxuZnVuY3Rpb24gZ2V0Q2VudGVySW1hZ2VJZCgpIHtcbiAgICBjb25zdCBjZW50ZXJYID0gKHdpbmRvdy5pbm5lcldpZHRoIHx8IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGllbnRXaWR0aCkgLyAyO1xuICAgIGNvbnN0IGNlbnRlclkgPSAod2luZG93LmlubmVySGVpZ2h0IHx8IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGllbnRIZWlnaHQpIC8gMjtcblxuICAgIGNvbnN0IGNlbnRlckVsZW1lbnQgPSBkb2N1bWVudC5lbGVtZW50RnJvbVBvaW50KGNlbnRlclgsIGNlbnRlclkpO1xuXG4gICAgaWYgKGNlbnRlckVsZW1lbnQudGFnTmFtZSA9PT0gXCJJTUdcIikge1xuICAgICAgICByZXR1cm4gY2VudGVyRWxlbWVudC5pZDtcbiAgICB9IFxuICAgICAgICByZXR1cm4gbnVsbFxuICAgIFxufVxuXG5mdW5jdGlvbiBtYWtlQ2lyY2xlSG92ZXJlZCgpIHtcbiAgICBhLmZvckVhY2gobGluayA9PiB7XG4gICAgICAgIGlmIChsaW5rLmNsYXNzTGlzdC5jb250YWlucyhnZXRDZW50ZXJJbWFnZUlkKCkpKSB7XG4gICAgICAgICAgICBsaW5rLmNsYXNzTGlzdC5hZGQoJ2hvdmVyZWQnKVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgXG4gICAgICAgICAgICBsaW5rLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlb3ZlcicsICgpID0+IHtcbiAgICAgICAgICAgICAgICBsaW5rLmRhdGFzZXQuaG92ZXJlZCA9ICd0cnVlJztcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGlmIChsaW5rLmRhdGFzZXQuaG92ZXJlZCA9PT0gXCJ0cnVlXCIpIHtcbiAgICAgICAgICAgICAgICBsaW5rLmNsYXNzTGlzdC5hZGQoJ2hvdmVyZWQnKVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBsaW5rLmNsYXNzTGlzdC5yZW1vdmUoJ2hvdmVyZWQnKVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSlcbn1cblxuXG5zZXRJbnRlcnZhbChtYWtlQ2lyY2xlSG92ZXJlZCwxMDApXG5cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==