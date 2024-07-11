import React from 'react';

const OndeEstamos = () => {
  return (
    <div className="flex flex-col items-center">
      <div className="ax-w-4xl mx-auto p-6 bg-white w-5/6 md:w-4/5">
        <h1 className="text-4xl font-bold text-red-900 mb-10">Onde nos encontrar?</h1>
        <p className="text-lg leading-relaxed mb-6 text-justify font-serif-1">
          Na cidade de Araguaína, no estado do Tocantins, está localizada a chácara da Casa Mãe da COMUNIDADE THEÓFORA, onde acontecem os grupos de oração, retiros, acampamentos, encontros, atendimentos de oração por cura e libertação, Santas Missas e toda a evangelização de nossa comunidade.
        </p>
        <p className="text-lg leading-relaxed mb-6 text-justify font-serif-1">
          <strong>Endereço:</strong> Chácara Theófora, TO 222, km 01, S/N, Zona Rural<br />
          <strong>CEP:</strong> 77834-899<br />
          <strong>Cidade - UF:</strong> Araguaína - TO
        </p>
        <p className="text-lg leading-relaxed mb-6 text-justify font-serif-1">
          E agora você também pode nos encontrar no Colégio Querubins, que foi um anseio do coração de Deus para nossa comunidade.
        </p>
        <p className="text-lg leading-relaxed mb-6 text-justify font-serif-1">
          <strong>Endereço:</strong> Avenida Emanoel, quadra 51, lote 9-A, n 1697, bairro Senador<br />
          <strong>CEP:</strong> 77813-520<br />
          <strong>Cidade - UF:</strong> Araguaína - TO
        </p>
        <p className="text-lg leading-relaxed mb-6 text-justify font-serif-1">
          Segue, abaixo, o mapa para a COMUNIDADE THEÓFORA.
        </p>
        <div className="flex justify-center mt-6">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12749.446178739064!2d-48.23757328721053!3d-7.189301400024742!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x92d8b5e0dbb3578f%3A0x8bde28e1e3a209b5!2sUnnamed%20Road%2C%20Zona%20Rural%2C%20Aragua%C3%ADna%20-%20TO%2C%2077804-970!5e0!3m2!1spt-BR!2sbr!4v1699498832823!5m2!1spt-BR!2sbr"
            width="600"
            height="450"
            allowFullScreen=""
            loading="lazy"
            className="border-0"
          ></iframe>
        </div>
      </div>
    </div>
  );
}

export default OndeEstamos;


