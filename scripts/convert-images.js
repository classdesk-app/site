/**
 * Image Conversion Script
 * Converts SVG placeholders to PNG format for metadata
 * 
 * Usage: node scripts/convert-images.js
 * 
 * Requires: sharp package
 * Install with: npm install sharp
 */

const fs = require('fs');
const path = require('path');

// Check if sharp is available
let sharp;
try {
  sharp = require('sharp');
} catch (e) {
  console.error('Error: sharp package not found.');
  console.error('Please install it with: npm install sharp');
  process.exit(1);
}

const publicDir = path.join(__dirname, '..', 'public');

const conversions = [
  { input: 'og-image.svg', output: 'og-image.png', width: 1200, height: 630 },
  { input: 'twitter-image.svg', output: 'twitter-image.png', width: 1200, height: 630 },
  { input: 'logo.svg', output: 'logo.png', width: 200, height: 200 },
  { input: 'screenshot.svg', output: 'screenshot.png', width: 1200, height: 800 },
  { input: 'logo.svg', output: 'apple-touch-icon.png', width: 180, height: 180 },
  { input: 'logo.svg', output: 'favicon-32x32.png', width: 32, height: 32 },
  { input: 'logo.svg', output: 'favicon-16x16.png', width: 16, height: 16 },
];

async function convertImages() {
  console.log('Starting image conversion...\n');
  
  for (const { input, output, width, height } of conversions) {
    const inputPath = path.join(publicDir, input);
    const outputPath = path.join(publicDir, output);
    
    try {
      await sharp(inputPath)
        .resize(width, height)
        .png()
        .toFile(outputPath);
      
      console.log(`✓ Created ${output} (${width}x${height})`);
    } catch (error) {
      console.error(`✗ Failed to create ${output}:`, error.message);
    }
  }
  
  console.log('\nImage conversion complete!');
  console.log('\nNote: These are placeholder images. Replace them with your actual brand assets when ready.');
}

convertImages().catch(console.error);

