import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Badge } from "./ui/badge";
import { Button, buttonVariants } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  CardFooter,
} from "@/components/ui/card";
import { Check } from "lucide-react";

export const HeroCards = () => {
  return (
    <div className="hidden lg:flex flex-row flex-wrap gap-8 relative w-[700px] h-[500px]">
      {/* Testimonial */}
      <Card className="absolute w-[340px] -top-[15px] drop-shadow-xl shadow-black/10 dark:shadow-white/10">
        <CardHeader className="flex flex-row items-center gap-4 pb-2">
          <Avatar>
            <AvatarImage
              alt=""
              src="./src/assets/favicon.png"
            />
            <AvatarFallback>SH</AvatarFallback>
          </Avatar>

          <div className="flex flex-col">
            <CardTitle className="text-lg">Guardian Angel</CardTitle>
            <CardDescription>@protect-her</CardDescription>
          </div>
        </CardHeader>

        <CardContent>Empowering Women, One Safe Commute at a Time</CardContent>
      </Card>

      {/* Team */}
      <Card className="absolute right-[20px] top-4 w-80 flex flex-col justify-center items-center drop-shadow-xl shadow-black/10 dark:shadow-white/10">
  <CardHeader className="mt-8 flex justify-center items-center pb-2">
    <img
      src="./src/assets/favicon2.png"
      alt="user avatar"
      className="absolute grayscale-[0%] -top-12 rounded-full w-24 h-24 aspect-square object-cover"
    />
    <CardTitle className="text-center">" SHE "</CardTitle>
    <CardDescription className="font-normal text-primary">
      Developed by "Protect Her"
    </CardDescription>
  </CardHeader>

  <CardContent className="text-center pb-2">
    <p>
      Feel secure every time you step out. Sign up now and keep your safety in check!
    </p>
  </CardContent>

  <CardFooter className="flex justify-center w-full">
    <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4 w-full">
      <Button className="w-full md:w-1/2">Login</Button>
      <a
        rel="noreferrer noopener"
        href="#"
        target="_blank"
        className={`w-full md:w-1/2 ${buttonVariants({
          variant: "outline",
        })} flex items-center justify-center`}
      >
        Signup
      </a>
    </div>
  </CardFooter>
</Card>



      {/* Pricing */}
      <Card className="absolute top-[150px] left-[50px] w-72  drop-shadow-xl shadow-black/10 dark:shadow-white/10">
        <CardHeader>
          <CardTitle className="flex item-center justify-between">
            Free
            <Badge
              variant="secondary"
              className="text-sm text-primary"
            >
              Most prefered
            </Badge>
          </CardTitle>
          <div>
            <span className="text-3xl font-bold">0</span>
            <span className="text-muted-foreground"> /month</span>
          </div>

          <CardDescription>
          Oh yes, it’s free! Because your safety shouldn’t break the bank.
          </CardDescription>
        </CardHeader>

        <CardContent>
          <Button className="w-full">Start Free Trial</Button>
        </CardContent>

        <hr className="w-4/5 m-auto mb-4" />

        <CardFooter className="flex">
          <div className="space-y-4">
            {["Real-time safety alerts", "Community support", "User-friendly interface"].map(
              (benefit: string) => (
                <span
                  key={benefit}
                  className="flex"
                >
                  <Check className="text-green-500" />{" "}
                  <h3 className="ml-2">{benefit}</h3>
                </span>
              )
            )}
          </div>
        </CardFooter>
      </Card>

      {/* Service */}
      <Card className="absolute w-[350px] -right-[10px] bottom-[35px]  drop-shadow-xl shadow-black/10 dark:shadow-white/10">
        <CardHeader className="space-y-1 flex md:flex-row justify-start items-start gap-4">
          <div>
            <CardTitle>Future Scope</CardTitle>
            <CardDescription className="text-md mt-2">
            AI-driven route safety predictions, smart wearable integration for panic alerts, and global expansion to empower women everywhere.
            </CardDescription>
          </div>
        </CardHeader>
      </Card>
    </div>
  );
};
