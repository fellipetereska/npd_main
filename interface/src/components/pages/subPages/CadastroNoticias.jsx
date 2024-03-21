import React from "react";

function CadastroNoticias() {
  return (
    <>
      <div class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <div class="flex justify-between">
          <h2 class="text-4xl font-bold mb-4 text-blue-800">Cadastro de Notícia</h2>
          <img src="assets/img/Logos.png" class="w-1/3 mr-3 " />
        </div>

        <form action="#" method="POST" class="space-y-4">

          {/* <!-- Título --> */}
          <div>
            <label for="titulo" class="block text-lg font-medium text-gray-700">Título</label>
            <input type="text" id="titulo" name="titulo" placeholder="Digite o título" class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" required />
          </div>

          {/* <!-- Notícia --> */}
          <div>
            <label for="noticia" class="block text-lg font-medium text-gray-700">Notícia</label>
            <textarea id="noticia" name="noticia" rows="3" class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" placeholder="Digite a notícia" required></textarea>
          </div>

          {/* <!-- Dados (Data) --> */}
          <div>
            <label for="data" class="block text-lg font-medium text-gray-700">Data</label>
            <input type="date" id="data" name="data" class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" required />
          </div>

          {/* <!-- Imagem --> */}
          <div>
            <label for="imagem" class="block text-lg font-medium text-gray-700">Imagem</label>
            <input type="file" id="imagem" name="imagem" accept="image/*" class=" mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" required />
          </div>

          {/* <!-- Botões --> */}
          <div class="flex justify-between">
            <button type="submit" class="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Cadastrar</button>
            <button type="reset" class="inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Limpar</button>
          </div>
        </form>
      </div>

      <div class="mb-4">
        <input type="text" placeholder="Pesquisar..." class="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
      </div>

      {/* <!-- Tabela de Notícias --> */}
      <div class="bg-white shadow-md rounded">
        <table class="min-w-full divide-y divide-gray-200">
          <thead class="bg-gray-50">
            <tr>
              <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">ID</th>
              <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Título</th>
              <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Notícia</th>
              <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Data</th>
              <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Ações</th>
            </tr>
          </thead>
          <tbody class="bg-white divide-y divide-gray-200">
            {/* <!-- Exemplo de Dados da Tabela --> */}
            <tr>
              <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-900">1</td>
              <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-900">Exemplo de Título</td>
              <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-900">Exemplo de Notícia</td>
              <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-900">2024-03-21</td>
              <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                <button class="text-indigo-600 hover:text-indigo-900">Editar</button>
                <input type="checkbox" class="ml-2 form-checkbox h-5 w-5 text-indigo-600 border-gray-300 rounded" />
              </td>
            </tr>

          </tbody>
        </table>
      </div>
    </>
  )
}

export default CadastroNoticias;