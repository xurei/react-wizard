import 'babel-polyfill'
import {expect} from "chai"
const actions = require('../actions');

var assert = require('assert');
describe('Redux', function() {
	describe('actions', function() {
		it('should create an action when nextPage() is called', () => {
			const expectedAction = {
				type: "NEXT_PAGE"
			};
			expect(actions.nextPage()).to.deep.equal(expectedAction)
		});
		
		it('should create an action when prevPage() is called', () => {
			const expectedAction = {
				type: "PREV_PAGE"
			};
			expect(actions.prevPage()).to.deep.equal(expectedAction)
		});
		
		it('should create an action when cancel() is called', () => {
			const expectedAction = {
				type: "CANCEL"
			};
			expect(actions.cancel()).to.deep.equal(expectedAction)
		});
		
		it('should create an action when finish() is called', () => {
			const expectedAction = {
				type: "FINISH"
			};
			expect(actions.finish()).to.deep.equal(expectedAction)
		});
		
		it('should create an action when validityChange() is called', () => {
			const expectedAction = {
				type: "VALIDITY_CHANGE",
				pageIndex: 42,
				validity: true
			};
			expect(actions.validityChange(42, true)).to.deep.equal(expectedAction);
			
			const expectedAction2 = {
				type: "VALIDITY_CHANGE",
				pageIndex: 12,
				validity: false
			};
			expect(actions.validityChange(12, false)).to.deep.equal(expectedAction2)
		});
		
		it('should create an action when dataChange() is called', () => {
			const expectedAction = {
				type: "DATA_CHANGE",
				pageIndex: 42,
				data: "plop"
			};
			expect(actions.dataChange(42, "plop")).to.deep.equal(expectedAction);
			
			const expectedAction2 = {
				type: "DATA_CHANGE",
				data: { deep: "value" },
				pageIndex: 12,
			};
			expect(actions.dataChange(12, { deep: "value" })).to.deep.equal(expectedAction2)
		});
	});
});

