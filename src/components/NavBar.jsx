import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import logo from '../assets/logo.png'; // Importe a imagem do logo
import { FaBars, FaTimes } from 'react-icons/fa'; // Importe ícones do react-icons

const Navbar = () => {
  const location = useLocation(); // Obtém a rota atual
  const [isOpen, setIsOpen] = useState(false); // Estado para controlar o menu aberto

  const toggleMenu = () => {
    setIsOpen(!isOpen); // Alterna entre abrir e fechar o menu
  };

  return (
    <div className="bg-white text-black">
      <div className="flex flex-col items-center p-4">
        <img src={logo} alt="Logo" className="h-28 mb-2" /> {/* Logo centralizada */}
        <h1 className="text-4xl italic pb-2 flex text-red-900 justify-center items-center">
          Comunidade Católica <span className="text-gold font-bold pl-2 tracking-tightest">Theófora</span>
        </h1>
        <button className="md:hidden absolute top-8 right-8" onClick={toggleMenu}>
          {isOpen ? <FaTimes size={34} /> : <FaBars size={34} />} {/* Ícone do menu */}
        </button>
      </div>
      <div className="border-b-2 border-red-900 w-full"></div> {/* Linha separadora vermelha */}
      <nav className={`bg-white text-black ${isOpen ? 'block' : 'hidden'} md:flex flex justify-center items-center`}>
        <ul className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-6 py-2">
          {[
            { name: 'Home', path: '/' },
            { name: 'Nossa História', path: '/nossa-historia' },
            { name: 'Onde Estamos', path: '/onde-estamos' },
            { name: 'Fundadores', path: '/fundadores' },
            { name: 'Carisma', path: '/carisma' },
            { name: 'Missão', path: '/missao' },
            { name: 'Vocacional', path: '/vocacional' },
            { name: 'Espiritualidade', path: '/espiritualidade' },
            { name: 'Orações', path: '/oracoes' },
            { name: 'Ajude-nos', path: '/nos-ajude' },
            { name: 'Contato', path: '/contato' }
          ].map((item) => (
            <li key={item.name} className="relative group">
              <Link
                to={item.path}
                className={`transition-colors pr-2 ${
                  location.pathname === item.path ? 'text-red-900' : ''
                }`}
              >
                {item.name}
              </Link>
              <span
                className={`absolute left-0 bottom-0 h-0.5 w-full transition-all duration-300 ${
                  location.pathname === item.path ? 'bg-red-900' : 'bg-transparent group-hover:bg-red-900'
                }`}
              ></span>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
