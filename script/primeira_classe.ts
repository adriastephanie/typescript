// criando a class 
class Pessoa {
    
    nome: string;
    idade: number;
    altura: number;

    constructor(nome: string, idade: number, altura: number) {
        this.nome = nome;
        this.idade = idade;
        this.altura = altura;

    }

    toString(): string {
        return `A pessoa  tem o nome ${this.nome}, idade de ${this.idade} e altura de ${this.altura}`;
    }
}

//criando o objeto e new faz a instancia da class

const novoUsuario1 = new Pessoa("Ronaldo da Silva", 40, 1.91);
const novoUsuario2 = new Pessoa("Maria do Socorro", 60, 1.60);

novoUsuario1.nome = "Ronaldinho da Socket";

console.log(novoUsuario1.nome);
console.log(novoUsuario2.nome);

console.log("Pessoa: " + novoUsuario1);
console.log("Pessoa: " + novoUsuario2);
