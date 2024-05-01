class Usuario {
  private nome: string;
  private cpf: string;

  constructor(nome: string, cpf: string) {
    this.nome = nome;
    this.cpf = cpf;
  }

  public get getNome(): string {
    return this.nome;
  }

  public set setNome(nome: string) {
    this.nome = nome;
  }

  public get getCpf(): string {
    return this.cpf;
  }

  public set setCpf(cpf: string) {
    this.cpf = cpf;
  }
}

export default Usuario;
