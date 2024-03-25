// burger-menu
document.getElementById('burger').addEventListener('click', function () {
  document.querySelector('header').classList.toggle('open');
});

//form-reservation
function initializeForm() {
  let today = new Date();
  let dd = String(today.getDate()).padStart(2, '0');
  let mm = String(today.getMonth() + 1).padStart(2, '0');
  let yyyy = today.getFullYear();
  today = yyyy + '-' + mm + '-' + dd;

  document.getElementById('datepicker').setAttribute('value', today);
  document.getElementById('datepicker2').setAttribute('value', today);

  $(function () {
    $('#datepicker').datepicker();
  });
  $(function () {
    $('#datepicker2').datepicker();
  });

  const btns = document.querySelectorAll('.form-reservation__counter-btn');

  btns.forEach(btn => {
    btn.addEventListener('click', () => {
      const counter = btn.parentNode.querySelector('.form-reservation__number');
      let data = parseInt(counter.textContent);

      if (btn.dataset.attr === 'increase') {
        data++;
      } else {
        if (data > 0) {
          data--;
        }
      }
      counter.textContent = data;
    });
  });
}

initializeForm();

// carousel
$(document).ready(function () {
  $('#carousel-rooms').owlCarousel({
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
  });

$('.custom-next-rooms').click(function () {
  $('#carousel-rooms').trigger('next.owl.carousel');
});

$('.custom-prev-rooms').click(function () {
  $('#carousel-rooms').trigger('prev.owl.carousel');
});



  $('#carousel-testimonials').owlCarousel({
    items: 1,
    nav: false,
    dots: false,
    loop: true,
    autoplay: true,
    margin: 30,
    autoplayTimeout: 10000,
    responsive: {
      1024: {
        items: 2,
      },
    },
  });

  $('.custom-next-testimonials').click(function () {
    $('#carousel-testimonials').trigger('next.owl.carousel');
  });

  $('.custom-prev-testimonials').click(function () {
    $('#carousel-testimonials').trigger('prev.owl.carousel');
  });
  
});

