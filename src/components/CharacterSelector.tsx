import React, { useState } from "react";
import CharacterCard from "./CharacterCard";
import { attackers, defenders } from "../data/charactersData";

const CharacterSelector: React.FC = () => {
	const [selectedCharacter, setSelectedCharacter] = useState({
		name: "unknown",
		imageUrl: "https://via.placeholder.com/150",
		weapons: {
			primaryWeapon: ["unknown"],
			secondaryWeapon: ["unknown"],
		},
		hability: ["unknown"],
		gadget: ["unknown"]
	});

	const handleSelectCharacter = (characterType: 'attacker' | 'defender') => {
		// Logic to random character selection
		const characterList = characterType === 'attacker' ? attackers : defenders;
		const randomIndex = Math.floor(Math.random() * characterList.length);
		const randomCharacter = characterList[randomIndex];
		const randomPrimaryWeapon = randomCharacter.weapons.primaryWeapon[
			Math.floor(Math.random() * randomCharacter.weapons.primaryWeapon.length)
		];
		const randomSecondaryWeapon = randomCharacter.weapons.secondaryWeapon[
			Math.floor(Math.random() * randomCharacter.weapons.secondaryWeapon.length)
		];
		const randomHability = randomCharacter.hability[
			Math.floor(Math.random() * randomCharacter.hability.length)
		];
		const randomGadget = randomCharacter.gadget[
			Math.floor(Math.random() * randomCharacter.gadget.length)
		];
		setSelectedCharacter({
			name: randomCharacter.name,
			imageUrl: randomCharacter.imageUrl,
			weapons: {
				primaryWeapon: [randomPrimaryWeapon],
				secondaryWeapon: [randomSecondaryWeapon],
			},
			hability: [randomHability],
			gadget: [randomGadget],
		});
	};

	return (
		<div>
			<button onClick={() => handleSelectCharacter('attacker')}>Select random attacker</button>
			<button onClick={() => handleSelectCharacter('defender')}>Select random defender</button>
			<CharacterCard {...selectedCharacter} />
		</div>
	);
};

const CharacterSelectorSquad: React.FC = () => {
	// selected character state
	const [selectedCharacters, setSelectedCharacters] = useState<any>([]);

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
		// Chose attackers or defenders
		const characterList = characterType  === 'attacker' ? attackers : defenders;
		// Sorts the characters and trims the array to the quantity
		const uniqueCharacters = getUniqueRandomCharacters(characterList, quantity);
		// Sets the state
		setSelectedCharacters(uniqueCharacters);
	};

	return (
		<div>
			<p>
				<label htmlFor="Quantity" >Quantity:</label>
				<br />
				<textarea name="Count" id="count" itemType="number"></textarea>
			</p>
			<button onClick={() => handleSelectCharacters('attacker')}>Random attackers</button>
			<button onClick={() => handleSelectCharacters('defender')}>Random defenders</button>
			<div>
				{selectedCharacters.map((character: any, index: number) => (
					<CharacterCard key={index} {...character} />
				))}
			</div>
		</div>
	)
}

export default CharacterSelectorSquad;