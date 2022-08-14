import { useSelector } from 'react-redux';
import Routes from './routes/Routes';
import AppNavigation from './components/AppLayouts/AppNavigation/AppNavigation';
import AppHeader from './components/AppLayouts/AppHeader/AppHeader';
import ApplicationHelmet from './components/AppLayouts/AppHelmet/AppHelmet';
import _ from 'lodash';

/**
 * AppContainer Components
 * A method is simply a “chunk” of code.
 */
const AppTerritory = () => {
	const { isThemeDarkMode, isGutterOnlyBody, selectedFontColor, selectedThemeFont, selectedThemeColor, selectedNavWidth, selectedGutter, selectedRadius, selectedFontSize, isNavCollapsed } =
		useSelector((store) => store?.globalSettingsReducer);
	return (
		<>
			<ApplicationHelmet>
				{!_.isNil(selectedThemeFont) && <link href={`https://fonts.googleapis.com/css2?family=${selectedThemeFont}`} rel="stylesheet"></link>}
				{!_.isNil(selectedThemeFont) && (
					<style type="text/css">
						{`
                            body {
                                font-family: '${selectedThemeFont}', sans-serif;
                            }
						`}
					</style>
				)}
				{!_.isNil(selectedThemeColor) && (
					<style type="text/css">
						{`
							:root {
								--h : ${selectedThemeColor[0]};
								--s : ${selectedThemeColor[1]}%;
								--l : ${selectedThemeColor[2]}%;
						`}
					</style>
				)}
				{!_.isNil(selectedFontColor) && (
					<style type="text/css">
						{`
							:root {
								--theme-font-color : ${selectedFontColor};
						`}
					</style>
				)}
				{!_.isNil(selectedNavWidth) && isNavCollapsed !== true && (
					<style type="text/css">
						{`
							:root {
								--navigation-width: ${selectedNavWidth}px;
						`}
					</style>
				)}
				{isNavCollapsed === true && (
					<style type="text/css">
						{`
							:root {
								--navigation-width: 50px;
						`}
					</style>
				)}
				{!_.isNil(selectedGutter) && (
					<style type="text/css">
						{`
							:root {
								--theme-gutter: ${selectedGutter}px;
						`}
					</style>
				)}
				{!_.isNil(selectedRadius) && (
					<style type="text/css">
						{`
							:root {
								--theme-radius: ${selectedRadius}px;
						`}
					</style>
				)}
				{!_.isNil(selectedFontSize) && (
					<style type="text/css">
						{`
							:root {
								--theme-fontInit-size: ${selectedFontSize}px;
						`}
					</style>
				)}
			</ApplicationHelmet>
			<AppHeader />
			<AppNavigation />
			<main id="dashboard" className={`${isThemeDarkMode && 'dark-mode'} ${isGutterOnlyBody && 'isGutterOnlyBody'}`}>
				<Routes />
			</main>
		</>
	);
};

export default AppTerritory;
