"use strict";function _interopDefault(e){return e&&"object"==typeof e&&"default"in e?e.default:e}var Vue=_interopDefault(require("vue")),deepMerge=require("deepmerge"),isPromise=function(e){return Boolean(e&&"function"==typeof e.then)},optionsHelpers={normalize:function(e){return Vue.observable(deepMerge(e,this.options))},validate:function(e){Object.keys(this.options).forEach(function(t){e.hasOwnProperty(t)||console.error("".concat(t," doesn't seem to be a valid option. valid options are -> ").concat(e))})}},defaultOptions={fields:{data:"data"}},vueRouter={name:"PromiseObserver",props:{promise:{type:[Object],required:!0,validator:function(e){return isPromise(e)}}},data:function(){return{hasFulfilled:!1,hasRejected:!1,mainData:null,response:null,reason:"",isPending:!1}},watch:{promise:{immediate:!0,handler:function(){this.hasPromise&&(this.getReadyForNewOne(),this.observe())}}},computed:{normalizedOptions:function(){return optionsHelpers.validate.apply(this,[defaultOptions]),optionsHelpers.normalize.apply(this,[defaultOptions])},hasPromise:function(){return!!this.promise&&isPromise(this.promise)},state:function(){return this.hasRejected?"rejected":this.hasFulfilled?"fulfilled":void 0}},methods:{getReadyForNewOne:function(){this.hasFulfilled=!1,this.hasRejected=!1,this.response=null,this.mainData=null},observe:function(){var e=this;this.isPending=!0,this.promise.then(function(t){e.hasFulfilled=!0,e.response=t,e.mainData=null==t?void 0:t[e.normalizedOptions.fields.data]}).catch(function(t){e.hasRejected=!0,e.reason=t}).finally(function(){e.isPending=!1})}},render:function(e){if(this.hasPromise)return this.$scopedSlots.default({state:this.state,isPending:this.isPending,hasFulfilled:this.hasFulfilled,response:this.response,mainData:this.mainData,hasRejected:this.hasRejected,reason:this.reason})}};module.exports=vueRouter;
//# sourceMappingURL=vue-router.js.map
