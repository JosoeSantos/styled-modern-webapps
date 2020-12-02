const ESLintPlugin = require('eslint-webpack-plugin');
const withImages = require('next-images');

module.exports = withImages({
    webpack: (config) => {
        config.plugins = [
            ...config.plugins,
            new ESLintPlugin()
        ]
        return config;
    }
});