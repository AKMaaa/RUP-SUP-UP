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