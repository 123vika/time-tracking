import './ProfileComponent.scss';

const ProfileComponent = () => {
	const img = '../../images/image-jeremy.png';
	return (
		<div className='profile-component'>
			{/* <div className='profile-component_img'></div> */}
			<img className='profile-component_img' src={img} alt='profile' />
			<div className='profile-component_p'>Report for</div>
			<div className='profile-component_header'>Jeremy Robson</div>
		</div>
	);
};

export default ProfileComponent;
