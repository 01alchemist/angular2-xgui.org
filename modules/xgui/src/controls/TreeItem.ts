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
import {Assets} from "xgui/src/controls/assets/Assets";

@Component({
    selector: 'x-tree-item',
    properties:[
        'data:data',
        'dataField:data-field'
    ],
    events:["toggle:toggle", "select:select"]
})
@View({
    template:
    '<div *ng-if="hasDataProvider()" [class]="expanderClass" (click)="onToggle($event)"></div>' +
    '<div class="x-tree-item-container" (^click)="onSelect($event)">' +
    '<x-icon class="x-tree-icon" [src]="data.icon || defaultIcon"></x-icon>' +
    '<x-label class="tree-label" [text]="data.label"></x-label>' +
    '</div>',
    styles:[
        'x-tree-item{' +
            'display: inline-block;' +
            'position: relative;' +
            'padding-left: 5px;' +
        '}',
        'x-tree-item:hover{' +
            'background-color: #3E698E;' +
        '}',
        '.x-tree-item-selected{' +
            'background-color: #135996;' +
        '}',
        '.x-tree-expander{' +
            'display: inline-block;' +
            'width: 16px;' +
            'height: 16px;' +
            'font-size: 16px;' +
            'text-align: center;' +
            'font-family: FontAwesome;' +
            'color: #5fa2dd;' +
            'cursor: hand;' +
        '}',
        '.x-tree-item-container{' +
            'display: inline-block;' +
        '}',
        '.x-tree-icon{' +
            'top: 2px;' +
        '}',
        '.x-tree-collapsed:before{' +
            'content: "\\f0da"' +
        '}',
        '.x-tree-expanded:before{' +
            'content: "\\f0d7"' +
        '}',
        '.tree-label{' +
            'top:-1px;' +
            'cursor:default;' +
        '}'
    ],
    directives: [NgFor, NgIf, CSSClass, Label, Icon]
})

export class TreeItem {

    toggle = new EventEmitter();
    select = new EventEmitter();

    defaultIcon = Assets.icon_folder_16;
    expanderClass = {"x-tree-expander":true, "x-tree-collapsed":!this._expanded, "x-tree-expanded":this._expanded};

    private _elementRef:ElementRef;
    private _expanded:boolean=false;
    private _selected:boolean=false;
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
    get selected():boolean{
        return this._selected;
    }
    set selected(value:boolean){
        this._selected = value;
        if(value){
            this._elementRef.nativeElement.classList.add("x-tree-item-selected");
        }else{
            this._elementRef.nativeElement.classList.remove("x-tree-item-selected");
        }
    }
    hasDataProvider(){
        if(this.data.expanded){
            this.expanderClass["x-tree-expanded"] = true;
            this.expanderClass["x-tree-collapsed"] = false;
        }
        this._expanded = this.data.expanded;
        return this.data[this.dataField] !== undefined;
    }
    getDataProvider(data){
        return data[this.dataField];
    }
    onToggle(event){
        this._expanded = !this._expanded;
        this.data.expanded = this._expanded;
        event.target.classList.remove(this._expanded?"x-tree-collapsed":"x-tree-expanded");
        event.target.classList.add(this._expanded?"x-tree-expanded":"x-tree-collapsed");
        this.toggle.next({expanded:this._expanded, data:this.data});
    }
    onSelect(event){
        this.select.next({item:this});
    }
}
