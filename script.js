document.addEventListener("DOMContentLoaded", () => {
  const carousels = document.querySelectorAll(".carousel");
  const hambugerIcon = document.querySelector(".hamburger");
  const hiddenNav = document.querySelector(".nav-bar-hover");
  const logo = document.querySelector(".logo");
  const closeLogo = document.getElementById("close");
  const isDesktop = window.matchMedia("(max-width: 375px)");
  const desktopNavBar = document.querySelector(".nav-bar--desktop");
  const mobileNavBar = document.querySelector(".nav-bar--mobile ");
  const carouselButtons = document.querySelector(".carousel__buttons");
  const bannerLeft = document.querySelector(".banner__left");

  if (carousels.length) {
    carousels.forEach((carousel) => {
      const carouselID = carousel.id;
      console.dir(carousel);
      const carouselButtonContainer = document.querySelector(
        `[data-carousel='${carouselID}']`
      );
      console.log(carouselButtonContainer);
      const carouselSlides = carousel.querySelector(".carousel__slides");
      const currentSlide = carousel.querySelector(".slide");
      const currentSlideWidth = currentSlide.getBoundingClientRect().width;
      if (carouselButtonContainer) {
        const carouselButtons =
          carouselButtonContainer.querySelectorAll("button");
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
      }
    });
  }

  if (hambugerIcon) {
    hambugerIcon.addEventListener("click", () => {
      hiddenNav.classList.remove("hidden");
      hiddenNav.classList.toggle("open");
      hambugerIcon.classList.remove("hamburger");
      logo.classList.toggle("hidden");
    });
  }

  if (closeLogo) {
    closeLogo.addEventListener("click", () => {
      hiddenNav.classList.toggle("open");
      hambugerIcon.classList.add("hamburger");
      logo.classList.toggle("hidden");
    });
  }

  if (isDesktop.matches) {
    desktopNavBar.classList.add("hidden");
    mobileNavBar.classList.remove("hidden");
    bannerLeft.append(carouselButtons);
  }
});
