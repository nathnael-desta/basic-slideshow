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

    console.log(centerX,centerY)

    const centerElement = document.elementFromPoint(centerX, centerY);
    
    console.log("center element", centerElement)

    if (centerElement.tagName === "IMG") {
        console.log(centerElement)
        return centerElement;
    } 
        return null
    
}

function makeCircleHovered() {
    a.forEach(link => {
        
    })
}


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguNDc1ZDVhNTRkYTliZTZhN2MzYmUuaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFxQjs7QUFFckI7QUFDQTs7QUFFQTtBQUNBOztBQUVBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0EsS0FBSzs7QUFFTCxDQUFDOztBQUVEO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYmFzaWMtdGVtcGxhdGUvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFwiLi9zdHlsZS5jc3NcIjtcblxuY29uc3QgaW1hZ2VzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcImltZ1wiKTtcbmNvbnN0IGEgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiYVwiKTtcblxuaW1hZ2VzLmZvckVhY2goKGltYWdlKSA9PiB7XG4gICAgY29uc3QgaW1hZ2VfaWQgPSBpbWFnZS5pZFxuXG59KVxuXG5hLmZvckVhY2gobGluayA9PiB7XG4gICAgbGluay5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW92ZXInLCAoKSA9PiB7XG4gICAgICAgIGxpbmsuY2xhc3NMaXN0LmFkZCgnaG92ZXJlZCcpXG4gICAgfSlcblxuICAgIGxpbmsuYWRkRXZlbnRMaXN0ZW5lcignbW91c2VvdXQnLCAoKSA9PiB7XG4gICAgICAgIGxpbmsuY2xhc3NMaXN0LnJlbW92ZSgnaG92ZXJlZCcpXG4gICAgfSlcblxufSlcblxuZnVuY3Rpb24gZ2V0Q2VudGVySW1hZ2UoKSB7XG4gICAgY29uc3QgY2VudGVyWCA9ICh3aW5kb3cuaW5uZXJXaWR0aCB8fCBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xpZW50V2lkdGgpIC8gMjtcbiAgICBjb25zdCBjZW50ZXJZID0gKHdpbmRvdy5pbm5lckhlaWdodCB8fCBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xpZW50SGVpZ2h0KSAvIDI7XG5cbiAgICBjb25zb2xlLmxvZyhjZW50ZXJYLGNlbnRlclkpXG5cbiAgICBjb25zdCBjZW50ZXJFbGVtZW50ID0gZG9jdW1lbnQuZWxlbWVudEZyb21Qb2ludChjZW50ZXJYLCBjZW50ZXJZKTtcbiAgICBcbiAgICBjb25zb2xlLmxvZyhcImNlbnRlciBlbGVtZW50XCIsIGNlbnRlckVsZW1lbnQpXG5cbiAgICBpZiAoY2VudGVyRWxlbWVudC50YWdOYW1lID09PSBcIklNR1wiKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKGNlbnRlckVsZW1lbnQpXG4gICAgICAgIHJldHVybiBjZW50ZXJFbGVtZW50O1xuICAgIH0gXG4gICAgICAgIHJldHVybiBudWxsXG4gICAgXG59XG5cbmZ1bmN0aW9uIG1ha2VDaXJjbGVIb3ZlcmVkKCkge1xuICAgIGEuZm9yRWFjaChsaW5rID0+IHtcbiAgICAgICAgXG4gICAgfSlcbn1cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==