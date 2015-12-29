System.register(['angular2/angular2', 'xgui/src/controls/NumberInput'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var angular2_1, NumberInput_1;
    var VectorInput;
    return {
        setters:[
            function (angular2_1_1) {
                angular2_1 = angular2_1_1;
            },
            function (NumberInput_1_1) {
                NumberInput_1 = NumberInput_1_1;
            }],
        execute: function() {
            VectorInput = (function () {
                function VectorInput(elementRef) {
                    this.change = new angular2_1.EventEmitter();
                    this._elementRef = elementRef;
                    this.vector = this.vector || { X: 0, Y: 0, Z: 0 };
                }
                Object.defineProperty(VectorInput.prototype, "label", {
                    get: function () {
                        return this._label;
                    },
                    set: function (value) {
                        this._label = value;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(VectorInput.prototype, "inputWidth", {
                    get: function () {
                        this.availableWidth = this._elementRef.nativeElement.parentElement.offsetWidth || 250;
                        this._inputWidth = (this.availableWidth - (10 + (this.elements.length * 10))) / this.elements.length;
                        return this._inputWidth;
                    },
                    set: function (value) {
                        this._inputWidth = value;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(VectorInput.prototype, "vector", {
                    get: function () {
                        return this._vector;
                    },
                    set: function (value) {
                        this._vector = value;
                        this.elements = [];
                        for (var element in this._vector) {
                            if (this._vector.hasOwnProperty(element)) {
                                this.elements.push({
                                    label: element.toUpperCase(),
                                    value: this.vector[element]
                                });
                            }
                        }
                    },
                    enumerable: true,
                    configurable: true
                });
                VectorInput.prototype.onInput = function (event) {
                    var value = event.value;
                    var element = event.label.toLowerCase();
                    this.vector[element] = value;
                    this.change.next({ value: value, element: element, vector: this.vector });
                };
                VectorInput = __decorate([
                    angular2_1.Component({
                        selector: 'vector-input',
                        properties: [
                            'vector:vector',
                            'label:label'
                        ],
                        events: ['change:change']
                    }),
                    angular2_1.View({
                        template: '<div class="label">{{ label }}</div> ' +
                            '<div class="input-group"> ' +
                            '<div *ng-for="#element of elements" [style.width]="inputWidth" class="input-element"> ' +
                            '<number-input [label]="element.label" [value]="element.value" (change)="onInput($event)"></number-input>' +
                            '</div>' +
                            '</div>',
                        styles: [
                            'vector-input{' +
                                'display: block;' +
                                'position: relative;' +
                                'padding: 5px;' +
                                'width: auto;' +
                                '}',
                            '.input-group{' +
                                'position: relative;' +
                                'display: flex;' +
                                'padding-top: 5px;' +
                                'padding-left: 5px;' +
                                '}',
                            '.input-element{' +
                                'font-size: 0.9em;' +
                                'position: relative;' +
                                'display: flex;' +
                                'padding-right: 10px;' +
                                '}'
                        ],
                        directives: [angular2_1.NgFor, angular2_1.NgIf, angular2_1.CSSClass, NumberInput_1.NumberInput]
                    }), 
                    __metadata('design:paramtypes', [angular2_1.ElementRef])
                ], VectorInput);
                return VectorInput;
            })();
            exports_1("VectorInput", VectorInput);
        }
    }
});
//# sourceMappingURL=VectorInput.js.map