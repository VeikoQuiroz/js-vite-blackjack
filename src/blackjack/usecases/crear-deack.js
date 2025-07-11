import _ from 'underscore'

/**
 * Función para crear un nuevo mazo de cartas
 * @param {String[]} tiposDeCarta Ejemplo: ['C', 'D', 'H', 'S']
 * @param {String[]} tiposEspeciales Ejemplo: ['A', 'J', 'Q', 'K']
 * @returns {String[]} retorna un nuevo deck de cartas.
 */
export const crearDeck = (tiposDeCarta, tiposEspeciales) => {

    if(!tiposDeCarta || tiposDeCarta.length === 0) 
        throw new Error('tiposDeCarta es obligatorio como un arreglo de string');

    if(!tiposEspeciales || tiposEspeciales.length === 0) 
        throw new Error('tiposEspeciales es obligatorio como un arreglo de string');

    let deck = [];
    for (let i = 2; i <= 10; i++) {
        for (const tipo of tiposDeCarta) {
            deck.push(i + tipo);
        }
    }
    for (const especial of tiposEspeciales) {
        for (const tipo of tiposDeCarta) {
            deck.push(especial + tipo);
        }
    }
    return _.shuffle(deck); // Mezclar el mazo    
}