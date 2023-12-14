import profile1 from '../media/profile1.svg'
import profile2 from '../media/profile2.svg'
import profile3 from '../media/profile3.svg'
import profile4 from '../media/profile4.svg'
import profile5 from '../media/profile5.svg'

function AboutUs() {
    return (
        <div>
            <h1 className="flex items-center justify-center mb-8 my-16 text-4xl font-extrabold text-sky-800">
                Sobre Nós
            </h1>
            <p className="mx-32 mb-14 my-4 text-lg text-gray-800">
                O Núcleo de Práticas em Desenvolvimento de Software do curso de Análise e Desenvolvimento de Sistemas (ADS) da Unicesumar tem
                desempenhado um papel fundamental na formação dos futuros profissionais de TI. Para destacar o excelente trabalho e os projetos desenvolvidos
                por nossos alunos, propomos a criação de um site dedicado à divulgação desses projetos.
            </p>
            <p1 className="mx-32 text-3xl font-bold text-sky-800">
                Participantes
            </p1>
            <div className="flex gap-28 mt-3 mb-64">
                <div className="flex flex-col items-center text-center mx-2 ml-24">
                    <img className="object-cover" src={profile1} alt="Imagem" />
                    <h2 className="text-sky-800 text-xl font-semibold">Sandro Pinto</h2>
                    <p className="text-gray-800">Coordenador</p>
                </div>
                <div className="flex flex-col items-center text-center mx-2">
                    <img className="object-cover" src={profile2} alt="Imagem" />
                    <h2 className="text-sky-800 text-xl font-semibold">Tiago Galvão</h2>
                    <p className="text-gray-800">Professor</p>
                </div>
                <div className="flex flex-col items-center text-center mx-2">
                    <img className="object-cover" src={profile3} alt="Imagem" />
                    <h2 className="text-sky-800 text-xl font-semibold">Fellipe Tereska</h2>
                    <p className="text-gray-800">Aluno</p>
                </div>
                <div className="flex flex-col items-center text-center mx-2">
                    <img className="object-cover" src={profile4} alt="Imagem" />
                    <h2 className="text-sky-800 text-xl font-semibold">João Schiavon</h2>
                    <p className="text-gray-800">Aluno</p>
                </div>
                <div className="flex flex-col items-center text-center mx-2">
                    <img className="object-cover" src={profile5} alt="Imagem" />
                    <h2 className="text-sky-800 text-xl font-semibold">Luiz Matheus</h2>
                    <p className="text-gray-800">Aluno</p>
                </div>
            </div>
        </div>

    )
}

export default AboutUs;