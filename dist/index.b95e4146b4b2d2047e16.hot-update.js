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

a.forEach((link) => {
  link.addEventListener("mouseover", () => {
    link.classList.add("hovered");
  });

  link.addEventListener("mouseout", () => {
    link.classList.remove("hovered");
  });
});

function getCenterImageId() {
  const centerX =
    (window.innerWidth || document.documentElement.clientWidth) / 2;
  const centerY =
    (window.innerHeight || document.documentElement.clientHeight) / 2;

  
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
setInterval(getCenterImageId(), 250);


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguYjk1ZTQxNDZiNGIyZDIwNDdlMTYuaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFxQjs7QUFFckI7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0EsR0FBRztBQUNILENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFBa0I7QUFDbEI7QUFDQTtBQUNBLGVBQWU7QUFDZjtBQUNBLFNBQVM7OztBQUdUO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL2Jhc2ljLXRlbXBsYXRlLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBcIi4vc3R5bGUuY3NzXCI7XG5cbmNvbnN0IGEgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiYVwiKTtcblxuYS5mb3JFYWNoKChsaW5rKSA9PiB7XG4gIGxpbmsuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlb3ZlclwiLCAoKSA9PiB7XG4gICAgbGluay5jbGFzc0xpc3QuYWRkKFwiaG92ZXJlZFwiKTtcbiAgfSk7XG5cbiAgbGluay5hZGRFdmVudExpc3RlbmVyKFwibW91c2VvdXRcIiwgKCkgPT4ge1xuICAgIGxpbmsuY2xhc3NMaXN0LnJlbW92ZShcImhvdmVyZWRcIik7XG4gIH0pO1xufSk7XG5cbmZ1bmN0aW9uIGdldENlbnRlckltYWdlSWQoKSB7XG4gIGNvbnN0IGNlbnRlclggPVxuICAgICh3aW5kb3cuaW5uZXJXaWR0aCB8fCBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xpZW50V2lkdGgpIC8gMjtcbiAgY29uc3QgY2VudGVyWSA9XG4gICAgKHdpbmRvdy5pbm5lckhlaWdodCB8fCBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xpZW50SGVpZ2h0KSAvIDI7XG5cbiAgXG4gIHJldHVybiBudWxsO1xufVxuXG4vKlxuZnVuY3Rpb24gbWFrZUNpcmNsZUhvdmVyZWQoKSB7XG4gICAgYS5mb3JFYWNoKGxpbmsgPT4ge1xuICAgICAgICBpZiAobGluay5jbGFzc0xpc3QuY29udGFpbnMoZ2V0Q2VudGVySW1hZ2VJZCgpKSkge1xuICAgICAgICAgICAgbGluay5jbGFzc0xpc3QuYWRkKCdob3ZlcmVkJylcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZW1vdmVcIiwgKGV2ZW50KSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgcmVjdCA9IGxpbmsuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIGlmIChldmVudC5jbGllbnRYID49IHJlY3QubGVmdCAmJiBldmVudC5jbGllbnRYIDw9IHJlY3QucmlnaHQgJiZcbiAgICAgICAgICAgICAgICAgICAgZXZlbnQuY2xpZW50WSA+PSByZWN0LnRvcCAmJiBldmVudC5jbGllbnRZIDw9IHJlY3QuYm90dG9tKSB7XG4gICAgICAgICAgICAgICAgICBsaW5rLmNsYXNzTGlzdC5hZGQoJ2hvdmVyZWQnKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgbGluay5jbGFzc0xpc3QucmVtb3ZlKCdob3ZlcmVkJyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSl9XG5cblxuc2V0SW50ZXJ2YWwobWFrZUNpcmNsZUhvdmVyZWQsMTApXG4qL1xuc2V0SW50ZXJ2YWwoZ2V0Q2VudGVySW1hZ2VJZCgpLCAyNTApO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9