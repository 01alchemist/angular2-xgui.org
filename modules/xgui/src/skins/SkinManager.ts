/**
 * Created by Nidin Vinayakan on 10-10-2015.
 */

import {ISkin} from "xgui/src/skins/ISkin";
import {Dracula} from "xgui/src/skins/dracula/Dracula";

export class SkinManager{

    static instance:SkinManager;
    static getInstance():SkinManager{
        if(!SkinManager.instance){
            SkinManager.instance = new SkinManager();
        }
        return SkinManager.instance;
    }

    private skins:Array<ISkin>;
    public defaultSkin:ISkin;

    constructor(){
        this.skins = [
            new Dracula()
        ];

        this.defaultSkin = this.skins[0];
    }

}
