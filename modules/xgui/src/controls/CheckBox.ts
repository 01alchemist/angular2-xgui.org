/**
 * Created by Nidin Vinayakan on 02-10-2015.
 */
import {Component, EventEmitter} from '@angular/core';
import {NgFor, NgIf} from '@angular/common';

@Component({
    selector: 'x-checkbox',
    properties:[
        'label:label'
    ],
    events:["click:click"],
    template:
    '<div class="x-checkbox">' +
    '<div *ngIf="label" class="checkbox-label">{{ label }}</div> ' +
    '<input class="x-checkbox-input" type="checkbox"/>' +
    '</div>',
    styles:[
        '.x-checkbox{' +
            'cursor: pointer;' +
            'margin: 5px;' +
            'display: inline-block;' +
            'position: relative;' +
            'padding: 2px;' +
            'height: 21px;' +
        '}',
        '.x-checkbox:hover{' +

        '}',
        '.x-checkbox:active{' +

        '}',
        '.x-checkbox-input{' +
            'cursor: pointer;' +
            'padding: 2px;' +
            'display: inline-block;' +
            'background-color: #50524F;' +
            'color: #fff;' +
            'font-size: 0.9em;' +
            'border: 0px solid #262825;' +
            'border-top: 1px solid #2F2F2F; ' +
        '}',
        '.checkbox-label{' +
            'display:inline-block; ' +
            'padding: 2px 5px 2px 5px;' +
        '}'
    ],
    directives: [NgFor, NgIf]
})

export class CheckBox {

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
