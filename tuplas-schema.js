/*
  AUTOR: Douglas Matos da Silva
	ANO: 2020
  EMAIL: dev.douglasmatos@gmail.com or douglasmatosdev@protonmail.com
  https://github.com/douglasmatosdev
  
============================================================
  DESAFIO PARA VAGA DE DESENVOLVEDOR FRONT-END JUNIOR
============================================================

REPOSITÓRIO DO DESAFIO: https://gist.github.com/vlaux/7c7d9f7e763261e31fe46ed94bf15264

--------------------------------------------------------------
FONTES DE PESQUISA:

Array.prototype.map() https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/map
Array.prototype.forEach() https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach
Array.prototype.filter() https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/filtro
Array.prototype.indexOf() https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf
Array.prototype.includes() https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/contains
Array.prototype.reduce() https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce
Array.prototype.push() https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/push
Array.prototype.slice() https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/slice
http://blog.thiagobelem.net/relacionamento-de-tabelas-no-mysql
https://www.devmedia.com.br/modelo-entidade-relacionamento-mer-e-diagrama-entidade-relacionamento-der/14332
https://pt.stackoverflow.com/questions/91973/d%C3%BAvida-no-relacionamento-de-tabelas-mysql-workbench
https://medium.com/@fabiano_goes/relacionamento-onetomany-do-relacional-para-o-nosql-com-spring-data-e-mongodb-28fcf419dede
https://gist.github.com/joseliano

*/

var schema = [
  ['endereço', 'cardinality', 'one'],
  ['telefone', 'cardinality', 'many']
];
const facts = [
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

function showcurrentFacts(facts, schema) {

  // 1° PRIMEIRO
  // Varendo toda a lista para pegar o indice que determina se o fato é true
  let currentIndexValid;
  facts.map(tuplas => {
    tuplas.forEach((vetor, i) => {
      if (vetor === true) {
        currentIndexValid = i;
        return currentIndexValid;
      }
    })
  });


  // 2° SEGUNDO - ( Just to Helper ) 
  // Recebe o array e o indice 3 do array onde o valor é true ou false, e retorna os arrays com os valores true
  let indiceTrue = facts.filter((index) => index[currentIndexValid]);

  // 3° TERCEIRO - ( Just to Helper ) 
  // Buscando tuplas repetidas dentro das listras com valor true. Apenas para pegar o penúltimo índice
  let indexDuplicity;
  facts.map(list => {
    list.forEach((element, index) => {
      if (index === currentIndexValid) indexDuplicity = index - 1
    });
  });

  // 4° QUARTO
  // Verifica todas as "tuplas" e retornas apenas às que possuem o último índice com o valor true
  const noDuplicates = indiceTrue.filter(
    (valueTupla, indexTupla, indiceTrue) => {
      return indiceTrue.map((verify) =>
        verify[indexDuplicity]
      ).indexOf(valueTupla[indexDuplicity]) === indexTupla;
    }
  );

  // 5°
  // Retorna as entidades com o valor de índice maior, o que corrensponde a última acorrência no registro. "gabriel", "joão"
  const lastOccurrence = noDuplicates.reduce(function (a, b) {
    if (!a.includes(b[0])) a.push(b[0]); return a;
  }, []);

  // 6° SEXTO
  // Retorna na constando schema o tipo de cardinalidade "one"
  const typeCardinality = (matrix, tupla) => {
    return matrix.filter((indx) => {
      return indx[2] == tupla
    })[0]
  }

  // just to helper
  const helperCardinality = (matrix, tupla) => {
    return matrix.filter((entity) => {
      return entity.includes(tupla);
    });
  }

  // 7° SÉTIMO E 8º OITAVO
  //  Cruzando condição de cardinalidade true ou false para osatributos telefone e endereço,
  // sendo "one"="one-to-one" e "many"="on-to-many"
  let result = [];
  const verifyCadinality = (schema) => {

    lastOccurrence.map(e => {
      result.push(
        helperCardinality(helperCardinality(noDuplicates, typeCardinality(schema, 'one')[0]), e)
        .slice(-1)[0])
    });

    return result = result.concat(helperCardinality(noDuplicates, typeCardinality(schema, 'many')[0]))
  }

  return verifyCadinality(schema);
}

let show = showcurrentFacts(facts, schema);
console.log(show);






























// let ar = [2,2,2, 3, 4, 5, 6, 8, 9,9,9]

//   const newAr = [...new Set( ar)];
//   console.log(newAr);

  // var a = ["Ceará","Eusébio","Ceará"];
  // var b = ["JavaScript",">","All"];

  // function hasDuplicates(array) {
  //   console.log((new Set(array)).size !== array.length);
  // }

  // hasDuplicates(a);//true
  // hasDuplicates(b);//false