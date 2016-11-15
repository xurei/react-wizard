const React = require ("react");
const ReactDOM = require ("react-dom");
const MainView = require ("./react-mainview");

import { Router, Route, Link, browserHistory } from 'react-router'

const Page1 = require('./pages/page1');
const Page404 = require('./pages/page404');
const Demo = require('./pages/demo');

//Rendering the UI
ReactDOM.render(
	<Router history={browserHistory}>
		<Route path="/" component={MainView}>
			<Route path="page1" component={Page1}/>
			<Route path="demo" component={Demo}/>
			<Route path="*" component={Page404}/>
		</Route>
	</Router>,
	document.getElementById('content')
);

//TODO fadeout of the loading view
var loadingView = document.getElementById('loading-view');
loadingView.style.display = "none";