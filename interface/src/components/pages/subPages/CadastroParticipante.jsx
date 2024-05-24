import React, { useState, useRef } from "react";
import { toast } from "react-toastify";
import { connect } from "../../../services/api";

function CadastroParticipante() {

  const ref = useRef(null);

  const [nome, setNome] = useState('');
  const [cargo, setCargo] = useState('');
  const [curso, setCurso] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      if (!nome || !cargo || !curso) {
        console.log(nome, cargo, curso);
        return toast.warn("Preencha todos os campos!");
      }

      const participanteData = {
        nome_participante: nome,
        cargo_participante: cargo,
        curso_participante: curso
      }

      const response = await fetch(`${connect}/participantes`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(participanteData)
      })

      if (!response.ok) {
        console.error(`Erro ao cadastrar participante. Statu: ${response.status}`);
        toast.error(`Erro ao cadastrar participante!`);
        return;
      }

      const data = await response.json();
      toast.success(data);
      handleClear();
    } catch (error) {
      console.error(`Erro ao cadastrar participante. Statu: ${error}`);
    }
  };

  const handleClear = () => {
    setNome('');
    setCargo('');
    setCurso('');
  };

  const handleChangeNome = (e) => {
    setNome(e.target.value);
  }

  const hanldeChangeCargo = (e) => {
    setCargo(e.target.value)
  }

  const hanldeChangeCurso = (e) => {
    setCurso(e.target.value)
  }

  return (
    <>
      <div className="flex justify-center mt-10">
        <form className="w-11/12" ref={ref} onSubmit={handleSubmit}>
          <div className="-mx-3 mb-6 p-3">
            {/* Campos Formulário */}
            <div className="flex">

              {/* Nome */}
              <div className="w-full md:w-1/2 px-3">
                <label className="tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="nome_participante">
                  Nome do Participante
                </label>
                <input
                  className="appearence-none block w-full bg-gray-100 rounded py-3 px-4 mb-3 mt-1 leading-tight focus:outline-gray-100 focus:bg-white"
                  type="text"
                  id="nome_participante"
                  name="nome_participante"
                  placeholder="Nome do Participante"
                  value={nome}
                  onChange={handleChangeNome}
                />
              </div>

              {/* Cargo */}
              <div className="w-full md:w-1/2 px-3">
                <label className="tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="cargo_participante">
                  Cargo
                </label>
                <select
                  className="appearence-none block w-full bg-gray-100 rounded py-3 px-4 mb-3 mt-1 leading-tight focus:outline-gray-100 focus:bg-white"
                  type="text"
                  id="cargo_participante"
                  name="cargo_participante"
                  value={cargo}
                  onChange={(e) => hanldeChangeCargo(e)}
                >
                  <option value="">Selecione um cargo</option>
                  <option value="Aluno">Aluno</option>
                  <option value="Professor">Professor</option>
                </select>
              </div>

              {/* Curso */}
              <div className="w-full md:w-1/2 px-3">
                <label className="tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="curso_participante">
                  Curso
                </label>
                <select
                  className="appearence-none block w-full bg-gray-100 rounded py-3 px-4 mb-3 mt-1 leading-tight focus:outline-gray-100 focus:bg-white"
                  type="text"
                  id="curso_participante"
                  name="curso_participante"
                  value={curso}
                  onChange={(e) => hanldeChangeCurso(e)}
                >
                  <option value="">Selecione um curso</option>
                  <option value="Analise e Desenvolvimento de Sistemas">Analise e Desenvolvimento de Sistemas</option>
                  <option value="Engenharia de Software">Engenharia de Software</option>
                </select>
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
    </>
  )
}

export default CadastroParticipante;