const button = document.getElementById("learnBtn");
console.log(button);
button.textContent = "Explore More";
button.addEventListener("click",function() {
    alert("Welcome to MNIDF 🚀");

} );

document.querySelector(".hero h2").textContent = "Welcome to the Future!";
document.querySelector(".hero h2").innerHTML = "Welcome to the Future!<br>MNIDF Unloading!";


document.querySelector(".hero h2").innerHTML = 'Welcome to Future! <span class= "sub-text">MNIDF Unloading...</span>';



let slides = document.querySelectorAll('.slide');
let current = 0;

function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.classList.remove('active');
    if (i === index) slide.classList.add('active');
  });
}

document.querySelector('.next').addEventListener('click', () => {
  current = (current + 1) % slides.length;
  showSlide(current);
});

document.querySelector('.prev').addEventListener('click', () => {
  current = (current - 1 + slides.length) % slides.length;
  showSlide(current);
});


setInterval(() => {
  current = (current + 1) % slides.length;
  showSlide(current);
}, 5000);

