import Foundation
import CoreGraphics
import ImageIO
import UniformTypeIdentifiers

func cropImage(sourcePath: String, targetPath: String, x: CGFloat, y: CGFloat, width: CGFloat, height: CGFloat) {
    let url = URL(fileURLWithPath: sourcePath)
    guard let imageSource = CGImageSourceCreateWithURL(url as CFURL, nil),
          let image = CGImageSourceCreateImageAtIndex(imageSource, 0, nil) else { return }
    let cropRect = CGRect(x: x, y: y, width: width, height: height)
    guard let croppedImage = image.cropping(to: cropRect) else { return }
    let targetUrl = URL(fileURLWithPath: targetPath)
    guard let destination = CGImageDestinationCreateWithURL(targetUrl as CFURL, UTType.png.identifier as CFString, 1, nil) else { return }
    CGImageDestinationAddImage(destination, croppedImage, nil)
    CGImageDestinationFinalize(destination)
}

let img_04_36 = "/Users/mac/Documents/bharatorganic/organic_frontend/public/assets/ChatGPT Image Sep 21, 2026, 04_36_08 PM.png"
let img_04_34 = "/Users/mac/Documents/bharatorganic/organic_frontend/public/assets/ChatGPT Image Sep 21, 2026, 04_34_45 PM.png"
let img_exact_card = "/Users/mac/Documents/bharatorganic/organic_frontend/public/assets/exact-card-perfect.png"

print("Images are ready in assets")
