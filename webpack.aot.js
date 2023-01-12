const HtmlWebpackPlugin = require('html-webpack-plugin');
const {AngularWebpackPlugin} = require('@ngtools/webpack');
const path = require('path');


module.exports = {
    mode:'production',
    entry: './src/main_aot.ts',
    resolve: {
        extensions: ['.ts', '.js']
    },
    module: {
        rules: [
            {
                test: /\.ts$/,
                use: '@ngtools/webpack'
            },
            {
                test: /\.html$/,
                use: [{ loader: 'html-loader', options: { esModule: false } }],

            },
            {
                test: /\.scss$/,
                use: [
                    {
                        loader: "raw-loader",
                        options: {
                            esModule: false,
                        }
                    },
                    {
                        loader: "sass-loader",
                        options: {
                            sourceMap: true,
                        },
                    },
                ],
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({ template: './src/index.html' }),
        new AngularWebpackPlugin({
            tsConfigPath: './tsconfig_prod.json',
            entryModule: path.resolve(__dirname, 'src/app/app.module#AppModule')
          }),
    ]
}