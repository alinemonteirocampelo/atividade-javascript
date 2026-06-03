let nomes = ["Aline", "Karol", "Kamily", "Heloisa", "Gabriela", "Beatriz", "Lucas"];

let nomesInvertidos = [];
let posicaoOriginal = 6; // o último índice de um vetor de 7 elementos é 6 (0 a 6)

for (let i = 0; i < 7; i++) {
    nomesInvertidos[i] = nomes[posicaoOriginal];
    posicaoOriginal--; 
}

alert("--- Listagem na Ordem Inversa ---");
for (let i = 0; i < 7; i++) {
    alert(nomesInvertidos[i]);
}