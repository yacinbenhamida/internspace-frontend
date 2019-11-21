Strut = {
    random: function (t, e) {
        return Math.random() * (e - t) + t
    },
    arrayRandom: function (t) {
        return t[Math.floor(Math.random() * t.length)]
    },
    interpolate: function (t, e, n) {
        return t * (1 - n) + e * n
    },
    rangePosition: function (t, e, n) {
        return (n - t) / (e - t)
    },
    clamp: function (t, e, n) {
        return Math.max(Math.min(t, n), e)
    },
    queryArray: function (t, e) {
        return e || (e = document.body),
            Array.prototype.slice.call(e.querySelectorAll(t))
    },
    ready: function (t) {
        "loading" !== document.readyState ? t() : document.addEventListener("DOMContentLoaded", t)
    },
    debounce: function (t, e) {
        let n;
        return function () {
            clearTimeout(n),
                n = setTimeout(function () {
                    return t.apply(this, arguments)
                }, e)
        }
    },
    throttle: function (t, e, n) {
        var i = n || this
            , o = null
            , a = null
            , r = function () {
                t.apply(i, a),
                    o = null
            };
        return function () {
            o || (a = arguments,
                o = setTimeout(r, e))
        }
    }
};

!function (t) {
    var e = {};
    function n(r) {
        if (e[r])
            return e[r].exports;
        var i = e[r] = {
            i: r,
            l: !1,
            exports: {}
        };
        return t[r].call(i.exports, i, i.exports, n),
        i.l = !0,
        i.exports
    }
    n.m = t,
    n.c = e,
    n.d = function(t, e, r) {
        n.o(t, e) || Object.defineProperty(t, e, {
            enumerable: !0,
            get: r
        })
    }
    ,
    n.r = function(t) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {
            value: "Module"
        }),
        Object.defineProperty(t, "__esModule", {
            value: !0
        })
    }
    ,
    n.t = function(t, e) {
        if (1 & e && (t = n(t)),
        8 & e)
            return t;
        if (4 & e && "object" == typeof t && t && t.__esModule)
            return t;
        var r = Object.create(null);
        if (n.r(r),
        Object.defineProperty(r, "default", {
            enumerable: !0,
            value: t
        }),
        2 & e && "string" != typeof t)
            for (var i in t)
                n.d(r, i, function(e) {
                    return t[e]
                }
                .bind(null, i));
        return r
    }
    ,
    n.n = function(t) {
        var e = t && t.__esModule ? function() {
            return t.default
        }
        : function() {
            return t
        }
        ;
        return n.d(e, "a", e),
        e
    }
    ,
    n.o = function(t, e) {
        return Object.prototype.hasOwnProperty.call(t, e)
    }
    ,
    n.p = "/assets/compiled/js/",
    n(n.s = 1300)
}({
    1: function(t, e) {
        var n = t.exports = {
            version: "2.5.7"
        };
        "number" == typeof __e && (__e = n)
    },
    10: function(t, e, n) {
        var r = n(11);
        t.exports = function(t) {
            if (!r(t))
                throw TypeError(t + " is not an object!");
            return t
        }
    },
    100: function(t, e, n) {
        var r = n(8);
        r(r.S + r.F * !n(9), "Object", {
            defineProperty: n(7).f
        })
    },
    101: function(t, e, n) {
        "use strict";
        var r = n(102)
          , i = n(85)
          , o = n(17)
          , a = n(15);
        t.exports = n(45)(Array, "Array", function(t, e) {
            this._t = a(t),
            this._i = 0,
            this._k = e
        }, function() {
            var t = this._t
              , e = this._k
              , n = this._i++;
            return !t || n >= t.length ? (this._t = void 0,
            i(1)) : i(0, "keys" == e ? n : "values" == e ? t[n] : [n, t[n]])
        }, "values"),
        o.Arguments = o.Array,
        r("keys"),
        r("values"),
        r("entries")
    },
    102: function(t, e) {
        t.exports = function() {}
    },
    104: function(t, e, n) {
        "use strict";
        var r = n(41);
        t.exports.f = function(t) {
            return new function(t) {
                var e, n;
                this.promise = new t(function(t, r) {
                    if (void 0 !== e || void 0 !== n)
                        throw TypeError("Bad Promise constructor");
                    e = t,
                    n = r
                }
                ),
                this.resolve = r(e),
                this.reject = r(n)
            }
            (t)
        }
    },
    11: function(t, e) {
        t.exports = function(t) {
            return "object" == typeof t ? null !== t : "function" == typeof t
        }
    },
    116: function(t, e) {
        t.exports = function(t, e, n, r) {
            if (!(t instanceof e) || void 0 !== r && r in t)
                throw TypeError(n + ": incorrect invocation!");
            return t
        }
    },
    117: function(t, e, n) {
        var r = n(13);
        t.exports = function(t, e, n) {
            for (var i in e)
                n && t[i] ? t[i] = e[i] : r(t, i, e[i]);
            return t
        }
    },
    12: function(t, e) {
        var n = {}.hasOwnProperty;
        t.exports = function(t, e) {
            return n.call(t, e)
        }
    },
    121: function(t, e, n) {
        var r = n(8)
          , i = n(1)
          , o = n(19);
        t.exports = function(t, e) {
            var n = (i.Object || {})[t] || Object[t]
              , a = {};
            a[t] = e(n),
            r(r.S + r.F * o(function() {
                n(1)
            }), "Object", a)
        }
    },
    123: function(t, e, n) {
        var r = n(10)
          , i = n(41)
          , o = n(2)("species");
        t.exports = function(t, e) {
            var n, a = r(t).constructor;
            return void 0 === a || null == (n = r(a)[o]) ? e : i(n)
        }
    },
    124: function(t, e, n) {
        var r, i, o, a = n(20), u = n(147), c = n(63), s = n(42), f = n(5), l = f.process, d = f.setImmediate, p = f.clearImmediate, h = f.MessageChannel, v = f.Dispatch, y = 0, m = {}, x = function() {
            var t = +this;
            if (m.hasOwnProperty(t)) {
                var e = m[t];
                delete m[t],
                e()
            }
        }, g = function(t) {
            x.call(t.data)
        };
        d && p || (d = function(t) {
            for (var e = [], n = 1; arguments.length > n; )
                e.push(arguments[n++]);
            return m[++y] = function() {
                u("function" == typeof t ? t : Function(t), e)
            }
            ,
            r(y),
            y
        }
        ,
        p = function(t) {
            delete m[t]
        }
        ,
        "process" == n(25)(l) ? r = function(t) {
            l.nextTick(a(x, t, 1))
        }
        : v && v.now ? r = function(t) {
            v.now(a(x, t, 1))
        }
        : h ? (o = (i = new h).port2,
        i.port1.onmessage = g,
        r = a(o.postMessage, o, 1)) : f.addEventListener && "function" == typeof postMessage && !f.importScripts ? (r = function(t) {
            f.postMessage(t + "", "*")
        }
        ,
        f.addEventListener("message", g, !1)) : r = "onreadystatechange"in s("script") ? function(t) {
            c.appendChild(s("script")).onreadystatechange = function() {
                c.removeChild(this),
                x.call(t)
            }
        }
        : function(t) {
            setTimeout(a(x, t, 1), 0)
        }
        ),
        t.exports = {
            set: d,
            clear: p
        }
    },
    125: function(t, e) {
        t.exports = function(t) {
            try {
                return {
                    e: !1,
                    v: t()
                }
            } catch (t) {
                return {
                    e: !0,
                    v: t
                }
            }
        }
    },
    126: function(t, e, n) {
        var r = n(10)
          , i = n(11)
          , o = n(104);
        t.exports = function(t, e) {
            if (r(t),
            i(e) && e.constructor === t)
                return e;
            var n = o.f(t);
            return (0,
            n.resolve)(e),
            n.promise
        }
    },
    128: function(t, e, n) {
        n(129),
        t.exports = n(1).Object.assign
    },
    129: function(t, e, n) {
        var r = n(8);
        r(r.S + r.F, "Object", {
            assign: n(130)
        })
    },
    13: function(t, e, n) {
        var r = n(7)
          , i = n(18);
        t.exports = n(9) ? function(t, e, n) {
            return r.f(t, e, i(1, n))
        }
        : function(t, e, n) {
            return t[e] = n,
            t
        }
    },
    130: function(t, e, n) {
        "use strict";
        var r = n(22)
          , i = n(53)
          , o = n(35)
          , a = n(28)
          , u = n(51)
          , c = Object.assign;
        t.exports = !c || n(19)(function() {
            var t = {}
              , e = {}
              , n = Symbol()
              , r = "abcdefghijklmnopqrst";
            return t[n] = 7,
            r.split("").forEach(function(t) {
                e[t] = t
            }),
            7 != c({}, t)[n] || Object.keys(c({}, e)).join("") != r
        }) ? function(t, e) {
            for (var n = a(t), c = arguments.length, s = 1, f = i.f, l = o.f; c > s; )
                for (var d, p = u(arguments[s++]), h = f ? r(p).concat(f(p)) : r(p), v = h.length, y = 0; v > y; )
                    l.call(p, d = h[y++]) && (n[d] = p[d]);
            return n
        }
        : c
    },
    1300: function(t, e, n) {
        n(1340),
        t.exports = n(1302)
    },
    1301: function(t, e) {
        "grid"in document.body.style || Strut.load.css("newsroom/about/grid-fallback.css")
    },
    1302: function(t, e, n) {},
    131: function(t, e, n) {
        t.exports = {
            default: n(137),
            __esModule: !0
        }
    },
    132: function(t, e, n) {
        "use strict";
        var r = n(5)
          , i = n(1)
          , o = n(7)
          , a = n(9)
          , u = n(2)("species");
        t.exports = function(t) {
            var e = "function" == typeof i[t] ? i[t] : r[t];
            a && e && !e[u] && o.f(e, u, {
                configurable: !0,
                get: function() {
                    return this
                }
            })
        }
    },
    134: function(t, e, n) {
        t.exports = {
            default: n(135),
            __esModule: !0
        }
    },
    1340: function(t, e, n) {
        "use strict";
        n.r(e);
        var r = n(30)
          , i = n.n(r)
          , o = n(23)
          , a = n.n(o)
          , u = function(t) {
            return t.map(function(t) {
                return [Math.random(), t]
            }).sort(function(t, e) {
                return t[0] - e[0]
            }).map(function(t) {
                return t[1]
            })
        }
          , c = function(t) {
            return t[0]
        }
          , s = function(t) {
            return t < .5 ? 2 * t * t : (4 - 2 * t) * t - 1
        }
          , f = function(t, e, n) {
            var r = new IntersectionObserver(function(t) {
                i()(t, 1)[0].intersectionRatio < e || (n(),
                r.disconnect())
            }
            ,{
                threshold: e
            });
            r.observe(t)
        };
        Strut.ready(function() {
            Strut.queryArray(".collect-email-partial").forEach(function(t) {
                var e = t.querySelector("form.collect-form")
                  , n = t.querySelector(".collect-success")
                  , r = e.querySelector(".email-field")
                  , i = e.querySelector(".submit-button")
                  , o = Strut.queryArray(".collect-error", e)
                  , a = e.querySelector('input[name="csrf-token"]').value
                  , u = function(t) {
                    i.disabled = t,
                    e.style.display = t ? "none" : "block",
                    e.setAttribute("aria-hidden", t),
                    n.style.display = t ? "flex" : "none",
                    n.setAttribute("aria-hidden", !t)
                }
                  , s = function(t) {
                    var e = t.userError;
                    u(!1),
                    o.forEach(function(t) {
                        t.style.display = "none"
                    }),
                    i.disabled = !1;
                    var n = e ? "email" : "connection";
                    c(o.filter(function(t) {
                        return t.classList.contains(n)
                    })).style.display = "block",
                    r.focus()
                };
                r.addEventListener("focus", function(t) {
                    r.parentElement.classList.add("active")
                }),
                r.addEventListener("blur", function(t) {
                    r.parentElement.classList.remove("active")
                }),
                e.addEventListener("submit", function(t) {
                    t.preventDefault(),
                    r.value.length && r.checkValidity() ? (u(!0),
                    function() {
                        var t = new XMLHttpRequest;
                        t.open("POST", e.action, !0),
                        t.onreadystatechange = function() {
                            4 === t.readyState && t.status > 300 && s({
                                userError: !1
                            })
                        }
                        ,
                        t.timeout = 3e3,
                        t.onerror = function() {
                            s({
                                userError: !1
                            })
                        }
                        ,
                        t.setRequestHeader("x-stripe-csrf-token", a),
                        t.send(new FormData(e))
                    }()) : s({
                        userError: !0
                    })
                })
            })
        });
        n(1301);
        var l = n(43)
          , d = n.n(l)
          , p = n(16)
          , h = n.n(p)
          , v = n(4)
          , y = n.n(v)
          , m = n(3)
          , x = n.n(m)
          , g = function(t) {
            return .5 * (1 - Math.cos(t * Math.PI))
        }
          , b = void 0
          , _ = function() {
            function t(e) {
                y()(this, t),
                this.el = e.el,
                this.content = e.content,
                this.positions = e.bubblePositions,
                this.classPrefix = e.classPrefix,
                this.scrollSpeed = e.scrollSpeed,
                this.introDelay = e.introDelay,
                this.introDuration = e.introDuration,
                this.containerWidth = e.containerWidth,
                this.containerHeight = e.containerHeight,
                this.noiseSpeed = e.noiseSpeed,
                this.noiseScale = e.noiseScale,
                this.canInitialize = !1,
                this.playing = !1,
                this.scrollX = 0,
                this.noiseT = 0,
                this.vertShrink = 0,
                this.content = u(this.content.map(function(t, e) {
                    return h()({
                        index: e
                    }, t)
                })),
                this.firstTick = null,
                this.lastTick = 0,
                window.addEventListener("resize", this.updateVertShrink.bind(this)),
                window.addEventListener("scroll", this.updatePlayState.bind(this)),
                this.updatePlayState(),
                this.createBubbles()
            }
            return x()(t, [{
                key: "updateVertShrink",
                value: function() {
                    this.vertShrink = function(t, e, n) {
                        return (n - t) / (e - t)
                    }(1e3, 800, window.innerHeight),
                    this.vertShrink = function(t, e, n) {
                        return Math.max(Math.min(t, n), e)
                    }(this.vertShrink, 0, 1)
                }
            }, {
                key: "updatePlayState",
                value: function() {
                    if (this.canInitialize) {
                        var t = this.el.getBoundingClientRect();
                        (t.bottom < 0 || t.top > window.innerHeight) && !0 === this.playing ? this.playing = !1 : t.bottom > 0 && t.top < window.innerHeight && !1 === this.playing && (this.playing = !0,
                        requestAnimationFrame(this.tick.bind(this)))
                    }
                }
            }, {
                key: "createBubbles",
                value: function() {
                    var t = this;
                    this.positions.forEach(function(e, n) {
                        var r = n % t.content.length;
                        e.scale = e.s || 1,
                        e.seedX = 1e4 * Math.random(),
                        e.seedY = 1e4 * Math.random(),
                        e.noiseX = 0,
                        e.introDelay = Math.random() * t.introDelay,
                        e.introProgress = 0,
                            e.el = document.createElement("div"),
                            e.image = document.createElement("img"),
                            e.image.className = "hurdles-image",
                            e.image.src = t.content[r].src,
                            e.el.setAttribute("data-trigger", "hover"),
                            e.el.setAttribute("data-toggle", "popover"), 
                            e.el.setAttribute("data-placement", "top"), 
                            e.el.setAttribute("data-placement", "top"), 
                            e.el.setAttribute("title", t.content[r].title),
                            e.el.setAttribute("data-content", t.content[r].job),  
                            e.el.appendChild(e.image),
                            e.el.className = "" + t.classPrefix + t.content[r].index + " " + t.classPrefix,
                            t.render(e), 
                            t.el.appendChild(e.el)
                    })
                }
            }, {
                key: "render",
                value: function(t) {
                    var e = t.x + t.noiseX + this.scrollX;
                    e < -200 && (t.x += this.containerWidth);
                    var n = s(t.introProgress) / 20 + .95;
                    n *= t.scale,
                    t.el.style.opacity = s(t.introProgress),
                    t.el.style.transform = "translate(" + e + "px, " + t.y + "px) scale(" + n + ")"
                }
            }, {
                key: "tick",
                value: function(t) {
                    var e = this;
                    this.firstTick || (this.firstTick = t);
                    var n = t - this.firstTick
                      , r = n - this.lastTick;
                    this.lastTick = n,
                    this.noiseT += r * this.noiseSpeed,
                    this.scrollX -= r * this.scrollSpeed,
                    this.positions.forEach(function(t) {
                        t.noiseX = function(t) {
                            if (null == b) {
                                b = new Array(4096);
                                for (var e = 0; e < 4096; e++)
                                    b[e] = Math.random()
                            }
                            t < 0 && (t = -t);
                            for (var n = Math.floor(t), r = t - n, i = void 0, o = 0, a = .5, u = void 0, c = 0; c < 4; c++)
                                i = g(r),
                                u = b[4095 & n],
                                o += (u += i * (b[n + 1 & 4095] - u)) * a,
                                a *= .5,
                                n <<= 1,
                                (r *= 2) >= 1 && (n++,
                                r--);
                            return o
                        }(t.seedX + e.noiseT) * e.noiseScale - e.noiseScale / 2,
                        t.introProgress < 1 && n > t.introDelay && (t.introProgress = Math.min(1, t.introProgress + r / e.introDuration)),
                        e.render(t)
                    }),
                    this.playing && requestAnimationFrame(this.tick.bind(this))
                }
            }]),
            t
        }()
          , S = function() {
            function t(e) {
                var n = e.merchant
                  , r = e.stripe
                  , i = e.mask
                  , o = e.arrows;
                y()(this, t),
                this.merchant = n,
                this.stripe = r,
                this.mask = i,
                this.isProtected = !1,
                this.arrows = o
            }
            return x()(t, [{
                key: "setProtected",
                value: function() {
                    var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : void 0;
                    this.isProtected = t || !this.isProtected,
                    this.isProtected ? this.protect() : this.release()
                }
            }, {
                key: "merchantOffset",
                value: function() {
                    return window.innerWidth < 600 ? 120 : 250
                }
            }, {
                key: "protect",
                value: function() {
                    var t = this;
                    animate({
                        elements: this.mask,
                        duration: 450,
                        easing: "linear",
                        opacity: [0, 1]
                    }),
                    this.merchant.classList.add("mask-out"),
                    animate({
                        elements: this.merchant,
                        duration: 1200,
                        delay: 600,
                        easing: "out-elastic 0.9 1.1",
                        transform: ["translateX(0px) scale(1.0)", "translateX(-" + this.merchantOffset() + "px) scale(0.8)"]
                    }),
                    delay(1300).then(function() {
                        return t.merchant.classList.add("moved")
                    }),
                    delay(1100).then(function() {
                        t.animateArrows(),
                        t.merchant.classList.add("animating")
                    }),
                    animate({
                        elements: this.stripe,
                        duration: 800,
                        delay: 1e3,
                        easing: "out-elastic 0.2 0.7",
                        opacity: [0, 1],
                        transform: ["scale(0.75)", 1]
                    })
                }
            }, {
                key: "release",
                value: function() {
                    this.merchant.classList.remove("moved"),
                    animate({
                        elements: this.stripe,
                        duration: 400,
                        easing: "in-cubic",
                        transform: ["scale(1.0)", .75]
                    }),
                    animate({
                        elements: this.merchant,
                        duration: 300,
                        delay: 100,
                        easing: "out-cubic",
                        transform: ["translateX(-" + this.merchantOffset() + "px) scale(0.8)", "translateX(0) scale(1)"]
                    }),
                    animate({
                        elements: this.mask,
                        duration: 300,
                        delay: 300,
                        easing: "in-cubic",
                        opacity: [1, 0]
                    })
                }
            }, {
                key: "animateArrows",
                value: function() {
                    var t = this
                      , e = function t(e, n) {
                        var r = n.reversed ? 45 : -45
                          , i = n.reversed ? -45 : 45;
                        d.a.all([animate({
                            duration: 1e3,
                            easing: "out-cubic",
                            delay: n.delay,
                            elements: e,
                            transform: ["translateX(" + r + "px)", 0]
                        }), animate({
                            duration: 1e3,
                            easing: "out-circular",
                            delay: n.delay,
                            elements: e,
                            opacity: [0, 1]
                        })]).then(function() {
                            return d.a.all([animate({
                                duration: 1e3,
                                easing: "in-cubic",
                                elements: e,
                                transform: ["translateX(0px)", i]
                            }), animate({
                                duration: 1e3,
                                easing: "in-circular",
                                elements: e,
                                opacity: [1, 0]
                            })])
                        }).then(function() {
                            return delay(800)
                        }).then(function() {
                            return requestAnimationFrame(function() {
                                return t(e, h()({}, n, {
                                    delay: 0
                                }))
                            })
                        })
                    };
                    requestAnimationFrame(function() {
                        e(t.arrows[0], {
                            reversed: !1,
                            delay: 0
                        }),
                        e(t.arrows[1], {
                            reversed: !0,
                            delay: 1e3
                        })
                    })
                }
            }]),
            t
        }()
          , w = n(38)
          , P = n.n(w)
          , k = n(98)
          , O = n.n(k)
          , j = n(72)
          , M = n.n(j)
          , A = function(t) {
            var e = t.querySelectorAll("clipPath rect")
              , n = Array(e.length).fill(0).reduce(function(t, e, n) {
                return h()({}, t, M()({}, n, {
                    total: 2e3
                }))
            }, {});
            e.forEach(function(t, e) {
                var r = function r(i) {
                    n[e].start || (n[e].start = i),
                    n[e].elapsed = i - n[e].start;
                    var o = function(t) {
                        return 1 - Math.pow(t - 1, 4)
                    }(function(t) {
                        var e = t.elapsed
                          , n = t.total;
                        return Math.min(e / n, 1)
                    }(n[e]));
                    t.setAttribute("width", o * E),
                    o < 1 && requestAnimationFrame(r)
                };
                delay(600 * e).then(function() {
                    return requestAnimationFrame(r)
                })
            })
        }
          , T = Strut.queryArray(".chart")
          , C = function(t, e) {
            var n = e.from;
            return (t - n) / (e.to - n)
        }
          , q = function() {
            var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "svg"
              , e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
            return O()(e).reduce(function(t, e) {
                var n = i()(e, 2)
                  , r = n[0]
                  , o = n[1];
                return t.setAttribute(r, o),
                t
            }, document.createElementNS("http://www.w3.org/2000/svg", t))
        }
          , F = function(t, e) {
            var n = q()
              , r = q("defs")
              , o = q("clipPath", {
                class: "chart-reveal-clip",
                id: "chart-clip-1"
            })
              , u = q("clipPath", {
                class: "chart-reveal-clip",
                id: "chart-clip-2"
            })
              , c = q("g", {
                "clip-path": "url(#chart-clip-1)"
            })
              , s = q("g", {
                "clip-path": "url(#chart-clip-2)"
            });
            return o.appendChild(q("rect", {
                height: L
            })),
            u.appendChild(q("rect", {
                height: L
            })),
            r.appendChild(o),
            r.appendChild(u),
            n.appendChild(r),
            n.appendChild(c),
            n.appendChild(s),
            O()(e).forEach(function(t) {
                var e = i()(t, 2)
                  , r = e[0]
                  , o = e[1];
                return function(t, e) {
                    return Array.apply(void 0, a()(Array(t))).map(Number.prototype.valueOf, 0).map(function(t, n) {
                        return e(n)
                    })
                }(o.tracks, function(t) {
                    !function(t, e, n, r) {
                        var i = n.tracks;
                        if (r)
                            if ("x" === e) {
                                var o = E / i * r
                                  , a = q("line", {
                                    x1: o,
                                    x2: o,
                                    y2: L
                                });
                                t.appendChild(a)
                            } else {
                                if (r % 2 < 1)
                                    return;
                                var u = L / i
                                  , c = q("rect", {
                                    width: E,
                                    height: u,
                                    y: u * r
                                });
                                t.insertBefore(c, t.firstChild)
                            }
                    }(n, r, o, t),
                    function(t, e, n, r) {
                        var i = n.from
                          , o = n.to
                          , a = n.tracks
                          , u = n.transformFn
                          , c = {};
                        "x" === e ? (c.x = E / a * (r + 1) - 5,
                        c.y = L + 20,
                        c["text-anchor"] = "end") : (c.x = Strut.isMobileViewport ? 8 : 5,
                        c.y = L - (L / a * (r + 1) - 16));
                        var s = q("text", c)
                          , f = (o - i) / a
                          , l = i + f + f * r;
                        s.textContent = u ? u(l) : l,
                        t.appendChild(s)
                    }(n, r, o, t)
                })
            }),
            t.appendChild(n),
            {
                groupFirst: c,
                groupSecond: s
            }
        }
          , R = function(t, e, n, r) {
            var i, o = n.map(function(t) {
                var n = t.x
                  , r = t.y;
                return {
                    x: C(n, e.x) * E,
                    y: L - C(r, e.y) * L
                }
            }), a = q("polyline", {
                points: o.map(function(t) {
                    return t.x + "," + t.y
                }).join(" ")
            }), u = [r];
            return (i = a.classList).add.apply(i, u),
            t.appendChild(a),
            o
        }
          , I = function(t, e, n, r) {
            var i, o = n.map(function(t) {
                var n = t.x
                  , r = t.y;
                return {
                    x: C(n, e.x) * E,
                    y: L - C(r, e.y) * L
                }
            });
            o = [].concat(a()(o), [{
                x: E,
                y: L
            }, {
                x: 0,
                y: L
            }, {
                x: 0,
                y: o[0].y
            }]);
            var u = q("polygon", {
                points: o.map(function(t) {
                    return t.x + "," + t.y
                }).join(" ")
            })
              , c = [r];
            return (i = u.classList).add.apply(i, c),
            t.appendChild(u),
            o
        }
          , D = {
            gdp: {
                date: [2012, 2013, 2014, 2015, 2016, 2017, 2018],
                values: [74535, 76596, 78663, 74429, 75485, 79865, 87504]
            },
            ecommerce: {
                date: [2012, 2013, 2014, 2015, 2016, 2017, 2018],
                values: [1267, 1302, 1337, 1550, 1847, 2321, 2947]
            }
        };
        Strut.ready(function() {
            var t = function() {
                !function(t, e) {
                    var n = F(t, e)
                      , r = n.groupFirst
                      , i = n.groupSecond
                      , o = D
                      , a = o.gdp
                      , u = o.ecommerce
                      , c = a[P()(a).find(function(t) {
                        return "date" !== t
                    })].map(function(t, e) {
                        return {
                            x: a.date[e],
                            y: t
                        }
                    })
                      , s = u[P()(u).find(function(t) {
                        return "date" !== t
                    })].map(function(t, e) {
                        return {
                            x: u.date[e],
                            y: t
                        }
                    });
                    I(r, e, c, "gdp"),
                    I(i, e, s, "ecommerce"),
                    R(r, e, c, "gdp"),
                    R(i, e, s, "ecommerce")
                }(c(T), {
                    x: {
                        from: 2012,
                        to: 2018,
                        tracks: 6
                    },
                    y: {
                        from: 0,
                        to: 1e5,
                        tracks: 4,
                        transformFn: function(t) {
                            return "$" + t / 1e3 + "T"
                        }
                    }
                })
            }
              , e = 0;
            !function n() {
                E = c(T).getBoundingClientRect().width,
                (L = c(T).getBoundingClientRect().height) > 0 ? t() : (e += 1) < 10 && delay(200).then(function() {
                    return n()
                })
            }()
        });



        var X = [{
            x: 1134,
            y: 45
        }, {
            x: 1620,
            y: 271
        }, {
            x: 980,
            y: 155
        }, {
            x: 1761,
            y: 372
        }, {
            x: 2790,
            y: 387
        }, {
            x: 2539,
            y: 79
        }, {
            x: 2670,
            y: 314
        }, {
            x: 1240,
            y: 286
        }, {
            x: 2271,
            y: 327
        }, {
            x: 795,
            y: 226
        }, {
            x: 276,
            y: 256
        }, {
            x: 700,
            y: 20
        }, {
            x: 1210,
            y: 365
        }, {
            x: 424,
            y: 183
        }, {
            x: 2545,
            y: 387
        }, {
            x: 1303,
            y: 183
        }, {
            x: 907,
            y: 88
        }, {
            x: 633,
            y: 320
        }, {
            x: 2100,
            y: 258
        }, {
            x: 323,
            y: 60
        }, {
            x: 1500,
            y: 206
        }, {
            x: 129,
            y: 357
        }, {
            x: 160,
            y: 160
        }, {
            x: 40,
            y: 220
        }, {
            x: 1929,
            y: 313
        }, {
            x: 2135,
            y: 198
        }, {
            x: 2020,
            y: 148
        }, {
            x: 2276,
            y: 82
        }, {
            x: 2654,
            y: 182
        }, {
            x: 960,
            y: 305
        }, {
            x: 2783,
            y: 60
        }, {
            x: 2811,
            y: 118
        }, {
            x: 1519,
            y: 118
        }, {
            x: 2310,
            y: 148
        }, {
            x: 1071,
            y: 233
        }, {
            x: 1250,
            y: 97
        }, {
            x: 1773,
            y: 148
        }, {
            x: 1500,
            y: 30
        }, {
            x: 2098,
            y: 385
        }, {
            x: 2600,
            y: 8
        }, {
            x: 2423,
            y: 244
        }, {
            x: 1900,
            y: 20
        }, {
            x: 901,
            y: 385
        }, {
            x: 1810,
            y: 206
        }, {
            x: 624,
            y: 111
        }, {
            x: 1690,
            y: 70
        }, {
            x: 75,
            y: 103
        }, {
            x: 2200,
            y: 20
        }, {
            x: 413,
            y: 367
        }, {
            x: 520,
            y: 256
        }, {
            x: 2895,
            y: 271
        }, {
            x: 1990,
            y: 75
        }]
          , B = [];
        "IntersectionObserver"in window || (document.documentElement.style.overflow = "visible",
        B.unshift("external/intersection-observer-polyfill"));
        var H = document.querySelector(".js-hurdles")
          , N = function(t) {
            var e = document.getElementById("site-about-config");
            return JSON.parse(e.textContent || e.innerHTML)[t]
        }("bubbleNodes")
          , V = Strut.queryArray(".js-diagram")
          , W = Strut.queryArray(".js-diagram-explanation")
          , G = document.querySelector(".chart");
        [].concat(a()(V), a()(W)).forEach(function(t) {
            t.style.opacity = 0
        });
        var z = new _({
            el: H.querySelector(".hurdles-bubbles"),
            content: N.map(function(t) {
                return h()({}, t, {
                    title: t.title.replace("&amp;", "&"),
                    src: t.src,
                    job: t.job
                })
            }),
            bubblePositions: X,
            classPrefix: "hurdles-node hurdles-node",
            containerWidth: 3e3,
            containerHeight: 450,
            noiseSpeed: 55e-6,
            noiseScale: 80,
            scrollSpeed: .0195,
            introDelay: 0,
            introDuration: 1e3
        })
          , U = new S({
            merchant: H.querySelector(".hurdles-stakeholder--merchant"),
            stripe: H.querySelector(".hurdles-stakeholder--stripe"),
            mask: H.querySelector(".hurdles-mask"),
            arrows: H.querySelectorAll(".hurdles-stakeholder-arrows .arrow")
        });
        Strut.ready(function() {
            var t = B.map(function(t) {
                return new d.a(function(e, n) {
                    Strut.load.js("v3/" + t + ".js", function() {
                        e()
                    })
                }
                )
            });
            d.a.all(t).then(function() {
                f(H, .15, function() {
                    z.canInitialize = !0,
                    z.updatePlayState()
                }),
                f(H, .6, function() {
                    delay(1e3).then(function() {
                        return U.setProtected(!0)
                    })
                }),
                f(G, 1, function() {
                    A(G)
                }),
                f(document.querySelector(".platform-diagram"), .25, function() {
                    return animate({
                        elements: V.reverse(),
                        duration: 1e3,
                        easing: "out-cubic",
                        opacity: [0, 1],
                        transform: ["translateX(-60px)", 0],
                        delay: function(t) {
                            return 200 * t
                        }
                    }) && animate({
                        elements: W.reverse(),
                        duration: 1e3,
                        easing: "out-cubic",
                        opacity: [0, 1],
                        transform: ["translateX(60px)", 0],
                        delay: function(t) {
                            return 100 + 200 * t
                        }
                    })
                })
            })
        })
    },
    135: function(t, e, n) {
        n(44),
        n(29),
        t.exports = n(136)
    },
    136: function(t, e, n) {
        var r = n(47)
          , i = n(2)("iterator")
          , o = n(17);
        t.exports = n(1).isIterable = function(t) {
            var e = Object(t);
            return void 0 !== e[i] || "@@iterator"in e || o.hasOwnProperty(r(e))
        }
    },
    137: function(t, e, n) {
        n(44),
        n(29),
        t.exports = n(138)
    },
    138: function(t, e, n) {
        var r = n(10)
          , i = n(52);
        t.exports = n(1).getIterator = function(t) {
            var e = i(t);
            if ("function" != typeof e)
                throw TypeError(t + " is not iterable!");
            return r(e.call(t))
        }
    },
    139: function(t, e, n) {
        n(140),
        t.exports = n(1).Object.keys
    },
    140: function(t, e, n) {
        var r = n(28)
          , i = n(22);
        n(121)("keys", function() {
            return function(t) {
                return i(r(t))
            }
        })
    },
    145: function(t, e, n) {
        n(71),
        n(29),
        n(44),
        n(146),
        n(150),
        n(151),
        t.exports = n(1).Promise
    },
    146: function(t, e, n) {
        "use strict";
        var r, i, o, a, u = n(21), c = n(5), s = n(20), f = n(47), l = n(8), d = n(11), p = n(41), h = n(116), v = n(95), y = n(123), m = n(124).set, x = n(148)(), g = n(104), b = n(125), _ = n(149), S = n(126), w = c.TypeError, P = c.process, k = P && P.versions, O = k && k.v8 || "", j = c.Promise, M = "process" == f(P), A = function() {}, T = i = g.f, E = !!function() {
            try {
                var t = j.resolve(1)
                  , e = (t.constructor = {})[n(2)("species")] = function(t) {
                    t(A, A)
                }
                ;
                return (M || "function" == typeof PromiseRejectionEvent) && t.then(A)instanceof e && 0 !== O.indexOf("6.6") && -1 === _.indexOf("Chrome/66")
            } catch (t) {}
        }(), L = function(t) {
            var e;
            return !(!d(t) || "function" != typeof (e = t.then)) && e
        }, C = function(t, e) {
            if (!t._n) {
                t._n = !0;
                var n = t._c;
                x(function() {
                    for (var r = t._v, i = 1 == t._s, o = 0, a = function(e) {
                        var n, o, a, u = i ? e.ok : e.fail, c = e.resolve, s = e.reject, f = e.domain;
                        try {
                            u ? (i || (2 == t._h && R(t),
                            t._h = 1),
                            !0 === u ? n = r : (f && f.enter(),
                            n = u(r),
                            f && (f.exit(),
                            a = !0)),
                            n === e.promise ? s(w("Promise-chain cycle")) : (o = L(n)) ? o.call(n, c, s) : c(n)) : s(r)
                        } catch (t) {
                            f && !a && f.exit(),
                            s(t)
                        }
                    }; n.length > o; )
                        a(n[o++]);
                    t._c = [],
                    t._n = !1,
                    e && !t._h && q(t)
                })
            }
        }, q = function(t) {
            m.call(c, function() {
                var e, n, r, i = t._v, o = F(t);
                if (o && (e = b(function() {
                    M ? P.emit("unhandledRejection", i, t) : (n = c.onunhandledrejection) ? n({
                        promise: t,
                        reason: i
                    }) : (r = c.console) && r.error && r.error("Unhandled promise rejection", i)
                }),
                t._h = M || F(t) ? 2 : 1),
                t._a = void 0,
                o && e.e)
                    throw e.v
            })
        }, F = function(t) {
            return 1 !== t._h && 0 === (t._a || t._c).length
        }, R = function(t) {
            m.call(c, function() {
                var e;
                M ? P.emit("rejectionHandled", t) : (e = c.onrejectionhandled) && e({
                    promise: t,
                    reason: t._v
                })
            })
        }, I = function(t) {
            var e = this;
            e._d || (e._d = !0,
            (e = e._w || e)._v = t,
            e._s = 2,
            e._a || (e._a = e._c.slice()),
            C(e, !0))
        }, D = function(t) {
            var e, n = this;
            if (!n._d) {
                n._d = !0,
                n = n._w || n;
                try {
                    if (n === t)
                        throw w("Promise can't be resolved itself");
                    (e = L(t)) ? x(function() {
                        var r = {
                            _w: n,
                            _d: !1
                        };
                        try {
                            e.call(t, s(D, r, 1), s(I, r, 1))
                        } catch (t) {
                            I.call(r, t)
                        }
                    }) : (n._v = t,
                    n._s = 1,
                    C(n, !1))
                } catch (t) {
                    I.call({
                        _w: n,
                        _d: !1
                    }, t)
                }
            }
        };
        E || (j = function(t) {
            h(this, j, "Promise", "_h"),
            p(t),
            r.call(this);
            try {
                t(s(D, this, 1), s(I, this, 1))
            } catch (t) {
                I.call(this, t)
            }
        }
        ,
        (r = function(t) {
            this._c = [],
            this._a = void 0,
            this._s = 0,
            this._d = !1,
            this._v = void 0,
            this._h = 0,
            this._n = !1
        }
        ).prototype = n(117)(j.prototype, {
            then: function(t, e) {
                var n = T(y(this, j));
                return n.ok = "function" != typeof t || t,
                n.fail = "function" == typeof e && e,
                n.domain = M ? P.domain : void 0,
                this._c.push(n),
                this._a && this._a.push(n),
                this._s && C(this, !1),
                n.promise
            },
            catch: function(t) {
                return this.then(void 0, t)
            }
        }),
        o = function() {
            var t = new r;
            this.promise = t,
            this.resolve = s(D, t, 1),
            this.reject = s(I, t, 1)
        }
        ,
        g.f = T = function(t) {
            return t === j || t === a ? new o(t) : i(t)
        }
        ),
        l(l.G + l.W + l.F * !E, {
            Promise: j
        }),
        n(27)(j, "Promise"),
        n(132)("Promise"),
        a = n(1).Promise,
        l(l.S + l.F * !E, "Promise", {
            reject: function(t) {
                var e = T(this);
                return (0,
                e.reject)(t),
                e.promise
            }
        }),
        l(l.S + l.F * (u || !E), "Promise", {
            resolve: function(t) {
                return S(u && this === a ? j : this, t)
            }
        }),
        l(l.S + l.F * !(E && n(66)(function(t) {
            j.all(t).catch(A)
        })), "Promise", {
            all: function(t) {
                var e = this
                  , n = T(e)
                  , r = n.resolve
                  , i = n.reject
                  , o = b(function() {
                    var n = []
                      , o = 0
                      , a = 1;
                    v(t, !1, function(t) {
                        var u = o++
                          , c = !1;
                        n.push(void 0),
                        a++,
                        e.resolve(t).then(function(t) {
                            c || (c = !0,
                            n[u] = t,
                            --a || r(n))
                        }, i)
                    }),
                    --a || r(n)
                });
                return o.e && i(o.v),
                n.promise
            },
            race: function(t) {
                var e = this
                  , n = T(e)
                  , r = n.reject
                  , i = b(function() {
                    v(t, !1, function(t) {
                        e.resolve(t).then(n.resolve, r)
                    })
                });
                return i.e && r(i.v),
                n.promise
            }
        })
    },
    147: function(t, e) {
        t.exports = function(t, e, n) {
            var r = void 0 === n;
            switch (e.length) {
            case 0:
                return r ? t() : t.call(n);
            case 1:
                return r ? t(e[0]) : t.call(n, e[0]);
            case 2:
                return r ? t(e[0], e[1]) : t.call(n, e[0], e[1]);
            case 3:
                return r ? t(e[0], e[1], e[2]) : t.call(n, e[0], e[1], e[2]);
            case 4:
                return r ? t(e[0], e[1], e[2], e[3]) : t.call(n, e[0], e[1], e[2], e[3])
            }
            return t.apply(n, e)
        }
    },
    148: function(t, e, n) {
        var r = n(5)
          , i = n(124).set
          , o = r.MutationObserver || r.WebKitMutationObserver
          , a = r.process
          , u = r.Promise
          , c = "process" == n(25)(a);
        t.exports = function() {
            var t, e, n, s = function() {
                var r, i;
                for (c && (r = a.domain) && r.exit(); t; ) {
                    i = t.fn,
                    t = t.next;
                    try {
                        i()
                    } catch (r) {
                        throw t ? n() : e = void 0,
                        r
                    }
                }
                e = void 0,
                r && r.enter()
            };
            if (c)
                n = function() {
                    a.nextTick(s)
                }
                ;
            else if (!o || r.navigator && r.navigator.standalone)
                if (u && u.resolve) {
                    var f = u.resolve(void 0);
                    n = function() {
                        f.then(s)
                    }
                } else
                    n = function() {
                        i.call(r, s)
                    }
                    ;
            else {
                var l = !0
                  , d = document.createTextNode("");
                new o(s).observe(d, {
                    characterData: !0
                }),
                n = function() {
                    d.data = l = !l
                }
            }
            return function(r) {
                var i = {
                    fn: r,
                    next: void 0
                };
                e && (e.next = i),
                t || (t = i,
                n()),
                e = i
            }
        }
    },
    149: function(t, e, n) {
        var r = n(5).navigator;
        t.exports = r && r.userAgent || ""
    },
    15: function(t, e, n) {
        var r = n(51)
          , i = n(32);
        t.exports = function(t) {
            return r(i(t))
        }
    },
    150: function(t, e, n) {
        "use strict";
        var r = n(8)
          , i = n(1)
          , o = n(5)
          , a = n(123)
          , u = n(126);
        r(r.P + r.R, "Promise", {
            finally: function(t) {
                var e = a(this, i.Promise || o.Promise)
                  , n = "function" == typeof t;
                return this.then(n ? function(n) {
                    return u(e, t()).then(function() {
                        return n
                    })
                }
                : t, n ? function(n) {
                    return u(e, t()).then(function() {
                        throw n
                    })
                }
                : t)
            }
        })
    },
    151: function(t, e, n) {
        "use strict";
        var r = n(8)
          , i = n(104)
          , o = n(125);
        r(r.S, "Promise", {
            try: function(t) {
                var e = i.f(this)
                  , n = o(t);
                return (n.e ? e.reject : e.resolve)(n.v),
                e.promise
            }
        })
    },
    152: function(t, e, n) {
        var r = n(22)
          , i = n(15)
          , o = n(35).f;
        t.exports = function(t) {
            return function(e) {
                for (var n, a = i(e), u = r(a), c = u.length, s = 0, f = []; c > s; )
                    o.call(a, n = u[s++]) && f.push(t ? [n, a[n]] : a[n]);
                return f
            }
        }
    },
    154: function(t, e, n) {
        n(155),
        t.exports = n(1).Object.entries
    },
    155: function(t, e, n) {
        var r = n(8)
          , i = n(152)(!0);
        r(r.S, "Object", {
            entries: function(t) {
                return i(t)
            }
        })
    },
    16: function(t, e, n) {
        "use strict";
        e.__esModule = !0;
        var r = function(t) {
            return t && t.__esModule ? t : {
                default: t
            }
        }(n(96));
        e.default = r.default || function(t) {
            for (var e = 1; e < arguments.length; e++) {
                var n = arguments[e];
                for (var r in n)
                    Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r])
            }
            return t
        }
    },
    17: function(t, e) {
        t.exports = {}
    },
    18: function(t, e) {
        t.exports = function(t, e) {
            return {
                enumerable: !(1 & t),
                configurable: !(2 & t),
                writable: !(4 & t),
                value: e
            }
        }
    },
    19: function(t, e) {
        t.exports = function(t) {
            try {
                return !!t()
            } catch (t) {
                return !0
            }
        }
    },
    2: function(t, e, n) {
        var r = n(36)("wks")
          , i = n(26)
          , o = n(5).Symbol
          , a = "function" == typeof o;
        (t.exports = function(t) {
            return r[t] || (r[t] = a && o[t] || (a ? o : i)("Symbol." + t))
        }
        ).store = r
    },
    20: function(t, e, n) {
        var r = n(41);
        t.exports = function(t, e, n) {
            if (r(t),
            void 0 === e)
                return t;
            switch (n) {
            case 1:
                return function(n) {
                    return t.call(e, n)
                }
                ;
            case 2:
                return function(n, r) {
                    return t.call(e, n, r)
                }
                ;
            case 3:
                return function(n, r, i) {
                    return t.call(e, n, r, i)
                }
            }
            return function() {
                return t.apply(e, arguments)
            }
        }
    },
    21: function(t, e) {
        t.exports = !0
    },
    22: function(t, e, n) {
        var r = n(57)
          , i = n(37);
        t.exports = Object.keys || function(t) {
            return r(t, i)
        }
    },
    23: function(t, e, n) {
        "use strict";
        e.__esModule = !0;
        var r = function(t) {
            return t && t.__esModule ? t : {
                default: t
            }
        }(n(24));
        e.default = function(t) {
            if (Array.isArray(t)) {
                for (var e = 0, n = Array(t.length); e < t.length; e++)
                    n[e] = t[e];
                return n
            }
            return (0,
            r.default)(t)
        }
    },
    24: function(t, e, n) {
        t.exports = {
            default: n(89),
            __esModule: !0
        }
    },
    25: function(t, e) {
        var n = {}.toString;
        t.exports = function(t) {
            return n.call(t).slice(8, -1)
        }
    },
    26: function(t, e) {
        var n = 0
          , r = Math.random();
        t.exports = function(t) {
            return "Symbol(".concat(void 0 === t ? "" : t, ")_", (++n + r).toString(36))
        }
    },
    27: function(t, e, n) {
        var r = n(7).f
          , i = n(12)
          , o = n(2)("toStringTag");
        t.exports = function(t, e, n) {
            t && !i(t = n ? t : t.prototype, o) && r(t, o, {
                configurable: !0,
                value: e
            })
        }
    },
    28: function(t, e, n) {
        var r = n(32);
        t.exports = function(t) {
            return Object(r(t))
        }
    },
    29: function(t, e, n) {
        "use strict";
        var r = n(79)(!0);
        n(45)(String, "String", function(t) {
            this._t = String(t),
            this._i = 0
        }, function() {
            var t, e = this._t, n = this._i;
            return n >= e.length ? {
                value: void 0,
                done: !0
            } : (t = r(e, n),
            this._i += t.length,
            {
                value: t,
                done: !1
            })
        })
    },
    3: function(t, e, n) {
        "use strict";
        e.__esModule = !0;
        var r = function(t) {
            return t && t.__esModule ? t : {
                default: t
            }
        }(n(84));
        e.default = function() {
            function t(t, e) {
                for (var n = 0; n < e.length; n++) {
                    var i = e[n];
                    i.enumerable = i.enumerable || !1,
                    i.configurable = !0,
                    "value"in i && (i.writable = !0),
                    (0,
                    r.default)(t, i.key, i)
                }
            }
            return function(e, n, r) {
                return n && t(e.prototype, n),
                r && t(e, r),
                e
            }
        }()
    },
    30: function(t, e, n) {
        "use strict";
        e.__esModule = !0;
        var r = o(n(134))
          , i = o(n(131));
        function o(t) {
            return t && t.__esModule ? t : {
                default: t
            }
        }
        e.default = function() {
            return function(t, e) {
                if (Array.isArray(t))
                    return t;
                if ((0,
                r.default)(Object(t)))
                    return function(t, e) {
                        var n = []
                          , r = !0
                          , o = !1
                          , a = void 0;
                        try {
                            for (var u, c = (0,
                            i.default)(t); !(r = (u = c.next()).done) && (n.push(u.value),
                            !e || n.length !== e); r = !0)
                                ;
                        } catch (t) {
                            o = !0,
                            a = t
                        } finally {
                            try {
                                !r && c.return && c.return()
                            } finally {
                                if (o)
                                    throw a
                            }
                        }
                        return n
                    }(t, e);
                throw new TypeError("Invalid attempt to destructure non-iterable instance")
            }
        }()
    },
    31: function(t, e) {
        var n = Math.ceil
          , r = Math.floor;
        t.exports = function(t) {
            return isNaN(t = +t) ? 0 : (t > 0 ? r : n)(t)
        }
    },
    32: function(t, e) {
        t.exports = function(t) {
            if (null == t)
                throw TypeError("Can't call method on  " + t);
            return t
        }
    },
    33: function(t, e, n) {
        var r = n(36)("keys")
          , i = n(26);
        t.exports = function(t) {
            return r[t] || (r[t] = i(t))
        }
    },
    35: function(t, e) {
        e.f = {}.propertyIsEnumerable
    },
    36: function(t, e, n) {
        var r = n(1)
          , i = n(5)
          , o = i["__core-js_shared__"] || (i["__core-js_shared__"] = {});
        (t.exports = function(t, e) {
            return o[t] || (o[t] = void 0 !== e ? e : {})
        }
        )("versions", []).push({
            version: r.version,
            mode: n(21) ? "pure" : "global",
            copyright: "© 2018 Denis Pushkarev (zloirock.ru)"
        })
    },
    37: function(t, e) {
        t.exports = "constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",")
    },
    38: function(t, e, n) {
        t.exports = {
            default: n(139),
            __esModule: !0
        }
    },
    39: function(t, e, n) {
        var r = n(31)
          , i = Math.min;
        t.exports = function(t) {
            return t > 0 ? i(r(t), 9007199254740991) : 0
        }
    },
    4: function(t, e, n) {
        "use strict";
        e.__esModule = !0,
        e.default = function(t, e) {
            if (!(t instanceof e))
                throw new TypeError("Cannot call a class as a function")
        }
    },
    40: function(t, e, n) {
        var r = n(11);
        t.exports = function(t, e) {
            if (!r(t))
                return t;
            var n, i;
            if (e && "function" == typeof (n = t.toString) && !r(i = n.call(t)))
                return i;
            if ("function" == typeof (n = t.valueOf) && !r(i = n.call(t)))
                return i;
            if (!e && "function" == typeof (n = t.toString) && !r(i = n.call(t)))
                return i;
            throw TypeError("Can't convert object to primitive value")
        }
    },
    41: function(t, e) {
        t.exports = function(t) {
            if ("function" != typeof t)
                throw TypeError(t + " is not a function!");
            return t
        }
    },
    42: function(t, e, n) {
        var r = n(11)
          , i = n(5).document
          , o = r(i) && r(i.createElement);
        t.exports = function(t) {
            return o ? i.createElement(t) : {}
        }
    },
    43: function(t, e, n) {
        t.exports = {
            default: n(145),
            __esModule: !0
        }
    },
    44: function(t, e, n) {
        n(101);
        for (var r = n(5), i = n(13), o = n(17), a = n(2)("toStringTag"), u = "CSSRuleList,CSSStyleDeclaration,CSSValueList,ClientRectList,DOMRectList,DOMStringList,DOMTokenList,DataTransferItemList,FileList,HTMLAllCollection,HTMLCollection,HTMLFormElement,HTMLSelectElement,MediaList,MimeTypeArray,NamedNodeMap,NodeList,PaintRequestList,Plugin,PluginArray,SVGLengthList,SVGNumberList,SVGPathSegList,SVGPointList,SVGStringList,SVGTransformList,SourceBufferList,StyleSheetList,TextTrackCueList,TextTrackList,TouchList".split(","), c = 0; c < u.length; c++) {
            var s = u[c]
              , f = r[s]
              , l = f && f.prototype;
            l && !l[a] && i(l, a, s),
            o[s] = o.Array
        }
    },
    45: function(t, e, n) {
        "use strict";
        var r = n(21)
          , i = n(8)
          , o = n(56)
          , a = n(13)
          , u = n(17)
          , c = n(80)
          , s = n(27)
          , f = n(58)
          , l = n(2)("iterator")
          , d = !([].keys && "next"in [].keys())
          , p = function() {
            return this
        };
        t.exports = function(t, e, n, h, v, y, m) {
            c(n, e, h);
            var x, g, b, _ = function(t) {
                if (!d && t in k)
                    return k[t];
                switch (t) {
                case "keys":
                case "values":
                    return function() {
                        return new n(this,t)
                    }
                }
                return function() {
                    return new n(this,t)
                }
            }, S = e + " Iterator", w = "values" == v, P = !1, k = t.prototype, O = k[l] || k["@@iterator"] || v && k[v], j = O || _(v), M = v ? w ? _("entries") : j : void 0, A = "Array" == e && k.entries || O;
            if (A && (b = f(A.call(new t))) !== Object.prototype && b.next && (s(b, S, !0),
            r || "function" == typeof b[l] || a(b, l, p)),
            w && O && "values" !== O.name && (P = !0,
            j = function() {
                return O.call(this)
            }
            ),
            r && !m || !d && !P && k[l] || a(k, l, j),
            u[e] = j,
            u[S] = p,
            v)
                if (x = {
                    values: w ? j : _("values"),
                    keys: y ? j : _("keys"),
                    entries: M
                },
                m)
                    for (g in x)
                        g in k || o(k, g, x[g]);
                else
                    i(i.P + i.F * (d || P), e, x);
            return x
        }
    },
    46: function(t, e, n) {
        var r = n(10)
          , i = n(74)
          , o = n(37)
          , a = n(33)("IE_PROTO")
          , u = function() {}
          , c = function() {
            var t, e = n(42)("iframe"), r = o.length;
            for (e.style.display = "none",
            n(63).appendChild(e),
            e.src = "javascript:",
            (t = e.contentWindow.document).open(),
            t.write("<script>document.F=Object<\/script>"),
            t.close(),
            c = t.F; r--; )
                delete c.prototype[o[r]];
            return c()
        };
        t.exports = Object.create || function(t, e) {
            var n;
            return null !== t ? (u.prototype = r(t),
            n = new u,
            u.prototype = null,
            n[a] = t) : n = c(),
            void 0 === e ? n : i(n, e)
        }
    },
    47: function(t, e, n) {
        var r = n(25)
          , i = n(2)("toStringTag")
          , o = "Arguments" == r(function() {
            return arguments
        }());
        t.exports = function(t) {
            var e, n, a;
            return void 0 === t ? "Undefined" : null === t ? "Null" : "string" == typeof (n = function(t, e) {
                try {
                    return t[e]
                } catch (t) {}
            }(e = Object(t), i)) ? n : o ? r(e) : "Object" == (a = r(e)) && "function" == typeof e.callee ? "Arguments" : a
        }
    },
    5: function(t, e) {
        var n = t.exports = "undefined" != typeof window && window.Math == Math ? window : "undefined" != typeof self && self.Math == Math ? self : Function("return this")();
        "number" == typeof __g && (__g = n)
    },
    51: function(t, e, n) {
        var r = n(25);
        t.exports = Object("z").propertyIsEnumerable(0) ? Object : function(t) {
            return "String" == r(t) ? t.split("") : Object(t)
        }
    },
    52: function(t, e, n) {
        var r = n(47)
          , i = n(2)("iterator")
          , o = n(17);
        t.exports = n(1).getIteratorMethod = function(t) {
            if (null != t)
                return t[i] || t["@@iterator"] || o[r(t)]
        }
    },
    53: function(t, e) {
        e.f = Object.getOwnPropertySymbols
    },
    55: function(t, e, n) {
        t.exports = !n(9) && !n(19)(function() {
            return 7 != Object.defineProperty(n(42)("div"), "a", {
                get: function() {
                    return 7
                }
            }).a
        })
    },
    56: function(t, e, n) {
        t.exports = n(13)
    },
    57: function(t, e, n) {
        var r = n(12)
          , i = n(15)
          , o = n(81)(!1)
          , a = n(33)("IE_PROTO");
        t.exports = function(t, e) {
            var n, u = i(t), c = 0, s = [];
            for (n in u)
                n != a && r(u, n) && s.push(n);
            for (; e.length > c; )
                r(u, n = e[c++]) && (~o(s, n) || s.push(n));
            return s
        }
    },
    58: function(t, e, n) {
        var r = n(12)
          , i = n(28)
          , o = n(33)("IE_PROTO")
          , a = Object.prototype;
        t.exports = Object.getPrototypeOf || function(t) {
            return t = i(t),
            r(t, o) ? t[o] : "function" == typeof t.constructor && t instanceof t.constructor ? t.constructor.prototype : t instanceof Object ? a : null
        }
    },
    63: function(t, e, n) {
        var r = n(5).document;
        t.exports = r && r.documentElement
    },
    64: function(t, e, n) {
        var r = n(10);
        t.exports = function(t, e, n, i) {
            try {
                return i ? e(r(n)[0], n[1]) : e(n)
            } catch (e) {
                var o = t.return;
                throw void 0 !== o && r(o.call(t)),
                e
            }
        }
    },
    65: function(t, e, n) {
        var r = n(17)
          , i = n(2)("iterator")
          , o = Array.prototype;
        t.exports = function(t) {
            return void 0 !== t && (r.Array === t || o[i] === t)
        }
    },
    66: function(t, e, n) {
        var r = n(2)("iterator")
          , i = !1;
        try {
            var o = [7][r]();
            o.return = function() {
                i = !0
            }
            ,
            Array.from(o, function() {
                throw 2
            })
        } catch (t) {}
        t.exports = function(t, e) {
            if (!e && !i)
                return !1;
            var n = !1;
            try {
                var o = [7]
                  , a = o[r]();
                a.next = function() {
                    return {
                        done: n = !0
                    }
                }
                ,
                o[r] = function() {
                    return a
                }
                ,
                t(o)
            } catch (t) {}
            return n
        }
    },
    7: function(t, e, n) {
        var r = n(10)
          , i = n(55)
          , o = n(40)
          , a = Object.defineProperty;
        e.f = n(9) ? Object.defineProperty : function(t, e, n) {
            if (r(t),
            e = o(e, !0),
            r(n),
            i)
                try {
                    return a(t, e, n)
                } catch (t) {}
            if ("get"in n || "set"in n)
                throw TypeError("Accessors not supported!");
            return "value"in n && (t[e] = n.value),
            t
        }
    },
    71: function(t, e) {},
    72: function(t, e, n) {
        "use strict";
        e.__esModule = !0;
        var r = function(t) {
            return t && t.__esModule ? t : {
                default: t
            }
        }(n(84));
        e.default = function(t, e, n) {
            return e in t ? (0,
            r.default)(t, e, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : t[e] = n,
            t
        }
    },
    74: function(t, e, n) {
        var r = n(7)
          , i = n(10)
          , o = n(22);
        t.exports = n(9) ? Object.defineProperties : function(t, e) {
            i(t);
            for (var n, a = o(e), u = a.length, c = 0; u > c; )
                r.f(t, n = a[c++], e[n]);
            return t
        }
    },
    79: function(t, e, n) {
        var r = n(31)
          , i = n(32);
        t.exports = function(t) {
            return function(e, n) {
                var o, a, u = String(i(e)), c = r(n), s = u.length;
                return c < 0 || c >= s ? t ? "" : void 0 : (o = u.charCodeAt(c)) < 55296 || o > 56319 || c + 1 === s || (a = u.charCodeAt(c + 1)) < 56320 || a > 57343 ? t ? u.charAt(c) : o : t ? u.slice(c, c + 2) : a - 56320 + (o - 55296 << 10) + 65536
            }
        }
    },
    8: function(t, e, n) {
        var r = n(5)
          , i = n(1)
          , o = n(20)
          , a = n(13)
          , u = n(12)
          , c = function(t, e, n) {
            var s, f, l, d = t & c.F, p = t & c.G, h = t & c.S, v = t & c.P, y = t & c.B, m = t & c.W, x = p ? i : i[e] || (i[e] = {}), g = x.prototype, b = p ? r : h ? r[e] : (r[e] || {}).prototype;
            for (s in p && (n = e),
            n)
                (f = !d && b && void 0 !== b[s]) && u(x, s) || (l = f ? b[s] : n[s],
                x[s] = p && "function" != typeof b[s] ? n[s] : y && f ? o(l, r) : m && b[s] == l ? function(t) {
                    var e = function(e, n, r) {
                        if (this instanceof t) {
                            switch (arguments.length) {
                            case 0:
                                return new t;
                            case 1:
                                return new t(e);
                            case 2:
                                return new t(e,n)
                            }
                            return new t(e,n,r)
                        }
                        return t.apply(this, arguments)
                    };
                    return e.prototype = t.prototype,
                    e
                }(l) : v && "function" == typeof l ? o(Function.call, l) : l,
                v && ((x.virtual || (x.virtual = {}))[s] = l,
                t & c.R && g && !g[s] && a(g, s, l)))
        };
        c.F = 1,
        c.G = 2,
        c.S = 4,
        c.P = 8,
        c.B = 16,
        c.W = 32,
        c.U = 64,
        c.R = 128,
        t.exports = c
    },
    80: function(t, e, n) {
        "use strict";
        var r = n(46)
          , i = n(18)
          , o = n(27)
          , a = {};
        n(13)(a, n(2)("iterator"), function() {
            return this
        }),
        t.exports = function(t, e, n) {
            t.prototype = r(a, {
                next: i(1, n)
            }),
            o(t, e + " Iterator")
        }
    },
    81: function(t, e, n) {
        var r = n(15)
          , i = n(39)
          , o = n(82);
        t.exports = function(t) {
            return function(e, n, a) {
                var u, c = r(e), s = i(c.length), f = o(a, s);
                if (t && n != n) {
                    for (; s > f; )
                        if ((u = c[f++]) != u)
                            return !0
                } else
                    for (; s > f; f++)
                        if ((t || f in c) && c[f] === n)
                            return t || f || 0;
                return !t && -1
            }
        }
    },
    82: function(t, e, n) {
        var r = n(31)
          , i = Math.max
          , o = Math.min;
        t.exports = function(t, e) {
            return (t = r(t)) < 0 ? i(t + e, 0) : o(t, e)
        }
    },
    84: function(t, e, n) {
        t.exports = {
            default: n(99),
            __esModule: !0
        }
    },
    85: function(t, e) {
        t.exports = function(t, e) {
            return {
                value: e,
                done: !!t
            }
        }
    },
    89: function(t, e, n) {
        n(29),
        n(90),
        t.exports = n(1).Array.from
    },
    9: function(t, e, n) {
        t.exports = !n(19)(function() {
            return 7 != Object.defineProperty({}, "a", {
                get: function() {
                    return 7
                }
            }).a
        })
    },
    90: function(t, e, n) {
        "use strict";
        var r = n(20)
          , i = n(8)
          , o = n(28)
          , a = n(64)
          , u = n(65)
          , c = n(39)
          , s = n(91)
          , f = n(52);
        i(i.S + i.F * !n(66)(function(t) {
            Array.from(t)
        }), "Array", {
            from: function(t) {
                var e, n, i, l, d = o(t), p = "function" == typeof this ? this : Array, h = arguments.length, v = h > 1 ? arguments[1] : void 0, y = void 0 !== v, m = 0, x = f(d);
                if (y && (v = r(v, h > 2 ? arguments[2] : void 0, 2)),
                null == x || p == Array && u(x))
                    for (n = new p(e = c(d.length)); e > m; m++)
                        s(n, m, y ? v(d[m], m) : d[m]);
                else
                    for (l = x.call(d),
                    n = new p; !(i = l.next()).done; m++)
                        s(n, m, y ? a(l, v, [i.value, m], !0) : i.value);
                return n.length = m,
                n
            }
        })
    },
    91: function(t, e, n) {
        "use strict";
        var r = n(7)
          , i = n(18);
        t.exports = function(t, e, n) {
            e in t ? r.f(t, e, i(0, n)) : t[e] = n
        }
    },
    95: function(t, e, n) {
        var r = n(20)
          , i = n(64)
          , o = n(65)
          , a = n(10)
          , u = n(39)
          , c = n(52)
          , s = {}
          , f = {};
        (e = t.exports = function(t, e, n, l, d) {
            var p, h, v, y, m = d ? function() {
                return t
            }
            : c(t), x = r(n, l, e ? 2 : 1), g = 0;
            if ("function" != typeof m)
                throw TypeError(t + " is not iterable!");
            if (o(m)) {
                for (p = u(t.length); p > g; g++)
                    if ((y = e ? x(a(h = t[g])[0], h[1]) : x(t[g])) === s || y === f)
                        return y
            } else
                for (v = m.call(t); !(h = v.next()).done; )
                    if ((y = i(v, x, h.value, e)) === s || y === f)
                        return y
        }
        ).BREAK = s,
        e.RETURN = f
    },
    96: function(t, e, n) {
        t.exports = {
            default: n(128),
            __esModule: !0
        }
    },
    98: function(t, e, n) {
        t.exports = {
            default: n(154),
            __esModule: !0
        }
    },
    99: function(t, e, n) {
        n(100);
        var r = n(1).Object;
        t.exports = function(t, e, n) {
            return r.defineProperty(t, e, n)
        }
    }
});
