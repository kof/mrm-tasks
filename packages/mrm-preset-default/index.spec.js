it('should have codecov task', () => {
	const task = require('./codecov/index.js');
	expect(task).toEqual(expect.any(Function));
	expect(task.description).toMatch('Codecov');
});

it('should have contributing task', () => {
	const task = require('./contributing/index.js');
	expect(task).toEqual(expect.any(Function));
	expect(task.description).toMatch('contributing');
});

it('should have editorconfig task', () => {
	const task = require('./editorconfig/index.js');
	expect(task).toEqual(expect.any(Function));
	expect(task.description).toMatch('EditorConfig');
});

it('should have eslint task', () => {
	const task = require('./eslint/index.js');
	expect(task).toEqual(expect.any(Function));
	expect(task.description).toMatch('ESLint');
});

it('should have gitignore task', () => {
	const task = require('./gitignore/index.js');
	expect(task).toEqual(expect.any(Function));
	expect(task.description).toMatch('gitignore');
});

it('should have jest task', () => {
	const task = require('./jest/index.js');
	expect(task).toEqual(expect.any(Function));
	expect(task.description).toMatch('Jest');
});

it('should have license task', () => {
	const task = require('./license/index.js');
	expect(task).toEqual(expect.any(Function));
	expect(task.description).toMatch('license');
});

it('should have lintstaged task', () => {
	const task = require('./lintstaged/index.js');
	expect(task).toEqual(expect.any(Function));
	expect(task.description).toMatch('lint-staged');
});

it('should have package task', () => {
	const task = require('./package/index.js');
	expect(task).toEqual(expect.any(Function));
	expect(task.description).toMatch('package.json');
});

it('should have prettier task', () => {
	const task = require('./prettier/index.js');
	expect(task).toEqual(expect.any(Function));
	expect(task.description).toMatch('Prettier');
});

it('should have readme task', () => {
	const task = require('./readme/index.js');
	expect(task).toEqual(expect.any(Function));
	expect(task.description).toMatch('readme');
});

it('should have semantic-release task', () => {
	const task = require('./semantic-release/index.js');
	expect(task).toEqual(expect.any(Function));
	expect(task.description).toMatch('semantic-release');
});

it('should have styleguidist task', () => {
	const task = require('./styleguidist/index.js');
	expect(task).toEqual(expect.any(Function));
	expect(task.description).toMatch('React Styleguidist');
});
it('should have stylelint task', () => {
	const task = require('./stylelint/index.js');
	expect(task).toEqual(expect.any(Function));
	expect(task.description).toMatch('Stylelint');
});

it('should have travis task', () => {
	const task = require('./travis/index.js');
	expect(task).toEqual(expect.any(Function));
	expect(task.description).toMatch('Travis CI');
});

it('should have typescript task', () => {
	const task = require('./typescript/index.js');
	expect(task).toEqual(expect.any(Function));
	expect(task.description).toMatch('TypeScript');
});
