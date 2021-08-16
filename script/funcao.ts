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