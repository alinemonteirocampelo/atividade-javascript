let nomes = ["Aline", "Karol", "Kamily", "Heloisa", "Gabriela", "Beatriz", "Lucas", "Arthur", "Gustavo"];

let idades = [16, 15, 15, 16, 17, 16, 16, 16, 16];

alert("--- Listagem de Pessoas Menores de Idade ---");

for (let i = 0; i < 9; i++) {
    if (idades[i] < 18) {
        alert("Nome: " + nomes[i] + " | Idade: " + idades[i]);
    }
}