import {Injectable, AppViewManager} from "angular2/core";
import {Dracula} from "./dracula/Dracula";
import {Skin} from "./Skin";
/**
 * Created by Nidin Vinayakan on 10-10-2015.
 */
@Injectable()
export class SkinManager{

    static self:SkinManager;


    private skins:Array<Skin>;
    public defaultSkin:Skin;

    constructor(private _viewManager:AppViewManager) {
        if (self) {
            throw {
                code: 0,
                name: "Singleton Error",
                message: "ComponentManager is singleton, someone already created it"
            };
        }
    }

    init(){
        this.skins = [
            new Dracula()
        ];

        this.defaultSkin = this.skins[0];
    }

}
