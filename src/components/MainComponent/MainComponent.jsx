import CardList from '../CardList/CardList';
import ProfileLinksComponent from '../ProfileLinksComponent/ProfileLinksComponent';

import './MainComponent.scss';

const MainComponent = () => {
	return (
		<div className='main-component'>
			<ProfileLinksComponent />
			<CardList />
		</div>
	);
};

export default MainComponent;
