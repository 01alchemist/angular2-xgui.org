import { EventEmitter } from '@angular/core';
/**
 * Created by Nidin Vinayakan on 02-10-2015.
 */
export declare class Button {
    click: EventEmitter<{}>;
    elements: any;
    private _label;
    constructor();
    label: string;
}
