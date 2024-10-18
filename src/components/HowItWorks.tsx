import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { FaUserCheck, FaMapMarkerAlt, FaExclamationTriangle } from "react-icons/fa"; // Importing icons from react-icons

interface StepProps {
  icon: JSX.Element;
  title: string;
  description: string;
}

const steps: StepProps[] = [
  {
    icon: <FaUserCheck className="text-4xl text-primary" />, // Icon for registration
    title: "Register & Set Up Your Contacts",
    description:
      "Create an account and pick your trusted ones. We call them ‘safety partners,’",
  },
  {
    icon: <FaMapMarkerAlt className="text-4xl text-primary" />, // Icon for location sharing
    title: "Real-Time Location Sharing",
    description:
      "Turn on the GPS and let your peeps know exactly where you are. No more ‘Where are you?’ calls. Trust us, they’ll thank you.",
  },
  {
    icon: <FaExclamationTriangle className="text-4xl text-primary" />, // Icon for panic button
    title: "Panic Button",
    description:
      "When things feel off, hit that panic button. Alerts go out instantly – faster than your anxiety can rise.",
  },
];

export const HowItWorks = () => {
  return (
    <section
      id="howItWorks"
      className="container text-center py-24 sm:py-32"
    >
      <h2 className="text-3xl md:text-4xl font-bold ">
        How It{" "}
        <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
          Works{" "}
        </span>
        Step-by-Step Guide
      </h2>
      <p className="md:w-3/4 mx-auto mt-4 mb-8 text-xl text-muted-foreground">
        A simple guide to keep you and your loved ones safe.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {steps.map(({ icon, title, description }: StepProps) => (
          <Card key={title} className="bg-muted/50">
            <CardHeader>
              <CardTitle className="grid gap-4 place-items-center">
                {icon}
                {title}
              </CardTitle>
            </CardHeader>
            <CardContent>{description}</CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};
