///<reference path="../typings/angular2/angular2.d.ts" />
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") return Reflect.decorate(decorators, target, key, desc);
    switch (arguments.length) {
        case 2: return decorators.reduceRight(function(o, d) { return (d && d(o)) || o; }, target);
        case 3: return decorators.reduceRight(function(o, d) { return (d && d(target, key)), void 0; }, void 0);
        case 4: return decorators.reduceRight(function(o, d) { return (d && d(target, key, o)) || o; }, desc);
    }
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var angular2_1 = require("angular2/angular2");
var angular2_xgui_1 = require("xgui/angular2-xgui");
var GUIDemo = (function () {
    function GUIDemo() {
        this.vector = { x: 554, y: 0, z: 0 };
        this.iconSrc = "images/favicon.png";
        this.treeDataProvider = [
            {
                label: "level_1_1", collection: [
                    { label: "level_2_1", icon: "images/palette.png" },
                    { label: "level_2_2" },
                    { label: "level_2_3" }
                ]
            },
            {
                label: "level_1_2", collection: [
                    { label: "level_2_1" },
                    { label: "level_2_2" },
                    { label: "level_2_3", collection: [
                            { label: "level_3_1" },
                            { label: "level_3_2" },
                            { label: "level_3_3",
                                collection: [
                                    { label: "level_2_1" },
                                    { label: "level_2_2" },
                                    { label: "level_2_3", collection: [
                                            { label: "level_3_1" },
                                            { label: "level_3_2" },
                                            { label: "level_3_3",
                                            }
                                        ] }
                                ]
                            }
                        ] }
                ]
            }
        ];
    }
    GUIDemo.prototype.onButtonClick = function () {
        console.log("Button Clicked");
    };
    GUIDemo.prototype.onVectorChange = function (event) {
        console.log(event);
    };
    GUIDemo.prototype.onAngleChange = function (event) {
        console.log(event);
    };
    GUIDemo.prototype.onTreeItemSelect = function (event) {
        console.log(event);
    };
    GUIDemo = __decorate([
        angular2_1.Component({
            selector: 'gui-demo'
        }),
        angular2_1.View({
            templateUrl: 'GUIDemoTemplate.html',
            directives: [
                angular2_xgui_1.Icon,
                angular2_xgui_1.Button,
                angular2_xgui_1.CheckBox,
                angular2_xgui_1.NumberInput,
                angular2_xgui_1.VectorInput,
                angular2_xgui_1.Tree
            ]
        }), 
        __metadata('design:paramtypes', [])
    ], GUIDemo);
    return GUIDemo;
})();
exports.GUIDemo = GUIDemo;
angular2_1.bootstrap(GUIDemo);
//# sourceMappingURL=GUIDemo.js.map