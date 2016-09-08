/**
 * Created by Support on 07/08/2016.
 */
var cloudinaryClient = require('./services/cloudinaryClient.js');
require('dot-env');

exports.run = function (event, cb) {
    cloudinaryClient.upload_file(event, function(result){
        cb(result);
    })
}