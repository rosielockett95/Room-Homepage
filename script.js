const carousels = document.querySelectorAll(".carousel");
const hambugerIcon = document.querySelector(".hamburger");
const hiddenNav = document.querySelector(".nav-bar-hidden");
const logo = document.querySelector(".logo");
const closeLogo = document.getElementById("close");
const isDesktop = window.matchMedia("(max-width: 375px)");
const carouselButton = document.querySelector(".grid-two-arrow-container");
const carouselButtonTwo = document.querySelector(".grid-three-arrow-container");
const carouselButtonThree = document.querySelector(
  ".grid-four-arrow-container"
);
const gridOne = document.querySelector(".grid-one");
const gridTwo = document.querySelector(".slide-two");

if (carousels.length) {
  carousels.forEach((carousel) => {
    const carouselButtons = carousel.querySelectorAll(".carousel__button");
    const carouselSlides = carousel.querySelector(".carousel__slides");
    const currentSlide = carousel.querySelector(".slide");
    const currentSlideWidth = currentSlide.getBoundingClientRect().width;

    if (carouselButtons.length) {
      carouselButtons.forEach((button) =>
        button.addEventListener("click", (e) => {
          e.stopPropagation();
          const button = e.target.closest("button");
          if (!button) return;
          if (button.dataset.button === "prev") {
            carouselSlides.scrollTo({
              left: carouselSlides.scrollLeft - currentSlideWidth,
              behavior: "smooth",
            });
            console.log("prev");
          } else {
            carouselSlides.scrollTo({
              left: carouselSlides.scrollLeft + currentSlideWidth,
              behavior: "smooth",
            });
            console.log("next");
          }
        })
      );
    }
  });
}

if (hambugerIcon) {
  hambugerIcon.addEventListener("click", () => {
    hiddenNav.classList.toggle("hidden");
    hambugerIcon.classList.remove("hamburger");
    logo.classList.toggle("hidden");
  });
}

if (closeLogo) {
  closeLogo.addEventListener("click", () => {
    hiddenNav.classList.toggle("hidden");
    hambugerIcon.classList.add("hamburger");
    logo.classList.toggle("hidden");
  });
}

if (isDesktop.matches) {
  gridOne.append(carouselButton);
}
