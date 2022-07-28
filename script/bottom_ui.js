var first_height = 0;
var second_height = 0;

window.addEventListener("load", () => {
    let elem = document.getElementById("ui_bottom");
    let wh = window.innerHeight;
    first_height = wh;
    elem.style.top = wh - 80 + "px";
}, false);

setInterval(function () {
    let elem = document.getElementById("ui_bottom");
    let wh = window.innerHeight;
    second_height = wh;
    //console.log(second_height);
    elem.style.top = wh - 80 + "px";
}, 200);

/*いいねで応援バナー表示*/
function like_y() {
    $(document).ready(function () {
        //queue()で処理を溜めてdequeue()で実行。3秒経ったらfadeOut()
        $("#ba_y").fadeIn().queue(function () {
            setTimeout(function () {
                $("#ba_y").dequeue();
            }, 1800);
        });
        $("#ba_y").fadeOut();
    });
}

function like_r() {
    $(document).ready(function () {
        //queue()で処理を溜めてdequeue()で実行。3秒経ったらfadeOut()
        $("#ba_r").fadeIn().queue(function () {
            setTimeout(function () {
                $("#ba_r").dequeue();
            }, 1800);
        });
        $("#ba_r").fadeOut();
    });
}

function like_ak() {
    $(document).ready(function () {
        //queue()で処理を溜めてdequeue()で実行。3秒経ったらfadeOut()
        $("#ba_ak").fadeIn().queue(function () {
            setTimeout(function () {
                $("#ba_ak").dequeue();
            }, 1800);
        });
        $("#ba_ak").fadeOut();
    });
}

function like_aw() {
    $(document).ready(function () {
        //queue()で処理を溜めてdequeue()で実行。3秒経ったらfadeOut()
        $("#ba_aw").fadeIn().queue(function () {
            setTimeout(function () {
                $("#ba_aw").dequeue();
            }, 1800);
        });
        $("#ba_aw").fadeOut();
    });
}


function like_ru() {
    $(document).ready(function () {
        //queue()で処理を溜めてdequeue()で実行。3秒経ったらfadeOut()
        $("#ba_ru").fadeIn().queue(function () {
            setTimeout(function () {
                $("#ba_ru").dequeue();
            }, 1800);
        });
        $("#ba_ru").fadeOut();
    });
}

function like_i() {
    $(document).ready(function () {
        //queue()で処理を溜めてdequeue()で実行。3秒経ったらfadeOut()
        $("#ba_i").fadeIn().queue(function () {
            setTimeout(function () {
                $("#ba_i").dequeue();
            }, 1800);
        });
        $("#ba_i").fadeOut();
    });
}

function like_t() {
    $(document).ready(function () {
        //queue()で処理を溜めてdequeue()で実行。3秒経ったらfadeOut()
        $("#ba_t").fadeIn().queue(function () {
            setTimeout(function () {
                $("#ba_t").dequeue();
            }, 1800);
        });
        $("#ba_t").fadeOut();
    });
}


function like_re() {
    $(document).ready(function () {
        //queue()で処理を溜めてdequeue()で実行。3秒経ったらfadeOut()
        $("#ba_re").fadeIn().queue(function () {
            setTimeout(function () {
                $("#ba_re").dequeue();
            }, 1800);
        });
        $("#ba_re").fadeOut();
    });
}

function like_p() {
    $(document).ready(function () {
        //queue()で処理を溜めてdequeue()で実行。3秒経ったらfadeOut()
        $("#ba_p").fadeIn().queue(function () {
            setTimeout(function () {
                $("#ba_p").dequeue();
            }, 1800);
        });
        $("#ba_p").fadeOut();
    });
}