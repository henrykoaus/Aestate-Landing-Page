import { PhotoGrid } from '@/components/photo-grid';
import { SiteHeader } from '@/components/site-header';

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <SiteHeader />
      <main className="flex-1">
        <PhotoGrid />
      </main>
    </div>
  );
}
