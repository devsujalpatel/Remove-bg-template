import Link from 'next/link';

import Logo from '@/components/shared/logo';
import { Button } from '@/components/ui/button';
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from '@/components/ui/navigation-menu';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import { ArrowRight } from 'lucide-react';
import { Separator } from '@/components/ui/separator';

// Navigation links array to be used in both desktop and mobile menus
const navigationLinks = [
  { href: '/', label: 'Home', active: true },
  { href: '#', label: 'Bulk Image', active: false },
  { href: '#', label: 'Photo Editing Services', active: false },
  { href: '#', label: 'Resources', active: false },
  { href: '#', label: 'Pricing', active: false },
];

export default function Component() {
  return (
    <header>
      <div className="container flex h-28 items-center justify-between gap-4">
        {/* Left side */}
        <div className="flex items-center gap-2">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className="text-primary hover:text-primary/90">
              <Logo />
            </Link>
          </div>
        </div>
        {/* Middle area */}
        <NavigationMenu className="max-lg:hidden">
          <NavigationMenuList className="gap-3.5">
            {navigationLinks.map((link, index) => {
              return (
                <NavigationMenuItem key={index}>
                  <NavigationMenuLink
                    active={link.active}
                    href={link.href}
                    className="flex-row items-center gap-2 py-1.5 font-medium text-black hover:text-primary"
                  >
                    <span>{link.label}</span>
                  </NavigationMenuLink>
                </NavigationMenuItem>
              );
            })}
          </NavigationMenuList>
        </NavigationMenu>
        {/* Right side */}
        <div className="flex items-center justify-end gap-4">
          <Button
            variant="appGreenBtn"
            size="pill"
            className="hover:bg-white hover:border-2 hidden lg:flex"
            effect="expandIcon"
            iconStroke="#000"
            iconBg="#BFE831"
            icon={ArrowRight}
            iconPlacement="right"
          >
            Login
          </Button>
          <Button
            variant="appBlueBtn"
            className="hover:bg-white hover:text-black hover:border-2 border-[#378EF2] hidden lg:flex"
            iconStroke="#fff"
            iconBg="#378EF2"
            size="pill"
            effect="expandIcon"
            icon={ArrowRight}
            iconPlacement="right"
          >
            Sign Up
          </Button>
          {/* Mobile menu trigger */}
          <Popover>
            <PopoverTrigger asChild>
              <Button
                className="group size-8 lg:hidden"
                variant="ghost"
                size="icon"
              >
                <svg
                  className="pointer-events-none"
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M4 12L20 12"
                    className="origin-center -translate-y-[7px] transition-all duration-300 ease-[cubic-bezier(.5,.85,.25,1.1)] group-aria-expanded:translate-x-0 group-aria-expanded:translate-y-0 group-aria-expanded:rotate-315"
                  />
                  <path
                    d="M4 12H20"
                    className="origin-center transition-all duration-300 ease-[cubic-bezier(.5,.85,.25,1.8)] group-aria-expanded:rotate-45"
                  />
                  <path
                    d="M4 12H20"
                    className="origin-center translate-y-[7px] transition-all duration-300 ease-[cubic-bezier(.5,.85,.25,1.1)] group-aria-expanded:translate-y-0 group-aria-expanded:rotate-135"
                  />
                </svg>
              </Button>
            </PopoverTrigger>
            <PopoverContent align="end" className="w-fit p-1 lg:hidden">
              <NavigationMenu className="max-w-none *:w-full my-4">
                <NavigationMenuList className="flex-col items-start gap-0 md:gap-2">
                  {navigationLinks.map((link, index) => {
                    return (
                      <NavigationMenuItem key={index} className="w-full flex justify-center">
                        <NavigationMenuLink
                          href={link.href}
                          className="flex-row items-center gap-2 py-1.5 font-medium"
                          active={link.active}
                        >
                          <span>{link.label}</span>
                        </NavigationMenuLink>
                      </NavigationMenuItem>
                    );
                  })}
                  <Separator className="bg-gray-300 my-2" />
                  <div className="flex flex-col gap-2 items-center justify-center w-full">
                    <Button
                      variant="appGreenBtn"
                      size="default"
                      className="hover:bg-white hover:border-2"
                    >
                      Login
                    </Button>
                    <Button
                      variant="appBlueBtn"
                      className="hover:bg-white hover:text-black hover:border-2 border-[#378EF2] "
                      size="default"
                    >
                      Sign Up
                    </Button>
                  </div>
                </NavigationMenuList>
              </NavigationMenu>
            </PopoverContent>
          </Popover>
        </div>
      </div>
    </header>
  );
}
