_N_E = (window.webpackJsonp_N_E = window.webpackJsonp_N_E || []).push([
    [11],
    {
        "/EDR": function(t, e, n) {
            (window.__NEXT_P = window.__NEXT_P || []).push([
                "/",
                function() {
                    return n("QeBL");
                },
            ]);
        },
        QeBL: function(t, e, n) {
            "use strict";
            n.r(e),
                n.d(e, "default", function() {
                    return a;
                });
            var i = n("nKUr"),
                c = n("bhNz");

            function a() {
                return Object(i.jsx)(i.Fragment, {
                    children: Object(i.jsx)(c.default, {}),
                });
            }
        },
        bhNz: function(t, e, n) {
            "use strict";
            n.r(e),
                n.d(e, "default", function() {
                    return F;
                });
            var i = n("nKUr"),
                c = n("q1tI"),
                a = n("Dp36"),
                r = n("6oXP"),
                s = n("vOnD"),
                o = s.b.section.withConfig({
                    displayName: "styles__Container",
                    componentId: "in82iy-0",
                })([
                    "background:#0A0F0D;height:265px;box-shadow:0 5px 20px rgba(0,0,0,0.3);margin-bottom:30px;",
                ]),
                d = s.b.div.withConfig({
                    displayName: "styles__Content",
                    componentId: "in82iy-1",
                })([""]),
                l = s.b.div.withConfig({
                    displayName: "styles__Context",
                    componentId: "in82iy-2",
                })([
                    "text-align:center;font-style:italic;color:#F9F9F9;height:100%;display:flex;flex-direction:column;justify-content:center;align-items:center;h2{font-size:2rem;}p{background:#EC1D24;display:inline;font-weight:600;padding:0.3rem 0.5rem;font-size:1.5rem;}",
                ]);

            function m() {
                return Object(i.jsxs)(o, {
                    children: [
                        Object(i.jsxs)(d, {
                            children: [
                                Object(i.jsx)("div", { className: "pop" }),
                                Object(i.jsx)("div", { className: "hero-mask" }),
                                Object(i.jsx)("div", {}),
                            ],
                        }),
                        Object(i.jsxs)(l, {
                            children: [
                                Object(i.jsx)("h2", { children: "OBJECTIVE" }),
                                Object(i.jsx)("p", {
                                    children: "TESTE PARA VAGA DE DESENVOLVEDOR FRONT-END",
                                }),
                            ],
                        }),
                    ],
                });
            }
            var j = n("9xxL"),
                b = n("YFqc"),
                h = n.n(b),
                u = s.b.div.withConfig({
                    displayName: "styles__Container",
                    componentId: "iw2tsc-0",
                })([
                    "@media screen and (max-width:800px){grid-column:span 12;}@media screen and (min-width:801px) and (max-width:1023px){grid-column:span 6;}@media screen and (min-width:1024px){grid-column:span 3;}display:flex;flex-direction:column;justify-self:center;",
                ]),
                f = s.b.div.withConfig({
                    displayName: "styles__Content",
                    componentId: "iw2tsc-1",
                })([
                    "div{img{border:4px solid #0A0F0D;width:100%;transition:transform 0.4s;}}h3{text-align:center;margin:0.7rem 0 0.5rem 0;color:#0A0F0D;transition:color 0.4s;}&:hover{img{transform:scale(1.05);}h3{color:#EC1D24;}}",
                ]);

            function x(t) {
                var e = t.image,
                    n = t.id,
                    c = t.name;
                return Object(i.jsx)(u, {
                    children: Object(i.jsx)(h.a, {
                        href: { pathname: "/CharacterDetail/", query: { id: n } },
                        children: Object(i.jsx)("a", {
                            children: Object(i.jsxs)(f, {
                                children: [
                                    Object(i.jsx)("div", {
                                        children: Object(i.jsx)("img", { src: e, alt: c }),
                                    }),
                                    Object(i.jsx)("h3", { children: c }),
                                ],
                            }),
                        }),
                    }),
                });
            }
            var p = n("ukvN"),
                g = s.b.div.withConfig({
                    displayName: "CharactersListstyles__Container",
                    componentId: "gnbjhe-0",
                })([
                    "margin:0 auto;@media screen and (min-width:1024px){width:992px;}",
                ]),
                O = n("LARA"),
                y = n("FrBp"),
                w = s.b.div.withConfig({
                    displayName: "styles__Container",
                    componentId: "tlnpna-0",
                })([
                    "margin:60px;display:flex;justify-content:center;align-items:center;ul{display:flex;li{margin:0 0.4rem;button{background:#0A0F0D;color:#F9F9F9;border:1px solid #0A0F0D;padding:0.5rem 0.7rem;border-radius:7px;font-weight:600;transition:background 0.2s;&:hover{background:#F9F9F9;color:#0A0F0D;}}.current-page{background:#F9F9F9;color:#0A0F0D;}}}",
                ]);

            function _(t) {
                var e = t.limit,
                    n = t.total,
                    c = t.offset,
                    a = t.setOffset,
                    r = c ? c / e + 1 : 1,
                    s = Math.ceil(n / e),
                    o = Math.max(r - 4, 1);
                return Object(i.jsx)(w, {
                    children: Object(i.jsx)("ul", {
                        children: Array.from({ length: Math.min(9, s) })
                            .map(function(t, e) {
                                return e + o;
                            })
                            .map(function(t) {
                                return Object(i.jsx)(
                                    "li", {
                                        children: Object(i.jsx)("button", {
                                            onClick: function() {
                                                return a((t - 1) * e);
                                            },
                                            className: t === r ? "current-page" : "",
                                            children: t,
                                        }),
                                    },
                                    t
                                );
                            }),
                    }),
                });
            }

            function F() {
                var t = Object(c.useState)([]),
                    e = t[0],
                    n = t[1],
                    s = Object(c.useState)(),
                    o = s[0],
                    d = s[1],
                    l = Object(c.useState)(!1),
                    b = l[0],
                    h = l[1],
                    u = Object(c.useState)(0),
                    f = u[0],
                    w = u[1];
                return (
                    Object(c.useEffect)(
                        function() {
                            h(!0),
                                a.a
                                .get(
                                    "characters?limit="
                                    .concat(12, "&offset=")
                                    .concat(f, "&")
                                    .concat(
                                        "ts=1616179034&apikey=c22ba519d36ef5d64b7c341b94e6c7f9&hash=8a8b24fa59c32ba7bb0920b0c2721d86"
                                    )
                                )
                                .then(function(t) {
                                    d(t.data.data), n(t.data.data.results), h(!1);
                                })
                                .catch(function(t) {
                                    h(!0), console.error(t);
                                });
                        }, [f]
                    ),
                    Object(i.jsxs)(i.Fragment, {
                        children: [
                            Object(i.jsx)(r.a, {}),
                            Object(i.jsx)(m, {}),
                            Object(i.jsx)(g, {
                                children: b ?
                                    Object(i.jsx)(p.a, {}) : Object(i.jsxs)(i.Fragment, {
                                        children: [
                                            Object(i.jsx)(j.a, { title: "PERSONAGENS" }),
                                            Object(i.jsx)(O.a, {
                                                children: e.length > 0 ?
                                                    e.map(function(t) {
                                                        return Object(i.jsx)(x, {
                                                            id: t.id,
                                                            name: t.name,
                                                            image: ""
                                                                .concat(
                                                                    t.thumbnail.path,
                                                                    "/standard_fantastic."
                                                                )
                                                                .concat(t.thumbnail.extension),
                                                        });
                                                    }) : Object(i.jsx)("img", {
                                                        src: "/assets/images/",
                                                    }),
                                            }),
                                            o &&
                                            Object(i.jsx)(_, {
                                                limit: 20,
                                                total: o.total,
                                                offset: f,
                                                setOffset: w,
                                            }),
                                        ],
                                    }),
                            }),
                            Object(i.jsx)(y.a, {}),
                        ],
                    })
                );
            }
        },
    },
    [
        ["/EDR", 0, 2, 4, 1, 3, 5]
    ],
]);