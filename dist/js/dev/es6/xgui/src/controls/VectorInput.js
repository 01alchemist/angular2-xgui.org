/// <reference path="../../typings/angular2/angular2.d.ts" />
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") return Reflect.decorate(decorators, target, key, desc);
    switch (arguments.length) {
        case 2: return decorators.reduceRight(function(o, d) { return (d && d(o)) || o; }, target);
        case 3: return decorators.reduceRight(function(o, d) { return (d && d(target, key)), void 0; }, void 0);
        case 4: return decorators.reduceRight(function(o, d) { return (d && d(target, key, o)) || o; }, desc);
    }
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, View, CSSClass, NgFor, NgIf, EventEmitter, ElementRef } from 'angular2/angular2';
import { NumberInput } from "xgui/src/controls/NumberInput";
export let VectorInput = class {
    constructor(elementRef) {
        this.change = new EventEmitter();
        this._elementRef = elementRef;
        this.vector = this.vector || { X: 0, Y: 0, Z: 0 };
    }
    get label() {
        return this._label;
    }
    set label(value) {
        this._label = value;
    }
    get inputWidth() {
        this.availableWidth = this._elementRef.nativeElement.parentElement.offsetWidth || 250;
        this._inputWidth = (this.availableWidth - (10 + (this.elements.length * 10))) / this.elements.length;
        return this._inputWidth;
    }
    set inputWidth(value) {
        this._inputWidth = value;
    }
    get vector() {
        return this._vector;
    }
    set vector(value) {
        this._vector = value;
        this.elements = [];
        for (var element in this._vector) {
            if (this._vector.hasOwnProperty(element)) {
                this.elements.push({
                    label: element.toUpperCase(),
                    value: this.vector[element]
                });
            }
        }
    }
    onInput(event) {
        var value = event.value;
        var element = event.label.toLowerCase();
        this.vector[element] = value;
        this.change.next({ value: value, element: element, vector: this.vector });
    }
};
VectorInput = __decorate([
    Component({
        selector: 'vector-input',
        properties: [
            'vector:vector',
            'label:label'
        ],
        events: ["change:change"]
    }),
    View({
        /*templateUrl:"VectorInput.html",*/
        template: '<div class="vector-input">' +
            '<div class="label">{{ label }}</div> ' +
            '<div class="input-group"> ' +
            '<div *ng-for="#element of elements" [style.width]="inputWidth" class="input-element"> ' +
            '<number-input [label]="element.label" [value]="element.value"' +
            '(change)="onInput($event)"></number-input>' +
            '</div>' +
            '</div>' +
            '</div>',
        styles: [
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
    }), 
    __metadata('design:paramtypes', [ElementRef])
], VectorInput);
//# sourceMappingURL=VectorInput.js.map