var flickr = require('..')(function auth() { /* noop */ });
var assert = require('assert');

describe('flickr.stats.getCollectionReferrers', function () {

	it('requires "date"', function () {

		assert.throws(function () {
			flickr.stats.getCollectionReferrers({
				domain: '_'
			});
		}, function (err) {
			return err.message === 'Missing required argument "date"';
		});

	});

	it('requires "domain"', function () {

		assert.throws(function () {
			flickr.stats.getCollectionReferrers({
				date: '_'
			});
		}, function (err) {
			return err.message === 'Missing required argument "domain"';
		});

	});

	it('returns a Request instance', function () {
		var req = flickr.stats.getCollectionReferrers({
			date: '_',
			domain: '_'
		});

		assert.equal(req.method, 'GET');
		assert.equal(req.url, 'https://api.flickr.com/services/rest');
		assert.equal(req.qs.format, 'json');
		assert.equal(req.qs.nojsoncallback, '1');
		assert.equal(req.qs.method, 'flickr.stats.getCollectionReferrers');
		assert.equal(req.qs.date, '_');
		assert.equal(req.qs.domain, '_');
	});

});
