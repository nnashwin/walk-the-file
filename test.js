import test from 'ava';
const findFile = require('./index');
const path = require('path');

test('finds shallowly first occurrence of file in nested dirs', t => {
	const testDir = path.join('fixture', 'testDeep');
	t.is(findFile(testDir, 'index'), path.join('fixture', 'testDeep', 'index'));
});
