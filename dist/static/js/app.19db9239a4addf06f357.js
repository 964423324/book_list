webpackJsonp([1],{NHnr:function(t,s,a){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var i=a("7+uW"),o={render:function(){var t=this.$createElement,s=this._self._c||t;return s("div",{attrs:{id:"app"}},[s("router-view")],1)},staticRenderFns:[]};var e=a("VU/8")({name:"App"},o,!1,function(t){a("p/0W")},null,null).exports,n=a("/ocq"),r=a("mtWM"),c=a.n(r),v={name:"bookInformation",data:function(){return{bookId:"",dataArray:[],ratingStyle:""}},created:function(){this.getData()},methods:{getData:function(){var t=this;this.bookId=this.$route.query.bookId;var s=new FormData;s.append("bookId",this.bookId),c.a.post(this.baseURL+"/getBookInformation.php",s).then(function(s){"success"==s.data.state?(t.dataArray=s.data,t.ratingStyle="width:"+10*s.data.rating+"%"):alert("页面数据加载失败")})}}},l={render:function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"main"},[a("div",{staticClass:"banner"}),t._v(" "),a("div",{staticClass:"bookTittle"},[t._v(t._s(t.dataArray.book_name))]),t._v(" "),a("div",{staticClass:"author"},[a("img",{staticClass:"headImg",attrs:{src:t.dataArray.author_image_url}}),t._v(" "),a("div",[t._v(t._s(t.dataArray.author_name))])]),t._v(" "),a("div",{staticClass:"authorMessage"},[a("svg",{staticClass:"icon",attrs:{t:"1604414468291",viewBox:"0 0 1024 1024",version:"1.1",xmlns:"http://www.w3.org/2000/svg","p-id":"3151",width:"200",height:"200"}},[a("path",{attrs:{d:"M812.343523 375.615721v-268.296944c0-11.924309-10.43377-22.358079-22.358079-22.358078s-22.358079 10.43377-22.358079 22.358078v693.100437c0 11.924309 10.43377 22.358079 22.358079 22.358079s22.358079-10.43377 22.358079-22.358079V533.612809c43.225619 0 78.998544-35.772926 78.998544-78.998544s-35.772926-78.998544-78.998544-78.998544zM326.427948 308.541485h-55.149928v286.183406h55.149928s22.358079-4.471616 59.621543-2.981077c92.413392 1.490539 268.296943 32.791849 369.653566 228.052401V83.47016c-143.091703 272.768559-429.275109 225.071325-429.275109 225.071325z",fill:"#ff9327","p-id":"3152"}}),a("path",{attrs:{d:"M389.030568 608.139738c-35.772926 0-59.621543 2.981077-59.621543 2.981077h-55.149927v-2.981077c-2.981077 2.981077-5.962154 4.471616-5.962155 4.471616h5.962155s59.621543 256.372635 98.375545 260.84425c38.754003 5.962154 55.149927-19.377001 43.225619-53.659389-8.943231-25.339156-22.358079-152.034934-26.829694-211.656477zM120.733624 451.633188c0 78.998544 64.093159 143.091703 143.091704 143.091703h1.490538l-1.490538-284.692868c-78.998544-1.490539-143.091703 62.60262-143.091704 141.601165z",fill:"#ff9327","p-id":"3153"}})]),t._v(" "),a("span",[t._v(t._s(t.dataArray.author_message))])]),t._v(" "),a("div",{staticClass:"starRating"},[a("div",{staticClass:"starRatingTop",style:t.ratingStyle},[a("span"),t._v(" "),a("span"),t._v(" "),a("span"),t._v(" "),a("span"),t._v(" "),a("span")]),t._v(" "),t._m(0)]),t._v(" "),a("div",{staticClass:"numberRating"},[t._v(t._s(t.dataArray.rating))]),t._v(" "),a("div",{staticClass:"tags"},[a("svg",{staticClass:"icon typeIcon",attrs:{t:"1604415383508",viewBox:"0 0 1024 1024",version:"1.1",xmlns:"http://www.w3.org/2000/svg","p-id":"5676",width:"200",height:"200"}},[a("path",{attrs:{d:"M867.995 459.647h-711.99c-27.921 0-52.353 24.434-52.353 52.353s24.434 52.353 52.353 52.353h711.99c27.921 0 52.353-24.434 52.353-52.353s-24.434-52.353-52.353-52.353z","p-id":"5677",fill:"#9c9c9c"}}),a("path",{attrs:{d:"M867.995 763.291h-711.99c-27.921 0-52.353 24.434-52.353 52.353s24.434 52.353 52.353 52.353h711.99c27.921 0 52.353-24.434 52.353-52.353s-24.434-52.353-52.353-52.353z","p-id":"5678",fill:"#9c9c9c"}}),a("path",{attrs:{d:"M156.005 260.709h711.99c27.921 0 52.353-24.434 52.353-52.353s-24.434-52.353-52.353-52.353h-711.99c-27.921 0-52.353 24.434-52.353 52.353s24.434 52.353 52.353 52.353z","p-id":"5679",fill:"#9c9c9c"}})]),t._v(" "),a("div",{staticClass:"typeName"},[t._v(t._s(t.dataArray.type_name))]),t._v(" "),a("svg",{staticClass:"icon tipIcon",attrs:{t:"1604415356388",viewBox:"0 0 1024 1024",version:"1.1",xmlns:"http://www.w3.org/2000/svg","p-id":"4866",width:"200",height:"200"}},[a("path",{attrs:{d:"M842.666667 85.333333A96 96 0 0 1 938.666667 181.333333v233.045334a138.666667 138.666667 0 0 1-40.618667 98.048l-362.666667 362.794666a138.88 138.88 0 0 1-196.138666 0.042667L148.864 685.226667a138.666667 138.666667 0 0 1-0.170667-196.096l362.666667-363.093334a138.666667 138.666667 0 0 1 98.133333-40.661333h233.173334z m0 64h-233.216c-19.797333 0-38.826667 7.893333-52.821334 21.888l-363.178666 363.648a74.666667 74.666667 0 0 0 0.64 105.045334l190.336 190.037333a74.88 74.88 0 0 0 105.685333 0l362.666667-362.794667a74.666667 74.666667 0 0 0 21.888-52.778666V181.333333a32 32 0 0 0-32-32zM725.333333 234.752a64 64 0 1 1 0 128 64 64 0 0 1 0-128z","p-id":"4867",fill:"#9c9c9c"}})]),t._v(" "),t._l(t.dataArray.tip_name,function(s,i){return a("div",{staticClass:"tipName"},[t._v(t._s(s))])})],2),t._v(" "),a("div",[a("div",{staticClass:"numberBlock"},[a("div",[t._v("字数")]),a("div",[t._v(t._s(t.dataArray.words_number))])]),t._v(" "),a("div",{staticClass:"numberBlock"},[a("div",[t._v("阅读")]),a("div",[t._v(t._s(t.dataArray.read_number))])]),t._v(" "),a("div",{staticClass:"numberBlock"},[a("div",[t._v("收藏")]),a("div",[t._v(t._s(t.dataArray.collection_number))])]),t._v(" "),a("div",{staticClass:"numberBlock"},[a("div",[t._v("推荐票")]),a("div",[t._v(t._s(t.dataArray.recommended_number))])])]),t._v(" "),a("div",{staticClass:"introductionTittle"},[t._v("简介")]),t._v(" "),a("div",{staticClass:"introductionBlock",domProps:{innerHTML:t._s(t.dataArray.book_Introduction)}}),t._v(" "),a("div",{staticClass:"beginRead"},[t._v("开始阅读")])])},staticRenderFns:[function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"starRatingBottom"},[s("span"),this._v(" "),s("span"),this._v(" "),s("span"),this._v(" "),s("span"),this._v(" "),s("span")])}]};var d=a("VU/8")(v,l,!1,function(t){a("pddy")},"data-v-2b84ad48",null).exports,_={name:"bookList",data:function(){return{tittle:"图书综合排行",bookList:[]}},created:function(){this.getData()},methods:{getData:function(){var t=this;c.a.post(this.baseURL+"/getBookList.php").then(function(s){"success"==s.data.state?t.bookList=s.data.bookList:alert("页面数据加载失败")})},listBlockLeave:function(t){this.bookList[t].childBook[0].show=!0;var s=1;for(s=1;s<this.bookList[t].childBook.length;s++)this.bookList[t].childBook[s].show=!1},changeStateOver:function(t,s){this.bookList[t].childBook[s].show=!0;var a=0;for(a=0;a<this.bookList[t].childBook.length;a++)a!=s&&(this.bookList[t].childBook[a].show=!1)},bookClick:function(t){this.$router.push({path:"/BookInformation",query:{bookId:t}})}}},u={render:function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"main"},[a("div",{staticClass:"tittle"},[t._v(t._s(t.tittle))]),t._v(" "),a("div",{staticClass:"listAll"},t._l(t.bookList,function(s,i){return a("div",{staticClass:"listBlock",on:{mouseleave:function(s){return t.listBlockLeave(i)}}},[a("div",{staticClass:"listTittle"},[t._v(t._s(s.listTittle))]),t._v(" "),a("div",{staticClass:"listSubtitle"},[t._v(t._s(s.listSubtitle))]),t._v(" "),t._l(s.childBook,function(s,o){return a("div",{staticClass:"bookBlock",on:{mouseenter:function(s){return t.changeStateOver(i,o)}}},[s.show?a("div",{staticClass:"mouseOnBlock",on:{click:function(a){return t.bookClick(s.bookId)}}},[a("div",{staticClass:"mouseOnOrderNumber",class:{red:0==o,orange:1==o,yellow:0!=o&&1!=o}},[t._v(t._s(o+1))]),t._v(" "),a("div",{staticClass:"mouseOnInfomatin"},[a("div",{staticClass:"mouseOnBookTittle"},[t._v(t._s(s.bookTittle))]),t._v(" "),a("div",{staticClass:"mouseOnBookAuthor"},[t._v(t._s(s.bookAuthor))]),t._v(" "),a("div",{staticClass:"mouseOnBookType"},[t._v(t._s(s.bookType))])]),t._v(" "),a("img",{staticClass:"mouseOnImg",attrs:{src:s.imgSrc}})]):a("div",{staticClass:"mouseOutBlock"},[a("div",{staticClass:"mouseOutOrderNumber",class:{red:0==o,orange:1==o,yellow:0!=o&&1!=o}},[t._v(t._s(o+1))]),t._v(" "),a("div",{staticClass:"mouseOutBookTittle"},[t._v(t._s(s.bookTittle))]),t._v(" "),a("div",{staticClass:"mouseOutBookType"},[t._v(t._s(s.bookType))])])])})],2)}),0)])},staticRenderFns:[]};var h=a("VU/8")(_,u,!1,function(t){a("X9So")},"data-v-577b76a0",null).exports;i.a.use(n.a);var p=new n.a({routes:[{path:"/",name:"BookList",component:h},{path:"/BookInformation",name:"BookInformation",component:d}]});i.a.config.productionTip=!1,i.a.prototype.baseURL="http://39.108.118.245/book_list_service/src",new i.a({el:"#app",router:p,components:{App:e},template:"<App/>"})},X9So:function(t,s){},"p/0W":function(t,s){},pddy:function(t,s){}},["NHnr"]);
//# sourceMappingURL=app.19db9239a4addf06f357.js.map