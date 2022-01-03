import {Image} from './app-image/app-image';
import {Description} from './description/description';
import './app-card.scss';

export const Card = ({imageData, peopleData, desc}) => {
	return (
		<div className="card-container">
			<Image imgData={imageData} data={peopleData}/>
			<Description data={peopleData} desc={desc}/>
		</div>
	)
}