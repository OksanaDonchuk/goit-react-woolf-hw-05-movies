"use strict";(self.webpackChunkgoit_react_woolf_hw_05_movies=self.webpackChunkgoit_react_woolf_hw_05_movies||[]).push([[168],{148:function(e,r,n){n.d(r,{Df:function(){return i},V0:function(){return o},YJ:function(){return f},q5:function(){return v},yo:function(){return p}});var t=n(861),a=n(757),c=n.n(a),u=n(294),s="5353dd79200c421da3f62df2eb27bfab";u.Z.defaults.baseURL="https://api.themoviedb.org/3";var i=function(){var e=(0,t.Z)(c().mark((function e(){var r;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,u.Z)("/trending/all/day?api_key=".concat(s));case 2:return r=e.sent,e.abrupt("return",r);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),o=function(){var e=(0,t.Z)(c().mark((function e(r){var n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,u.Z)("/search/movie?query=".concat(r,"&api_key=").concat(s));case 2:return n=e.sent,e.abrupt("return",n);case 4:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}(),f=function(){var e=(0,t.Z)(c().mark((function e(r){var n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,u.Z)("/movie/".concat(r,"?api_key=").concat(s));case 2:return n=e.sent,e.abrupt("return",n);case 4:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}(),p=function(){var e=(0,t.Z)(c().mark((function e(r){var n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,u.Z)("/movie/".concat(r,"/credits?api_key=").concat(s));case 2:return n=e.sent,e.abrupt("return",n);case 4:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}(),v=function(){var e=(0,t.Z)(c().mark((function e(r){var n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,u.Z)("/movie/".concat(r,"/reviews?api_key=").concat(s));case 2:return n=e.sent,e.abrupt("return",n);case 4:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}()},639:function(e,r,n){n.d(r,{a:function(){return u}});var t=n(154),a="Loader_loaderContainer__UDDYf",c=n(184),u=function(){return(0,c.jsx)("div",{className:a,children:(0,c.jsx)(t.p2,{height:"80",width:"80",color:"#81cbad",ariaLabel:"circles-loading",wrapperStyle:{},wrapperClass:"",visible:!0})})}},168:function(e,r,n){n.r(r),n.d(r,{default:function(){return w}});var t=n(861),a=n(439),c=n(757),u=n.n(c),s=n(791),i=n(689),o="Reviews_reviews_list__bJBhs",f="Reviews_reviews_item__G7P3y",p="Reviews_reviews_container__-0FbX",v="Reviews_rev_author__dnwSO",l="Reviews_rev_content__aRF7m",d=n(639),h=n(148),_=n(184),w=function(){var e=(0,i.UO)().movieId,r=(0,s.useState)([]),n=(0,a.Z)(r,2),c=n[0],w=n[1],m=(0,s.useState)(!1),x=(0,a.Z)(m,2),b=x[0],k=x[1];return(0,s.useEffect)((function(){var r=function(){var r=(0,t.Z)(u().mark((function r(){var n;return u().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,k(!0),r.next=4,(0,h.q5)(e);case 4:if(0!==(n=r.sent).data.results.length){r.next=8;break}return alert("Sorry, there is no information"),r.abrupt("return");case 8:w(n.data.results),r.next=14;break;case 11:r.prev=11,r.t0=r.catch(0),alert("Oops, something went wrong");case 14:return r.prev=14,k(!1),r.finish(14);case 17:case"end":return r.stop()}}),r,null,[[0,11,14,17]])})));return function(){return r.apply(this,arguments)}}();r()}),[e]),(0,_.jsxs)("div",{children:[b&&(0,_.jsx)(d.a,{}),(0,_.jsx)("ul",{className:o,children:c.map((function(e){var r=e.author,n=e.content;return(0,_.jsx)("li",{className:f,children:(0,_.jsxs)("div",{className:p,children:[(0,_.jsx)("p",{className:v,children:r}),(0,_.jsx)("p",{className:l,children:n})]})},r)}))})]})}}}]);
//# sourceMappingURL=168.da7edf86.chunk.js.map