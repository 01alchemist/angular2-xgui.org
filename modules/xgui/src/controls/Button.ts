/**
 * Created by Nidin Vinayakan on 02-10-2015.
 */

/// <reference path="../../typings/angular2/angular2.d.ts" />

import {Component, View, CSSClass, NgFor, NgIf, EventEmitter} from 'angular2/angular2';

@Component({
    selector: 'x-button',
    properties:[
        'label:label'
    ],
    events:["click:click"]
})
@View({
    template: '<div class="button-label">{{ label }}</div>',
    styles:[
        'x-button{' +
            'cursor: hand;' +
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
        '}',
        '.button-label{display:block; padding: 2px 5px 2px 5px;}'
    ],
    directives: [NgFor, NgIf, CSSClass]
})

export class Button {

    click = new EventEmitter();

    elements;
    private _label:string;

    constructor() {
    }

    get label(){
        return this._label;
    }
    set label(value){
        this._label = value;
    }

}
