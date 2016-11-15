const wizardPageValidity = (state = [], action) => {
	switch (action.type) {
		case 'VALIDITY_CHANGE':
			var newState = Object.assign({}, state);
			newState[action.pageIndex] = action.validity;
			return newState;
		case 'CANCEL':
			return [];
		default:
			return state;
	}
};

module.exports = wizardPageValidity;