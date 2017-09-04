/* eslint-disable no-console */
'use strict';

jest.mock('fs');
jest.mock('mrm-core/src/util/log', () => ({
	added: jest.fn(),
}));
jest.mock('mrm-core/src/npm', () => ({
	uninstall: jest.fn(),
}));

const getConfigGetter = require('../../mrm').getConfigGetter;
const vol = require('memfs').vol;
const task = require('./index');

const json = o => JSON.stringify(o, null, '  ');

const travisYml = `language: node_js
node_js:
  - 8
`;
const packageJson = json({
	name: 'unicorn',
	scripts: {
		'semantic-release': 'semantic-release',
	},
});
const readmeMd = '# Unicorn';

afterEach(() => vol.reset());

it('should add semantic-release', () => {
	vol.fromJSON({
		'/.travis.yml': travisYml,
		'/package.json': packageJson,
		'/Readme.md': readmeMd,
	});

	task(getConfigGetter({}));

	expect(vol.toJSON()).toMatchSnapshot();
});

it('should throw when .travis.yml not found', () => {
	vol.fromJSON({
		'/package.json': packageJson,
	});

	const fn = () => task(getConfigGetter({}));

	expect(fn).toThrowError('Run travis task');
});

it('should throw when semantic-release script not found', () => {
	vol.fromJSON({
		'/.travis.yml': travisYml,
		'/package.json': '{}',
	});

	const fn = () => task(getConfigGetter({}));

	expect(fn).toThrowError('semantic-release needs to add required auth keys');
});