/// <reference path="../../typings/angular2/angular2.d.ts" />

/**
 * Created by Nidin Vinayakan on 11-10-2015.
 */

import {AppViewManager, Injectable} from "angular2/angular2";

@Injectable()
export class ComponentManager{

    static instance:ComponentManager;
    static getInstance():ComponentManager{
        if(!ComponentManager.instance){
            ComponentManager.instance = new ComponentManager();
        }
        return ComponentManager.instance;
    }

    constructor(private _viewManager: AppViewManager){

    }

    despose(){

    }

}
