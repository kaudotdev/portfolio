import { FiGithub } from "react-icons/fi";
import { CgDetailsMore } from "react-icons/cg";
import { FaAngleRight } from "react-icons/fa";
import { RxOpenInNewWindow } from "react-icons/rx";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaChevronRight } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { HiAtSymbol } from "react-icons/hi";
import { Link } from "react-router-dom";


export default function HomePage() {
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6">
      {/* Hero Section */}
      <section className="pt-16 sm:pt-20 md:pt-24 py-8 sm:py-10 md:py-12">
        <h1 className="text-4xl/10 sm:text-5xl/12 md:text-6xl/14 lg:text-7xl/15 xl:text-8xl/20 font-bold font-fira">
          <span className="text-orange-500">Technology</span> moves<br />
          the <span className="text-orange-500">world.</span>
        </h1>
        <p className="text-xl sm:text-2xl md:text-2xl lg:text-3xl font-normal text-gray-400 mt-2 sm:mt-4">Olá, sou Kauan Souza</p>

        {/* Social Links */}
        <div className="flex flex-wrap gap-3 mt-5 font-medium">
          <a href="https://github.com/kaudotdev" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-3 py-1.5 bg-gray-50 rounded-sm text-sm group relative overflow-hidden hover:scale-105 transition-all duration-500 ease-in-out">
            <FaGithub className="w-4 h-4 text-black" />
            <span className="text-black">GitHub</span>
            <div className="relative w-3 h-3 overflow-hidden flex items-center justify-center">
              <FaChevronRight className="w-3 h-3 text-black absolute transition-all duration-700 ease-in-out transform group-hover:-translate-x-10 group-hover:opacity-0" />
              <HiAtSymbol className="w-3.5 h-3.5 text-black absolute transition-all duration-700 ease-in-out transform translate-x-10 opacity-0 group-hover:translate-x-0 group-hover:opacity-100" />
            </div>
          </a>
          <a href="https://www.linkedin.com/in/kauansousa/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-3 py-1.5 bg-gray-50 rounded-sm text-sm group relative overflow-hidden hover:scale-105 transition-all duration-500 ease-in-out">
            <FaLinkedin className="w-4 h-4 text-black" />
            <span className="text-black">LinkedIn</span>
            <div className="relative w-3 h-3 overflow-hidden flex items-center justify-center">
              <FaChevronRight className="w-3 h-3 text-black absolute transition-all duration-700 ease-in-out transform group-hover:-translate-x-10 group-hover:opacity-0" />
              <HiAtSymbol className="w-3.5 h-3.5 text-black absolute transition-all duration-700 ease-in-out transform translate-x-10 opacity-0 group-hover:translate-x-0 group-hover:opacity-100" />
            </div>
          </a>
          <a href="mailto:kaudotdev@proton.me" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-3 py-1.5 bg-gray-50 rounded-sm text-sm group relative overflow-hidden hover:scale-105 transition-all duration-500 ease-in-out">
            <MdEmail className="w-4 h-4 text-black"/>
            <span className="text-black">Email</span>
            <div className="relative w-3 h-3 overflow-hidden flex items-center justify-center">
              <FaChevronRight className="w-3 h-3 text-black absolute transition-all duration-700 ease-in-out transform group-hover:-translate-x-10 group-hover:opacity-0" />
              <HiAtSymbol className="w-3.5 h-3.5 text-black absolute transition-all duration-700 ease-in-out transform translate-x-10 opacity-0 group-hover:translate-x-0 group-hover:opacity-100" />
            </div>
          </a>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-8 sm:py-10 md:py-12">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 sm:gap-0 mb-6 sm:mb-10 md:mb-14">
          <h2 className="text-2xl sm:text-3xl font-inter font-bold">Últimos projetos</h2>
          <Link to="/projects" className="text-sm sm:text-md flex gap-2 sm:gap-3 place-items-center font-inter text-gray-300 py-2 px-3 sm:px-4 bg-orange-902 border-1 border-orange-950 rounded-md hover:bg-orange-900 transition-all duration-300 ease-out delay-150 relative overflow-hidden group">
            <span>Ver todos</span>
            <div className="relative w-5 flex items-center justify-center h-5 overflow-hidden">
              <FaAngleRight className="text-gray-300 w-4 sm:w-5 h-4 sm:h-5 absolute transition-all duration-700 ease-in-out transform group-hover:-translate-x-10 group-hover:opacity-0" />
              <RxOpenInNewWindow className="text-gray-300 stroke-1 w-3 sm:w-4 h-3 sm:h-4 absolute transition-all duration-700 ease-in-out transform translate-x-10 opacity-0 group-hover:translate-x-0 group-hover:opacity-100" />
            </div>
          </Link>
        </div>

        {/* Project Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
          {/* Project Card 1 */}
          <div className="bg-brown-950 rounded-lg overflow-hidden border border-orange-950 group relative">
            <div className="relative">
              <div className="overflow-hidden">
                <img
                  src="https://i.ibb.co/0jnH9Xzt/Slide-16-9-1.png"
                  alt="EggHunt"
                  className="h-auto w-full transition-all duration-700 group-hover:blur-sm group-hover:brightness-50"
                />
              </div>
              <div className="p-4 sm:p-6 transition-transform duration-400 transform group-hover:-translate-y-16 bg-brown-950 border-t-1 border-orange-950 relative z-10 ease-out-in">
                <h3 className="text-lg sm:text-xl font-bold font-inter">Egghunt - Mine em evidência</h3>
                <p className="text-xs sm:text-sm font-inter font-medium text-orange-002">Projeto de evento de páscoa para Paper 1.20.4</p>
              </div>
              <div className="absolute bottom-0 left-0 right-0 flex justify-evenly px-4 sm:px-6 space-x-3 sm:space-x-4 opacity-0 group-hover:opacity-100 transition-all duration-100 pb-4 sm:pb-6 z-20 transform translate-y-8 group-hover:translate-y-0 ease-in-out">
                <a href="#" className="border-shine bg-brown-950 border-1 border-orange-900 hover:border-orange-940 hover:bg-brown-951 text-white grow justify-center gap-2 sm:gap-6 py-2 sm:py-3 rounded-lg flex items-center transition-all duration-700 transform translate-y-4 scale-0 group-hover:translate-y-0 group-hover:scale-100 ease-out delay-75 text-xs sm:text-sm">
                  <FiGithub className="w-3 sm:w-3.5" />
                  GitHub
                </a>
                <a href="#" className="border-shine bg-brown-950 border-1 border-orange-900 hover:border-orange-940 hover:bg-brown-951 text-white grow justify-center gap-2 sm:gap-6 py-2 sm:py-3 rounded-lg flex items-center transition-all duration-700 transform translate-y-4 scale-0 group-hover:translate-y-0 group-hover:scale-100 ease-out delay-150 text-xs sm:text-sm">
                  <CgDetailsMore className="w-3 sm:w-4" />
                  Detalhes
                </a>
              </div>
            </div>
          </div>

          {/* Project Card 2 */}
          <div className="bg-brown-950 rounded-lg overflow-hidden border border-orange-950 group relative">
            <div className="relative">
              <div className="overflow-hidden">
                <img
                  src="src\assets\images\placeholder.png"
                  alt="Projeto 2"
                  className="h-auto w-full transition-all duration-700 group-hover:blur-sm group-hover:brightness-50"
                />
              </div>
              <div className="p-4 sm:p-6 transition-transform duration-400 transform group-hover:-translate-y-16 bg-brown-950 border-t-1 border-orange-950 relative z-10 ease-out-in">
                <h3 className="text-lg sm:text-xl font-bold font-inter">Projeto 2</h3>
                <p className="text-xs sm:text-sm font-inter font-medium text-orange-002">Descrição do projeto</p>
              </div>
              <div className="absolute bottom-0 left-0 right-0 flex justify-evenly px-4 sm:px-6 space-x-3 sm:space-x-4 opacity-0 group-hover:opacity-100 transition-all duration-100 pb-4 sm:pb-6 z-20 transform translate-y-8 group-hover:translate-y-0 ease-in-out">
                <a href="#" className="border-shine bg-brown-950 border-1 border-orange-900 hover:border-orange-940 hover:bg-brown-951 text-white grow justify-center gap-2 sm:gap-6 py-2 sm:py-3 rounded-lg flex items-center transition-all duration-700 transform translate-y-4 scale-0 group-hover:translate-y-0 group-hover:scale-100 ease-out delay-75 text-xs sm:text-sm">
                  <FiGithub className="w-3 sm:w-3.5" />
                  GitHub
                </a>
                <a href="#" className="border-shine bg-brown-950 border-1 border-orange-900 hover:border-orange-940 hover:bg-brown-951 text-white grow justify-center gap-2 sm:gap-6 py-2 sm:py-3 rounded-lg flex items-center transition-all duration-700 transform translate-y-4 scale-0 group-hover:translate-y-0 group-hover:scale-100 ease-out delay-150 text-xs sm:text-sm">
                  <CgDetailsMore className="w-3 sm:w-4" />
                  Detalhes
                </a>
              </div>
            </div>
          </div>

          {/* Project Card 3 */}
          <div className="bg-brown-950 rounded-lg overflow-hidden border border-orange-950 group relative">
            <div className="relative">
              <div className="overflow-hidden">
                <img
                  src="src\assets\images\placeholder.png"
                  alt="Projeto 3"
                  className="h-auto w-full transition-all duration-700 group-hover:blur-sm group-hover:brightness-50"
                />
              </div>
              <div className="p-4 sm:p-6 transition-transform duration-400 transform group-hover:-translate-y-16 bg-brown-950 border-t-1 border-orange-950 relative z-10 ease-out-in">
                <h3 className="text-lg sm:text-xl font-bold font-inter">Projeto 3</h3>
                <p className="text-xs sm:text-sm font-inter font-medium text-orange-002">Descrição do projeto</p>
              </div>
              <div className="absolute bottom-0 left-0 right-0 flex justify-evenly px-4 sm:px-6 space-x-3 sm:space-x-4 opacity-0 group-hover:opacity-100 transition-all duration-100 pb-4 sm:pb-6 z-20 transform translate-y-8 group-hover:translate-y-0 ease-in-out">
                <a href="#" className="border-shine bg-brown-950 border-1 border-orange-900 hover:border-orange-940 hover:bg-brown-951 text-white grow justify-center gap-2 sm:gap-6 py-2 sm:py-3 rounded-lg flex items-center transition-all duration-700 transform translate-y-4 scale-0 group-hover:translate-y-0 group-hover:scale-100 ease-out delay-75 text-xs sm:text-sm">
                  <FiGithub className="w-3 sm:w-3.5" />
                  GitHub
                </a>
                <a href="#" className="border-shine bg-brown-950 border-1 border-orange-900 hover:border-orange-940 hover:bg-brown-951 text-white grow justify-center gap-2 sm:gap-6 py-2 sm:py-3 rounded-lg flex items-center transition-all duration-700 transform translate-y-4 scale-0 group-hover:translate-y-0 group-hover:scale-100 ease-out delay-150 text-xs sm:text-sm">
                  <CgDetailsMore className="w-3 sm:w-4" />
                  Detalhes
                </a>
              </div>
            </div>
          </div>

          {/* Project Card 4 */}
          <div className="bg-brown-950 rounded-lg overflow-hidden border border-orange-950 group relative">
            <div className="relative">
              <div className="overflow-hidden">
                <img
                  src="src\assets\images\placeholder.png"
                  alt="Projeto 4"
                  className="h-auto w-full transition-all duration-700 group-hover:blur-sm group-hover:brightness-50"
                />
              </div>
              <div className="p-4 sm:p-6 transition-transform duration-400 transform group-hover:-translate-y-16 bg-brown-950 border-t-1 border-orange-950 relative z-10 ease-out-in">
                <h3 className="text-lg sm:text-xl font-bold font-inter">Projeto 4</h3>
                <p className="text-xs sm:text-sm font-inter font-medium text-orange-002">Descrição do projeto</p>
              </div>
              <div className="absolute bottom-0 left-0 right-0 flex justify-evenly px-4 sm:px-6 space-x-3 sm:space-x-4 opacity-0 group-hover:opacity-100 transition-all duration-100 pb-4 sm:pb-6 z-20 transform translate-y-8 group-hover:translate-y-0 ease-in-out">
                <a href="#" className="border-shine bg-brown-950 border-1 border-orange-900 hover:border-orange-940 hover:bg-brown-951 text-white grow justify-center gap-2 sm:gap-6 py-2 sm:py-3 rounded-lg flex items-center transition-all duration-700 transform translate-y-4 scale-0 group-hover:translate-y-0 group-hover:scale-100 ease-out delay-75 text-xs sm:text-sm">
                  <FiGithub className="w-3 sm:w-3.5" />
                  GitHub
                </a>
                <a href="#" className="border-shine bg-brown-950 border-1 border-orange-900 hover:border-orange-940 hover:bg-brown-951 text-white grow justify-center gap-2 sm:gap-6 py-2 sm:py-3 rounded-lg flex items-center transition-all duration-700 transform translate-y-4 scale-0 group-hover:translate-y-0 group-hover:scale-100 ease-out delay-150 text-xs sm:text-sm">
                  <CgDetailsMore className="w-3 sm:w-4" />
                  Detalhes
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}