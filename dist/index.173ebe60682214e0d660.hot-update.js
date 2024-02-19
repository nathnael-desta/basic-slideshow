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
            document.addEventListener("mousemove", (event) => {
                const rect = link.getBoundingClientRect();
              
                if (event.clientX >= rect.left && event.clientX <= rect.right &&
                    event.clientY >= rect.top && event.clientY <= rect.bottom) {
                  link.classList.add('hovered');
                } else {
                  link.classList.remove('hovered');
                }
              });
            }
        })}


setInterval(makeCircleHovered,10)



/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguMTczZWJlNjA2ODIyMTRlMGQ2NjAuaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFxQjs7QUFFckI7QUFDQTs7QUFFQTtBQUNBOztBQUVBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0EsS0FBSzs7QUFFTCxDQUFDOztBQUVEO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQjtBQUNsQjtBQUNBO0FBQ0EsZUFBZTtBQUNmO0FBQ0EsU0FBUzs7O0FBR1QiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9iYXNpYy10ZW1wbGF0ZS8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgXCIuL3N0eWxlLmNzc1wiO1xuXG5jb25zdCBpbWFnZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiaW1nXCIpO1xuY29uc3QgYSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCJhXCIpO1xuXG5pbWFnZXMuZm9yRWFjaCgoaW1hZ2UpID0+IHtcbiAgICBjb25zdCBpbWFnZV9pZCA9IGltYWdlLmlkXG5cbn0pXG5cbmEuZm9yRWFjaChsaW5rID0+IHtcbiAgICBsaW5rLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlb3ZlcicsICgpID0+IHtcbiAgICAgICAgbGluay5jbGFzc0xpc3QuYWRkKCdob3ZlcmVkJylcbiAgICB9KVxuXG4gICAgbGluay5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW91dCcsICgpID0+IHtcbiAgICAgICAgbGluay5jbGFzc0xpc3QucmVtb3ZlKCdob3ZlcmVkJylcbiAgICB9KVxuXG59KVxuXG5mdW5jdGlvbiBnZXRDZW50ZXJJbWFnZUlkKCkge1xuICAgIGNvbnN0IGNlbnRlclggPSAod2luZG93LmlubmVyV2lkdGggfHwgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsaWVudFdpZHRoKSAvIDI7XG4gICAgY29uc3QgY2VudGVyWSA9ICh3aW5kb3cuaW5uZXJIZWlnaHQgfHwgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsaWVudEhlaWdodCkgLyAyO1xuXG4gICAgY29uc3QgY2VudGVyRWxlbWVudCA9IGRvY3VtZW50LmVsZW1lbnRGcm9tUG9pbnQoY2VudGVyWCwgY2VudGVyWSk7XG5cbiAgICBpZiAoY2VudGVyRWxlbWVudC50YWdOYW1lID09PSBcIklNR1wiKSB7XG4gICAgICAgIHJldHVybiBjZW50ZXJFbGVtZW50LmlkO1xuICAgIH0gXG4gICAgICAgIHJldHVybiBudWxsXG4gICAgXG59XG5cblxuZnVuY3Rpb24gbWFrZUNpcmNsZUhvdmVyZWQoKSB7XG4gICAgYS5mb3JFYWNoKGxpbmsgPT4ge1xuICAgICAgICBpZiAobGluay5jbGFzc0xpc3QuY29udGFpbnMoZ2V0Q2VudGVySW1hZ2VJZCgpKSkge1xuICAgICAgICAgICAgbGluay5jbGFzc0xpc3QuYWRkKCdob3ZlcmVkJylcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZW1vdmVcIiwgKGV2ZW50KSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgcmVjdCA9IGxpbmsuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIGlmIChldmVudC5jbGllbnRYID49IHJlY3QubGVmdCAmJiBldmVudC5jbGllbnRYIDw9IHJlY3QucmlnaHQgJiZcbiAgICAgICAgICAgICAgICAgICAgZXZlbnQuY2xpZW50WSA+PSByZWN0LnRvcCAmJiBldmVudC5jbGllbnRZIDw9IHJlY3QuYm90dG9tKSB7XG4gICAgICAgICAgICAgICAgICBsaW5rLmNsYXNzTGlzdC5hZGQoJ2hvdmVyZWQnKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgbGluay5jbGFzc0xpc3QucmVtb3ZlKCdob3ZlcmVkJyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSl9XG5cblxuc2V0SW50ZXJ2YWwobWFrZUNpcmNsZUhvdmVyZWQsMTApXG5cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==