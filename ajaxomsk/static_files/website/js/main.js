
new WOW().init();

var mySwiper1 = new Swiper(".swiper-container1", {
  spaceBetween: 30,
  centeredSlides: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".photo-pagination",
    bulletClass: "photo-bullet",
    bulletActiveClass: "photo-bullet-active",
    clickable: true,
    loop: true,
  },
});

var mySwiper2 = new Swiper(".swiper-container2", {
  spaceBetween: 30,
  centeredSlides: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".games-pagination",
    bulletClass: "games-bullet",
    bulletActiveClass: "games-bullet-active",
    clickable: true,
    loop: true,
  },
});
