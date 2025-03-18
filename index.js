// scripts.js

document.addEventListener("DOMContentLoaded", function () {
    const slides = document.querySelectorAll(".slide");
    let currentSlide = 0;

    const prevButton = document.querySelector(".prev");
    const nextButton = document.querySelector(".next");

    function showSlide(index) {
        slides.forEach((slide, i) => {
            slide.classList.remove("active");
            if (i === index) {
                slide.classList.add("active");
            }
        });
    }

    prevButton.addEventListener("click", function () {
        currentSlide = currentSlide === 0 ? slides.length - 1 : currentSlide - 1;
        showSlide(currentSlide);
    });

    nextButton.addEventListener("click", function () {
        currentSlide = currentSlide === slides.length - 1 ? 0 : currentSlide + 1;
        showSlide(currentSlide);
    });

    // Показываем первый слайд
    showSlide(currentSlide);
});
