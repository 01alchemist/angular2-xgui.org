var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, View, EventEmitter, ElementRef } from 'angular2/core';
import { NgFor, NgIf } from 'angular2/common';
import { Label } from "./Label";
import { Icon } from "./Icon";
import { TreeItem } from "./TreeItem";
export let Tree = class {
    constructor(elementRef) {
        this.select = new EventEmitter();
        this._level = 0;
        this._expandLevel = 0;
        this._elementRef = elementRef;
        this.dataField = "data";
    }
    get selectedItem() {
        return Tree._selectedItem;
    }
    get dataProvider() {
        return this._dataProvider;
    }
    set dataProvider(value) {
        this._dataProvider = value;
    }
    get dataField() {
        return this._dataField;
    }
    set dataField(value) {
        this._dataField = value;
    }
    get expandLevel() {
        return this._expandLevel == Number.POSITIVE_INFINITY ? "all" : this._expandLevel == -1 ? "none" : this._expandLevel.toString();
    }
    set expandLevel(value) {
        this._expandLevel = value == "all" ? Number.POSITIVE_INFINITY : value == "none" ? -1 : parseInt(value);
    }
    isLevelExpanded() {
        return this._expandLevel == Number.POSITIVE_INFINITY || this._expandLevel > this._level;
    }
    isExpanded(data) {
        if (this.isLevelExpanded() && data.expanded == undefined) {
            data.expanded = true;
        }
        return data.expanded;
    }
    hasDataProvider(data) {
        return data[this.dataField] !== undefined;
    }
    getDataProvider(data) {
        return data[this.dataField];
    }
    toggle(event) {
        if (this.isLevelExpanded() && event.data.expanded == undefined) {
            event.data.expanded = true;
        }
    }
    expand() {
        this._expandLevel = this._level;
    }
    collapse() {
        this._expandLevel = this._level - 1;
    }
    handleSelection(event) {
        if (Tree._selectedItem) {
            Tree._selectedItem.selected = false;
        }
        Tree._selectedItem = event.item;
        Tree._selectedItem.selected = true;
        this.select.next(event);
    }
};
Tree._selectedItem = null;
Tree = __decorate([
    Component({
        selector: 'x-tree',
        properties: [
            '_level:_level',
            'expandLevel:expand',
            'dataField:data-field',
            'dataProvider:data-provider'
        ],
        events: ["select:select"]
    }),
    View({
        template: '<div class="x-tree-item" *ngFor="#data of dataProvider">' +
            '<x-tree-item [data]="data" [data-field]="dataField" (toggle)="toggle($event)" (select)="handleSelection($event)"></x-tree-item>' +
            '<div *ngIf="hasDataProvider(data) && (isExpanded(data))">' +
            '<x-tree class="child" [_level]="_level+1" [expand]="expandLevel" [data-provider]="getDataProvider(data)" [data-field]="dataField" (select)="handleSelection($event)"></x-tree>' +
            '</div>' +
            '</div>',
        styles: [
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
        directives: [NgFor, NgIf, Label, Icon, TreeItem, Tree]
    }), 
    __metadata('design:paramtypes', [(typeof (_a = typeof ElementRef !== 'undefined' && ElementRef) === 'function' && _a) || Object])
], Tree);
var _a;
//# sourceMappingURL=Tree.js.map