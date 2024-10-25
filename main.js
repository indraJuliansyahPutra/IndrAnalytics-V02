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

// JavaScript for Modal
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