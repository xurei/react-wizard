const React = require ("react");
const ReactRedux = require('react-redux');
const redux = require('redux');

const actions = require('./actions');

var View = React.createClass({
	displayName: 'WizardContent',
	getInitialState: function() {
		return {};
	},
	componentDidMount: function() {
	},
	
	render: function() {
		var onCancel = this.props.onCancel;
		var onComplete = this.props.onComplete;
		
		var children = this.props.children;
		
		var wizardPage;
		
		var currentPageIndex = this.props.wizardPageIndex;
		
		if (currentPageIndex == -1) {
			wizardPage = (
				<h1 className="text-center">Thank you !</h1>
			)
		}
		
		var nbPages = 0;
		for (var ch of children) {
			
			if (ch.type.displayName === "WizardPage") {
				if (nbPages == currentPageIndex) {
					wizardPage = ch;
				}
				++nbPages;
			}
		}
		
		//Determine wheter or not to show some buttons
		var showNext = (currentPageIndex >= 0 && currentPageIndex+1 < nbPages);
		var showFinish = (currentPageIndex >= 0 && !showNext);
		var showPrev = (currentPageIndex >= 0);
		var showCancel = (currentPageIndex >= 0);
		var showPageCounter = (currentPageIndex >= 0);
		
		return (
			<div style={{border: 'solid 1px silver', padding: "8px 7px"}}>
				
				<div className="page" style={{minHeight: "300px"}}>{wizardPage}</div>
				
				<div className="wizard-view-navigation">
					<div className="text-center">
						<button className="btn btn-primary"
								onClick={this.props.onClickPrev}
								disabled={currentPageIndex <= 0}
								style={{display: (showPrev) ? "inline-block":"none"}}>Back</button>
						&nbsp; {showPageCounter ? (currentPageIndex+1 + " / " + nbPages) : ('')} &nbsp;
						<button className="btn btn-primary"
								onClick={this.props.onClickNext}
								style={{display: (showNext) ? "inline-block":"none"}}>Next</button>
						<button className="btn btn-success"
								onClick={this.props.onClickFinish}
								style={{display: (showFinish) ? "inline-block":"none"}}>Finish</button>
						<button className="btn btn-warning pull-right"
								onClick={this.props.onClickCancel}
								style={{display: (showCancel) ? "inline-block":"none"}}>Cancel</button>
					</div>
				</div>
			</div>
		)
	}
	
});

function mapStateToProps(state) {
	return {
		wizardPageIndex: state.wizardPageIndex
	}
}

function mapDispatchToProps(dispatch) {
	return {
		onClickNext: () => {
			dispatch(actions.nextPage())
		},
		onClickPrev: () => {
			dispatch(actions.prevPage())
		},
		onClickCancel: () => {
			dispatch(actions.cancel())
		},
		onClickFinish: () => {
			dispatch(actions.finish())
		}
	}
}

module.exports = ReactRedux.connect(
		mapStateToProps,
		mapDispatchToProps
)(View);