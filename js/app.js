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
    showMascots();
});

$(window).on('scroll', function () {
    setNavItemActive();
    
});

function setNavItemActive() {
    var cur_pos = $(this).scrollTop();
    sections.each(function () {
        var top = $(this).offset().top - nav_height*5,
            bottom = top + $(this).outerHeight();
        if (cur_pos >= top && cur_pos <= bottom) {
            navItems.removeClass('active');

            let id = $(this)[0].id;
            if(id) $(`.nav-item[data-id=${id}]`).addClass('active');
        }
    });
}

function openFBPagePlugin(){
    PopupCenter("https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fzerowastetaiwan%2F&tabs=timeline%2Cmessages%2Cevents&width=340&height=500&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId=706162263119818", "", 340, 500);
  }
  
  function PopupCenter(url, title, w, h) {
      // Fixes dual-screen position                         Most browsers      Firefox
      var dualScreenLeft = window.screenLeft != undefined ? window.screenLeft : window.screenX;
      var dualScreenTop = window.screenTop != undefined ? window.screenTop : window.screenY;
  
      var width = window.innerWidth ? window.innerWidth : document.documentElement.clientWidth ? document.documentElement.clientWidth : screen.width;
      var height = window.innerHeight ? window.innerHeight : document.documentElement.clientHeight ? document.documentElement.clientHeight : screen.height;
  
      var systemZoom = width / window.screen.availWidth;
  var left = (width - w) / 2 / systemZoom + dualScreenLeft
  var top = (height - h) / 2 / systemZoom + dualScreenTop
      var newWindow = window.open(url, title, 'scrollbars=yes, width=' + w + ', height=' + h + ', top=' + top + ', left=' + left);
  
      // Puts focus on the newWindow
      if (window.focus) newWindow.focus();
  }

function showMascots(){
    const isAprilFoolsDay = new Date().getMonth() === 3 && new Date().getDate() === 1;
    if((isAprilFoolsDay && sessionStorage.getItem("hideMascots")!=="true") || window.location.hash==="#aprilFoolsDay"){
        document.querySelector(".mascots").style.display = "flex";
    }else{
        document.querySelector(".mascots").style.display = "none";
    }
}
function hideMascots(){
    sessionStorage.setItem("hideMascots", true);
    document.querySelector(".mascots").style.display = "none";
    document.querySelector(".april-fools-day").style.display = "block";
}
function hideAprilFoolsDayText(){
    document.querySelector(".april-fools-day").style.display = "none";
}