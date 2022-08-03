import React from 'react';
import AppHelmet from '../components/AppLayouts/AppHelmet/AppHelmet';

const Dashboard = () => {
	return (
		<>
			<AppHelmet title="Dashboard" />
			<h1 className="display-5 text-theme-color">Hello World !</h1>
		</>
	);
};

export default Dashboard;
