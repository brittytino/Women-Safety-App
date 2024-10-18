import { Badge } from "./ui/badge";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import image from "../assets/growth.png"; // Use images that represent your features
import image3 from "../assets/reflecting.png";
import image4 from "../assets/looking-ahead.png";

interface FeatureProps {
  title: string;
  description: string;
  image: string;
}

const features: FeatureProps[] = [
  {
    title: "Location Sharing",
    description:
      "GPS that doesn’t kill your battery, but might save your life. Share your location in real-time with your people. No random disappearing acts.",
    image: image4,
  },
  {
    title: "Panic Button",
    description:
      "Instantly alert trusted contacts when things go south. One tap, and it’s ‘help is on the way’ – no need to raise your voice.",
    image: image3,
  },
  {
    title: "Corporate Safety Mode",
    description:
      "Because your boss should worry about your safety too, right? We’ve got special tracking for employees, so your commute is never a solo journey.",
    image: image,
  },
  {
    title: "Crowd-Sourced Safety Zones",
    description:
      "Who knows best? The crowd. Get the safest route suggestions based on real-time feedback from people on the street. Skip the sketchy lanes.",
    image: image4, // Reuse or replace with a different image if needed
  },
];

const featureList: string[] = [
  "Dark/Light theme",
  "Reviews",
  "Features",
  "Pricing",
  "Contact form",
  "Our team",
  "Responsive design",
  "Newsletter",
  "Minimalist",
];

export const Features = () => {
  return (
    <section
      id="features"
      className="container py-24 sm:py-32 space-y-8"
    >
      <h2 className="text-3xl lg:text-4xl font-bold md:text-center">
        Many{" "}
        <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
          Great Features
        </span>
      </h2>

      <div className="flex flex-wrap md:justify-center gap-4">
        {featureList.map((feature: string) => (
          <div key={feature}>
            <Badge
              variant="secondary"
              className="text-sm"
            >
              {feature}
            </Badge>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {features.map(({ title, description, image }: FeatureProps) => (
          <Card key={title} className="max-w-xs mx-auto">
            <CardHeader>
              <CardTitle className="text-center">{title}</CardTitle>
            </CardHeader>

            <CardContent className="text-sm">
              {description}
            </CardContent>

            <CardFooter>
              <img
                src={image}
                alt="About feature"
                className="w-[150px] lg:w-[200px] mx-auto"
              />
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  );
};
