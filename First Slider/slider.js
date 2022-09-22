function slidesPlugin(activSlide = 0) {
  const slides = document.querySelectorAll(".slide");

  slides[activSlide].classList.add("active");

  for (const slide of slides) {
    slide.addEventListener("click", function () {
      clearActiveClasses();
      slide.classList.add("active");
    });
  }

  function clearActiveClasses() {
    slides.forEach(function (slide) {
      slide.classList.remove("active");
    });
  }
}

slidesPlugin();
