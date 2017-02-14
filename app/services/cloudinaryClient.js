const dotenv = require('dotenv');
dotenv.load();
const cloudinary = require('cloudinary').v2;
/**
 * Function to Initialize Cloudinary Client and Upload File to Cloudinary
 * return string
 */
exports.upload_file = function (event, contextCallback) {
    var imageURL = event.imageURL
    //Cloudinary Initialization Code
    //Set from environment variables
    cloudinary.config({
        cloud_name: process.env.CLOUD_NAME,
        api_key: process.env.API_KEY,
        api_secret: process.env.API_SECRET
    });

    //Perform check to see if image URL is empty
    if (imageURL == '') {
        return contextCallback(null, {
            statusCode: 404,
            message: 'Image URL cannot be empty'
        });
    } else {
        console.log();
        console.log("** File Upload");
        cloudinary.uploader.upload(imageURL)
            .then(function (image) {
                return contextCallback(null, {
                    statusCode: 200,
                    message: 'Image upload complete!',
                    data: image
                });
            }).catch(function (error) {
                return contextCallback(null, {
                    statusCode: 404,
                    message: 'Image upload failed',
                    data: error
                });
            });
    }
}
