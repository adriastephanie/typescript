//apenas leitura, a propriedade nào pode ser modificada

interface ICurso {
    readonly nome: string;
    preco: number;
    descricao: string;
    cargaHoraria: number;
    classificacao?: number;
}

const cursoIngles: ICurso = {
    nome: "Curso de Ingles",
    preco: 5000,
    descricao: "curso de ingles da adria",
    cargaHoraria: 14,
    classificacao: 5,
}


//cursoIngles.nome = "Curso de Espanhol";
cursoIngles.preco = 12000;

console.log(cursoIngles);