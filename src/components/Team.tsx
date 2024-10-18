import { buttonVariants } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Linkedin, Facebook, Instagram } from "lucide-react";

interface TeamProps {
  name: string;
  position: string;
  roleDescription: string;
  socialNetworks: SocialNetworkProps[];
}

interface SocialNetworkProps {
  name: string;
  url: string;
}

const teamList: TeamProps[] = [
  {
    name: "Tino Britty J",
    position: "Developer",
    roleDescription: "Expert in building responsive applications with a focus on user experience.",
    socialNetworks: [
      {
        name: "Linkedin",
        url: "https://www.linkedin.com/in/brittytino/",
      },
    ],
  },
  {
    name: "Vergina Sharley MS",
    position: "Content Writer",
    roleDescription: "Crafts engaging content that connects and resonates with our audience.",
    socialNetworks: [
      {
        name: "Linkedin",
        url: "https://www.linkedin.com/in/verginasharley18/",
      },
    ],
  },
  {
    name: "Udhaysankar",
    position: "Idea Pitcher",
    roleDescription: "Innovative thinker who brings fresh ideas to enhance our mission.",
    socialNetworks: [
      {
        name: "Linkedin",
        url: "https://www.linkedin.com/in/udhayasankar1/",
      },
    ],
  },
];

export const Team = () => {
  const socialIcon = (iconName: string) => {
    switch (iconName) {
      case "Linkedin":
        return <Linkedin size="20" />;
      case "Facebook":
        return <Facebook size="20" />;
      case "Instagram":
        return <Instagram size="20" />;
      default:
        return null;
    }
  };

  return (
    <section id="team" className="container py-24 sm:py-32">
      <h2 className="text-3xl md:text-4xl font-bold text-center">
        <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
          Our Dedicated{" "}
        </span>
        Crew
      </h2>

      <p className="mt-4 mb-10 text-xl text-muted-foreground text-center">
        The brainiacs behind SHE? Meet the geniuses who know how to code, care, and create. We’re a mix of tech nerds, safety advocates, and overprotective family members (who constantly check in on their loved ones). Trust us – we get it!
      </p>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 gap-y-10">
        {teamList.map(({ name, position, roleDescription, socialNetworks }: TeamProps) => (
          <Card key={name} className="bg-muted/50 relative flex flex-col justify-center items-center p-6 rounded-lg shadow-lg">
            <div className="flex justify-center items-center mb-4">
              {/* Using a placeholder icon for profile image */}
              <div className="flex items-center justify-center rounded-full w-24 h-24 bg-gray-400">
                <span className="text-black-600 text-3xl">{name.charAt(0)}</span>
              </div>
            </div>
            <CardHeader className="text-center">
              <CardTitle className="text-xl font-semibold">{name}</CardTitle>
              <CardDescription className="text-primary">{position}</CardDescription>
            </CardHeader>

            <CardContent className="text-center pb-2">
              <p className="text-black-700">{roleDescription}</p>
            </CardContent>

            <CardFooter className="flex justify-center space-x-4">
              {socialNetworks.map(({ name, url }: SocialNetworkProps) => (
                <a
                  key={name}
                  rel="noreferrer noopener"
                  href={url}
                  target="_blank"
                  className={buttonVariants({ variant: "ghost", size: "sm" })}
                >
                  <span className="sr-only">{name} icon</span>
                  {socialIcon(name)}
                </a>
              ))}
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  );
};
