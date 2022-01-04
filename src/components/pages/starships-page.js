import React, {useState, useEffect} from "react";
import { swService, swImage } from '../../services/sw-service';
import { AppHeader } from "../app-header/app-header";
import { Card } from "../app-card/app-card";
import { AppButton } from "../app-button/app-button";

export const StarshipsPage = () => {
	const [count, setCount] = useState(1);
  const [people] = useState([]);
	const [image, setImage] = useState('');

	const description = {
		model: 'Model',
		max_atmosphering_speed: 'Max speed',
		hyperdrive_rating: 'Heperdrive'
	}

	useEffect(() => {
    swService('starships', count);
		setImage(swImage('starships', count));
  }, [count]);

	const nextPeople = () => {
    setCount(prev => prev + 1);
	}
	return (
    <div>
      <AppHeader />
			<Card imageData={image} loadedData={people} desc={description}/>
			<div style={{textAlign: "center"}} onClick={nextPeople}>
			<AppButton />
			</div>
    </div>
  );
}