const baseUrl = 'https://api.scryfall.com/sets/';
const setCode = 'ELD'

export async function CallGetAllCardsFromSet(set_code) {
    //const set_code = 'MH3';

    try {
        const baseUrl = `https://api.scryfall.com/cards/search?q=e%3A${set_code}&unique=prints`;

        let url = baseUrl;
        let allCards = [];
    
        while (url) {
        const response = await fetch(url);
        if (!response) {
            throw new Error('Error fetching data');
        }
    
        const data = await response.json();
        allCards = allCards.concat(data.data);
    
        url = data.next_page;
        }

        // allCards.forEach(card => {
        //   console.log(card.name)
        // })
        return allCards;
    }
    catch (error) {
        console.log(error);
    }
  

}

CallGetAllCardsFromSet();