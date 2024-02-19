import "./style.css";

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
    const myCircle = document.querySelector(`.${image}`)


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