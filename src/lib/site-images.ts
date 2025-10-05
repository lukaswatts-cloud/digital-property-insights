import data from './site-images.json';

export type SiteImage = {
  id: string;
  description: string;
  imageUrl: string;
  imageHint: string;
};

export const SiteImages: SiteImage[] = data.siteImages;
