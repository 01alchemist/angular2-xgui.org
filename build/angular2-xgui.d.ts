// Generated by dts-bundle v0.3.0

declare module 'xgui/angular2-xgui' {
    export * from "__xgui/angular2-xgui/modules/xgui/xgui-core";
}

declare module '__xgui/angular2-xgui/modules/xgui/xgui-core' {
    export * from "__xgui/angular2-xgui/modules/xgui/src/controls/xcontrols";
}

declare module '__xgui/angular2-xgui/modules/xgui/src/controls/xcontrols' {
    export * from "__xgui/angular2-xgui/modules/xgui/src/controls/Label";
    export * from "__xgui/angular2-xgui/modules/xgui/src/controls/Icon";
    export * from "__xgui/angular2-xgui/modules/xgui/src/controls/Button";
    export * from "__xgui/angular2-xgui/modules/xgui/src/controls/CheckBox";
    export * from "__xgui/angular2-xgui/modules/xgui/src/controls/NumberInput";
    export * from "__xgui/angular2-xgui/modules/xgui/src/controls/VectorInput";
    export * from "__xgui/angular2-xgui/modules/xgui/src/controls/TreeItem";
    export * from "__xgui/angular2-xgui/modules/xgui/src/controls/Tree";
}

declare module '__xgui/angular2-xgui/modules/xgui/src/controls/Label' {
    export class Label {
        constructor();
        label: string;
    }
}

declare module '__xgui/angular2-xgui/modules/xgui/src/controls/Icon' {
    export class Icon {
        constructor();
        src: string;
    }
}

declare module '__xgui/angular2-xgui/modules/xgui/src/controls/Button' {
    /**
      * Created by Nidin Vinayakan on 02-10-2015.
      */
    import { EventEmitter } from 'angular2/angular2';
    export class Button {
        click: EventEmitter;
        elements: any;
        constructor();
        label: string;
    }
}

declare module '__xgui/angular2-xgui/modules/xgui/src/controls/CheckBox' {
    /**
      * Created by Nidin Vinayakan on 02-10-2015.
      */
    import { EventEmitter } from 'angular2/angular2';
    export class CheckBox {
        click: EventEmitter;
        elements: any;
        constructor();
        label: string;
    }
}

declare module '__xgui/angular2-xgui/modules/xgui/src/controls/NumberInput' {
    import { EventEmitter, ElementRef } from 'angular2/angular2';
    export class NumberInput {
        change: EventEmitter;
        availableWidth: number;
        constructor(elementRef: ElementRef);
        label: string;
        inputWidth: number;
        value: any;
        onInput(event: any, isKeyInput?: boolean): void;
    }
}

declare module '__xgui/angular2-xgui/modules/xgui/src/controls/VectorInput' {
    import { EventEmitter, ElementRef } from 'angular2/angular2';
    export class VectorInput {
        change: EventEmitter;
        availableWidth: number;
        elements: any;
        constructor(elementRef: ElementRef);
        label: string;
        inputWidth: number;
        vector: any;
        onInput(event: any): void;
    }
}

declare module '__xgui/angular2-xgui/modules/xgui/src/controls/TreeItem' {
    import { EventEmitter, ElementRef } from 'angular2/angular2';
    export class TreeItem {
        select: EventEmitter;
        constructor(elementRef: ElementRef);
        label: any;
        data: any;
        dataField: string;
    }
}

declare module '__xgui/angular2-xgui/modules/xgui/src/controls/Tree' {
    import { EventEmitter, ElementRef } from 'angular2/angular2';
    export class Tree {
        select: EventEmitter;
        isChild: boolean;
        constructor(elementRef: ElementRef);
        dataProvider: any;
        dataField: string;
        hasDataProvider(data: any): boolean;
        getDataProvider(data: any): any;
    }
}

