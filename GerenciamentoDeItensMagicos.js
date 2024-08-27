//Desafios JavaScript na DIO têm funções "gets" e "print" acessíveis globalmente:
//- "gets" : lê UMA linha com dado(s) de entrada (inputs) do usuário;
//- "print": imprime um texto de saída (output), pulando linha.

//Tarefa: Crie um objeto que represente um item mágico personalizado. O objeto deve ter atributos como tipo de item, dano e resistência, de acordo com o tipo escolhido. 
//Além disso, crie uma função que calcule o dano causado por um item durante um combate, levando em consideração o tipo de item.

//Entrada
//Peça ao usuário para digitar o tipo do item mágico que deseja criar, o dano e a resistência

//Saída
//Imprima o tipo do item, o dano, a resistência e o dano em combate.
//Use a função de cálculo de dano para imprimir o dano causado por esse item em um combate simulado. 
//Quando o tipo do item for igual a 'arma' deve-se multiplicar o dano por dois this.dano * 2 e quando não for arma, é retornado no dano this.dano.

// Definição da classe ItemMagico
class ItemMagico {
  // Construtor que recebe os atributos do item mágico
  constructor(tipo, dano, resistencia) {
    this.tipo = tipo;           // Tipo do item (ex: 'arma', 'armadura', etc.)
    this.dano = dano;           // Valor de dano do item
    this.resistencia = resistencia; // Valor de resistência do item
  }

  // Método para calcular o dano causado pelo item
  calcularDano() {
    // Se o tipo do item for 'arma', o dano é dobrado
    return this.tipo === 'arma' ? this.dano * 2 : this.dano;
  }
}

// Solicita ao usuário para digitar o tipo do item mágico, o dano no item e a resistência do item
const tipoItem = gets();  // Ex: 'arma'
const danoItem = parseInt(gets()); // Ex: 10
const resistenciaItem = parseInt(gets()); // Ex: 5

// Cria um objeto ItemMagico personalizado com base no tipo escolhido
const itemPersonalizado = new ItemMagico(tipoItem, danoItem, resistenciaItem);

// Imprime os atributos do item personalizado
print("Tipo: " + itemPersonalizado.tipo);
print("Dano: " + itemPersonalizado.dano);
print("Resistencia: " + itemPersonalizado.resistencia);

// Calcula e imprime o dano causado pelo item personalizado em um combate simulado
const danoTotal = itemPersonalizado.calcularDano();
print("Dano em combate: " + danoTotal);
