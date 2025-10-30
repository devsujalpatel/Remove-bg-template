import Link from 'next/link';

import {
  IconBrandFacebookFilled,
  IconBrandInstagramFilled,
  IconBrandX,
  IconBrandYoutubeFilled,
} from '@tabler/icons-react';
import { MailIcon, PhoneIcon } from 'lucide-react';

import Logo from '@/components/shared/logo';
import BgBlueWrapper from '@/components/shared/bg-blue-wrapper';
import { Separator } from '@/components/ui/separator';

const footerSections = [
  {
    title: 'Quick Links',
    links: [
      {
        title: 'Home',
        href: '#',
      },
      {
        title: 'Bulk Removal',
        href: '#',
      },
      {
        title: 'Photo Editing Services',
        href: '#',
      },
      {
        title: 'Resources',
        href: '#',
      },
      {
        title: 'Pricing',
        href: '#',
      },
      {
        title: 'Blog',
        href: '#',
      },
      {
        title: 'About',
        href: '#',
      },
      {
        title: 'Contact Us',
        href: '#',
      },
    ],
  },
  {
    title: 'Services',
    links: [
      {
        title: 'Car Dealers',
        href: '#',
      },
      {
        title: 'Developers',
        href: '#',
      },
      {
        title: 'Individuals',
        href: '#',
      },
      {
        title: 'Ecommerce',
        href: '#',
      },
      {
        title: 'Photographers',
        href: '#',
      },
      {
        title: 'Designers',
        href: '#',
      },
      {
        title: 'Media',
        href: '#',
      },
      {
        title: 'Enterprise',
        href: '#',
      },
    ],
  },
];

const Footer = () => {
  return (
    <footer className="w-full">
      <BgBlueWrapper
        role="footer"
        aria-label="footer"
        className="xl:my-[50px] lg:my-8 my-4"
      >
        <div className="container">
          <div className="py-12 flex flex-wrap justify-between gap-6">
            {/* Company Section */}
            <div className="xl:min-w-[385px] min-w-fit">
              <Logo />
              <p className="mt-4 text-black font-medium capitalize xl:max-w-sm max-w-full text-[18px]">
                Cras quam nunc, egestas eget dolor sit amet, varius dictum dui.
                Donec elementum elit id ligula sagittis volutpat.
              </p>

              <div className="mt-6">
                <h6 className="font-bold text-[26px] leading-[30px] mb-4">
                  Follow Us
                </h6>
                <div className="flex items-center gap-3">
                  <Link
                    href="#"
                    className="w-8 h-8 hover:bg-[#BFE831] transition-all duration-300 rounded-full flex items-center justify-center border border-[#378EF2]"
                  >
                    <IconBrandFacebookFilled
                      className="text-[#378EF2]"
                      size={16}
                    />
                  </Link>
                  <Link
                    href="#"
                    className="w-8 h-8 hover:bg-[#BFE831] transition-all duration-300 rounded-full flex items-center justify-center border border-[#378EF2]"
                  >
                    <IconBrandInstagramFilled
                      className="text-[#378EF2]"
                      size={16}
                    />
                  </Link>
                  <Link
                    href="#"
                    className="w-8 h-8 hover:bg-[#BFE831] transition-all duration-300 rounded-full flex items-center justify-center border border-[#378EF2]"
                  >
                    <IconBrandX className="text-[#378EF2]" size={16} />
                  </Link>
                  <Link
                    href="#"
                    className="w-8 h-8 hover:bg-[#BFE831] transition-all duration-300 rounded-full flex items-center justify-center border border-[#378EF2]"
                  >
                    <IconBrandYoutubeFilled
                      className="text-[#378EF2]"
                      size={16}
                    />
                  </Link>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div className="xl:min-w-[320px] min-w-fit">
              <h6 className="font-bold text-[26px] leading-[30px] mb-4">
                Quick Links
              </h6>
              <ul className="space-y-3">
                {footerSections[0].links.map(({ title, href }) => (
                  <li
                    key={title}
                    className="list-none hover:list-disc text-black text-[18px] font-medium hover:text-[#378EF2] transition-all duration-100 hover:ml-2"
                  >
                    <Link href={href}>{title}</Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div className="xl:min-w-[320px] min-w-fit">
              <h6 className="font-bold text-[26px] leading-[30px] mb-4">
                Services
              </h6>
              <ul className="space-y-3">
                {footerSections[1].links.map(({ title, href }) => (
                  <li
                    key={title}
                    className="list-none hover:list-disc text-black text-[18px] font-medium hover:text-[#378EF2] transition-all duration-100 hover:ml-2"
                  >
                    <Link href={href}>{title}</Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Get In Touch */}
            <div className="">
              <h6 className="font-bold text-[26px] leading-[30px] mb-4">
                Get In Touch
              </h6>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <MailIcon className="h-5 w-5 text-[#378EF2]" />
                  <Link
                    href="mailto:hello@loremipsum.com"
                    className="text-black text-[18px] font-medium"
                  >
                    hello@loremipsum.com
                  </Link>
                </div>
                <div className="flex items-center gap-3">
                  <PhoneIcon className="h-5 w-5 text-[#378EF2]" />
                  <Link
                    href="tel:0123456789"
                    className="text-black text-[18px] font-medium"
                  >
                    0123 456 789
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <Separator className="bg-gray-300" />

          <div className="py-8 flex flex-col sm:flex-row items-center justify-between gap-x-2 gap-y-5">
            {/* Copyright */}
            <span className="text-black text-[18px] font-medium">
              Copyright © {new Date().getFullYear()} loremipsum. All Rights
              Reserved.
            </span>

            {/* Legal Links */}
            <div className="flex items-center gap-4">
              <Link href="#" className="text-black text-[18px] font-medium">
                Terms Of Use
              </Link>
              <span>|</span>
              <Link href="#" className="text-black text-[18px] font-medium">
                Privacy Notice
              </Link>
            </div>
          </div>
        </div>
      </BgBlueWrapper>
    </footer>
  );
};

export default Footer;
