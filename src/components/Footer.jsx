import React from 'react';
import { FaInstagram } from 'react-icons/fa'; // Importa o ícone do Instagram

const Footer = () => {
  return (
    <footer className="bg-red-900 text-white p-2 flex justify-between items-center">
      <p className="text-left italic pl-2">
        Chácara Theófora, TO 222, Km /1, Zona Rural  Araguaína TO      
      </p>
      <a 
        href="https://www.instagram.com/comunidadetheofora/" 
        target="_blank" 
        rel="noopener noreferrer"
        className="text-white hover:text-gold pr-2"
      >
        <FaInstagram size={30} /> {/* Ícone do Instagram */}
      </a>
    </footer>
  );
};

export default Footer;
