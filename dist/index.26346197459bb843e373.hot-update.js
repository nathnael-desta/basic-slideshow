"use strict";
self["webpackHotUpdatebasic_template"]("index",{

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");


const a = document.querySelectorAll("a");
let hovering;

function getCenterImageId() {
  const centerX =
    (window.innerWidth || document.documentElement.clientWidth) / 2;
  const centerY =
    (window.innerHeight || document.documentElement.clientHeight) / 2;

  const centerElement = document.elementFromPoint(centerX, centerY);

  if (centerElement.tagName === "IMG") {
    console.log(centerElement.id)
    return centerElement.id;
  }
  return null;
}

/*
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
*/

function hoveredRemover(image,hovering) {
    a.forEach(link => {
        if (link.id !== image && hovering !== link)
        link.classList.remove('hovered');
    })
}

function makeCircleHovered() {
    const image  = getCenterImageId();
    let myCircle = document.querySelector(`.${image}`)


    
    hoveredRemover(image, hovering)
    myCircle.classList.add('hovered')
    console.log(myCircle)
}

setInterval(makeCircleHovered,250)

/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguMjYzNDYxOTc0NTliYjg0M2UzNzMuaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFxQjs7QUFFckI7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQjtBQUNsQjtBQUNBO0FBQ0EsZUFBZTtBQUNmO0FBQ0EsU0FBUzs7O0FBR1Q7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0EsOENBQThDLE1BQU07OztBQUdwRDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYmFzaWMtdGVtcGxhdGUvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFwiLi9zdHlsZS5jc3NcIjtcblxuY29uc3QgYSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCJhXCIpO1xubGV0IGhvdmVyaW5nO1xuXG5mdW5jdGlvbiBnZXRDZW50ZXJJbWFnZUlkKCkge1xuICBjb25zdCBjZW50ZXJYID1cbiAgICAod2luZG93LmlubmVyV2lkdGggfHwgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsaWVudFdpZHRoKSAvIDI7XG4gIGNvbnN0IGNlbnRlclkgPVxuICAgICh3aW5kb3cuaW5uZXJIZWlnaHQgfHwgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsaWVudEhlaWdodCkgLyAyO1xuXG4gIGNvbnN0IGNlbnRlckVsZW1lbnQgPSBkb2N1bWVudC5lbGVtZW50RnJvbVBvaW50KGNlbnRlclgsIGNlbnRlclkpO1xuXG4gIGlmIChjZW50ZXJFbGVtZW50LnRhZ05hbWUgPT09IFwiSU1HXCIpIHtcbiAgICBjb25zb2xlLmxvZyhjZW50ZXJFbGVtZW50LmlkKVxuICAgIHJldHVybiBjZW50ZXJFbGVtZW50LmlkO1xuICB9XG4gIHJldHVybiBudWxsO1xufVxuXG4vKlxuZnVuY3Rpb24gbWFrZUNpcmNsZUhvdmVyZWQoKSB7XG4gICAgYS5mb3JFYWNoKGxpbmsgPT4ge1xuICAgICAgICBpZiAobGluay5jbGFzc0xpc3QuY29udGFpbnMoZ2V0Q2VudGVySW1hZ2VJZCgpKSkge1xuICAgICAgICAgICAgbGluay5jbGFzc0xpc3QuYWRkKCdob3ZlcmVkJylcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZW1vdmVcIiwgKGV2ZW50KSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgcmVjdCA9IGxpbmsuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIGlmIChldmVudC5jbGllbnRYID49IHJlY3QubGVmdCAmJiBldmVudC5jbGllbnRYIDw9IHJlY3QucmlnaHQgJiZcbiAgICAgICAgICAgICAgICAgICAgZXZlbnQuY2xpZW50WSA+PSByZWN0LnRvcCAmJiBldmVudC5jbGllbnRZIDw9IHJlY3QuYm90dG9tKSB7XG4gICAgICAgICAgICAgICAgICBsaW5rLmNsYXNzTGlzdC5hZGQoJ2hvdmVyZWQnKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgbGluay5jbGFzc0xpc3QucmVtb3ZlKCdob3ZlcmVkJyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSl9XG5cblxuc2V0SW50ZXJ2YWwobWFrZUNpcmNsZUhvdmVyZWQsMTApXG4qL1xuXG5mdW5jdGlvbiBob3ZlcmVkUmVtb3ZlcihpbWFnZSxob3ZlcmluZykge1xuICAgIGEuZm9yRWFjaChsaW5rID0+IHtcbiAgICAgICAgaWYgKGxpbmsuaWQgIT09IGltYWdlICYmIGhvdmVyaW5nICE9PSBsaW5rKVxuICAgICAgICBsaW5rLmNsYXNzTGlzdC5yZW1vdmUoJ2hvdmVyZWQnKTtcbiAgICB9KVxufVxuXG5mdW5jdGlvbiBtYWtlQ2lyY2xlSG92ZXJlZCgpIHtcbiAgICBjb25zdCBpbWFnZSAgPSBnZXRDZW50ZXJJbWFnZUlkKCk7XG4gICAgbGV0IG15Q2lyY2xlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLiR7aW1hZ2V9YClcblxuXG4gICAgXG4gICAgaG92ZXJlZFJlbW92ZXIoaW1hZ2UsIGhvdmVyaW5nKVxuICAgIG15Q2lyY2xlLmNsYXNzTGlzdC5hZGQoJ2hvdmVyZWQnKVxuICAgIGNvbnNvbGUubG9nKG15Q2lyY2xlKVxufVxuXG5zZXRJbnRlcnZhbChtYWtlQ2lyY2xlSG92ZXJlZCwyNTApIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9