import {valorCarta} from './'

/**
 * 
 * @param {String} carta 
 * @param {Number} turno 
 * @param {Number} puntosJugador 
 * @param {NodeListOf<HTMLElement>} puntosHTML 
 * @returns {Number} La suma de puntos
 */

export const acumularPuntos = (carta, turno, puntosJugador, puntosHTML) => {
    puntosJugador += valorCarta(carta);
    puntosHTML[turno].innerText = puntosJugador;
    return puntosJugador;
}