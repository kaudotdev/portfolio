import { FiGithub } from "react-icons/fi";
import { CgDetailsMore } from "react-icons/cg";

export default function ProjectsPage() {
  return (
    <div className="max-w-6xl mx-auto">
      <section className="pt-24 py-12">
        <h1 className="text-7xl/15 md:text-7xl/15 lg:text-8xl/20 font-bold font-fira">
          Meus <span className="text-orange-500">Projetos</span>
        </h1>
        <p className="lg:text-3xl md:text-2xl text-2xl font-normal text-gray-400 mt-2">
          Conheça alguns dos meus trabalhos
        </p>
        
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Project Card 1 */}
          <div className="bg-brown-950 rounded-lg overflow-hidden border border-orange-950 group relative">
            <div className="relative">
              <div className="overflow-hidden">
                <img
                  src="public\Slide 16_9 - 1.png"
                  alt="EggHunt"
                  className="h-auto w-full transition-all duration-700 group-hover:blur-sm group-hover:brightness-50"
                />
              </div>
              <div className="p-6 transition-transform duration-400 transform group-hover:-translate-y-16 bg-brown-950 border-t-1 border-orange-950 relative z-10 ease-out-in">
                <h3 className="text-xl font-bold font-inter">Egghunt - Mine em evidência</h3>
                <p className="text-sm font-inter font-medium text-orange-002">Projeto de evento de páscoa para Paper 1.20.4</p>
              </div>
              <div className="absolute bottom-0 left-0 right-0 flex justify-evenly px-6 space-x-4 opacity-0 group-hover:opacity-100 transition-all duration-100 pb-6 z-20 transform translate-y-8 group-hover:translate-y-0 ease-in-out">
                <a href="#" className="border-shine bg-brown-950 border-1 border-orange-900 hover:border-orange-940 hover:bg-brown-951 text-white grow justify-center gap-6 py-3 rounded-lg flex items-center transition-all duration-700 transform translate-y-4 scale-0 group-hover:translate-y-0 group-hover:scale-100 ease-out delay-75">
                  <FiGithub className="w-3.5" />
                  GitHub
                </a>
                <a href="#" className="border-shine bg-brown-950 border-1 border-orange-900 hover:border-orange-940 hover:bg-brown-951 text-white grow justify-center gap-6 py-3 rounded-lg flex items-center transition-all duration-700 transform translate-y-4 scale-0 group-hover:translate-y-0 group-hover:scale-100 ease-out delay-150">
                  <CgDetailsMore className="w-4" />
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
              <div className="p-6 transition-transform duration-400 transform group-hover:-translate-y-16 bg-brown-950 border-t-1 border-orange-950 relative z-10 ease-out-in">
                <h3 className="text-xl font-bold font-inter">Projeto 2</h3>
                <p className="text-sm font-inter font-medium text-orange-002">Descrição do projeto</p>
              </div>
              <div className="absolute bottom-0 left-0 right-0 flex justify-evenly px-6 space-x-4 opacity-0 group-hover:opacity-100 transition-all duration-100 pb-6 z-20 transform translate-y-8 group-hover:translate-y-0 ease-in-out">
                <a href="#" className="border-shine bg-brown-950 border-1 border-orange-900 hover:border-orange-940 hover:bg-brown-951 text-white grow justify-center gap-6 py-3 rounded-lg flex items-center transition-all duration-700 transform translate-y-4 scale-0 group-hover:translate-y-0 group-hover:scale-100 ease-out delay-75">
                  <FiGithub className="w-3.5" />
                  GitHub
                </a>
                <a href="#" className="border-shine bg-brown-950 border-1 border-orange-900 hover:border-orange-940 hover:bg-brown-951 text-white grow justify-center gap-6 py-3 rounded-lg flex items-center transition-all duration-700 transform translate-y-4 scale-0 group-hover:translate-y-0 group-hover:scale-100 ease-out delay-150">
                  <CgDetailsMore className="w-4" />
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
              <div className="p-6 transition-transform duration-400 transform group-hover:-translate-y-16 bg-brown-950 border-t-1 border-orange-950 relative z-10 ease-out-in">
                <h3 className="text-xl font-bold font-inter">Projeto 3</h3>
                <p className="text-sm font-inter font-medium text-orange-002">Descrição do projeto</p>
              </div>
              <div className="absolute bottom-0 left-0 right-0 flex justify-evenly px-6 space-x-4 opacity-0 group-hover:opacity-100 transition-all duration-100 pb-6 z-20 transform translate-y-8 group-hover:translate-y-0 ease-in-out">
                <a href="#" className="border-shine bg-brown-950 border-1 border-orange-900 hover:border-orange-940 hover:bg-brown-951 text-white grow justify-center gap-6 py-3 rounded-lg flex items-center transition-all duration-700 transform translate-y-4 scale-0 group-hover:translate-y-0 group-hover:scale-100 ease-out delay-75">
                  <FiGithub className="w-3.5" />
                  GitHub
                </a>
                <a href="#" className="border-shine bg-brown-950 border-1 border-orange-900 hover:border-orange-940 hover:bg-brown-951 text-white grow justify-center gap-6 py-3 rounded-lg flex items-center transition-all duration-700 transform translate-y-4 scale-0 group-hover:translate-y-0 group-hover:scale-100 ease-out delay-150">
                  <CgDetailsMore className="w-4" />
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
              <div className="p-6 transition-transform duration-400 transform group-hover:-translate-y-16 bg-brown-950 border-t-1 border-orange-950 relative z-10 ease-out-in">
                <h3 className="text-xl font-bold font-inter">Projeto 4</h3>
                <p className="text-sm font-inter font-medium text-orange-002">Descrição do projeto</p>
              </div>
              <div className="absolute bottom-0 left-0 right-0 flex justify-evenly px-6 space-x-4 opacity-0 group-hover:opacity-100 transition-all duration-100 pb-6 z-20 transform translate-y-8 group-hover:translate-y-0 ease-in-out">
                <a href="#" className="border-shine bg-brown-950 border-1 border-orange-900 hover:border-orange-940 hover:bg-brown-951 text-white grow justify-center gap-6 py-3 rounded-lg flex items-center transition-all duration-700 transform translate-y-4 scale-0 group-hover:translate-y-0 group-hover:scale-100 ease-out delay-75">
                  <FiGithub className="w-3.5" />
                  GitHub
                </a>
                <a href="#" className="border-shine bg-brown-950 border-1 border-orange-900 hover:border-orange-940 hover:bg-brown-951 text-white grow justify-center gap-6 py-3 rounded-lg flex items-center transition-all duration-700 transform translate-y-4 scale-0 group-hover:translate-y-0 group-hover:scale-100 ease-out delay-150">
                  <CgDetailsMore className="w-4" />
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