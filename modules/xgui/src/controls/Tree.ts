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
import {Label} from "xgui/src/controls/Label";
import {Icon} from "xgui/src/controls/Icon";
import {TreeItem} from "xgui/src/controls/TreeItem";

@Component({
    selector: 'x-tree',
    properties:[
        '_level:_level',
        'expandLevel:expand',
        'dataField:data-field',
        'dataProvider:data-provider'
    ],
    events:["select:select"]
})
@View({
    template:
    '<div class="x-tree-item" *ng-for="#data of dataProvider">' +
        '<x-tree-item [data]="data" [data-field]="dataField" (toggle)="toggle($event)" (select)="handleSelection($event)"></x-tree-item>' +
        '<div *ng-if="hasDataProvider(data) && (isExpanded(data))">' +
            '<x-tree class="child" [_level]="_level+1" [expand]="expandLevel" [data-provider]="getDataProvider(data)" [data-field]="dataField" (select)="handleSelection($event)"></x-tree>' +
        '</div>' +
    '</div>',
    styles:[
        'x-tree{' +
            'display: block;' +
            'position: relative;' +
            'padding-left: 0px;' +
            'width: auto;' +
        '}',
        'x-tree .child{' +
            'padding-left: 30px;' +
        '}',
        '.x-tree-item{' +
            'display: block;' +
            'position: relative;' +
        '}'
    ],
    directives: [NgFor, NgIf, CSSClass, Label, Icon, TreeItem, Tree]
})

export class Tree {

    select = new EventEmitter();

    private _elementRef:ElementRef;
    private _level:number=0;
    private _expandLevel:number = 0;
    static _selectedItem:TreeItem = null;
    private _dataField:string;
    private _dataProvider:any;

    constructor(elementRef: ElementRef) {
        this._elementRef = elementRef;
        this.dataField = "data";
    }
    get selectedItem():TreeItem{
        return Tree._selectedItem;
    }
    get dataProvider(){
        return this._dataProvider;
    }
    set dataProvider(value){
        this._dataProvider = value;
    }
    get dataField(){
        return this._dataField;
    }
    set dataField(value){
        this._dataField = value;
    }
    get expandLevel():string{
        return this._expandLevel == Number.POSITIVE_INFINITY?"all":this._expandLevel == -1?"none":this._expandLevel.toString();
    }
    set expandLevel(value:string){
        this._expandLevel = value == "all"?Number.POSITIVE_INFINITY:value == "none"?-1:parseInt(value);
    }
    isLevelExpanded(){
        return this._expandLevel == Number.POSITIVE_INFINITY || this._expandLevel > this._level;
    }
    isExpanded(data){
        if(this.isLevelExpanded() && data.expanded == undefined){
            data.expanded = true;
        }
        return data.expanded;
    }
    hasDataProvider(data){
        return data[this.dataField] !== undefined;
    }
    getDataProvider(data){
        return data[this.dataField];
    }

    toggle(event){
        if(this.isLevelExpanded() && event.data.expanded == undefined){
            event.data.expanded = true;
        }
    }
    expand(){
        this._expandLevel = this._level;
    }
    collapse(){
        this._expandLevel = this._level-1;
    }

    handleSelection(event){
        if(Tree._selectedItem){
            Tree._selectedItem.selected = false;
        }
        Tree._selectedItem = event.item;
        Tree._selectedItem.selected = true;
        this.select.next(event);
    }
}
