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
import { bootstrap, Component, View } from "angular2/angular2";
import { Button, CheckBox, NumberInput, VectorInput } from "xgui/angular2-xgui";
export let GUIDemo = class {
    constructor() {
        this.vector = { x: 554, y: 0, z: 0 };
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
};
GUIDemo = __decorate([
    Component({
        selector: 'gui-demo'
    }),
    View({
        templateUrl: 'GUIDemoTemplate.html',
        directives: [
            Button,
            CheckBox,
            NumberInput,
            VectorInput
        ]
    }), 
    __metadata('design:paramtypes', [])
], GUIDemo);
bootstrap(GUIDemo);
//# sourceMappingURL=GUIDemo.js.map