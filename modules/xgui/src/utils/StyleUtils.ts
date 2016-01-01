/**
 * Created by Nidin Vinayakan on 01-01-2016.
 */
export class StyleUtils{

    static addStyle(css:string){
        var style:any = document.createElement('style');
        if (style.styleSheet) {
            style.styleSheet.cssText = css;
        } else {
            style.appendChild(document.createTextNode(css));
        }
        document.getElementsByTagName('head')[0].appendChild(style);
    }
}
