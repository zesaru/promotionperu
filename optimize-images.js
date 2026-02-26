const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const inputDir = 'public/images/investment-seminar-2025';
const outputDir = 'public/images/investment-seminar-2025/optimized';

// Create output directory
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

const images = [
  'IMG_7492.JPG',
  'IMG_7494.JPG',
  'IMG_7503.JPG',
  'IMG_7504.JPG',
  'IMG_7505.JPG',
  'IMG_7506.JPG',
  'IMG_7507.JPG',
  'IMG_7508.JPG',
  'IMG_7510.JPG',
  'IMG_7511.JPG'
];

async function optimizeImages() {
  for (const image of images) {
    const inputPath = path.join(inputDir, image);
    const outputPath = path.join(outputDir, image.replace('.JPG', '.webp'));

    try {
      await sharp(inputPath)
        .resize(1200, 800, {
          fit: 'inside',
          withoutEnlargement: true
        })
        .webp({
          quality: 80,
          effort: 6
        })
        .toFile(outputPath);

      console.log(`Optimized: ${image} -> ${path.basename(outputPath)}`);
    } catch (error) {
      console.error(`Error optimizing ${image}:`, error.message);
    }
  }
}

optimizeImages().then(() => {
  console.log('Image optimization complete!');
}).catch(console.error);