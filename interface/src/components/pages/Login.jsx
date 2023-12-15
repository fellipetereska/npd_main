import React from "react";
import { useState } from "react";
import { IoEyeSharp } from "react-icons/io5";
import { BsEyeSlashFill } from "react-icons/bs";
import useAuth from '../../hooks/useAuth'
import { Navigate } from "react-router-dom";

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
      <div className="modal-container max-w-lg bg-white mx-auto rounded-xl z-50 overflow-y-auto px-8 py-4 relative">
        <div className="flex justify-end">
          <button
            type="button"
            className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8"
            onClick={onCancel}
          >
            <svg className="flex m-auto w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
            </svg>
          </button>
        </div>
        <div className='flex justify-between items-center py-2'>
          <div>
            <p className='text-lg font-light text-sky-700'>NPD - Nucleo de Pratica de Desenvolvimento</p>
            <p className='text-sm font-light text-gray-400'>Unicesumar Londrina-Pr</p>
            <h1 className='text-3xl font-black text-sky-700 text-center mt-2'>Login</h1>
          </div>
        </div>
        <form className="rounded space-y-4 md:space-y-6" onSubmit={handleSubmit}>
          <div className='mb-6 border-b border-gray-100'></div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="usuario">
              Usuário
            </label>
            <input
              className="appearance-none block w-full bg-gray-100 rounded py-3 px-4 mb-3 mt-1 leading-tight focus:outline-gray-100 focus:bg-white"
              name='usuario'
              type="text"
              value={username}
              placeholder="Username"
              onChange={(e) => setUsername(e.target.value)}></input>
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="senha">
              Senha
            </label>
            <div className='relative'>
              <input
                className="appearance-none block w-full bg-gray-100 rounded py-3 px-4 mb-3 mt-1 leading-tight focus:outline-gray-100 focus:bg-white"
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
              <label htmlFor="remember" className="text-gray-500 hover:text-gray-800">Remember me</label>
            </div>
          </div>
          <button className="w-full py-2 font-semibold cursor-pointer text-center focus:outline-none shadow hover:bg-sky-700 rounded-md text-white bg-sky-600"
            type='submit'>
            Entrar
          </button>
        </form>
        <div className='border-b border-gray-200'></div>
      </div>
    </div>
  );
}

export default Login;