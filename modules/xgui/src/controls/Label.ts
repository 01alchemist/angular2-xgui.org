/// <reference path="../../typings/angular2/angular2.d.ts" />

import {
    Component,
    View,
    CSSClass,
    NgFor,
    NgIf,
    EventEmitter,
    ElementRef
} from 'angular2/angular2';

@Component({
    selector: 'x-label',
    properties:[
        'text:text'
    ]
})
@View({
    template:'{{text}}',
    styles:[
        'x-label{' +
            'display: inline-block;' +
            'position: relative;' +
            'padding-left: 5px;' +
            'width: auto;' +
        '}'
    ],
    directives: [CSSClass]
})

export class Label {

    private _text:string;

    constructor() {
        this.label = this.label || "Untitled";
    }

    get label(){
        return this._text;
    }
    set label(value){
        this._text = value;
    }
}
