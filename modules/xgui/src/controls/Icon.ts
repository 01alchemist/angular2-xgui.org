/// <reference path="../../typings/angular2/angular2.d.ts" />

import {
    Component,
    View,
    CSSClass,
    NgFor,
    NgIf,
    ElementRef
} from 'angular2/angular2';
import {Assets} from "xgui/src/controls/assets/Assets";

@Component({
    selector: 'x-icon',
    properties:[
        'src:src'
    ]
})
@View({
    template:'',
    styles:[
        'x-icon{' +
            'display: inline-block;' +
            'position: relative;' +
            'width: 16px;' +
            'height: 16px;' +
        '}'
    ],
    directives: [CSSClass]
})

export class Icon {

    private _src:string;
    private _glyph:string;
    private _elementRef:ElementRef;

    constructor(elementRef:ElementRef) {
        this._elementRef = elementRef;
        this.src = Assets.icon_blank_16;
    }

    get src(){
        return this._src;
    }
    set src(value){

        if(value != undefined){
            this._src = value;
            this._elementRef.nativeElement.style.backgroundImage = "url("+value+")";
        }else{
            this._src = null;
            this._elementRef.nativeElement.style.backgroundImage = null;
        }
    }

    get glyph(){
        return this._glyph;
    }
    set glyph(value){
        if(value != undefined){
        }
    }
}
