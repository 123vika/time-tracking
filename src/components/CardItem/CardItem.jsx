import './CardItem.scss';
// import { data } from '../../data.json';

const CardItem = () => {
	// const cards = data;
	return (
		<div className='card-item-wrapper'>
			<div className='card-item-color'></div>
			<div className='card-item'>
				<div className='card-itrm_card-top'>
					<div>Work</div>
					<i class='fas fa-ellipsis-h'></i>
					<div>...</div>
				</div>
				<div className='card-itrm_card'>
					<div className='card-itrm_card-header'>32hrs</div>
					<div className='card-itrm_card-p'>Last Week - 36hrs</div>
				</div>
			</div>
		</div>
	);
};

export default CardItem;
