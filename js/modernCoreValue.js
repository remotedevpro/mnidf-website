function openModal(id) {
  const modal = document.getElementById(id);
  if(modal){
    modal.style.display = "block";
  } else {
    console.error("Modal not found:", id);
  }
}

function closeModal() {
  document.querySelectorAll('.modal').forEach(m => {
    m.style.display = "none";
  });
}

/* CLOSE WHEN CLICKING OUTSIDE */
window.addEventListener("click", function(e){
  if(e.target.classList.contains('modal')){
    closeModal();
  }
});


