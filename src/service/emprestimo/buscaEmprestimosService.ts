import buscaEmprestimo from "../../repositories/emprestimo/buscaEmprestimoRepositorio";

export async function buscaEmprestimoService(id: number) {
  const emprestimo = await buscaEmprestimo(id);

  if (emprestimo === null) {
    return {
      status: 404,
      mensagem: "Emprestimo nao encontrado.",
      data: null,
    };
  }

  return {
    status: 200,
    mensagem: "emprestimo localizado com sucesso.",
    data: emprestimo,
  };
}
