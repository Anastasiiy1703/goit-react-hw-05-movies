"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[724],{724:function(e,t,r){r.r(t),r.d(t,{default:function(){return m}});var s=r(861),n=r(439),a=r(757),c=r.n(a),o=r(791),u=r(87),i="MoviesCss_container__Mxu8G",l="MoviesCss_SearchForm__fjYuX",h="MoviesCss_SearchFormButton__k7veZ",d="MoviesCss_SearchFormButtonLabel__u5fK6",p="MoviesCss_SearchFormInput__vBQyS",v=r(184),f=function(){var e=(0,o.useState)(""),t=(0,n.Z)(e,2),r=t[0],a=t[1],f=(0,o.useState)([]),m=(0,n.Z)(f,2),x=m[0],_=m[1],j=(0,o.useState)(null),k=(0,n.Z)(j,2),b=k[0],S=k[1],w=(0,o.useState)(!1),C=(0,n.Z)(w,2),N=C[0],g=C[1],y=function(){var e=(0,s.Z)(c().mark((function e(t){var s,n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.prev=1,e.next=4,fetch("https://api.themoviedb.org/3/search/movie?api_key=".concat("c473a8c64320184dea7ebdd3984bb9b6","&query=").concat(r));case 4:if(!(s=e.sent).ok){e.next=13;break}return e.next=8,s.json();case 8:n=e.sent,_(n.results),g(0===n.results.length),e.next=14;break;case 13:throw new Error("Network response was not ok.");case 14:e.next=19;break;case 16:e.prev=16,e.t0=e.catch(1),S("Error fetching search results");case 19:case"end":return e.stop()}}),e,null,[[1,16]])})));return function(t){return e.apply(this,arguments)}}();return(0,v.jsxs)("div",{children:[(0,v.jsx)("div",{className:i,children:(0,v.jsxs)("form",{className:l,onSubmit:y,children:[(0,v.jsx)("input",{className:p,type:"text",value:r,onChange:function(e){a(e.target.value)},placeholder:"Search for a movie"}),(0,v.jsx)("button",{className:h,type:"submit",children:(0,v.jsx)("span",{className:d,children:"Search"})})]})}),b&&(0,v.jsx)("p",{children:b}),(0,v.jsxs)("div",{children:[N&&(0,v.jsx)("p",{children:"No results found"}),x.length>0&&(0,v.jsx)("ul",{children:x.map((function(e){return(0,v.jsx)("li",{children:(0,v.jsx)(u.rU,{to:"/movies/".concat(e.id),children:e.title})},e.id)}))})]})]})},m=function(){return(0,v.jsx)("div",{children:(0,v.jsx)(f,{})})}}}]);
//# sourceMappingURL=724.a8ff7583.chunk.js.map