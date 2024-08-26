import React, { useState } from "react";
import CharacterCard, {CharacterCardProps} from "./CharacterCard";
import { attackers, defenders } from "../data/charactersData";

const CharacterSelectorSquad: React.FC = () => {
	// selected character state
	const [selectedCharacters, setSelectedCharacters] = useState<CharacterCardProps[]>([{
		name: "unknown",
		imageUrl: "https://via.placeholder.com/150",
		weapons: {
			primaryWeapon: ["unknown"],
			secondaryWeapon: ["unknown"],
		},
		hability: ["unknown"],
		gadget: ["unknown"],
	}]);

	// Logic to random character selection
	// Function to return random element from array
	const getRandomElement = (array: any[]) => array[Math.floor(Math.random() * array.length)];
	// Function to randomly sorts character array
	const getUniqueRandomCharacters = (characters: any[], count: number) => {
		const shuffled = ([...characters].sort(() => 0.5 - Math.random())).slice(0, count);
		const setted = randomLoadout(shuffled);
		return setted;
	};
	// Function to  set character loadout
	const  randomLoadout = ( characters: any[]) => {
		const characterLoaded = characters.map(character => ({
			...character,
			weapons: {
				primaryWeapon: getRandomElement(character.weapons.primaryWeapon),
				secondaryWeapon: getRandomElement(character.weapons.secondaryWeapon),
			},
			hability: getRandomElement(character.hability),
			gadget: getRandomElement(character.gadget),
		}));
		return characterLoaded;
	};

	// Function to handle character selection
	const handleSelectCharacters = (characterType: 'attacker' | 'defender') => {
		// Sets the quantity of characters
		let quantity: number = parseInt((document.getElementById("count") as HTMLInputElement).value);
		quantity = quantity ? quantity : 1;		// case wher the user doesn't write anything
		quantity = quantity < 0 ? quantity * -1 : quantity
		quantity = quantity > 10 ? 10 : quantity
		// Chose attackers or defenders
		const characterList = characterType  === 'attacker' ? attackers : defenders;
		// Sorts the characters and trims the array to the quantity
		const uniqueCharacters = getUniqueRandomCharacters(characterList, quantity);
		// Sets the state
		setSelectedCharacters(uniqueCharacters);
	};

	return (
		<div className="character-selector">
			<p>
				<label htmlFor="Quantity" >Quantity:</label>
				<br />
				<input type="number" id="count" name="count" min="1" max="10" defaultValue="1" />
			</p>
			<button onClick={() => handleSelectCharacters('attacker')}>Random attackers</button>
			<button onClick={() => handleSelectCharacters('defender')}>Random defenders</button>
			<div>
				{selectedCharacters.map((character: CharacterCardProps, index: number) => (
					<CharacterCard {...character} />
				))}
			</div>
		</div>
	)
}

export default CharacterSelectorSquad;