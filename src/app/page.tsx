import { Education } from "@/components/Education";
import { SkillsDisplay } from "@/components/Skill";
import Hero from "@/components/Hero";

export default function Home() {
  return (
    <>
      <div>
        <Hero />
      </div>
      <div>
        <Education />
      </div>
      <div>
        <SkillsDisplay />
      </div>
    </>
  );
}
