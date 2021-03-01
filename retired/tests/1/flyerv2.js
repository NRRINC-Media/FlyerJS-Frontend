// the Flyer Project, NRRINC Media (C) 2020, Apache V2
$('head').append('<link rel="stylesheet" type="text/css" crossorigin="anonymous" href="https://cdn.flyer.nrrinc.net/flyer.css" type="text/css" />');// AD CSS
$('head').append('<link rel="stylesheet" type="text/css" crossorigin="anonymous" href="https://cdn.flyer.nrrinc.net/rtop.videoPlayer.1.0.2.min.css" />');
$('head').append('<link rel="stylesheet" type="text/css" crossorigin="anonymous" href="https://use.fontawesome.com/releases/v5.8.1/css/all.css">');
console.log('css loaded');
$('head').append('<script type="text/javascript" crossorigin="anonymous" src="https://cdn.flyer.nrrinc.net/rtop.videoPlayer.1.0.2.js"></script>');
// put anything above === HERE === that needs to be loaded before hand. Such as CSS or scripts.
console.log('flyer init loaded');
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
});