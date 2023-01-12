const menuBtn = document.querySelector(".navbar-btn");
const linksOn = document.querySelector(".links");
let hamburguerOn = false;
let menuOpen = false;

menuBtn.addEventListener("click", () => {
  if(!menuOpen) {
    linksOn.classList.add("on");
    menuBtn.classList.add("open");
    menuOpen = true;
    hamburguerOn = true;
  } else {
    linksOn.classList.remove("on");
    menuBtn.classList.remove("open");
    menuOpen = false;
    hamburguerOn = false;
  }
});

let slideIndex = 1;
showSlides(slideIndex);