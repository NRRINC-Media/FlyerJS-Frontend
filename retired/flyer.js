// the Flyer Project, NRRINC Media (C) 2020, Apache V2
$('head').append('<link rel="stylesheet" href="/flyer.css" type="text/css" />');// AD CSS
//$('head').append('<link rel="stylesheet" href="https://cdn.flyer.nrrinc.net/rtop.videoPlayer.1.0.2.min.css" />');
//$('head').append('<link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.1/css/all.css">');
console.log('css loaded');
//$('head').append('<script type="text/javascript" src="https://cdn.flyer.nrrinc.net/rtop.videoPlayer.1.0.2.js"></script>');
//$(document).ready(function () {
//    var vid = $('#flyer_video-m').RTOP_VideoPlayer({
//        showFullScreen: true,
//        showTimer: true,
//        showSoundControl: true,
//        playInModal: false,
//    });
//});
// put anything above === HERE === that needs to be loaded before hand. Such as CSS or scripts.
console.log('flyer init loaded');
// auto set ad
//flyer mobile
$(document).ready(function() {
    //flyer css main
    // flyer
    $("#flyer-m").append('<br><h2 class="flyer-title-m"><a href="#" id="flyer-linka-m"><i id="fyler-Sponsor-name-m"></i></a></h2><div class="entry"><desc><img class="flyer-image-m" id="flyer-image-m" src="/src/home/shared/images/HER.PNG" alt="" title="this is not the right image.." style="display:none;" /><iframe id="flyer-frame-m" class="flyer-iframe9-m"></iframe><div class="myVideo" id="flyer_video-m" data-video="/src/flyer/video/sample.mp4" data-poster="/src/flyer/video/sample.jpg" data-type="video/mp4"></div><p class="flyer-desc-m" id="flyer-desc-m"></p></desc></div>');
    console.log('flyer markup Loaded');
    //Sponer name
    $("#fyler-Sponsor-name-m").append('A Word From Our Sponsor:'); // top name
    $("#flyer-linka-m").attr('a', '#'); // href ro sponsor
    $("#flyer-linka-m").attr('target', '#'); // target _blank for best.
    $("#flyer-linka-m").attr('alt', 'Link to Sponsor') // alt to href
    // Sponsor Iframe
    $("#flyer-frame-m").attr('src', 'https://cdn.flyer.nrrinc.net/flyer.htm'); // link to html, htm or img.
    $("#flyer-frame-m").attr('sandbox', ''); // edit if needed, to disable iframe scripts.
    $("#flyer-frame-m").attr('allowpaymentrequest', 'false'); // do not allow payments
    $("#flyer-frame-m").attr('name', 'Flyer'); // name of iframe ALT
    $("#flyer-frame-m").attr('allowfullscreen', 'false');  // do not change.
    $("#flyer-frame-m").attr('referrerpolicy', 'unsafe-url'); // what kind of URL is it? Be unsafe if you dont know.
    // Sponsor Dsec
    $("#flyer-desc-m").append('Your ad here'); // Bottom text
    $("#flyer-desc-m").attr('alt', 'ad desc.'); // bottom alt text
    // Sponsor image
    $("#flyer-image-m").attr('src',  ''); // img SRC Gif, webm, PNG or jpeg.
    $("#flyer-image-m").attr('title', ''); // title of img, alt
    $("#flyer-image-m").attr('alt', 'none'); // alt of an alt
    $("#flyer-image-m").hide();
    // Sponsor video
    $("#flyer_video-m").attr('data-video','#'); //mp4 only
    $("#flyer_video-m").attr('data-poster', '#'); // poster "tumbnail/cover"
    $("#flyer_video-m").attr('data-type', 'video/mp4'); // data type
    $("#flyer-video-m").hide();
    console.log('flyer conf loaded');
});
//flyer desktop
$(document).ready(function() {
    //flyer css main
    // flyer
    $("#flyer-d").append('<br><h2 class="flyer-title-d"><a href="#" id="flyer-linka-d"><i id="fyler-Sponsor-name-d"></i></a></h2><div class="entry"><desc><img class="flyer-image-d" id="flyer-image-d" src="/src/home/shared/images/HER.PNG" alt="" title="this is not the right image.." style="display:none;" /><iframe id="flyer-frame-d" class="flyer-iframe9-d"></iframe><div class="myVideo" id="flyer_video-d" data-video="/src/flyer/video/sample.mp4" data-poster="/src/flyer/video/sample.jpg" data-type="video/mp4"></div><p class="flyer-desc-d" id="flyer-desc-d"></p></desc></div>');
    console.log('flyer markup Loaded');
    //Sponer name
    $("#fyler-Sponsor-name-d").append('A Word From Our Sponsor:'); // top name
    $("#flyer-linka-d").attr('a', '#'); // href ro sponsor
    $("#flyer-linka-d").attr('target', '#'); // target _blank for best.
    $("#flyer-linka-d").attr('alt', 'Link to Sponsor') // alt to href
    // Sponsor Iframe
    $("#flyer-frame-d").attr('src', ''); // link to html, htm or img.
    $("#flyer-frame-d").attr('sandbox', ''); // edit if needed, to disable iframe scripts.
    $("#flyer-frame-d").attr('allowpaymentrequest', 'false'); // do not allow payments
    $("#flyer-frame-d").attr('name', 'Flyer'); // name of iframe ALT
    $("#flyer-frame-d").attr('allowfullscreen', 'false');  // do not change.
    $("#flyer-frame-d").attr('referrerpolicy', 'unsafe-url'); // what kind of URL is it? Be unsafe if you dont know.
    // Sponsor Dsec
    $("#flyer-desc-d").append('Your ad here'); // Bottom text
    $("#flyer-desc-d").attr('alt', 'ad desc.'); // bottom alt text
    // Sponsor image
    $("#flyer-image-d").attr('src',  ''); // img SRC Gif, webm, PNG or jpeg.
    $("#flyer-image-d").attr('title', ''); // title of img, alt
    $("#flyer-image-d").attr('alt', 'none'); // alt of an alt
    $("#flyer-image-d").hide();
    // Sponsor video
    $("#flyer_video-d").attr('data-video','#'); //mp4 only
    $("#flyer_video-d").attr('data-poster', '#'); // poster "tumbnail/cover"
    $("#flyer_video-d").attr('data-type', 'video/mp4'); // data type
    $("#flyer-video-d").hide();
    console.log('flyer conf loaded');
});
// ad setting ON/OFF
$(document).ready(function($) {
    var mode = localStorage.getItem('ad');
    if (mode)
        $('#flyer-m').addClass(mode);
        $('#flyer-d').addClass(mode);

    $("#nofly").click(function() {
        $("#flyer-m").addClass("hide");
        $("#flyer-d").addClass("hide");
        localStorage.setItem('ad', 'hide');
    });

    $("#yesfly").click(function() {
        $("#flyer-m").removeClass("hide");
        $("#flyer-d").removeClass("hide");
        localStorage.setItem('ad', null);
    });
});
console.log('flyer enable/disable conf loaded')
// <div id="flyer"></div>
// video stuff RTOP_VideoPlayer in LICENSE /src/flyer/video/LICENSE