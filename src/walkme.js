/**
 * App
 */



$('.toggle').click(function () {
    $(this).toggleClass("on");
    $("#walking_man").toggleClass("on")
});

/*
$('.try .choices button').click(function () {
    $('.try .form').slideDown();
    $('.try button').removeClass('active');
    $(this).addClass('active');
    $('#objet-requete').val($(this).attr('data-title'));
    ga('send', 'button ' + $(this).attr('data-title'));
});
*/

$('[data-show]').click(function () {
    $($(this).attr('data-show')).show();
});

$('[data-hide]').click(function () {
    $($(this).attr('data-hide')).hide();
});

$('.try form').validate({
    submitHandler: function (form, event) {

        $.ajax({
            url: "/ticket.php",
            data: $(form).serializeArray(),
            dataType: 'json',
            method: 'post',
            success: function () {
                alert('message bien envoyé');
            }
        });
        return false;
    }
});

/**
 Animation
 **/

var canvas, stage, exportRoot, anim_container, dom_overlay_container, fnStartAnimation;
function init() {
    canvas = document.getElementById("canvas");
    anim_container = document.getElementById("animation_container");
    dom_overlay_container = document.getElementById("dom_overlay_container");
    var comp = AdobeAn.getComposition("F582745C6E7A432797CCC2D9C760241F");
    var lib = comp.getLibrary();
    handleComplete({}, comp);
}
function handleComplete(evt, comp) {
    //This function is always called, irrespective of the content. You can use the variable "stage" after it is created in token create_stage.
    var lib = comp.getLibrary();
    var ss = comp.getSpriteSheet();
    exportRoot = new lib.Walkme_anim_marches_voute();
    stage = new lib.Stage(canvas);
    stage.addChild(exportRoot);
    //Registers the "tick" event listener.
    fnStartAnimation = function () {
        createjs.Ticker.setFPS(lib.properties.fps);
        createjs.Ticker.addEventListener("tick", handleTick)
        function handleTick(event) {
            var cameraInstance = exportRoot.___camera___instance;
            if (cameraInstance) {
                if (cameraInstance._off != null && cameraInstance._off == true)
                    exportRoot.transformMatrix = new createjs.Matrix2D();
                else {
                    var mat = cameraInstance.getMatrix();
                    var stageCenter = {'x': lib.properties.width / 2, 'y': lib.properties.height / 2};
                    mat.tx -= stageCenter.x;
                    mat.ty -= stageCenter.y;
                    var inverseMat = mat.invert();
                    inverseMat.prependTransform(stageCenter.x, stageCenter.y, 1, 1, 0, 0, 0, 0, 0);
                    inverseMat.appendTransform(-stageCenter.x, -stageCenter.y, 1, 1, 0, 0, 0, 0, 0);
                    exportRoot.transformMatrix = inverseMat;
                }
            }
            stage.update();
        }
    }
    //Code to support hidpi screens and responsive scaling.
    function makeResponsive(isResp, respDim, isScale, scaleType) {
        var lastW, lastH, lastS = 1;
        window.addEventListener('resize', resizeCanvas);
        resizeCanvas();
        function resizeCanvas() {
            var w = lib.properties.width, h = lib.properties.height;
            var iw = window.innerWidth, ih = window.innerHeight;
            var pRatio = window.devicePixelRatio || 1, xRatio = iw / w, yRatio = ih / h, sRatio = 1;
            if (isResp) {
                if ((respDim == 'width' && lastW == iw) || (respDim == 'height' && lastH == ih)) {
                    sRatio = lastS;
                }
                else if (!isScale) {
                    if (iw < w || ih < h)
                        sRatio = Math.min(xRatio, yRatio);
                }
                else if (scaleType == 1) {
                    sRatio = Math.min(xRatio, yRatio);
                }
                else if (scaleType == 2) {
                    sRatio = Math.max(xRatio, yRatio);
                }
            }
            canvas.width = w * pRatio * sRatio;
            canvas.height = h * pRatio * sRatio;
            canvas.style.width = dom_overlay_container.style.width = anim_container.style.width = w * sRatio + 'px';
            canvas.style.height = anim_container.style.height = dom_overlay_container.style.height = h * sRatio + 'px';
            stage.scaleX = pRatio * sRatio;
            stage.scaleY = pRatio * sRatio;
            lastW = iw;
            lastH = ih;
            lastS = sRatio;
        }
    }

    makeResponsive(false, 'both', false, 1);
    AdobeAn.compositionLoaded(lib.properties.id);
    fnStartAnimation();
}

$('#canvas, #dom_overlay_container, #animation_container').css('background', 'transparent');

init();


/**
 Google Analytics
 **/
(function (i, s, o, g, r, a, m) {
    i['GoogleAnalyticsObject'] = r;
    i[r] = i[r] || function () {
            (i[r].q = i[r].q || []).push(arguments)
        }, i[r].l = 1 * new Date();
    a = s.createElement(o),
        m = s.getElementsByTagName(o)[0];
    a.async = 1;
    a.src = g;
    m.parentNode.insertBefore(a, m)
})(window, document, 'script', 'https://www.google-analytics.com/analytics.js', 'ga');

ga('create', 'UA-88974858-2', 'auto');
ga('send', 'pageview');


$('#reload').click(function () {
    console.info("click");
    $.ajax("/reload.php").done(function (data) {
        console.info("success", data);

        window.location.reload();
    })
});

var tag = document.createElement('script');
tag.src = "https://www.youtube.com/player_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

// Replaces the 'ytplayer' element with an <iframe> and
// YouTube player after the API code downloads.
var player;

function onYouTubePlayerAPIReady() {
    player = new YT.Player('video-embed', {
        height: '416',
        width: '740',
        videoId: 'sVbtKRjkcHI',
        playerVars: {
            autoplay: 1,
            controls: 0,
            disablekb: 0,
            hl: '{{page_locale}}',
            loop: 1,
            modestbranding: 1,
            showinfo: 0,
            autohide: 1,
            color: 'white',
            iv_load_policy: 3,
            theme: 'light',
            rel: 0
        },
        events: {
            'onReady': onPlayerReady
        }
    });
}


function onPlayerReady(event) {
    player.mute();
}

/**
 * Facebook
 */

!function(f,b,e,v,n,t,s)
{if(f.fbq)return;n=f.fbq=function(){n.callMethod?
    n.callMethod.apply(n,arguments):n.queue.push(arguments)};
    if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
    n.queue=[];t=b.createElement(e);t.async=!0;
    t.src=v;s=b.getElementsByTagName(e)[0];
    s.parentNode.insertBefore(t,s)}(window,document,'script',
    'https://connect.facebook.net/en_US/fbevents.js');
fbq('init', '1795402577382050');
fbq('track', 'PageView');

/**
 Hotjar
 **/
(function(h,o,t,j,a,r){
    h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
    h._hjSettings={hjid:654555,hjsv:6};
    a=o.getElementsByTagName('head')[0];
    r=o.createElement('script');r.async=1;
    r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
    a.appendChild(r);
})(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');