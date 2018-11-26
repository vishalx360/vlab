var nav = document.getElementById('nav');
var title_bar = document.getElementById('title-bar');
var title_bar_btns = document.getElementById('title-bar-btns');
var title_bar_title = document.getElementById('title-bar-title')


title_bar.addEventListener('mouseover', function () {
    title_bar_btns.style.visibility = "visible"
    title_bar_btns.style.opacity = "1"
    title_bar.style.height = "30px"


})

title_bar.addEventListener('mouseleave', function () {
    title_bar_btns.style.visibility = "hidden"
    title_bar_btns.style.opacity = "0"
    title_bar.style.height = "15px"


})