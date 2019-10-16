$(document).ready(function(){
    (function($) { fakewaffle.responsiveTabs(['sm','md']); })(jQuery);
});

$(window).resize(function(){
    if (window.matchMedia("(min-width: 992px)").matches) {
    $('.co-main-menu').removeClass("animated")
    $('.co-main-menu').removeClass("slideInRight")
    $('.co-main-menu').removeClass("slideOutRight")
    }
});

$('.co-simple-accordion .el-simple-accordion-view-more').on('click', function () {
    $('.collapse button i').css({
        transform: "translate(0)"
    });
    if ($(this).hasClass("collapsed")) {
        $(this).find('i').animate({  borderSpacing: 180 }, {
            step: function(now,fx) {
            $(this).css('-webkit-transform','rotate('+now+'deg)');
            $(this).css('-moz-transform','rotate('+now+'deg)');
            $(this).css('transform','rotate('+now+'deg)');
            },
            duration:'150'
        },'linear');
        $(this).prev().fadeOut(150);
    } else {
        $(this).find('i').animate({  borderSpacing: 0 }, {
            step: function(now,fx) {
            $(this).css('-webkit-transform','rotate('+now+'deg)');
            $(this).css('-moz-transform','rotate('+now+'deg)');
            $(this).css('transform','rotate('+now+'deg)');
            },
            duration:'150'
        },'linear');
        $(this).prev().fadeIn(150);
    }
});

function showMainMenu(e,obj) {
    e.preventDefault();
    e.stopPropagation();
    $('.co-main-menu').removeClass("animated slideOutRight");
    $('.co-main-menu').addClass("animated slideInRight");
    $('.co-main-menu').css({
        display: "block",
        right: 0+"px"
    });
}

function hideMainMenu(e,obj) {
    e.preventDefault();
    e.stopPropagation();
    var coMainMenuWidth = $('.co-main-menu').outerWidth()
    $('.co-main-menu').removeClass("animated slideInRight");
    $('.co-main-menu').addClass("animated slideOutRight");
}