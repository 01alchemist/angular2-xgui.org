System.register(["angular2/angular2", "xgui/angular2-xgui"], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var angular2_1, angular2_xgui_1;
    var GUIDemo;
    return {
        setters:[
            function (angular2_1_1) {
                angular2_1 = angular2_1_1;
            },
            function (angular2_xgui_1_1) {
                angular2_xgui_1 = angular2_xgui_1_1;
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
                            angular2_xgui_1.Tree,
                            angular2_xgui_1.Panel
                        ]
                    }), 
                    __metadata('design:paramtypes', [])
                ], GUIDemo);
                return GUIDemo;
            })();
            exports_1("GUIDemo", GUIDemo);
            angular2_1.bootstrap(GUIDemo);
        }
    }
});
//# sourceMappingURL=GUIDemo.js.map