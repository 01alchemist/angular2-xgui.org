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

@Component({
    selector: 'x-tree',
    properties:[
        'isChild:is-child',
        'dataField:data-field',
        'dataProvider:data-provider'
    ],
    events:["select:select"]
})
@View({
    template:
    '<div class="x-tree-item" *ng-for="#data of dataProvider">' +
        '<div *ng-if="isChild" class="x-tree-connector"></div>' +
        '<div *ng-if="!isChild" class="x-tree-shift"></div>' +
        '<x-icon></x-icon>' +
        '<x-label class="tree-label" [text]="data.label"></x-label>' +
        '<div *ng-if="hasDataProvider(data)" >' +
            '<x-tree class="child" [is-child]="true" [data-provider]="getDataProvider(data)" [data-field]="dataField"></x-tree>' +
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
            'padding-left: 20px;' +
        '}',
        '.x-tree-item{' +
            'display: block;' +
            'position: relative;' +
            'cursor: hand;' +
        '}',
        '.x-tree-connector{' +
            'display: inline-block;' +
            'position: relative;' +
            'top: -5px;' +
            'width: 13px;' +
            'height: 22px;' +
            'background-image: url(images/tree-connector.png)' +
        '}',
        '.x-tree-shift{' +
            'display: inline-block;' +
            'position: relative;' +
            'width: 13px;' +
        '}',
        '.tree-label{' +
            'top:-2px' +
        '}'
    ],
    directives: [NgFor, NgIf, CSSClass, Tree, Label, Icon]
})

export class Tree {

    select = new EventEmitter();
    isChild:boolean = false;

    private _elementRef:ElementRef;
    private _dataField:string;
    private _dataProvider:any;

    constructor(elementRef: ElementRef) {
        this._elementRef = elementRef;
        this.dataField = "data";
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

    hasDataProvider(data){
        return data[this.dataField] !== undefined;
    }
    getDataProvider(data){
        return data[this.dataField];
    }
}
