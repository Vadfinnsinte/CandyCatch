import { useEffect, useState } from "react"

const RandomAnt = (props) => {
	// const minInterval = 5000; 
	// const maxInterval = 15000;
	// const randomInterval = Math.floor(Math.random() * (maxInterval - minInterval + 1)) + minInterval
	// const [randomNumber, setRandomNumber] = useState(Math.floor(Math.random()*5))

    useEffect (() => {
        const interval = setInterval(() => {
		
            props.setRandomAnt({...props.randomAnt, x: Math.floor(Math.random()* 500), y: Math.floor(Math.random()* 500)});
        }, 6000);
        return () => clearInterval(interval);
		 
    }, []);

	return (
		<>
		<h2 className={props.randomAnt.className} style={{ left: `${props.randomAnt.x}px`, top: `${props.randomAnt.y}px` }}>🐜</h2>
		</>
	)
}

export default RandomAnt