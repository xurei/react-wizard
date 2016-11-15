const React = require ("react");

import { FormGroup, FormControl, ControlLabel, HelpBlock } from 'react-bootstrap';

class Page extends React.Component {
	constructor(props) {
		super(props);
	}
	
	componentDidMount() {
		this.props.onValidityChange(true);
	}
	
	render() {
		return (
			<div>
				<h2>A few things before we start</h2>
				<ul>
					<li>Time spent on the code : ~10h</li>
					<li>First use of Redux with React (I used Flux before)</li>
				</ul>
			</div>
		)
	}
}

module.exports = Page;