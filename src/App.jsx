import { useState } from 'react'
import './App.css'
import MoveCharacter from './components/MoveCharacter'
import RandomCandy from './components/RandomCandy'
import RandomAnt from './components/randomAnt'

function App() {
	const [position, setPosition] = useState({ x: 100, y: 100 });
	const [randomPosition, setRandomPosition] = useState({x: Math.floor(Math.random()* 500), y: Math.floor(Math.random()* 500)})
	const [randomAnt, setRandomAnt] = useState({x:0, y: 400, className:"invisAnt", isVisible:false})


  return (
    <main>
		<div className='container'>
			<h1>Welcome to CandyCatch!</h1>
			<p>Catch candies but make sure to avoid the ant!</p>
			<p>Use the arrow keys to move around.</p>
			<p className='small-ps'>[ps. use your mouth to eat candy!]</p>
		</div>
		
		<div className='relative'>
			<RandomAnt randomAnt={randomAnt} setRandomAnt={setRandomAnt} />
			<MoveCharacter position={position} setPosition={setPosition} randomPosition={randomPosition} setRandomPosition={setRandomPosition} randomAnt={randomAnt} setRandomAnt={setRandomAnt}/>
			<RandomCandy randomPosition={randomPosition} setRandomPosition={setRandomPosition}  />

		</div>
    </main>

  )
}

export default App
