System.register(['angular2/core', 'angular2/common', "../utils/StyleUtils"], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, common_1, StyleUtils_1;
    var Button, css;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (common_1_1) {
                common_1 = common_1_1;
            },
            function (StyleUtils_1_1) {
                StyleUtils_1 = StyleUtils_1_1;
            }],
        execute: function() {
            Button = (function () {
                function Button() {
                    this.click = new core_1.EventEmitter();
                }
                Object.defineProperty(Button.prototype, "label", {
                    get: function () {
                        return this._label;
                    },
                    set: function (value) {
                        this._label = value;
                    },
                    enumerable: true,
                    configurable: true
                });
                Button = __decorate([
                    core_1.Component({
                        selector: 'x-button',
                        properties: [
                            'label:label'
                        ],
                        events: ["click:click"]
                    }),
                    core_1.View({
                        template: '<div class="button-label">{{ label }}</div>',
                        styles: [
                            '.button-label{display:block; padding: 2px 5px 2px 5px;}'
                        ],
                        directives: [common_1.NgFor, common_1.NgIf]
                    }), 
                    __metadata('design:paramtypes', [])
                ], Button);
                return Button;
            })();
            exports_1("Button", Button);
            css = 'x-button{' +
                'cursor: pointer;' +
                'margin: 5px;' +
                'display: inline-block;' +
                'position: relative;' +
                'padding: 2px;' +
                'height: 21px;' +
                'background-color: #5D5D5D;' +
                '}' +
                'x-button:hover{' +
                'background-color: #4C4C4C;' +
                '}' +
                'x-button:active{' +
                'background-color: #3879D9;' +
                '}';
            StyleUtils_1.StyleUtils.addStyle(css);
        }
    }
});
//# sourceMappingURL=Button.js.map