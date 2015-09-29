/// <reference path="../../typings/angular2/angular2.d.ts" />

import {Component, View, CSSClass, NgFor, NgIf, EventEmitter} from 'angular2/angular2';

@Component({
    selector: 'vector-input',
    properties:[
        'vector:vector',
        'label:label'
    ],
    events:["change:change"]
})
@View({
    template: '<div class="vector-input">' +
    '<div class="label">{{ label }}</div> ' +
    '<div class="input-group"> ' +
    '<div *ng-for="#element of elements"  class="input-element"> ' +
    '<div class="input-label">{{ element.label }}</div>' +
    '<input type="number" step="1" class="input-value" value="{{ element.value }}"' +
    '(keyup)="onInput(element.label, $event.target, true)"' +
    '(change)="onInput(element.label, $event.target)"/>' +
    '</div></div></div>',
    styles:[
        '.vector-input{display: block;position: relative;padding: 5px;width: auto;background-color: #383838;}',
        '.input-group{position: relative;display: flex;padding-top: 5px;padding-left: 5px;}',
        '.input-element{font-size: 0.9em;position: relative;display: flex;padding-right: 10px;}',
        '.input-label{padding-right: 7px;}',
        '.input-label:hover{cursor:col-resize;}',
        '.input-value{width: auto;height: 17px;padding: 2px;display: flex;background-color: #50524F;color: ' +
        '#fff;font-size: 0.9em;border: 0px solid #262825;border-top: 1px solid #262825; ' +
        '-webkit-box-shadow: inset 0px -1px 2px 0px rgba(0,0,0,0.53); ' +
        '-moz-box-shadow: inset 0px -1px 2px 0px rgba(0,0,0,0.53);' +
        'box-shadow: inset 0px -1px 2px 0px rgba(0,0,0,0.53);}'
    ],
    directives: [NgFor, NgIf, CSSClass]
})

export class VectorInput {

    change = new EventEmitter();

    elements;
    private _label:string;
    private _vector;

    constructor() {
        this.vector = this.vector || { X:0, Y:0, Z:0 };
    }

    get label(){
        return this._label;
    }
    set label(value){
        this._label = value;
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

    onInput(element, target, isKeyInput=false){

        var value = target.value;
        element = element.toLowerCase();

        if(value === ""){
            value = this.vector[element];
            target.value = value;
        }else{
            var split = value.split(".");
            var step = target.step;
            if(split.length > 1){
                var fractions = split[1];
                var length = fractions.length;

                if(length == 0 && !isKeyInput){
                    target.value = split[0];
                    step = 1;
                }else {

                    var _step:any = ".";
                    while (length > 1) {
                        _step += "0";
                        length--;
                    }
                    _step += "1";
                    _step = parseFloat(_step);
                    if (target.step > _step || isKeyInput) {
                        step = _step;
                    }
                }
            }
            target.step = step;
            value = parseFloat(value);
        }


        this.vector[element] = value;
        this.change.next({value:value, element:element, vector:this.vector});
    }
}
