// Declarar o número de alunos
let numeroDeAlunos = 40;

//criando um contador para pecorrer de zero até o número de alunos e verificando se ele é igual a 0, par ou ímpar
for (let contador = 0; contador <= numeroDeAlunos; contador ++) { 
    console.log(contador); 
 
    if (contador === 0) {
        console.log("O número atual é ZERO")
    } else if (contador % 2 == 0){
        console.log("O número " + contador + " é PAR")
    } else {
        console.log("O número " + contador + " é ÍMPAR")
    }
}