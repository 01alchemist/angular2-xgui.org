/// <reference path="../../typings/angular2/angular2.d.ts" />
import { EventEmitter, ElementRef } from 'angular2/angular2';
export declare class Tree {
    select: EventEmitter;
    isChild: boolean;
    private _elementRef;
    private _dataField;
    private _dataProvider;
    constructor(elementRef: ElementRef);
    dataProvider: any;
    dataField: string;
    hasDataProvider(data: any): boolean;
    getDataProvider(data: any): any;
}
