import RandomAnt from "./randomAnt";



const MoveCharacter = ({ position, randomPosition }) => {
	const circleRect = (cx, cy, radius, rx, ry, rw, rh) => {
	
		let testX = cx;
		let testY = cy;
	  
		// Which edge is closest?
		if (cx < rx) testX = rx;            // Test left edge
		else if (cx > rx + rw) testX = rx + rw;  // Right edge
		if (cy < ry) testY = ry;            // Top edge
		else if (cy > ry + rh) testY = ry + rh;  // Bottom edge
	  
		// Get distance from closest edges
		let distX = cx - testX;
		let distY = cy - testY;
		let distance = Math.sqrt(distX * distX + distY * distY);
	  
		// If the distance is less than the radius, collision!
		return distance <= radius;
	  };
	//   const [count, setCount] = useState(0);
	  const [circleX, setCircleX] = useState(0);
	  const [circleY, setCircleY] = useState(0);
	  const [circleA, setCircleA] = useState(0);
	  const [circleB, setCircleB] = useState(0);
	  const radius = 30;
	  const squareX = 200;
	  const squareY = 100;
	  const squareWidth = 200;
	  const squareHeight = 200;
	
	  useEffect(() => {
		const hit = circleRect(circleX, circleY, radius, position.x, position.y, 30, 30);
		const antHit = circleRect(circleA, circleB, radius, randomAnt.x, randomAnt.y, 30, 30);
		if (hit) {
		  setCount((count) => count + 1);
		  setRandomPosition({
			x: Math.floor(Math.random() * 500),
			y: Math.floor(Math.random() * 500),
		  });
		}
		else if (antHit) {
		  setCount(count - 2);
				  setRandomAnt({...randomAnt, x: Math.floor(Math.random()* 500), y: Math.floor(Math.random()* 500)
				  });
		}
	  }, [position]);
	
	  useEffect(() => {
		// Update circle position to mouse coordinates
		setCircleX(randomPosition.x);
		setCircleY(randomPosition.y);
		setCircleA(randomAnt.x);
		setCircleB(randomAnt.y);
	  }, [randomPosition]);  // testa ta bort denna. 
	
	  return (
		<>
		  <h2 className="container">Score: {count}</h2>
		  <div className={`character`} style={{ left: `${position.x}px`, top: `${position.y}px` }}>
		  <img className="movingImg" src='https://media3.giphy.com/media/DheQ9Yd2pjHmh9xpFZ/giphy.gif?cid=6c09b952my7tyfu05seusrtrf3llrrmblxfrmq3qoiq8fqho&ep=v1_internal_gif_by_id&rid=giphy.gif&ct=s' />
		  </div>
		</>
	  );
	};
  
  export default MoveCharacter;