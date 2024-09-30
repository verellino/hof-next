import { createClient } from "@/prismicio";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

import HofLogo from "@/assets/images/HOF-logogram.svg";
import Navbar from "@/components/layout/navbar";

export default async function Header() {
  const client = createClient();
  const settings = await client.getSingle("settings");

  return (
    <header className="sticky top-0 w-full z-[99] p-6 text-white md:px-10">
      <div className="mx-auto flex w-full justify-between items-center gap-4 flex-row">
        <Link href="/" className="shrink-0 text-2xl font-medium z-[90]">
          <Image src={HofLogo} alt="Hofmeister" className="w-10 md:w-16" />
        </Link>
        <Navbar settings={settings} />
      </div>
    </header>
  );
}
