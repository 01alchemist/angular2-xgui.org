/// <reference path="../../typings/angular2/angular2.d.ts" />
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") return Reflect.decorate(decorators, target, key, desc);
    switch (arguments.length) {
        case 2: return decorators.reduceRight(function(o, d) { return (d && d(o)) || o; }, target);
        case 3: return decorators.reduceRight(function(o, d) { return (d && d(target, key)), void 0; }, void 0);
        case 4: return decorators.reduceRight(function(o, d) { return (d && d(target, key, o)) || o; }, desc);
    }
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var angular2_1 = require('angular2/angular2');
var Label_1 = require("xgui/src/controls/Label");
var Icon_1 = require("xgui/src/controls/Icon");
var Assets_1 = require("xgui/src/assets/Assets");
var TreeItem = (function () {
    function TreeItem(elementRef) {
        this.toggle = new angular2_1.EventEmitter();
        this.select = new angular2_1.EventEmitter();
        this.defaultIcon = Assets_1.Assets.icon_folder_16;
        this.expanderClass = { "x-tree-expander": true, "x-tree-collapsed": !this._expanded, "x-tree-expanded": this._expanded };
        this._expanded = false;
        this._selected = false;
        this._elementRef = elementRef;
    }
    Object.defineProperty(TreeItem.prototype, "label", {
        get: function () {
            return this._data.label;
        },
        set: function (value) {
            this._data.label = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TreeItem.prototype, "data", {
        get: function () {
            return this._data;
        },
        set: function (value) {
            this._data = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TreeItem.prototype, "dataField", {
        get: function () {
            return this._dataField;
        },
        set: function (value) {
            this._dataField = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TreeItem.prototype, "selected", {
        get: function () {
            return this._selected;
        },
        set: function (value) {
            this._selected = value;
            if (value) {
                this._elementRef.nativeElement.classList.add("x-tree-item-selected");
            }
            else {
                this._elementRef.nativeElement.classList.remove("x-tree-item-selected");
            }
        },
        enumerable: true,
        configurable: true
    });
    TreeItem.prototype.hasDataProvider = function () {
        if (this.data.expanded) {
            this.expanderClass["x-tree-expanded"] = true;
            this.expanderClass["x-tree-collapsed"] = false;
        }
        this._expanded = this.data.expanded;
        return this.data[this.dataField] !== undefined;
    };
    TreeItem.prototype.getDataProvider = function (data) {
        return data[this.dataField];
    };
    TreeItem.prototype.onToggle = function (event) {
        this._expanded = !this._expanded;
        this.data.expanded = this._expanded;
        event.target.classList.remove(this._expanded ? "x-tree-collapsed" : "x-tree-expanded");
        event.target.classList.add(this._expanded ? "x-tree-expanded" : "x-tree-collapsed");
        this.toggle.next({ expanded: this._expanded, data: this.data });
    };
    TreeItem.prototype.onSelect = function (event) {
        this.select.next({ item: this });
    };
    TreeItem = __decorate([
        angular2_1.Component({
            selector: 'x-tree-item',
            properties: [
                'data:data',
                'dataField:data-field'
            ],
            events: ["toggle:toggle", "select:select"]
        }),
        angular2_1.View({
            template: '<div *ng-if="hasDataProvider()" [class]="expanderClass" (click)="onToggle($event)"></div>' +
                '<div class="x-tree-item-container" (^click)="onSelect($event)">' +
                '<x-icon class="x-tree-icon" [src]="data.icon || defaultIcon"></x-icon>' +
                '<x-label class="tree-label" [text]="data.label"></x-label>' +
                '</div>',
            styles: [
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
                    'cursor: pointer;' +
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
            directives: [angular2_1.NgFor, angular2_1.NgIf, angular2_1.CSSClass, Label_1.Label, Icon_1.Icon]
        }), 
        __metadata('design:paramtypes', [angular2_1.ElementRef])
    ], TreeItem);
    return TreeItem;
})();
exports.TreeItem = TreeItem;
//# sourceMappingURL=TreeItem.js.map