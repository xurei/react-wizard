const React = require ("react");
const ReactDOM = require ("react-dom");
const MainView = require ("./react-mainview");

//Rendering the UI
ReactDOM.render(
	<MainView/>,
	document.getElementById('content')
);

//TODO fadeout of the loading view
var loadingView = document.getElementById('loading-view');
loadingView.style.display = "none";