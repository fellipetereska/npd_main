import React, { useState, useRef, useEffect } from "react";
import { toast } from 'react-toastify';
import { IoAddCircleSharp } from "react-icons/io5";
import { supabase } from "../../../services/api";

function CadastroProjetos() {

  const [tecnologias, setTecnologias] = useState(null);

  const getTecnologias = async () => {
    try {
      const { data } = await supabase.from("tecnologias").select();
      setTecnologias(data);
    } catch (error) {
      console.error("Erro ao buscar contato:", error);
    }
  }

  useEffect(() => {
    getTecnologias();
  }, [])

  const handleAdd = () => {
    console.log("Adicionado")
  }

  return (
    <>
      <div className="flex justify-start mt-2">
        <form className="w-full">
          <div className="flex flex-wrap -mx-3 p-3">

            <div className="w-full md:w-1/3 px-3">
              <label className="tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-nome_empresa">
                Nome do Projeto
              </label>
              <input
                className="appearence-none block w-full bg-gray-100 rounded py-3 px-4 mb-3 mt-1 leading-tight focus:outline-gray-100 focus:bg-white"
                type="text"
                name="nome_projeto"
                placeholder="Nome do Projeto"
              />
            </div>
            <div className="w-full md:w-1/3 px-3">
              <label className="tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-raza_social">
                Descrição do Projeto
              </label>
              <input
                className="appearence-none block w-full bg-gray-100 rounded py-3 px-4 mb-3 mt-1 leading-tight focus:outline-gray-100 focus:bg-white"
                type="text"
                name="descricao_projeto"
                placeholder="Descrição do Projeto"
              />
            </div>
            <div className="w-full md:w-1/3 px-3">
              <label className="tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-raza_social">
                Tecnologias
              </label>
              <div className="flex gap-3">
                <select
                  className="appearance-none block w-full md:w-2/3 bg-gray-100 rounded py-3 px-4 mb-3 mt-1 leading-tight focus:outline-gray-100 focus:bg-white"
                  name="fk_tecnologia_id"
                  placeholder="Tecnologias"
                >
                  <option value="null">Selecione uma Tecnologia</option>
                  {tecnologias && tecnologias.map((item) => (
                    <option key={item.id} value={item.id_tecnologia}>
                      {item.nome_tecnologia}
                    </option>
                  ))}
                </select>
                <button
                  className="bg-sky-600 hover:bg-sky-700 rounded-md text-white font-semibold px-3 mb-4 mt-2"
                  type="button"
                  onClick={handleAdd}
                >
                  <IoAddCircleSharp />
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

export default CadastroProjetos;