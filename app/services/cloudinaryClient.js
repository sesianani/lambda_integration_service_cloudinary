/**
 * Created by Support on 08/09/2016.
 */
var cloudinary = require('cloudinary');

exports.upload_file= function(event, cb){
    cloudinary.config({
        cloud_name: process.env.CLOUD_NAME,
        api_key: process.env.API_KEY,
        api_secret: process.env.API_SECRET
    });

    cloudinary.uploader.upload(event.imageURL, function(result) {
        cb(result);
    });


}
