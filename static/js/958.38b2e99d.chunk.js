"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[958],{958:function(r,t,e){e.r(t),e.d(t,{default:function(){return h}});var n=e(861),a=e(439),c=e(757),s=e.n(c),u=e(581),o=e(791),i=e(689),p=e(390),f=e(184),v=function(){var r=(0,o.useState)(!1),t=(0,a.Z)(r,2),e=t[0],c=t[1],v=(0,o.useState)([]),h=(0,a.Z)(v,2),l=h[0],m=h[1],d=(0,i.UO)().id;(0,o.useEffect)((function(){var r=function(){var r=(0,n.Z)(s().mark((function r(){var t;return s().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,c(!0),r.next=4,(0,p.Jh)(d);case 4:t=r.sent,m(t.cast),r.next=11;break;case 8:r.prev=8,r.t0=r.catch(0),console.log(r.t0.message);case 11:return r.prev=11,c(!1),r.finish(11);case 14:case"end":return r.stop()}}),r,null,[[0,8,11,14]])})));return function(){return r.apply(this,arguments)}}();r()}),[d]);var g=l.map((function(r){var t=r.id,e=r.name,n=r.character,a=r.profile_path;return(0,f.jsxs)("li",{className:"cast-item",children:[a&&(0,f.jsx)("img",{src:"https://image.tmdb.org/t/p/w500/".concat(a),className:"cast-image",alt:""}),(0,f.jsx)("p",{children:e}),(0,f.jsx)("p",{children:n})]},t)}));return(0,f.jsxs)(f.Fragment,{children:[e&&(0,f.jsx)(u.Z,{}),(0,f.jsx)("ul",{className:"cast-list",children:0===g.length?"We don't have any cast for this movie":g})]})},h=function(){return(0,f.jsx)(f.Fragment,{children:(0,f.jsx)(v,{})})}},390:function(r,t,e){e.d(t,{Jh:function(){return p},Pg:function(){return i},_r:function(){return f},dY:function(){return o},z1:function(){return u}});var n=e(861),a=e(757),c=e.n(a),s=e(243).Z.create({baseURL:"https://api.themoviedb.org/3/",params:{api_key:"c66f597fbdbbb50c0972dd6c4a492e0e",language:"en-US"}}),u=function(){var r=(0,n.Z)(c().mark((function r(t){var e,n;return c().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,s.get("search/movie",{params:{query:t}});case 3:return e=r.sent,n=e.data,r.abrupt("return",n);case 8:throw r.prev=8,r.t0=r.catch(0),console.error("Error searching movies:",r.t0),r.t0;case 12:case"end":return r.stop()}}),r,null,[[0,8]])})));return function(t){return r.apply(this,arguments)}}(),o=function(){var r=(0,n.Z)(c().mark((function r(){var t,e;return c().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,s.get("movie/popular");case 3:return t=r.sent,e=t.data,r.abrupt("return",e);case 8:throw r.prev=8,r.t0=r.catch(0),console.error("Error getting most popular movies:",r.t0),r.t0;case 12:case"end":return r.stop()}}),r,null,[[0,8]])})));return function(){return r.apply(this,arguments)}}(),i=function(){var r=(0,n.Z)(c().mark((function r(t){var e,n;return c().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,s.get("movie/".concat(t));case 3:return e=r.sent,n=e.data,r.abrupt("return",n);case 8:throw r.prev=8,r.t0=r.catch(0),console.error("Error getting movie with ID ".concat(t,":"),r.t0),r.t0;case 12:case"end":return r.stop()}}),r,null,[[0,8]])})));return function(t){return r.apply(this,arguments)}}(),p=function(){var r=(0,n.Z)(c().mark((function r(t){var e,n;return c().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,s.get("movie/".concat(t,"/credits"));case 3:return e=r.sent,n=e.data,r.abrupt("return",n);case 8:throw r.prev=8,r.t0=r.catch(0),console.error("Error getting credits for movie with ID ".concat(t,":"),r.t0),r.t0;case 12:case"end":return r.stop()}}),r,null,[[0,8]])})));return function(t){return r.apply(this,arguments)}}(),f=function(){var r=(0,n.Z)(c().mark((function r(t){var e,n;return c().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,s.get("movie/".concat(t,"/reviews"));case 3:return e=r.sent,n=e.data,r.abrupt("return",n);case 8:throw r.prev=8,r.t0=r.catch(0),console.error("Error getting reviews for movie with ID ".concat(t,":"),r.t0),r.t0;case 12:case"end":return r.stop()}}),r,null,[[0,8]])})));return function(t){return r.apply(this,arguments)}}()}}]);
//# sourceMappingURL=958.38b2e99d.chunk.js.map