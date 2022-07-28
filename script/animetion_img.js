// 動きのきっかけとなるアニメーションの名前を定義
function fadeAnime() {

    // ふわっ
    $('.fadeUpTrigger').each(function () { //fadeUpTriggerというクラス名が
        var elemPos = $(this).offset().top - 5;//要素より、50px上の
        var scroll = $(window).scrollTop();
        var windowHeight = $(window).height();
        if (scroll >= elemPos - windowHeight) {
            $(this).addClass('img_anime_box');// 画面内に入ったらクラス名を追記
        } else {
            $(this).removeClass('img_anime_box');// 画面外に出たらクラス名を外す
        }
    });
}

// 画面をスクロールをしたら動かしたい場合の記述
$(window).scroll(function () {
    fadeAnime();/* アニメーション用の関数を呼ぶ*/
});

$(window).on('load', function () {
    fadeAnime();/* アニメーション用の関数を呼ぶ*/
});

function fadeAnime2() {

    // ふわっ
    $('.fadeUpTrigger2').each(function () { //fadeUpTriggerというクラス名が
        var elemPos = $(this).offset().top - 5;//要素より、50px上の
        var scroll = $(window).scrollTop();
        var windowHeight = $(window).height();
        if (scroll >= elemPos - windowHeight) {
            $(this).addClass('img_anime_box2');// 画面内に入ったらクラス名を追記
        } else {
            $(this).removeClass('img_anime_box2');// 画面外に出たらクラス名を外す
        }
    });
}

// 画面をスクロールをしたら動かしたい場合の記述
$(window).scroll(function () {
    fadeAnime2();/* アニメーション用の関数を呼ぶ*/
});

$(window).on('load', function () {
    fadeAnime2();/* アニメーション用の関数を呼ぶ*/
});
