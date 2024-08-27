//Desafios JavaScript na DIO têm funções "gets" e "print" acessíveis globalmente:
//- "gets" : lê UMA linha com dado(s) de entrada (inputs) do usuário;
//- "print": imprime um texto de saída (output), pulando linha.

//Descrição
//Você é um herói em um mundo mágico repleto de monstros e desafios. 
//Sua missão agora é enfrentar inimigos e ganhar pontos de experiência (XP) para se tornar mais forte. 
//A cada vitória, você ganha XP e se aproxima de se tornar um lendário campeão.

//Tarefa: Escreva um programa simples que simule o ganho de XP após derrotar um monstro. 
//O programa deve calcular e exibir a quantidade de XP ganhos com base no nível do monstro e na dificuldade da batalha.

//Calculo do XP: Para calcular a quantidade de XP ganhos, o programa precisa considerar o nível do monstro e a dificuldade da batalha. 
//A fórmula num1 * num2 * 100 é usada para calcular essa quantidade com base nos valores fornecidos.

//Entrada
//O nível do monstro (um número inteiro).
//A dificuldade da batalha, representada por um valor de 1 a 100 (um número inteiro).

//Saída
//Imprima a quantidade de XP ganhos após a batalha.

// Entrada de dados. Lembre-se: O parseInt(()) é importante para a conversão dos valores de entrada(String) para um valor numérico(int).
let num1 = parseInt(gets());
let num2 = parseInt(gets());

//TODO: Implemente a lógica para exibir o xpGanho:
const xpGanho = num1 * num2 * 100;

// Imprime a quantidade de XP ganho
print("Voce ganhou " + xpGanho + " XP!");