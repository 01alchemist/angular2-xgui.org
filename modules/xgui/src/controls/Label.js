System.register(['@angular/core', "../utils/StyleUtils"], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, StyleUtils_1;
    var Label, css;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (StyleUtils_1_1) {
                StyleUtils_1 = StyleUtils_1_1;
            }],
        execute: function() {
            Label = (function () {
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
                    core_1.Component({
                        selector: 'x-label',
                        properties: [
                            'text:text'
                        ],
                        template: '{{text}}',
                    }), 
                    __metadata('design:paramtypes', [])
                ], Label);
                return Label;
            }());
            exports_1("Label", Label);
            css = 'x-label{' +
                'display: inline-block;' +
                'position: relative;' +
                'padding-left: 5px;' +
                'padding-right: 5px;' +
                'width: auto;' +
                '}';
            StyleUtils_1.StyleUtils.addStyle(css);
        }
    }
});
//# sourceMappingURL=Label.js.map