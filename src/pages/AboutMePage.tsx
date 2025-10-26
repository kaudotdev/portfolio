
import { FC } from 'react';

import { BiLogoTypescript } from "react-icons/bi";
import { CgFigma } from "react-icons/cg";
import { FaNodeJs, FaPython } from "react-icons/fa";
import { FaJava as FaJava6 } from "react-icons/fa6";
import { IoLogoReact } from "react-icons/io5";
import { SiSpringboot, SiMongodb, SiTailwindcss, SiC } from "react-icons/si";
import { TbBrandMysql } from "react-icons/tb";
import { PiFileSqlDuotone } from "react-icons/pi";
import * as React from "react";


interface SkillItemProps {
  icon: React.ReactNode;
  name: string;
}


const SkillItem: FC<SkillItemProps> = ({ icon, name }) => (
  <li className="flex items-center gap-2">
    <span className="text-xl">{icon}</span>
    <span>{name}</span>
  </li>
);


const AboutMePage: FC = () => {
  const frontendSkills = [
    { icon: <BiLogoTypescript />, name: "TypeScript" },
    { icon: <IoLogoReact />, name: "React.js" },
    { icon: <SiTailwindcss />, name: "Tailwind CSS" },
    { icon: <CgFigma />, name: "Figma" }
  ];

  const backendSkills = [
    { icon: <SiC />, name: "C" },
    { icon: <FaJava6 />, name: "Java" },
    { icon: <SiSpringboot />, name: "SpringBoot" },
    { icon: <FaNodeJs />, name: "Node.js" },
    { icon: <FaPython />, name: "Python" }
  ];

  const sqlSkills = [
    { icon: <PiFileSqlDuotone />, name: "SQL" },
    { icon: <TbBrandMysql />, name: "MySQL" },
    { icon: <SiMongodb />, name: "MongoDB" }
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

        <div className="mt-6 sm:mt-8 md:mt-10 bg-brown-950 border border-orange-900 rounded-xl p-4 sm:p-6 md:p-8">
          <h2 className="text-2xl sm:text-3xl font-bold font-inter mb-2 sm:mb-2">Quem sou eu</h2>
          <p className="text-base sm:text-lg text-gray-300 mb-3 font-inter">
            Olá! Sou Kauan Souza, um desenvolvedor fullstack com paixão por criar experiências digitais incríveis.
            Trabalho com tecnologias modernas para desenvolver soluções eficientes e elegantes.
          </p>
          <p className="text-base sm:text-lg text-gray-300 font-inter">
            Minha jornada na programação começou há alguns anos e desde então venho aprimorando minhas habilidades
            em diversas tecnologias e frameworks.
          </p>
        </div>

        <div className="mt-8 sm:mt-10 md:mt-12 bg-brown-950 border border-orange-900 rounded-xl p-4 sm:p-6 md:p-8">
          <h2 className="text-2xl sm:text-3xl font-bold font-inter mb-2 sm:mb-2">Habilidades</h2>
          <div className="grid grid-cols-3 md:grid-cols-3 gap-6">
            <div className="pl-6">
              <h3 className="text-xl font-bold mb-4 text-orange-500 font-inter">Frontend</h3>
              <ul className=" text-gray-300 font-inter space-y-3">
                {frontendSkills.map((skill, index) => (
                  <SkillItem key={index} icon={skill.icon} name={skill.name} />
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4 text-orange-500 font-inter">Backend</h3>
              <ul className="text-gray-300 font-inter space-y-3">
                {backendSkills.map((skill, index) => (
                  <SkillItem key={index} icon={skill.icon} name={skill.name} />
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4 text-orange-500 font-inter">Banco de dados</h3>
              <ul className="text-gray-300 font-inter space-y-3">
                {sqlSkills.map((skill, index) => (
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