import Link from 'next/link';
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetClose,
} from '@/components/ui/sheet';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { Button } from '@/components/ui/button';
import {
  Menu,
  Plus,
  Search,
  ShoppingBag,
  Instagram,
  Facebook,
  X,
} from 'lucide-react';
import Image from 'next/image';

const navLinks = [
  { href: '#', label: 'Home', special: true },
  {
    href: '#',
    label: 'Categories',
    sublinks: ['Skin', 'Hair', 'Make Up', 'Body', 'Mind'],
  },
  { href: '#', label: 'About' },
  { href: '#', label: 'Contact' },
  { href: '#', label: 'Shop' },
];

const PinterestIcon = (props: React.SVGProps<SVGSVGElement>) => (
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

export function SiteHeader() {
  return (
    <>
      <div className="h-1 bg-[#dbe2dd]"></div>
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur-sm supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-20 items-center justify-between px-4 md:px-6">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Open menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent
              side="left"
              className="w-full bg-background p-10 sm:w-1/2"
            >
              <div className="flex h-full">
                <div className="flex flex-col items-start pr-12">
                  <SheetClose asChild>
                    <Button
                      variant="ghost"
                      size="icon"
                      className="mb-8 -ml-4"
                    >
                      <X className="h-6 w-6" />
                      <span className="sr-only">Close menu</span>
                    </Button>
                  </SheetClose>
                  <nav className="flex flex-col items-start space-y-2">
                    {navLinks.map((link) =>
                      link.sublinks ? (
                        <Accordion
                          type="single"
                          collapsible
                          className="w-full"
                          key={link.label}
                        >
                          <AccordionItem
                            value="categories"
                            className="border-b-0"
                          >
                            <AccordionTrigger className="py-2 font-headline text-2xl font-normal hover:no-underline">
                              <div className="flex items-center gap-4">
                                <Plus className="h-4 w-4" />
                                <span>{link.label}</span>
                              </div>
                            </AccordionTrigger>
                            <AccordionContent className="pl-10">
                              <ul className="space-y-1">
                                {link.sublinks.map((sublink) => (
                                  <li key={sublink}>
                                    <SheetClose asChild>
                                      <Link
                                        href="#"
                                        className="text-base font-medium text-foreground/80 transition-colors hover:text-foreground"
                                      >
                                        {sublink}
                                      </Link>
                                    </SheetClose>
                                  </li>
                                ))}
                              </ul>
                            </AccordionContent>
                          </AccordionItem>
                        </Accordion>
                      ) : (
                        <SheetClose asChild key={link.label}>
                          <Link
                            href={link.href}
                            className={`font-headline text-2xl font-normal ${
                              link.special
                                ? 'text-accent-foreground'
                                : 'text-foreground/80'
                            } transition-colors hover:text-foreground`}
                          >
                            {link.label}
                          </Link>
                        </SheetClose>
                      )
                    )}
                  </nav>
                </div>
                <div className="flex w-1/2 flex-col items-center justify-center border-l border-border pl-12 text-center">
                  <Image
                    src="https://picsum.photos/seed/aestate-profile/200/200"
                    alt="Author portrait"
                    width={150}
                    height={150}
                    className="rounded-full"
                    data-ai-hint="woman portrait"
                  />
                  <h3 className="mt-6 font-headline text-2xl">
                    HELLO BEAUTY
                  </h3>
                  <p className="mt-4 text-sm text-muted-foreground">
                    Welcome to Beauty Aestate, an online guide with a fresh
                    perspective on natural beauty. Discover new brands, product
                    reviews and tutorials that celebrate diversity and empower
                    our readers to embrace their own natural beauty.
                  </p>
                  <div className="mt-6 flex justify-center gap-4">
                    <Link href="#" aria-label="Instagram">
                      <Instagram className="h-5 w-5 text-muted-foreground transition-colors hover:text-foreground" />
                    </Link>
                    <Link href="#" aria-label="Facebook">
                      <Facebook className="h-5 w-5 text-muted-foreground transition-colors hover:text-foreground" />
                    </Link>
                    <Link href="#" aria-label="Pinterest">
                      <PinterestIcon className="h-5 w-5 text-muted-foreground transition-colors hover:text-foreground" />
                    </Link>
                  </div>
                </div>
              </div>
            </SheetContent>
          </Sheet>

          <Link
            href="/"
            className="text-3xl font-bold font-headline tracking-[0.2em]"
          >
            AESTATE
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
