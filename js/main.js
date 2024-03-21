document.getElementById('burger').addEventListener('click', function () {
  document.querySelector('header').classList.toggle('open');
});

$(document).ready(function () {
  $('.owl-carousel').owlCarousel({
    items: 1,
    nav: false, 
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
    ],
  });


  $('.custom-next').click(function () {
    $('.owl-carousel').trigger('next.owl.carousel');
  });
  $('.custom-prev').click(function () {
    $('.owl-carousel').trigger('prev.owl.carousel');
  });
});


