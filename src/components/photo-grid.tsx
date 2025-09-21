import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Card } from './ui/card';

export function PhotoGrid() {
  return (
    <div className="container px-4 py-8 md:px-6 md:py-12">
      <div className="columns-1 gap-4 space-y-4 sm:columns-2 lg:columns-3">
        {PlaceHolderImages.map((img) => {
          const parts = img.imageUrl.split('/');
          const width = parseInt(parts[parts.length - 2], 10);
          const height = parseInt(parts[parts.length - 1], 10);
          return (
            <div key={img.id} className="break-inside-avoid">
              <Card className="overflow-hidden">
                <Image
                  src={img.imageUrl}
                  alt={img.description}
                  width={width}
                  height={height}
                  className="h-auto w-full object-cover transition-transform duration-300 ease-in-out hover:scale-105"
                  data-ai-hint={img.imageHint}
                  priority={parseInt(img.id) <= 3}
                />
              </Card>
            </div>
          );
        })}
      </div>
    </div>
  );
}
