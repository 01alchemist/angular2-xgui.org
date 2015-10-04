/**
 * Created by Nidin Vinayakan on 02-10-2015.
 */
var core;
(function (core) {
    class EventDispatcher {
        constructor() {
            this.eventMaps = {};
            this.pendingEventMap = {};
            this.pendingEvents = [];
        }
        addEventListener(type, listener, context) {
            if (this.eventMaps[type] === undefined) {
                this.eventMaps[type] = [];
            }
            this.eventMaps[type].push({ method: listener, context: context });
            if (this.pendingEventMap[type] != undefined) {
                listener.call(context, this.pendingEvents[this.pendingEventMap[type]]);
            }
        }
        hasEventListener(type, listener) {
            if (this.eventMaps[type] === undefined) {
                return false;
            }
            return (this.eventMaps[type] !== undefined && this.eventMaps[type].indexOf(listener) !== -1);
        }
        removeEventListener(type, listener) {
            if (this.eventMaps[type] !== undefined) {
                this.eventMaps[type].splice(this.eventMaps[type].indexOf(listener), 1);
            }
        }
        dispatchEvent(event) {
            var listeners = this.eventMaps[event.type];
            if (listeners !== undefined) {
                for (var i = 0; i < listeners.length; i++) {
                    var listener = listeners[i];
                    listener.method.call(listener.context, event);
                }
            }
            else {
                this.pendingEventMap[event.type] = this.pendingEvents.push(event) - 1;
            }
        }
    }
    core.EventDispatcher = EventDispatcher;
})(core || (core = {}));
//# sourceMappingURL=EventDispatcher.js.map