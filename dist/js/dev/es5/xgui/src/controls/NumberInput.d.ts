import { EventEmitter, ElementRef } from '@angular/core';
export declare class NumberInput {
    change: EventEmitter<{}>;
    availableWidth: number;
    private _elementRef;
    private _inputWidth;
    private _label;
    private _value;
    constructor(elementRef: ElementRef);
    ngAfterViewInit(): void;
    label: string;
    inputWidth: number;
    value: any;
    onInput(event: any, isKeyInput?: boolean): void;
}
