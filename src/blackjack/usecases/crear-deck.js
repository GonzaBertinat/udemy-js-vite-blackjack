import _ from 'underscore';

// Exportación individual -> import { miNombre } from 'archivo'
export const miNombre = 'Fernando';

/**
 * Esta función crea un nuevo deck
 * @param {Array<String>} tiposDeCarta Ejemplo: ['C','D','H','S']
 * @param {Array<String>} tiposEspeciales Ejemplo: ['A','J','Q','K']
 * @returns {Array<String>} retorna un nuevo deck de cartas
 */
const crearDeck = (tiposDeCarta, tiposEspeciales) => {

    if(!tiposDeCarta || tiposDeCarta.length === 0) throw new Error('tiposDeCarta es obligatorio');
    if(!tiposEspeciales || tiposEspeciales.length === 0) throw new Error('tiposEspeciales es obligatorio');

    let deck = [];

    for( let i = 2; i <= 10; i++ ) {
        for( let tipo of tiposDeCarta ) {
            deck.push( i + tipo);
        }
    }

    for( let tipo of tiposDeCarta ) {
        for( let esp of tiposEspeciales ) {
            deck.push( esp + tipo);
        }
    }
    
    deck = _.shuffle( deck );
    
    return deck;
}

// Exportación por defecto -> import loQueSea from 'archivo'
// Puede existir hasta una por archivo
export default crearDeck;