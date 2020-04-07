const config = require('./protractor.config').config;

config.capabilities = {
    browserName: 'chrome',
    chromeOptions: {
        args: ['--no-sandbox']
    }
};

exports.config = config;