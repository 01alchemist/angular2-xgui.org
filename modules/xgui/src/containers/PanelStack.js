System.register(['angular2/core', 'angular2/common', "./Panel"], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, common_1, Panel_1;
    var StackBox;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (common_1_1) {
                common_1 = common_1_1;
            },
            function (Panel_1_1) {
                Panel_1 = Panel_1_1;
            }],
        execute: function() {
            StackBox = (function () {
                function StackBox() {
                }
                StackBox = __decorate([
                    core_1.Component({
                        selector: 'x-panel-stack',
                        properties: []
                    }),
                    core_1.View({
                        template: '<div class="stack-bound">' +
                            '<div class="stack-container">' +
                            '<div class="stack-header"></div>' +
                            '<div class="stack-tabs">' +
                            '<x-panel *ngFor="" [stacked]="true">' +
                            '</div>' +
                            '</div>' +
                            '</div>',
                        directives: [common_1.NgIf, common_1.NgFor, Panel_1.Panel]
                    }), 
                    __metadata('design:paramtypes', [])
                ], StackBox);
                return StackBox;
            })();
            exports_1("StackBox", StackBox);
        }
    }
});
//# sourceMappingURL=PanelStack.js.map