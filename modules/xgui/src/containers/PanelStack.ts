import {Component,View,EventEmitter,ElementRef} from 'angular2/core';
import {NgFor,NgIf} from 'angular2/common';
import {Panel} from "./Panel";
/**
 * Created by Nidin Vinayakan on 02-10-2015.
 */
@Component({
    selector:'x-panel-stack',
    properties:[]
})
@View({
    template:
    '<div class="stack-bound">' +
    '<div class="stack-container">' +
    '<div class="stack-header"></div>' +
    '<div class="stack-tabs">' +
    '<x-panel *ng-for="" [stacked]="true">' +
    '</div>' +
    '</div>' +
    '</div>',
    directives:[NgIf, NgFor, Panel]
})
export class StackBox{

    private _panels:Array<Panel>

    constructor(){

    }
}
