import React from "react";
import { useState } from "react";
import { IoEyeSharp } from "react-icons/io5";
import { BsEyeSlashFill } from "react-icons/bs";
import useAuth from '../../hooks/useAuth'
import { Navigate } from "react-router-dom";
import loginImage from '../media/login-image.svg';

function Login({ onCancel, isOpen }) {

  const { signin, signUp } = useAuth();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showpasd, setShowpasd] = useState(false);
  const [redirect, setRedirect] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    await signin(username, password, setRedirect);
  };

  if (redirect == true) {
    return <Navigate to="/" />
  }

  const ShowPassword = (e) => {
    e.preventDefault();

    setShowpasd(!showpasd);
  }

  if (!isOpen) {
    return null;
  }

  return (

    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className="modal-overlay absolute inset-0 backdrop-blur-[1px] bg-black bg-opacity-10" onClick={onCancel}></div>
      <div className="modal-container max-w-2xl bg-white mx-auto rounded-xl z-50 overflow-y-auto px-8 py-4 relative">
        <div className="flex justify-end">
          <button
            type="button"
            className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-7 h-7"
            onClick={onCancel}
          >

            <svg className="flex m-auto w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
            </svg>
          </button>
        </div>
        
        <div className="flex md:grid grid-cols-2 p-2 pb-5">

          <div className='hidden md:col-span-1 md:block justify-between items-center pr-5'>
            <div>
              <p className='text-sky-700 font-bold text-2xl'>Entre para o nosso time!</p>
              <p className='text-sm font-light text-gray-400'>Unicesumar Londrina-Pr</p>
              <img src={loginImage} alt="Homem olhando para uma lampada, imagem de criatividade" className="h-75 pt-8"/>
            </div>
          </div>

          <form className="rounded space-y-4 md:space-y-6 ml-8" onSubmit={handleSubmit}>
            <div>
              <h1 className='text-4xl font-black text-sky-700 px-20 pb-4'>Login</h1>
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="usuario">
                Usuário
              </label>
              <input
                className="shadow-md ring-1 appearance-none block w-full bg-gray-100 rounded py-3 px-4 mb-3 mt-1 leading-tight focus:outline-gray-100 focus:bg-white"
                name='usuario'
                type="text"
                value={username}
                placeholder="Username"
                onChange={(e) => setUsername(e.target.value)}></input>
            </div>
            <div className="">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="senha">
                Senha
              </label>
              <div className='relative'>
                <input
                  className="shadow-md ring-1 appearance-none block w-full bg-gray-100 rounded py-3 px-4 mb-3 mt-1 leading-tight focus:outline-gray-100 focus:bg-white"
                  name='senha'
                  value={password}
                  type={showpasd ? "text" : "password"}
                  placeholder="••••••••"
                  onChange={(e) => setPassword(e.target.value)} />
                <button
                  className="absolute inset-y-0 right-0 flex items-center px-4 text-gray-400"
                  onClick={ShowPassword}
                >
                  {showpasd ? (
                    <BsEyeSlashFill />
                  ) : (
                    <IoEyeSharp />
                  )}
                </button>
              </div>
            </div>
            <div className="flex">
              <div className="flex items-center h-5">
                <input
                  className="w-4 h-4 bg-gray-50 focus:ring-3 focus:ring-primary-300"
                  id="remember"
                  aria-describedby="remember"
                  type="checkbox"
                />
              </div>
              <div className="ml-3 text-sm">
                <label htmlFor="remember" className="text-gray-500 hover:text-gray-800">Lembrar de mim</label>
              </div>
            </div>
            <button className="shadow-md w-full py-2 font-semibold  cursor-pointer text-center focus:outline-none hover:bg-sky-700 rounded-md text-white bg-sky-600"
              type='submit'>
              Entrar
            </button>
            <a href="***criar conta***" className="text-gray-500 hover:text-gray-800 text-sm">Não tem uma conta?</a>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;