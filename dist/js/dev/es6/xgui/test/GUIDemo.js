var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, View } from "angular2/core";
import { Icon } from "../src/controls/Icon";
import { Button } from "../src/controls/Button";
import { CheckBox } from "../src/controls/CheckBox";
import { NumberInput } from "../src/controls/NumberInput";
import { VectorInput } from "../src/controls/VectorInput";
import { Tree } from "../src/controls/Tree";
import { Panel } from "../src/containers/Panel";
import { bootstrap } from "angular2/bootstrap";
export let GUIDemo = class {
    constructor() {
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
    onButtonClick() {
        console.log("Button Clicked");
    }
    onVectorChange(event) {
        console.log(event);
    }
    onAngleChange(event) {
        console.log(event);
    }
    onTreeItemSelect(event) {
        console.log(event);
    }
};
GUIDemo = __decorate([
    Component({
        selector: 'gui-demo'
    }),
    View({
        templateUrl: 'GUIDemoTemplate.html',
        directives: [
            Icon,
            Button,
            CheckBox,
            NumberInput,
            VectorInput,
            Tree,
            Panel
        ]
    }), 
    __metadata('design:paramtypes', [])
], GUIDemo);
bootstrap(GUIDemo);
//# sourceMappingURL=GUIDemo.js.map