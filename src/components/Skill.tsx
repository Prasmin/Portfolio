import { skills } from "@/lib/skills";

export const SkillComponent = () => {
  return (
    <section className="sm:max-w-4xl mx-auto py-8 min-h-32">
      <div>
        <h3>Skills</h3>

      </div>
      <div>
        <h2>Frontend</h2>
        <div>
          {skills.frontend.map((skill, index) => (
            <div key={index} className="flex items-center space-x-2">
              )}
        </div>
      </div>
      <div>
        <h2>backend</h2>
      </div>
      <div>
        <h2>devOps</h2>
      </div>
      <div>
        <h2>Testing</h2>
      </div>
    </section>
  );
};
