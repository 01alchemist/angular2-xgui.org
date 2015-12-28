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
var Assets_1 = require("xgui/src/assets/Assets");
var Icon = (function () {
    function Icon(elementRef) {
        this._elementRef = elementRef;
        this.src = Assets_1.Assets.icon_blank_16;
    }
    Object.defineProperty(Icon.prototype, "src", {
        get: function () {
            return this._src;
        },
        set: function (value) {
            if (value != undefined) {
                this._src = value;
                this._elementRef.nativeElement.style.backgroundImage = "url(" + value + ")";
            }
            else {
                this._src = null;
                this._elementRef.nativeElement.style.backgroundImage = null;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Icon.prototype, "glyph", {
        get: function () {
            return this._glyph;
        },
        set: function (value) {
            if (value != undefined) {
            }
        },
        enumerable: true,
        configurable: true
    });
    Icon = __decorate([
        angular2_1.Component({
            selector: 'x-icon',
            properties: [
                'src:src'
            ]
        }),
        angular2_1.View({
            template: '',
            styles: [
                'x-icon{' +
                    'display: inline-block;' +
                    'position: relative;' +
                    'width: 16px;' +
                    'height: 16px;' +
                    '}'
            ],
            directives: [angular2_1.CSSClass]
        }), 
        __metadata('design:paramtypes', [angular2_1.ElementRef])
    ], Icon);
    return Icon;
})();
exports.Icon = Icon;
//# sourceMappingURL=Icon.js.map