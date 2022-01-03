import './app-image.scss';

export const Image = ({imgData, data}) => {
	return <img className="image" src={imgData} alt={data.name}/>
};