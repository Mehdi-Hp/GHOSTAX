!function(e,n){"object"==typeof exports&&"undefined"!=typeof module?n(exports):"function"==typeof define&&define.amd?define(["exports"],n):n((e=e||self).VueRouter={})}(this,function(e){"use strict";var n=require("obj-traverse/lib/obj-traverse");e.findRawRoute=function(e,t){var o,r=null==e?void 0:null===(o=e.options)||void 0===o?void 0:o.routes;if(!r)return null;var i=null;return r.some(function(e){return i=n.findFirst(e,"children",t)}),i||null},Object.defineProperty(e,"__esModule",{value:!0})});
//# sourceMappingURL=vue-router.umd.js.map