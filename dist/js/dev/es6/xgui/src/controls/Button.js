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
import { Component, View, CSSClass, NgFor, NgIf, EventEmitter } from 'angular2/angular2';
export let Button = class {
    constructor() {
        this.click = new EventEmitter();
    }
    get label() {
        return this._label;
    }
    set label(value) {
        this._label = value;
    }
};
Button = __decorate([
    Component({
        selector: 'x-button',
        properties: [
            'label:label'
        ],
        events: ["click:click"]
    }),
    View({
        template: '<div class="x-button">' +
            '<div class="button-label">{{ label }}</div> ' +
            '</div>',
        styles: [
            '.x-button{' +
                'cursor: hand;' +
                'margin: 5px;' +
                'display: inline-block;' +
                'position: relative;' +
                'padding: 2px;' +
                'height: 21px;' +
                'background-color: #5D5D5D;' +
                '}',
            '.x-button:hover{' +
                'background-color: #4C4C4C;' +
                '}',
            '.x-button:active{' +
                'background-color: #3879D9;' +
                '}',
            '.button-label{display:block; padding: 2px 5px 2px 5px;}'
        ],
        directives: [NgFor, NgIf, CSSClass]
    }), 
    __metadata('design:paramtypes', [])
], Button);
//# sourceMappingURL=Button.js.map