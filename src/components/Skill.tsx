import skills from "@/lib/skills";

export const SkillsDisplay = () => {
  return (
    <div className="sm:max-w-4xl sm:mx-auto mx-2 py-22 sm:py-32">
      <h2 className="sm:text-4xl text-xl font-bold text-center mb-8">Skills</h2>

      <div className="sm:space-y-4 space-y-3">
        {Object.entries(skills).map(([category, skillsList]) => (
          <div key={category}>
            <h3 className="sm:text-xl text-lg font-semibold mb-4 capitalize">
              {category.replace(/-/g, " ")}
            </h3>
            <div className="flex flex-wrap gap-3">
              {skillsList.map((skill) => (
                <div
                  key={skill.name}
                  className="px-4 py-2  text-sm font-medium"
                >
                  {skill.name}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
