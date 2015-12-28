import { ElementRef } from 'angular2/angular2';
import { TreeItem } from "xgui/src/controls/TreeItem";
export declare class Tree {
    select: any;
    private _elementRef;
    private _level;
    private _expandLevel;
    static _selectedItem: TreeItem;
    private _dataField;
    private _dataProvider;
    constructor(elementRef: ElementRef);
    selectedItem: TreeItem;
    dataProvider: any;
    dataField: string;
    expandLevel: string;
    isLevelExpanded(): boolean;
    isExpanded(data: any): any;
    hasDataProvider(data: any): boolean;
    getDataProvider(data: any): any;
    toggle(event: any): void;
    expand(): void;
    collapse(): void;
    handleSelection(event: any): void;
}
