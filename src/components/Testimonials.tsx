import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { FaShieldAlt, FaPhoneAlt } from "react-icons/fa"; // Importing open-source icons

interface TestimonialProps {
  image: string;
  name: string;
  userName: string;
  comment: string;
}

const testimonials: TestimonialProps[] = [
  {
    image: "https://img.freepik.com/free-photo/medium-shot-mother-holding-cute-baby_23-2150412205.jpg?w=740",
    name: "Maya",
    userName: "@maya_28",
    comment: "SHE saved my day! I felt safe walking home from work at night, knowing my sister could track my route. No more texting her every 5 minutes!",
  },
  {
    image: "https://img.freepik.com/free-photo/realistic-people-celebrating-gudi-padwa_23-2151248452.jpg?w=740",
    name: "Priya",
    userName: "@priya_24",
    comment: "I used the panic button when I felt unsafe, and my friends got the alert immediately. It’s like having a security team in your pocket!",
  },
  {
    image: "https://img.freepik.com/free-photo/portrait-indian-man-with-beverage_23-2150913300.jpg?w=740",
    name: "Rajesh",
    userName: "@rajesh_hr",
    comment: "Our company uses SHE for employee safety. Knowing our team is protected during commutes is a huge relief!",
  },
  {
    image: "https://img.freepik.com/free-photo/woman-celebrating-indian-republic-day_23-2151142257.jpg?w=826",
    name: "Anjali",
    userName: "@anjali_30",
    comment: "Thanks to SHE, I can share my location with my parents when I'm out late. It gives them peace of mind!",
  },
  {
    image: "https://img.freepik.com/free-photo/woman-celebrating-indian-republic-day_23-2151142581.jpg?w=826",
    name: "Lakshmi",
    userName: "@lakshmi_22",
    comment: "I love the community safety features. Knowing I can contribute to safer routes is empowering!",
  },
  {
    image: "https://img.freepik.com/free-photo/portrait-man-playing-poker-casino_23-2151831228.jpg?w=900",
    name: "Suresh",
    userName: "@suresh_35",
    comment: "I feel more secure during my daily commute with SHE's tracking. It’s a game-changer!",
  },
];

export const Testimonials = () => {
  return (
    <section id="testimonials" className="container py-24 sm:py-32">
      <h2 className="text-3xl md:text-4xl font-bold text-center">
        Discover Why
        <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
          {" "}
          People Love{" "}
        </span>
        This Landing Page
      </h2>

      <p className="text-xl text-muted-foreground text-center pt-4 pb-8">
        Women's safety is not just a concern; it's a necessity. Join our community to empower and protect each other.
      </p>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mx-auto">
        {testimonials.map(({ image, name, userName, comment }: TestimonialProps) => (
          <Card key={userName} className="max-w-md md:break-inside-avoid overflow-hidden">
            <CardHeader className="flex flex-row items-center gap-4 pb-2">
              <Avatar className="w-12 h-12 border-2 border-primary rounded-full overflow-hidden">
                <AvatarImage
                  alt=""
                  src={image}
                  className="object-cover w-full h-full"
                />
                <AvatarFallback className="bg-gray-200 text-gray-500">OM</AvatarFallback>
              </Avatar>

              <div className="flex flex-col">
                <CardTitle className="text-lg">{name}</CardTitle>
                <CardDescription>{userName}</CardDescription>
              </div>
            </CardHeader>

            <CardContent className="p-4">
              <p className="text-black-700">{comment}</p>
              <div className="flex items-center mt-4 space-x-2">
                <FaShieldAlt className="text-primary" />
                <span className="text-sm text-black-600">Empowering women through technology.</span>
              </div>
              <div className="flex items-center mt-2 space-x-2">
                <FaPhoneAlt className="text-primary" />
                <span className="text-sm text-black-600">Stay connected, stay safe.</span>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};