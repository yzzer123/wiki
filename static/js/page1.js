

window.onscroll = function () {
    var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
    var menu = document.getElementsByClassName('article-menu')[0];
    var menu_titles = document.getElementsByClassName('menu-titles');

    // 导航栏附着判断
    if (scrollTop>600&&scrollTop<=5000) {

        menu.style.opacity = '1';
    } else if (scrollTop <= 600) {
        menu.style.opacity = '0';
    } else {
        menu.style.opacity = '0';
    }
    // 导航栏主题颜色判断
    if (scrollTop < 700) {
        menu_titles[0].style.borderWidth = "0px";
        menu_titles[0].style.fontWeight = 'normal';
    } else if (scrollTop >= 700 && scrollTop < 1800) {
        menu_titles[0].style.borderWidth = "3px";
        menu_titles[0].style.fontWeight = 'bold';
        menu_titles[1].style.borderWidth = "0px";
        menu_titles[1].style.fontWeight = 'normal';
    } else if (scrollTop >= 1800 && scrollTop < 2450) {

        menu_titles[0].style.borderWidth = "0px";
        menu_titles[0].style.fontWeight = 'normal';
        menu_titles[1].style.borderWidth = "3px";
        menu_titles[1].style.fontWeight = 'bold';
        menu_titles[2].style.borderWidth = "0px";
        menu_titles[2].style.fontWeight = 'normal';
    }  else if (scrollTop >= 2450) {

        menu_titles[1].style.borderWidth = "0px";
        menu_titles[1].style.fontWeight = 'normal';

        menu_titles[2].style.borderWidth = "3px";
        menu_titles[2].style.fontWeight = 'bold';
    }


}
