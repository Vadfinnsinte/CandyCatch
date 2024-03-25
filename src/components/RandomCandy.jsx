import { useState, useEffect } from "react";


const RandomCandy = ({randomPosition, setRandomPosition}) => {
	// console.log(randomController);
	const [randomController, setRandomController] = useState(Math.floor(Math.random()*5))
	// const [isVisible, setisVisible] = useState([{visability:false, name: stick, className:stick-candy},{visability:false, name: cake, className: cake-candy}, {visability: false, name: candy, className:candy-candy}])
	const [isVisibleCake, setisVisibleCake] = useState(false)
	const [isVisibleStick, setisVisibleStick] = useState(false)
	const [isVisibleCandy, setisVisibleCandy] = useState(false)

	

	useEffect (() => {
		const interval = setInterval(() => {
			setRandomController(Math.floor(Math.random()*5))
			setRandomPosition({...randomPosition, x: Math.floor(Math.random()* 500), y: Math.floor(Math.random()* 500)})
		}, 8000)

		return () => clearInterval(interval)
		}, [])



	


	useEffect(() => {

		// setisVisible.visability(false)
		setisVisibleCake(false)
			setisVisibleStick(false)
			setisVisibleCandy(false)

        if (randomController === 2) {
            setisVisibleCake(true);
        }
		else if (randomController === 3 || randomController === 4){
			setisVisibleStick(true)
		}
		else if (randomController === 1 || randomController === 0){
			setisVisibleCandy(true)
		}
        // if (randomController === 2 && isVisible.name == "cake") {
        //     setisVisible(isVisible.name:true);
        // }
		// else if (randomController === 3 || randomController === 4){
		// 	setisVisibleStick(true)
		// }
		// else if (randomController === 1 || randomController === 0){
		// 	setisVisibleCandy(true)
		// }
		

//   kan jag använda mig av switch för att ändra frekvensen på godiset/myrorna? 



    }, [randomController])


	return (
		<>
		{isVisibleCake && <h2 className="cake" style={{ left: `${randomPosition.x}px`, top: `${randomPosition.y}px` }}>🍰</h2>}
		{isVisibleStick && <h2 className="stick" style={{ left: `${randomPosition.x}px`, top: `${randomPosition.y}px` }}>🍡</h2>}
		{isVisibleCandy && <h2 className="candy" style={{ left: `${randomPosition.x}px`, top: `${randomPosition.y}px` }}>🍬 </h2>}
		</>
	)
}

export default RandomCandy