import React, { useState } from "react";
import CharacterCard from "./CharacterCard";
import EchoIconN from "./CharacterMedia/Defenders/Echo/logo.webp";
import IanaLogo from "./CharacterMedia/Attackers/Iana/logo.webp";

const CharacterSelector: React.FC = () => {
	const [selectedCharacter, setSelectedCharacter] = useState({
		name: 'unknown',
		imageUrl: EchoIconN,
		primaryWeapon: 'unknown',
		secondaryWeapon: 'unknown',
		hability: 'unknown',
		gadget: 'unknown'
	});

	const handleSelectCharacter = () => {
		// Logic to random character selection
		const randomCharacter = {
			name: 'Sample Character',
			imageUrl: IanaLogo,
			primaryWeapon: 'Sample Primary Weapon',
			secondaryWeapon: 'Sample Secondary Weapon',
			hability: 'Sample Hability',
			gadget: 'Sample Gadget'
		};
		setSelectedCharacter(randomCharacter);
	};

	return (
		<div>
			<button onClick={handleSelectCharacter}>Select Random Character</button>
			<CharacterCard {...selectedCharacter} />
		</div>
	);
};

export default CharacterSelector;