$('.nav-item').on('click', function () {
    // TODO: 用css判斷方法不好，改掉
    if ($('.navbar-toggler').css('display') != "none") {
        $('.navbar-toggler').click();
    }
});

var sections = $('.container')
    , nav = $('.navbar-nav')
    , nav_height = nav.outerHeight();
var navItems = $(`.nav-item`);

$(window).on('scroll', function () {
    var cur_pos = $(this).scrollTop();
    sections.each(function () {
        var top = $(this).offset().top - nav_height,
            bottom = top + $(this).outerHeight();
        if (cur_pos >= top && cur_pos <= bottom) {
            navItems.removeClass('active');

            let id = $(this)[0].id;
            $(`.nav-item[data-id=${id}]`).addClass('active');
        }
    });
});