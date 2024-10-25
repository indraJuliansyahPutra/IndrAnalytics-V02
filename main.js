//JavaScript for Typewriting effect
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
      if (count === texts.length) {
        count = 0; // Reset setelah teks terakhir
      }
      currentText = texts[count];
      letter = currentText.slice(0, ++index);
  
      document.querySelector('.logo h1').textContent = letter;
  
      if (letter.length === currentText.length) {
        count++;
        index = 0;
        setTimeout(type, 2000); // Delay sebelum teks berikutnya
      } else {
        setTimeout(type, 150); // Kecepatan efek mengetik
      }
    }
  
    type();
});

// JavaScript for Modal CV
document.addEventListener("DOMContentLoaded", function () {
    var modal = document.getElementById("cvModal");
    var btn = document.querySelector(".btn-outline-cv");
    var span = document.getElementsByClassName("close")[0];
  
    // Buka Modal/PDF
    btn.onclick = function () {
      modal.style.display = "block";
    }
  
    // Tutup Modal/PDF melalui simbol x
    span.onclick = function () {
      modal.style.display = "none";
    }
  
    // Tutup Modal/PDF juga tapi nggak melalui simbol x
    window.onclick = function (event) {
      if (event.target == modal) {
        modal.style.display = "none";
      }
    }
});

// JavaScript for Gallery
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
    if (n > slides.length) {
        educationSlideIndex = 1;
    }
    if (n < 1) {
        educationSlideIndex = slides.length;
    }
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[educationSlideIndex - 1].style.display = "block";
}

// JavaScript untuk Tombol Show More
document.getElementById("show-more-btn").addEventListener("click", function() {
  var hiddenRows = document.querySelectorAll('.hidden-rows');
  hiddenRows.forEach(function(row) {
    row.style.display = (row.style.display === 'none' || row.style.display === '') ? 'flex' : 'none';
    row.style.justifyContent = 'space-around'; // ensures space between elements when shown
  });
  this.innerText = this.innerText === 'Show More' ? 'Show Less' : 'Show More';
});

// JavaScript Efek pada Section Blog
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

document.getElementById("toggleButton").addEventListener("click", function () {
  const hiddenCertificates = document.querySelectorAll(".certificate-card.hidden");
  const buttonText = this.textContent;

  if (buttonText === "Show More") {
    hiddenCertificates.forEach(function (certificate) {
      certificate.style.display = "block";
    });
    this.textContent = "Show Less";
  } else {
    hiddenCertificates.forEach(function (certificate) {
      certificate.style.display = "none";
    });
    this.textContent = "Show More";
  }
});