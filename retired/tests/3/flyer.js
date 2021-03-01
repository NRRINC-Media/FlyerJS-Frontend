localStorage.removeItem ("img");
//img
$(document).ready(function () {
    if ("img" in localStorage) {
        $("#flyer-image").show();
    } else {
        $("#flyer-image").remove();
    }
    console.log("img loaded")
});
//iframe
localStorage.setItem ("iframe", "1")
$(document).ready(function () {
    if ("iframe" in localStorage) {
        $("#flyer-frame").show();       
    } else {
        $("#flyer-frame").remove();       
    }
});
