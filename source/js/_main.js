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