(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{756:function(e,t,n){var a=n(761);"string"==typeof a&&(a=[[e.i,a,""]]),a.locals&&(e.exports=a.locals);(0,n(51).default)("309bcde4",a,!1,{})},757:function(e,t,n){var a=n(763);"string"==typeof a&&(a=[[e.i,a,""]]),a.locals&&(e.exports=a.locals);(0,n(51).default)("9f04c74c",a,!1,{})},758:function(e,t,n){var a=n(765);"string"==typeof a&&(a=[[e.i,a,""]]),a.locals&&(e.exports=a.locals);(0,n(51).default)("81bb6994",a,!1,{})},759:function(e,t,n){var a=n(770);"string"==typeof a&&(a=[[e.i,a,""]]),a.locals&&(e.exports=a.locals);(0,n(51).default)("77ec0b88",a,!1,{})},760:function(e,t,n){"use strict";var a=n(756);n.n(a).a},761:function(e,t,n){(e.exports=n(50)(!1)).push([e.i,".anchor a {\n  opacity: 0;\n  font-size: 24px;\n  transition: opacity 0.2s ease-in-out;\n  margin-left: 5px;\n  position: relative;\n  top: 2px;\n}\n.anchor:hover a {\n  opacity: 1;\n}\n",""])},762:function(e,t,n){"use strict";var a=n(757);n.n(a).a},763:function(e,t,n){(e.exports=n(50)(!1)).push([e.i,"\ndiv[data-v-557e1337]{\n    position: relative;\n    font-size: 14px;\n}\nspan.copy[data-v-557e1337], span.scale[data-v-557e1337], span.open-fiddle[data-v-557e1337]{\n    border-radius: 0 0 3px 3px;\n    padding: 2px 5px;\n    position: absolute;\n    top: 5px;\n    right: 0;\n    color: #b2b2b2;\n    cursor: pointer;\n}\nspan.scale[data-v-557e1337]{\n    right: 25px;\n}\nspan.open-fiddle[data-v-557e1337]{\n    right: 50px;\n}\n.bg[data-v-557e1337] {\n    margin: 20px auto;\n}\n.bg + span.copy[data-v-557e1337]{\n    right: 5px;\n}\nspan.copy[data-v-557e1337]:hover, span.scale[data-v-557e1337]:hover, span.open-fiddle[data-v-557e1337]:hover{\n    color: #5c6b77;\n}\n\n",""])},764:function(e,t,n){"use strict";var a=n(758);n.n(a).a},765:function(e,t,n){(e.exports=n(50)(!1)).push([e.i,"\n.code-scale-modal .ivu-modal-body{\n    background-color: #f7f7f7;\n}\n.code-scale-modal pre{\n    font-size: 14px;\n}\n",""])},766:function(e,t,n){"use strict";var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("pre",{class:{bg:e.bg}},[n("code",{ref:"code",class:e.language},[e._t("default")],2)]),e._v(" "),n("span",{staticClass:"scale",on:{click:e.scale}},[n("Tooltip",{attrs:{content:e.$t("index.code_fullscreen"),placement:"top",transfer:""}},[n("Icon",{attrs:{type:"md-qr-scanner",size:"18"}})],1)],1),e._v(" "),n("span",{staticClass:"copy",on:{click:e.clip}},[n("Tooltip",{attrs:{content:e.$t("index.code_copy"),placement:"top",transfer:""}},[n("Icon",{directives:[{name:"show",rawName:"v-show",value:!e.copied,expression:"!copied"}],attrs:{type:"md-copy",size:"18"}}),e._v(" "),n("Icon",{directives:[{name:"show",rawName:"v-show",value:e.copied,expression:"copied"}],staticStyle:{color:"#5cb85c"},attrs:{type:"md-checkmark",size:"18"}})],1)],1),e._v(" "),n("Modal",{attrs:{"class-name":"code-scale-modal",title:e.title,width:"65"},model:{value:e.openScale,callback:function(t){e.openScale=t},expression:"openScale"}},[n("pre",{class:{bg:e.bg}},[e._v("            "),n("code",{ref:"code2",class:e.language}),e._v("\n        ")])])],1)};a._withStripped=!0;n(773),n(774),n(154),n(219);var o=n(775),i=n.n(o),s=(n(776),n(777)),r=n.n(s),l={props:{lang:{type:String,default:"javascript"},bg:{type:Boolean,default:!1}},data:function(){return{openScale:!1,code:"",copied:!1,docLang:this.$lang,title:"Code"}},computed:{language:function(){return"auto"==this.lang?"":this.lang}},mounted:function(){this.code=this.$refs.code.innerHTML.replace(/\n/,""),this.$refs.code.innerHTML=this.code,i.a.highlightBlock(this.$refs.code),this.$refs.code2.innerHTML=this.code,i.a.highlightBlock(this.$refs.code2);var e=this.$parent.$parent.$parent;"Demo"===e.$options.name&&(this.title=e.title)},methods:{clip:function(){var e=this,t=this.code.replace(/&lt;/g,"<").replace(/&gt;/g,">").replace(/&amp;/g,"&"),n=new r.a(".copy",{text:function(){return t}});n.on("success",(function(t){t.clearSelection(),n.destroy(),e.copied=!0,"zh-CN"===e.docLang?e.$Message.success("代码已复制到剪贴板"):e.$Message.success("Code copied"),setTimeout((function(){e.copied=!1}),2e3)}))},scale:function(){this.openScale=!0},getSource:function(e,t){var n=new RegExp("<"+t+"[^>]*>"),a=e.match(n);return a?(a=a[0],e.slice(e.indexOf(a)+a.length,e.lastIndexOf("</"+t+">"))):""},openFiddle:function(){}}},c=(n(762),n(764),n(1)),d=Object(c.a)(l,a,[],!1,null,"557e1337",null);d.options.__file="website/components/code/index.vue";t.a=d.exports},767:function(e,t,n){"use strict";var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"anchor"},[e.h1?n("h1",{attrs:{id:e.title_link}},[e._v(e._s(e.title))]):e._e(),e._v(" "),e.h2?n("h2",{attrs:{id:e.title_link}},[e._v(e._s(e.title))]):e._e(),e._v(" "),e.h3?n("h3",{attrs:{id:e.title_link}},[e._v(e._s(e.title))]):e._e(),e._v(" "),e.h4?n("h4",{attrs:{id:e.title_link}},[e._v(e._s(e.title))]):e._e(),e._v(" "),e.h5?n("h5",{attrs:{id:e.title_link}},[e._v(e._s(e.title))]):e._e(),e._v(" "),e.h6?n("h6",{attrs:{id:e.title_link}},[e._v(e._s(e.title))]):e._e(),e._v(" "),e._t("default"),e._v(" "),n("a",{attrs:{href:"#"+e.title_link}},[e._v("\n        #\n    ")])],2)};a._withStripped=!0;n(219);var o=n(768),i={props:{title:{type:String,default:""},h1:Boolean,h2:Boolean,h3:Boolean,h4:Boolean,h5:Boolean,h6:Boolean},computed:{title_link:function(){return o.a.getFirstLetter(this.title).replace(/\s/g,"_")}}},s=(n(760),n(1)),r=Object(s.a)(i,a,[],!1,null,null,null);r.options.__file="website/components/anchor/index.vue";t.a=r.exports},769:function(e,t,n){"use strict";var a=n(759);n.n(a).a},770:function(e,t,n){(e.exports=n(50)(!1)).push([e.i,".example {\n  border: 1px solid #eee;\n  border-radius: 6px;\n  margin-bottom: 20px;\n  position: relative;\n  transition: all 0.2s ease-in-out;\n}\n.example:hover {\n  box-shadow: 0 2px 7px rgba(0, 0, 0, 0.15);\n  border-color: transparent;\n  position: relative;\n}\n.example-split {\n  display: block;\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 42%;\n  border: 1px dashed #eee;\n}\n.example-vertical .example-split {\n  width: 100%;\n  float: left;\n  position: relative;\n  left: 0;\n}\n.example-demo {\n  padding: 20px 0;\n  position: relative;\n}\n.example-case {\n  padding: 0 10px;\n}\n.example-header {\n  font-weight: 500;\n  margin: 30px 0 10px;\n  position: relative;\n}\n.example-header span {\n  display: inline-block;\n  background: #fff;\n  padding: 0 5px 0 18px;\n  position: relative;\n  margin-left: 30px;\n  font-size: 14px;\n}\n.example-header span a {\n  opacity: 0;\n  transition: opacity 0.2s ease-in-out;\n}\n.example-header:hover span a {\n  opacity: 1;\n}\n.example-header:before {\n  content: '';\n  display: block;\n  width: 100%;\n  height: 1px;\n  background: #eee;\n  position: absolute;\n  top: 10px;\n  left: 0;\n}\n.example-desc {\n  font-size: 12px;\n  padding: 0 20px;\n}\n.example-desc p {\n  font-size: 12px !important;\n  text-align: justify;\n}\n.example-desc ul li {\n  font-size: 12px !important;\n}\n.example-desc blockquote {\n  font-size: 12px !important;\n}\n.example-code {\n  padding: 0 10px;\n  position: relative;\n  overflow: hidden;\n  transition: height 0.2s ease-in-out;\n}\n.example-code-more {\n  position: absolute;\n  bottom: 0;\n  left: 4px;\n  right: 4px;\n  text-align: center;\n  cursor: pointer;\n  padding: 5px 0;\n  /*transition: background .1s ease-in-out;*/\n}\n.example-code-more:after {\n  content: '';\n  width: 100%;\n  height: 100%;\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  z-index: 1;\n  box-shadow: 0 -15px 30px #fff inset;\n}\n.example-code-more i {\n  position: relative;\n  top: 5px;\n  z-index: 2;\n}\n.example-code-more .ivu-btn {\n  padding: 0 0 4px;\n  position: relative;\n  top: 4px;\n  z-index: 2;\n}\n.example-code-more:hover {\n  /*background: #fff;*/\n}\n.example-code-more:hover i {\n  color: #5cb85c;\n}\n",""])},771:function(e,t,n){"use strict";var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("Row",{staticClass:"example",class:{"example-vertical":e.isVertical},attrs:{id:e.title_link}},[n("i-col",{staticClass:"example-demo",attrs:{span:e.isVertical?24:10}},[n("div",{staticClass:"example-case"},[e._t("demo")],2),e._v(" "),n("header",{staticClass:"example-header"},[n("span",[e._v("\n                "+e._s(e.title)+"\n                "),n("a",{attrs:{href:"#"+e.title_link,"data-title":e.title}},[e._v("#")])])]),e._v(" "),n("div",{staticClass:"example-desc"},[e._t("desc")],2)]),e._v(" "),n("div",{staticClass:"example-split"}),e._v(" "),n("i-col",{staticClass:"example-code",style:e.codeHeight,attrs:{span:e.isVertical?24:14}},[n("div",{style:e.style},[e._t("code")],2),e._v(" "),e.showMore?n("div",{staticClass:"example-code-more",on:{click:function(t){e.showCode=!e.showCode}}},[n("Icon",{directives:[{name:"show",rawName:"v-show",value:!e.showCode,expression:"!showCode"}],attrs:{type:"ios-arrow-down"}}),e._v(" "),n("Icon",{directives:[{name:"show",rawName:"v-show",value:e.showCode,expression:"showCode"}],attrs:{type:"ios-arrow-up"}}),e._v(" "),n("i-button",{directives:[{name:"show",rawName:"v-show",value:e.isCodeHide&&!e.showCode,expression:"isCodeHide && !showCode"}],attrs:{type:"text"}},["zh-CN"===e.lang?[e._v("显示代码")]:[e._v("Show Code")]],2)],1):e._e()])],1)};a._withStripped=!0;n(219);var o=n(768),i={name:"Demo",props:{title:{type:String,default:""},vertical:{type:Boolean,default:!1},hideCode:{type:Boolean,default:!1}},data:function(){return{showCode:!1,showMore:!0,demo_height:0,code_height:0,ready:!1,lang:this.$lang}},computed:{isCodeHide:function(){return this.hideCode},isVertical:function(){return this.vertical},codeHeight:function(){var e={};return this.ready&&(this.showCode?e.height=this.code_height+"px":e.height=this.demo_height+"px"),e},style:function(){var e={opacity:1};return this.isCodeHide&&!this.showCode&&(e.opacity=0),e},title_link:function(){return o.a.getFirstLetter(this.title).replace(/\s/g,"_")}},watch:{settingCode:function(){this.showCode=!1,this.showMore=!0,this.ready=!1,this.init()}},mounted:function(){this.init()},methods:{init:function(){var e=this;this.$nextTick((function(){var t=e.$children[0].$children[0].$el.clientHeight,n=e.$children[0].$children[1].$el.clientHeight+20;e.code_height=n,n<=t&&!e.isCodeHide&&(e.showMore=!1),e.demo_height=e.isCodeHide?30:t,e.ready=!0}))}}},s=(n(769),n(1)),r=Object(s.a)(i,a,[],!1,null,null,null);r.options.__file="website/components/demo/index.vue";t.a=r.exports},803:function(e,t,n){"use strict";n.r(t);var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("i-article",[n("article",[n("h1",[e._v("饼图")]),e._v(" "),n("inAnchor",{attrs:{title:"概述",h2:""}}),e._v(" "),n("p",[e._v("折线图是用折线将各个数据点标志连接起来的图表，用于展现数据的变化趋势。")]),e._v(" "),n("div",{staticClass:"api"},[n("table",[n("thead",[n("tr",[n("th",[e._v("属性")]),e._v(" "),n("th",[e._v("说明")]),e._v(" "),n("th",[e._v("类型")]),e._v(" "),n("th",[e._v("默认值")])])]),e._v(" "),n("tbody",[n("tr",[n("td",[e._v("chart.label")]),e._v(" "),n("td",[e._v("图的标题")]),e._v(" "),n("td",[e._v("Object | Array")]),e._v(" "),n("td",[e._v("{}")])]),e._v(" "),n("tr",[n("td",[e._v("chart.dataset")]),e._v(" "),n("td",[e._v("图的数据集，可以是多个数据的集合。")]),e._v(" "),n("td",[e._v("Object | Array")]),e._v(" "),n("td",[e._v("{}")])]),e._v(" "),n("tr",[n("td",[e._v("chart.series")]),e._v(" "),n("td",[e._v("图的系列配置集合。")]),e._v(" "),n("td",[e._v("Object | Array")]),e._v(" "),n("td",[e._v("{}")])]),e._v(" "),n("tr",[n("td",[e._v("chart.xAxis")]),e._v(" "),n("td",[e._v("x轴配置")]),e._v(" "),n("td",[e._v("Object | Array")]),e._v(" "),n("td",[e._v("{}")])]),e._v(" "),n("tr",[n("td",[e._v("chart.yAxis")]),e._v(" "),n("td",[e._v("y轴配置")]),e._v(" "),n("td",[e._v("Object | Array")]),e._v(" "),n("td",[e._v("{}")])])])])]),e._v(" "),n("Demo",{attrs:{title:"基本用法",vertical:""}},[n("div",{attrs:{slot:"demo"},slot:"demo"},[n("DataVisItem",{attrs:{chart:e.code.simple.data.chart},on:{"on-field-change":e.handleFieldChange}})],1),e._v(" "),n("div",{attrs:{slot:"desc"},slot:"desc"},[n("p",[e._v("通过设置"),n("code",[e._v("chart")]),e._v("，即可渲染一个图表。")])]),e._v(" "),n("i-code",{attrs:{slot:"code"},slot:"code"},[e._v(e._s(e.code.simple.code))])],1),e._v(" "),n("Demo",{attrs:{title:"多个",vertical:""}},[n("div",{attrs:{slot:"demo"},slot:"demo"},[n("DataVisItem",{attrs:{chart:e.code.multiple.data.chart},on:{"on-field-change":e.handleFieldChange}})],1),e._v(" "),n("div",{attrs:{slot:"desc"},slot:"desc"},[n("p",[e._v("通过设置"),n("code",[e._v("chart")]),e._v("，即可渲染一个图表。")])]),e._v(" "),n("i-code",{attrs:{slot:"code"},slot:"code"},[e._v(e._s(e.code.multiple.code))])],1)],1)])};a._withStripped=!0;var o=n(772),i=n(767),s=n(766),r=n(771),l={},c={type:"echart",label:"echart实现同一组数据多图绘制",dataset:{source:[{product:"Latte",sells:43.3},{product:"Tea",sells:83.1},{product:"Cocoa",sells:86.4},{product:"Brownie",sells:72.4}]},series:[{type:"pie"}]};l.data={chart:c},l.code="\nconst chart = "+JSON.stringify(c,null,4)+";\n\n<template>\n    <DataVisItem\n        :chart='chart'\n    />\n</template>\n<script>\nexport default {\n    data() {\n        return {\n            chart\n        };\n    }\n};\n<\/script>\n";var d={},p={type:"echart",label:"画多条线",dataset:{dimensions:["product","2014","2015","2016","2017"],source:[["Latte",65.1,53.3,83.8,98.7],["Tea",85.7,83.1,73.4,55.1],["Cocoa",79.5,86.4,65.2,82.5],["Brownie",69.2,72.4,53.9,39.1]]},series:[{type:"pie",center:["25%","60%"]},{type:"pie",center:["50%","60%"],encode:{itemName:"product",value:"2015"}},{type:"pie",center:["75%","60%"],encode:{itemName:"product",value:"2016"}}]};d.data={chart:p},d.code="\nconst chart = "+JSON.stringify(p,null,4)+";\n\n<template>\n    <DataVisItem\n        :chart='chart'\n    />\n</template>\n<script>\nexport default {\n    data() {\n        return {\n            chart\n        };\n    }\n};\n<\/script>\n";var h={simple:l,multiple:d},v={components:{iArticle:o.a,inAnchor:i.a,iCode:s.a,Demo:r.a},data:function(){return{code:h}},methods:{handleFieldChange:function(e,t){console.log(e,t)}}},u=n(1),_=Object(u.a)(v,a,[],!1,null,null,null);_.options.__file="website/page/config-guide/chart/Pie/index.vue";var f=_.exports;t.default=f}}]);