window.Modernizr = function(b, d, l) {
    function a(a, e) {
        return typeof a === e
    }

    function c(a, e) {
        for (var f in a) {
            var k = a[f];
            if (!~("" + k).indexOf("-") && q[k] !== l) return "pfx" == e ? k : !0
        }
        return !1
    }

    function h(f, k, m) {
        var b = f.charAt(0).toUpperCase() + f.slice(1),
            r = (f + " " + e.join(b + " ") + b).split(" ");
        if (a(k, "string") || a(k, "undefined")) k = c(r, k);
        else a: {
            r = (f + " " + u.join(b + " ") + b).split(" "), f = r;
            for (var g in f)
                if (b = k[f[g]], b !== l) {
                    k = !1 === m ? f[g] : a(b, "function") ? b.bind(m || k) : b;
                    break a
                }
            k = !1
        }
        return k
    }

    function g() {
        s.input = function(a) {
            for (var e =
                    0, f = a.length; e < f; e++) I[a[e]] = a[e] in k;
            return I.list && (I.list = !!d.createElement("datalist") && !!b.HTMLDataListElement), I
        }("autocomplete autofocus list placeholder max min multiple pattern required step".split(" "));
        s.inputtypes = function(a) {
            for (var e = 0, f, b, m, c = a.length; e < c; e++) k.setAttribute("type", b = a[e]), (f = "text" !== k.type) && (k.value = r, k.style.cssText = "position:absolute;visibility:hidden;", /^range$/.test(b) && k.style.WebkitAppearance !== l ? (n.appendChild(k), m = d.defaultView, f = m.getComputedStyle && "textfield" !==
                m.getComputedStyle(k, null).WebkitAppearance && 0 !== k.offsetHeight, n.removeChild(k)) : /^(search|tel)$/.test(b) || (/^(url|email)$/.test(b) ? f = k.checkValidity && !1 === k.checkValidity() : f = k.value != r)), L[a[e]] = !!f;
            return L
        }("search tel url email datetime date month week time datetime-local number range color".split(" "))
    }
    var s = {},
        n = d.documentElement,
        t = d.createElement("modernizr"),
        q = t.style,
        k = d.createElement("input"),
        r = ":)",
        f = {}.toString,
        m = " -webkit- -moz- -o- -ms- ".split(" "),
        e = ["Webkit", "Moz", "O", "ms"],
        u = ["webkit",
            "moz", "o", "ms"
        ],
        t = {},
        L = {},
        I = {},
        y = [],
        J = y.slice,
        H, x = function(a, e, f, k) {
            var b, m, c, r, g = d.createElement("div"),
                u = d.body,
                h = u || d.createElement("body");
            if (parseInt(f, 10))
                for (; f--;) c = d.createElement("div"), c.id = k ? k[f] : "modernizr" + (f + 1), g.appendChild(c);
            return b = ['&#173;<style id="smodernizr">', a, "</style>"].join(""), g.id = "modernizr", (u ? g : h).innerHTML += b, h.appendChild(g), u || (h.style.background = "", h.style.overflow = "hidden", r = n.style.overflow, n.style.overflow = "hidden", n.appendChild(h)), m = e(g, a), u ? g.parentNode.removeChild(g) :
                (h.parentNode.removeChild(h), n.style.overflow = r), !!m
        },
        D = function() {
            var e = {
                select: "input",
                change: "input",
                submit: "form",
                reset: "form",
                error: "img",
                load: "img",
                abort: "img"
            };
            return function(f, k) {
                k = k || d.createElement(e[f] || "div");
                f = "on" + f;
                var b = f in k;
                return b || (k.setAttribute || (k = d.createElement("div")), k.setAttribute && k.removeAttribute && (k.setAttribute(f, ""), b = a(k[f], "function"), a(k[f], "undefined") || (k[f] = l), k.removeAttribute(f))), b
            }
        }(),
        A = {}.hasOwnProperty,
        B;
    a(A, "undefined") || a(A.call, "undefined") ? B = function(e,
        f) {
        return f in e && a(e.constructor.prototype[f], "undefined")
    } : B = function(a, e) {
        return A.call(a, e)
    };
    Function.prototype.bind || (Function.prototype.bind = function(a) {
        var e = this;
        if ("function" != typeof e) throw new TypeError;
        var f = J.call(arguments, 1),
            k = function() {
                if (this instanceof k) {
                    var b = function() {};
                    b.prototype = e.prototype;
                    var b = new b,
                        m = e.apply(b, f.concat(J.call(arguments)));
                    return Object(m) === m ? m : b
                }
                return e.apply(a, f.concat(J.call(arguments)))
            };
        return k
    });
    t.flexbox = function() {
        return h("flexWrap")
    };
    t.flexboxlegacy =
        function() {
            return h("boxDirection")
        };
    t.canvas = function() {
        var a = d.createElement("canvas");
        return !!a.getContext && !!a.getContext("2d")
    };
    t.canvastext = function() {
        return !!s.canvas && !!a(d.createElement("canvas").getContext("2d").fillText, "function")
    };
    t.webgl = function() {
        return !!b.WebGLRenderingContext
    };
    t.touch = function() {
        var a;
        return "ontouchstart" in b || b.DocumentTouch && d instanceof DocumentTouch ? a = !0 : x(["@media (", m.join("touch-enabled),("), "modernizr){#modernizr{top:9px;position:absolute}}"].join(""), function(e) {
            a =
                9 === e.offsetTop
        }), a
    };
    t.geolocation = function() {
        return "geolocation" in navigator
    };
    t.postmessage = function() {
        return !!b.postMessage
    };
    t.websqldatabase = function() {
        return !!b.openDatabase
    };
    t.indexedDB = function() {
        return !!h("indexedDB", b)
    };
    t.hashchange = function() {
        return D("hashchange", b) && (d.documentMode === l || 7 < d.documentMode)
    };
    t.history = function() {
        return !!b.history && !!history.pushState
    };
    t.draganddrop = function() {
        var a = d.createElement("div");
        return "draggable" in a || "ondragstart" in a && "ondrop" in a
    };
    t.websockets =
        function() {
            return "WebSocket" in b || "MozWebSocket" in b
        };
    t.rgba = function() {
        q.cssText = "background-color:rgba(150,255,150,.5)";
        return !!~("" + q.backgroundColor).indexOf("rgba")
    };
    t.hsla = function() {
        q.cssText = "background-color:hsla(120,40%,100%,.5)";
        return !!~("" + q.backgroundColor).indexOf("rgba") || !!~("" + q.backgroundColor).indexOf("hsla")
    };
    t.multiplebgs = function() {
        q.cssText = "background:url(https://),url(https://),red url(https://)";
        return /(url\s*\(.*?){3}/.test(q.background)
    };
    t.backgroundsize = function() {
        return h("backgroundSize")
    };
    t.borderimage = function() {
        return h("borderImage")
    };
    t.borderradius = function() {
        return h("borderRadius")
    };
    t.boxshadow = function() {
        return h("boxShadow")
    };
    t.textshadow = function() {
        return "" === d.createElement("div").style.textShadow
    };
    t.opacity = function() {
        var a = m.join("opacity:.55;") + "";
        q.cssText = a;
        return /^0.55$/.test(q.opacity)
    };
    t.cssanimations = function() {
        return h("animationName")
    };
    t.csscolumns = function() {
        return h("columnCount")
    };
    t.cssgradients = function() {
        var a = ("background-image:-webkit-gradient(linear,left top,right bottom,from(#9f9),to(white));background-image:" +
            m.join("linear-gradient(left top,#9f9, white);background-image:")).slice(0, -17);
        q.cssText = a;
        return !!~("" + q.backgroundImage).indexOf("gradient")
    };
    t.cssreflections = function() {
        return h("boxReflect")
    };
    t.csstransforms = function() {
        return !!h("transform")
    };
    t.csstransforms3d = function() {
        var a = !!h("perspective");
        return a && "webkitPerspective" in n.style && x("@media (transform-3d),(-webkit-transform-3d){#modernizr{left:9px;position:absolute;height:3px;}}", function(e, f) {
            a = 9 === e.offsetLeft && 3 === e.offsetHeight
        }), a
    };
    t.csstransitions = function() {
        return h("transition")
    };
    t.fontface = function() {
        var a;
        return x('@font-face {font-family:"font";src:url("https://")}', function(e, f) {
            var k = d.getElementById("smodernizr"),
                k = (k = k.sheet || k.styleSheet) ? k.cssRules && k.cssRules[0] ? k.cssRules[0].cssText : k.cssText || "" : "";
            a = /src/i.test(k) && 0 === k.indexOf(f.split(" ")[0])
        }), a
    };
    t.generatedcontent = function() {
        var a;
        return x(['#modernizr{font:0/0 a}#modernizr:after{content:"', r, '";visibility:hidden;font:3px/1 a}'].join(""), function(e) {
            a = 3 <=
                e.offsetHeight
        }), a
    };
    t.video = function() {
        var a = d.createElement("video"),
            e = !1;
        try {
            if (e = !!a.canPlayType) e = new Boolean(e), e.ogg = a.canPlayType('video/ogg; codecs="theora"').replace(/^no$/, ""), e.h264 = a.canPlayType('video/mp4; codecs="avc1.42E01E"').replace(/^no$/, ""), e.webm = a.canPlayType('video/webm; codecs="vp8, vorbis"').replace(/^no$/, "")
        } catch (f) {}
        return e
    };
    t.audio = function() {
        var a = d.createElement("audio"),
            e = !1;
        try {
            if (e = !!a.canPlayType) e = new Boolean(e), e.ogg = a.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/,
                ""), e.mp3 = a.canPlayType("audio/mpeg;").replace(/^no$/, ""), e.wav = a.canPlayType('audio/wav; codecs="1"').replace(/^no$/, ""), e.m4a = (a.canPlayType("audio/x-m4a;") || a.canPlayType("audio/aac;")).replace(/^no$/, "")
        } catch (f) {}
        return e
    };
    t.localstorage = function() {
        try {
            return localStorage.setItem("modernizr", "modernizr"), localStorage.removeItem("modernizr"), !0
        } catch (a) {
            return !1
        }
    };
    t.sessionstorage = function() {
        try {
            return sessionStorage.setItem("modernizr", "modernizr"), sessionStorage.removeItem("modernizr"), !0
        } catch (a) {
            return !1
        }
    };
    t.webworkers = function() {
        return !!b.Worker
    };
    t.applicationcache = function() {
        return !!b.applicationCache
    };
    t.svg = function() {
        return !!d.createElementNS && !!d.createElementNS("http://www.w3.org/2000/svg", "svg").createSVGRect
    };
    t.inlinesvg = function() {
        var a = d.createElement("div");
        return a.innerHTML = "<svg/>", "http://www.w3.org/2000/svg" == (a.firstChild && a.firstChild.namespaceURI)
    };
    t.smil = function() {
        return !!d.createElementNS && /SVGAnimate/.test(f.call(d.createElementNS("http://www.w3.org/2000/svg", "animate")))
    };
    t.svgclippaths =
        function() {
            return !!d.createElementNS && /SVGClipPath/.test(f.call(d.createElementNS("http://www.w3.org/2000/svg", "clipPath")))
        };
    for (var F in t) B(t, F) && (H = F.toLowerCase(), s[H] = t[F](), y.push((s[H] ? "" : "no-") + H));
    s.input || g();
    s.addTest = function(a, e) {
        if ("object" == typeof a)
            for (var f in a) B(a, f) && s.addTest(f, a[f]);
        else {
            a = a.toLowerCase();
            if (s[a] !== l) return s;
            e = "function" == typeof e ? e() : e;
            "undefined" != typeof enableClasses && enableClasses && (n.className += " " + (e ? "" : "no-") + a);
            s[a] = e
        }
        return s
    };
    q.cssText = "";
    return t =
        k = null,
        function(a, e) {
            function f() {
                var a = d.elements;
                return "string" == typeof a ? a.split(" ") : a
            }

            function k(a) {
                var e = t[a[s]];
                return e || (e = {}, n++, a[s] = n, t[n] = e), e
            }

            function b(a, f, m) {
                f || (f = e);
                if (p) return f.createElement(a);
                m || (m = k(f));
                var c;
                return m.cache[a] ? c = m.cache[a].cloneNode() : u.test(a) ? c = (m.cache[a] = m.createElem(a)).cloneNode() : c = m.createElem(a), !c.canHaveChildren || g.test(a) || c.tagUrn ? c : m.frag.appendChild(c)
            }

            function m(a, e) {
                e.cache || (e.cache = {}, e.createElem = a.createElement, e.createFrag = a.createDocumentFragment,
                    e.frag = e.createFrag());
                a.createElement = function(f) {
                    return d.shivMethods ? b(f, a, e) : e.createElem(f)
                };
                a.createDocumentFragment = Function("h,f", "return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&(" + f().join().replace(/[\w\-]+/g, function(a) {
                    return e.createElem(a), e.frag.createElement(a), 'c("' + a + '")'
                }) + ");return n}")(d, e.frag)
            }

            function c(a) {
                a || (a = e);
                var f = k(a);
                if (d.shivCSS && !h && !f.hasCSS) {
                    var b, r = a;
                    b = r.createElement("p");
                    r = r.getElementsByTagName("head")[0] || r.documentElement;
                    b = (b.innerHTML =
                        "x<style>article,aside,dialog,figcaption,figure,footer,header,hgroup,main,nav,section{display:block}mark{background:#FF0;color:#000}template{display:none}</style>", r.insertBefore(b.lastChild, r.firstChild));
                    f.hasCSS = !!b
                }
                return p || m(a, f), a
            }
            var r = a.html5 || {},
                g = /^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i,
                u = /^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i,
                h, s = "_html5shiv",
                n = 0,
                t = {},
                p;
            (function() {
                try {
                    var a = e.createElement("a");
                    a.innerHTML = "<xyz></xyz>";
                    h = "hidden" in a;
                    var f;
                    if (!(f = 1 == a.childNodes.length)) {
                        e.createElement("a");
                        var k = e.createDocumentFragment();
                        f = "undefined" == typeof k.cloneNode || "undefined" == typeof k.createDocumentFragment || "undefined" == typeof k.createElement
                    }
                    p = f
                } catch (b) {
                    p = h = !0
                }
            })();
            var d = {
                elements: r.elements || "abbr article aside audio bdi canvas data datalist details dialog figcaption figure footer header hgroup main mark meter nav output progress section summary template time video",
                version: "3.7.0",
                shivCSS: !1 !==
                    r.shivCSS,
                supportsUnknownElements: p,
                shivMethods: !1 !== r.shivMethods,
                type: "default",
                shivDocument: c,
                createElement: b,
                createDocumentFragment: function(a, b) {
                    a || (a = e);
                    if (p) return a.createDocumentFragment();
                    b = b || k(a);
                    for (var m = b.frag.cloneNode(), c = 0, r = f(), g = r.length; c < g; c++) m.createElement(r[c]);
                    return m
                }
            };
            a.html5 = d;
            c(e)
        }(this, d), s._version = "2.8.3", s._prefixes = m, s._domPrefixes = u, s._cssomPrefixes = e, s.mq = function(a) {
            var e = b.matchMedia || b.msMatchMedia;
            if (e) return e(a) && e(a).matches || !1;
            var f;
            return x("@media " +
                a + " { #modernizr { position: absolute; } }",
                function(a) {
                    f = "absolute" == (b.getComputedStyle ? getComputedStyle(a, null) : a.currentStyle).position
                }), f
        }, s.hasEvent = D, s.testProp = function(a) {
            return c([a])
        }, s.testAllProps = h, s.testStyles = x, s
}(this, this.document);
(function(b, d, l) {
    function a(a) {
        return "[object Function]" == m.call(a)
    }

    function c(a) {
        return "string" == typeof a
    }

    function h() {}

    function g(a) {
        return !a || "loaded" == a || "complete" == a || "uninitialized" == a
    }

    function s() {
        var a = e.shift();
        u = 1;
        a ? a.t ? r(function() {
            ("c" == a.t ? E.injectCss : E.injectJs)(a.s, 0, a.a, a.x, a.e, 1)
        }, 0) : (a(), s()) : u = 0
    }

    function n(a, k, b, m, c, h, n) {
        function t(e) {
            if (!L && g(q.readyState) && (x.r = L = 1, !u && s(), q.onload = q.onreadystatechange = null, e)) {
                "img" != a && r(function() {
                    y.removeChild(q)
                }, 50);
                for (var f in A[k]) A[k].hasOwnProperty(f) &&
                    A[k][f].onload()
            }
        }
        n = n || E.errorTimeout;
        var q = d.createElement(a),
            L = 0,
            l = 0,
            x = {
                t: b,
                s: k,
                e: c,
                a: h,
                x: n
            };
        1 === A[k] && (l = 1, A[k] = []);
        "object" == a ? q.data = k : (q.src = k, q.type = a);
        q.width = q.height = "0";
        q.onerror = q.onload = q.onreadystatechange = function() {
            t.call(this, l)
        };
        e.splice(m, 0, x);
        "img" != a && (l || 2 === A[k] ? (y.insertBefore(q, I ? null : f), r(t, n)) : A[k].push(q))
    }

    function t(a, f, k, b, m) {
        return u = 0, f = f || "j", c(a) ? n("c" == f ? H : J, a, f, this.i++, k, b, m) : (e.splice(this.i++, 0, a), 1 == e.length && s()), this
    }

    function q() {
        var a = E;
        return a.loader = {
            load: t,
            i: 0
        }, a
    }
    var k = d.documentElement,
        r = b.setTimeout,
        f = d.getElementsByTagName("script")[0],
        m = {}.toString,
        e = [],
        u = 0,
        L = "MozAppearance" in k.style,
        I = L && !!d.createRange().compareNode,
        y = I ? k : f.parentNode,
        k = b.opera && "[object Opera]" == m.call(b.opera),
        k = !!d.attachEvent && !k,
        J = L ? "object" : k ? "script" : "img",
        H = k ? "script" : J,
        x = Array.isArray || function(a) {
            return "[object Array]" == m.call(a)
        },
        D = [],
        A = {},
        B = {
            timeout: function(a, e) {
                return e.length && (a.timeout = e[0]), a
            }
        },
        F, E;
    E = function(e) {
        function f(a) {
            a = a.split("!");
            var e = D.length,
                k =
                a.pop(),
                b = a.length,
                k = {
                    url: k,
                    origUrl: k,
                    prefixes: a
                },
                m, c, p;
            for (c = 0; c < b; c++) p = a[c].split("="), (m = B[p.shift()]) && (k = m(k, p));
            for (c = 0; c < e; c++) k = D[c](k);
            return k
        }

        function k(e, b, m, c, r) {
            var g = f(e),
                p = g.autoCallback;
            g.url.split(".").pop().split("?").shift();
            g.bypass || (b && (b = a(b) ? b : b[e] || b[c] || b[e.split("/").pop().split("?")[0]]), g.instead ? g.instead(e, b, m, c, r) : (A[g.url] ? g.noexec = !0 : A[g.url] = 1, m.load(g.url, g.forceCSS || !g.forceJS && "css" == g.url.split(".").pop().split("?").shift() ? "c" : l, g.noexec, g.attrs, g.timeout), (a(b) || a(p)) && m.load(function() {
                q();
                b && b(g.origUrl, r, c);
                p && p(g.origUrl, r, c);
                A[g.url] = 2
            })))
        }

        function b(e, f) {
            function m(e, b) {
                if (e)
                    if (c(e)) b || (u = function() {
                        var a = [].slice.call(arguments);
                        p.apply(this, a);
                        s()
                    }), k(e, u, f, 0, r);
                    else {
                        if (Object(e) === e)
                            for (t in n = function() {
                                    var a = 0,
                                        f;
                                    for (f in e) e.hasOwnProperty(f) && a++;
                                    return a
                                }(), e) e.hasOwnProperty(t) && (!b && !--n && (a(u) ? u = function() {
                                var a = [].slice.call(arguments);
                                p.apply(this, a);
                                s()
                            } : u[t] = function(a) {
                                return function() {
                                    var e = [].slice.call(arguments);
                                    a && a.apply(this,
                                        e);
                                    s()
                                }
                            }(p[t])), k(e[t], u, f, t, r))
                    } else !b && s()
            }
            var r = !!e.test,
                g = e.load || e.both,
                u = e.callback || h,
                p = u,
                s = e.complete || h,
                n, t;
            m(r ? e.yep : e.nope, !!g);
            g && m(g)
        }
        var m, r, g = this.yepnope.loader;
        if (c(e)) k(e, 0, g, 0);
        else if (x(e))
            for (m = 0; m < e.length; m++) r = e[m], c(r) ? k(r, 0, g, 0) : x(r) ? E(r) : Object(r) === r && b(r, g);
        else Object(e) === e && b(e, g)
    };
    E.addPrefix = function(a, e) {
        B[a] = e
    };
    E.addFilter = function(a) {
        D.push(a)
    };
    E.errorTimeout = 1E4;
    null == d.readyState && d.addEventListener && (d.readyState = "loading", d.addEventListener("DOMContentLoaded",
        F = function() {
            d.removeEventListener("DOMContentLoaded", F, 0);
            d.readyState = "complete"
        }, 0));
    b.yepnope = q();
    b.yepnope.executeStack = s;
    b.yepnope.injectJs = function(a, e, k, b, m, c) {
        var u = d.createElement("script"),
            t, n;
        b = b || E.errorTimeout;
        u.src = a;
        for (n in k) u.setAttribute(n, k[n]);
        e = c ? s : e || h;
        u.onreadystatechange = u.onload = function() {
            !t && g(u.readyState) && (t = 1, e(), u.onload = u.onreadystatechange = null)
        };
        r(function() {
            t || (t = 1, e(1))
        }, b);
        m ? u.onload() : f.parentNode.insertBefore(u, f)
    };
    b.yepnope.injectCss = function(a, e, k, b, m, c) {
        b =
            d.createElement("link");
        var g;
        e = c ? s : e || h;
        b.href = a;
        b.rel = "stylesheet";
        b.type = "text/css";
        for (g in k) b.setAttribute(g, k[g]);
        m || (f.parentNode.insertBefore(b, f), r(e, 0))
    }
})(this, document);
Modernizr.load = function() {
    yepnope.apply(window, [].slice.call(arguments, 0))
};
Modernizr.addTest("csscalc", function() {
    var b = document.createElement("div");
    return b.style.cssText = "width:" + Modernizr._prefixes.join("calc(10px);width:"), !!b.style.length
});
(function(b, d) {
    "function" === typeof define && define.amd ? define(["exports"], d) : "undefined" !== typeof exports ? d(exports) : d(b)
})(this, function(b) {
    function d(a) {
        return 48 <= a && 57 >= a
    }

    function l(a) {
        return d(a) || 65 <= a && 70 >= a || 97 <= a && 102 >= a
    }

    function a(a) {
        return 65 <= a && 90 >= a || 97 <= a && 122 >= a || 160 <= a || 95 == a
    }

    function c(e) {
        return a(e) || d(e) || 45 == e
    }

    function h(a) {
        return 10 == a || 12 == a
    }

    function g(a) {
        return h(a) || 9 == a || 32 == a
    }

    function s(a) {
        return h(a) || isNaN(a)
    }

    function n(a) {
        return String.fromCharCode.apply(null, a.filter(function(a) {
            return a
        }))
    }

    function t(a) {
        return this
    }

    function q() {
        return this
    }

    function k() {
        return this
    }

    function r() {
        return this
    }

    function f() {
        return this
    }

    function m() {
        return this
    }

    function e() {
        return this
    }

    function u() {
        return this
    }

    function L() {
        return this
    }

    function I() {
        return this
    }

    function y() {
        return this
    }

    function J() {
        return this
    }

    function H() {
        return this
    }

    function x() {
        return this
    }

    function D() {
        return this
    }

    function A(a) {
        this.value = String.fromCharCode(a);
        return this
    }

    function B() {
        return this
    }

    function F(a) {
        this.value = [];
        this.append(a)
    }

    function E(a) {
        this.value = a.finish().value
    }

    function C(a) {
        this.value = [];
        this.append(a)
    }

    function Q(a) {
        this.value = [];
        this.append(a)
    }

    function R(a) {
        this.value = [];
        this.append(a)
    }

    function P(a) {
        this.value = [];
        this.append(a)
    }

    function S(a) {
        this.value = [];
        this.append(a);
        this.type = "integer"
    }

    function Y(a) {
        a.finish();
        this.value = a.value;
        this.repr = a.repr
    }

    function U(a, e) {
        a.finish();
        this.num = a.value;
        this.unit = [];
        this.repr = a.repr;
        this.append(e)
    }

    function W(a, e) {
        a = parseInt(n(a), 16);
        e = void 0 === e ? a + 1 : parseInt(n(e), 16);
        1114111 <
            a && (e = a);
        e < a && (e = a);
        1114111 < e && (e = 1114111);
        this.start = a;
        this.end = e;
        return this
    }
    t.prototype.finish = function() {
        return this
    };
    t.prototype.toString = function() {
        return this.tokenType
    };
    t.prototype.toSourceString = t.prototype.toString;
    t.prototype.toJSON = function() {
        return this.toString()
    };
    q.prototype = new t;
    q.prototype.tokenType = "BADSTRING";
    k.prototype = new t;
    k.prototype.tokenType = "BADURL";
    r.prototype = new t;
    r.prototype.tokenType = "WHITESPACE";
    r.prototype.toString = function() {
        return "WS"
    };
    r.prototype.toSourceString =
        function() {
            return " "
        };
    f.prototype = new t;
    f.prototype.tokenType = "CDO";
    m.prototype = new t;
    m.prototype.tokenType = "CDC";
    e.prototype = new t;
    e.prototype.tokenType = ":";
    u.prototype = new t;
    u.prototype.tokenType = ";";
    L.prototype = new t;
    L.prototype.tokenType = "{";
    I.prototype = new t;
    I.prototype.tokenType = "}";
    y.prototype = new t;
    y.prototype.tokenType = "[";
    J.prototype = new t;
    J.prototype.tokenType = "]";
    H.prototype = new t;
    H.prototype.tokenType = "(";
    x.prototype = new t;
    x.prototype.tokenType = ")";
    D.prototype = new t;
    D.prototype.tokenType =
        "EOF";
    A.prototype = new t;
    A.prototype.tokenType = "DELIM";
    A.prototype.toString = function() {
        return "DELIM(" + this.value + ")"
    };
    A.prototype.toSourceString = function() {
        return this.value
    };
    B.prototype = new t;
    B.prototype.append = function(a) {
        if (a instanceof Array)
            for (var e = 0; e < a.length; e++) this.value.push(a[e]);
        else this.value.push(a);
        return !0
    };
    B.prototype.finish = function() {
        this.value = this.valueAsString();
        return this
    };
    B.prototype.ASCIImatch = function(a) {
        return this.valueAsString().toLowerCase() == a.toLowerCase()
    };
    B.prototype.valueAsString =
        function() {
            return "string" == typeof this.value ? this.value : n(this.value)
        };
    B.prototype.valueAsCodes = function() {
        if ("string" == typeof this.value) {
            for (var a = [], e = 0; e < this.value.length; e++) a.push(this.value.charCodeAt(e));
            return a
        }
        return this.value.filter(function(a) {
            return a
        })
    };
    F.prototype = new B;
    F.prototype.tokenType = "IDENT";
    F.prototype.toString = function() {
        return "IDENT(" + this.value + ")"
    };
    F.prototype.toSourceString = function() {
        return this.value
    };
    E.prototype = new B;
    E.prototype.tokenType = "FUNCTION";
    E.prototype.toString =
        function() {
            return "FUNCTION(" + this.value + ")"
        };
    E.prototype.toSourceString = function() {
        return this.value
    };
    C.prototype = new B;
    C.prototype.tokenType = "AT-KEYWORD";
    C.prototype.toString = function() {
        return "AT(" + this.value + ")"
    };
    C.prototype.toSourceString = function() {
        return "@" + this.value
    };
    Q.prototype = new B;
    Q.prototype.tokenType = "HASH";
    Q.prototype.toString = function() {
        return "HASH(" + this.value + ")"
    };
    Q.prototype.toSourceString = function() {
        return "#" + this.value
    };
    R.prototype = new B;
    R.prototype.tokenType = "STRING";
    R.prototype.toString =
        function() {
            return '"' + this.value + '"'
        };
    R.prototype.toSourceString = R.prototype.toString;
    P.prototype = new B;
    P.prototype.tokenType = "URL";
    P.prototype.toString = function() {
        return "URL(" + this.value + ")"
    };
    P.prototype.toSourceString = function() {
        return "url('" + this.value + "')"
    };
    S.prototype = new B;
    S.prototype.tokenType = "NUMBER";
    S.prototype.toString = function() {
        return "integer" == this.type ? "INT(" + this.value + ")" : "NUMBER(" + this.value + ")"
    };
    S.prototype.toSourceString = function() {
        return this.value
    };
    S.prototype.finish = function() {
        this.repr =
            this.valueAsString();
        this.value = 1 * this.repr;
        0 != Math.abs(this.value) % 1 && (this.type = "number");
        return this
    };
    Y.prototype = new t;
    Y.prototype.tokenType = "PERCENTAGE";
    Y.prototype.toString = function() {
        return "PERCENTAGE(" + this.value + ")"
    };
    Y.prototype.toSourceString = function() {
        return this.value + "%"
    };
    U.prototype = new t;
    U.prototype.tokenType = "DIMENSION";
    U.prototype.toString = function() {
        return "DIM(" + this.num + "," + this.unit + ")"
    };
    U.prototype.toSourceString = function() {
        return this.num + this.unit
    };
    U.prototype.append = function(a) {
        if (a instanceof Array)
            for (var e = 0; e < a.length; e++) this.unit.push(a[e]);
        else this.unit.push(a);
        return !0
    };
    U.prototype.finish = function() {
        this.unit = n(this.unit);
        this.repr += this.unit;
        return this
    };
    W.prototype = new t;
    W.prototype.tokenType = "UNICODE-RANGE";
    W.prototype.toString = function() {
        return this.start + 1 == this.end ? "UNICODE-RANGE(" + this.start.toString(16).toUpperCase() + ")" : this.start < this.end ? "UNICODE-RANGE(" + this.start.toString(16).toUpperCase() + "-" + this.end.toString(16).toUpperCase() + ")" : "UNICODE-RANGE()"
    };
    W.prototype.toSourceString =
        function() {
            return this.start + 1 == this.end ? "UNICODE-RANGE(" + this.start.toString(16).toUpperCase() + ")" : this.start < this.end ? "UNICODE-RANGE(" + this.start.toString(16).toUpperCase() + "-" + this.end.toString(16).toUpperCase() + ")" : "UNICODE-RANGE()"
        };
    W.prototype.contains = function(a) {
        return a >= this.start && a < this.end
    };
    b.tokenize = function(b, t) {
        void 0 == t && (t = {
            transformFunctionWhitespace: !1,
            scientificNotation: !1
        });
        for (var n = -1, B = [], da = "data", p, w, N = 0, fa = 0, Z = 0, V = {
                line: N,
                column: fa
            }, z = function(a) {
                void 0 === a && (a = 1);
                return b.charCodeAt(n +
                    a)
            }, O = function(a) {
                void 0 === a && (a = 1);
                n += a;
                p = b.charCodeAt(n);
                h(p) ? (N += 1, Z = fa, fa = 0) : fa += a;
                return !0
            }, M = function() {
                --n;
                h(p) ? (--N, fa = Z) : --fa;
                V.line = N;
                V.column = fa;
                return !0
            }, ha = function() {
                return n >= b.length
            }, G = function(a) {
                a ? a.finish() : a = w.finish();
                !0 === t.loc && (a.loc = {}, a.loc.start = {
                    line: V.line,
                    column: V.column
                }, V = {
                    line: N,
                    column: fa
                }, a.loc.end = V);
                B.push(a);
                w = void 0;
                return !0
            }, X = function(a) {
                w = a;
                return !0
            }, T = function() {
                console.log("Parse error at index " + n + ", processing codepoint 0x" + p.toString(16) + " in state " +
                    da + ".");
                return !0
            }, qa = function(a) {
                console.log("MAJOR SPEC ERROR: " + a);
                return !0
            }, v = function(a) {
                da = a;
                return !0
            }, ba = function() {
                O();
                if (l(p)) {
                    for (var a = [], e = 0; 6 > e; e++)
                        if (l(p)) a.push(p), O();
                        else break;
                    if (null != a.map) a = parseInt(a.map(String.fromCharCode).join(""), 16);
                    else {
                        d1 = [];
                        _len = a.length;
                        for (_i = 0; _i < _len; _i++) d1.push(String.fromCharCode(a[_i]));
                        a = parseInt(d1.join(""), 16)
                    }
                    1114111 < a && (a = 65533);
                    g(p) || M();
                    return a
                }
                return p
            };;) {
            if (n > 2 * b.length) return "I'm infinite-looping!";
            O();
            switch (da) {
                case "data":
                    if (g(p))
                        for (G(new r); g(z());) O();
                    else if (34 == p) v("double-quote-string");
                    else if (35 == p) v("hash");
                    else if (39 == p) v("single-quote-string");
                    else if (40 == p) G(new H);
                    else if (41 == p) G(new x);
                    else if (43 == p) d(z()) || 46 == z() && d(z(2)) ? v("number") && M() : G(new A(p));
                    else if (45 == p) 45 == z(1) && 62 == z(2) ? O(2) && G(new m) : d(z()) || 46 == z(1) && d(z(2)) ? v("number") && M() : v("ident") && M();
                    else if (46 == p) d(z()) ? v("number") && M() : G(new A(p));
                    else if (47 == p) 42 == z() ? O() && v("comment") : G(new A(p));
                    else if (58 == p) G(new e);
                    else if (59 == p) G(new u);
                    else if (60 == p) 33 == z(1) && 45 == z(2) &&
                        45 == z(3) ? O(3) && G(new f) : G(new A(p));
                    else if (64 == p) v("at-keyword");
                    else if (91 == p) G(new y);
                    else if (92 == p) s(z()) ? T() && G(new A(p)) : v("ident") && M();
                    else if (93 == p) G(new J);
                    else if (123 == p) G(new L);
                    else if (125 == p) G(new I);
                    else if (d(p)) v("number") && M();
                    else if (85 == p || 117 == p) 43 == z(1) && l(z(2)) ? O() && v("unicode-range") : v("ident") && M();
                    else if (a(p)) v("ident") && M();
                    else {
                        if (ha()) return G(new D), B;
                        G(new A(p))
                    }
                    break;
                case "double-quote-string":
                    void 0 == w && X(new R);
                    34 == p ? G() && v("data") : ha() ? T() && G() && v("data") && M() : h(p) ?
                        T() && G(new q) && v("data") && M() : 92 == p ? s(z()) ? T() && G(new q) && v("data") : h(z()) ? O() : w.append(ba()) : w.append(p);
                    break;
                case "single-quote-string":
                    void 0 == w && X(new R);
                    39 == p ? G() && v("data") : ha() ? T() && G() && v("data") : h(p) ? T() && G(new q) && v("data") && M() : 92 == p ? s(z()) ? T() && G(new q) && v("data") : h(z()) ? O() : w.append(ba()) : w.append(p);
                    break;
                case "hash":
                    c(p) ? X(new Q(p)) && v("hash-rest") : 92 == p ? s(z()) ? T() && G(new A(35)) && v("data") && M() : X(new Q(ba())) && v("hash-rest") : G(new A(35)) && v("data") && M();
                    break;
                case "hash-rest":
                    c(p) ?
                        w.append(p) : 92 == p ? s(z()) ? T() && G() && v("data") && M() : w.append(ba()) : G() && v("data") && M();
                    break;
                case "comment":
                    42 == p ? 47 == z() && O() && v("data") : ha() && T() && v("data") && M();
                    break;
                case "at-keyword":
                    45 == p ? a(z()) ? X(new C(45)) && v("at-keyword-rest") : 92 != z(1) || s(z(2)) ? T() && G(new A(64)) && v("data") && M() : X(new AtKeywordtoken(45)) && v("at-keyword-rest") : a(p) ? X(new C(p)) && v("at-keyword-rest") : 92 == p ? s(z()) ? T() && G(new A(35)) && v("data") && M() : X(new C(ba())) && v("at-keyword-rest") : G(new A(64)) && v("data") && M();
                    break;
                case "at-keyword-rest":
                    c(p) ?
                        w.append(p) : 92 == p ? s(z()) ? T() && G() && v("data") && M() : w.append(ba()) : G() && v("data") && M();
                    break;
                case "ident":
                    45 == p ? a(z()) ? X(new F(p)) && v("ident-rest") : 92 != z(1) || s(z(2)) ? G(new A(45)) && v("data") : X(new F(p)) && v("ident-rest") : a(p) ? X(new F(p)) && v("ident-rest") : 92 == p ? s(z()) ? T() && v("data") && M() : X(new F(ba())) && v("ident-rest") : qa("Hit the generic 'else' clause in ident state.") && v("data") && M();
                    break;
                case "ident-rest":
                    c(p) ? w.append(p) : 92 == p ? s(z()) ? T() && G() && v("data") && M() : w.append(ba()) : 40 == p ? w.ASCIImatch("url") ?
                        v("url") : G(new E(w)) && v("data") : g(p) && t.transformFunctionWhitespace ? v("transform-function-whitespace") && M() : G() && v("data") && M();
                    break;
                case "transform-function-whitespace":
                    g(z()) || (40 == p ? G(new E(w)) && v("data") : G() && v("data") && M());
                    break;
                case "number":
                    X(new S);
                    45 == p ? d(z()) ? O() && w.append([45, p]) && v("number-rest") : 46 == z(1) && d(z(2)) ? O(2) && w.append([45, 46, p]) && v("number-fraction") : v("data") && M() : 43 == p ? d(z()) ? O() && w.append([43, p]) && v("number-rest") : 46 == z(1) && d(z(2)) ? O(2) && w.append([43, 46, p]) && v("number-fraction") :
                        v("data") && M() : d(p) ? w.append(p) && v("number-rest") : 46 == p ? d(z()) ? O() && w.append([46, p]) && v("number-fraction") : v("data") && M() : v("data") && M();
                    break;
                case "number-rest":
                    d(p) ? w.append(p) : 46 == p ? d(z()) ? O() && w.append([46, p]) && v("number-fraction") : G() && v("data") && M() : 37 == p ? G(new Y(w)) && v("data") : 69 == p || 101 == p ? d(z()) ? O() && w.append([37, p]) && v("sci-notation") : 43 != z(1) && 45 != z(1) || !d(z(2)) ? X(new U(w, p)) && v("dimension") : w.append([37, z(1), z(2)]) && O(2) && v("sci-notation") : 45 == p ? a(z()) ? O() && X(new U(w, [45, p])) && v("dimension") :
                        92 == z(1) && s(z(2)) ? T() && G() && v("data") && M() : 92 == z(1) ? O() && X(new U(w, [45, ba()])) && v("dimension") : G() && v("data") && M() : a(p) ? X(new U(w, p)) && v("dimension") : 92 == p ? s(z) ? T() && G() && v("data") && M() : X(new U(w, ba)) && v("dimension") : G() && v("data") && M();
                    break;
                case "number-fraction":
                    w.type = "number";
                    d(p) ? w.append(p) : 37 == p ? G(new Y(w)) && v("data") : 69 == p || 101 == p ? d(z()) ? O() && w.append([101, p]) && v("sci-notation") : 43 != z(1) && 45 != z(1) || !d(z(2)) ? X(new U(w, p)) && v("dimension") : w.append([101, z(1), z(2)]) && O(2) && v("sci-notation") :
                        45 == p ? a(z()) ? O() && X(new U(w, [45, p])) && v("dimension") : 92 == z(1) && s(z(2)) ? T() && G() && v("data") && M() : 92 == z(1) ? O() && X(new U(w, [45, ba()])) && v("dimension") : G() && v("data") && M() : a(p) ? X(new U(w, p)) && v("dimension") : 92 == p ? s(z) ? T() && G() && v("data") && M() : X(new U(w, ba())) && v("dimension") : G() && v("data") && M();
                    break;
                case "dimension":
                    c(p) ? w.append(p) : 92 == p ? s(z()) ? T() && G() && v("data") && M() : w.append(ba()) : G() && v("data") && M();
                    break;
                case "sci-notation":
                    w.type = "number";
                    d(p) ? w.append(p) : G() && v("data") && M();
                    break;
                case "url":
                    ha() ?
                        T() && G(new k) && v("data") : 34 == p ? v("url-double-quote") : 39 == p ? v("url-single-quote") : 41 == p ? G(new P) && v("data") : g(p) || v("url-unquoted") && M();
                    break;
                case "url-double-quote":
                    w instanceof P || X(new P);
                    ha() ? T() && G(new k) && v("data") : 34 == p ? v("url-end") : h(p) ? T() && v("bad-url") : 92 == p ? h(z()) ? O() : s(z()) ? T() && G(new k) && v("data") && M() : w.append(ba()) : w.append(p);
                    break;
                case "url-single-quote":
                    w instanceof P || X(new P);
                    ha() ? T() && G(new k) && v("data") : 39 == p ? v("url-end") : h(p) ? T() && v("bad-url") : 92 == p ? h(z()) ? O() : s(z()) ? T() && G(new k) &&
                        v("data") && M() : w.append(ba()) : w.append(p);
                    break;
                case "url-end":
                    ha() ? T() && G(new k) && v("data") : g(p) || (41 == p ? G() && v("data") : T() && v("bad-url") && M());
                    break;
                case "url-unquoted":
                    w instanceof P || X(new P);
                    ha() ? T() && G(new k) && v("data") : g(p) ? v("url-end") : 41 == p ? G() && v("data") : 34 == p || 39 == p || 40 == p || 0 <= p && 8 >= p || 14 <= p && 31 >= p || 127 <= p && 159 >= p ? T() && v("bad-url") : 92 == p ? s(z()) ? T() && v("bad-url") : w.append(ba()) : w.append(p);
                    break;
                case "bad-url":
                    ha() ? T() && G(new k) && v("data") : 41 == p ? G(new k) && v("data") : 92 == p && (s(z()) || ba());
                    break;
                case "unicode-range":
                    for (var ja = [p], na = [p], la = 1; 6 > la; la++)
                        if (l(z())) O(), ja.push(p), na.push(p);
                        else break;
                    if (63 == z()) {
                        for (; 6 > la; la++)
                            if (63 == z()) O(), ja.push(48), na.push(102);
                            else break;
                        G(new W(ja, na)) && v("data")
                    } else if (45 == z(1) && l(z(2))) {
                        O();
                        O();
                        na = [p];
                        for (la = 1; 6 > la; la++)
                            if (l(z())) O(), na.push(p);
                            else break;
                        G(new W(ja, na)) && v("data")
                    } else G(new W(ja)) && v("data");
                    break;
                default:
                    qa("Unknown state '" + da + "'")
            }
        }
    }
});
(function(b, d) {
    "function" === typeof define && define.amd ? define(["exports"], d) : "undefined" !== typeof exports ? d(exports) : d(b)
})(this, function(b) {
    function d() {
        return this
    }

    function l() {
        this.value = [];
        return this
    }

    function a(b) {
        this.name = b;
        this.prelude = [];
        this.value = [];
        b in a.registry && (this.fillType = a.registry[b]);
        return this
    }

    function c() {
        this.selector = [];
        this.value = [];
        return this
    }

    function h(a) {
        this.name = a;
        this.value = [];
        return this
    }

    function g(a) {
        this.name = a;
        this.value = [];
        return this
    }

    function s(a) {
        this.name =
            a;
        this.value = [];
        return this
    }

    function n() {
        this.value = [];
        return this
    }
    d.prototype.fillType = "";
    d.prototype.toString = function(a) {
        return JSON.stringify(this.toJSON(), null, a)
    };
    d.prototype.append = function(a) {
        this.value.push(a);
        return this
    };
    l.prototype = new d;
    l.prototype.type = "STYLESHEET";
    l.prototype.toJSON = function() {
        return {
            type: "stylesheet",
            value: this.value.map(function(a) {
                return a.toJSON()
            })
        }
    };
    a.prototype = new d;
    a.prototype.type = "AT-RULE";
    a.prototype.appendPrelude = function(a) {
        this.prelude.push(a);
        return this
    };
    a.prototype.toJSON = function() {
        return {
            type: "at",
            name: this.name,
            prelude: this.prelude.map(function(a) {
                return a.toJSON()
            }),
            value: this.value.map(function(a) {
                return a.toJSON()
            })
        }
    };
    a.registry = {
        "import": "",
        media: "rule",
        "font-face": "declaration",
        page: "declaration",
        keyframes: "rule",
        namespace: "",
        "counter-style": "declaration",
        supports: "rule",
        document: "rule",
        "font-feature-values": "declaration",
        viewport: "",
        "region-style": "rule"
    };
    c.prototype = new d;
    c.prototype.type = "STYLE-RULE";
    c.prototype.fillType = "declaration";
    c.prototype.appendSelector = function(a) {
        this.selector.push(a);
        return this
    };
    c.prototype.toJSON = function() {
        return {
            type: "selector",
            selector: this.selector.map(function(a) {
                return a.toJSON()
            }),
            value: this.value.map(function(a) {
                return a.toJSON()
            })
        }
    };
    h.prototype = new d;
    h.prototype.type = "DECLARATION";
    h.prototype.toJSON = function() {
        return {
            type: "declaration",
            name: this.name,
            value: this.value.map(function(a) {
                return a.toJSON()
            })
        }
    };
    g.prototype = new d;
    g.prototype.type = "BLOCK";
    g.prototype.toJSON = function() {
        return {
            type: "block",
            name: this.name,
            value: this.value.map(function(a) {
                return a.toJSON()
            })
        }
    };
    s.prototype = new d;
    s.prototype.type = "FUNCTION";
    s.prototype.toJSON = function() {
        return {
            type: "func",
            name: this.name,
            value: this.value.map(function(a) {
                return a.toJSON()
            })
        }
    };
    n.prototype = new d;
    n.prototype.type = "FUNCTION-ARG";
    n.prototype.toJSON = function() {
        return this.value.map(function(a) {
            return a.toJSON()
        })
    };
    b.parse = function(b) {
        function q() {
            switch (f.tokenType) {
                case "(":
                case "[":
                case "{":
                    a: for (var a = {
                                "(": ")",
                                "[": "]",
                                "{": "}"
                            }[f.tokenType],
                            e = new g(f.tokenType);;) switch (d(), f.tokenType) {
                        case "EOF":
                        case a:
                            break a;
                        default:
                            e.append(q())
                    }
                    return e;
                case "FUNCTION":
                    a: for (a = new s(f.value), e = new n;;) switch (d(), f.tokenType) {
                        case "EOF":
                        case ")":
                            a.append(e);
                            break a;
                        case "DELIM":
                            "," == f.value ? (a.append(e), e = new n) : e.append(f);
                            break;
                        default:
                            e.append(q())
                    }
                    return a;
                default:
                    return f
            }
        }
        for (var k = "top-level", r = -1, f, m = new l, e = [m], u = e[0], d = function(a) {
                void 0 === a && (a = 1);
                r += a;
                f = r < b.length ? b[r] : new EOFToken;
                return !0
            }, I = function() {
                r--;
                return !0
            }, y = function(a) {
                void 0 ===
                    a ? "" !== u.fillType ? k = u.fillType : "STYLESHEET" == u.type ? k = "top-level" : (console.log("Unknown rule-type while switching to current rule's content mode: ", u), k = "") : k = a;
                return !0
            }, J = function(a) {
                u = a;
                e.push(u);
                return !0
            }, H = function(a) {
                console.log("Parse error at token " + r + ": " + f + ".\n" + a);
                return !0
            }, x = function() {
                var a = e.pop();
                u = e[e.length - 1];
                u.append(a);
                return !0
            }, D = function() {
                e.pop();
                u = e[e.length - 1];
                return !0
            }, A = function() {
                for (; 1 < e.length;) x()
            };;)
            if (d(), "DELIM" !== f.tokenType || "\r" !== f.value) switch (k) {
                case "top-level":
                    switch (f.tokenType) {
                        case "CDO":
                        case "CDC":
                        case "WHITESPACE":
                            break;
                        case "AT-KEYWORD":
                            J(new a(f.value)) && y("at-rule");
                            break;
                        case "{":
                            H("Attempt to open a curly-block at top-level.") && q();
                            break;
                        case "EOF":
                            return A(), m;
                        default:
                            J(new c) && y("selector") && I()
                    }
                    break;
                case "at-rule":
                    switch (f.tokenType) {
                        case ";":
                            x() && y();
                            break;
                        case "{":
                            "" !== u.fillType ? y(u.fillType) : H("Attempt to open a curly-block in a statement-type at-rule.") && D() && y("next-block") && I();
                            break;
                        case "EOF":
                            return A(), m;
                        default:
                            u.appendPrelude(q())
                    }
                    break;
                case "rule":
                    switch (f.tokenType) {
                        case "WHITESPACE":
                            break;
                        case "}":
                            x() && y();
                            break;
                        case "AT-KEYWORD":
                            J(new a(f.value)) && y("at-rule");
                            break;
                        case "EOF":
                            return A(), m;
                        default:
                            J(new c) && y("selector") && I()
                    }
                    break;
                case "selector":
                    switch (f.tokenType) {
                        case "{":
                            y("declaration");
                            break;
                        case "EOF":
                            return D() && A(), m;
                        default:
                            u.appendSelector(q())
                    }
                    break;
                case "declaration":
                    switch (f.tokenType) {
                        case "WHITESPACE":
                        case ";":
                            break;
                        case "}":
                            x() && y();
                            break;
                        case "AT-RULE":
                            J(new a(f.value)) && y("at-rule");
                            break;
                        case "IDENT":
                            J(new h(f.value)) && y("after-declaration-name");
                            break;
                        case "EOF":
                            return A(),
                                m;
                        default:
                            H() && D() && y("next-declaration")
                    }
                    break;
                case "after-declaration-name":
                    switch (f.tokenType) {
                        case "WHITESPACE":
                            break;
                        case ":":
                            y("declaration-value");
                            break;
                        case ";":
                            H("Incomplete declaration - semicolon after property name.") && D() && y();
                            break;
                        case "EOF":
                            return D() && A(), m;
                        default:
                            H("Invalid declaration - additional token after property name") && D() && y("next-declaration")
                    }
                    break;
                case "declaration-value":
                    switch (f.tokenType) {
                        case "DELIM":
                            "!" == f.value && "IDENTIFIER" == b[r + 1].tokenType && "important" == b[r +
                                1].value.toLowerCase() ? (d(), u.important = !0, y("declaration-end")) : u.append(f);
                            break;
                        case ";":
                            x() && y();
                            break;
                        case "}":
                            x() && x() && y();
                            break;
                        case "EOF":
                            return A(), m;
                        default:
                            u.append(q())
                    }
                    break;
                case "declaration-end":
                    switch (f.tokenType) {
                        case "WHITESPACE":
                            break;
                        case ";":
                            x() && y();
                            break;
                        case "}":
                            x() && x() && y();
                            break;
                        case "EOF":
                            return A(), m;
                        default:
                            H("Invalid declaration - additional token after !important.") && D() && y("next-declaration")
                    }
                    break;
                case "next-block":
                    switch (f.tokenType) {
                        case "{":
                            q() && y();
                            break;
                        case "EOF":
                            return A(),
                                m;
                        default:
                            q()
                    }
                    break;
                case "next-declaration":
                    switch (f.tokenType) {
                        case ";":
                            y("declaration");
                            break;
                        case "}":
                            y("declaration") && I();
                            break;
                        case "EOF":
                            return A(), m;
                        default:
                            q()
                    }
                    break;
                default:
                    console.log("Unknown parsing mode: " + k);
                    return
            }
    }
});
(function() {
    var b, d, l, a;
    b = [function() {
        return new XMLHttpRequest
    }, function() {
        return new ActiveXObject("Msxml2.XMLHTTP")
    }, function() {
        return new ActiveXObject("Msxml3.XMLHTTP")
    }, function() {
        return new ActiveXObject("Microsoft.XMLHTTP")
    }];
    l = function() {
        var a, h;
        h = !1;
        for (a = 0; a < b.length;) {
            try {
                h = b[a++]()
            } catch (g) {
                continue
            }
            break
        }
        return h
    };
    d = function(a, b) {
        var g;
        g = l();
        g.onreadystatechange = function() {
            if (4 === g.readyState) {
                if (200 !== g.status && !a.match(/^file:\/\/\//)) throw "Error!";
                console.log("INFO: processing " +
                    a);
                b(g.responseText)
            }
        };
        try {
            g.open("GET", a, !0), g.send()
        } catch (s) {
            console.log("ERROR: " + s.message + " (" + s.type + ") when accessing " + a)
        }
    };
    a = function() {
        var a, b;
        b = a = 0;
        window.innerHeight ? (a = window.innerWidth, b = window.innerHeight) : document.documentElement && document.documentElement.clientHeight ? (a = document.documentElement.clientWidth, b = document.documentElement.clientHeight) : document.body && (a = document.body.clientWidth, b = document.body.clientHeight);
        return {
            width: a,
            height: b
        }
    };
    (function() {
        var b, h, g, s, n, t, q, k, r,
            f;
        b = function(a) {
            var e, f, b, k, c, r, g, h, s, n;
            f = [];
            s = a.value;
            c = 0;
            for (g = s.length; c < g; c++) {
                e = s[c];
                b = !1;
                n = e.value;
                r = 0;
                for (h = n.length; r < h; r++) k = n[r], "DIMENSION" !== k.tokenType || "vmin" !== k.unit && "vh" !== k.unit && "vw" !== k.unit || (b = !0);
                b && f.push(e)
            }
            return a.value = f
        };
        h = function(a) {
            var e, f, k, r, g, s;
            k = [];
            s = a.value;
            r = 0;
            for (g = s.length; r < g; r++) switch (f = s[r], f.type) {
                case "STYLE-RULE":
                    e = b(f);
                    0 !== e.length && k.push(f);
                    break;
                case "AT-RULE":
                    e = h(f), 0 !== e.length && k.push(f)
            }
            return a.value = k
        };
        q = {};
        k = document.createElement("style");
        document.getElementsByTagName("head")[0].appendChild(k);
        n = document.getElementsByTagName("link");
        r = t = s = 0;
        for (f = n.length; r < f; r++) g = n[r], "stylesheet" === g.rel && (s++, d(g.href, function(a) {
            a = tokenize(a);
            a = parse(a);
            h(a);
            q[g.href] = a;
            t++;
            if (t === s) window.onresize()
        }));
        window.onresize = function() {
            var f, e, b, r, c, g, h, s;
            f = a();
            e = {
                vh: f.height / 100,
                vw: f.width / 100
            };
            e.vmin = Math.min(e.vh, e.vw);
            s = f.width / f.height;
            c = function(a, e) {
                var f, b, k, m;
                if (null != a.map) return a.map(e);
                f = [];
                k = 0;
                for (m = a.length; k < m; k++) b = a[k], f.push(e(b));
                return f
            };
            b = function(a) {
                var f, b, k, m, r, g, u;
                b = c(a.selector, function(a) {
                    return null != a.toSourceString ? a.toSourceString() : ""
                }).join("");
                b += "{";
                g = a.value;
                a = 0;
                for (m = g.length; a < m; a++) {
                    f = g[a];
                    b += f.name;
                    b += ":";
                    u = f.value;
                    k = 0;
                    for (r = u.length; k < r; k++) f = u[k], b = "DIMENSION" !== f.tokenType || "vmin" !== f.unit && "vh" !== f.unit && "vw" !== f.unit ? b + f.toSourceString() : b + ("" + Math.floor(f.num * e[f.unit]) + "px");
                    b += ";"
                }
                return b + "}\r"
            };
            r = function(a) {
                var e, f, k, m, g, h, n, d, q, t, l, y, J, aa;
                k = "";
                y = a.value;
                h = 0;
                for (q = y.length; h < q; h++) switch (f =
                    y[h], f.type) {
                    case "STYLE-RULE":
                        k += b(f);
                        break;
                    case "AT-RULE":
                        if ("media" === f.name) {
                            a = "";
                            e = [];
                            J = f.prelude;
                            n = 0;
                            for (t = J.length; n < t; n++)
                                if (m = J[n], "(" === m.name) {
                                    a += "(";
                                    aa = m.value;
                                    d = 0;
                                    for (l = aa.length; d < l; d++) g = aa[d], m = null != g.toSourceString ? g.toSourceString() : "", "NUMBER" === g.tokenType && e.push(parseInt(m)), a += m;
                                    a += ")"
                                } else a += m.toSourceString();
                            s < e[0] / e[1] && (k += r(f))
                        } else {
                            a = "";
                            t = f.prelude;
                            e = 0;
                            for (n = t.length; e < n; e++) m = t[e], "(" === m.name ? (a += "(", a += c(m.value, function(a) {
                                return null != a.toSourceString ? a.toSourceString() :
                                    ""
                            }).join(""), a += ")") : a += m.toSourceString();
                            k += "@" + f.name + " " + a + " {";
                            k += r(f);
                            k += "}\n"
                        }
                }
                return k
            };
            f = "";
            for (h in q) g = q[h], f += r(g);
            return null != k.styleSheet ? k.styleSheet.cssText = f : k.innerHTML = f
        }
    })()
}).call(this);
if ("undefined" == typeof jQuery) throw Error("Bootstrap's JavaScript requires jQuery"); + function(b) {
    b.fn.emulateTransitionEnd = function(d) {
        var l = !1,
            a = this;
        b(this).one(b.support.transition.end, function() {
            l = !0
        });
        return setTimeout(function() {
            l || b(a).trigger(b.support.transition.end)
        }, d), this
    };
    b(function() {
        var d = b.support,
            l;
        a: {
            l = document.createElement("bootstrap");
            var a = {
                    WebkitTransition: "webkitTransitionEnd",
                    MozTransition: "transitionend",
                    OTransition: "oTransitionEnd otransitionend",
                    transition: "transitionend"
                },
                c;
            for (c in a)
                if (void 0 !== l.style[c]) {
                    l = {
                        end: a[c]
                    };
                    break a
                }
            l = !1
        }
        d.transition = l
    })
}(jQuery); + function(b) {
    var d = function(a) {
        b(a).on("click", '[data-dismiss="alert"]', this.close)
    };
    d.prototype.close = function(a) {
        function c() {
            s.trigger("closed.bs.alert").remove()
        }
        var h = b(this),
            g = h.attr("data-target");
        g || (g = h.attr("href"), g = g && g.replace(/.*(?=#[^\s]*$)/, ""));
        var s = b(g);
        a && a.preventDefault();
        s.length || (s = h.hasClass("alert") ? h : h.parent());
        s.trigger(a = b.Event("close.bs.alert"));
        a.isDefaultPrevented() || (s.removeClass("in"), b.support.transition && s.hasClass("fade") ? s.one(b.support.transition.end, c).emulateTransitionEnd(150) :
            c())
    };
    var l = b.fn.alert;
    b.fn.alert = function(a) {
        return this.each(function() {
            var c = b(this),
                h = c.data("bs.alert");
            h || c.data("bs.alert", h = new d(this));
            "string" == typeof a && h[a].call(c)
        })
    };
    b.fn.alert.Constructor = d;
    b.fn.alert.noConflict = function() {
        return b.fn.alert = l, this
    };
    b(document).on("click.bs.alert.data-api", '[data-dismiss="alert"]', d.prototype.close)
}(jQuery); + function(b) {
    var d = function(a, c) {
        this.$element = b(a);
        this.options = b.extend({}, d.DEFAULTS, c);
        this.isLoading = !1
    };
    d.DEFAULTS = {
        loadingText: "loading..."
    };
    d.prototype.setState = function(a) {
        var c = this.$element,
            h = c.is("input") ? "val" : "html",
            g = c.data();
        a += "Text";
        g.resetText || c.data("resetText", c[h]());
        c[h](g[a] || this.options[a]);
        setTimeout(b.proxy(function() {
                "loadingText" == a ? (this.isLoading = !0, c.addClass("disabled").attr("disabled", "disabled")) : this.isLoading && (this.isLoading = !1, c.removeClass("disabled").removeAttr("disabled"))
            },
            this), 0)
    };
    d.prototype.toggle = function() {
        var a = !0,
            b = this.$element.closest('[data-toggle="buttons"]');
        if (b.length) {
            var h = this.$element.find("input");
            "radio" == h.prop("type") && (h.prop("checked") && this.$element.hasClass("active") ? a = !1 : b.find(".active").removeClass("active"));
            a && h.prop("checked", !this.$element.hasClass("active")).trigger("change")
        }
        a && this.$element.toggleClass("active")
    };
    var l = b.fn.button;
    b.fn.button = function(a) {
        return this.each(function() {
            var c = b(this),
                h = c.data("bs.button"),
                g = "object" ==
                typeof a && a;
            h || c.data("bs.button", h = new d(this, g));
            "toggle" == a ? h.toggle() : a && h.setState(a)
        })
    };
    b.fn.button.Constructor = d;
    b.fn.button.noConflict = function() {
        return b.fn.button = l, this
    };
    b(document).on("click.bs.button.data-api", "[data-toggle^=button]", function(a) {
        var c = b(a.target);
        c.hasClass("btn") || (c = c.closest(".btn"));
        c.button("toggle");
        a.preventDefault()
    })
}(jQuery); + function(b) {
    var d = function(a, c) {
        this.$element = b(a);
        this.$indicators = this.$element.find(".carousel-indicators");
        this.options = c;
        this.paused = this.sliding = this.interval = this.$active = this.$items = null;
        "hover" == this.options.pause && this.$element.on("mouseenter", b.proxy(this.pause, this)).on("mouseleave", b.proxy(this.cycle, this))
    };
    d.DEFAULTS = {
        interval: 5E3,
        pause: "hover",
        wrap: !0
    };
    d.prototype.cycle = function(a) {
        return a || (this.paused = !1), this.interval && clearInterval(this.interval), this.options.interval && !this.paused &&
            (this.interval = setInterval(b.proxy(this.next, this), this.options.interval)), this
    };
    d.prototype.getActiveIndex = function() {
        return this.$active = this.$element.find(".item.active"), this.$items = this.$active.parent().children(), this.$items.index(this.$active)
    };
    d.prototype.to = function(a) {
        var c = this,
            h = this.getActiveIndex();
        return a > this.$items.length - 1 || 0 > a ? void 0 : this.sliding ? this.$element.one("slid.bs.carousel", function() {
            c.to(a)
        }) : h == a ? this.pause().cycle() : this.slide(a > h ? "next" : "prev", b(this.$items[a]))
    };
    d.prototype.pause = function(a) {
        return a || (this.paused = !0), this.$element.find(".next, .prev").length && b.support.transition && (this.$element.trigger(b.support.transition.end), this.cycle(!0)), this.interval = clearInterval(this.interval), this
    };
    d.prototype.next = function() {
        return this.sliding ? void 0 : this.slide("next")
    };
    d.prototype.prev = function() {
        return this.sliding ? void 0 : this.slide("prev")
    };
    d.prototype.slide = function(a, c) {
        var h = this.$element.find(".item.active"),
            g = c || h[a](),
            s = this.interval,
            n = "next" == a ? "left" :
            "right",
            d = "next" == a ? "first" : "last",
            q = this;
        if (!g.length) {
            if (!this.options.wrap) return;
            g = this.$element.find(".item")[d]()
        }
        if (g.hasClass("active")) return this.sliding = !1;
        d = b.Event("slide.bs.carousel", {
            relatedTarget: g[0],
            direction: n
        });
        return this.$element.trigger(d), d.isDefaultPrevented() ? void 0 : (this.sliding = !0, s && this.pause(), this.$indicators.length && (this.$indicators.find(".active").removeClass("active"), this.$element.one("slid.bs.carousel", function() {
                var a = b(q.$indicators.children()[q.getActiveIndex()]);
                a && a.addClass("active")
            })), b.support.transition && this.$element.hasClass("slide") ? (g.addClass(a), g[0].offsetWidth, h.addClass(n), g.addClass(n), h.one(b.support.transition.end, function() {
                g.removeClass([a, n].join(" ")).addClass("active");
                h.removeClass(["active", n].join(" "));
                q.sliding = !1;
                setTimeout(function() {
                    q.$element.trigger("slid.bs.carousel")
                }, 0)
            }).emulateTransitionEnd(1E3 * h.css("transition-duration").slice(0, -1))) : (h.removeClass("active"), g.addClass("active"), this.sliding = !1, this.$element.trigger("slid.bs.carousel")),
            s && this.cycle(), this)
    };
    var l = b.fn.carousel;
    b.fn.carousel = function(a) {
        return this.each(function() {
            var c = b(this),
                h = c.data("bs.carousel"),
                g = b.extend({}, d.DEFAULTS, c.data(), "object" == typeof a && a),
                s = "string" == typeof a ? a : g.slide;
            h || c.data("bs.carousel", h = new d(this, g));
            "number" == typeof a ? h.to(a) : s ? h[s]() : g.interval && h.pause().cycle()
        })
    };
    b.fn.carousel.Constructor = d;
    b.fn.carousel.noConflict = function() {
        return b.fn.carousel = l, this
    };
    b(document).on("click.bs.carousel.data-api", "[data-slide], [data-slide-to]",
        function(a) {
            var c, h = b(this),
                g = b(h.attr("data-target") || (c = h.attr("href")) && c.replace(/.*(?=#[^\s]+$)/, ""));
            c = b.extend({}, g.data(), h.data());
            var s = h.attr("data-slide-to");
            s && (c.interval = !1);
            g.carousel(c);
            (s = h.attr("data-slide-to")) && g.data("bs.carousel").to(s);
            a.preventDefault()
        });
    b(window).on("load", function() {
        b('[data-ride="carousel"]').each(function() {
            var a = b(this);
            a.carousel(a.data())
        })
    })
}(jQuery); + function(b) {
    var d = function(a, c) {
        this.$element = b(a);
        this.options = b.extend({}, d.DEFAULTS, c);
        this.transitioning = null;
        this.options.parent && (this.$parent = b(this.options.parent));
        this.options.toggle && this.toggle()
    };
    d.DEFAULTS = {
        toggle: !0
    };
    d.prototype.dimension = function() {
        return this.$element.hasClass("width") ? "width" : "height"
    };
    d.prototype.show = function() {
        if (!this.transitioning && !this.$element.hasClass("in")) {
            var a = b.Event("show.bs.collapse");
            if (this.$element.trigger(a), !a.isDefaultPrevented()) {
                if ((a = this.$parent &&
                        this.$parent.find("> .panel > .in")) && a.length) {
                    var c = a.data("bs.collapse");
                    if (c && c.transitioning) return;
                    a.collapse("hide");
                    c || a.data("bs.collapse", null)
                }
                var h = this.dimension();
                this.$element.removeClass("collapse").addClass("collapsing")[h](0);
                this.transitioning = 1;
                a = function() {
                    this.$element.removeClass("collapsing").addClass("collapse in")[h]("auto");
                    this.transitioning = 0;
                    this.$element.trigger("shown.bs.collapse")
                };
                if (!b.support.transition) return a.call(this);
                c = b.camelCase(["scroll", h].join("-"));
                this.$element.one(b.support.transition.end, b.proxy(a, this)).emulateTransitionEnd(350)[h](this.$element[0][c])
            }
        }
    };
    d.prototype.hide = function() {
        if (!this.transitioning && this.$element.hasClass("in")) {
            var a = b.Event("hide.bs.collapse");
            if (this.$element.trigger(a), !a.isDefaultPrevented()) {
                a = this.dimension();
                this.$element[a](this.$element[a]())[0].offsetHeight;
                this.$element.addClass("collapsing").removeClass("collapse").removeClass("in");
                this.transitioning = 1;
                var c = function() {
                    this.transitioning = 0;
                    this.$element.trigger("hidden.bs.collapse").removeClass("collapsing").addClass("collapse")
                };
                return b.support.transition ? void this.$element[a](0).one(b.support.transition.end, b.proxy(c, this)).emulateTransitionEnd(350) : c.call(this)
            }
        }
    };
    d.prototype.toggle = function() {
        this[this.$element.hasClass("in") ? "hide" : "show"]()
    };
    var l = b.fn.collapse;
    b.fn.collapse = function(a) {
        return this.each(function() {
            var c = b(this),
                h = c.data("bs.collapse"),
                g = b.extend({}, d.DEFAULTS, c.data(), "object" == typeof a && a);
            !h && g.toggle && "show" == a && (a = !a);
            h || c.data("bs.collapse", h = new d(this, g));
            "string" == typeof a && h[a]()
        })
    };
    b.fn.collapse.Constructor =
        d;
    b.fn.collapse.noConflict = function() {
        return b.fn.collapse = l, this
    };
    b(document).on("click.bs.collapse.data-api", "[data-toggle=collapse]", function(a) {
        var c, h = b(this);
        a = h.attr("data-target") || a.preventDefault() || (c = h.attr("href")) && c.replace(/.*(?=#[^\s]+$)/, "");
        c = b(a);
        var g = (a = c.data("bs.collapse")) ? "toggle" : h.data(),
            s = h.attr("data-parent"),
            n = s && b(s);
        a && a.transitioning || (n && n.find('[data-toggle=collapse][data-parent="' + s + '"]').not(h).addClass("collapsed"), h[c.hasClass("in") ? "addClass" : "removeClass"]("collapsed"));
        c.collapse(g)
    })
}(jQuery); + function(b) {
    function d(g) {
        b(a).remove();
        b(c).each(function() {
            var a = l(b(this)),
                c = {
                    relatedTarget: this
                };
            a.hasClass("open") && (a.trigger(g = b.Event("hide.bs.dropdown", c)), g.isDefaultPrevented() || a.removeClass("open").trigger("hidden.bs.dropdown", c))
        })
    }

    function l(a) {
        var c = a.attr("data-target");
        c || (c = a.attr("href"), c = c && /#[A-Za-z]/.test(c) && c.replace(/.*(?=#[^\s]*$)/, ""));
        return (c = c && b(c)) && c.length ? c : a.parent()
    }
    var a = ".dropdown-backdrop",
        c = "[data-toggle=dropdown]",
        h = function(a) {
            b(a).on("click.bs.dropdown", this.toggle)
        };
    h.prototype.toggle = function(a) {
        var c = b(this);
        if (!c.is(".disabled, :disabled")) {
            var g = l(c),
                h = g.hasClass("open");
            if (d(), !h) {
                "ontouchstart" in document.documentElement && !g.closest(".navbar-nav").length && b('<div class="dropdown-backdrop"/>').insertAfter(b(this)).on("click", d);
                h = {
                    relatedTarget: this
                };
                if (g.trigger(a = b.Event("show.bs.dropdown", h)), a.isDefaultPrevented()) return;
                g.toggleClass("open").trigger("shown.bs.dropdown", h);
                c.focus()
            }
            return !1
        }
    };
    h.prototype.keydown = function(a) {
        if (/(38|40|27)/.test(a.keyCode)) {
            var g =
                b(this);
            if (a.preventDefault(), a.stopPropagation(), !g.is(".disabled, :disabled")) {
                var h = l(g),
                    d = h.hasClass("open");
                if (!d || d && 27 == a.keyCode) return 27 == a.which && h.find(c).focus(), g.click();
                g = h.find("[role=menu] li:not(.divider):visible a, [role=listbox] li:not(.divider):visible a");
                g.length && (h = g.index(g.filter(":focus")), 38 == a.keyCode && 0 < h && h--, 40 == a.keyCode && h < g.length - 1 && h++, ~h || (h = 0), g.eq(h).focus())
            }
        }
    };
    var g = b.fn.dropdown;
    b.fn.dropdown = function(a) {
        return this.each(function() {
            var c = b(this),
                g = c.data("bs.dropdown");
            g || c.data("bs.dropdown", g = new h(this));
            "string" == typeof a && g[a].call(c)
        })
    };
    b.fn.dropdown.Constructor = h;
    b.fn.dropdown.noConflict = function() {
        return b.fn.dropdown = g, this
    };
    b(document).on("click.bs.dropdown.data-api", d).on("click.bs.dropdown.data-api", ".dropdown form", function(a) {
        a.stopPropagation()
    }).on("click.bs.dropdown.data-api", c, h.prototype.toggle).on("keydown.bs.dropdown.data-api", c + ", [role=menu], [role=listbox]", h.prototype.keydown)
}(jQuery); + function(b) {
    var d = function(a, c) {
        this.options = c;
        this.$element = b(a);
        this.$backdrop = this.isShown = null;
        this.options.remote && this.$element.find(".modal-content").load(this.options.remote, b.proxy(function() {
            this.$element.trigger("loaded.bs.modal")
        }, this))
    };
    d.DEFAULTS = {
        backdrop: !0,
        keyboard: !0,
        show: !0
    };
    d.prototype.toggle = function(a) {
        return this[this.isShown ? "hide" : "show"](a)
    };
    d.prototype.show = function(a) {
        var c = this,
            h = b.Event("show.bs.modal", {
                relatedTarget: a
            });
        this.$element.trigger(h);
        this.isShown || h.isDefaultPrevented() ||
            (this.isShown = !0, this.escape(), this.$element.on("click.dismiss.bs.modal", '[data-dismiss="modal"]', b.proxy(this.hide, this)), this.backdrop(function() {
                var g = b.support.transition && c.$element.hasClass("fade");
                c.$element.parent().length || c.$element.appendTo(document.body);
                c.$element.show().scrollTop(0);
                g && c.$element[0].offsetWidth;
                c.$element.addClass("in").attr("aria-hidden", !1);
                c.enforceFocus();
                var h = b.Event("shown.bs.modal", {
                    relatedTarget: a
                });
                g ? c.$element.find(".modal-dialog").one(b.support.transition.end,
                    function() {
                        c.$element.focus().trigger(h)
                    }).emulateTransitionEnd(300) : c.$element.focus().trigger(h)
            }))
    };
    d.prototype.hide = function(a) {
        a && a.preventDefault();
        a = b.Event("hide.bs.modal");
        this.$element.trigger(a);
        this.isShown && !a.isDefaultPrevented() && (this.isShown = !1, this.escape(), b(document).off("focusin.bs.modal"), this.$element.removeClass("in").attr("aria-hidden", !0).off("click.dismiss.bs.modal"), b.support.transition && this.$element.hasClass("fade") ? this.$element.one(b.support.transition.end, b.proxy(this.hideModal,
            this)).emulateTransitionEnd(300) : this.hideModal())
    };
    d.prototype.enforceFocus = function() {
        b(document).off("focusin.bs.modal").on("focusin.bs.modal", b.proxy(function(a) {
            this.$element[0] === a.target || this.$element.has(a.target).length || this.$element.focus()
        }, this))
    };
    d.prototype.escape = function() {
        this.isShown && this.options.keyboard ? this.$element.on("keyup.dismiss.bs.modal", b.proxy(function(a) {
            27 == a.which && this.hide()
        }, this)) : this.isShown || this.$element.off("keyup.dismiss.bs.modal")
    };
    d.prototype.hideModal =
        function() {
            var a = this;
            this.$element.hide();
            this.backdrop(function() {
                a.removeBackdrop();
                a.$element.trigger("hidden.bs.modal")
            })
        };
    d.prototype.removeBackdrop = function() {
        this.$backdrop && this.$backdrop.remove();
        this.$backdrop = null
    };
    d.prototype.backdrop = function(a) {
        var c = this.$element.hasClass("fade") ? "fade" : "";
        if (this.isShown && this.options.backdrop) {
            var h = b.support.transition && c;
            if (this.$backdrop = b('<div class="modal-backdrop ' + c + '" />').appendTo(document.body), this.$element.on("click.dismiss.bs.modal",
                    b.proxy(function(a) {
                        a.target === a.currentTarget && ("static" == this.options.backdrop ? this.$element[0].focus.call(this.$element[0]) : this.hide.call(this))
                    }, this)), h && this.$backdrop[0].offsetWidth, this.$backdrop.addClass("in"), a) h ? this.$backdrop.one(b.support.transition.end, a).emulateTransitionEnd(150) : a()
        } else !this.isShown && this.$backdrop ? (this.$backdrop.removeClass("in"), b.support.transition && this.$element.hasClass("fade") ? this.$backdrop.one(b.support.transition.end, a).emulateTransitionEnd(150) : a()) : a &&
            a()
    };
    var l = b.fn.modal;
    b.fn.modal = function(a, c) {
        return this.each(function() {
            var h = b(this),
                g = h.data("bs.modal"),
                s = b.extend({}, d.DEFAULTS, h.data(), "object" == typeof a && a);
            g || h.data("bs.modal", g = new d(this, s));
            "string" == typeof a ? g[a](c) : s.show && g.show(c)
        })
    };
    b.fn.modal.Constructor = d;
    b.fn.modal.noConflict = function() {
        return b.fn.modal = l, this
    };
    b(document).on("click.bs.modal.data-api", '[data-toggle="modal"]', function(a) {
        var c = b(this),
            h = c.attr("href"),
            g = b(c.attr("data-target") || h && h.replace(/.*(?=#[^\s]+$)/,
                "")),
            h = g.data("bs.modal") ? "toggle" : b.extend({
                remote: !/#/.test(h) && h
            }, g.data(), c.data());
        c.is("a") && a.preventDefault();
        g.modal(h, this).one("hide", function() {
            c.is(":visible") && c.focus()
        })
    });
    b(document).on("show.bs.modal", ".modal", function() {
        b(document.body).addClass("modal-open")
    }).on("hidden.bs.modal", ".modal", function() {
        b(document.body).removeClass("modal-open")
    })
}(jQuery); + function(b) {
    var d = function(a, b) {
        this.type = this.options = this.enabled = this.timeout = this.hoverState = this.$element = null;
        this.init("tooltip", a, b)
    };
    d.DEFAULTS = {
        animation: !0,
        placement: "top",
        selector: !1,
        template: '<div class="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
        trigger: "hover focus",
        title: "",
        delay: 0,
        html: !1,
        container: !1
    };
    d.prototype.init = function(a, c, h) {
        this.enabled = !0;
        this.type = a;
        this.$element = b(c);
        this.options = this.getOptions(h);
        a = this.options.trigger.split(" ");
        for (c = a.length; c--;)
            if (h = a[c], "click" == h) this.$element.on("click." + this.type, this.options.selector, b.proxy(this.toggle, this));
            else if ("manual" != h) {
            var g = "hover" == h ? "mouseleave" : "focusout";
            this.$element.on(("hover" == h ? "mouseenter" : "focusin") + "." + this.type, this.options.selector, b.proxy(this.enter, this));
            this.$element.on(g + "." + this.type, this.options.selector, b.proxy(this.leave, this))
        }
        this.options.selector ? this._options = b.extend({}, this.options, {
            trigger: "manual",
            selector: ""
        }) : this.fixTitle()
    };
    d.prototype.getDefaults =
        function() {
            return d.DEFAULTS
        };
    d.prototype.getOptions = function(a) {
        return a = b.extend({}, this.getDefaults(), this.$element.data(), a), a.delay && "number" == typeof a.delay && (a.delay = {
            show: a.delay,
            hide: a.delay
        }), a
    };
    d.prototype.getDelegateOptions = function() {
        var a = {},
            c = this.getDefaults();
        return this._options && b.each(this._options, function(b, g) {
            c[b] != g && (a[b] = g)
        }), a
    };
    d.prototype.enter = function(a) {
        var c = a instanceof this.constructor ? a : b(a.currentTarget)[this.type](this.getDelegateOptions()).data("bs." + this.type);
        return clearTimeout(c.timeout), c.hoverState = "in", c.options.delay && c.options.delay.show ? void(c.timeout = setTimeout(function() {
            "in" == c.hoverState && c.show()
        }, c.options.delay.show)) : c.show()
    };
    d.prototype.leave = function(a) {
        var c = a instanceof this.constructor ? a : b(a.currentTarget)[this.type](this.getDelegateOptions()).data("bs." + this.type);
        return clearTimeout(c.timeout), c.hoverState = "out", c.options.delay && c.options.delay.hide ? void(c.timeout = setTimeout(function() {
                "out" == c.hoverState && c.hide()
            }, c.options.delay.hide)) :
            c.hide()
    };
    d.prototype.show = function() {
        var a = b.Event("show.bs." + this.type);
        if (this.hasContent() && this.enabled && (this.$element.trigger(a), !a.isDefaultPrevented())) {
            var c = this,
                a = this.tip();
            this.setContent();
            this.options.animation && a.addClass("fade");
            var h = "function" == typeof this.options.placement ? this.options.placement.call(this, a[0], this.$element[0]) : this.options.placement,
                g = /\s?auto?\s?/i,
                d = g.test(h);
            d && (h = h.replace(g, "") || "top");
            a.detach().css({
                top: 0,
                left: 0,
                display: "block"
            }).addClass(h);
            this.options.container ?
                a.appendTo(this.options.container) : a.insertAfter(this.$element);
            var g = this.getPosition(),
                n = a[0].offsetWidth,
                l = a[0].offsetHeight;
            if (d) {
                var q = this.$element.parent(),
                    d = h,
                    k = document.documentElement.scrollTop || document.body.scrollTop,
                    r = "body" == this.options.container ? window.innerWidth : q.outerWidth(),
                    f = "body" == this.options.container ? window.innerHeight : q.outerHeight(),
                    q = "body" == this.options.container ? 0 : q.offset().left,
                    h = "bottom" == h && g.top + g.height + l - k > f ? "top" : "top" == h && 0 > g.top - k - l ? "bottom" : "right" == h && g.right +
                    n > r ? "left" : "left" == h && g.left - n < q ? "right" : h;
                a.removeClass(d).addClass(h)
            }
            g = this.getCalculatedOffset(h, g, n, l);
            this.applyPlacement(g, h);
            this.hoverState = null;
            h = function() {
                c.$element.trigger("shown.bs." + c.type)
            };
            b.support.transition && this.$tip.hasClass("fade") ? a.one(b.support.transition.end, h).emulateTransitionEnd(150) : h()
        }
    };
    d.prototype.applyPlacement = function(a, c) {
        var h, g = this.tip(),
            d = g[0].offsetWidth,
            n = g[0].offsetHeight,
            l = parseInt(g.css("margin-top"), 10),
            q = parseInt(g.css("margin-left"), 10);
        isNaN(l) &&
            (l = 0);
        isNaN(q) && (q = 0);
        a.top += l;
        a.left += q;
        b.offset.setOffset(g[0], b.extend({
            using: function(a) {
                g.css({
                    top: Math.round(a.top),
                    left: Math.round(a.left)
                })
            }
        }, a), 0);
        g.addClass("in");
        l = g[0].offsetWidth;
        q = g[0].offsetHeight;
        ("top" == c && q != n && (h = !0, a.top = a.top + n - q), /bottom|top/.test(c)) ? (n = 0, 0 > a.left && (n = -2 * a.left, a.left = 0, g.offset(a), l = g[0].offsetWidth, q = g[0].offsetHeight), this.replaceArrow(n - d + l, l, "left")) : this.replaceArrow(q - n, q, "top");
        h && g.offset(a)
    };
    d.prototype.replaceArrow = function(a, b, h) {
        this.arrow().css(h,
            a ? 50 * (1 - a / b) + "%" : "")
    };
    d.prototype.setContent = function() {
        var a = this.tip(),
            b = this.getTitle();
        a.find(".tooltip-inner")[this.options.html ? "html" : "text"](b);
        a.removeClass("fade in top bottom left right")
    };
    d.prototype.hide = function() {
        function a() {
            "in" != c.hoverState && h.detach();
            c.$element.trigger("hidden.bs." + c.type)
        }
        var c = this,
            h = this.tip(),
            g = b.Event("hide.bs." + this.type);
        return this.$element.trigger(g), g.isDefaultPrevented() ? void 0 : (h.removeClass("in"), b.support.transition && this.$tip.hasClass("fade") ? h.one(b.support.transition.end,
            a).emulateTransitionEnd(150) : a(), this.hoverState = null, this)
    };
    d.prototype.fixTitle = function() {
        var a = this.$element;
        (a.attr("title") || "string" != typeof a.attr("data-original-title")) && a.attr("data-original-title", a.attr("title") || "").attr("title", "")
    };
    d.prototype.hasContent = function() {
        return this.getTitle()
    };
    d.prototype.getPosition = function() {
        var a = this.$element[0];
        return b.extend({}, "function" == typeof a.getBoundingClientRect ? a.getBoundingClientRect() : {
            width: a.offsetWidth,
            height: a.offsetHeight
        }, this.$element.offset())
    };
    d.prototype.getCalculatedOffset = function(a, b, h, g) {
        return "bottom" == a ? {
            top: b.top + b.height,
            left: b.left + b.width / 2 - h / 2
        } : "top" == a ? {
            top: b.top - g,
            left: b.left + b.width / 2 - h / 2
        } : "left" == a ? {
            top: b.top + b.height / 2 - g / 2,
            left: b.left - h
        } : {
            top: b.top + b.height / 2 - g / 2,
            left: b.left + b.width
        }
    };
    d.prototype.getTitle = function() {
        var a = this.$element,
            b = this.options;
        return a.attr("data-original-title") || ("function" == typeof b.title ? b.title.call(a[0]) : b.title)
    };
    d.prototype.tip = function() {
        return this.$tip = this.$tip || b(this.options.template)
    };
    d.prototype.arrow = function() {
        return this.$arrow = this.$arrow || this.tip().find(".tooltip-arrow")
    };
    d.prototype.validate = function() {
        this.$element[0].parentNode || (this.hide(), this.$element = null, this.options = null)
    };
    d.prototype.enable = function() {
        this.enabled = !0
    };
    d.prototype.disable = function() {
        this.enabled = !1
    };
    d.prototype.toggleEnabled = function() {
        this.enabled = !this.enabled
    };
    d.prototype.toggle = function(a) {
        a = a ? b(a.currentTarget)[this.type](this.getDelegateOptions()).data("bs." + this.type) : this;
        a.tip().hasClass("in") ?
            a.leave(a) : a.enter(a)
    };
    d.prototype.destroy = function() {
        clearTimeout(this.timeout);
        this.hide().$element.off("." + this.type).removeData("bs." + this.type)
    };
    var l = b.fn.tooltip;
    b.fn.tooltip = function(a) {
        return this.each(function() {
            var c = b(this),
                h = c.data("bs.tooltip"),
                g = "object" == typeof a && a;
            (h || "destroy" != a) && (h || c.data("bs.tooltip", h = new d(this, g)), "string" == typeof a && h[a]())
        })
    };
    b.fn.tooltip.Constructor = d;
    b.fn.tooltip.noConflict = function() {
        return b.fn.tooltip = l, this
    }
}(jQuery); + function(b) {
    var d = function(a, b) {
        this.init("popover", a, b)
    };
    if (!b.fn.tooltip) throw Error("Popover requires tooltip.js");
    d.DEFAULTS = b.extend({}, b.fn.tooltip.Constructor.DEFAULTS, {
        placement: "right",
        trigger: "click",
        content: "",
        template: '<div class="popover"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'
    });
    d.prototype = b.extend({}, b.fn.tooltip.Constructor.prototype);
    d.prototype.constructor = d;
    d.prototype.getDefaults = function() {
        return d.DEFAULTS
    };
    d.prototype.setContent =
        function() {
            var a = this.tip(),
                b = this.getTitle(),
                h = this.getContent();
            a.find(".popover-title")[this.options.html ? "html" : "text"](b);
            a.find(".popover-content")[this.options.html ? "string" == typeof h ? "html" : "append" : "text"](h);
            a.removeClass("fade top bottom left right in");
            a.find(".popover-title").html() || a.find(".popover-title").hide()
        };
    d.prototype.hasContent = function() {
        return this.getTitle() || this.getContent()
    };
    d.prototype.getContent = function() {
        var a = this.$element,
            b = this.options;
        return a.attr("data-content") ||
            ("function" == typeof b.content ? b.content.call(a[0]) : b.content)
    };
    d.prototype.arrow = function() {
        return this.$arrow = this.$arrow || this.tip().find(".arrow")
    };
    d.prototype.tip = function() {
        return this.$tip || (this.$tip = b(this.options.template)), this.$tip
    };
    var l = b.fn.popover;
    b.fn.popover = function(a) {
        return this.each(function() {
            var c = b(this),
                h = c.data("bs.popover"),
                g = "object" == typeof a && a;
            (h || "destroy" != a) && (h || c.data("bs.popover", h = new d(this, g)), "string" == typeof a && h[a]())
        })
    };
    b.fn.popover.Constructor = d;
    b.fn.popover.noConflict =
        function() {
            return b.fn.popover = l, this
        }
}(jQuery); + function(b) {
    function d(a, c) {
        var h, g = b.proxy(this.process, this);
        this.$element = b(b(a).is("body") ? window : a);
        this.$body = b("body");
        this.$scrollElement = this.$element.on("scroll.bs.scroll-spy.data-api", g);
        this.options = b.extend({}, d.DEFAULTS, c);
        this.selector = (this.options.target || (h = b(a).attr("href")) && h.replace(/.*(?=#[^\s]+$)/, "") || "") + " .nav li > a";
        this.offsets = b([]);
        this.targets = b([]);
        this.activeTarget = null;
        this.refresh();
        this.process()
    }
    d.DEFAULTS = {
        offset: 10
    };
    d.prototype.refresh = function() {
        var a = this.$element[0] ==
            window ? "offset" : "position";
        this.offsets = b([]);
        this.targets = b([]);
        var c = this;
        this.$body.find(this.selector).map(function() {
            var h = b(this),
                h = h.data("target") || h.attr("href"),
                g = /^#./.test(h) && b(h);
            return g && g.length && g.is(":visible") && [
                [g[a]().top + (!b.isWindow(c.$scrollElement.get(0)) && c.$scrollElement.scrollTop()), h]
            ] || null
        }).sort(function(a, b) {
            return a[0] - b[0]
        }).each(function() {
            c.offsets.push(this[0]);
            c.targets.push(this[1])
        })
    };
    d.prototype.process = function() {
        var a, b = this.$scrollElement.scrollTop() +
            this.options.offset,
            h = (this.$scrollElement[0].scrollHeight || this.$body[0].scrollHeight) - this.$scrollElement.height(),
            g = this.offsets,
            d = this.targets,
            n = this.activeTarget;
        if (b >= h) return n != (a = d.last()[0]) && this.activate(a);
        if (n && b <= g[0]) return n != (a = d[0]) && this.activate(a);
        for (a = g.length; a--;) n != d[a] && b >= g[a] && (!g[a + 1] || b <= g[a + 1]) && this.activate(d[a])
    };
    d.prototype.activate = function(a) {
        this.activeTarget = a;
        b(this.selector).parentsUntil(this.options.target, ".active").removeClass("active");
        a = b(this.selector +
            '[data-target="' + a + '"],' + this.selector + '[href="' + a + '"]').parents("li").addClass("active");
        a.parent(".dropdown-menu").length && (a = a.closest("li.dropdown").addClass("active"));
        a.trigger("activate.bs.scrollspy")
    };
    var l = b.fn.scrollspy;
    b.fn.scrollspy = function(a) {
        return this.each(function() {
            var c = b(this),
                h = c.data("bs.scrollspy"),
                g = "object" == typeof a && a;
            h || c.data("bs.scrollspy", h = new d(this, g));
            "string" == typeof a && h[a]()
        })
    };
    b.fn.scrollspy.Constructor = d;
    b.fn.scrollspy.noConflict = function() {
        return b.fn.scrollspy =
            l, this
    };
    b(window).on("load", function() {
        b('[data-spy="scroll"]').each(function() {
            var a = b(this);
            a.scrollspy(a.data())
        })
    })
}(jQuery); + function(b) {
    var d = function(a) {
        this.element = b(a)
    };
    d.prototype.show = function() {
        var a = this.element,
            c = a.closest("ul:not(.dropdown-menu)"),
            h = a.data("target");
        if (h || (h = a.attr("href"), h = h && h.replace(/.*(?=#[^\s]*$)/, "")), !a.parent("li").hasClass("active")) {
            var g = c.find(".active:last a")[0],
                d = b.Event("show.bs.tab", {
                    relatedTarget: g
                });
            (a.trigger(d), d.isDefaultPrevented()) || (h = b(h), this.activate(a.parent("li"), c), this.activate(h, h.parent(), function() {
                a.trigger({
                    type: "shown.bs.tab",
                    relatedTarget: g
                })
            }))
        }
    };
    d.prototype.activate =
        function(a, c, h) {
            function g() {
                d.removeClass("active").find("> .dropdown-menu > .active").removeClass("active");
                a.addClass("active");
                n ? (a[0].offsetWidth, a.addClass("in")) : a.removeClass("fade");
                a.parent(".dropdown-menu") && a.closest("li.dropdown").addClass("active");
                h && h()
            }
            var d = c.find("> .active"),
                n = h && b.support.transition && d.hasClass("fade");
            n ? d.one(b.support.transition.end, g).emulateTransitionEnd(150) : g();
            d.removeClass("in")
        };
    var l = b.fn.tab;
    b.fn.tab = function(a) {
        return this.each(function() {
            var c = b(this),
                h = c.data("bs.tab");
            h || c.data("bs.tab", h = new d(this));
            "string" == typeof a && h[a]()
        })
    };
    b.fn.tab.Constructor = d;
    b.fn.tab.noConflict = function() {
        return b.fn.tab = l, this
    };
    b(document).on("click.bs.tab.data-api", '[data-toggle="tab"], [data-toggle="pill"]', function(a) {
        a.preventDefault();
        b(this).tab("show")
    })
}(jQuery); + function(b) {
    var d = function(a, c) {
        this.options = b.extend({}, d.DEFAULTS, c);
        this.$window = b(window).on("scroll.bs.affix.data-api", b.proxy(this.checkPosition, this)).on("click.bs.affix.data-api", b.proxy(this.checkPositionWithEventLoop, this));
        this.$element = b(a);
        this.affixed = this.unpin = this.pinnedOffset = null;
        this.checkPosition()
    };
    d.RESET = "affix affix-top affix-bottom";
    d.DEFAULTS = {
        offset: 0
    };
    d.prototype.getPinnedOffset = function() {
        if (this.pinnedOffset) return this.pinnedOffset;
        this.$element.removeClass(d.RESET).addClass("affix");
        var a = this.$window.scrollTop();
        return this.pinnedOffset = this.$element.offset().top - a
    };
    d.prototype.checkPositionWithEventLoop = function() {
        setTimeout(b.proxy(this.checkPosition, this), 1)
    };
    d.prototype.checkPosition = function() {
        if (this.$element.is(":visible")) {
            var a = b(document).height(),
                c = this.$window.scrollTop(),
                h = this.$element.offset(),
                g = this.options.offset,
                s = g.top,
                n = g.bottom;
            "top" == this.affixed && (h.top += c);
            "object" != typeof g && (n = s = g);
            "function" == typeof s && (s = g.top(this.$element));
            "function" == typeof n &&
                (n = g.bottom(this.$element));
            c = null != this.unpin && c + this.unpin <= h.top ? !1 : null != n && h.top + this.$element.height() >= a - n ? "bottom" : null != s && s >= c ? "top" : !1;
            this.affixed !== c && (this.unpin && this.$element.css("top", ""), h = "affix" + (c ? "-" + c : ""), g = b.Event(h + ".bs.affix"), this.$element.trigger(g), g.isDefaultPrevented() || (this.affixed = c, this.unpin = "bottom" == c ? this.getPinnedOffset() : null, this.$element.removeClass(d.RESET).addClass(h).trigger(b.Event(h.replace("affix", "affixed"))), "bottom" == c && this.$element.offset({
                top: a -
                    n - this.$element.height()
            })))
        }
    };
    var l = b.fn.affix;
    b.fn.affix = function(a) {
        return this.each(function() {
            var c = b(this),
                h = c.data("bs.affix"),
                g = "object" == typeof a && a;
            h || c.data("bs.affix", h = new d(this, g));
            "string" == typeof a && h[a]()
        })
    };
    b.fn.affix.Constructor = d;
    b.fn.affix.noConflict = function() {
        return b.fn.affix = l, this
    };
    b(window).on("load", function() {
        b('[data-spy="affix"]').each(function() {
            var a = b(this),
                c = a.data();
            c.offset = c.offset || {};
            c.offsetBottom && (c.offset.bottom = c.offsetBottom);
            c.offsetTop && (c.offset.top =
                c.offsetTop);
            a.affix(c)
        })
    })
}(jQuery);
! function(b) {
    ScrollMagic = function(c) {
        var g = {
                container: window,
                vertical: !0,
                globalSceneOptions: {},
                loglevel: 2
            },
            d = this,
            n = b.extend({}, g, c),
            l = [],
            q = !1,
            k = 0,
            r = "PAUSED",
            f = !0,
            m = 0,
            e = !1,
            u = !0,
            L = function() {
                return n.vertical ? n.container.scrollTop() : n.container.scrollLeft()
            },
            I = function() {
                if (q && u) {
                    var a = b.isArray(q) ? q : l,
                        e = k;
                    k = d.scrollPos();
                    e = k - e;
                    r = 0 === e ? "PAUSED" : 0 < e ? "FORWARD" : "REVERSE";
                    d.updateScene(a, !0);
                    0 === a.length && 3 <= n.loglevel && J(3, "updating 0 Scenes (nothing added to controller)");
                    q = !1
                }
            },
            y = function(a) {
                "resize" ==
                a.type && (m = n.vertical ? n.container.height() : n.container.width());
                q = !0
            },
            J = function(e) {
                if (n.loglevel >= e) {
                    var b = Array.prototype.splice.call(arguments, 1),
                        f = Function.prototype.bind.call(a, window);
                    b.unshift(e, "(ScrollMagic) ->");
                    f.apply(window, b)
                }
            };
        return this.addScene = function(a) {
                return b.isArray(a) ? b.each(a, function(a, e) {
                    d.addScene(e)
                }) : a.parent() != d ? a.addTo(d) : -1 == b.inArray(l, a) && (l.push(a), b.each(n.globalSceneOptions, function(e, b) {
                    a[e] && a[e].call(a, b)
                }), J(3, "added Scene (" + l.length + " total)")), d
            }, this.removeScene =
            function(a) {
                if (b.isArray(a)) b.each(a, function(a, e) {
                    d.removeScene(e)
                });
                else {
                    var e = b.inArray(a, l); - 1 < e && (l.splice(e, 1), a.remove(), J(3, "removed Scene (" + l.length + " total)"))
                }
                return d
            }, this.updateScene = function(a, e) {
                return b.isArray(a) ? b.each(a, function(b, f) {
                    J(3, "updating Scene " + (b + 1) + "/" + a.length + " (" + l.length + " total)");
                    d.updateScene(f, e)
                }) : e ? a.update(!0) : (b.isArray(q) || (q = []), -1 == b.inArray(a, q) && q.push(a)), d
            }, this.update = function(a) {
                return y({
                    type: "resize"
                }), a && I(), d
            }, this.scrollPos = function(a) {
                return arguments.length ?
                    (b.isFunction(a) || (a = function() {
                        return a
                    }), L = a, d) : L.call(d)
            }, this.info = function(a) {
                var e = {
                    size: m,
                    vertical: n.vertical,
                    scrollPos: k,
                    scrollDirection: r,
                    container: n.container,
                    isDocument: f
                };
                return arguments.length ? void 0 !== e[a] ? e[a] : void J(1, 'ERROR: option "' + a + '" is not available') : e
            }, this.loglevel = function(a) {
                return arguments.length ? (n.loglevel != a && (n.loglevel = a), d) : n.loglevel
            }, this.enabled = function(a) {
                return arguments.length ? (u != a && (u = !!a, d.updateScene(l, !0)), d) : u
            }, this.destroy = function(a) {
                for (; 0 < l.length;) l[l.length -
                    1].destroy(a);
                return n.container.off("scroll resize", y), e ? TweenLite.ticker.removeEventListener("tick", I) : n.container.off("scroll resize", I), J(3, "destroyed ScrollMagic (reset: " + (a ? "true" : "false") + ")"), null
            },
            function() {
                if (b.each(n, function(a) {
                        g.hasOwnProperty(a) || (J(2, 'WARNING: Unknown option "' + a + '"'), delete n[a])
                    }), n.container = b(n.container).first(), 0 === n.container.length) return void J(1, "ERROR creating object ScrollMagic: No valid scroll container supplied");
                f = !b.contains(document, n.container.get(0));
                m = n.vertical ? n.container.height() : n.container.width();
                n.container.on("scroll resize", y);
                try {
                    TweenLite.ticker.addEventListener("tick", I), e = !0
                } catch (a) {
                    n.container.on("scroll resize", I), e = !1
                }
                J(3, "added new ScrollMagic controller")
            }(), d
    };
    ScrollScene = function(h) {
        var g, d, n, l, q = ["onCenter", "onEnter", "onLeave"],
            k = {
                duration: 0,
                offset: 0,
                triggerElement: null,
                triggerHook: q[0],
                reverse: !0,
                tweenChanges: !1,
                loglevel: 2
            },
            r = this,
            f = b.extend({}, k, h),
            m = "BEFORE",
            e = 0,
            u = 0,
            L = 0,
            I = !0,
            y = function(e) {
                if (f.loglevel >= e) {
                    var b = Array.prototype.splice.call(arguments,
                            1),
                        k = Function.prototype.bind.call(a, window);
                    b.unshift(e, "(ScrollScene) ->");
                    k.apply(window, b)
                }
            },
            J = function() {
                if (b.each(f, function(a) {
                        k.hasOwnProperty(a) || (y(2, 'WARNING: Unknown option "' + a + '"'), delete f[a])
                    }), f.duration = parseFloat(f.duration), (!b.isNumeric(f.duration) || 0 > f.duration) && (y(1, 'ERROR: Invalid value for option "duration":', f.duration), f.duration = k.duration), f.offset = parseFloat(f.offset), b.isNumeric(f.offset) || (y(1, 'ERROR: Invalid value for option "offset":', f.offset), f.offset = k.offset),
                    null !== f.triggerElement && 0 === b(f.triggerElement).length && (y(1, 'ERROR: Element defined in option "triggerElement" was not found:', f.triggerElement), f.triggerElement = k.triggerElement), b.isNumeric(f.triggerHook) || -1 != b.inArray(f.triggerHook, q) || (y(1, 'ERROR: Invalid value for option "triggerHook": ', f.triggerHook), f.triggerHook = k.triggerHook), !b.isNumeric(f.loglevel) || 0 > f.loglevel || 3 < f.loglevel) {
                    var a = f.loglevel;
                    f.loglevel = k.loglevel;
                    y(1, 'ERROR: Invalid value for option "loglevel":', a)
                }
                if (d && g && f.triggerElement &&
                    2 <= f.loglevel) {
                    var a = d.getTweensOf(b(f.triggerElement)),
                        e = g.info("vertical");
                    b.each(a, function(a, b) {
                        var f = b.vars.css || b.vars;
                        return (e ? void 0 !== f.top || void 0 !== f.bottom : void 0 !== f.left || void 0 !== f.right) ? (y(2, "WARNING: Tweening the position of the trigger element affects the scene timing and should be avoided!"), !1) : void 0
                    })
                }
            },
            H = function() {
                u = r.triggerOffset();
                L = void 0;
                g && (u -= g.info("size") * r.triggerHook());
                L = u + f.duration
            },
            x = function(a) {
                a = 0 <= a && 1 >= a ? a : e;
                if (d) {
                    if (-1 === d.repeat())
                        if (("DURING" === m || "AFTER" ===
                                m && 0 === f.duration) && d.paused()) d.play();
                        else {
                            if ("DURING" === m || d.paused()) return !1;
                            d.pause()
                        } else {
                        if (a == d.progress()) return !1;
                        0 === f.duration ? "AFTER" == m ? d.play() : d.reverse() : f.tweenChanges ? d.tweenTo(a * d.duration()) : d.progress(a).pause()
                    }
                    return !0
                }
                return !1
            },
            D = function(a) {
                if (n && g) {
                    var b = g.info();
                    if (a || "DURING" !== m && ("AFTER" !== m || 0 !== f.duration)) {
                        a = {
                            position: l.inFlow ? "relative" : "absolute",
                            top: 0,
                            left: 0
                        };
                        var k = n.css("position") != a.position;
                        l.pushFollowers ? "AFTER" === m && 0 === parseFloat(l.spacer.css("padding-top")) ?
                            k = !0 : "BEFORE" === m && 0 === parseFloat(l.spacer.css("padding-bottom")) && (k = !0) : a[b.vertical ? "top" : "left"] = f.duration * e;
                        n.css(a);
                        k && A()
                    } else "fixed" != n.css("position") && (n.css("position", "fixed"), A()), a = c(l.spacer, !0), k = f.reverse || 0 === f.duration ? b.scrollPos - u : Math.round(e * f.duration * 10) / 10, a.top -= parseFloat(l.spacer.css("margin-top")), a[b.vertical ? "top" : "left"] += k, n.css({
                        top: a.top,
                        left: a.left
                    })
                }
            },
            A = function() {
                if (n && g && l.inFlow) {
                    var a = "AFTER" === m,
                        k = "BEFORE" === m,
                        r = "DURING" === m,
                        c = "fixed" == n.css("position"),
                        u = g.info("vertical"),
                        h = l.spacer.children().first(),
                        d = -1 < b.inArray(l.spacer.css("display"), ["block", "flex", "list-item", "table", "-webkit-box"]),
                        q = {};
                    d ? (q["margin-top"] = k || r && c ? n.css("margin-top") : "auto", q["margin-bottom"] = a || r && c ? n.css("margin-bottom") : "auto") : q["margin-top"] = q["margin-bottom"] = "auto";
                    l.relSize.width ? c ? b(window).width() == l.spacer.parent().width() ? n.css("width", "inherit") : n.css("width", l.spacer.width()) : n.css("width", "100%") : (q["min-width"] = h.outerWidth(!0), q.width = c ? q["min-width"] :
                        "auto");
                    l.relSize.height ? c ? b(window).height() == l.spacer.parent().height() ? n.css("height", "inherit") : n.css("height", l.spacer.height()) : n.css("height", "100%") : (q["min-height"] = h.outerHeight(!d), q.height = c ? q["min-height"] : "auto");
                    l.pushFollowers && (q["padding" + (u ? "Top" : "Left")] = f.duration * e, q["padding" + (u ? "Bottom" : "Right")] = f.duration * (1 - e));
                    l.spacer.css(q)
                }
            },
            B = function() {
                g && n && "DURING" === m && (g.info("isDocument") || D())
            },
            F = function() {
                g && n && ("DURING" === m || "AFTER" === m && 0 === f.duration) && (l.relSize.width &&
                    b(window).width() != l.spacer.parent().width() || l.relSize.height && b(window).height() != l.spacer.parent().height()) && A()
            };
        return this.parent = function() {
                return g
            }, this.duration = function(a) {
                return arguments.length ? (f.duration != a && (f.duration = a, r.trigger("change", {
                    what: "duration",
                    newval: a
                })), r) : f.duration
            }, this.offset = function(a) {
                return arguments.length ? (f.offset != a && (f.offset = a, r.trigger("change", {
                    what: "offset",
                    newval: a
                })), r) : f.offset
            }, this.triggerElement = function(a) {
                return arguments.length ? (f.triggerElement !=
                    a && (f.triggerElement = a, r.trigger("change", {
                        what: "triggerElement",
                        newval: a
                    })), r) : f.triggerElement
            }, this.triggerHook = function(a) {
                if (!arguments.length) {
                    var e;
                    if (b.isNumeric(f.triggerHook)) e = f.triggerHook;
                    else switch (f.triggerHook) {
                        case "onCenter":
                            e = .5;
                            break;
                        case "onLeave":
                            e = 0;
                            break;
                        default:
                            e = 1
                    }
                    return e
                }
                return f.triggerHook != a && (f.triggerHook = a, r.trigger("change", {
                    what: "triggerHook",
                    newval: a
                })), r
            }, this.reverse = function(a) {
                return arguments.length ? (f.reverse != a && (f.reverse = a, r.trigger("change", {
                    what: "reverse",
                    newval: a
                })), r) : f.reverse
            }, this.tweenChanges = function(a) {
                return arguments.length ? (f.tweenChanges != a && (f.tweenChanges = a, r.trigger("change", {
                    what: "tweenChanges",
                    newval: a
                })), r) : f.tweenChanges
            }, this.loglevel = function(a) {
                return arguments.length ? (f.loglevel != a && (f.loglevel = a, r.trigger("change", {
                    what: "loglevel",
                    newval: a
                })), r) : f.loglevel
            }, this.state = function() {
                return m
            }, this.startPosition = function() {
                return this.triggerOffset()
            }, this.triggerOffset = function() {
                var a = f.offset;
                if (g) {
                    var e = g.info();
                    if (null === f.triggerElement) a +=
                        e.size * r.triggerHook();
                    else {
                        for (var k = b(f.triggerElement).first(), m = c(g.info("container")); k.parent().data("ScrollMagicPinSpacer");) k = k.parent();
                        k = c(k);
                        e.isDocument || (m.top -= e.scrollPos, m.left -= e.scrollPos);
                        a += e.vertical ? k.top - m.top : k.left - m.left
                    }
                }
                return a
            }, this.scrollOffset = function() {
                return u
            }, this.update = function(a) {
                if (g)
                    if (a)
                        if (g.enabled() && I) {
                            var e = g.info("scrollPos");
                            null !== f.triggerElement && H();
                            a = 0 < f.duration ? (e - u) / (L - u) : e >= u ? 1 : 0;
                            r.trigger("update", {
                                startPos: u,
                                endPos: L,
                                scrollPos: e
                            });
                            r.progress(a)
                        } else n &&
                            "fixed" == n.css("position") && D(!0);
                else g.updateScene(r, !1);
                return r
            }, this.progress = function(a) {
                if (arguments.length) {
                    var b = !1,
                        k = m,
                        c = g ? g.info("scrollDirection") : "PAUSED";
                    if (0 >= a && "BEFORE" !== m && (a >= e || f.reverse) ? (e = 0, m = "BEFORE", b = !0) : 0 < a && 1 > a && (a >= e || f.reverse) ? (e = a, m = "DURING", b = !0) : 1 <= a && "AFTER" !== m ? (e = 1, m = "AFTER", b = !0) : "DURING" !== m || f.reverse || D(), b) {
                        var b = {
                                progress: e,
                                state: m,
                                scrollDirection: c
                            },
                            c = m != k,
                            u = "BEFORE" === m && 0 === f.duration;
                        c && (("DURING" === m || 0 === f.duration) && r.trigger("enter", b), ("BEFORE" ===
                            m || "BEFORE" === k) && r.trigger(u ? "end" : "start", b));
                        r.trigger("progress", b);
                        c && (("AFTER" === m || "AFTER" === k) && r.trigger(u ? "start" : "end", b), ("DURING" !== m || 0 === f.duration) && r.trigger("leave", b))
                    }
                    return r
                }
                return e
            }, this.setTween = function(a) {
                d && r.removeTween();
                try {
                    d = (new TimelineMax({
                        smoothChildTiming: !0
                    })).add(a).pause()
                } catch (e) {
                    y(1, "ERROR calling method 'setTween()': Supplied argument is not a valid TweenMaxObject")
                } finally {
                    return a.repeat && -1 === a.repeat() && (d.repeat(-1), d.yoyo(a.yoyo())), J(), y(3, "added tween"),
                        x(), r
                }
            }, this.removeTween = function(a) {
                return d && (a && x(0), d.kill(), d = void 0, y(3, "removed tween (reset: " + (a ? "true" : "false") + ")")), r
            }, this.setPin = function(a, e) {

                if (e = b.extend({}, {
                        pushFollowers: !0,
                        spacerClass: "scrollmagic-pin-spacer"
                    }, e), a = b(a).first(), 0 === a.length) return y(1, "ERROR calling method 'setPin()': Invalid pin element supplied."), r;
                if ("fixed" == a.css("position")) return y(1, "ERROR: Pin does not work with elements that are positioned 'fixed'."), r;
                if (n) {
                    if (n === a) return r;
                    r.removePin()
                }
                n = a;
                n.parent().hide();
                var f = "absolute" != n.css("position"),
                    k = n.css(["display", "top", "left", "bottom", "right"]),
                    m = n.css(["width", "height"]);
                n.parent().show();
                k = b("<div></div>").addClass(e.spacerClass).css(k).data("ScrollMagicPinSpacer", !0).css({
                    position: f ? "relative" : "absolute",
                    "margin-left": "auto",
                    "margin-right": "auto",
                    "box-sizing": "content-box",
                    "-moz-box-sizing": "content-box",
                    "-webkit-box-sizing": "content-box"
                });
                return !f && e.pushFollowers && (y(2, "WARNING: If the pinned element is positioned absolutely pushFollowers is disabled."),
                    e.pushFollowers = !1), l = {
                    spacer: k,
                    relSize: {
                        width: "%" === m.width.slice(-1),
                        height: "%" === m.height.slice(-1)
                    },
                    pushFollowers: e.pushFollowers,
                    inFlow: f,
                    origStyle: n.attr("style")
                }, l.relSize.width && k.css("width", m.width), l.relSize.height && k.css("height", m.height), n.before(k).appendTo(k).css({
                    position: f ? "relative" : "absolute",
                    top: "auto",
                    left: "auto",
                    bottom: "auto",
                    right: "auto"
                }), b(window).on("scroll resize", B), y(3, "added pin"), D(), r
            }, this.removePin = function(a) {
                return n && (a || !g ? (n.insertBefore(l.spacer).attr("style",
                    l.origStyle), l.spacer.remove()) : "DURING" === m && D(!0), b(window).off("scroll resize", B), n = void 0, y(3, "removed pin (reset: " + (a ? "true" : "false") + ")")), r
            }, this.addTo = function(a) {
                return g != a ? (g && g.removeScene(r), g = a, J(), H(), A(), g.info("container").on("resize", F), y(3, "added ScrollScene to controller"), a.addScene(r), r.update(), r) : void 0
            }, this.enabled = function(a) {
                return arguments.length ? (I != a && (I = !!a, r.update(!0)), r) : I
            }, this.remove = function() {
                if (g) {
                    g.info("container").off("resize", F);
                    var a = g;
                    g = void 0;
                    y(3, "removed ScrollScene from controller");
                    a.removeScene(r)
                }
                return r
            }, this.destroy = function(a) {
                return this.removeTween(a), this.removePin(a), this.remove(), this.off("start end enter leave progress change update change.internal progress.internal"), y(3, "destroyed ScrollScene (reset: " + (a ? "true" : "false") + ")"), null
            }, this.on = function(a, e) {
                if (b.isFunction(e)) {
                    var f = b.trim(a).toLowerCase().replace(/(\w+)\.(\w+)/g, "$1.ScrollScene_$2").replace(/( |^)(\w+)( |$)/g, "$1$2.ScrollScene$3");
                    b(r).on(f, e)
                } else y(1, "ERROR calling method 'on()': Supplied argument is not a valid callback!");
                return r
            }, this.off = function(a, e) {
                var f = b.trim(a).toLowerCase().replace(/(\w+)\.(\w+)/g, "$1.ScrollScene_$2").replace(/( |^)(\w+)( |$)/g, "$1$2.ScrollScene$3");
                return b(r).off(f, e), r
            }, this.trigger = function(a, e) {
                y(3, "event fired:", a, "->", e);
                var f = {
                    type: b.trim(a).toLowerCase(),
                    target: r
                };
                return b.isPlainObject(e) && (f = b.extend({}, e, f)), b(r).trigger(f), r
            },
            function() {
                J();
                r.on("change.internal", function(a) {
                    J();
                    "loglevel" != a.what && "tweenChanges" != a.what && ("reverse" != a.what && null === f.triggerElement && H(), r.update(), ("DURING" !== m && "duration" == a.what || "AFTER" === m && 0 === f.duration) && D())
                });
                r.on("progress.internal", function() {
                    x();
                    D()
                })
            }(), r
    };
    var d = window.console = window.console || {},
        l = ["error", "warn", "log"];
    d.log || (d.log = b.noop);
    b.each(l, function(a, b) {
        d[b] || (d[b] = d.log)
    });
    var a = function(a) {
            (a > l.length || 0 >= a) && (a = l.length);
            var b = new Date,
                b = ("0" + b.getHours()).slice(-2) + ":" + ("0" + b.getMinutes()).slice(-2) + ":" + ("0" + b.getSeconds()).slice(-2) + ":" + ("00" + b.getMilliseconds()).slice(-3),
                c = l[a - 1],
                n = Array.prototype.splice.call(arguments,
                    1),
                c = Function.prototype.bind.call(d[c], d);
            n.unshift(b);
            c.apply(d, n)
        },
        c = function(a, c) {
            var d = {
                    top: 0,
                    left: 0
                },
                l = a[0];
            l && (l.getBoundingClientRect ? (l = l.getBoundingClientRect(), d.top = l.top, d.left = l.left, c || (d.top += b(document).scrollTop(), d.left += b(document).scrollLeft())) : (d = a.offset() || d, c && (d.top -= b(document).scrollTop(), d.left -= b(document).scrollLeft())));
            return d
        }
}(jQuery);
(window._gsQueue || (window._gsQueue = [])).push(function() {
    window._gsDefine("TweenMax", ["core.Animation", "core.SimpleTimeline", "TweenLite"], function(b, d, l) {
        var a = [].slice,
            c = function(a, b, k) {
                l.call(this, a, b, k);
                this._cycle = 0;
                this._yoyo = !0 === this.vars.yoyo;
                this._repeat = this.vars.repeat || 0;
                this._repeatDelay = this.vars.repeatDelay || 0;
                this._dirty = !0;
                this.render = c.prototype.render
            },
            h = l._internals.isSelector,
            g = l._internals.isArray,
            s = c.prototype = l.to({}, .1, {}),
            n = [];
        c.version = "1.11.4";
        s.constructor = c;
        s.kill()._gc = !1;
        c.killTweensOf = c.killDelayedCallsTo = l.killTweensOf;
        c.getTweensOf = l.getTweensOf;
        c.ticker = l.ticker;
        s.invalidate = function() {
            return this._yoyo = !0 === this.vars.yoyo, this._repeat = this.vars.repeat || 0, this._repeatDelay = this.vars.repeatDelay || 0, this._uncache(!0), l.prototype.invalidate.call(this)
        };
        s.updateTo = function(a, b) {
            var k, e = this.ratio;
            b && this._startTime < this._timeline._time && (this._startTime = this._timeline._time, this._uncache(!1), this._gc ? this._enabled(!0, !1) : this._timeline.insert(this, this._startTime -
                this._delay));
            for (k in a) this.vars[k] = a[k];
            if (this._initted)
                if (b) this._initted = !1;
                else if (this._gc && this._enabled(!0, !1), this._notifyPluginsOfEnabled && this._firstPT && l._onPluginEvent("_onDisable", this), .998 < this._time / this._duration) k = this._time, this.render(0, !0, !1), this._initted = !1, this.render(k, !0, !1);
            else if (0 < this._time) {
                this._initted = !1;
                this._init();
                for (var e = 1 / (1 - e), c = this._firstPT; c;) k = c.s + c.c, c.c *= e, c.s = k - c.c, c = c._next
            }
            return this
        };
        s.render = function(a, b, k) {
            this._initted || 0 === this._duration &&
                this.vars.repeat && this.invalidate();
            var e, c, g, d, h, l, q, s = this._dirty ? this.totalDuration() : this._totalDuration,
                t = this._time,
                A = this._totalTime,
                B = this._cycle,
                F = this._duration;
            if (a >= s ? (this._totalTime = s, this._cycle = this._repeat, this._yoyo && 0 !== (1 & this._cycle) ? (this._time = 0, this.ratio = this._ease._calcEnd ? this._ease.getRatio(0) : 0) : (this._time = F, this.ratio = this._ease._calcEnd ? this._ease.getRatio(1) : 1), this._reversed || (e = !0, c = "onComplete"), 0 === F && (q = this._rawPrevTime, (0 === a || 0 > q || 1E-10 === q) && q !== a && (k = !0,
                    1E-10 < q && (c = "onReverseComplete")), this._rawPrevTime = q = !b || a || 0 === q ? a : 1E-10)) : 1E-7 > a ? (this._totalTime = this._time = this._cycle = 0, this.ratio = this._ease._calcEnd ? this._ease.getRatio(0) : 0, (0 !== A || 0 === F && 1E-10 < this._rawPrevTime) && (c = "onReverseComplete", e = this._reversed), 0 > a ? (this._active = !1, 0 === F && (0 <= this._rawPrevTime && (k = !0), this._rawPrevTime = q = !b || a || 0 === this._rawPrevTime ? a : 1E-10)) : this._initted || (k = !0)) : (this._totalTime = this._time = a, 0 !== this._repeat && (g = F + this._repeatDelay, this._cycle = this._totalTime /
                    g >> 0, 0 !== this._cycle && this._cycle === this._totalTime / g && this._cycle--, this._time = this._totalTime - this._cycle * g, this._yoyo && 0 !== (1 & this._cycle) && (this._time = F - this._time), this._time > F ? this._time = F : 0 > this._time && (this._time = 0)), this._easeType ? (d = this._time / F, h = this._easeType, l = this._easePower, (1 === h || 3 === h && .5 <= d) && (d = 1 - d), 3 === h && (d *= 2), 1 === l ? d *= d : 2 === l ? d *= d * d : 3 === l ? d *= d * d * d : 4 === l && (d *= d * d * d * d), this.ratio = 1 === h ? 1 - d : 2 === h ? d : .5 > this._time / F ? d / 2 : 1 - d / 2) : this.ratio = this._ease.getRatio(this._time / F)), t ===
                this._time && !k && B === this._cycle) return A !== this._totalTime && this._onUpdate && (b || this._onUpdate.apply(this.vars.onUpdateScope || this, this.vars.onUpdateParams || n)), void 0;
            if (!this._initted) {
                if (this._init(), !this._initted || this._gc) return;
                this._time && !e ? this.ratio = this._ease.getRatio(this._time / F) : e && this._ease._calcEnd && (this.ratio = this._ease.getRatio(0 === this._time ? 0 : 1))
            }
            this._active || !this._paused && this._time !== t && 0 <= a && (this._active = !0);
            0 !== A || (this._startAt && (0 <= a ? this._startAt.render(a, b, k) : c ||
                (c = "_dummyGS")), !this.vars.onStart || 0 === this._totalTime && 0 !== F || !b && this.vars.onStart.apply(this.vars.onStartScope || this, this.vars.onStartParams || n));
            for (g = this._firstPT; g;) g.f ? g.t[g.p](g.c * this.ratio + g.s) : g.t[g.p] = g.c * this.ratio + g.s, g = g._next;
            this._onUpdate && (0 > a && this._startAt && this._startTime && this._startAt.render(a, b, k), b || (this._totalTime !== A || e) && this._onUpdate.apply(this.vars.onUpdateScope || this, this.vars.onUpdateParams || n));
            this._cycle !== B && (b || this._gc || this.vars.onRepeat && this.vars.onRepeat.apply(this.vars.onRepeatScope ||
                this, this.vars.onRepeatParams || n));
            c && (this._gc || (0 > a && this._startAt && !this._onUpdate && this._startTime && this._startAt.render(a, b, k), e && (this._timeline.autoRemoveChildren && this._enabled(!1, !1), this._active = !1), !b && this.vars[c] && this.vars[c].apply(this.vars[c + "Scope"] || this, this.vars[c + "Params"] || n), 0 === F && 1E-10 === this._rawPrevTime && 1E-10 !== q && (this._rawPrevTime = 0)))
        };
        c.to = function(a, b, k) {
            return new c(a, b, k)
        };
        c.from = function(a, b, k) {
            return k.runBackwards = !0, k.immediateRender = 0 != k.immediateRender, new c(a,
                b, k)
        };
        c.fromTo = function(a, b, k, e) {
            return e.startAt = k, e.immediateRender = 0 != e.immediateRender && 0 != k.immediateRender, new c(a, b, e)
        };
        c.staggerTo = c.allTo = function(b, k, m, e, d, q, s) {
            e = e || 0;
            var y, t, H, x, D = m.delay || 0,
                A = [],
                B = function() {
                    m.onComplete && m.onComplete.apply(m.onCompleteScope || this, arguments);
                    d.apply(s || this, q || n)
                };
            g(b) || ("string" == typeof b && (b = l.selector(b) || b), h(b) && (b = a.call(b, 0)));
            y = b.length;
            for (H = 0; y > H; H++) {
                t = {};
                for (x in m) t[x] = m[x];
                t.delay = D;
                H === y - 1 && d && (t.onComplete = B);
                A[H] = new c(b[H], k, t);
                D += e
            }
            return A
        };
        c.staggerFrom = c.allFrom = function(a, b, k, e, g, d, h) {
            return k.runBackwards = !0, k.immediateRender = 0 != k.immediateRender, c.staggerTo(a, b, k, e, g, d, h)
        };
        c.staggerFromTo = c.allFromTo = function(a, b, k, e, g, d, h, l) {
            return e.startAt = k, e.immediateRender = 0 != e.immediateRender && 0 != k.immediateRender, c.staggerTo(a, b, e, g, d, h, l)
        };
        c.delayedCall = function(a, b, k, e, g) {
            return new c(b, 0, {
                delay: a,
                onComplete: b,
                onCompleteParams: k,
                onCompleteScope: e,
                onReverseComplete: b,
                onReverseCompleteParams: k,
                onReverseCompleteScope: e,
                immediateRender: !1,
                useFrames: g,
                overwrite: 0
            })
        };
        c.set = function(a, b) {
            return new c(a, 0, b)
        };
        c.isTweening = function(a) {
            return 0 < l.getTweensOf(a, !0).length
        };
        var t = function(a, b) {
                for (var k = [], e = 0, c = a._first; c;) c instanceof l ? k[e++] = c : (b && (k[e++] = c), k = k.concat(t(c, b)), e = k.length), c = c._next;
                return k
            },
            q = c.getAllTweens = function(a) {
                return t(b._rootTimeline, a).concat(t(b._rootFramesTimeline, a))
            };
        c.killAll = function(a, b, k, e) {
            null == b && (b = !0);
            null == k && (k = !0);
            var c, g, h = q(0 != e),
                l = h.length,
                n = b && k && e;
            for (g = 0; l > g; g++) e = h[g], (n || e instanceof d || (c = e.target === e.vars.onComplete) && k || b && !c) && (a ? e.totalTime(e.totalDuration()) : e._enabled(!1, !1))
        };
        c.killChildTweensOf = function(b, k) {
            if (null != b) {
                var m, e, d, q = l._tweenLookup;
                if ("string" == typeof b && (b = l.selector(b) || b), h(b) && (b = a.call(b, 0)), g(b))
                    for (e = b.length; - 1 < --e;) c.killChildTweensOf(b[e], k);
                else {
                    m = [];
                    for (d in q)
                        for (e = q[d].target.parentNode; e;) e === b && (m = m.concat(q[d].tweens)), e = e.parentNode;
                    d = m.length;
                    for (e = 0; d > e; e++) k && m[e].totalTime(m[e].totalDuration()), m[e]._enabled(!1, !1)
                }
            }
        };
        var k = function(a,
            b, k, e) {
            b = !1 !== b;
            k = !1 !== k;
            e = !1 !== e;
            for (var c, g = q(e), h = b && k && e, l = g.length; - 1 < --l;) e = g[l], (h || e instanceof d || (c = e.target === e.vars.onComplete) && k || b && !c) && e.paused(a)
        };
        return c.pauseAll = function(a, b, c) {
            k(!0, a, b, c)
        }, c.resumeAll = function(a, b, c) {
            k(!1, a, b, c)
        }, c.globalTimeScale = function(a) {
            var k = b._rootTimeline,
                c = l.ticker.time;
            return arguments.length ? (a = a || 1E-10, k._startTime = c - (c - k._startTime) * k._timeScale / a, k = b._rootFramesTimeline, c = l.ticker.frame, k._startTime = c - (c - k._startTime) * k._timeScale / a, k._timeScale =
                b._rootTimeline._timeScale = a, a) : k._timeScale
        }, s.progress = function(a) {
            return arguments.length ? this.totalTime(this.duration() * (this._yoyo && 0 !== (1 & this._cycle) ? 1 - a : a) + this._cycle * (this._duration + this._repeatDelay), !1) : this._time / this.duration()
        }, s.totalProgress = function(a) {
            return arguments.length ? this.totalTime(this.totalDuration() * a, !1) : this._totalTime / this.totalDuration()
        }, s.time = function(a, b) {
            return arguments.length ? (this._dirty && this.totalDuration(), a > this._duration && (a = this._duration), this._yoyo &&
                0 !== (1 & this._cycle) ? a = this._duration - a + this._cycle * (this._duration + this._repeatDelay) : 0 !== this._repeat && (a += this._cycle * (this._duration + this._repeatDelay)), this.totalTime(a, b)) : this._time
        }, s.duration = function(a) {
            return arguments.length ? b.prototype.duration.call(this, a) : this._duration
        }, s.totalDuration = function(a) {
            return arguments.length ? -1 === this._repeat ? this : this.duration((a - this._repeat * this._repeatDelay) / (this._repeat + 1)) : (this._dirty && (this._totalDuration = -1 === this._repeat ? 999999999999 : this._duration *
                (this._repeat + 1) + this._repeatDelay * this._repeat, this._dirty = !1), this._totalDuration)
        }, s.repeat = function(a) {
            return arguments.length ? (this._repeat = a, this._uncache(!0)) : this._repeat
        }, s.repeatDelay = function(a) {
            return arguments.length ? (this._repeatDelay = a, this._uncache(!0)) : this._repeatDelay
        }, s.yoyo = function(a) {
            return arguments.length ? (this._yoyo = a, this) : this._yoyo
        }, c
    }, !0);
    window._gsDefine("TimelineLite", ["core.Animation", "core.SimpleTimeline", "TweenLite"], function(b, d, l) {
        var a = function(a) {
                d.call(this,
                    a);
                this._labels = {};
                this.autoRemoveChildren = !0 === this.vars.autoRemoveChildren;
                this.smoothChildTiming = !0 === this.vars.smoothChildTiming;
                this._sortChildren = !0;
                this._onUpdate = this.vars.onUpdate;
                var b, f = this.vars;
                for (b in f) a = f[b], h(a) && -1 !== a.join("").indexOf("{self}") && (f[b] = this._swapSelfInParams(a));
                h(f.tweens) && this.add(f.tweens, 0, f.align, f.stagger)
            },
            c = l._internals.isSelector,
            h = l._internals.isArray,
            g = [],
            s = function(a) {
                var b, f = {};
                for (b in a) f[b] = a[b];
                return f
            },
            n = function(a, b, f, c) {
                a._timeline.pause(a._startTime);
                b && b.apply(c || a._timeline, f || g)
            },
            t = g.slice,
            q = a.prototype = new d;
        return a.version = "1.11.4", q.constructor = a, q.kill()._gc = !1, q.to = function(a, b, f, c) {
                return b ? this.add(new l(a, b, f), c) : this.set(a, f, c)
            }, q.from = function(a, b, f, c) {
                return this.add(l.from(a, b, f), c)
            }, q.fromTo = function(a, b, f, c, e) {
                return b ? this.add(l.fromTo(a, b, f, c), e) : this.set(a, c, e)
            }, q.staggerTo = function(b, g, f, m, e, d, h, q) {
                h = new a({
                    onComplete: d,
                    onCompleteParams: h,
                    onCompleteScope: q,
                    smoothChildTiming: this.smoothChildTiming
                });
                "string" == typeof b && (b =
                    l.selector(b) || b);
                c(b) && (b = t.call(b, 0));
                m = m || 0;
                for (d = 0; b.length > d; d++) f.startAt && (f.startAt = s(f.startAt)), h.to(b[d], g, s(f), d * m);
                return this.add(h, e)
            }, q.staggerFrom = function(a, b, f, c, e, g, d, h) {
                return f.immediateRender = 0 != f.immediateRender, f.runBackwards = !0, this.staggerTo(a, b, f, c, e, g, d, h)
            }, q.staggerFromTo = function(a, b, f, c, e, g, d, h, l) {
                return c.startAt = f, c.immediateRender = 0 != c.immediateRender && 0 != f.immediateRender, this.staggerTo(a, b, c, e, g, d, h, l)
            }, q.call = function(a, b, f, c) {
                return this.add(l.delayedCall(0,
                    a, b, f), c)
            }, q.set = function(a, b, f) {
                return f = this._parseTimeOrLabel(f, 0, !0), null == b.immediateRender && (b.immediateRender = f === this._time && !this._paused), this.add(new l(a, 0, b), f)
            }, a.exportRoot = function(b, c) {
                b = b || {};
                null == b.smoothChildTiming && (b.smoothChildTiming = !0);
                var f, m, e = new a(b),
                    g = e._timeline;
                null == c && (c = !0);
                g._remove(e, !0);
                e._startTime = 0;
                e._rawPrevTime = e._time = e._totalTime = g._time;
                for (f = g._first; f;) m = f._next, c && f instanceof l && f.target === f.vars.onComplete || e.add(f, f._startTime - f._delay), f = m;
                return g.add(e,
                    0), e
            }, q.add = function(k, c, f, m) {
                var e, g, q;
                if ("number" != typeof c && (c = this._parseTimeOrLabel(c, 0, !0, k)), !(k instanceof b)) {
                    if (k instanceof Array || k && k.push && h(k)) {
                        f = f || "normal";
                        m = m || 0;
                        e = k.length;
                        for (g = 0; e > g; g++) h(q = k[g]) && (q = new a({
                            tweens: q
                        })), this.add(q, c), "string" != typeof q && "function" != typeof q && ("sequence" === f ? c = q._startTime + q.totalDuration() / q._timeScale : "start" === f && (q._startTime -= q.delay())), c += m;
                        return this._uncache(!0)
                    }
                    if ("string" == typeof k) return this.addLabel(k, c);
                    if ("function" != typeof k) throw "Cannot add " +
                        k + " into the timeline; it is not a tween, timeline, function, or string.";
                    k = l.delayedCall(0, k)
                }
                if (d.prototype.add.call(this, k, c), this._gc && !this._paused && this._duration < this.duration())
                    for (f = this, k = f.rawTime() > k._startTime; f._gc && f._timeline;) f._timeline.smoothChildTiming && k ? f.totalTime(f._totalTime, !0) : f._enabled(!0, !1), f = f._timeline;
                return this
            }, q.remove = function(a) {
                if (a instanceof b) return this._remove(a, !1);
                if (a instanceof Array || a && a.push && h(a)) {
                    for (var c = a.length; - 1 < --c;) this.remove(a[c]);
                    return this
                }
                return "string" ==
                    typeof a ? this.removeLabel(a) : this.kill(null, a)
            }, q._remove = function(a, b) {
                d.prototype._remove.call(this, a, b);
                var f = this._last;
                return f ? this._time > f._startTime + f._totalDuration / f._timeScale && (this._time = this.duration(), this._totalTime = this._totalDuration) : this._time = this._totalTime = 0, this
            }, q.append = function(a, b) {
                return this.add(a, this._parseTimeOrLabel(null, b, !0, a))
            }, q.insert = q.insertMultiple = function(a, b, f, c) {
                return this.add(a, b || 0, f, c)
            }, q.appendMultiple = function(a, b, f, c) {
                return this.add(a, this._parseTimeOrLabel(null,
                    b, !0, a), f, c)
            }, q.addLabel = function(a, b) {
                return this._labels[a] = this._parseTimeOrLabel(b), this
            }, q.addPause = function(a, b, f, c) {
                return this.call(n, ["{self}", b, f, c], this, a)
            }, q.removeLabel = function(a) {
                return delete this._labels[a], this
            }, q.getLabelTime = function(a) {
                return null != this._labels[a] ? this._labels[a] : -1
            }, q._parseTimeOrLabel = function(a, c, f, g) {
                var e;
                if (g instanceof b && g.timeline === this) this.remove(g);
                else if (g && (g instanceof Array || g.push && h(g)))
                    for (e = g.length; - 1 < --e;) g[e] instanceof b && g[e].timeline ===
                        this && this.remove(g[e]);
                if ("string" == typeof c) return this._parseTimeOrLabel(c, f && "number" == typeof a && null == this._labels[c] ? a - this.duration() : 0, f);
                if (c = c || 0, "string" != typeof a || !isNaN(a) && null == this._labels[a]) null == a && (a = this.duration());
                else {
                    if (e = a.indexOf("="), -1 === e) return null == this._labels[a] ? f ? this._labels[a] = this.duration() + c : c : this._labels[a] + c;
                    c = parseInt(a.charAt(e - 1) + "1", 10) * Number(a.substr(e + 1));
                    a = 1 < e ? this._parseTimeOrLabel(a.substr(0, e - 1), 0, f) : this.duration()
                }
                return Number(a) + c
            }, q.seek =
            function(a, b) {
                return this.totalTime("number" == typeof a ? a : this._parseTimeOrLabel(a), !1 !== b)
            }, q.stop = function() {
                return this.paused(!0)
            }, q.gotoAndPlay = function(a, b) {
                return this.play(a, b)
            }, q.gotoAndStop = function(a, b) {
                return this.pause(a, b)
            }, q.render = function(a, b, f) {
                this._gc && this._enabled(!0, !1);
                var c, e, d, h, l = this._dirty ? this.totalDuration() : this._totalDuration,
                    q = this._time,
                    n = this._startTime,
                    s = this._timeScale,
                    t = this._paused;
                if (a >= l ? (this._totalTime = this._time = l, this._reversed || this._hasPausedChild() ||
                        (e = !0, h = "onComplete", 0 === this._duration && (0 === a || 0 > this._rawPrevTime || 1E-10 === this._rawPrevTime) && this._rawPrevTime !== a && this._first && (c = !0, 1E-10 < this._rawPrevTime && (h = "onReverseComplete"))), this._rawPrevTime = this._duration || !b || a || 0 === this._rawPrevTime ? a : 1E-10, a = l + 1E-4) : 1E-7 > a ? (this._totalTime = this._time = 0, (0 !== q || 0 === this._duration && (1E-10 < this._rawPrevTime || 0 > a && 0 <= this._rawPrevTime)) && (h = "onReverseComplete", e = this._reversed), 0 > a ? (this._active = !1, 0 === this._duration && 0 <= this._rawPrevTime && this._first &&
                        (c = !0), this._rawPrevTime = a) : (this._rawPrevTime = this._duration || !b || a || 0 === this._rawPrevTime ? a : 1E-10, a = 0, this._initted || (c = !0))) : this._totalTime = this._time = this._rawPrevTime = a, this._time !== q && this._first || f || c) {
                    if (this._initted || (this._initted = !0), this._active || !this._paused && this._time !== q && 0 < a && (this._active = !0), 0 === q && this.vars.onStart && 0 !== this._time && (b || this.vars.onStart.apply(this.vars.onStartScope || this, this.vars.onStartParams || g)), this._time >= q)
                        for (c = this._first; c && (d = c._next, !this._paused ||
                                t);)(c._active || c._startTime <= this._time && !c._paused && !c._gc) && (c._reversed ? c.render((c._dirty ? c.totalDuration() : c._totalDuration) - (a - c._startTime) * c._timeScale, b, f) : c.render((a - c._startTime) * c._timeScale, b, f)), c = d;
                    else
                        for (c = this._last; c && (d = c._prev, !this._paused || t);)(c._active || q >= c._startTime && !c._paused && !c._gc) && (c._reversed ? c.render((c._dirty ? c.totalDuration() : c._totalDuration) - (a - c._startTime) * c._timeScale, b, f) : c.render((a - c._startTime) * c._timeScale, b, f)), c = d;
                    this._onUpdate && (b || this._onUpdate.apply(this.vars.onUpdateScope ||
                        this, this.vars.onUpdateParams || g));
                    h && (this._gc || (n === this._startTime || s !== this._timeScale) && (0 === this._time || l >= this.totalDuration()) && (e && (this._timeline.autoRemoveChildren && this._enabled(!1, !1), this._active = !1), !b && this.vars[h] && this.vars[h].apply(this.vars[h + "Scope"] || this, this.vars[h + "Params"] || g)))
                }
            }, q._hasPausedChild = function() {
                for (var b = this._first; b;) {
                    if (b._paused || b instanceof a && b._hasPausedChild()) return !0;
                    b = b._next
                }
                return !1
            }, q.getChildren = function(a, b, c, g) {
                g = g || -9999999999;
                for (var e = [], d = this._first, h = 0; d;) g > d._startTime || (d instanceof l ? !1 !== b && (e[h++] = d) : (!1 !== c && (e[h++] = d), !1 !== a && (e = e.concat(d.getChildren(!0, b, c)), h = e.length))), d = d._next;
                return e
            }, q.getTweensOf = function(a, b) {
                for (var c = l.getTweensOf(a), g = c.length, e = [], d = 0; - 1 < --g;)(c[g].timeline === this || b && this._contains(c[g])) && (e[d++] = c[g]);
                return e
            }, q._contains = function(a) {
                for (a = a.timeline; a;) {
                    if (a === this) return !0;
                    a = a.timeline
                }
                return !1
            }, q.shiftChildren = function(a, b, c) {
                c = c || 0;
                for (var g, e = this._first, d = this._labels; e;) e._startTime >=
                    c && (e._startTime += a), e = e._next;
                if (b)
                    for (g in d) d[g] >= c && (d[g] += a);
                return this._uncache(!0)
            }, q._kill = function(a, b) {
                if (!a && !b) return this._enabled(!1, !1);
                for (var c = b ? this.getTweensOf(b) : this.getChildren(!0, !0, !1), g = c.length, e = !1; - 1 < --g;) c[g]._kill(a, b) && (e = !0);
                return e
            }, q.clear = function(a) {
                var b = this.getChildren(!1, !0, !0),
                    c = b.length;
                for (this._time = this._totalTime = 0; - 1 < --c;) b[c]._enabled(!1, !1);
                return !1 !== a && (this._labels = {}), this._uncache(!0)
            }, q.invalidate = function() {
                for (var a = this._first; a;) a.invalidate(),
                    a = a._next;
                return this
            }, q._enabled = function(a, b) {
                if (a === this._gc)
                    for (var c = this._first; c;) c._enabled(a, !0), c = c._next;
                return d.prototype._enabled.call(this, a, b)
            }, q.duration = function(a) {
                return arguments.length ? (0 !== this.duration() && 0 !== a && this.timeScale(this._duration / a), this) : (this._dirty && this.totalDuration(), this._duration)
            }, q.totalDuration = function(a) {
                if (!arguments.length) {
                    if (this._dirty) {
                        var b, c, g = 0;
                        c = this._last;
                        for (var e = 999999999999; c;) b = c._prev, c._dirty && c.totalDuration(), c._startTime > e && this._sortChildren &&
                            !c._paused ? this.add(c, c._startTime - c._delay) : e = c._startTime, 0 > c._startTime && !c._paused && (g -= c._startTime, this._timeline.smoothChildTiming && (this._startTime += c._startTime / this._timeScale), this.shiftChildren(-c._startTime, !1, -9999999999), e = 0), c = c._startTime + c._totalDuration / c._timeScale, c > g && (g = c), c = b;
                        this._duration = this._totalDuration = g;
                        this._dirty = !1
                    }
                    return this._totalDuration
                }
                return 0 !== this.totalDuration() && 0 !== a && this.timeScale(this._totalDuration / a), this
            }, q.usesFrames = function() {
                for (var a = this._timeline; a._timeline;) a =
                    a._timeline;
                return a === b._rootFramesTimeline
            }, q.rawTime = function() {
                return this._paused ? this._totalTime : (this._timeline.rawTime() - this._startTime) * this._timeScale
            }, a
    }, !0);
    window._gsDefine("TimelineMax", ["TimelineLite", "TweenLite", "easing.Ease"], function(b, d, l) {
        var a = function(a) {
                b.call(this, a);
                this._repeat = this.vars.repeat || 0;
                this._repeatDelay = this.vars.repeatDelay || 0;
                this._cycle = 0;
                this._yoyo = !0 === this.vars.yoyo;
                this._dirty = !0
            },
            c = [],
            h = new l(null, null, 1, 0);
        l = a.prototype = new b;
        return l.constructor = a,
            l.kill()._gc = !1, a.version = "1.11.4", l.invalidate = function() {
                return this._yoyo = !0 === this.vars.yoyo, this._repeat = this.vars.repeat || 0, this._repeatDelay = this.vars.repeatDelay || 0, this._uncache(!0), b.prototype.invalidate.call(this)
            }, l.addCallback = function(a, b, c, h) {
                return this.add(d.delayedCall(0, a, c, h), b)
            }, l.removeCallback = function(a, b) {
                if (a)
                    if (null == b) this._kill(null, a);
                    else
                        for (var c = this.getTweensOf(a, !1), d = c.length, h = this._parseTimeOrLabel(b); - 1 < --d;) c[d]._startTime === h && c[d]._enabled(!1, !1);
                return this
            },
            l.tweenTo = function(a, b) {
                b = b || {};
                var l, t, q, k = {
                    ease: h,
                    overwrite: 2,
                    useFrames: this.usesFrames(),
                    immediateRender: !1
                };
                for (t in b) k[t] = b[t];
                return k.time = this._parseTimeOrLabel(a), l = Math.abs(Number(k.time) - this._time) / this._timeScale || .001, q = new d(this, l, k), k.onStart = function() {
                    q.target.paused(!0);
                    q.vars.time !== q.target.time() && l === q.duration() && q.duration(Math.abs(q.vars.time - q.target.time()) / q.target._timeScale);
                    b.onStart && b.onStart.apply(b.onStartScope || q, b.onStartParams || c)
                }, q
            }, l.tweenFromTo = function(a,
                b, c) {
                c = c || {};
                a = this._parseTimeOrLabel(a);
                c.startAt = {
                    onComplete: this.seek,
                    onCompleteParams: [a],
                    onCompleteScope: this
                };
                c.immediateRender = !1 !== c.immediateRender;
                b = this.tweenTo(b, c);
                return b.duration(Math.abs(b.vars.time - a) / this._timeScale || .001)
            }, l.render = function(a, b, d) {
                this._gc && this._enabled(!0, !1);
                var h, l, k, r, f, m = this._dirty ? this.totalDuration() : this._totalDuration,
                    e = this._duration,
                    u = this._time,
                    L = this._totalTime,
                    I = this._startTime,
                    y = this._timeScale,
                    J = this._rawPrevTime,
                    H = this._paused,
                    x = this._cycle;
                if (a >= m ? (this._locked || (this._totalTime = m, this._cycle = this._repeat), this._reversed || this._hasPausedChild() || (l = !0, r = "onComplete", 0 === this._duration && (0 === a || 0 > J || 1E-10 === J) && J !== a && this._first && (h = !0, 1E-10 < J && (r = "onReverseComplete"))), this._rawPrevTime = this._duration || !b || a || 0 === this._rawPrevTime ? a : 1E-10, this._yoyo && 0 !== (1 & this._cycle) ? this._time = a = 0 : (this._time = e, a = e + 1E-4)) : 1E-7 > a ? (this._locked || (this._totalTime = this._cycle = 0), this._time = 0, (0 !== u || 0 === e && (1E-10 < J || 0 > a && 0 <= J) && !this._locked) && (r =
                        "onReverseComplete", l = this._reversed), 0 > a ? (this._active = !1, 0 === e && 0 <= J && this._first && (h = !0), this._rawPrevTime = a) : (this._rawPrevTime = e || !b || a || 0 === this._rawPrevTime ? a : 1E-10, a = 0, this._initted || (h = !0))) : (0 === e && 0 > J && (h = !0), this._time = this._rawPrevTime = a, this._locked || (this._totalTime = a, 0 !== this._repeat && (f = e + this._repeatDelay, this._cycle = this._totalTime / f >> 0, 0 !== this._cycle && this._cycle === this._totalTime / f && this._cycle--, this._time = this._totalTime - this._cycle * f, this._yoyo && 0 !== (1 & this._cycle) && (this._time =
                        e - this._time), this._time > e ? (this._time = e, a = e + 1E-4) : 0 > this._time ? this._time = a = 0 : a = this._time))), this._cycle !== x && !this._locked) {
                    f = this._yoyo && 0 !== (1 & x);
                    var D = f === (this._yoyo && 0 !== (1 & this._cycle)),
                        A = this._totalTime,
                        B = this._cycle,
                        F = this._rawPrevTime,
                        E = this._time;
                    if (this._totalTime = x * e, x > this._cycle ? f = !f : this._totalTime += e, this._time = u, this._rawPrevTime = 0 === e ? J - 1E-4 : J, this._cycle = x, this._locked = !0, u = f ? 0 : e, this.render(u, b, 0 === e), b || this._gc || this.vars.onRepeat && this.vars.onRepeat.apply(this.vars.onRepeatScope ||
                            this, this.vars.onRepeatParams || c), D && (u = f ? e + 1E-4 : -1E-4, this.render(u, !0, !1)), this._locked = !1, this._paused && !H) return;
                    this._time = E;
                    this._totalTime = A;
                    this._cycle = B;
                    this._rawPrevTime = F
                }
                if (!(this._time !== u && this._first || d || h)) return L !== this._totalTime && this._onUpdate && (b || this._onUpdate.apply(this.vars.onUpdateScope || this, this.vars.onUpdateParams || c)), void 0;
                if (this._initted || (this._initted = !0), this._active || !this._paused && this._totalTime !== L && 0 < a && (this._active = !0), 0 === L && this.vars.onStart && 0 !== this._totalTime &&
                    (b || this.vars.onStart.apply(this.vars.onStartScope || this, this.vars.onStartParams || c)), this._time >= u)
                    for (h = this._first; h && (k = h._next, !this._paused || H);)(h._active || h._startTime <= this._time && !h._paused && !h._gc) && (h._reversed ? h.render((h._dirty ? h.totalDuration() : h._totalDuration) - (a - h._startTime) * h._timeScale, b, d) : h.render((a - h._startTime) * h._timeScale, b, d)), h = k;
                else
                    for (h = this._last; h && (k = h._prev, !this._paused || H);)(h._active || u >= h._startTime && !h._paused && !h._gc) && (h._reversed ? h.render((h._dirty ? h.totalDuration() :
                        h._totalDuration) - (a - h._startTime) * h._timeScale, b, d) : h.render((a - h._startTime) * h._timeScale, b, d)), h = k;
                this._onUpdate && (b || this._onUpdate.apply(this.vars.onUpdateScope || this, this.vars.onUpdateParams || c));
                r && (this._locked || this._gc || (I === this._startTime || y !== this._timeScale) && (0 === this._time || m >= this.totalDuration()) && (l && (this._timeline.autoRemoveChildren && this._enabled(!1, !1), this._active = !1), !b && this.vars[r] && this.vars[r].apply(this.vars[r + "Scope"] || this, this.vars[r + "Params"] || c)))
            }, l.getActive =
            function(a, b, c) {
                null == a && (a = !0);
                null == b && (b = !0);
                null == c && (c = !1);
                var d = [];
                c = this.getChildren(a, b, c);
                var h = 0,
                    k = c.length;
                for (a = 0; k > a; a++) b = c[a], b.isActive() && (d[h++] = b);
                return d
            }, l.getLabelAfter = function(a) {
                a || 0 !== a && (a = this._time);
                var b, c = this.getLabelsArray(),
                    d = c.length;
                for (b = 0; d > b; b++)
                    if (c[b].time > a) return c[b].name;
                return null
            }, l.getLabelBefore = function(a) {
                null == a && (a = this._time);
                for (var b = this.getLabelsArray(), c = b.length; - 1 < --c;)
                    if (a > b[c].time) return b[c].name;
                return null
            }, l.getLabelsArray = function() {
                var a,
                    b = [],
                    c = 0;
                for (a in this._labels) b[c++] = {
                    time: this._labels[a],
                    name: a
                };
                return b.sort(function(a, b) {
                    return a.time - b.time
                }), b
            }, l.progress = function(a) {
                return arguments.length ? this.totalTime(this.duration() * (this._yoyo && 0 !== (1 & this._cycle) ? 1 - a : a) + this._cycle * (this._duration + this._repeatDelay), !1) : this._time / this.duration()
            }, l.totalProgress = function(a) {
                return arguments.length ? this.totalTime(this.totalDuration() * a, !1) : this._totalTime / this.totalDuration()
            }, l.totalDuration = function(a) {
                return arguments.length ?
                    -1 === this._repeat ? this : this.duration((a - this._repeat * this._repeatDelay) / (this._repeat + 1)) : (this._dirty && (b.prototype.totalDuration.call(this), this._totalDuration = -1 === this._repeat ? 999999999999 : this._duration * (this._repeat + 1) + this._repeatDelay * this._repeat), this._totalDuration)
            }, l.time = function(a, b) {
                return arguments.length ? (this._dirty && this.totalDuration(), a > this._duration && (a = this._duration), this._yoyo && 0 !== (1 & this._cycle) ? a = this._duration - a + this._cycle * (this._duration + this._repeatDelay) : 0 !== this._repeat &&
                    (a += this._cycle * (this._duration + this._repeatDelay)), this.totalTime(a, b)) : this._time
            }, l.repeat = function(a) {
                return arguments.length ? (this._repeat = a, this._uncache(!0)) : this._repeat
            }, l.repeatDelay = function(a) {
                return arguments.length ? (this._repeatDelay = a, this._uncache(!0)) : this._repeatDelay
            }, l.yoyo = function(a) {
                return arguments.length ? (this._yoyo = a, this) : this._yoyo
            }, l.currentLabel = function(a) {
                return arguments.length ? this.seek(a, !0) : this.getLabelBefore(this._time + 1E-8)
            }, a
    }, !0);
    (function() {
        var b = 180 / Math.PI,
            d = [],
            l = [],
            a = [],
            c = {},
            h = function(a, b, c, f) {
                this.a = a;
                this.b = b;
                this.c = c;
                this.d = f;
                this.da = f - a;
                this.ca = c - a;
                this.ba = b - a
            },
            g = function(a, b, c, f) {
                var d = {
                        a: a
                    },
                    e = {},
                    g = {},
                    h = {
                        c: f
                    },
                    l = (a + b) / 2,
                    n = (b + c) / 2;
                c = (c + f) / 2;
                b = (l + n) / 2;
                var n = (n + c) / 2,
                    s = (n - b) / 8;
                return d.b = l + (a - l) / 4, e.b = b + s, d.c = e.a = (d.b + e.b) / 2, e.c = g.a = (b + n) / 2, g.b = n - s, h.b = c + (f - c) / 4, g.c = h.a = (g.b + h.b) / 2, [d, e, g, h]
            },
            s = function(b, k, r, f, m, e) {
                var u, n, s, y, t = {},
                    H = [],
                    x = e || b[0];
                m = "string" == typeof m ? "," + m + "," : ",x,y,z,left,top,right,bottom,marginTop,marginLeft,marginRight,marginBottom,paddingLeft,paddingTop,paddingRight,paddingBottom,backgroundPosition,backgroundPosition_y,";
                null == k && (k = 1);
                for (n in b[0]) H.push(n);
                if (1 < b.length) {
                    s = b[b.length - 1];
                    y = !0;
                    for (u = H.length; - 1 < --u;)
                        if (n = H[u], .05 < Math.abs(x[n] - s[n])) {
                            y = !1;
                            break
                        }
                    y && (b = b.concat(), e && b.unshift(e), b.push(b[1]), e = b[b.length - 3])
                }
                d.length = l.length = a.length = 0;
                for (u = H.length; - 1 < --u;) {
                    n = H[u];
                    c[n] = -1 !== m.indexOf("," + n + ",");
                    s = n;
                    var x = b,
                        D = n,
                        A = c[n],
                        B = e,
                        F = void 0,
                        E = void 0,
                        C = void 0,
                        Q = void 0,
                        R = void 0,
                        C = void 0,
                        P = [];
                    if (B)
                        for (x = [B].concat(x), E = x.length; - 1 < --E;) "string" == typeof(C = x[E][D]) && "=" === C.charAt(1) && (x[E][D] = B[D] + Number(C.charAt(0) +
                            C.substr(2)));
                    if (F = x.length - 2, 0 > F) x = (P[0] = new h(x[0][D], 0, 0, x[-1 > F ? 0 : 1][D]), P);
                    else {
                        for (E = 0; F > E; E++) C = x[E][D], Q = x[E + 1][D], P[E] = new h(C, 0, 0, Q), A && (R = x[E + 2][D], d[E] = (d[E] || 0) + (Q - C) * (Q - C), l[E] = (l[E] || 0) + (R - Q) * (R - Q));
                        x = (P[E] = new h(x[E][D], 0, 0, x[E + 1][D]), P)
                    }
                    t[s] = x
                }
                for (u = d.length; - 1 < --u;) d[u] = Math.sqrt(d[u]), l[u] = Math.sqrt(l[u]);
                if (!f) {
                    for (u = H.length; - 1 < --u;)
                        if (c[n])
                            for (b = t[H[u]], s = b.length - 1, m = 0; s > m; m++) e = b[m + 1].da / l[m] + b[m].da / d[m], a[m] = (a[m] || 0) + e * e;
                    for (u = a.length; - 1 < --u;) a[u] = Math.sqrt(a[u])
                }
                u = H.length;
                for (m = r ? 4 : 1; - 1 < --u;) {
                    n = H[u];
                    e = b = t[n];
                    s = k;
                    x = r;
                    D = f;
                    n = c[n];
                    for (var S = F = B = A = void 0, Y = Q = S = C = P = R = E = void 0, U = void 0, W = void 0, aa = e.length - 1, K = 0, ea = e[0].a, A = 0; aa > A; A++) E = e[K], B = E.a, F = E.d, S = e[K + 1].d, n ? (Y = d[A], U = l[A], W = .25 * (U + Y) * s / (D ? .5 : a[A] || .5), R = F - (F - B) * (D ? .5 * s : 0 !== Y ? W / Y : 0), P = F + (S - F) * (D ? .5 * s : 0 !== U ? W / U : 0), C = F - (R + ((P - R) * (3 * Y / (Y + U) + .5) / 4 || 0))) : (R = F - .5 * (F - B) * s, P = F + .5 * (S - F) * s, C = F - (R + P) / 2), R += C, P += C, E.c = S = R, E.b = 0 !== A ? ea : ea = E.a + .6 * (E.c - E.a), E.da = F - B, E.ca = S - B, E.ba = ea - B, x ? (Q = g(B, ea, S, F), e.splice(K, 1, Q[0], Q[1], Q[2],
                        Q[3]), K += 4) : K++, ea = P;
                    E = e[K];
                    E.b = ea;
                    E.c = ea + .4 * (E.d - ea);
                    E.da = E.d - E.a;
                    E.ca = E.c - E.a;
                    E.ba = ea - E.a;
                    x && (Q = g(E.a, ea, E.c, E.d), e.splice(K, 1, Q[0], Q[1], Q[2], Q[3]));
                    y && (b.splice(0, m), b.splice(b.length - m, m))
                }
                return t
            },
            n = window._gsDefine.plugin({
                propName: "bezier",
                priority: -1,
                API: 2,
                global: !0,
                init: function(a, b, c) {
                    this._target = a;
                    b instanceof Array && (b = {
                        values: b
                    });
                    this._func = {};
                    this._round = {};
                    this._props = [];
                    this._timeRes = null == b.timeResolution ? 6 : parseInt(b.timeResolution, 10);
                    var f, d, e, g, l = b.values || [],
                        n = {};
                    d = l[0];
                    this._autoRotate =
                        (c = b.autoRotate || c.vars.orientToBezier) ? c instanceof Array ? c : [
                            ["x", "y", "rotation", !0 === c ? 0 : Number(c) || 0]
                        ] : null;
                    for (f in d) this._props.push(f);
                    for (d = this._props.length; - 1 < --d;) f = this._props[d], this._overwriteProps.push(f), c = this._func[f] = "function" == typeof a[f], n[f] = c ? a[f.indexOf("set") || "function" != typeof a["get" + f.substr(3)] ? f : "get" + f.substr(3)]() : parseFloat(a[f]), g || n[f] !== l[0][f] && (g = n);
                    if ("cubic" !== b.type && "quadratic" !== b.type && "soft" !== b.type) n = s(l, isNaN(b.curviness) ? 1 : b.curviness, !1, "thruBasic" ===
                        b.type, b.correlate, g);
                    else {
                        g = l;
                        d = (d = b.type) || "soft";
                        var y, t, H, x, D, A, B;
                        b = {};
                        var l = "cubic" === d ? 3 : 2,
                            F = "soft" === d,
                            E = [];
                        if (F && n && (g = [n].concat(g)), null == g || l + 1 > g.length) throw "invalid Bezier data";
                        for (y in g[0]) E.push(y);
                        for (x = E.length; - 1 < --x;) {
                            y = E[x];
                            b[y] = c = [];
                            B = 0;
                            A = g.length;
                            for (D = 0; A > D; D++) d = null == n ? g[D][y] : "string" == typeof(t = g[D][y]) && "=" === t.charAt(1) ? n[y] + Number(t.charAt(0) + t.substr(2)) : Number(t), F && 1 < D && A - 1 > D && (c[B++] = (d + c[B - 2]) / 2), c[B++] = d;
                            A = B - l + 1;
                            for (D = B = 0; A > D; D += l) d = c[D], y = c[D + 1], t = c[D + 2], H = 2 ===
                                l ? 0 : c[D + 3], c[B++] = t = 3 === l ? new h(d, y, t, H) : new h(d, (2 * y + d) / 3, (2 * y + t) / 3, t);
                            c.length = B
                        }
                        n = b
                    }
                    if (this._beziers = n, this._segCount = this._beziers[f].length, this._timeRes) {
                        c = this._beziers;
                        f = this._timeRes;
                        f = f >> 0 || 6;
                        n = [];
                        y = [];
                        g = t = 0;
                        b = f - 1;
                        l = [];
                        d = [];
                        for (e in c) {
                            x = c[e];
                            D = n;
                            A = f;
                            var C = void 0,
                                Q = void 0,
                                R = F = B = Q = void 0,
                                P = C = void 0,
                                S = void 0,
                                S = R = void 0,
                                E = 1 / A;
                            for (H = x.length; - 1 < --H;)
                                for (R = x[H], Q = R.a, B = R.d - Q, F = R.c - Q, R = R.b - Q, Q = 0, P = 1; A >= P; P++) C = E * P, S = 1 - C, C = Q - (Q = (C * C * B + 3 * S * (C * F + S * R)) * C), S = H * A + P - 1, D[S] = (D[S] || 0) + C * C
                        }
                        c = n.length;
                        for (e =
                            0; c > e; e++) t += Math.sqrt(n[e]), x = e % f, d[x] = t, x === b && (g += t, x = e / f >> 0, l[x] = d, y[x] = g, t = 0, d = []);
                        this._length = g;
                        this._lengths = y;
                        this._segments = l;
                        this._l1 = this._li = this._s1 = this._si = 0;
                        this._l2 = this._lengths[0];
                        this._curSeg = this._segments[0];
                        this._s2 = this._curSeg[0];
                        this._prec = 1 / this._curSeg.length
                    }
                    if (c = this._autoRotate)
                        for (c[0] instanceof Array || (this._autoRotate = c = [c]), d = c.length; - 1 < --d;)
                            for (e = 0; 3 > e; e++) f = c[d][e], this._func[f] = "function" == typeof a[f] ? a[f.indexOf("set") || "function" != typeof a["get" + f.substr(3)] ?
                                f : "get" + f.substr(3)] : !1;
                    return !0
                },
                set: function(a) {
                    var c, d, f, g, e, h;
                    e = this._segCount;
                    var l = this._func,
                        n = this._target;
                    if (this._timeRes) {
                        if (c = this._lengths, g = this._curSeg, a *= this._length, f = this._li, a > this._l2 && e - 1 > f) {
                            for (--e; e > f && a >= (this._l2 = c[++f]););
                            this._l1 = c[f - 1];
                            this._li = f;
                            this._curSeg = g = this._segments[f];
                            this._s2 = g[this._s1 = this._si = 0]
                        } else if (this._l1 > a && 0 < f) {
                            for (; 0 < f && (this._l1 = c[--f]) >= a;);
                            0 === f && this._l1 > a ? this._l1 = 0 : f++;
                            this._l2 = c[f];
                            this._li = f;
                            this._curSeg = g = this._segments[f];
                            this._s1 = g[(this._si =
                                g.length - 1) - 1] || 0;
                            this._s2 = g[this._si]
                        }
                        if (c = f, a -= this._l1, f = this._si, a > this._s2 && g.length - 1 > f) {
                            for (e = g.length - 1; e > f && a >= (this._s2 = g[++f]););
                            this._s1 = g[f - 1];
                            this._si = f
                        } else if (this._s1 > a && 0 < f) {
                            for (; 0 < f && (this._s1 = g[--f]) >= a;);
                            0 === f && this._s1 > a ? this._s1 = 0 : f++;
                            this._s2 = g[f];
                            this._si = f
                        }
                        e = (f + (a - this._s1) / (this._s2 - this._s1)) * this._prec
                    } else c = 0 > a ? 0 : 1 <= a ? e - 1 : e * a >> 0, e *= a - 1 / e * c;
                    d = 1 - e;
                    for (f = this._props.length; - 1 < --f;) a = this._props[f], g = this._beziers[a][c], h = (e * e * g.da + 3 * d * (e * g.ca + d * g.ba)) * e + g.a, this._round[a] &&
                        (h = h + (0 < h ? .5 : -.5) >> 0), l[a] ? n[a](h) : n[a] = h;
                    if (this._autoRotate) {
                        var s, t, H, x, D, A, B = this._autoRotate;
                        for (f = B.length; - 1 < --f;) a = B[f][2], D = B[f][3] || 0, A = !0 === B[f][4] ? 1 : b, g = this._beziers[B[f][0]], d = this._beziers[B[f][1]], g && d && (g = g[c], d = d[c], s = g.a + (g.b - g.a) * e, H = g.b + (g.c - g.b) * e, s += (H - s) * e, H += (g.c + (g.d - g.c) * e - H) * e, t = d.a + (d.b - d.a) * e, x = d.b + (d.c - d.b) * e, t += (x - t) * e, x += (d.c + (d.d - d.c) * e - x) * e, h = Math.atan2(x - t, H - s) * A + D, l[a] ? n[a](h) : n[a] = h)
                    }
                }
            }),
            t = n.prototype;
        n.bezierThrough = s;
        n.cubicToQuadratic = g;
        n._autoCSS = !0;
        n.quadraticToCubic =
            function(a, b, c) {
                return new h(a, (2 * b + a) / 3, (2 * b + c) / 3, c)
            };
        n._cssRegister = function() {
            var a = window._gsDefine.globals.CSSPlugin;
            if (a) {
                var a = a._internals,
                    b = a._parseToProxy,
                    c = a._setPluginRatio,
                    f = a.CSSPropTween;
                a._registerComplexSpecialProp("bezier", {
                    parser: function(a, e, d, g, h, l) {
                        e instanceof Array && (e = {
                            values: e
                        });
                        l = new n;
                        var q, s, t = e.values,
                            D = t.length - 1,
                            A = [],
                            B = {};
                        if (0 > D) return h;
                        for (d = 0; D >= d; d++) s = b(a, t[d], g, h, l, D !== d), A[d] = s.end;
                        for (q in e) B[q] = e[q];
                        return B.values = A, h = new f(a, "bezier", 0, 0, s.pt, 2), h.data =
                            s, h.plugin = l, h.setRatio = c, 0 === B.autoRotate && (B.autoRotate = !0), !B.autoRotate || B.autoRotate instanceof Array || (d = !0 === B.autoRotate ? 0 : Number(B.autoRotate), B.autoRotate = null != s.end.left ? [
                                ["left", "top", "rotation", d, !1]
                            ] : null != s.end.x ? [
                                ["x", "y", "rotation", d, !1]
                            ] : !1), B.autoRotate && (g._transform || g._enableTransforms(!1), s.autoRotate = g._target._gsTransform), l._onInitTween(s.proxy, B, g._tween), h
                    }
                })
            }
        };
        t._roundProps = function(a, b) {
            for (var c = this._overwriteProps, f = c.length; - 1 < --f;)(a[c[f]] || a.bezier || a.bezierThrough) &&
                (this._round[c[f]] = b)
        };
        t._kill = function(a) {
            var b, c, f = this._props;
            for (b in this._beziers)
                if (b in a)
                    for (delete this._beziers[b], delete this._func[b], c = f.length; - 1 < --c;) f[c] === b && f.splice(c, 1);
            return this._super._kill.call(this, a)
        }
    })();
    window._gsDefine("plugins.CSSPlugin", ["plugins.TweenPlugin", "TweenLite"], function(b, d) {
        var l, a, c, h, g = function() {
                b.call(this, "css");
                this._overwriteProps.length = 0;
                this.setRatio = g.prototype.setRatio
            },
            s = {},
            n = g.prototype = new b("css");
        n.constructor = g;
        g.version = "1.11.4";
        g.API =
            2;
        g.defaultTransformPerspective = 0;
        n = "px";
        g.suffixMap = {
            top: n,
            right: n,
            bottom: n,
            left: n,
            width: n,
            height: n,
            fontSize: n,
            padding: n,
            margin: n,
            perspective: n,
            lineHeight: ""
        };
        var t, q, k, r, f, m, e = /(?:\d|\-\d|\.\d|\-\.\d)+/g,
            u = /(?:\d|\-\d|\.\d|\-\.\d|\+=\d|\-=\d|\+=.\d|\-=\.\d)+/g,
            L = /(?:\+=|\-=|\-|\b)[\d\-\.]+[a-zA-Z0-9]*(?:%|\b)/gi,
            I = /[^\d\-\.]/g,
            y = /(?:\d|\-|\+|=|#|\.)*/g,
            J = /opacity *= *([^)]*)/,
            H = /opacity:([^;]*)/,
            x = /alpha\(opacity *=.+?\)/i,
            D = /^(rgb|hsl)/,
            A = /([A-Z])/g,
            B = /-([a-z])/gi,
            F = /(^(?:url\(\"|url\())|(?:(\"\))$|\)$)/gi,
            E = function(a, b) {
                return b.toUpperCase()
            },
            C = /(?:Left|Right|Width)/i,
            Q = /(M11|M12|M21|M22)=[\d\-\.e]+/gi,
            R = /progid\:DXImageTransform\.Microsoft\.Matrix\(.+?\)/i,
            P = /,(?=[^\)]*(?:\(|$))/gi,
            S = Math.PI / 180,
            Y = 180 / Math.PI,
            U = {},
            W = document,
            aa = W.createElement("div"),
            K = W.createElement("img"),
            ea = g._internals = {
                _specialProps: s
            },
            ka = navigator.userAgent,
            da = function() {
                var a, b = ka.indexOf("Android"),
                    e = W.createElement("div");
                return k = -1 !== ka.indexOf("Safari") && -1 === ka.indexOf("Chrome") && (-1 === b || 3 < Number(ka.substr(b + 8, 1))),
                    f = k && 6 > Number(ka.substr(ka.indexOf("Version/") + 8, 1)), r = -1 !== ka.indexOf("Firefox"), /MSIE ([0-9]{1,}[\.0-9]{0,})/.exec(ka) && (m = parseFloat(RegExp.$1)), e.innerHTML = "<a style='top:1px;opacity:.55;'>a</a>", a = e.getElementsByTagName("a")[0], a ? /^0.55/.test(a.style.opacity) : !1
            }(),
            p = function(a) {
                return J.test("string" == typeof a ? a : (a.currentStyle ? a.currentStyle.filter : a.style.filter) || "") ? parseFloat(RegExp.$1) / 100 : 1
            },
            w = "",
            N = "",
            fa = function(a, b) {
                b = b || aa;
                var e, c, f = b.style;
                if (void 0 !== f[a]) return a;
                a = a.charAt(0).toUpperCase() +
                    a.substr(1);
                e = ["O", "Moz", "ms", "Ms", "Webkit"];
                for (c = 5; - 1 < --c && void 0 === f[e[c] + a];);
                return 0 <= c ? (N = 3 === c ? "ms" : e[c], w = "-" + N.toLowerCase() + "-", N + a) : null
            },
            Z = W.defaultView ? W.defaultView.getComputedStyle : function() {},
            V = g.getStyle = function(a, b, e, c, f) {
                var k;
                return da || "opacity" !== b ? (!c && a.style[b] ? k = a.style[b] : (e = e || Z(a, null)) ? (a = e.getPropertyValue(b.replace(A, "-$1").toLowerCase()), k = a || e.length ? a : e[b]) : a.currentStyle && (k = a.currentStyle[b]), null == f || k && "none" !== k && "auto" !== k && "auto auto" !== k ? k : f) : p(a)
            },
            z =
            function(a, b, e, c, f) {
                if ("px" === c || !c) return e;
                if ("auto" === c || !e) return 0;
                var k, p = C.test(b),
                    d = a,
                    g = aa.style,
                    h = 0 > e;
                return h && (e = -e), "%" === c && -1 !== b.indexOf("border") ? k = e / 100 * (p ? a.clientWidth : a.clientHeight) : (g.cssText = "border:0 solid red;position:" + V(a, "position") + ";line-height:0;", "%" !== c && d.appendChild ? g[p ? "borderLeftWidth" : "borderTopWidth"] = e + c : (d = a.parentNode || W.body, g[p ? "width" : "height"] = e + c), d.appendChild(aa), k = parseFloat(aa[p ? "offsetWidth" : "offsetHeight"]), d.removeChild(aa), 0 !== k || f || (k = z(a, b,
                    e, c, !0))), h ? -k : k
            },
            O = function(a, b, e) {
                if ("absolute" !== V(a, "position", e)) return 0;
                var c = "left" === b ? "Left" : "Top";
                e = V(a, "margin" + c, e);
                return a["offset" + c] - (z(a, b, parseFloat(e), e.replace(y, "")) || 0)
            },
            M = function(a, b) {
                var e, c, f = {};
                if (b = b || Z(a, null))
                    if (e = b.length)
                        for (; - 1 < --e;) f[b[e].replace(B, E)] = b.getPropertyValue(b[e]);
                    else
                        for (e in b) f[e] = b[e];
                else if (b = a.currentStyle || a.style)
                    for (e in b) "string" == typeof e && void 0 !== f[e] && (f[e.replace(B, E)] = b[e]);
                return da || (f.opacity = p(a)), c = ra(a, b, !1), f.rotation = c.rotation,
                    f.skewX = c.skewX, f.scaleX = c.scaleX, f.scaleY = c.scaleY, f.x = c.x, f.y = c.y, oa && (f.z = c.z, f.rotationX = c.rotationX, f.rotationY = c.rotationY, f.scaleZ = c.scaleZ), f.filters && delete f.filters, f
            },
            ha = function(a, b, e, c, f) {
                var k, p, d, g = {},
                    h = a.style;
                for (p in e) "cssText" !== p && "length" !== p && isNaN(p) && (b[p] !== (k = e[p]) || f && f[p]) && -1 === p.indexOf("Origin") && ("number" == typeof k || "string" == typeof k) && (g[p] = "auto" !== k || "left" !== p && "top" !== p ? "" !== k && "auto" !== k && "none" !== k || "string" != typeof b[p] || "" === b[p].replace(I, "") ? k : 0 : O(a, p),
                    void 0 !== h[p] && (d = new ua(h, p, h[p], d)));
                if (c)
                    for (p in c) "className" !== p && (g[p] = c[p]);
                return {
                    difs: g,
                    firstMPT: d
                }
            },
            G = {
                width: ["Left", "Right"],
                height: ["Top", "Bottom"]
            },
            X = ["marginLeft", "marginRight", "marginTop", "marginBottom"],
            T = function(a, b) {
                null != a && "" !== a && "auto" !== a && "auto auto" !== a || (a = "0 0");
                var e = a.split(" "),
                    c = -1 !== a.indexOf("left") ? "0%" : -1 !== a.indexOf("right") ? "100%" : e[0],
                    f = -1 !== a.indexOf("top") ? "0%" : -1 !== a.indexOf("bottom") ? "100%" : e[1];
                return null == f ? f = "0" : "center" === f && (f = "50%"), ("center" === c ||
                    isNaN(parseFloat(c)) && -1 === (c + "").indexOf("=")) && (c = "50%"), b && (b.oxp = -1 !== c.indexOf("%"), b.oyp = -1 !== f.indexOf("%"), b.oxr = "=" === c.charAt(1), b.oyr = "=" === f.charAt(1), b.ox = parseFloat(c.replace(I, "")), b.oy = parseFloat(f.replace(I, ""))), c + " " + f + (2 < e.length ? " " + e[2] : "")
            },
            qa = function(a, b) {
                return "string" == typeof a && "=" === a.charAt(1) ? parseInt(a.charAt(0) + "1", 10) * parseFloat(a.substr(2)) : parseFloat(a) - parseFloat(b)
            },
            v = function(a, b) {
                return null == a ? b : "string" == typeof a && "=" === a.charAt(1) ? parseInt(a.charAt(0) + "1",
                    10) * Number(a.substr(2)) + b : parseFloat(a)
            },
            ba = function(a, b, e, c) {
                var f, p, k;
                return null == a ? k = b : "number" == typeof a ? k = a : (f = a.split("_"), p = Number(f[0].replace(I, "")) * (-1 === a.indexOf("rad") ? 1 : Y) - ("=" === a.charAt(1) ? 0 : b), f.length && (c && (c[e] = b + p), -1 !== a.indexOf("short") && (p %= 360, p !== p % 180 && (p = 0 > p ? p + 360 : p - 360)), -1 !== a.indexOf("_cw") && 0 > p ? p = (p + 3599999999640) % 360 - 360 * (0 | p / 360) : -1 !== a.indexOf("ccw") && 0 < p && (p = (p - 3599999999640) % 360 - 360 * (0 | p / 360))), k = b + p), 1E-6 > k && -1E-6 < k && (k = 0), k
            },
            ja = {
                aqua: [0, 255, 255],
                lime: [0, 255,
                    0
                ],
                silver: [192, 192, 192],
                black: [0, 0, 0],
                maroon: [128, 0, 0],
                teal: [0, 128, 128],
                blue: [0, 0, 255],
                navy: [0, 0, 128],
                white: [255, 255, 255],
                fuchsia: [255, 0, 255],
                olive: [128, 128, 0],
                yellow: [255, 255, 0],
                orange: [255, 165, 0],
                gray: [128, 128, 128],
                purple: [128, 0, 128],
                green: [0, 128, 0],
                red: [255, 0, 0],
                pink: [255, 192, 203],
                cyan: [0, 255, 255],
                transparent: [255, 255, 255, 0]
            },
            na = function(a, b, e) {
                return a = 0 > a ? a + 1 : 1 < a ? a - 1 : a, 0 | 255 * (1 > 6 * a ? b + 6 * (e - b) * a : .5 > a ? e : 2 > 3 * a ? b + 6 * (e - b) * (2 / 3 - a) : b) + .5
            },
            la = function(a) {
                var b, c, f, p, k, d;
                return a && "" !== a ? "number" == typeof a ? [a >> 16, 255 & a >> 8, 255 & a] : ("," === a.charAt(a.length - 1) && (a = a.substr(0, a.length - 1)), ja[a] ? ja[a] : "#" === a.charAt(0) ? (4 === a.length && (b = a.charAt(1), c = a.charAt(2), f = a.charAt(3), a = "#" + b + b + c + c + f + f), a = parseInt(a.substr(1), 16), [a >> 16, 255 & a >> 8, 255 & a]) : "hsl" === a.substr(0, 3) ? (a = a.match(e), p = Number(a[0]) % 360 / 360, k = Number(a[1]) / 100, d = Number(a[2]) / 100, c = .5 >= d ? d * (k + 1) : d + k - d * k, b = 2 * d - c, 3 < a.length && (a[3] = Number(a[3])), a[0] = na(p + 1 / 3, b, c), a[1] = na(p, b, c), a[2] = na(p - 1 / 3, b, c), a) : (a = a.match(e) || ja.transparent, a[0] = Number(a[0]),
                    a[1] = Number(a[1]), a[2] = Number(a[2]), 3 < a.length && (a[3] = Number(a[3])), a)) : ja.black
            },
            pa = "(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#.+?\\b";
        for (n in ja) pa += "|" + n + "\\b";
        var pa = RegExp(pa + ")", "gi"),
            za = function(a, b, c, f) {
                if (null == a) return function(a) {
                    return a
                };
                var p, k = b ? (a.match(pa) || [""])[0] : "",
                    d = a.split(k).join("").match(L) || [],
                    g = a.substr(0, a.indexOf(d[0])),
                    h = ")" === a.charAt(a.length - 1) ? ")" : "",
                    l = -1 !== a.indexOf(" ") ? " " : ",",
                    m = d.length,
                    n = 0 < m ? d[0].replace(e, "") : "";
                return m ? p = b ? function(a) {
                    var b, e, r;
                    if ("number" ==
                        typeof a) a += n;
                    else if (f && P.test(a)) {
                        a = a.replace(P, "|").split("|");
                        for (r = 0; a.length > r; r++) a[r] = p(a[r]);
                        return a.join(",")
                    }
                    if (b = (a.match(pa) || [k])[0], e = a.split(b).join("").match(L) || [], r = e.length, m > r--)
                        for (; m > ++r;) e[r] = c ? e[0 | (r - 1) / 2] : d[r];
                    return g + e.join(l) + l + b + h + (-1 !== a.indexOf("inset") ? " inset" : "")
                } : function(a) {
                    var b, e;
                    if ("number" == typeof a) a += n;
                    else if (f && P.test(a)) {
                        a = a.replace(P, "|").split("|");
                        for (e = 0; a.length > e; e++) a[e] = p(a[e]);
                        return a.join(",")
                    }
                    if (b = a.match(L) || [], e = b.length, m > e--)
                        for (; m > ++e;) b[e] =
                            c ? b[0 | (e - 1) / 2] : d[e];
                    return g + b.join(l) + h
                } : function(a) {
                    return a
                }
            },
            va = function(a) {
                return a = a.split(","),
                    function(b, e, c, f, p, k, d) {
                        c = (e + "").split(" ");
                        d = {};
                        for (e = 0; 4 > e; e++) d[a[e]] = c[e] = c[e] || c[(e - 1) / 2 >> 0];
                        return f.parse(b, d, p, k)
                    }
            },
            ua = (ea._setPluginRatio = function(a) {
                this.plugin.setRatio(a);
                for (var b, e, c = this.data, f = c.proxy, p = c.firstMPT; p;) b = f[p.v], p.r ? b = 0 < b ? 0 | b + .5 : 0 | b - .5 : 1E-6 > b && -1E-6 < b && (b = 0), p.t[p.p] = b, p = p._next;
                if (c.autoRotate && (c.autoRotate.rotation = f.rotation), 1 === a)
                    for (p = c.firstMPT; p;) {
                        if (e = p.t, e.type) {
                            if (1 ===
                                e.type) {
                                b = e.xs0 + e.s + e.xs1;
                                for (a = 1; e.l > a; a++) b += e["xn" + a] + e["xs" + (a + 1)];
                                e.e = b
                            }
                        } else e.e = e.s + e.xs0;
                        p = p._next
                    }
            }, function(a, b, e, c, f) {
                this.t = a;
                this.p = b;
                this.v = e;
                this.r = f;
                c && (c._prev = this, this._next = c)
            }),
            ga = (ea._parseToProxy = function(a, b, e, c, f, p) {
                var k, d, g, h = c,
                    l = {},
                    m = {};
                d = e._transform;
                var n = U;
                e._transform = null;
                U = b;
                c = a = e.parse(a, b, c, f);
                U = n;
                for (p && (e._transform = d, h && (h._prev = null, h._prev && (h._prev._next = null))); c && c !== h;) {
                    if (1 >= c.type && (k = c.p, m[k] = c.s + c.c, l[k] = c.s, p || (g = new ua(c, "s", k, g, c.r), c.c = 0), 1 === c.type))
                        for (e =
                            c.l; 0 < --e;) d = "xn" + e, k = c.p + "_" + d, m[k] = c.data[d], l[k] = c[d], p || (g = new ua(c, d, k, g, c.rxp[d]));
                    c = c._next
                }
                return {
                    proxy: l,
                    end: m,
                    firstMPT: g,
                    pt: a
                }
            }, ea.CSSPropTween = function(a, b, e, c, f, p, k, d, g, m, n) {
                this.t = a;
                this.p = b;
                this.s = e;
                this.c = c;
                this.n = k || b;
                a instanceof ga || h.push(this.n);
                this.r = d;
                this.type = p || 0;
                g && (this.pr = g, l = !0);
                this.b = void 0 === m ? e : m;
                this.e = void 0 === n ? e + c : n;
                f && (this._next = f, f._prev = this)
            }),
            sa = g.parseComplex = function(a, b, c, f, p, k, d, g, h, l) {
                c = c || k || "";
                d = new ga(a, b, 0, 0, d, l ? 2 : 1, null, !1, g, c, f);
                f += "";
                var m, n,
                    r, w, q;
                a = c.split(", ").join(",").split(" ");
                b = f.split(", ").join(",").split(" ");
                g = a.length;
                var N = !1 !== t;
                (-1 !== f.indexOf(",") || -1 !== c.indexOf(",")) && (a = a.join(" ").replace(P, ", ").split(" "), b = b.join(" ").replace(P, ", ").split(" "), g = a.length);
                g !== b.length && (a = (k || "").split(" "), g = a.length);
                d.plugin = h;
                d.setRatio = l;
                for (c = 0; g > c; c++)
                    if (m = a[c], h = b[c], r = parseFloat(m), r || 0 === r) d.appendXtra("", r, qa(h, r), h.replace(u, ""), N && -1 !== h.indexOf("px"), !0);
                    else if (p && ("#" === m.charAt(0) || ja[m] || D.test(m))) l = "," === h.charAt(h.length -
                    1) ? ")," : ")", m = la(m), h = la(h), (k = 6 < m.length + h.length) && !da && 0 === h[3] ? (d["xs" + d.l] += d.l ? " transparent" : "transparent", d.e = d.e.split(b[c]).join("transparent")) : (da || (k = !1), d.appendXtra(k ? "rgba(" : "rgb(", m[0], h[0] - m[0], ",", !0, !0).appendXtra("", m[1], h[1] - m[1], ",", !0).appendXtra("", m[2], h[2] - m[2], k ? "," : l, !0), k && (m = 4 > m.length ? 1 : m[3], d.appendXtra("", m, (4 > h.length ? 1 : h[3]) - m, l, !1)));
                else if (k = m.match(e)) {
                    if (n = h.match(u), !n || n.length !== k.length) return d;
                    for (h = l = 0; k.length > h; h++) q = k[h], w = m.indexOf(q, l), d.appendXtra(m.substr(l,
                        w - l), Number(q), qa(n[h], q), "", N && "px" === m.substr(w + q.length, 2), 0 === h), l = w + q.length;
                    d["xs" + d.l] += m.substr(l)
                } else d["xs" + d.l] += d.l ? " " + m : m;
                if (-1 !== f.indexOf("=") && d.data) {
                    l = d.xs0 + d.data.s;
                    for (c = 1; d.l > c; c++) l += d["xs" + c] + d.data["xn" + c];
                    d.e = l + d["xs" + c]
                }
                return d.l || (d.type = -1, d.xs0 = d.e), d.xfirst || d
            },
            ia = 9,
            n = ga.prototype;
        for (n.l = n.pr = 0; 0 < --ia;) n["xn" + ia] = 0, n["xs" + ia] = "";
        n.xs0 = "";
        n._next = n._prev = n.xfirst = n.data = n.plugin = n.setRatio = n.rxp = null;
        n.appendXtra = function(a, b, e, c, f, p) {
            var d = this.l;
            return this["xs" +
                d] += p && d ? " " + a : a || "", e || 0 === d || this.plugin ? (this.l++, this.type = this.setRatio ? 2 : 1, this["xs" + this.l] = c || "", 0 < d ? (this.data["xn" + d] = b + e, this.rxp["xn" + d] = f, this["xn" + d] = b, this.plugin || (this.xfirst = new ga(this, "xn" + d, b, e, this.xfirst || this, 0, this.n, f, this.pr), this.xfirst.xs0 = 0), this) : (this.data = {
                s: b + e
            }, this.rxp = {}, this.s = b, this.c = e, this.r = f, this)) : (this["xs" + d] += b + (c || ""), this)
        };
        var Aa = function(a, b) {
                b = b || {};
                this.p = b.prefix ? fa(a) || a : a;
                s[a] = s[this.p] = this;
                this.format = b.formatter || za(b.defaultValue, b.color,
                    b.collapsible, b.multi);
                b.parser && (this.parse = b.parser);
                this.clrs = b.color;
                this.multi = b.multi;
                this.keyword = b.keyword;
                this.dflt = b.defaultValue;
                this.pr = b.priority || 0
            },
            ca = ea._registerComplexSpecialProp = function(a, b, e) {
                "object" != typeof b && (b = {
                    parser: e
                });
                var c = a.split(","),
                    f = b.defaultValue;
                e = e || [f];
                for (a = 0; c.length > a; a++) b.prefix = 0 === a && b.prefix, b.defaultValue = e[a] || f, new Aa(c[a], b)
            },
            ea = function(a) {
                if (!s[a]) {
                    var b = a.charAt(0).toUpperCase() + a.substr(1) + "Plugin";
                    ca(a, {
                        parser: function(a, e, c, f, p, d, k) {
                            var g =
                                (window.GreenSockGlobals || window).com.greensock.plugins[b];
                            g ? a = (g._cssRegister(), s[c].parse(a, e, c, f, p, d, k)) : (window.console && console.log("Error: " + b + " js file not loaded."), a = p);
                            return a
                        }
                    })
                }
            },
            n = Aa.prototype;
        n.parseComplex = function(a, b, e, c, f, p) {
            var d, k, g, h, m, l, n = this.keyword;
            if (this.multi && (P.test(e) || P.test(b) ? (k = b.replace(P, "|").split("|"), g = e.replace(P, "|").split("|")) : n && (k = [b], g = [e])), g) {
                h = g.length > k.length ? g.length : k.length;
                for (d = 0; h > d; d++) b = k[d] = k[d] || this.dflt, e = g[d] = g[d] || this.dflt, n && (m =
                    b.indexOf(n), l = e.indexOf(n), m !== l && (e = -1 === l ? g : k, e[d] += " " + n));
                b = k.join(", ");
                e = g.join(", ")
            }
            return sa(a, this.p, b, e, this.clrs, this.dflt, c, this.pr, f, p)
        };
        n.parse = function(a, b, e, f, d, p) {
            return this.parseComplex(a.style, this.format(V(a, this.p, c, !1, this.dflt)), this.format(b), d, p)
        };
        g.registerSpecialProp = function(a, b, e) {
            ca(a, {
                parser: function(a, c, f, d, p, k) {
                    p = new ga(a, f, 0, 0, p, 2, f, !1, e);
                    return p.plugin = k, p.setRatio = b(a, c, d._tween, f), p
                },
                priority: e
            })
        };
        var Ba = "scaleX scaleY scaleZ x y z skewX rotation rotationX rotationY perspective".split(" "),
            ma = fa("transform"),
            Ca = w + "transform",
            wa = fa("transformOrigin"),
            oa = null !== fa("perspective"),
            ra = function(a, b, e, c) {
                if (a._gsTransform && e && !c) return a._gsTransform;
                var f, d, p, k, h, m, l, n, r, w, u, q = e ? a._gsTransform || {
                        skewY: 0
                    } : {
                        skewY: 0
                    },
                    N = 0 > q.scaleX;
                h = 179.99 * S;
                var s = oa ? parseFloat(V(a, wa, b, !1, "0 0 0").split(" ")[2]) || q.zOrigin || 0 : 0;
                ma ? f = V(a, Ca, b, !0) : a.currentStyle && (f = a.currentStyle.filter.match(Q), f = f && 4 === f.length ? [f[0].substr(4), Number(f[2].substr(4)), Number(f[1].substr(4)), f[3].substr(4), q.x || 0, q.y || 0].join() :
                    "");
                d = (f || "").match(/(?:\-|\b)[\d\-\.e]+\b/gi) || [];
                for (f = d.length; - 1 < --f;) p = Number(d[f]), d[f] = (k = p - (p |= 0)) ? (0 | 1E5 * k + (0 > k ? -.5 : .5)) / 1E5 + p : p;
                if (16 === d.length) {
                    N = d[8];
                    b = d[9];
                    k = d[10];
                    p = d[12];
                    var fa = d[13],
                        t = d[14];
                    if (q.zOrigin && (t = -q.zOrigin, p = N * t - d[12], fa = b * t - d[13], t = k * t + q.zOrigin - d[14]), !e || c || null == q.rotationX) {
                        var y;
                        c = d[0];
                        var K = d[1],
                            z = d[2],
                            Z = d[3],
                            L = d[4],
                            x = d[5],
                            O = d[6],
                            I = d[7];
                        d = d[11];
                        var v = Math.atan2(O, k),
                            H = -h > v || v > h;
                        q.rotationX = v * Y;
                        v && (r = Math.cos(-v), w = Math.sin(-v), m = L * r + N * w, l = x * r + b * w, n = O * r + k * w, N = L *
                            -w + N * r, b = x * -w + b * r, k = O * -w + k * r, d = I * -w + d * r, L = m, x = l, O = n);
                        v = Math.atan2(N, c);
                        q.rotationY = v * Y;
                        v && (u = -h > v || v > h, r = Math.cos(-v), w = Math.sin(-v), m = c * r - N * w, l = K * r - b * w, n = z * r - k * w, b = K * w + b * r, k = z * w + k * r, d = Z * w + d * r, c = m, K = l, z = n);
                        v = Math.atan2(K, x);
                        q.rotation = v * Y;
                        v && (y = -h > v || v > h, r = Math.cos(-v), w = Math.sin(-v), c = c * r + L * w, l = K * r + x * w, x = K * -w + x * r, O = z * -w + O * r, K = l);
                        y && H ? q.rotation = q.rotationX = 0 : y && u ? q.rotation = q.rotationY = 0 : u && H && (q.rotationY = q.rotationX = 0);
                        q.scaleX = (0 | 1E5 * Math.sqrt(c * c + K * K) + .5) / 1E5;
                        q.scaleY = (0 | 1E5 * Math.sqrt(x * x + b *
                            b) + .5) / 1E5;
                        q.scaleZ = (0 | 1E5 * Math.sqrt(O * O + k * k) + .5) / 1E5;
                        q.skewX = 0;
                        q.perspective = d ? 1 / (0 > d ? -d : d) : 0;
                        q.x = p;
                        q.y = fa;
                        q.z = t
                    }
                } else oa && !c && d.length && q.x === d[4] && q.y === d[5] && (q.rotationX || q.rotationY) || void 0 !== q.x && "none" === V(a, "display", b) || (m = (h = 6 <= d.length) ? d[0] : 1, n = d[1] || 0, l = d[2] || 0, r = h ? d[3] : 1, q.x = d[4] || 0, q.y = d[5] || 0, d = Math.sqrt(m * m + n * n), h = Math.sqrt(r * r + l * l), m = m || n ? Math.atan2(n, m) * Y : q.rotation || 0, l = l || r ? Math.atan2(l, r) * Y + m : q.skewX || 0, n = d - Math.abs(q.scaleX || 0), r = h - Math.abs(q.scaleY || 0), 90 < Math.abs(l) && 270 >
                    Math.abs(l) && (N ? (d *= -1, l += 0 >= m ? 180 : -180, m += 0 >= m ? 180 : -180) : (h *= -1, l += 0 >= l ? 180 : -180)), w = (m - q.rotation) % 180, u = (l - q.skewX) % 180, (void 0 === q.skewX || 2E-5 < n || -2E-5 > n || 2E-5 < r || -2E-5 > r || -179.99 < w && 179.99 > w && 0 | 1E5 * w || -179.99 < u && 179.99 > u && 0 | 1E5 * u) && (q.scaleX = d, q.scaleY = h, q.rotation = m, q.skewX = l), oa && (q.rotationX = q.rotationY = q.z = 0, q.perspective = parseFloat(g.defaultTransformPerspective) || 0, q.scaleZ = 1));
                q.zOrigin = s;
                for (f in q) 2E-5 > q[f] && -2E-5 < q[f] && (q[f] = 0);
                return e && (a._gsTransform = q), q
            },
            Da = function(a) {
                var b, e,
                    c = this.data,
                    f = -c.rotation * S,
                    d = f + c.skewX * S,
                    p = (0 | Math.cos(f) * c.scaleX * 1E5) / 1E5,
                    k = (0 | Math.sin(f) * c.scaleX * 1E5) / 1E5,
                    g = (0 | Math.sin(d) * -c.scaleY * 1E5) / 1E5,
                    h = (0 | Math.cos(d) * c.scaleY * 1E5) / 1E5,
                    d = this.t.style;
                if (f = this.t.currentStyle) {
                    e = k;
                    k = -g;
                    g = -e;
                    b = f.filter;
                    d.filter = "";
                    var l, n;
                    e = this.t.offsetWidth;
                    var r = this.t.offsetHeight,
                        q = "absolute" !== f.position,
                        w = "progid:DXImageTransform.Microsoft.Matrix(M11=" + p + ", M12=" + k + ", M21=" + g + ", M22=" + h,
                        u = c.x,
                        N = c.y;
                    if (null != c.ox && (l = (c.oxp ? .01 * e * c.ox : c.ox) - e / 2, n = (c.oyp ? .01 * r * c.oy :
                            c.oy) - r / 2, u += l - (l * p + n * k), N += n - (l * g + n * h)), q ? (l = e / 2, n = r / 2, w += ", Dx=" + (l - (l * p + n * k) + u) + ", Dy=" + (n - (l * g + n * h) + N) + ")") : w += ", sizingMethod='auto expand')", d.filter = -1 !== b.indexOf("DXImageTransform.Microsoft.Matrix(") ? b.replace(R, w) : w + " " + b, (0 === a || 1 === a) && 1 === p && 0 === k && 0 === g && 1 === h && (q && -1 === w.indexOf("Dx=0, Dy=0") || J.test(b) && 100 !== parseFloat(RegExp.$1) || -1 === b.indexOf(b.indexOf("Alpha")) && d.removeAttribute("filter")), !q)
                        for (a = 8 > m ? 1 : -1, l = c.ieOffsetX || 0, n = c.ieOffsetY || 0, c.ieOffsetX = Math.round((e - ((0 > p ? -p :
                                p) * e + (0 > k ? -k : k) * r)) / 2 + u), c.ieOffsetY = Math.round((r - ((0 > h ? -h : h) * r + (0 > g ? -g : g) * e)) / 2 + N), ia = 0; 4 > ia; ia++) p = X[ia], k = f[p], e = -1 !== k.indexOf("px") ? parseFloat(k) : z(this.t, p, parseFloat(k), k.replace(y, "")) || 0, k = e !== c[p] ? 2 > ia ? -c.ieOffsetX : -c.ieOffsetY : 2 > ia ? l - c.ieOffsetX : n - c.ieOffsetY, d[p] = (c[p] = Math.round(e - k * (0 === ia || 2 === ia ? 1 : a))) + "px"
                }
            },
            xa = function() {
                var a, b, e, c, f, d, p, k, g, h, l, m, n, q, w, u, N, s, t, fa, y, V, K = this.data,
                    z = this.t.style,
                    Z = K.rotation * S,
                    L = K.scaleX,
                    x = K.scaleY,
                    O = K.scaleZ,
                    v = K.perspective;
                r && (1E-4 > L && -1E-4 < L &&
                    (L = O = 2E-5), 1E-4 > x && -1E-4 < x && (x = O = 2E-5), !v || K.z || K.rotationX || K.rotationY || (v = 0));
                if (Z || K.skewX) N = Math.cos(Z), s = Math.sin(Z), a = N, f = s, K.skewX && (Z -= K.skewX * S, N = Math.cos(Z), s = Math.sin(Z)), b = -s, d = N;
                else {
                    if (!(K.rotationY || K.rotationX || 1 !== O || v)) return z[ma] = "translate3d(" + K.x + "px," + K.y + "px," + K.z + "px)" + (1 !== L || 1 !== x ? " scale(" + L + "," + x + ")" : ""), void 0;
                    a = d = 1;
                    b = f = 0
                }
                l = 1;
                e = c = p = k = g = h = m = n = q = 0;
                w = v ? -1 / v : 0;
                u = K.zOrigin;
                (Z = K.rotationY * S) && (N = Math.cos(Z), s = Math.sin(Z), g = l * -s, n = w * -s, e = a * s, p = f * s, l *= N, w *= N, a *= N, f *= N);
                (Z = K.rotationX *
                    S) && (N = Math.cos(Z), s = Math.sin(Z), t = b * N + e * s, fa = d * N + p * s, y = h * N + l * s, V = q * N + w * s, e = b * -s + e * N, p = d * -s + p * N, l = h * -s + l * N, w = q * -s + w * N, b = t, d = fa, h = y, q = V);
                1 !== O && (e *= O, p *= O, l *= O, w *= O);
                1 !== x && (b *= x, d *= x, h *= x, q *= x);
                1 !== L && (a *= L, f *= L, g *= L, n *= L);
                u && (m -= u, c = e * m, k = p * m, m = l * m + u);
                c = (t = (c += K.x) - (c |= 0)) ? (0 | 1E5 * t + (0 > t ? -.5 : .5)) / 1E5 + c : c;
                k = (t = (k += K.y) - (k |= 0)) ? (0 | 1E5 * t + (0 > t ? -.5 : .5)) / 1E5 + k : k;
                m = (t = (m += K.z) - (m |= 0)) ? (0 | 1E5 * t + (0 > t ? -.5 : .5)) / 1E5 + m : m;
                z[ma] = "matrix3d(" + [(0 | 1E5 * a) / 1E5, (0 | 1E5 * f) / 1E5, (0 | 1E5 * g) / 1E5, (0 | 1E5 * n) / 1E5, (0 | 1E5 * b) / 1E5, (0 | 1E5 * d) / 1E5, (0 | 1E5 * h) / 1E5, (0 | 1E5 * q) / 1E5, (0 | 1E5 * e) / 1E5, (0 | 1E5 * p) / 1E5, (0 | 1E5 * l) / 1E5, (0 | 1E5 * w) / 1E5, c, k, m, v ? 1 + -m / v : 1].join() + ")"
            },
            Ea = function(a) {
                var b, e, c, f, d = this.data,
                    p = this.t.style;
                return d.rotationX || d.rotationY || d.z || d.force3D ? (this.setRatio = xa, xa.call(this, a), void 0) : (d.rotation || d.skewX ? (b = d.rotation * S, e = b - d.skewX * S, c = 1E5 * d.scaleX, f = 1E5 * d.scaleY, p[ma] = "matrix(" + (0 | Math.cos(b) * c) / 1E5 + "," + (0 | Math.sin(b) * c) / 1E5 + "," + (0 | Math.sin(e) * -f) / 1E5 + "," + (0 | Math.cos(e) * f) / 1E5 + "," + d.x + "," + d.y + ")") : p[ma] = "matrix(" +
                    d.scaleX + ",0,0," + d.scaleY + "," + d.x + "," + d.y + ")", void 0)
            };
        ca("transform,scale,scaleX,scaleY,scaleZ,x,y,z,rotation,rotationX,rotationY,rotationZ,skewX,skewY,shortRotation,shortRotationX,shortRotationY,shortRotationZ,transformOrigin,transformPerspective,directionalRotation,parseTransform,force3D", {
            parser: function(a, b, e, f, d, p, k) {
                if (f._transform) return d;
                var g, h, l, m, n, r;
                b = f._transform = ra(a, c, !0, k.parseTransform);
                var q = a.style,
                    w = Ba.length,
                    u = {};
                if ("string" == typeof k.transform && ma) l = q.cssText, q[ma] = k.transform,
                    q.display = "block", g = ra(a, null, !1), q.cssText = l;
                else if ("object" == typeof k) {
                    if (g = {
                            scaleX: v(null != k.scaleX ? k.scaleX : k.scale, b.scaleX),
                            scaleY: v(null != k.scaleY ? k.scaleY : k.scale, b.scaleY),
                            scaleZ: v(k.scaleZ, b.scaleZ),
                            x: v(k.x, b.x),
                            y: v(k.y, b.y),
                            z: v(k.z, b.z),
                            perspective: v(k.transformPerspective, b.perspective)
                        }, r = k.directionalRotation, null != r)
                        if ("object" == typeof r)
                            for (l in r) k[l] = r[l];
                        else k.rotation = r;
                    g.rotation = ba("rotation" in k ? k.rotation : "shortRotation" in k ? k.shortRotation + "_short" : "rotationZ" in k ? k.rotationZ :
                        b.rotation, b.rotation, "rotation", u);
                    oa && (g.rotationX = ba("rotationX" in k ? k.rotationX : "shortRotationX" in k ? k.shortRotationX + "_short" : b.rotationX || 0, b.rotationX, "rotationX", u), g.rotationY = ba("rotationY" in k ? k.rotationY : "shortRotationY" in k ? k.shortRotationY + "_short" : b.rotationY || 0, b.rotationY, "rotationY", u));
                    g.skewX = null == k.skewX ? b.skewX : ba(k.skewX, b.skewX);
                    g.skewY = null == k.skewY ? b.skewY : ba(k.skewY, b.skewY);
                    (h = g.skewY - b.skewY) && (g.skewX += h, g.rotation += h)
                }
                oa && null != k.force3D && (b.force3D = k.force3D, n = !0);
                for ((h = b.force3D || b.z || b.rotationX || b.rotationY || g.z || g.rotationX || g.rotationY || g.perspective) || null == k.scale || (g.scaleZ = 1); - 1 < --w;) e = Ba[w], m = g[e] - b[e], (1E-6 < m || -1E-6 > m || null != U[e]) && (n = !0, d = new ga(b, e, b[e], m, d), e in u && (d.e = u[e]), d.xs0 = 0, d.plugin = p, f._overwriteProps.push(d.n));
                return m = k.transformOrigin, (m || oa && h && b.zOrigin) && (ma ? (n = !0, e = wa, m = (m || V(a, e, c, !1, "50% 50%")) + "", d = new ga(q, e, 0, 0, d, -1, "transformOrigin"), d.b = q[e], d.plugin = p, oa ? (l = b.zOrigin, m = m.split(" "), b.zOrigin = (2 < m.length && (0 === l || "0px" !==
                    m[2]) ? parseFloat(m[2]) : l) || 0, d.xs0 = d.e = q[e] = m[0] + " " + (m[1] || "50%") + " 0px", d = new ga(b, "zOrigin", 0, 0, d, -1, d.n), d.b = l, d.xs0 = d.e = b.zOrigin) : d.xs0 = d.e = q[e] = m) : T(m + "", b)), n && (f._transformType = h || 3 === this._transformType ? 3 : 2), d
            },
            prefix: !0
        });
        ca("boxShadow", {
            defaultValue: "0px 0px 0px 0px #999",
            prefix: !0,
            color: !0,
            multi: !0,
            keyword: "inset"
        });
        ca("borderRadius", {
            defaultValue: "0px",
            parser: function(b, e, d, f, k) {
                e = this.format(e);
                var p, g, h, m, l, n, r, q, w, u, N, s, t, y, K = ["borderTopLeftRadius", "borderTopRightRadius", "borderBottomRightRadius",
                        "borderBottomLeftRadius"
                    ],
                    Z = b.style;
                f = parseFloat(b.offsetWidth);
                q = parseFloat(b.offsetHeight);
                e = e.split(" ");
                for (p = 0; K.length > p; p++) this.p.indexOf("border") && (K[p] = fa(K[p])), m = h = V(b, K[p], c, !1, "0px"), -1 !== m.indexOf(" ") && (h = m.split(" "), m = h[0], h = h[1]), l = g = e[p], n = parseFloat(m), u = m.substr((n + "").length), (N = "=" === l.charAt(1)) ? (r = parseInt(l.charAt(0) + "1", 10), l = l.substr(2), r *= parseFloat(l), w = l.substr((r + "").length - (0 > r ? 1 : 0)) || "") : (r = parseFloat(l), w = l.substr((r + "").length)), "" === w && (w = a[d] || u), w !== u && (s =
                    z(b, "borderLeft", n, u), t = z(b, "borderTop", n, u), "%" === w ? (m = s / f * 100 + "%", h = t / q * 100 + "%") : "em" === w ? (y = z(b, "borderLeft", 1, "em"), m = s / y + "em", h = t / y + "em") : (m = s + "px", h = t + "px"), N && (l = parseFloat(m) + r + w, g = parseFloat(h) + r + w)), k = sa(Z, K[p], m + " " + h, l + " " + g, !1, "0px", k);
                return k
            },
            prefix: !0,
            formatter: za("0px 0px 0px 0px", !1, !0)
        });
        ca("backgroundPosition", {
            defaultValue: "0 0",
            parser: function(a, b, e, f, d, k) {
                var p, g, h;
                e = c || Z(a, null);
                e = this.format((e ? m ? e.getPropertyValue("background-position-x") + " " + e.getPropertyValue("background-position-y") :
                    e.getPropertyValue("background-position") : a.currentStyle.backgroundPositionX + " " + a.currentStyle.backgroundPositionY) || "0 0");
                var l = this.format(b);
                if (-1 !== e.indexOf("%") != (-1 !== l.indexOf("%")) && (p = V(a, "backgroundImage").replace(F, ""), p && "none" !== p)) {
                    b = e.split(" ");
                    f = l.split(" ");
                    K.setAttribute("src", p);
                    for (p = 2; - 1 < --p;) e = b[p], g = -1 !== e.indexOf("%"), g !== (-1 !== f[p].indexOf("%")) && (h = 0 === p ? a.offsetWidth - K.width : a.offsetHeight - K.height, b[p] = g ? parseFloat(e) / 100 * h + "px" : 100 * (parseFloat(e) / h) + "%");
                    e = b.join(" ")
                }
                return this.parseComplex(a.style,
                    e, l, d, k)
            },
            formatter: T
        });
        ca("backgroundSize", {
            defaultValue: "0 0",
            formatter: T
        });
        ca("perspective", {
            defaultValue: "0px",
            prefix: !0
        });
        ca("perspectiveOrigin", {
            defaultValue: "50% 50%",
            prefix: !0
        });
        ca("transformStyle", {
            prefix: !0
        });
        ca("backfaceVisibility", {
            prefix: !0
        });
        ca("userSelect", {
            prefix: !0
        });
        ca("margin", {
            parser: va("marginTop,marginRight,marginBottom,marginLeft")
        });
        ca("padding", {
            parser: va("paddingTop,paddingRight,paddingBottom,paddingLeft")
        });
        ca("clip", {
            defaultValue: "rect(0px,0px,0px,0px)",
            parser: function(a,
                b, e, f, d, k) {
                var p, g, h;
                return 9 > m ? (g = a.currentStyle, h = 8 > m ? " " : ",", p = "rect(" + g.clipTop + h + g.clipRight + h + g.clipBottom + h + g.clipLeft + ")", b = this.format(b).split(",").join(h)) : (p = this.format(V(a, this.p, c, !1, this.dflt)), b = this.format(b)), this.parseComplex(a.style, p, b, d, k)
            }
        });
        ca("textShadow", {
            defaultValue: "0px 0px 0px #999",
            color: !0,
            multi: !0
        });
        ca("autoRound,strictUnits", {
            parser: function(a, b, e, c, f) {
                return f
            }
        });
        ca("border", {
            defaultValue: "0px solid #000",
            parser: function(a, b, e, f, d, k) {
                return this.parseComplex(a.style,
                    this.format(V(a, "borderTopWidth", c, !1, "0px") + " " + V(a, "borderTopStyle", c, !1, "solid") + " " + V(a, "borderTopColor", c, !1, "#000")), this.format(b), d, k)
            },
            color: !0,
            formatter: function(a) {
                var b = a.split(" ");
                return b[0] + " " + (b[1] || "solid") + " " + (a.match(pa) || ["#000"])[0]
            }
        });
        ca("borderWidth", {
            parser: va("borderTopWidth,borderRightWidth,borderBottomWidth,borderLeftWidth")
        });
        ca("float,cssFloat,styleFloat", {
            parser: function(a, b, e, c, f) {
                a = a.style;
                c = "cssFloat" in a ? "cssFloat" : "styleFloat";
                return new ga(a, c, 0, 0, f, -1, e, !1,
                    0, a[c], b)
            }
        });
        var Fa = function(a) {
            var b, e = this.t,
                c = e.filter || V(this.data, "filter");
            a = 0 | this.s + this.c * a;
            100 === a && (-1 === c.indexOf("atrix(") && -1 === c.indexOf("radient(") && -1 === c.indexOf("oader(") ? (e.removeAttribute("filter"), b = !V(this.data, "filter")) : (e.filter = c.replace(x, ""), b = !0));
            b || (this.xn1 && (e.filter = c = c || "alpha(opacity=" + a + ")"), -1 === c.indexOf("opacity") ? 0 === a && this.xn1 || (e.filter = c + " alpha(opacity=" + a + ")") : e.filter = c.replace(J, "opacity=" + a))
        };
        ca("opacity,alpha,autoAlpha", {
            defaultValue: "1",
            parser: function(a,
                b, e, f, d, k) {
                var p = parseFloat(V(a, "opacity", c, !1, "1")),
                    g = a.style,
                    h = "autoAlpha" === e;
                return "string" == typeof b && "=" === b.charAt(1) && (b = ("-" === b.charAt(0) ? -1 : 1) * parseFloat(b.substr(2)) + p), h && 1 === p && "hidden" === V(a, "visibility", c) && 0 !== b && (p = 0), da ? d = new ga(g, "opacity", p, b - p, d) : (d = new ga(g, "opacity", 100 * p, 100 * (b - p), d), d.xn1 = h ? 1 : 0, g.zoom = 1, d.type = 2, d.b = "alpha(opacity=" + d.s + ")", d.e = "alpha(opacity=" + (d.s + d.c) + ")", d.data = a, d.plugin = k, d.setRatio = Fa), h && (d = new ga(g, "visibility", 0, 0, d, -1, null, !1, 0, 0 !== p ? "inherit" :
                    "hidden", 0 === b ? "hidden" : "inherit"), d.xs0 = "inherit", f._overwriteProps.push(d.n), f._overwriteProps.push(e)), d
            }
        });
        var ya = function(a, b) {
                b && (a.removeProperty ? a.removeProperty(b.replace(A, "-$1").toLowerCase()) : a.removeAttribute(b))
            },
            Ga = function(a) {
                if (this.t._gsClassPT = this, 1 === a || 0 === a) {
                    this.t.className = 0 === a ? this.b : this.e;
                    for (var b = this.data, e = this.t.style; b;) b.v ? e[b.p] = b.v : ya(e, b.p), b = b._next;
                    1 === a && this.t._gsClassPT === this && (this.t._gsClassPT = null)
                } else this.t.className !== this.e && (this.t.className = this.e)
            };
        ca("className", {
            parser: function(a, b, e, d, f, k, p) {
                var g, h, m, n, r = a.className,
                    q = a.style.cssText;
                if (f = d._classNamePT = new ga(a, e, 0, 0, f, 2), f.setRatio = Ga, f.pr = -11, l = !0, f.b = r, e = M(a, c), h = a._gsClassPT) {
                    m = {};
                    for (n = h.data; n;) m[n.p] = 1, n = n._next;
                    h.setRatio(1)
                }
                return a._gsClassPT = f, f.e = "=" !== b.charAt(1) ? b : r.replace(RegExp("\\s*\\b" + b.substr(2) + "\\b"), "") + ("+" === b.charAt(0) ? " " + b.substr(2) : ""), d._tween._duration && (a.className = f.e, g = ha(a, e, M(a), p, m), a.className = r, f.data = g.firstMPT, a.style.cssText = q, f = f.xfirst = d.parse(a,
                    g.difs, f, k)), f
            }
        });
        var Ha = function(a) {
            if ((1 === a || 0 === a) && this.data._totalTime === this.data._totalDuration && "isFromStart" !== this.data.data) {
                var b, e, c, d = this.t.style,
                    f = s.transform.parse;
                if ("all" === this.e) d.cssText = "", c = !0;
                else
                    for (a = this.e.split(","), e = a.length; - 1 < --e;) b = a[e], s[b] && (s[b].parse === f ? c = !0 : b = "transformOrigin" === b ? wa : s[b].p), ya(d, b);
                c && (ya(d, ma), this.t._gsTransform && delete this.t._gsTransform)
            }
        };
        ca("clearProps", {
            parser: function(a, b, e, c, d) {
                return d = new ga(a, e, 0, 0, d, 2), d.setRatio = Ha, d.e = b, d.pr = -10, d.data = c._tween, l = !0, d
            }
        });
        n = ["bezier", "throwProps", "physicsProps", "physics2D"];
        for (ia = n.length; ia--;) ea(n[ia]);
        n = g.prototype;
        n._firstPT = null;
        n._onInitTween = function(b, e, d) {
            if (!b.nodeType) return !1;
            this._target = b;
            this._tween = d;
            this._vars = e;
            t = e.autoRound;
            l = !1;
            a = e.suffixMap || g.suffixMap;
            c = Z(b, "");
            h = this._overwriteProps;
            var p, m, n, r, w = b.style;
            if (q && "" === w.zIndex && (p = V(b, "zIndex", c), ("auto" === p || "" === p) && (w.zIndex = 0)), "string" == typeof e && (n = w.cssText, p = M(b, c), w.cssText = n + ";" + e, p = ha(b, p, M(b)).difs, !da &&
                    H.test(e) && (p.opacity = parseFloat(RegExp.$1)), e = p, w.cssText = n), this._firstPT = d = this.parse(b, e, null), this._transformType) {
                e = 3 === this._transformType;
                ma ? k && (q = !0, "" === w.zIndex && (m = V(b, "zIndex", c), ("auto" === m || "" === m) && (w.zIndex = 0)), f && (w.WebkitBackfaceVisibility = this._vars.WebkitBackfaceVisibility || (e ? "visible" : "hidden"))) : w.zoom = 1;
                for (m = d; m && m._next;) m = m._next;
                p = new ga(b, "transform", 0, 0, null, 2);
                this._linkCSSP(p, null, m);
                p.setRatio = e && oa ? xa : ma ? Ea : Da;
                p.data = this._transform || ra(b, c, !0);
                h.pop()
            }
            if (l) {
                for (; d;) {
                    b =
                        d._next;
                    for (m = n; m && m.pr > d.pr;) m = m._next;
                    (d._prev = m ? m._prev : r) ? d._prev._next = d: n = d;
                    (d._next = m) ? m._prev = d: r = d;
                    d = b
                }
                this._firstPT = n
            }
            return !0
        };
        n.parse = function(b, e, d, f) {
            var p, k, g, h, m, l, n, r, q, w = b.style;
            for (p in e) {
                m = e[p];
                if (k = s[p]) d = k.parse(b, m, p, this, d, f, e);
                else if (k = V(b, p, c) + "", r = "string" == typeof m, "color" === p || "fill" === p || "stroke" === p || -1 !== p.indexOf("Color") || r && D.test(m)) r || (m = la(m), m = (3 < m.length ? "rgba(" : "rgb(") + m.join(",") + ")"), d = sa(w, p, k, m, !0, "transparent", d, 0, f);
                else if (!r || -1 === m.indexOf(" ") &&
                    -1 === m.indexOf(",")) {
                    l = (g = parseFloat(k)) || 0 === g ? k.substr((g + "").length) : "";
                    if ("" === k || "auto" === k)
                        if ("width" === p || "height" === p) {
                            g = b;
                            var u = p;
                            l = c;
                            q = parseFloat("width" === u ? g.offsetWidth : g.offsetHeight);
                            var u = G[u],
                                N = u.length;
                            for (l = l || Z(g, null); - 1 < --N;) q -= parseFloat(V(g, "padding" + u[N], l, !0)) || 0, q -= parseFloat(V(g, "border" + u[N] + "Width", l, !0)) || 0;
                            g = q;
                            l = "px"
                        } else "left" === p || "top" === p ? (g = O(b, p, c), l = "px") : (g = "opacity" !== p ? 0 : 1, l = "");
                        (q = r && "=" === m.charAt(1)) ? (h = parseInt(m.charAt(0) + "1", 10), m = m.substr(2), h *= parseFloat(m),
                            n = m.replace(y, "")) : (h = parseFloat(m), n = r ? m.substr((h + "").length) || "" : "");
                        "" === n && (n = p in a ? a[p] : l);
                    m = h || 0 === h ? (q ? h + g : h) + n : e[p];
                    l === n || "" === n || !h && 0 !== h || !g && 0 !== g || (g = z(b, p, g, l), "%" === n ? (g /= z(b, p, 100, "%") / 100, !0 !== e.strictUnits && (k = g + "%")) : "em" === n ? g /= z(b, p, 1, "em") : (h = z(b, p, h, n), n = "px"), !q || !h && 0 !== h || (m = h + g + n));
                    q && (h += g);
                    !g && 0 !== g || !h && 0 !== h ? void 0 !== w[p] && (m || "NaN" != m + "" && null != m) ? (d = new ga(w, p, h || g || 0, 0, d, -1, p, !1, 0, k, m), d.xs0 = "none" !== m || "display" !== p && -1 === p.indexOf("Style") ? m : k) : window.console &&
                        console.log("invalid " + p + " tween value: " + e[p]) : (d = new ga(w, p, g, h - g, d, 0, p, !1 !== t && ("px" === n || "zIndex" === p), 0, k, m), d.xs0 = n)
                } else d = sa(w, p, k, m, !0, null, d, 0, f);
                f && d && !d.plugin && (d.plugin = f)
            }
            return d
        };
        n.setRatio = function(a) {
            var b, e, c, d = this._firstPT;
            if (1 !== a || this._tween._time !== this._tween._duration && 0 !== this._tween._time)
                if (a || this._tween._time !== this._tween._duration && 0 !== this._tween._time || -1E-6 === this._tween._rawPrevTime)
                    for (; d;) {
                        if (b = d.c * a + d.s, d.r ? b = 0 < b ? 0 | b + .5 : 0 | b - .5 : 1E-6 > b && -1E-6 < b && (b = 0), d.type)
                            if (1 ===
                                d.type)
                                if (c = d.l, 2 === c) d.t[d.p] = d.xs0 + b + d.xs1 + d.xn1 + d.xs2;
                                else if (3 === c) d.t[d.p] = d.xs0 + b + d.xs1 + d.xn1 + d.xs2 + d.xn2 + d.xs3;
                        else if (4 === c) d.t[d.p] = d.xs0 + b + d.xs1 + d.xn1 + d.xs2 + d.xn2 + d.xs3 + d.xn3 + d.xs4;
                        else if (5 === c) d.t[d.p] = d.xs0 + b + d.xs1 + d.xn1 + d.xs2 + d.xn2 + d.xs3 + d.xn3 + d.xs4 + d.xn4 + d.xs5;
                        else {
                            e = d.xs0 + b + d.xs1;
                            for (c = 1; d.l > c; c++) e += d["xn" + c] + d["xs" + (c + 1)];
                            d.t[d.p] = e
                        } else -1 === d.type ? d.t[d.p] = d.xs0 : d.setRatio && d.setRatio(a);
                        else d.t[d.p] = b + d.xs0;
                        d = d._next
                    } else
                        for (; d;) 2 !== d.type ? d.t[d.p] = d.b : d.setRatio(a), d = d._next;
                else
                    for (; d;) 2 !== d.type ? d.t[d.p] = d.e : d.setRatio(a), d = d._next
        };
        n._enableTransforms = function(a) {
            this._transformType = a || 3 === this._transformType ? 3 : 2;
            this._transform = this._transform || ra(this._target, c, !0)
        };
        n._linkCSSP = function(a, b, e, c) {
            return a && (b && (b._prev = a), a._next && (a._next._prev = a._prev), a._prev ? a._prev._next = a._next : this._firstPT === a && (this._firstPT = a._next, c = !0), e ? e._next = a : c || null !== this._firstPT || (this._firstPT = a), a._next = b, a._prev = e), a
        };
        n._kill = function(a) {
            var e, c, d, f = a;
            if (a.autoAlpha || a.alpha) {
                f = {};
                for (c in a) f[c] = a[c];
                f.opacity = 1;
                f.autoAlpha && (f.visibility = 1)
            }
            return a.className && (e = this._classNamePT) && (d = e.xfirst, d && d._prev ? this._linkCSSP(d._prev, e._next, d._prev._prev) : d === this._firstPT && (this._firstPT = e._next), e._next && this._linkCSSP(e._next, e._next._next, d._prev), this._classNamePT = null), b.prototype._kill.call(this, f)
        };
        var ta = function(a, b, e) {
            var c, d, f;
            if (a.slice)
                for (c = a.length; - 1 < --c;) ta(a[c], b, e);
            else
                for (a = a.childNodes, c = a.length; - 1 < --c;) d = a[c], f = d.type, d.style && (b.push(M(d)), e && e.push(d)),
                    1 !== f && 9 !== f && 11 !== f || !d.childNodes.length || ta(d, b, e)
        };
        return g.cascadeTo = function(a, b, e) {
            var c, f, p = d.to(a, b, e),
                k = [p],
                g = [],
                h = [],
                m = [],
                l = d._internals.reservedProps;
            a = p._targets || p.target;
            ta(a, g, m);
            p.render(b, !0);
            ta(a, h);
            p.render(0, !0);
            p._enabled(!0);
            for (a = m.length; - 1 < --a;)
                if (c = ha(m[a], g[a], h[a]), c.firstMPT) {
                    c = c.difs;
                    for (f in e) l[f] && (c[f] = e[f]);
                    k.push(d.to(m[a], b, c))
                }
            return k
        }, b.activate([g]), g
    }, !0);
    (function() {
        var b = window._gsDefine.plugin({
            propName: "roundProps",
            priority: -1,
            API: 2,
            init: function(b, l,
                a) {
                return this._tween = a, !0
            }
        }).prototype;
        b._onInitAllProps = function() {
            for (var b, l, a, c = this._tween, h = c.vars.roundProps instanceof Array ? c.vars.roundProps : c.vars.roundProps.split(","), g = h.length, s = {}, n = c._propLookup.roundProps; - 1 < --g;) s[h[g]] = 1;
            for (g = h.length; - 1 < --g;)
                for (b = h[g], l = c._firstPT; l;) a = l._next, l.pg ? l.t._roundProps(s, !0) : l.n === b && (this._add(l.t, b, l.s, l.c), a && (a._prev = l._prev), l._prev ? l._prev._next = a : c._firstPT === l && (c._firstPT = a), l._next = l._prev = null, c._propLookup[b] = n), l = a;
            return !1
        };
        b._add =
            function(b, l, a, c) {
                this._addTween(b, l, a, a + c, l, !0);
                this._overwriteProps.push(l)
            }
    })();
    window._gsDefine.plugin({
        propName: "attr",
        API: 2,
        version: "0.2.0",
        init: function(b, d) {
            var l;
            if ("function" != typeof b.setAttribute) return !1;
            this._target = b;
            this._proxy = {};
            for (l in d) this._addTween(this._proxy, l, parseFloat(b.getAttribute(l)), d[l], l) && this._overwriteProps.push(l);
            return !0
        },
        set: function(b) {
            this._super.setRatio.call(this, b);
            for (var d = this._overwriteProps, l = d.length; - 1 < --l;) b = d[l], this._target.setAttribute(b, this._proxy[b] +
                "")
        }
    });
    window._gsDefine.plugin({
        propName: "directionalRotation",
        API: 2,
        version: "0.2.0",
        init: function(b, d) {
            "object" != typeof d && (d = {
                rotation: d
            });
            this.finals = {};
            var l, a, c, h, g, s, n = !0 === d.useRadians ? 2 * Math.PI : 360;
            for (l in d) "useRadians" !== l && (s = (d[l] + "").split("_"), a = s[0], c = parseFloat("function" != typeof b[l] ? b[l] : b[l.indexOf("set") || "function" != typeof b["get" + l.substr(3)] ? l : "get" + l.substr(3)]()), h = this.finals[l] = "string" == typeof a && "=" === a.charAt(1) ? c + parseInt(a.charAt(0) + "1", 10) * Number(a.substr(2)) : Number(a) ||
                0, g = h - c, s.length && (a = s.join("_"), -1 !== a.indexOf("short") && (g %= n, g !== g % (n / 2) && (g = 0 > g ? g + n : g - n)), -1 !== a.indexOf("_cw") && 0 > g ? g = (g + 9999999999 * n) % n - (0 | g / n) * n : -1 !== a.indexOf("ccw") && 0 < g && (g = (g - 9999999999 * n) % n - (0 | g / n) * n)), (1E-6 < g || -1E-6 > g) && (this._addTween(b, l, c, c + g, l), this._overwriteProps.push(l)));
            return !0
        },
        set: function(b) {
            if (1 !== b) this._super.setRatio.call(this, b);
            else
                for (b = this._firstPT; b;) b.f ? b.t[b.p](this.finals[b.p]) : b.t[b.p] = this.finals[b.p], b = b._next
        }
    })._autoCSS = !0;
    window._gsDefine("easing.Back", ["easing.Ease"], function(b) {
        var d, l, a, c = window.GreenSockGlobals || window,
            h = 2 * Math.PI,
            g = Math.PI / 2,
            s = c.com.greensock._class,
            n = function(a, c) {
                var d = s("easing." + a, function() {}, !0),
                    f = d.prototype = new b;
                return f.constructor = d, f.getRatio = c, d
            },
            t = b.register || function() {},
            q = function(a, b, c, d) {
                b = s("easing." + a, {
                    easeOut: new b,
                    easeIn: new c,
                    easeInOut: new d
                }, !0);
                return t(b, a), b
            },
            k = function(a, b, c) {
                this.t = a;
                this.v = b;
                c && (this.next = c, c.prev = this, this.c = c.v - b, this.gap = c.t - a)
            },
            r = function(a, c) {
                var d = s("easing." + a, function(a) {
                        this._p1 =
                            a || 0 === a ? a : 1.70158;
                        this._p2 = 1.525 * this._p1
                    }, !0),
                    f = d.prototype = new b;
                return f.constructor = d, f.getRatio = c, f.config = function(a) {
                    return new d(a)
                }, d
            },
            r = q("Back", r("BackOut", function(a) {
                return --a * a * ((this._p1 + 1) * a + this._p1) + 1
            }), r("BackIn", function(a) {
                return a * a * ((this._p1 + 1) * a - this._p1)
            }), r("BackInOut", function(a) {
                return 1 > (a *= 2) ? .5 * a * a * ((this._p2 + 1) * a - this._p2) : .5 * ((a -= 2) * a * ((this._p2 + 1) * a + this._p2) + 2)
            })),
            f = s("easing.SlowMo", function(a, b, c) {
                null == a ? a = .7 : 1 < a && (a = 1);
                this._p = 1 !== a ? b || 0 === b ? b : .7 : 0;
                this._p1 =
                    (1 - a) / 2;
                this._p2 = a;
                this._p3 = this._p1 + this._p2;
                this._calcEnd = !0 === c
            }, !0),
            m = f.prototype = new b;
        return m.constructor = f, m.getRatio = function(a) {
                var b = a + (.5 - a) * this._p;
                return this._p1 > a ? this._calcEnd ? 1 - (a = 1 - a / this._p1) * a : b - (a = 1 - a / this._p1) * a * a * a * b : a > this._p3 ? this._calcEnd ? 1 - (a = (a - this._p3) / this._p1) * a : b + (a - b) * (a = (a - this._p3) / this._p1) * a * a * a : this._calcEnd ? 1 : b
            }, f.ease = new f(.7, .7), m.config = f.config = function(a, b, c) {
                return new f(a, b, c)
            }, d = s("easing.SteppedEase", function(a) {
                a = a || 1;
                this._p1 = 1 / a;
                this._p2 = a + 1
            }, !0), m = d.prototype = new b, m.constructor = d, m.getRatio = function(a) {
                return 0 > a ? a = 0 : 1 <= a && (a = .999999999), (this._p2 * a >> 0) * this._p1
            }, m.config = d.config = function(a) {
                return new d(a)
            }, l = s("easing.RoughEase", function(a) {
                a = a || {};
                for (var c, d, f, g, h = a.taper || "none", m = [], l = 0, n = g = 0 | (a.points || 20), r = !1 !== a.randomize, q = !0 === a.clamp, s = a.template instanceof b ? a.template : null, t = "number" == typeof a.strength ? .4 * a.strength : .4; - 1 < --n;) a = r ? Math.random() : 1 / g * n, c = s ? s.getRatio(a) : a, "none" === h ? d = t : "out" === h ? (f = 1 - a, d = f * f * t) : "in" ===
                    h ? d = a * a * t : .5 > a ? (f = 2 * a, d = .5 * f * f * t) : (f = 2 * (1 - a), d = .5 * f * f * t), r ? c += Math.random() * d - .5 * d : n % 2 ? c += .5 * d : c -= .5 * d, q && (1 < c ? c = 1 : 0 > c && (c = 0)), m[l++] = {
                        x: a,
                        y: c
                    };
                m.sort(function(a, b) {
                    return a.x - b.x
                });
                d = new k(1, 1, null);
                for (n = g; - 1 < --n;) g = m[n], d = new k(g.x, g.y, d);
                this._prev = new k(0, 0, 0 !== d.t ? d : d.next)
            }, !0), m = l.prototype = new b, m.constructor = l, m.getRatio = function(a) {
                var b = this._prev;
                if (a > b.t) {
                    for (; b.next && a >= b.t;) b = b.next;
                    b = b.prev
                } else
                    for (; b.prev && b.t >= a;) b = b.prev;
                return this._prev = b, b.v + (a - b.t) / b.gap * b.c
            }, m.config = function(a) {
                return new l(a)
            },
            l.ease = new l, q("Bounce", n("BounceOut", function(a) {
                return 1 / 2.75 > a ? 7.5625 * a * a : 2 / 2.75 > a ? 7.5625 * (a -= 1.5 / 2.75) * a + .75 : 2.5 / 2.75 > a ? 7.5625 * (a -= 2.25 / 2.75) * a + .9375 : 7.5625 * (a -= 2.625 / 2.75) * a + .984375
            }), n("BounceIn", function(a) {
                return 1 / 2.75 > (a = 1 - a) ? 1 - 7.5625 * a * a : 2 / 2.75 > a ? 1 - (7.5625 * (a -= 1.5 / 2.75) * a + .75) : 2.5 / 2.75 > a ? 1 - (7.5625 * (a -= 2.25 / 2.75) * a + .9375) : 1 - (7.5625 * (a -= 2.625 / 2.75) * a + .984375)
            }), n("BounceInOut", function(a) {
                var b = .5 > a;
                return a = b ? 1 - 2 * a : 2 * a - 1, a = 1 / 2.75 > a ? 7.5625 * a * a : 2 / 2.75 > a ? 7.5625 * (a -= 1.5 / 2.75) * a + .75 : 2.5 / 2.75 >
                    a ? 7.5625 * (a -= 2.25 / 2.75) * a + .9375 : 7.5625 * (a -= 2.625 / 2.75) * a + .984375, b ? .5 * (1 - a) : .5 * a + .5
            })), q("Circ", n("CircOut", function(a) {
                return Math.sqrt(1 - --a * a)
            }), n("CircIn", function(a) {
                return -(Math.sqrt(1 - a * a) - 1)
            }), n("CircInOut", function(a) {
                return 1 > (a *= 2) ? -.5 * (Math.sqrt(1 - a * a) - 1) : .5 * (Math.sqrt(1 - (a -= 2) * a) + 1)
            })), a = function(a, c, d) {
                var f = s("easing." + a, function(a, b) {
                    this._p1 = a || 1;
                    this._p2 = b || d;
                    this._p3 = this._p2 / h * (Math.asin(1 / this._p1) || 0)
                }, !0);
                a = f.prototype = new b;
                return a.constructor = f, a.getRatio = c, a.config = function(a,
                    b) {
                    return new f(a, b)
                }, f
            }, q("Elastic", a("ElasticOut", function(a) {
                return this._p1 * Math.pow(2, -10 * a) * Math.sin((a - this._p3) * h / this._p2) + 1
            }, .3), a("ElasticIn", function(a) {
                return -(this._p1 * Math.pow(2, 10 * --a) * Math.sin((a - this._p3) * h / this._p2))
            }, .3), a("ElasticInOut", function(a) {
                return 1 > (a *= 2) ? -.5 * this._p1 * Math.pow(2, 10 * --a) * Math.sin((a - this._p3) * h / this._p2) : .5 * this._p1 * Math.pow(2, -10 * --a) * Math.sin((a - this._p3) * h / this._p2) + 1
            }, .45)), q("Expo", n("ExpoOut", function(a) {
                return 1 - Math.pow(2, -10 * a)
            }), n("ExpoIn", function(a) {
                return Math.pow(2,
                    10 * (a - 1)) - .001
            }), n("ExpoInOut", function(a) {
                return 1 > (a *= 2) ? .5 * Math.pow(2, 10 * (a - 1)) : .5 * (2 - Math.pow(2, -10 * (a - 1)))
            })), q("Sine", n("SineOut", function(a) {
                return Math.sin(a * g)
            }), n("SineIn", function(a) {
                return -Math.cos(a * g) + 1
            }), n("SineInOut", function(a) {
                return -.5 * (Math.cos(Math.PI * a) - 1)
            })), s("easing.EaseLookup", {
                find: function(a) {
                    return b.map[a]
                }
            }, !0), t(c.SlowMo, "SlowMo", "ease,"), t(l, "RoughEase", "ease,"), t(d, "SteppedEase", "ease,"), r
    }, !0)
});
(function(b) {
    var d = b.GreenSockGlobals || b;
    if (!d.TweenLite) {
        var l, a, c, h, g, s = function(a) {
                var b = a.split("."),
                    c = d;
                for (a = 0; b.length > a; a++) c[b[a]] = c = c[b[a]] || {};
                return c
            },
            n = s("com.greensock"),
            t = [].slice,
            q = function() {},
            k = function() {
                var a = Object.prototype.toString,
                    b = a.call([]);
                return function(c) {
                    return null != c && (c instanceof Array || "object" == typeof c && !!c.push && a.call(c) === b)
                }
            }(),
            r = {},
            f = function(a, c, e, k) {
                this.sc = r[a] ? r[a].sc : [];
                r[a] = this;
                this.gsClass = null;
                this.func = e;
                var g = [];
                this.check = function(h) {
                    for (var m,
                            l, n = c.length, q = n; - 1 < --n;)(m = r[c[n]] || new f(c[n], [])).gsClass ? (g[n] = m.gsClass, q--) : h && m.sc.push(this);
                    if (0 === q && e)
                        for (h = ("com.greensock." + a).split("."), m = h.pop(), l = s(h.join("."))[m] = this.gsClass = e.apply(e, g), k && (d[m] = l, "function" == typeof define && define.amd ? define((b.GreenSockAMDPath ? b.GreenSockAMDPath + "/" : "") + a.split(".").join("/"), [], function() {
                                return l
                            }) : "undefined" != typeof module && module.exports && (module.exports = l)), n = 0; this.sc.length > n; n++) this.sc[n].check()
                };
                this.check(!0)
            },
            m = b._gsDefine = function(a,
                b, c, e) {
                return new f(a, b, c, e)
            },
            e = n._class = function(a, b, c) {
                return b = b || function() {}, m(a, [], function() {
                    return b
                }, c), b
            };
        m.globals = d;
        var u = [0, 0, 1, 1],
            L = [],
            I = e("easing.Ease", function(a, b, c, e) {
                this._func = a;
                this._type = c || 0;
                this._power = e || 0;
                this._params = b ? u.concat(b) : u
            }, !0),
            y = I.map = {},
            J = I.register = function(a, b, c, d) {
                var f, k, g;
                b = b.split(",");
                for (var h = b.length, m = (c || "easeIn,easeOut,easeInOut").split(","); - 1 < --h;)
                    for (f = b[h], c = d ? e("easing." + f, null, !0) : n.easing[f] || {}, k = m.length; - 1 < --k;) g = m[k], y[f + "." + g] = y[g + f] =
                        c[g] = a.getRatio ? a : a[g] || new a
            };
        c = I.prototype;
        c._calcEnd = !1;
        c.getRatio = function(a) {
            if (this._func) return this._params[0] = a, this._func.apply(null, this._params);
            var b = this._type,
                c = this._power,
                e = 1 === b ? 1 - a : 2 === b ? a : .5 > a ? 2 * a : 2 * (1 - a);
            return 1 === c ? e *= e : 2 === c ? e *= e * e : 3 === c ? e *= e * e * e : 4 === c && (e *= e * e * e * e), 1 === b ? 1 - e : 2 === b ? e : .5 > a ? e / 2 : 1 - e / 2
        };
        l = ["Linear", "Quad", "Cubic", "Quart", "Quint,Strong"];
        for (a = l.length; - 1 < --a;) c = l[a] + ",Power" + a, J(new I(null, null, 1, a), c, "easeOut", !0), J(new I(null, null, 2, a), c, "easeIn" + (0 === a ? ",easeNone" :
            "")), J(new I(null, null, 3, a), c, "easeInOut");
        y.linear = n.easing.Linear.easeIn;
        y.swing = n.easing.Quad.easeInOut;
        var H = e("events.EventDispatcher", function(a) {
            this._listeners = {};
            this._eventTarget = a || this
        });
        c = H.prototype;
        c.addEventListener = function(a, b, c, e, d) {
            d = d || 0;
            var f, k = this._listeners[a],
                m = 0;
            null == k && (this._listeners[a] = k = []);
            for (f = k.length; - 1 < --f;) a = k[f], a.c === b && a.s === c ? k.splice(f, 1) : 0 === m && d > a.pr && (m = f + 1);
            k.splice(m, 0, {
                c: b,
                s: c,
                up: e,
                pr: d
            });
            this !== h || g || h.wake()
        };
        c.removeEventListener = function(a, b) {
            var c,
                e = this._listeners[a];
            if (e)
                for (c = e.length; - 1 < --c;)
                    if (e[c].c === b) return e.splice(c, 1), void 0
        };
        c.dispatchEvent = function(a) {
            var b, c, e, d = this._listeners[a];
            if (d)
                for (b = d.length, c = this._eventTarget; - 1 < --b;) e = d[b], e.up ? e.c.call(e.s || c, {
                    type: a,
                    target: c
                }) : e.c.call(e.s || c)
        };
        var x = b.requestAnimationFrame,
            D = b.cancelAnimationFrame,
            A = Date.now || function() {
                return (new Date).getTime()
            },
            B = A();
        l = ["ms", "moz", "webkit", "o"];
        for (a = l.length; - 1 < --a && !x;) x = b[l[a] + "RequestAnimationFrame"], D = b[l[a] + "CancelAnimationFrame"] || b[l[a] +
            "CancelRequestAnimationFrame"];
        e("Ticker", function(a, b) {
            var c, e, d, f, k, m = this,
                l = A(),
                n = !1 !== b && x,
                r = function(a) {
                    B = A();
                    m.time = (B - l) / 1E3;
                    var b, p = m.time - k;
                    (!c || 0 < p || !0 === a) && (m.frame++, k += p + (p >= f ? .004 : f - p), b = !0);
                    !0 !== a && (d = e(r));
                    b && m.dispatchEvent("tick")
                };
            H.call(m);
            m.time = m.frame = 0;
            m.tick = function() {
                r(!0)
            };
            m.sleep = function() {
                null != d && (n && D ? D(d) : clearTimeout(d), e = q, d = null, m === h && (g = !1))
            };
            m.wake = function() {
                null !== d && m.sleep();
                e = 0 === c ? q : n && x ? x : function(a) {
                    return setTimeout(a, 0 | 1E3 * (k - m.time) + 1)
                };
                m === h && (g = !0);
                r(2)
            };
            m.fps = function(a) {
                return arguments.length ? (c = a, f = 1 / (c || 60), k = this.time + f, m.wake(), void 0) : c
            };
            m.useRAF = function(a) {
                return arguments.length ? (m.sleep(), n = a, m.fps(c), void 0) : n
            };
            m.fps(a);
            setTimeout(function() {
                n && (!d || 5 > m.frame) && m.useRAF(!1)
            }, 1500)
        });
        c = n.Ticker.prototype = new n.events.EventDispatcher;
        c.constructor = n.Ticker;
        var F = e("core.Animation", function(a, b) {
            if (this.vars = b = b || {}, this._duration = this._totalDuration = a || 0, this._delay = Number(b.delay) || 0, this._timeScale = 1, this._active = !0 === b.immediateRender,
                this.data = b.data, this._reversed = !0 === b.reversed, aa) {
                g || h.wake();
                var c = this.vars.useFrames ? W : aa;
                c.add(this, c._time);
                this.vars.paused && this.paused(!0)
            }
        });
        h = F.ticker = new n.Ticker;
        c = F.prototype;
        c._dirty = c._gc = c._initted = c._paused = !1;
        c._totalTime = c._time = 0;
        c._rawPrevTime = -1;
        c._next = c._last = c._onUpdate = c._timeline = c.timeline = null;
        c._paused = !1;
        var E = function() {
            g && 2E3 < A() - B && h.wake();
            setTimeout(E, 2E3)
        };
        E();
        c.play = function(a, b) {
            return arguments.length && this.seek(a, b), this.reversed(!1).paused(!1)
        };
        c.pause =
            function(a, b) {
                return arguments.length && this.seek(a, b), this.paused(!0)
            };
        c.resume = function(a, b) {
            return arguments.length && this.seek(a, b), this.paused(!1)
        };
        c.seek = function(a, b) {
            return this.totalTime(Number(a), !1 !== b)
        };
        c.restart = function(a, b) {
            return this.reversed(!1).paused(!1).totalTime(a ? -this._delay : 0, !1 !== b, !0)
        };
        c.reverse = function(a, b) {
            return arguments.length && this.seek(a || this.totalDuration(), b), this.reversed(!0).paused(!1)
        };
        c.render = function() {};
        c.invalidate = function() {
            return this
        };
        c.isActive = function() {
            var a,
                b = this._timeline,
                c = this._startTime;
            return !b || !this._gc && !this._paused && b.isActive() && (a = b.rawTime()) >= c && c + this.totalDuration() / this._timeScale > a
        };
        c._enabled = function(a, b) {
            return g || h.wake(), this._gc = !a, this._active = this.isActive(), !0 !== b && (a && !this.timeline ? this._timeline.add(this, this._startTime - this._delay) : !a && this.timeline && this._timeline._remove(this, !0)), !1
        };
        c._kill = function() {
            return this._enabled(!1, !1)
        };
        c.kill = function(a, b) {
            return this._kill(a, b), this
        };
        c._uncache = function(a) {
            for (a = a ? this :
                this.timeline; a;) a._dirty = !0, a = a.timeline;
            return this
        };
        c._swapSelfInParams = function(a) {
            for (var b = a.length, c = a.concat(); - 1 < --b;) "{self}" === a[b] && (c[b] = this);
            return c
        };
        c.eventCallback = function(a, b, c, e) {
            if ("on" === (a || "").substr(0, 2)) {
                var d = this.vars;
                if (1 === arguments.length) return d[a];
                null == b ? delete d[a] : (d[a] = b, d[a + "Params"] = k(c) && -1 !== c.join("").indexOf("{self}") ? this._swapSelfInParams(c) : c, d[a + "Scope"] = e);
                "onUpdate" === a && (this._onUpdate = b)
            }
            return this
        };
        c.delay = function(a) {
            return arguments.length ?
                (this._timeline.smoothChildTiming && this.startTime(this._startTime + a - this._delay), this._delay = a, this) : this._delay
        };
        c.duration = function(a) {
            return arguments.length ? (this._duration = this._totalDuration = a, this._uncache(!0), this._timeline.smoothChildTiming && 0 < this._time && this._time < this._duration && 0 !== a && this.totalTime(a / this._duration * this._totalTime, !0), this) : (this._dirty = !1, this._duration)
        };
        c.totalDuration = function(a) {
            return this._dirty = !1, arguments.length ? this.duration(a) : this._totalDuration
        };
        c.time =
            function(a, b) {
                return arguments.length ? (this._dirty && this.totalDuration(), this.totalTime(a > this._duration ? this._duration : a, b)) : this._time
            };
        c.totalTime = function(a, b, c) {
            if (g || h.wake(), !arguments.length) return this._totalTime;
            if (this._timeline) {
                if (0 > a && !c && (a += this.totalDuration()), this._timeline.smoothChildTiming) {
                    this._dirty && this.totalDuration();
                    var e = this._totalDuration,
                        d = this._timeline;
                    if (a > e && !c && (a = e), this._startTime = (this._paused ? this._pauseTime : d._time) - (this._reversed ? e - a : a) / this._timeScale,
                        d._dirty || this._uncache(!1), d._timeline)
                        for (; d._timeline;) d._timeline._time !== (d._startTime + d._totalTime) / d._timeScale && d.totalTime(d._totalTime, !0), d = d._timeline
                }
                this._gc && this._enabled(!0, !1);
                this._totalTime === a && 0 !== this._duration || this.render(a, b, !1)
            }
            return this
        };
        c.progress = c.totalProgress = function(a, b) {
            return arguments.length ? this.totalTime(this.duration() * a, b) : this._time / this.duration()
        };
        c.startTime = function(a) {
            return arguments.length ? (a !== this._startTime && (this._startTime = a, this.timeline &&
                this.timeline._sortChildren && this.timeline.add(this, a - this._delay)), this) : this._startTime
        };
        c.timeScale = function(a) {
            if (!arguments.length) return this._timeScale;
            if (a = a || 1E-10, this._timeline && this._timeline.smoothChildTiming) {
                var b = this._pauseTime,
                    b = b || 0 === b ? b : this._timeline.totalTime();
                this._startTime = b - (b - this._startTime) * this._timeScale / a
            }
            return this._timeScale = a, this._uncache(!1)
        };
        c.reversed = function(a) {
            return arguments.length ? (a != this._reversed && (this._reversed = a, this.totalTime(this._timeline &&
                !this._timeline.smoothChildTiming ? this.totalDuration() - this._totalTime : this._totalTime, !0)), this) : this._reversed
        };
        c.paused = function(a) {
            if (!arguments.length) return this._paused;
            if (a != this._paused && this._timeline) {
                g || a || h.wake();
                var b = this._timeline,
                    c = b.rawTime(),
                    e = c - this._pauseTime;
                !a && b.smoothChildTiming && (this._startTime += e, this._uncache(!1));
                this._pauseTime = a ? c : null;
                this._paused = a;
                this._active = this.isActive();
                !a && 0 !== e && this._initted && this.duration() && this.render(b.smoothChildTiming ? this._totalTime :
                    (c - this._startTime) / this._timeScale, !0, !0)
            }
            return this._gc && !a && this._enabled(!0, !1), this
        };
        l = e("core.SimpleTimeline", function(a) {
            F.call(this, 0, a);
            this.autoRemoveChildren = this.smoothChildTiming = !0
        });
        c = l.prototype = new F;
        c.constructor = l;
        c.kill()._gc = !1;
        c._first = c._last = null;
        c._sortChildren = !1;
        c.add = c.insert = function(a, b) {
            var c, e;
            if (a._startTime = Number(b || 0) + a._delay, a._paused && this !== a._timeline && (a._pauseTime = a._startTime + (this.rawTime() - a._startTime) / a._timeScale), a.timeline && a.timeline._remove(a, !0), a.timeline = a._timeline = this, a._gc && a._enabled(!0, !0), c = this._last, this._sortChildren)
                for (e = a._startTime; c && c._startTime > e;) c = c._prev;
            return c ? (a._next = c._next, c._next = a) : (a._next = this._first, this._first = a), a._next ? a._next._prev = a : this._last = a, a._prev = c, this._timeline && this._uncache(!0), this
        };
        c._remove = function(a, b) {
            return a.timeline === this && (b || a._enabled(!1, !0), a.timeline = null, a._prev ? a._prev._next = a._next : this._first === a && (this._first = a._next), a._next ? a._next._prev = a._prev : this._last === a && (this._last =
                a._prev), this._timeline && this._uncache(!0)), this
        };
        c.render = function(a, b, c) {
            var e, d = this._first;
            for (this._totalTime = this._time = this._rawPrevTime = a; d;) e = d._next, (d._active || a >= d._startTime && !d._paused) && (d._reversed ? d.render((d._dirty ? d.totalDuration() : d._totalDuration) - (a - d._startTime) * d._timeScale, b, c) : d.render((a - d._startTime) * d._timeScale, b, c)), d = e
        };
        c.rawTime = function() {
            return g || h.wake(), this._totalTime
        };
        var C = e("TweenLite", function(a, c, e) {
                if (F.call(this, c, e), this.render = C.prototype.render, null ==
                    a) throw "Cannot tween a null target.";
                this.target = a = "string" != typeof a ? a : C.selector(a) || a;
                var d, f;
                d = a.jquery || a.length && a !== b && a[0] && (a[0] === b || a[0].nodeType && a[0].style && !a.nodeType);
                e = this.vars.overwrite;
                if (this._overwrite = e = null == e ? U[C.defaultOverwrite] : "number" == typeof e ? e >> 0 : U[e], (d || a instanceof Array || a.push && k(a)) && "number" != typeof a[0])
                    for (this._targets = f = t.call(a, 0), this._propLookup = [], this._siblings = [], a = 0; f.length > a; a++)(d = f[a]) ? "string" != typeof d ? d.length && d !== b && d[0] && (d[0] === b || d[0].nodeType &&
                        d[0].style && !d.nodeType) ? (f.splice(a--, 1), this._targets = f = f.concat(t.call(d, 0))) : (this._siblings[a] = K(d, this, !1), 1 === e && 1 < this._siblings[a].length && ea(d, this, null, 1, this._siblings[a])) : (d = f[a--] = C.selector(d), "string" == typeof d && f.splice(a + 1, 1)) : f.splice(a--, 1);
                else this._propLookup = {}, this._siblings = K(a, this, !1), 1 === e && 1 < this._siblings.length && ea(a, this, null, 1, this._siblings);
                (this.vars.immediateRender || 0 === c && 0 === this._delay && !1 !== this.vars.immediateRender) && this.render(-this._delay, !1, !0)
            }, !0),
            Q = function(a) {
                return a.length && a !== b && a[0] && (a[0] === b || a[0].nodeType && a[0].style && !a.nodeType)
            };
        c = C.prototype = new F;
        c.constructor = C;
        c.kill()._gc = !1;
        c.ratio = 0;
        c._firstPT = c._targets = c._overwrittenProps = c._startAt = null;
        c._notifyPluginsOfEnabled = !1;
        C.version = "1.11.4";
        C.defaultEase = c._ease = new I(null, null, 1, 1);
        C.defaultOverwrite = "auto";
        C.ticker = h;
        C.autoSleep = !0;
        C.selector = b.$ || b.jQuery || function(a) {
            return b.$ ? (C.selector = b.$, b.$(a)) : b.document ? b.document.getElementById("#" === a.charAt(0) ? a.substr(1) : a) :
                a
        };
        a = C._internals = {
            isArray: k,
            isSelector: Q
        };
        var R = C._plugins = {},
            P = C._tweenLookup = {},
            S = 0,
            Y = a.reservedProps = {
                ease: 1,
                delay: 1,
                overwrite: 1,
                onComplete: 1,
                onCompleteParams: 1,
                onCompleteScope: 1,
                useFrames: 1,
                runBackwards: 1,
                startAt: 1,
                onUpdate: 1,
                onUpdateParams: 1,
                onUpdateScope: 1,
                onStart: 1,
                onStartParams: 1,
                onStartScope: 1,
                onReverseComplete: 1,
                onReverseCompleteParams: 1,
                onReverseCompleteScope: 1,
                onRepeat: 1,
                onRepeatParams: 1,
                onRepeatScope: 1,
                easeParams: 1,
                yoyo: 1,
                immediateRender: 1,
                repeat: 1,
                repeatDelay: 1,
                data: 1,
                paused: 1,
                reversed: 1,
                autoCSS: 1
            },
            U = {
                none: 0,
                all: 1,
                auto: 2,
                concurrent: 3,
                allOnStart: 4,
                preexisting: 5,
                "true": 1,
                "false": 0
            },
            W = F._rootFramesTimeline = new l,
            aa = F._rootTimeline = new l;
        aa._startTime = h.time;
        W._startTime = h.frame;
        aa._active = W._active = !0;
        F._updateRoot = function() {
            if (aa.render((h.time - aa._startTime) * aa._timeScale, !1, !1), W.render((h.frame - W._startTime) * W._timeScale, !1, !1), !(h.frame % 120)) {
                var a, b, c;
                for (c in P) {
                    b = P[c].tweens;
                    for (a = b.length; - 1 < --a;) b[a]._gc && b.splice(a, 1);
                    0 === b.length && delete P[c]
                }
                if (c = aa._first, (!c || c._paused) &&
                    C.autoSleep && !W._first && 1 === h._listeners.tick.length) {
                    for (; c && c._paused;) c = c._next;
                    c || h.sleep()
                }
            }
        };
        h.addEventListener("tick", F._updateRoot);
        var K = function(a, b, c) {
                var e, d, f = a._gsTweenID;
                if (P[f || (a._gsTweenID = f = "t" + S++)] || (P[f] = {
                        target: a,
                        tweens: []
                    }), b && (e = P[f].tweens, e[d = e.length] = b, c))
                    for (; - 1 < --d;) e[d] === b && e.splice(d, 1);
                return P[f].tweens
            },
            ea = function(a, b, c, e, d) {
                var f, k, g;
                if (1 === e || 4 <= e) {
                    a = d.length;
                    for (f = 0; a > f; f++)
                        if ((g = d[f]) !== b) g._gc || g._enabled(!1, !1) && (k = !0);
                        else if (5 === e) break;
                    return k
                }
                var h,
                    m = b._startTime + 1E-10,
                    l = [],
                    n = 0,
                    r = 0 === b._duration;
                for (f = d.length; - 1 < --f;)(g = d[f]) === b || g._gc || g._paused || (g._timeline !== b._timeline ? (h = h || ka(b, 0, r), 0 === ka(g, h, r) && (l[n++] = g)) : m >= g._startTime && g._startTime + g.totalDuration() / g._timeScale > m && ((r || !g._initted) && 2E-10 >= m - g._startTime || (l[n++] = g)));
                for (f = n; - 1 < --f;) g = l[f], 2 === e && g._kill(c, a) && (k = !0), (2 !== e || !g._firstPT && g._initted) && g._enabled(!1, !1) && (k = !0);
                return k
            },
            ka = function(a, b, c) {
                for (var e = a._timeline, d = e._timeScale, f = a._startTime; e._timeline;) {
                    if (f +=
                        e._startTime, d *= e._timeScale, e._paused) return -100;
                    e = e._timeline
                }
                return f /= d, f > b ? f - b : c && f === b || !a._initted && 2E-10 > f - b ? 1E-10 : (f += a.totalDuration() / a._timeScale / d) > b + 1E-10 ? 0 : f - b - 1E-10
            };
        c._init = function() {
            var a, b, c, e = this.vars,
                d = this._overwrittenProps;
            c = this._duration;
            var f = e.immediateRender,
                k = e.ease;
            if (e.startAt) {
                if (this._startAt && this._startAt.render(-1, !0), e.startAt.overwrite = 0, e.startAt.immediateRender = !0, this._startAt = C.to(this.target, 0, e.startAt), f)
                    if (0 < this._time) this._startAt = null;
                    else if (0 !==
                    c) return
            } else if (e.runBackwards && 0 !== c)
                if (this._startAt) this._startAt.render(-1, !0), this._startAt = null;
                else {
                    c = {};
                    for (a in e) Y[a] && "autoCSS" !== a || (c[a] = e[a]);
                    if (c.overwrite = 0, c.data = "isFromStart", this._startAt = C.to(this.target, 0, c), e.immediateRender) {
                        if (0 === this._time) return
                    } else this._startAt.render(-1, !0)
                }
            if (this._ease = k ? k instanceof I ? e.easeParams instanceof Array ? k.config.apply(k, e.easeParams) : k : "function" == typeof k ? new I(k, e.easeParams) : y[k] || C.defaultEase : C.defaultEase, this._easeType = this._ease._type,
                this._easePower = this._ease._power, this._firstPT = null, this._targets)
                for (a = this._targets.length; - 1 < --a;) this._initProps(this._targets[a], this._propLookup[a] = {}, this._siblings[a], d ? d[a] : null) && (b = !0);
            else b = this._initProps(this.target, this._propLookup, this._siblings, d);
            if (b && C._onPluginEvent("_onInitAllProps", this), d && (this._firstPT || "function" != typeof this.target && this._enabled(!1, !1)), e.runBackwards)
                for (c = this._firstPT; c;) c.s += c.c, c.c = -c.c, c = c._next;
            this._onUpdate = e.onUpdate;
            this._initted = !0
        };
        c._initProps =
            function(a, c, e, d) {
                var f, g, h, m, l;
                if (null == a) return !1;
                if (!this.vars.css && a.style && a !== b && a.nodeType && R.css && !1 !== this.vars.autoCSS) {
                    g = this.vars;
                    var n, r = {};
                    for (n in g) Y[n] || n in a && "x" !== n && "y" !== n && "width" !== n && "height" !== n && "className" !== n && "border" !== n || !(!R[n] || R[n] && R[n]._autoCSS) || (r[n] = g[n], delete g[n]);
                    g.css = r
                }
                for (f in this.vars) {
                    if (g = this.vars[f], Y[f]) g && (g instanceof Array || g.push && k(g)) && -1 !== g.join("").indexOf("{self}") && (this.vars[f] = this._swapSelfInParams(g, this));
                    else if (R[f] && (m = new R[f])._onInitTween(a,
                            this.vars[f], this)) {
                        this._firstPT = l = {
                            _next: this._firstPT,
                            t: m,
                            p: "setRatio",
                            s: 0,
                            c: 1,
                            f: !0,
                            n: f,
                            pg: !0,
                            pr: m._priority
                        };
                        for (g = m._overwriteProps.length; - 1 < --g;) c[m._overwriteProps[g]] = this._firstPT;
                        (m._priority || m._onInitAllProps) && (h = !0);
                        (m._onDisable || m._onEnable) && (this._notifyPluginsOfEnabled = !0)
                    } else this._firstPT = c[f] = l = {
                            _next: this._firstPT,
                            t: a,
                            p: f,
                            f: "function" == typeof a[f],
                            n: f,
                            pg: !1,
                            pr: 0
                        }, l.s = l.f ? a[f.indexOf("set") || "function" != typeof a["get" + f.substr(3)] ? f : "get" + f.substr(3)]() : parseFloat(a[f]), l.c =
                        "string" == typeof g && "=" === g.charAt(1) ? parseInt(g.charAt(0) + "1", 10) * Number(g.substr(2)) : Number(g) - l.s || 0;
                    l && l._next && (l._next._prev = l)
                }
                return d && this._kill(d, a) ? this._initProps(a, c, e, d) : 1 < this._overwrite && this._firstPT && 1 < e.length && ea(a, this, c, this._overwrite, e) ? (this._kill(c, a), this._initProps(a, c, e, d)) : h
            };
        c.render = function(a, b, c) {
            var e, d, f, k, g = this._time,
                h = this._duration;
            if (a >= h) this._totalTime = this._time = h, this.ratio = this._ease._calcEnd ? this._ease.getRatio(1) : 1, this._reversed || (e = !0, d = "onComplete"),
                0 === h && (k = this._rawPrevTime, (0 === a || 0 > k || 1E-10 === k) && k !== a && (c = !0, 1E-10 < k && (d = "onReverseComplete")), this._rawPrevTime = k = !b || a || 0 === k ? a : 1E-10);
            else if (1E-7 > a) this._totalTime = this._time = 0, this.ratio = this._ease._calcEnd ? this._ease.getRatio(0) : 0, (0 !== g || 0 === h && 1E-10 < this._rawPrevTime) && (d = "onReverseComplete", e = this._reversed), 0 > a ? (this._active = !1, 0 === h && (0 <= this._rawPrevTime && (c = !0), this._rawPrevTime = k = !b || a || 0 === this._rawPrevTime ? a : 1E-10)) : this._initted || (c = !0);
            else if (this._totalTime = this._time = a, this._easeType) {
                f =
                    a / h;
                var m = this._easeType,
                    l = this._easePower;
                (1 === m || 3 === m && .5 <= f) && (f = 1 - f);
                3 === m && (f *= 2);
                1 === l ? f *= f : 2 === l ? f *= f * f : 3 === l ? f *= f * f * f : 4 === l && (f *= f * f * f * f);
                this.ratio = 1 === m ? 1 - f : 2 === m ? f : .5 > a / h ? f / 2 : 1 - f / 2
            } else this.ratio = this._ease.getRatio(a / h);
            if (this._time !== g || c) {
                if (!this._initted) {
                    if (this._init(), !this._initted || this._gc) return;
                    this._time && !e ? this.ratio = this._ease.getRatio(this._time / h) : e && this._ease._calcEnd && (this.ratio = this._ease.getRatio(0 === this._time ? 0 : 1))
                }
                this._active || !this._paused && this._time !==
                    g && 0 <= a && (this._active = !0);
                0 !== g || (this._startAt && (0 <= a ? this._startAt.render(a, b, c) : d || (d = "_dummyGS")), !this.vars.onStart || 0 === this._time && 0 !== h || !b && this.vars.onStart.apply(this.vars.onStartScope || this, this.vars.onStartParams || L));
                for (f = this._firstPT; f;) f.f ? f.t[f.p](f.c * this.ratio + f.s) : f.t[f.p] = f.c * this.ratio + f.s, f = f._next;
                this._onUpdate && (0 > a && this._startAt && this._startTime && this._startAt.render(a, b, c), b || (this._time !== g || e) && this._onUpdate.apply(this.vars.onUpdateScope || this, this.vars.onUpdateParams ||
                    L));
                d && (this._gc || (0 > a && this._startAt && !this._onUpdate && this._startTime && this._startAt.render(a, b, c), e && (this._timeline.autoRemoveChildren && this._enabled(!1, !1), this._active = !1), !b && this.vars[d] && this.vars[d].apply(this.vars[d + "Scope"] || this, this.vars[d + "Params"] || L), 0 === h && 1E-10 === this._rawPrevTime && 1E-10 !== k && (this._rawPrevTime = 0)))
            }
        };
        c._kill = function(a, b) {
            if ("all" === a && (a = null), null == a && (null == b || b === this.target)) return this._enabled(!1, !1);
            b = "string" != typeof b ? b || this._targets || this.target : C.selector(b) ||
                b;
            var c, e, d, f, g, h, m;
            if ((k(b) || Q(b)) && "number" != typeof b[0])
                for (c = b.length; - 1 < --c;) this._kill(a, b[c]) && (h = !0);
            else {
                if (this._targets)
                    for (c = this._targets.length; - 1 < --c;) {
                        if (b === this._targets[c]) {
                            g = this._propLookup[c] || {};
                            this._overwrittenProps = this._overwrittenProps || [];
                            e = this._overwrittenProps[c] = a ? this._overwrittenProps[c] || {} : "all";
                            break
                        }
                    } else {
                        if (b !== this.target) return !1;
                        g = this._propLookup;
                        e = this._overwrittenProps = a ? this._overwrittenProps || {} : "all"
                    }
                if (g) {
                    c = a || g;
                    m = a !== e && "all" !== e && a !== g && ("object" !=
                        typeof a || !a._tempKill);
                    for (d in c)(f = g[d]) && (f.pg && f.t._kill(c) && (h = !0), f.pg && 0 !== f.t._overwriteProps.length || (f._prev ? f._prev._next = f._next : f === this._firstPT && (this._firstPT = f._next), f._next && (f._next._prev = f._prev), f._next = f._prev = null), delete g[d]), m && (e[d] = 1);
                    !this._firstPT && this._initted && this._enabled(!1, !1)
                }
            }
            return h
        };
        c.invalidate = function() {
            return this._notifyPluginsOfEnabled && C._onPluginEvent("_onDisable", this), this._firstPT = null, this._overwrittenProps = null, this._onUpdate = null, this._startAt =
                null, this._initted = this._active = this._notifyPluginsOfEnabled = !1, this._propLookup = this._targets ? {} : [], this
        };
        c._enabled = function(a, b) {
            if (g || h.wake(), a && this._gc) {
                var c, e = this._targets;
                if (e)
                    for (c = e.length; - 1 < --c;) this._siblings[c] = K(e[c], this, !0);
                else this._siblings = K(this.target, this, !0)
            }
            return F.prototype._enabled.call(this, a, b), this._notifyPluginsOfEnabled && this._firstPT ? C._onPluginEvent(a ? "_onEnable" : "_onDisable", this) : !1
        };
        C.to = function(a, b, c) {
            return new C(a, b, c)
        };
        C.from = function(a, b, c) {
            return c.runBackwards = !0, c.immediateRender = 0 != c.immediateRender, new C(a, b, c)
        };
        C.fromTo = function(a, b, c, e) {
            return e.startAt = c, e.immediateRender = 0 != e.immediateRender && 0 != c.immediateRender, new C(a, b, e)
        };
        C.delayedCall = function(a, b, c, e, d) {
            return new C(b, 0, {
                delay: a,
                onComplete: b,
                onCompleteParams: c,
                onCompleteScope: e,
                onReverseComplete: b,
                onReverseCompleteParams: c,
                onReverseCompleteScope: e,
                immediateRender: !1,
                useFrames: d,
                overwrite: 0
            })
        };
        C.set = function(a, b) {
            return new C(a, 0, b)
        };
        C.getTweensOf = function(a, b) {
            if (null == a) return [];
            a = "string" !=
                typeof a ? a : C.selector(a) || a;
            var c, e, d, f;
            if ((k(a) || Q(a)) && "number" != typeof a[0]) {
                c = a.length;
                for (e = []; - 1 < --c;) e = e.concat(C.getTweensOf(a[c], b));
                for (c = e.length; - 1 < --c;)
                    for (f = e[c], d = c; - 1 < --d;) f === e[d] && e.splice(c, 1)
            } else
                for (e = K(a).concat(), c = e.length; - 1 < --c;)(e[c]._gc || b && !e[c].isActive()) && e.splice(c, 1);
            return e
        };
        C.killTweensOf = C.killDelayedCallsTo = function(a, b, c) {
            "object" == typeof b && (c = b, b = !1);
            b = C.getTweensOf(a, b);
            for (var e = b.length; - 1 < --e;) b[e]._kill(c, a)
        };
        var da = e("plugins.TweenPlugin", function(a,
            b) {
            this._overwriteProps = (a || "").split(",");
            this._propName = this._overwriteProps[0];
            this._priority = b || 0;
            this._super = da.prototype
        }, !0);
        if (c = da.prototype, da.version = "1.10.1", da.API = 2, c._firstPT = null, c._addTween = function(a, b, c, e, d, f) {
                var k, g;
                return null != e && (k = "number" == typeof e || "=" !== e.charAt(1) ? Number(e) - c : parseInt(e.charAt(0) + "1", 10) * Number(e.substr(2))) ? (this._firstPT = g = {
                    _next: this._firstPT,
                    t: a,
                    p: b,
                    s: c,
                    c: k,
                    f: "function" == typeof a[b],
                    n: d || b,
                    r: f
                }, g._next && (g._next._prev = g), g) : void 0
            }, c.setRatio = function(a) {
                for (var b,
                        c = this._firstPT; c;) b = c.c * a + c.s, c.r ? b = 0 | b + (0 < b ? .5 : -.5) : 1E-6 > b && -1E-6 < b && (b = 0), c.f ? c.t[c.p](b) : c.t[c.p] = b, c = c._next
            }, c._kill = function(a) {
                var b, c = this._overwriteProps,
                    e = this._firstPT;
                if (null != a[this._propName]) this._overwriteProps = [];
                else
                    for (b = c.length; - 1 < --b;) null != a[c[b]] && c.splice(b, 1);
                for (; e;) null != a[e.n] && (e._next && (e._next._prev = e._prev), e._prev ? (e._prev._next = e._next, e._prev = null) : this._firstPT === e && (this._firstPT = e._next)), e = e._next;
                return !1
            }, c._roundProps = function(a, b) {
                for (var c = this._firstPT; c;)(a[this._propName] ||
                    null != c.n && a[c.n.split(this._propName + "_").join("")]) && (c.r = b), c = c._next
            }, C._onPluginEvent = function(a, b) {
                var c, e, d, f, k, g = b._firstPT;
                if ("_onInitAllProps" === a) {
                    for (; g;) {
                        k = g._next;
                        for (e = d; e && e.pr > g.pr;) e = e._next;
                        (g._prev = e ? e._prev : f) ? g._prev._next = g: d = g;
                        (g._next = e) ? e._prev = g: f = g;
                        g = k
                    }
                    g = b._firstPT = d
                }
                for (; g;) g.pg && "function" == typeof g.t[a] && g.t[a]() && (c = !0), g = g._next;
                return c
            }, da.activate = function(a) {
                for (var b = a.length; - 1 < --b;) a[b].API === da.API && (R[(new a[b])._propName] = a[b]);
                return !0
            }, m.plugin = function(a) {
                if (!(a &&
                        a.propName && a.init && a.API)) throw "illegal plugin definition.";
                var b, c = a.propName,
                    d = a.priority || 0,
                    f = a.overwriteProps,
                    k = {
                        init: "_onInitTween",
                        set: "setRatio",
                        kill: "_kill",
                        round: "_roundProps",
                        initAll: "_onInitAllProps"
                    },
                    g = e("plugins." + c.charAt(0).toUpperCase() + c.substr(1) + "Plugin", function() {
                        da.call(this, c, d);
                        this._overwriteProps = f || []
                    }, !0 === a.global),
                    h = g.prototype = new da(c);
                h.constructor = g;
                g.API = a.API;
                for (b in k) "function" == typeof a[b] && (h[k[b]] = a[b]);
                return g.version = a.version, da.activate([g]), g
            }, l = b._gsQueue) {
            for (a =
                0; l.length > a; a++) l[a]();
            for (c in r) r[c].func || b.console.log("GSAP encountered missing dependency: com.greensock." + c)
        }
        g = !1
    }
})(window);
(window._gsQueue || (window._gsQueue = [])).push(function() {
    window._gsDefine("TimelineLite", ["core.Animation", "core.SimpleTimeline", "TweenLite"], function(b, d, l) {
        var a = function(a) {
                d.call(this, a);
                this._labels = {};
                this.autoRemoveChildren = !0 === this.vars.autoRemoveChildren;
                this.smoothChildTiming = !0 === this.vars.smoothChildTiming;
                this._sortChildren = !0;
                this._onUpdate = this.vars.onUpdate;
                var b, c = this.vars;
                for (b in c) a = c[b], h(a) && -1 !== a.join("").indexOf("{self}") && (c[b] = this._swapSelfInParams(a));
                h(c.tweens) && this.add(c.tweens,
                    0, c.align, c.stagger)
            },
            c = l._internals.isSelector,
            h = l._internals.isArray,
            g = [],
            s = function(a) {
                var b, c = {};
                for (b in a) c[b] = a[b];
                return c
            },
            n = function(a, b, c, d) {
                a._timeline.pause(a._startTime);
                b && b.apply(d || a._timeline, c || g)
            },
            t = g.slice,
            q = a.prototype = new d;
        return a.version = "1.11.4", q.constructor = a, q.kill()._gc = !1, q.to = function(a, b, c, d) {
                return b ? this.add(new l(a, b, c), d) : this.set(a, c, d)
            }, q.from = function(a, b, c, d) {
                return this.add(l.from(a, b, c), d)
            }, q.fromTo = function(a, b, c, d, e) {
                return b ? this.add(l.fromTo(a, b, c, d),
                    e) : this.set(a, d, e)
            }, q.staggerTo = function(b, d, f, g, e, h, n, q) {
                n = new a({
                    onComplete: h,
                    onCompleteParams: n,
                    onCompleteScope: q,
                    smoothChildTiming: this.smoothChildTiming
                });
                "string" == typeof b && (b = l.selector(b) || b);
                c(b) && (b = t.call(b, 0));
                g = g || 0;
                for (h = 0; b.length > h; h++) f.startAt && (f.startAt = s(f.startAt)), n.to(b[h], d, s(f), h * g);
                return this.add(n, e)
            }, q.staggerFrom = function(a, b, c, d, e, g, h, l) {
                return c.immediateRender = 0 != c.immediateRender, c.runBackwards = !0, this.staggerTo(a, b, c, d, e, g, h, l)
            }, q.staggerFromTo = function(a, b, c,
                d, e, g, h, l, n) {
                return d.startAt = c, d.immediateRender = 0 != d.immediateRender && 0 != c.immediateRender, this.staggerTo(a, b, d, e, g, h, l, n)
            }, q.call = function(a, b, c, d) {
                return this.add(l.delayedCall(0, a, b, c), d)
            }, q.set = function(a, b, c) {
                return c = this._parseTimeOrLabel(c, 0, !0), null == b.immediateRender && (b.immediateRender = c === this._time && !this._paused), this.add(new l(a, 0, b), c)
            }, a.exportRoot = function(b, c) {
                b = b || {};
                null == b.smoothChildTiming && (b.smoothChildTiming = !0);
                var d, g, e = new a(b),
                    h = e._timeline;
                null == c && (c = !0);
                h._remove(e, !0);
                e._startTime = 0;
                e._rawPrevTime = e._time = e._totalTime = h._time;
                for (d = h._first; d;) g = d._next, c && d instanceof l && d.target === d.vars.onComplete || e.add(d, d._startTime - d._delay), d = g;
                return h.add(e, 0), e
            }, q.add = function(c, g, f, m) {
                var e, n, q;
                if ("number" != typeof g && (g = this._parseTimeOrLabel(g, 0, !0, c)), !(c instanceof b)) {
                    if (c instanceof Array || c && c.push && h(c)) {
                        f = f || "normal";
                        m = m || 0;
                        e = c.length;
                        for (n = 0; e > n; n++) h(q = c[n]) && (q = new a({
                            tweens: q
                        })), this.add(q, g), "string" != typeof q && "function" != typeof q && ("sequence" === f ?
                            g = q._startTime + q.totalDuration() / q._timeScale : "start" === f && (q._startTime -= q.delay())), g += m;
                        return this._uncache(!0)
                    }
                    if ("string" == typeof c) return this.addLabel(c, g);
                    if ("function" != typeof c) throw "Cannot add " + c + " into the timeline; it is not a tween, timeline, function, or string.";
                    c = l.delayedCall(0, c)
                }
                if (d.prototype.add.call(this, c, g), this._gc && !this._paused && this._duration < this.duration())
                    for (f = this, c = f.rawTime() > c._startTime; f._gc && f._timeline;) f._timeline.smoothChildTiming && c ? f.totalTime(f._totalTime, !0) : f._enabled(!0, !1), f = f._timeline;
                return this
            }, q.remove = function(a) {
                if (a instanceof b) return this._remove(a, !1);
                if (a instanceof Array || a && a.push && h(a)) {
                    for (var c = a.length; - 1 < --c;) this.remove(a[c]);
                    return this
                }
                return "string" == typeof a ? this.removeLabel(a) : this.kill(null, a)
            }, q._remove = function(a, b) {
                d.prototype._remove.call(this, a, b);
                var c = this._last;
                return c ? this._time > c._startTime + c._totalDuration / c._timeScale && (this._time = this.duration(), this._totalTime = this._totalDuration) : this._time = this._totalTime =
                    0, this
            }, q.append = function(a, b) {
                return this.add(a, this._parseTimeOrLabel(null, b, !0, a))
            }, q.insert = q.insertMultiple = function(a, b, c, d) {
                return this.add(a, b || 0, c, d)
            }, q.appendMultiple = function(a, b, c, d) {
                return this.add(a, this._parseTimeOrLabel(null, b, !0, a), c, d)
            }, q.addLabel = function(a, b) {
                return this._labels[a] = this._parseTimeOrLabel(b), this
            }, q.addPause = function(a, b, c, d) {
                return this.call(n, ["{self}", b, c, d], this, a)
            }, q.removeLabel = function(a) {
                return delete this._labels[a], this
            }, q.getLabelTime = function(a) {
                return null !=
                    this._labels[a] ? this._labels[a] : -1
            }, q._parseTimeOrLabel = function(a, c, d, g) {
                var e;
                if (g instanceof b && g.timeline === this) this.remove(g);
                else if (g && (g instanceof Array || g.push && h(g)))
                    for (e = g.length; - 1 < --e;) g[e] instanceof b && g[e].timeline === this && this.remove(g[e]);
                if ("string" == typeof c) return this._parseTimeOrLabel(c, d && "number" == typeof a && null == this._labels[c] ? a - this.duration() : 0, d);
                if (c = c || 0, "string" != typeof a || !isNaN(a) && null == this._labels[a]) null == a && (a = this.duration());
                else {
                    if (e = a.indexOf("="), -1 ===
                        e) return null == this._labels[a] ? d ? this._labels[a] = this.duration() + c : c : this._labels[a] + c;
                    c = parseInt(a.charAt(e - 1) + "1", 10) * Number(a.substr(e + 1));
                    a = 1 < e ? this._parseTimeOrLabel(a.substr(0, e - 1), 0, d) : this.duration()
                }
                return Number(a) + c
            }, q.seek = function(a, b) {
                return this.totalTime("number" == typeof a ? a : this._parseTimeOrLabel(a), !1 !== b)
            }, q.stop = function() {
                return this.paused(!0)
            }, q.gotoAndPlay = function(a, b) {
                return this.play(a, b)
            }, q.gotoAndStop = function(a, b) {
                return this.pause(a, b)
            }, q.render = function(a, b, c) {
                this._gc &&
                    this._enabled(!0, !1);
                var d, e, h, l, n = this._dirty ? this.totalDuration() : this._totalDuration,
                    q = this._time,
                    s = this._startTime,
                    t = this._timeScale,
                    x = this._paused;
                if (a >= n ? (this._totalTime = this._time = n, this._reversed || this._hasPausedChild() || (e = !0, l = "onComplete", 0 === this._duration && (0 === a || 0 > this._rawPrevTime || 1E-10 === this._rawPrevTime) && this._rawPrevTime !== a && this._first && (d = !0, 1E-10 < this._rawPrevTime && (l = "onReverseComplete"))), this._rawPrevTime = this._duration || !b || a || 0 === this._rawPrevTime ? a : 1E-10, a = n + 1E-4) :
                    1E-7 > a ? (this._totalTime = this._time = 0, (0 !== q || 0 === this._duration && (1E-10 < this._rawPrevTime || 0 > a && 0 <= this._rawPrevTime)) && (l = "onReverseComplete", e = this._reversed), 0 > a ? (this._active = !1, 0 === this._duration && 0 <= this._rawPrevTime && this._first && (d = !0), this._rawPrevTime = a) : (this._rawPrevTime = this._duration || !b || a || 0 === this._rawPrevTime ? a : 1E-10, a = 0, this._initted || (d = !0))) : this._totalTime = this._time = this._rawPrevTime = a, this._time !== q && this._first || c || d) {
                    if (this._initted || (this._initted = !0), this._active || !this._paused &&
                        this._time !== q && 0 < a && (this._active = !0), 0 === q && this.vars.onStart && 0 !== this._time && (b || this.vars.onStart.apply(this.vars.onStartScope || this, this.vars.onStartParams || g)), this._time >= q)
                        for (d = this._first; d && (h = d._next, !this._paused || x);)(d._active || d._startTime <= this._time && !d._paused && !d._gc) && (d._reversed ? d.render((d._dirty ? d.totalDuration() : d._totalDuration) - (a - d._startTime) * d._timeScale, b, c) : d.render((a - d._startTime) * d._timeScale, b, c)), d = h;
                    else
                        for (d = this._last; d && (h = d._prev, !this._paused || x);)(d._active ||
                            q >= d._startTime && !d._paused && !d._gc) && (d._reversed ? d.render((d._dirty ? d.totalDuration() : d._totalDuration) - (a - d._startTime) * d._timeScale, b, c) : d.render((a - d._startTime) * d._timeScale, b, c)), d = h;
                    this._onUpdate && (b || this._onUpdate.apply(this.vars.onUpdateScope || this, this.vars.onUpdateParams || g));
                    l && (this._gc || (s === this._startTime || t !== this._timeScale) && (0 === this._time || n >= this.totalDuration()) && (e && (this._timeline.autoRemoveChildren && this._enabled(!1, !1), this._active = !1), !b && this.vars[l] && this.vars[l].apply(this.vars[l +
                        "Scope"] || this, this.vars[l + "Params"] || g)))
                }
            }, q._hasPausedChild = function() {
                for (var b = this._first; b;) {
                    if (b._paused || b instanceof a && b._hasPausedChild()) return !0;
                    b = b._next
                }
                return !1
            }, q.getChildren = function(a, b, c, d) {
                d = d || -9999999999;
                for (var e = [], g = this._first, h = 0; g;) d > g._startTime || (g instanceof l ? !1 !== b && (e[h++] = g) : (!1 !== c && (e[h++] = g), !1 !== a && (e = e.concat(g.getChildren(!0, b, c)), h = e.length))), g = g._next;
                return e
            }, q.getTweensOf = function(a, b) {
                for (var c = l.getTweensOf(a), d = c.length, e = [], g = 0; - 1 < --d;)(c[d].timeline ===
                    this || b && this._contains(c[d])) && (e[g++] = c[d]);
                return e
            }, q._contains = function(a) {
                for (a = a.timeline; a;) {
                    if (a === this) return !0;
                    a = a.timeline
                }
                return !1
            }, q.shiftChildren = function(a, b, c) {
                c = c || 0;
                for (var d, e = this._first, g = this._labels; e;) e._startTime >= c && (e._startTime += a), e = e._next;
                if (b)
                    for (d in g) g[d] >= c && (g[d] += a);
                return this._uncache(!0)
            }, q._kill = function(a, b) {
                if (!a && !b) return this._enabled(!1, !1);
                for (var c = b ? this.getTweensOf(b) : this.getChildren(!0, !0, !1), d = c.length, e = !1; - 1 < --d;) c[d]._kill(a, b) && (e = !0);
                return e
            },
            q.clear = function(a) {
                var b = this.getChildren(!1, !0, !0),
                    c = b.length;
                for (this._time = this._totalTime = 0; - 1 < --c;) b[c]._enabled(!1, !1);
                return !1 !== a && (this._labels = {}), this._uncache(!0)
            }, q.invalidate = function() {
                for (var a = this._first; a;) a.invalidate(), a = a._next;
                return this
            }, q._enabled = function(a, b) {
                if (a === this._gc)
                    for (var c = this._first; c;) c._enabled(a, !0), c = c._next;
                return d.prototype._enabled.call(this, a, b)
            }, q.duration = function(a) {
                return arguments.length ? (0 !== this.duration() && 0 !== a && this.timeScale(this._duration /
                    a), this) : (this._dirty && this.totalDuration(), this._duration)
            }, q.totalDuration = function(a) {
                if (!arguments.length) {
                    if (this._dirty) {
                        var b, c, d = 0;
                        c = this._last;
                        for (var e = 999999999999; c;) b = c._prev, c._dirty && c.totalDuration(), c._startTime > e && this._sortChildren && !c._paused ? this.add(c, c._startTime - c._delay) : e = c._startTime, 0 > c._startTime && !c._paused && (d -= c._startTime, this._timeline.smoothChildTiming && (this._startTime += c._startTime / this._timeScale), this.shiftChildren(-c._startTime, !1, -9999999999), e = 0), c = c._startTime +
                            c._totalDuration / c._timeScale, c > d && (d = c), c = b;
                        this._duration = this._totalDuration = d;
                        this._dirty = !1
                    }
                    return this._totalDuration
                }
                return 0 !== this.totalDuration() && 0 !== a && this.timeScale(this._totalDuration / a), this
            }, q.usesFrames = function() {
                for (var a = this._timeline; a._timeline;) a = a._timeline;
                return a === b._rootFramesTimeline
            }, q.rawTime = function() {
                return this._paused ? this._totalTime : (this._timeline.rawTime() - this._startTime) * this._timeScale
            }, a
    }, !0)
});
window._gsDefine && window._gsQueue.pop()();
(window._gsQueue || (window._gsQueue = [])).push(function() {
    _gsDefine("plugins.ScrollToPlugin", ["plugins.TweenPlugin"], function(b) {
        var d = function(a, c) {
                b.call(this, "scrollTo");
                this._overwriteProps.pop()
            },
            l = d.prototype = new b("scrollTo"),
            a = function() {
                return null != window.pageXOffset ? window.pageXOffset : null != document.documentElement.scrollLeft ? document.documentElement.scrollLeft : document.body.scrollLeft
            },
            c = function() {
                return null != window.pageYOffset ? window.pageYOffset : null != document.documentElement.scrollTop ?
                    document.documentElement.scrollTop : document.body.scrollTop
            },
            h = b.prototype.setRatio;
        l.constructor = d;
        d.API = 2;
        l._onInitTween = function(b, d, h) {
            this._wdw = b == window;
            this._target = b;
            "object" !== typeof d && (d = {
                y: Number(d)
            });
            this.x = this._wdw ? a() : b.scrollLeft;
            this.y = this._wdw ? c() : b.scrollTop;
            null != d.x ? this._addTween(this, "x", this.x, d.x, "scrollTo_x", !0) : this.skipX = !0;
            null != d.y ? this._addTween(this, "y", this.y, d.y, "scrollTo_y", !0) : this.skipY = !0;
            return !0
        };
        l._kill = function(a) {
            a.scrollTo_x && (this.skipX = !0);
            a.scrollTo_x &&
                (this.skipY = !0);
            return b.prototype._kill.call(this, a)
        };
        l.setRatio = function(b) {
            h.call(this, b);
            this._wdw ? window.scrollTo(this.skipX ? a() : this.x, this.skipY ? c() : this.y) : (this.skipY || (this._target.scrollTop = this.y), this.skipX || (this._target.scrollLeft = this.x))
        };
        b.activate([d]);
        return d
    }, !0)
});
window._gsDefine && _gsQueue.pop()();
(function(b) {
    var d = {
        mode: "horizontal",
        slideSelector: "",
        infiniteLoop: !0,
        hideControlOnEnd: !1,
        speed: 500,
        easing: null,
        slideMargin: 0,
        startSlide: 0,
        randomStart: !1,
        captions: !1,
        ticker: !1,
        tickerHover: !1,
        adaptiveHeight: !1,
        adaptiveHeightSpeed: 500,
        video: !1,
        useCSS: !0,
        preloadImages: "visible",
        responsive: !0,
        slideZIndex: 50,
        wrapperClass: "bx-wrapper",
        touchEnabled: !0,
        swipeThreshold: 50,
        oneToOneTouch: !0,
        preventDefaultSwipeX: !0,
        preventDefaultSwipeY: !1,
        pager: !0,
        pagerType: "full",
        pagerShortSeparator: " / ",
        pagerSelector: null,
        buildPager: null,
        pagerCustom: null,
        controls: !0,
        nextText: "Next",
        prevText: "Prev",
        nextSelector: null,
        prevSelector: null,
        autoControls: !1,
        startText: "Start",
        stopText: "Stop",
        autoControlsCombine: !1,
        autoControlsSelector: null,
        auto: !1,
        pause: 4E3,
        autoStart: !0,
        autoDirection: "next",
        autoHover: !1,
        autoDelay: 0,
        autoSlideForOnePage: !1,
        minSlides: 1,
        maxSlides: 1,
        moveSlides: 0,
        slideWidth: 0,
        autoReload: !1,
        onSliderLoad: function() {},
        onSlideBefore: function() {},
        onSlideAfter: function() {},
        onSlideNext: function() {},
        onSlidePrev: function() {},
        onSliderResize: function() {}
    };
    b.fn.bxSlider = function(l) {
        if (0 == this.length) return this;
        if (1 < this.length) return this.each(function() {
            b(this).bxSlider(l)
        }), this;
        var a = {},
            c = this,
            h = b(window).width(),
            g = b(window).height(),
            s = function() {
                function e(b) {
                    for (var c in b) a.settings[c] = b[c]
                }

                function f() {
                    if (a.settings.slides) {
                        a.settings.maxSlides = a.settings.slides;
                        var b = a.settings.minSlides = a.settings.slides;
                        a.settings.slideWidth = Math.floor((h - a.settings.slideMargin * (b - 1)) / b)
                    }
                }

                function g(a) {
                    a = a.replace(/([a-zA-Z0-9]+?):/g,
                        '"$1":');
                    a = a.replace(/'/g, '"');
                    return jQuery.parseJSON(a)
                }
                a.settings = b.extend({}, d, l);
                f();
                var k = b(window).width();
                h = k;
                var m = b(c).attr("data-options");
                if (m) {
                    var q = m.charAt(m.length - 1);
                    "{" != m.charAt(0) && "}" != q && (m = "{" + m + "}");
                    var m = g(m),
                        r;
                    for (r in m) a.settings[r] = m[r];
                    f()
                }
                if (r = b(c).attr("data-breaks")) a.settings.breaks = g(r);
                if (a.settings.breaks) {
                    a.settings.breaks.sort(function(a, b) {
                        return a.screen - b.screen
                    });
                    for (r = 0; r < a.settings.breaks.length; ++r) {
                        var m = a.settings.breaks[r],
                            s = {},
                            q = m.screen;
                        r < a.settings.breaks.length -
                            1 ? (s = a.settings.breaks[r + 1], s = s.screen, k >= q && k < s && e(m)) : k >= q && e(m)
                    }
                    f()
                }
                a.settings.slideWidth = parseInt(a.settings.slideWidth);
                a.children = c.children(a.settings.slideSelector);
                a.children.length < a.settings.minSlides && (a.settings.minSlides = a.children.length);
                a.children.length < a.settings.maxSlides && (a.settings.maxSlides = a.children.length);
                a.settings.randomStart && (a.settings.startSlide = Math.floor(Math.random() * a.children.length));
                a.active = {
                    index: a.settings.startSlide
                };
                a.carousel = 1 < a.settings.minSlides ||
                    1 < a.settings.maxSlides;
                a.carousel && (a.settings.preloadImages = "all");
                a.minThreshold = a.settings.minSlides * a.settings.slideWidth + (a.settings.minSlides - 1) * a.settings.slideMargin;
                a.maxThreshold = a.settings.maxSlides * a.settings.slideWidth + (a.settings.maxSlides - 1) * a.settings.slideMargin;
                a.working = !1;
                a.controls = {};
                a.interval = null;
                a.animProp = "vertical" == a.settings.mode ? "top" : "left";
                a.usingCSS = a.settings.useCSS && "fade" != a.settings.mode && function() {
                    var b = document.createElement("div"),
                        c = ["WebkitPerspective", "MozPerspective",
                            "OPerspective", "msPerspective"
                        ],
                        d;
                    for (d in c)
                        if (void 0 !== b.style[c[d]]) return a.cssPrefix = c[d].replace("Perspective", "").toLowerCase(), a.animProp = "-" + a.cssPrefix + "-transform", !0;
                    return !1
                }();
                "vertical" == a.settings.mode && (a.settings.maxSlides = a.settings.minSlides);
                c.data("origStyle", c.attr("style"));
                c.children(a.settings.slideSelector).each(function() {
                    b(this).data("origStyle", b(this).attr("style"))
                });
                n()
            },
            n = function() {
                c.wrap('<div class="' + a.settings.wrapperClass + '"><div class="bx-viewport"></div></div>');
                a.viewport = c.parent();
                a.loader = b('<div class="bx-loading" />');
                a.viewport.prepend(a.loader);
                c.css({
                    width: "horizontal" == a.settings.mode ? 100 * a.children.length + 215 + "%" : "auto",
                    position: "relative"
                });
                a.usingCSS && a.settings.easing ? c.css("-" + a.cssPrefix + "-transition-timing-function", a.settings.easing) : a.settings.easing || (a.settings.easing = "swing");
                m();
                a.viewport.css({
                    width: "100%",
                    overflow: "hidden",
                    position: "relative"
                });
                a.viewport.parent().css({
                    maxWidth: r()
                });
                a.settings.pager || a.viewport.parent().css({
                    margin: "0 auto 0px"
                });
                a.children.css({
                    "float": "horizontal" == a.settings.mode ? "left" : "none",
                    listStyle: "none",
                    position: "relative"
                });
                a.children.css("width", f());
                "horizontal" == a.settings.mode && 0 < a.settings.slideMargin && a.children.css("marginRight", a.settings.slideMargin);
                "vertical" == a.settings.mode && 0 < a.settings.slideMargin && a.children.css("marginBottom", a.settings.slideMargin);
                "fade" == a.settings.mode && (a.children.css({
                    position: "absolute",
                    zIndex: 0,
                    display: "none"
                }), a.children.eq(a.settings.startSlide).css({
                    zIndex: a.settings.slideZIndex,
                    display: "block"
                }));
                a.controls.el = b('<div class="bx-controls" />');
                a.settings.captions && J();
                a.active.last = a.settings.startSlide == e() - 1;
                a.settings.video && c.fitVids();
                var d = a.children.eq(a.settings.startSlide);
                "all" == a.settings.preloadImages && (d = a.children);
                a.settings.ticker ? a.settings.pager = !1 : (a.settings.pager && (a.settings.pagerCustom ? a.pagerEl = b(a.settings.pagerCustom) : (a.pagerEl = b('<div class="bx-pager" />'), a.settings.pagerSelector ? b(a.settings.pagerSelector).html(a.pagerEl) : a.controls.el.addClass("bx-has-pager").append(a.pagerEl),
                    y()), a.pagerEl.on("click", "a", B)), a.settings.controls && (a.controls.next = b('<a class="bx-next" href="">' + a.settings.nextText + "</a>"), a.controls.prev = b('<a class="bx-prev" href="">' + a.settings.prevText + "</a>"), a.controls.next.bind("click", H), a.controls.prev.bind("click", x), a.settings.nextSelector && b(a.settings.nextSelector).append(a.controls.next), a.settings.prevSelector && b(a.settings.prevSelector).append(a.controls.prev), a.settings.nextSelector || a.settings.prevSelector || (a.controls.directionEl = b('<div class="bx-controls-direction" />'),
                    a.controls.directionEl.append(a.controls.prev).append(a.controls.next), a.controls.el.addClass("bx-has-controls-direction").append(a.controls.directionEl))), a.settings.auto && a.settings.autoControls && (a.controls.start = b('<div class="bx-controls-auto-item"><a class="bx-start" href="">' + a.settings.startText + "</a></div>"), a.controls.stop = b('<div class="bx-controls-auto-item"><a class="bx-stop" href="">' + a.settings.stopText + "</a></div>"), a.controls.autoEl = b('<div class="bx-controls-auto" />'), a.controls.autoEl.on("click",
                    ".bx-start", D), a.controls.autoEl.on("click", ".bx-stop", A), a.settings.autoControlsCombine ? a.controls.autoEl.append(a.controls.start) : a.controls.autoEl.append(a.controls.start).append(a.controls.stop), a.settings.autoControlsSelector ? b(a.settings.autoControlsSelector).html(a.controls.autoEl) : a.controls.el.addClass("bx-has-controls-auto").append(a.controls.autoEl), C(a.settings.autoStart ? "stop" : "start")), (a.settings.controls || a.settings.autoControls || a.settings.pager) && a.viewport.after(a.controls.el));
                t(d, q)
            },
            t = function(a, c) {
                var d = a.find("img, iframe").length;
                if (0 == d) c();
                else {
                    var e = 0;
                    a.find("img, iframe").each(function() {
                        b(this).one("load", function() {
                            ++e == d && c()
                        }).each(function() {
                            this.complete && b(this).load()
                        })
                    })
                }
            },
            q = function() {
                if (a.settings.infiniteLoop && "fade" != a.settings.mode && !a.settings.ticker) {
                    var d = "vertical" == a.settings.mode ? a.settings.minSlides : a.settings.maxSlides,
                        f = a.children.slice(0, d).clone().addClass("bx-clone"),
                        d = a.children.slice(-d).clone().addClass("bx-clone");
                    c.append(f).prepend(d)
                }
                a.loader.remove();
                L();
                "vertical" == a.settings.mode && (a.settings.adaptiveHeight = !0);
                a.viewport.height(k());
                c.redrawSlider();
                a.settings.onSliderLoad(a.active.index);
                a.initialized = !0;
                a.settings.responsive && b(window).bind("resize", aa);
                a.settings.auto && a.settings.autoStart && (1 < e() || a.settings.autoSlideForOnePage) && R();
                a.settings.ticker && P();
                a.settings.pager && F(a.settings.startSlide);
                a.settings.controls && Q();
                a.settings.touchEnabled && !a.settings.ticker && (a.touch = {
                    start: {
                        x: 0,
                        y: 0
                    },
                    end: {
                        x: 0,
                        y: 0
                    }
                }, a.viewport.bind("touchstart",
                    Y))
            },
            k = function() {
                var c = 0,
                    d = b();
                if ("vertical" == a.settings.mode || a.settings.adaptiveHeight)
                    if (a.carousel) {
                        var e = 1 == a.settings.moveSlides ? a.active.index : a.active.index * u(),
                            d = a.children.eq(e);
                        for (i = 1; i <= a.settings.maxSlides - 1; i++) d = e + i >= a.children.length ? d.add(a.children.eq(i - 1)) : d.add(a.children.eq(e + i))
                    } else d = a.children.eq(a.active.index);
                else d = a.children;
                "vertical" == a.settings.mode ? (d.each(function(a) {
                    c += b(this).outerHeight()
                }), 0 < a.settings.slideMargin && (c += a.settings.slideMargin * (a.settings.minSlides -
                    1))) : c = Math.max.apply(Math, d.map(function() {
                    return b(this).outerHeight(!1)
                }).get());
                "border-box" == a.viewport.css("box-sizing") ? c += parseFloat(a.viewport.css("padding-top")) + parseFloat(a.viewport.css("padding-bottom")) + parseFloat(a.viewport.css("border-top-width")) + parseFloat(a.viewport.css("border-bottom-width")) : "padding-box" == a.viewport.css("box-sizing") && (c += parseFloat(a.viewport.css("padding-top")) + parseFloat(a.viewport.css("padding-bottom")));
                return c
            },
            r = function() {
                var b = "100%";
                0 < a.settings.slideWidth &&
                    (b = "horizontal" == a.settings.mode ? a.settings.maxSlides * a.settings.slideWidth + (a.settings.maxSlides - 1) * a.settings.slideMargin : a.settings.slideWidth);
                return b
            },
            f = function() {
                var b = a.settings.slideWidth,
                    c = a.viewport.width();
                0 == a.settings.slideWidth || a.settings.slideWidth > c && !a.carousel || "vertical" == a.settings.mode ? b = c : 1 < a.settings.maxSlides && "horizontal" == a.settings.mode && !(c > a.maxThreshold) && c < a.minThreshold && (b = (c - a.settings.slideMargin * (a.settings.minSlides - 1)) / a.settings.minSlides);
                return b
            },
            m = function() {
                var b =
                    1;
                "horizontal" == a.settings.mode && 0 < a.settings.slideWidth ? a.viewport.width() < a.minThreshold ? b = a.settings.minSlides : a.viewport.width() > a.maxThreshold ? b = a.settings.maxSlides : (b = a.children.first().width() + a.settings.slideMargin, b = Math.floor((a.viewport.width() + a.settings.slideMargin) / b)) : "vertical" == a.settings.mode && (b = a.settings.minSlides);
                return b
            },
            e = function() {
                var b = 0;
                if (0 < a.settings.moveSlides)
                    if (a.settings.infiniteLoop) b = Math.ceil(a.children.length / u());
                    else
                        for (var c = 0, d = 0; c < a.children.length;) ++b,
                            c = d + m(), d += a.settings.moveSlides <= m() ? a.settings.moveSlides : m();
                else b = Math.ceil(a.children.length / m());
                return b
            },
            u = function() {
                return 0 < a.settings.moveSlides && a.settings.moveSlides <= m() ? a.settings.moveSlides : m()
            },
            L = function() {
                if (a.children.length > a.settings.maxSlides && a.active.last && !a.settings.infiniteLoop)
                    if ("horizontal" == a.settings.mode) {
                        var b = a.children.last(),
                            c = b.position();
                        I(-(c.left - (a.viewport.width() - b.outerWidth())), "reset", 0)
                    } else "vertical" == a.settings.mode && (c = a.children.eq(a.children.length -
                        a.settings.minSlides).position(), I(-c.top, "reset", 0));
                else c = a.children.eq(a.active.index * u()).position(), a.active.index == e() - 1 && (a.active.last = !0), void 0 != c && ("horizontal" == a.settings.mode ? I(-c.left, "reset", 0) : "vertical" == a.settings.mode && I(-c.top, "reset", 0))
            },
            I = function(b, d, e, f) {
                if (a.usingCSS) b = "vertical" == a.settings.mode ? "translate3d(0, " + b + "px, 0)" : "translate3d(" + b + "px, 0, 0)", c.css("-" + a.cssPrefix + "-transition-duration", e / 1E3 + "s"), "slide" == d ? (c.css(a.animProp, b), c.bind("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd",
                    function() {
                        c.unbind("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd");
                        E()
                    })) : "reset" == d ? c.css(a.animProp, b) : "ticker" == d && (c.css("-" + a.cssPrefix + "-transition-timing-function", "linear"), c.css(a.animProp, b), c.bind("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd", function() {
                    c.unbind("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd");
                    I(f.resetValue, "reset", 0);
                    S()
                }));
                else {
                    var g = {};
                    g[a.animProp] = b;
                    "slide" == d ? c.animate(g, e, a.settings.easing, function() {
                            E()
                        }) :
                        "reset" == d ? c.css(a.animProp, b) : "ticker" == d && c.animate(g, speed, "linear", function() {
                            I(f.resetValue, "reset", 0);
                            S()
                        })
                }
            },
            y = function() {
                for (var c = "", d = e(), f = 0; f < d; f++) {
                    var g = "";
                    a.settings.buildPager && b.isFunction(a.settings.buildPager) ? (g = a.settings.buildPager(f), a.pagerEl.addClass("bx-custom-pager")) : (g = f + 1, a.pagerEl.addClass("bx-default-pager"));
                    c += '<div class="bx-pager-item"><a href="" data-slide-index="' + f + '" class="bx-pager-link">' + g + "</a></div>"
                }
                a.pagerEl.html(c)
            },
            J = function() {
                a.children.each(function(a) {
                    a =
                        b(this).find("img:first").attr("title");
                    void 0 != a && ("" + a).length && b(this).append('<div class="bx-caption"><span>' + a + "</span></div>")
                })
            },
            H = function(b) {
                a.settings.auto && c.stopAuto();
                c.goToNextSlide();
                b.preventDefault()
            },
            x = function(b) {
                a.settings.auto && c.stopAuto();
                c.goToPrevSlide();
                b.preventDefault()
            },
            D = function(a) {
                c.startAuto();
                a.preventDefault()
            },
            A = function(a) {
                c.stopAuto();
                a.preventDefault()
            },
            B = function(d) {
                a.settings.auto && c.stopAuto();
                var e = b(d.currentTarget);
                void 0 !== e.attr("data-slide-index") &&
                    (e = parseInt(e.attr("data-slide-index")), e != a.active.index && c.goToSlide(e), d.preventDefault())
            },
            F = function(c) {
                var d = a.children.length;
                "short" == a.settings.pagerType ? (1 < a.settings.maxSlides && (d = Math.ceil(a.children.length / a.settings.maxSlides)), a.pagerEl.html(c + 1 + a.settings.pagerShortSeparator + d)) : (a.pagerEl.find("a").removeClass("active"), a.pagerEl.each(function(a, d) {
                    b(d).find("a").eq(c).addClass("active")
                }))
            },
            E = function() {
                if (a.settings.infiniteLoop) {
                    var b = "";
                    0 == a.active.index ? b = a.children.eq(0).position() :
                        a.active.index == e() - 1 && a.carousel ? b = a.children.eq((e() - 1) * u()).position() : a.active.index == a.children.length - 1 && (b = a.children.eq(a.children.length - 1).position());
                    b && ("horizontal" == a.settings.mode ? I(-b.left, "reset", 0) : "vertical" == a.settings.mode && I(-b.top, "reset", 0))
                }
                a.working = !1;
                a.settings.onSlideAfter(a.children.eq(a.active.index), a.oldIndex, a.active.index)
            },
            C = function(b) {
                a.settings.autoControlsCombine ? a.controls.autoEl.html(a.controls[b]) : (a.controls.autoEl.find("a").removeClass("active"), a.controls.autoEl.find("a:not(.bx-" +
                    b + ")").addClass("active"))
            },
            Q = function() {
                1 == e() ? (a.controls.prev.addClass("disabled"), a.controls.next.addClass("disabled")) : !a.settings.infiniteLoop && a.settings.hideControlOnEnd && (0 == a.active.index ? (a.controls.prev.addClass("disabled"), a.controls.next.removeClass("disabled")) : a.active.index == e() - 1 ? (a.controls.next.addClass("disabled"), a.controls.prev.removeClass("disabled")) : (a.controls.prev.removeClass("disabled"), a.controls.next.removeClass("disabled")))
            },
            R = function() {
                0 < a.settings.autoDelay ? setTimeout(c.startAuto,
                    a.settings.autoDelay) : c.startAuto();
                a.settings.autoHover && c.hover(function() {
                    a.interval && (c.stopAuto(!0), a.autoPaused = !0)
                }, function() {
                    a.autoPaused && (c.startAuto(!0), a.autoPaused = null)
                })
            },
            P = function() {
                var d = 0;
                "next" == a.settings.autoDirection ? c.append(a.children.clone().addClass("bx-clone")) : (c.prepend(a.children.clone().addClass("bx-clone")), d = a.children.first().position(), d = "horizontal" == a.settings.mode ? -d.left : -d.top);
                I(d, "reset", 0);
                a.settings.pager = !1;
                a.settings.controls = !1;
                a.settings.autoControls = !1;
                a.settings.tickerHover && !a.usingCSS && a.viewport.hover(function() {
                    c.stop()
                }, function() {
                    var d = 0;
                    a.children.each(function(c) {
                        d += "horizontal" == a.settings.mode ? b(this).outerWidth(!0) : b(this).outerHeight(!0)
                    });
                    var e = a.settings.speed / d * (d - Math.abs(parseInt(c.css("horizontal" == a.settings.mode ? "left" : "top"))));
                    S(e)
                });
                S()
            },
            S = function(b) {
                speed = b ? b : a.settings.speed;
                b = {
                    left: 0,
                    top: 0
                };
                var d = {
                    left: 0,
                    top: 0
                };
                "next" == a.settings.autoDirection ? b = c.find(".bx-clone").first().position() : d = a.children.first().position();
                I("horizontal" == a.settings.mode ? -b.left : -b.top, "ticker", speed, {
                    resetValue: "horizontal" == a.settings.mode ? -d.left : -d.top
                })
            },
            Y = function(b) {
                a.working ? b.preventDefault() : (a.touch.originalPos = c.position(), b = b.originalEvent, b = "undefined" != typeof b.changedTouches ? b.changedTouches : [b], a.touch.start.x = b[0].pageX, a.touch.start.y = b[0].pageY, a.viewport.bind("touchmove MSPointerMove", U), a.viewport.bind("touchend MSPointerUp", W))
            },
            U = function(b) {
                var c = b.originalEvent,
                    d = Math.abs(c.changedTouches[0].pageX - a.touch.start.x),
                    e = Math.abs(c.changedTouches[0].pageY - a.touch.start.y);
                3 * d > e && a.settings.preventDefaultSwipeX ? b.preventDefault() : 3 * e > d && a.settings.preventDefaultSwipeY && b.preventDefault();
                "fade" != a.settings.mode && a.settings.oneToOneTouch && (b = 0, "horizontal" == a.settings.mode ? (c = c.changedTouches[0].pageX - a.touch.start.x, b = a.touch.originalPos.left + c) : (c = c.changedTouches[0].pageY - a.touch.start.y, b = a.touch.originalPos.top + c), I(b, "reset", 0))
            },
            W = function(b) {
                a.viewport.unbind("touchmove", U);
                var d = b.originalEvent;
                b = 0;
                a.touch.end.x =
                    d.changedTouches[0].pageX;
                a.touch.end.y = d.changedTouches[0].pageY;
                "fade" == a.settings.mode ? (d = Math.abs(a.touch.start.x - a.touch.end.x), d >= a.settings.swipeThreshold && (a.touch.start.x > a.touch.end.x ? c.goToNextSlide() : c.goToPrevSlide(), c.stopAuto())) : ("horizontal" == a.settings.mode ? (d = a.touch.end.x - a.touch.start.x, b = a.touch.originalPos.left) : (d = a.touch.end.y - a.touch.start.y, b = a.touch.originalPos.top), !a.settings.infiniteLoop && (0 == a.active.index && 0 < d || a.active.last && 0 > d) ? I(b, "reset", 200) : Math.abs(d) >= a.settings.swipeThreshold ?
                    (0 > d ? c.goToNextSlide() : c.goToPrevSlide(), c.stopAuto()) : I(b, "reset", 200));
                a.viewport.unbind("touchend", W)
            },
            aa = function(d) {
                if (a.initialized) {
                    d = b(window).width();
                    var e = b(window).height();
                    if (h != d || g != e) h = d, g = e, c.redrawSlider(), a.settings.onSliderResize.call(c, a.active.index)
                }
            };
        c.goToSlide = function(d, f) {
            if (!a.working && a.active.index != d) {
                a.working = !0;
                a.oldIndex = a.active.index;
                0 > d ? a.active.index = e() - 1 : d >= e() ? a.active.index = 0 : a.active.index = d;
                a.settings.onSlideBefore(a.children.eq(a.active.index), a.oldIndex,
                    a.active.index);
                if ("next" == f) a.settings.onSlideNext(a.children.eq(a.active.index), a.oldIndex, a.active.index);
                else if ("prev" == f) a.settings.onSlidePrev(a.children.eq(a.active.index), a.oldIndex, a.active.index);
                a.active.last = a.active.index >= e() - 1;
                a.settings.pager && F(a.active.index);
                a.settings.controls && Q();
                if ("fade" == a.settings.mode) a.settings.adaptiveHeight && a.viewport.height() != k() && a.viewport.animate({
                        height: k()
                    }, a.settings.adaptiveHeightSpeed), a.children.filter(":visible").fadeOut(a.settings.speed).css({
                        zIndex: 0
                    }),
                    a.children.eq(a.active.index).css("zIndex", a.settings.slideZIndex + 1).fadeIn(a.settings.speed, function() {
                        b(this).css("zIndex", a.settings.slideZIndex);
                        E()
                    });
                else {
                    a.settings.adaptiveHeight && a.viewport.height() != k() && a.viewport.animate({
                        height: k()
                    }, a.settings.adaptiveHeightSpeed);
                    var g = 0,
                        h = {
                            left: 0,
                            top: 0
                        };
                    if (!a.settings.infiniteLoop && a.carousel && a.active.last)
                        if ("horizontal" == a.settings.mode) var l = a.children.eq(a.children.length - 1),
                            h = l.position(),
                            g = a.viewport.width() - l.outerWidth();
                        else h = a.children.eq(a.children.length -
                            a.settings.minSlides).position();
                    else a.carousel && a.active.last && "prev" == f ? (h = 1 == a.settings.moveSlides ? a.settings.maxSlides - u() : (e() - 1) * u() - (a.children.length - a.settings.maxSlides), l = c.children(".bx-clone").eq(h), h = l.position()) : "next" == f && 0 == a.active.index ? (h = c.find("> .bx-clone").eq(a.settings.maxSlides).position(), a.active.last = !1) : 0 <= d && (h = d * u(), h = a.children.eq(h).position());
                    "undefined" !== typeof h && I("horizontal" == a.settings.mode ? -(h.left - g) : -h.top, "slide", a.settings.speed)
                }
            }
        };
        c.goToNextSlide =
            function() {
                if (a.settings.infiniteLoop || !a.active.last) {
                    var b = parseInt(a.active.index) + 1;
                    c.goToSlide(b, "next")
                }
            };
        c.goToPrevSlide = function() {
            if (a.settings.infiniteLoop || 0 != a.active.index) {
                var b = parseInt(a.active.index) - 1;
                c.goToSlide(b, "prev")
            }
        };
        c.startAuto = function(b) {
            a.interval || (a.interval = setInterval(function() {
                "next" == a.settings.autoDirection ? c.goToNextSlide() : c.goToPrevSlide()
            }, a.settings.pause), a.settings.autoControls && 1 != b && C("stop"))
        };
        c.stopAuto = function(b) {
            a.interval && (clearInterval(a.interval),
                a.interval = null, a.settings.autoControls && 1 != b && C("start"))
        };
        c.getCurrentSlide = function() {
            return a.active.index
        };
        c.getCurrentSlideElement = function() {
            return a.children.eq(a.active.index)
        };
        c.getSlideCount = function() {
            return a.children.length
        };
        c.redrawSlider = function() {
            a.children.add(c.find(".bx-clone")).width(f());
            a.viewport.css("height", k());
            a.settings.ticker || L();
            a.active.last && (a.active.index = e() - 1);
            a.active.index >= e() && (a.active.last = !0);
            a.settings.pager && !a.settings.pagerCustom && (y(), F(a.active.index))
        };
        c.destroySlider = function() {
            a.initialized && (a.initialized = !1, b(".bx-clone", this).remove(), a.children.each(function() {
                    void 0 != b(this).data("origStyle") ? b(this).attr("style", b(this).data("origStyle")) : b(this).removeAttr("style")
                }), void 0 != b(this).data("origStyle") ? this.attr("style", b(this).data("origStyle")) : b(this).removeAttr("style"), b(this).unwrap().unwrap(), a.controls.el && a.controls.el.remove(), a.controls.next && a.controls.next.remove(), a.controls.prev && a.controls.prev.remove(), a.pagerEl && a.settings.controls &&
                a.pagerEl.remove(), b(".bx-caption", this).remove(), a.controls.autoEl && a.controls.autoEl.remove(), clearInterval(a.interval), a.settings.responsive && b(window).unbind("resize", aa))
        };
        c.reloadSlider = function(a) {
            void 0 != a && (l = a);
            c.destroySlider();
            s()
        };
        b(window).resize(function() {
            a.settings.autoReload && c.reloadSlider()
        });
        s();
        return this
    }
})(jQuery);
$('[data-call="bxslider"]').each(function() {
    $(this).bxSlider()
});
(function() {
    var b = [].indexOf || function(b) {
            for (var a = 0, c = this.length; a < c; a++)
                if (a in this && this[a] === b) return a;
            return -1
        },
        d = [].slice;
    (function(b, a) {
        return "function" === typeof define && define.amd ? define("waypoints", ["jquery"], function(c) {
            return a(c, b)
        }) : a(b.jQuery, b)
    })(window, function(l, a) {
        var c, h, g, s, n, t, q, k, r, f;
        c = l(a);
        q = 0 <= b.call(a, "ontouchstart");
        s = {
            horizontal: {},
            vertical: {}
        };
        n = 1;
        t = {};
        f = 1;
        h = function() {
            function b(c) {
                var d = this;
                this.$element = c;
                this.element = c[0];
                this.didScroll = this.didResize = !1;
                this.id =
                    "context" + n++;
                this.oldScroll = {
                    x: c.scrollLeft(),
                    y: c.scrollTop()
                };
                this.waypoints = {
                    horizontal: {},
                    vertical: {}
                };
                this.element["waypoints-context-id"] = this.id;
                t[this.id] = this;
                c.bind("scroll.waypoints", function() {
                    if (!d.didScroll && !q) return d.didScroll = !0, a.setTimeout(function() {
                        d.doScroll();
                        return d.didScroll = !1
                    }, l.waypoints.settings.scrollThrottle)
                });
                c.bind("resize.waypoints", function() {
                    if (!d.didResize) return d.didResize = !0, a.setTimeout(function() {
                        l.waypoints("refresh");
                        return d.didResize = !1
                    }, l.waypoints.settings.resizeThrottle)
                })
            }
            b.prototype.doScroll = function() {
                var a, b = this;
                a = {
                    horizontal: {
                        newScroll: this.$element.scrollLeft(),
                        oldScroll: this.oldScroll.x,
                        forward: "right",
                        backward: "left"
                    },
                    vertical: {
                        newScroll: this.$element.scrollTop(),
                        oldScroll: this.oldScroll.y,
                        forward: "down",
                        backward: "up"
                    }
                };
                !q || a.vertical.oldScroll && a.vertical.newScroll || l.waypoints("refresh");
                l.each(a, function(a, c) {
                    var d, e, f;
                    f = [];
                    d = (e = c.newScroll > c.oldScroll) ? c.forward : c.backward;
                    l.each(b.waypoints[a], function(a, b) {
                        var d, e;
                        if (c.oldScroll < (d = b.offset) && d <= c.newScroll ||
                            c.newScroll < (e = b.offset) && e <= c.oldScroll) return f.push(b)
                    });
                    f.sort(function(a, b) {
                        return a.offset - b.offset
                    });
                    e || f.reverse();
                    return l.each(f, function(a, b) {
                        if (b.options.continuous || a === f.length - 1) return b.trigger([d])
                    })
                });
                return this.oldScroll = {
                    x: a.horizontal.newScroll,
                    y: a.vertical.newScroll
                }
            };
            b.prototype.refresh = function() {
                var a, b, c = this;
                b = l.isWindow(this.element);
                a = this.$element.offset();
                this.doScroll();
                a = {
                    horizontal: {
                        contextOffset: b ? 0 : a.left,
                        contextScroll: b ? 0 : this.oldScroll.x,
                        contextDimension: this.$element.width(),
                        oldScroll: this.oldScroll.x,
                        forward: "right",
                        backward: "left",
                        offsetProp: "left"
                    },
                    vertical: {
                        contextOffset: b ? 0 : a.top,
                        contextScroll: b ? 0 : this.oldScroll.y,
                        contextDimension: b ? l.waypoints("viewportHeight") : this.$element.height(),
                        oldScroll: this.oldScroll.y,
                        forward: "down",
                        backward: "up",
                        offsetProp: "top"
                    }
                };
                return l.each(a, function(a, b) {
                    return l.each(c.waypoints[a], function(a, c) {
                        var d, e, f, g, h;
                        d = c.options.offset;
                        f = c.offset;
                        e = l.isWindow(c.element) ? 0 : c.$element.offset()[b.offsetProp];
                        l.isFunction(d) ? d = d.apply(c.element) :
                            "string" === typeof d && (d = parseFloat(d), -1 < c.options.offset.indexOf("%") && (d = Math.ceil(b.contextDimension * d / 100)));
                        c.offset = e - b.contextOffset + b.contextScroll - d;
                        if ((!c.options.onlyOnScroll || null == f) && c.enabled) {
                            if (null !== f && f < (g = b.oldScroll) && g <= c.offset) return c.trigger([b.backward]);
                            if (null !== f && f > (h = b.oldScroll) && h >= c.offset || null === f && b.oldScroll >= c.offset) return c.trigger([b.forward])
                        }
                    })
                })
            };
            b.prototype.checkEmpty = function() {
                if (l.isEmptyObject(this.waypoints.horizontal) && l.isEmptyObject(this.waypoints.vertical)) return this.$element.unbind("resize.waypoints scroll.waypoints"),
                    delete t[this.id]
            };
            return b
        }();
        g = function() {
            function a(b, c, d) {
                var g;
                "bottom-in-view" === d.offset && (d.offset = function() {
                    var a;
                    a = l.waypoints("viewportHeight");
                    l.isWindow(c.element) || (a = c.$element.height());
                    return a - l(this).outerHeight()
                });
                this.$element = b;
                this.element = b[0];
                this.axis = d.horizontal ? "horizontal" : "vertical";
                this.callback = d.handler;
                this.context = c;
                this.enabled = d.enabled;
                this.id = "waypoints" + f++;
                this.offset = null;
                this.options = d;
                c.waypoints[this.axis][this.id] = this;
                s[this.axis][this.id] = this;
                b =
                    null != (g = this.element["waypoints-waypoint-ids"]) ? g : [];
                b.push(this.id);
                this.element["waypoints-waypoint-ids"] = b
            }
            a.prototype.trigger = function(a) {
                if (this.enabled && (null != this.callback && this.callback.apply(this.element, a), this.options.triggerOnce)) return this.destroy()
            };
            a.prototype.disable = function() {
                return this.enabled = !1
            };
            a.prototype.enable = function() {
                this.context.refresh();
                return this.enabled = !0
            };
            a.prototype.destroy = function() {
                delete s[this.axis][this.id];
                delete this.context.waypoints[this.axis][this.id];
                return this.context.checkEmpty()
            };
            a.getWaypointsByElement = function(a) {
                var b;
                a = a["waypoints-waypoint-ids"];
                if (!a) return [];
                b = l.extend({}, s.horizontal, s.vertical);
                return l.map(a, function(a) {
                    return b[a]
                })
            };
            return a
        }();
        r = {
            init: function(a, b) {
                b = l.extend({}, l.fn.waypoint.defaults, b);
                null == b.handler && (b.handler = a);
                this.each(function() {
                    var a, c, d;
                    a = l(this);
                    d = null != (c = b.context) ? c : l.fn.waypoint.defaults.context;
                    l.isWindow(d) || (d = a.closest(d));
                    d = l(d);
                    (c = t[d[0]["waypoints-context-id"]]) || (c = new h(d));
                    return new g(a,
                        c, b)
                });
                l.waypoints("refresh");
                return this
            },
            disable: function() {
                return r._invoke.call(this, "disable")
            },
            enable: function() {
                return r._invoke.call(this, "enable")
            },
            destroy: function() {
                return r._invoke.call(this, "destroy")
            },
            prev: function(a, b) {
                return r._traverse.call(this, a, b, function(a, b, c) {
                    if (0 < b) return a.push(c[b - 1])
                })
            },
            next: function(a, b) {
                return r._traverse.call(this, a, b, function(a, b, c) {
                    if (b < c.length - 1) return a.push(c[b + 1])
                })
            },
            _traverse: function(b, c, d) {
                var f, g;
                null == b && (b = "vertical");
                null == c && (c = a);
                g = k.aggregate(c);
                f = [];
                this.each(function() {
                    var a;
                    a = l.inArray(this, g[b]);
                    return d(f, a, g[b])
                });
                return this.pushStack(f)
            },
            _invoke: function(a) {
                this.each(function() {
                    var b;
                    b = g.getWaypointsByElement(this);
                    return l.each(b, function(b, c) {
                        c[a]();
                        return !0
                    })
                });
                return this
            }
        };
        l.fn.waypoint = function() {
            var a, b;
            b = arguments[0];
            a = 2 <= arguments.length ? d.call(arguments, 1) : [];
            return r[b] ? r[b].apply(this, a) : l.isFunction(b) ? r.init.apply(this, arguments) : l.isPlainObject(b) ? r.init.apply(this, [null, b]) : b ? l.error("The " + b + " method does not exist in jQuery Waypoints.") :
                l.error("jQuery Waypoints needs a callback function or handler option.")
        };
        l.fn.waypoint.defaults = {
            context: a,
            continuous: !0,
            enabled: !0,
            horizontal: !1,
            offset: 0,
            triggerOnce: !1
        };
        k = {
            refresh: function() {
                return l.each(t, function(a, b) {
                    return b.refresh()
                })
            },
            viewportHeight: function() {
                var b;
                return null != (b = a.innerHeight) ? b : c.height()
            },
            aggregate: function(a) {
                var b, c, d;
                b = s;
                a && (b = null != (d = t[l(a)[0]["waypoints-context-id"]]) ? d.waypoints : void 0);
                if (!b) return [];
                c = {
                    horizontal: [],
                    vertical: []
                };
                l.each(c, function(a, d) {
                    l.each(b[a],
                        function(a, b) {
                            return d.push(b)
                        });
                    d.sort(function(a, b) {
                        return a.offset - b.offset
                    });
                    c[a] = l.map(d, function(a) {
                        return a.element
                    });
                    return c[a] = l.unique(c[a])
                });
                return c
            },
            above: function(b) {
                null == b && (b = a);
                return k._filter(b, "vertical", function(a, b) {
                    return b.offset <= a.oldScroll.y
                })
            },
            below: function(b) {
                null == b && (b = a);
                return k._filter(b, "vertical", function(a, b) {
                    return b.offset > a.oldScroll.y
                })
            },
            left: function(b) {
                null == b && (b = a);
                return k._filter(b, "horizontal", function(a, b) {
                    return b.offset <= a.oldScroll.x
                })
            },
            right: function(b) {
                null ==
                    b && (b = a);
                return k._filter(b, "horizontal", function(a, b) {
                    return b.offset > a.oldScroll.x
                })
            },
            enable: function() {
                return k._invoke("enable")
            },
            disable: function() {
                return k._invoke("disable")
            },
            destroy: function() {
                return k._invoke("destroy")
            },
            extendFn: function(a, b) {
                return r[a] = b
            },
            _invoke: function(a) {
                var b;
                b = l.extend({}, s.vertical, s.horizontal);
                return l.each(b, function(b, c) {
                    c[a]();
                    return !0
                })
            },
            _filter: function(a, b, c) {
                var d, f;
                d = t[l(a)[0]["waypoints-context-id"]];
                if (!d) return [];
                f = [];
                l.each(d.waypoints[b], function(a,
                    b) {
                    if (c(d, b)) return f.push(b)
                });
                f.sort(function(a, b) {
                    return a.offset - b.offset
                });
                return l.map(f, function(a) {
                    return a.element
                })
            }
        };
        l.waypoints = function() {
            var a, b;
            b = arguments[0];
            a = 2 <= arguments.length ? d.call(arguments, 1) : [];
            return k[b] ? k[b].apply(null, a) : k.aggregate.call(null, b)
        };
        l.waypoints.settings = {
            resizeThrottle: 100,
            scrollThrottle: 30
        };
        return c.on("load.waypoints", function() {
            return l.waypoints("refresh")
        })
    })
}).call(this);
! function(b, d, l, a) {
    var c = b(d);
    b.fn.lazyload = function(h) {
        function g() {
            var a = 0;
            n.each(function() {
                var c = b(this);
                if (!(t.skip_invisible && !c.is(":visible") || b.abovethetop(this, t) || b.leftofbegin(this, t)))
                    if (b.belowthefold(this, t) || b.rightoffold(this, t)) {
                        if (++a > t.failure_limit) return !1
                    } else c.trigger("appear"), a = 0
            })
        }
        var s, n = this,
            t = {
                threshold: 0,
                failure_limit: 0,
                event: "scroll",
                effect: "show",
                container: d,
                data_attribute: "original",
                skip_invisible: !0,
                appear: null,
                load: null,
                placeholder: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsQAAA7EAZUrDhsAAAANSURBVBhXYzh8+PB/AAffA0nNPuCLAAAAAElFTkSuQmCC"
            };
        return h && (a !== h.failurelimit && (h.failure_limit = h.failurelimit, delete h.failurelimit), a !== h.effectspeed && (h.effect_speed = h.effectspeed, delete h.effectspeed), b.extend(t, h)), s = t.container === a || t.container === d ? c : b(t.container), 0 === t.event.indexOf("scroll") && s.bind(t.event, function() {
                return g()
            }), this.each(function() {
                var c = this,
                    d = b(c);
                c.loaded = !1;
                (d.attr("src") === a || !1 === d.attr("src")) && d.is("img") && d.attr("src", t.placeholder);
                d.one("appear", function() {
                    this.loaded || (t.appear && t.appear.call(c, n.length,
                        t), b("<img />").bind("load", function() {
                        var a = d.attr("data-" + t.data_attribute);
                        d.hide();
                        d.is("img") ? d.attr("src", a) : d.css("background-image", "url('" + a + "')");
                        d[t.effect](t.effect_speed);
                        c.loaded = !0;
                        a = b.grep(n, function(a) {
                            return !a.loaded
                        });
                        (n = b(a), t.load) && t.load.call(c, n.length, t)
                    }).attr("src", d.attr("data-" + t.data_attribute)))
                });
                0 !== t.event.indexOf("scroll") && d.bind(t.event, function() {
                    c.loaded || d.trigger("appear")
                })
            }), c.bind("resize", function() {
                g()
            }), /(?:iphone|ipod|ipad).*os 5/gi.test(navigator.appVersion) &&
            c.bind("pageshow", function(a) {
                a.originalEvent && a.originalEvent.persisted && n.each(function() {
                    b(this).trigger("appear")
                })
            }), b(l).ready(function() {
                g()
            }), this
    };
    b.belowthefold = function(h, g) {
        var l;
        return l = g.container === a || g.container === d ? (d.innerHeight ? d.innerHeight : c.height()) + c.scrollTop() : b(g.container).offset().top + b(g.container).height(), l <= b(h).offset().top - g.threshold
    };
    b.rightoffold = function(h, g) {
        var l;
        return l = g.container === a || g.container === d ? c.width() + c.scrollLeft() : b(g.container).offset().left +
            b(g.container).width(), l <= b(h).offset().left - g.threshold
    };
    b.abovethetop = function(h, g) {
        var l;
        return l = g.container === a || g.container === d ? c.scrollTop() : b(g.container).offset().top, l >= b(h).offset().top + g.threshold + b(h).height()
    };
    b.leftofbegin = function(h, g) {
        var l;
        return l = g.container === a || g.container === d ? c.scrollLeft() : b(g.container).offset().left, l >= b(h).offset().left + g.threshold + b(h).width()
    };
    b.inviewport = function(a, c) {
        return !(b.rightoffold(a, c) || b.leftofbegin(a, c) || b.belowthefold(a, c) || b.abovethetop(a,
            c))
    };
    b.extend(b.expr[":"], {
        "below-the-fold": function(a) {
            return b.belowthefold(a, {
                threshold: 0
            })
        },
        "above-the-top": function(a) {
            return !b.belowthefold(a, {
                threshold: 0
            })
        },
        "right-of-screen": function(a) {
            return b.rightoffold(a, {
                threshold: 0
            })
        },
        "left-of-screen": function(a) {
            return !b.rightoffold(a, {
                threshold: 0
            })
        },
        "in-viewport": function(a) {
            return b.inviewport(a, {
                threshold: 0
            })
        },
        "above-the-fold": function(a) {
            return !b.belowthefold(a, {
                threshold: 0
            })
        },
        "right-of-fold": function(a) {
            return b.rightoffold(a, {
                threshold: 0
            })
        },
        "left-of-fold": function(a) {
            return !b.rightoffold(a, {
                threshold: 0
            })
        }
    })
}(jQuery, window, document);
(function(b, d) {
    "function" === typeof define && define.amd ? define([], d) : "object" === typeof exports ? module.exports = d() : b.viewportUnitsBuggyfill = d()
})(this, function() {
    function b() {
        k && (d(), L.textContent = a())
    }

    function d() {
        u = [];
        f.call(document.styleSheets, function(a) {
            "patched-viewport" !== a.ownerNode.id && a.cssRules && (a.media.mediaText && !window.matchMedia(a.media.mediaText).matches || f.call(a.cssRules, l))
        });
        return u
    }

    function l(a) {
        if (7 === a.type) {
            var b = a.cssText;
            r.lastIndex = 0;
            r.test(b) && u.push([a, null, b])
        } else a.style ?
            f.call(a.style, function(b) {
                var c = a.style.getPropertyValue(b);
                r.lastIndex = 0;
                r.test(c) && u.push([a, b, c])
            }) : a.cssRules && f.call(a.cssRules, function(a) {
                l(a)
            })
    }

    function a() {
        e = g();
        var a = [],
            b = [],
            d, f;
        u.forEach(function(e) {
            e = c.apply(null, e);
            var g = e.selector.length ? e.selector.join(" {\n") + " {\n" : "",
                h = Array(e.selector.length + 1).join("\n}");
            g && g === d ? (g && !d && (d = g, f = h), b.push(e.content)) : (b.length && (a.push(d + b.join("\n") + f), b.length = 0), g ? (d = g, f = h, b.push(e.content)) : (a.push(e.content), f = d = null))
        });
        b.length && a.push(d +
            b.join("\n") + f);
        return a.join("\n\n")
    }

    function c(a, b, c) {
        c = c.replace(r, h);
        var d = [];
        b && (d.push(a.selectorText), c = b + ": " + c + ";");
        for (a = a.parentRule; a;) d.unshift("@media " + m.call(a.media, ", ")), a = a.parentRule;
        return {
            selector: d,
            content: c
        }
    }

    function h(a, b, c) {
        a = e[c];
        return parseFloat(b) / 100 * a + "px"
    }

    function g() {
        var a = window.innerHeight,
            b = window.innerWidth;
        return {
            vh: a,
            vw: b,
            vmax: Math.max(b, a),
            vmin: Math.min(b, a)
        }
    }

    function s(a) {
        var b = 0,
            c = function() {
                b--;
                b || a()
            };
        f.call(document.styleSheets, function(a) {
            a.href && n(a.href) !==
                n(location.href) && (b++, t(a.ownerNode, c))
        });
        b || a()
    }

    function n(a) {
        return a.slice(0, a.indexOf("/", a.indexOf("://") + 3))
    }

    function t(a, b) {
        q(a.href, function() {
            var c = document.createElement("style");
            c.media = a.media;
            c.setAttribute("data-href", a.href);
            c.textContent = this.responseText;
            a.parentNode.replaceChild(c, a);
            b()
        }, b)
    }

    function q(a, b, c) {
        var d = new XMLHttpRequest;
        if ("withCredentials" in d) d.open("GET", a, !0);
        else if ("undefined" !== typeof XDomainRequest) d = new XDomainRequest, d.open("GET", a);
        else throw Error("cross-domain XHR not supported");
        d.onload = b;
        d.onerror = c;
        d.send();
        return d
    }
    var k = !1,
        r = /([0-9.-]+)(vh|vw|vmin|vmax)/g,
        f = [].forEach,
        m = [].join,
        e, u, L, I = /(iPhone|iPod|iPad).+AppleWebKit/i.test(window.navigator.userAgent);
    return {
        version: "0.3.1",
        findProperties: d,
        getCss: a,
        init: function(a) {
            k || !a && !I || (k = !0, L = document.createElement("style"), L.id = "patched-viewport", document.head.appendChild(L), s(function() {
                window.addEventListener("orientationchange", b, !0);
                b()
            }))
        },
        refresh: b
    }
});
window.svgeezy = function() {
    return {
        init: function(b, d) {
            this.avoid = b || !1;
            this.filetype = d || "png";
            this.svgSupport = this.supportsSvg();
            this.svgSupport || (this.images = document.getElementsByTagName("img"), this.imgL = this.images.length, this.fallbacks())
        },
        fallbacks: function() {
            for (; this.imgL--;)
                if (!this.hasClass(this.images[this.imgL], this.avoid) || !this.avoid) {
                    var b = this.images[this.imgL].getAttribute("src");
                    null !== b && "svg" == this.getFileExt(b) && (b = b.replace(".svg", "." + this.filetype), this.images[this.imgL].setAttribute("src",
                        b))
                }
        },
        getFileExt: function(b) {
            b = b.split(".").pop(); - 1 !== b.indexOf("?") && (b = b.split("?")[0]);
            return b
        },
        hasClass: function(b, d) {
            return -1 < (" " + b.className + " ").indexOf(" " + d + " ")
        },
        supportsSvg: function() {
            return document.implementation.hasFeature("http://www.w3.org/TR/SVG11/feature#Image", "1.1")
        }
    }
}();