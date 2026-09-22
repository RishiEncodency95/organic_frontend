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

let src1 = "/Users/mac/Documents/bharatorganic/organic_frontend/public/assets/ChatGPT Image Sep 21, 2026, 02_07_12 PM.png"
let src2 = "/Users/mac/Documents/bharatorganic/organic_frontend/public/assets/ChatGPT Image Sep 21, 2026, 02_04_41 PM.png"

// 1. EXACT participation card from 02_07_12 PM.png:
// Dimensions of 02_07_12 PM: 1089 x 1445
// In 02_07_12 PM, the card is in the lower middle area: x: 92, y: 395, width: 905, height: 655
cropImage(sourcePath: src1, targetPath: "/Users/mac/Documents/bharatorganic/organic_frontend/public/assets/exact-card-perfect.png", x: 92, y: 395, width: 905, height: 655)

// 2. Right side section leaf branch from 02_04_41 PM.png:
// 02_04_41 PM dimensions: 993 x 1584
// Leaves on the right side of 02_04_41 PM: x: 600, y: 200, width: 390, height: 1200
cropImage(sourcePath: src2, targetPath: "/Users/mac/Documents/bharatorganic/organic_frontend/public/assets/right-section-leaf-exact.png", x: 550, y: 200, width: 440, height: 1200)

print("Saved exact-card-perfect.png and right-section-leaf-exact.png")
