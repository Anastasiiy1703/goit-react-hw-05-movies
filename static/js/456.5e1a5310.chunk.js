"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[456],{543:function(e,t,r){r(791);var n=r(689),a=r(87),s=r(184);t.Z=function(e){var t=e.movies,r=(0,n.TH)();return(0,s.jsx)("div",{children:(0,s.jsx)("ul",{children:t.map((function(e){return(0,s.jsx)("li",{children:(0,s.jsxs)(a.rU,{to:"/movies/".concat(e.id),state:{from:r.pathname},children:[e.title||e.name," - ",e.release_date||e.first_air_date]})},e.id)}))})})}},456:function(e,t,r){r.r(t),r.d(t,{default:function(){return f}});var n=r(861),a=r(439),s=r(757),c=r.n(s),i=r(791),o="HomeCss_title__w3slC",u=r(543),d=r(184),l=function(){var e=(0,i.useState)([]),t=(0,a.Z)(e,2),r=t[0],s=t[1];return(0,i.useEffect)((function(){var e=function(){var e=(0,n.Z)(c().mark((function e(){var t,r;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,"c473a8c64320184dea7ebdd3984bb9b6","week",e.next=5,fetch("https://api.themoviedb.org/3/trending/all/".concat("week","?api_key=").concat("c473a8c64320184dea7ebdd3984bb9b6"));case 5:if(!(t=e.sent).ok){e.next=13;break}return e.next=9,t.json();case 9:r=e.sent,s(r.results),e.next=14;break;case 13:throw new Error("Network response was not ok.");case 14:e.next=19;break;case 16:e.prev=16,e.t0=e.catch(0),console.error("Error fetching movies:",e.t0);case 19:case"end":return e.stop()}}),e,null,[[0,16]])})));return function(){return e.apply(this,arguments)}}();e()}),[]),(0,d.jsxs)("div",{children:[(0,d.jsx)("h2",{className:o,children:"Trending Movies"}),(0,d.jsx)(u.Z,{movies:r})]})},f=function(){return(0,d.jsx)("div",{children:(0,d.jsx)(l,{})})}}}]);
//# sourceMappingURL=456.5e1a5310.chunk.js.map