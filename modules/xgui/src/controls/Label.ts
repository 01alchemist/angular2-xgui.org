import {Component,View} from 'angular2/core';
import {StyleUtils} from "../utils/StyleUtils";

@Component({
    selector: 'x-label',
    properties: [
        'text:text'
    ]
})
@View({
    template: '{{text}}',
    /* FIXME: should be fine with NG.beta.1 */
    /*styles:[
     'x-label{' +
     'display: inline-block;' +
     'position: relative;' +
     'padding-left: 5px;' +
     'padding-right: 5px;' +
     'width: auto;' +
     '}'
     ]*/
})

export class Label {

    private _text:string;

    constructor() {
        this.label = this.label || "Untitled";
    }

    get label() {
        return this._text;
    }

    set label(value) {
        this._text = value;
    }
}

var css = 'x-label{' +
    'display: inline-block;' +
    'position: relative;' +
    'padding-left: 5px;' +
    'padding-right: 5px;' +
    'width: auto;' +
    '}';
StyleUtils.addStyle(css);