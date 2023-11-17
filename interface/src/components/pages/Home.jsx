import React, { useState, useEffect } from 'react';
import home from '../media/browser.png'

function Home() {
    const [text, setText] = useState('');
    const fullText = 'Sua Solução de Software Sob Medida';

    useEffect(() => {
        let index = 0;

        const intervalId = setInterval(() => {
            if (index <= fullText.length) {
                setText(fullText.substring(0, index));
                index += 1;
            } else {
                clearInterval(intervalId);
            }
        }, 100);

        return () => clearInterval(intervalId);
    }, []);

    return (
        <div className="grid md:grid-cols-2 items-center mt-32 mb-32">
            <div className="flex flex-col px-8 md:px-24 text-start">
                <div className="text-gray-500">
                    <h1 className="text-4xl font-extrabold text-sky-800">{text}</h1>
                    <p className="my-4">
                        Seu Software, nossa especialidade: Traga sua visão e nós a
                        transformamos em soluções sob medida para impulsionar o sucesso de
                        sua empresa. Entre em contato agora e faça acontecer.
                    </p>
                </div>
                <div className="">
                    <button className="bg-sky-700 text-white py-2 rounded-lg w-28 mr-4">
                        Contato
                    </button>
                    <a href="#" className="text-sky-700">
                        Saiba Mais...
                    </a>
                </div>
            </div>
            <div className="flex justify-end">
                <img className="" src={home} alt="Imagem" />
            </div>
        </div>
    );
}

export default Home;
