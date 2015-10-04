/// <reference path="../../../../../xgui/typings/angular2/angular2.d.ts" />
import { EventEmitter, ElementRef } from 'angular2/angular2';
export declare class NumberInput {
    change: EventEmitter;
    availableWidth: number;
    private _elementRef;
    private _inputWidth;
    private _label;
    private _value;
    constructor(elementRef: ElementRef);
    label: string;
    inputWidth: number;
    value: any;
    onInput(event: any, isKeyInput?: boolean): void;
}
