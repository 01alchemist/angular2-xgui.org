System.register(["./xgui-core"], function(exports_1) {
    function exportStar_1(m) {
        var exports = {};
        for(var n in m) {
            if (n !== "default") exports[n] = m[n];
        }
        exports_1(exports);
    }
    return {
        setters:[
            function (xgui_core_1_1) {
                exportStar_1(xgui_core_1_1);
            }],
        execute: function() {
        }
    }
});
//# sourceMappingURL=angular2-xgui.js.map