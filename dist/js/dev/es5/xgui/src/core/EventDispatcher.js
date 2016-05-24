/**
 * Created by Nidin Vinayakan on 02-10-2015.
 */
"use strict";
var EventDispatcher = (function () {
    function EventDispatcher() {
        this.eventMaps = {};
        this.pendingEventMap = {};
        this.pendingEvents = [];
    }
    EventDispatcher.prototype.addEventListener = function (type, listener, context) {
        if (this.eventMaps[type] === undefined) {
            this.eventMaps[type] = [];
        }
        this.eventMaps[type].push({ method: listener, context: context });
        if (this.pendingEventMap[type] != undefined) {
            listener.call(context, this.pendingEvents[this.pendingEventMap[type]]);
        }
    };
    EventDispatcher.prototype.hasEventListener = function (type, listener) {
        if (this.eventMaps[type] === undefined) {
            return false;
        }
        return (this.eventMaps[type] !== undefined && this.eventMaps[type].indexOf(listener) !== -1);
    };
    EventDispatcher.prototype.removeEventListener = function (type, listener) {
        if (this.eventMaps[type] !== undefined) {
            this.eventMaps[type].splice(this.eventMaps[type].indexOf(listener), 1);
        }
    };
    EventDispatcher.prototype.dispatchEvent = function (event) {
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
    };
    return EventDispatcher;
}());
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = EventDispatcher;
//# sourceMappingURL=EventDispatcher.js.map