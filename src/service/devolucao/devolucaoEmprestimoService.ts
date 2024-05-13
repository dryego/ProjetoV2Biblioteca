import devolucaoEmprestimo from "../../repositories/devolucao/devolucaoEmprestimoRepositorio";
import removerEmpretimos from "../../util/removerEmprestimos";

const devolverEmpesrimo = async (idUsuario: number, idEmprestimo: number) => {
  try {
    const emprestimos = await removerEmpretimos(idUsuario);
    console.log(emprestimos);

    if (emprestimos.length === 0) {
      return "Usuario não encontrado.";
    }

    const filtraEmprestimo = emprestimos.find(
      (emprestimo) => emprestimo.id === idEmprestimo
    );
    console.log(filtraEmprestimo);

    if (!filtraEmprestimo) {
      return "Emprestimo não encontrado.";
    } else {
      await devolucaoEmprestimo(idUsuario);
    }
    return "emprestimo devolvido com sucesso.";
  } catch (error) {
    console.log(error);

    throw new Error("Erro ao devolver Emprestimo..");
  }
};

export default devolverEmpesrimo;
