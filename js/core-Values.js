 const cards = document.querySelectorAll('.value-card');

window.addEventListener('scroll', () => {
  cards.forEach(card => {
    const top = card.getBoundingClientRect().top;
    if(top < window.innerHeight - 50){
      card.classList.add('show');
    }
  });
});