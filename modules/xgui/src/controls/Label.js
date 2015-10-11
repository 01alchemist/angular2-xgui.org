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
var angular2_1 = require('angular2/angular2');
var Label = (function () {
    function Label() {
        this.label = this.label || "Untitled";
    }
    Object.defineProperty(Label.prototype, "label", {
        get: function () {
            return this._text;
        },
        set: function (value) {
            this._text = value;
        },
        enumerable: true,
        configurable: true
    });
    Label = __decorate([
        angular2_1.Component({
            selector: 'x-label',
            properties: [
                'text:text'
            ]
        }),
        angular2_1.View({
            template: '{{text}}',
            styles: [
                'x-label{' +
                    'display: inline-block;' +
                    'position: relative;' +
                    'padding-left: 5px;' +
                    'padding-right: 5px;' +
                    'width: auto;' +
                    '}'
            ],
            directives: [angular2_1.CSSClass]
        }), 
        __metadata('design:paramtypes', [])
    ], Label);
    return Label;
})();
exports.Label = Label;
//# sourceMappingURL=Label.js.map