$(function () {
    window.onload = () => {

        var height = $("header").height();
        //console.log(height);
        $("main").css("margin-top", height + 8);
        // 全画面表示
        element.requestFullscreen();
    }
});


/*drop down menu*/
$('.select').on('click', '.placeholder', function () {
    var parent = $(this).closest('.select');
    if (!parent.hasClass('is-open')) {
        parent.addClass('is-open');
        $('.select.is-open').not(parent).removeClass('is-open');
    } else {
        parent.removeClass('is-open');
    }
}).on('click', 'ul>li', function () {
    var parent = $(this).closest('.select');
    parent.removeClass('is-open').find('.placeholder').text($(this).text());
    parent.find('input[type=hidden]').attr('value', $(this).attr('data-value'));
    console.log($(this).attr('data-value'));
    let diamond = document.getElementById('diamond_rapper');
    if ($(this).attr('data-value') === 'ダイヤ') {
        diamond.style.display = 'block';
    } else {
        diamond.style.display = 'none';
    }

    let platinum = document.getElementById('platinum_rapper');
    if ($(this).attr('data-value') === 'プラチナ') {
        platinum.style.display = 'block';
    } else {
        platinum.style.display = 'none';
    }

    let gold = document.getElementById('gold_rapper');
    if ($(this).attr('data-value') === 'ゴールド') {
        gold.style.display = 'block';
    } else {
        gold.style.display = 'none';
    }
});

var first_height = 0;
var second_height = 0;

window.addEventListener("load", () => {
    let elem = document.getElementById("ui_bottom");
    let wh = window.innerHeight;
    first_height = wh;
    elem.style.top = wh - 80 + "px";
}, false);

window.addEventListener("resize", () => {
    let elem = document.getElementById("ui_bottom");
    let wh = window.innerHeight;
    second_height = wh;
    console.log(second_height);
    elem.style.top = wh - 80 + "px";
}, false);

const video = document.querySelector('#video01');
const video_btn = document.querySelector('#video-btn');
let is_playing = false;

video_btn.addEventListener('click', () => {
    if (!is_playing) {
        video.play();
        is_playing = true;
    } else {
        video.pause();
        is_playing = false;
    }
});

