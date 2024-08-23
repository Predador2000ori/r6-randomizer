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

export default CharacterSelector;