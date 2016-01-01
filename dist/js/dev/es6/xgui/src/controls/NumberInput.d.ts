import { ElementRef } from 'angular2/core';
export declare class NumberInput {
    change: any;
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
