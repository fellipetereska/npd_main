import React from "react";

function ModalTecnologia({ isOpen, onCancel }) {

  if (!isOpen) {
    return
  }


  return (
    <>
      <div className="fixed inset-0 flex items-center justify-center z-50">
        <div className="modal-overlay absolute inset-0 backdrop-blur-[1px] bg-black bg-opacity-10" onClick={onCancel}></div>
        <div className="modal-container bg-white mx-auto rounded-lg z-50 overflow-y-auto px-8 py-4 min-w-[30vh] max-h-[80vh]">
          {/* Modal */}
          <div className="flex justify-end">
            <button
              type="button"
              className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-7 h-7 pl-3"
              onClick={onCancel}
            >
              <svg className="flex m-auto w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
              </svg>
            </button>
          </div>

          <div className="text-center p-2">
            <h1 className="text-sky-700 font-bold text-3xl pb-2">Selecione sua tecnologia</h1>
            <table className="flex justify-center flex-col pt-5 space-y-5">
              <tr className="flex justify-center space-x-16">
                <td className="bg-gray-100 min-w-[15vh] rounded-lg"><input type="checkbox" id="html" /><label htmlFor="html">HTML</label></td>
                <td className="bg-gray-100 min-w-[15vh] rounded-lg"><input type="checkbox" id="css" /><label htmlFor="css">CSS</label></td>
              </tr>
              <tr className="flex justify-center space-x-16">
                <td className="bg-gray-100 min-w-[15vh] rounded-lg"><input type="checkbox" id="javascrypt" /><label htmlFor="javascrypt">JavaScrypt</label></td>
                <td className="bg-gray-100 min-w-[15vh] rounded-lg"><input type="checkbox" id="python" /><label htmlFor="python">Python</label></td>
              </tr>
              <tr className="flex justify-center space-x-16">
                <td className="bg-gray-100 min-w-[15vh] rounded-lg"><input type="checkbox" id="c#" /><label htmlFor="c#">C#</label></td>
                <td className="bg-gray-100 min-w-[15vh] rounded-lg"><input type="checkbox" id="php" /><label htmlFor="php">Php</label></td>
              </tr>
              <tr className="flex space-x-2">
                <input type="text" className="shadow-md ring-1 appearance-none block w-full bg-gray-100 rounded py-3 px-4 mb-1 mt-1 leading-tight focus:outline-gray-100 focus:bg-white" placeholder="Cadastrar nova tecnologia" />
                <button className="max-w-[5vh] max-h-[5vh] shadow-md w-full py-2 font-semibold mt-1 cursor-pointer text-center focus:outline-none hover:bg-sky-700 rounded-md text-white bg-sky-600">
                  <span className="text-2xl">+</span>
                </button>
              </tr>
              <tr>
                <td><button className="min-w-[37vh] shadow-md w-full py-2 font-semibold cursor-pointer text-center focus:outline-none hover:bg-sky-700 rounded-md text-white bg-sky-600">Concluir</button></td>
              </tr>
            </table>

          </div>
        </div>
      </div>

    </>
  );
}

export default ModalTecnologia;