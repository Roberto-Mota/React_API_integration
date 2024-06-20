export default interface IPaginacao<T> {
    count: number
    next: string
    previous: string
    results: T[] // O T é passado como parâmetro para a interface
}

//T é um tipo genérico que será definido em tempo de execução
// Ou seja, no axios, eu posso definir o tipo de retorno de uma requisição
// como IPaginacao<IRestaurante>, que significa que a requisição retornará
// um objeto com a estrutura de IPaginacao, e o tipo de cada elemento da
// lista de resultados será IRestaurante, exemplo de JSON:
// {
//   "count": 1,
//   "next": null,
//   "previous": null,
//   "results": [
//     {
//       "id": 1,
//       "nome": "Restaurante do Zé",
//       "pratos": [
//         {
//           "id": 1,
//           "descricao": "Feijoada",
//           "imagem": "https://www.comidaereceitas.com.br/img/sizeswp/1200x675/2009/04/feijoada.jpg",
//           "nome": "Feijoada",
//           "restaurante": 1,
//           "tag": "Brasileira"
//         },
//         {
//           "id": 2,
//           "descricao": "Sashimi de Salmão",
//           "imagem": "https://www.comidaereceitas.com.br/img/sizeswp/1200x675/2009/04/sashimi_facil.jpg",
//           "nome": "Sashimi",
//           "restaurante": 1,
//           "tag": "Japonesa"
//         }
//       ]
//     }
//   ]
// }
