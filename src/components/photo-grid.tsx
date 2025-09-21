import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import Link from 'next/link';

export function PhotoGrid() {
  return (
    <div className="container px-4 py-8 md:px-6 md:py-12">
      <div className="grid gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
        {PlaceHolderImages.map((img) => {
          const parts = img.imageUrl.split('/');
          const width = parseInt(parts[parts.length - 2], 10);
          const height = parseInt(parts[parts.length - 1], 10);
          return (
            <Link href="#" key={img.id} className="group flex flex-col items-center text-center">
              <div className="overflow-hidden">
                <Image
                  src={img.imageUrl}
                  alt={img.description}
                  width={width}
                  height={height}
                  className="h-auto w-full object-cover transition-transform duration-300 ease-in-out group-hover:scale-105"
                  data-ai-hint={img.imageHint}
                  priority={parseInt(img.id) <= 3}
                />
              </div>
              <div className="mt-4 flex flex-col items-center">
                <div className="text-xs uppercase tracking-widest text-muted-foreground">
                  <span>{img.date}</span> &middot; <span>{img.category}</span>
                </div>
                <h2 className="mt-2 font-headline text-2xl font-medium">
                  {img.title}
                </h2>
                <p className="mt-2 text-sm text-muted-foreground">{img.subtitle}</p>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
