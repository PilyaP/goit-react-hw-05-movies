"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[399],{399:function(r,e,t){t.r(e),t.d(e,{default:function(){return l}});var n=t(861),a=t(439),c=t(757),u=t.n(c),o=t(581),s=t(791),i=t(689),p=t(390),v=t(184),f=function(){var r=(0,s.useState)(!1),e=(0,a.Z)(r,2),t=e[0],c=e[1],f=(0,s.useState)([]),l=(0,a.Z)(f,2),h=l[0],m=l[1],w=(0,i.UO)().id;(0,s.useEffect)((function(){var r=function(){var r=(0,n.Z)(u().mark((function r(){var e;return u().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,c(!0),r.next=4,(0,p._r)(w);case 4:e=r.sent,m(e.results),r.next=11;break;case 8:r.prev=8,r.t0=r.catch(0),console.log(r.t0.message);case 11:return r.prev=11,c(!1),r.finish(11);case 14:case"end":return r.stop()}}),r,null,[[0,8,11,14]])})));return function(){return r.apply(this,arguments)}}();r()}),[w]);var d=h.map((function(r){var e=r.id,t=r.author,n=r.content;return(0,v.jsxs)("li",{className:"review-item",children:[(0,v.jsx)("h3",{className:"review-author",children:t}),(0,v.jsx)("p",{className:"review-content",children:n})]},e)}));return(0,v.jsxs)(v.Fragment,{children:[t&&(0,v.jsx)(o.Z,{}),(0,v.jsx)("ul",{className:"review-list",children:0===h.length?"No reviews available":d})]})},l=function(){return(0,v.jsx)(v.Fragment,{children:(0,v.jsx)(f,{})})}},390:function(r,e,t){t.d(e,{Jh:function(){return p},Pg:function(){return i},_r:function(){return v},dY:function(){return s},z1:function(){return o}});var n=t(861),a=t(757),c=t.n(a),u=t(243).Z.create({baseURL:"https://api.themoviedb.org/3/",params:{api_key:"c66f597fbdbbb50c0972dd6c4a492e0e",language:"en-US"}}),o=function(){var r=(0,n.Z)(c().mark((function r(e){var t,n;return c().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,u.get("search/movie",{params:{query:e}});case 3:return t=r.sent,n=t.data,r.abrupt("return",n);case 8:throw r.prev=8,r.t0=r.catch(0),console.error("Error searching movies:",r.t0),r.t0;case 12:case"end":return r.stop()}}),r,null,[[0,8]])})));return function(e){return r.apply(this,arguments)}}(),s=function(){var r=(0,n.Z)(c().mark((function r(){var e,t;return c().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,u.get("movie/popular");case 3:return e=r.sent,t=e.data,r.abrupt("return",t);case 8:throw r.prev=8,r.t0=r.catch(0),console.error("Error getting most popular movies:",r.t0),r.t0;case 12:case"end":return r.stop()}}),r,null,[[0,8]])})));return function(){return r.apply(this,arguments)}}(),i=function(){var r=(0,n.Z)(c().mark((function r(e){var t,n;return c().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,u.get("movie/".concat(e));case 3:return t=r.sent,n=t.data,r.abrupt("return",n);case 8:throw r.prev=8,r.t0=r.catch(0),console.error("Error getting movie with ID ".concat(e,":"),r.t0),r.t0;case 12:case"end":return r.stop()}}),r,null,[[0,8]])})));return function(e){return r.apply(this,arguments)}}(),p=function(){var r=(0,n.Z)(c().mark((function r(e){var t,n;return c().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,u.get("movie/".concat(e,"/credits"));case 3:return t=r.sent,n=t.data,r.abrupt("return",n);case 8:throw r.prev=8,r.t0=r.catch(0),console.error("Error getting credits for movie with ID ".concat(e,":"),r.t0),r.t0;case 12:case"end":return r.stop()}}),r,null,[[0,8]])})));return function(e){return r.apply(this,arguments)}}(),v=function(){var r=(0,n.Z)(c().mark((function r(e){var t,n;return c().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,u.get("movie/".concat(e,"/reviews"));case 3:return t=r.sent,n=t.data,r.abrupt("return",n);case 8:throw r.prev=8,r.t0=r.catch(0),console.error("Error getting reviews for movie with ID ".concat(e,":"),r.t0),r.t0;case 12:case"end":return r.stop()}}),r,null,[[0,8]])})));return function(e){return r.apply(this,arguments)}}()}}]);
//# sourceMappingURL=399.5e1467ac.chunk.js.map