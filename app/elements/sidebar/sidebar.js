$('.index-page__list-categories').on('click', '.index-page__list-categories-item-title', function() {
    $('.index-page__list-categories-item-title').removeClass('index-page__list-categories-item-title_active');
    $(this).addClass('index-page__list-categories-item-title_active');
    $('.index-page__drop-down-list').removeClass('index-page__drop-down-list_active');
    $(this).next('.index-page__drop-down-list').addClass('index-page__drop-down-list_active');
});

$('.index-page__names-people-list').on('click', '.index-page__names-people-list-item', function() {
    $('.index-page__names-people-list-item').removeClass('index-page__names-people-list-item_active');
    $(this).toggleClass('index-page__names-people-list-item_active');
});

// добавляем категорию в список
$('.index-page__add-list-categories-item').on('click', '.index-page__plus_list-categories-item', function() {

    if($(this).prev('.index-page__add-list-categories-item-input').val().length > 0) {
        let textInput = $(this).prev('.index-page__add-list-categories-item-input').val();

        $('.index-page__list-categories').append(`<div class="index-page__list-categories-item">
  <div class="index-page__list-categories-item-title">${textInput}</div>
  <div class="index-page__drop-down-list">
  <div class="index-page__names-people-list"></div>
  <div class="index-page__add-names-people">
  <input class="index-page__add-names-people-input"type="text" placeholder="добавить">
  <div class="index-page__plus index-page__plus_names-people-list-item">+</div>
  </div></div></div>`)
        $(this).prev('.index-page__add-list-categories-item-input').val('');

    }

})

// добавляем категорию в список людей
$('.index-page__list-categories').on('click', '.index-page__plus_names-people-list-item', function() {

    if($(this).prev('.index-page__add-names-people-input').val().length > 0) {
        let textInput = $(this).prev('.index-page__add-names-people-input').val();

        $(this).parent().prev('.index-page__names-people-list').append(`<div class="index-page__names-people-list-item">${textInput}</div>`)
        $(this).prev('.index-page__add-names-people-input').val('');

    }

})


$('.index-page__menu').click(function() {
    $('.index-page__sidebar').toggleClass('index-page__sidebar_active');
    $('.index-page__list-categories-item-title').each(function(i) {
        let $this = $(this);
        run($this, 140);
    });
});
$('.index-page__sidebar-close').click(function() {
    $('.index-page__sidebar').toggleClass('index-page__sidebar_active');
})