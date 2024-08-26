import React from 'react';

export type CharacterCardProps = {
	name: string;
	imageUrl: string;
	weapons: {
		primaryWeapon: string[];
		secondaryWeapon: string[];
	}
	hability: string[];
	gadget: string[];
};

const CharacterCard: React.FC<CharacterCardProps> = ({
	name,
	imageUrl,
	weapons,
	hability,
	gadget
}) => {
	return (
		<div className='character-card'>
			<img src={imageUrl} alt={name} className='opImg' />
			<h2>{name}</h2>
			<p>Primary Weapon: {weapons.primaryWeapon}</p>
			<p>Secondary Weapon: {weapons.secondaryWeapon}</p>
			<p>Hability: {hability}</p>
			<p>Gadget: {gadget}</p>
		</div>
	);
};

export default CharacterCard;