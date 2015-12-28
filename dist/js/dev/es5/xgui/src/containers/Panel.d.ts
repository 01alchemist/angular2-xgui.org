/**
 * Created by Nidin Vinayakan on 02-10-2015.
 */
import { ElementRef, ViewContainerRef } from "angular2/angular2";
export declare class Panel {
    arrowIcon: any;
    closeIcon: any;
    stacked: boolean;
    name: string;
    titleWidth: number;
    titleHeight: number;
    _elementRef: ElementRef;
    _containerRef: ViewContainerRef;
    stackHeadDisplay: string;
    constructor(elementRef: ElementRef, containerRef: ViewContainerRef);
    handleMouseEvent(event: any): void;
    close(): void;
}
