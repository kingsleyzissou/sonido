(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{376:function(t,e,r){var content=r(398);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(16).default)("7b37accd",content,!0,{sourceMap:!1})},397:function(t,e,r){"use strict";var n=r(376);r.n(n).a},398:function(t,e,r){(t.exports=r(15)(!1)).push([t.i,".card:hover>.card-img[data-v-4bcd424a]{opacity:.5}",""])},416:function(t,e,r){"use strict";r.r(e);r(14);var n={props:["id"],data:function(){return{list:[]}},mounted:function(){var t=this;return regeneratorRuntime.async((function(e){for(;;)switch(e.prev=e.next){case 0:this.$axios.$get("/browse/categories/".concat(this.id,"/playlists")).then((function(e){var r=e.playlists.items;t.list=r}));case 1:case"end":return e.stop()}}),null,this)},computed:{playlists:function(){return this.list}}},c=(r(397),r(3)),l={layout:"dashboard",components:{Category:Object(c.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"row"},t._l(t.playlists,(function(e,n){return r("div",{key:n,staticClass:"col-lg-3"},[r("a",{staticClass:"card bg-dark text-white text-center",attrs:{href:"/playlists/"+e.id}},[r("img",{staticClass:"card-img",attrs:{src:e.images[0].url,alt:"Card image"}}),t._v(" "),r("div",{staticClass:"card-img-overlay h-100 d-flex flex-column justify-content-end"},[r("h3",{staticClass:"card-title"},[t._v(t._s(e.name))])])])])})),0)}),[],!1,null,"4bcd424a",null).exports},asyncData:function(t){var e,r,n,data;return regeneratorRuntime.async((function(c){for(;;)switch(c.prev=c.next){case 0:return e=t.$axios,r=t.params,c.next=3,regeneratorRuntime.awrap(e.get("/browse/categories/".concat(r.id)));case 3:return n=c.sent,data=n.data,c.abrupt("return",data);case 6:case"end":return c.stop()}}))}},o=Object(c.a)(l,(function(){var t=this.$createElement,e=this._self._c||t;return e("fragment",[e("div",{staticClass:"row"},[e("div",{staticClass:"col-12"},[e("card",{attrs:{type:"plain"}},[e("template",{slot:"header"},[e("div",{staticClass:"row"},[e("div",{staticClass:"col-sm-6 text-left"},[e("h2",{staticClass:"card-title"},[this._v(this._s(this.name))])])])])],2)],1)]),this._v(" "),e("category",{attrs:{id:this.id}})],1)}),[],!1,null,null,null);e.default=o.exports}}]);