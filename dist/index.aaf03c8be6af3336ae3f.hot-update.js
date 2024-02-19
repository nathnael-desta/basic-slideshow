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
setInterval(getCenterImageId(), 250);


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguYWFmMDNjOGJlNmFmMzMzNmFlM2YuaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFxQjs7QUFFckI7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0EsR0FBRztBQUNILENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFBa0I7QUFDbEI7QUFDQTtBQUNBLGVBQWU7QUFDZjtBQUNBLFNBQVM7OztBQUdUO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL2Jhc2ljLXRlbXBsYXRlLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBcIi4vc3R5bGUuY3NzXCI7XG5cbmNvbnN0IGEgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiYVwiKTtcblxuYS5mb3JFYWNoKChsaW5rKSA9PiB7XG4gIGxpbmsuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlb3ZlclwiLCAoKSA9PiB7XG4gICAgbGluay5jbGFzc0xpc3QuYWRkKFwiaG92ZXJlZFwiKTtcbiAgfSk7XG5cbiAgbGluay5hZGRFdmVudExpc3RlbmVyKFwibW91c2VvdXRcIiwgKCkgPT4ge1xuICAgIGxpbmsuY2xhc3NMaXN0LnJlbW92ZShcImhvdmVyZWRcIik7XG4gIH0pO1xufSk7XG5cbmZ1bmN0aW9uIGdldENlbnRlckltYWdlSWQoKSB7XG4gIGNvbnN0IGNlbnRlclggPVxuICAgICh3aW5kb3cuaW5uZXJXaWR0aCB8fCBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xpZW50V2lkdGgpIC8gMjtcbiAgY29uc3QgY2VudGVyWSA9XG4gICAgKHdpbmRvdy5pbm5lckhlaWdodCB8fCBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xpZW50SGVpZ2h0KSAvIDI7XG5cbiAgY29uc3QgY2VudGVyRWxlbWVudCA9IGRvY3VtZW50LmVsZW1lbnRGcm9tUG9pbnQoY2VudGVyWCwgY2VudGVyWSk7XG5cbiAgaWYgKGNlbnRlckVsZW1lbnQudGFnTmFtZSA9PT0gXCJJTUdcIikge1xuICAgIGNvbnNvbGUubG9nKGNlbnRlckVsZW1lbnQuaWQpXG4gICAgcmV0dXJuIGNlbnRlckVsZW1lbnQuaWQ7XG4gIH1cbiAgcmV0dXJuIG51bGw7XG59XG5cbi8qXG5mdW5jdGlvbiBtYWtlQ2lyY2xlSG92ZXJlZCgpIHtcbiAgICBhLmZvckVhY2gobGluayA9PiB7XG4gICAgICAgIGlmIChsaW5rLmNsYXNzTGlzdC5jb250YWlucyhnZXRDZW50ZXJJbWFnZUlkKCkpKSB7XG4gICAgICAgICAgICBsaW5rLmNsYXNzTGlzdC5hZGQoJ2hvdmVyZWQnKVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlbW92ZVwiLCAoZXZlbnQpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCByZWN0ID0gbGluay5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgaWYgKGV2ZW50LmNsaWVudFggPj0gcmVjdC5sZWZ0ICYmIGV2ZW50LmNsaWVudFggPD0gcmVjdC5yaWdodCAmJlxuICAgICAgICAgICAgICAgICAgICBldmVudC5jbGllbnRZID49IHJlY3QudG9wICYmIGV2ZW50LmNsaWVudFkgPD0gcmVjdC5ib3R0b20pIHtcbiAgICAgICAgICAgICAgICAgIGxpbmsuY2xhc3NMaXN0LmFkZCgnaG92ZXJlZCcpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICBsaW5rLmNsYXNzTGlzdC5yZW1vdmUoJ2hvdmVyZWQnKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KX1cblxuXG5zZXRJbnRlcnZhbChtYWtlQ2lyY2xlSG92ZXJlZCwxMClcbiovXG5zZXRJbnRlcnZhbChnZXRDZW50ZXJJbWFnZUlkKCksIDI1MCk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=