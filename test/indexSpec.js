var chai = require("chai");
var expect = require('chai').expect;

const cloudinaryClient = require('../app/services/cloudinaryClient.js');

describe('Image upload service', function () {
    it('If imageURL is empty returns Image URL cannot be empty', function () {
        var event = {
            "imageURL": ""
        }
        var message = 'Image URL cannot be empty';
        var statusCode = 404;

        cloudinaryClient.upload_file(event, function (event, data) {
            expect(statusCode).to.equal(data.statusCode);
            expect(message).to.equal(data.message);
        });

    })
    it('If imageURL is not empty but image resource cannot be found returns Image upload failed!', function () {
        var event = {
            "imageURL": "https://static1.squarespace.com/static/5660d313e4b0a5d9e264f418/56643633e4b00c1d30b3f590/56698eaeb204d5bd86916f67/1449758384086/1.jpg"
        }
        var message = 'Image upload failed';
        var statusCode = 404;
        cloudinaryClient.upload_file(event, function (event, data) {
            expect(statusCode).to.equal(data.statusCode);
            expect(message).to.equal(data.message);
        });

    })
    it('If imageURL is not empty and image resource is found returns Image upload complete!!', function () {
        var event = {
            "imageURL": "https://b.fastcompany.net/multisite_files/fastcompany/imagecache/inline-small/inline/2015/09/3050613-inline-i-2-googles-new-logo-copy.png"
        }
        var statusCode = 200;
        var message = "Image upload complete!";
        cloudinaryClient.upload_file(event, function (event, data) {
            expect(statusCode).to.equal(data.statusCode);
            expect(message).to.equal(data.message);
        });

    });
});