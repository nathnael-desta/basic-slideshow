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

a.forEach((link) => {
    let hovering = link;
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

function hoveredRemover(image) {
    a.forEach(link => {
        if (link.id !== image && hovering !== link)
        link.classList.remove('hovered');
    })
}

function makeCircleHovered() {
    const image  = getCenterImageId();
    let myCircle = document.querySelector(`.${image}`)
    hoveredRemover(image)
    myCircle.classList.add('hovered')
    console.log(myCircle)
}

setInterval(makeCircleHovered,250)

/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguOWRkOWI0N2M3Y2Q1MmY4YTc1MWMuaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFxQjs7QUFFckI7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBLEdBQUc7QUFDSCxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCO0FBQ2xCO0FBQ0E7QUFDQSxlQUFlO0FBQ2Y7QUFDQSxTQUFTOzs7QUFHVDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQSw4Q0FBOEMsTUFBTTtBQUNwRDtBQUNBO0FBQ0E7QUFDQTs7QUFFQSIsInNvdXJjZXMiOlsid2VicGFjazovL2Jhc2ljLXRlbXBsYXRlLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBcIi4vc3R5bGUuY3NzXCI7XG5cbmNvbnN0IGEgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiYVwiKTtcbmxldCBob3ZlcmluZztcblxuYS5mb3JFYWNoKChsaW5rKSA9PiB7XG4gICAgbGV0IGhvdmVyaW5nID0gbGluaztcbiAgbGluay5hZGRFdmVudExpc3RlbmVyKFwibW91c2VvdmVyXCIsICgpID0+IHtcbiAgICBsaW5rLmNsYXNzTGlzdC5hZGQoXCJob3ZlcmVkXCIpO1xuICB9KTtcblxuICBsaW5rLmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZW91dFwiLCAoKSA9PiB7XG4gICAgbGluay5jbGFzc0xpc3QucmVtb3ZlKFwiaG92ZXJlZFwiKTtcbiAgfSk7XG59KTtcblxuZnVuY3Rpb24gZ2V0Q2VudGVySW1hZ2VJZCgpIHtcbiAgY29uc3QgY2VudGVyWCA9XG4gICAgKHdpbmRvdy5pbm5lcldpZHRoIHx8IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGllbnRXaWR0aCkgLyAyO1xuICBjb25zdCBjZW50ZXJZID1cbiAgICAod2luZG93LmlubmVySGVpZ2h0IHx8IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGllbnRIZWlnaHQpIC8gMjtcblxuICBjb25zdCBjZW50ZXJFbGVtZW50ID0gZG9jdW1lbnQuZWxlbWVudEZyb21Qb2ludChjZW50ZXJYLCBjZW50ZXJZKTtcblxuICBpZiAoY2VudGVyRWxlbWVudC50YWdOYW1lID09PSBcIklNR1wiKSB7XG4gICAgY29uc29sZS5sb2coY2VudGVyRWxlbWVudC5pZClcbiAgICByZXR1cm4gY2VudGVyRWxlbWVudC5pZDtcbiAgfVxuICByZXR1cm4gbnVsbDtcbn1cblxuLypcbmZ1bmN0aW9uIG1ha2VDaXJjbGVIb3ZlcmVkKCkge1xuICAgIGEuZm9yRWFjaChsaW5rID0+IHtcbiAgICAgICAgaWYgKGxpbmsuY2xhc3NMaXN0LmNvbnRhaW5zKGdldENlbnRlckltYWdlSWQoKSkpIHtcbiAgICAgICAgICAgIGxpbmsuY2xhc3NMaXN0LmFkZCgnaG92ZXJlZCcpXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwibW91c2Vtb3ZlXCIsIChldmVudCkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IHJlY3QgPSBsaW5rLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICBpZiAoZXZlbnQuY2xpZW50WCA+PSByZWN0LmxlZnQgJiYgZXZlbnQuY2xpZW50WCA8PSByZWN0LnJpZ2h0ICYmXG4gICAgICAgICAgICAgICAgICAgIGV2ZW50LmNsaWVudFkgPj0gcmVjdC50b3AgJiYgZXZlbnQuY2xpZW50WSA8PSByZWN0LmJvdHRvbSkge1xuICAgICAgICAgICAgICAgICAgbGluay5jbGFzc0xpc3QuYWRkKCdob3ZlcmVkJyk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgIGxpbmsuY2xhc3NMaXN0LnJlbW92ZSgnaG92ZXJlZCcpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pfVxuXG5cbnNldEludGVydmFsKG1ha2VDaXJjbGVIb3ZlcmVkLDEwKVxuKi9cblxuZnVuY3Rpb24gaG92ZXJlZFJlbW92ZXIoaW1hZ2UpIHtcbiAgICBhLmZvckVhY2gobGluayA9PiB7XG4gICAgICAgIGlmIChsaW5rLmlkICE9PSBpbWFnZSAmJiBob3ZlcmluZyAhPT0gbGluaylcbiAgICAgICAgbGluay5jbGFzc0xpc3QucmVtb3ZlKCdob3ZlcmVkJyk7XG4gICAgfSlcbn1cblxuZnVuY3Rpb24gbWFrZUNpcmNsZUhvdmVyZWQoKSB7XG4gICAgY29uc3QgaW1hZ2UgID0gZ2V0Q2VudGVySW1hZ2VJZCgpO1xuICAgIGxldCBteUNpcmNsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC4ke2ltYWdlfWApXG4gICAgaG92ZXJlZFJlbW92ZXIoaW1hZ2UpXG4gICAgbXlDaXJjbGUuY2xhc3NMaXN0LmFkZCgnaG92ZXJlZCcpXG4gICAgY29uc29sZS5sb2cobXlDaXJjbGUpXG59XG5cbnNldEludGVydmFsKG1ha2VDaXJjbGVIb3ZlcmVkLDI1MCkiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=