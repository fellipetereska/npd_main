import React, { useState, useEffect, useRef } from "react";
import { FaGreaterThan, FaLessThan } from "react-icons/fa";
import useAuth from "../../hooks/useAuth";

function Projetos() {
  const { getProjetos, atualizar } = useAuth(null);
  const carrosselRef = useRef(null);
  const [loading, setLoading] = useState(true);
  const [projetos, setProjetos] = useState([]);

  useEffect(() => {
    setLoading(true);
    getProjetos()
      .then(data => { setProjetos(data); setLoading(false); })
      .catch(error => { console.error(`Erro ao buscar projetos. Status: ${error}`); setLoading(false); });
  }, [atualizar]);

  return (
    <div>
      <h1 className="flex items-center justify-center mt-10 text-4xl font-extrabold text-sky-800">
        Projetos
      </h1>
      <div className="w-full flex justify-center items-center mb-10 mt-6">
        <div className="w-5/6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">

          {loading ? (
            <>
              <div className="w-full">
                {/* Card */}
                <div className="w-full bg-gray-50 rounded px-4 py-4 shadow-md">
                  <div className="border-b border-gray-300 mb-2">
                    <div className="bg-gray-200 w-1/2 mb-1 rounded h-7"></div>
                  </div>
                  <div className="border-b borderr-gray-300 pb-4">
                    <div className="bg-gray-200 w-1/3 mb-1 rounded h-6"></div>
                    <div className="bg-gray-200 w-full rounded h-36"></div>
                  </div>
                  <div className="pt-2">
                    <div className="bg-gray-200 w-1/3 mb-1 rounded h-6"></div>
                    <div className="flex items-center mt-1 gap-3">
                      <div className="bg-sky-100 w-1/4 mb-1 rounded h-6">
                      </div>
                      <div className="bg-sky-100 w-1/4 mb-1 rounded h-6">
                      </div>
                      <div className="bg-sky-100 w-1/4 mb-1 rounded h-6">
                      </div>
                      <div className="bg-sky-100 w-1/4 mb-1 rounded h-6">
                      </div>
                    </div>
                    <div className="mt-2 flex justify-center">
                      <button type="button" className="w-full text-center text-white font-bold bg-sky-600 px-2 rounded h-8" disabled></button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-full">
                {/* Card */}
                <div className="w-full bg-gray-50 rounded px-4 py-4 shadow-md">
                  <div className="border-b border-gray-300 mb-2">
                    <div className="bg-gray-200 w-1/2 mb-1 rounded h-7"></div>
                  </div>
                  <div className="border-b borderr-gray-300 pb-4">
                    <div className="bg-gray-200 w-1/3 mb-1 rounded h-6"></div>
                    <div className="bg-gray-200 w-full rounded h-36"></div>
                  </div>
                  <div className="pt-2">
                    <div className="bg-gray-200 w-1/3 mb-1 rounded h-6"></div>
                    <div className="flex items-center mt-1 gap-3">
                      <div className="bg-sky-100 w-1/4 mb-1 rounded h-6">
                      </div>
                      <div className="bg-sky-100 w-1/4 mb-1 rounded h-6">
                      </div>
                      <div className="bg-sky-100 w-1/4 mb-1 rounded h-6">
                      </div>
                      <div className="bg-sky-100 w-1/4 mb-1 rounded h-6">
                      </div>
                    </div>
                    <div className="mt-2 flex justify-center">
                      <button type="button" className="w-full text-center text-white font-bold bg-sky-600 px-2 rounded h-8" disabled></button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-full">
                {/* Card */}
                <div className="w-full bg-gray-50 rounded px-4 py-4 shadow-md">
                  <div className="border-b border-gray-300 mb-2">
                    <div className="bg-gray-200 w-1/2 mb-1 rounded h-7"></div>
                  </div>
                  <div className="border-b borderr-gray-300 pb-4">
                    <div className="bg-gray-200 w-1/3 mb-1 rounded h-6"></div>
                    <div className="bg-gray-200 w-full rounded h-36"></div>
                  </div>
                  <div className="pt-2">
                    <div className="bg-gray-200 w-1/3 mb-1 rounded h-6"></div>
                    <div className="flex items-center mt-1 gap-3">
                      <div className="bg-sky-100 w-1/4 mb-1 rounded h-6">
                      </div>
                      <div className="bg-sky-100 w-1/4 mb-1 rounded h-6">
                      </div>
                      <div className="bg-sky-100 w-1/4 mb-1 rounded h-6">
                      </div>
                      <div className="bg-sky-100 w-1/4 mb-1 rounded h-6">
                      </div>
                    </div>
                    <div className="mt-2 flex justify-center">
                      <button type="button" className="w-full text-center text-white font-bold bg-sky-600 px-2 rounded h-8" disabled></button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-full">
                {/* Card */}
                <div className="w-full bg-gray-50 rounded px-4 py-4 shadow-md">
                  <div className="border-b border-gray-300 mb-2">
                    <div className="bg-gray-200 w-1/2 mb-1 rounded h-7"></div>
                  </div>
                  <div className="border-b borderr-gray-300 pb-4">
                    <div className="bg-gray-200 w-1/3 mb-1 rounded h-6"></div>
                    <div className="bg-gray-200 w-full rounded h-36"></div>
                  </div>
                  <div className="pt-2">
                    <div className="bg-gray-200 w-1/3 mb-1 rounded h-6"></div>
                    <div className="flex items-center mt-1 gap-3">
                      <div className="bg-sky-100 w-1/4 mb-1 rounded h-6">
                      </div>
                      <div className="bg-sky-100 w-1/4 mb-1 rounded h-6">
                      </div>
                      <div className="bg-sky-100 w-1/4 mb-1 rounded h-6">
                      </div>
                      <div className="bg-sky-100 w-1/4 mb-1 rounded h-6">
                      </div>
                    </div>
                    <div className="mt-2 flex justify-center">
                      <button type="button" className="w-full text-center text-white font-bold bg-sky-600 px-2 rounded h-8" disabled></button>
                    </div>
                  </div>
                </div>
              </div>
            </>
          ) : (
            <>
              {projetos && projetos.map((item, i) => (
                <>
                  {/* Card */}
                  <div key={i} className="w-full bg-gray-50 rounded px-4 py-4 shadow-md max-h-80">
                    <div className="border-b border-gray-300 mb-2">
                      <h1 className="text-sky-700 font-bold text-xl truncate">{item.nome_projeto}</h1>
                    </div>
                    <div className="border-b border-gray-300 pb-4 overflow-hidden">
                      <p className="text-gray-700 text-sm font-semibold">Descrição</p>
                      <p className="text-sm text-gray-600 text-justify line-clamp-5">{item.descricao_projeto}</p>
                    </div>
                    <div className="pt-2">
                      <p className="text-gray-700 text-sm font-semibold">Tecnologias Utilizadas</p>
                      <div className="flex items-center mt-1 gap-3">
                        <div className="col-span-1 flex justify-center bg-sky-100 rounded px-2 py-1">
                          <p className="text-center text-sm text-sky-700 font-medium">C#</p>
                        </div>
                        <div className="col-span-1 flex justify-center bg-sky-100 rounded px-2 py-1">
                          <p className="text-center text-sm text-sky-700 font-medium">Java Script</p>
                        </div>
                        <div className="col-span-1 flex justify-center bg-sky-100 rounded px-2 py-1">
                          <p className="text-center text-sm text-sky-700 font-medium">HTML</p>
                        </div>
                      </div>
                      <div className="mt-3 flex justify-center">
                        <button type="button" className="w-full text-center text-white font-bold bg-sky-600 hover:bg-sky-700 px-2 py-1 rounded">Saiba Mais...</button>
                      </div>
                    </div>
                  </div>
                </>
              ))}
            </>
          )}
        </div>
      </div>

    </div>
  )
}

export default Projetos;