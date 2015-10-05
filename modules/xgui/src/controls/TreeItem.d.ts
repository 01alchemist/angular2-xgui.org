/// <reference path="../../typings/angular2/angular2.d.ts" />
import { EventEmitter, ElementRef } from 'angular2/angular2';
export declare class TreeItem {
    select: EventEmitter;
    private _elementRef;
    private _data;
    private _dataField;
    constructor(elementRef: ElementRef);
    label: any;
    data: any;
    dataField: string;
}
