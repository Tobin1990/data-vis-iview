(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{780:function(e,a,t){var n=t(788);"string"==typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);(0,t(51).default)("731b34cc",n,!1,{})},781:function(e,a,t){var n=t(790);"string"==typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);(0,t(51).default)("504fde20",n,!1,{})},787:function(e,a,t){"use strict";var n=t(780);t.n(n).a},788:function(e,a,t){(e.exports=t(50)(!1)).push([e.i,".container[data-v-4d854505] {\n  padding: 10px;\n  font-family: -apple-system, BlinkMacSystemFont, Segoe UI, PingFang SC, Hiragino Sans GB, Microsoft YaHei, Helvetica Neue, Helvetica, Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol;\n}\n",""])},789:function(e,a,t){"use strict";var n=t(781);t.n(n).a},790:function(e,a,t){(e.exports=t(50)(!1)).push([e.i,".container[data-v-24a052b8] {\n  padding: 10px;\n  font-family: -apple-system, BlinkMacSystemFont, Segoe UI, PingFang SC, Hiragino Sans GB, Microsoft YaHei, Helvetica Neue, Helvetica, Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol;\n}\n",""])},799:function(e,a,t){"use strict";t.r(a);var n=function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("div",[t("Row",{staticClass:"container"},[t("div",{staticClass:"container"},e._l(e.config,(function(a,n){return t("DataVis",{key:n,ref:"DataVis",refInFor:!0,style:{marginTop:"40px"},attrs:{config:a,"params-container":e.paramsContainer,"request-interceptor":e.requestInterceptor,"api-base":e.apiBase}})})),1)])],1)};n._withStripped=!0;t(220),t(57);var o=[{title:"整体趋势1",rows:[[{conditions:[{key:"100060",type:"DatePicker",subType:"date",model:"date",placeholder:"",required:!0,defaultValue:"2019-01-01"}],chartGroup:[{tip:{title:"标题1",content:"内容1"},label:"地域分布",type:"pie",data:[{value:335,name:"直接访问"},{value:310,name:"邮件营销"},{value:274,name:"联盟广告"},{value:235,name:"视频广告"},{value:400,name:"搜索引擎"}]},{label:"新增用户",type:"bar",columns:["Mon","Tue","Wed","Thu","Fri","Sat","Sun"],data:[120,200,150,80,70,110,130]},{label:"新增用户-水平",type:"bar",direction:"horizontal",columns:["Mon","Tue","Wed","Thu","Fri","Sat","Sun"],data:[120,200,150,80,70,110,130]}]},{conditions:[{key:"100061",type:"DatePicker",subType:"date",model:"date",placeholder:"",required:!0,defaultValue:"2019-01-01"}],chartGroup:[{label:"趋势图",type:"line",dataZoom:!0,columns:[["2015-1","2015-2","2015-3","2015-4","2015-5","2015-6","2015-7","2015-8","2015-9","2015-10","2015-11"],["2016-1","2016-2","2016-3","2016-4","2016-5","2016-6","2016-7","2016-8","2016-9","2016-10","2016-11","2016-12"]],data:[{name:"2015 邮件营销",groupName:"邮件营销",xAxisIndex:0,data:[120,132,101,134,90,230,210,101,134]},{name:"2016 邮件营销",groupName:"邮件营销",xAxisIndex:1,data:[150,122,121,164,100,200,200,141,134,90,230,210]},{name:"2015 联盟广告",groupName:"联盟广告",xAxisIndex:0,data:[220,182,191,234,290,330,310,101,134,90,230]},{name:"2016 联盟广告",groupName:"联盟广告",xAxisIndex:1,data:[20,82,91,34,90,30,10,1,34,90,30,10]}]},{tip:{title:"标题2",content:"内容2"},label:"柱状图api2",type:"bar",api:"/chartBarApi"},{label:"用户转化",type:"funnel",columns:["展现","点击","访问","咨询","订单"],data:[{value:54,name:"访问"},{value:12,name:"咨询"},{value:5,name:"订单"},{value:83,name:"点击"},{value:100,name:"展现"}]}]}],[{chartGroup:[{tip:{title:"标题1",content:"内容1"},label:"饼图api",type:"pie",api:"/chartPieApi"},{tip:{title:"标题2",content:"内容2"},label:"柱状图api",type:"bar",api:"/chartBarApi"},{tip:{title:"标题1",content:"内容1"},label:"饼图api1",type:"pie",api:"/chartPieApi1"},{tip:{title:"标题1",content:"内容1"},label:"折线图api",type:"line",dataZoom:!0,api:"/chartLineApi"},{tip:{title:"标题1",content:"内容1"},label:"折线图区域api",type:"line",api:"/chartLineAreaApi"}]}]]},{title:"整体趋势2",rows:[[{conditions:[{key:"100060",type:"DatePicker",subType:"date",model:"date",placeholder:"",required:!0,defaultValue:"2019-01-01"}],chartGroup:[{tip:{title:"标题1",content:"内容1"},label:"地域分布",type:"pie",data:[{value:335,name:"直接访问"},{value:310,name:"邮件营销"},{value:274,name:"联盟广告"},{value:235,name:"视频广告"},{value:400,name:"搜索引擎"}]},{tip:{title:"标题1",content:"内容1"},label:"地域分布",type:"pie",data:[{value:33,name:"直接访问"},{value:31,name:"邮件营销"},{value:14,name:"联盟广告"},{value:35,name:"视频广告"},{value:10,name:"搜索引擎"}]}]},{conditions:[{key:"100061",type:"DatePicker",subType:"date",model:"date",placeholder:"",required:!0,defaultValue:"2019-01-01"}],chartGroup:[{tip:{title:"标题2",content:"内容2"},label:"柱状图api2",type:"bar",api:"/chartBarApi"}]}],[{conditions:[{key:"1000611",type:"Radio",subType:"button",model:"1000611",placeholder:"",required:!0,defaultValue:"1",options:[{label:"按周",value:"week"},{label:"按月",value:"month"},{label:"按年",value:"year"}]},{key:"100061",type:"DatePicker",subType:"date",model:"date",placeholder:"",required:!0,defaultValue:"2019-01-01"}],chartGroup:[{tip:{title:"标题1",content:"内容1"},label:"饼图api",type:"pie",api:"/chartPieApi"},{label:"趋势图-大数值处理",type:"line",columns:[["2015-1","2015-2","2015-3","2015-4","2015-5","2015-6","2015-7","2015-8","2015-9","2015-10","2015-11"]],data:[{name:"2015 邮件营销",groupName:"邮件营销",data:[124135512,132123412,101121341,134141234,91241294,230310492,210801284,101091940,134123412]}]}]}]]},{title:"整体趋势3",rows:[[{chartGroup:[{label:"数据表格",type:"table",hideElevator:!0,hideSizer:!0,downloadAble:!1,customColumns:["name","age","address","money","name-1","age-1","address-1","money-1"],columns:[{title:"Name-api",key:"name",defaultShow:!0},{title:"Age-api",key:"age",sortable:!0,defaultShow:!1},{title:"Address-api",key:"address",defaultShow:!0},{title:"Date-api",key:"date",defaultShow:!0},{title:"Money",key:"money",defaultShow:!0},{title:"Name-api-1",key:"name-1",defaultShow:!0},{title:"Age-api-1",key:"age-1",sortable:!0,defaultShow:!1},{title:"Address-api-1",key:"address-1",defaultShow:!0},{title:"Date-api-1",key:"date-1",defaultShow:!0},{title:"Money-1",key:"money-1",defaultShow:!0}],data:[{name:"John Brown-api",age:18,address:"啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊",date:"2016-10-03",money:121212122112.22223,"name-1":"John Brown-api","age-1":18,"address-1":"New York No. 1 Lake Park-api","date-1":"2016-10-03","money-1":121212122112},{name:"John Brown-api",age:18,address:"啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊",date:"2016-10-03",money:121212122112,"name-1":"John Brown-api","age-1":18,"address-1":"New York No. 1 Lake Park-api","date-1":"2016-10-03","money-1":121212122112},{name:"John Brown-api",age:18,address:"啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊",date:"2016-10-03",money:121212122112,"name-1":"John Brown-api","age-1":18,"address-1":"New York No. 1 Lake Park-api","date-1":"2016-10-03","money-1":121212122112},{name:"John Brown-api",age:18,address:"啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊",date:"2016-10-03",money:121212122112,"name-1":"John Brown-api","age-1":18,"address-1":"New York No. 1 Lake Park-api","date-1":"2016-10-03","money-1":121212122112},{name:"John Brown-api",age:18,address:"啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊",date:"2016-10-03",money:121212122112,"name-1":"John Brown-api","age-1":18,"address-1":"New York No. 1 Lake Park-api","date-1":"2016-10-03","money-1":121212122112},{name:"John Brown-api",age:18,address:"啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊",date:"2016-10-03",money:121212122112,"name-1":"John Brown-api","age-1":18,"address-1":"New York No. 1 Lake Park-api","date-1":"2016-10-03","money-1":121212122112},{name:"John Brown-api",age:18,address:"啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊",date:"2016-10-03",money:121212122112,"name-1":"John Brown-api","age-1":18,"address-1":"New York No. 1 Lake Park-api","date-1":"2016-10-03","money-1":121212122112.22223},{name:"John Brown-api",age:18,address:"啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊",date:"2016-10-03",money:121212122112,"name-1":"John Brown-api","age-1":18,"address-1":"New York No. 1 Lake Park-api","date-1":"2016-10-03","money-1":121212122112},{name:"John Brown-api",age:18,address:"啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊",date:"2016-10-03",money:null,"name-1":"John Brown-api","age-1":18,"address-1":"New York No. 1 Lake Park-api","date-1":"2016-10-03","money-1":121212122112},{name:"John Brown-api",age:18,address:"啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊",date:"2016-10-03",money:121212122112,"name-1":"John Brown-api","age-1":18,"address-1":"New York No. 1 Lake Park-api","date-1":"2016-10-03","money-1":121212122112}]},{label:"数据表格API",type:"table",customColumns:["name","age","address"],api:"/chartTableApi"},{label:"数据表格NoColumnsApi",type:"table",customColumns:["name","age","address"],columns:[{title:"Name-api",key:"name",defaultShow:!0,sortable:!0},{title:"Age-api",key:"age",defaultShow:!1,sortable:!0,unit:"%"},{title:"Address-api",key:"address",defaultShow:!0,sortable:!0},{title:"Date-api",key:"date",defaultShow:!0,sortable:!0}],api:"/chartTableNoColumnsApi",apiParams:["test1"]},{label:"数据表格-可扩展",type:"table",customColumns:["name","age","address"],columns:[{title:"Name-api",key:"name",defaultShow:!0},{title:"Age-api",key:"age",sortable:!0,defaultShow:!1},{title:"Address-api",key:"address",defaultShow:!0},{title:"Date-api",key:"date",defaultShow:!0}],data:[{name:"John Brown-api",age:18,address:"New York No. 1 Lake Park-api",date:"2016-10-03",children:[{name:"John Brown-api-children-1",age:18,address:"New York No. 1 Lake Park-api",date:"2016-10-03",children:[{name:"John Brown-api-children-2",age:18,address:"New York No. 1 Lake Park-api",date:"2016-10-03",children:[{name:"John Brown-api-children-3",age:18,address:"New York No. 1 Lake Park-api",date:"2016-10-03"},{name:"John Brown-api-children-3",age:18,address:"New York No. 1 Lake Park-api",date:"2016-10-03"},{name:"John Brown-api-children-3",age:18,address:"New York No. 1 Lake Park-api",date:"2016-10-03"},{name:"John Brown-api-children-3",age:18,address:"New York No. 1 Lake Park-api",date:"2016-10-03"}]},{name:"John Brown-api-children-2",age:18,address:"New York No. 1 Lake Park-api",date:"2016-10-03"},{name:"John Brown-api-children-2",age:18,address:"New York No. 1 Lake Park-api",date:"2016-10-03"},{name:"John Brown-api-children-2",age:18,address:"New York No. 1 Lake Park-api",date:"2016-10-03"}]},{name:"John Brown-api-children-1",age:18,address:"New York No. 1 Lake Park-api",date:"2016-10-03"},{name:"John Brown-api-children",age:18,address:"New York No. 1 Lake Park-api",date:"2016-10-03"},{name:"John Brown-api-children",age:18,address:"New York No. 1 Lake Park-api",date:"2016-10-03"}]},{name:"Jim Green",age:24,address:"London No. 1 Lake Park",date:"2016-10-01"},{name:"Joe Black",age:30,address:"Sydney No. 1 Lake Park",date:"2016-10-02"},{name:"Jon Snow",age:26,address:"Ottawa No. 2 Lake Park",date:"2016-10-04"},{name:"John Brown",age:18,address:"New York No. 1 Lake Park",date:"2016-10-03"},{name:"Jim Green",age:24,address:"London No. 1 Lake Park",date:"2016-10-01"},{name:"Joe Black",age:30,address:"Sydney No. 1 Lake Park",date:"2016-10-02"},{name:"Jon Snow",age:26,address:"Ottawa No. 2 Lake Park",date:"2016-10-04"},{name:"John Brown",age:18,address:"New York No. 1 Lake Park",date:"2016-10-03"},{name:"Jim Green",age:24,address:"London No. 1 Lake Park",date:"2016-10-01"},{name:"Joe Black",age:30,address:"Sydney No. 1 Lake Park",date:"2016-10-02"},{name:"Jon Snow",age:26,address:"Ottawa No. 2 Lake Park",date:"2016-10-04"},{name:"John Brown",age:18,address:"New York No. 1 Lake Park",date:"2016-10-03"},{name:"Jim Green",age:24,address:"London No. 1 Lake Park",date:"2016-10-01"},{name:"Joe Black",age:30,address:"Sydney No. 1 Lake Park",date:"2016-10-02"},{name:"Jon Snow",age:26,address:"Ottawa No. 2 Lake Park",date:"2016-10-04"},{name:"John Brown",age:18,address:"New York No. 1 Lake Park",date:"2016-10-03"},{name:"Jim Green",age:24,address:"London No. 1 Lake Park",date:"2016-10-01"},{name:"Joe Black",age:30,address:"Sydney No. 1 Lake Park",date:"2016-10-02"},{name:"Jon Snow",age:26,address:"Ottawa No. 2 Lake Park",date:"2016-10-04"}]}]}]]},{title:"整体趋势4",rows:[[{chartGroup:[{type:"retain",downloadAble:!1,columns:[{title:"日期",key:"date"},{title:"用户数",key:"user_number"},{title:"1天后",key:"1"},{title:"2天后",key:"2"},{title:"3天后",key:"3"},{title:"4天后",key:"4"},{title:"5天后",key:"5"},{title:"6天后",key:"6"},{title:"7天后",key:"7"}],data:[{date:"2018-01-10",user_number:123456789,1:90.7,2:"",3:"",4:"",5:"",6:"",7:""},{date:"2018-01-09",user_number:123456789,1:60.34,2:55.22,3:"",4:"",5:"",6:"",7:""},{date:"2018-01-08",user_number:123456789,1:90.34,2:85.29,3:74.39,4:"",5:"",6:"",7:""},{date:"2018-01-07",user_number:123456789,1:60,2:55.01,3:44.49,4:33.29,5:"",6:"",7:""},{date:"2018-01-06",user_number:123456789,1:60.29,2:55.47,3:54.57,4:53.29,5:52.98,6:"",7:""},{date:"2018-01-05",user_number:123456789,1:90,2:85.23,3:74.48,4:63.47,5:52.77,6:40.22,7:""},{date:"2018-01-04",user_number:123456789,1:90.78,2:85.36,3:74.78,4:63.26,5:52.97,6:40.46,7:38.76},{date:"2018-01-03",user_number:123456789,1:60.2,2:55.87,3:44.6,4:33.6,5:22.9,6:10.9,7:8.2},{date:"2018-01-02",user_number:123456789,1:60.2,2:55.87,3:44.6,4:33.6,5:22.9,6:10.9,7:8.2},{date:"2018-01-02",user_number:123456789,1:60.2,2:55.87,3:44.6,4:33.6,5:22.9,6:10.9,7:8.2},{date:"2018-01-02",user_number:123456789,1:60.2,2:55.87,3:44.6,4:33.6,5:22.9,6:10.9,7:8.2},{date:"2018-01-02",user_number:123456789,1:60.2,2:55.87,3:44.6,4:33.6,5:22.9,6:10.9,7:8.2}]}]},{chartGroup:[{label:"留存",type:"retain",api:"/chartRetainApi"}]}]]},{title:"整体趋势5",tip:{title:"规则",content:"规则内容规则内容规则内容规则内容规则<br>内容规则内容规则内容规则内容规则内容规则内容规则内容规则内容规则内容规则内容规则内容规则内容规则内容规则内容规则内容规则内容规则内容规则内容规则内容"},rows:[[{display:"inline",chartGroup:[{type:"card",label:"新增用户",api:"/chartCardApi"},{type:"card",label:"活跃用户",api:"/chartCardApi"},{type:"card",label:"月活",api:"/chartCardApi"},{type:"card",label:"年活跃",data:[{label:"新增用111户数",value:100000000.22,unit:"人",showChange:!1},{label:"日环比",value:3.95,unit:"%",showChange:!0},{label:"日环比",value:3.95,unit:"%",showChange:!0},{label:"当前值b",value:"8888888",unit:"人",showChange:!1}]},{type:"card",label:"aaa",data:[{label:"新增用111户数",value:"100000000",unit:"人",showChange:!1},{label:"日环比",value:"-32.95",unit:"%",showChange:!0},{label:"日环比",value:"-13.95",unit:"%",showChange:!0},{label:"当前值b",value:"8888888",unit:"人",showChange:!1}]}]}]]}],r=t(98),d=t.n(r),i={data:function(){return{form:{config:JSON.stringify(o,null,8)},config:o,paramsContainer:{test1:"1",test2:"2"},apiBase:"",requestInterceptor:function(e,a){return new Promise((function(t,n){e="website-data-api/"+e+".json",d.a.get(e,{query:a}).then((function(e){t(e.data)})).catch((function(e){n(e)}))}))}}},mounted:function(){},beforeDestroy:function(){},methods:{handleConfigChange:function(e){var a;try{a=JSON.parse(e.target.value||"")||[]}catch(e){this.$Message("配置信息不是一个合法的json数据")}this.config=a}}},l=(t(787),t(1)),s=Object(l.a)(i,n,[],!1,null,"4d854505",null);s.options.__file="website/page/examples/monitor/index.vue";var p=s.exports;a.default=p},801:function(e,a,t){"use strict";t.r(a);var n=function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("div",[t("Row",{staticClass:"container"},[t("div",{staticClass:"container"},e._l(e.config,(function(a,n){return t("DataVis",{key:n,ref:"DataVis",refInFor:!0,style:{marginTop:"40px"},attrs:{config:a,"params-container":e.paramsContainer,"request-interceptor":e.requestInterceptor,"api-base":e.apiBase}})})),1)])],1)};n._withStripped=!0;t(220),t(57);var o=[{title:"整体趋势1",rows:[[{conditions:[{key:"100060",type:"DatePicker",subType:"date",model:"date",placeholder:"",required:!0,defaultValue:"2019-01-01"}],chartGroup:[{tip:{title:"标题1",content:"内容1"},label:"地域分布",type:"pie",data:[{value:335,name:"直接访问"},{value:310,name:"邮件营销"},{value:274,name:"联盟广告"},{value:235,name:"视频广告"},{value:400,name:"搜索引擎"}]},{label:"新增用户",type:"bar",columns:["Mon","Tue","Wed","Thu","Fri","Sat","Sun"],data:[120,200,150,80,70,110,130]},{label:"新增用户-水平",type:"bar",direction:"horizontal",columns:["Mon","Tue","Wed","Thu","Fri","Sat","Sun"],data:[120,200,150,80,70,110,130]}]},{conditions:[{key:"100061",type:"DatePicker",subType:"date",model:"date",placeholder:"",required:!0,defaultValue:"2019-01-01"}],chartGroup:[{label:"趋势图",type:"line",dataZoom:!0,columns:[["2015-1","2015-2","2015-3","2015-4","2015-5","2015-6","2015-7","2015-8","2015-9","2015-10","2015-11"],["2016-1","2016-2","2016-3","2016-4","2016-5","2016-6","2016-7","2016-8","2016-9","2016-10","2016-11","2016-12"]],data:[{name:"2015 邮件营销",groupName:"邮件营销",xAxisIndex:0,data:[120,132,101,134,90,230,210,101,134]},{name:"2016 邮件营销",groupName:"邮件营销",xAxisIndex:1,data:[150,122,121,164,100,200,200,141,134,90,230,210]},{name:"2015 联盟广告",groupName:"联盟广告",xAxisIndex:0,data:[220,182,191,234,290,330,310,101,134,90,230]},{name:"2016 联盟广告",groupName:"联盟广告",xAxisIndex:1,data:[20,82,91,34,90,30,10,1,34,90,30,10]}]},{tip:{title:"标题2",content:"内容2"},label:"柱状图api2",type:"bar",api:"/chartBarApi"},{label:"用户转化",type:"funnel",columns:["展现","点击","访问","咨询","订单"],data:[{value:54,name:"访问"},{value:12,name:"咨询"},{value:5,name:"订单"},{value:83,name:"点击"},{value:100,name:"展现"}]}]}],[{chartGroup:[{tip:{title:"标题1",content:"内容1"},label:"饼图api",type:"pie",api:"/chartPieApi"},{tip:{title:"标题2",content:"内容2"},label:"柱状图api",type:"bar",api:"/chartBarApi"},{tip:{title:"标题1",content:"内容1"},label:"饼图api1",type:"pie",api:"/chartPieApi1"},{tip:{title:"标题1",content:"内容1"},label:"折线图api",type:"line",dataZoom:!0,api:"/chartLineApi"},{tip:{title:"标题1",content:"内容1"},label:"折线图区域api",type:"line",api:"/chartLineAreaApi"}]}]]},{title:"整体趋势2",rows:[[{conditions:[{key:"100060",type:"DatePicker",subType:"date",model:"date",placeholder:"",required:!0,defaultValue:"2019-01-01"}],chartGroup:[{tip:{title:"标题1",content:"内容1"},label:"地域分布",type:"pie",data:[{value:335,name:"直接访问"},{value:310,name:"邮件营销"},{value:274,name:"联盟广告"},{value:235,name:"视频广告"},{value:400,name:"搜索引擎"}]},{tip:{title:"标题1",content:"内容1"},label:"地域分布",type:"pie",data:[{value:33,name:"直接访问"},{value:31,name:"邮件营销"},{value:14,name:"联盟广告"},{value:35,name:"视频广告"},{value:10,name:"搜索引擎"}]}]},{conditions:[{key:"100061",type:"DatePicker",subType:"date",model:"date",placeholder:"",required:!0,defaultValue:"2019-01-01"}],chartGroup:[{tip:{title:"标题2",content:"内容2"},label:"柱状图api2",type:"bar",api:"/chartBarApi"}]}],[{conditions:[{key:"1000611",type:"Radio",subType:"button",model:"1000611",placeholder:"",required:!0,defaultValue:"1",options:[{label:"按周",value:"week"},{label:"按月",value:"month"},{label:"按年",value:"year"}]},{key:"100061",type:"DatePicker",subType:"date",model:"date",placeholder:"",required:!0,defaultValue:"2019-01-01"}],chartGroup:[{tip:{title:"标题1",content:"内容1"},label:"饼图api",type:"pie",api:"/chartPieApi"},{label:"趋势图-大数值处理",type:"line",columns:[["2015-1","2015-2","2015-3","2015-4","2015-5","2015-6","2015-7","2015-8","2015-9","2015-10","2015-11"]],data:[{name:"2015 邮件营销",groupName:"邮件营销",data:[124135512,132123412,101121341,134141234,91241294,230310492,210801284,101091940,134123412]}]}]}]]},{title:"整体趋势3",rows:[[{chartGroup:[{label:"数据表格",type:"table",hideElevator:!0,hideSizer:!0,downloadAble:!1,customColumns:["name","age","address","money","name-1","age-1","address-1","money-1"],columns:[{title:"Name-api",key:"name",defaultShow:!0},{title:"Age-api",key:"age",sortable:!0,defaultShow:!1},{title:"Address-api",key:"address",defaultShow:!0},{title:"Date-api",key:"date",defaultShow:!0},{title:"Money",key:"money",defaultShow:!0},{title:"Name-api-1",key:"name-1",defaultShow:!0},{title:"Age-api-1",key:"age-1",sortable:!0,defaultShow:!1},{title:"Address-api-1",key:"address-1",defaultShow:!0},{title:"Date-api-1",key:"date-1",defaultShow:!0},{title:"Money-1",key:"money-1",defaultShow:!0}],data:[{name:"John Brown-api",age:18,address:"啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊",date:"2016-10-03",money:121212122112.22223,"name-1":"John Brown-api","age-1":18,"address-1":"New York No. 1 Lake Park-api","date-1":"2016-10-03","money-1":121212122112},{name:"John Brown-api",age:18,address:"啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊",date:"2016-10-03",money:121212122112,"name-1":"John Brown-api","age-1":18,"address-1":"New York No. 1 Lake Park-api","date-1":"2016-10-03","money-1":121212122112},{name:"John Brown-api",age:18,address:"啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊",date:"2016-10-03",money:121212122112,"name-1":"John Brown-api","age-1":18,"address-1":"New York No. 1 Lake Park-api","date-1":"2016-10-03","money-1":121212122112},{name:"John Brown-api",age:18,address:"啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊",date:"2016-10-03",money:121212122112,"name-1":"John Brown-api","age-1":18,"address-1":"New York No. 1 Lake Park-api","date-1":"2016-10-03","money-1":121212122112},{name:"John Brown-api",age:18,address:"啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊",date:"2016-10-03",money:121212122112,"name-1":"John Brown-api","age-1":18,"address-1":"New York No. 1 Lake Park-api","date-1":"2016-10-03","money-1":121212122112},{name:"John Brown-api",age:18,address:"啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊",date:"2016-10-03",money:121212122112,"name-1":"John Brown-api","age-1":18,"address-1":"New York No. 1 Lake Park-api","date-1":"2016-10-03","money-1":121212122112},{name:"John Brown-api",age:18,address:"啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊",date:"2016-10-03",money:121212122112,"name-1":"John Brown-api","age-1":18,"address-1":"New York No. 1 Lake Park-api","date-1":"2016-10-03","money-1":121212122112.22223},{name:"John Brown-api",age:18,address:"啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊",date:"2016-10-03",money:121212122112,"name-1":"John Brown-api","age-1":18,"address-1":"New York No. 1 Lake Park-api","date-1":"2016-10-03","money-1":121212122112},{name:"John Brown-api",age:18,address:"啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊",date:"2016-10-03",money:null,"name-1":"John Brown-api","age-1":18,"address-1":"New York No. 1 Lake Park-api","date-1":"2016-10-03","money-1":121212122112},{name:"John Brown-api",age:18,address:"啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊",date:"2016-10-03",money:121212122112,"name-1":"John Brown-api","age-1":18,"address-1":"New York No. 1 Lake Park-api","date-1":"2016-10-03","money-1":121212122112}]},{label:"数据表格API",type:"table",customColumns:["name","age","address"],api:"/chartTableApi"},{label:"数据表格NoColumnsApi",type:"table",customColumns:["name","age","address"],columns:[{title:"Name-api",key:"name",defaultShow:!0,sortable:!0},{title:"Age-api",key:"age",defaultShow:!1,sortable:!0,unit:"%"},{title:"Address-api",key:"address",defaultShow:!0,sortable:!0},{title:"Date-api",key:"date",defaultShow:!0,sortable:!0}],api:"/chartTableNoColumnsApi",apiParams:["test1"]},{label:"数据表格-可扩展",type:"table",customColumns:["name","age","address"],columns:[{title:"Name-api",key:"name",defaultShow:!0},{title:"Age-api",key:"age",sortable:!0,defaultShow:!1},{title:"Address-api",key:"address",defaultShow:!0},{title:"Date-api",key:"date",defaultShow:!0}],data:[{name:"John Brown-api",age:18,address:"New York No. 1 Lake Park-api",date:"2016-10-03",children:[{name:"John Brown-api-children-1",age:18,address:"New York No. 1 Lake Park-api",date:"2016-10-03",children:[{name:"John Brown-api-children-2",age:18,address:"New York No. 1 Lake Park-api",date:"2016-10-03",children:[{name:"John Brown-api-children-3",age:18,address:"New York No. 1 Lake Park-api",date:"2016-10-03"},{name:"John Brown-api-children-3",age:18,address:"New York No. 1 Lake Park-api",date:"2016-10-03"},{name:"John Brown-api-children-3",age:18,address:"New York No. 1 Lake Park-api",date:"2016-10-03"},{name:"John Brown-api-children-3",age:18,address:"New York No. 1 Lake Park-api",date:"2016-10-03"}]},{name:"John Brown-api-children-2",age:18,address:"New York No. 1 Lake Park-api",date:"2016-10-03"},{name:"John Brown-api-children-2",age:18,address:"New York No. 1 Lake Park-api",date:"2016-10-03"},{name:"John Brown-api-children-2",age:18,address:"New York No. 1 Lake Park-api",date:"2016-10-03"}]},{name:"John Brown-api-children-1",age:18,address:"New York No. 1 Lake Park-api",date:"2016-10-03"},{name:"John Brown-api-children",age:18,address:"New York No. 1 Lake Park-api",date:"2016-10-03"},{name:"John Brown-api-children",age:18,address:"New York No. 1 Lake Park-api",date:"2016-10-03"}]},{name:"Jim Green",age:24,address:"London No. 1 Lake Park",date:"2016-10-01"},{name:"Joe Black",age:30,address:"Sydney No. 1 Lake Park",date:"2016-10-02"},{name:"Jon Snow",age:26,address:"Ottawa No. 2 Lake Park",date:"2016-10-04"},{name:"John Brown",age:18,address:"New York No. 1 Lake Park",date:"2016-10-03"},{name:"Jim Green",age:24,address:"London No. 1 Lake Park",date:"2016-10-01"},{name:"Joe Black",age:30,address:"Sydney No. 1 Lake Park",date:"2016-10-02"},{name:"Jon Snow",age:26,address:"Ottawa No. 2 Lake Park",date:"2016-10-04"},{name:"John Brown",age:18,address:"New York No. 1 Lake Park",date:"2016-10-03"},{name:"Jim Green",age:24,address:"London No. 1 Lake Park",date:"2016-10-01"},{name:"Joe Black",age:30,address:"Sydney No. 1 Lake Park",date:"2016-10-02"},{name:"Jon Snow",age:26,address:"Ottawa No. 2 Lake Park",date:"2016-10-04"},{name:"John Brown",age:18,address:"New York No. 1 Lake Park",date:"2016-10-03"},{name:"Jim Green",age:24,address:"London No. 1 Lake Park",date:"2016-10-01"},{name:"Joe Black",age:30,address:"Sydney No. 1 Lake Park",date:"2016-10-02"},{name:"Jon Snow",age:26,address:"Ottawa No. 2 Lake Park",date:"2016-10-04"},{name:"John Brown",age:18,address:"New York No. 1 Lake Park",date:"2016-10-03"},{name:"Jim Green",age:24,address:"London No. 1 Lake Park",date:"2016-10-01"},{name:"Joe Black",age:30,address:"Sydney No. 1 Lake Park",date:"2016-10-02"},{name:"Jon Snow",age:26,address:"Ottawa No. 2 Lake Park",date:"2016-10-04"}]}]}]]},{title:"整体趋势4",rows:[[{chartGroup:[{type:"retain",downloadAble:!1,columns:[{title:"日期",key:"date"},{title:"用户数",key:"user_number"},{title:"1天后",key:"1"},{title:"2天后",key:"2"},{title:"3天后",key:"3"},{title:"4天后",key:"4"},{title:"5天后",key:"5"},{title:"6天后",key:"6"},{title:"7天后",key:"7"}],data:[{date:"2018-01-10",user_number:123456789,1:90.7,2:"",3:"",4:"",5:"",6:"",7:""},{date:"2018-01-09",user_number:123456789,1:60.34,2:55.22,3:"",4:"",5:"",6:"",7:""},{date:"2018-01-08",user_number:123456789,1:90.34,2:85.29,3:74.39,4:"",5:"",6:"",7:""},{date:"2018-01-07",user_number:123456789,1:60,2:55.01,3:44.49,4:33.29,5:"",6:"",7:""},{date:"2018-01-06",user_number:123456789,1:60.29,2:55.47,3:54.57,4:53.29,5:52.98,6:"",7:""},{date:"2018-01-05",user_number:123456789,1:90,2:85.23,3:74.48,4:63.47,5:52.77,6:40.22,7:""},{date:"2018-01-04",user_number:123456789,1:90.78,2:85.36,3:74.78,4:63.26,5:52.97,6:40.46,7:38.76},{date:"2018-01-03",user_number:123456789,1:60.2,2:55.87,3:44.6,4:33.6,5:22.9,6:10.9,7:8.2},{date:"2018-01-02",user_number:123456789,1:60.2,2:55.87,3:44.6,4:33.6,5:22.9,6:10.9,7:8.2},{date:"2018-01-02",user_number:123456789,1:60.2,2:55.87,3:44.6,4:33.6,5:22.9,6:10.9,7:8.2},{date:"2018-01-02",user_number:123456789,1:60.2,2:55.87,3:44.6,4:33.6,5:22.9,6:10.9,7:8.2},{date:"2018-01-02",user_number:123456789,1:60.2,2:55.87,3:44.6,4:33.6,5:22.9,6:10.9,7:8.2}]}]},{chartGroup:[{label:"留存",type:"retain",api:"/chartRetainApi"}]}]]},{title:"整体趋势5",tip:{title:"规则",content:"规则内容规则内容规则内容规则内容规则<br>内容规则内容规则内容规则内容规则内容规则内容规则内容规则内容规则内容规则内容规则内容规则内容规则内容规则内容规则内容规则内容规则内容规则内容规则内容"},rows:[[{display:"inline",chartGroup:[{type:"card",label:"新增用户",api:"/chartCardApi"},{type:"card",label:"活跃用户",api:"/chartCardApi"},{type:"card",label:"月活",api:"/chartCardApi"},{type:"card",label:"年活跃",data:[{label:"新增用111户数",value:100000000.22,unit:"人",showChange:!1},{label:"日环比",value:3.95,unit:"%",showChange:!0},{label:"日环比",value:3.95,unit:"%",showChange:!0},{label:"当前值b",value:"8888888",unit:"人",showChange:!1}]},{type:"card",label:"aaa",data:[{label:"新增用111户数",value:"100000000",unit:"人",showChange:!1},{label:"日环比",value:"-32.95",unit:"%",showChange:!0},{label:"日环比",value:"-13.95",unit:"%",showChange:!0},{label:"当前值b",value:"8888888",unit:"人",showChange:!1}]}]}]]}],r=t(98),d=t.n(r),i={data:function(){return{form:{config:JSON.stringify(o,null,8)},config:o,paramsContainer:{test1:"1",test2:"2"},apiBase:"",requestInterceptor:function(e,a){return new Promise((function(t,n){e="website-data-api/"+e+".json",d.a.get(e,{query:a}).then((function(e){t(e.data)})).catch((function(e){n(e)}))}))}}},mounted:function(){},beforeDestroy:function(){},methods:{handleConfigChange:function(e){var a;try{a=JSON.parse(e.target.value||"")||[]}catch(e){this.$Message("配置信息不是一个合法的json数据")}this.config=a}}},l=(t(789),t(1)),s=Object(l.a)(i,n,[],!1,null,"24a052b8",null);s.options.__file="website/page/examples/big-screen/index.vue";var p=s.exports;a.default=p}}]);