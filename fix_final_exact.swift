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

// Image 1: ChatGPT Image Sep 21, 2026, 02_07_12 PM.png (Size: 1089 x 1445)
let src1 = "/Users/mac/Documents/bharatorganic/organic_frontend/public/assets/ChatGPT Image Sep 21, 2026, 02_07_12 PM.png"
cropImage(sourcePath: src1, targetPath: "/Users/mac/Documents/bharatorganic/organic_frontend/public/assets/final-card-exact.png", x: 92, y: 395, width: 905, height: 655)

// Image 2: ChatGPT Image Sep 21, 2026, 02_04_41 PM.png (Size: 993 x 1584)
// Let's crop ONLY the right leaf from 02_04_41 PM.png:
// Top-right leaf in 02_04_41 PM: x: 750, y: 200, width: 240, height: 1100
let src2 = "/Users/mac/Documents/bharatorganic/organic_frontend/public/assets/ChatGPT Image Sep 21, 2026, 02_04_41 PM.png"
cropImage(sourcePath: src2, targetPath: "/Users/mac/Documents/bharatorganic/organic_frontend/public/assets/final-right-leaf.png", x: 740, y: 220, width: 250, height: 1000)

print("Crop complete")
