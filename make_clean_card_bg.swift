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

let src = "/Users/mac/Documents/bharatorganic/organic_frontend/public/assets/ChatGPT Image Sep 21, 2026, 02_07_12 PM.png"

// Crop exact Card Area from 02_07_12 PM.png
// Card boundary in image (1089x1445): x: 88, y: 395, width: 910, height: 655
cropImage(sourcePath: src, targetPath: "/Users/mac/Documents/bharatorganic/organic_frontend/public/assets/participation-card-bg-clean.png", x: 88, y: 395, width: 910, height: 655)

// Also let's crop the right-hand background leaf on section right side
// Right leaf in 02_07_12 PM or 02_04_41 PM:
let src2 = "/Users/mac/Documents/bharatorganic/organic_frontend/public/assets/ChatGPT Image Sep 21, 2026, 02_04_41 PM.png"
cropImage(sourcePath: src2, targetPath: "/Users/mac/Documents/bharatorganic/organic_frontend/public/assets/section-leaf-right.png", x: 500, y: 500, width: 490, height: 1000)

print("Saved clean card background and section leaf")
