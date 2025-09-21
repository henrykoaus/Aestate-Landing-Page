import Link from 'next/link';
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetClose,
} from '@/components/ui/sheet';
import { Button } from '@/components/ui/button';
import { Menu, Search, ShoppingBag, X } from 'lucide-react';

const navLinks = [
  { href: '#', label: 'Home' },
  { href: '#', label: 'Categories' },
  { href: '#', label: 'About' },
  { href: '#', label: 'Contact' },
  { href: '#', label: 'Shop' },
];

export function SiteHeader() {
  return (
    <>
      <div className="h-1 bg-[#dbe2dd]"></div>
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur-sm supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-20 items-center justify-between px-4 md:px-6">
          <div className="flex items-center gap-4">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="md:hidden">
                  <Menu className="h-6 w-6" />
                  <span className="sr-only">Open menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="left" className="w-full max-w-xs bg-background p-6">
                <div className="flex items-center justify-between">
                   <Link href="/" className="text-2xl font-bold font-headline tracking-[0.2em]">
                    BEAUTY AESTATE
                  </Link>
                  <SheetClose asChild>
                    <Button variant="ghost" size="icon">
                      <X className="h-6 w-6" />
                      <span className="sr-only">Close menu</span>
                    </Button>
                  </SheetClose>
                </div>
                <nav className="mt-8 flex flex-col items-start gap-6">
                  {navLinks.map((link) => (
                    <SheetClose asChild key={link.label}>
                      <Link
                        href={link.href}
                        className="text-lg font-medium text-foreground/80 transition-colors hover:text-foreground"
                      >
                        {link.label}
                      </Link>
                    </SheetClose>
                  ))}
                </nav>
              </SheetContent>
            </Sheet>
             <Button variant="ghost" size="icon" className="hidden md:flex">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Open menu</span>
              </Button>
          </div>

          <Link href="/" className="text-2xl font-bold font-headline tracking-[0.2em]">
            BEAUTY AESTATE
          </Link>
          
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="icon">
              <Search className="h-5 w-5" />
              <span className="sr-only">Search</span>
            </Button>
            <Button variant="ghost" size="icon">
              <ShoppingBag className="h-5 w-5" />
              <span className="sr-only">Shopping Bag</span>
            </Button>
          </div>
        </div>
      </header>
    </>
  );
}
