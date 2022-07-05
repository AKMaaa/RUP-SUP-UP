$(function() {
    window.onload = () => {

    var height=$("header").height();
    console.log(height);
    $("main").css("margin-top", height+18);
    }
});