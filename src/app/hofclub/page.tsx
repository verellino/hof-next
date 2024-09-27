import Image from "next/image";
import { createClient } from "@/prismicio";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import HofclubHero from "@/components/hofclub-hero";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { PrismicNextImage } from "@prismicio/next";

export default async function Page() {
  const client = createClient();

  const products = await client.getAllByType("products", {
    fetchOptions: {
      cache: "no-store",
      next: { tags: ["prismic", "products"] },
    },
    orderings: [
      {
        field: "my.products.published_on",
        direction: "desc",
      },
    ],
  });
  return (
    <div className="p-10 min-h-screen">
      <HofclubHero />
      <section>
        <h2>The Collection</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {products.map((product) => (
            <div
              key={product.data.title}
              className="border border-neutral-200 p-4 flex-col items-start justify-between"
            >
              <div className="bg-[#d5d5d5] p-4 mb-4 rounded-md w-full h-[500px] flex items-center justify-center">
                <PrismicNextImage
                  field={product.data.product_carousel[0]?.image}
                />
              </div>
              <div className="mt-8">
                <h3 className="text-2xl mb-2">{product.data.title}</h3>
                <p className="text-xl text-red-700 font-normal">
                  ${product.data.price}
                </p>
                <Button variant={"destructive"} size={"lg"} className="mt-4">
                  Buy Now
                </Button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
