// React and Next.js imports
import Link from "next/link";

// Third-party library imports
import Balancer from "react-wrap-balancer";

// UI component imports
import { Button } from "@/components/ui/button";

// Custom components
import { Container, Section } from "@/components/craft";
import { ArrowUpRight } from "lucide-react";

const CTA = () => {
  return (
    <Section className="grid grid-cols-6 px-10 bg-[#e0e0e0]">
      <div className="col-start-2 col-span-4 pt-40 pb-32">
        <h2 className="!my-0 text-5xl max-2xl text-black">
          <Balancer>
            Stay ahead from engine problems, don’t hesitate to contact us for
            consultation or schedule an appointment with us
          </Balancer>
        </h2>
        <div className="not-prose flex items-center gap-2">
          <Button variant="link" size="nospace" asChild>
            <Link href="#">
              Schedule your Appointment{" "}
              <ArrowUpRight className="ml-2" size="16" />
            </Link>
          </Button>
        </div>
      </div>
    </Section>
  );
};

export default CTA;
