import { ElementRef } from 'angular2/angular2';
export declare class VectorInput {
    change: any;
    availableWidth: number;
    elements: any;
    private _elementRef;
    private _inputWidth;
    private _label;
    private _vector;
    constructor(elementRef: ElementRef);
    label: string;
    inputWidth: number;
    vector: any;
    onInput(event: any): void;
}
