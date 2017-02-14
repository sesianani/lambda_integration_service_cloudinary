const eventRunner = require('./app/index.js');

exports.handler = function (event, context) {
    eventRunner.run(event, function(result){
        return context.done(null, result);
    });
};