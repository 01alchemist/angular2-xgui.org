/**
 * Created by Nidin Vinayakan on 02-10-2015.
 */
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
/// <reference path="../../typings/angular2/angular2.d.ts" />
var angular2_1 = require('angular2/angular2');
var CheckBox = (function () {
    function CheckBox() {
        this.click = new angular2_1.EventEmitter();
    }
    Object.defineProperty(CheckBox.prototype, "label", {
        get: function () {
            return this._label;
        },
        set: function (value) {
            this._label = value;
        },
        enumerable: true,
        configurable: true
    });
    CheckBox = __decorate([
        angular2_1.Component({
            selector: 'x-checkbox',
            properties: [
                'label:label'
            ],
            events: ["click:click"]
        }),
        angular2_1.View({
            template: '<div class="x-checkbox">' +
                '<div *ng-if="label" class="checkbox-label">{{ label }}</div> ' +
                '<input class="x-checkbox-input" type="checkbox"/>' +
                '</div>',
            styles: [
                '.x-checkbox{' +
                    'cursor: hand;' +
                    'margin: 5px;' +
                    'display: inline-block;' +
                    'position: relative;' +
                    'padding: 2px;' +
                    'height: 21px;' +
                    '}',
                '.x-checkbox:hover{' +
                    '}',
                '.x-checkbox:active{' +
                    '}',
                '.x-checkbox-input{' +
                    'cursor: hand;' +
                    'padding: 2px;' +
                    'display: inline-block;' +
                    'background-color: #50524F;' +
                    'color: #fff;' +
                    'font-size: 0.9em;' +
                    'border: 0px solid #262825;' +
                    'border-top: 1px solid #2F2F2F; ' +
                    '}',
                '.checkbox-label{' +
                    'display:inline-block; ' +
                    'padding: 2px 5px 2px 5px;' +
                    '}'
            ],
            directives: [angular2_1.NgFor, angular2_1.NgIf, angular2_1.CSSClass]
        }), 
        __metadata('design:paramtypes', [])
    ], CheckBox);
    return CheckBox;
})();
exports.CheckBox = CheckBox;
//# sourceMappingURL=CheckBox.js.map