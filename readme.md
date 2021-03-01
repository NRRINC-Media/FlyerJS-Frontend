# Welcome to Flyer (v1.3)
<!--[![Support me on Patreon](https://img.shields.io/endpoint.svg?url=https%3A%2F%2Fshieldsio-patreon.vercel.app%2Fapi%3Fusername%3Dnrrinc%26type%3Dpatrons&style=plastic)](https://patreon.com/nrrinc)-->
##### _what is flyer? flyer is a Simple ad script that helps small websites have a Single ad. and allow the use to have full control over it._
<img src="https://raw.githubusercontent.com/Nolanrulesroblox/Flyer/master/retired/ad/flyer-logo.svg" alt="drawing" width="400"/></img>
---
### an update to Flyer, Since it has become more than just a JS file, its now being a Whole Platform. Go to "FlyerJS" Repo for all the parts.
---
# How to use
## Add to head
```html
<!-- jquery no longer needed (embed) -->
<script src="/flyer/flyer.js"></script>
```
## Add flyer to page (div)
```html
<div id="flyer"></div>
```
---
# Flyer will take care of the rest

## UI controls:
```html
    <button id="yesfly">Yes ads</button>
    <button id="nofly">No ads</button>
    <!-- not needed to run. default: Yes ads-->
```
## Flyer Controls
```html
    <script>
        //add above flyer.js
        flyer = {
            flyer_css: "yes", 
            flyer_show: 'img', 
            flyer_aid: '', 
            flyer_title: 'A Word From Our Sponsor: Crispy', 
            flyer_title_link: 'http://exmaple.com', 
            flyer_frame_src: '/flyer/ad.html',
            flyer_frame_rp: 'unsafe-url',
            flyer_desc:'your ad desc1',
            flyer_video:'/link/to/mp4.mp4',
            flyer_img_title: 'my cool image',
            flyer_img_src: "https://via.placeholder.com/500x375",
            flyer_note: "Hey! Welcome to Flyer! http://git.nrrinc.net/flyer",
            flyer_debug:"", //set to true if you need debug
    }
    </script>
```
# Updates:
```code
+ Debugger (flyer.flyer_debug:"true")
+ No More Jquery (embedded now)
+ Custom CSS support (with Error checking, Needs HTTPS)
+ Custom Console.log for Easy Error Checking
+ LTS Flyer.js (Updated every v0.5)
---------------------------------------------------------
~ Flyer is now /flyer/ and not /src/flyer/
~ Flyer Loading (more smooth)
~ Some timings for Flyerclose
---------------------------------------------------------
- Jquery
- Flyer-conf.js
- init.js
- /src/flyer/
- typescript (as not really being used)
---------------------------------------------------------
/ Many Fixes.
```
---
update key: <br>
<span>+</span> Added <br>
<span>/</span> Fixed<br>
<span>~</span> changed<br>
<span>-</span> removed<br>
<br>

<!--[![Support me on Patreon](https://img.shields.io/endpoint.svg?url=https%3A%2F%2Fshieldsio-patreon.vercel.app%2Fapi%3Fusername%3Dnrrinc%26type%3Dpledges&style=plastic)](https://patreon.com/nrrinc)-->

// do note, the Flyer JS on the Github.io Site is NOT up to date. It is updated once every ~~2~~ weeks. <small>...<i>when i get aroud to it.. </i> </small>

##### Notice: I do not work on flyer on weekends. Sorry.
