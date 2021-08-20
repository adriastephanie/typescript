//estende a forma e não os valores 

interface Model {
    id: number;
}

interface IPessoa extends Model {
    nome: string;
    idade?: number;
}

interface Usuario extends IPessoa {
    email: string;
    senha: string;
}


const usuario1: Usuario = {
    email: "teste@teste.com",
    id: 1,
    nome: "maria da silva",
    idade: 39,
    senha: "123456"
}