import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

import App from './App';

import { store } from './redux/store';
import Store from './store';

const rootElem = document.getElementById('root');

export const AuthStore = new Store();

//console.log(AuthStore.login({ username: 'Admin123', password: 'Admin321' }));

if (rootElem) {
	const root = ReactDOM.createRoot(rootElem);

	root.render(
		<BrowserRouter>
			<Provider store={store}>
				<App />
			</Provider>
		</BrowserRouter>,
	);
}
