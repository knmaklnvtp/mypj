const webpack = require('webpack')
const htmlWebpackPlugin = require('html-webpack-plugin')
const clientWebpackPlugin = require('clean-webpack-plugin')
const path = require('path')

module.exports = (env) => {

    process.env.NODE_ENV = env.type

    // Webpack config here
    const webpackConfig = {
        entry: {
            application: path.join(__dirname, '../client/app.jsx'),
            lib: [
                'react',
                'react-dom',
                'redux'
            ]
        },
        output: {
            filename: `[name]-[hash]-${new Date().getTime()}.js`,
            path: path.join(__dirname, '../dist/')
        },
        module: {
            rules: [{
                test: /\.(js|jsx)$/,
                exclude: /(node_modules)/,
                loader: 'babel-loader',
            }]
        },
        plugins: [
            new clientWebpackPlugin(['dist'], {
                root: path.join(__dirname, '../'),
                // dry: true will not remove file, default is false
                dry: false,
                // Write log to console
                verbose: true
            }),
            new htmlWebpackPlugin({
                filename: 'master.pug',
                template: path.join(__dirname, '../public/views/index.pug'),
                filetype: '*.pug'
            }),
            new webpack.optimize.CommonsChunkPlugin({
                filename: `lib-[chunkhash]-${new Date().getTime()}.js`,
                name: 'lib',
                minChunks: Infinity
            }),
            new webpack.optimize.CommonsChunkPlugin({
                name: 'metas',
                chunks: ['lib'],
                filename: `metas-[hash]-${new Date().getTime()}.js`
            }),
            new webpack.optimize.UglifyJsPlugin(),
            // Define production or devlopment
            new webpack.DefinePlugin({
                'process.env': {
                    'NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'production')
                }
            }),
            new webpack.EnvironmentPlugin(['NODE_ENV']),
            new webpack.HotModuleReplacementPlugin(),
            new webpack.NamedModulesPlugin()
        ]
    }

    return [webpackConfig]
}