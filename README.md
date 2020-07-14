# tuplas-schema


##### Solução implementada por [Douglas Matos](https://github.com/douglasmatosdev/)
Repositório original do desafio [aqui](https://gist.github.com/vlaux/7c7d9f7e763261e31fe46ed94bf15264)

### Executando minha solução
`#` Caso tenha node instalado basta usar o comando [``` node```](https://nodejs.org/en/) dentro do repositório.

```
~$ git clone https://github.com/douglasmatosdev/tuplas-schema
~$ cd tuplas-schema/
~$ node typlas-schema.js
```
**Resultado no terminal**

![](https://github.com/douglasmatosdev/tuplas-schema/blob/master/.gif/tuplas-schema-terminal.gif)

*****

**Se preferir, poder abrir o arquivo ```index.html``` e visualizar o resultado no console do navegador**

![](https://github.com/douglasmatosdev/tuplas-schema/blob/master/.gif/tuplas-schema-console.gif)

*****

**O desafio pede que**
```

"use strict";
// Considere um modelo de informação onde um registro é representado por uma "tupla".
// Uma tupla (ou lista) nesse contexto é chamado de fato.

// Exemplo de um fato:
// ('joão', 'idade', 18, true)

// Nessa representação, a entidade 'joão' tem o atributo 'idade' com o valor '18'.

// Para indicar a remoção (ou retração) de uma informação, o quarto elemento da tupla pode ser 'false',
// representando que a entidade não tem mais aquele valor associado àquele atributo.
// Ex.:
// ['guilherme', 'telefone', '123456', true] // informaçao adicionada
// ['guilherme', 'telefone', '123456', false] // remove a informação anteriormente adicionada
// Ou seja, após essa segunda operação, 'guilherme' não terá mais o telefone '123456'

// Como é comum em um modelo de entidades, os atributos de uma entidade pode ter cardinalidade 1 ou N (muitos).

// Segue um exemplo de fatos no formato de tuplas (E, A, V, added?)
// i.e. [entidade, atributo, valor, booleano que indica se fato foi adicionado ou retraido]

var facts = [
  ['gabriel', 'endereço', 'av rio branco, 109', true],
  ['joão', 'endereço', 'rua alice, 10', true],
  ['joão', 'endereço', 'rua bob, 88', true],
  ['joão', 'telefone', '234-5678', true],
  ['joão', 'telefone', '91234-5555', true],
  ['joão', 'telefone', '234-5678', false],
  ['gabriel', 'telefone', '98888-1111', true],
  ['gabriel', 'telefone', '98888-1111', false],
  ['gabriel', 'telefone', '98888-1111', true],
  ['gabriel', 'telefone', '56789-1010', true],
];

// Vamos assumir que essa lista de fatos está ordenada dos mais antigos para os mais recentes.

// Nesse schema,
// o atributo 'telefone' tem cardinalidade 'muitos' (one-to-many), e 'endereço' é 'one-to-one'.
var schema = [
    ['endereço', 'cardinality', 'one'],
    ['telefone', 'cardinality', 'many']
];

// Nesse exemplo, os seguintes registros representam o histórico de endereços que joão já teve:
// [
//   ['joão', 'endereço', 'rua alice, 10', true]
//   ['joão', 'endereço', 'rua bob, 88', true],
// ]
// E o fato considerado vigente é o último.

// O objetivo desse desafio é escrever uma função que retorne quais são os fatos vigentes sobre essas entidades.
// Ou seja, quais são as informações que estão valendo no momento atual.
// A função deve receber `facts` (todos fatos conhecidos) e `schema` como argumentos.

// Resultado esperado para este exemplo (mas não precisa ser nessa ordem):
[
  ['gabriel', 'endereço', 'av rio branco, 109', true],
  ['joão', 'endereço', 'rua bob, 88', true],
  ['joão', 'telefone', '91234-5555', true],
  ['gabriel', 'telefone', '98888-1111', true],
  ['gabriel', 'telefone', '56789-1010', true]
];

```

*****

### Fontes de pesquias utilizadas para implementar esta solução
[Array.prototype.map()](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/map)

[Array.p(ototype.forEach()](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach)

[Array.p(ototype.filter()](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/filtro)

[Array.p(ototype.indexOf()](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf)

[Array.p(ototype.includes()](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/contains)

[Array.p(ototype.reduce()](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce)

[Array.p(ototype.push()](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/push)

[Array.p(ototype.slice()](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/slice)

[Realacionamento entre tabelas no mysql](http://blog.thiagobelem.net/relacionamento-de-tabelas-no-mysql)

[Diagrama de relacionamento](https://www.devmedia.com.br/modelo-entidade-relacionamento-mer-e-diagrama-entidade-relacionamento-der/14332)

[mySQL Workbench](https://pt.stackoverflow.com/questions/91973/d%C3%BAvida-no-relacionamento-de-tabelas-mysql-workbench)

[noSQL mongoDB](https://medium.com/@fabiano_goes/relacionamento-onetomany-do-relacional-para-o-nosql-com-spring-data-e-mongodb-28fcf419dede)

[Joseliano](https://gist.github.com/joseliano)

******


### Autor desta solução
**Douglas Matos da Silva**

### Contato
Email: [douglasmatosdev@gmail.com](mailto:douglasmatosdev@gmail.com) ou [dev.douglasmatos@gmail.com](mailto:dev.douglasmatos@gmail.com)
