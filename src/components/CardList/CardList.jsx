import CardItem from '../CardItem/CardItem';

import './CardList.scss';

const CardList = () => {
	return (
		<div className='card-list'>
			<div>
				<CardItem />
				<CardItem />
			</div>
			<div>
				<CardItem />
				<CardItem />
			</div>

			<div>
				<CardItem />
				<CardItem />
			</div>
		</div>
	);
};

export default CardList;
