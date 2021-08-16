"use strict";
function mostrarMensagem(texto) {
    console.log(texto);
    return true;
}
//mostrarMensagem("adria");
console.log(mostrarMensagem("Adria"));
console.log(mostrarMensagem(20));
const show = (codigo) => {
    return new Date();
};
console.log("-------------");
function enviarEmail(para, assunto = "Seja bem-vindo") {
    console.log(para, assunto);
}
enviarEmail("Adria@teste.com");
console.log("-------------");
function enviarCorreio(para, assunto = "Seja bem-vindo", remetente) {
    console.log(para, assunto, remetente);
}
enviarCorreio("Adria@teste.com");
