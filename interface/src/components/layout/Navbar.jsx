import {Link} from 'react-router-dom'

function Navbar () {
    return(
        <div>
            <nav>
                <div class="flex flex-wrap items-center justify-between h-20 px-20 shadow-md max-w-screen-2xl mx-auto mb-10">
                    <div>
                        <div className='flex gap-10 items-center'>
                            <div>
                                <Link to="/home"><img class="w-12 h-12 flex justify-start" alt="" /></Link>
                            </div>
                        </div>
                    </div>
                    <div>
                        <ul class="text-white flex flex-wrap gap-5">
                            <li class="text-zinc-900 hover:text-red-500 py-2 text-sm font-semibold"><Link to="/home">Home</Link></li>
                            <li class="text-zinc-900 hover:text-red-500 py-2 text-sm font-semibold"><Link to="/cadastros">Cadastros</Link></li>
                            <li class="text-zinc-900 hover:text-red-500 py-2 text-sm font-semibold"><Link to="/gestao">Gestão</Link></li>
                            <li class="text-zinc-900 hover:text-red-500 py-2 text-sm font-semibold"><Link to="/inventario">Inventario de Risco</Link></li>
                            <li class="text-zinc-900 hover:text-red-500 py-2 text-sm font-semibold"><Link to="/plano">Plano de Ação</Link></li>
                            <li class="text-zinc-900 hover:text-red-500 py-2 text-sm font-semibold"><Link to="/laudos">Laudos</Link></li>
                                <button
                                    class="bg-rose-600 hover:bg-rose-700 text-white font-bold py-2 px-4 border shadow hover:shadow-md rounded"
                                >
                                    Login
                                </button>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar();