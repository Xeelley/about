(function(t){function e(e){for(var s,o,i=e[0],l=e[1],c=e[2],p=0,f=[];p<i.length;p++)o=i[p],Object.prototype.hasOwnProperty.call(n,o)&&n[o]&&f.push(n[o][0]),n[o]=0;for(s in l)Object.prototype.hasOwnProperty.call(l,s)&&(t[s]=l[s]);u&&u(e);while(f.length)f.shift()();return r.push.apply(r,c||[]),a()}function a(){for(var t,e=0;e<r.length;e++){for(var a=r[e],s=!0,i=1;i<a.length;i++){var l=a[i];0!==n[l]&&(s=!1)}s&&(r.splice(e--,1),t=o(o.s=a[0]))}return t}var s={},n={app:0},r=[];function o(e){if(s[e])return s[e].exports;var a=s[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,o),a.l=!0,a.exports}o.m=t,o.c=s,o.d=function(t,e,a){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(o.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var s in t)o.d(a,s,function(e){return t[e]}.bind(null,s));return a},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="/about/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],l=i.push.bind(i);i.push=e,i=i.slice();for(var c=0;c<i.length;c++)e(i[c]);var u=l;r.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"1c2e":function(t,e,a){"use strict";a("b6ce")},"1edb":function(t,e){t.exports=[{year:2015,title:"Cherkasy Physics and Mathematics Lyceum",text:"2010-2015, Cherkasy, Ukraine<br>Secondary Education"},{year:2016,title:"Let's begin!",text:"First project and start of long developer journey full of different projects"},{year:2019,title:"Node.js + Typescript = ❤️",text:'2016-2019 were full of complex projects with many different companies as outsource developer: \n      <a class="a-inline" href="https://www.cryptopay.com.ua/" target="_blank">Cryptopay.com.ua</a>,\n      <a class="a-inline" href="https://www.kaffit.ru/" target="_blank">Kaffit</a>,\n      <a class="a-inline" href="https://ek.ua/" target="_blank">e-katalog</a> etc...\n      <br>\n      Check them out!'},{year:2020,title:"Cherkasy State Technological University",text:"Bachelor's degree\n      <br>Speciality: Computer Sciences\n      <br>Educational program: Software Engineering\n      <br>Diploma: B20 №189201"},{year:2021,title:"inbot.pro",text:'2019-2021\n      <br>Position: Software Engineer (Remote)\n      <br>Messengers-based and WEB solutions for famous companies like\n      <a class="a-inline" href="https://justin.ua/" target="_blank">Justin</a> or even for\n      <a class="a-inline" href="https://mtu.gov.ua/" target="_blank">Ministry of Communuties, Territories and\n      Infrastructure Development of Ukraine</a>'},{year:2022,title:"IBOX",text:"2021-2022\n      <br>Position: Software Engineer (Central Office, Kyiv, Ukraine)\n      <br>New features development & integration in the biggest instant payment company in Ukraine."},{year:"Present",title:"Don't stop!",text:"Never late to learn something new!"}]},"2bae":function(t,e,a){},"2c06":function(t,e,a){},"2c9f":function(t,e,a){"use strict";a("82fb")},"393e":function(t,e,a){},4534:function(t,e,a){"use strict";a("393e")},"56d7":function(t,e,a){"use strict";a.r(e);a("e260"),a("e6cf"),a("cca6"),a("a79d");var s=a("2b0e"),n=a("8c4f"),r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"app-root"},[a("div",{staticClass:"show-root"},[a("v-app",[a("ComponentSideNavigation"),a("div",{staticClass:"router-wrapper"},[a("div",{staticClass:"router-inner"},[a("router-view")],1)])],1)],1),t._m(0)])},o=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"hide-root"},[a("h1",[t._v(":(")]),a("p",[t._v("Sorry, but this page for desktop only :(")])])}],i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"side-nav-root"},[a("div",{staticClass:"list-wrapper"},[t._m(0),a("v-list",{attrs:{dense:"",rounded:"",color:"transparent"}},[a("router-link",{staticClass:"router-link",attrs:{to:"/about"}},[a("v-list-item",{attrs:{link:""}},[a("v-list-item-icon",[a("v-icon",[t._v("mdi-account")])],1),a("v-list-item-content",[a("v-list-item-title",[a("div",{staticClass:"router-link-text"},[t._v("About Me")])])],1)],1)],1),a("router-link",{staticClass:"router-link",attrs:{to:"/career"}},[a("v-list-item",{attrs:{link:""}},[a("v-list-item-icon",[a("v-icon",[t._v("mdi-certificate")])],1),a("v-list-item-content",[a("v-list-item-title",[a("div",{staticClass:"router-link-text"},[t._v("Education & Career")])])],1)],1)],1),a("router-link",{staticClass:"router-link",attrs:{to:"/projects"}},[a("v-list-item",{attrs:{link:""}},[a("v-list-item-icon",[a("v-icon",[t._v("mdi-briefcase")])],1),a("v-list-item-content",[a("v-list-item-title",[a("div",{staticClass:"router-link-text"},[t._v("Projects")])])],1)],1)],1),a("router-link",{staticClass:"router-link",attrs:{to:"/skills"}},[a("v-list-item",{attrs:{link:""}},[a("v-list-item-icon",[a("v-icon",[t._v("mdi-star-four-points")])],1),a("v-list-item-content",[a("v-list-item-title",[a("div",{staticClass:"router-link-text"},[t._v("Skills")])])],1)],1)],1),a("router-link",{staticClass:"router-link",attrs:{to:"/achievements"}},[a("v-list-item",{attrs:{link:""}},[a("v-list-item-icon",[a("v-icon",[t._v("mdi-medal")])],1),a("v-list-item-content",[a("v-list-item-title",[a("div",{staticClass:"router-link-text"},[t._v("Achievements & Hobbies")])])],1)],1)],1)],1)],1),a("div",{staticClass:"side-nav-footer"},[t._v(" "+t._s(t.currentYear)+" ")])])},l=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"list-header"},[s("img",{staticClass:"list-header-img",attrs:{src:a("915e"),alt:"Ivan Hrypak"}}),s("p",{staticClass:"list-header-name"},[t._v("Ivan Hrypak")])])}],c={name:"SideNavigation",data:function(){return{currentYear:(new Date).getFullYear()}}},u=c,p=(a("f7e3"),a("2877")),f=a("6544"),d=a.n(f),m=a("132d"),g=a("8860"),v=a("da13"),b=a("5d23"),h=a("34c3"),k=Object(p["a"])(u,i,l,!1,null,null,null),y=k.exports;d()(k,{VIcon:m["a"],VList:g["a"],VListItem:v["a"],VListItemContent:b["a"],VListItemIcon:h["a"],VListItemTitle:b["b"]});var _={name:"App",components:{ComponentSideNavigation:y},data:function(){return{}}},w=_,C=(a("5c0b"),a("7496")),j=Object(p["a"])(w,r,o,!1,null,null,null),x=j.exports;d()(j,{VApp:C["a"]});var T=a("f309");s["a"].use(T["a"]);var U=new T["a"]({}),P=a("ad3d"),E=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"education-root"},[a("ArticleHeader",{attrs:{title:"Education and Career",backgroundText:"Where I began?"}}),a("Timeline",{attrs:{years:t.years}})],1)},A=[],M=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"article-header-root"},[a("p",{staticClass:"title"},[t._v(t._s(t.title))]),a("p",{staticClass:"bg-text"},[t._v(t._s(t.backgroundText))])])},S=[],I={name:"ArticleHeader",props:["title","backgroundText"],data:function(){return{}}},R=I,B=(a("e696"),Object(p["a"])(R,M,S,!1,null,null,null)),D=B.exports,N=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-timeline",t._l(t.years,(function(e,s){return a("v-timeline-item",{key:s,attrs:{small:""},scopedSlots:t._u([{key:"opposite",fn:function(){return[a("span",{class:"headline font-weight-bold pink--text",domProps:{textContent:t._s(e.year)}})]},proxy:!0}],null,!0)},[a("div",{staticClass:"py-4"},[a("h2",{class:"headline font-weight-light mb-4 pink--text"},[t._v(t._s(e.title))]),a("div",{domProps:{innerHTML:t._s(e.text)}})])])})),1)},L=[],O={name:"Timeline",props:["years"],data:function(){return{}}},H=O,V=(a("2c9f"),a("9960"),a("8414")),$=a("1e06"),F=Object(p["a"])(H,N,L,!1,null,"e8da1742",null),Q=F.exports;d()(F,{VTimeline:V["a"],VTimelineItem:$["a"]});var J=a("1edb"),W=a.n(J),K=a("c074"),G={name:"Education",components:{ArticleHeader:D,Timeline:Q},computed:{iconArrowDown:function(){return K["a"]}},data:function(){return{years:W.a}}},X=G,z=(a("76e8"),Object(p["a"])(X,E,A,!1,null,"e1d90d58",null)),Y=z.exports,q=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"projects-root"},[a("ArticleHeader",{attrs:{title:"Projects",backgroundText:"What I did?"}}),a("div",{staticClass:"projects-header"},[t._v(" Some of my projects: ")]),t._l(t.projects,(function(t){return a("ProjectCart",{key:t.description,attrs:{title:t.title,underline:t.underline,description:t.description,position:t.position,technologies:t.technologies}})})),a("div",{staticClass:"projects-footer"},[t._v(" And more... ")])],2)},Z=[],tt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"project-cart-wrapper"},[a("table",[a("tr",{staticClass:"header"},[a("td",[t._v(t._s(t.title))])]),a("tr",{staticClass:"underline"},[a("td",[a("font-awesome-icon",{staticClass:"underline-label",attrs:{icon:t.iconCalendar}}),t._v(t._s(t.underline))],1)]),a("tr",{staticClass:"description"},[a("td",{domProps:{innerHTML:t._s(t.description)}})]),a("tr",{staticClass:"position"},[a("td",[a("span",{staticClass:"position-label"},[t._v("Position:")]),t._v(" "+t._s(t.position))])]),a("tr",{staticClass:"technologies"},[a("td",[a("span",{staticClass:"technologies-label"},[t._v("Core technologies:")]),t._v(" "+t._s(t.technologies))])])])])},et=[],at={name:"ProjectCart",props:["title","underline","description","position","technologies"],computed:{iconCalendar:function(){return K["c"]}},data:function(){return{}}},st=at,nt=(a("a186"),a("5edd"),Object(p["a"])(st,tt,et,!1,null,"2f5a474f",null)),rt=nt.exports,ot=a("be2c"),it=a.n(ot),lt={name:"Skills",components:{ArticleHeader:D,ProjectCart:rt},data:function(){return{projects:it.a}}},ct=lt,ut=(a("f29c"),Object(p["a"])(ct,q,Z,!1,null,"5f8b0293",null)),pt=ut.exports,ft=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"about-me-root"},[a("ArticleHeader",{attrs:{title:"About Me",backgroundText:"Who I am?"}}),a("table",{staticClass:"top-table"},[a("tr",[a("td",{staticClass:"icon-td"},[a("font-awesome-icon",{attrs:{icon:t.iconUser}})],1),a("td",[t._v("24.01.1998")])]),a("tr",[a("td",{staticClass:"icon-td"},[a("font-awesome-icon",{attrs:{icon:t.iconGlobe}})],1),a("td",[t._v("Ukraine, Kyiv")])])]),a("br"),a("br"),a("p",{staticClass:"info-box"},[t._v(" Full stack software engineer with "),a("span",{staticClass:"accent-span"},[t._v(t._s(t.years)+" years+ of experience here!")]),t._v(" developing different projects (web mostly). I like what I do 'cause I "),a("span",{staticClass:"accent-span"},[t._v("enjoy")]),t._v(" building "),a("span",{staticClass:"accent-span"},[t._v("cool")]),t._v(" things that millions of people can see. It's more like a lifestyle, not just a job. "),a("br"),a("br"),a("br"),t._v(" Feel free to contact me with any questions: ")]),a("table",{staticClass:"contacts-table"},[a("tr",[a("td",{staticClass:"icon-td"},[a("font-awesome-icon",{attrs:{icon:t.iconPhone}})],1),t._m(0)]),a("tr",[a("td",{staticClass:"icon-td"},[a("font-awesome-icon",{attrs:{icon:t.iconTelegram}})],1),t._m(1)]),a("tr",[a("td",{staticClass:"icon-td"},[a("font-awesome-icon",{attrs:{icon:t.iconLinkedin}})],1),t._m(2)]),a("tr",[a("td",{staticClass:"icon-td"},[a("font-awesome-icon",{attrs:{icon:t.iconMail}})],1),t._m(3)])])],1)},dt=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("td",[a("a",{attrs:{href:"tel:+380635243678",target:"_blank"}},[t._v("+38(063)52-43-678")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("td",[a("a",{attrs:{href:"https://t.me/xeelley",target:"_blank"}},[t._v("@xeelley")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("td",[a("a",{attrs:{href:"https://www.linkedin.com/in/xeelley/",target:"_blank"}},[t._v("Ivan Hrypak")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("td",[a("a",{attrs:{href:"mailto:i.am.hrypak@gmail.com",target:"_blank"}},[t._v("i.am.hrypak@gmail.com")])])}],mt=a("f2d1"),gt={name:"AboutMe",components:{ArticleHeader:D},data:function(){return{years:(new Date).getFullYear()-2016}},computed:{iconUser:function(){return K["k"]},iconMail:function(){return K["f"]},iconGlobe:function(){return K["h"]},iconPhone:function(){return K["j"]},iconTelegram:function(){return mt["b"]},iconLinkedin:function(){return mt["a"]}}},vt=gt,bt=(a("1c2e"),Object(p["a"])(vt,ft,dt,!1,null,"31e0d346",null)),ht=bt.exports,kt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"hobbies-root"},[a("ArticleHeader",{attrs:{title:"Achievements",backgroundText:"What I did?"}}),t._m(0),a("ArticleHeader",{attrs:{title:"Hobbies",backgroundText:"What I like?"}}),a("div",{staticClass:"hobby-showcase"},[a("v-row",[a("v-col",{attrs:{sm:"3"}},[a("HobbyCart",{attrs:{title:"Gastro<br>Traveling",icon:t.iconFood}})],1),a("v-col",{attrs:{sm:"3"}},[a("HobbyCart",{attrs:{title:"8-Ball &#x26;<br>Snooker",icon:t.iconBall}})],1),a("v-col",{attrs:{sm:"3"}},[a("HobbyCart",{attrs:{title:"Video<br>Games",icon:t.iconGamepad}})],1),a("v-col",{attrs:{sm:"3"}},[a("HobbyCart",{attrs:{title:"Movies",icon:t.iconMovie}})],1)],1),a("v-row",[a("v-col",{attrs:{sm:"3"}}),a("v-col",{attrs:{sm:"3"}},[a("HobbyCart",{attrs:{title:"Tabletop<br>Games",icon:t.iconChess}})],1),a("v-col",{attrs:{sm:"3"}},[a("HobbyCart",{attrs:{title:"Cooking",icon:t.iconCooking}})],1),a("v-col",{attrs:{sm:"3"}})],1)],1)],1)},yt=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"info-box"},[a("p",[t._v("- Led a team up-to 4 developers.")]),a("p",[t._v("- Developed own "),a("a",{attrs:{href:"https://www.npmjs.com/package/ant-telegram",target:"_blank"}},[t._v("Node.js framework for Telegram Bot API")]),t._v(" with 3000+ NPM downloads and 20+ production bots running on it.")]),a("p",[t._v("- Developed the technical skills of new joiners (Node.js junior devs).")]),a("p",[t._v("- Worked on the project for the "),a("a",{attrs:{href:"https://mtu.gov.ua/en/",target:"_blank"}},[t._v("Ministry of Communuties, Territories and Infrastructure Development of Ukraine")]),t._v(": road repairing works monitoring bot, available for all ukrainians.")]),a("p",[t._v("- Developed and integrated new functionality into an informational system of the biggest instant payment company in Ukraine - "),a("a",{attrs:{href:"https://ibox.ua/"}},[t._v("IBOX")]),t._v(". New possibilities for customers helped the company to increase income up to 10% for a year.")]),a("p",[t._v("- Worked for 2 years under PCI DSS security standards.")])])}],_t=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"hobby-cart-wrapper"},[a("div",{staticClass:"hobby-cart-icon-box"},[a("font-awesome-icon",{attrs:{icon:t.icon}})],1),a("p",{staticClass:"cart-title",domProps:{innerHTML:t._s(t.title)}})])},wt=[],Ct={name:"HobbyCart",props:["title","icon"],data:function(){return{}}},jt=Ct,xt=(a("9a86"),Object(p["a"])(jt,_t,wt,!1,null,"61e0123a",null)),Tt=xt.exports,Ut={name:"Hobbies",components:{ArticleHeader:D,HobbyCart:Tt},computed:{iconFood:function(){return K["i"]},iconBall:function(){return K["e"]},iconGamepad:function(){return K["g"]},iconChess:function(){return K["d"]},iconMovie:function(){return K["l"]},iconCooking:function(){return K["b"]}},data:function(){return{}}},Pt=Ut,Et=(a("b4b1"),a("62ad")),At=a("0fd9"),Mt=Object(p["a"])(Pt,kt,yt,!1,null,"e86b5322",null),St=Mt.exports;d()(Mt,{VCol:Et["a"],VRow:At["a"]});var It=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"skills-root"},[a("ArticleHeader",{attrs:{title:"Skills",backgroundText:"What I can?"}}),a("v-row",[a("v-col",{attrs:{sm:"6"}},[a("RatingTable",{attrs:{title:"Languages",rows:t.skills.languages,float:"left",no_last_usage_header:"true"}})],1),a("v-col",{attrs:{sm:"6"}},[a("RatingTable",{attrs:{title:"Programming languages",rows:t.skills.programming_languages,float:"left"}})],1)],1),a("v-row",[a("v-col",{attrs:{sm:"6"}},[a("RatingTable",{attrs:{title:"Backend",rows:t.skills.backend,float:"left"}})],1),a("v-col",{attrs:{sm:"6"}},[a("RatingTable",{attrs:{title:"Frontend",rows:t.skills.frontend,float:"left"}})],1)],1),a("v-row",[a("v-col",{attrs:{sm:"6"}},[a("RatingTable",{attrs:{title:"Databases",rows:t.skills.databases,float:"left"}})],1),a("v-col",{attrs:{sm:"6"}},[a("RatingTable",{attrs:{title:"Cloud-based",rows:t.skills.cloud,float:"left"}})],1)],1),a("v-row",[a("v-col",{attrs:{sm:"6"}},[a("RatingTable",{attrs:{title:"Hybrid",rows:t.skills.hybrid,float:"left"}})],1),a("v-col",{attrs:{sm:"6"}},[a("RatingTable",{attrs:{title:"Testing",rows:t.skills.testing,float:"left"}})],1)],1),a("v-row",[a("v-col",{attrs:{sm:"6"}},[a("RatingTable",{attrs:{title:"DevTools and Environment",rows:t.skills.devtools,float:"left"}})],1),a("v-col",{attrs:{sm:"6"}},[a("RatingTable",{attrs:{title:"Technologies",rows:t.skills.technologies,float:"left"}})],1)],1),a("v-row",[a("v-col",{attrs:{sm:"6"}},[a("RatingTable",{attrs:{title:"Security",rows:t.skills.security,float:"left"}})],1),a("v-col",{attrs:{sm:"6"}},[a("RatingTable",{attrs:{title:"Management",rows:t.skills.management,float:"left"}})],1)],1),a("v-row",[a("v-col",{attrs:{sm:"6"}},[a("RatingTable",{attrs:{title:"Platforms",rows:t.skills.platforms,float:"left"}})],1),a("v-col",{attrs:{sm:"6"}},[a("RatingTable",{attrs:{title:"Deployment",rows:t.skills.deployment,float:"left"}})],1)],1),a("v-row",[a("v-col",{attrs:{sm:"6"}},[a("RatingTable",{attrs:{title:"Software",rows:t.skills.office,float:"left"}})],1),a("v-col",{attrs:{sm:"6"}},[a("RatingTable",{attrs:{title:"Architecture",rows:t.skills.architectures,float:"left"}})],1)],1)],1)},Rt=[],Bt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"rating-table-wrapper",class:{"float-right":"right"==t.float,"float-left":"left"==t.float}},[a("p",{staticClass:"title"},[t._v(t._s(t.title))]),a("table",[a("tr",{staticClass:"header"},[a("th",{staticClass:"th-name"},[t._v("Name")]),a("th",{staticClass:"th-stars"}),a("th",{staticClass:"th-last-usage"},[t._v(t._s(t.no_last_usage_header?"":"Last Usage"))])]),t._l(t.rows,(function(e){return a("tr",{key:e.name},[a("td",[t._v(t._s(e.name))]),a("td",{staticClass:"rating-td"},[a("v-rating",{attrs:{readonly:"","half-increments":"",color:"none",length:"5",size:"24",value:e.skill}})],1),a("td",[t._v(t._s(e.lastUsage))])])}))],2)])},Dt=[],Nt={name:"Timeline",props:["rows","title","float","no_last_usage_header"],data:function(){return{}}},Lt=Nt,Ot=(a("e933"),a("756a"),a("1d4d")),Ht=Object(p["a"])(Lt,Bt,Dt,!1,null,"2204b644",null),Vt=Ht.exports;d()(Ht,{VRating:Ot["a"]});var $t=a("b3e2"),Ft=a.n($t),Qt={name:"Skills",components:{ArticleHeader:D,RatingTable:Vt},data:function(){return{skills:Ft.a}}},Jt=Qt,Wt=(a("4534"),Object(p["a"])(Jt,It,Rt,!1,null,"63f3466d",null)),Kt=Wt.exports;d()(Wt,{VCol:Et["a"],VRow:At["a"]}),s["a"].component("font-awesome-icon",P["a"]),s["a"].use(n["a"]),s["a"].config.productionTip=!1;var Gt=new n["a"]({routes:[{path:"/about",component:ht},{path:"/career",component:Y},{path:"/projects",component:pt},{path:"/skills",component:Kt},{path:"/achievements",component:St},{path:"/",redirect:"/about"}]});new s["a"]({vuetify:U,router:Gt,render:function(t){return t(x)}}).$mount("#app")},5980:function(t,e,a){},"5c0b":function(t,e,a){"use strict";a("9c0c")},"5edd":function(t,e,a){"use strict";a("65b9")},"65b9":function(t,e,a){},"756a":function(t,e,a){"use strict";a("d1ec")},"76e8":function(t,e,a){"use strict";a("ac6c")},"7af0":function(t,e,a){},"82fb":function(t,e,a){},"915e":function(t,e,a){t.exports=a.p+"img/avatar.3c853d22.jpg"},9960:function(t,e,a){"use strict";a("9e6d")},"9a86":function(t,e,a){"use strict";a("2c06")},"9c0c":function(t,e,a){},"9e6d":function(t,e,a){},a186:function(t,e,a){"use strict";a("5980")},ac6c:function(t,e,a){},b3e2:function(t,e){t.exports={languages:[{name:"English",skill:3.5,lastUsage:"Upper interm."},{name:"Russian",skill:5,lastUsage:"Native"},{name:"Ukrainian",skill:5,lastUsage:"Native"}],programming_languages:[{name:"Javascript (ECMA 11+)",skill:5,lastUsage:2022},{name:"Typescript",skill:5,lastUsage:2022},{name:"Python",skill:3,lastUsage:2020},{name:"Rust",skill:2.5,lastUsage:2022}],backend:[{name:"Node.js",skill:5,lastUsage:2022},{name:"ExpressJS / HAPI",skill:5,lastUsage:2022},{name:"NestJS",skill:3.5,lastUsage:2021}],frontend:[{name:"Vue.js 2+",skill:4,lastUsage:2021},{name:"Angular 2+",skill:4.5,lastUsage:2022}],databases:[{name:"MongoDB",skill:4.5,lastUsage:2021},{name:"Postgres / MySQL",skill:5,lastUsage:2022},{name:"Redis",skill:3.5,lastUsage:2020}],cloud:[{name:"GoogleCloud",skill:3.5,lastUsage:2020},{name:"AWS",skill:3,lastUsage:2019}],hybrid:[{name:"Ionic 2+",skill:3,lastUsage:2019}],testing:[{name:"Mocha",skill:3,lastUsage:2020},{name:"Chai",skill:3,lastUsage:2020},{name:"AutoCannon",skill:4,lastUsage:2021}],devtools:[{name:"Gitlab CI/CD",skill:4,lastUsage:2021},{name:"Docker",skill:3.5,lastUsage:2020},{name:"Jenkins",skill:4,lastUsage:2022}],technologies:[{name:"WebSockets",skill:4.5,lastUsage:2022},{name:"RESTful API",skill:5,lastUsage:2022},{name:"GraphQL",skill:3,lastUsage:2020},{name:"Brokers (RabbitMQ / Kafka)",skill:4,lastUsage:2022}],platforms:[{name:"Telegram / Viber API",skill:5,lastUsage:2021},{name:"Dialogflow",skill:4,lastUsage:2020},{name:"Chromium",skill:4,lastUsage:2019}],deployment:[{name:"PM2",skill:5,lastUsage:2021},{name:"Linux + Nginx/Apache",skill:4,lastUsage:2021}],security:[{name:"PCI DSS",skill:4,lastUsage:2022}],management:[{name:"Jira / Confluence",skill:4.5,lastUsage:2022}],office:[{name:"MS Word / Excel",skill:5,lastUsage:2022},{name:"Adobe Photoshop",skill:3.5,lastUsage:2022}],architectures:[{name:"Microservices",skill:4.5,lastUsage:2022},{name:"Event-driven",skill:5,lastUsage:2022}]}},b4b1:function(t,e,a){"use strict";a("7af0")},b6ce:function(t,e,a){},b7b1:function(t,e,a){},be2c:function(t,e){t.exports=[{title:"IBOX",underline:"Q2 2021 - Present",description:'<a class="project-in-link" href="https://www.ibox.ua/">IBOX™</a> - the biggest instant payments company in Ukraine! Thousands of terminals in Ukraine: \n        top up your phone, pay a utility bill or a fine, or transfer funds to another account in any terminal right next to your house or on the site!',position:"Software Engineer",technologies:"Node.js + Typescript, MySQL, Angular 10+, Express, Jenkins, RabbitMQ, WS"},{title:"Kaffit Assistant",underline:"Q3-Q4 2019, Kaffit™",description:'Personal bot-assiatant for Kaffit™ coffee machines. Manage up to 3 of your machines by yourself or gain access to anyone else: remote enabling / disabling, \n        remote beverages-making process, device options management, instant help with NLU-based responses etc. Control panel with wide coverage for the manufacturer.<br>\n        <a class="project-in-link" href="https://www.kaffit.ru/">Kaffit™</a>,\n        <a class="project-in-link" href="https://t.me/Kaffitbot">Telegram Assistant</a>,\n        <a class="project-in-link" href="https://www.facebook.com/Kaffitcom/">Facebook Messenger Assistant</a>,\n        <a class="project-in-link" href="viber://pa?chatURI=Kaffitbot">Viber Assistant</a>',position:"Full Stack Developer (Lead)",technologies:"Node.js + Typescript, Postgres, Redis, Docker, Express, Vue, RabbitMQ, Microservices, Dialogflow"},{title:"Justin",underline:"Early 2020, Justin™, Fozzy Group",description:'Official Justin Bot: delivery tracker, price calculator, nearest station finder etc.<br>\n        <a class="project-in-link" href="https://justin.ua/">Justin™</a>,\n        <a class="project-in-link" href="https://t.me/justinpostservice_bot">Justin Bot</a>',position:"Node.js Developer",technologies:"Node.js + Typescript, REST API, MongoDB, Vue, Docker, Chai"},{title:"PoiskAutoBot & NedvizhkaBot bot group",underline:"2019-2021",description:'Group of bots for Telegram & Viber with administrative tools behind it. Bots will send you new orders about estate rent, estate selling or auto \n        selling from your own database or popular marketplaces from a global list or by your personal configurable search settings. Orders for the bot group\'s database can be \n        created by users in their profiles, where a lot of useful tools can be found besides order creation.<br>Bots: \n        <a class="project-in-link" href="https://t.me/Poisk_AutoBot">@Poisk_AutoBot</a>,\n        <a class="project-in-link" href="https://t.me/PoiskAutoCabinet_Bot">@PoiskAutoCabinet_Bot</a>,\n        <a class="project-in-link" href="https://t.me/Nedvizhka1Bot">@Nedvizhka1Bot</a>,\n        <a class="project-in-link" href="https://t.me/KatalogZabudovnikivBot">@KatalogZabudovnikivBot</a>,\n        <a class="project-in-link" href="https://t.me/OtchetCarfaxBot">@OtchetCarfaxBot</a> ...',position:"Full Stack Developer",technologies:"Node.js + Typescript, Docker, REST API, Telegram API, Postgres, MongoDB, Vue, Redis"},{title:"E-transport",underline:"Q1-Q2 2020, Ministry of Infrastructure of Ukraine",description:'Road repairing works monitoring bot for Telegram + components of government services: seafarer electronic profile and service \n        for application for passing the State Qualification Commission.<br>\n        <a class="project-in-link" href="https://mtu.gov.ua/en/">MIU</a>,\n        <a class="project-in-link" href="https://e-transport.gov.ua/">E-transport website</a>,\n        <a class="project-in-link" href="https://t.me/Etransportgovua_bot">E-transport Telegram bot</a>,\n        <a class="project-in-link" href="https://www.unian.net/economics/transport/na-pravitelstvennom-transportnom-portale-poyavilsya-elektronnyy-kabinet-moryaka-i-ryad-novyh-servisov-novosti-ukraina-10970537.html">\n        Release news (source: UNIAN)</a>',position:"Node.js Developer",technologies:"Node.js + Typescript, Docker, REST API, Telegram API, MongoDB, Mocha+Chai"},{title:"Limagrain",underline:"2020, Limagrain™",description:'Control panel for Limagrain™ with customer features provided via Telegram: user analytics, products & services viewer and customer support tools.<br>\n        <a class="project-in-link" href="https://lgseeds.com.ua/">Limagrain</a>,\n        <a class="project-in-link" href="https://t.me/Limagrain_Ukraine_bot">Limagrain Telegram</a>',position:"Full Stack Developer",technologies:"Node.js, express, Vue, MongoDB, Telegram API"},{title:"Customer messenger",underline:"Q4 2019 - Q1 2020",description:"Messenger for customer support porpoises for internal company usage. Include integration with AmoCRM. The system provides interfaces \n        for customers in all popular existent messengers: Telegram / Viber / Messenger or web. The support interface and control panel both are web-oriented.",position:"Lead Developer",technologies:"Node.js, Typescript, socket.io, RabbitMQ, Microservices, Vue, Postgres, Redis"},{title:"LUXEL",underline:"Q1 2019, LUXEL ©",description:'Bot for LUXEL store integrated with CRM. Four user roles: customer, manufacturer, provider and admin. Products search, cart & orders with instant \n        checkout function (Liqpay) for users. Detail statistic & anaylytics for manufacturers and providers. Global control panel with all data for admins.<br>\n        <a class="project-in-link" href="https://luxel.ua/">luxel.ua</a>, \n        <a class="project-in-link" href="http://t.me/luxel_bot">Telegram Bot</a>',position:"Full Stack Developer",technologies:"Node.js, Express, Vue, Mongo, Telegram API"},{title:"Russ-Express Reisebüro",underline:"Q1 2018, Russ-Express Reisebüro",description:'Bot for tour agency (Facebook Messenger) integrated with CRM. All tasks for customers of your business: tour search, detail info, contact with support \n        and possibility to instantly reserve tour you like from your favorite messenger.<br>\n        <a class="project-in-link" href="http://www.russ-express.de/">Russ-Express.de</a>, \n        <a class="project-in-link" href="https://www.facebook.com/russexpress/">Russ-Express Messenger Bot</a>',position:"Node.js Developer",technologies:"Node.js, Facebook API, MongoDB, Express, Vue"},{title:"E-kalalog messenger bots",underline:"2017, E-Katalog",description:'All that you need in your messenger: product search, full info about products, cart & orders. Telegram and Viber support.<br>\n        <a class="project-in-link" href="https://ek.ua/">E-kalalog</a>',position:"Node.js Developer",technologies:"Node.js, Telegram / Viber API, MongoDB"},{title:"Cryptopay.com.ua",underline:"2017, Cryptopay",description:'Web service for cryptocurrency exchange with instant payment terminals partnership. Elixir & Bitcoin for everyone! Buy & sell cryptocurrency right in your browser or phone by card,\n        or in the nearest terminal by cash.<br>\n        <a class="project-in-link" href="https://cryptopay.com.ua">cryptopay.com.ua</a>',position:"Full Stack Developer",technologies:"Angular 2, Node.js, Express, Postgres"},{title:"Plus for Trello",underline:"2016",description:'Chrome extention for <a class="project-in-link" href="https://trello.com/">Trello</a>, created to add new functional: board groups, time tracker, priority labels, embedded ticket description labels, \n        mentions and much more! Part of new features connected to own external system.<br>\n        <a class="project-in-link" href="https://chrome.google.com/webstore/detail/plus-for-trello-time-trac/gjjpophepkbhejnglcmkdnncmaanojkf">Chrome Web Store: Plus for Trello</a>',position:"JS developer",technologies:"JS, Chrome extentions API, REST API, WS, MySQL"}]},c3ec:function(t,e,a){},d1ec:function(t,e,a){},e696:function(t,e,a){"use strict";a("c3ec")},e933:function(t,e,a){"use strict";a("b7b1")},f29c:function(t,e,a){"use strict";a("fad8")},f7e3:function(t,e,a){"use strict";a("2bae")},fad8:function(t,e,a){}});
//# sourceMappingURL=app.a77c2cee.js.map