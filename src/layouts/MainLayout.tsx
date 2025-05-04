/* eslint-disable react-hooks/exhaustive-deps */
import { ReactNode, useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { BiHomeAlt } from "react-icons/bi";
import { CgProfile } from "react-icons/cg";
import { FiBriefcase } from "react-icons/fi";
import { HiOutlineCalculator } from "react-icons/hi";

interface MainLayoutProps {
  children: ReactNode;
}

export default function MainLayout({ children }: MainLayoutProps) {
  const navigate = useNavigate();
  const location = useLocation();
  
  // Define o item ativo com base na rota atual
  const getActiveItem = () => {
    const path = location.pathname;
    if (path === '/') return 'home';

    if (path === '/aboutme') return 'aboutme';
    if (path === '/projects') return 'projects';
    if (path === '/calculadora') return 'calculadora';
    return 'home';
  };
  
  const [activeItem, setActiveItem] = useState(getActiveItem());
  
  // Atualiza o item ativo quando a rota muda
  useEffect(() => {
    setActiveItem(getActiveItem());
  }, [location, getActiveItem]);

  // Adiciona suporte para navegação por teclas numéricas
  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (e.key === '1') {
        setActiveItem('home');
        navigate('/');
      }
      if (e.key === '2') {
        setActiveItem('aboutme');
        navigate('/aboutme');
      }
      if (e.key === '3') {
        setActiveItem('projects');
        navigate('/projects');
      }
      if (e.key === '4') {
        setActiveItem('calculadora');
        navigate('/calculadora');
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [navigate]);

  // Função para navegar quando um item do menu é clicado
  const handleNavigation = (item: string) => {
    setActiveItem(item);
    switch (item) {
      case 'home':
        navigate('/');
        break;
      case 'aboutme':
        navigate('/aboutme');
        break;
      case 'projects':
        navigate('/projects');
        break;
      case 'calculadora':
        navigate('/calculadora');
        break;
      default:
        navigate('/');
    }
  };

  return (
    <div className="flex min-h-screen bg-brown-952 text-white">
      {/* Sidebar */}
      <aside className="w-15 md:w-16 lg:w-18 bg-brown-950 border-r border-orange-900 fixed h-full flex flex-col items-center py-6">
        {/* Avatar/Logo */}
        <div className="w-8 h-8 rounded-full bg-[url(./assets/images/pfp.jpg)] bg-cover mb-8"></div>

        {/* Menu Icons */}
        <nav className="flex flex-col items-center space-y-4">
          <div className="relative group">
            <a
              href="#"
              className={`relative p-3 flex items-center justify-center rounded-xl transition-all duration-300 ease-in-out ${activeItem === 'home'
                ? 'bg-orange-900 hover:bg-orange-901 text-orange-500 scale-110 border-[2px] border-orange-940'
                : 'text-white hover:text-orange-500 hover:bg-orange-900 hover:scale-105 border-[2px] border-transparent'
                }`}
              onClick={(e) => {
                e.preventDefault();
                handleNavigation('home');
              }}
            >
              <span className="sr-only">Home</span>
              <BiHomeAlt className='w-5 h-5' />
            </a>
            {/* Widget flutuante */}
            <div className="absolute left-full ml-3 top-1/2 -translate-y-1/2 bg-brown-950 border border-orange-900 rounded-xl px-3 py-2 whitespace-nowrap opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 ease-in-out z-50 flex items-center gap-3">
              <span className="font-medium font-inter">Início</span>
              <div className="w-6 h-6 bg-brown-900 font-inter border border-orange-900 rounded flex items-center justify-center text-xs font-bold text-orange-500">1</div>
            </div>
          </div>

          <div className="relative group">
            <a
              href="#"
              className={`relative p-3 flex items-center justify-center rounded-xl transition-all duration-300 ease-in-out ${activeItem === 'aboutme'
                ? 'bg-orange-900 hover:bg-orange-901 text-orange-500 scale-110 border-[2px] border-orange-940'
                : 'text-white hover:text-orange-500 hover:bg-orange-900 hover:scale-105 border-[2px] border-transparent'}`}
              onClick={(e) => {
                e.preventDefault();
                handleNavigation('aboutme');
              }}
            >
              <span className="sr-only">About me</span>
              <CgProfile className='w-5 h-5' />
            </a>
            {/* Widget flutuante */}
            <div className="absolute left-full ml-3 top-1/2 -translate-y-1/2 bg-brown-950 border border-orange-900 rounded-xl px-3 py-2 whitespace-nowrap opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 ease-in-out z-50 flex items-center gap-3">
              <span className="font-medium font-inter">Sobre mim</span>
              <div className="w-6 h-6 bg-brown-900 border font-inter border-orange-900 rounded flex items-center justify-center text-xs font-bold text-orange-500">2</div>
            </div>
          </div>

          <div className="relative group">
            <a
              href="#"
              className={`relative p-3 flex items-center justify-center rounded-xl transition-all duration-300 ease-in-out ${activeItem === 'projects'
                ? 'bg-orange-900 hover:bg-orange-901 text-orange-500 scale-110 border-[2px] border-orange-940'
                : 'text-white hover:text-orange-500 hover:bg-orange-900 hover:scale-105 border-[2px] border-transparent'}`}
              onClick={(e) => {
                e.preventDefault();
                handleNavigation('projects');
              }}
            >
              <span className="sr-only">Projetos</span>
              <FiBriefcase className='w-5 h-5' />
            </a>
            {/* Widget flutuante */}
            <div className="absolute left-full ml-3 top-1/2 -translate-y-1/2 bg-brown-950 border border-orange-900 rounded-xl px-3 py-2 whitespace-nowrap opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 ease-in-out z-50 flex items-center gap-3">
              <span className="font-medium font-inter">Projetos</span>
              <div className="w-6 h-6 bg-brown-900 font-inter border border-orange-900 rounded flex items-center justify-center text-xs font-bold text-orange-500">3</div>
            </div>
          </div>

          <div className="relative group">
            <a
              href="#"
              className={`relative p-3 flex items-center justify-center rounded-xl transition-all duration-300 ease-in-out ${activeItem === 'calculadora'
                ? 'bg-orange-900 hover:bg-orange-901 text-orange-500 scale-110 border-[2px] border-orange-940'
                : 'text-white hover:text-orange-500 hover:bg-orange-900 hover:scale-105 border-[2px] border-transparent'}`}
              onClick={(e) => {
                e.preventDefault();
                handleNavigation('calculadora');
              }}
            >
              <span className="sr-only">Calculadora</span>
              <HiOutlineCalculator className='w-5 h-5' />
            </a>
            {/* Widget flutuante */}
            <div className="absolute left-full ml-3 top-1/2 -translate-y-1/2 bg-brown-950 border border-orange-900 rounded-xl px-3 py-2 whitespace-nowrap opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 ease-in-out z-50 flex items-center gap-3">
              <span className="font-medium font-inter">Calculadora</span>
              <div className="w-6 h-6 bg-brown-900 border font-inter border-orange-900 rounded flex items-center justify-center text-xs font-bold text-orange-500">4</div>
            </div>
          </div>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 ml-16 md:ml-20 lg:ml-24 p-6">
        {children}
      </main>
    </div>
  );
}