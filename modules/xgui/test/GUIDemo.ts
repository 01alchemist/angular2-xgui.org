///<reference path="../typings/angular2/angular2.d.ts" />

import {bootstrap, Component, View} from "angular2/angular2";
import {Button, CheckBox, NumberInput, VectorInput} from "xgui/angular2-xgui";

@Component({
    selector: 'gui-demo'
})
@View({
    templateUrl: 'GUIDemoTemplate.html',
    directives: [
        Button,
        CheckBox,
        NumberInput,
        VectorInput
    ]
})
export class GUIDemo {

    vector;

    constructor(){
        this.vector = {x:554,y:0,z:0};
    }
    onButtonClick(){
        console.log("Button Clicked");
    }
    onVectorChange(event){
        console.log(event);
    }
    onAngleChange(event){
        console.log(event);
    }
}
bootstrap(GUIDemo);