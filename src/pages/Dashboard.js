import React from 'react';
import AppHelmet from '../components/AppLayouts/AppHelmet/AppHelmet';
import { ThemeSettings as TSettings } from '../components/AppModules/GlobalSettings/ThemeSettings';

const Dashboard = () => {
	return (
		<>
			<AppHelmet title="Dashboard" />
			<h1 className="display-5 text-theme-color mb-3">Hello World !</h1>
			<div className="row">
				<div className="col-xxl-5 col-xl-6 col-lg-8">
					<TSettings />
				</div>
			</div>
		</>
	);
};

export default Dashboard;
