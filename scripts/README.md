# Image Conversion Script

This script converts the SVG placeholder images to PNG format for use in metadata tags.

## Usage

1. Install the required dependency:
   ```bash
   npm install sharp
   ```

2. Run the conversion script:
   ```bash
   node scripts/convert-images.js
   ```

This will create the following PNG files in the `public` directory:
- `og-image.png` (1200×630) - OpenGraph/social sharing
- `twitter-image.png` (1200×630) - Twitter cards
- `logo.png` (200×200) - Structured data logo
- `apple-touch-icon.png` (180×180) - iOS home screen
- `favicon-32x32.png` (32×32) - Browser favicon
- `favicon-16x16.png` (16×16) - Browser favicon
- `screenshot.png` (1200×800) - Structured data screenshot

## Alternative: Use Online Converters

If you prefer not to install dependencies, you can also convert the SVG files to PNG using:
- https://cloudconvert.com/svg-to-png
- https://www.svgtopng.com/
- https://svgconverter.com/

Just upload each SVG file and download the PNG at the specified dimensions.

## Replace with Your Brand Assets

These are placeholder images created for SEO purposes. Replace them with your actual brand assets when ready:
- Use your brand colors and logo
- Add real screenshots of your application
- Ensure images are optimized for web (compressed, proper format)

