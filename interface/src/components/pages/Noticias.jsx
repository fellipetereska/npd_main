import React from "react";

import dente from '../media/noticias/Dente.png';
import horta from '../media/noticias/Horta.png';
import ia from '../media/noticias/IA.png';
import planta from '../media/noticias/Planta.png';


function Noticias() {
    return (
        <>
            <div class=" h-12 mt-36 w-full justify-center flex items-center ">
                <h1 class="text-4xl text-Escuro font-bold ">
                    Notícias
                </h1>
            </div>

            <div id="card"
                class=" flex ml-44 mr-44  rounded-t-lg rounded-r-lg rounded-b-none h-42 mt-10 ">

                <img src={horta} alt class/>
                    <div class=" flex flex-col text-justify pr-6 pt-6 gap-4  ">
                        <h1 class="text-Escuro text-xl font-bold">
                            Horta Unicesumar
                        </h1>
                        <p class="font-normal">
                            A Unicesumar inaugura uma horta comunitária próxima ao
                            campus, promovendo sustentabilidade e integração local.
                            O espaço será mantido colaborativamente por membros da
                            comunidade, alunos e funcionários, reforçando o
                            compromisso da instituição com práticas ambientais
                            responsáveis e educação sustentável.
                        </p>
                        <a href
                            class="flex justify-end mr-10 no-underline text-sm pt-10 text-Escuro">
                            Saiba Mais...
                        </a>
                    </div>
            </div>
            <span class="flex ml-44 gap-5 ">
                <div id="card"
                    class="flex w-full h-48  mt-6 rounded-t-lg rounded-r-lg rounded-b-none pr-6 pb-2">
                    <img src={dente} alt class/>
                        <div class=" flex-col text-justify mt-6 gap-2 ">
                            <h1 class="text-xl font-bold">
                                Sistema de Odonto
                            </h1>
                            <p class="font-normal">
                                O inovador software odontológico lançado pela
                                DentalTech promete revolucionar a prática
                                odontológica.
                            </p>
                            <a href
                                class="flex justify-end mr-10 no-underline text-sm pt-10 mt-4  ">
                                Saiba Mais...
                            </a>
                        </div>
                </div>

                <div id="card"
                    class="flex w-full h-48  mt-6 rounded-t-lg rounded-r-lg rounded-br-none mr-44
            pb-2 pr-5 ">
                    <img src={ia} alt class/>
                        <div class="text-justify mt-6 gap-2 flex flex-col  ">
                            <h1 class="text-xl font-bold">
                                Palestra sobre I.A
                            </h1>
                            <p class="font-normal">
                                Especialistas renomados compartilharam insights
                                valiosos sobre Inteligência Artificial (I.A) durante
                                uma palestra envolvente. O evento destacou as
                                tendências emergentes e aplicações práticas da I.A
                                na atualidade.
                            </p>
                            <a href
                                class="flex justify-end mr-10 no-underline text-sm pt-5  ">
                                Saiba Mais...
                            </a>
                        </div>
                </div>

            </span>

            <div id="botao">
                <button class="font-semibold text-base">
                    Mais Notícias
                </button>
            </div>

        </>
    )
}

export default Noticias;