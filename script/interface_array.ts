interface Categoria {
    nomes: string;
    id: number;
    categoriaPai?: Categoria;
}

const frontEnd: Categoria = {
    nomes: "front",
    id: 43,
}

const backend: Categoria = {
    nomes: "back",
    id: 90,
}

interface Menu {
    categorias: Categoria[];
}

let menu: Menu = {
    categorias: [frontEnd, backend],
}

interface Todo {
    [indice: number]: string;
}


let minhasTarefas: Todo;

minhasTarefas = ["Estudar Typescript", "Estudar Javascript", "Estudar C"];

console.log(minhasTarefas[0]);