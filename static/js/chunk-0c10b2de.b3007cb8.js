/*!
 *  基于vue-admin-beautiful构建 
 *  copyright: chuzhixin 1204505056@qq.com 
 *  time: 2020-7-2 12:48:39
 */
(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-0c10b2de"],{"1cc11":function(t,e,a){t.exports=a.p+"static/img/lqr_logo.a0592369.png"},"25dd":function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"qr-code-container"},[a("el-row",{attrs:{gutter:20}},[a("el-col",{attrs:{xs:24,sm:24,md:8,lg:8,xl:8}},[a("el-card",{attrs:{shadow:"hover"}},[a("div",{attrs:{slot:"header"},slot:"header"},[a("span",[t._v("二维码示例")])]),a("a",{attrs:{target:"_blank",href:t.url}},[a("vab-qr-code",{attrs:{"image-path":t.imagePath,url:t.url}})],1)])],1)],1)],1)},r=[],c=a("bf90"),o={name:"QrCode",components:{VabQrCode:c["default"]},data:function(){return{url:"https://www.baidu.com",imagePath:a("1cc11")}},created:function(){},mounted:function(){},methods:{}},i=o,s=(a("6de3"),a("9ca4")),u=Object(s["a"])(i,n,r,!1,null,"0dd93e5e",null);e["default"]=u.exports},"6de3":function(t,e,a){"use strict";var n=a("8475"),r=a.n(n);r.a},8475:function(t,e,a){},bf90:function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"app-container"},[a("vue-q-art",{attrs:{config:t.config}})],1)},r=[],c=(a("513c"),a("935a")),o=a.n(c),i=a("1cc11"),s=a.n(i),u={name:"VabQrCode",components:{VueQArt:o.a},props:{imagePath:{type:String,default:s.a},url:{type:String,default:"http://www.boyunvision.com/"},size:{type:Number,default:500}},data:function(){return{config:{value:this.url,imagePath:this.imagePath,filter:"color",size:this.size}}},created:function(){},mounted:function(){},methods:{}},l=u,d=a("9ca4"),f=Object(d["a"])(l,n,r,!1,null,null,null);e["default"]=f.exports}}]);