import React from 'react';
// import logo from './logo.svg';
import './App.css';
import CharacterSelector from './components/CharacterSelector';
import Footer from './components/Footer';

const App: React.FC = () => {
	return (
		<div>
			<img 
				className="R6logo"
				src="https://staticctf.ubisoft.com/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/DAwqy5hMljnxm7evA5ASN/e3266cda0a738a3abd486d5f57d732d7/r6s-logo-ww.png"
				alt="R6Logo" 
			/>
			<h1>Randomizer</h1>
			<CharacterSelector />
			<Footer />
		</div>
	);
};

export default App;
