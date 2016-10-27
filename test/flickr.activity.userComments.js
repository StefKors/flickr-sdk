var flickr = require('..')();
var assert = require('assert');

describe('flickr.activity.userComments', function () {

	it('returns a Request instance', function () {
		var req = flickr.activity.userComments({});

		assert.equal(req.method, 'GET');
		assert.equal(req.url, 'https://api.flickr.com/services/rest');
	});

});