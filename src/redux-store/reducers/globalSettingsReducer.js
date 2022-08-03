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
				selectedNavWidth: navWidth,
			};
		case 'SET_THEME_GUTTER':
			let { gutter } = action?.payload;
			return {
				...state,
				selectedGutter: gutter,
			};
		case 'SET_THEME_RADIUS':
			let { radius } = action?.payload;
			return {
				...state,
				selectedRadius: radius,
			};
		case 'SET_THEME_FONT_SIZE':
			let { fontSize } = action?.payload;
			return {
				...state,
				selectedFontSize: fontSize,
			};
		case 'NAVIGATION_COLLAPSED':
			return {
				...state,
				isNavCollapsed: action?.payload,
			};

		default:
			// If this reducer doesn't recognize the action type, or doesn't
			// care about this specific action, return the existing state unchanged
			return state;
	}
}

export default globalSettingsReducer;
