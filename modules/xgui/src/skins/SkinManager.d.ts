/**
 * Created by Nidin Vinayakan on 10-10-2015.
 */
import { ISkin } from "xgui/angular2-xgui";
export declare class SkinManager {
    static instance: SkinManager;
    static getInstance(): SkinManager;
    private skins;
    defaultSkin: ISkin;
    constructor();
}
