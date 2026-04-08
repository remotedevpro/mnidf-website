const texts = document.querySelectorAll('.hero-text');
let index = 0;

function switchText() {
    texts.forEach(text => text.classList.remove('active'));

    index = (index + 1) % texts.length;

    texts[index].classList.add('active');
}

/* INITIAL STATE */
texts[0].classList.add('active');

/* AUTO SWAP EVERY 4 SECONDS */
setInterval(switchText, 4000);
