
! function () {
    "use strict";

    function e() {
        o.classList.remove("open"), c.classList.remove("open"), s.classList.remove("open")
    }

    function n() {
        o.classList.toggle("open"), c.classList.toggle("open"), s.classList.toggle("open"), s.classList.add("opened")
    }
    var t = document.querySelector.bind(document),
        s = t(".navdrawer-container"),
        o = document.body,
        c = t(".app-bar"),
        a = t(".menu"),
        i = t("main");
    i.addEventListener("click", e), a.addEventListener("click", n), s.addEventListener("click", function (n) {
        ("A" === n.target.nodeName || "LI" === n.target.nodeName) && e()
    })
}();