
/* Para não precisar criar vários arquivos js, separaremos por função cada exemplo. */
function algAge() {
    let user, age;

    /* Comando prompt é utilizado para solicitar informações. */
    user = prompt('Type your name:');
    alert(user);

    /* String é um conjunto de dígitos (caracteres), é um tipo de variável entendido como texto. */

    /* Number é um função que converte um valor para número. */
    age = Number(prompt('Type your age:'));


    alert('Hi, ' + user + '! u have ' + age + ' yrs old.');
}
/* =============================================== */

function calcTerrain() {
    let largura, comprimento, area;

    largura = Number(prompt('Digite a largura do terreno'));
    comprimento = Number(prompt('Digite o comprimento do terreno'));

    area = largura * comprimento;

    alert('A área do terreno é: ' + area + ' metros quadrados');
}
/* ========================================================== */
/* calcTerrain(); */

function horseAlg() {
    let horse, total;

    horse = Number(prompt('Digite a quantidade de cavalos do haras'));
    total = horse * 4;
    alert('A quantidade total de ferraduras é: ' + total);
}

/* horseAlg(); */

function gasAlg() {
    let litro, valuePerLitros, total;

    litro = Number(prompt('quantos litros de gasolina serão colocados:'));
    valuePerLitros = Number(prompt('valor por litro: '));

    total = litro * valuePerLitros;

    alert('O total a ser pago é ' + total + ' R$');
}

/* gasAlg(); */

function pao() {

    let qtdPao, qtdBroa, total;

    qtdPao = Number(prompt('Quantos paezinhos?'));
    qtdBroa = Number(prompt('Quantas Broas? '));


    total = (qtdPao * 0.12) + (qtdBroa * 1.5);

    alert('Total arrecadado? ' + total + 'R$' + ' 10% do valor -> ' + (total * 0.1).toFixed(2) + ' R$');


}

/* pao(); */

function hab() {
    let age;

    age = Number(prompt('type your age: '));

    if (age >= 18) {
        alert('You can have your license SIM');
    }
    else {
        alert('You cant have your license NAO');
    }
}

/* hab();*/

function apple() {
    let qtdApple, total;

    qtdApple = Number(prompt('quantas maçãs: '));

    if (qtdApple >= 12) {
        total = qtdApple * 1.00;

    }
    else {
        total = qtdApple * 1.3;

    }
    alert('Valor total: ' + total);
}
/* apple();
 */

function votingAlg() {
    let atual, born, total;

    atual = Number(prompt('atual year '));
    born = Number(prompt('year born '));

    total = atual - born;

    if (total >= 16) {
        alert(total + ' anos já pode votar');
    }
    else {
        alert(total + ' ainda n pode votar');
    }
}
/* 
votingAlg(); */

function fruit() {
    let appleQtd, strawberryQtd, qtdKg, total;

    appleQtd = Number(prompt('Kilos de macas:'));
    strawberryQtd = Number(prompt('Kilos de morango: '));
    qtdKg = appleQtd + strawberryQtd;

    if (appleQtd > 5 || strawberryQtd > 5) {
        total = parseFloat(appleQtd * 1.5) + parseFloat(strawberryQtd * 2.2);
     
    }
  
 
    else {
        total = parseFloat(appleQtd * 1.8) + parseFloat(strawberryQtd * 2.5);
    }

    if (qtdKg > 8 || total > 25) {
        total = total - (total * 10/100);
    }




    alert(total);

}

fruit();
