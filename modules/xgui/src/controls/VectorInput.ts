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

import {NumberInput} from "xgui/src/controls/NumberInput";

@Component({
    selector: 'vector-input',
    properties:[
        'vector:vector',
        'label:label'
    ],
    events:["change:change"]
})
@View({
    /*templateUrl:"VectorInput.html",*/
    template:
    '<div class="vector-input">' +
        '<div class="label">{{ label }}</div> ' +
        '<div class="input-group"> ' +
            '<div *ng-for="#element of elements" [style.width]="inputWidth" class="input-element"> ' +
                '<number-input [label]="element.label" [value]="element.value"' +
                '(change)="onInput($event)"></number-input>' +
            '</div>' +
        '</div>' +
    '</div>',
    styles:[
        '.vector-input{' +
            'display: block;' +
            'position: relative;' +
            'padding: 5px;' +
            'width: auto;' +
        '}',
        '.input-group{' +
            'position: relative;' +
            'display: flex;' +
            'padding-top: 5px;' +
            'padding-left: 5px;' +
        '}',
        '.input-element{' +
            'font-size: 0.9em;' +
            'position: relative;' +
            'display: flex;' +
            'padding-right: 10px;' +
        '}'
    ],
    directives: [NgFor, NgIf, CSSClass, NumberInput]
})

export class VectorInput {

    change = new EventEmitter();
    availableWidth:number;

    elements;
    private _elementRef:ElementRef;
    private _inputWidth:number;
    private _label:string;
    private _vector;

    constructor(elementRef: ElementRef) {
        this._elementRef = elementRef;
        this.vector = this.vector || { X:0, Y:0, Z:0 };
    }

    get label(){
        return this._label;
    }
    set label(value){
        this._label = value;
    }
    get inputWidth(){
        this.availableWidth = this._elementRef.nativeElement.parentElement.offsetWidth || 250;
        this._inputWidth = (this.availableWidth - (10 + (this.elements.length * 10)) ) / this.elements.length;
        return this._inputWidth;
    }
    set inputWidth(value){
        this._inputWidth = value;
    }
    get vector(){
        return this._vector;
    }
    set vector(value){
        this._vector = value;
        this.elements = [];
        for(var element in this._vector){
            if(this._vector.hasOwnProperty(element)){
                this.elements.push({
                    label:element.toUpperCase(),
                    value:this.vector[element]
                });
            }
        }
    }

    onInput(event){

        var value = event.value;
        var element = event.label.toLowerCase();

        this.vector[element] = value;
        this.change.next({value:value, element:element, vector:this.vector});
    }
}
