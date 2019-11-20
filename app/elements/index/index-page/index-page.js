$(".index-page__parameter-list").mCustomScrollbar({
  scrollbarPosition: "outside",
  autoHideScrollbar: true,
  theme: "my-theme"
});

$("body").niceScroll({
  cursorcolor: "$gold",
  cursorborder: "1px solid $gold",
  cursorwidth: "1px",
});

$(".index-page__subparagraphs-info-text").niceScroll({
  cursorcolor: "$gold",
  cursorborder: "1px solid $gold",
  cursorwidth: "1px",
});

$(".modal__text").niceScroll({
  cursorcolor: "$gold",
  cursorborder: "1px solid $gold",
  cursorwidth: "1px",
});

// визуальное изменение соц сетей при наведении курсора
/* var typed = new Typed('.index-page__social-networks-text', {
  stringsElement: '.index-page__social-networks-text',
  typeSpeed: 30
}); */

$('.referral-program__list-item').hover(function () {
    $('.referral-program__text').addClass('referral-program__text_active');
    let dataLink = $(this).attr('data-link');
    $('.referral-program__text').text(dataLink);
    //run('.referral-program__text', 20);
  })
  .on('mouseleave blur', function () {
    $('.referral-program__text').removeClass('referral-program__text_active');
  });

// применение класса active к типам
$('.index-page__psychotype-list-item').click(function () {
  $('.index-page__psychotype-list-item').removeClass('index-page__psychotype-list-item_active');
  $(this).addClass('index-page__psychotype-list-item_active');
});

// присвоение класса при клике
$('.index-page__model-list-item').click(function () {
  $('.index-page__model-list-item').removeClass('index-page__model-list-item_active');
  $(this).addClass('index-page__model-list-item_active');
})


$('.index-page__input').bind("change keyup input click", function () {
  if (this.value.match(/[^1-9]/g)) {
    this.value = this.value.replace(/[^0-9]/g, '');
  }
});

// табы в параметрах
$('.index-page__parameter-list-item-header').click(function () {
  $(this).next(".index-page__subparagraphs-list").toggleClass('index-page__subparagraphs-list_active');
});

// скрытие окна с описанием подпараметра
$('.index-page__subparagraphs-info-close').click(function () {
  $('.index-page__subparagraphs-info').removeClass('index-page__subparagraphs-info_active');

  // при закрытии окна, убираеться со всех подпунктов класс active
  $('.index-page__subparagraphs-list-item').removeClass('index-page__subparagraphs-list-item_active');
});


// открытие окна при нажатии на подпараметр
$('.index-page__subparagraphs-list-item-text').click(function () {

  // проверяеться открыто ли окно с печ текстом, если нет то срабатывает скрипт, в противном случае нужно закрыть окно
  if ($('.index-page__subparagraphs-info_active').length === 0) {

    $('.index-page__subparagraphs-list-item').removeClass('index-page__subparagraphs-list-item_active');
    $(this).parents('.index-page__subparagraphs-list-item').addClass('index-page__subparagraphs-list-item_active');

    /*  $('.index-page__subparagraphs-list-item').click(function () {
       $('.index-page__subparagraphs-list-item').removeClass('index-page__subparagraphs-list-item_active');
       $(this).addClass('index-page__subparagraphs-list-item_active');
     }) */

    $('.index-page__subparagraphs-info').addClass('index-page__subparagraphs-info_active');
    let text = $(this).text();
    $('.index-page__subparagraphs-text').text(text);

    run('.index-page__subparagraphs-info-text');
  } else {

  }


});

function run(nameOf, speed = 1) {

  var a = new String;
  a = $(nameOf).text();
  $(nameOf).text('');
  var c = a.length;
  var j = 0;
  var percent = 0;
  var intervalListener = setInterval(function () {
    if (j < c) {
      percent = j * 100 / c;
      if (percent > 30) {
        speed = 8;
      }
      //console.log(percent);
      $(nameOf).text($(nameOf).text() + a[j]);

      // позволяет при закрытии окна по кнопке close остановить выполнение функции
      $('.index-page__subparagraphs-info-close').click(function () {
        $(nameOf).text(a);
        window.clearInterval(intervalListener);
      });

      $('.modal__close').click(function () {
        window.clearInterval(intervalListener);
        $('.modal__text').text(a);
      })

      j = j + 1;

    } else {
      //$(nameOf).removeClass('after')
      //$(".index-page__subparagraphs-info-text").addClass('index-page__subparagraphs-info-text_active')

    }
  }, speed);
}

var mySwiper = new Swiper('.slider', {
  // Optional parameters
  slidesPerView: 1,
  autoHeight: true,
  centeredSlides: true,
  centeredSlidesBounds: true,

  // Navigation arrows
  navigation: {
    nextEl: '.slider-btn-next',
    prevEl: '.slider-btn-prev',
  }
})