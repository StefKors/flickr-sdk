var flickr = require('..')(function auth() { /* noop */ });
var assert = require('assert');

describe('flickr.photosets.create', function () {

	it('requires "title"', function () {

		assert.throws(function () {
			flickr.photosets.create({
				primary_photo_id: '_'
			});
		}, function (err) {
			return err.message === 'Missing required argument "title"';
		});

	});

	it('requires "primary_photo_id"', function () {

		assert.throws(function () {
			flickr.photosets.create({
				title: '_'
			});
		}, function (err) {
			return err.message === 'Missing required argument "primary_photo_id"';
		});

	});

	it('returns a Request instance', function () {
		var req = flickr.photosets.create({
			title: '_',
			primary_photo_id: '_'
		});

		assert.equal(req.method, 'POST');
		assert.equal(req.url, 'https://api.flickr.com/services/rest');
		assert.equal(req.qs.format, 'json');
		assert.equal(req.qs.nojsoncallback, '1');
		assert.equal(req.qs.method, 'flickr.photosets.create');
		assert.equal(req.qs.title, '_');
		assert.equal(req.qs.primary_photo_id, '_');
	});

});
