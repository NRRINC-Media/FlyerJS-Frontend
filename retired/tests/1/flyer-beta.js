// the Flyer Project, NRRINC Media (C) 2020, Apache V2  
console.log('css loaded');

$('head').append('<script type="text/javascript" crossorigin="anonymous" src="https://cdn.flyer.nrrinc.net/rtop.videoPlayer.1.0.2.js"></script>');
// put anything above === HERE === that needs to be loaded before hand. Such as CSS or scripts.
console.log('flyer init loaded');
// auto set ad
$(document).ready(function () {
    try {
        $("#flyer-m").append('<br><h2 class="flyer-title-m"><a href="#" id="flyer-link-a"><i id="flyer-Sponsor-name-m"></i></a></h2><div class="entry"><desc><img class="flyer-image-m" id="flyer-image-m" src="/src/home/shared/images/HER.PNG" alt="" title="this is not the right image.." style="display:none;" /><iframe id="flyer-frame-m" class="flyer-iframe9-m"></iframe><div class="myVideo" id="flyer_video-m" data-video="/src/flyer/video/sample.mp4" data-poster="/src/flyer/video/sample.jpg" data-type="video/mp4"></div><p class="flyer-desc" id="flyer-desc"></p></desc></div>');
        console.log("Flyer: markup Loaded")
        
    } catch (error) {
        console.log(error)
    }
    console.log("Flyer-markup Loaded.");
});
$(document).ready(function () {
    // Flyer items not locked due to Device
    $("#flyer-Sponsor-name-m").append('A Word From Our Sponsor:'); // top name
    $("#flyer-link-a").attr('a', '#'); // href ro sponsor
    $("#flyer-link-a").attr('target', '#'); // target _blank for best.
    $("#flyer-link-a").attr('alt', 'Link to Sponsor') // alt to href
    $("#flyer-desc").append('Your ad here'); // Bottom text
    $("#flyer-desc").attr('alt', 'ad desc.'); // bottom alt text
    if ("show-video" in localStorage) { 
        $("#flyer-video-m").show();
        $("#flyer-video-d").show();
        var vid=$("#flyer_video-m").RTOP_VideoPlayer({showFullScreen:!1,showTimer:!0,showSoundControl:!0,playInModal:!1});
        var vid=$("#flyer_video-d").RTOP_VideoPlayer({showFullScreen:!1,showTimer:!0,showSoundControl:!0,playInModal:!1});
        console.log('video shown');
       }
    else { 
        $("#flyer-video-m").hide();
        $("#flyer-video-d").hide();
         console.log('video hidden');
     };
    if ("show-img" in localStorage) { $("#flyer-img-m").show(); console.log('img shown'); } else { $("#flyer-img-m").hide(); console.log('img hidden'); };
    if ("show-frame" in localStorage) { $("#flyer-frame-m").show(); console.log('frame shown'); } else { $("#flyer-frame-m").hide(); console.log('frame hidden'); };
    // items locked to device
});
$(document).ready(function () {
    // device locked items
    $("#flyer-frame-m").attr('src', localStorage.getItem("flyer-frame-src")); // link to html, htm or img.
    $("#flyer-frame-d").attr('src', localStorage.getItem("flyer-frame-src")); // link to html, htm or img.
    $("#flyer-frame-m").attr('sandbox', ''); // edit if needed, to disable iframe scripts.
    $("#flyer-frame-d").attr('sandbox', ''); // edit if needed, to disable iframe scripts.
    $("#flyer-frame-m").attr('name', 'Flyer'); // name of iframe ALT
    $("#flyer-frame-d").attr('name', 'Flyer'); // name of iframe ALT
    $("#flyer-frame-m").attr('allowfullscreen', 'false');  // do not change.
    $("#flyer-frame-d").attr('allowfullscreen', 'false');  // do not change.
    $("#flyer-frame-d").attr('allowpaymentrequest', 'false'); // do not allow payments
    $("#flyer-frame-m").attr('allowpaymentrequest', 'false'); // do not allow payments
    $("#flyer-frame-d").attr('referrerpolicy', localStorage.getItem("flyer-frame-rp")); // what kind of URL is it? Be unsafe if you dont know.
    $("#flyer-frame-m").attr('referrerpolicy', localStorage.getItem("flyer-frame-rp")); // what kind of URL is it? Be unsafe if you dont know.
    // Sponsor image
    $("#flyer-image-d").attr('src', localStorage.getItem("flyer-img-src")); // img SRC Gif, webm, PNG or jpeg.
    $("#flyer-image-d").attr('title', localStorage.getItem("flyer-img-title")); // title of img, alt
    $("#flyer-image-d").attr('alt', localStorage.getItem("flyer-img-alt")); // alt of an alt
    $("#flyer-image-m").attr('src', localStorage.getItem("flyer-img-src")); // img SRC Gif, webm, PNG or jpeg.
    $("#flyer-image-m").attr('title', localStorage.getItem("flyer-img-title")); // title of img, alt
    $("#flyer-image-m").attr('alt',  localStorage.getItem("flyer-img-alt")); // alt of an alt
    // Sponsor video
    $("#flyer_video-d").attr('data-video', localStorage.getItem("flyer-video-data")); //mp4 only
    $("#flyer_video-m").attr('data-video', localStorage.getItem("flyer-video-data")); //mp4 only
    $("#flyer_video-d").attr('data-poster',localStorage.getItem("flyer-video-poster")); // poster "tumbnail/cover"
    $("#flyer_video-m").attr('data-poster', localStorage.getItem("flyer-video-poster")); // poster "tumbnail/cover"
    $("#flyer_video-d").attr('data-type', 'video/mp4'); // data type
    $("#flyer_video-m").attr('data-type', 'video/mp4'); // data type
    console.log('flyer conf loaded');
});
//load default settings
$(document).ready(function () {
    localStorage.setItem("flyer-Sponsor-name","A Word From Our Sponsor: Crispy"),localStorage.setItem("flyer-link-href","#"),localStorage.setItem("flyer-link-href-alt","alt text"),localStorage.setItem("flyer-iframe-m-src","flyer.htm"),localStorage.setItem("flyer-iframe-m-rp","unsafe-url"),localStorage.setItem("flyer-desc","Your ad desc here"),localStorage.setItem("flyer-desc-alt","Your ad alt for screen readers"),localStorage.setItem("flyer-video-data","#"),localStorage.setItem("flyer-video-poster","#"),localStorage.setItem("show-iframe","1"),localStorage.setItem("flyer-img-alt","text"),localStorage.setItem("flyer-img-title","title"),localStorage.setItem("flyer-img-src","link/to/png"),localStorage.setItem("flyer-video-data","link/to/mp4"),localStorage.setItem("flyer-frame-src","link/to/.htm/l"),localStorage.setItem("flyer-video-poster","link/to/png"),localStorage.setItem("flyer-frame-rp","unsafe-url");
});
// ad setting ON/OFF
$(document).ready(function ($) {
    var mode = localStorage.getItem('ad');
    if (mode)
        $('#flyer-m').addClass(mode);
    $('#flyer-d').addClass(mode);

    $("#nofly").click(function () {
        $("#flyer-m").addClass("hide");
        $("#flyer-d").addClass("hide");
        localStorage.setItem('ad', 'hide');
    });

    $("#yesfly").click(function () {
        $("#flyer-m").removeClass("hide");
        $("#flyer-d").removeClass("hide");
        localStorage.setItem('ad', null);
    });
});
console.log('flyer enable/disable conf loaded')
// <div id="flyer"></div>
// video stuff RTOP_VideoPlayer in LICENSE /src/flyer/video/LICENSE
$('head').append('<link rel="stylesheet" type="text/css" crossorigin="anonymous" href="/flyer.css"/>');// YEs there is an error for a Reason. having to do with CORS. i hate apache2.
$('head').append('<link rel="stylesheet" type="text/css" crossorigin="anonymous" href="https://cdn.nrrinc.net/flyer/rtop.videoPlayer.1.0.2.min.css" type="text/css"/>');
$('head').append('<link rel="stylesheet" type="text/css" crossorigin="anonymous" href="https://use.fontawesome.com/releases/v5.8.1/css/all.css" type="text/css">');