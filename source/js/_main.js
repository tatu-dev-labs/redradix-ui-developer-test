$(window).resize(function(){
    if (window.matchMedia("(min-width: 992px)").matches) {
    $('.co-main-menu').removeClass("animated")
    $('.co-main-menu').removeClass("slideInRight")
    $('.co-main-menu').removeClass("slideOutRight")
    }
})

function showMainMenu(e,obj) {
    e.preventDefault();
    e.stopPropagation();
    $('.co-main-menu').removeClass("animated slideOutRight");
    $('.co-main-menu').addClass("animated slideInRight");
    $('.co-main-menu').css({
        display: "block",
        right: 0+"px"
    })
}

function hideMainMenu(e,obj) {
    e.preventDefault();
    e.stopPropagation();
    var coMainMenuWidth = $('.co-main-menu').outerWidth()
    $('.co-main-menu').removeClass("animated slideInRight");
    $('.co-main-menu').addClass("animated slideOutRight");
}