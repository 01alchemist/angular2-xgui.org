/// <reference path="../../typings/angular2/angular2.d.ts" />

import {
    Component,
    View,
    CSSClass,
    NgFor,
    NgIf,
    ElementRef
} from 'angular2/angular2';

@Component({
    selector: 'x-icon',
    properties:[
        'src:src'
    ]
})
@View({
    template:'',
    styles:[
        'x-icon{' +
            'display: inline-block;' +
            'position: relative;' +
            'width: 16px;' +
            'height: 16px;' +
            'background-image: url(images/1444103546_folder.png);' +
        '}'
    ],
    directives: [CSSClass]
})

export class Icon {

    private _src:string;

    constructor() {
    }

    get src(){
        return this._src;
    }
    set src(value){
        this._src = value;

    }
}
