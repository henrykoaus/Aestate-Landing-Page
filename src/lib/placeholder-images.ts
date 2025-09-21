import data from './placeholder-images.json';

export type ImagePlaceholder = {
  id: string;
  title: string;
  subtitle: string;
  date: string;
  category: string;
  description: string;
  imageUrl: string;
  imageHint: string;
};

export const PlaceHolderImages: ImagePlaceholder[] = data.placeholderImages;
