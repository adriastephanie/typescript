interface IProduto {
    nome: string;
    preco: number;
    descricao?: string;
    legado?: number;
    dataValidade: Date;
}

const produtoDados: IProduto = {
    nome: "notebook",
    preco: 5000,
    descricao: "RAM 2 modelo xz",
    dataValidade: new Date(2022, 11, 1),
}

console.log(produtoDados);