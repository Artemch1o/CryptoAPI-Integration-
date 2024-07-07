let gradients = [
  "linear-gradient(to right, #fc00ff, #00dbde)",
  "linear-gradient(to right, #ff512f, #dd2476)",
  "linear-gradient(to right, #f7971e, #00e6b6)",
  "linear-gradient(to right, #ff512f, #dd2476)",
  "linear-gradient(to right, #00b09b, #96c93d)",
  "linear-gradient(to right, #00c9ff, #ec2F4B)",
  "linear-gradient(to right, #ff512f, #dd2476)",
  "linear-gradient(to right, #fc4a1a, #f7b733)",
  "linear-gradient(to right, #34ebd4, #f9ca24)",
  "linear-gradient(to right, #fbc2eb, #a18cd1)",
  "linear-gradient(to right, #c471ed, #ff6e7f)",
  "linear-gradient(to right, #00c9ff, #92fe9d)",
  "linear-gradient(to right, #00b09b, #96c93d)",
  "linear-gradient(to right, #00c9ff, #92fe9d)",
  "linear-gradient(to right, #f7971e, #00e6b6)",
  "linear-gradient(to right, #00b09b, #96c93d)",
  "linear-gradient(to right, #00c9ff, #ec2F4B)",
  "linear-gradient(to right, #fc00ff, #00dbde)",
  "linear-gradient(to right, #ff512f, #dd2476)",
  "linear-gradient(to right, #00b09b, #96c93d)",
  "linear-gradient(to right, rgba(255, 152, 0, 0.8), rgba(255, 193, 7, 0.8))",
  "linear-gradient(to right, rgba(103, 58, 183, 0.8), rgba(156, 39, 176, 0.8))",
  "linear-gradient(to right, rgba(33, 150, 243, 0.8), rgba(3, 169, 244, 0.8))",
  "linear-gradient(to right, rgba(0, 188, 212, 0.8), rgba(0, 150, 136, 0.8))",
  "linear-gradient(to right, rgba(255, 235, 59, 0.8), rgba(255, 193, 7, 0.8))",
];

function initializeSwiper() {
  const swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 0,
    centeredSlides: true,
    loop: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    speed: 800,
    animationSpeed: 0.4,

    on: {
      slideChange: function () {
        this.slides.forEach((slide) => {
          slide.style.background =
            gradients[Math.floor(Math.random() * gradients.length)];
        });
      },
    },
  });
}
