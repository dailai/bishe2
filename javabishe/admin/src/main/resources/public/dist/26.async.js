(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[26],{YiZ1:function(e,t,a){e.exports={avatarHolder:"antd-pro\\pages\\-account\\-center\\-center-avatarHolder",name:"antd-pro\\pages\\-account\\-center\\-center-name",detail:"antd-pro\\pages\\-account\\-center\\-center-detail",title:"antd-pro\\pages\\-account\\-center\\-center-title",group:"antd-pro\\pages\\-account\\-center\\-center-group",address:"antd-pro\\pages\\-account\\-center\\-center-address",tagsTitle:"antd-pro\\pages\\-account\\-center\\-center-tagsTitle",teamTitle:"antd-pro\\pages\\-account\\-center\\-center-teamTitle",tags:"antd-pro\\pages\\-account\\-center\\-center-tags",team:"antd-pro\\pages\\-account\\-center\\-center-team",tabsCard:"antd-pro\\pages\\-account\\-center\\-center-tabsCard"}},zMb4:function(e,t,a){"use strict";var n=a("TqRt"),r=a("284h");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,a("14J3");var l=n(a("BMrR"));a("jCWc");var u=n(a("kPKH"));a("IzEo");var c=n(a("bx4M"));a("/zsF");var d,s,i=n(a("PArb")),o=n(a("RIqP")),f=n(a("lwsE")),p=n(a("W8MJ")),g=n(a("a1gu")),m=n(a("Nsbk")),v=n(a("7W2i")),h=n(a("PJYZ")),b=r(a("q1tI")),E=a("MuoO"),w=(n(a("mOP9")),n(a("usdK")),n(a("v99g"))),y=n(a("YiZ1")),T=(d=(0,E.connect)(function(e){var t=e.loading,a=e.adminUser;return{currentUser:a.currentUser,currentUserLoading:t.effects["adminUser/fetchCurrent"]}}),d(s=function(e){function t(){var e,a;(0,f.default)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return a=(0,g.default)(this,(e=(0,m.default)(t)).call.apply(e,[this].concat(r))),a.state={newTags:[],inputVisible:!1,inputValue:""},a.showInput=function(){a.setState({inputVisible:!0},function(){return a.input.focus()})},a.saveInputRef=function(e){a.input=e},a.handleInputChange=function(e){a.setState({inputValue:e.target.value})},a.handleInputConfirm=function(){var e=(0,h.default)((0,h.default)(a)),t=e.state,n=t.inputValue,r=t.newTags;n&&0===r.filter(function(e){return e.label===n}).length&&(r=(0,o.default)(r).concat([{key:"new-".concat(r.length),label:n}])),a.setState({newTags:r,inputVisible:!1,inputValue:""})},a}return(0,v.default)(t,e),(0,p.default)(t,[{key:"componentDidMount",value:function(){var e=this.props.dispatch;e({type:"adminUser/fetchCurrent"})}},{key:"render",value:function(){var e=this.state,t=(e.newTags,e.inputVisible,e.inputValue,this.props),a=(t.listLoading,t.currentUser),n=t.currentUserLoading;t.match,t.location,t.children;return b.default.createElement(w.default,{className:y.default.userCenter},b.default.createElement(l.default,{gutter:24},b.default.createElement(u.default,{lg:7,md:24},b.default.createElement(c.default,{bordered:!1,style:{marginBottom:24},loading:n},a&&Object.keys(a).length?b.default.createElement("div",null,b.default.createElement("div",{className:y.default.avatarHolder},b.default.createElement("img",{alt:"",src:a.avatar}),b.default.createElement("div",{className:y.default.name},a.name),b.default.createElement("div",null,a.signature)),b.default.createElement("div",{className:y.default.detail},b.default.createElement("p",null,b.default.createElement("i",{className:y.default.title}),a.title)),b.default.createElement(i.default,{dashed:!0}),b.default.createElement(i.default,{style:{marginTop:16},dashed:!0})):"loading..."))))}}]),t}(b.PureComponent))||s),C=T;t.default=C}}]);