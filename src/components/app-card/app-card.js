import {Image} from './app-image/app-image';
import {Description} from './description/description';
import './app-card.scss';

export const Card = ({imageData, loadedData, desc}) => {
	return (
		<div className="card-container">
			<Image imgData={imageData} data={loadedData}/>
			<Description data={loadedData} desc={desc}/>
		</div>
	)
}