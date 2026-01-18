import sharp from 'sharp';
import { mkdir } from 'fs/promises';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const publicDir = join(__dirname, '..', 'public');
const teamDir = join(publicDir, 'team');
const signatureDir = join(publicDir, 'team', 'signature');

const photos = [
  { input: 'frans.jpeg', output: 'frans.jpg' },
  { input: 'david.jpeg', output: 'david.jpg' },
  { input: 'jan.jpeg', output: 'jan.jpg' },
];

async function processImages() {
  // Create signature directory
  await mkdir(signatureDir, { recursive: true });

  for (const photo of photos) {
    const inputPath = join(teamDir, photo.input);
    const outputPath = join(signatureDir, photo.output);

    console.log(`Processing ${photo.input}...`);

    await sharp(inputPath)
      .resize(150, 200, { fit: 'cover', position: 'top' }) // Small size for signatures
      .grayscale() // Convert to grayscale
      .modulate({ brightness: 1.2 }) // Increase brightness by 20%
      .jpeg({ quality: 85 }) // Good quality, smaller file
      .toFile(outputPath);

    console.log(`  -> Saved to ${outputPath}`);
  }

  console.log('\nDone! Optimized images saved to public/team/signature/');
}

processImages().catch(console.error);
