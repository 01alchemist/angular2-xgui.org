System.register(["../Skin"], function(exports_1) {
    var __extends = (this && this.__extends) || function (d, b) {
        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
    var Skin_1;
    var Dracula;
    return {
        setters:[
            function (Skin_1_1) {
                Skin_1 = Skin_1_1;
            }],
        execute: function() {
            Dracula = (function (_super) {
                __extends(Dracula, _super);
                function Dracula() {
                    _super.call(this);
                    this.panel = {
                        styles: [
                            'x-panel{' +
                                'min-width:212px;' +
                                'max-width:1370px;' +
                                'min-height:148px;' +
                                'max-height:805px;' +
                                'display: block;' +
                                'border: 1px solid #282828;' +
                                '}',
                            '.stack-header{' +
                                'display:block;' +
                                'width:inherit;' +
                                'height:11px;' +
                                'border-top: #474747 1px solid;' +
                                'border-bottom: #282828 1px solid;' +
                                'background-color: #323232;' +
                                '}',
                            '.panel-title{' +
                                'width:100px;' +
                                '}'
                        ]
                    };
                }
                return Dracula;
            })(Skin_1.Skin);
            exports_1("Dracula", Dracula);
        }
    }
});
//# sourceMappingURL=Dracula.js.map