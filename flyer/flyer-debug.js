/* // the Flyer Project, NRRINC Media (C) 2021, Apache V2 | V0.2*/
function flyerchkconf() {
    if (flyer.flyer_css === 'yes') {
        flylog(" Default CSS loaded")
    } else if (flyer.flyer_css.length > 0){
        flylogwarn("Custom CSS loaded. if CSS did not load, add HTTPS.")
    }else {
        flylogerror("Flyer: CSS Unable to load. Flyer.Flyer_css Not found")
    };
    if (flyer.flyer_show === 'img') {
            flylog("IMG Loaded");
            if (flyer.flyer_img_title.length > 0) {
                flylog("IMG alt title set") 
            } else {
                flylogwarn("IMG alt title NOT set (ignore if IFM or VID is used.)")
            };
            if (flyer.flyer_img_src.length > 0) {
                flylog("IMG link set") 
            } else {
                flylogwarn("IMG Link NOT set (ignore if IFM or VID is used.)")
            };
        } else if (flyer.flyer_show === 'vid') {
            flylog("VID Loaded");
            if (flyer.flyer_video.length > 0) {
                flylog("Video link set") 
            } else {
                flylogwarn("Video Link NOT set (ignore if IMG or IFM is used.)")
            };
        } else if (flyer.flyer_show === 'ifm') {
            flylog("IFM Loaded");
            if (flyer.flyer_frame_src.length > 0) {
                flylog("iframe SRC is working") 
            } else {
                flylogwarn("iframe SRC is missing (ignore if IMG or VID is used.)")
            };
            if (flyer.flyer_frame_rp.length > 0) {
                flylog("iframe RP is working") 
            } else {
                flylogwarn("iframe RP is missing (ignore if IMG or VID is used.)")
            };
        } else {
            flylogerror("No IFM/VID/IMG Loaded")
    };
        if (flyer.flyer_aid.length === 0) {
            flylog("Aid is found") 
        } else {
            flylogwarn("Aid is Not found, May cause Issues in the Future")
    };
        if (flyer.flyer_title.length > 0) {
            flylog("title is loaded") 
        } else {
            flylogerror("title missing")
    };
    if (flyer.flyer_title_link.length > 0) {
            flylog("title link is loaded. Add HTTP if needed.") 
        } else {
            flylogerror("title link missing")
        };
    if (flyer.flyer_desc.length > 0) {
        flylog("Desc is working") 
    } else {
        flylogwarn("Desc is Not working. Add a DESC to your config.")
    }; }
        if (flyer.flyer_show === 'img') {
            if (flyer.flyer_debug == 'true') {
                flylog(" Debug Mode - IMG loaded")
            };
        } else if (flyer.flyer_show === 'vid') {
            if (flyer.flyer_debug == 'true') {
                flylog(" Debug Mode - VID loaded")
            };
        } else if (flyer.flyer_show === 'ifm') {
            if (flyer.flyer_debug == 'true') {
                flylog(" Debug Mode - IFM loaded")
            };
        } else {
            flylogerror("No IFM/VID/IMG set.")
            if (flyer.flyer_debug == 'true') {
                flylogerror(" Debug Mode - No IFM/VID/IMG set.")
            };
        }
        if($("#nofly, #yesfly").length) {
            if (flyer.flyer_debug == 'true') {
                flylog(" Debug Mode - buttons Loaded")
            } else {
                if (flyer.flyer_debug == 'true') {
                    flylog(" Debug Mode - Buttons not found on page")
                };
            }
        if ($("#flyer").length) {
            if (flyer.flyer_debug == 'true') {
                flylog(" Debug Mode - Div found")
            };
        }}
// this is in its own file, because it Lags the script if its loaded.