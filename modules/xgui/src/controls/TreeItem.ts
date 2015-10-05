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
import {Tree} from "xgui/src/controls/Tree";

@Component({
    selector: 'x-tree-item',
    properties:[
        'data:data',
        'dataField:data-field'
    ],
    events:["select:select"]
})
@View({
    template:
    '<div class="x-tree-item">' +
        '<x-label [text]="label" />' +
        '<x-tree *ng-if="data.dataProvider" [dataProvider]="data.dataProvider" [dataField]="dataField"/>' +
    '</div>',
    styles:[
        '.x-tree-item{' +
            'display: block;' +
            'position: relative;' +
            'padding: 5px;' +
            'width: auto;' +
        '}'
    ],
    directives: [NgFor, NgIf, CSSClass, Label, Tree]
})

export class TreeItem {

    select = new EventEmitter();

    private _elementRef:ElementRef;
    private _data:any;
    private _dataField:string;

    constructor(elementRef: ElementRef) {
        this._elementRef = elementRef;
    }

    get label(){
        return this._data.label;
    }
    set label(value){
        this._data.label = value;
    }
    get data(){
        return this._data;
    }
    set data(value){
        this._data = value;
    }
    get dataField(){
        return this._dataField;
    }
    set dataField(value){
        this._dataField = value;
    }
}
