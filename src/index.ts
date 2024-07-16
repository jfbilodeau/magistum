import * as QRCode from 'qrcode'

import {Settings} from './settings'
import {QrCode} from "./qr";

export class Magister {
    public readonly settings = new Settings()
    public readonly qrCode = new QrCode()

    constructor() {
    }

    updatePage() {
        console.log('updatePage');
    }
}

export const magister = new Magister()