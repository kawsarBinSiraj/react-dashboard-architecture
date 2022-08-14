import _ from 'lodash';
// initialState
const initialState = {};

// Use the initialState as a default value
function globalSettingsReducer(state = initialState, action) {
	// The reducer normally looks at the action type field to decide what happens
	switch (action.type) {
		case 'SET_THEME_COLOR':
			let { color } = action?.payload;
			return {
				...state,
				selectedThemeColor: color,
			};
		case 'SET_THEME_FONT_COLOR':
			return {
				...state,
				selectedFontColor: action?.payload,
			};
		case 'SET_THEME_FONT':
			let { font } = action?.payload;
			return {
				...state,
				selectedThemeFont: font,
			};
		case 'SET_THEME_NAV_WIDTH':
			let { navWidth } = action?.payload;
			return {
				...state,
				selectedNavWidth: parseInt(navWidth),
			};
		case 'SET_THEME_GUTTER':
			let { gutter, isGutterOnlyBody } = action?.payload;
			return {
				...state,
				isGutterOnlyBody,
				selectedGutter: parseInt(gutter),
			};
		case 'SET_THEME_RADIUS':
			let { radius } = action?.payload;
			return {
				...state,
				selectedRadius: parseInt(radius),
			};
		case 'SET_THEME_FONT_SIZE':
			let { fontSize } = action?.payload;
			return {
				...state,
				selectedFontSize: parseInt(fontSize),
			};
		case 'NAVIGATION_COLLAPSED':
			return {
				...state,
				isNavCollapsed: action?.payload,
			};
		case 'SET_THEME_MODE':
			return {
				...state,
				isThemeDarkMode: action?.payload,
			};
		case 'INCREASE_FONT_SIZE':
			return {
				...state,
				selectedFontSize: !_.isNil(state?.selectedFontSize) ? parseInt(state?.selectedFontSize) + 2 : 16,
			};
		case 'DECREASE_FONT_SIZE':
			return {
				...state,
				selectedFontSize: !_.isNil(state?.selectedFontSize) ? parseInt(state?.selectedFontSize) - 2 : 16,
			};
		case 'RESET_FONT_SIZE':
			return {
				...state,
				selectedFontSize: 14,
			};
		case 'SET_HEADER_POSITION':
			let { position } = action?.payload;
			return {
				...state,
				selectedHeaderPosition: position,
			};

		case 'GLOBAL_SETTING_REDUCER_RESET':
			return initialState;
		default:
			// If this reducer doesn't recognize the action type, or doesn't
			// care about this specific action, return the existing state unchanged
			return state;
	}
}

export default globalSettingsReducer;
