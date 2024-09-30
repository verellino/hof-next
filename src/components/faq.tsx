import { Section, Container } from "@/components/craft";

import { ArrowUpRight } from "lucide-react";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

type FAQItem = {
  question: string;
  answer: string;
  link?: string;
};

const content: FAQItem[] = [
  {
    question: "Coding",
    answer:
      "Unlock Your Car Hidden Features! Cars are becoming more modern, and complex as is it today. Cars are equipped with assistance system, hands-free options, and other smart services. However, not all of these embedded functions are activated by manufacturer. Here at Hofmeister we’re equipped with the imperative tools & experienced mechanics in performing car coding to give you the software modifications, and adaptations you need for your vehicle.",
    link: "https://google.com",
  },
  {
    question: "Ut enim ad minim veniam?",
    answer: `Are you having electrical issues with your car?

      Nowadays, cars are more complex, they are equipped with battery, alternator, cooling fans, blower, fuel pump, fuse box, etc to manage your vehicle.It's no surprise that components can fail with all those electrical parts flowing through the framework of your car.

      Learn more about these technologies:

      Battery Issues
      Alternator Problems
      Starter Malfunction
      Broken Blower Fan
      Fuel Pump Problems
      Blown Fuse`,
  },
  {
    question: "Duis aute irure dolor in reprehenderit?",
    answer:
      "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
  },
  {
    question: "Excepteur sint occaecat cupidatat non proident?",
    answer:
      "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  },
];

const FAQ = () => {
  return (
    <Section>
      <div className="w-full md:w-2/3">
        <h2 className="!mt-0 text-4xl">Our Services</h2>
        <h4 className="mt-2 text-muted-foreground">
          Can&apos;t find the answer you&apos;re looking for? Reach out to our
          customer support team.
        </h4>
        <div className="not-prose mt-4 flex flex-col gap-4 md:mt-8">
          {content.map((item, index) => (
            <Accordion key={index} type="single" collapsible>
              <AccordionItem value={item.question}>
                <AccordionTrigger className="text-left text-xl text-red-700">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="text-base md:w-3/4">
                  {item.answer}
                  {item.link && (
                    <a
                      href={item.link}
                      className="mt-2 flex w-full items-center text-red-700 opacity-90 transition-all hover:opacity-100"
                    >
                      Learn more <ArrowUpRight className="ml-1" size="16" />
                    </a>
                  )}
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          ))}
        </div>
      </div>
    </Section>
  );
};

export default FAQ;
