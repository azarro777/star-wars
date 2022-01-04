import React, {useEffect, useState} from "react";
import { swService, swImage } from '../../services/sw-service';
import { AppHeader } from "../app-header/app-header";
import { Card } from '../app-card/app-card';
import { AppButton } from "../app-button/app-button";

export const PeoplePage = () => {

	const [count, setCount] = useState(1);
  const [people] = useState([]);
	const [image, setImage] = useState('');

	const description = {
		gender: 'Gender',
		birth_year: 'Birth Year',
		eye_color: 'Eye color'
	}

	useEffect(() => {
    swService('people', count);
		setImage(swImage('characters', count));
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