import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Check } from "lucide-react";

enum PopularPlanType {
  NO = 0,
  YES = 1,
}

interface PricingProps {
  title: string;
  popular: PopularPlanType;
  price: number;
  description: string;
  buttonText: string;
  benefitList: string[];
}

const pricingList: PricingProps[] = [
  {
    title: "Individual Plan",
    popular: 0,
    price: 0,
    description:
      "Oh yes, it’s free! Because your safety shouldn’t break the bank. Just sign up, and we’ll keep you safe while you binge-watch your favorite shows!",
    buttonText: "Get Started",
    benefitList: [
      "Access to all basic features (because who needs fancy stuff?)",
      "Real-time safety alerts (no, really, we mean it!)",
      "Community support (you’re not alone—sort of!)",
      "User-friendly interface (we promise it’s not rocket science!)",
    ],
  },
  {
    title: "Business Safeguard",
    popular: 1,
    price: 999,
    description:
      "Perfect for those businesses that actually care about their employees (shocking, we know). Invest in safety, because ignoring it is sooo last season.",
    buttonText: "Contact Us",
    benefitList: [
      "Up to 50 team members (let's not go overboard!)",
      "Custom safety features (because cookie-cutter just won't cut it)",
      "Dedicated support team (we’re basically your safety sidekicks)",
      "Employee training sessions (everyone loves a good workshop!)",
      "Safety analytics and reports (because numbers make it official)",
    ],
  },
  {
    title: "Enterprise Protection",
    popular: 0,
    price: 2999,
    description:
      "For those corporations that want to be the superhero of safety (cape not included). Tailored solutions for when your safety needs are as complex as your corporate hierarchy.",
    buttonText: "Contact Us",
    benefitList: [
      "Unlimited team members (as long as they behave!)",
      "Comprehensive safety solutions (we’ve got your back, front, and sides)",
      "24/7 priority support (because safety never sleeps!)",
      "Advanced reporting tools (for the data nerds among us)",
      "Safety workshops and seminars (because learning is fun!)",
    ],
  },
];

export const Pricing = () => {
  return (
    <section id="pricing" className="container py-24 sm:py-32">
      <h2 className="text-3xl md:text-4xl font-bold text-center">
        Get
        <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
          {" "}
          Unlimited{" "}
        </span>
        Access
      </h2>
      <h3 className="text-xl text-center text-muted-foreground pt-4 pb-8">
        Because your safety is our top priority... or at least we think so!
      </h3>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {pricingList.map((pricing: PricingProps) => (
          <Card
            key={pricing.title}
            className={
              pricing.popular === PopularPlanType.YES
                ? "drop-shadow-xl shadow-black/10 dark:shadow-white/10"
                : ""
            }
          >
            <CardHeader>
              <CardTitle className="flex item-center justify-between">
                {pricing.title}
                {pricing.popular === PopularPlanType.YES ? (
                  <Badge
                    variant="secondary"
                    className="text-sm text-primary"
                  >
                    Most popular
                  </Badge>
                ) : null}
              </CardTitle>
              <div>
                <span className="text-3xl font-bold">₹{pricing.price}</span>
                <span className="text-muted-foreground"> /month</span>
              </div>

              <CardDescription>{pricing.description}</CardDescription>
            </CardHeader>

            <CardContent>
              <Button className="w-full">{pricing.buttonText}</Button>
            </CardContent>

            <hr className="w-4/5 m-auto mb-4" />

            <CardFooter className="flex">
              <div className="space-y-4">
                {pricing.benefitList.map((benefit: string) => (
                  <span key={benefit} className="flex">
                    <Check className="text-green-500" />{" "}
                    <h3 className="ml-2">{benefit}</h3>
                  </span>
                ))}
              </div>
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  );
};
