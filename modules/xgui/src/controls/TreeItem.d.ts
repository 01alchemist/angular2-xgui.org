/// <reference path="../../typings/angular2/angular2.d.ts" />
import { EventEmitter, ElementRef } from 'angular2/angular2';
export declare class TreeItem {
    toggle: EventEmitter;
    select: EventEmitter;
    defaultIcon: string;
    expanderClass: {
        "x-tree-expander": boolean;
        "x-tree-collapsed": boolean;
        "x-tree-expanded": boolean;
    };
    private _elementRef;
    private _expanded;
    private _selected;
    private _data;
    private _dataField;
    constructor(elementRef: ElementRef);
    label: any;
    data: any;
    dataField: string;
    selected: boolean;
    hasDataProvider(): boolean;
    getDataProvider(data: any): any;
    onToggle(event: any): void;
    onSelect(event: any): void;
}
