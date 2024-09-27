// React and Next.js imports
import Link from "next/link";
import Image from "next/image";

// Third-party library imports
import Balancer from "react-wrap-balancer";
import { Camera, ShoppingBag } from "lucide-react";

// Local component imports
import { Section, Container } from "@/components/craft";
import { Button } from "@/components/ui/button";

// Asset imports
import Logo from "@/assets/images/HC-SG-R.png";

const HofclubHero = () => {
  return (
    <Section>
      <Container className="flex flex-col items-center text-center">
        <Image
          src={Logo}
          width={172}
          height={72}
          alt="Hofclub"
          className="not-prose mb-6 dark:invert md:mb-8"
        />
        <h1 className="text-6xl text-red-700 font-normal mb-4">
          <Balancer>Hof Club</Balancer>
        </h1>
        <h3 className="text-muted-foreground">
          <Balancer>
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
            nisi ut aliquip ex ea commodo consequat.
          </Balancer>
        </h3>
        <div className="not-prose mt-6 flex gap-2 md:mt-12">
          <Button variant={"destructive"} size={"lg"} asChild>
            <Link href="/">
              <ShoppingBag className="mr-2" />
              Shop at Tokopedia
            </Link>
          </Button>
        </div>
      </Container>
    </Section>
  );
};

export default HofclubHero;
