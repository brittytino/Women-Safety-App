import { Card, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { FaMapMarkerAlt, FaBell, FaShieldAlt } from 'react-icons/fa'; // Importing icons from Font Awesome
import cubeLeg from "../assets/cube-leg.png";

interface ServiceProps {
  title: string;
  description: string;
  icon: JSX.Element;
}

const serviceList: ServiceProps[] = [
  {
    title: "Real-Time Location Sharing",
    description:
      "Always keep your loved ones in the loop with our real-time GPS tracking. Never wander off the radar again, because guess what? They care (a lot).",
    icon: <FaMapMarkerAlt className="w-6 h-6 text-primary" />, // Location marker icon
  },
  {
    title: "Panic Button Alerts",
    description:
      "One tap. That’s all it takes to send an SOS alert to your trusted contacts. No need to scream or fumble through apps when you’re in danger – just hit the panic button.",
    icon: <FaBell className="w-6 h-6 text-primary" />, // Bell icon
  },
  {
    title: "Safe Route Suggestions",
    description:
      "Why take the risky path when you can have real-time, crowd-sourced safe routes? Let our tech guide you through the streets, leaving the shady shortcuts behind.",
    icon: <FaShieldAlt className="w-6 h-6 text-primary" />, // Shield icon
  },
];

export const Services = () => {
  return (
    <section className="container py-24 sm:py-32">
      <div className="grid lg:grid-cols-[1fr,1fr] gap-8 place-items-center">
        <div>
          <h2 className="text-3xl md:text-4xl font-bold">
            <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
              Women's Safety-Centric{" "}
            </span>
            Services
          </h2>

          <p className="text-muted-foreground text-xl mt-4 mb-8 ">
            Ensuring safety and peace of mind for women.
          </p>

          <div className="flex flex-col gap-8">
            {serviceList.map(({ icon, title, description }: ServiceProps) => (
              <Card key={title}>
                <CardHeader className="space-y-1 flex md:flex-row justify-start items-start gap-4">
                  <div className="mt-1 bg-primary/20 p-1 rounded-2xl">
                    {icon}
                  </div>
                  <div>
                    <CardTitle>{title}</CardTitle>
                    <CardDescription className="text-md mt-2">
                      {description}
                    </CardDescription>
                  </div>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>

        <img
          src={cubeLeg}
          className="w-[300px] md:w-[500px] lg:w-[600px] object-contain"
          alt="About services"
        />
      </div>
    </section>
  );
};
