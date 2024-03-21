 //Header burger     
      let header__burger = document.querySelector('.burger');
        let header_menu = document.querySelector('.header__menu');
        let back = document.querySelector('body');


        header__burger.onclick = function(){
            header__burger.classList.toggle('active');
            header_menu.classList.toggle('active');
            back.classList.toggle('locked');
        }
//Header burger   
$(document).ready(function() {
  $(".set > a").on("click", function() {
    if ($(this).hasClass("active")) {
      $(this).removeClass("active");
      $(this)
        .siblings(".content")
        .slideUp(200);
      $(".set > a i")
        .removeClass("fa-minus")
        .addClass("fa-plus");
    } else {
      $(".set > a i")
        .removeClass("fa-minus")
        .addClass("fa-plus");
      $(this)
        .find("i")
        .removeClass("fa-plus")
        .addClass("fa-minus");
      $(".set > a").removeClass("active");
      $(this).addClass("active");
      $(".content").slideUp(200);
      $(this)
        .siblings(".content")
        .slideDown(200);
    }
  });
});

$('.button').click(function(){
  var buttonId = $(this).attr('id');
  $('#modal-container').removeAttr('class').addClass(buttonId);
  $('body').addClass('modal-active');
})

$('.closebtn').click(function(){
  
  $(this).addClass('out');
  $('#modal-container').removeAttr('class')
  $('body').removeClass('modal-active');
});



$(document).ready(function() {
  $(window).scroll(function() {
      $('.card').each(function() {
          if ($(this).isInViewport()) {
              $(this).addClass('active');
          } else {
              $(this).removeClass('active');
          }
      });
  });
});

$.fn.isInViewport = function() {
  var elementTop = $(this).offset().top;
  var viewportTop = $(window).scrollTop();
  var viewportBottom = viewportTop + $(window).height();
  return elementTop < viewportBottom;
};



$(document).ready(function() {
  $(window).scroll(function() {
      $('.team__wrap').each(function() {
          if ($(this).isInViewport()) {
              $(this).addClass('active');
          } else {
              $(this).removeClass('active');
          }
      });
  });
});

$.fn.isInViewport = function() {
  var elementTop = $(this).offset().top;
  var viewportTop = $(window).scrollTop();
  var viewportBottom = viewportTop + $(window).height();
  return elementTop < viewportBottom;
};
         
$(document).ready(function() {
  var lastScrollTop = 0;
  var delta = 5; // Мінімальна кількість пікселів, щоб вважати прокрутку
  var navbarHeight = $('.header').outerHeight();
  var threshold = 400; // Поріг висоти, вище якого виконується показ меню

  $(window).scroll(function(event) {
      var st = $(this).scrollTop();
      if (Math.abs(lastScrollTop - st) <= delta)
          return;

      if (st > lastScrollTop) {
          // Скролл вниз
          $('.header').removeClass('fixed');
      } else {
          // Скролл вверх
          if (st > threshold) {
              $('.header').addClass('fixed').slideDown(); // Додано плавне показання меню
          } else {
              $('.header').removeClass('fixed');
          }
      }
      lastScrollTop = st;
  });
});
// Отримуємо всі блоки контенту, до яких потрібно додати клас
const contentBlocks = document.querySelectorAll('.container_motion');

// Функція, яка перевіряє, чи елемент на екрані
function isElementInViewport(el) {
  const rect = el.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom -450 <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

// Функція, яка додає клас, якщо елемент на екрані
function addClassIfVisible() {
  contentBlocks.forEach((block) => {
    if (isElementInViewport(block)) {
      block.classList.add('show_content');
    }
  });
}

// Додаємо подію прокрутки сторінки
window.addEventListener('scroll', () => {
  // Викликаємо функцію, яка додає клас, якщо елемент на екрані
  addClassIfVisible();
});