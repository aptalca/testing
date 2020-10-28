(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-1d4021b4"],{"08b2":function(t,e,i){},"275e":function(t,e,i){"use strict";var s=i("08b2"),n=i.n(s);n.a},"58f1":function(t,e,i){"use strict";var s=function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")},n=function(){function t(e){var i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};if(s(this,t),!(e instanceof Node))throw"Can't initialize VanillaTilt because "+e+" is not a Node.";this.width=null,this.height=null,this.clientWidth=null,this.clientHeight=null,this.left=null,this.top=null,this.gammazero=null,this.betazero=null,this.lastgammazero=null,this.lastbetazero=null,this.transitionTimeout=null,this.updateCall=null,this.event=null,this.updateBind=this.update.bind(this),this.resetBind=this.reset.bind(this),this.element=e,this.settings=this.extendSettings(i),this.reverse=this.settings.reverse?-1:1,this.glare=t.isSettingTrue(this.settings.glare),this.glarePrerender=t.isSettingTrue(this.settings["glare-prerender"]),this.fullPageListening=t.isSettingTrue(this.settings["full-page-listening"]),this.gyroscope=t.isSettingTrue(this.settings.gyroscope),this.gyroscopeSamples=this.settings.gyroscopeSamples,this.elementListener=this.getElementListener(),this.glare&&this.prepareGlare(),this.fullPageListening&&this.updateClientSize(),this.addEventListeners(),this.updateInitialPosition()}return t.isSettingTrue=function(t){return""===t||!0===t||1===t},t.prototype.getElementListener=function(){if(this.fullPageListening)return window.document;if("string"===typeof this.settings["mouse-event-element"]){var t=document.querySelector(this.settings["mouse-event-element"]);if(t)return t}return this.settings["mouse-event-element"]instanceof Node?this.settings["mouse-event-element"]:this.element},t.prototype.addEventListeners=function(){this.onMouseEnterBind=this.onMouseEnter.bind(this),this.onMouseMoveBind=this.onMouseMove.bind(this),this.onMouseLeaveBind=this.onMouseLeave.bind(this),this.onWindowResizeBind=this.onWindowResize.bind(this),this.onDeviceOrientationBind=this.onDeviceOrientation.bind(this),this.elementListener.addEventListener("mouseenter",this.onMouseEnterBind),this.elementListener.addEventListener("mouseleave",this.onMouseLeaveBind),this.elementListener.addEventListener("mousemove",this.onMouseMoveBind),(this.glare||this.fullPageListening)&&window.addEventListener("resize",this.onWindowResizeBind),this.gyroscope&&window.addEventListener("deviceorientation",this.onDeviceOrientationBind)},t.prototype.removeEventListeners=function(){this.elementListener.removeEventListener("mouseenter",this.onMouseEnterBind),this.elementListener.removeEventListener("mouseleave",this.onMouseLeaveBind),this.elementListener.removeEventListener("mousemove",this.onMouseMoveBind),this.gyroscope&&window.removeEventListener("deviceorientation",this.onDeviceOrientationBind),(this.glare||this.fullPageListening)&&window.removeEventListener("resize",this.onWindowResizeBind)},t.prototype.destroy=function(){clearTimeout(this.transitionTimeout),null!==this.updateCall&&cancelAnimationFrame(this.updateCall),this.reset(),this.removeEventListeners(),this.element.vanillaTilt=null,delete this.element.vanillaTilt,this.element=null},t.prototype.onDeviceOrientation=function(t){if(null!==t.gamma&&null!==t.beta){this.updateElementPosition(),this.gyroscopeSamples>0&&(this.lastgammazero=this.gammazero,this.lastbetazero=this.betazero,null===this.gammazero?(this.gammazero=t.gamma,this.betazero=t.beta):(this.gammazero=(t.gamma+this.lastgammazero)/2,this.betazero=(t.beta+this.lastbetazero)/2),this.gyroscopeSamples-=1);var e=this.settings.gyroscopeMaxAngleX-this.settings.gyroscopeMinAngleX,i=this.settings.gyroscopeMaxAngleY-this.settings.gyroscopeMinAngleY,s=e/this.width,n=i/this.height,o=t.gamma-(this.settings.gyroscopeMinAngleX+this.gammazero),a=t.beta-(this.settings.gyroscopeMinAngleY+this.betazero),r=o/s,l=a/n;null!==this.updateCall&&cancelAnimationFrame(this.updateCall),this.event={clientX:r+this.left,clientY:l+this.top},this.updateCall=requestAnimationFrame(this.updateBind)}},t.prototype.onMouseEnter=function(){this.updateElementPosition(),this.element.style.willChange="transform",this.setTransition()},t.prototype.onMouseMove=function(t){null!==this.updateCall&&cancelAnimationFrame(this.updateCall),this.event=t,this.updateCall=requestAnimationFrame(this.updateBind)},t.prototype.onMouseLeave=function(){this.setTransition(),this.settings.reset&&requestAnimationFrame(this.resetBind)},t.prototype.reset=function(){this.event={clientX:this.left+this.width/2,clientY:this.top+this.height/2},this.element&&this.element.style&&(this.element.style.transform="perspective("+this.settings.perspective+"px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)"),this.resetGlare()},t.prototype.resetGlare=function(){this.glare&&(this.glareElement.style.transform="rotate(180deg) translate(-50%, -50%)",this.glareElement.style.opacity="0")},t.prototype.updateInitialPosition=function(){if(0!==this.settings.startX||0!==this.settings.startY){this.onMouseEnter(),this.fullPageListening?this.event={clientX:(this.settings.startX+this.settings.max)/(2*this.settings.max)*this.clientWidth,clientY:(this.settings.startY+this.settings.max)/(2*this.settings.max)*this.clientHeight}:this.event={clientX:this.left+(this.settings.startX+this.settings.max)/(2*this.settings.max)*this.width,clientY:this.top+(this.settings.startY+this.settings.max)/(2*this.settings.max)*this.height};var t=this.settings.scale;this.settings.scale=1,this.update(),this.settings.scale=t,this.resetGlare()}},t.prototype.getValues=function(){var t=void 0,e=void 0;this.fullPageListening?(t=this.event.clientX/this.clientWidth,e=this.event.clientY/this.clientHeight):(t=(this.event.clientX-this.left)/this.width,e=(this.event.clientY-this.top)/this.height),t=Math.min(Math.max(t,0),1),e=Math.min(Math.max(e,0),1);var i=(this.reverse*(this.settings.max-t*this.settings.max*2)).toFixed(2),s=(this.reverse*(e*this.settings.max*2-this.settings.max)).toFixed(2),n=Math.atan2(this.event.clientX-(this.left+this.width/2),-(this.event.clientY-(this.top+this.height/2)))*(180/Math.PI);return{tiltX:i,tiltY:s,percentageX:100*t,percentageY:100*e,angle:n}},t.prototype.updateElementPosition=function(){var t=this.element.getBoundingClientRect();this.width=this.element.offsetWidth,this.height=this.element.offsetHeight,this.left=t.left,this.top=t.top},t.prototype.update=function(){var t=this.getValues();this.element.style.transform="perspective("+this.settings.perspective+"px) rotateX("+("x"===this.settings.axis?0:t.tiltY)+"deg) rotateY("+("y"===this.settings.axis?0:t.tiltX)+"deg) scale3d("+this.settings.scale+", "+this.settings.scale+", "+this.settings.scale+")",this.glare&&(this.glareElement.style.transform="rotate("+t.angle+"deg) translate(-50%, -50%)",this.glareElement.style.opacity=""+t.percentageY*this.settings["max-glare"]/100),this.element.dispatchEvent(new CustomEvent("tiltChange",{detail:t})),this.updateCall=null},t.prototype.prepareGlare=function(){if(!this.glarePrerender){var t=document.createElement("div");t.classList.add("js-tilt-glare");var e=document.createElement("div");e.classList.add("js-tilt-glare-inner"),t.appendChild(e),this.element.appendChild(t)}this.glareElementWrapper=this.element.querySelector(".js-tilt-glare"),this.glareElement=this.element.querySelector(".js-tilt-glare-inner"),this.glarePrerender||(Object.assign(this.glareElementWrapper.style,{position:"absolute",top:"0",left:"0",width:"100%",height:"100%",overflow:"hidden","pointer-events":"none"}),Object.assign(this.glareElement.style,{position:"absolute",top:"50%",left:"50%","pointer-events":"none","background-image":"linear-gradient(0deg, rgba(255,255,255,0) 0%, rgba(255,255,255,1) 100%)",width:2*this.element.offsetWidth+"px",height:2*this.element.offsetWidth+"px",transform:"rotate(180deg) translate(-50%, -50%)","transform-origin":"0% 0%",opacity:"0"}))},t.prototype.updateGlareSize=function(){this.glare&&Object.assign(this.glareElement.style,{width:""+2*this.element.offsetWidth,height:""+2*this.element.offsetWidth})},t.prototype.updateClientSize=function(){this.clientWidth=window.innerWidth||document.documentElement.clientWidth||document.body.clientWidth,this.clientHeight=window.innerHeight||document.documentElement.clientHeight||document.body.clientHeight},t.prototype.onWindowResize=function(){this.updateGlareSize(),this.updateClientSize()},t.prototype.setTransition=function(){var t=this;clearTimeout(this.transitionTimeout),this.element.style.transition=this.settings.speed+"ms "+this.settings.easing,this.glare&&(this.glareElement.style.transition="opacity "+this.settings.speed+"ms "+this.settings.easing),this.transitionTimeout=setTimeout((function(){t.element.style.transition="",t.glare&&(t.glareElement.style.transition="")}),this.settings.speed)},t.prototype.extendSettings=function(t){var e={reverse:!1,max:15,startX:0,startY:0,perspective:1e3,easing:"cubic-bezier(.03,.98,.52,.99)",scale:1,speed:300,transition:!0,axis:null,glare:!1,"max-glare":1,"glare-prerender":!1,"full-page-listening":!1,"mouse-event-element":null,reset:!0,gyroscope:!0,gyroscopeMinAngleX:-45,gyroscopeMaxAngleX:45,gyroscopeMinAngleY:-45,gyroscopeMaxAngleY:45,gyroscopeSamples:10},i={};for(var s in e)if(s in t)i[s]=t[s];else if(this.element.hasAttribute("data-tilt-"+s)){var n=this.element.getAttribute("data-tilt-"+s);try{i[s]=JSON.parse(n)}catch(o){i[s]=n}}else i[s]=e[s];return i},t.init=function(e,i){e instanceof Node&&(e=[e]),e instanceof NodeList&&(e=[].slice.call(e)),e instanceof Array&&e.forEach((function(e){"vanillaTilt"in e||(e.vanillaTilt=new t(e,i))}))},t}();"undefined"!==typeof document&&(window.VanillaTilt=n,n.init(document.querySelectorAll("[data-tilt]"))),t.exports=n},"83e5":function(t,e,i){"use strict";var s=i("27ff");e["a"]={methods:{...s["a"]}}},e086:function(t,e,i){"use strict";var s=i("9e3c");e["a"]={methods:{contentLink(t){return Object(s["a"])(this.$store.getters,t)}}}},e347:function(t,e,i){"use strict";i.r(e);var s=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-card",{attrs:{to:t.contentLink(t.content),flat:"",tile:"",color:"transparent"},on:{mouseover:function(e){t.hovering=!0},mouseout:function(e){t.hovering=!1}}},[i("v-img",{staticStyle:{position:"relative"},attrs:{"data-tilt":"","aspect-ratio":1/t.inverseAspectRatio,src:t.imgUrl,srcset:t.srcset,sizes:t.sizes}},[i("v-container",{staticClass:"pa-0 ma-0",staticStyle:{position:"relative"},attrs:{"fill-height":"",fluid:""}},[i("v-row",[i("v-col",{attrs:{cols:"12"}},[t.showServer?i("small",{staticClass:"ma-1 server-name"},[t._v(" "+t._s(t.GET_PLEX_SERVER(t.content.machineIdentifier).name))]):t._e(),t.showUnwatchedFlag&&!t.showServer?i("div",{staticClass:"unwatched primary pa-1 text-body-2"},[t._v(" "+t._s(t.unwatchedCount)+" ")]):t._e(),t.content.Media&&t.content.Media.length>1&&!t.showServer?i("div",{staticClass:"pa-1 text-body-2",staticStyle:{position:"absolute",top:"0",right:"0","background-color":"rgba(43, 43, 191, 0.8)","min-width":"16px","min-height":"16px"}},[t._v(" "+t._s(t.content.Media.length)+" ")]):t._e()])],1)],1)],1),t.showProgressBar?i("v-progress-linear",{staticClass:"pa-0 mb-0 ma-0 pt-content-progress",attrs:{rounded:"",height:"4",value:t.unwatchedPercent}}):t._e(),i("v-tooltip",{attrs:{bottom:"","nudge-top":"10"},scopedSlots:t._u([{key:"activator",fn:function(e){var s=e.on,n=e.attrs;return[i("v-row",t._g(t._b({staticClass:"pa-1",staticStyle:{"max-width":"100%"},attrs:{dense:"","no-gutters":"",align:"end"}},"v-row",n,!1),s),[i("v-col",{staticClass:"text-subtitle-2 text-truncate",attrs:{cols:"12"}},[t._v(" "+t._s(t.getTitle(t.content,t.fullTitle))+" ")]),i("v-col",{staticClass:"text-caption text-truncate text--secondary",attrs:{cols:"12"}},[t._v(" "+t._s(t.getSecondaryTitle(t.content,t.fullTitle))+" ")]),t.content.reason?i("v-col",{staticClass:"text-caption text-truncate text--secondary",attrs:{cols:"12"}},[t._v(" "+t._s(t.getReasonTitle(t.content))+" ")]):t._e()],1)]}}])},[i("div",[t._v(t._s(t.getTitle(t.content,t.fullTitle)))]),i("div",{staticClass:"text-caption text--secondary"},[t._v(" "+t._s(t.getSecondaryTitle(t.content,t.fullTitle))+" ")]),t.content.reason?i("div",{staticClass:"text-caption text--secondary"},[t._v(" "+t._s(t.getReasonTitle(t.content))+" ")]):t._e()])],1)},n=[],o=(i("ddb0"),i("2f62")),a=i("58f1"),r=i.n(a),l=i("83e5"),h=i("4eb7"),c=i("e086");const d=[100,200,300,400,600,800,1e3,2e3,4e3,8e3],g=["xl","lg","md","sm"],u=(()=>g.reduce((t,e)=>({...t,[e]:{type:[Boolean,String,Number],default:!1}}),{}))(),p=t=>`calc((100vw - 24px) / (12 / ${t}) - 24px)`,m=(t,e)=>`(min-width: ${t}px) ${p(e)}`;var v={name:"PlexThumbnail",mixins:[l["a"],c["a"]],props:{showServer:{type:Boolean},content:{type:Object,required:!0},type:{type:String,default:""},spoilerFilter:{type:Boolean},fullTitle:{type:Boolean},cols:{type:[String,Number],default:12},...u},data:()=>({hovering:!1}),computed:{...Object(o["c"])("plexservers",["GET_MEDIA_IMAGE_URL","GET_PLEX_SERVER"]),mediaUrl(){return!this.hovering&&this.spoilerFilter&&!this.content.viewCount||"art"===this.type?this.content.art:this.content.thumb},inverseAspectRatio(){return"art"===this.type||"episode"===this.content.type?9/16:1.5},imgUrl(){return this.GET_MEDIA_IMAGE_URL({machineIdentifier:this.content.machineIdentifier,mediaUrl:this.mediaUrl,width:Object(h["b"])(),height:Object(h["a"])()})},srcset(){return d.map(t=>`${this.getImageUrl(t)} ${t}w`).join(" ,")},breakpointMins(){const{xs:t,sm:e,md:i,lg:s}=this.$vuetify.breakpoint.thresholds;return{xl:s,lg:i,md:e,sm:t}},sizes(){const t=g.filter(t=>this[t]).map(t=>m(this.breakpointMins[t],this[t])),e=[...t,p(this.cols)];return e.join(", ")},showUnwatchedFlag(){return"movie"===this.content.type||"episode"===this.content.type?(!this.content.viewCount||0===this.content.viewCount)&&!this.showProgressBar:("season"===this.content.type||"show"===this.content.type)&&this.content.leafCount!==this.content.viewedLeafCount},showProgressBar(){return"movie"===this.content.type||"episode"===this.content.type?this.content.viewOffset&&this.content.viewOffset>0:("season"===this.content.type||"show"===this.content.type)&&(this.content.leafCount!==this.content.viewedLeafCount&&0!==this.content.viewedLeafCount)},unwatchedCount(){return"show"===this.content.type||"season"===this.content.type?this.content.leafCount-this.content.viewedLeafCount:""},unwatchedPercent(){return"movie"===this.content.type||"episode"===this.content.type?this.content.viewOffset/this.content.duration*100:this.content.viewedLeafCount/this.content.leafCount*100}},mounted(){"thumb"===this.type&&r.a.init(this.$el,{reverse:!0,max:7,perspective:1e3,scale:1.01,speed:100,transition:!0,axis:null,reset:!0,easing:"cubic-bezier(.03,.98,.52,.99)",glare:!1,"max-glare":.15,"glare-prerender":!1})},beforeDestroy(){this.$el.vanillaTilt&&this.$el.vanillaTilt.destroy()},methods:{getImageUrl(t){return this.GET_MEDIA_IMAGE_URL({machineIdentifier:this.content.machineIdentifier,mediaUrl:this.mediaUrl,width:t,height:Math.round(t*this.inverseAspectRatio)})}}},f=v,y=(i("275e"),i("2877")),w=i("6544"),b=i.n(w),x=i("b0af"),E=i("62ad"),L=i("a523"),C=i("adda"),M=i("8e36"),T=i("0fd9"),_=i("3a2f"),S=Object(y["a"])(f,s,n,!1,null,"a3d0b2f8",null);e["default"]=S.exports;b()(S,{VCard:x["a"],VCol:E["a"],VContainer:L["a"],VImg:C["a"],VProgressLinear:M["a"],VRow:T["a"],VTooltip:_["a"]})}}]);
//# sourceMappingURL=chunk-1d4021b4-legacy.4a70edc2.js.map