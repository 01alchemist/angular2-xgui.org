import {Component,View} from 'angular2/core';

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
            'padding-right: 5px;' +
            'width: auto;' +
        '}'
    ]
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
