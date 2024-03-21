import React, { useState, useRef, useEffect } from "react";

import ModalTecnologia from "../components/ModalTecnologias";

function CadastroProjetos() {


  const [showModal, setShowModal] = useState(false);

  const closeModal = () => setShowModal(false);


  return (
    <>
      <div className="flex justify-center pt-10">
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

      </div>
    </>
  )
}

export default CadastroProjetos;