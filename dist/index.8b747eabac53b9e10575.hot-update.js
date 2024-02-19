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


    a.forEach((link) => {
        
      link.addEventListener("mouseover", () => {
        hovering = link;
        link.classList.add("hovered");
      });
    
      link.addEventListener("mouseout", () => {
        link.classList.remove("hovered");
      });
    });


    hoveredRemover(image, hovering)
    myCircle.classList.add('hovered')
    
}

setInterval(makeCircleHovered,250)

/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguOGI3NDdlYWJhYzUzYjllMTA1NzUuaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFxQjs7QUFFckI7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQjtBQUNsQjtBQUNBO0FBQ0EsZUFBZTtBQUNmO0FBQ0EsU0FBUzs7O0FBR1Q7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0EsOENBQThDLE1BQU07OztBQUdwRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUCxLQUFLOzs7QUFHTDtBQUNBO0FBQ0E7QUFDQTs7QUFFQSIsInNvdXJjZXMiOlsid2VicGFjazovL2Jhc2ljLXRlbXBsYXRlLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBcIi4vc3R5bGUuY3NzXCI7XG5cbmNvbnN0IGEgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiYVwiKTtcbmxldCBob3ZlcmluZztcblxuZnVuY3Rpb24gZ2V0Q2VudGVySW1hZ2VJZCgpIHtcbiAgY29uc3QgY2VudGVyWCA9XG4gICAgKHdpbmRvdy5pbm5lcldpZHRoIHx8IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGllbnRXaWR0aCkgLyAyO1xuICBjb25zdCBjZW50ZXJZID1cbiAgICAod2luZG93LmlubmVySGVpZ2h0IHx8IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGllbnRIZWlnaHQpIC8gMjtcblxuICBjb25zdCBjZW50ZXJFbGVtZW50ID0gZG9jdW1lbnQuZWxlbWVudEZyb21Qb2ludChjZW50ZXJYLCBjZW50ZXJZKTtcblxuICBpZiAoY2VudGVyRWxlbWVudC50YWdOYW1lID09PSBcIklNR1wiKSB7XG4gICAgY29uc29sZS5sb2coY2VudGVyRWxlbWVudC5pZClcbiAgICByZXR1cm4gY2VudGVyRWxlbWVudC5pZDtcbiAgfVxuICByZXR1cm4gbnVsbDtcbn1cblxuLypcbmZ1bmN0aW9uIG1ha2VDaXJjbGVIb3ZlcmVkKCkge1xuICAgIGEuZm9yRWFjaChsaW5rID0+IHtcbiAgICAgICAgaWYgKGxpbmsuY2xhc3NMaXN0LmNvbnRhaW5zKGdldENlbnRlckltYWdlSWQoKSkpIHtcbiAgICAgICAgICAgIGxpbmsuY2xhc3NMaXN0LmFkZCgnaG92ZXJlZCcpXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwibW91c2Vtb3ZlXCIsIChldmVudCkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IHJlY3QgPSBsaW5rLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICBpZiAoZXZlbnQuY2xpZW50WCA+PSByZWN0LmxlZnQgJiYgZXZlbnQuY2xpZW50WCA8PSByZWN0LnJpZ2h0ICYmXG4gICAgICAgICAgICAgICAgICAgIGV2ZW50LmNsaWVudFkgPj0gcmVjdC50b3AgJiYgZXZlbnQuY2xpZW50WSA8PSByZWN0LmJvdHRvbSkge1xuICAgICAgICAgICAgICAgICAgbGluay5jbGFzc0xpc3QuYWRkKCdob3ZlcmVkJyk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgIGxpbmsuY2xhc3NMaXN0LnJlbW92ZSgnaG92ZXJlZCcpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pfVxuXG5cbnNldEludGVydmFsKG1ha2VDaXJjbGVIb3ZlcmVkLDEwKVxuKi9cblxuZnVuY3Rpb24gaG92ZXJlZFJlbW92ZXIoaW1hZ2UsaG92ZXJpbmcpIHtcbiAgICBhLmZvckVhY2gobGluayA9PiB7XG4gICAgICAgIGlmIChsaW5rLmlkICE9PSBpbWFnZSAmJiBob3ZlcmluZyAhPT0gbGluaylcbiAgICAgICAgbGluay5jbGFzc0xpc3QucmVtb3ZlKCdob3ZlcmVkJyk7XG4gICAgfSlcbn1cblxuZnVuY3Rpb24gbWFrZUNpcmNsZUhvdmVyZWQoKSB7XG4gICAgY29uc3QgaW1hZ2UgID0gZ2V0Q2VudGVySW1hZ2VJZCgpO1xuICAgIGxldCBteUNpcmNsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC4ke2ltYWdlfWApXG5cblxuICAgIGEuZm9yRWFjaCgobGluaykgPT4ge1xuICAgICAgICBcbiAgICAgIGxpbmsuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlb3ZlclwiLCAoKSA9PiB7XG4gICAgICAgIGhvdmVyaW5nID0gbGluaztcbiAgICAgICAgbGluay5jbGFzc0xpc3QuYWRkKFwiaG92ZXJlZFwiKTtcbiAgICAgIH0pO1xuICAgIFxuICAgICAgbGluay5hZGRFdmVudExpc3RlbmVyKFwibW91c2VvdXRcIiwgKCkgPT4ge1xuICAgICAgICBsaW5rLmNsYXNzTGlzdC5yZW1vdmUoXCJob3ZlcmVkXCIpO1xuICAgICAgfSk7XG4gICAgfSk7XG5cblxuICAgIGhvdmVyZWRSZW1vdmVyKGltYWdlLCBob3ZlcmluZylcbiAgICBteUNpcmNsZS5jbGFzc0xpc3QuYWRkKCdob3ZlcmVkJylcbiAgICBcbn1cblxuc2V0SW50ZXJ2YWwobWFrZUNpcmNsZUhvdmVyZWQsMjUwKSJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==