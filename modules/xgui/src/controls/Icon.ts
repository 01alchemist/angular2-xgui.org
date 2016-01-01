import {Component,View,ElementRef} from 'angular2/core';
import {Assets} from "../assets/Assets";
import {StyleUtils} from "../utils/StyleUtils";

@Component({
    selector: 'x-icon',
    properties:[
        'src:src'
    ]
})
@View({
    template:''
    /* FIXME: should be fine with NG.beta.1 */
    /*styles:[
        'x-icon{' +
        'display: inline-block;' +
        'position: relative;' +
        'width: 16px;' +
        'height: 16px;' +
        '}'
    ]*/
})
export class Icon {

    private _src:string;
    private _glyph:string;
    private _elementRef:ElementRef;

    constructor(elementRef:ElementRef) {
        this._elementRef = elementRef;
        /*this._elementRef.nativeElement.style.display = "inline-block";
        this._elementRef.nativeElement.style.position = "relative";
        this._elementRef.nativeElement.style.width = "16px";
        this._elementRef.nativeElement.style.height = "16px";*/

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

/* temp */
var css = 'x-icon{' +
    'display: inline-block;' +
    'position: relative;' +
    'width: 16px;' +
    'height: 16px;' +
    '}';
StyleUtils.addStyle(css);