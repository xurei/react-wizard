const React = require ("react");

import { FormGroup, FormControl, ControlLabel, HelpBlock } from 'react-bootstrap';

import AceEditor from 'react-ace';

import 'brace/mode/javascript';
import 'brace/theme/monokai';

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
				<h2>Testing</h2>
				<ul>
					<li>Tests are written in Mocha and Chai.</li>
					<li>Only Redux is tested for now.</li>
					<li>React Components not tested yet.</li>
				</ul>
			</div>
		)
	}
}

module.exports = Page;