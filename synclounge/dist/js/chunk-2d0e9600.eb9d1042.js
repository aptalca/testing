(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0e9600"],{"8ced":function(e,s,n){"use strict";n.r(s);var t=function(){var e=this,s=e.$createElement,n=e._self._c||s;return n("v-text-field",{staticClass:"ml-2 mr-2 pr-1",attrs:{"append-outer-icon":"send",label:e.chatboxLabel,"hide-details":"","single-line":""},on:{"click:append-outer":e.sendMessage},nativeOn:{keyup:function(s){return!s.type.indexOf("key")&&e._k(s.keyCode,"enter",13,s.key,"Enter")?null:e.sendMessage(s)}},model:{value:e.messageToBeSent,callback:function(s){e.messageToBeSent=s},expression:"messageToBeSent"}})},a=[],o=n("2f62"),l={name:"MessageInput",data:()=>({messageToBeSent:""}),computed:{chatboxLabel(){return"Message"}},methods:{...Object(o["b"])("synclounge",["SEND_MESSAGE"]),sendMessage(){""!==this.messageToBeSent&&(console.log("We should send this message: "+this.messageToBeSent),this.SEND_MESSAGE(this.messageToBeSent),this.messageToBeSent="")}}},i=l,c=n("2877"),d=n("6544"),u=n.n(d),r=n("8654"),g=Object(c["a"])(i,t,a,!1,null,null,null);s["default"]=g.exports;u()(g,{VTextField:r["a"]})}}]);
//# sourceMappingURL=chunk-2d0e9600.eb9d1042.js.map