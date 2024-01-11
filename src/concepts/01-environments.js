
/**
 * 
 * @param {HTMLDivElement} element 
 */

export const environmentsComponent = ( element ) => {

    // console.log( process.env ); En las aplicaciones de Node se puede acceder a este objeto global (Depende del framework)
    console.log( import.meta.env );

    const html = `
        Dev: ${ import.meta.env.DEV } <br/>
        Prod: ${ import.meta.env.DEV } <br/>
        KEY: ${ import.meta.env.VITE_API_KEY } <br/>
        URL: ${ import.meta.env.VITE_BASE_URL } <br/>
    `;
    element.innerHTML = html;

}