import {Component, View, EventEmitter} from 'angular2/core';
import {NgFor, NgIf} from 'angular2/common';
/**
 * Created by Nidin Vinayakan on 02-10-2015.
 */
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
        '}',
        '.button-label{display:block; padding: 2px 5px 2px 5px;}'
    ],
    directives: [NgFor, NgIf]
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
