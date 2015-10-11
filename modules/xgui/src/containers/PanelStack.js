/// <reference path="../../typings/angular2/angular2.d.ts" />
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
/**
 * Created by Nidin Vinayakan on 02-10-2015.
 */
var angular2_1 = require("angular2/angular2");
var angular2_xgui_1 = require("xgui/angular2-xgui");
var StackBox = (function () {
    function StackBox() {
    }
    StackBox = __decorate([
        angular2_1.Component({
            selector: 'x-panel-stack',
            properties: []
        }),
        angular2_1.View({
            template: '<div class="stack-bound">' +
                '<div class="stack-container">' +
                '<div class="stack-header"></div>' +
                '<div class="stack-tabs">' +
                '<x-panel *ng-for="" [stacked]="true">' +
                '</div>' +
                '</div>' +
                '</div>',
            directives: [angular2_1.NgIf, angular2_1.NgFor, angular2_xgui_1.Panel]
        }), 
        __metadata('design:paramtypes', [])
    ], StackBox);
    return StackBox;
})();
exports.StackBox = StackBox;
//# sourceMappingURL=PanelStack.js.map