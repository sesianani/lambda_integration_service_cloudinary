require('dotenv').config();
module.exports = function (grunt) {
    grunt.loadNpmTasks('grunt-aws-lambda');

    grunt.initConfig({
        lambda_invoke: {
            default: {
                options: {
                    file_name: 'handler.js'
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
                arn: process.env.AWS_LAMBDA_ARN,
                options: {
                    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
                    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
                    region: process.env.AWS_REGION,
                    aliases: process.env.LAMBDA_STAGE
                }
            }
        }
    });

    grunt.registerTask('default', ['lambda_invoke']);
    grunt.registerTask('deploy', ['lambda_package', 'lambda_deploy']);


}