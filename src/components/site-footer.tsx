import Link from 'next/link';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { ArrowRight, Instagram, Facebook } from 'lucide-react';

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
      <div className="container grid grid-cols-1 gap-12 px-4 py-12 md:grid-cols-2 md:gap-16 md:px-6 md:py-16">
        <div className="flex flex-col items-start gap-4">
          <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
            Sign up for our newsletter
          </h2>
          <p className="max-w-lg text-muted-foreground">
            Stay up to date with the latest from Aestate. Be the first to know about new collections and exclusive offers.
          </p>
          <form className="flex w-full max-w-md space-x-2">
            <Input
              type="email"
              placeholder="Enter your email"
              className="flex-1"
              aria-label="Email for newsletter"
            />
            <Button type="submit" size="icon" aria-label="Subscribe">
              <ArrowRight className="h-4 w-4" />
            </Button>
          </form>
        </div>
        <div className="flex flex-col items-start gap-4 md:items-end">
          <Link href="/" className="text-3xl font-bold font-headline">
            Aestate
          </Link>
          <div className="flex items-center gap-4">
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
      </div>
      <div className="border-t">
        <div className="container flex items-center justify-center px-4 py-4 text-sm text-muted-foreground md:px-6">
          <p>&copy; {new Date().getFullYear()} Aestate. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}
