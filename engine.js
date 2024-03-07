// Questão 2 - Números Fibonacci

const Numero = 5;
let primeiroValor = 0, segundoValor = 1, numeroFibonacci;

if(Numero == 0){
    console.log(`${Numero} é um número Fibonacci`)
}else{
    for(i = 0; i <= Numero; i++){
        numeroFibonacci = primeiroValor + segundoValor;
        if(numeroFibonacci === Numero){
            console.log(`${Numero} é um número Fibonacci`); 
            break;
        }
        primeiroValor = segundoValor;
        segundoValor = numeroFibonacci;
    }
}

// Questão 5 - Inverter string
const Frase = 'Olá Mundo';

for(i = Frase.length ; i >=0; i--){
    console.log(Frase[i]);
}