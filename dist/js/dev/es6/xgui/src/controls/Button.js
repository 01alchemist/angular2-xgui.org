var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, View, EventEmitter } from 'angular2/core';
import { NgFor, NgIf } from 'angular2/common';
import { StyleUtils } from "../utils/StyleUtils";
/**
 * Created by Nidin Vinayakan on 02-10-2015.
 */
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
        template: '<div class="button-label">{{ label }}</div>',
        /* FIXME: should be fine with NG.beta.1 */
        styles: [
            /*'x-button{' +
             'cursor: pointer;' +
             'margin: 5px;' +
             'display: inline-block;' +
             'position: relative;' +
             'padding: 2px;' +
             'height: 21px;' +
             'background-color: #5D5D5D;' +
             '}',
             'x-button:hover{' +
             'background-color: #4C4C4C;' +
             '}',
             'x-button:active{' +
             'background-color: #3879D9;' +
             '}',*/
            '.button-label{display:block; padding: 2px 5px 2px 5px;}'
        ],
        directives: [NgFor, NgIf]
    }), 
    __metadata('design:paramtypes', [])
], Button);
var css = 'x-button{' +
    'cursor: pointer;' +
    'margin: 5px;' +
    'display: inline-block;' +
    'position: relative;' +
    'padding: 2px;' +
    'height: 21px;' +
    'background-color: #5D5D5D;' +
    '}' +
    'x-button:hover{' +
    'background-color: #4C4C4C;' +
    '}' +
    'x-button:active{' +
    'background-color: #3879D9;' +
    '}';
StyleUtils.addStyle(css);
//# sourceMappingURL=Button.js.map