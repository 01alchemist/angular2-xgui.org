System.register(["./src/assets/Assets", "./src/skins/xskin", "./src/controls/xcontrols"], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    function exportStar_1(m) {
        var exports = {};
        for(var n in m) {
            if (n !== "default") exports[n] = m[n];
        }
        exports_1(exports);
    }
    return {
        setters:[
            function (Assets_1_1) {
                exportStar_1(Assets_1_1);
            },
            function (xskin_1_1) {
                exportStar_1(xskin_1_1);
            },
            function (xcontrols_1_1) {
                exportStar_1(xcontrols_1_1);
            }],
        execute: function() {
        }
    }
});
//# sourceMappingURL=xgui-core.js.map