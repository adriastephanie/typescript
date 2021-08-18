interface IEnderecoPessoal {
    logradouro: string;
    nro: number;
    bairro: string;
    cidade: string;
}
 


let enderecoPessoal: IEnderecoPessoal;

enderecoPessoal = {
    logradouro: "rua 12",
    nro: 123,
    bairro: "bela vista",
    cidade: "sp",

}

console.log(enderecoPessoal);
