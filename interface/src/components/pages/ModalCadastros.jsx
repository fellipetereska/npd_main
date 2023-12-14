import React, { useState } from "react";

import CadastroParticipante from "./subPages/CadastroParticipante";
import CadastroProjetos from "./subPages/CadastroProjetos";
import CadastroNoticias from "./subPages/CadastroNoticias";

function Login({ onCancel, isOpen }) {

  const [activeTab, setActiveTab] = useState(0);

  if (!isOpen) {
    return null;
  }

  const handleTabClick = (index) => {
    setActiveTab(index);
  }

  const renderContent = () => {
    switch (activeTab) {
      case 0:
        return (
          <>
            <CadastroParticipante />
          </>
        );
      case 1:
        return (
          <>
            <CadastroProjetos />
          </>
        );
      case 2:
        return (
          <>
            <CadastroNoticias />
          </>
        );
      default:
        return null;
    }
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className="modal-overlay absolute inset-0 backdrop-blur-[1px] bg-black bg-opacity-10" onClick={onCancel}></div>
      <div className="modal-container w-full bottom-0 bg-white mx-auto rounded-xl z-50 overflow-y-auto px-8 py-4 fixed h-3/4">
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
        <div>
          <p className='text-lg font-light text-sky-700'>NPD - Nucleo de Pratica de Desenvolvimento</p>
          <p className='text-sm font-light text-gray-400'>Unicesumar Londrina-Pr</p>
          <div>
            <h1 className='text-3xl font-black text-sky-700 text-center mt-3'>Cadastros</h1>
          </div>
        </div>
        <div>
          <ul class="flex flex-wrap text-sm font-medium text-center text-gray-500 border-b border-gray-200">
            <li class={`me-2 ${activeTab === 0 ? "rounded-t-lg bg-gray-50" : ""}`}>
              <button class="inline-block p-4 rounded-t-lg hover:text-gray-600 hover:bg-gray-50" onClick={() => handleTabClick(0)}>Participantes</button>
            </li>
            <li class={`me-2 ${activeTab === 1 ? "rounded-t-lg bg-gray-50" : ""}`}>
              <button class="inline-block p-4 rounded-t-lg hover:text-gray-600 hover:bg-gray-50" onClick={() => handleTabClick(1)}>Projetos</button>
            </li>
            <li class={`me-2 ${activeTab === 2 ? "rounded-t-lg bg-gray-50" : ""}`}>
              <button class="inline-block p-4 rounded-t-lg hover:text-gray-600 hover:bg-gray-50" onClick={() => handleTabClick(2)}>Notícias</button>
            </li>
          </ul>
          {renderContent()}
        </div>
      </div>
    </div>
  );
}

export default Login;