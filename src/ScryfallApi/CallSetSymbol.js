/**
 * This function allows user to manually get the mtg set symbol from scryfall api
 * requires the setCode of a set
 */


const baseUrl = 'https://api.scryfall.com/sets/';
const setCode = 'DSK'

export async function CallSetSymbol() {
    try {
        const response = await fetch(`${baseUrl}${setCode}`);

        if (!response.ok) {
            throw new Error('Network response was not ok ' + response.statusText);
        }
        const data = await response.json();

        // this will show the url of the set icon
        const setSymbolUrl = data.icon_svg_uri;
        
        console.log(setSymbolUrl);
        //return setSymbolUrl;

    }
    catch (error) {
        console.error('There has been a problem with your fetch operation:', error);
    }
}

CallSetSymbol();