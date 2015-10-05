/// <reference path="../../typings/angular2/angular2.d.ts" />
import { EventEmitter, ElementRef } from 'angular2/angular2';
export declare class Tree {
    select: EventEmitter;
    dateProvider: any;
    dataField: string;
    availableWidth: number;
    elements: any;
    private _elementRef;
    private _inputWidth;
    private _label;
    private _vector;
    constructor(elementRef: ElementRef);
    label: string;
    inputWidth: number;
    vector: any;
    onInput(event: any): void;
}
