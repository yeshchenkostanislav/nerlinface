$(".index-page__parameter-list").mCustomScrollbar({
  scrollbarPosition: "outside",
  autoHideScrollbar: true,
  theme: "my-theme"
});
$(".index-page__subparagraphs-info-text").niceScroll({
  cursorcolor: "17ddff",
  cursorborder: "1px solid #17ddff",
  cursorwidth: "1px",
});
$(".modal__text").niceScroll({
  cursorcolor: "17ddff",
  cursorborder: "1px solid #17ddff",
  cursorwidth: "1px",
});

// визуальное изменение соц сетей при наведении курсора
/* var typed = new Typed('.index-page__social-networks-text', {
  stringsElement: '.index-page__social-networks-text',
  typeSpeed: 30
}); */

$('.index-page__social-networks-list-item').hover(function () {
    $('.index-page__social-networks-text').addClass('index-page__social-networks-text_active');

    run('.index-page__social-networks-text', 20);
  })
  .on('mouseleave blur', function () {
    $('.index-page__social-networks-text').removeClass('index-page__social-networks-text_active');
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

$('.index-page__subparagraphs-list-item').click(function () {

  $('.index-page__subparagraphs-list-item').removeClass('index-page__subparagraphs-list-item_active');
  $(this).addClass('index-page__subparagraphs-list-item_active');
})

// скрытие окна с описанием подпараметра
$('.index-page__subparagraphs-info-close').click(function () {
  $('.index-page__subparagraphs-info').removeClass('index-page__subparagraphs-info_active');

  // при закрытии окна, убираеться со всех подпунктов класс active
  $('.index-page__subparagraphs-list-item').removeClass('index-page__subparagraphs-list-item_active');
});

// открытие окна при нажатии на подпараметр
$('.index-page__subparagraphs-list-item-text').click(function () {

  $('.index-page__subparagraphs-info').addClass('index-page__subparagraphs-info_active');
  let text = $(this).text();
  $('.index-page__subparagraphs-text').text(text);

  run('.index-page__subparagraphs-info-text');
});


// самопечатающийся текст в мод окне
$('.index-page__terms-use .index-page__terms-use-link').click(function () {
  run('.modal__text');
})


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