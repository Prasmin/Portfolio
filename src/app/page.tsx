import Hero from "@/components/Hero";
import skills from "@/lib/skills";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <div>
        <Hero />
      </div>

      {/* Marquee section for skills */}

      <div className=" sm:max-w-7xl  mx-auto overflow-hidden bg-background sm:py-1  relative sm:max-h-full ">
        {/* Gradient Fade - Left Side */}
        <div className="absolute left-0 top-0 h-full w-24 z-10 bg-gradient-to-r bg-white to-transparent  sm:block hidden"></div>

        {/* Gradient Fade - Right Side */}
        <div className="absolute right-0 top-0 h-full w-24 z-10 bg-gradient-to-l bg-white to-transparent sm:block hidden"></div>
        {/* Marquee Container */}
        <div className=" flex animate-marquee  ">
          {[...skills, ...skills].map((skill, i) => (
            <div key={i} className=" sm:mx-3  ">
              <Image src={skill.icon} alt={skill.name} width={60} height={60} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
