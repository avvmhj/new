const carousel = document.querySelector('.carousel');
const carouselWidth = carousel.offsetWidth;
let slideIndex = 0;

function showSlide(index) {
  carousel.style.transform = `translateX(-${index * carouselWidth}px)`;
}

function nextSlide() {
  slideIndex++;
  if (slideIndex >= carousel.children.length) {
    slideIndex = 0;
  }
  showSlide(slideIndex);
}

function prevSlide() {
  slideIndex--;
  if (slideIndex < 0) {
    slideIndex = carousel.children.length - 1;
  }
  showSlide(slideIndex);
}

document.querySelector('.carousel-control.next').addEventListener('click', nextSlide);
document.querySelector('.carousel-control.prev').addEventListener('click', prevSlide);