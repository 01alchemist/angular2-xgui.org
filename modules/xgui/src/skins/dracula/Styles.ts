import {IStyles} from "../IStyles";
import {StyleUtils} from "../../utils/StyleUtils";
/**
 * Created by Nidin Vinayakan on 31/5/2016.
 */
export class Styles implements IStyles {

    colors = {
        darkGray: "#393939",
        liteGray: "#3A3A3A"
    };

    gradients;

    constructor() {
        this.init();
    }

    private init() {
        this.gradients = {
            backgrounds: {
                inputField:
                    `.input-background{
                        background: red; /* For browsers that do not support gradients */
                        background: -webkit-linear-gradient(${this.colors.darkGray}, ${this.colors.liteGray}); /* For Safari 5.1 to 6.0 */
                        background: -o-linear-gradient(${this.colors.darkGray}, ${this.colors.liteGray}); /* For Opera 11.1 to 12.0 */
                        background: -moz-linear-gradient(${this.colors.darkGray}, ${this.colors.liteGray}); /* For Firefox 3.6 to 15 */
                        background: linear-gradient(${this.colors.darkGray}, ${this.colors.liteGray}); /* Standard syntax */
                    }`
            }
        };
        StyleUtils.addStyle(this.gradients.backgrounds.inputField);
    }
}