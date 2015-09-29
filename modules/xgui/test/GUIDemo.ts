///<reference path="../typings/angular2/angular2.d.ts" />

import {bootstrap, Component, View} from "angular2/angular2";
import {VectorInput} from "xgui/angular2-xgui";

@Component({
    selector: 'gui-demo'
})
@View({
    templateUrl: 'GUIDemoTemplate.html',
    directives: [
        VectorInput
    ]
})
export class GUIDemo {

    vector;

    constructor(){
        this.vector = {x:554,y:0,z:0};
    }
    onVectorChange(event){
        console.log(event);
    }
}
bootstrap(GUIDemo);