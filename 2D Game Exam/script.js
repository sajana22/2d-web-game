function key(event) {

    if (event.which == 13) {
        if (rw == 0) {

            fid = f();

            rw = setInterval(run, 100);
            rs.play();

            bw = setInterval(b, 100);

            sw = setInterval(updateScore, 100)

            fw = setInterval(move, 100);

        }
    }

    if (event.which == 32) {


        if (jw == 0); {

            clearInterval(rw);
            rs.pause();

            jw = setInterval(jump, 100);
            js.play();
        }
    }

}

// fid - flame move worker

var fid = 0;

var u = 1000;

var ds = new Audio("dead.mp3");

var rs = new Audio("run.mp3");
rs.loop = true;

var js = new Audio("jump.mp3");

var ws = new Audio("Game win.wav");


function f() {

    for (var y = 0; y < 20; y++) {

        //a-image tag

        var a = document.createElement("img");

        a.src = "flame.gif";

        a.className = "f";

        a.style.marginLeft = u + "px";

        if (y <= 5) {

            u = u + 700;
        }

        if (y >= 6) {

            u = u + 600;
        }

        a.id = "d" + y;

        document.getElementById("b").appendChild(a);

    }
}

var r = 1;
var rw = 0;

function run() {

    var rimg = document.getElementById("boy");

    r = r + 1;

    if (r == 9) {
        r = 1;
    }

    rimg.src = "Run (" + r + ").png";

}


var bw = 0;

var p = 0;

function b() {

    p = p - 20;

    document.getElementById("b").style.backgroundPositionX = p + "px";

}

// sw - score worker

var sw = 0;
var q = 0;

function updateScore() {

    q = q + 10;

    document.getElementById("score").innerHTML = q;
}

// fw - flame worker

var fw = 0;

function move() {

    for (var y = 0; y < 20; y++) {

        var z = getComputedStyle(document.getElementById("d" + y));

        var p = parseInt(z.marginLeft);

        // p - flame

        p = p - 20;

        document.getElementById("d" + y).style.marginLeft = p + "px";


        // 60 160

        if (p >= 65 & p <= 155) {
            if (t > 375) {

                clearInterval(rw);
                rs.pause();

                clearInterval(bw);

                clearInterval(sw);

                clearInterval(fw);

                clearInterval(jw);
                js.pause();

                jw = -1;

                dw = setInterval(dead, 100);
                ds.play();
            }

            if (y == 20) {
                if (p == 0) {
                    clearInterval(bw);
                    clearInterval(rw);
                    rs.pause();
                    clearInterval(jw);
                    js.pause();
                    clearInterval(sw);
                    document.getElementById("boy").src = "Run (1).png";
                    document.getElementById("boy").style.marginTop = "415px";
                    document.getElementById("win").style.visibility = "visible";
                    document.getElementById("Win Score"), innerHTML = q;
                    ws.play();

                }
            }
        }
    }
}

    var jw = 0;
    var j = 1;

    var t = 415;

    function jump() {

        var jimg = document.getElementById("boy");

        if (j <= 6) {

            t = t - 30;

        }

        if (j >= 7) {

            t = t + 30;

        }

        jimg.style.marginTop = t + "px";

        j = j + 1;
        if (j == 13) {
            j = 1;

            clearInterval(jw);

            jw = 0;

            rw = setInterval(run, 100);
            rs.play();

            if (fid == 0) {
                fid = f();
            }

            if (bw == 0) {
                bw = setInterval(b, 100);
            }

            if (sw == 0) {
                sw = setInterval(updateScore, 100);
            }

            if (fw == 0) {
                fw = setInterval(move, 100);
            }

        }

        jimg.src = "Jump (" + j + ").png";

    }

    var dw = 0;
    var d = 1;

    function dead() {

        var dimg = document.getElementById("boy");

        d = d + 1;

        if (d == 11) {
            d = 10;

            dimg.style.marginTop = "415px";

            document.getElementById("end").style.visibility = "visible";

            document.getElementById("endscore").innerHTML = q;

        }

        dimg.src = "Dead (" + d + ").png";

    }

    function re() {
        location.reload();
    }

    function wn() {
        location.reload();
    }