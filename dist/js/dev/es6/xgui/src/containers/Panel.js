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
var styles = [
    'x-panel{' +
        'min-width:212px;' +
        'max-width:1370px;' +
        'min-height:148px;' +
        'max-height:805px;' +
        'display: block;' +
        'border: 1px solid #282828;' +
        '}',
    '.stack-header{' +
        'display:block;' +
        'width:inherit;' +
        'height:11px;' +
        'border-top: #474747 1px solid;' +
        'border-bottom: #282828 1px solid;' +
        'background-color: #323232;' +
        '}',
    '.panel-title{' +
        'width:100px;' +
        '}'
];
import { Component, View, NgIf, NgFor, CSSClass } from "angular2/angular2";
import { Dracula } from "xgui/angular2-xgui";
export let Panel = class {
    constructor() {
    }
    get stackHeadDisplay() {
        return this.stacked ? "none" : "block";
    }
};
Panel = __decorate([
    Component({
        selector: 'x-panel',
        properties: ['name:name']
    }),
    View({
        template: '<div class="panel-container">' +
            '<div class="stack-header" [style.display]="stackHeadDisplay"></div>' +
            '<div class="panel-header">' +
            '<div class="panel-title" [style.width]="titleWidth" [style.height]="titleHeight">{{name}}</div>' +
            '</div>' +
            '<div class="stack-tabs">' +
            '</div>' +
            '</div>',
        styles: Dracula.panel.styles,
        directives: [NgIf, NgFor, CSSClass]
    }), 
    __metadata('design:paramtypes', [])
], Panel);
//# sourceMappingURL=Panel.js.map