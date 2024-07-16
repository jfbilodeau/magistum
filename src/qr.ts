import * as QRCode from "qrcode";

export class QrCode {
    constructor() {
        console.log('QR init')
    }

    async generate(url: string) {
        const encodedUrl = encodeURIComponent(url)

        const decodedText = decodeURIComponent(encodedUrl)

        const dataUrl = await QRCode.toDataURL(decodedText)

        return dataUrl
    }
}

export default class Qr {
}