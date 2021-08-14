const site: unknown = "https://www.google.com"

let siteFavoritos: string[] = [];

//siteFavoritos.push(site)


// as significa que estou falando que site é como se fosse uma string
siteFavoritos.push(site as string);

// aqui é outra maneira que eu falo onde site é como se fosse uma string, fazendo uma conversão
siteFavoritos.push(<string>site);