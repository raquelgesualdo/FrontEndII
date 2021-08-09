/* Micro desafio - Etapa I */


let arrNotas = [3, 2.5, 6, 8.9];

let sumNotas = arrNotas.reduce((sum, nota) => {
    console.log(`${sum} + ${nota}`);
    return sum + nota;
});

let media = sumNotas / arrNotas.length;

console.log(`Media: ${media}\n`);

/* Micro desafios - Etapa II */

arrNotas.forEach((nota, i) =>
    console.log(`Parabéns pela conclusão do ${i+1}º bimestre. Sua nota foi: ${nota}`));

console.log(`Nota final: ${media}\n`);
if(media>=7) console.log("Aprovado")
else console.log("Reprovado")