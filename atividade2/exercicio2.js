function imprimirMatriz(matriz) {
    for (let i = 0; i < matriz.length; i++) {
        console.log(matriz[i].join('\t'));
    }
}

function calcularTransposta(matriz) {
    const transposta = [];
    for (let i = 0; i < matriz[0].length; i++) {
        transposta[i] = [];
        for (let j = 0; j < matriz.length; j++) {
            transposta[i][j] = matriz[j][i];
        }
    }
    return transposta;
}

// Criar a matriz A (3x3) - você pode ajustar os valores conforme necessário
const matrizA = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

console.log("Matriz A:");
imprimirMatriz(matrizA);

const matrizTransposta = calcularTransposta(matrizA);

console.log("\nMatriz Transposta:");
imprimirMatriz(matrizTransposta);
