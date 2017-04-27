import {Settings, buildSettings} from '../../src/lib/settings';
import {expect} from '../test-setup';

describe('settings', () => {
	let settings;
	beforeEach(() => {
		settings = new Settings();
	});

	describe('buildSettings', () => {
		it('combines the settings with the default settings', () => {
			const settings = buildSettings(true, {a:'b'});
			expect(settings.get('a')).to.eql('b');
			expect(settings).to.not.have.property('a');
			expect(settings.get('access_token')).to.be.eql(null);   // is null by default
		});

		it('can apply the settings on the outer object', () => {
			const settings = buildSettings(false, {a:'b'});
			expect(settings).to.have.property('a').eql('b');
			expect(settings.get('a')).to.be.eql('b');
		});

		it('overrides the settings from the provided settings', () => {
			const settings = buildSettings(true, {a:'b', access_token:'abcd'});
			expect(settings.get('a')).to.eql('b');
			expect(settings.get('access_token')).to.be.eql('abcd');
		});
	});


});