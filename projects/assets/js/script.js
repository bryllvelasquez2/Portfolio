const toggleButton = document.getElementById('toggleButton');
const navigationMenu = document.querySelector('.nav_mobile');

toggleButton.addEventListener('click', () => {
    if (navigationMenu.style.transform === 'translateX(0%)') {
        navigationMenu.style.transform = 'translateX(-100%)';
    } else {
        navigationMenu.style.transform = 'translateX(0%)';
    }
});

const homeBtn = document.querySelector('.home-button');
const aboutBtn = document.querySelector('.about-button');
const servicesBtn = document.querySelector('.services-button');
const portfolioBtn = document.querySelector('.portfolio-button');
const contactBtn = document.querySelector('.contact-button');

const aboutBtn_m = document.getElementById('aboutbtn_m');
const servicesBtn_m = document.getElementById('servicesbtn_m');
const portfolioBtn_m = document.getElementById('portfoliobtn_m');
const contactBtn_m = document.getElementById('contactbtn_m');

const homeSection = document.querySelector('.home');
const aboutSection = document.querySelector('.about');
const servicesSection = document.querySelector('.services');
const portfolioSection = document.querySelector('.portfolio');
const contactSection = document.querySelector('.contact');

homeBtn.addEventListener('click', function() {
    homeSection.style.display = 'flex';
    aboutSection.style.display = 'none';
    servicesSection.style.display = 'none';
    portfolioSection.style.display = 'none';
    contactSection.style.display = 'none';
});

aboutBtn.addEventListener('click', function() {
    homeSection.style.display = 'none';
    aboutSection.style.display = 'flex';
    servicesSection.style.display = 'none';
    portfolioSection.style.display = 'none';
    contactSection.style.display = 'none';
});

servicesBtn.addEventListener('click', function() {
    homeSection.style.display = 'none';
    aboutSection.style.display = 'none';
    servicesSection.style.display = 'flex';
    portfolioSection.style.display = 'none';
    contactSection.style.display = 'none';
});

portfolioBtn.addEventListener('click', function() {
    homeSection.style.display = 'none';
    aboutSection.style.display = 'none';
    servicesSection.style.display = 'none';
    portfolioSection.style.display = 'flex';
    contactSection.style.display = 'none';
});

contactBtn.addEventListener('click', function() {
    homeSection.style.display = 'none';
    aboutSection.style.display = 'none';
    servicesSection.style.display = 'none';
    portfolioSection.style.display = 'none';
    contactSection.style.display = 'flex';
});

aboutBtn_m.addEventListener('click', function() {
    homeSection.style.display = 'none';
    aboutSection.style.display = 'flex';
    servicesSection.style.display = 'none';
    portfolioSection.style.display = 'none';
    contactSection.style.display = 'none';
});

servicesBtn_m.addEventListener('click', function() {
    homeSection.style.display = 'none';
    aboutSection.style.display = 'none';
    servicesSection.style.display = 'flex';
    portfolioSection.style.display = 'none';
    contactSection.style.display = 'none';
});

portfolioBtn_m.addEventListener('click', function() {
    homeSection.style.display = 'none';
    aboutSection.style.display = 'none';
    servicesSection.style.display = 'none';
    portfolioSection.style.display = 'flex';
    contactSection.style.display = 'none';
});

contactBtn_m.addEventListener('click', function() {
    homeSection.style.display = 'none';
    aboutSection.style.display = 'none';
    servicesSection.style.display = 'none';
    portfolioSection.style.display = 'none';
    contactSection.style.display = 'flex';
});

