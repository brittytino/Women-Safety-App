import { Button } from "./ui/button";
import { buttonVariants } from "./ui/button";
import { HeroCards } from "./HeroCards";

export const Hero = () => {
  return (
    <section className="container grid lg:grid-cols-2 place-items-center py-20 md:py-32 gap-10">
      <div className="text-center lg:text-start space-y-6">
        <main className="text-5xl md:text-6xl font-bold">
          <h1 className="inline">
            <span className="inline bg-gradient-to-r from-[#fc8ed5]  to-[#f049d9] text-transparent bg-clip-text">
              She
            </span>{" "}
            
          </h1>{" "}
          -{" "}
          <h2 className="inline">
            <span className="inline bg-gradient-to-r from-[#4e27ff] via-[#1fc0f1] to-[#03a3d7] text-transparent bg-clip-text">
            Secure in Her Environment
            </span>{" "}
            
          </h2>
        </main>

        <p className="text-xl text-muted-foreground md:w-10/12 mx-auto lg:mx-0">
        Because "hope for the best" is not a security plan ,Stay safe. Click the button, and let’s get started.
        </p>

        <div className="space-y-4 md:space-y-0 md:space-x-4">
          <Button className="w-full md:w-1/3">Get Started</Button>

          <a
            rel="noreferrer noopener"
            href="#pricing"
            className={`w-full md:w-1/3 ${buttonVariants({
              variant: "outline",
            })}`}
          >
            See Pricing
          </a>
        </div>
      </div>

      {/* Hero cards sections */}
      <div className="z-10">
        <HeroCards />
      </div>

      {/* Shadow effect */}
      <div className="shadow"></div>
    </section>
  );
};
