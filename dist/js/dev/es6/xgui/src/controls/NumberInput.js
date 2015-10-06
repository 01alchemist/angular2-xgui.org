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
export let NumberInput = class {
    constructor(elementRef) {
        this.change = new EventEmitter();
        this._elementRef = elementRef;
        this.value = this.value || 0;
    }
    get label() {
        return this._label;
    }
    set label(value) {
        this._label = value;
    }
    get inputWidth() {
        this.availableWidth = this._elementRef.nativeElement.parentElement.offsetWidth || 80;
        var labelRef = this._elementRef.nativeElement.getElementsByClassName("input-label")[0];
        this._inputWidth = this.availableWidth - (15 + labelRef.offsetWidth);
        return this._inputWidth;
    }
    set inputWidth(value) {
        this._inputWidth = value;
    }
    get value() {
        return this._value;
    }
    set value(_value) {
        this._value = _value;
    }
    onInput(event, isKeyInput = false) {
        var target = event.target;
        var value = target.value;
        if (value === "") {
            target.value = this._value;
        }
        else {
            var split = value.split(".");
            var step = target.step;
            if (split.length > 1) {
                var fractions = split[1];
                var length = fractions.length;
                if (length == 0 && !isKeyInput) {
                    target.value = split[0];
                    step = 1;
                }
                else {
                    var _step = ".";
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
        this.value = value;
        this.change.next({ label: this._label, value: value });
    }
};
NumberInput = __decorate([
    Component({
        selector: 'number-input',
        properties: [
            'value:value',
            'label:label'
        ],
        events: ["change:change"]
    }),
    View({
        template: '<div class="input-label">{{ label }}</div>' +
            '<input type="number" step="1" class="input-value" value="{{ value }}" [style.width]="inputWidth" (keyup)="onInput($event, true)" (change)="onInput($event)"/>',
        styles: [
            'number-input{' +
                'display: flex;' +
                'position: relative;' +
                'padding: 5px;' +
                'width: auto;' +
                '}',
            '.input-label{' +
                'padding-right: 7px;' +
                '}',
            '.input-label:hover{' +
                'cursor:col-resize;' +
                '}',
            '.input-value{' +
                'width: auto;' +
                'height: 17px;' +
                'padding: 2px;' +
                'display: flex;' +
                'background-color: #50524F;' +
                'color: #fff;' +
                'font-size: 0.9em;' +
                'border: 0px solid #262825;' +
                'border-top: 1px solid #2F2F2F; ' +
                '}'
        ],
        directives: [NgFor, NgIf, CSSClass]
    }), 
    __metadata('design:paramtypes', [ElementRef])
], NumberInput);
//# sourceMappingURL=NumberInput.js.map