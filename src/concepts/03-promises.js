
/**
 * 
 * @param {HTMLDivElement} element 
 */

import { heroes } from "../data/heroes"

export const promiseComponent = ( element ) => {

    const renderHero = ( hero ) => {
        element.innerHTML = hero.name;
    }

    const renderError = ( error ) => {
        element.innerHTML = `<h3> ${ error } </h3>`;
    }

    const id1 = '5d86371f2343e37870b91ef1';
    findHero( id1 )
        //.then( superHero => renderHero( superHero ) );
        .then( renderHero )
        .catch( renderError );
}


/**
 * 
 * @param {String} id 
 * @returns {Promise<Object>}
 */

const findHero = ( id ) => {

    return new Promise( ( resolve, reject ) => {

        const hero = heroes.find( hero => hero.id === id );
        
        if ( hero ) {
            resolve( hero );
            return;
        }

        reject(`Hero with id ${ id } not found`);

    });

}