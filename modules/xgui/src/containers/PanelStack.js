System.register(["angular2/angular2", "xgui/angular2-xgui"], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var angular2_1, angular2_xgui_1;
    var StackBox;
    return {
        setters:[
            function (angular2_1_1) {
                angular2_1 = angular2_1_1;
            },
            function (angular2_xgui_1_1) {
                angular2_xgui_1 = angular2_xgui_1_1;
            }],
        execute: function() {
            StackBox = (function () {
                function StackBox() {
                }
                StackBox = __decorate([
                    angular2_1.Component({
                        selector: 'x-panel-stack',
                        properties: []
                    }),
                    angular2_1.View({
                        template: '<div class="stack-bound">' +
                            '<div class="stack-container">' +
                            '<div class="stack-header"></div>' +
                            '<div class="stack-tabs">' +
                            '<x-panel *ng-for="" [stacked]="true">' +
                            '</div>' +
                            '</div>' +
                            '</div>',
                        directives: [angular2_1.NgIf, angular2_1.NgFor, angular2_xgui_1.Panel]
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