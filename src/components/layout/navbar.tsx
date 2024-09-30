"use client";
import { useState } from "react";
import { PrismicNextLink } from "@prismicio/next";
import { HamburgerMenuIcon } from "@radix-ui/react-icons";
import { Content } from "@prismicio/client";
import { X } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

type NavbarProps = {
  settings: Content.SettingsDocument;
};

export default function Navbar({ settings }: NavbarProps) {
  const [nav, setNav] = useState(false);
  return (
    <div>
      <nav className="md:grow">
        <ul className="hidden md:flex flex-wrap gap-x-6 gap-y-4 md:justify-end md:gap-x-12">
          {settings.data.navigation.map((item) => (
            <li key={item.label}>
              <PrismicNextLink field={item.link}>{item.label}</PrismicNextLink>
            </li>
          ))}
        </ul>
        <div onClick={() => setNav(!nav)} className="cursor-pointer md:hidden">
          <HamburgerMenuIcon className="text-red-500" width={24} height={24} />
        </div>
        {nav && (
          <div className="">
            <div
              onClick={() => setNav(!nav)}
              className="cursor-pointer absolute z-50 top-8 right-6 md:hidden"
            >
              <X className="text-red-500" width={24} height={24} />
            </div>
            <ul className="flex flex-col justify-end items-start pb-24 px-4 text-3xl absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-black to-red-800">
              {settings.data.navigation.map((item) => (
                <li key={item.label} className="py-4">
                  <PrismicNextLink
                    field={item.link}
                    onClick={() => setNav(!nav)}
                  >
                    {item.label}
                  </PrismicNextLink>
                </li>
              ))}
            </ul>
          </div>
        )}
      </nav>
    </div>
  );
}
