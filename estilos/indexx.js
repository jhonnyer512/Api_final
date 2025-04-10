let currentSlide = 0;
const slides = document.querySelectorAll('.slider-image');

function showSlide(index) {
    if (index >= slides.length) currentSlide = 0;
    if (index < 0) currentSlide = slides.length - 1;

    slides.forEach((slide, i) => {
        slide.style.display = i === currentSlide ? 'block' : 'none';
    });
}

function moveSlide(n) {
    currentSlide += n;
    showSlide(currentSlide);
}

// Inicializar el slider mostrando la primera imagen
showSlide(currentSlide);
