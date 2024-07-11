import React from 'react';
import '../index.css';  // Certifique-se de que o arquivo de estilos seja importado

const Evangelizador = () => {
  return (
    <div className="flex justify-center">
      <div className="max-w-4xl mx-auto p-6 bg-white md:w-3/5">
        <h1 className="text-3xl font-bold text-red-900 mb-10">
          SEJA VOCÊ UM SÓCIO EVANGELIZADOR
        </h1>
        <p className="text-lg leading-normal mb-4 font-serif-1 text-justify">
          Somos uma Comunidade que vive inteiramente de Providência Divina, onde com nosso trabalho e a generosidade das pessoas temos conseguido manter a obra que é de Deus. Mas muito ainda o Senhor quer realizar. Conhece alguém, ou até mesmo você, que já teve a vida transformada por Deus por meio do Carisma Theófora?
        </p>
        <p className="text-lg leading-normal mb-4 font-serif-1 text-justify">
          Te convido a nos ajudar a continuar evangelizando!
        </p>
        <p className="text-lg leading-normal mb-4 font-serif-1 text-justify">
          Faça seu cadastro para ser mais um <span className='font-bold text-red-900'>Sócio Evangelizador</span> no projeto Unidos pela mesma Missão!
        </p>
        <p className="text-lg leading-normal mb-4 font-serif-1 text-justify">
          Nossa Missão nos une em um mesmo objetivo diante de Deus: ajudar a salvar e resgatar as famílias!
        </p>
        <p className="text-lg leading-normal mb-4 font-serif-1 text-justify">
          Vamos ser Santos juntos!
        </p>
        <p className="text-lg leading-normal mb-4 font-serif-1 text-justify">
          Seja alguém responsável por salvar pessoas. Contribua com nosso trabalho de Evangelização, pois como já dizia Papa São Paulo VI: <span className='italic'>“Quem ajuda na evangelização possuo o mesmo mérito do evangelizador!”</span>
        </p>
        <p className="text-lg leading-normal font-serif-1 text-justify">
          Para fazer seu cadastro entre em contato no telefone <span className="font-bold">(63) 99269-2042</span>
        </p>
      </div>
    </div>
  );
}

export default Evangelizador;
