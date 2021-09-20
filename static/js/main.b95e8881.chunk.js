(window.webpackJsonp = window.webpackJsonp || []).push([
    [0], {
        118: function(e, t, n) {},
        119: function(e, t, n) {},
        120: function(e, t, n) {},
        121: function(e, t, n) {},
        122: function(e, t, n) {},
        123: function(e, t, n) {},
        124: function(e, t, n) {},
        126: function(e, t, n) {
            "use strict";
            n.r(t);
            var a, r = n(0),
                i = n.n(r),
                o = n(47),
                c = n.n(o),
                l = n(17),
                s = n(10),
                u = n(52),
                m = n(11),
                d = n(3),
                f = n(18),
                b = { heroes: [], limit: window.innerWidth < 1100 ? 4 : 3, totalPages: 0, offset: 0, totalItems: 0, name: "", selectedHero: { comics: { items: [] }, descriptio: "", events: { items: [] }, id: 0, name: "", series: { items: [] }, stories: { items: [] }, thumbnail: { path: "", extension: "" }, urls: [] } };
            var h, p = Object(f.createActions)({ fetchHeroesAsync: [], fetchedHeroes: ["totalItems", "heroes"], changeLimit: [], onPaginateAsync: ["offset"], onPaginate: ["offset"], onFilterAsync: ["name"], changeFilterName: ["name"], selectHero: ["selectedHero"] }),
                v = p.Types,
                g = p.Creators,
                E = Object(f.createReducer)(b, (a = {}, Object(m.a)(a, f.Types.DEFAULT, function(e) { return Object(d.a)({}, e) }), Object(m.a)(a, v.FETCHED_HEROES, function(e, t) {
                    var n = t.totalItems,
                        a = t.heroes,
                        r = Math.round(n / e.limit);
                    return Object(d.a)({}, e, { heroes: a, totalItems: n, totalPages: r })
                }), Object(m.a)(a, v.CHANGE_LIMIT, function(e) { var t = window.innerWidth < 1100 ? 4 : 3; return Object(d.a)({}, e, { limit: t, offset: 0 }) }), Object(m.a)(a, v.ON_PAGINATE, function(e, t) { var n = t.offset; return Object(d.a)({}, e, { offset: n }) }), Object(m.a)(a, v.CHANGE_FILTER_NAME, function(e, t) { var n = t.name; return Object(d.a)({}, e, { name: n, offset: 0 }) }), Object(m.a)(a, v.SELECT_HERO, function(e, t) { var n = t.selectedHero; return Object(d.a)({}, e, { selectedHero: n }) }), a)),
                y = { windowWidth: window.innerWidth, isMobile: window.innerWidth < 1100, isLoading: !1 };
            var O = Object(f.createActions)({ onWindowResize: [], showLoader: [], hideLoader: [] }),
                x = O.Types,
                w = O.Creators,
                j = Object(f.createReducer)(y, (h = {}, Object(m.a)(h, f.Types.DEFAULT, function(e) { return Object(d.a)({}, e) }), Object(m.a)(h, x.ON_WINDOW_RESIZE, function(e, t) { var n = window.innerWidth; return { windowWidth: n, isMobile: n < 1200 } }), Object(m.a)(h, x.SHOW_LOADER, function(e) { return Object(d.a)({}, e, { isLoading: !0 }) }), Object(m.a)(h, x.HIDE_LOADER, function(e) { return Object(d.a)({}, e, { isLoading: !1 }) }), h)),
                k = Object(s.c)({ Heroes: E, Template: j }),
                M = n(15),
                H = n.n(M),
                C = n(51),
                T = n(14),
                N = n(49),
                A = n.n(N),
                R = H.a.mark(I),
                L = H.a.mark(D),
                _ = H.a.mark(B),
                P = "8753d3f72d17692c327806bc8a360493",
                S = Number(new Date),
                F = A.a.create(),
                W = function(e) { return e.Heroes };

            function I() {
                var e, t, n, a, r, i, o, c;
                return H.a.wrap(function(l) {
                    for (;;) switch (l.prev = l.next) {
                        case 0:
                            return l.prev = 0, l.next = 3, Object(T.c)(w.showLoader());
                        case 3:
                            return l.next = 5, Object(T.d)(W);
                        case 5:
                            return e = l.sent, l.next = 8, F.update(S + "5cb82d4d6de8ff209bd7e6b3732cf258cadd59e38753d3f72d17692c327806bc8a360493");
                        case 8:
                            return t = e.name ? "&nameStartsWith=".concat(e.name) : "", n = e.limit * e.offset, l.next = 12, Object(T.b)(fetch, "https://gateway.marvel.com/v1/public/characters?ts=".concat(S, "&").concat(t, "&orderBy=name&limit=").concat(e.limit, "&offset=").concat(n, "&apikey=").concat(P, "&hash=").concat(F.hex()));
                        case 12:
                            return a = l.sent, l.next = 15, a.json();
                        case 15:
                            return r = l.sent, i = r.data, o = i.total, c = i.results, l.next = 19, Object(T.c)(g.fetchedHeroes(o, c));
                        case 19:
                            l.next = 25;
                            break;
                        case 21:
                            return l.prev = 21, l.t0 = l.catch(0), l.next = 25, console.log("erro ao consumir api ", l.t0);
                        case 25:
                            return l.prev = 25, l.next = 28, Object(T.c)(w.hideLoader());
                        case 28:
                            return l.finish(25);
                        case 29:
                        case "end":
                            return l.stop()
                    }
                }, R, null, [
                    [0, 21, 25, 29]
                ])
            }

            function D(e) {
                var t;
                return H.a.wrap(function(n) {
                    for (;;) switch (n.prev = n.next) {
                        case 0:
                            return t = e.offset, n.next = 3, Object(T.c)(g.onPaginate(t));
                        case 3:
                            return n.next = 5, I();
                        case 5:
                        case "end":
                            return n.stop()
                    }
                }, L)
            }

            function B(e) {
                var t;
                return H.a.wrap(function(n) {
                    for (;;) switch (n.prev = n.next) {
                        case 0:
                            return t = e.name, n.next = 3, Object(T.c)(g.changeFilterName(t));
                        case 3:
                            return n.next = 5, I();
                        case 5:
                        case "end":
                            return n.stop()
                    }
                }, _)
            }
            var z = [Object(T.e)(v.FETCH_HEROES_ASYNC, I), Object(T.e)(v.ON_PAGINATE_ASYNC, D), Object(T.e)(v.ON_FILTER_ASYNC, B)],
                U = H.a.mark(q);

            function q() {
                return H.a.wrap(function(e) {
                    for (;;) switch (e.prev = e.next) {
                        case 0:
                            return e.next = 2, Object(T.a)(Object(C.a)(z));
                        case 2:
                        case "end":
                            return e.stop()
                    }
                }, U)
            }
            var G = Object(u.a)(),
                V = s.d;
            "development" === "production".trim() && (V = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || s.d);
            var Y = Object(s.e)(k, V(Object(s.a)(G)));
            G.run(q);
            var J = n(127),
                X = (n(118), n(129)),
                K = n(128),
                Z = { primary: "#D42026", secondary: "#fbe9e9", inputBorder: "#A5A5A5", tableBorder: "#f6d2d3", text: "#4E4E4E", white: "#FFFFFF" },
                $ = 16;

            function Q(e) { return "".concat(e / $, "rem") }
            var ee = { fontFamily: "Roboto", fontWeight: 300 },
                te = { fontFamily: "Roboto", fontWeight: 400 },
                ne = { fontFamily: "Roboto", fontWeight: 900 },
                ae = { title: Object(d.a)({ fontSize: Q(27), lineHeight: Q(32), color: Z.primary }, ne), subTitle: Object(d.a)({ fontSize: Q(27), lineHeight: Q(32), color: Z.primary }, ee), label: Object(d.a)({ fontSize: Q(16), lineHeight: Q(19), color: Z.primary }, te), header: Object(d.a)({ fontSize: Q(16), lineHeight: Q(19), color: Z.white }, te), text: Object(d.a)({ fontSize: Q(21), lineHeight: Q(24), color: Z.text }, te), pageNumber: Object(d.a)({ fontSize: Q(21), lineHeight: Q(24) }, te) },
                re = Object(d.a)({}, ae, { title: Object(d.a)({}, ae.title, { fontSize: Q(16), lineHeight: Q(19) }), subTitle: Object(d.a)({}, ae.subTitle, { fontSize: Q(16), lineHeight: Q(19) }) });
            var ie = function(e) {
                var t = e.text,
                    n = e.isMobile,
                    a = n ? re.title : ae.title,
                    r = { container: { display: "flex", flexDirection: "column" }, title: Object(d.a)({}, a), titleBar: { width: Q(54), height: Q(n ? 3 : 4), marginTop: Q(2), backgroundColor: Z.primary } };
                return i.a.createElement("div", { style: r.container }, i.a.createElement("h1", { style: r.title }, t.toUpperCase()), i.a.createElement("div", { style: r.titleBar }))
            };
            var oe = function(e) {
                var t = e.text,
                    n = e.isMobile ? re.subTitle : ae.subTitle,
                    a = Object(d.a)({}, n);
                return i.a.createElement("h2", { style: a }, t.toUpperCase())
            };
            var ce = function(e) {
                var t = e.title,
                    n = e.subtitle,
                    a = e.isMobile;
                return i.a.createElement("div", { style: { display: "flex", flexDirection: "row" } }, i.a.createElement(ie, { text: t, isMobile: a }), i.a.createElement(oe, { text: n, isMobile: a }))
            };
            var le = function(e) {
                var t = e.isMobile,
                    n = { container: { display: "flex", flexDirection: "row", justifyContent: "space-between", width: t ? void 0 : "100%", marginBottom: Q(t ? 12 : 34), marginLeft: t ? Q(30) : 0 } };
                return i.a.createElement("div", { style: n.container }, i.a.createElement(ce, { title: "OBJECTIVE", subtitle: "-BUSCA HERO", isMobile: t }), !t && i.a.createElement(oe, { text: "Alex Soares", isMobile: t }))
            };
            var se = function() { var e = { backgroundColor: Z.primary, height: Q(12), width: "100%", left: 0, bottom: 0 }; return i.a.createElement("div", { style: e }) };
            n(119);
            var ue = function(e) {
                var t = e.isVisible,
                    n = { container: { position: "absolute", top: 0, left: 0, width: "100%", height: "100%", minHeight: "100vh", zIndex: 9999, display: "flex", justifyContent: "center", alignItems: "center" } };
                return t ? i.a.createElement("div", { style: n.container }, i.a.createElement("div", null, i.a.createElement("div", { className: "lds-dual-ring" }))) : i.a.createElement("span", null)
            };
            var me = Object(l.b)(function(e) { return { isMobile: e.Template.isMobile, isLoading: e.Template.isLoading } }, function(e) { return Object(s.b)(Object(d.a)({}, w, g), e) })(function(e) {
                    var t = e.children,
                        n = e.isMobile,
                        a = e.onWindowResize,
                        o = e.changeLimit,
                        c = e.isLoading;
                    Object(r.useEffect)(function() {
                        return window.addEventListener("resize", function() { a(), o() }),
                            function() { return window.removeEventListener("resize", function() { o(), a() }) }
                    }, []);
                    var l = { container: { display: "flex", flexDirection: "column", flex: 1 }, pageContainer: { margin: n ? "12px 0px 0px 0px" : "20px 42px 0px 42px", display: "flex", flexDirection: "column", flex: 1 } };
                    return i.a.createElement(r.Fragment, null, i.a.createElement(ue, { isVisible: c }), i.a.createElement("div", { style: l.container }, i.a.createElement("div", { style: l.pageContainer }, i.a.createElement(le, { isMobile: n }), t), i.a.createElement(se, null)))
                }),
                de = n(21),
                fe = (n(120), 1e3),
                be = 13,
                he = 9,
                pe = null;
            var ve = function(e) {
                var t = e.label,
                    n = e.id,
                    a = e.searchHandler,
                    o = e.isMobile,
                    c = e.filter,
                    l = Object(r.useState)(""),
                    s = Object(de.a)(l, 2),
                    u = s[0],
                    m = s[1];
                Object(r.useEffect)(function() { m(c) }, [c]), Object(r.useEffect)(function() { f(), pe = setTimeout(b, fe) }, [u]);
                var f = function() { return !!pe && clearTimeout(pe) },
                    b = function() { f(), u !== c && a(u) },
                    h = { container: { marginLeft: o ? Q(30) : void 0, marginRight: o ? Q(30) : void 0, marginBottom: Q(o ? 12 : 34) }, label: Object(d.a)({}, ae.label), input: Object(d.a)({}, ae.label, { color: Z.text, border: "1px solid ".concat(Z.inputBorder), width: o ? "100%" : Q(384), paddingLeft: Q(14), height: Q(29), backgroundColor: Z.white }) };
                return i.a.createElement("div", { style: h.container }, i.a.createElement("label", { style: h.label, htmlFor: n }, t), i.a.createElement("input", { style: h.input, className: "search__input", id: n, name: n, type: "text", value: u, onKeyDown: function(e) { return e.keyCode === be || e.keyCode === he ? b() : null }, onChange: function(e) { return m(e.target.value) } }))
            };
            n(121);
            var ge = function(e) {
                var t = e.columns,
                    n = e.registers,
                    a = e.onRowClick,
                    r = e.isMobile,
                    o = r ? "".concat(Q(16), " 0 ").concat(Q(16), " ").concat(Q(14)) : "".concat(Q(20), " 0 ").concat(Q(20), " ").concat(Q(14)),
                    c = r ? "".concat(Q(10), " 0 ").concat(Q(10), " 6.2rem") : "".concat(Q(10), " 0 ").concat(Q(10), " ").concat(Q(14)),
                    l = { text: Object(d.a)({}, ae.text, { padding: o, borderBottom: "".concat(Q(r ? 1 : 2), " solid ").concat(Z.primary) }), header: Object(d.a)({}, ae.header, { backgroundColor: Z.primary, padding: c }) };
                return i.a.createElement("table", { className: "table" }, i.a.createElement("thead", null, i.a.createElement("tr", null, t.map(function(e) { return i.a.createElement("th", { key: e.label, style: l.header }, e.label) }))), i.a.createElement("tbody", null, n.map(function(e, n) { return i.a.createElement("tr", { key: n, onClick: function() { return a(e) } }, function(e, t, n) { return t.map(function(t, a) { return i.a.createElement("td", { key: a + n, style: l.text }, t.renderFunction ? t.renderFunction(e) : e[t.field]) }) }(e, t, n)) })))
            };
            var Ee = function(e) {
                var t = e.image,
                    n = e.name,
                    a = { container: { display: "flex", flexDirection: "row", alignItems: "center" }, image: { background: 'url("'.concat(t, '") center center / cover no-repeat'), borderRadius: "50%", marginRight: Q(25), width: Q(58), height: Q(58) }, text: Object(d.a)({}, ae.text) };
                return i.a.createElement("div", { style: a.container }, i.a.createElement("div", { style: a.image }), i.a.createElement("span", { style: a.text }, n))
            };
            var ye = function(e) {
                    var t = e.heroes,
                        n = e.history,
                        a = e.isMobile,
                        r = e.selectHandler,
                        o = [{ label: a ? "Nome" : "Personagem", renderFunction: function(e) { return i.a.createElement(Ee, { image: "".concat(e.thumbnail.path, ".").concat(e.thumbnail.extension), name: e.name }) } }, { label: "S\xe9ries", renderFunction: function(e) { return e.series.items.slice(0, 3).map(function(e) { return i.a.createElement("div", { key: e.name, className: "color-black roboto-regular" }, e.name.substring(0, 24)) }) } }, { label: "Eventos", renderFunction: function(e) { return e.events.items.slice(0, 3).map(function(e) { return i.a.createElement("div", { key: e.name, className: "color-black roboto-regular" }, e.name.substring(0, 24)) }) } }];
                    return a && (delete o[1], delete o[2]), i.a.createElement(ge, { isMobile: a, columns: o, registers: t, onRowClick: function(e) { r(e), n.push("/code-hero/details") } })
                },
                Oe = n(4);
            n(122);
            var xe = function(e) {
                var t = e.isEnable,
                    n = e.onClickHandler,
                    a = e.isMobile,
                    r = t ? Z.primary : Z.secondary,
                    o = { width: 0, height: 0, borderTop: "".concat(Q(a ? 10 : 8), " solid transparent"), borderBottom: "".concat(Q(a ? 10 : 8), " solid transparent"), borderRight: "".concat(Q(a ? 15 : 12), " solid ").concat(r), marginRight: Q(a ? 60 : 12), cursor: t ? "pointer" : "not-allowed" };
                return i.a.createElement("div", { style: o, onClick: function() { t && n() } })
            };
            var we = function(e) {
                var t = e.isEnable,
                    n = e.onClickHandler,
                    a = e.isMobile,
                    r = t ? Z.primary : Z.secondary,
                    o = { width: 0, height: 0, borderTop: "".concat(Q(a ? 10 : 8), " solid transparent"), borderBottom: "".concat(Q(a ? 10 : 8), " solid transparent"), borderLeft: "".concat(Q(a ? 15 : 12), " solid ").concat(r), marginLeft: Q(a ? 60 : 12), cursor: t ? "pointer" : "not-allowed" };
                return i.a.createElement("div", { style: o, onClick: function() { t && n() } })
            };

            function je(e) {
                var t = e.isActive,
                    n = e.onClickHandler,
                    a = e.number,
                    r = t ? Z.primary : Z.white,
                    o = t ? Z.white : Z.primary,
                    c = { number: Object(d.a)({ backgroundColor: r, color: o, width: Q(32), height: Q(32), borderRadius: "50%", border: "solid 1px ".concat(Z.primary) }, ae.pageNumber, { display: "flex", justifyContent: "center", alignItems: "center", cursor: "pointer", marginRight: "20px" }) };
                return i.a.createElement("div", { className: "page-number", style: c.number, onClick: function() { n() } }, a)
            }
            je.defaultProps = { isActive: !1 };
            var ke = je;

            function Me(e) {
                var t = e.offset,
                    n = e.totalPages,
                    a = e.isMobile,
                    o = e.onPaginate,
                    c = Object(r.useState)([]),
                    l = Object(de.a)(c, 2),
                    s = l[0],
                    u = l[1],
                    m = Object(r.useState)(0),
                    d = Object(de.a)(m, 2),
                    f = d[0],
                    b = d[1];
                Object(r.useEffect)(function() {
                    for (var e = [], t = 0; t < n; t++) e.push(t);
                    u(e)
                }, [n]);
                return i.a.createElement("div", { className: "paginator", style: { display: "flex", flexDirection: "row", flex: 1, alignItems: "center", justifyContent: "center" } }, i.a.createElement(xe, { isEnable: t > 0, isMobile: a, onClickHandler: function() { return o(t - 1) } }), function() { var e = n < 6 ? n : 5; return t > (e = a && e > 2 ? 2 : e) + f && b(t - e), t < f && b(f - 1), s.slice(f, e + 1 + f).map(function(e) { return i.a.createElement(ke, { key: e, isActive: t === e, onClickHandler: function() { return o(e) }, number: e + 1 }) }) }(), i.a.createElement(we, { isEnable: t + 1 !== n, isMobile: a, onClickHandler: function() { return o(t + 1) } }))
            }
            Me.defaultProps = { offset: Oe.PropTypes.number.isRequired, totalPages: Oe.PropTypes.number.isRequired, isMobile: Oe.PropTypes.number.isRequired, onPaginate: Oe.PropTypes.func.isRequired };
            var He = Me;
            n(123);
            var Ce = Object(l.b)(function(e) { return { heroes: e.Heroes.heroes, isMobile: e.Template.isMobile, limit: e.Heroes.limit, offset: e.Heroes.offset, totalPages: e.Heroes.totalPages, filter: e.Heroes.name } }, function(e) { return Object(s.b)(g, e) })(function(e) {
                var t = e.history,
                    n = e.heroes,
                    a = e.isMobile,
                    o = e.limit,
                    c = e.offset,
                    l = e.totalPages,
                    s = e.filter,
                    u = e.selectHero,
                    m = e.fetchHeroesAsync,
                    d = e.onPaginateAsync,
                    f = e.onFilterAsync;
                return Object(r.useEffect)(function() { m() }, [o]), i.a.createElement("div", { className: "search-page" }, i.a.createElement(ve, { filter: s, isMobile: a, searchHandler: f, label: "Nome do Personagem", id: "hero-search" }), i.a.createElement(ye, { heroes: n, history: t, isMobile: a, selectHandler: u }), n.length > 0 && i.a.createElement(He, { onPaginate: d, offset: c, totalPages: l, isMobile: a }))
            });
            var Te = function(e) {
                var t = e.onCLickHandler,
                    n = { container: Object(d.a)({}, ae.label, { marginBottom: Q(12), cursor: "pointer" }), icon: { marginRight: Q(5) } };
                return i.a.createElement("div", { style: n.container, onClick: t }, i.a.createElement("i", { style: n.icon, className: "fas fa-chevron-left" }), i.a.createElement("span", null, "Voltar"))
            };
            var Ne = function() { var e = { backgroundColor: Z.primary, width: "100%", height: Q(3) }; return i.a.createElement("div", { style: e }) };
            var Ae = function(e) {
                var t = e.events,
                    n = e.isMobile,
                    a = { container: { marginTop: Q(12), width: "95%" }, text: Object(d.a)({}, ae.text, { textAlign: "justify", marginTop: Q(12) }) };
                return i.a.createElement("div", { style: a.container, className: "events" }, i.a.createElement(oe, { text: "Eventos", isMobile: n }), i.a.createElement(Ne, { isMobile: n }), i.a.createElement("ul", null, t.items.map(function(e, t) { return i.a.createElement("li", { key: t, style: a.text }, e.name) })))
            };
            var Re = function(e) {
                var t = e.series,
                    n = e.isMobile,
                    a = { container: { marginTop: Q(12), width: "95%" }, text: Object(d.a)({}, ae.text, { textAlign: "justify", marginTop: Q(12) }) };
                return i.a.createElement("div", { style: a.container, className: "series" }, i.a.createElement(oe, { text: "S\xe9ries", isMobile: n }), i.a.createElement(Ne, { isMobile: n }), i.a.createElement("ul", null, t.items.map(function(e, t) { return i.a.createElement("li", { key: t, style: a.text }, e.name) })))
            };
            var Le = function(e) {
                var t = e.stories,
                    n = e.isMobile,
                    a = { container: { marginTop: Q(12), width: "95%" }, text: Object(d.a)({}, ae.text, { marginTop: Q(12) }) };
                return i.a.createElement("div", { style: a.container, className: "stories" }, i.a.createElement(oe, { text: "Est\xf3rias", isMobile: n }), i.a.createElement(Ne, null), i.a.createElement("ul", null, t.items.map(function(e, t) { return i.a.createElement("li", { key: t, style: a.text }, e.name) })))
            };
            var _e = function(e) {
                var t = e.name,
                    n = e.description,
                    a = e.isMobile,
                    r = { container: { marginTop: Q(12), width: "95%" }, text: Object(d.a)({}, ae.text, { textAlign: "justify", marginTop: Q(12) }) };
                return i.a.createElement("div", { style: r.container, className: "text" }, i.a.createElement(ie, { text: t, isMobile: a }), i.a.createElement("p", { style: r.text }, n))
            };
            n(124);
            var Pe = Object(l.b)(function(e) { return { hero: e.Heroes.selectedHero, isMobile: e.Template.isMobile } })(function(e) {
                var t = e.history,
                    n = e.hero,
                    a = e.isMobile,
                    r = a ? re.title : ae.title,
                    o = { name: Object(d.a)({}, r, { marginBottom: Q(12) }), mobileContainer: { marginRight: Q(12), marginLeft: Q(12) } };
                return i.a.createElement("div", { className: "details-page", style: a ? o.mobileContainer : void 0 }, i.a.createElement(Te, { onCLickHandler: function() { return t.push("/code-hero/") } }), i.a.createElement("div", { className: a ? "details-page__mobile" : "details-page__grid" }, i.a.createElement("img", { className: "image", style: { maxWidth: "100%", height: "auto" }, src: "".concat(n.thumbnail.path, ".").concat(n.thumbnail.extension), alt: n.name }), i.a.createElement(_e, { name: n.name, description: n.description, isMobile: a }), i.a.createElement(Ae, { events: n.events, isMobile: a }), i.a.createElement(Re, { series: n.series, isMobile: a }), i.a.createElement(Le, { stories: n.stories, isMobile: a })))
            });
            var Se = function() { return i.a.createElement(me, null, i.a.createElement(X.a, null, i.a.createElement(K.a, { exact: !0, path: "/", component: Ce }), i.a.createElement(K.a, { exact: !0, path: "/code-hero/", component: Ce }), i.a.createElement(K.a, { path: "/code-hero/details", component: Pe }))) },
                Fe = Boolean("localhost" === window.location.hostname || "[::1]" === window.location.hostname || window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));

            function We(e, t) {
                navigator.serviceWorker.register(e).then(function(e) {
                    e.onupdatefound = function() {
                        var n = e.installing;
                        null != n && (n.onstatechange = function() { "installed" === n.state && (navigator.serviceWorker.controller ? (console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."), t && t.onUpdate && t.onUpdate(e)) : (console.log("Content is cached for offline use."), t && t.onSuccess && t.onSuccess(e))) })
                    }
                }).catch(function(e) { console.error("Error during service worker registration:", e) })
            }
            c.a.render(i.a.createElement(l.a, { store: Y }, i.a.createElement(J.a, null, i.a.createElement(Se, null))), document.getElementById("root")),
                function(e) {
                    if ("serviceWorker" in navigator) {
                        if (new URL("/code-hero", window.location.href).origin !== window.location.origin) return;
                        window.addEventListener("load", function() {
                            var t = "".concat("/code-hero", "/service-worker.js");
                            Fe ? (function(e, t) {
                                fetch(e).then(function(n) {
                                    var a = n.headers.get("content-type");
                                    404 === n.status || null != a && -1 === a.indexOf("javascript") ? navigator.serviceWorker.ready.then(function(e) { e.unregister().then(function() { window.location.reload() }) }) : We(e, t)
                                }).catch(function() { console.log("No internet connection found. App is running in offline mode.") })
                            }(t, e), navigator.serviceWorker.ready.then(function() { console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA") })) : We(t, e)
                        })
                    }
                }()
        },
        54: function(e, t, n) { e.exports = n(126) }
    },
    [
        [54, 1, 2]
    ]
]);
//# sourceMappingURL=main.b95e8881.chunk.js.map