import ProfileComponent from '../ProfileComponent/ProfileComponent';
import LinksComponent from '../LinksComponent/LinksComponent';

import './ProfileLinksComponent.scss';
const ProfileLinksComponent = () => {
	return (
		<div className='profile-links-component'>
			<ProfileComponent />
			<LinksComponent />
		</div>
	);
};

export default ProfileLinksComponent;
