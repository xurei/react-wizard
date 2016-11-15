const wizardPageValidity = (state = [], action) => {
	switch (action.type) {
		case 'VALIDITY_CHANGE':
			var newState = Object.assign({}, state);
			newState[action.pageIndex] = action.validity;
			return newState;
		default:
			return state;
	}
};

module.exports = wizardPageValidity;