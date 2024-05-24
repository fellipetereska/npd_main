import React, { useState, useEffect, useRef } from 'react';
import useAuth from '../../hooks/useAuth';

import profile_pic from '../media/profile/profile_pic.png'
import { FaGreaterThan } from "react-icons/fa";
import { FaLessThan } from "react-icons/fa";

function AboutUs() {

	const { getParticipantes } = useAuth();

	const [loading, setLoading] = useState(false);
	const [participantes, setParticipantes] = useState([]);
	const carrosselRef = useRef(null);

	useEffect(() => {
		setLoading(true);
		getParticipantes()
			.then(data => { setParticipantes(data) })
			.catch(error => { console.error(`Erro ao buscar Participantes. Status: ${error}`) })
		setLoading(false);
	}, []);

	const scrollToLeft = () => {
		if (carrosselRef.current) {
			carrosselRef.current.scrollBy({
				left: -200, // Altere o valor conforme desejado
				behavior: 'smooth'
			});
		}
	};

	const scrollToRight = () => {
		if (carrosselRef.current) {
			carrosselRef.current.scrollBy({
				left: 200, // Altere o valor conforme desejado
				behavior: 'smooth'
			});
		}
	};

	return (
		<div>
			<h1 className="flex items-center justify-center mb-8 my-16 text-4xl font-extrabold text-sky-800">
				Sobre Nós
			</h1>
			<p className="mx-32 mb-14 my-4 text-lg text-gray-800 text-justify">
				O Núcleo de Práticas em Desenvolvimento de Software do curso de Análise e Desenvolvimento de Sistemas (ADS) da Unicesumar tem
				desempenhado um papel fundamental na formação dos futuros profissionais de TI. Para destacar o excelente trabalho e os projetos desenvolvidos
				por nossos alunos, propomos a criação de um site dedicado à divulgação desses projetos.
			</p>
			<p className="mx-32 text-3xl font-bold text-sky-800">
				Participantes
			</p>

			<div className="flex mt-3 mb-10 w-full justify-center px-32 scroll">
				<button className='mr-4 text-gray-400 hover:text-gray-600' onClick={scrollToLeft}>{<FaLessThan />}</button>
				<div ref={carrosselRef} className='flex gap-10 overflow-x-hidden'>
					{loading ? (
						<>
							<div className="flex flex-col items-center text-center flex-shrink-0">
								<h2 className="text-sky-800 text-2xl font-semibold text-center">Carregando...</h2>
							</div>
						</>
					) : (
						<>
							{participantes && participantes.map((item, i) => (
								<div key={i} className="flex flex-col items-center text-center flex-shrink-0">
									<img className="object-cover w-40" src={profile_pic} alt="Imagem" />
									<h2 className="text-sky-800 text-xl font-semibold">{item.nome_participante}</h2>
									<p className="text-gray-800">{item.cargo_participante}</p>
									<p className='text-gray-600 font-light text-sm'>{item.curso_participante}</p>
								</div>
							))}
						</>
					)}
				</div>
				<button className='ml-4 text-gray-400 hover:text-gray-600' onClick={scrollToRight}>{<FaGreaterThan />}</button>
			</div>

		</div>

	)
}

export default AboutUs;