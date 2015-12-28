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
import { Component, View, NgIf, NgFor, CSSClass, ElementRef, ViewContainerRef } from "angular2/angular2";
import { Assets } from "xgui/src/assets/Assets";
import { Icon } from "xgui/src/controls/Icon";
export let Panel = class {
    constructor(elementRef, containerRef) {
        this.arrowIcon = Assets.icon_arrow_left_7x5;
        this.closeIcon = Assets.icon_close_6x5;
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
    get stackHeadDisplay() {
        return this.stacked ? "none" : "block";
    }
    handleMouseEvent(event) {
        console.log(event.type);
    }
    close() {
        /*var eli = this._elementRef.parentView._view.elementInjectors[this._elementRef.boundElementIndex];
        var vc = eli.getHost().getViewContainerRef();
        vc.remove(this._elementRef.boundElementIndex);*/
    }
};
Panel = __decorate([
    Component({
        selector: 'x-panel',
        properties: ['name:name'],
        injectables: [ViewContainerRef]
    }),
    View({
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
        directives: [NgIf, NgFor, CSSClass, Icon]
    }), 
    __metadata('design:paramtypes', [ElementRef, ViewContainerRef])
], Panel);
//# sourceMappingURL=Panel.js.map