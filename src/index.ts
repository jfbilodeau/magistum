import {Settings} from './settings'
import {Qr} from "./qr";

export class Magister {
    public readonly settings = new Settings()
    public readonly qr = new Qr()

    constructor() {
    }

    updatePage() {
        console.log('updatePage');
    }
}

export const magister = new Magister()