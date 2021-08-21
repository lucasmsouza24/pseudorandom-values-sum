function randomNum(min, max) {
    // randomNum(min: Number, max: Number): Number
    // min -> valor minimo a ser gerado
    // max -> valor máximo a ser gerado
    // 
    // retorna valor gerado pseudoaleatóricamente entre o intervalo definido
    
	return Math.floor(Math.random() * ((max + 1) - min)) + min;
}

function sum(values) {
    // sum(array: Number[]): Number
    // values -> valores a serem somados
    // 
    // retorna a soma dos valores passados pelo parametro array

    let acumulator = 0

    for (let i = 0; i < values.length; i++) {
        acumulator += values[i];
    }

    return acumulator;
}

function generateIndex(amount, bars) {
    // generateIndex(amount: Number, bars): Number
    // amount -> quantidade de Index's pseudoaleatórios a serem gerados.
    // bars -> array de barras renderizadas em tela.
    // 
    // retorna soma dos index gerados.

    let amountBars = bars.length - 1
    let indexs = []
    
    for (let i = 0; i < amount; i++) {
        indexs.push(randomNum(0, amountBars / amount));
    }

    console.log(indexs);

    return sum(indexs);
}