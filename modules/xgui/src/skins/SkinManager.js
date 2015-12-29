System.register(["xgui/src/skins/dracula/Dracula"], function(exports_1) {
    var Dracula_1;
    var SkinManager;
    return {
        setters:[
            function (Dracula_1_1) {
                Dracula_1 = Dracula_1_1;
            }],
        execute: function() {
            SkinManager = (function () {
                function SkinManager() {
                    this.skins = [
                        new Dracula_1.Dracula()
                    ];
                    this.defaultSkin = this.skins[0];
                }
                SkinManager.getInstance = function () {
                    if (!SkinManager.instance) {
                        SkinManager.instance = new SkinManager();
                    }
                    return SkinManager.instance;
                };
                return SkinManager;
            })();
            exports_1("SkinManager", SkinManager);
        }
    }
});
//# sourceMappingURL=SkinManager.js.map