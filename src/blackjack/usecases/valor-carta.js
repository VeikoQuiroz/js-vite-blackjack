/**
 * Obtiene el valor de la carta y lo retorna
 * @param {String} carta Recibe una carta, por ejemplo 5C
 * @returns {Number} Retorna el valor de la carta, por ejemplo 5
 */
export const valorCarta = (carta) => {
    const valor = carta.substring(0, carta.length - 1);
    return (isNaN(valor)) ? (valor === 'A') ? 11 : 10 
                        : parseInt(valor);
}