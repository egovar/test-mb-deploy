(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["app"],{0:function(e,t,a){e.exports=a("56d7")},"1b59":function(e,t,a){},"4e13":function(e,t,a){},"56d7":function(e,t,a){"use strict";a.r(t);a("e260"),a("e6cf"),a("cca6"),a("a79d"),a("2d26"),a("6d93");var n=a("2b0e"),s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-app",{staticClass:"app",attrs:{id:"app"}},[a("app-bar"),a("v-main",[a("tabs"),a("router-view")],1)],1)},r=[],i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-app-bar",{staticClass:"app-bar",attrs:{color:"#2042ab",app:""}},[n("v-app-bar-nav-icon",{attrs:{to:"/"}},[n("img",{attrs:{src:a("86d6"),alt:""}})])],1)},o=[],c={name:"app-bar"},l=c,u=(a("bb83"),a("2877")),d=a("6544"),p=a.n(d),_=a("40dc"),m=a("5bc1"),f=Object(u["a"])(l,i,o,!1,null,"97bab7cc",null),v=f.exports;p()(f,{VAppBar:_["a"],VAppBarNavIcon:m["a"]});var h=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-tabs",e._l(e.tabs,(function(t){return a("v-tab",{key:t.key,staticClass:"tabs__item tab",attrs:{to:"/"+t.key,exact:""},on:{contextmenu:function(a){return a.preventDefault(),e.closeTab(t.key)}}},[e._v(" "+e._s(t.name)+" "),""!==t.key&&"accounts"!==t.key?a("button",{staticClass:"tab__close-button",on:{click:function(a){return a.stopPropagation(),a.preventDefault(),e.closeTab(t.key)}}},[a("v-icon",{staticClass:"tab__close-icon",attrs:{small:""}},[e._v("mdi-close-box")])],1):e._e()])})),1)},b=[],g={name:"tabs",computed:{tabs:function(){return this.$store.state.tabs}},methods:{closeTab:function(e){""!==e&&"accounts"!==e&&this.$store.dispatch("closeTabAndRedirect",e)}}},y=g,q=(a("a20f"),a("132d")),C=a("71a3"),x=a("fe57"),k=Object(u["a"])(y,h,b,!1,null,null,null),w=k.exports;p()(k,{VIcon:q["a"],VTab:C["a"],VTabs:x["a"]});var V={components:{"app-bar":v,tabs:w}},$=V,N=a("7496"),j=a("f6c4"),T=Object(u["a"])($,s,r,!1,null,"20b34452",null),I=T.exports;p()(T,{VApp:N["a"],VMain:j["a"]});var O=a("8c4f"),P=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"requests",attrs:{id:"requests"}},[a("create-request-modal"),e.is_loaded?a("v-container",{staticClass:"requests__container"},[a("v-row",{attrs:{justify:"start"}},e._l(e.cards,(function(e){return a("request-card",{key:e.id,attrs:{name:e.client_name,phone:e.person_phone,num:e.num,product:"stg"in e?e.stg[0]:"",state:e.state,dadd:e.dadd,card_id:e.id}})})),1)],1):a("loading-placeholders")],1)},R=[],S=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-col",{attrs:{cols:"12",sm:"4",md:"3","align-self":"stretch"}},[a("v-card",{staticClass:"request-card",class:"request-card_"+e.state,attrs:{elevation:"2",to:"/requests/"+e.card_id,height:"100%"}},[a("span",{staticClass:"request-card__number"},[e._v("№"+e._s(e.num)+" ")]),a("v-card-title",{staticClass:"request-card__title"},[e._v(" "+e._s(e.name)+" ")]),a("v-card-subtitle",{staticClass:"request-card__subtitle"},[e._v(" +"+e._s(e.phone)+" ")]),a("v-card-text",[e._v(e._s(e.product))]),a("span",{staticClass:"request-card__add-date"},[e._v(e._s(e.add_date_str))])],1)],1)},A=[],D=a("b9b9"),M=a.n(D),E={name:"request-card",props:["name","phone","product","num","state","dadd","card_id"],computed:{add_date_str:function(){return M()(Date.parse(this.dadd),"dd.mm.yyyy - HH:MM")}}},H=E,J=(a("cccc"),a("b0af")),B=a("99d9"),z=a("62ad"),U=Object(u["a"])(H,S,A,!1,null,"84165600",null),F=U.exports;p()(U,{VCard:J["a"],VCardSubtitle:B["a"],VCardText:B["b"],VCardTitle:B["c"],VCol:z["a"]});var L=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("transition",{attrs:{name:"fade"}},[a("div",{staticClass:"loading-placeholders"},[a("div",{staticClass:"loading-placeholders__container"},[a("v-progress-circular",{attrs:{size:"60",width:"10",color:"rgb(0, 87, 255)",indeterminate:""}}),a("v-progress-circular",{attrs:{size:"40",width:"7",color:"rgb(255, 92, 0)",indeterminate:""}}),a("v-progress-circular",{attrs:{size:"60",width:"10",color:"#82d641",indeterminate:""}})],1)])])},G=[],K={name:"loading-placeholders"},Q=K,W=(a("fbed"),a("490a")),X=Object(u["a"])(Q,L,G,!1,null,"54fdf7aa",null),Y=X.exports;p()(X,{VProgressCircular:W["a"]});var Z=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-dialog",{staticClass:"create-request-modal",attrs:{fullscreen:"",transition:"dialog-bottom-transition"},scopedSlots:e._u([{key:"activator",fn:function(t){var n=t.on;return[a("v-btn",e._g({staticClass:"create-request-modal__btn",attrs:{fab:"",color:"rgb(32, 66, 171)",dark:""}},n),[a("v-icon",[e._v("mdi-file-plus")])],1)]}},{key:"default",fn:function(t){return[a("v-card",[a("v-toolbar",{attrs:{color:"rgb(32, 66, 171)",dark:""}},[a("v-btn",{attrs:{icon:"",dark:""},on:{click:function(e){t.value=!1}}},[a("v-icon",[e._v("mdi-close")])],1),a("v-toolbar-title",[e._v("Новая заявка")]),a("v-spacer"),a("v-btn",{attrs:{text:"",dark:""},on:{click:function(a){e.save(),e.$refs.form.validate()&&(t.value=!1)}}},[e._v("Сохранить")])],1),a("v-container",[a("v-form",{ref:"form"},[a("v-text-field",{attrs:{label:"Имя клиента",rules:e.rule},model:{value:e.person_fullname,callback:function(t){e.person_fullname=t},expression:"person_fullname"}}),a("v-text-field",{attrs:{label:"Номер телефона",rules:e.rule},model:{value:e.person_phone,callback:function(t){e.person_phone=t},expression:"person_phone"}}),a("v-text-field",{attrs:{label:"email",rules:e.rule},model:{value:e.person_email,callback:function(t){e.person_email=t},expression:"person_email"}}),a("v-text-field",{attrs:{label:"Название компании"},model:{value:e.company_name,callback:function(t){e.company_name=t},expression:"company_name"}}),a("v-text-field",{attrs:{label:"Организационно-правовая форма",rules:e.rule},model:{value:e.company_type,callback:function(t){e.company_type=t},expression:"company_type"}}),a("v-text-field",{attrs:{label:"ИНН",rules:e.rule},model:{value:e.inn,callback:function(t){e.inn=t},expression:"inn"}}),a("v-text-field",{attrs:{label:"Продукт",rules:e.rule},model:{value:e.stg[0],callback:function(t){e.$set(e.stg,0,t)},expression:"stg[0]"}}),a("h3",[e._v("Дополнительная информация:")]),a("v-text-field",{attrs:{label:"Партнёр"},model:{value:e.extra.partner.client_name,callback:function(t){e.$set(e.extra.partner,"client_name",t)},expression:"extra.partner.client_name"}}),a("v-text-field",{attrs:{label:"ИНН партнёра"},model:{value:e.extra.partner.inn,callback:function(t){e.$set(e.extra.partner,"inn",t)},expression:"extra.partner.inn"}}),a("v-text-field",{attrs:{label:"Источник заявки"},model:{value:e.extra.crm_source_type,callback:function(t){e.$set(e.extra,"crm_source_type",t)},expression:"extra.crm_source_type"}}),a("v-btn",{staticClass:"create-request-modal__save-btn_bottom",on:{click:function(a){e.save(),e.$refs.form.validate()&&(t.value=!1)}}},[e._v(" Сохранить ")])],1)],1)],1)]}}])})},ee=[],te={name:"create-request-modal",data:function(){return{rule:[function(e){return!!e||"Обязательное поле"}],person_fullname:"",person_phone:"",person_email:"",inn:"",company_name:"",company_type:"",stg:[""],extra:{partner:{client_name:"",inn:""},crm_source_type:""}}},methods:{save:function(){if(this.$refs.form.validate()){var e=this.$store.getters.getNewLocalId;this.$store.dispatch("createNewRequest",{id:e,num:this.$store.getters.getNewNum,dadd:(new Date).toISOString(),lastUpd:(new Date).toISOString(),state:"init",person_fullname:this.person_fullname,client_name:this.person_fullname,person_phone:this.person_phone,person_email:this.person_email,inn:this.inn,company_name:this.company_name,company_type:this.company_type,stg:this.stg,extra:this.extra})}}}},ae=te,ne=(a("7427"),a("8336")),se=a("a523"),re=a("169a"),ie=a("4bd4"),oe=a("2fa4"),ce=a("8654"),le=a("71d9"),ue=a("2a7f"),de=Object(u["a"])(ae,Z,ee,!1,null,"a6b4e1f6",null),pe=de.exports;p()(de,{VBtn:ne["a"],VCard:J["a"],VContainer:se["a"],VDialog:re["a"],VForm:ie["a"],VIcon:q["a"],VSpacer:oe["a"],VTextField:ce["a"],VToolbar:le["a"],VToolbarTitle:ue["a"]});var _e={name:"Requests",mounted:function(){var e=this;this.$store.dispatch("getRequestCards").then((function(){return e.is_loaded=!0}))},data:function(){return{is_loaded:!1}},computed:{cards:function(){return this.$store.getters.getRequestCards}},components:{"request-card":F,"loading-placeholders":Y,"create-request-modal":pe}},me=_e,fe=(a("f720"),a("0fd9")),ve=Object(u["a"])(me,P,R,!1,null,"82059526",null),he=ve.exports;p()(ve,{VContainer:se["a"],VRow:fe["a"]});var be=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-container",{staticClass:"request-page"},[a("v-btn",{staticClass:"request-page__edit-btn",attrs:{fab:"",color:"rgb(32, 66, 171)",dark:""},on:{click:e.editCard}},[e.fieldset_disabled?a("v-icon",[e._v("mdi-pencil")]):a("v-icon",[e._v("mdi-content-save")])],1),e.is_loaded?a("form",{on:{submit:function(e){e.preventDefault()}}},[a("h2",{staticClass:"request-page__title"},[e._v("№"+e._s(e.request_data.num))]),a("fieldset",{staticClass:"request-page__fieldset",attrs:{disabled:e.fieldset_disabled}},[a("label",{staticClass:"request-page__label",attrs:{for:"client_name"}},[e._v("Имя клиента:")]),a("input",{directives:[{name:"model",rawName:"v-model",value:e.fullname,expression:"fullname"}],staticClass:"request-page__input",attrs:{placeholder:e.placeholder,type:"text",id:"client_name"},domProps:{value:e.fullname},on:{input:function(t){t.target.composing||(e.fullname=t.target.value)}}}),a("label",{staticClass:"request-page__label",attrs:{for:"client_phone"}},[e._v("Телефонный номер:")]),a("input",{directives:[{name:"model",rawName:"v-model",value:e.phone,expression:"phone"}],staticClass:"request-page__input",attrs:{placeholder:e.placeholder,type:"text",id:"client_phone"},domProps:{value:e.phone},on:{input:function(t){t.target.composing||(e.phone=t.target.value)}}}),a("label",{staticClass:"request-page__label",attrs:{for:"client_mail"}},[e._v("Адрес электронной почты:")]),a("input",{directives:[{name:"model",rawName:"v-model",value:e.email,expression:"email"}],staticClass:"request-page__input",attrs:{placeholder:e.placeholder,type:"text",id:"client_mail"},domProps:{value:e.email},on:{input:function(t){t.target.composing||(e.email=t.target.value)}}}),a("label",{staticClass:"request-page__label",attrs:{for:"company_name"}},[e._v("Название компании:")]),a("input",{directives:[{name:"model",rawName:"v-model",value:e.company_name,expression:"company_name"}],staticClass:"request-page__input",attrs:{placeholder:e.placeholder,type:"text",id:"company_name"},domProps:{value:e.company_name},on:{input:function(t){t.target.composing||(e.company_name=t.target.value)}}}),a("label",{staticClass:"request-page__label",attrs:{for:"company_type"}},[e._v("Организационно-правовая форма:")]),a("input",{directives:[{name:"model",rawName:"v-model",value:e.company_type,expression:"company_type"}],staticClass:"request-page__input",attrs:{placeholder:e.placeholder,type:"text",id:"company_type"},domProps:{value:e.company_type},on:{input:function(t){t.target.composing||(e.company_type=t.target.value)}}}),a("label",{staticClass:"request-page__label",attrs:{for:"inn"}},[e._v("ИНН:")]),a("input",{directives:[{name:"model",rawName:"v-model",value:e.inn,expression:"inn"}],staticClass:"request-page__input",attrs:{placeholder:e.placeholder,type:"text",id:"inn"},domProps:{value:e.inn},on:{input:function(t){t.target.composing||(e.inn=t.target.value)}}}),a("label",{staticClass:"request-page__label",attrs:{for:"product"}},[e._v("Продукт:")]),a("input",{directives:[{name:"model",rawName:"v-model",value:e.product,expression:"product"}],staticClass:"request-page__input",attrs:{placeholder:e.placeholder,type:"text",id:"product"},domProps:{value:e.product},on:{input:function(t){t.target.composing||(e.product=t.target.value)}}}),a("label",{staticClass:"request-page__label",attrs:{for:"state"}},[e._v("Cтатус заявки:")]),a("select",{directives:[{name:"model",rawName:"v-model",value:e.request_state,expression:"request_state"}],staticClass:"request-page__input request-page__input_select",class:"request-page__input_"+e.request_state,attrs:{id:"state"},on:{change:function(t){var a=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){var t="_value"in e?e._value:e.value;return t}));e.request_state=t.target.multiple?a:a[0]}}},[a("option",{attrs:{value:"init"}},[e._v("В работе")]),a("option",{attrs:{value:"fin"}},[e._v("Успешно завершена")]),a("option",{attrs:{value:"err"}},[e._v("Отменена")])])]),a("h3",{staticClass:"request-page__subtitle"},[e._v("Дополнительная информация")]),a("fieldset",{staticClass:"request-page__fieldset",attrs:{disabled:e.fieldset_disabled}},[a("label",{staticClass:"request-page__label",attrs:{for:"partner"}},[e._v("Партнер:")]),a("input",{directives:[{name:"model",rawName:"v-model",value:e.partner_name,expression:"partner_name"}],staticClass:"request-page__input",attrs:{placeholder:e.placeholder,type:"text",id:"partner"},domProps:{value:e.partner_name},on:{input:function(t){t.target.composing||(e.partner_name=t.target.value)}}}),a("label",{staticClass:"request-page__label",attrs:{for:"partner_inn"}},[e._v("ИНН партнера:")]),a("input",{directives:[{name:"model",rawName:"v-model",value:e.partner_inn,expression:"partner_inn"}],staticClass:"request-page__input",attrs:{placeholder:e.placeholder,type:"text",id:"partner_inn"},domProps:{value:e.partner_inn},on:{input:function(t){t.target.composing||(e.partner_inn=t.target.value)}}}),a("label",{staticClass:"request-page__label",attrs:{for:"crm"}},[e._v("Источник заявки:")]),a("input",{directives:[{name:"model",rawName:"v-model",value:e.crm,expression:"crm"}],staticClass:"request-page__input",attrs:{placeholder:e.placeholder,type:"text",id:"crm"},domProps:{value:e.crm},on:{input:function(t){t.target.composing||(e.crm=t.target.value)}}})]),a("span",{staticClass:"request-page__time"},[e._v(" Заявка принята: "+e._s(e.add_time)+", последнее обновление: "+e._s(e.last_upd_time)+" ")])]):a("loading-placeholders")],1)},ge=[],ye=(a("c740"),a("caad"),a("2532"),{name:"RequestPage",props:["id"],data:function(){return{is_loaded:!1,fieldset_disabled:!0,request_data:this.$store.state.request_page_info}},computed:{placeholder:function(){return this.fieldset_disabled?"Не указано":"Введите значение"},fullname:{get:function(){return this.request_data.person_fullname},set:function(e){this.request_data.person_fullname=e}},phone:{get:function(){return this.request_data.person_phone},set:function(e){this.request_data.person_phone=e}},email:{get:function(){return this.request_data.person_email},set:function(e){this.request_data.person_email=e}},company_name:{get:function(){return this.request_data.company_name},set:function(e){this.request_data.company_name=e}},company_type:{get:function(){return this.request_data.company_type},set:function(e){this.request_data.company_type=e}},inn:{get:function(){return this.request_data.inn},set:function(e){this.request_data.inn=e}},product:{get:function(){return"stg"in this.request_data&&this.request_data.stg[0]||""},set:function(e){this.request_data.stg=[e]}},request_state:{get:function(){return this.request_data.state},set:function(e){this.request_data.state=e}},partner_name:{get:function(){var e,t,a;return(null===(e=this.request_data)||void 0===e||null===(t=e.extra)||void 0===t||null===(a=t.partner)||void 0===a?void 0:a.client_name)||""},set:function(e){this.request_data.extra.partner.client_name=e}},partner_inn:{get:function(){var e,t,a;return(null===(e=this.request_data)||void 0===e||null===(t=e.extra)||void 0===t||null===(a=t.partner)||void 0===a?void 0:a.inn)||""},set:function(e){this.request_data.extra.partner.inn=e}},crm:{get:function(){var e,t;return(null===(e=this.request_data)||void 0===e||null===(t=e.extra)||void 0===t?void 0:t.crm_source_type)||""},set:function(e){this.request_data.extra.crm_source_type=e}},add_time:function(){return M()(Date.parse(this.request_data.dadd),"dd.mm.yyyy - HH:MM")},last_upd_time:function(){return M()(Date.parse(this.request_data.lastUpd),"dd.mm.yyyy - HH:MM")}},methods:{editCard:function(){this.fieldset_disabled||this.$store.commit("editCard",{id:this.id,num:this.request_data.num,dadd:this.request_data.dadd,lastUpd:(new Date).toISOString(),state:this.request_state,stg:[this.product],client_name:this.fullname,person_fullname:this.fullname,person_phone:this.phone,person_email:this.email,inn:this.inn,company_name:this.company_name,company_type:this.company_type,extra:{partner:{client_name:this.partner_name,inn:this.partner_inn},crm_source_type:this.crm}}),this.fieldset_disabled=!this.fieldset_disabled}},mounted:function(){var e=this;this.$store.dispatch("getRequestInfo",this.id).then((function(){e.is_loaded=!0,e.request_data=e.$store.state.request_page_info;var t=e.$store.state.tabs.findIndex((function(t){return t.key==="requests/"+e.id}));-1===t&&e.$store.commit("addTab",{name:e.request_data.num,key:"requests/"+e.id,temp:e.id.includes("local")})})).catch((function(){alert("Страница не найдена"),e.$router.push("/")}))},watch:{id:function(e,t){var a=this;e!==t&&(this.is_loaded=!1,this.$store.dispatch("getRequestInfo",this.id).then((function(){a.is_loaded=!0,a.request_data=a.$store.state.request_page_info})))}},components:{"loading-placeholders":Y}}),qe=ye,Ce=(a("6a84"),Object(u["a"])(qe,be,ge,!1,null,"29dad282",null)),xe=Ce.exports;p()(Ce,{VBtn:ne["a"],VContainer:se["a"],VIcon:q["a"]});var ke=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"accounts"},[e.is_loaded?a("v-container",{staticClass:"accounts__container"},[a("v-row",{attrs:{justify:"start"}},e._l(e.cards,(function(e){return a("account-card",{key:e.id,attrs:{client:e.client_name,phone:e.person_phone,state:e.meeting_state,city:e.client_city,place:e.meeting_place,date:e.meeting_date,product:"stg"in e?e.stg[0]:"",bank:e.bank_name}})})),1)],1):a("loading-placeholders")],1)},we=[],Ve=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-col",{attrs:{"align-self":"stretch",md:"3",sm:"4",cols:"12"}},[a("v-card",{staticClass:"account-card",attrs:{elevation:"2",height:"100%"}},[a("v-card-title",{staticClass:"account-card__title"},[e._v(" "+e._s(e.client)+" ")]),a("v-card-subtitle",{staticClass:"account-card__subtitle"},[e._v(" +"+e._s(e.phone)+" ")]),a("v-card-text",{staticClass:"account-card__info"},[a("span",{staticClass:"account-card__product"},[e._v(e._s(e.product))]),a("span",{staticClass:"account-card__bank"},[e._v(e._s(e.bank))]),a("v-chip",{class:"account-card__chip_"+e.state},[e._v(e._s(e.state))]),a("span",{staticClass:"account-card__meeting-place"},[e._v(e._s(e.city)+", "+e._s(e.place))]),a("span",{staticClass:"account-card__meeting-date"},[e._v(e._s(e.meeting_date))])],1)],1)],1)},$e=[],Ne={name:"account-card",props:["client","phone","bank","city","date","place","product","state"],computed:{meeting_date:function(){return M()(Date.parse(this.date),"dd.mm.yyyy - HH:MM")}}},je=Ne,Te=(a("efc5"),a("cc20")),Ie=Object(u["a"])(je,Ve,$e,!1,null,"8fdacca8",null),Oe=Ie.exports;p()(Ie,{VCard:J["a"],VCardSubtitle:B["a"],VCardText:B["b"],VCardTitle:B["c"],VChip:Te["a"],VCol:z["a"]});var Pe={name:"Accounts",data:function(){return{is_loaded:!1}},mounted:function(){var e=this;this.$store.dispatch("getAccountCards").then((function(){return e.is_loaded=!0}))},computed:{cards:function(){return this.$store.state.account_cards}},components:{"loading-placeholders":Y,"account-card":Oe}},Re=Pe,Se=Object(u["a"])(Re,ke,we,!1,null,"f3907eb4",null),Ae=Se.exports;p()(Se,{VContainer:se["a"],VRow:fe["a"]}),n["a"].use(O["a"]);var De=[{path:"/",name:"requests",component:he},{path:"/requests/:id",component:xe,props:!0},{path:"/accounts",name:"accounts",component:Ae}],Me=new O["a"]({mode:"history",base:"/",routes:De}),Ee=Me,He=a("2909"),Je=(a("4de4"),a("99af"),a("d81d"),a("a434"),a("d3b7"),a("2f62"));n["a"].use(Je["a"]);var Be=function(){var e=JSON.parse(localStorage.getItem("tabs"));return null==e||(null===e||void 0===e?void 0:e.length)<2?(localStorage.clear(),localStorage.setItem("tabs",JSON.stringify([{name:"Заявки",key:""},{name:"Счета",key:"accounts"}])),[{name:"Заявки",key:""},{name:"Счета",key:"accounts"}]):e},ze=new Je["a"].Store({state:{tabs:Be(),cards:[],local_cards:[],request_page_info:{},account_cards:[]},getters:{getRequestCards:function(e){var t=e.local_cards,a=e.cards,n=[];return t.concat(a).filter((function(e){var t=e.id,a=n.includes(t);return!a&&(n.push(t),!0)}))},getNewNum:function(e){var t=e.local_cards,a=e.cards,n=[].concat(Object(He["a"])(a),Object(He["a"])(t)).map((function(e){return e.num}));return Math.max.apply(Math,Object(He["a"])(n))+1},getNewLocalId:function(e){var t=e.local_cards;return"local"+(t.length+1)}},mutations:{setRequestCards:function(e,t){e.cards=t},setRequestPage:function(e,t){e.request_page_info=t},addTab:function(e,t){e.tabs.push(t),localStorage.setItem("tabs",JSON.stringify(e.tabs.filter((function(e){return!0!==e.temp}))))},closeTab:function(e,t){e.tabs.splice(t,1),localStorage.setItem("tabs",JSON.stringify(e.tabs.filter((function(e){return!0!==e.temp}))))},editCard:function(e,t){var a=e.local_cards.findIndex((function(e){return e.id===t.id}));-1===a?e.local_cards.push(t):e.local_cards[a]=t},setAccountCards:function(e,t){e.account_cards=t}},actions:{getRequestCards:function(e){var t=e.commit;return new Promise((function(e,a){fetch("https://my-json-server.typicode.com/plushevy/demo/list").then((function(n){n.ok?n.json().then((function(a){t("setRequestCards",a),e()})):a()}))}))},getRequestInfo:function(e,t){var a=e.state.local_cards,n=e.commit;return new Promise((function(e,s){var r=a.findIndex((function(e){return e.id===t}));-1===r?fetch("https://my-json-server.typicode.com/plushevy/demo/orders/"+t).then((function(t){t.ok?t.json().then((function(t){n("setRequestPage",t),e()})):s()})):(n("setRequestPage",a[r]),e())}))},closeTabAndRedirect:function(e,t){var a=e.state.tabs,n=e.commit,s=a.findIndex((function(e){return e.key===t}));"/"+a[s].key===Ee.history.current.path?Ee.push({path:"/"+a[s-1].key}).then((function(){n("closeTab",s)})):n("closeTab",s)},createNewRequest:function(e,t){var a=e.commit;return new Promise((function(e){a("editCard",t),e()}))},getAccountCards:function(e){var t=e.commit;return new Promise((function(e,a){fetch("https://my-json-server.typicode.com/plushevy/demo/meetings").then((function(n){n.ok?n.json().then((function(a){t("setAccountCards",a),e()})):a()}))}))}},modules:{}}),Ue=a("f309");n["a"].use(Ue["a"]);var Fe=new Ue["a"]({});n["a"].config.productionTip=!1,new n["a"]({router:Ee,store:ze,vuetify:Fe,render:function(e){return e(I)}}).$mount("#app")},"6a84":function(e,t,a){"use strict";a("6e3b")},"6e3b":function(e,t,a){},7427:function(e,t,a){"use strict";a("e4a4")},"86d6":function(e,t,a){e.exports=a.p+"img/mb_logo.3f7ef98d.svg"},"8de1":function(e,t,a){},a20f:function(e,t,a){"use strict";a("f3fc")},a9ec:function(e,t,a){},bb83:function(e,t,a){"use strict";a("8de1")},bc54:function(e,t,a){},cccc:function(e,t,a){"use strict";a("bc54")},e4a4:function(e,t,a){},efc5:function(e,t,a){"use strict";a("1b59")},f3fc:function(e,t,a){},f720:function(e,t,a){"use strict";a("a9ec")},fbed:function(e,t,a){"use strict";a("4e13")}},[[0,"runtime","npm.core-js","npm.vuetify","npm.babel","npm.dateformat","npm.vue-loader","npm.vue-router","npm.vue","npm.vuetify-loader","npm.vuex","npm.webpack","npm.whatwg-fetch"]]]);
//# sourceMappingURL=app.7e163ded.js.map