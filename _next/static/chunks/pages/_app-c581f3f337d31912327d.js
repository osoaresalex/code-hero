_N_E = (window.webpackJsonp_N_E = window.webpackJsonp_N_E || []).push([
    [9],
    {
        0: function(n, e, t) {
            t("74v/"), (n.exports = t("nOHt"));
        },
        "74v/": function(n, e, t) {
            (window.__NEXT_P = window.__NEXT_P || []).push([
                "/_app",
                function() {
                    return t("hUgY");
                },
            ]);
        },
        hUgY: function(n, e, t) {
            "use strict";
            t.r(e);
            var r = t("nKUr");

            function o(n, e, t) {
                return (
                    e in n ?
                    Object.defineProperty(n, e, {
                        value: t,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                    }) :
                    (n[e] = t),
                    n
                );
            }
            var i = t("vOnD");

            function c() {
                var n,
                    e,
                    t =
                    ((n = [
                            "\n\n* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n}\n\n@media(max-width: 1080px) {\n  html {\n    font-size: 93.75%; \n  }\n}\n\n@media(max-width: 720px) {\n  html {\n    font-size: 87.5%; \n  }\n}\n\nbody {\n  background: #F9F9F9;\n  color: #0A0F0D;\n}\n\nbody, button {\n  font: 400 1rem Roboto, sans-serif;\n}\n\nbutton {\n  cursor: pointer;\n}\n\na {\n  color: inherit;\n  text-decoration: none;\n}\n\nul {\n  list-style-type: none;\n}\n\n",
                        ]),
                        e || (e = n.slice(0)),
                        Object.freeze(
                            Object.defineProperties(n, { raw: { value: Object.freeze(e) } })
                        ));
                return (
                    (c = function() {
                        return t;
                    }),
                    t
                );
            }
            var u = Object(i.a)(c());

            function a(n, e) {
                var t = Object.keys(n);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(n);
                    e &&
                        (r = r.filter(function(e) {
                            return Object.getOwnPropertyDescriptor(n, e).enumerable;
                        })),
                        t.push.apply(t, r);
                }
                return t;
            }

            function b(n) {
                for (var e = 1; e < arguments.length; e++) {
                    var t = null != arguments[e] ? arguments[e] : {};
                    e % 2 ?
                        a(Object(t), !0).forEach(function(e) {
                            o(n, e, t[e]);
                        }) :
                        Object.getOwnPropertyDescriptors ?
                        Object.defineProperties(n, Object.getOwnPropertyDescriptors(t)) :
                        a(Object(t)).forEach(function(e) {
                            Object.defineProperty(
                                n,
                                e,
                                Object.getOwnPropertyDescriptor(t, e)
                            );
                        });
                }
                return n;
            }
            e.default = function(n) {
                var e = n.Component,
                    t = n.pageProps;
                return Object(r.jsxs)(r.Fragment, {
                    children: [Object(r.jsx)(e, b({}, t)), Object(r.jsx)(u, {})],
                });
            };
        },
    },
    [
        [0, 0, 2, 1, 3]
    ],
]);