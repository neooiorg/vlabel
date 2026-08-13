import { createWriteStream } from 'fs';
import { mkdir } from 'fs/promises';
import { pipeline } from 'stream/promises';
import https from 'https';
import http from 'http';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.join(__dirname, '..');
const OUT = path.join(ROOT, 'public/sites/feedhive-com-669d1bb4/root-8a5edab2/images');
const SHARED = path.join(ROOT, 'public/sites/feedhive-com-669d1bb4/shared');

await mkdir(OUT, { recursive: true });
await mkdir(SHARED, { recursive: true });

function fetchUrl(url) {
  return new Promise((resolve, reject) => {
    const mod = url.startsWith('https') ? https : http;
    mod.get(url, { headers: { 'User-Agent': 'Mozilla/5.0' } }, res => {
      if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
        return fetchUrl(res.headers.location).then(resolve).catch(reject);
      }
      resolve(res);
    }).on('error', reject);
  });
}

async function download(url, dest) {
  try {
    const res = await fetchUrl(url);
    if (res.statusCode !== 200) { console.warn(`SKIP ${url} (${res.statusCode})`); return; }
    await pipeline(res, createWriteStream(dest));
    console.log(`OK ${path.basename(dest)}`);
  } catch (e) {
    console.error(`ERR ${url}: ${e.message}`);
  }
}

const BASE = 'https://www.feedhive.com';
const NEXT = 'https://www.feedhive.com/_next/static/media';

const assets = [
  // Shared brand assets
  { url: `${BASE}/images/logo.webp`, dest: path.join(SHARED, 'logo.webp') },
  { url: `${BASE}/images/beehiiv.webp`, dest: path.join(OUT, 'beehiiv.webp') },
  { url: `${BASE}/images/fauna.webp`, dest: path.join(OUT, 'fauna.webp') },
  { url: `${BASE}/images/prismic.webp`, dest: path.join(OUT, 'prismic.webp') },
  { url: `${BASE}/images/rapidapi.webp`, dest: path.join(OUT, 'rapidapi.webp') },
  { url: `${BASE}/images/riverside.webp`, dest: path.join(OUT, 'riverside.webp') },
  { url: `${BASE}/images/thirdweb.webp`, dest: path.join(OUT, 'thirdweb.webp') },
  // Hero tab images
  { url: `${BASE}/images/hero-composer.webp`, dest: path.join(OUT, 'hero-composer.webp') },
  { url: `${BASE}/images/hero-ai-assistant.webp`, dest: path.join(OUT, 'hero-ai-assistant.webp') },
  { url: `${BASE}/images/hero-automation.webp`, dest: path.join(OUT, 'hero-automation.webp') },
  { url: `${BASE}/images/hero-post-conditions.webp`, dest: path.join(OUT, 'hero-post-conditions.webp') },
  { url: `${BASE}/images/hero-smart-scheduling.webp`, dest: path.join(OUT, 'hero-smart-scheduling.webp') },
  { url: `${BASE}/images/hero-social-inbox.webp`, dest: path.join(OUT, 'hero-social-inbox.webp') },
  { url: `${BASE}/images/hero-recycle-suggestions.webp`, dest: path.join(OUT, 'hero-recycle-suggestions.webp') },
  { url: `${BASE}/images/analytics-hero.png`, dest: path.join(OUT, 'analytics-hero.png') },
  { url: `${BASE}/images/hero-ai-design-library.webp`, dest: path.join(OUT, 'hero-ai-design-library.webp') },
  { url: `${BASE}/images/hero-telegram.webp`, dest: path.join(OUT, 'hero-telegram.webp') },
  { url: `${BASE}/images/claude-code-terminal.webp`, dest: path.join(OUT, 'claude-code-terminal.webp') },
  { url: `${BASE}/images/feedhive-api-cli-terminal.webp`, dest: path.join(OUT, 'feedhive-api-cli-terminal.webp') },
  // How it works cycle images
  { url: `${NEXT}/cycle-image-alt-2-1.bafdd858.webp`, dest: path.join(OUT, 'cycle-image-1.webp') },
  { url: `${NEXT}/cycle-image-alt-2-2.f28c58ae.webp`, dest: path.join(OUT, 'cycle-image-2.webp') },
  { url: `${NEXT}/cycle-image-alt-2-3.04a729f7.webp`, dest: path.join(OUT, 'cycle-image-3.webp') },
  // Testimonial
  { url: `${NEXT}/testimonial-user.9dc7497b.webp`, dest: path.join(OUT, 'testimonial-user.webp') },
  // Feature showcase images
  { url: `${NEXT}/showcase-image-1.607ff91a.webp`, dest: path.join(OUT, 'showcase-image-1.webp') },
  { url: `${NEXT}/showcase-image-2.18b97c62.webp`, dest: path.join(OUT, 'showcase-image-2.webp') },
  { url: `${NEXT}/feature-image-4.2eb1554d.webp`, dest: path.join(OUT, 'feature-image-4.webp') },
  { url: `${NEXT}/feature-image-5.ade96dfa.webp`, dest: path.join(OUT, 'feature-image-5.webp') },
];

// Download in batches of 4
for (let i = 0; i < assets.length; i += 4) {
  await Promise.all(assets.slice(i, i + 4).map(a => download(a.url, a.dest)));
}

console.log('Done!');
