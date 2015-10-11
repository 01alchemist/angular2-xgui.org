/**
 * Created by Nidin Vinayakan on 10-10-2015.
 */
var Dracula_1 = require("xgui/src/skins/dracula/Dracula");
var SkinManager = (function () {
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
exports.SkinManager = SkinManager;
//# sourceMappingURL=SkinManager.js.map