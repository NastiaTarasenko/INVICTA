
var menuOpen = document.querySelector('.hamburger-menu'),
    mainPageWrapper = document.querySelector('.wrapper'),
    menuClose = document.querySelector('.menu-close'),
    menuWrapper = document.querySelector('.menu-wrapper'),
    menuLogo = document.querySelector('.menu-logo'),
    about = document.querySelector('.about'),
    contacts = document.querySelector('.contacts'),
    portfolio = document.querySelector('.portfolio');

function toMainPage() {
    menuWrapper.style.display = 'none';
    mainPageWrapper.style.display = 'flex';
}

// opening hamburger menu
menuOpen.addEventListener('click', () => {
    mainPageWrapper.style.display = 'none';
    menuWrapper.style.display = 'flex';
});

// closing hamburger menu
menuClose.addEventListener('click', toMainPage);
menuLogo.addEventListener('click', toMainPage);
about.addEventListener('click', toMainPage);
contacts.addEventListener('click', toMainPage);
portfolio.addEventListener('click', toMainPage);

function validateEmail() {
    var emailInput = document.getElementById('email'),
        sendBtn = document.getElementById('submitButton');

    var errorImage = document.querySelector('.email-input-image-wrapper'),
        errorText = document.querySelector(".invalid-email-text");

    var validSyblols = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

    if (emailInput.value.match(validSyblols)) {
        errorText.style.display = 'none';
        errorImage.style.display = 'none';
        emailInput.style.border = '1px solid #878787';
        sendBtn.disabled = false;
    } else {
        emailInput.style.border = '1px solid #DE181F';
        errorText.style.display = 'block';
        errorImage.style.display = 'flex';
        sendBtn.disabled = true;
    }
}
// header animation

function scrollDetect(){
    var lastScroll = 0;
  
    window.onscroll = function() {
        let currentScroll = document.documentElement.scrollTop || document.body.scrollTop,
            header = document.querySelector(".header");
  
        if (currentScroll > 0 && lastScroll <= currentScroll) {
            lastScroll = currentScroll;
            header.style.top = `-${header.offsetHeight}px`;
        } else if (currentScroll < 219){
            lastScroll = currentScroll;
            header.style.top = '0';
            header.style.background = 'none';
            header.style.backdropFilter = 'none';
        } else {
            lastScroll = currentScroll;
            header.style.top = '0';
            header.style.background = 'rgba(16, 16, 16, 0.20)';
            header.style.backdropFilter = 'blur(5px)';
        }
    };
}
  
scrollDetect();