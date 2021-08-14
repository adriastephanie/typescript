"use strict";
const filmesCategorias = ["Comédia", "Drama", "Romance", "Aventura"];
filmesCategorias.push("Musical");
//filmesCategorias.push(12);
// forma 1
const filmesRoterista = [];
//forma 2
const filmesAnos = [];
for (let ano = 2000; ano <= new Date().getFullYear(); ano++) {
    filmesAnos.push(ano);
}
console.log(filmesAnos);
// array vai receber ou string ou number, nunca poderá receber os dois ao mesmo tempo
const Nomes = ["Lais", "Adria", "Maria", "Bia"];
// array vai receber  string e number ao mesmo tempo
const Sobrenome = ["Lais", "Adria", "Maria", 1];
let arrFrameworks = ['JavaScript', 'jQuery', 'Angular', 'React'];
console.log('arrFrameworks:', arrFrameworks);
let arrLanguages = ['C', 'C++', 'Java', 'Ruby', 'Phthon'];
console.log('arrLanguages', arrLanguages);
