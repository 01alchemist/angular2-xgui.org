import { ElementRef, ViewContainerRef } from '@angular/core';
/**
 * Created by Nidin Vinayakan on 02-10-2015.
 */
export declare class Panel {
    arrowIcon: string;
    closeIcon: string;
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
