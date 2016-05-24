System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var BaseEvent;
    return {
        setters:[],
        execute: function() {
            BaseEvent = (function () {
                function BaseEvent(type) {
                    this.type = type;
                }
                return BaseEvent;
            }());
            exports_1("default", BaseEvent);
        }
    }
});
//# sourceMappingURL=BaseEvent.js.map