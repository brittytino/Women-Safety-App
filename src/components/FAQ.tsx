import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface FAQProps {
  question: string;
  answer: string;
  value: string;
}

const FAQList: FAQProps[] = [
  {
    question: "Is the app really free?",
    answer: "Free like Wi-Fi at Starbucks! Yes, totally. We make safety accessible because your life isn’t a product we want to sell.",
    value: "item-1",
  },
  {
    question: "What if I forget to share my location?",
    answer: "No worries! SHE will gently remind you to turn it on because we know you’ve got other things to focus on, like preparing for your next Kollywood binge-watch.",
    value: "item-2",
  },
  {
    question: "How does SHE keep my battery from dying?",
    answer: "Our GPS is powered by a mix of smart engineering and a sprinkle of magic. We’ve optimized it to be lightweight, so your phone can stay alive – unlike your last phone battery!",
    value: "item-3",
  },
  {
    question: "Is my data safe with SHE?",
    answer: "Absolutely! Your safety and privacy are our top priorities. We handle your data like a Tamil mother handles her child's secrets—carefully and with love.",
    value: "item-4",
  },
  {
    question: "Can I use SHE if I'm traveling in Tamil Nadu?",
    answer: "Yes! SHE is designed to keep you safe wherever you are, even on the vibrant streets of Coimbatore. Just activate the features and feel at ease!",
    value: "item-5",
  },
];

export const FAQ = () => {
  return (
    <section
      id="faq"
      className="container py-24 sm:py-32"
    >
      <h2 className="text-3xl md:text-4xl font-bold mb-4">
        Frequently Asked{" "}
        <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
          Questions
        </span>
      </h2>

      <Accordion
        type="single"
        collapsible
        className="w-full AccordionRoot"
      >
        {FAQList.map(({ question, answer, value }: FAQProps) => (
          <AccordionItem
            key={value}
            value={value}
          >
            <AccordionTrigger className="text-left">
              {question}
            </AccordionTrigger>

            <AccordionContent>{answer}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>

      <h3 className="font-medium mt-4">
        Still have questions?{" "}
        <a
          rel="noreferrer noopener"
          href="#"
          className="text-primary transition-all border-primary hover:border-b-2"
        >
          Contact us
        </a>
      </h3>
    </section>
  );
};
