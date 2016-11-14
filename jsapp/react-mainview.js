const React = require ("react");

const Wizard = require("./react-wizard/react-wizard");
const WizardPage = require("./react-wizard/react-wizardpage");

var MainView = React.createClass({
	getInitialState: function() {
		/*var hash = document.location.hash;
		if (Util.isset(hash) && hash.length > 0)
		{
			hash = hash.substr(1);
			var route = hash.split("/");
			if (route[0] == "game" && route.length >= 4) {
				return { gameId: route[1], playerId: route[2], playerSecret: route[3] };
			}
		}
		return { gameId:null };*/
		return {};
	},
	componentDidMount: function() {
		/*var me = this;
		GameJoinStore.register(function() {
			console.log("Joined game");
			var data = GameJoinStore.getGame();
			console.log(data);
			document.location.hash = "#game/" + data.id + "/" + data.player.id + "/" + data.player.secret;
			me.setState({gameId: data.id, playerId: data.player.id, playerSecret: data.player.secret});
		});*/
	},
	shouldComponentUpdate: function(nextProps, nextState) {
		return JSON.stringify(this.props) !== JSON.stringify(nextProps) || JSON.stringify(this.state) !== JSON.stringify(nextState);
	},
	
	render: function() {
		/*if (Util.isset(this.state.gameId)) {
			return (
					<div>
						<GameView gameId={this.state.gameId} playerId={this.state.playerId} playerSecret={this.state.playerSecret}></GameView>
					</div>
			);
		}
		else {
			return (
					<div>
						<GamesView></GamesView>
					</div>
			);
		}*/
		
		 /*onCancel={onCancel}
		 onComplete={onComplete}*/
		/*<WizardPage page={MyWizPage1}/>
		 <WizardPage page={MyWizPage2}/>
		 <WizardPage page={MyWizPage3}/>*/
		
		return (
			<Wizard>
				<WizardPage page="page1"/>
				<WizardPage page="page2"/>
				<WizardPage page="page3"/>
			</Wizard>
		)
	}
});

module.exports = MainView;