"use strict";(self.webpackChunkgoit_react_woolf_hw_05_movies=self.webpackChunkgoit_react_woolf_hw_05_movies||[]).push([[674],{148:function(t,e,n){n.d(e,{Df:function(){return o},V0:function(){return u},YJ:function(){return f},q5:function(){return l},yo:function(){return p}});var r=n(861),a=n(757),c=n.n(a),s=n(294),i="5353dd79200c421da3f62df2eb27bfab";s.Z.defaults.baseURL="https://api.themoviedb.org/3";var o=function(){var t=(0,r.Z)(c().mark((function t(){var e;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,(0,s.Z)("/trending/all/day?api_key=".concat(i));case 2:return e=t.sent,t.abrupt("return",e);case 4:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),u=function(){var t=(0,r.Z)(c().mark((function t(e){var n;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,(0,s.Z)("/search/movie?query=".concat(e,"&api_key=").concat(i));case 2:return n=t.sent,t.abrupt("return",n);case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),f=function(){var t=(0,r.Z)(c().mark((function t(e){var n;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,(0,s.Z)("/movie/".concat(e,"?api_key=").concat(i));case 2:return n=t.sent,t.abrupt("return",n);case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),p=function(){var t=(0,r.Z)(c().mark((function t(e){var n;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,(0,s.Z)("/movie/".concat(e,"/credits?api_key=").concat(i));case 2:return n=t.sent,t.abrupt("return",n);case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),l=function(){var t=(0,r.Z)(c().mark((function t(e){var n;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,(0,s.Z)("/movie/".concat(e,"/reviews?api_key=").concat(i));case 2:return n=t.sent,t.abrupt("return",n);case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},639:function(t,e,n){n.d(e,{a:function(){return s}});var r=n(154),a="Loader_loaderContainer__UDDYf",c=n(184),s=function(){return(0,c.jsx)("div",{className:a,children:(0,c.jsx)(r.p2,{height:"80",width:"80",color:"#81cbad",ariaLabel:"circles-loading",wrapperStyle:{},wrapperClass:"",visible:!0})})}},155:function(t,e,n){n.d(e,{Z:function(){return f}});var r="MoviesList_trend_list__GB6oo",a="MoviesList_trend_item__0fjw+",c="MoviesList_movie_poster__y1HIT",s="MoviesList_trendMovies_title__FSYVs",i=n(689),o=n(87),u=n(184),f=function(t){var e=t.movies,n=(0,i.TH)();return(0,u.jsx)("ul",{className:r,children:e.map((function(t){var e=t.id,r=t.title,i=t.name,f=t.poster_path;return(0,u.jsxs)("li",{className:a,children:[(0,u.jsx)(o.rU,{to:"/movies/".concat(e),state:{from:n},children:(0,u.jsx)("img",{src:f?"https://image.tmdb.org/t/p/w185".concat(f):"https://live.staticflickr.com/65535/51349451747_f6d7898f2c_n.jpg",alt:r,className:c,width:"270px",height:"400px"})}),(0,u.jsx)(o.rU,{to:"/movies/".concat(e),state:{from:n},children:(0,u.jsx)("p",{className:s,children:r||i})})]},e)}))})}},674:function(t,e,n){n.r(e),n.d(e,{default:function(){return v}});var r=n(861),a=n(439),c=n(757),s=n.n(c),i=n(791),o={home_container:"HomePage_home_container__8SG5m"},u=n(148),f=n(639),p=n(155),l=n(184),v=function(){var t=(0,i.useState)(null),e=(0,a.Z)(t,2),n=e[0],c=e[1],v=(0,i.useState)(!1),d=(0,a.Z)(v,2),h=d[0],_=d[1];return(0,i.useEffect)((function(){var t=function(){var t=(0,r.Z)(s().mark((function t(){var e;return s().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,_(!0),t.next=4,(0,u.Df)();case 4:e=t.sent,c(e.data.results),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(0),alert("Oops, something went wrong");case 11:return t.prev=11,_(!1),t.finish(11);case 14:case"end":return t.stop()}}),t,null,[[0,8,11,14]])})));return function(){return t.apply(this,arguments)}}();t()}),[]),(0,l.jsxs)("div",{className:o.home_container,children:[h&&(0,l.jsx)(f.a,{}),(0,l.jsx)("h1",{className:o.home_title,children:"Trending today"}),n&&(0,l.jsx)(p.Z,{movies:n})]})}}}]);
//# sourceMappingURL=674.0defa769.chunk.js.map