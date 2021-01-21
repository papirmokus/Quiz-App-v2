import React, { useState } from 'react';
import GamePanel from '../components/game-panel'
import NamePanel from '../components/name-panel'


const Game = () => {
	const [name, setName] = useState('')
	const element = (name === '') ? <NamePanel cb={setName} /> : <GamePanel pName={name} />

	return (
		<div className="game-container">
			{element}
		</div>
	)
};

export default Game;