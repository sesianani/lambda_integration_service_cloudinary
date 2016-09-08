/**
 * Created by Selasie Anani on 02/08/2016.
 */
var config = require('./.env.json');
 module.exports = function(grunt){
     grunt.loadNpmTasks('grunt-aws-lambda');

     grunt.initConfig({
         lambda_invoke: {
             default: {
                 options: {
                     file_name:'handler.js'
                 }
             }
         },
         lambda_package: {
             default: {
                 options: {
                     include_files: ['app/**'],
                 },
             },
         },
         lambda_deploy: {
             default: {
                 arn: config.AWS_LAMBDA_ARN,
                 options: {
                     accessKeyId: config.AWS_ACCESS_KEY_ID,
                     secretAccessKey: config.AWS_SECRET_ACCESS_KEY,
                     region: config.AWS_REGION,
                     aliases:config.LAMBDA_STAGE
                 }
             }
         }
     });

     grunt.registerTask('default', ['lambda_invoke']);
     grunt.registerTask('deploy', ['lambda_package', 'lambda_deploy']);


 }