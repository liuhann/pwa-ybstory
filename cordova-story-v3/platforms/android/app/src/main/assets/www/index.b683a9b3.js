(function(t){function e(e){for(var n,s,o=e[0],u=e[1],c=e[2],l=0,h=[];l<o.length;l++)s=o[l],i[s]&&h.push(i[s][0]),i[s]=0;for(n in u)Object.prototype.hasOwnProperty.call(u,n)&&(t[n]=u[n]);p&&p(e);while(h.length)h.shift()();return a.push.apply(a,c||[]),r()}function r(){for(var t,e=0;e<a.length;e++){for(var r=a[e],n=!0,s=1;s<r.length;s++){var u=r[s];0!==i[u]&&(n=!1)}n&&(a.splice(e--,1),t=o(o.s=r[0]))}return t}var n={},i={0:0},a=[];function s(t){return o.p+""+({1:"vue-router",2:"vuex"}[t]||t)+"."+{1:"09237f26",2:"cef9122f",3:"d0afda0a"}[t]+".js"}function o(e){if(n[e])return n[e].exports;var r=n[e]={i:e,l:!1,exports:{}};return t[e].call(r.exports,r,r.exports,o),r.l=!0,r.exports}o.e=function(t){var e=[],r=i[t];if(0!==r)if(r)e.push(r[2]);else{var n=new Promise(function(e,n){r=i[t]=[e,n]});e.push(r[2]=n);var a,u=document.getElementsByTagName("head")[0],c=document.createElement("script");c.charset="utf-8",c.timeout=120,o.nc&&c.setAttribute("nonce",o.nc),c.src=s(t),a=function(e){c.onerror=c.onload=null,clearTimeout(l);var r=i[t];if(0!==r){if(r){var n=e&&("load"===e.type?"missing":e.type),a=e&&e.target&&e.target.src,s=new Error("Loading chunk "+t+" failed.\n("+n+": "+a+")");s.type=n,s.request=a,r[1](s)}i[t]=void 0}};var l=setTimeout(function(){a({type:"timeout",target:c})},12e4);c.onerror=c.onload=a,u.appendChild(c)}return Promise.all(e)},o.m=t,o.c=n,o.d=function(t,e,r){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(o.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)o.d(r,n,function(e){return t[e]}.bind(null,n));return r},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="",o.oe=function(t){throw console.error(t),t};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],c=u.push.bind(u);u.push=e,u=u.slice();for(var l=0;l<u.length;l++)e(u[l]);var p=c;a.push([0,4]),r()})({"/sIc":function(t,e,r){"use strict";var n=r("6ad+"),i=r.n(n);i.a},0:function(t,e,r){t.exports=r("Vtdi")},"6ad+":function(t,e,r){},"6dNR":function(t,e,r){},"8C9q":function(t,e,r){},ISBD:function(t,e,r){},OdAc:function(t,e,r){"use strict";var n=r("q3Ix"),i=r.n(n);i.a},Vtdi:function(t,e,r){"use strict";r.r(e);r("pIFo"),r("ls82");var n=r("MECJ"),i=(r("yt8O"),r("VRzm"),r("L86J")),a={servers:{default:{baseURL:"http://118.25.210.124"},file:{baseURL:"http://118.25.210.124"},image:{baseURL:"http://118.25.210.124"}},NAME:"元宝故事"},s=(r("6dNR"),r("JTXA"),function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{attrs:{id:"app"}},[r("router-view")],1)}),o=[],u={name:"view.vue"},c=u,l=(r("/sIc"),r("KHd+")),p=Object(l["a"])(c,s,o,!1,null,null,null),h=p.exports,f=(r("91GP"),r("f3/d"),r("xmWZ")),d=r("qpph"),v=function(){function t(e){Object(f["a"])(this,t),this.ctx=e}return Object(d["a"])(t,[{key:"getStoryById",value:function(){var t=Object(n["a"])(regeneratorRuntime.mark(function t(e){var r;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,this.ctx.client.get("/story/detail/"+e);case 2:return r=t.sent,t.abrupt("return",r.data);case 4:case"end":return t.stop()}},t,this)}));return function(e){return t.apply(this,arguments)}}()},{key:"removeStoryById",value:function(){var t=Object(n["a"])(regeneratorRuntime.mark(function t(e){return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,this.ctx.client.get("/story/delete/"+e);case 2:t.sent;case 3:case"end":return t.stop()}},t,this)}));return function(e){return t.apply(this,arguments)}}()},{key:"updateStory",value:function(){var t=Object(n["a"])(regeneratorRuntime.mark(function t(e){return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,this.ctx.client.post("/story/detail/update",e);case 2:case"end":return t.stop()}},t,this)}));return function(e){return t.apply(this,arguments)}}()},{key:"listHome",value:function(){var t=Object(n["a"])(regeneratorRuntime.mark(function t(){var e;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,this.ctx.client.get("/home?labels=今日推荐,凯迪克大奖,睡前故事,绘本故事");case 2:return e=t.sent,t.abrupt("return",e.data);case 4:case"end":return t.stop()}},t,this)}));return function(){return t.apply(this,arguments)}}()},{key:"listAllLabels",value:function(){var t=Object(n["a"])(regeneratorRuntime.mark(function t(){var e;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,this.ctx.client.get("/story/labels");case 2:return e=t.sent,t.abrupt("return",e);case 4:case"end":return t.stop()}},t,this)}));return function(){return t.apply(this,arguments)}}()},{key:"getAllAlbums",value:function(){var t=Object(n["a"])(regeneratorRuntime.mark(function t(){var e;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,this.ctx.client.get("/album/list");case 2:return e=t.sent,t.abrupt("return",e);case 4:case"end":return t.stop()}},t,this)}));return function(){return t.apply(this,arguments)}}()},{key:"getAlbumDetail",value:function(){var t=Object(n["a"])(regeneratorRuntime.mark(function t(e){var r;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,this.ctx.client.get("/album/info?album="+e.name);case 2:return r=t.sent,t.abrupt("return",r);case 4:case"end":return t.stop()}},t,this)}));return function(e){return t.apply(this,arguments)}}()},{key:"filterStory",value:function(){var t=Object(n["a"])(regeneratorRuntime.mark(function t(e,r,n){var i;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,this.ctx.client.get("/story/list",Object.assign(e,{skip:r,limit:n}));case 2:return i=t.sent,t.abrupt("return",i);case 4:case"end":return t.stop()}},t,this)}));return function(e,r,n){return t.apply(this,arguments)}}()},{key:"register",value:function(){var t=Object(n["a"])(regeneratorRuntime.mark(function t(e,r){var n;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,this.ctx.client.post("/user/register",{user:e,pwd:r});case 2:return n=t.sent,t.abrupt("return",n);case 4:case"end":return t.stop()}},t,this)}));return function(e,r){return t.apply(this,arguments)}}()},{key:"login",value:function(){var t=Object(n["a"])(regeneratorRuntime.mark(function t(e,r){var n;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,this.ctx.client.post("/user/login",{user:e,pwd:r});case 2:return n=t.sent,t.abrupt("return",n);case 4:case"end":return t.stop()}},t,this)}));return function(e,r){return t.apply(this,arguments)}}()},{key:"getUserByToken",value:function(){var t=Object(n["a"])(regeneratorRuntime.mark(function t(e){var r;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,this.ctx.client.get("/user/token/check?token=".concat(e));case 2:return r=t.sent,t.abrupt("return",r);case 4:case"end":return t.stop()}},t,this)}));return function(e){return t.apply(this,arguments)}}()},{key:"getStoryContent",value:function(){var t=Object(n["a"])(regeneratorRuntime.mark(function t(e){var r;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,this.ctx.client.get("/story/content?story="+e._id);case 2:return r=t.sent,t.abrupt("return",r);case 4:case"end":return t.stop()}},t,this)}));return function(e){return t.apply(this,arguments)}}()},{key:"addFavorite",value:function(){var t=Object(n["a"])(regeneratorRuntime.mark(function t(e,r){return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:if(!this.isFavorite(e)){t.next=2;break}return t.abrupt("return");case 2:return t.next=4,this.ctx.client.post("/user/favorite/add?token=".concat(r),e);case 4:case"end":return t.stop()}},t,this)}));return function(e,r){return t.apply(this,arguments)}}()},{key:"isFavorite",value:function(t){}},{key:"addPlayHistory",value:function(t){}},{key:"getHistories",value:function(){}}]),t}(),m=v,y={onload:function(t,e){t.appDao=new m(t)}},g=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"root"},[r("van-tabs",{staticClass:"root-tabs",model:{value:t.active,callback:function(e){t.active=e},expression:"active"}},t._l(t.mainCategories,function(t){return r("van-tab",{key:t,attrs:{title:t}})})),r("div",{staticClass:"root-icons"},[r("van-icon",{attrs:{name:"search"}}),r("van-icon",{attrs:{name:"like-o"}},[r("span",[t._v("112")])]),r("van-icon",{attrs:{name:"completed"}}),r("van-icon",{attrs:{name:"edit"},on:{click:t.editCurrentStory}})],1),r("swipped-stories",{attrs:{filter:t.filter},on:{"choose-story":t.chooseStory,"swipped-to":t.swippedToStory}}),r("story-player",{attrs:{story:t.story}})],1)},w=[],b=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"horizontal-swipper"},[r("swiper",{ref:"swiper",staticClass:"swiper",attrs:{options:t.swiperOption},on:{slideChange:function(e){t.slideChange(e)}}},t._l(t.stories,function(e,n){return r("swiper-slide",{key:n,staticClass:"slide"},[e.cover?r("img",{staticClass:"cover",style:t.imageStyle,attrs:{src:t.getStoryCover(e.cover)},on:{click:function(r){t.chooseStory(e)}}}):t._e(),r("div",{staticClass:"story-intro"},[r("div",{staticClass:"title"},[t._v("\r\n                  "+t._s(e.title)+"\r\n              ")]),r("div",{staticClass:"short"},[t._v("\r\n                  "+t._s(e.short)+"\r\n              ")])]),r("div",{staticClass:"bg-mask"}),r("div",{staticClass:"background",style:{backgroundImage:t.getStoryCoverBg(e.cover)}})])}))],1)},x=[],k=r("iv4g"),R=r("chKg"),O=(r("36R9"),{name:"swipped-stories",components:{swiper:R["swiper"],swiperSlide:R["swiperSlide"]},props:{filter:{type:Object}},data:function(){return{swiperOption:{direction:"vertical"},stories:[],currentIndex:0}},computed:{imageHost:function(){return this.ctx.bootOpts.servers.default.baseURL},imageStyle:function(){return{width:window.clientWidth-20,height:window.clientWidth-20}}},created:function(){var t=Object(n["a"])(regeneratorRuntime.mark(function t(){return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:this.fetchMore();case 1:case"end":return t.stop()}},t,this)}));return function(){return t.apply(this,arguments)}}(),methods:{getStoryCover:function(t){return"".concat(this.imageHost,"/story/cover/480/480/").concat(t,".png")},getStoryCoverBg:function(t){return"url('"+this.getStoryCover(t)+"')"},slideChange:function(t){this.currentIndex=this.$refs.swiper.swiper.activeIndex,this.currentIndex+10>this.stories.length&&this.fetchMore(),this.$emit("swipped-to",this.stories[this.currentIndex])},fetchMore:function(){var t=Object(n["a"])(regeneratorRuntime.mark(function t(){var e;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,this.ctx.gendao.someMoreStories();case 2:e=t.sent,0===this.stories.length&&this.$emit("swipped-to",e[0]),this.stories=Object(k["a"])(this.stories).concat(Object(k["a"])(e));case 5:case"end":return t.stop()}},t,this)}));return function(){return t.apply(this,arguments)}}(),chooseStory:function(t){this.$emit("choose-story",t)}}}),S=O,j=(r("eNue"),Object(l["a"])(S,b,x,!1,null,null,null)),C=j.exports,_=r("Tuh1"),I=r.n(_),L=r("LZKq"),U=r.n(L),M=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"story-player"},[r("transition",{attrs:{name:"van-slide-bottom"}},[t.story?r("div",{staticClass:"player-panel"},[r("img",{staticClass:"cover",attrs:{src:t.cover}}),r("div",{staticClass:"slider"},[t.loading?r("div",{staticClass:"title"},[t._v("正在加载"+t._s(t.story.title))]):r("div",{staticClass:"title"},[t._v("正在播放"+t._s(t.story.title))]),r("vue-slider",{attrs:{"bar-height":"5px"},on:{change:t.onChange},model:{value:t.percent,callback:function(e){t.percent=e},expression:"percent"}}),r("div",{staticClass:"dura"},[t._v(t._s(t.formatDura(t.timestamp))+"/"+t._s(t.formatDura(t.story)))])],1),r("div",{staticClass:"control",on:{click:t.togglePlay}},[t.loading?r("van-loading"):t._e(),t.playing&&!t.loading?r("van-icon",{attrs:{name:"pause"}}):t._e(),t.playing||t.loading?t._e():r("van-icon",{attrs:{name:"play"}})],1)]):t._e()]),r("div",{staticClass:"media-player"},[r("audio",{attrs:{id:"media-video",controls:"false",src:t.storyUrl}})])],1)},T=[],D=r("/S6o"),H=r.n(D),$=r("uYhx"),P=r.n($),B=r("ST3u"),E=r.n(B),A=(r("kXRY"),r("NBrc"),r("0ubU"),r("JIVl"),r("a1Th"),{computed:{imageHost:function(){return this.ctx.bootOpts.servers.image.baseURL},fileHost:function(){return this.ctx.bootOpts.servers.file.baseURL}},methods:{getStoryCover:function(t){return"".concat(this.imageHost,"/story/cover/480/480/").concat(t,".png")},getImageUrl:function(t){arguments.length>1&&void 0!==arguments[1]&&arguments[1];return t?"".concat(this.imageHost,"/story/thumb/").concat(t,".png"):this.imageHost+"/image/imgSure.jpg"},formatDura:function(t){if(t.duration){var e=parseInt(t.duration);return Math.floor(e/60)+":"+(100+e%60).toString().substring(1)}var r=parseInt(t);return Math.floor(r/60)+":"+(100+r%60).toString().substring(1)},addFavorite:function(){var t=Object(n["a"])(regeneratorRuntime.mark(function t(e){var r;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return r={cover:e.cover,duration:e.duration,path:e.path,short:e.short,title:e.title},t.next=3,this.ctx.appDao.addFavorite(r);case 3:this.isFavorite=!0;case 4:case"end":return t.stop()}},t,this)}));return function(e){return t.apply(this,arguments)}}()}}),q=A,J={name:"story-player",components:{"vue-slider":H.a,"van-loading":P.a,"van-icon":E.a},mixins:[q],props:{story:{type:Object}},data:function(){return{loading:!0,playing:!1,timestamp:0,percent:0}},computed:{imageHost:function(){return this.ctx.bootOpts.servers.default.baseURL},storyUrl:function(){return this.story?(this.loading=!0,this.ctx.bootOpts.servers.file.baseURL+"/story/mp3/"+this.story._id):null},cover:function(){return this.getStoryCover(this.story.cover)}},watch:{url:function(){}},mounted:function(){this.audio=document.querySelector("#media-video"),this.audio&&(this.audio.addEventListener("timeupdate",this.timeUpdate),this.audio.addEventListener("canplay",this.canplay.bind(this)))},methods:{getStoryUrl:function(t){},getStoryCover:function(t){return"".concat(this.imageHost,"/story/cover/480/480/").concat(t,".png")},onChange:function(t){this.audio.currentTime=Math.floor(this.story.duration*t/100)},togglePlay:function(){this.playing=!this.playing,this.playing?this.audio.play():this.audio.pause()},timeUpdate:function(t){this.timestamp=Math.floor(t.target.currentTime),this.percent=Math.floor(100*this.timestamp/parseInt(this.story.duration))},canplay:function(){var t=this;setTimeout(function(){t.loading=!1,t.playing=!0,t.audio.play()},20)}}},F=J,N=(r("OdAc"),Object(l["a"])(F,M,T,!1,null,null,null)),K=N.exports,V=function(){function t(e){Object(f["a"])(this,t),this.ctx=e}return Object(d["a"])(t,[{key:"someMoreStories",value:function(){var t=Object(n["a"])(regeneratorRuntime.mark(function t(){var e;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,this.ctx.client.get("/story/samples");case 2:return e=t.sent,t.abrupt("return",e.data);case 4:case"end":return t.stop()}},t,this)}));return function(){return t.apply(this,arguments)}}()},{key:"markStory",value:function(){var t=Object(n["a"])(regeneratorRuntime.mark(function t(e,r){var n;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,this.ctx.client.get("/story/view/"+e._id+"/"+r);case 2:return n=t.sent,t.abrupt("return",n.data);case 4:case"end":return t.stop()}},t,this)}));return function(e,r){return t.apply(this,arguments)}}()}]),t}(),X=(r("hqDy"),{name:"generation",components:{SwippedStories:C,StoryPlayer:K,"van-icon":E.a,"van-tabs":U.a,"van-tab":I.a},data:function(){return{mainCategories:["首页","睡前故事","绘本","有趣"],story:null,active:"首页",swippedStory:null}},computed:{filter:function(){var t={};return"首页"!==this.active&&(t.type=this.active),t}},created:function(){this.ctx.gendao=new V(this.ctx)},methods:{chooseStory:function(t){this.story=t},swippedToStory:function(t){this.ctx.gendao.markSwippedTo(t),this.swippedStory=t},editCurrentStory:function(){this.$router.push("/system/modify/"+this.swippedStory._id)}}}),z=X,G=(r("kL9G"),Object(l["a"])(z,g,w,!1,null,null,null)),W=G.exports,Z={routes:[{path:"/generation",component:W}],loaded:function(){var t=Object(n["a"])(regeneratorRuntime.mark(function t(e){return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:case"end":return t.stop()}},t,this)}));return function(e){return t.apply(this,arguments)}}()},Q=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"story-edit"},[r("vant-nav-bar",{attrs:{title:"标题","left-text":"返回","right-text":"保存","left-arrow":""},on:{"click-left":t.onClickLeft,"click-right":t.onClickRight}}),r("vant-cell-group",t._l(t.story,function(e,n){return r("vant-field",{key:n,attrs:{label:n},model:{value:t.story[n],callback:function(e){t.$set(t.story,n,e)},expression:"story[key]"}})})),r("vant-button",{attrs:{type:"danger",plain:"",size:"large"},on:{click:t.removeStory}},[t._v("删除")])],1)},Y=[],tt=r("uwXd"),et=r.n(tt),rt=r("RBnR"),nt=r.n(rt),it=r("9XHS"),at=r.n(it),st=r("73KO"),ot=r.n(st),ut=(r("sJfQ"),r("+j7Q"),r("a7vs"),r("ZJ07"),{name:"story-modify",components:{"vant-field":et.a,"vant-cell-group":nt.a,"vant-nav-bar":at.a,"vant-button":ot.a},data:function(){return{story:null}},created:function(){this.fetchData()},watch:{$route:"fetchData"},methods:{fetchData:function(){var t=Object(n["a"])(regeneratorRuntime.mark(function t(){return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,this.ctx.appDao.getStoryById(this.$route.params.id);case 2:this.story=t.sent;case 3:case"end":return t.stop()}},t,this)}));return function(){return t.apply(this,arguments)}}(),onClickLeft:function(){this.$router.go(-1)},onClickRight:function(){var t=Object(n["a"])(regeneratorRuntime.mark(function t(){return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,this.ctx.appDao.updateStory(this.story);case 2:case"end":return t.stop()}},t,this)}));return function(){return t.apply(this,arguments)}}(),removeStory:function(){var t=Object(n["a"])(regeneratorRuntime.mark(function t(){return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,this.ctx.appDao.removeStoryById(this.story._id);case 2:case"end":return t.stop()}},t,this)}));return function(){return t.apply(this,arguments)}}()}}),ct=ut,lt=Object(l["a"])(ct,Q,Y,!1,null,null,null),pt=lt.exports,ht={routes:[{path:"/system/modify/:id",component:pt}],loaded:function(){var t=Object(n["a"])(regeneratorRuntime.mark(function t(e){return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:case"end":return t.stop()}},t,this)}));return function(e){return t.apply(this,arguments)}}()},ft=new i["a"]({vue:{rootApp:h,mount:"#app"},servers:a.servers,packages:[y,Z,ht],started:function(){var t=Object(n["a"])(regeneratorRuntime.mark(function t(e,r){return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return e._router.replace("/generation"),t.next=3,r();case 3:case"end":return t.stop()}},t,this)}));return function(e,r){return t.apply(this,arguments)}}()});ft.startUp()},eNue:function(t,e,r){"use strict";var n=r("8C9q"),i=r.n(n);i.a},kL9G:function(t,e,r){"use strict";var n=r("ISBD"),i=r.n(n);i.a},q3Ix:function(t,e,r){}});
//# sourceMappingURL=index.b683a9b3.js.map