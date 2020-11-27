const ESLintPlugin = require('eslint-webpack-plugin');

module.exports = {
    webpack: (config) => {
        config.plugins = [
            ...config.plugins,
            new ESLintPlugin()
        ]
        return config;
    }
}