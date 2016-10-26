var flickr = require('..')();
var assert = require('assert');

describe('flickr.photos.geo.removeLocation', function () {

	it('requires "photo_id"', function () {

		assert.throws(function () {
			flickr.photos.geo.removeLocation({});
		}, function (err) {
			return err.message === 'Missing required argument "photo_id"';
		});

	});

	it('returns a Request instance', function () {
		var req = flickr.photos.geo.removeLocation({ photo_id: '_' });

		assert.equal(req.method, 'POST');
		assert.equal(req.url, 'https://api.flickr.com/services/rest');
	});

});
