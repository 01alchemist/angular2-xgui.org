System.register(["@angular/core", "./dracula/Dracula"], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, Dracula_1;
    var SkinManager;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (Dracula_1_1) {
                Dracula_1 = Dracula_1_1;
            }],
        execute: function() {
            SkinManager = (function () {
                function SkinManager() {
                    if (self) {
                        throw {
                            code: 0,
                            name: "Singleton Error",
                            message: "ComponentManager is singleton, someone already created it"
                        };
                    }
                }
                SkinManager.prototype.init = function () {
                    this.skins = [
                        new Dracula_1.Dracula()
                    ];
                    this.defaultSkin = this.skins[0];
                };
                SkinManager = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [])
                ], SkinManager);
                return SkinManager;
            }());
            exports_1("SkinManager", SkinManager);
        }
    }
});
//# sourceMappingURL=SkinManager.js.map