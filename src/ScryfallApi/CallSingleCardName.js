/**
 * Function that will allow users to get a card object from the Scryfall api by
 * entering in a card name. 
 */

export async function CallSingleCardName(name) {
    //console.log('Fetching data for card:', card_name);
    // console.log('Charred Foyer // Warped Space');

    const url = `https://api.scryfall.com/cards/named?exact=${encodeURIComponent(name)}`;

    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error('Card not found');
        }

        const cardData = await response.json();
        console.log(cardData);
        
        //console.log(`Data fetched for card ${card_name}:`, cardData);
        //return cardData;
    } catch (error) {
        console.log(`Error fetching card data for ${name}: ${error.message}`);
        throw error;
    }
}

//CallSingleCardName();