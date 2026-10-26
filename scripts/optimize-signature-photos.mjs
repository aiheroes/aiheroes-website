import sharp from 'sharp';
import { mkdir, readFile } from 'fs/promises';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

// Images for the e-mail signature (generator: aiheroes-hub/src/pages/email-signature.tsx).
// The signature shows the portrait at 84x112 and the logo at 56x18; both are saved at 3x.
const __dirname = dirname(fileURLToPath(import.meta.url));
const root = join(__dirname, '..');
const outDir = join(root, 'public', 'email');

const INK = { r: 28, g: 25, b: 23, alpha: 1 };
const founders = ['frans', 'jan', 'david'];

async function processImages() {
  await mkdir(outDir, { recursive: true });

  // Portraits in the site's mono treatment: grayscale, contrast 1.08.
  for (const name of founders) {
    const outputPath = join(outDir, `${name}.jpg`);
    await sharp(join(root, 'public', 'team', `${name}.webp`))
      .resize(252, 336, { fit: 'cover', position: 'top' })
      .grayscale()
      .linear(1.08, -128 * 0.08)
      .jpeg({ quality: 86, mozjpeg: true })
      .toFile(outputPath);
    console.log(`  -> ${outputPath}`);
  }

  // White wordmark baked onto ink: Gmail on iOS inverts the band in dark mode,
  // but never an image, so the logo keeps its own ground and stays readable.
  const svg = (await readFile(join(root, 'assets', 'brand', 'logo-white-transparent.svg'), 'utf8'))
    .replace(/viewBox="[^"]*"/, 'viewBox="226 247 2281 755"');
  const wordmark = await sharp(Buffer.from(svg), { density: 600 })
    .resize(168, 54, { fit: 'contain', background: INK })
    .flatten({ background: INK })
    .png()
    .toBuffer();
  const logoPath = join(outDir, 'logo.png');
  await sharp(wordmark).png({ compressionLevel: 9 }).toFile(logoPath);
  console.log(`  -> ${logoPath}`);

  console.log('\nDone! Signature images saved to public/email/');
}

processImages().catch(console.error);
