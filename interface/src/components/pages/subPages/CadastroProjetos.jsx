import React, { useState, useRef, useEffect } from "react";

import ModalTecnologia from "../components/ModalTecnologias";
import { toast } from "react-toastify";
import { connect } from "../../../services/api";

function CadastroProjetos() {

  const ref = useRef(null);

  const [nome, setNome] = useState('');
  const [descricao, setDescricao] = useState('');
  const [showModal, setShowModal] = useState(false);

  const closeModal = () => setShowModal(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      if (!nome || !descricao) {
        return toast.warn("Preencha todos os campos!");
      }

      const projetoData = {
        nome_projeto: nome,
        descricao_projeto: descricao
      }

      const response = await fetch(`${connect}/projetos`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(projetoData)
      });

      if (!response.ok) {
        console.error(`Erro ao cadastrar projeto. Statu: ${response.status}`);
        toast.error(`Erro ao cadastrar projeto!`);
        return;
      }

      const data = await response.json();
      toast.success(data);
      handleClear();
    } catch (error) {
      console.error(`Erro ao cadastrar projeto. Statu: ${error}`);
    }
  }

  const handleClear = () => {
    setNome('');
    setDescricao('');
  };


  return (
    <>
      <div className="flex justify-center mt-10">
        <form className="w-11/12" ref={ref} onSubmit={handleSubmit}>
          <div className="-mx-3 mb-6 p-3">
            {/* Campos Formulário */}
            <div className="flex items-center">

              {/* Nome */}
              <div className="w-full md:w-1/2 px-3">
                <label className="tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="nome_projeto">
                  Nome do Projeto
                </label>
                <input
                  className="appearence-none block w-full bg-gray-100 rounded py-3 px-4 mb-3 mt-1 leading-tight focus:outline-gray-100 focus:bg-white"
                  type="text"
                  id="nome_projeto"
                  name="nome_projeto"
                  placeholder="Nome do Projeto"
                  value={nome}
                  onChange={(e) => setNome(e.target.value)}
                />
              </div>

              {/* Descrição */}
              <div className="w-full md:w-1/2 px-3">
                <label className="tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="descricao_projeto">
                  Descrição do Projeto
                </label>
                <textarea
                  className="appearence-none resize-none block w-full bg-gray-100 rounded py-3 px-4 mb-3 mt-1 leading-tight focus:outline-gray-100 focus:bg-white"
                  type="text"
                  id="descricao_projeto"
                  name="descricao_projeto"
                  placeholder="Descrição do Projeto"
                  value={descricao}
                  onChange={(e) => setDescricao(e.target.value)}
                />
              </div>
            </div>

            {/* Botões Formulário */}
            <div className="w-full px-3 pl-8 flex justify-end">
              <div>
                <button onClick={handleClear} className="shadow mt-4 bg-red-600 hover:bg-red-700 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded" type="button">
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


      {/* <div className="flex justify-center pt-10">
        <table>
          <tr>
            <td>
              <label htmlFor="nome" className="text-sky-700 font-bold text-2xl pb-2">Nome do projeto:</label>
            </td>
          </tr>
          <tr>
            <td>
              <input className="shadow-md ring-1 appearance-none block w-full bg-gray-100 rounded py-3 px-4 mb-3 mt-1 leading-tight focus:outline-gray-100 focus:bg-white"
                name='usuario'
                type="text"
                placeholder="Nome completo"></input>
            </td>
          </tr>
          <tr>
            <td>
              <label htmlFor="descricao" className="text-sky-700 font-bold text-2xl pb-2">Descrição:</label>
            </td>
          </tr>
          <tr>
            <td>
              <textarea cols="50" rows="10" maxLength={500} className="shadow-md ring-1 appearance-none block w-full bg-gray-100 rounded py-3 px-4 mb-3 mt-1 leading-tight focus:outline-gray-100 focus:bg-white" id="descricao" name="descricao" required minlength="4" size="10" placeholder="Descrição..." />
            </td>
          </tr>
          <tr>
            <td colSpan={2}>
              <button onClick={() => setShowModal(true)} className="shadow-md w-full mt-3 py-2 font-semibold  cursor-pointer text-center focus:outline-none hover:bg-sky-700 rounded-md text-white bg-sky-600">Selecionar Tecnologia</button>
              <ModalTecnologia
                isOpen={showModal}
                onCancel={closeModal}
              />
            </td>
          </tr>
          <tr className=" space-x-9">
            <button className="mt-5 mb-10 shadow-md min-w-[20vh] py-2 font-semibold  cursor-pointer text-center focus:outline-none hover:bg-sky-700 rounded-md text-white bg-sky-600">
              Limpar
            </button>
            <button className="shadow-md min-w-[20vh] py-2 font-semibold  cursor-pointer text-center focus:outline-none hover:bg-sky-700 rounded-md text-white bg-sky-600">
              Salvar
            </button>
          </tr>
        </table>

      </div> */}
    </>
  )
}

export default CadastroProjetos;