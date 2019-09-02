import React from 'react';
import ReactDOM from 'react-dom';
import { Helmet } from 'react-helmet';
import './assets/StyleLoader';
import Add from './pages/Add';
import List from './pages/List';
import { store } from './redux/store/index';
import { Provider } from 'react-redux';

ReactDOM.render(
	<Provider store={store}>
		<div>
			<Helmet>
				<meta name="description" content="Helmet application" />
				<meta charset="utf-8" />
				<link rel="shortcut icon" href="./L.jpg" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<meta name="theme-color" content="#000000" />
				<link rel="manifest" href="%PUBLIC_URL%/manifest.json" />
				<title>Laleh</title>
			</Helmet>
			<Add />
			<List />
		</div>
	</Provider>,
	document.getElementById('root')
);
