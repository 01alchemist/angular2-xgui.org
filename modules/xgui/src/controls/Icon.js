System.register(['angular2/core', "../assets/Assets"], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, Assets_1;
    var Icon;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (Assets_1_1) {
                Assets_1 = Assets_1_1;
            }],
        execute: function() {
            Icon = (function () {
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
                    core_1.Component({
                        selector: 'x-icon',
                        properties: [
                            'src:src'
                        ]
                    }),
                    core_1.View({
                        template: '',
                        styles: [
                            'x-icon{' +
                                'display: inline-block;' +
                                'position: relative;' +
                                'width: 16px;' +
                                'height: 16px;' +
                                '}'
                        ]
                    }), 
                    __metadata('design:paramtypes', [core_1.ElementRef])
                ], Icon);
                return Icon;
            })();
            exports_1("Icon", Icon);
        }
    }
});
//# sourceMappingURL=Icon.js.map