'use strict';

jest.mock('fs');
jest.mock('mrm-core/src/util/log', () => ({
	added: jest.fn(),
}));

const fs = require.requireActual('fs');
const path = require('path');
const { omitBy } = require('lodash');
const { getConfigGetter } = require('mrm');
const vol = require('memfs').vol;
const task = require('./index');

const json = o => JSON.stringify(o, null, '  ');

afterEach(() => vol.reset());

it('should add a readme', () => {
	vol.fromJSON({
		[`${__dirname}/templates/Readme.md`]: fs.readFileSync(
			path.join(__dirname, 'templates/Readme.md')
		),
		'/package.json': json({
			name: 'unicorn',
		}),
	});

	task(
		getConfigGetter({
			name: 'Gendalf',
			url: 'http://middleearth.com',
			github: 'gendalf',
		})
	);

	expect(omitBy(vol.toJSON(), (v, k) => k.startsWith(__dirname))).toMatchSnapshot();
});
