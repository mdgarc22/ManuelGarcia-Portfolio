var baseUrl = import.meta.env.BASE_URL;

export const Skillset = () => {
  const frontendSkills = [
  { name: "Bootstrap", icon: "/images/bootstrap.png" },
  { name: "C#", icon: "/images/csharp.png" },
  { name: "React", icon: "/images/react.png" },
  { name: "TailwindCSS", icon:"/images/tailwindcss.png" },
  { name: "Unity", icon: "/images/unity.png" }
];

const backendSkills = [
  { name: "Django", icon: "/images/django.png" },
  { name: "Javascript", icon: "/images/javascript.png" },
  { name: "MySQL", icon: "/images/mysql.png" },
  { name: "PHP", icon: "/images/php.png" },
  { name: "Python", icon: "/images/python.png" }
];

  const SkillCard = ({ title, skills }) => (
  <div className="bg-[var(--color-navy)] border border-gray-900 rounded-2xl p-4 sm:p-6 w-full max-w-xs sm:max-w-md">
    <h3 className="text-white font-bold pb-2 text-center">{title}</h3>
    <hr className="border-white mb-4" />
    <div className="flex flex-wrap justify-center gap-3 py-10">
      {skills.map((skill, key) => (
        <span
        key={key}
        className="min-w-2xs md:min-w-30 flex flex-col items-center bg-gray-300 text-black py-1 px-2 sm:py-2 sm:px-3 rounded-xl text-xs sm:text-sm hover:bg-gray-400/90"
      >
        <img
          src={`${baseUrl}${skill.icon}`}
          alt={skill.name}
          className="w-12 h-12 sm:w-10 sm:h-10 object-contain mb-1"
        />
        <span>{skill.name}</span>
      </span>
            ))}
    </div>
  </div>
);

  return (
    <section
      id="tools"
      className="bg-[var(--color-navy)]/50 min-h-1/2 sm:min-h-1 text-black flex flex-col items-center justify-center py-12 px-4 relative"
    >
      {/* Skills Grid - Appears Below Bio */}
      <div className="grid grid-cols-4 gap-4">
        <div className="md:visible invisible col-span-1 grid text-sideways text-white font-zeronero text-8xl pl-10">S K I L L S</div>
        <div className="grid col-span-2  justify-center w-full items-center">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:max-w-3xl w-full justify-items-center">
            <div className="">
              <SkillCard title="Front End" skills={frontendSkills} />
            </div>
            <div className="">
              <SkillCard title="Back End" skills={backendSkills} />
            </div>
            
          </div>
        </div>
      </div>
    </section>
  );
};