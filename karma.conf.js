var path = require('path');

module.exports = function(config) {
    config.set({
        basePath: '.',
        frameworks: ['jasmine'],
        files: [
            './test-index.js',
        ],
        preprocessors: {
            './test-index.js': ['webpack', 'sourcemap'],
        },
        webpack: {
            devtool: 'inline-source-map',
            module: {
                loaders: [{
                    test: /\.js$/,
                    exclude: /node_modules/,
                    loader: 'babel-loader', 
                    query: {
                        presets: ['es2015'],
                        plugins: [
                            ['istanbul', {
                                exclude: [
                                    'node_modules',
                                    '**/*.spec.js',
                                    'test-index.js',
                                    'app.js',
                                    'constants/*.js'
                                ],
                            }]
                        ]
                    }
                }, {
                    test: /\.html$/,
                    loader: 'raw-loader'
                }, {
                    test: /\.css$/,
                    loader: 'style-loader!css-loader'
                }, {
                    test: /\.styl$/,
                    loader: 'style-loader!css-loader!stylus-loader'
                }, {
                    test: /\.(eot|svg|ttf|woff|woff2)$/,
                    loader: 'file-loader?name=public/fonts/[name].[ext]'
                }, {
                    test: /\.json$/,
                    loader: 'json'
                }, {
                    test: /.*\.(gif|png|jpe?g|svg)$/i,
                    loaders: [
                        'file?hash=sha512&digest=hex&name=[hash].[ext]',
                        'image-webpack'
                    ]
                }]
            },
            resolve: {
                extensions: ['.css', '.js', '.styl', '.json', 'index.js']
            }
        },
        logLevel: config.LOG_INFO,
        webpackMiddleware: {
            stats: {
                colors: true
            },
            noInfo: true
        },
        reporters: ['progress', 'coverage'],
        coverageReporter: {
            reporters: [{
                type: 'html',
                dir: 'reports/coverage',
                file: 'coverage.html'
            }],
        },
        port: 8085,
        colors: true,
        autoWatch: false,
        browsers: ['Chrome'],
        captureTimeout: 60000,
        singleRun: true,
        plugins: [
            require('karma-webpack'),
            require('karma-jasmine'),
            require('karma-chrome-launcher'),
            require('karma-coverage'),
            require('karma-sourcemap-loader'),
        ]
    });
}