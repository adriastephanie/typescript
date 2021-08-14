# Typescript


O TypeScript é um superconjunto estrito do ECMAScript 2015 (ECMAScript 6 ou ES6). Isso significa que todo o código JavaScript também é código TypeScript, e um programa TypeScript pode consumir o JavaScript de maneira direta.
Os navegadores entendem apenas o JavaScript. Para que seu aplicativo funcione, ao escrevê-lo em TypeScript, você precisa compilar seu código e convertê-lo em JavaScript. Você transforma o código TypeScript em código JavaScript usando o compilador TypeScript ou um transcompilador compatível com TypeScript. O JavaScript resultante é um código simples e limpo que pode ser executado em qualquer lugar em que o JavaScript é executado: em um navegador, no Node.js ou em seus aplicativos.

**Extensões úteis:**

1 - Material icon Theme
O Material Icon Theme deixa o ambiente fluído e com mais estilo na hora de codar, pois ele identifica a extensão 

2 - Mithril Emment
O famoso Emmet, este plugin para quem não conhece auxilia na velocidade de escrita do código já que utiliza diversos atalhos para criação rápida de tags.

3 - ESLint 
ESLint é uma ferramenta de análise de código estática para identificar padrões problemáticos encontrados no código JavaScript.

4 - Better Comments
Melhores comentários é uma extensão do VS Code que ajuda a escrever comentários em cores diferentes. Para uma boa legibilidade, é muito útil.

5 - GitLens
GitLens em como objetivo auxiliar o deva verificar quem alterou o determinado arquivo ou até mesmo uma determinada linha no git.

6 - Tabnine - Code Faster
Essa extensão fornece uma pequena parte do código-fonte reutilizável (snippets), além de reconhecer o código de qualquer linguagem

## Instalacao do TS

```bash
npm install typescript@4.1.3
```


```bash
sudo npm install -g typescript
```


## Ver a versão do compilador

```bash
tsc -v
```


## Compilar para JS:

```bash
tsc primeiro_codigo.ts 
```


## Configuracao dos diretorios:

"outDir": "./output" -  configuracao para diretorio dos arquivos JS e
"rootDir": "./script",  - configuracao para diretorio dos arquivos TS


## Rodar os JS:

entrar na pasta do diretorio .js
```bash
cd output
```

escolher o arquivo, por exemplo type_inference
```bash
node type_inference.js
```

comando para compilar automatico
```bash
tsc --watch
```

## Tipos mais utilizados no TypeScript são:

***1 - Number***
É para todo e qualquer tipo de número, seja ele ponto flutuante ou inteiro. O TypeScript não diferencia os tipos de números.

***2 - String***
Representa uma string costumeiramente conhecida em outras linguagens de programação.

***3 - Boolean***
Representa um valor booleano: true ou false.

***4 - Any***
É um tipo que pode ser modificado para qualquer outro tipo presente na linguagem, seja string, number, boolean ou qualquer outra coisa. Ou seja, ele vai receber qualquer tipo do TypeScript.

***5 - Array***
Representa o tipo Array dentro da linguagem. É válido informar que podemos criar arrays de duas formas dentro do TypeScript.

***6 - Tuple***
Como visto anteriormente, os tipos de tupla permitem expressar um array com um número fixo de elementos cujos tipos são conhecidos, mas não precisam ser os mesmos.

***7 - Enum***
Assim como em outras linguagens, enum é um tipo que permite declarar um conjunto valores nomeados e constantes pré-definidos.

***8 - Unknown***
Às vezes, precisamos de um tipo de variável que não sabemos quando estamos escrevendo um código. Esses valores podem vir de conteúdo dinâmico. Nesses casos, é conveniente fornecer definir ao compilador e até outros programadores que tal variável pode ser qualquer coisa.

***9- Null and Undefined***
Nada mais são do que seus próprios nomes dizem.

***10 - Void***
O tipo void é visto como um tipo de retorno de funções que não retornam valor nenhum, geralmente chamadas de procedimentos.

## License

MIT

