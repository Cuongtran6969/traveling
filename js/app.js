var swiper = new Swiper(".slide-content", {
    slidesPerView: 3,
    spaceBetween: 25,
    slidesPerGroup: 1,
    centerSlide: "true",
    fade: "true",
    grabCursor: "true",
    loop: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      dynamicBullets: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    autoplay: {
      delay: 5000,
    },
    breakpoints:{
      0: {
      slidesPerView: 1,
      },
      740: {
      slidesPerView: 2,
      },
      1024: {
      slidesPerView: 3,
      },
    },
  });
 const menuBtn = document.querySelector('#menu-btn')
 const navBar = document.querySelector('.navbar')
 const premium = document.querySelector('.navbar .premium__content .premium_detail img')
 const premiumLink = document.querySelector('.premium-title')
 
 menuBtn.onclick = function() {
  navBar.classList.toggle('active')
 }
 premium.onclick = function(e) {
  navBar.classList.toggle('active')
  e.stopPropagation();
 }