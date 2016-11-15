const React = require ("react");
const ReactRedux = require('react-redux');
const Provider = ReactRedux.Provider;
const redux = require('redux');
const App =  require('./reducers');

let store = redux.createStore(App, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

const WizardNavigator = require('./react-wizard-navigator');
const WizardPage = require("./react-wizardpage");

var View = React.createClass({
	displayName: 'Wizard',
	
	render: function() {
		return (
			<Provider store={store}>
				<WizardNavigator {...this.props}>
					{this.props.children}
				</WizardNavigator>
			</Provider>
		);
	},
	
	propTypes: {
		children: React.PropTypes.oneOfType([
			React.PropTypes.arrayOf(React.PropTypes.instanceOf(WizardPage)),
			React.PropTypes.node,
		]),
		onCancel: React.PropTypes.func,
		onComplete: React.PropTypes.func
	}
});

module.exports = View;