const filmesCategorias: string[] = ["Comédia", "Drama", "Romance", "Aventura"];

filmesCategorias.push("Musical");
//filmesCategorias.push(12);

// forma 1
const filmesRoterista: Array<number | string> = [];
//forma 2
const filmesAnos: Array<number> = [];

for (let ano = 2000; ano <= new Date().getFullYear(); ano++) {
    filmesAnos.push(ano)
}

console.log(filmesAnos);


// array vai receber ou string ou number, nunca poderá receber os dois ao mesmo tempo
const Nomes: string[] | number[] = ["Lais", "Adria", "Maria", "Bia"];

// array vai receber  string e number ao mesmo tempo
const Sobrenome: (string | number) [] = ["Lais", "Adria", "Maria", 1];

let arrFrameworks: string [] = ['JavaScript','jQuery','Angular','React'];
console.log('arrFrameworks:',arrFrameworks);


let arrLanguages: Array<string> = ['C','C++','Java','Ruby','Phthon'];
console.log('arrLanguages',arrLanguages);