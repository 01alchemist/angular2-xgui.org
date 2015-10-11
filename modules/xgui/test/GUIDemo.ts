///<reference path="../typings/angular2/angular2.d.ts" />

import {bootstrap, Component, View} from "angular2/angular2";
import {
    Icon,
    Button,
    CheckBox,
    NumberInput,
    VectorInput,
    Tree,
    Panel
} from "xgui/angular2-xgui";

@Component({
    selector: 'gui-demo'
})
@View({
    templateUrl: 'GUIDemoTemplate.html',
    directives: [
        Icon,
        Button,
        CheckBox,
        NumberInput,
        VectorInput,
        Tree,
        Panel
    ]
})
export class GUIDemo {

    vector;
    treeDataProvider;
    iconSrc;

    constructor(){
        this.vector = {x:554,y:0,z:0};
        this.iconSrc = "images/favicon.png";
        this.treeDataProvider = [
            {
                label:"level_1_1", collection:[
                    {label:"level_2_1", icon:"images/palette.png"},
                    {label:"level_2_2"},
                    {label:"level_2_3"}
                ]
            },
            {
                label:"level_1_2", collection:[
                    {label:"level_2_1"},
                    {label:"level_2_2"},
                    {label:"level_2_3", collection:[
                        {label:"level_3_1"},
                        {label:"level_3_2"},
                        {label:"level_3_3",
                            collection:[
                                {label:"level_2_1"},
                                {label:"level_2_2"},
                                {label:"level_2_3", collection:[
                                    {label:"level_3_1"},
                                    {label:"level_3_2"},
                                    {label:"level_3_3",

                                    }
                                ]}
                            ]
                        }
                    ]}
                ]
            }
        ]
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
    onTreeItemSelect(event){
        console.log(event);
    }
}
bootstrap(GUIDemo);