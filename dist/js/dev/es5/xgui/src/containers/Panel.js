/// <reference path="../../typings/angular2/angular2.d.ts" />
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/**
 * Created by Nidin Vinayakan on 02-10-2015.
 */
var angular2_1 = require("angular2/angular2");
var Assets_1 = require("xgui/src/assets/Assets");
var Icon_1 = require("xgui/src/controls/Icon");
var Panel = (function () {
    function Panel(elementRef, containerRef) {
        this.arrowIcon = Assets_1.Assets.icon_arrow_left_7x5;
        this.closeIcon = Assets_1.Assets.icon_close_6x5;
        this._elementRef = elementRef;
        this._containerRef = containerRef;
        this._elementRef.nativeElement.addEventListener("mousedown", this.handleMouseEvent);
        this._elementRef.nativeElement.addEventListener("mouseup", this.handleMouseEvent);
        this._elementRef.nativeElement.addEventListener("onmouseleave", this.handleMouseEvent);
        document.addEventListener("onmouseout", this.handleMouseEvent);
        this._elementRef.nativeElement.addEventListener("onmousemove", this.handleMouseEvent);
        setInterval(function () {
            console.log("I am alive");
        }, 2000);
    }
    Object.defineProperty(Panel.prototype, "stackHeadDisplay", {
        get: function () {
            return this.stacked ? "none" : "block";
        },
        enumerable: true,
        configurable: true
    });
    Panel.prototype.handleMouseEvent = function (event) {
        console.log(event.type);
    };
    Panel.prototype.close = function () {
        /*var eli = this._elementRef.parentView._view.elementInjectors[this._elementRef.boundElementIndex];
        var vc = eli.getHost().getViewContainerRef();
        vc.remove(this._elementRef.boundElementIndex);*/
    };
    Panel = __decorate([
        angular2_1.Component({
            selector: 'x-panel',
            properties: ['name:name'],
            injectables: [angular2_1.ViewContainerRef]
        }),
        angular2_1.View({
            template: '<div class="panel-container">' +
                '<div class="stack-header">' +
                '<div class="close-button" (^click)="close($event)"><x-icon class="stack-close-icon" [src]="closeIcon"></x-icon></div>' +
                '<div class="expand-button"><x-icon class="expand-arrow-icon" [src]="arrowIcon"></x-icon></div>' +
                '</div>' +
                '<div class="panel-header">' +
                '<div class="panel-title" [style.width]="titleWidth" [style.height]="titleHeight">{{name}}</div>' +
                '</div>' +
                '<div class="stack-tabs">' +
                '</div>' +
                '</div>',
            styles: [
                'x-panel{' +
                    'min-width:212px;' +
                    'max-width:1370px;' +
                    'min-height:148px;' +
                    'max-height:805px;' +
                    'display: block;' +
                    'border: 1px solid #282828;' +
                    'background-color: #535353;' +
                    '}',
                '.stack-header{' +
                    'display:block;' +
                    'cursor:default;' +
                    'width:inherit;' +
                    'height:11px;' +
                    'border-top: #474747 1px solid;' +
                    'border-bottom: #282828 1px solid;' +
                    'background-color: #323232;' +
                    '}',
                '.expand-arrow-icon{' +
                    'width:7px;' +
                    'height:5px;' +
                    'top:3px;' +
                    'left:2px;' +
                    '}',
                '.expand-button{' +
                    'cursor: pointer;' +
                    'width: 12px;' +
                    'height: 12px;' +
                    'float:right;' +
                    '}',
                '.expand-button:hover{' +
                    'background-color:#222222;' +
                    '}',
                '.stack-close-icon{' +
                    'width:6px;' +
                    'height:5px;' +
                    'top:3px;' +
                    'left:3px;' +
                    '}',
                '.close-button{' +
                    'cursor: pointer;' +
                    'width: 12px;' +
                    'height: 12px;' +
                    'float:right;' +
                    '}',
                '.close-button:hover{' +
                    'background-color:#222222;' +
                    '}',
                '.panel-header{' +
                    'display:block;' +
                    'width:inherit;' +
                    'height:27px;' +
                    'border-top: #282828 1px solid;' +
                    'background-color: #8A8782;' +
                    'border-bottom: #444444 1px solid;' +
                    '}',
                '.panel-title{' +
                    'width:70px;' +
                    'height:17px;' +
                    'padding:5px;' +
                    'padding-left:8px;' +
                    'color:#ffffff;' +
                    'font-size:0.94em;' +
                    'font-weight:bold;' +
                    'text-shadow: 0 -1px #000;' +
                    'background-color: #6F6F6F;' +
                    'font-family: Arial;' +
                    /*'text-transform: uppercase;' +*/
                    '}'
            ],
            directives: [angular2_1.NgIf, angular2_1.NgFor, angular2_1.CSSClass, Icon_1.Icon]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof angular2_1.ElementRef !== 'undefined' && angular2_1.ElementRef) === 'function' && _a) || Object, (typeof (_b = typeof angular2_1.ViewContainerRef !== 'undefined' && angular2_1.ViewContainerRef) === 'function' && _b) || Object])
    ], Panel);
    return Panel;
    var _a, _b;
})();
exports.Panel = Panel;
//# sourceMappingURL=Panel.js.map