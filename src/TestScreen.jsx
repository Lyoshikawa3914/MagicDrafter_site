// App.jsx
import React, { useEffect, useState } from 'react';
// import { fetchCardData } from './fetchCardData';
import { CallSetSymbol } from './ScryfallApi/CallSetSymbol';
import './App.css';

export function TestScreen() {
  const [cardData, setCardData] = useState(null);

  useEffect(() => {
    async function getCardData() {
      const data = await fetchCardData();
      CallSetSymbol(data);
    }
    getCardData();
  }, []);

  if (!cardData) {
    return <div>Loading...</div>;
  }
  // console.log(cardData)
  const { name, mana_cost, set_name, image_uris } = cardData;
  const imageUrl = image_uris.small;

  return (
    <div className="App">
      <h1>MTG Card Information</h1>
      <p>Card Name: {name}</p>
      <p>Mana Cost: {mana_cost}</p>
      <p>Set Name: {set_name}</p>
      <img src={imageUrl} alt={name} />
    </div>
  );
}

