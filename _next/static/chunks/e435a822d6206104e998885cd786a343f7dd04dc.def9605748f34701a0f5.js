(window.webpackJsonp_N_E = window.webpackJsonp_N_E || []).push([
    [5], {
        "2SVd": function(e, t, n) {
            "use strict";
            e.exports = function(e) { return /^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(e) }
        },
        "5oMp": function(e, t, n) {
            "use strict";
            e.exports = function(e, t) { return t ? e.replace(/\/+$/, "") + "/" + t.replace(/^\/+/, "") : e }
        },
        "6oXP": function(e, t, n) {
            "use strict";
            n.d(t, "a", (function() { return u }));
            var r = n("nKUr"),
                o = n("YFqc"),
                i = n.n(o),
                s = n("vOnD"),
                a = s.b.header.withConfig({ displayName: "styles__Container", componentId: "sc-1nw6hj8-0" })(["background-color:#0A0F0D;color:#F9F9F9;height:75px;border-bottom:2px solid #EC1D24;box-shadow:0 5px 20px rgba(0,0,0,0.3);display:flex;align-items:center;"]),
                c = s.b.div.withConfig({ displayName: "styles__Content", componentId: "sc-1nw6hj8-1" })(["width:992px;margin:0 auto;display:flex;justify-content:space-between;align-items:center;div{h1{font-style:italic;font-weight:900;a{padding:1rem 0;}}}nav{ul{li{font-weight:700;transition:color 0.2s;a{padding:0.7rem 0;}&:hover{color:#EC1D24;}}}}"]);

            function u() { return Object(r.jsx)(a, { children: Object(r.jsxs)(c, { children: [Object(r.jsx)("div", { children: Object(r.jsx)("h1", { children: Object(r.jsx)(i.a, { href: "/", children: Object(r.jsx)("a", { children: "OBJECTIVE" }) }) }) }), Object(r.jsx)("nav", { children: Object(r.jsx)("ul", { children: Object(r.jsx)("li", { children: Object(r.jsx)(i.a, { href: "/", children: Object(r.jsx)("a", { children: "VOLTAR" }) }) }) }) })] }) }) }
        },
        "9rSQ": function(e, t, n) {
            "use strict";
            var r = n("xTJ+");

            function o() { this.handlers = [] }
            o.prototype.use = function(e, t) { return this.handlers.push({ fulfilled: e, rejected: t }), this.handlers.length - 1 }, o.prototype.eject = function(e) { this.handlers[e] && (this.handlers[e] = null) }, o.prototype.forEach = function(e) { r.forEach(this.handlers, (function(t) { null !== t && e(t) })) }, e.exports = o
        },
        "9xxL": function(e, t, n) {
            "use strict";
            n.d(t, "a", (function() { return i }));
            var r = n("nKUr"),
                o = n("vOnD").b.div.withConfig({ displayName: "styles__Container", componentId: "moepqi-0" })(["margin:4rem 0;text-align:center;&& > div{display:inline-flex;align-items:flex-end;flex-direction:column;.line{border-bottom:6px solid #EC1D24;width:30px;}}"]);

            function i(e) { var t = e.title; return Object(r.jsx)(o, { children: Object(r.jsxs)("div", { children: [Object(r.jsx)("h2", { children: t }), Object(r.jsx)("div", { className: "line" })] }) }) }
        },
        CgaS: function(e, t, n) {
            "use strict";
            var r = n("xTJ+"),
                o = n("MLWZ"),
                i = n("9rSQ"),
                s = n("UnBK"),
                a = n("SntB");

            function c(e) { this.defaults = e, this.interceptors = { request: new i, response: new i } }
            c.prototype.request = function(e) {
                "string" === typeof e ? (e = arguments[1] || {}).url = arguments[0] : e = e || {}, (e = a(this.defaults, e)).method ? e.method = e.method.toLowerCase() : this.defaults.method ? e.method = this.defaults.method.toLowerCase() : e.method = "get";
                var t = [s, void 0],
                    n = Promise.resolve(e);
                for (this.interceptors.request.forEach((function(e) { t.unshift(e.fulfilled, e.rejected) })), this.interceptors.response.forEach((function(e) { t.push(e.fulfilled, e.rejected) })); t.length;) n = n.then(t.shift(), t.shift());
                return n
            }, c.prototype.getUri = function(e) { return e = a(this.defaults, e), o(e.url, e.params, e.paramsSerializer).replace(/^\?/, "") }, r.forEach(["delete", "get", "head", "options"], (function(e) { c.prototype[e] = function(t, n) { return this.request(a(n || {}, { method: e, url: t, data: (n || {}).data })) } })), r.forEach(["post", "put", "patch"], (function(e) { c.prototype[e] = function(t, n, r) { return this.request(a(r || {}, { method: e, url: t, data: n })) } })), e.exports = c
        },
        DfZB: function(e, t, n) {
            "use strict";
            e.exports = function(e) { return function(t) { return e.apply(null, t) } }
        },
        Dp36: function(e, t, n) {
            "use strict";
            var r = n("vDqi"),
                o = n.n(r).a.create({ baseURL: "https://gateway.marvel.com/v1/public" });
            t.a = o
        },
        FrBp: function(e, t, n) {
            "use strict";
            n.d(t, "a", (function() { return c }));
            var r = n("nKUr"),
                o = n("ma3e"),
                i = n("vOnD"),
                s = i.b.footer.withConfig({ displayName: "styles__Container", componentId: "sc-163j18-0" })(["background-color:#0A0F0D;color:#F9F9F9;height:120px;margin-top:60px;display:flex;align-items:center;"]),
                a = i.b.div.withConfig({ displayName: "styles__Content", componentId: "sc-163j18-1" })(["width:992px;margin:0 auto;display:flex;flex-direction:column;justify-content:center;align-items:center;div{a{svg{transition:color 0.2s;color:#F9F9F9;margin:0.5rem;}}}p{font-weight:500;}"]);

            function c() { return Object(r.jsx)(s, { children: Object(r.jsxs)(a, { children: [Object(r.jsxs)("div", { children: [Object(r.jsx)("a", { href: "https://www.linkedin.com/in/osoaresalex/", target: "_blank", rel: "noopener noreferrer", children: Object(r.jsx)(o.b, { size: 40 }) }), Object(r.jsx)("a", { href: "https://github.com/osoaresalex", target: "_blank", rel: "noopener noreferrer", children: Object(r.jsx)(o.a, { size: 40 }) })] }), Object(r.jsx)("p", { children: "Desenvolvido por Alex Soares" })] }) }) }
        },
        HSsa: function(e, t, n) {
            "use strict";
            e.exports = function(e, t) { return function() { for (var n = new Array(arguments.length), r = 0; r < n.length; r++) n[r] = arguments[r]; return e.apply(t, n) } }
        },
        JEQr: function(e, t, n) {
            "use strict";
            (function(t) {
                var r = n("xTJ+"),
                    o = n("yK9s"),
                    i = { "Content-Type": "application/x-www-form-urlencoded" };

                function s(e, t) {!r.isUndefined(e) && r.isUndefined(e["Content-Type"]) && (e["Content-Type"] = t) }
                var a = {
                    adapter: function() { var e; return ("undefined" !== typeof XMLHttpRequest || "undefined" !== typeof t && "[object process]" === Object.prototype.toString.call(t)) && (e = n("tQ2B")), e }(),
                    transformRequest: [function(e, t) { return o(t, "Accept"), o(t, "Content-Type"), r.isFormData(e) || r.isArrayBuffer(e) || r.isBuffer(e) || r.isStream(e) || r.isFile(e) || r.isBlob(e) ? e : r.isArrayBufferView(e) ? e.buffer : r.isURLSearchParams(e) ? (s(t, "application/x-www-form-urlencoded;charset=utf-8"), e.toString()) : r.isObject(e) ? (s(t, "application/json;charset=utf-8"), JSON.stringify(e)) : e }],
                    transformResponse: [function(e) {
                        if ("string" === typeof e) try { e = JSON.parse(e) } catch (t) {}
                        return e
                    }],
                    timeout: 0,
                    xsrfCookieName: "XSRF-TOKEN",
                    xsrfHeaderName: "X-XSRF-TOKEN",
                    maxContentLength: -1,
                    maxBodyLength: -1,
                    validateStatus: function(e) { return e >= 200 && e < 300 },
                    headers: { common: { Accept: "application/json, text/plain, */*" } }
                };
                r.forEach(["delete", "get", "head"], (function(e) { a.headers[e] = {} })), r.forEach(["post", "put", "patch"], (function(e) { a.headers[e] = r.merge(i) })), e.exports = a
            }).call(this, n("8oxB"))
        },
        LARA: function(e, t, n) {
            "use strict";
            n.d(t, "a", (function() { return r }));
            var r = n("vOnD").b.div.withConfig({ displayName: "grid__Grid", componentId: "ljyh71-0" })(["display:grid;grid-template-columns:repeat(12,1fr);grid-template-rows:auto;grid-gap:30px;"])
        },
        LYNF: function(e, t, n) {
            "use strict";
            var r = n("OH9c");
            e.exports = function(e, t, n, o, i) { var s = new Error(e); return r(s, t, n, o, i) }
        },
        Lmem: function(e, t, n) {
            "use strict";
            e.exports = function(e) { return !(!e || !e.__CANCEL__) }
        },
        Lnxd: function(e, t, n) {
            "use strict";
            n.d(t, "a", (function() { return f }));
            var r = n("q1tI"),
                o = n.n(r),
                i = { color: void 0, size: void 0, className: void 0, style: void 0, attr: void 0 },
                s = o.a.createContext && o.a.createContext(i),
                a = function() {
                    return (a = Object.assign || function(e) {
                        for (var t, n = 1, r = arguments.length; n < r; n++)
                            for (var o in t = arguments[n]) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
                        return e
                    }).apply(this, arguments)
                },
                c = function(e, t) { var n = {}; for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]); if (null != e && "function" === typeof Object.getOwnPropertySymbols) { var o = 0; for (r = Object.getOwnPropertySymbols(e); o < r.length; o++) t.indexOf(r[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[o]) && (n[r[o]] = e[r[o]]) } return n };

            function u(e) { return e && e.map((function(e, t) { return o.a.createElement(e.tag, a({ key: t }, e.attr), u(e.child)) })) }

            function f(e) { return function(t) { return o.a.createElement(l, a({ attr: a({}, e.attr) }, t), u(e.child)) } }

            function l(e) {
                var t = function(t) {
                    var n, r = e.attr,
                        i = e.size,
                        s = e.title,
                        u = c(e, ["attr", "size", "title"]),
                        f = i || t.size || "1em";
                    return t.className && (n = t.className), e.className && (n = (n ? n + " " : "") + e.className), o.a.createElement("svg", a({ stroke: "currentColor", fill: "currentColor", strokeWidth: "0" }, t.attr, r, u, { className: n, style: a(a({ color: e.color || t.color }, t.style), e.style), height: f, width: f, xmlns: "http://www.w3.org/2000/svg" }), s && o.a.createElement("title", null, s), e.children)
                };
                return void 0 !== s ? o.a.createElement(s.Consumer, null, (function(e) { return t(e) })) : t(i)
            }
        },
        MLWZ: function(e, t, n) {
            "use strict";
            var r = n("xTJ+");

            function o(e) { return encodeURIComponent(e).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+").replace(/%5B/gi, "[").replace(/%5D/gi, "]") }
            e.exports = function(e, t, n) {
                if (!t) return e;
                var i;
                if (n) i = n(t);
                else if (r.isURLSearchParams(t)) i = t.toString();
                else {
                    var s = [];
                    r.forEach(t, (function(e, t) { null !== e && "undefined" !== typeof e && (r.isArray(e) ? t += "[]" : e = [e], r.forEach(e, (function(e) { r.isDate(e) ? e = e.toISOString() : r.isObject(e) && (e = JSON.stringify(e)), s.push(o(t) + "=" + o(e)) }))) })), i = s.join("&")
                }
                if (i) { var a = e.indexOf("#"); - 1 !== a && (e = e.slice(0, a)), e += (-1 === e.indexOf("?") ? "?" : "&") + i }
                return e
            }
        },
        OH9c: function(e, t, n) {
            "use strict";
            e.exports = function(e, t, n, r, o) { return e.config = t, n && (e.code = n), e.request = r, e.response = o, e.isAxiosError = !0, e.toJSON = function() { return { message: this.message, name: this.name, description: this.description, number: this.number, fileName: this.fileName, lineNumber: this.lineNumber, columnNumber: this.columnNumber, stack: this.stack, config: this.config, code: this.code } }, e }
        },
        OTTw: function(e, t, n) {
            "use strict";
            var r = n("xTJ+");
            e.exports = r.isStandardBrowserEnv() ? function() {
                var e, t = /(msie|trident)/i.test(navigator.userAgent),
                    n = document.createElement("a");

                function o(e) { var r = e; return t && (n.setAttribute("href", r), r = n.href), n.setAttribute("href", r), { href: n.href, protocol: n.protocol ? n.protocol.replace(/:$/, "") : "", host: n.host, search: n.search ? n.search.replace(/^\?/, "") : "", hash: n.hash ? n.hash.replace(/^#/, "") : "", hostname: n.hostname, port: n.port, pathname: "/" === n.pathname.charAt(0) ? n.pathname : "/" + n.pathname } }
                return e = o(window.location.href),
                    function(t) { var n = r.isString(t) ? o(t) : t; return n.protocol === e.protocol && n.host === e.host }
            }() : function() { return !0 }
        },
        "Rn+g": function(e, t, n) {
            "use strict";
            var r = n("LYNF");
            e.exports = function(e, t, n) {
                var o = n.config.validateStatus;
                n.status && o && !o(n.status) ? t(r("Request failed with status code " + n.status, n.config, null, n.request, n)) : e(n)
            }
        },
        SntB: function(e, t, n) {
            "use strict";
            var r = n("xTJ+");
            e.exports = function(e, t) {
                t = t || {};
                var n = {},
                    o = ["url", "method", "data"],
                    i = ["headers", "auth", "proxy", "params"],
                    s = ["baseURL", "transformRequest", "transformResponse", "paramsSerializer", "timeout", "timeoutMessage", "withCredentials", "adapter", "responseType", "xsrfCookieName", "xsrfHeaderName", "onUploadProgress", "onDownloadProgress", "decompress", "maxContentLength", "maxBodyLength", "maxRedirects", "transport", "httpAgent", "httpsAgent", "cancelToken", "socketPath", "responseEncoding"],
                    a = ["validateStatus"];

                function c(e, t) { return r.isPlainObject(e) && r.isPlainObject(t) ? r.merge(e, t) : r.isPlainObject(t) ? r.merge({}, t) : r.isArray(t) ? t.slice() : t }

                function u(o) { r.isUndefined(t[o]) ? r.isUndefined(e[o]) || (n[o] = c(void 0, e[o])) : n[o] = c(e[o], t[o]) }
                r.forEach(o, (function(e) { r.isUndefined(t[e]) || (n[e] = c(void 0, t[e])) })), r.forEach(i, u), r.forEach(s, (function(o) { r.isUndefined(t[o]) ? r.isUndefined(e[o]) || (n[o] = c(void 0, e[o])) : n[o] = c(void 0, t[o]) })), r.forEach(a, (function(r) { r in t ? n[r] = c(e[r], t[r]) : r in e && (n[r] = c(void 0, e[r])) }));
                var f = o.concat(i).concat(s).concat(a),
                    l = Object.keys(e).concat(Object.keys(t)).filter((function(e) { return -1 === f.indexOf(e) }));
                return r.forEach(l, u), n
            }
        },
        UnBK: function(e, t, n) {
            "use strict";
            var r = n("xTJ+"),
                o = n("xAGQ"),
                i = n("Lmem"),
                s = n("JEQr");

            function a(e) { e.cancelToken && e.cancelToken.throwIfRequested() }
            e.exports = function(e) { return a(e), e.headers = e.headers || {}, e.data = o(e.data, e.headers, e.transformRequest), e.headers = r.merge(e.headers.common || {}, e.headers[e.method] || {}, e.headers), r.forEach(["delete", "get", "head", "post", "put", "patch", "common"], (function(t) { delete e.headers[t] })), (e.adapter || s.adapter)(e).then((function(t) { return a(e), t.data = o(t.data, t.headers, e.transformResponse), t }), (function(t) { return i(t) || (a(e), t && t.response && (t.response.data = o(t.response.data, t.response.headers, e.transformResponse))), Promise.reject(t) })) }
        },
        XwJu: function(e, t, n) {
            "use strict";
            e.exports = function(e) { return "object" === typeof e && !0 === e.isAxiosError }
        },
        YFqc: function(e, t, n) { e.exports = n("cTJO") },
        cTJO: function(e, t, n) {
            "use strict";
            var r = n("zoAU"),
                o = n("7KCV");
            t.__esModule = !0, t.default = void 0;
            var i = o(n("q1tI")),
                s = n("elyg"),
                a = n("nOHt"),
                c = n("vNVm"),
                u = {};

            function f(e, t, n, r) {
                if (e && (0, s.isLocalURL)(t)) {
                    e.prefetch(t, n, r).catch((function(e) { 0 }));
                    var o = r && "undefined" !== typeof r.locale ? r.locale : e && e.locale;
                    u[t + "%" + n + (o ? "%" + o : "")] = !0
                }
            }
            var l = function(e) {
                var t = !1 !== e.prefetch,
                    n = (0, a.useRouter)(),
                    o = n && n.pathname || "/",
                    l = i.default.useMemo((function() {
                        var t = (0, s.resolveHref)(o, e.href, !0),
                            n = r(t, 2),
                            i = n[0],
                            a = n[1];
                        return { href: i, as: e.as ? (0, s.resolveHref)(o, e.as) : a || i }
                    }), [o, e.href, e.as]),
                    d = l.href,
                    p = l.as,
                    h = e.children,
                    m = e.replace,
                    v = e.shallow,
                    g = e.scroll,
                    y = e.locale;
                "string" === typeof h && (h = i.default.createElement("a", null, h));
                var x = i.Children.only(h),
                    b = x && "object" === typeof x && x.ref,
                    j = (0, c.useIntersection)({ rootMargin: "200px" }),
                    w = r(j, 2),
                    O = w[0],
                    E = w[1],
                    C = i.default.useCallback((function(e) { O(e), b && ("function" === typeof b ? b(e) : "object" === typeof b && (b.current = e)) }), [b, O]);
                (0, i.useEffect)((function() {
                    var e = E && t && (0, s.isLocalURL)(d),
                        r = "undefined" !== typeof y ? y : n && n.locale,
                        o = u[d + "%" + p + (r ? "%" + r : "")];
                    e && !o && f(n, d, p, { locale: r })
                }), [p, d, E, y, t, n]);
                var S = {
                    ref: C,
                    onClick: function(e) {
                        x.props && "function" === typeof x.props.onClick && x.props.onClick(e), e.defaultPrevented || function(e, t, n, r, o, i, a, c) {
                            ("A" !== e.currentTarget.nodeName || ! function(e) { var t = e.currentTarget.target; return t && "_self" !== t || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey || e.nativeEvent && 2 === e.nativeEvent.which }(e) && (0, s.isLocalURL)(n)) && (e.preventDefault(), null == a && (a = r.indexOf("#") < 0), t[o ? "replace" : "push"](n, r, { shallow: i, locale: c, scroll: a }).then((function(e) { e && a && document.body.focus() })))
                        }(e, n, d, p, m, v, g, y)
                    },
                    onMouseEnter: function(e) {
                        (0, s.isLocalURL)(d) && (x.props && "function" === typeof x.props.onMouseEnter && x.props.onMouseEnter(e), f(n, d, p, { priority: !0 }))
                    }
                };
                if (e.passHref || "a" === x.type && !("href" in x.props)) {
                    var N = "undefined" !== typeof y ? y : n && n.locale,
                        L = n && n.isLocaleDomain && (0, s.getDomainLocale)(p, N, n && n.locales, n && n.domainLocales);
                    S.href = L || (0, s.addBasePath)((0, s.addLocale)(p, N, n && n.defaultLocale))
                }
                return i.default.cloneElement(x, S)
            };
            t.default = l
        },
        endd: function(e, t, n) {
            "use strict";

            function r(e) { this.message = e }
            r.prototype.toString = function() { return "Cancel" + (this.message ? ": " + this.message : "") }, r.prototype.__CANCEL__ = !0, e.exports = r
        },
        eqyj: function(e, t, n) {
            "use strict";
            var r = n("xTJ+");
            e.exports = r.isStandardBrowserEnv() ? {
                write: function(e, t, n, o, i, s) {
                    var a = [];
                    a.push(e + "=" + encodeURIComponent(t)), r.isNumber(n) && a.push("expires=" + new Date(n).toGMTString()), r.isString(o) && a.push("path=" + o), r.isString(i) && a.push("domain=" + i), !0 === s && a.push("secure"), document.cookie = a.join("; ")
                },
                read: function(e) { var t = document.cookie.match(new RegExp("(^|;\\s*)(" + e + ")=([^;]*)")); return t ? decodeURIComponent(t[3]) : null },
                remove: function(e) { this.write(e, "", Date.now() - 864e5) }
            } : { write: function() {}, read: function() { return null }, remove: function() {} }
        },
        g7np: function(e, t, n) {
            "use strict";
            var r = n("2SVd"),
                o = n("5oMp");
            e.exports = function(e, t) { return e && !r(t) ? o(e, t) : t }
        },
        "jfS+": function(e, t, n) {
            "use strict";
            var r = n("endd");

            function o(e) {
                if ("function" !== typeof e) throw new TypeError("executor must be a function.");
                var t;
                this.promise = new Promise((function(e) { t = e }));
                var n = this;
                e((function(e) { n.reason || (n.reason = new r(e), t(n.reason)) }))
            }
            o.prototype.throwIfRequested = function() { if (this.reason) throw this.reason }, o.source = function() { var e; return { token: new o((function(t) { e = t })), cancel: e } }, e.exports = o
        },
        tQ2B: function(e, t, n) {
            "use strict";
            var r = n("xTJ+"),
                o = n("Rn+g"),
                i = n("eqyj"),
                s = n("MLWZ"),
                a = n("g7np"),
                c = n("w0Vi"),
                u = n("OTTw"),
                f = n("LYNF");
            e.exports = function(e) {
                return new Promise((function(t, n) {
                    var l = e.data,
                        d = e.headers;
                    r.isFormData(l) && delete d["Content-Type"];
                    var p = new XMLHttpRequest;
                    if (e.auth) {
                        var h = e.auth.username || "",
                            m = e.auth.password ? unescape(encodeURIComponent(e.auth.password)) : "";
                        d.Authorization = "Basic " + btoa(h + ":" + m)
                    }
                    var v = a(e.baseURL, e.url);
                    if (p.open(e.method.toUpperCase(), s(v, e.params, e.paramsSerializer), !0), p.timeout = e.timeout, p.onreadystatechange = function() {
                            if (p && 4 === p.readyState && (0 !== p.status || p.responseURL && 0 === p.responseURL.indexOf("file:"))) {
                                var r = "getAllResponseHeaders" in p ? c(p.getAllResponseHeaders()) : null,
                                    i = { data: e.responseType && "text" !== e.responseType ? p.response : p.responseText, status: p.status, statusText: p.statusText, headers: r, config: e, request: p };
                                o(t, n, i), p = null
                            }
                        }, p.onabort = function() { p && (n(f("Request aborted", e, "ECONNABORTED", p)), p = null) }, p.onerror = function() { n(f("Network Error", e, null, p)), p = null }, p.ontimeout = function() {
                            var t = "timeout of " + e.timeout + "ms exceeded";
                            e.timeoutErrorMessage && (t = e.timeoutErrorMessage), n(f(t, e, "ECONNABORTED", p)), p = null
                        }, r.isStandardBrowserEnv()) {
                        var g = (e.withCredentials || u(v)) && e.xsrfCookieName ? i.read(e.xsrfCookieName) : void 0;
                        g && (d[e.xsrfHeaderName] = g)
                    }
                    if ("setRequestHeader" in p && r.forEach(d, (function(e, t) { "undefined" === typeof l && "content-type" === t.toLowerCase() ? delete d[t] : p.setRequestHeader(t, e) })), r.isUndefined(e.withCredentials) || (p.withCredentials = !!e.withCredentials), e.responseType) try { p.responseType = e.responseType } catch (y) { if ("json" !== e.responseType) throw y }
                    "function" === typeof e.onDownloadProgress && p.addEventListener("progress", e.onDownloadProgress), "function" === typeof e.onUploadProgress && p.upload && p.upload.addEventListener("progress", e.onUploadProgress), e.cancelToken && e.cancelToken.promise.then((function(e) { p && (p.abort(), n(e), p = null) })), l || (l = null), p.send(l)
                }))
            }
        },
        ukvN: function(e, t, n) {
            "use strict";
            n.d(t, "a", (function() { return c }));
            var r = n("nKUr"),
                o = n("vOnD"),
                i = Object(o.c)(["0%{transform:scale(0.90);}50%{transform:scale(1.05);}100%{transform:scale(0.90);}"]),
                s = Object(o.c)(["0%{color:#0A0F0D;}50%{color:#f9f9f9;}100%{color:#0A0F0D;}"]),
                a = o.b.div.withConfig({ displayName: "styles__Container", componentId: "sc-10imny-0" })(["display:flex;flex-direction:column;height:60vh;margin-bottom:60vh;justify-content:center;align-items:center;img{width:100px;height:100px;animation:", " 1s infinite linear;margin-bottom:1rem;}div{span{color:#0A0F0D;font-size:2rem;font-weight:700;}#first-dot{animation:", " 1.5s infinite linear;}#second-dot{animation:", " 1.0s infinite linear;}#third-dot{animation:", " 1.5s infinite linear;}}"], i, s, s, s);

            function c() { return Object(r.jsxs)(a, { children: [Object(r.jsx)("img", { src: "/assets/deadpool-logo.png", alt: "" }), Object(r.jsxs)("div", { children: [Object(r.jsx)("span", { children: "Loading" }), Object(r.jsx)("span", { id: "first-dot", children: "." }), Object(r.jsx)("span", { id: "second-dot", children: "." }), Object(r.jsx)("span", { id: "third-dot", children: "." })] })] }) }
        },
        vDqi: function(e, t, n) { e.exports = n("zuR4") },
        vNVm: function(e, t, n) {
            "use strict";
            var r = n("zoAU");
            t.__esModule = !0, t.useIntersection = function(e) {
                var t = e.rootMargin,
                    n = e.disabled || !s,
                    c = (0, o.useRef)(),
                    u = (0, o.useState)(!1),
                    f = r(u, 2),
                    l = f[0],
                    d = f[1],
                    p = (0, o.useCallback)((function(e) {
                        c.current && (c.current(), c.current = void 0), n || l || e && e.tagName && (c.current = function(e, t, n) {
                            var r = function(e) {
                                    var t = e.rootMargin || "",
                                        n = a.get(t);
                                    if (n) return n;
                                    var r = new Map,
                                        o = new IntersectionObserver((function(e) {
                                            e.forEach((function(e) {
                                                var t = r.get(e.target),
                                                    n = e.isIntersecting || e.intersectionRatio > 0;
                                                t && n && t(n)
                                            }))
                                        }), e);
                                    return a.set(t, n = { id: t, observer: o, elements: r }), n
                                }(n),
                                o = r.id,
                                i = r.observer,
                                s = r.elements;
                            return s.set(e, t), i.observe(e),
                                function() { s.delete(e), i.unobserve(e), 0 === s.size && (i.disconnect(), a.delete(o)) }
                        }(e, (function(e) { return e && d(e) }), { rootMargin: t }))
                    }), [n, t, l]);
                return (0, o.useEffect)((function() { if (!s && !l) { var e = (0, i.requestIdleCallback)((function() { return d(!0) })); return function() { return (0, i.cancelIdleCallback)(e) } } }), [l]), [p, l]
            };
            var o = n("q1tI"),
                i = n("0G5g"),
                s = "undefined" !== typeof IntersectionObserver;
            var a = new Map
        },
        w0Vi: function(e, t, n) {
            "use strict";
            var r = n("xTJ+"),
                o = ["age", "authorization", "content-length", "content-type", "etag", "expires", "from", "host", "if-modified-since", "if-unmodified-since", "last-modified", "location", "max-forwards", "proxy-authorization", "referer", "retry-after", "user-agent"];
            e.exports = function(e) {
                var t, n, i, s = {};
                return e ? (r.forEach(e.split("\n"), (function(e) {
                    if (i = e.indexOf(":"), t = r.trim(e.substr(0, i)).toLowerCase(), n = r.trim(e.substr(i + 1)), t) {
                        if (s[t] && o.indexOf(t) >= 0) return;
                        s[t] = "set-cookie" === t ? (s[t] ? s[t] : []).concat([n]) : s[t] ? s[t] + ", " + n : n
                    }
                })), s) : s
            }
        },
        xAGQ: function(e, t, n) {
            "use strict";
            var r = n("xTJ+");
            e.exports = function(e, t, n) { return r.forEach(n, (function(n) { e = n(e, t) })), e }
        },
        "xTJ+": function(e, t, n) {
            "use strict";
            var r = n("HSsa"),
                o = Object.prototype.toString;

            function i(e) { return "[object Array]" === o.call(e) }

            function s(e) { return "undefined" === typeof e }

            function a(e) { return null !== e && "object" === typeof e }

            function c(e) { if ("[object Object]" !== o.call(e)) return !1; var t = Object.getPrototypeOf(e); return null === t || t === Object.prototype }

            function u(e) { return "[object Function]" === o.call(e) }

            function f(e, t) {
                if (null !== e && "undefined" !== typeof e)
                    if ("object" !== typeof e && (e = [e]), i(e))
                        for (var n = 0, r = e.length; n < r; n++) t.call(null, e[n], n, e);
                    else
                        for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && t.call(null, e[o], o, e)
            }
            e.exports = {
                isArray: i,
                isArrayBuffer: function(e) { return "[object ArrayBuffer]" === o.call(e) },
                isBuffer: function(e) { return null !== e && !s(e) && null !== e.constructor && !s(e.constructor) && "function" === typeof e.constructor.isBuffer && e.constructor.isBuffer(e) },
                isFormData: function(e) { return "undefined" !== typeof FormData && e instanceof FormData },
                isArrayBufferView: function(e) { return "undefined" !== typeof ArrayBuffer && ArrayBuffer.isView ? ArrayBuffer.isView(e) : e && e.buffer && e.buffer instanceof ArrayBuffer },
                isString: function(e) { return "string" === typeof e },
                isNumber: function(e) { return "number" === typeof e },
                isObject: a,
                isPlainObject: c,
                isUndefined: s,
                isDate: function(e) { return "[object Date]" === o.call(e) },
                isFile: function(e) { return "[object File]" === o.call(e) },
                isBlob: function(e) { return "[object Blob]" === o.call(e) },
                isFunction: u,
                isStream: function(e) { return a(e) && u(e.pipe) },
                isURLSearchParams: function(e) { return "undefined" !== typeof URLSearchParams && e instanceof URLSearchParams },
                isStandardBrowserEnv: function() { return ("undefined" === typeof navigator || "ReactNative" !== navigator.product && "NativeScript" !== navigator.product && "NS" !== navigator.product) && ("undefined" !== typeof window && "undefined" !== typeof document) },
                forEach: f,
                merge: function e() {
                    var t = {};

                    function n(n, r) { c(t[r]) && c(n) ? t[r] = e(t[r], n) : c(n) ? t[r] = e({}, n) : i(n) ? t[r] = n.slice() : t[r] = n }
                    for (var r = 0, o = arguments.length; r < o; r++) f(arguments[r], n);
                    return t
                },
                extend: function(e, t, n) { return f(t, (function(t, o) { e[o] = n && "function" === typeof t ? r(t, n) : t })), e },
                trim: function(e) { return e.replace(/^\s*/, "").replace(/\s*$/, "") },
                stripBOM: function(e) { return 65279 === e.charCodeAt(0) && (e = e.slice(1)), e }
            }
        },
        yK9s: function(e, t, n) {
            "use strict";
            var r = n("xTJ+");
            e.exports = function(e, t) { r.forEach(e, (function(n, r) { r !== t && r.toUpperCase() === t.toUpperCase() && (e[t] = n, delete e[r]) })) }
        },
        zuR4: function(e, t, n) {
            "use strict";
            var r = n("xTJ+"),
                o = n("HSsa"),
                i = n("CgaS"),
                s = n("SntB");

            function a(e) {
                var t = new i(e),
                    n = o(i.prototype.request, t);
                return r.extend(n, i.prototype, t), r.extend(n, t), n
            }
            var c = a(n("JEQr"));
            c.Axios = i, c.create = function(e) { return a(s(c.defaults, e)) }, c.Cancel = n("endd"), c.CancelToken = n("jfS+"), c.isCancel = n("Lmem"), c.all = function(e) { return Promise.all(e) }, c.spread = n("DfZB"), c.isAxiosError = n("XwJu"), e.exports = c, e.exports.default = c
        }
    }
]);