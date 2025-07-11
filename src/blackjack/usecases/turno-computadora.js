import {pedirCarta, acumularPuntos, crearCarta} from './'

// Turno de la computadora

/**
 * 
 * @param {Number} puntosMinimos Puntos mínimos que la computadora necesita para ganar.
 * @param {String[]} deck
 */
export const turnoComputadora = (puntosMinimos, deck = [], numeroJugadores, puntosHTML, divCartasJugadores) => {
    if(!puntosMinimos)
        throw new Error('Puntos Mínimos son necesario');
    
    
    let puntosComputadora = 0;
    do {
        const carta = pedirCarta(deck);        
        puntosComputadora = acumularPuntos(carta, numeroJugadores - 1, puntosComputadora, puntosHTML); // Asumiendo que el último jugador es la computadora
        
        crearCarta(carta, numeroJugadores - 1, divCartasJugadores);
        if (puntosMinimos > 21) {
            break;
        }
    } while ((puntosComputadora < puntosMinimos) && (puntosComputadora < 21));
    determinarGanador(puntosMinimos, puntosComputadora);
}

const determinarGanador = (puntosMinimos, puntosComputadora) => {
    
    setTimeout(() => {
        if (puntosComputadora === puntosMinimos) {
            alert('Nadie gana :(');
        } else if (puntosMinimos > 21) {
            alert('Computadora gana :(');
        } else if (puntosComputadora > 21 || puntosComputadora < puntosMinimos) {
            alert('Jugador gana :)');
        } else {
            alert('Computadora gana :)');
        }
    }, 100);
}
