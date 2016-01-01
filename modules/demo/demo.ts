import {Component, View} from "angular2/core";
import {bootstrap} from "angular2/platform/browser";
import {Icon} from "../xgui/src/controls/Icon";
import {Button} from "../xgui/src/controls/Button";
import {CheckBox} from "../xgui/src/controls/CheckBox";
import {NumberInput} from "../xgui/src/controls/NumberInput";
import {VectorInput} from "../xgui/src/controls/VectorInput";
import {Tree} from "../xgui/src/controls/Tree";

@Component({
    selector: 'gui-demo'
})
@View({
    templateUrl: 'modules/demo/template.html',
    directives: [
        Icon,
        Button,
        CheckBox,
        NumberInput,
        VectorInput,
        Tree
    ]
})
export class GUIDemo {

    vector;
    treeDataProvider;
    iconSrc;

    constructor(){
        this.vector = {x:554,y:0,z:0};
        this.iconSrc = "modules/demo/images/favicon.png";
        this.treeDataProvider = [
            {
                label:"level_1_1", collection:[
                    {label:"level_2_1", icon:"modules/demo/images/palette.png"},
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