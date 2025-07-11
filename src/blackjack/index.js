import '../style.css'
import {crearDeck, pedirCarta, valorCarta, acumularPuntos, crearCarta, turnoComputadora} from './usecases'

/*
2C = Two of Clubs (tréboles)
3D = Three of Diamonds (diamantes)
4H = Four of Hearts (corazones)
5S = Five of Spades (espadas)
*/ 

const miModulo =
(
    () => {
        'use strict';
        let deck = [];
        const tipos = ['C', 'D', 'H', 'S'], // Clubs, Diamonds, Hearts, Spades
             especiales = ['A', 'J', 'Q', 'K']; // As, Jack, Queen, King

        //let puntosJugador = 0,
        //    puntosComputadora = 0;
        let puntosJugadores = [];

        const btnPedir = document.querySelector('#btnPedir'),
              btnDetener = document.querySelector('#btnDetener'),
              btnNuevo = document.querySelector('#btnNuevo');

        const divCartasJugadores = document.querySelectorAll('.divCartas'),
              puntosHTML = document.querySelectorAll('small');
        
        const inicializarJuego = (numJugadores = 2) => {
            deck = crearDeck(tipos, especiales);
            puntosJugadores = Array(numJugadores).fill(0);
            puntosHTML.forEach(elem => elem.innerText = 0);
            divCartasJugadores.forEach(elem => elem.innerHTML = '');
            btnPedir.disabled = false;
            btnDetener.disabled = false;            
        }      




        // Eventos
        
        btnPedir.addEventListener('click', () => {
            try {
                const carta = pedirCarta(deck);
                const puntosJugador = acumularPuntos(carta, 0, puntosJugadores[0], puntosHTML);                
                puntosJugadores[0] = puntosJugador;
                crearCarta(carta, 0, divCartasJugadores);
                
                if (puntosJugador > 21) {
                    btnPedir.disabled = true;
                    btnDetener.disabled = true;
                    turnoComputadora(puntosJugador, deck, puntosJugadores.length, puntosHTML, divCartasJugadores);
                } else if (puntosJugador === 21) {
                    btnPedir.disabled = true;
                    btnDetener.disabled = true;
                    turnoComputadora(puntosJugador, deck, puntosJugadores.length, puntosHTML, divCartasJugadores);
                }
            } catch (error) {
                console.error(error);
            }
        });


        btnDetener.addEventListener('click', () => {
            btnPedir.disabled = true;
            btnDetener.disabled = true;
            turnoComputadora(puntosJugadores[0], deck, puntosJugadores.length, puntosHTML, divCartasJugadores);            
        });

        btnNuevo.addEventListener('click', () => {
            inicializarJuego();
        });
     
        // Exponer las funciones públicas
        return {
            nuevoJuego: inicializarJuego,          
        };
    }
    
)();