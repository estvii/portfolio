const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');

    // Toggle Nav
    burger.addEventListener('click', () => {
        nav.classList.toggle('nav-active');
        // Animate Links
        navLinks.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = ''
            } else {
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.4}s` //Adds delay for each word
            }


        });
        // Burger Animation
        burger.classList.toggle('toggleBurger');

    });
}

const copyEmail = () => {
    let button = document.getElementById('copy-email');
    const email = "visteven76@gmail.com"

    // Creates a dummy input and assigns a value of email to it.
    // Which is then appended to the body for copy and removed afterward
    button.addEventListener('click', (e) => {
        e.preventDefault();
        const dummy_el = document.createElement('input');
        dummy_el.value = email;
        document.body.appendChild(dummy_el);
        dummy_el.select();
        document.execCommand("copy");
        document.body.removeChild(dummy_el);
        // Tool tip
        const tooltip = document.getElementById("myTooltip");
        tooltip.innerHTML = "Email Copied";

    })
}

function outFunc() {
    const tooltip = document.getElementById("myTooltip");
    tooltip.innerHTML = "Copy to clipboard";
}

navSlide();
copyEmail();
