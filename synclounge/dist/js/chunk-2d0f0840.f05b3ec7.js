(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0f0840"],{"9d65":function(t,e,s){"use strict";var o=s("d9bd"),a=s("2b0e");e["a"]=a["a"].extend().extend({name:"bootable",props:{eager:Boolean},data:()=>({isBooted:!1}),computed:{hasContent(){return this.isBooted||this.eager||this.isActive}},watch:{isActive(){this.isBooted=!0}},created(){"lazy"in this.$attrs&&Object(o["e"])("lazy",this)},methods:{showLazyContent(t){return this.hasContent&&t?t():[this.$createElement()]}}})}}]);
//# sourceMappingURL=chunk-2d0f0840.f05b3ec7.js.map