import { Link } from 'react-router-dom'

import logo from '../media/logo.png'
import logo_unicesumar from '../media/logo-unicesumar.svg'

function Navbar() {
    return (
        <nav>
                <div class="flex justify-between h-20 px-20 shadow-md mb-10">
                    <div className='flex items-center'>
                        <div className='flex gap-2'>
                            <div className='pr-2 border-r border-gray-400'>
                                <Link to="/"><img class="h-10 flex justify-start" src={logo} alt="" /></Link>
                            </div>
                            <div className='flex items-end'>
                                <Link to="/"><img src={logo_unicesumar}/></Link>
                            </div>
                        </div>
                    </div>
                    <div className='flex items-center'>
                        <ul class="text-white flex flex-wrap gap-5">
                            <li class="text-zinc-800 hover:text-sky-700 py-2 text-sm font-semibold"><Link to="/">Home</Link></li>
                            <li class="text-zinc-800 hover:text-sky-700 py-2 text-sm font-semibold"><Link to="/aboutus">Sobre Nós</Link></li>
                            <li class="text-zinc-800 hover:text-sky-700 py-2 text-sm font-semibold"><Link to="/projetos">Projetos</Link></li>
                            <li class="text-zinc-800 hover:text-sky-700 py-2 text-sm font-semibold"><Link to="/noticias">Notícias</Link></li>
                            <Link to="/contato">
                                <button
                                    class="border-2 border-sky-700 hover:bg-sky-700 hover:text-white hover:shadow-md text-sky-700 font-bold py-1 px-4 border rounded">
                                    Contato
                                </button>
                            </Link>
                        </ul>
                    </div>
                </div>
            </nav>
    )
}

export default Navbar;