const wizardPageIndex = (state = 0, action) => {
	switch (action.type) {
		case 'NEXT_PAGE':
			return state+1;
		case 'PREV_PAGE':
			return state-1;
		case 'FINISH':
			return -1;
		case 'CANCEL':
			return 0;
		default:
			return state;
	}
};

module.exports = wizardPageIndex;