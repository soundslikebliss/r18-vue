webpackJsonp([1],{"2yx9":function(t,a){},DO3I:function(t,a,n){t.exports=n.p+"static/img/me2.dfb787f.jpg"},"G/2H":function(t,a,n){t.exports=n.p+"static/img/loading.d403e5b.gif"},NHnr:function(t,a,n){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var e=n("7+uW"),r=n("WybQ"),o=n.n(r),i={name:"App",data:function(){return{randoColor:"#eee"}},created:function(){setInterval(this.changeColor,1e3)},methods:{changeColor:function(){var t=o()();this.randoColor=t}}},s={render:function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{attrs:{id:"app"}},[e("div",{attrs:{id:"content"}},[e("section",{attrs:{id:"wrapper"}},[e("div",{attrs:{id:"buttons"}},[e("ul",[e("li",[e("router-link",{attrs:{to:"about"}},[e("button",{style:{backgroundColor:t.randoColor}},[t._v("Ab")])])],1),t._v(" "),e("li",[e("router-link",{attrs:{to:"work"}},[e("button",{style:{backgroundColor:t.randoColor}},[t._v("Wo")])])],1),t._v(" "),e("li",[e("router-link",{attrs:{to:"contact"}},[e("button",{style:{backgroundColor:t.randoColor}},[t._v("Co")])])],1)])]),t._v(" "),e("div",{attrs:{id:"inner"}},[e("router-view")],1)])]),t._v(" "),e("img",{staticClass:"me",attrs:{src:n("DO3I")}}),t._v(" "),e("br"),t._v(" "),t._m(0)])},staticRenderFns:[function(){var t=this.$createElement,a=this._self._c||t;return a("footer",[a("p",[this._v("This SPA was built with VueJs, Vue Router, Firebase for data storage and is version controlled with "),a("a",{attrs:{href:"https://github.com/soundslikebliss/r18-vue",target:"_blank"}},[this._v("Git.")])])])}]};var c=n("VU/8")(i,s,!1,function(t){n("oG5p")},null,null).exports,d=n("/ocq"),l=n("mtWM"),u=n.n(l),_={methods:{fetchData:function(t){var a=this;setTimeout(function(){u.a.get("https://david-adams-resume.firebaseio.com/"+t+".json").then(function(t){a.data=t.data,a.loading=!1,console.log(a.data,"response data")}).catch(function(t){console.log(t)})},250)}}},v={name:"About",mixins:[_],data:function(){return{title:"About",loading:!0,data:"",error:""}},created:function(){this.fetchData("about")},methods:{}},f={render:function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"about"},[e("h1",[t._v(t._s(t.title))]),t._v(" "),t.loading?e("div",{staticClass:"loading"},[e("img",{attrs:{src:n("G/2H"),alt:"loading..."}})]):t._e(),t._v(" "),e("br"),t._v(" "),t.error?e("div",{staticClass:"error"},[t._v("\n    "+t._s(t.error)+"\n  ")]):t._e(),t._v(" "),t.data?e("div",[e("h2",[t._v(t._s(t.data.headline)),e("br"),t._v(t._s(t.data.sub))]),t._v(" "),e("p",[t._v(t._s(t.data.blurb))]),t._v(" "),e("h3",[t._v(t._s(t.data.tech_blurb))]),t._v(" "),t._l(t.data.techs,function(a){return e("div",{staticClass:"tech-list"},[e("ul",[e("li",[t._v(t._s(a))])])])})],2):t._e()])},staticRenderFns:[]};var h=n("VU/8")(v,f,!1,function(t){n("SNRd")},"data-v-71744d9e",null).exports,p={name:"Work",mixins:[_],data:function(){return{title:"Work",loading:!0,data:"",error:null}},created:function(){this.fetchData("work")},watch:{$route:"fetchData"},methods:{}},m={render:function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"work"},[e("h1",[t._v(t._s(t.title))]),t._v(" "),t.loading?e("div",{staticClass:"loading"},[e("img",{attrs:{src:n("G/2H"),alt:"loading..."}})]):t._e(),t._v(" "),e("br"),t._v(" "),t.error?e("div",{staticClass:"error"},[t._v("\n    "+t._s(t.error)+"\n  ")]):t._e(),t._v(" "),t._l(t.data,function(a){return t.data?e("div",{staticClass:"content"},t._l(a,function(a){return e("div",[e("h2",[t._v(t._s(a.name)+":")]),t._v(" "),e("p",{domProps:{innerHTML:t._s(a.desc)}}),t._v(" "),a.link?e("p",{domProps:{innerHTML:t._s(a.link)}}):t._e(),t._v(" "),e("br")])})):t._e()})],2)},staticRenderFns:[]};var b=n("VU/8")(p,m,!1,function(t){n("2yx9")},"data-v-a0daa7ba",null).exports,g={name:"Contact",mixins:[_],data:function(){return{title:"Contact",loading:!0,data:"",error:""}},created:function(){this.fetchData("contact")}},C={render:function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"contact"},[e("h1",[t._v(t._s(t.title))]),t._v(" "),t.loading?e("div",{staticClass:"loading"},[e("img",{attrs:{src:n("G/2H"),alt:"loading..."}})]):t._e(),t._v(" "),e("br"),t._v(" "),t.error?e("div",{staticClass:"error"},[t._v("\n    "+t._s(t.error)+"\n  ")]):t._e(),t._v(" "),t.data?e("div",[e("p",[t._v(t._s(t.data.headline)+", "+t._s(t.data.sub))]),t._v(" "),e("strong",[e("p",[t._v(t._s(t.data.email))])]),t._v(" "),e("a",{attrs:{href:t.data.linkedin,target:"_blank"}},[t._v("LinkedIn ")])]):t._e()])},staticRenderFns:[]};var k=n("VU/8")(g,C,!1,function(t){n("ZFpr")},"data-v-167208c0",null).exports;e.a.use(d.a);var w=new d.a({mode:"history",routes:[{path:"/",name:"Home",component:h},{path:"/about",name:"About",component:h},{path:"/work",name:"Work",component:b},{path:"/contact",name:"Contact",component:k}]});e.a.config.productionTip=!1,new e.a({el:"#app",router:w,components:{App:c},template:"<App/>"})},SNRd:function(t,a){},ZFpr:function(t,a){},oG5p:function(t,a){}},["NHnr"]);
//# sourceMappingURL=app.16264d289e4dc196be94.js.map