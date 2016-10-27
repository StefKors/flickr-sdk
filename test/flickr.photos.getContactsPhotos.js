var flickr = require('..')();
var assert = require('assert');

describe('flickr.photos.getContactsPhotos', function () {

	it('returns a Request instance', function () {
		var req = flickr.photos.getContactsPhotos({});

		assert.equal(req.method, 'GET');
		assert.equal(req.url, 'https://api.flickr.com/services/rest');
	});

});