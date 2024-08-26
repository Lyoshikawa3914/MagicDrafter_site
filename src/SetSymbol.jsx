import React, { useEffect, useState } from 'react';
// import { FetchSetSymbol } from './FetchSetSymbol';
import './App.css';

export function SetSymbol() {
  const [setSymbolUrl, setSetSymbolUrl] = useState(null);

  useEffect(() => {
    async function getSetSymbol() {
      const symbolUrl = await FetchSetSymbol('wwk'); // Replace 'wwk' with the desired set code
      setSetSymbolUrl(symbolUrl);
    }
    getSetSymbol();
  }, []);

  if (!setSymbolUrl) {
    return <div>Loading...</div>;
  }

  return (
    <div className="App">
      <h1>MTG Set Symbol</h1>
      <img src={setSymbolUrl} alt="Set Symbol" />
    </div>
  );
}


