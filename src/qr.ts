import * as QRCode from "qrcode";

export class Qr {
    constructor() {
        console.log('QR init')

        document.getElementById(`fieldQrCode`).addEventListener('change',  async (event) => {
            const fieldQrCode = document.getElementById(`fieldQrCode`) as HTMLInputElement

            const url = fieldQrCode.value

            const qrCode = await this.generate(url)

            const qrCodeImage = document.getElementById(`qrCodeImage`) as HTMLImageElement
            qrCodeImage.src = qrCode

            const qrCodeLink = document.getElementById(`qrCodeLink`) as HTMLAnchorElement
            qrCodeLink.href = url
            qrCodeLink.innerText = url
        })
    }

    async generate(url: string) {
        const encodedUrl = encodeURIComponent(url)

        const decodedText = decodeURIComponent(encodedUrl)

        const dataUrl = await QRCode.toDataURL(decodedText)

        return dataUrl
    }
}