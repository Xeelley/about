(function(t){function e(e){for(var r,s,o=e[0],l=e[1],c=e[2],v=0,f=[];v<o.length;v++)s=o[v],Object.prototype.hasOwnProperty.call(i,s)&&i[s]&&f.push(i[s][0]),i[s]=0;for(r in l)Object.prototype.hasOwnProperty.call(l,r)&&(t[r]=l[r]);u&&u(e);while(f.length)f.shift()();return a.push.apply(a,c||[]),n()}function n(){for(var t,e=0;e<a.length;e++){for(var n=a[e],r=!0,o=1;o<n.length;o++){var l=n[o];0!==i[l]&&(r=!1)}r&&(a.splice(e--,1),t=s(s.s=n[0]))}return t}var r={},i={app:0},a=[];function s(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.m=t,s.c=r,s.d=function(t,e,n){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)s.d(n,r,function(e){return t[e]}.bind(null,r));return n},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="/about/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],l=o.push.bind(o);o.push=e,o=o.slice();for(var c=0;c<o.length;c++)e(o[c]);var u=l;a.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"2bae":function(t,e,n){},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),i=n("8c4f"),a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"app-root"},[n("div",{staticClass:"show-root"},[n("v-app",[n("ComponentSideNavigation"),n("div",{staticClass:"router-wrapper"},[n("div",{staticClass:"router-inner"},[n("router-view")],1)])],1)],1),t._m(0)])},s=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"hide-root"},[n("h1",[t._v(":(")]),n("p",[t._v("Sorry, but this page for desktop only :(")])])}],o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"side-nav-root"},[n("div",{staticClass:"list-wrapper"},[t._m(0),n("v-list",{attrs:{dense:"",rounded:"",color:"transparent"}},[n("router-link",{staticClass:"router-link",attrs:{to:"/about"}},[n("v-list-item",{attrs:{link:""}},[n("v-list-item-icon",[n("v-icon",[t._v("mdi-account")])],1),n("v-list-item-content",[n("v-list-item-title",[n("div",{staticClass:"router-link-text"},[t._v("About Me")])])],1)],1)],1),n("router-link",{staticClass:"router-link",attrs:{to:"/career"}},[n("v-list-item",{attrs:{link:""}},[n("v-list-item-icon",[n("v-icon",[t._v("mdi-briefcase")])],1),n("v-list-item-content",[n("v-list-item-title",[n("div",{staticClass:"router-link-text"},[t._v("Education & Career")])])],1)],1)],1),n("router-link",{staticClass:"router-link",attrs:{to:"/skills"}},[n("v-list-item",{attrs:{link:""}},[n("v-list-item-icon",[n("v-icon",[t._v("mdi-star-four-points")])],1),n("v-list-item-content",[n("v-list-item-title",[n("div",{staticClass:"router-link-text"},[t._v("Skills")])])],1)],1)],1),n("router-link",{staticClass:"router-link",attrs:{to:"/achievements"}},[n("v-list-item",{attrs:{link:""}},[n("v-list-item-icon",[n("v-icon",[t._v("mdi-medal")])],1),n("v-list-item-content",[n("v-list-item-title",[n("div",{staticClass:"router-link-text"},[t._v("Achievements & Hobbies")])])],1)],1)],1)],1)],1),n("div",{staticClass:"side-nav-footer"},[t._v(" "+t._s(t.currentYear)+" ")])])},l=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"list-header"},[r("img",{staticClass:"list-header-img",attrs:{src:n("915e"),alt:"Ivan Hrypak"}}),r("p",{staticClass:"list-header-name"},[t._v("Ivan Hrypak")])])}],c={name:"SideNavigation",data:function(){return{currentYear:(new Date).getFullYear()}}},u=c,v=(n("f7e3"),n("2877")),f=n("6544"),p=n.n(f),d=n("132d"),m=n("8860"),_=n("da13"),b=n("5d23"),h=n("34c3"),k=Object(v["a"])(u,o,l,!1,null,null,null),C=k.exports;p()(k,{VIcon:d["a"],VList:m["a"],VListItem:_["a"],VListItemContent:b["a"],VListItemIcon:h["a"],VListItemTitle:b["b"]});var y={name:"App",components:{ComponentSideNavigation:C},data:function(){return{}}},g=y,w=(n("5c0b"),n("7496")),x=Object(v["a"])(g,a,s,!1,null,null,null),O=x.exports;p()(x,{VApp:w["a"]});var j=n("f309");r["a"].use(j["a"]);var E=new j["a"]({}),$=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},S=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"education-root"},[n("p",[t._v("Education")])])}],I={name:"Education",data:function(){return{}}},M=I,P=Object(v["a"])(M,$,S,!1,null,"222f52d0",null),V=P.exports,A=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},H=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"about-me-root"},[n("p",[t._v("AboutMe")])])}],L={name:"AboutMe",data:function(){return{}}},T=L,N=Object(v["a"])(T,A,H,!1,null,"3b2197af",null),Y=N.exports,J=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},D=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"hobbies-root"},[n("p",[t._v("Hobbies")])])}],F={name:"Hobbies",data:function(){return{}}},q=F,z=Object(v["a"])(q,J,D,!1,null,"15f2fda0",null),B=z.exports,G=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},K=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"skills-root"},[n("p",[t._v("Skills")])])}],Q={name:"Skills",data:function(){return{}}},R=Q,U=Object(v["a"])(R,G,K,!1,null,"5686acb4",null),W=U.exports;r["a"].use(i["a"]),r["a"].config.productionTip=!1;var X=new i["a"]({routes:[{path:"/about",component:Y},{path:"/career",component:V},{path:"/skills",component:W},{path:"/achievements",component:B},{path:"/",redirect:"/about"}]});new r["a"]({vuetify:E,router:X,render:function(t){return t(O)}}).$mount("#app")},"5c0b":function(t,e,n){"use strict";n("9c0c")},"915e":function(t,e,n){t.exports=n.p+"img/avatar.e043e0e8.jpg"},"9c0c":function(t,e,n){},f7e3:function(t,e,n){"use strict";n("2bae")}});
//# sourceMappingURL=app.409e14ce.js.map