/*動画 タップによる再生と停止*/
const video01 = document.querySelector('#video01');
let is_playing01 = false;

video01.addEventListener('click', () => {

    if (!is_playing01) {
        video01.play();
        is_playing01 = true;
    } else {
        video01.pause();
        is_playing01 = false;
    }
});

const video02 = document.querySelector('#video02');
let is_playing02 = false;
video02.pause();
video02.addEventListener('click', () => {
    if (!is_playing02) {
        video02.play();
        is_playing02 = true;
    } else {
        video02.pause();
        is_playing02 = false;
    }
});

const video03 = document.querySelector('#video03');
let is_playing03 = false;
video03.pause();
video03.addEventListener('click', () => {
    if (!is_playing03) {
        video03.play();
        is_playing03 = true;
    } else {
        video03.pause();
        is_playing03 = false;
    }
});

const video04 = document.querySelector('#video04');
let is_playing04 = false;
video04.pause();
video04.addEventListener('click', () => {
    if (!is_playing04) {
        video04.play();
        is_playing04 = true;
    } else {
        video04.pause();
        is_playing04 = false;
    }
});

const video05 = document.querySelector('#video05');
let is_playing05 = false;
video05.pause();
video05.addEventListener('click', () => {
    if (!is_playing05) {
        video05.play();
        is_playing05 = true;
    } else {
        video05.pause();
        is_playing05 = false;
    }
});

const video06 = document.querySelector('#video06');
let is_playing06 = false;
video06.pause();
video06.addEventListener('click', () => {
    if (!is_playing06) {
        video06.play();
        is_playing06 = true;
    } else {
        video06.pause();
        is_playing06 = false;
    }
});

const video07 = document.querySelector('#video07');
let is_playing07 = false;
video07.pause();
video07.addEventListener('click', () => {
    if (!is_playing07) {
        video07.play();
        is_playing07 = true;
    } else {
        video07.pause();
        is_playing07 = false;
    }
});

const video08 = document.querySelector('#video08');
let is_playing08 = false;
video08.pause();
video08.addEventListener('click', () => {
    if (!is_playing08) {
        video08.play();
        is_playing08 = true;
    } else {
        video08.pause();
        is_playing08 = false;
    }
});

const video09 = document.querySelector('#video09');
let is_playing09 = false;
video09.pause();
video09.addEventListener('click', () => {
    if (!is_playing09) {
        video09.play();
        is_playing09 = true;
    } else {
        video09.pause();
        is_playing09 = false;
    }
});


// /*動画位置座標による音声処理*/
// var flag01 = 0;
// var flag02 = 0;
// var tarv01 = document.getElementById("video01");
// var tarv02 = document.getElementById("video02");

// setInterval(function () {
//     var clientRect01 = tarv01.getBoundingClientRect();
//     var clientRect02 = tarv02.getBoundingClientRect();
//     // 画面内の位置
//     var y01 = clientRect01.top;
//     var y02 = clientRect02.top;
//     // ページ内の位置
//     // var py01 = window.pageYOffset + clientRect01.top;
//     console.log("video01=" + y01)
//     console.log("video02=" + y02)
//     console.log("flag01=" + flag01);
//     if (y01 > -350 && y01 < 462) {
//         flag01 = 1;
//     }

//     if (y01 < -350 || y01 > 462) {
//         video01.pause();
//         flag01 = 0;
//     }
//     if (y02 < -350 || y02 > 462) {
//         video02.pause();
//         flag02 = 0;
//     }

//     if (y01 >= -350 && y01 <= 462) {
//         video01.play();
//     }

//     if (y02 >= -350 && y02 <= 462) {
//         video02.play();
//     }
// }, 200);