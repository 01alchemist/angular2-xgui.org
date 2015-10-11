/// <reference path="../../typings/angular2/angular2.d.ts" />

/**
 * Created by Nidin Vinayakan on 02-10-2015.
 */


import {Component, View, NgIf, NgFor} from "angular2/angular2";
import {Panel} from "xgui/angular2-xgui";

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
