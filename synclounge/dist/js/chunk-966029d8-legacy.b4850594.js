(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-966029d8"],{"0789":function(e,t,r){"use strict";r.d(t,"h",(function(){return c})),r.d(t,"g",(function(){return d})),r.d(t,"c",(function(){return u})),r.d(t,"d",(function(){return h})),r.d(t,"e",(function(){return v})),r.d(t,"f",(function(){return p})),r.d(t,"a",(function(){return f})),r.d(t,"b",(function(){return g}));r("ddb0");var n=r("d9f7");function i(e=[],...t){return Array().concat(e,...t)}function s(e,t="top center 0",r){return{name:e,functional:!0,props:{group:{type:Boolean,default:!1},hideOnLeave:{type:Boolean,default:!1},leaveAbsolute:{type:Boolean,default:!1},mode:{type:String,default:r},origin:{type:String,default:t}},render(t,r){const s="transition"+(r.props.group?"-group":""),a={props:{name:e,mode:r.props.mode},on:{beforeEnter(e){e.style.transformOrigin=r.props.origin,e.style.webkitTransformOrigin=r.props.origin}}};return r.props.leaveAbsolute&&(a.on.leave=i(a.on.leave,e=>e.style.position="absolute")),r.props.hideOnLeave&&(a.on.leave=i(a.on.leave,e=>e.style.display="none")),t(s,Object(n["a"])(r.data,a),r.children)}}}function a(e,t,r="in-out"){return{name:e,functional:!0,props:{mode:{type:String,default:r}},render(r,i){return r("transition",Object(n["a"])(i.data,{props:{name:e},on:t}),i.children)}}}var o=r("80d2"),l=function(e="",t=!1){const r=t?"width":"height",n="offset"+Object(o["F"])(r);return{beforeEnter(e){e._parent=e.parentNode,e._initialStyle={transition:e.style.transition,overflow:e.style.overflow,[r]:e.style[r]}},enter(t){const i=t._initialStyle;t.style.setProperty("transition","none","important"),t.style.overflow="hidden";const s=t[n]+"px";t.style[r]="0",t.offsetHeight,t.style.transition=i.transition,e&&t._parent&&t._parent.classList.add(e),requestAnimationFrame(()=>{t.style[r]=s})},afterEnter:s,enterCancelled:s,leave(e){e._initialStyle={transition:"",overflow:e.style.overflow,[r]:e.style[r]},e.style.overflow="hidden",e.style[r]=e[n]+"px",e.offsetHeight,requestAnimationFrame(()=>e.style[r]="0")},afterLeave:i,leaveCancelled:i};function i(t){e&&t._parent&&t._parent.classList.remove(e),s(t)}function s(e){const t=e._initialStyle[r];e.style.overflow=e._initialStyle.overflow,null!=t&&(e.style[r]=t),delete e._initialStyle}};s("carousel-transition"),s("carousel-reverse-transition");const c=s("tab-transition"),d=s("tab-reverse-transition"),u=(s("menu-transition"),s("fab-transition","center center","out-in")),h=(s("dialog-transition"),s("dialog-bottom-transition"),s("fade-transition")),v=s("scale-transition"),p=(s("scroll-x-transition"),s("scroll-x-reverse-transition"),s("scroll-y-transition"),s("scroll-y-reverse-transition"),s("slide-x-transition")),f=(s("slide-x-reverse-transition"),s("slide-y-transition"),s("slide-y-reverse-transition"),a("expand-transition",l())),g=a("expand-x-transition",l("",!0))},"0bc6":function(e,t,r){},"26a7":function(e,t,r){e.exports=r.p+"img/plexlogo.a33a4eda.png"},"297c":function(e,t,r){"use strict";var n=r("2b0e"),i=r("37c6");t["a"]=n["a"].extend().extend({name:"loadable",props:{loading:{type:[Boolean,String],default:!1},loaderHeight:{type:[Number,String],default:2}},methods:{genProgress(){return!1===this.loading?null:this.$slots.progress||this.$createElement(i["a"],{props:{absolute:!0,color:!0===this.loading||""===this.loading?this.color||"primary":this.loading,height:this.loaderHeight,indeterminate:!0}})}}})},"37c6":function(e,t,r){"use strict";var n=r("8e36");t["a"]=n["a"]},"615b":function(e,t,r){},"6ece":function(e,t,r){},"8ce9":function(e,t,r){},"8e36":function(e,t,r){"use strict";r("6ece");var n=r("0789"),i=r("a9ad"),s=r("fe6c"),a=r("a452"),o=r("7560"),l=r("80d2"),c=r("58df");const d=Object(c["a"])(i["a"],Object(s["b"])(["absolute","fixed","top","bottom"]),a["a"],o["a"]);t["a"]=d.extend({name:"v-progress-linear",props:{active:{type:Boolean,default:!0},backgroundColor:{type:String,default:null},backgroundOpacity:{type:[Number,String],default:null},bufferValue:{type:[Number,String],default:100},color:{type:String,default:"primary"},height:{type:[Number,String],default:4},indeterminate:Boolean,query:Boolean,reverse:Boolean,rounded:Boolean,stream:Boolean,striped:Boolean,value:{type:[Number,String],default:0}},data(){return{internalLazyValue:this.value||0}},computed:{__cachedBackground(){return this.$createElement("div",this.setBackgroundColor(this.backgroundColor||this.color,{staticClass:"v-progress-linear__background",style:this.backgroundStyle}))},__cachedBar(){return this.$createElement(this.computedTransition,[this.__cachedBarType])},__cachedBarType(){return this.indeterminate?this.__cachedIndeterminate:this.__cachedDeterminate},__cachedBuffer(){return this.$createElement("div",{staticClass:"v-progress-linear__buffer",style:this.styles})},__cachedDeterminate(){return this.$createElement("div",this.setBackgroundColor(this.color,{staticClass:"v-progress-linear__determinate",style:{width:Object(l["g"])(this.normalizedValue,"%")}}))},__cachedIndeterminate(){return this.$createElement("div",{staticClass:"v-progress-linear__indeterminate",class:{"v-progress-linear__indeterminate--active":this.active}},[this.genProgressBar("long"),this.genProgressBar("short")])},__cachedStream(){return this.stream?this.$createElement("div",this.setTextColor(this.color,{staticClass:"v-progress-linear__stream",style:{width:Object(l["g"])(100-this.normalizedBuffer,"%")}})):null},backgroundStyle(){const e=null==this.backgroundOpacity?this.backgroundColor?1:.3:parseFloat(this.backgroundOpacity);return{opacity:e,[this.isReversed?"right":"left"]:Object(l["g"])(this.normalizedValue,"%"),width:Object(l["g"])(this.normalizedBuffer-this.normalizedValue,"%")}},classes(){return{"v-progress-linear--absolute":this.absolute,"v-progress-linear--fixed":this.fixed,"v-progress-linear--query":this.query,"v-progress-linear--reactive":this.reactive,"v-progress-linear--reverse":this.isReversed,"v-progress-linear--rounded":this.rounded,"v-progress-linear--striped":this.striped,...this.themeClasses}},computedTransition(){return this.indeterminate?n["d"]:n["f"]},isReversed(){return this.$vuetify.rtl!==this.reverse},normalizedBuffer(){return this.normalize(this.bufferValue)},normalizedValue(){return this.normalize(this.internalLazyValue)},reactive(){return Boolean(this.$listeners.change)},styles(){const e={};return this.active||(e.height=0),this.indeterminate||100===parseFloat(this.normalizedBuffer)||(e.width=Object(l["g"])(this.normalizedBuffer,"%")),e}},methods:{genContent(){const e=Object(l["s"])(this,"default",{value:this.internalLazyValue});return e?this.$createElement("div",{staticClass:"v-progress-linear__content"},e):null},genListeners(){const e=this.$listeners;return this.reactive&&(e.click=this.onClick),e},genProgressBar(e){return this.$createElement("div",this.setBackgroundColor(this.color,{staticClass:"v-progress-linear__indeterminate",class:{[e]:!0}}))},onClick(e){if(!this.reactive)return;const{width:t}=this.$el.getBoundingClientRect();this.internalValue=e.offsetX/t*100},normalize(e){return e<0?0:e>100?100:parseFloat(e)}},render(e){const t={staticClass:"v-progress-linear",attrs:{role:"progressbar","aria-valuemin":0,"aria-valuemax":this.normalizedBuffer,"aria-valuenow":this.indeterminate?void 0:this.normalizedValue},class:this.classes,style:{bottom:this.bottom?0:void 0,height:this.active?Object(l["g"])(this.height):0,top:this.top?0:void 0},on:this.genListeners()};return e("div",t,[this.__cachedStream,this.__cachedBackground,this.__cachedBuffer,this.__cachedBar,this.genContent()])}})},a452:function(e,t,r){"use strict";var n=r("2b0e");function i(e="value",t="change"){return n["a"].extend({name:"proxyable",model:{prop:e,event:t},props:{[e]:{required:!1}},data(){return{internalLazyValue:this[e]}},computed:{internalValue:{get(){return this.internalLazyValue},set(e){e!==this.internalLazyValue&&(this.internalLazyValue=e,this.$emit(t,e))}}},watch:{[e](e){this.internalLazyValue=e}}})}const s=i();t["a"]=s},b0af:function(e,t,r){"use strict";r("615b");var n=r("10d2"),i=r("297c"),s=r("1c87"),a=r("58df");t["a"]=Object(a["a"])(i["a"],s["a"],n["a"]).extend({name:"v-card",props:{flat:Boolean,hover:Boolean,img:String,link:Boolean,loaderHeight:{type:[Number,String],default:4},raised:Boolean},computed:{classes(){return{"v-card":!0,...s["a"].options.computed.classes.call(this),"v-card--flat":this.flat,"v-card--hover":this.hover,"v-card--link":this.isClickable,"v-card--loading":this.loading,"v-card--disabled":this.disabled,"v-card--raised":this.raised,...n["a"].options.computed.classes.call(this)}},styles(){const e={...n["a"].options.computed.styles.call(this)};return this.img&&(e.background=`url("${this.img}") center center / cover no-repeat`),e}},methods:{genProgress(){const e=i["a"].options.methods.genProgress.call(this);return e?this.$createElement("div",{staticClass:"v-card__progress",key:"progress"},[e]):null}},render(e){const{tag:t,data:r}=this.generateRouteLink();return r.style=this.styles,this.isClickable&&(r.attrs=r.attrs||{},r.attrs.tabindex=0),e(t,this.setBackgroundColor(this.color,r),[this.genProgress(),this.$slots.default])}})},c014:function(e,t,r){"use strict";r.r(t);var n=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-container",{attrs:{fluid:""}},[n("PlexOnDeck",{attrs:{"machine-identifier":e.GET_LAST_SERVER_ID},scopedSlots:e._u([{key:"header",fn:function(){return[e._v(" Continue watching from "+e._s(e.GET_LAST_SERVER.name)+" ")]},proxy:!0}])}),n("v-divider"),n("v-subheader",[e._v(" Browse "),n("v-btn",{attrs:{"x-small":"",icon:""},on:{click:e.FETCH_PLEX_DEVICES}},[n("v-icon",[e._v("refresh")])],1)],1),n("v-row",[e.GET_PLEX_SERVERS.length?e._e():n("v-col",{staticClass:"text-h5 primary--text",attrs:{cols:"12"}},[e._v(" No Plex Servers found. Make sure your server owner has shared libraries with you! ")]),e._l(e.GET_PLEX_SERVERS,(function(t){return n("v-col",{key:t.clientIdentifier,attrs:{cols:"12",md:"6",lg:"4",xl:"3"}},[n("v-card",{staticStyle:{background:"rgba(0, 0, 0, 0.6)"},attrs:{to:e.linkWithRoom({name:"PlexServer",params:{machineIdentifier:t.clientIdentifier}}),title:t.name}},[n("v-container",{attrs:{"fill-height":""}},[n("v-row",{attrs:{dense:"",justify:"center",align:"center"}},[n("v-col",{attrs:{cols:"4"}},[n("v-img",{attrs:{src:r("26a7"),height:"110px",contain:""}})],1),n("v-col",{staticClass:"pl-2",attrs:{cols:"8"}},[n("div",[n("div",{staticClass:"text-truncate text-h5"},[e._v(" "+e._s(t.name)+" ")]),n("div",{staticClass:"text--secondary text-caption"},[e._v(" v"+e._s(t.productVersion)+" ")]),n("div",{staticClass:"text-subtitle-2"},[e._v(" Owned by "+e._s(e.ownerOfServer(t))+" ")]),t.chosenConnection?e._e():n("div",{staticClass:"error--text"},[e._v(" Unable to connect. Try disabling your adblocker ")])])])],1)],1)],1)],1)}))],2)],1)},i=[],s=r("2f62"),a=r("f8dc"),o={name:"PlexHome",components:{PlexOnDeck:()=>r.e("chunk-2d0ea162").then(r.bind(null,"8ffd"))},mixins:[a["a"]],data:()=>({abortController:null}),computed:{...Object(s["c"])("plexservers",["GET_LAST_SERVER","GET_LAST_SERVER_ID","GET_PLEX_SERVERS"])},async created(){this.SET_ACTIVE_METADATA(null),await this.fetchRandomBackground()},beforeDestroy(){this.abortRequests()},methods:{...Object(s["b"])("plexservers",["FETCH_AND_SET_RANDOM_BACKGROUND_IMAGE"]),...Object(s["b"])("plex",["FETCH_PLEX_DEVICES"]),...Object(s["d"])(["SET_ACTIVE_METADATA"]),abortRequests(){this.abortController&&(this.abortController.abort(),this.abortController=null)},ownerOfServer({owned:e,sourceTitle:t}){return e?"you":t},async fetchRandomBackgroundCriticalSection(e){await this.FETCH_AND_SET_RANDOM_BACKGROUND_IMAGE({signal:e})},async fetchRandomBackground(){this.abortRequests();const e=new AbortController;this.abortController=e;try{await this.fetchRandomBackgroundCriticalSection(e.signal)}catch(t){if(!e.signal.aborted)throw t}}}},l=o,c=r("2877"),d=r("6544"),u=r.n(d),h=r("8336"),v=r("b0af"),p=r("62ad"),f=r("a523"),g=r("ce7e"),m=r("132d"),_=r("adda"),b=r("0fd9"),y=r("e0c7"),C=Object(c["a"])(l,n,i,!1,null,null,null);t["default"]=C.exports;u()(C,{VBtn:h["a"],VCard:v["a"],VCol:p["a"],VContainer:f["a"],VDivider:g["a"],VIcon:m["a"],VImg:_["a"],VRow:b["a"],VSubheader:y["a"]})},ce7e:function(e,t,r){"use strict";r("8ce9");var n=r("7560");t["a"]=n["a"].extend({name:"v-divider",props:{inset:Boolean,vertical:Boolean},render(e){let t;return this.$attrs.role&&"separator"!==this.$attrs.role||(t=this.vertical?"vertical":"horizontal"),e("hr",{class:{"v-divider":!0,"v-divider--inset":this.inset,"v-divider--vertical":this.vertical,...this.themeClasses},attrs:{role:"separator","aria-orientation":t,...this.$attrs},on:this.$listeners})}})},e0c7:function(e,t,r){"use strict";r("0bc6");var n=r("7560"),i=r("58df");t["a"]=Object(i["a"])(n["a"]).extend({name:"v-subheader",props:{inset:Boolean},render(e){return e("div",{staticClass:"v-subheader",class:{"v-subheader--inset":this.inset,...this.themeClasses},attrs:this.$attrs,on:this.$listeners},this.$slots.default)}})}}]);
//# sourceMappingURL=chunk-966029d8-legacy.b4850594.js.map