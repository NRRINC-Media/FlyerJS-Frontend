$(document).ready(function() {
    //flyer css main
    // flyer
    $("#flyer-m").append('<br><h2 class="flyer-title-m"><a href="#" id="flyer-link-href"><i id="flyer-Sponsor-name"></i></a></h2><div class="entry"><desc><img class="flyer-image-m" id="flyer-image-m" src="/src/home/shared/images/HER.PNG" alt="" title="this is not the right image.." style="display:none;" /><iframe id="flyer-frame-m" class="flyer-iframe9-m"></iframe><div class="myVideo" id="flyer_video-m" data-video="/src/flyer/video/sample.mp4" data-poster="/src/flyer/video/sample.jpg" data-type="video/mp4"></div><p class="flyer-desc-m" id="flyer-desc-m"></p></desc></div>');
    console.log('flyer markup Loaded');
    //Sponer name
    $("#flyer-Sponsor-name").append(localStorage.getItem("flyer-Sponsor-name")); // top name
    localStorage.setItem("flyer-Sponsor-name", "A Word From Our Sponsor:");
    $("#flyer-link-href").attr('a', localStorage.getItem("flyer-link-href")); // href ro sponsor
    localStorage.setItem("flyer-link-href", "#");
    $("#flyer-linka-href").attr('target', '_blank'); // target _blank for best.
    $("#flyer-linka-href").attr('alt', 'Link to Sponsor'); // alt to href
    localStorage.setItem("flyer-link-href-alt","alt text");
    // Sponsor Iframe
    $("#flyer-frame-m").attr('src', localStorage.getItem("flyer-iframe-m-src")); // link to html, htm or img.
    localStorage.setItem("flyer-iframe-m-src","flyer.htm");
    $("#flyer-frame-m").attr('sandbox', ''); // edit if needed, to disable iframe scripts. do not change,
    $("#flyer-frame-m").attr('allowpaymentrequest', 'false'); // do not allow payments. do not change,
    $("#flyer-frame-m").attr('name', 'Flyer-iframe'); // name of iframe ALT
    $("#flyer-frame-m").attr('allowfullscreen', 'false');  // do not change.
    $("#flyer-frame-m").attr('referrerpolicy', localStorage.getItem("flyer-iframe-m-rp")); // what kind of URL is it? Be unsafe if you dont know.
    localStorage.setItem("flyer-iframe-m-rp","unsafe-url");
    if ("show-video" in localStorage) {
        $("#flyer-frame-m").show(); 
        console.log('frame shown');
    } else {
        $("#flyer-frame-m").hide(); 
        console.log('frame hidden');
    };
    // Sponsor Dsec
    $("#flyer-desc-m").append(localStorage.getItem("flyer-desc")); // Bottom text
    localStorage.setItem("flyer-desc", "Your ad desc here");
    $("#flyer-desc-m").attr('alt',); // bottom alt text
    localStorage.setItem("flyer-desc-alt", "Your ad alt for screen readers");
    // Sponsor image
    $("#flyer-image-m").attr('src',  ''); // img SRC Gif, webm, PNG or jpeg.
    $("#flyer-image-m").attr('title', ''); // title of img, alt
    $("#flyer-image-m").attr('alt', 'none'); // alt of an alt
    if ("show-video" in localStorage) {
        $("#flyer-image-m").show(); 
        console.log('image shown');
    } else {
        $("#flyer-image-m").hide(); 
        console.log('image hidden');
    };
    // Sponsor video
    $("#flyer_video-m").attr('data-video', localStorage.getItem("flyer-video-data")); //mp4 only
    localStorage.setItem("flyer-video-data", "#");
    $("#flyer_video-m").attr('data-poster', localStorage.getItem("flyer-video-poster")); // poster "tumbnail/cover"
    localStorage.setItem("flyer-video-poster", '#');
    $("#flyer_video-m").attr('data-type', 'video/mp4'); // data type
    if ("show-video" in localStorage) {
        $("#flyer-video-m").show(); 
        console.log('video shown');
    } else {
        $("#flyer-video-m").hide();
        console.log('video hidden');
    };
    console.log('flyer conf loaded');
});