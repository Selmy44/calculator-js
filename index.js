// let slideIndex = 0;
// showSlides(slideIndex);

// function nextSlide() {
//     slideIndex++;
//     showSlides(slideIndex);
// }

// function prevSlide() {
//     slideIndex--;
//     showSlides(slideIndex);
// }

// function showSlides(index) {
//     const slides = document.querySelectorAll('.slides img');
//     if (index >= slides.length) {
//         slideIndex = 0;
//     }
//     if (index < 0) {
//         slideIndex = slides.length - 1;
//     }
//     slides.forEach((slide, i) => {
//         slide.classList.remove('active');
//         if (i === slideIndex) {
//             slide.classList.add('active');
//         }
//     });
// }

const carousel = document.querySelector('.carousel');
const prev = document.getElementById('prevBtn');
const next = document.getElementById('nextBtn');

let currentIndex = 0;

prev.addEventListener('click', () => {
    if (currentIndex > 0) {
        currentIndex--;
    } else {
        currentIndex = carousel.children.length - 1;
    }
    updateCarousel();
});

next.addEventListener('click', () => {
    if (currentIndex < carousel.children.length - 1) {
        currentIndex++;
    } else {
        currentIndex = 0;
    }
    updateCarousel();
});

function updateCarousel() {
    const offset = -currentIndex * 300;
    carousel.style.transform = `translateX(${offset}px)`;
}
