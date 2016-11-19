$(window).width() > 749 && $(document).ready(function() {
    "use strict";
    var t = function(t, e, n) {
        var o = ["¶", "b", "d", "e", "f", "g", "0", "1", "¬", "3", "4", "5", "6", "Ð", "8", "×", "?", "!"],
            a = 1,
            r = 45,
            i = e.split(""),
            u = n.split(""),
            m = i.length,
            c = u.length,
            l = new Date,
            h = l.getTime(),
            f = 0,
            d = 0,
            v = 800 * a / Math.max(m, c),
            g = function s() {
                l = new Date, d += l.getTime() - h;
                for (var e = f; e < Math.max(m, c); e++) {
                    var n = Math.floor(Math.random() * (o.length - 5));
                    i[e] = o[n]
                }
                if (d >= v) {
                    f += Math.floor(d / v);
                    for (var a = 0; f > a; a++) i[a] = u[a] || null;
                    d = 0
                }
                t.textContent = i.join(""), h = l.getTime(), f < Math.max(m, c) && setTimeout(function() {
                    window.requestAnimationFrame(s)
                }, 1e3 / r)
            };
        g()
    };
    $(function() {
        var e = document.querySelector(".data-morph"),
            n = (document.querySelector(".data-morphTwo"), ["Playground", "Gianmarco"]),
            o = 0;
        setInterval(function() {
            var a = e.textContent,
                r = n[o];
            t(e, a, r), o < n.length - 1 ? o++ : o = 0
        }, 8e3)
    }), $(function() {
        var e = document.querySelector(".data-morphTwo"),
            n = ["", "Fusaro"],
            o = 0;
        setInterval(function() {
            var a = e.textContent,
                r = n[o];
            t(e, a, r), o < n.length - 1 ? o++ : o = 0
        }, 8e3)
    })
});