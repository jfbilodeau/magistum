import {magistum} from "../Magistum";

(() => {
    const fieldQrCode = document.getElementById(`fieldQrCode`) as HTMLInputElement

    fieldQrCode.addEventListener('change', async (event) => {
        const url = fieldQrCode.value

        const encodedUrl = encodeURIComponent(url)

        const decodedText = decodeURIComponent(encodedUrl)

        const dataUrl = await magistum.qr.generate(decodedText)

        const qrCodeImage = document.getElementById(`qrCodeImage`) as HTMLImageElement
        qrCodeImage.src = dataUrl

        const qrCodeLink = document.getElementById(`qrCodeLink`) as HTMLAnchorElement
        qrCodeLink.href = url
        qrCodeLink.innerText = url
    })
})()