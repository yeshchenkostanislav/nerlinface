$('.sidebar__list-categories').on('click', '.sidebar__list-categories-item-title', function () {
    $('.sidebar__list-categories-item-title').removeClass('sidebar__list-categories-item-title_active');
    $(this).addClass('sidebar__list-categories-item-title_active');
    $('.sidebar__drop-down-list').removeClass('sidebar__drop-down-list_active');
    $(this).next('.sidebar__drop-down-list').addClass('sidebar__drop-down-list_active');
});

$('.sidebar__list-categories').on('click', '.sidebar__names-people-list-item', function () {
    $('.sidebar__names-people-list-item').removeClass('sidebar__names-people-list-item_active');
    $(this).toggleClass('sidebar__names-people-list-item_active');
});

// добавляем категорию в список
$('.sidebar__add-list-categories-item').on('click', '.sidebar__plus_list-categories-item', function () {

    if ($(this).prev('.sidebar__add-list-categories-item-input').val().length > 0) {
        let textInput = $(this).prev('.sidebar__add-list-categories-item-input').val();

        $('.sidebar__list-categories').append(`<div class="sidebar__list-categories-item">
  <div class="sidebar__list-categories-item-title">${textInput}</div>
  <div class="sidebar__drop-down-list">
  <div class="sidebar__names-people-list"></div>
  <div class="sidebar__add-names-people">
  <input class="sidebar__add-names-people-input"type="text" placeholder="добавить">
  <div class="sidebar__plus sidebar__plus_names-people-list-item">+</div>
  </div></div></div>`)
        $(this).prev('.sidebar__add-list-categories-item-input').val('');

    }

})

// добавляем категорию в список людей
$('.sidebar__list-categories').on('click', '.sidebar__plus_names-people-list-item', function () {

    if ($(this).prev('.sidebar__add-names-people-input').val().length > 0) {
        let textInput = $(this).prev('.sidebar__add-names-people-input').val();

        $(this).parent().prev('.sidebar__names-people-list').append(`<div class="sidebar__names-people-list-item">${textInput}</div>`)
        $(this).prev('.sidebar__add-names-people-input').val('');

    }

})


$('.index-page__menu').click(function () {
    $('.sidebar').toggleClass('sidebar_active');
    $('.sidebar__list-categories-item-title').each(function (i) {
        let $this = $(this);
        run($this, 140);
    });
});
$('.sidebar__close').click(function () {
    $('.sidebar').toggleClass('sidebar_active');
})

$('.index-page__menu').hover(function () {
    $('.index-page__header-info-text').toggleClass('index-page__header-info-text_active')
})

$('.sidebar__sidebar-search').keyup(function () {
    console.log($(this).val().length);

    if ($(this).val().length > 0) {
        $('.sidebar__list-categories').css({
            opacity: '0'
        });
        $('.sidebar__add-list-categories-item').css({
            opacity: '0'
        });
    } else {
        $('.sidebar__list-categories').css({
            opacity: '1'
        });
        $('.sidebar__add-list-categories-item').css({
            opacity: '1'
        });
    }
})