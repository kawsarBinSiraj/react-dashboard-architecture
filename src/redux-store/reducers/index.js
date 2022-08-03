import { combineReducers } from 'redux';
import userReducer from './userReducer';
import globalSettingsReducer from './globalSettingsReducer';

const rootReducer = combineReducers({
	userReducer,
	globalSettingsReducer,
});

export default rootReducer;
