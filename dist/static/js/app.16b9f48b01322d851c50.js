webpackJsonp([1],{"/Nd5":function(t,n){},"2yx9":function(t,n){},DO3I:function(t,n,a){t.exports=a.p+"static/img/me2.dfb787f.jpg"},"G/2H":function(t,n,a){t.exports=a.p+"static/img/loading.d403e5b.gif"},NHnr:function(t,n,a){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var e=a("7+uW"),r=a("WybQ"),o=a.n(r),i={name:"App",data:function(){return{randoColor:"#eee"}},created:function(){setInterval(this.changeColor,1e3)},methods:{changeColor:function(){var t=o()();this.randoColor=t}}},s={render:function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{attrs:{id:"app"}},[e("div",{attrs:{id:"content"}},[e("section",{attrs:{id:"wrapper"}},[e("div",{attrs:{id:"buttons"}},[e("ul",[e("li",[e("router-link",{attrs:{to:"about"}},[e("button",{style:{backgroundColor:t.randoColor}},[t._v("Ab")])])],1),t._v(" "),e("li",[e("router-link",{attrs:{to:"work"}},[e("button",{style:{backgroundColor:t.randoColor}},[t._v("Wo")])])],1),t._v(" "),e("li",[e("router-link",{attrs:{to:"contact"}},[e("button",{style:{backgroundColor:t.randoColor}},[t._v("Co")])])],1)])]),t._v(" "),e("div",{attrs:{id:"inner"}},[e("router-view")],1)])]),t._v(" "),e("img",{staticClass:"me",attrs:{src:a("DO3I")}})])},staticRenderFns:[]};var c=a("VU/8")(i,s,!1,function(t){a("/Nd5")},null,null).exports,d=a("/ocq"),l=a("mtWM"),u=a.n(l),_={methods:{fetchData:function(t){var n=this;u.a.get("https://david-adams-resume.firebaseio.com/"+t+".json").then(function(t){n.data=t.data,n.loading=!1,console.log(n.data,"response data")}).catch(function(t){console.log(t)})}}},v={name:"About",mixins:[_],data:function(){return{title:"About",loading:!0,data:"",error:""}},created:function(){this.fetchData("about")},methods:{}},f={render:function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"about"},[e("h1",[t._v(t._s(t.title))]),t._v(" "),e("br"),t._v(" "),t.loading?e("div",{staticClass:"loading"},[e("img",{attrs:{src:a("G/2H"),alt:"loading..."}})]):t._e(),t._v(" "),t.error?e("div",{staticClass:"error"},[t._v("\n    "+t._s(t.error)+"\n  ")]):t._e(),t._v(" "),t.data?e("div",[e("h2",[t._v(t._s(t.data.headline)),e("br"),t._v(t._s(t.data.sub))]),t._v(" "),e("p",[t._v(t._s(t.data.blurb))]),t._v(" "),e("h3",[t._v(t._s(t.data.tech_blurb))]),t._v(" "),t._l(t.data.techs,function(n){return e("div",{staticClass:"tech-list"},[e("ul",[e("li",[t._v(t._s(n))])])])})],2):t._e()])},staticRenderFns:[]};var h=a("VU/8")(v,f,!1,function(t){a("sZFi")},"data-v-33076626",null).exports,m={name:"Work",mixins:[_],data:function(){return{title:"Work",loading:!0,data:"",error:null}},created:function(){this.fetchData("work")},watch:{$route:"fetchData"},methods:{}},p={render:function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"work"},[e("h1",[t._v(t._s(t.title))]),t._v(" "),t.loading?e("div",{staticClass:"loading"},[e("img",{attrs:{src:a("G/2H"),alt:"loading..."}})]):t._e(),t._v(" "),e("br"),t._v(" "),t.error?e("div",{staticClass:"error"},[t._v("\n    "+t._s(t.error)+"\n  ")]):t._e(),t._v(" "),t._l(t.data,function(n){return t.data?e("div",{staticClass:"content"},t._l(n,function(n){return e("div",[e("h2",[t._v(t._s(n.name)+":")]),t._v(" "),e("p",{domProps:{innerHTML:t._s(n.desc)}}),t._v(" "),n.link?e("p",{domProps:{innerHTML:t._s(n.link)}}):t._e(),t._v(" "),e("br")])})):t._e()})],2)},staticRenderFns:[]};var b=a("VU/8")(m,p,!1,function(t){a("2yx9")},"data-v-a0daa7ba",null).exports,g={name:"Contact",mixins:[_],data:function(){return{loading:!0,data:"",error:""}},created:function(){this.fetchData("contact")}},C={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var t=this.$createElement,n=this._self._c||t;return n("div",{staticClass:"contact"},[n("h1")])}]};var k=a("VU/8")(g,C,!1,function(t){a("WxqJ")},"data-v-eea4d212",null).exports;e.a.use(d.a);var x=new d.a({mode:"history",routes:[{path:"/",name:"Home",component:h},{path:"/about",name:"About",component:h},{path:"/work",name:"Work",component:b},{path:"/contact",name:"Contact",component:k}]});e.a.config.productionTip=!1,new e.a({el:"#app",router:x,components:{App:c},template:"<App/>"})},WxqJ:function(t,n){},sZFi:function(t,n){}},["NHnr"]);
//# sourceMappingURL=app.16b9f48b01322d851c50.js.map