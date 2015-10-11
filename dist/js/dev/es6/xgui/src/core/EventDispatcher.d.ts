/**
 * Created by Nidin Vinayakan on 02-10-2015.
 */
import BaseEvent from "../events/BaseEvent";
export default class EventDispatcher {
    eventMaps: any;
    pendingEventMap: any;
    pendingEvents: Array<BaseEvent>;
    constructor();
    addEventListener(type: string, listener: Function, context?: any): void;
    hasEventListener(type: string, listener: Function): boolean;
    removeEventListener(type: string, listener: Function): void;
    dispatchEvent(event: BaseEvent): void;
}
