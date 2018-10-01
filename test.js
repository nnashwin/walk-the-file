import test from 'ava';
import findFile from './index';

test('findFile finds the correct file in a dir which has two nested dirs and only one has the file', t => {
    const expected = "./fixtures/lateLevel/b/index.html"
    t.is(findFile('./fixtures/lateLevel', 'index.html'), expected);
});
 
test('findFile finds the correct file even if it is nested deep in the structure', t => {
    const expected = "./fixtures/nested/dir/furtherNest/index.html"
    t.is(findFile('./fixtures/nested', 'index.html'), expected);
});

test('findFile finds and returns only one version of the file when the nested dir occurs before the filename in the alphabet', t => {
    const expected = "./fixtures/twoLevels/index.html";
    t.is(findFile('./fixtures/twoLevels', 'index.html'), expected);
})

test('findFile finds and returns only one version of the file when the nested dir occurs after the filename in the alphabet', t => {
    const expected = "./fixtures/twoLevelsAfter/index.html";
    t.is(findFile('./fixtures/twoLevelsAfter', 'index.html'), expected);
})
