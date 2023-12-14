import contato from '../media/contato.svg'
import email from '../media/email.svg'
import logoUnicesumar1 from '../media/logoUnicesumar1.svg'
import logoUnicesumar2 from '../media/logoUnicesumar2.svg'

function Footer() {
    return (
        <div>
            <footer className="bg-neutral-50 h-60 bottom-0 w-full">
                <div className="container mx-auto px-2">
                    <div className="flex justify-around items-center">

                        <div className="text-center mt-12">
                            <h2 className="text-sky-800 text-3xl font-semibold mb-3">Contato</h2>
                            <div className="flex items-center mb-3 ml-8">
                                <img src={contato} alt="Imagem" />
                                <p className="text-neutral-800 ml-4">(00) 00000-0000</p>
                            </div>
                            <div className="flex items-center ml-8">
                                <img src={email} alt="Imagem" />
                                <p className="text-neutral-800 ml-4">example@example.com</p>
                            </div>
                        </div>

                        <div className="text-center mt-12">
                            <div className="flex items-center mb-3">
                                <img className="border-r pr-4 border-neutral-400" src={logoUnicesumar1} alt="Imagem" />
                                <img className="ml-4 mt-6" src={logoUnicesumar2} alt="Imagem" />
                            </div>
                            <p className="text-neutral-500">Unicesumar Londrina - 2023 Todos os direitos reservados</p>
                        </div>

                        <div className="text-center mt-12">
                            <div>
                                <button className="text-neutral-500 bg-transparent hover:bg-blue500 py-0.5 px-0.5 hover:border-transparent rounded mb-2">Sobre nós</button>
                            </div>
                            <button className="text-neutral-500 bg-transparent hover:bg-blue500 py-0.5 px-0.5 hover:border-transparent rounded mb-2 block">Projetos</button>
                            <button className="text-neutral-500 bg-transparent hover:bg-blue500 py-0.5 px-0.5 hover:border-transparent rounded mb-2 block">Notícias</button>
                        </div>

                    </div>
                </div>
            </footer>
        </div>
    )
}

export default Footer;