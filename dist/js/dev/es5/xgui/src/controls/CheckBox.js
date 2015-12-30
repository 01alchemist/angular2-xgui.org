var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/**
 * Created by Nidin Vinayakan on 02-10-2015.
 */
var core_1 = require('angular2/core');
var common_1 = require('angular2/common');
var CheckBox = (function () {
    function CheckBox() {
        this.click = new core_1.EventEmitter();
    }
    Object.defineProperty(CheckBox.prototype, "label", {
        get: function () {
            return this._label;
        },
        set: function (value) {
            this._label = value;
        },
        enumerable: true,
        configurable: true
    });
    CheckBox = __decorate([
        core_1.Component({
            selector: 'x-checkbox',
            properties: [
                'label:label'
            ],
            events: ["click:click"]
        }),
        core_1.View({
            template: '<div class="x-checkbox">' +
                '<div *ng-if="label" class="checkbox-label">{{ label }}</div> ' +
                '<input class="x-checkbox-input" type="checkbox"/>' +
                '</div>',
            styles: [
                '.x-checkbox{' +
                    'cursor: pointer;' +
                    'margin: 5px;' +
                    'display: inline-block;' +
                    'position: relative;' +
                    'padding: 2px;' +
                    'height: 21px;' +
                    '}',
                '.x-checkbox:hover{' +
                    '}',
                '.x-checkbox:active{' +
                    '}',
                '.x-checkbox-input{' +
                    'cursor: pointer;' +
                    'padding: 2px;' +
                    'display: inline-block;' +
                    'background-color: #50524F;' +
                    'color: #fff;' +
                    'font-size: 0.9em;' +
                    'border: 0px solid #262825;' +
                    'border-top: 1px solid #2F2F2F; ' +
                    '}',
                '.checkbox-label{' +
                    'display:inline-block; ' +
                    'padding: 2px 5px 2px 5px;' +
                    '}'
            ],
            directives: [common_1.NgFor, common_1.NgIf]
        }), 
        __metadata('design:paramtypes', [])
    ], CheckBox);
    return CheckBox;
})();
exports.CheckBox = CheckBox;
//# sourceMappingURL=CheckBox.js.map