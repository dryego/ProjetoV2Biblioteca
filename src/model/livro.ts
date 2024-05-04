class Livro {
  private id: number;
  private titulo: string;
  private anoPublicacao: number;

  constructor(id: number, titulo: string, anoPublicacao: number) {
    this.id = id;
    this.titulo = titulo;
    this.anoPublicacao = anoPublicacao;
  }

  public get getId(): number {
    return this.id;
  }

  public set setId(id: number) {
    this.id = id;
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
