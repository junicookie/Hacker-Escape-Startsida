const hamburger = document.querySelector('#hamburger-btn');
const navLinks = document.querySelector('#nav-links');
const overlayToggle = document.querySelector('#overlay');

hamburger.addEventListener('click', function () {
    navLinks.classList.toggle('active');
    hamburger.classList.toggle('active');
    overlayToggle.classList.toggle('active');
});