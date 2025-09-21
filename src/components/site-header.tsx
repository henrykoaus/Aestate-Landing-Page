import Link from 'next/link';
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetClose,
  SheetTitle,
} from '@/components/ui/sheet';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { Button } from '@/components/ui/button';
import { Menu, Plus, Search, ShoppingBag, X } from 'lucide-react';

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
              className="w-full max-w-sm bg-background p-10"
            >
              <SheetTitle className="sr-only">Menu</SheetTitle>
              <div className="flex h-full flex-col">
                <div className="flex items-center justify-end">
                  <SheetClose asChild>
                    <Button variant="ghost" size="icon" className="mb-8">
                      <X className="h-6 w-6" />
                      <span className="sr-only">Close menu</span>
                    </Button>
                  </SheetClose>
                </div>
                <nav className="flex flex-col items-start space-y-4">
                  {navLinks.map((link) =>
                    link.sublinks ? (
                      <Accordion
                        type="single"
                        collapsible
                        className="w-full"
                        key={link.label}
                      >
                        <AccordionItem value="categories" className="border-b-0">
                          <AccordionTrigger className="py-2 font-headline text-3xl font-normal hover:no-underline">
                            <div className="flex items-center gap-4">
                              <Plus className="h-5 w-5" />
                              <span>{link.label}</span>
                            </div>
                          </AccordionTrigger>
                          <AccordionContent className="pl-12">
                            <ul className="space-y-2">
                              {link.sublinks.map((sublink) => (
                                <li key={sublink}>
                                  <SheetClose asChild>
                                    <Link
                                      href="#"
                                      className="text-lg font-medium text-foreground/80 transition-colors hover:text-foreground"
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
                          className={`font-headline text-3xl font-normal ${
                            link.special ? 'text-accent-foreground' : 'text-foreground/80'
                          } transition-colors hover:text-foreground`}
                        >
                          {link.label}
                        </Link>
                      </SheetClose>
                    )
                  )}
                </nav>
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
