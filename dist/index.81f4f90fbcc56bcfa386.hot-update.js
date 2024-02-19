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


function makeCircleHovered() {
    const image  = getCenterImageId();
    console.log(image)
}

setInterval()

/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguODFmNGY5MGZiY2M1NmJjZmEzODYuaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFxQjs7QUFFckI7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0EsR0FBRztBQUNILENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFBa0I7QUFDbEI7QUFDQTtBQUNBLGVBQWU7QUFDZjtBQUNBLFNBQVM7OztBQUdUO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBOztBQUVBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYmFzaWMtdGVtcGxhdGUvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFwiLi9zdHlsZS5jc3NcIjtcblxuY29uc3QgYSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCJhXCIpO1xuXG5hLmZvckVhY2goKGxpbmspID0+IHtcbiAgbGluay5hZGRFdmVudExpc3RlbmVyKFwibW91c2VvdmVyXCIsICgpID0+IHtcbiAgICBsaW5rLmNsYXNzTGlzdC5hZGQoXCJob3ZlcmVkXCIpO1xuICB9KTtcblxuICBsaW5rLmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZW91dFwiLCAoKSA9PiB7XG4gICAgbGluay5jbGFzc0xpc3QucmVtb3ZlKFwiaG92ZXJlZFwiKTtcbiAgfSk7XG59KTtcblxuZnVuY3Rpb24gZ2V0Q2VudGVySW1hZ2VJZCgpIHtcbiAgY29uc3QgY2VudGVyWCA9XG4gICAgKHdpbmRvdy5pbm5lcldpZHRoIHx8IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGllbnRXaWR0aCkgLyAyO1xuICBjb25zdCBjZW50ZXJZID1cbiAgICAod2luZG93LmlubmVySGVpZ2h0IHx8IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGllbnRIZWlnaHQpIC8gMjtcblxuICBjb25zdCBjZW50ZXJFbGVtZW50ID0gZG9jdW1lbnQuZWxlbWVudEZyb21Qb2ludChjZW50ZXJYLCBjZW50ZXJZKTtcblxuICBpZiAoY2VudGVyRWxlbWVudC50YWdOYW1lID09PSBcIklNR1wiKSB7XG4gICAgY29uc29sZS5sb2coY2VudGVyRWxlbWVudC5pZClcbiAgICByZXR1cm4gY2VudGVyRWxlbWVudC5pZDtcbiAgfVxuICByZXR1cm4gbnVsbDtcbn1cblxuLypcbmZ1bmN0aW9uIG1ha2VDaXJjbGVIb3ZlcmVkKCkge1xuICAgIGEuZm9yRWFjaChsaW5rID0+IHtcbiAgICAgICAgaWYgKGxpbmsuY2xhc3NMaXN0LmNvbnRhaW5zKGdldENlbnRlckltYWdlSWQoKSkpIHtcbiAgICAgICAgICAgIGxpbmsuY2xhc3NMaXN0LmFkZCgnaG92ZXJlZCcpXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwibW91c2Vtb3ZlXCIsIChldmVudCkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IHJlY3QgPSBsaW5rLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICBpZiAoZXZlbnQuY2xpZW50WCA+PSByZWN0LmxlZnQgJiYgZXZlbnQuY2xpZW50WCA8PSByZWN0LnJpZ2h0ICYmXG4gICAgICAgICAgICAgICAgICAgIGV2ZW50LmNsaWVudFkgPj0gcmVjdC50b3AgJiYgZXZlbnQuY2xpZW50WSA8PSByZWN0LmJvdHRvbSkge1xuICAgICAgICAgICAgICAgICAgbGluay5jbGFzc0xpc3QuYWRkKCdob3ZlcmVkJyk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgIGxpbmsuY2xhc3NMaXN0LnJlbW92ZSgnaG92ZXJlZCcpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pfVxuXG5cbnNldEludGVydmFsKG1ha2VDaXJjbGVIb3ZlcmVkLDEwKVxuKi9cblxuXG5mdW5jdGlvbiBtYWtlQ2lyY2xlSG92ZXJlZCgpIHtcbiAgICBjb25zdCBpbWFnZSAgPSBnZXRDZW50ZXJJbWFnZUlkKCk7XG4gICAgY29uc29sZS5sb2coaW1hZ2UpXG59XG5cbnNldEludGVydmFsKCkiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=