import React, {useState, useEffect} from "react";
import { swService, swImage } from '../../services/sw-service';
import { AppHeader } from '../app-header/app-header';
import { Card } from "../app-card/app-card";
import { AppButton } from "../app-button/app-button";

export const PlanetsPage = () => {
	const [count, setCount] = useState(1);
  const [planet, setPlanet] = useState([]);
	const [image, setImage] = useState('');

	const description = {
		climate: 'Climate',
		gravity: 'Gravity',
		terrain: 'Terrain'
	}

	useEffect(() => {
    swService('planets', count, setPlanet);
		setImage(swImage('planets', count));
  }, [count]);

	const nextPeople = () => {
    setCount(prev => prev + 1);
	}
  return (
    <div>
      <AppHeader />
			<Card imageData={image} loadedData={planet} desc={description}/>
			<div style={{textAlign: "center"}} onClick={nextPeople}>
			<AppButton />
			</div>
    </div>
  );
};
