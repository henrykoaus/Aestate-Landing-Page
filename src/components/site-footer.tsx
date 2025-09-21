import Link from 'next/link';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { ArrowRight, Instagram, Facebook, Search, ShoppingBag } from 'lucide-react';

const ThreadsIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M13.5 7a3.5 3.5 0 1 0-3.5 3.5" />
    <path d="M10 10.5 13.5 7" />
    <path d="M10 10.5c-1 .8-1.5 2.2-1.5 3.5A3.5 3.5 0 1 0 12 10.5" />
    <path d="M17.5 9.5a3.5 3.5 0 1 0 0 7" />
    <path d="M14 16.5c1-.8 1.5-2.2 1.5-3.5a3.5 3.5 0 1 0-3.5 3.5" />
  </svg>
);

export function SiteFooter() {
  return (
    <footer className="border-t bg-background">
      <div className="container mx-auto px-4 py-8 md:px-6">
        <div className="text-center">
          <Link href="/" className="text-3xl font-bold font-headline tracking-[0.2em]">
            BEAUTY AESTATE
          </Link>
          <div className="mt-4 flex justify-center gap-4">
            <Link href="#" aria-label="Instagram">
              <Instagram className="h-6 w-6 text-muted-foreground transition-colors hover:text-foreground" />
            </Link>
            <Link href="#" aria-label="Facebook">
              <Facebook className="h-6 w-6 text-muted-foreground transition-colors hover:text-foreground" />
            </Link>
            <Link href="#" aria-label="Threads">
              <ThreadsIcon className="h-6 w-6 text-muted-foreground transition-colors hover:text-foreground" />
            </Link>
          </div>
        </div>
        <div className="mt-8 border-t pt-8">
          <div className="flex flex-col items-center justify-between gap-4 text-sm text-muted-foreground md:flex-row">
            <div className="flex gap-4">
              <Link href="#">About</Link>
              <Link href="#">Contact</Link>
              <Link href="#">Privacy Policy</Link>
            </div>
            <p>&copy; {new Date().getFullYear()} Beauty Aestate. All Rights Reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
