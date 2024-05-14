-- CreateTable
CREATE TABLE "Usuario" (
    "id" SERIAL NOT NULL,
    "nome" TEXT NOT NULL,
    "cpf" TEXT NOT NULL,

    CONSTRAINT "Usuario_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Livro" (
    "id" INTEGER NOT NULL,
    "titulo" TEXT NOT NULL,
    "anoPublicacao" INTEGER NOT NULL,

    CONSTRAINT "Livro_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Emprestimo_livro" (
    "id" SERIAL NOT NULL,
    "livroId" INTEGER NOT NULL,
    "usuarioId" INTEGER NOT NULL,
    "data_emprestimo" DATE NOT NULL,
    "entregaRealizada" BOOLEAN NOT NULL,

    CONSTRAINT "Emprestimo_livro_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Usuario_cpf_key" ON "Usuario"("cpf");

-- CreateIndex
CREATE UNIQUE INDEX "Livro_id_key" ON "Livro"("id");

-- AddForeignKey
ALTER TABLE "Emprestimo_livro" ADD CONSTRAINT "Emprestimo_livro_livroId_fkey" FOREIGN KEY ("livroId") REFERENCES "Livro"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Emprestimo_livro" ADD CONSTRAINT "Emprestimo_livro_usuarioId_fkey" FOREIGN KEY ("usuarioId") REFERENCES "Usuario"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
