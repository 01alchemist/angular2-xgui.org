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
var TreeItem_1 = require("xgui/src/controls/TreeItem");
var Tree = (function () {
    function Tree(elementRef) {
        this.select = new angular2_1.EventEmitter();
        this._level = 0;
        this._expandLevel = 0;
        this._elementRef = elementRef;
        this.dataField = "data";
    }
    Object.defineProperty(Tree.prototype, "selectedItem", {
        get: function () {
            return Tree._selectedItem;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Tree.prototype, "dataProvider", {
        get: function () {
            return this._dataProvider;
        },
        set: function (value) {
            this._dataProvider = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Tree.prototype, "dataField", {
        get: function () {
            return this._dataField;
        },
        set: function (value) {
            this._dataField = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Tree.prototype, "expandLevel", {
        get: function () {
            return this._expandLevel == Number.POSITIVE_INFINITY ? "all" : this._expandLevel == -1 ? "none" : this._expandLevel.toString();
        },
        set: function (value) {
            this._expandLevel = value == "all" ? Number.POSITIVE_INFINITY : value == "none" ? -1 : parseInt(value);
        },
        enumerable: true,
        configurable: true
    });
    Tree.prototype.isLevelExpanded = function () {
        return this._expandLevel == Number.POSITIVE_INFINITY || this._expandLevel > this._level;
    };
    Tree.prototype.isExpanded = function (data) {
        if (this.isLevelExpanded() && data.expanded == undefined) {
            data.expanded = true;
        }
        return data.expanded;
    };
    Tree.prototype.hasDataProvider = function (data) {
        return data[this.dataField] !== undefined;
    };
    Tree.prototype.getDataProvider = function (data) {
        return data[this.dataField];
    };
    Tree.prototype.toggle = function (event) {
        if (this.isLevelExpanded() && event.data.expanded == undefined) {
            event.data.expanded = true;
        }
    };
    Tree.prototype.expand = function () {
        this._expandLevel = this._level;
    };
    Tree.prototype.collapse = function () {
        this._expandLevel = this._level - 1;
    };
    Tree.prototype.handleSelection = function (event) {
        if (Tree._selectedItem) {
            Tree._selectedItem.selected = false;
        }
        Tree._selectedItem = event.item;
        Tree._selectedItem.selected = true;
        this.select.next(event);
    };
    Tree._selectedItem = null;
    Tree = __decorate([
        angular2_1.Component({
            selector: 'x-tree',
            properties: [
                '_level:_level',
                'expandLevel:expand',
                'dataField:data-field',
                'dataProvider:data-provider'
            ],
            events: ["select:select"]
        }),
        angular2_1.View({
            template: '<div class="x-tree-item" *ng-for="#data of dataProvider">' +
                '<x-tree-item [data]="data" [data-field]="dataField" (toggle)="toggle($event)" (select)="handleSelection($event)"></x-tree-item>' +
                '<div *ng-if="hasDataProvider(data) && (isExpanded(data))">' +
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
            directives: [angular2_1.NgFor, angular2_1.NgIf, angular2_1.CSSClass, Label_1.Label, Icon_1.Icon, TreeItem_1.TreeItem, Tree]
        }), 
        __metadata('design:paramtypes', [angular2_1.ElementRef])
    ], Tree);
    return Tree;
})();
exports.Tree = Tree;
//# sourceMappingURL=Tree.js.map