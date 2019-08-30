import React from 'react';
import ReactDOM from 'react-dom';
import './assets/StyleLoader';
import Add from './pages/Add';
import List from './pages/List';
import {store} from './redux/store/index';
import { Provider } from 'react-redux';

ReactDOM.render(
	<Provider store={store}>
		<Add />
		<List/>
	</Provider>,
	document.getElementById('root')
);
