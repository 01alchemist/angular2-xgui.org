System.register(["./Skin", "./dracula/Dracula", "./SkinManager"], function(exports_1) {
    function exportStar_1(m) {
        var exports = {};
        for(var n in m) {
            if (n !== "default") exports[n] = m[n];
        }
        exports_1(exports);
    }
    return {
        setters:[
            function (Skin_1_1) {
                exportStar_1(Skin_1_1);
            },
            function (Dracula_1_1) {
                exportStar_1(Dracula_1_1);
            },
            function (SkinManager_1_1) {
                exportStar_1(SkinManager_1_1);
            }],
        execute: function() {
        }
    }
});
//# sourceMappingURL=xskin.js.map