(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-723fd7aa"],{"0dec":function(t,e,n){t.exports=n("f292")},"102b":function(t,e,n){"use strict";var s=n("66fa"),a=n.n(s);a.a},"11e9":function(t,e,n){var s=n("52a7"),a=n("4630"),i=n("6821"),r=n("6a99"),o=n("69a8"),c=n("c69a"),u=Object.getOwnPropertyDescriptor;e.f=n("9e1e")?u:function(t,e){if(t=i(t),e=r(e,!0),c)try{return u(t,e)}catch(n){}if(o(t,e))return a(!s.f.call(t,e),t[e])}},"214f":function(t,e,n){"use strict";n("b0c5");var s=n("2aba"),a=n("32e9"),i=n("79e5"),r=n("be13"),o=n("2b4c"),c=n("520a"),u=o("species"),l=!i((function(){var t=/./;return t.exec=function(){var t=[];return t.groups={a:"7"},t},"7"!=="".replace(t,"$<a>")})),d=function(){var t=/(?:)/,e=t.exec;t.exec=function(){return e.apply(this,arguments)};var n="ab".split(t);return 2===n.length&&"a"===n[0]&&"b"===n[1]}();t.exports=function(t,e,n){var f=o(t),m=!i((function(){var e={};return e[f]=function(){return 7},7!=""[t](e)})),h=m?!i((function(){var e=!1,n=/a/;return n.exec=function(){return e=!0,null},"split"===t&&(n.constructor={},n.constructor[u]=function(){return n}),n[f](""),!e})):void 0;if(!m||!h||"replace"===t&&!l||"split"===t&&!d){var p=/./[f],g=n(r,f,""[t],(function(t,e,n,s,a){return e.exec===c?m&&!a?{done:!0,value:p.call(e,n,s)}:{done:!0,value:t.call(n,e,s)}:{done:!1}})),_=g[0],v=g[1];s(String.prototype,t,_),a(RegExp.prototype,f,2==e?function(t,e){return v.call(t,this,e)}:function(t){return v.call(t,this)})}}},3007:function(t,e,n){"use strict";n.d(e,"e",(function(){return a})),n.d(e,"c",(function(){return i})),n.d(e,"b",(function(){return r})),n.d(e,"a",(function(){return o})),n.d(e,"d",(function(){return c})),n.d(e,"f",(function(){return u}));var s=n("b775");function a(t,e){void 0===t&&(t="");var n="/images/?query="+t,a="";return!0===e&&(a="flag",n+="&flag="+a),Object(s["a"])({url:n,method:"get"})}function i(t){return Object(s["a"])({url:"/images/"+t+"/start/",method:"get"})}function r(){return Object(s["a"])({url:"/container/",method:"get"})}function o(t){return Object(s["a"])({url:"/container/"+t+"/delete/",method:"delete"})}function c(t){return Object(s["a"])({url:"/container/"+t+"/stop/",method:"get"})}function u(t,e){return Object(s["a"])({url:"/container/"+t+"/flag/?flag="+e,method:"get"})}},"386d":function(t,e,n){"use strict";var s=n("cb7c"),a=n("83a1"),i=n("5f1b");n("214f")("search",1,(function(t,e,n,r){return[function(n){var s=t(this),a=void 0==n?void 0:n[e];return void 0!==a?a.call(n,s):new RegExp(n)[e](String(s))},function(t){var e=r(n,t,this);if(e.done)return e.value;var o=s(t),c=String(this),u=o.lastIndex;a(u,0)||(o.lastIndex=0);var l=i(o,c);return a(o.lastIndex,u)||(o.lastIndex=u),null===l?-1:l.index}]}))},"520a":function(t,e,n){"use strict";var s=n("0bfb"),a=RegExp.prototype.exec,i=String.prototype.replace,r=a,o="lastIndex",c=function(){var t=/a/,e=/b*/g;return a.call(t,"a"),a.call(e,"a"),0!==t[o]||0!==e[o]}(),u=void 0!==/()??/.exec("")[1],l=c||u;l&&(r=function(t){var e,n,r,l,d=this;return u&&(n=new RegExp("^"+d.source+"$(?!\\s)",s.call(d))),c&&(e=d[o]),r=a.call(d,t),c&&r&&(d[o]=d.global?r.index+r[0].length:e),u&&r&&r.length>1&&i.call(r[0],n,(function(){for(l=1;l<arguments.length-2;l++)void 0===arguments[l]&&(r[l]=void 0)})),r}),t.exports=r},"5dbc":function(t,e,n){var s=n("d3f4"),a=n("8b97").set;t.exports=function(t,e,n){var i,r=e.constructor;return r!==n&&"function"==typeof r&&(i=r.prototype)!==n.prototype&&s(i)&&a&&a(t,i),t}},"5f1b":function(t,e,n){"use strict";var s=n("23c6"),a=RegExp.prototype.exec;t.exports=function(t,e){var n=t.exec;if("function"===typeof n){var i=n.call(t,e);if("object"!==typeof i)throw new TypeError("RegExp exec method returned something other than an Object or null");return i}if("RegExp"!==s(t))throw new TypeError("RegExp#exec called on incompatible receiver");return a.call(t,e)}},"66fa":function(t,e,n){},"83a1":function(t,e){t.exports=Object.is||function(t,e){return t===e?0!==t||1/t===1/e:t!=t&&e!=e}},"8b97":function(t,e,n){var s=n("d3f4"),a=n("cb7c"),i=function(t,e){if(a(t),!s(e)&&null!==e)throw TypeError(e+": can't set as prototype!")};t.exports={set:Object.setPrototypeOf||("__proto__"in{}?function(t,e,s){try{s=n("9b43")(Function.call,n("11e9").f(Object.prototype,"__proto__").set,2),s(t,[]),e=!(t instanceof Array)}catch(a){e=!0}return function(t,n){return i(t,n),e?t.__proto__=n:s(t,n),t}}({},!1):void 0),check:i}},9093:function(t,e,n){var s=n("ce10"),a=n("e11e").concat("length","prototype");e.f=Object.getOwnPropertyNames||function(t){return s(t,a)}},9406:function(t,e,n){"use strict";n.r(e);var s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"dashboard-container"},[n("el-row",{attrs:{gutter:20}},[n("el-dialog",{attrs:{visible:t.centerDialogVisible,title:"镜像信息"},on:{"update:visible":function(e){t.centerDialogVisible=e}}},[n("div",{directives:[{name:"loading",rawName:"v-loading",value:t.startCon,expression:"startCon"}],staticClass:"text item",attrs:{"element-loading-text":"环境启动中"}},[t._v("\n        访问地址: "+t._s(t.vul_host)+"\n      ")]),t._v(" "),n("div",{staticClass:"text item"},[t._v("\n        名称: "+t._s(t.images_name)+"\n      ")]),t._v(" "),n("div",{staticClass:"text item"},[t._v("\n        描述: "+t._s(t.images_desc)+"\n      ")]),t._v(" "),n("el-form",[n("el-form-item",{attrs:{label:"Flag"}},[n("el-input",{attrs:{placeholder:"请输入Flag：格式flag-{xxxxxxxx}"},model:{value:t.input,callback:function(e){t.input=e},expression:"input"}})],1),t._v(" "),n("el-form-item",[n("el-button",{attrs:{type:"primary",disabled:t.cStatus},on:{click:function(e){t.subflag(t.container_id,t.input.trim())}}},[t._v("提 交")])],1)],1)],1),t._v(" "),n("el-col",[n("el-input",{staticStyle:{width:"230px"},attrs:{size:"medium"},model:{value:t.search,callback:function(e){t.search=e},expression:"search"}}),t._v(" "),n("el-button",{staticClass:"filter-item",staticStyle:{"margin-left":"10px","margin-bottom":"10px"},attrs:{size:"medium",type:"primary",icon:"el-icon-search"},on:{click:t.handleQuery}},[t._v("\n        查询\n      ")])],1),t._v(" "),t._l(t.listdata,(function(e,s){return n("el-col",{key:s,staticStyle:{"padding-bottom":"18px"},attrs:{span:8}},[n("el-card",{attrs:{"body-style":{padding:"8px"},shadow:"hover"},nativeOn:{click:function(n){"running"===e.status.status&&t.open(e.image_id,e.image_vul_name,e.image_desc,e.status.status,e.status.container_id,e)}}},[n("div",{staticClass:"clearfix"},[n("div",{staticStyle:{display:"inline-block"}},[n("svg-icon",{staticStyle:{"font-size":"20px"},attrs:{"icon-class":"bug"}})],1),t._v(" "),n("div",{staticStyle:{display:"inline-block",color:"#20a0ff"}},["stop"===e.status.status&&e.status.is_check?n("i",{staticClass:"el-icon-check"}):"running"===e.status.status?n("i",{staticClass:"el-icon-loading"}):"stop"===e.status.status&&!1===e.status.is_check?n("svg-icon",{attrs:{"icon-class":"stop"}}):t._e()],1),t._v(" "),"running"===e.status.status&&null!==e.status.start_date&&""!==e.status.start_date&&null!==e.status.end_date&&""!==e.status.end_date&&0!==e.status.end_date?n("div",{staticStyle:{display:"inline-block"}},[n("el-tooltip",{attrs:{content:"容器剩余时间，-1 为用不过期",placement:"top"}},[n("i",{staticClass:"el-icon-time"})]),t._v(" "),n("count-down",{staticStyle:{display:"inline-block"},attrs:{currentTime:e.status.now,startTime:e.status.now,endTime:e.status.end_date,secondsTxt:""},on:{end_callback:function(e){return t.countDownE_cb(1)}}})],1):"running"===e.status.status&&null!==e.status.start_date&&""!==e.status.start_date&&null!==e.status.end_date&&""!==e.status.end_date&&0===e.status.end_date?n("div",{staticStyle:{display:"inline-block"}},[n("el-tooltip",{attrs:{content:"容器剩余时间，-1 为用不过期",placement:"top"}},[n("i",{staticClass:"el-icon-time"})]),t._v(" "),n("p",{staticStyle:{display:"inline-block"}},[t._v("-1")])],1):n("div",{staticStyle:{display:"inline-block"}},[n("p",{staticStyle:{display:"inline-block"}})]),t._v(" "),n("div",[n("el-rate",{attrs:{disabled:"","show-score":"","text-color":"#ff9900","score-template":"{value}"},model:{value:e.rank,callback:function(n){t.$set(e,"rank",n)},expression:"item.rank"}})],1)]),t._v(" "),n("div",{staticStyle:{padding:"5px"}},[n("div",{staticClass:"container-title"},[n("span",[t._v(t._s(e.image_vul_name))])]),t._v(" "),n("div",{staticClass:"bottom clearfix"},[n("div",{staticClass:"time container-title"},[t._v(t._s(e.image_desc))])]),t._v(" "),n("el-row",["running"===e.status.status?n("el-button",{attrs:{type:"primary",size:"mini "},on:{click:function(n){return n.stopPropagation(),t.Stop(e.status.container_id,e)}}},[t._v("停止")]):n("el-button",{attrs:{type:"primary",size:"mini"},on:{click:function(n){return n.stopPropagation(),t.open(e.image_id,e.image_vul_name,e.image_desc,e.status.status,e.status.container_id,e)}}},[t._v("启动")]),t._v(" "),"running"===e.status.status?n("el-button",{attrs:{type:"primary",size:"mini",icon:"el-icon-stopwatch"},on:{click:function(n){return n.stopPropagation(),t.Delete(e.status.container_id,e)}}},[t._v("删除")]):t._e()],1)],1)])],1)}))],2)],1)},a=[],i=(n("386d"),n("3007")),r=n("ea7f"),o=n("0dec"),c=n.n(o),u={name:"Dashboard",components:{CountDown:c.a},replace:!0,data:function(){return{listdata:[],vul_host:"",centerDialogVisible:!1,startCon:!1,startTime:(new Date).getTime(),input:"",images_id:"",container_id:"",images_name:"",images_desc:"",item_raw_data:"",cStatus:!0,search:""}},created:function(){this.ListData()},methods:{ListData:function(){var t=this;Object(i["e"])().then((function(e){t.listdata=e.data}))},open:function(t,e,n,s,a,o){var c=this;this.images_id="",this.images_name="",this.images_desc="",this.container_id="",this.item_raw_data="",this.vul_host="",this.startCon="loading",this.cStatus=!0,this.item_raw_data=o,this.images_id=t,this.images_name=e,this.images_desc=n,this.centerDialogVisible=!0,!0===o.status.is_check?(this.$message({message:"该题目已经通过",type:"success"}),this.centerDialogVisible=!1):"running"===o.status.status?(this.vul_host=o.status.host,this.container_id=o.status.container_id,this.startCon=!1,this.cStatus=!1):Object(i["c"])(t).then((function(t){var e=t.data["data"],n=window.setInterval((function(){setTimeout((function(){Object(r["b"])(e).then((function(t){var e=t.data["status"],s=t.data;1001===e||(clearInterval(n),200===e?(a=s["data"]["id"],c.container_id=a,c.vul_host=s["data"]["host"],o.status.now=s["data"]["_now"],o.status.start_date=s["data"]["start_date"],o.status.end_date=s["data"]["end_date"],o.status.status=s["data"]["status"],o.status.container_id=a,c.startCon=!1,c.cStatus=!1):(c.$message({message:t.data["msg"],type:"error"}),c.centerDialogVisible=!1))}))}),1)}),2e3)}))},subflag:function(t,e){var n=this;Object(i["f"])(t,e).then((function(t){var e=t.data;200===e["status"]?n.$message({message:"恭喜！通过",type:"success"}):201===e.status?n.$message({message:e["msg"],type:"info"}):n.$message({message:e["msg"],type:"error"}),n.centerDialogVisible=!1,n.item_raw_data.status.status="stop"}))},Stop:function(t,e){var n=this;Object(i["d"])(t).then((function(t){var s=t.data["data"],a=window.setInterval((function(){setTimeout((function(){Object(r["b"])(s).then((function(t){var s=t.data["status"],i=t.data;1001===s||(clearInterval(a),200===s?(n.$message({message:i["msg"],type:"success"}),e.status.status="stop",e.status.start_date=""):n.$message({message:i["msg"],type:"error"}))}))}),1)}),2e3)}))},Delete:function(t,e){var n=this;Object(i["a"])(t).then((function(t){var s=t.data["data"],a=window.setInterval((function(){setTimeout((function(){Object(r["b"])(s).then((function(t){var s=t.data["status"],i=t.data;1001===s||(clearInterval(a),200===s?(e.status.status="",n.images_id="",n.images_name="",n.images_desc="",n.container_id="",n.item_raw_data="",e.status.container_id="",n.$message({message:i["msg"],type:"success"})):n.$message({message:i["msg"],type:"error"}))}))}),1)}),2e3)}))},handleQuery:function(){var t=this;Object(i["e"])(this.search).then((function(e){t.listdata=e.data}))}}},l=u,d=(n("102b"),n("2877")),f=Object(d["a"])(l,s,a,!1,null,"47bd80e8",null);e["default"]=f.exports},aa77:function(t,e,n){var s=n("5ca1"),a=n("be13"),i=n("79e5"),r=n("fdef"),o="["+r+"]",c="​",u=RegExp("^"+o+o+"*"),l=RegExp(o+o+"*$"),d=function(t,e,n){var a={},o=i((function(){return!!r[t]()||c[t]()!=c})),u=a[t]=o?e(f):r[t];n&&(a[n]=u),s(s.P+s.F*o,"String",a)},f=d.trim=function(t,e){return t=String(a(t)),1&e&&(t=t.replace(u,"")),2&e&&(t=t.replace(l,"")),t};t.exports=d},b0c5:function(t,e,n){"use strict";var s=n("520a");n("5ca1")({target:"RegExp",proto:!0,forced:s!==/./.exec},{exec:s})},c5f6:function(t,e,n){"use strict";var s=n("7726"),a=n("69a8"),i=n("2d95"),r=n("5dbc"),o=n("6a99"),c=n("79e5"),u=n("9093").f,l=n("11e9").f,d=n("86cc").f,f=n("aa77").trim,m="Number",h=s[m],p=h,g=h.prototype,_=i(n("2aeb")(g))==m,v="trim"in String.prototype,b=function(t){var e=o(t,!1);if("string"==typeof e&&e.length>2){e=v?e.trim():f(e,3);var n,s,a,i=e.charCodeAt(0);if(43===i||45===i){if(n=e.charCodeAt(2),88===n||120===n)return NaN}else if(48===i){switch(e.charCodeAt(1)){case 66:case 98:s=2,a=49;break;case 79:case 111:s=8,a=55;break;default:return+e}for(var r,c=e.slice(2),u=0,l=c.length;u<l;u++)if(r=c.charCodeAt(u),r<48||r>a)return NaN;return parseInt(c,s)}}return+e};if(!h(" 0o1")||!h("0b1")||h("+0x1")){h=function(t){var e=arguments.length<1?0:t,n=this;return n instanceof h&&(_?c((function(){g.valueOf.call(n)})):i(n)!=m)?r(new p(b(e)),n,h):b(e)};for(var y,x=n("9e1e")?u(p):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),T=0;x.length>T;T++)a(p,y=x[T])&&!a(h,y)&&d(h,y,l(p,y));h.prototype=g,g.constructor=h,n("2aba")(s,m,h)}},ea7f:function(t,e,n){"use strict";n.d(e,"b",(function(){return a})),n.d(e,"a",(function(){return i}));var s=n("b775");function a(t){return Object(s["a"])({url:"/tasks/"+t+"/get/",method:"get"})}function i(t){return Object(s["a"])({url:"/tasks/batch/batch/",method:"post",data:t})}},f292:function(t,e,n){"use strict";n.r(e);var s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[t.msTime.show?n("p",[t.msTime.day>0?n("span",[n("span",[t._v(t._s(t.msTime.day))]),n("i",[t._v(t._s(t.dayTxt))])]):t._e(),t._v(" "),n("span",[t._v(t._s(t.msTime.hour))]),n("i",[t._v(t._s(t.hourTxt))]),t._v(" "),n("span",[t._v(t._s(t.msTime.minutes))]),n("i",[t._v(t._s(t.minutesTxt))]),t._v(" "),n("span",[t._v(t._s(t.msTime.seconds))]),n("i",[t._v(t._s(t.secondsTxt))])]):t._e()])},a=[],i=(n("6b54"),n("c5f6"),{replace:!0,data:function(){return{tipShow:!0,msTime:{show:!1,day:"",hour:"",minutes:"",seconds:""},star:"",end:"",current:""}},watch:{currentTime:function(t,e){this.gogogo()}},props:{tipText:{type:String,default:"距离开始"},tipTextEnd:{type:String,default:"距离结束"},id:{type:String,default:"1"},currentTime:{type:Number},startTime:{type:Number},endTime:{type:Number},endText:{type:String,default:"已结束"},dayTxt:{type:String,default:":"},hourTxt:{type:String,default:":"},minutesTxt:{type:String,default:":"},secondsTxt:{type:String,default:":"},secondsFixed:{type:Boolean,default:!1}},mounted:function(){console.log(this),this.gogogo()},methods:{gogogo:function(){var t=this;10==this.startTime.toString().length?this.star=1e3*this.startTime:this.star=this.startTime,10==this.endTime.toString().length?this.end=1e3*this.endTime:this.end=this.endTime,this.currentTime?10==this.currentTime.toString().length?this.current=1e3*this.currentTime:this.current=this.currentTime:this.current=(new Date).getTime(),this.end<this.current?(this.msTime.show=!1,this.end_message()):this.current<this.star?(this.$set(this,"tipShow",!0),setTimeout((function(){t.runTime(t.star,t.current,t.start_message)}),1)):(this.end>this.current&&this.star<this.current||this.star==this.current)&&(this.$set(this,"tipShow",!1),this.msTime.show=!0,this.$emit("start_callback",this.msTime.show),setTimeout((function(){t.runTime(t.end,t.star,t.end_message,!0)}),1))},runTime:function(t,e,n,s){var a=this,i=this.msTime,r=t-e;if(r>0){this.msTime.show=!0,i.day=Math.floor(r/864e5),r-=864e5*i.day,i.hour=Math.floor(r/36e5),r-=36e5*i.hour,i.minutes=Math.floor(r/6e4),r-=6e4*i.minutes,i.seconds=Math.floor(r/1e3).toFixed(0),r-=1e3*i.seconds,i.hour<10&&(i.hour="0"+i.hour),i.minutes<10&&(i.minutes="0"+i.minutes),i.seconds<10&&(i.seconds="0"+i.seconds);var o=Date.now(),c=Date.now(),u=c-o;setTimeout((function(){s?a.runTime(a.end,e+=1e3,n,!0):a.runTime(a.star,e+=1e3,n)}),1e3-u)}else n()},start_message:function(){var t=this;this.$set(this,"tipShow",!1),this.$emit("start_callback",this.msTime.show),setTimeout((function(){t.runTime(t.end,t.star,t.end_message,!0)}),1)},end_message:function(){this.msTime.show=!1,this.currentTime<=0||this.$emit("end_callback",this.msTime.show)}}}),r=i,o=n("2877"),c=Object(o["a"])(r,s,a,!1,null,null,null);e["default"]=c.exports},fdef:function(t,e){t.exports="\t\n\v\f\r   ᠎             　\u2028\u2029\ufeff"}}]);
//# sourceMappingURL=chunk-723fd7aa.34ac4a21.js.map