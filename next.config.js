const withImages = require('next-images');

module.exports = withImages({
    webpack: (config) => {
        config.plugins = [
            ...config.plugins,
        ]
        return config;
    }
});