import {AppViewManager, Injectable} from "angular2/core";
/**
 * Created by Nidin Vinayakan on 11-10-2015.
 */
@Injectable()
export class ComponentManager {

    static self:ComponentManager;

    constructor(private _viewManager:AppViewManager) {
        if (self) {
            throw {
                code: 0,
                name: "Singleton Error",
                message: "ComponentManager is singleton, someone already created it"
            };
        }
    }

    despose() {

    }

}
