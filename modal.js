// CV Modal
document.addEventListener("DOMContentLoaded", function () {
    const modal = document.getElementById("cvModal");
    const btn = document.querySelector(".btn-outline-cv");
    const span = document.getElementsByClassName("close")[0];
  
    btn.onclick = function () {
      modal.style.display = "block";
    }
  
    span.onclick = function () {
      modal.style.display = "none";
    }
  
    window.onclick = function (event) {
      if (event.target == modal) {
        modal.style.display = "none";
      }
    }
});
  
// Contact Popup
function togglePopup() {
  const popup = document.getElementById("contactPopup");
  popup.style.display = popup.style.display === "flex" ? "none" : "flex";
}

function closePopup(event) {
  const popup = document.getElementById("contactPopup");
  if (event.target === popup) {
    popup.style.display = "none";
  }
}
  