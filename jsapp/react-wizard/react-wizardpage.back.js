const React = require ("react");
const isset = require ("./isset");

var View = React.createClass({
	displayName: 'WizardPage',
	
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
		var page = this.props.page;
		
		return (
			<div style={{border: 'solid 1px blue'}}>{page}</div>
		)
	}
});

module.exports = View;