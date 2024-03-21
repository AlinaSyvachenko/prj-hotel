document.getElementById('burger').addEventListener('click', function () {
  document.querySelector('header').classList.toggle('open');
});

$(document).ready(function () {
  $('.owl-carousel').owlCarousel({
    items: 1,
    nav: false, // Вимкніть вбудовані стрілки
    loop: true,
    dots: false,
    margin: 30,
    responsive: {
    1024: {
      items: 3,
    },
  },
    navText: [
      "<span class='custom-prev'>Previous</span>",
      "<span class='custom-next'>Next</span>",
    ], // Використовуйте власні стрілки
  });

  // Прив'яжіть функції до кнопок вашої каруселі
  $('.custom-next').click(function () {
    $('.owl-carousel').trigger('next.owl.carousel');
  });
  $('.custom-prev').click(function () {
    $('.owl-carousel').trigger('prev.owl.carousel');
  });
});


// $('.owl-carousel').owlCarousel({
//   items: 1,
//   // loop: true,
//   // margin: 30,
//   // nav: true,
//   // loop: false,
//   loop: false,
//   autoplay: true,
//   autoplayTimeout: 10000,
//   autoplayHoverPause: true,
//   infinite: true,
//   responsive: {
//     1024: {
//       items: 3,
//     },
//   },
// });
// $('.play').on('click', function () {
//   owl.trigger('play.owl.autoplay', [10000]);
// });
// $('.stop').on('click', function () {
//   owl.trigger('stop.owl.autoplay');
// });
