(this["webpackJsonptinder-clone"]=this["webpackJsonptinder-clone"]||[]).push([[0],{59:function(e,n,t){},60:function(e,n,t){},61:function(e,n,t){},89:function(e,n,t){},90:function(e,n,t){},92:function(e,n,t){"use strict";t.r(n);var c=t(0),a=t.n(c),s=t(15),r=t.n(s),i=(t(59),t(60),t(41)),o=t.n(i),j=t(107),l=t(42),d=t.n(l),u=(t(61),t(2));function b(){return Object(u.jsxs)("div",{className:"header",children:[Object(u.jsx)(j.a,{children:Object(u.jsx)(o.a,{fontSize:"large",className:"header__icon"})}),Object(u.jsx)("img",{className:"header__logo",src:"https://1000logos.net/wp-content/uploads/2018/07/Tinder-Logo-2012.png"}),Object(u.jsx)(j.a,{children:Object(u.jsx)(d.a,{fontSize:"large",className:"header__icon"})})]})}var p=t(25),h=t.n(p),O=t(43),f=t(51),x=t(44),m=t.n(x),g=t(45),v=t.n(g).a.create({baseURL:"https://tinder-clonebackendapp.herokuapp.com"});t(89);var _=function(){var e=Object(c.useState)([]),n=Object(f.a)(e,2),t=n[0],a=n[1];return Object(c.useEffect)((function(){function e(){return(e=Object(O.a)(h.a.mark((function e(){var n;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,v.get("/tinder/cards");case 2:n=e.sent,a(n.data);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]),Object(u.jsx)("div",{className:"tinderCards",children:Object(u.jsx)("div",{className:"tinderCards__cardContainer",children:t.map((function(e){return Object(u.jsx)(m.a,{className:"swipe",preventSwipe:["up","down"],onSwipe:function(n){return t=e.name,void console.log("removing: "+t);var t},onCardLeftScreen:function(){return n=e.name,void console.log(n+" left the screen!");var n},children:Object(u.jsx)("div",{style:{backgroundImage:"url(".concat(e.imgUrl,")")},className:"card",children:Object(u.jsx)("h3",{children:e.name})})},e.name)}))})})},w=t(46),N=t.n(w),S=t(47),z=t.n(S),B=t(48),k=t.n(B),y=t(49),C=t.n(y),L=t(50),E=t.n(L);t(90);var I=function(){return Object(u.jsxs)("div",{className:"swipeButtons",children:[Object(u.jsx)(j.a,{className:"swipeButtons__repeat",children:Object(u.jsx)(N.a,{fontSize:"large"})}),Object(u.jsx)(j.a,{className:"swipeButtons__left",children:Object(u.jsx)(z.a,{fontSize:"large"})}),Object(u.jsx)(j.a,{className:"swipeButtons__start",children:Object(u.jsx)(k.a,{fontSize:"large"})}),Object(u.jsx)(j.a,{className:"swipeButtons__right",children:Object(u.jsx)(C.a,{fontSize:"large"})}),Object(u.jsx)(j.a,{className:"swipeButtons__lightning",children:Object(u.jsx)(E.a,{fontSize:"large"})})]})};var J=function(){return Object(u.jsxs)("div",{className:"app",children:[Object(u.jsx)(b,{}),Object(u.jsx)(_,{}),Object(u.jsx)(I,{})]})};r.a.render(Object(u.jsx)(a.a.StrictMode,{children:Object(u.jsx)(J,{})}),document.getElementById("root"))}},[[92,1,2]]]);
//# sourceMappingURL=main.5ba6d6f6.chunk.js.map