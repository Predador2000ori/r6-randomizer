import React, { useState } from "react";
import CharacterCard, { CharacterCardProps } from "./CharacterCard";
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

	const [quantity, setQuantity] = useState<number>(1);
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
	const randomLoadout = (characters: any[]) => {
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
		// Chose attackers or defenders
		const characterList = characterType === 'attacker' ? attackers : defenders;
		// Sorts the characters and trims the array to the quantity
		const uniqueCharacters = getUniqueRandomCharacters(characterList, quantity);
		// Sets the state
		setSelectedCharacters(uniqueCharacters);
	};

	return (
		<div className="character-selector">
			<div className="quantdiv">
				<label htmlFor="Quantity" >Quantity:</label>
				<input
					type="number"
					id="Quantity"
					value={quantity}
					onChange={(e) => setQuantity(Math.max(1, Math.min(37, Math.abs(Number(e.target.value)))))}
				/>
			</div>
			<div>
				<svg 
					className="random-attacker-button"
					xmlns='http://www.w3.org/2000/svg'
					onClick={() => handleSelectCharacters('attacker')}
					viewBox='0 0 30 30'><path d='M8.32,19.16l-5.54,5.54H2V28h3.31v-0.79l5.54-5.54H8.32V19.16z M25.2,2L10.29,17.18L8.5,15.4l-0.94,0.94l1.87,1.87v2.36h2.36l1.87,1.87l0.94-0.94l-1.78-1.78L28,4.8V2H25.2z M21.68,19.16v2.52h-2.52l5.54,5.54V28H28v-3.31h-0.78L21.68,19.16z M14.6,11.98L4.8,2H2v2.8l9.98,9.8L14.6,11.98z M20.57,18.21l1.87-1.87L21.5,15.4l-1.78,1.78l-1.67-1.71l-2.56,2.56l1.7,1.67L15.4,21.5l0.94,0.94l1.87-1.87h2.36V18.21z'/>
				</svg>
				<svg
					className="random-defender-button" 
					xmlns='http://www.w3.org/2000/svg' 
					onClick={() => handleSelectCharacters('defender')}
					viewBox='0 0 30 30'><path d='M19.27,9.74l-4.25,2.17L10.73,9.7L8.15,28h13.7L19.27,9.74z M21.23,7.01V2h-2.88v1.73h-1.96V2h-2.78v1.73h-1.96V2H8.77v4.96l6.25,3.51L21.23,7.01z'/>
				</svg>
			</div>
			<div>
				{selectedCharacters.map((character: CharacterCardProps, index: number) => (
					<CharacterCard key={index} {...character} /> // index can be replaced with an id when using a database
				))}
			</div>
		</div>
	)
}

export default CharacterSelectorSquad;