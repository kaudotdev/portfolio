// Importações de React
import { FC } from 'react';

// Importações de ícones
import { FiGithub } from "react-icons/fi";
import { CgDetailsMore } from "react-icons/cg";

// Tipos
interface ProjectCardProps {
  image: string;
  title: string;
  description: string;
  githubLink?: string;
  detailsLink?: string;
}

// Componentes reutilizáveis
const ProjectCard: FC<ProjectCardProps> = ({ image, title, description, githubLink = "#", detailsLink = "#" }) => (
  <div className="bg-brown-950 rounded-lg overflow-hidden border border-orange-950 group relative">
    <div className="relative">
      <div className="overflow-hidden">
        <img
          src={image}
          alt={title}
          className="h-auto w-full transition-all duration-700 group-hover:blur-sm group-hover:brightness-50"
        />
      </div>
      <div className="p-4 sm:p-6 transition-transform duration-400 transform group-hover:-translate-y-16 bg-brown-950 border-t-1 border-orange-950 relative z-10 ease-out-in">
        <h3 className="text-lg sm:text-xl font-bold font-inter">{title}</h3>
        <p className="text-xs sm:text-sm font-inter font-medium text-orange-002">{description}</p>
      </div>
      <div className="absolute bottom-0 left-0 right-0 flex justify-evenly px-4 sm:px-6 space-x-2 sm:space-x-4 opacity-0 group-hover:opacity-100 transition-all duration-100 pb-4 sm:pb-6 z-20 transform translate-y-8 group-hover:translate-y-0 ease-in-out">
        <a href={githubLink} className="border-shine bg-brown-950 border-1 border-orange-900 hover:border-orange-940 hover:bg-brown-951 text-white grow justify-center gap-2 sm:gap-6 py-2 sm:py-3 rounded-lg flex items-center transition-all duration-700 transform translate-y-4 scale-0 group-hover:translate-y-0 group-hover:scale-100 ease-out delay-75 text-xs sm:text-sm">
          <FiGithub className="w-3 sm:w-3.5" />
          GitHub
        </a>
        <a href={detailsLink} className="border-shine bg-brown-950 border-1 border-orange-900 hover:border-orange-940 hover:bg-brown-951 text-white grow justify-center gap-2 sm:gap-6 py-2 sm:py-3 rounded-lg flex items-center transition-all duration-700 transform translate-y-4 scale-0 group-hover:translate-y-0 group-hover:scale-100 ease-out delay-150 text-xs sm:text-sm">
          <CgDetailsMore className="w-3 sm:w-4" />
          Detalhes
        </a>
      </div>
    </div>
  </div>
);

// Componente principal
const ProjectsPage: FC = () => {
  // Dados estruturados para facilitar manutenção
  const projects = [
    {
      image: "https://i.ibb.co/0jnH9Xzt/Slide-16-9-1.png",
      title: "Egghunt - Mine em evidência",
      description: "Projeto de evento de páscoa para Paper 1.20.4",
      githubLink: "#",
      detailsLink: "#"
    },
    {
      image: "https://i.ibb.co/h1428Y3p/Preview-Voteasy.png",
      title: "Voteasy - Sistema de Votação",
      description: "Site para criação de salas de votação com QR Code",
      githubLink: "#",
      detailsLink: "#"
    },
    {
      image: "src\\assets\\images\\placeholder.png",
      title: "Projeto 3",
      description: "Descrição do projeto",
      githubLink: "#",
      detailsLink: "#"
    },
    {
      image: "src\\assets\\images\\placeholder.png",
      title: "Projeto 4",
      description: "Descrição do projeto",
      githubLink: "#",
      detailsLink: "#"
    }
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6">
      <section className="pt-16 sm:pt-20 md:pt-24 py-8 sm:py-10 md:py-12">
        <h1 className="text-4xl/10 sm:text-5xl/12 md:text-6xl/14 lg:text-7xl/15 xl:text-8xl/20 font-bold font-fira">
          Meus <span className="text-orange-500">Projetos</span>
        </h1>
        <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-normal text-gray-400 mt-2 sm:mt-4">
          Conheça alguns dos meus trabalhos
        </p>
        
        <div className="mt-8 sm:mt-10 md:mt-12 grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 md:gap-8">
          {projects.map((project, index) => (
            <ProjectCard 
              key={index}
              image={project.image}
              title={project.title}
              description={project.description}
              githubLink={project.githubLink}
              detailsLink={project.detailsLink}
            />
          ))}
        </div>
      </section>
    </div>
  );
};

export default ProjectsPage;