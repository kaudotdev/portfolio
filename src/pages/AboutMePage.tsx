// Agrupando importações por categoria
// Importações de React
import { FC } from 'react';

// Importações de ícones - organizadas alfabeticamente
import { BiLogoTypescript } from "react-icons/bi";
import { CgFigma } from "react-icons/cg";
import { FaNodeJs, FaPython } from "react-icons/fa";
import { FaJava as FaJava6 } from "react-icons/fa6";
import { IoLogoReact } from "react-icons/io5";
import { SiExpress, SiMongodb, SiTailwindcss } from "react-icons/si";

// Tipos
interface SkillItemProps {
  icon: React.ReactNode;
  name: string;
}

// Componentes reutilizáveis
const SkillItem: FC<SkillItemProps> = ({ icon, name }) => (
  <li className="flex items-center gap-2">
    <span className="text-xl">{icon}</span>
    <span>{name}</span>
  </li>
);

// Componente principal
const AboutMePage: FC = () => {
  // Dados estruturados para facilitar manutenção
  const frontendSkills = [
    { icon: <IoLogoReact />, name: "React.js" },
    { icon: <BiLogoTypescript />, name: "TypeScript" },
    { icon: <SiTailwindcss />, name: "Tailwind CSS" },
    { icon: <CgFigma />, name: "Figma" }
  ];

  const backendSkills = [
    { icon: <FaNodeJs />, name: "Node.js" },
    { icon: <SiExpress />, name: "Express" },
    { icon: <SiMongodb />, name: "MongoDB" },
    { icon: <FaJava6 />, name: "Java" },
    { icon: <FaPython />, name: "Python" }
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6">
      <section className="pt-16 sm:pt-20 md:pt-24 py-8 sm:py-10 md:py-12">
        <div>
          <h1 className="text-5xl/12 sm:text-6xl/14 md:text-7xl/15 lg:text-8xl/20 font-bold font-fira">
            Sobre <span className="text-orange-500">Mim</span>
          </h1>
          <p className="text-xl sm:text-2xl md:text-2xl lg:text-3xl font-normal text-gray-400 mt-2">
            Desenvolvedor apaixonado por tecnologia
          </p>
        </div>

        <div className="mt-8 sm:mt-10 md:mt-12 bg-brown-950 border border-orange-900 rounded-xl p-4 sm:p-6 md:p-8">
          <h2 className="text-2xl sm:text-3xl font-bold font-inter mb-4 sm:mb-6">Quem sou eu</h2>
          <p className="text-base sm:text-lg text-gray-300 mb-4">
            Olá! Sou Kauan Souza, um desenvolvedor fullstack com paixão por criar experiências digitais incríveis.
            Trabalho com tecnologias modernas para desenvolver soluções eficientes e elegantes.
          </p>
          <p className="text-base sm:text-lg text-gray-300">
            Minha jornada na programação começou há alguns anos e desde então venho aprimorando minhas habilidades
            em diversas tecnologias e frameworks.
          </p>
        </div>

        <div className="mt-8 sm:mt-10 md:mt-12 bg-brown-950 border border-orange-900 rounded-xl p-4 sm:p-6 md:p-8">
          <h2 className="text-2xl sm:text-3xl font-bold font-inter mb-4 sm:mb-6">Habilidades</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-xl font-bold mb-4 text-orange-500">Frontend</h3>
              <ul className="pl-6 text-gray-300 font-inter space-y-3">
                {frontendSkills.map((skill, index) => (
                  <SkillItem key={index} icon={skill.icon} name={skill.name} />
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4 text-orange-500">Backend</h3>
              <ul className="pl-6 text-gray-300 font-inter space-y-3">
                {backendSkills.map((skill, index) => (
                  <SkillItem key={index} icon={skill.icon} name={skill.name} />
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutMePage;