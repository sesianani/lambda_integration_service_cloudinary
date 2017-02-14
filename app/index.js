const Promise = require("bluebird");
const cloudinaryClient = Promise.promisifyAll(require('./services/cloudinaryClient.js'));

exports.run = function (event, cb) {
    cloudinaryClient.upload_fileAsync(event)
        .then(function (response) {
            return cb(response);
        }).catch(function (error) {
            return cb(error);
        });
}