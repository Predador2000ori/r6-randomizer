import React from 'react';
// import logo from './logo.svg';
import './App.css';
import CharacterSelector from './components/CharacterSelector';

const App: React.FC = () => {
	return (
		<div>
			<h1>Rainbow Six Siege Character Randomizer</h1>
			<CharacterSelector />
		</div>
	);
};

export default App;
