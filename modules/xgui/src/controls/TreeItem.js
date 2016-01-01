System.register(['angular2/core', 'angular2/common', "./Label", "./Icon", "../assets/Assets", "../utils/StyleUtils"], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, common_1, Label_1, Icon_1, Assets_1, StyleUtils_1;
    var TreeItem, css;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (common_1_1) {
                common_1 = common_1_1;
            },
            function (Label_1_1) {
                Label_1 = Label_1_1;
            },
            function (Icon_1_1) {
                Icon_1 = Icon_1_1;
            },
            function (Assets_1_1) {
                Assets_1 = Assets_1_1;
            },
            function (StyleUtils_1_1) {
                StyleUtils_1 = StyleUtils_1_1;
            }],
        execute: function() {
            TreeItem = (function () {
                function TreeItem(elementRef) {
                    this.toggle = new core_1.EventEmitter();
                    this.select = new core_1.EventEmitter();
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
                    this.toggle.emit({ expanded: this._expanded, data: this.data });
                };
                TreeItem.prototype.onSelect = function (event) {
                    this.select.emit({ item: this });
                };
                TreeItem = __decorate([
                    core_1.Component({
                        selector: 'x-tree-item',
                        properties: [
                            'data:data',
                            'dataField:data-field'
                        ],
                        events: ["toggle:toggle", "select:select"]
                    }),
                    core_1.View({
                        template: '<div *ngIf="hasDataProvider()" [ngClass]="expanderClass" (click)="onToggle($event)"></div>' +
                            '<div class="x-tree-item-container" (^click)="onSelect($event)">' +
                            '<x-icon class="x-tree-icon" [src]="data.icon || defaultIcon"></x-icon>' +
                            '<x-label class="tree-label" [text]="data.label"></x-label>' +
                            '</div>',
                        styles: [
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
                        directives: [common_1.NgFor, common_1.NgIf, common_1.NgClass, Label_1.Label, Icon_1.Icon]
                    }), 
                    __metadata('design:paramtypes', [core_1.ElementRef])
                ], TreeItem);
                return TreeItem;
            })();
            exports_1("TreeItem", TreeItem);
            css = 'x-tree-item{' +
                'display: inline-block;' +
                'position: relative;' +
                'padding-left: 5px;' +
                '}' +
                'x-tree-item:hover{' +
                'background-color: #3E698E;' +
                '}';
            StyleUtils_1.StyleUtils.addStyle(css);
        }
    }
});
//# sourceMappingURL=TreeItem.js.map