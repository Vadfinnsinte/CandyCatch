import { useState, useEffect } from "react";



const handleKeyDown = (event, setPosition, setLeftArrowPressed) => {
    const step = 10;
    // console.log("pressed key:", event.key);
    switch (event.key) {
        case "ArrowUp":
            setPosition((prevPosition) => ({ ...prevPosition, y: prevPosition.y - step }));
            break;
        case "ArrowDown":
            setPosition((prevPosition) => ({ ...prevPosition, y: prevPosition.y + step }));
            break;
        case "ArrowLeft":
			setLeftArrowPressed(true);
            setPosition((prevPosition) => ({ ...prevPosition, x: prevPosition.x - step }));
            break;
        case "ArrowRight":
            setPosition((prevPosition) => ({ ...prevPosition, x: prevPosition.x + step }));
            break;
        default:
            break;
    }
};
const handleKeyUp = (event, setLeftArrowPressed) => {
    if (event.key === "ArrowLeft") {
        setLeftArrowPressed(false); 
    }
};

const MoveCharacter = ({position, setPosition, randomPosition, setRandomPosition, randomAnt,setRandomAnt}) => {
    // const [position, setPosition] = useState({ x: 100, y: 100 });
	const [leftArrowPressed, setLeftArrowPressed] = useState(false)
	const [count, setCount] = useState(0)
    useEffect(() => {
		
        const handleKeyDownWrapper = (event) => handleKeyDown(event, setPosition, setLeftArrowPressed);
		const handleKeyUpWrapper = (event) => handleKeyUp(event, setLeftArrowPressed)

        document.addEventListener("keydown", handleKeyDownWrapper);
		document.addEventListener("keyup", handleKeyUpWrapper);
		

        return () => {
            document.removeEventListener("keydown", handleKeyDownWrapper);
			document.removeEventListener("keyup", handleKeyUpWrapper);
        };
    }, [setPosition, setLeftArrowPressed]); 

	useEffect(() => {
		const threshold = 30;
		
			if(
				Math.abs(randomPosition.x - position.x) < threshold &&
				Math.abs(randomPosition.y - position.y) < threshold)
				{	
					setCount(count +1)
				// console.log("samma", count);
				setRandomPosition({...randomPosition, x: Math.floor(Math.random()* 500), y: Math.floor(Math.random()* 500)})
				}
			
			else if (Math.abs(randomAnt.x - position.x) < threshold && Math.abs(randomAnt.y - position.y) < threshold) {
				setCount(count - 2);
				setRandomAnt({...randomAnt, x: Math.floor(Math.random()* 500), y: Math.floor(Math.random()* 500)
				});
			}
		}, [position]);

    return (
		<>
			<h2 className="container">Score: {count}</h2>
     	   <div
            className={`character ${leftArrowPressed ? "flip-horizontal" : ""}`}
            style={{ left: `${position.x}px`, top: `${position.y}px` }}
            onKeyDown={handleKeyDown}
            tabIndex="0" 
      	  >
				<img className="movingImg" src='https://media3.giphy.com/media/DheQ9Yd2pjHmh9xpFZ/giphy.gif?cid=6c09b952my7tyfu05seusrtrf3llrrmblxfrmq3qoiq8fqho&ep=v1_internal_gif_by_id&rid=giphy.gif&ct=s' />
			</div>
		
		</>


	)
}

export default MoveCharacter