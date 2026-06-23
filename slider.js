const testimonials = document.querySelectorAll(".testimonial");
let currentSlide = 0;

const showSlide = (index) => {
  testimonials.forEach((slide) => slide.classList.remove("active"));
  testimonials[index].classList.add("active");
};

const nextSlide = () => {
  currentSlide = (currentSlide + 1) % testimonials.length;
  showSlide(currentSlide);
};

if (testimonials.length) {
  showSlide(currentSlide);
  setInterval(nextSlide, 4000);
}
