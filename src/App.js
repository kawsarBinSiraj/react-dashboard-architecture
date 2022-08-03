import 'react-toastify/dist/ReactToastify.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss';
import { BrowserRouter } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { Provider } from 'react-redux';
import { store, persistor } from './redux-store/Store';
import { PersistGate } from 'redux-persist/integration/react';
import AppTerritory from './AppTerritory';
const axios = require('axios');

/**
 * Axios Global Config
 * @type {string}
 */

axios.defaults.baseURL = process.env.REACT_APP_API_BASE_URL;

function App() {
	return (
		<>
			<Provider store={store}>
				<BrowserRouter basename="/">
					<PersistGate loading={null} persistor={persistor}>
						<AppTerritory />
					</PersistGate>
					<ToastContainer />
				</BrowserRouter>
			</Provider>
		</>
	);
}

export default App;
