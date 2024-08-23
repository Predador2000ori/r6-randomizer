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
	const [selectedCharacters, setSelectedCharacters] = useState<any>([]);

	const getUniqueRandomCharacters = (characters: any[], count: number) => {
		const shuffled = [...characters].sort(() => 0.5 - Math.random());
		return shuffled.slice(0, count);
	};

	const handleSelectCharacters = (characterType: 'attacker' | 'defender') => {
		const characterList = characterType  === 'attacker' ? attackers : defenders;
		const uniqueCharacters = getUniqueRandomCharacters(characterList, 5);
		setSelectedCharacters(uniqueCharacters);
	};

	return (
		<div>
			<button onClick={() => handleSelectCharacters('attacker')}>Select 5 random attackers</button>
			<button onClick={() => handleSelectCharacters('defender')}>Select 5 random defenders</button>
			<div>
				{selectedCharacters.map((character: any, index: number) => (
					<CharacterCard key={index} {...character} />
				))}
			</div>
		</div>
	)
}

export default CharacterSelectorSquad;