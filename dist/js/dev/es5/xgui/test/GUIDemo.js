var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("angular2/core");
var Icon_1 = require("../src/controls/Icon");
var Button_1 = require("../src/controls/Button");
var CheckBox_1 = require("../src/controls/CheckBox");
var NumberInput_1 = require("../src/controls/NumberInput");
var VectorInput_1 = require("../src/controls/VectorInput");
var Tree_1 = require("../src/controls/Tree");
var Panel_1 = require("../src/containers/Panel");
var bootstrap_1 = require("angular2/bootstrap");
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
        core_1.Component({
            selector: 'gui-demo'
        }),
        core_1.View({
            templateUrl: 'GUIDemoTemplate.html',
            directives: [
                Icon_1.Icon,
                Button_1.Button,
                CheckBox_1.CheckBox,
                NumberInput_1.NumberInput,
                VectorInput_1.VectorInput,
                Tree_1.Tree,
                Panel_1.Panel
            ]
        }), 
        __metadata('design:paramtypes', [])
    ], GUIDemo);
    return GUIDemo;
})();
exports.GUIDemo = GUIDemo;
bootstrap_1.bootstrap(GUIDemo);
//# sourceMappingURL=GUIDemo.js.map