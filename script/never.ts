// funcao nunca terá um valor retornado pq ele basicamente interrompe o codigo assim nao tem valor retornado

function showError(message: string): never {

    throw new Error(message);
}

//showError("Algo deu errado");