/**
 * Función para tomar una carta del mazo
 * @param {String[]} deck El mazo de cartas
 * @returns {String} Retorna una carta
 */
export const pedirCarta = (deck) => {
    if(!deck || deck.length === 0) 
        throw new Error('deck es obligatorio como un arreglo de string');    
    return deck.pop();
}