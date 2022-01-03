import './description.scss';

export const Description = ({ data, desc }) => {
  const [firstKey, secondKey, thirdKey] = Object.keys(desc);
  const [firstValue, secondValue, thirdValue] = Object.values(desc);
  return (
    <div className="description-block">
      <h3 className="description-name">{data.name}</h3>
      <ul className="description-bio">
        <li>{firstValue}: {data[firstKey]}</li>
        <li>{secondValue}: {data[secondKey]}</li>
        <li>{thirdValue}: {data[thirdKey]}</li>
      </ul>
    </div>
  );
};
