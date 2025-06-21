var baseUrl = import.meta.env.BASE_URL;

export const About = () => {
  const frontendSkills = [
  { name: "Bootstrap", icon: "/images/bootstrap.png" },
  { name: "C#", icon: "/images/csharp.png" },
  { name: "React", icon: "/images/react.png" },
  { name: "TailwindCSS", icon:"/images/react.png" },
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
  <div className="border border-gray-900 rounded-3xl bg-gray-900 p-6 transition hover:-translate-y-1">
    <h3 className="text-white font-bold pb-2 text-center">{title}</h3>
    <hr className="border-white mb-4" />
    <div className="flex flex-wrap justify-center gap-3">
      {skills.map((skill, key) => (
        <span
        key={key}
        className="bg-cyan-400/10 text-gray-400 py-2 px-3 rounded-xl text-sm hover:bg-cyan-400/20 hover:shadow flex flex-col items-center transition w-30"
        >
        <img
            src={`${baseUrl}${skill.icon}`}
            alt={skill.name}
            className="object-contain mb-1"
        />
        <span className="text-center">{skill.name}</span>
        </span>
      ))}
    </div>
  </div>
);

  return (
    <section
      id="about"
      className="bg-[var(--color-navy)] text-white flex flex-col items-center py-30 px-4 relative"
    >
        {/* Bio Section - Appears First */}
        <h2 className="text-6xl pb-6 font-semibold text-header font-uniqueen">HELLO, <span className="italic">I'M MANUEL!</span></h2>
        <div className="text-white max-w-2xl w-full p-6 mb-16">
            <img
            src={baseUrl + "/images/dev_icon.png"}
            alt="Profile photo"
            className="img-header float-left w-32 h-32 mr-6 mb-2 rounded-full object-cover border-4 border-black"
            />
            <p className="text-white pt-2 text-left">
                I'm a recent graduate from Arizona State University (ASU) with a B.S. degree in
                Computer Information Systems. I graduated summa cum laude with a 3.89 G.P.A. and was 
                awarded Dean's List every semester I attended at ASU. Post Graduation I have spent my time 
                refining the basics and learning new skills.
            </p>
            <p className="text-left pt-4">
                I am currently looking for an opportunity where I can learn and grow. My passion for programming 
                comes from the ability to create things and I find enjoyment in seeing syntax come to life. I want to be 
                able to use my passion to assist others in any way I can and become an important asset wherever I'm at. 
            </p>
        </div>
    </section>
  );
};