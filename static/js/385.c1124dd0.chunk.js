"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[385],{969:function(r,t,e){e.d(t,{Z:function(){return u}});var n=e(689),a=e(87),c=e(184),u=function(r){var t=r.items,e=(0,n.TH)(),u=t.map((function(r){var t=r.id,n=r.title;return(0,c.jsx)(a.rU,{className:"popular-movie-link",to:"/movies/".concat(t),state:{from:e},children:(0,c.jsx)("li",{className:"popular-movie-item",children:n})},t)}));return(0,c.jsx)("ul",{className:"popular-movie-list",children:u})}},385:function(r,t,e){e.r(t),e.d(t,{default:function(){return h}});var n=e(433),a=e(861),c=e(439),u=e(757),o=e.n(u),s=e(791),i=e(390),p=e(581),f=e(969),v=e(184),l=function(){var r=(0,s.useState)(!1),t=(0,c.Z)(r,2),e=t[0],u=t[1],l=(0,s.useState)([]),h=(0,c.Z)(l,2),m=h[0],d=h[1];return(0,s.useEffect)((function(){var r=function(){var r=(0,a.Z)(o().mark((function r(){var t;return o().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,u(!0),r.next=4,(0,i.dY)();case 4:t=r.sent,d((0,n.Z)(t.results)),r.next=11;break;case 8:r.prev=8,r.t0=r.catch(0),console.log(r.t0.message);case 11:return r.prev=11,u(!1),r.finish(11);case 14:case"end":return r.stop()}}),r,null,[[0,8,11,14]])})));return function(){return r.apply(this,arguments)}}();r()}),[]),(0,v.jsx)(v.Fragment,{children:e?(0,v.jsx)(p.Z,{}):(0,v.jsx)(f.Z,{items:m})})},h=function(){return(0,v.jsx)(v.Fragment,{children:(0,v.jsx)(l,{})})}},390:function(r,t,e){e.d(t,{Jh:function(){return p},Pg:function(){return i},_r:function(){return f},dY:function(){return s},z1:function(){return o}});var n=e(861),a=e(757),c=e.n(a),u=e(243).Z.create({baseURL:"https://api.themoviedb.org/3/",params:{api_key:"c66f597fbdbbb50c0972dd6c4a492e0e",language:"en-US"}}),o=function(){var r=(0,n.Z)(c().mark((function r(t){var e,n;return c().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,u.get("search/movie",{params:{query:t}});case 3:return e=r.sent,n=e.data,r.abrupt("return",n);case 8:throw r.prev=8,r.t0=r.catch(0),console.error("Error searching movies:",r.t0),r.t0;case 12:case"end":return r.stop()}}),r,null,[[0,8]])})));return function(t){return r.apply(this,arguments)}}(),s=function(){var r=(0,n.Z)(c().mark((function r(){var t,e;return c().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,u.get("movie/popular");case 3:return t=r.sent,e=t.data,r.abrupt("return",e);case 8:throw r.prev=8,r.t0=r.catch(0),console.error("Error getting most popular movies:",r.t0),r.t0;case 12:case"end":return r.stop()}}),r,null,[[0,8]])})));return function(){return r.apply(this,arguments)}}(),i=function(){var r=(0,n.Z)(c().mark((function r(t){var e,n;return c().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,u.get("movie/".concat(t));case 3:return e=r.sent,n=e.data,r.abrupt("return",n);case 8:throw r.prev=8,r.t0=r.catch(0),console.error("Error getting movie with ID ".concat(t,":"),r.t0),r.t0;case 12:case"end":return r.stop()}}),r,null,[[0,8]])})));return function(t){return r.apply(this,arguments)}}(),p=function(){var r=(0,n.Z)(c().mark((function r(t){var e,n;return c().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,u.get("movie/".concat(t,"/credits"));case 3:return e=r.sent,n=e.data,r.abrupt("return",n);case 8:throw r.prev=8,r.t0=r.catch(0),console.error("Error getting credits for movie with ID ".concat(t,":"),r.t0),r.t0;case 12:case"end":return r.stop()}}),r,null,[[0,8]])})));return function(t){return r.apply(this,arguments)}}(),f=function(){var r=(0,n.Z)(c().mark((function r(t){var e,n;return c().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,u.get("movie/".concat(t,"/reviews"));case 3:return e=r.sent,n=e.data,r.abrupt("return",n);case 8:throw r.prev=8,r.t0=r.catch(0),console.error("Error getting reviews for movie with ID ".concat(t,":"),r.t0),r.t0;case 12:case"end":return r.stop()}}),r,null,[[0,8]])})));return function(t){return r.apply(this,arguments)}}()}}]);
//# sourceMappingURL=385.c1124dd0.chunk.js.map