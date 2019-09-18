!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t(require("vue")):"function"==typeof define&&define.amd?define(["vue"],t):(e=e||self).PromiseObserver=t(e.Vue)}(this,function(e){"use strict";function t(e){return(t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}e=e&&e.hasOwnProperty("default")?e.default:e;var n=require("deepmerge"),i={normalize:function(t){return e.observable(n(t,this.options))},validate:function(e){Object.keys(this.options).forEach(function(t){e.hasOwnProperty(t)||console.error("".concat(t," doesn't seem to be a valid option. valid options are -> ").concat(e))})}},o={fields:{data:""}};return{name:"PromiseObserver",props:{promise:{required:!0,validator:function(e){return"object"===t(e)||null===e}},options:{type:Object,required:!1,default:function(){return{}}}},data:function(){return{hasFulfilled:!1,hasRejected:!1,mainData:null,response:null,reason:"",isPending:!1}},watch:{promise:{immediate:!0,handler:function(){this.hasPromise&&(this.getReadyForNewOne(),this.observe())}}},computed:{normalizedOptions:function(){return i.validate.apply(this,[o]),i.normalize.apply(this,[o])},hasPromise:function(){return!!this.promise&&(e=this.promise,Boolean(e&&"function"==typeof e.then));var e},state:function(){return this.hasRejected?"rejected":this.hasFulfilled?"fulfilled":void 0}},methods:{getReadyForNewOne:function(){this.hasFulfilled=!1,this.hasRejected=!1,this.response=null,this.mainData=null},observe:function(){var e=this;this.isPending=!0,this.promise.then(function(t){return console.log({response:t}),e.hasFulfilled=!0,e.response=t,e.mainData=(null==t?void 0:t[e.normalizedOptions.fields.data])||t,e.$emit("fulfill",t),t}).catch(function(t){return e.hasRejected=!0,e.reason=t,e.$emit("error",t),t}).finally(function(){e.isPending=!1})}},render:function(e){if(this.hasPromise)return this.$scopedSlots.default({state:this.state,isPending:this.isPending,hasFulfilled:this.hasFulfilled,response:this.response,mainData:this.mainData,hasRejected:this.hasRejected,reason:this.reason})}}});
//# sourceMappingURL=promise-observer.umd.js.map
