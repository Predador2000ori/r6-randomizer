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
			<div className='info'>
				<h2>{name}</h2>
				<p className='ccKey'>Primary: </p>
				<p>{weapons.primaryWeapon}</p>
				<p className='ccKey'>Secondary: </p>
				<p>{weapons.secondaryWeapon}</p>
				<p className='ccKey'>Hability: </p>
				<p>{hability}</p>
				<p className='ccKey'>Gadget: </p>
				<p>{gadget}</p>
			</div>
		</div>
	);
};

export default CharacterCard;