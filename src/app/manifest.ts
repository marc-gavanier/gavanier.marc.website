import fs from 'node:fs';
import path from 'node:path';
import type { MetadataRoute } from 'next';

export const dynamic = 'force-static';

const iconsDirectory = path.join(process.cwd(), 'public/icons');
const listFilesInDirectory = (dir: string): string[] => fs.readdirSync(dir).map((file) => path.join('/images/icons', file));

const sizeFromFineName = (src: string): { sizes?: string } => {
  const sizes: string | undefined = src.match(/\d+x\d+/)?.[0];
  return sizes ? { sizes } : {};
};

const webManifest = (): MetadataRoute.Manifest => ({
  name: 'Marc Gavanier',
  description: 'Ingénieur logiciel indépendant',
  start_url: '/',
  display: 'standalone',
  background_color: '#fff',
  theme_color: '#0559d2',
  icons: listFilesInDirectory(iconsDirectory).map((src: string) => ({
    src,
    ...sizeFromFineName(src),
    type: 'image/png'
  }))
});

export default webManifest;
