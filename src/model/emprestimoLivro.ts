class EmprestimoLivro {
  private idLivro: number;
  private idUsuario: number;
  private dataEntrega: Date;
  private entregaRealizada: boolean;

  constructor(
    idLivro: number,
    idUsuario: number,
    dataEntrega: Date,
    entregaRealizada: boolean
  ) {
    this.idLivro = idLivro;
    this.idUsuario = idUsuario;
    this.dataEntrega = dataEntrega;
    this.entregaRealizada = entregaRealizada;
  }

  public get getIdLivro(): number {
    return this.idLivro;
  }

  public set setIdLivro(idLivro: number) {
    this.idLivro = idLivro;
  }

  public get getIdUsuario(): number {
    return this.idUsuario;
  }

  public set setIdUsuario(idUsuario: number) {
    this.idUsuario = idUsuario;
  }

  public get getDataEntrega(): Date {
    return this.dataEntrega;
  }

  public set setDataEntrega(dataEntrega: Date) {
    this.dataEntrega = dataEntrega;
  }

  public get getEntregaRealizada(): boolean {
    return this.entregaRealizada;
  }

  public set setEntregaRealizada(entregaRealizada: boolean) {
    this.entregaRealizada = entregaRealizada;
  }
}

export default EmprestimoLivro;
