import React, { useState } from 'react';
import GamePanel from '../components/game-panel'
import NamePanel from '../components/name-panel'


const Game = () => {
	const [name, setName] = useState('')

	return (
		<div className="game-container">
			{name === ''
				?
				<NamePanel cb={setName} />
				:
				<GamePanel pName={name} />
			}
		</div>
	)
};

export default Game;