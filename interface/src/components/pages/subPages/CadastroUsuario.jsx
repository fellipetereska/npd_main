import React, { useState, useRef, useEffect } from "react";
import { toast } from 'react-toastify';
import { supabase } from "../../../services/api";
import useAuth from "../../../hooks/useAuth";

function CadastroUsuario() {

  const { signUp } = useAuth();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showpasd, setShowpasd] = useState(false);

  const handleRegister = async (e) => {
    e.preventDefault();

    await signUp(username, password)
  }

  const ShowPassword = (e) => {
    e.preventDefault();

    setShowpasd(!showpasd);
  }

  return (
    <>
      <div className="flex justify-start mt-2">
        <form className="w-full" onSubmit={handleRegister}>
          <div className="flex flex-wrap -mx-3 p-3">

            {/* Campos */}
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

            {/* Botões */}
            <div className="w-full px-3 pl-8 flex justify-end">
              <div>
                <button className="shadow mt-4 bg-red-600 hover:bg-red-700 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded" type="button">
                  Limpar
                </button>
              </div>
              <div className="px-3 pl-8">
                <button className="shadow mt-4 bg-green-600 hover:bg-green-700 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded" type="submit">
                  Cadastrar
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </>
  )
}

export default CadastroUsuario;