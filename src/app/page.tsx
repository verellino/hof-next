import { Metadata } from "next";
import { asText } from "@prismicio/client";
import { SliceZone } from "@prismicio/react";

import { createClient } from "@/prismicio";
import { components } from "@/slices";
import Image from "next/image";

import Hero1 from "@/assets/images/Hero_01.jpg";
import Hero2 from "@/assets/images/Hero_02.jpg";
import Hero3 from "@/assets/images/Hero_03.jpg";
import HCSGB from "@/assets/images/HC-SG-B.png";
import HCSGR from "@/assets/images/HC-SG-R.png";
import HC1 from "@/assets/images/HC_001.webp";
import FAQ from "@/components/faq";
import { ArrowUpRight } from "lucide-react";
import CTA from "@/components/cta";

export default async function Home() {
  return (
    <>
      <div className="flex flex-col">
        <div className="grid gird-cols-2 min-h-screen items-end px-2 md:px-10 mb-16 md:grid-cols-6 grid-rows-4 md:grid-rows-6 gap-5">
          <div className="mt-16 col-span-2 md:mt-0 md:col-span-6 md:row-start-3 md:text-2xl">
            <span className="text-2xl md:text-6xl">
              Passionate. Trusted. Reasonable.
            </span>
            <div>
              <p className="w-full md:max-w-3xl mt-4">
                <span className="inline text-red-700">Hofmeister </span>
                <span>
                  is an independent forward-thinking practice and a automotive
                  playground, offering world-class parts and service.
                </span>
              </p>
              <a
                href={"/"}
                className="mt-8 flex w-full items-center text-red-700"
              >
                Book a Call <ArrowUpRight className="ml-2" size="16" />
              </a>
            </div>
          </div>
          <div className="col-span-2 md:row-span-3 md:row-start-4 aspect-[4/5]">
            <Image src={Hero1} alt="Hofmeister" className="w-full" />
          </div>
          <div className="col-span-2 md:row-span-3 md:row-start-4 aspect-[4/5]">
            <Image src={Hero2} alt="Hofmeister" className="w-full" />
          </div>
          <div className="col-span-2 md:row-span-3 md:row-start-4 aspect-[4/5]">
            <Image src={Hero3} alt="Hofmeister" className="w-full" />
          </div>
        </div>
        <section className="bg-[#e0e0e0] text-black px-10 py-20">
          <FAQ />
        </section>
        <section className="relative grid grid-cols-2 p-10 md:grid-cols-6 md:gap-5 min-h-screen">
          <div className="col-span-4">
            <div className="aspect-video relative overflow-hidden">
              <Image
                src={HC1}
                alt="Hofclub"
                className="absolute -bottom-2/3 w-full"
              />
            </div>
            <h2 className="text-4xl text-red-700 font-normal mt-4">Hof Club</h2>
            <p className="mt-4 max-w-2xl">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsa
              vel, possimus animi, sunt consequatur debitis eius maxime expedita
              ipsum distinctio modi totam saepe voluptates odit minus quidem
              ullam minima natus.
            </p>
            <a
              href={"/"}
              className="mt-8 flex items-center w-[fit-content] text-red-700 transition-all duration-300 border-spacing-2 border-red-700 hover:border-b"
            >
              Learn more <ArrowUpRight className="ml-1" size="16" />
            </a>
          </div>
          <div className="col-span-2">
            <Video />
          </div>
          <Image
            src={HCSGR}
            alt="HofClub 1"
            className="absolute -rotate-[24deg] left-2 top-4 w-40"
          ></Image>
          <Image
            src={HCSGB}
            alt="HofClub 2"
            className="absolute rotate-[12deg] right-[31%] top-[60%] w-60"
          ></Image>
        </section>
        <CTA />
      </div>
    </>
  );
}

export function Video() {
  return (
    <video
      width="595"
      height="912"
      preload="none"
      playsInline
      autoPlay
      muted
      loop
      className="aspect-[9/16]"
    >
      <source src="./HC_001.mp4" type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  );
}
