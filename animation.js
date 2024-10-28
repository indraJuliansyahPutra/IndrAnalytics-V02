// Typewriting effect
document.addEventListener("DOMContentLoaded", function () {
    const texts = [
      "Welcome to My Portfolio",
      "I'm Indra Juliansyah Putra",
      "A Data, ML, and AI Enthusiast"
    ];
  
    let count = 0;
    let index = 0;
    let currentText = '';
    let letter = '';
  
    function type() {
      if (count === texts.length) count = 0;
      currentText = texts[count];
      letter = currentText.slice(0, ++index);
  
      document.querySelector('.logo h1').textContent = letter;
  
      if (letter.length === currentText.length) {
        count++;
        index = 0;
        setTimeout(type, 2000);
      } else {
        setTimeout(type, 150);
      }
    }
  
    type();
});
  
// Gallery animation
let educationSlideIndex = 1;

function openGallery(modalId) {
  document.getElementById(modalId).style.display = "flex";
  showEducationSlides(educationSlideIndex, modalId);
}

function closeGallery(modalId) {
  document.getElementById(modalId).style.display = "none";
}

function plusEducationSlides(n, modalId) {
  showEducationSlides(educationSlideIndex += n, modalId);
}

function showEducationSlides(n, modalId) {
  let slides = document.querySelectorAll(`#${modalId} .education-slide`);
  if (n > slides.length) educationSlideIndex = 1;
  if (n < 1) educationSlideIndex = slides.length;
  slides.forEach(slide => slide.style.display = "none");
  slides[educationSlideIndex - 1].style.display = "block";
}

// Blog tilt effect
const blogCards = document.querySelectorAll('[data-tilt]');

blogCards.forEach((card) => {
  card.addEventListener('mousemove', (e) => {
  const rect = card.getBoundingClientRect();
  const x = e.clientX - rect.left;
  const y = e.clientY - rect.top;
  const rotateX = (y / rect.height - 0.5) * -30;
  const rotateY = (x / rect.width - 0.5) * 30;
  card.querySelector('.blog-card-inner').style.transform = `rotateY(${rotateY}deg) rotateX(${rotateX}deg)`;
  });

  card.addEventListener('mouseleave', () => {
  card.querySelector('.blog-card-inner').style.transform = 'rotateY(0deg) rotateX(0deg)';
  });
});
  