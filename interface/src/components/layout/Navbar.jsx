import { Link, useNavigate } from 'react-router-dom'
import { useState } from 'react';
import Login from '../pages/Login';

import logo from '../media/logo.png'
import logo_unicesumar from '../media/logo-unicesumar.svg'
import { FiMenu } from "react-icons/fi";
import { BiLogIn } from 'react-icons/bi'
import useAuth from '../../hooks/useAuth';

import ModalCadastros from '../pages/ModalCadastros';

function Navbar() {

  const { setAtualizar, atualizar } = useAuth(null);

  const [user, setUser] = useState('Fellipe');
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showLogin, setShowLogin] = useState(false);
  const [showCadastros, setShowCadastros] = useState(false);

  const handleMenuClick = () => {
    setIsMenuOpen(!isMenuOpen); //Abrir o menu móvel
  };

  const handleMenuItemClick = () => {
    setIsMenuOpen(false); // Fechar o menu ao clicar em um item de menu
  };

  // Tratando Modal login
  const handleLoginOpen = () => setShowLogin(true);
  const handleLoginClose = () => setShowLogin(false);

  // Tratando Modal Cadastros
  const handleCadastrosOpen = () => setShowCadastros(true);
  const handleCadastrosClose = () => {
    setAtualizar(!atualizar);
    setShowCadastros(false);
  }

  const handleLogoutClick = () => {
    setUser('');
    navigate("/")
    setIsMenuOpen(false)
  }

  return (
    <>
      <nav className="bg-white border-gray-200 shadow-md">
        <div className="flex flex-wrap items-center justify-between mx-auto p-4 px-10 shadow-md">
          {/* Logos */}
          <div className='flex items-center'>
            <div className='flex gap-2'>
              <div className='pr-2 border-r border-gray-400'>
                <Link to="/"><img className="h-10 flex justify-start" src={logo} alt="" /></Link>
              </div>
              <div className='flex items-end'>
                <Link to="/"><img src={logo_unicesumar} /></Link>
              </div>
            </div>
          </div>
          {/* Botão Mobile */}
          <div className="flex md:order-1">
            <div
              type="button"
              onClick={handleMenuClick}
              className="inline-flex items-center p-2 w-10 h-10 justify-center text-5md text-sky-800 rounded-lg md:hidden focus:outline-none focus:ring-2 focus:ring-gray-20">
              <span className="sr-only">Abrir Menu</span>
              <FiMenu />
            </div>
          </div>
          <div className={`items-center justify-between py-2 w-full md:flex md:w-auto md:order-1 ${isMenuOpen ? '' : 'hidden'}`}>
            <ul className={`flex flex-col justify-center font-semibold p-4 border-gray-100 rounded-md bg-gray-50 md:p-0 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white ${isMenuOpen ? '' : 'items-center'}`}>

              {/* Menu */}
              <li onClick={handleMenuItemClick}
                className="block py-2 px-3 text-zinc-700 md:bg-transparent md:text-zinc-700 md:p-0 hover:rounded-md hover:text-sky-800"><Link to="/">Home</Link></li>
              <li onClick={handleMenuItemClick}
                className="block py-2 px-3 text-zinc-700 md:bg-transparent md:text-zinc-700 md:p-0 hover:rounded-md hover:text-sky-800"><Link to="/aboutus">Sobre Nós</Link></li>
              <li onClick={handleMenuItemClick}
                className="block py-2 px-3 text-zinc-700 md:bg-transparent md:text-zinc-700 md:p-0 hover:rounded-md hover:text-sky-800"><Link to="/projetos">Projetos</Link></li>
              <li onClick={handleMenuItemClick}
                className="block py-2 px-3 text-zinc-700 md:bg-transparent md:text-zinc-700 md:p-0 hover:rounded-md hover:text-sky-800"><Link to="/noticias">Notícias</Link></li>

              {/* Botão Contato */}
              {user ? (
                <></>
              ) : (
                <button
                  className="border-sky-700 hover:bg-sky-700 hover:text-white hover:shadow-md text-sky-700 font-bold py-1 px-4 border rounded"
                  onClick={handleLoginOpen}
                >
                  Login
                </button>
              )}
            </ul>
          </div>
        </div>
        {user ? (
          <>
            <div className="flex flex-wrap items-center justify-between mx-auto p-4 px-10 shadow-md">
              {/* Logos */}
              <div className='flex gap-2 items-center'>
                <p className='text-sm text-gray-500'>Usuário: </p>
                <div className='bg-gray-50 py-2 px-3 rounded-md shadow-sm hover:shadow-md cursor-pointer hover:text-sky-800'>
                  <p className='font-semibold'>{user}</p>
                </div>
              </div>
              {/* Botão Mobile */}
              <div className="flex md:order-1">
                <div
                  type="button"
                  onClick={handleMenuClick}
                  className="inline-flex items-center p-2 w-10 h-10 justify-center text-5md text-sky-800 rounded-lg md:hidden focus:outline-none focus:ring-2 focus:ring-gray-20">
                  <span className="sr-only">Abrir Menu</span>
                  <FiMenu />
                </div>
              </div>
              <div className={`items-center justify-between py-2 w-full md:flex md:w-auto md:order-1 ${isMenuOpen ? '' : 'hidden'}`}>
                <ul className={`flex flex-col justify-center font-semibold p-4 border-gray-100 rounded-md bg-gray-50 md:p-0 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white ${isMenuOpen ? '' : 'items-center'}`}>
                  <button
                    className="border-sky-700 hover:bg-sky-700 hover:text-white hover:shadow-md text-sky-700 font-bold py-1 px-4 border rounded"
                    onClick={handleCadastrosOpen}
                  >
                    Cadastros
                  </button>

                  <div className='hover:cursor-pointer py-2 rounded-md'>
                    <BiLogIn
                      className='text-gray-700 scale-150'
                      onClick={handleLogoutClick}
                    />
                  </div>
                </ul>
              </div>
            </div>
          </>
        ) : (
          <>
          </>
        )}
      </nav>
      <Login
        isOpen={showLogin}
        onCancel={handleLoginClose}
      />
      <ModalCadastros
        isOpen={showCadastros}
        onCancel={handleCadastrosClose}
      />
    </>
  )
}

export default Navbar;