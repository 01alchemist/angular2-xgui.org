import {ISkin} from "../ISkin";
/**
 * Created by Nidin Vinayakan on 10-10-2015.
 */
export class Dracula implements ISkin{

    constructor(){

    }

    panel = {
        styles:[
            'x-panel{' +
            'min-width:212px;' +
            'max-width:1370px;' +
            'min-height:148px;' +
            'max-height:805px;' +
            'display: block;' +
            'border: 1px solid #282828;' +
            '}',
            '.stack-header{' +
            'display:block;' +
            'width:inherit;' +
            'height:11px;' +
            'border-top: #474747 1px solid;' +
            'border-bottom: #282828 1px solid;' +
            'background-color: #323232;' +
            '}',
            '.panel-title{' +
            'width:100px;' +
            '}'
        ]
    }
}
