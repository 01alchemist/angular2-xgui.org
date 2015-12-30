import {Component, View} from "angular2/core";
import {Icon} from "../src/controls/Icon";
import {Button} from "../src/controls/Button";
import {CheckBox} from "../src/controls/CheckBox";
import {NumberInput} from "../src/controls/NumberInput";
import {VectorInput} from "../src/controls/VectorInput";
import {Tree} from "../src/controls/Tree";
import {Panel} from "../src/containers/Panel";
import {bootstrap} from "angular2/bootstrap";

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