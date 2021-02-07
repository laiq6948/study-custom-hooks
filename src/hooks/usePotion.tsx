import React, { useState, useEffect } from "react";
import { Character, Potion } from "../App";

export default function usePotion(character: Character, potion: Potion | null) {
    const [currentPotion, setCurrentPotion] = useState(potion);
    const [currentCharacterStats, setCurrentCharacterStats] = useState(
        character.stats
    );

    useEffect(() => {
        if (currentPotion) {
            setCurrentCharacterStats((prevStats) => ({
                hp: prevStats.hp + currentPotion.stats.hp,
                attack: prevStats.attack + currentPotion.stats.attack,
                defence: prevStats.defence + currentPotion.stats.defence,
            }));
        }

        return () => {
            setCurrentPotion(null);
        };
    }, [currentPotion]);

    return [currentCharacterStats, setCurrentPotion] as const;
};
