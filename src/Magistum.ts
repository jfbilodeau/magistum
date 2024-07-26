import {Settings} from './settings'
import {Qr} from "./qr";

export class Magistum {
    public readonly settings = new Settings()
    public readonly qr = new Qr()

    constructor() {
    }

    updatePage() {
        console.log('updatePage');
    }
}

export const magistum = new Magistum()