(this.webpackJsonpbunker=this.webpackJsonpbunker||[]).push([[0],{28:function(e,a,t){e.exports=t(73)},72:function(e,a,t){},73:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),c=t(6),i=t.n(c),l=t(7),s=t(2),m=t(5),u={currentPage:"main",modalWindow:!1,modalType:"type",authorID:"ida",paintID:"idp",paints:[]},o=function(e){return{value:e,type:"CHANGE_PAGE"}},d=function(e){return{value:e,type:"LOAD_PAINTS"}},g=function(e){return{value:e,type:"APPEND_PAINTS"}},E=Object(l.b)({navigator:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:u,a=arguments.length>1?arguments[1]:void 0;switch(a.type){case"CHANGE_PAGE":return Object(m.a)({},e,{currentPage:a.value,modalWindow:!1});case"MODAL_AUTHOR":return Object(m.a)({},e,{modalWindow:!0,modalType:"author",authorID:a.value});case"MODAL_PAINT":return Object(m.a)({},e,{modalWindow:!0,modalType:"paint",paintID:a.value});case"MODAL_HIDE":return Object(m.a)({},e,{modalWindow:!1,modalType:""});case"LOAD_PAINTS":return Object(m.a)({},e,{paints:a.value});case"APPEND_PAINTS":return Object(m.a)({},e,{paints:e.paints.concat(a.value),currentPage:"galery"});default:return e}}}),v=t(27),p=function(){var e=Object(s.c)((function(e){return e.navigator.currentPage})),a=Object(s.b)(),t=Object(n.useState)(!1),c=Object(v.a)(t,2),i=c[0],l=c[1];function m(a){return"header__menu-item"+(e===a?" header__menu-item--active":"")}return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"header"},r.a.createElement("div",{className:"header__container"},r.a.createElement("div",{className:"header__logo",onClick:function(){return a(o("main"))}},r.a.createElement("img",{src:"/images/logo.svg",alt:"BunkerMuz"})),r.a.createElement("div",{className:"header__menu"},r.a.createElement("div",{className:m("main"),onClick:function(){return a(o("main"))}},"\u0413\u043e\u043b\u043e\u0432\u043d\u0430"),r.a.createElement("div",{className:m("galery"),onClick:function(){return a(o("galery"))}},"\u0413\u0430\u043b\u0435\u0440\u0435\u044f"),r.a.createElement("div",{className:m("authors"),onClick:function(){return a(o("authors"))}},"\u0410\u0432\u0442\u043e\u0440\u0438"),r.a.createElement("div",{className:m("background"),onClick:function(){return a(o("background"))}},"\u0411\u0435\u0491\u0440\u0430\u0443\u043d\u0434"),r.a.createElement("div",{className:m("contact"),onClick:function(){return a(o("contact"))}},"\u041a\u043e\u043d\u0442\u0430\u043a\u0442\u0438")),r.a.createElement("div",{className:"header__burger",onClick:function(){return l(!0)}},r.a.createElement("img",{src:"/images/icon-burger.svg",alt:"+"})))),i&&r.a.createElement("div",{class:"modal-cover",onClick:function(){return l(!1)}},r.a.createElement("div",{className:"header__burger-menu"},r.a.createElement("div",{className:m("main"),onClick:function(){return a(o("main"))}},"\u0413\u043e\u043b\u043e\u0432\u043d\u0430"),r.a.createElement("div",{className:m("galery"),onClick:function(){return a(o("galery"))}},"\u0413\u0430\u043b\u0435\u0440\u0435\u044f"),r.a.createElement("div",{className:m("authors"),onClick:function(){return a(o("authors"))}},"\u0410\u0432\u0442\u043e\u0440\u0438"),r.a.createElement("div",{className:m("background"),onClick:function(){return a(o("background"))}},"\u0411\u0435\u0491\u0440\u0430\u0443\u043d\u0434"),r.a.createElement("div",{className:m("contact"),onClick:function(){return a(o("contact"))}},"\u041a\u043e\u043d\u0442\u0430\u043a\u0442\u0438"),r.a.createElement("img",{className:"header__burger-menu-logo",src:"/images/logo.svg",alt:"BunkerMuz"}))))},_=function(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"paint"},r.a.createElement("div",{className:"paint__image-container"},r.a.createElement("img",{src:e.src,alt:""}),r.a.createElement("div",{className:"paint__author"},e.author),r.a.createElement("div",{className:"paint__title"},e.title),r.a.createElement("div",{className:"paint__button"},"\u0414\u0435\u0442\u0430\u043b\u044c\u043d\u0456\u0448\u0435"))))},N=(t(37),t(38),t(26)),f=t.n(N),b=t(8),h=t.n(b),j=function(){var e=Object(s.c)((function(e){return e.navigator.paints})),a=Object(s.b)();Object(n.useEffect)((function(){document.title="\u0413\u043e\u043b\u043e\u0432\u043d\u0430 - BunkerMuz",0===e.length&&h.a.get("/api/paints/getstart.json").then((function(e){var t=e.data;a(d(t))}))}));var t=e.map((function(e){return r.a.createElement("div",{className:"paints__cell"},r.a.createElement(_,{src:e.src,id:e.id,author:e.author,title:e.title}))}));return r.a.createElement(r.a.Fragment,null,r.a.createElement(f.a,Object.assign({className:"main-slider"},{dots:!1,arrows:!1,infinite:!0,slidesToShow:1,slidesToScroll:1,autoplay:!0,speed:500,autoplaySpeed:5e3,cssEase:"ease-out"}),r.a.createElement("img",{className:"main-slider__slide",src:"/images/main-slide-1.jpg",alt:""}),r.a.createElement("img",{className:"main-slider__slide",src:"/images/main-slide-2.jpg",alt:""}),r.a.createElement("img",{className:"main-slider__slide",src:"/images/main-slide-3.jpg",alt:""}),r.a.createElement("img",{className:"main-slider__slide",src:"/images/main-slide-4.jpg",alt:""})),r.a.createElement("div",{className:"main-text"},r.a.createElement("div",{className:"main-text__container"},r.a.createElement("p",null,"\u041a\u043e\u043b\u0435\u043a\u0446\u0456\u044f \u0411\u0443\u043d\u043a\u0435\u0440\u043c\u0443\u0437 \u043d\u0430\u043f\u043e\u0432\u043d\u044e\u0454\u0442\u044c\u0441\u044f \u0434\u043e\u0431\u0456\u0440\u043d\u0438\u043c\u0438 \u043e\u0431'\u0454\u043a\u0442\u0430\u043c\u0438 \u0443\u043a\u0440\u0430\u0457\u043d\u0441\u044c\u043a\u043e\u0433\u043e \u0441\u0443\u0447\u0430\u0441\u043d\u043e\u0433\u043e \u043c\u0438\u0441\u0442\u0435\u0446\u0442\u0432\u0430 \u0447\u0435\u0440\u0435\u0437 \u0434\u0456\u044f\u043b\u044c\u043d\u0456\u0441\u0442\u044c \u043e\u0434\u043d\u043e\u0439\u043c\u0435\u043d\u043d\u0438\u0445 \u0433\u0430\u043b\u0435\u0440\u0435\u0439."),r.a.createElement("p",null,"\u041f\u0456\u0434\u0437\u0435\u043c\u043d\u0430 \u0433\u0430\u043b\u0435\u0440\u0435\u044f \u0411\u0443\u043d\u043a\u0435\u0440\u043c\u0443\u0437 \u0443 \u0422\u0435\u0440\u043d\u043e\u043f\u043e\u043b\u0456 \u0437\u0430\u0441\u043d\u043e\u0432\u0430\u043d\u0430 \u0443 2013-\u043c\u0443 \u0440\u043e\u0446\u0456, \u0457\u0439 \u043f\u0435\u0440\u0435\u0434\u0443\u0432\u0430\u043b\u043e \u0434\u0432\u0430 \u0440\u043e\u043a\u0438 \u0434\u0456\u044f\u043b\u044c\u043d\u043e\u0441\u0442\u0456 \u0430\u043d\u0434\u0435\u0491\u0440\u0430\u0443\u043d\u0434\u043d\u043e\u0433\u043e \u043c\u0438\u0441\u0442\u0435\u0446\u044c\u043a\u043e\u0433\u043e \u043f\u0440\u043e\u0441\u0442\u043e\u0440\u0443 \xab\u0428\u0442\u0443\u043a\u0438\xbb. \u0417\u043d\u0430\u043a\u043e\u0432\u043e, \u0449\u043e \u043f\u0435\u0440\u0448\u043e\u044e \u0432\u0438\u0441\u0442\u0430\u0432\u043a\u043e\u044e \u043e\u043d\u043e\u0432\u043b\u0435\u043d\u043e\u0433\u043e \u0411\u0443\u043d\u043a\u0435\u0440\u043c\u0443\u0437\u0443 \u0441\u0442\u0430\u043b\u0430 \u0435\u043a\u0441\u043f\u043e\u0437\u0438\u0446\u0456\u044f \u0414\u043c\u0438\u0442\u0440\u0430 \u0421\u0442\u0435\u0446\u044c\u043a\u0430 \xab\u0412\u0456\u0442\u0440\u0438\u043b\u0430 \u0447\u0430\u0441\u0443\xbb - \u043f\u0435\u0440\u0448\u0430 \u043f\u0435\u0440\u0441\u043e\u043d\u0430\u043b\u044c\u043d\u0430 \u0432\u0438\u0441\u0442\u0430\u0432\u043a\u0430 \u043c\u0430\u0439\u0441\u0442\u0440\u0430 \u0443 \u0440\u0456\u0434\u043d\u043e\u043c\u0443 \u043c\u0456\u0441\u0442\u0456. \u0411\u0443\u043d\u043a\u0435\u0440\u043c\u0443\u0437 \u043f\u043e\u0437\u0438\u0446\u0456\u043e\u043d\u0443\u0454 \u0441\u0435\u0431\u0435 \u044f\u043a \u0434\u0438\u043d\u0430\u043c\u0456\u0447\u043d\u0443 \u0442\u0430 \u043d\u0435\u0437\u0430\u043a\u043e\u043d\u0441\u0435\u0440\u0432\u043e\u0432\u0430\u043d\u0443 \u0430\u0440\u0442-\u0441\u0446\u0435\u043d\u0443, \u0441\u0442\u0432\u043e\u0440\u0435\u043d\u0443 \u0434\u043b\u044f \u043f\u0440\u0435\u0434\u0441\u0442\u0430\u0432\u043b\u0435\u043d\u043d\u044f \u0430\u0440\u0442\u0435\u043a\u0441\u043f\u043e\u0437\u0438\u0446\u0456\u0439 \u0442\u0430 \u0456\u043d\u0441\u0442\u0430\u043b\u044f\u0446\u0456\u0439, \u0441\u043f\u0456\u043b\u043a\u0443\u0432\u0430\u043d\u043d\u044f \u043c\u0438\u0442\u0446\u0456\u0432 \u0456 \u0433\u043b\u044f\u0434\u0430\u0447\u0456\u0432, \u043e\u0431\u043c\u0456\u043d\u0443 \u0456\u0434\u0435\u044f\u043c\u0438."),r.a.createElement("p",null,"\u041c\u0456\u0441\u0456\u044f \u0433\u0430\u043b\u0435\u0440\u0435\u0457 \u2014 \u043a\u0443\u043b\u044c\u0442\u043f\u043e\u0440\u044f\u0442\u0443\u043d\u043e\u043a \u043b\u044e\u0434\u0441\u0442\u0432\u0430 \u0447\u0435\u0440\u0435\u0437 \u0442\u0440\u0430\u043d\u0441\u043b\u044e\u0432\u0430\u043d\u043d\u044f \u0432\u0456\u0434\u0431\u0456\u0440\u043d\u0438\u0445 \u0432\u0438\u0440\u0456\u0437\u043e\u043a \u043a\u043e\u043d\u0446\u0435\u043f\u0442\u0443\u0430\u043b\u044c\u043d\u043e\u0433\u043e \u043c\u0438\u0441\u0442\u0435\u0446\u0442\u0432\u0430; \u0432\u0432\u0435\u0434\u0435\u043d\u043d\u044f \u0443 \u0441\u0432\u0456\u0442\u043e\u0432\u0438\u0439 \u0430\u0440\u0442\u0434\u0438\u0441\u043a\u0443\u0440\u0441 \u0456 \u0444\u043e\u0440\u043c\u0443\u0432\u0430\u043d\u043d\u044f \u0435\u0441\u0442\u0435\u0442\u0438\u0447\u043d\u043e\u0433\u043e \u0441\u0432\u0456\u0442\u043e\u0433\u043b\u044f\u0434\u0443 \u0442\u0430 \u0441\u043c\u0430\u043a\u0443; \u0434\u0435\u043c\u0430\u0440\u0433\u0456\u043d\u0430\u043b\u0456\u0437\u043e\u0432\u0443\u0432\u0430\u043d\u043d\u044f \u043c\u0430\u0440\u0433\u0456\u043d\u0430\u043b\u0456\u0439; \u0437\u043c\u0456\u043d\u0430 \u0440\u0456\u0432\u043d\u0456\u0432 \u0434\u0438\u0441\u043a\u0443\u0440\u0441\u0456\u0432; \u043e\u043f\u0435\u0440\u0430\u0446\u0456\u0457 \u043d\u0430 \u0433\u0435\u0440\u043c\u0435\u0442\u0438\u0447\u043d\u043e\u0441\u0442\u0456 \u0442\u0430 \u0430\u043c\u043f\u0443\u0442\u0430\u0446\u0456\u044f \u0441\u0442\u0435\u0440\u0435\u043e\u0442\u0438\u043f\u0456\u0432."),r.a.createElement("p",null,"\u0427\u0435\u0440\u0435\u0437 6 \u0440\u043e\u043a\u0456\u0432, \u043e\u0440\u0433\u0430\u043d\u0456\u0437\u0443\u0432\u0430\u0432\u0448\u0438 \u043f\u043e\u043d\u0430\u0434 120 \u0435\u043a\u0441\u043f\u043e\u0437\u0438\u0446\u0456\u0439, \u0411\u0443\u043d\u043a\u0435\u0440\u043c\u0443\u0437 \u0432\u0438\u0440\u0456\u0448\u0438\u0432 \u043f\u043e\u0432\u0442\u043e\u0440\u0438\u0442\u0438 \u0441\u0432\u0456\u0439 \u0443\u0441\u043f\u0456\u0445 \u0432\u0436\u0435 \u0443 \u0411\u0456\u043b\u0456\u0439 \u0426\u0435\u0440\u043a\u0432\u0456, \u0432\u0456\u0434\u043a\u0440\u0438\u0432\u0448\u0438 \u0434\u0440\u0443\u0433\u0443 \u0433\u0430\u043b\u0435\u0440\u0435\u044e \u0441\u0443\u0447\u0430\u0441\u043d\u043e\u0433\u043e \u043c\u0438\u0441\u0442\u0435\u0446\u0442\u0432\u0430, \u0430\u0442\u043c\u043e\u0441\u0444\u0435\u0440\u043d\u0438\u0439 \u043f\u0440\u043e\u0441\u0442\u0456\u0440 \u044f\u043a\u043e\u0457 \u043f\u043e\u0454\u0434\u043d\u0443\u0454 \u0430\u043a\u0443\u0441\u0442\u0438\u0447\u043d\u0456\u0441\u0442\u044c \u0456 \u043c\u0430\u0441\u0448\u0442\u0430\u0431\u043d\u0456\u0441\u0442\u044c."),r.a.createElement("img",{className:"main-text__quote",src:"/images/icon-quote.svg",alt:'"'}))),r.a.createElement("div",{className:"paints"},r.a.createElement("div",{className:"paints__container"},t),r.a.createElement("div",{className:"paints__more",onClick:function(){h.a.get("/api/paints/getstart.json").then((function(e){var t=e.data;a(g(t))}))}},"\u0411\u0456\u043b\u044c\u0448\u0435 \u043a\u0430\u0440\u0442\u0438\u043d ",r.a.createElement("img",{src:"/images/icon-arrow-right.svg",alt:">"}))),r.a.createElement("p",null,"\u0421\u043b\u0430\u0439\u0434\u0435\u0440 \u0430\u0432\u0442\u043e\u0440\u0456\u0432"))},k=function(){var e=Object(s.c)((function(e){return e.navigator.paints})),a=Object(s.b)();Object(n.useEffect)((function(){document.title="\u0413\u0430\u043b\u0435\u0440\u0435\u044f - BunkerMuz",0===e.length&&h.a.get("/api/paints/getstart.json").then((function(e){var t=e.data;a(d(t))}))}));var t=e.map((function(e){return r.a.createElement("div",{className:"paints__cell"},r.a.createElement(_,{src:e.src,id:e.id,author:e.author,title:e.title}))}));return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"paints"},r.a.createElement("div",{className:"paints__container"},t),r.a.createElement("div",{className:"paints__more",onClick:function(){h.a.get("/api/paints/getstart.json").then((function(e){var t=e.data;a(g(t))}))}},"\u0411\u0456\u043b\u044c\u0448\u0435 \u043a\u0430\u0440\u0442\u0438\u043d ",r.a.createElement("img",{src:"/images/icon-arrow-right.svg",alt:">"}))))},O=(t(72),Object(l.c)(E));i.a.render(r.a.createElement(s.a,{store:O},r.a.createElement((function(){var e=Object(s.c)((function(e){return e.navigator.currentPage}));return r.a.createElement(r.a.Fragment,null,r.a.createElement(p,null),"main"===e&&r.a.createElement(j,null),"galery"===e&&r.a.createElement(k,null))}),null)),document.getElementById("root"))}},[[28,1,2]]]);
//# sourceMappingURL=main.570c630a.chunk.js.map