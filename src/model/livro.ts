class Livro {
  private titulo: string;
  private anoPublicacao: number;

  constructor(titulo: string, anoPublicacao: number) {
    this.titulo = titulo;
    this.anoPublicacao = anoPublicacao;
  }

  public get getTitulo(): string {
    return this.titulo;
  }

  public set setTitulo(titulo: string) {
    this.titulo = titulo;
  }

  public get getAnoPublicacao(): number {
    return this.anoPublicacao;
  }

  public set setAnoPubicacao(anoPublicacao: number) {
    this.anoPublicacao = anoPublicacao;
  }
}

export default Livro;
