System.register(["angular2/core", "angular2/bootstrap", "../modules/xgui/src/controls/Icon", "../modules/xgui/src/controls/Button", "../modules/xgui/src/controls/CheckBox", "../modules/xgui/src/controls/NumberInput", "../modules/xgui/src/controls/VectorInput", "../modules/xgui/src/controls/Tree"], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, bootstrap_1, Icon_1, Button_1, CheckBox_1, NumberInput_1, VectorInput_1, Tree_1;
    var GUIDemo;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (bootstrap_1_1) {
                bootstrap_1 = bootstrap_1_1;
            },
            function (Icon_1_1) {
                Icon_1 = Icon_1_1;
            },
            function (Button_1_1) {
                Button_1 = Button_1_1;
            },
            function (CheckBox_1_1) {
                CheckBox_1 = CheckBox_1_1;
            },
            function (NumberInput_1_1) {
                NumberInput_1 = NumberInput_1_1;
            },
            function (VectorInput_1_1) {
                VectorInput_1 = VectorInput_1_1;
            },
            function (Tree_1_1) {
                Tree_1 = Tree_1_1;
            }],
        execute: function() {
            GUIDemo = (function () {
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
                        templateUrl: 'template.html',
                        directives: [
                            Icon_1.Icon,
                            Button_1.Button,
                            CheckBox_1.CheckBox,
                            NumberInput_1.NumberInput,
                            VectorInput_1.VectorInput,
                            Tree_1.Tree
                        ]
                    }), 
                    __metadata('design:paramtypes', [])
                ], GUIDemo);
                return GUIDemo;
            })();
            exports_1("GUIDemo", GUIDemo);
            bootstrap_1.bootstrap(GUIDemo);
        }
    }
});
//# sourceMappingURL=demo.js.map