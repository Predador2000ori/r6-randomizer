import React from 'react';

type CharacterCardProps = {
	name: string;
	imageUrl: string;
	primaryWeapon: string;
	secondaryWeapon: string;
	hability: string;
	gadget: string;
};

const CharacterCard: React.FC<CharacterCardProps> = ({ name, imageUrl, primaryWeapon, secondaryWeapon, hability, gadget }) => {
	return (
		<div>
			<img src={imageUrl} alt={name} style={{ width: '150px', height: '150px' }} />
			<h2>{name}</h2>
			<p>Primary Weapon: {primaryWeapon}</p>
			<p>Secondary Weapon: {secondaryWeapon}</p>
			<p>Hability: {hability}</p>
			<p>Gadget: {gadget}</p>
		</div>
	);
};

export default CharacterCard;