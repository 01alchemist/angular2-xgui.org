/**
 * Created by Nidin Vinayakan on 02-10-2015.
 */
var core;
(function (core) {
    var BaseEvent = (function () {
        function BaseEvent(type) {
            this.type = type;
        }
        return BaseEvent;
    })();
    core.BaseEvent = BaseEvent;
})(core || (core = {}));
//# sourceMappingURL=BaseEvent.js.map