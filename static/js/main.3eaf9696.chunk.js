(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{103:function(e,t,n){},104:function(e,t,n){},105:function(e,t,n){},106:function(e,t,n){},107:function(e,t,n){},108:function(e,t,n){},109:function(e,t,n){},111:function(e,t,n){"use strict";n.r(t);var r,a=n(0),o=n.n(a),i=n(38),c=n.n(i),l=n(12),s=n(8),u=n(9),m=n(3),d=n(10);var f,b=Object(d.createActions)({fetchHeroes:[]}),h=b.Types,v=(b.Creators,Object(d.createReducer)({heroes:[{name:"Tony Stark",image:"https://helpx.adobe.com/in/stock/how-to/visual-reverse-image-search/_jcr_content/main-pars/image.img.jpg/visual-reverse-image-search-v2_1000x560.jpg",series:["Invincible Iron man","Civil War","IronHeart"],events:["AvX","Demon in the Bottle","Dynasty M"]},{name:"Tony Stark",image:"https://helpx.adobe.com/in/stock/how-to/visual-reverse-image-search/_jcr_content/main-pars/image.img.jpg/visual-reverse-image-search-v2_1000x560.jpg",series:["Invincible Iron man","Civil War","IronHeart"],events:["AvX","Demon in the Bottle","Dynasty M"]},{name:"Tony Stark",image:"https://helpx.adobe.com/in/stock/how-to/visual-reverse-image-search/_jcr_content/main-pars/image.img.jpg/visual-reverse-image-search-v2_1000x560.jpg",series:["Invincible Iron man","Civil War","IronHeart"],events:["AvX","Demon in the Bottle","Dynasty M"]}]},(r={},Object(u.a)(r,d.Types.DEFAULT,function(e){return Object(m.a)({},e)}),Object(u.a)(r,h.FETCH_HEROES,function(e,t){return Object(m.a)({},e)}),r))),p={windowWidth:window.innerWidth,isMobile:window.innerWidth<1200};var g=Object(d.createActions)({onWindowResize:[]}),E=g.Types,w=g.Creators,y=Object(d.createReducer)(p,(f={},Object(u.a)(f,d.Types.DEFAULT,function(e){return Object(m.a)({},e)}),Object(u.a)(f,E.ON_WINDOW_RESIZE,function(e,t){var n=window.innerWidth;return{windowWidth:n,isMobile:n<1200}}),f)),x=s.d;"development"==="production".trim()&&(x=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||s.d);var k=Object(s.e)(Object(s.c)({Heroes:v,Template:y}),x(Object(s.a)())),j=(n(103),n(113)),O=n(114),C=n(115),M={primary:"#D42026",secondary:"#fbe9e9",inputBorder:"#A5A5A5",text:"#4E4E4E",white:"#FFFFFF"},H=16;function _(e){return"".concat(e/H,"rem")}var T={fontFamily:"Roboto",fontWeight:300},A={fontFamily:"Roboto",fontWeight:400},S={fontFamily:"Roboto",fontWeight:900},W={title:Object(m.a)({fontSize:_(27),lineHeight:_(32),color:M.primary},S),subTitle:Object(m.a)({fontSize:_(27),lineHeight:_(32),color:M.primary},T),label:Object(m.a)({fontSize:_(16),lineHeight:_(19),color:M.primary},A),header:Object(m.a)({fontSize:_(16),lineHeight:_(19),color:M.white},A),text:Object(m.a)({fontSize:_(21),lineHeight:_(24),color:M.text},A),pageNumber:Object(m.a)({fontSize:_(21),lineHeight:_(24)},A)},N=Object(m.a)({},W,{title:Object(m.a)({},W.title,{fontSize:_(16),lineHeight:_(19)}),subTitle:Object(m.a)({},W.subTitle,{fontSize:_(16),lineHeight:_(19)})});var F=function(e){var t=e.text,n=e.isMobile,r=n?N.title:W.title,a={container:{display:"flex",flexDirection:"column"},title:Object(m.a)({},r),titleBar:{width:_(54),height:_(n?3:4),marginTop:_(2),backgroundColor:M.primary}};return o.a.createElement("div",{style:a.container},o.a.createElement("h1",{style:a.title},t.toUpperCase()),o.a.createElement("div",{style:a.titleBar}))};var D=function(e){var t=e.text,n=e.isMobile?N.subTitle:W.subTitle,r=Object(m.a)({},n);return o.a.createElement("h2",{style:r},t.toUpperCase())};var R=function(e){var t=e.title,n=e.subtitle,r=e.isMobile;return o.a.createElement("div",{style:{display:"flex",flexDirection:"row"}},o.a.createElement(F,{text:t,isMobile:r}),o.a.createElement(D,{text:n,isMobile:r}))};var z=function(e){var t=e.isMobile,n={container:{display:"flex",flexDirection:"row",justifyContent:"space-between",width:"100%",marginBottom:_(t?12:34)}};return o.a.createElement("div",{style:n.container},o.a.createElement(R,{title:"busca marvel",subtitle:"teste front-end",isMobile:t}),!t&&o.a.createElement(D,{text:"nome do candidato",isMobile:t}))};n(104);var I=function(){return o.a.createElement("div",{className:"footer background-red"})};var B=Object(l.b)(function(e){return{isMobile:e.Template.isMobile}},function(e){return Object(s.b)(w,e)})(function(e){var t=e.children,n=e.isMobile,r=e.onWindowResize;Object(a.useEffect)(function(){return window.addEventListener("resize",r),function(){return window.removeEventListener("resize",r)}},[]);var i={margin:n?"12px 0px 0px 0px":"20px 42px 0px 42px",display:"flex",flexDirection:"column",flex:1};return o.a.createElement("div",{style:i},o.a.createElement(z,{isMobile:n}),t,o.a.createElement(I,null))}),L=n(42);n(105);var P=function(e){var t=e.label,n=e.id,r=(e.searchHandler,Object(a.useState)("")),i=Object(L.a)(r,2),c=i[0],l=i[1];return o.a.createElement("div",{className:"search"},o.a.createElement("label",{className:"search__label color-red roboto-regular",htmlFor:n},t),o.a.createElement("input",{autoFocus:!0,className:"search__input",id:n,name:n,type:"text",value:c,onChange:function(e){l(e.target.value)}}))};n(106);var U=function(e){var t=e.columns,n=e.registers,r=e.onRowClick,a=e.isMobile,i={text:Object(m.a)({},W.text,{padding:a?"".concat(_(12)," 0 ").concat(_(12)," ").concat(_(14)):"".concat(_(20)," 0 ").concat(_(20)," ").concat(_(14)),borderBottom:"3px solid #f6d2d3"}),header:Object(m.a)({},W.header,{backgroundColor:M.primary})};return o.a.createElement("table",{className:"table"},o.a.createElement("thead",null,o.a.createElement("tr",null,t.map(function(e){return o.a.createElement("th",{key:e.label,style:i.header},e.label)}))),o.a.createElement("tbody",null,n.map(function(e,n){return o.a.createElement("tr",{key:Math.floor(1e4*Math.random())+1,onClick:function(){return r(e)}},function(e,t,n){return t.map(function(t,r){return o.a.createElement("td",{key:r+n,style:i.text},t.renderFunction?t.renderFunction(e):e[t.field])})}(e,t,n))})))},X=(n(107),n(40)),J=n.n(X);function V(e){var t=e.image,n=e.name,r={background:'url("'.concat(t,'") center center no-repeat'),backgroundSize:"cover"};return o.a.createElement("div",{className:"hero-card"},o.a.createElement("div",{className:"hero-card__image",style:r}),o.a.createElement("span",{className:"hero-card__name color-black roboto-regular"},n))}V.defaultProps={image:J.a,name:"Tony Stark"};var Z=V;var $=function(e){var t=e.heroes,n=e.history,r=[{label:"Personagem",renderFunction:function(e){return o.a.createElement(Z,{image:e.image,name:e.name})}},{label:"S\xe9ries",renderFunction:function(e){return e.series.map(function(e){return o.a.createElement("div",{key:Math.floor(1e3*Math.random()),className:"color-black roboto-regular"},e)})}},{label:"Eventos",renderFunction:function(e){return e.events.map(function(e){return o.a.createElement("div",{key:Math.floor(1e3*Math.random()),className:"color-black roboto-regular"},e)})}}];return e.isMobile&&(delete r[1],delete r[2]),o.a.createElement(U,{columns:r,registers:t,onRowClick:function(e){return n.push("/details")}})};n(108);function q(e){var t=e.isEnable,n=e.onClickHandler,r={width:0,height:0,borderTop:"8px solid transparent",borderBottom:"8px solid transparent",borderRight:"12px solid ".concat(t?"#d20a0a":"#efa9a9"),marginRight:"12px",cursor:t?"pointer":"not-allowed"};return o.a.createElement("div",{style:r,onClick:function(){t&&n()}})}q.defaultProps={isEnable:!1};var G=q;function K(e){var t=e.isEnable,n=e.onClickHandler,r={width:0,height:0,borderTop:"8px solid transparent",borderBottom:"8px solid transparent",borderLeft:"12px solid ".concat(t?"#d20a0a":"#efa9a9"),marginLeft:"12px",cursor:t?"pointer":"not-allowed"};return o.a.createElement("div",{style:r,onClick:function(){t&&n()}})}K.defaultProps={isEnable:!1};var Q=K;function Y(e){var t=e.isActive,n=e.onClickHandler,r=e.number,a={backgroundColor:t?"#d42026":"none",color:t?"#fff":"#d42026"};return o.a.createElement("div",{className:"page-number",style:a,onClick:function(){n()}},r)}Y.defaultProps={isActive:!1};var ee=Y;var te=function(){return o.a.createElement("div",{className:"paginator"},o.a.createElement(G,{isEnable:!1,onClickHandler:function(){return!1}}),o.a.createElement(ee,{isActive:!0,onClickHandler:function(){return!1},number:1}),o.a.createElement(ee,{isActive:!1,onClickHandler:function(){return!1},number:2}),o.a.createElement(ee,{isActive:!1,onClickHandler:function(){return!1},number:3}),o.a.createElement(ee,{isActive:!1,onClickHandler:function(){return!1},number:4}),o.a.createElement(ee,{isActive:!1,onClickHandler:function(){return!1},number:5}),o.a.createElement(ee,{isActive:!1,onClickHandler:function(){return!1},number:6}),o.a.createElement(Q,{isEnable:!0,onClickHandler:function(){return!0}}))};n(109);var ne=Object(l.b)(function(e){return{heroes:e.Heroes.heroes,isMobile:e.Template.isMobile}})(function(e){var t=e.history,n=e.heroes,r=e.isMobile;return o.a.createElement("div",{className:"search-page"},o.a.createElement(P,{searchHandler:function(){return!1},label:"Nome do Personagem",id:"hero-search"}),o.a.createElement($,{heroes:n,history:t,isMobile:r}),o.a.createElement(te,null))});var re=function(){return o.a.createElement("div",null,"Detalhes")};var ae=function(){return o.a.createElement(B,null,o.a.createElement(j.a,null,o.a.createElement(O.a,null,o.a.createElement(C.a,{exact:!0,path:"/",component:ne}),o.a.createElement(C.a,{path:"/details",component:re}),o.a.createElement(C.a,{exact:!0,path:"/code-hero/",component:ne}),o.a.createElement(C.a,{path:"/code-hero/details",component:re}))))},oe=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function ie(e,t){navigator.serviceWorker.register(e).then(function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}}).catch(function(e){console.error("Error during service worker registration:",e)})}c.a.render(o.a.createElement(l.a,{store:k},o.a.createElement(ae,null)),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/code-hero",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",function(){var t="".concat("/code-hero","/service-worker.js");oe?(function(e,t){fetch(e).then(function(n){var r=n.headers.get("content-type");404===n.status||null!=r&&-1===r.indexOf("javascript")?navigator.serviceWorker.ready.then(function(e){e.unregister().then(function(){window.location.reload()})}):ie(e,t)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(t,e),navigator.serviceWorker.ready.then(function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")})):ie(t,e)})}}()},40:function(e,t,n){e.exports=n.p+"static/media/ironman.aad58208.jpg"},43:function(e,t,n){e.exports=n(111)}},[[43,1,2]]]);
//# sourceMappingURL=main.3eaf9696.chunk.js.map