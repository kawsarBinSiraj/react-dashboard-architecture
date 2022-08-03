import React from 'react';
import { ThemeSettings as TSettings } from './../../components/AppModules/GlobalSettings/ThemeSettings';

const ThemeSettings = () => {
	return (
		<>
			<div className="row">
				<div className="col-xxl-5 col-xl-6 col-lg-8">
					<TSettings />
				</div>
			</div>
		</>
	);
};

export default ThemeSettings;
