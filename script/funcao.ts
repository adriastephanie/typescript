function mostrarMensagem(texto: string | number ): boolean {
    console.log(texto);

    return true;

}

//mostrarMensagem("adria");

console.log(mostrarMensagem("Adria"));
console.log(mostrarMensagem(20));

const show = (codigo: number): number | Date => {
    return new Date();
}

console.log("-------------");

function enviarEmail (para: string, assunto: string = "Seja bem-vindo"): void {
    console.log(para, assunto);
}

enviarEmail("Adria@teste.com");

console.log("-------------");

function enviarCorreio (para: string, assunto: string = "Seja bem-vindo", remetente?: string): void {
    console.log(para, assunto, remetente);
}

enviarCorreio("Adria@teste.com");