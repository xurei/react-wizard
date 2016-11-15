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
		var tdstyle = {
			paddingRight: '10px',
			lineHeight: "2em",
		};
		
		return (
			<div>
				<h2>Let's go schizophrenic : Peer-review of my own work</h2>
				<table>
					<tr><td style={tdstyle}>• Pretty good reusability</td><td><span className="btn btn-xs btn-success">GOOD</span></td></tr>
					<tr><td style={tdstyle}>• Wizard 100% decoupled from the rest</td><td><span className="btn btn-xs btn-success">GOOD</span></td></tr>
					<tr><td style={tdstyle}>• Proptypes not set everywhere</td><td><span className="btn btn-xs btn-warning">TO IMPROVE</span></td></tr>
					<tr><td style={tdstyle}>• Code quality can be improved</td><td><span className="btn btn-xs btn-warning">TO IMPROVE</span></td></tr>
					<tr><td style={tdstyle}>• Not much styling</td><td><span className="btn btn-xs btn-warning">TO IMPROVE</span></td></tr>
					<tr><td style={tdstyle}>• Not yet documented</td><td><span className="btn btn-xs btn-danger">BAD</span></td></tr>
					<tr><td style={tdstyle}>• Test coverage is low</td><td><span className="btn btn-xs btn-danger">BAD</span></td></tr>
				</table>
				
				<h3 className="text-center">Is it ready to production ?</h3>
				<h4 className="text-center">Probably not</h4>
				<div style={{height: "30px"}}></div>
			</div>
		)
	}
}

module.exports = Page;