// Theme Toggle
const themeToggle = document.getElementById('theme-toggle');
const body = document.body;

function setTheme(theme) {
  body.className = theme;
  localStorage.setItem('theme', theme);
  themeToggle.innerHTML = theme === 'light'
    ? '<i class="fas fa-sun"></i>'
    : '<i class="fas fa-moon"></i>';
}

const savedTheme = localStorage.getItem('theme');
if (savedTheme) setTheme(savedTheme);
else setTheme('light');

themeToggle.addEventListener('click', () => {
  const newTheme = body.className === 'light' ? 'dark' : 'light';
  setTheme(newTheme);
});

// Show More/Less toggle for certificates and content
document.getElementById("show-more-btn").addEventListener("click", function() {
  const hiddenRows = document.querySelectorAll('.hidden-rows');
  hiddenRows.forEach(function(row) {
    row.style.display = (row.style.display === 'none' || row.style.display === '') ? 'flex' : 'none';
    row.style.justifyContent = 'space-around';
  });
  this.innerText = this.innerText === 'Show More' ? 'Show Less' : 'Show More';
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
