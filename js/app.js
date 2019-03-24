$('.nav-item').on('click', function (e) {
    // TODO: 用css判斷方法不好，改掉
    if ($('.navbar-toggler').css('display') != "none") {
        $('.navbar-toggler').click();
    }

    scrollTo(e.target.dataset.id);
});

function scrollTo(target){
    var offset;
    try{
        document.querySelector(target);
        offset = document.querySelector(target).offsetTop;
    }catch(err){
        return;
    }
    
    var scrollto = offset - 35; // minus fixed header height

    $('html, body').animate({
        scrollTop: scrollto
      }, 300);
 }

var sections = $('.container')
    , nav = $('.navbar-nav')
    , nav_height = nav.outerHeight();
var navItems = $(`.nav-item`);

$(document).ready(function () {
    setNavItemActive();
});

$(window).on('scroll', function () {
    setNavItemActive();
});

function setNavItemActive() {
    var cur_pos = $(this).scrollTop();
    sections.each(function () {
        var top = $(this).offset().top - nav_height,
            bottom = top + $(this).outerHeight();
        if (cur_pos >= top && cur_pos <= bottom) {
            navItems.removeClass('active');

            let id = $(this)[0].id;
            if(id) $(`.nav-item[data-id=${id}]`).addClass('active');
        }
    });
}