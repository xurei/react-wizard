const React = require ("react");
const ReactRedux = require('react-redux');
const Provider = ReactRedux.Provider;
const redux = require('redux');
const App =  require('./reducers');

let store = redux.createStore(App);

const WizardContent = require('./react-wizard-content');

var View = React.createClass({
	displayName: 'Wizard',
	
	render: function() {
		return (
			<Provider store={store}>
				<WizardContent>
					{this.props.children}
				</WizardContent>
			</Provider>
		);
	},
});

module.exports = View;