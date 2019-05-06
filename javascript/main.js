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
            }
            link.style.animation = `navLinkFade 0.5s ease foward ${index / 7 + 2}s` //Adds delay for each word

        });
        // Burger Animation
        burger.classList.toggle('toggleBurger');

    });


}


navSlide();
