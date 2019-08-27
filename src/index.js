import React from 'react';
import ReactDOM from 'react-dom';
import './assets/StyleLoader';
import Calculator from './pages/Calculator';
import History from './pages/History';
import store from './redux/store/index';
import { Provider } from 'react-redux';

ReactDOM.render(
	<Provider store={store}>
		<Calculator />
		<History/>
	</Provider>,
	document.getElementById('root')
);
