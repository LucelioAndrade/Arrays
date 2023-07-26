// lista com 5 paises

const paises = ['Belgica', 'Canadá', 'Japão', 'Brasil', 'EUA'];
console.log (paises);

paises [paises.length] = 'China';
console.log (paises);

paises.push ('China');
console.log (paises);

paises.pop();
console.log (paises);

paises.unshift ('China');
console.log (paises);

paises.shift();
console.log (paises);

//ultimo pais
console.log (paises [paises.length - 1]);

//segundo pais
console.log (paises [1]);

//pais indice 2
console.log (paises [2]);