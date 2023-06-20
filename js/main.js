$(document).ready(function () { 

    $('#project-slider').owlCarousel({
        autoWidth: true,
        autoplay:true,
        items:3,
        margin:100,
        center:true,
        loop:true,
        dots:true,
        autoplay:false,
        mouseDrag: false,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:1
            },
            1000:{
                items:3
            }
        }
    });


});

const MobileNav = () => {
    const x = document.getElementById("myNavs");
    
    if (x.style.display === "block") {
      x.style.width = "0";
      setTimeout(() => {
        x.style.display = "none";
      }, 300);
    } else {
      x.style.display = "block";
      setTimeout(() => {
        x.style.width = "70vw";
      }, 0);
    }
    
    x.style.transition = "width 0.3s";
  };
  
  const toggleMobileNav = () => {
    const mobileNav = document.querySelector('.mobile-nav');
    mobileNav.classList.toggle('open');
  };
  
  const mobileNavIcon = document.querySelector('.icon');
  mobileNavIcon.addEventListener('click', toggleMobileNav);
  
  const toggleIcon = () => {
    const navIcon = document.getElementById('navIcon');
    const currentSrc = navIcon.getAttribute('src');
    const newSrc = currentSrc === './image/menu-nav.svg' ? './image/close-icon.png' : './image/menu-nav.svg';
    navIcon.setAttribute('src', newSrc);
  };
  
  const toggleOverflow = () => {
    const body = document.querySelector('body');
    body.classList.toggle('overflow-hidden');
  };

  const togglePageBackground = () => {
    const overlay = document.querySelector('.overlay');
    const body = document.body;
  
    if (overlay) {
      body.removeChild(overlay);
      body.style.backgroundColor = '';
      body.style.overflow = '';
    } else {
      const overlay = document.createElement('div');
      overlay.classList.add('overlay');
      body.appendChild(overlay);
      body.style.backgroundColor = 'rgba(0, 0, 0, 0.55)';
      body.style.overflow = 'hidden';
    }
  };
  
