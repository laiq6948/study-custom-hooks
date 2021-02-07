import React, { useEffect, useState } from 'react';
import './App.css';
import usePotion from './hooks/usePotion';

interface Stats {
  hp: number;
  attack: number;
  defence: number;
}

export interface Potion {
  name: string;
  stats: Stats;
}

export interface Character {
  name: string;
  stats: Stats;
  potions: Array<Potion>;
}

const Geralt: Character = {
  name: "Geralt of Rivia",
  stats: {
    hp: 3200,
    attack: 650,
    defence: 880,
  },
  potions: [
    {
      name: "Full Moon",
      stats: {
        hp: 400,
        attack: 0,
        defence: 0,
      },
    },
    {
      name: "Thunderbolt",
      stats: {
        hp: 0,
        attack: 400,
        defence: 0,
      },
    },
  ],
}

function App() {

  const [stats, setPotion] = usePotion(Geralt, null);
  const [witcher, setWitcher] = useState(Geralt);

  const potionHandler = (potion: Potion) => {
    setPotion(potion);
  };

  useEffect(() => {
    setWitcher(prevWitcher => ({ ...prevWitcher, stats}));
    console.log(stats);
  }, [stats])

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column"
      }}
    >
      <div>
        <h3>Name: {witcher.name}</h3>
        <div>
          <h4>Health: {witcher.stats.hp}</h4>
        </div>
        <div>
          <h4>Attack: {witcher.stats.attack}</h4>
        </div>
        <div>
          <h4>Defence: {witcher.stats.defence}</h4>
        </div>
        <div>
          {witcher.potions.map(potion => (
            <div key={potion.name} style={{ width: "100%" }}>
              <button
                onClick={() => potionHandler(potion)}
                style={{ width: "100%", marginTop: '10px' }}
              >
                {potion.name}
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
