const path=require('path'); //使用__dirname变量，获取当前文件的绝对路径，避免在不同操作系统之间的路径问题
const HtmlWebpackPlugin = require('html-webpack-plugin');//使webpack自动按照模板将Html文件添加进打包目录中
const {CleanWebpackPlugin}=require('clean-webpack-plugin');



module.exports={
    mode:'development',//现在为开发环境
    entry:'./src/index.js',  //相对路径
    output:{
        path:path.resolve(__dirname,"build"),  //打包文件的输出路径
        filename:'[name].[hash].bundle.js',  //打包文件名
    },
    devtool:'cheap-module-eval-source-map',
    devServer:{
        contentBase: path.resolve(__dirname, 'build'),
        inline: true,
        open:true,
        host: 'localhost', // can be overwritten by process.env.HOST
        port:8081
    },
    module: {
        rules: [
            { test: /\.js$/, 
                exclude: /node_modules/,//不会去翻译node_modules中的文件
                loader: "babel-loader" ,
                options:{
                    "presets":[["@babel/preset-env",{
                        useBuiltIns:'usage'//按需加入es6新特性
                    }],
                    "@babel/preset-react"
                    ]
                }
            },{
                test:/\.(css|less)$/,
                use:[
                    {
                        loader:"style-loader"
                    }, {
                        loader: "css-loader" // translates CSS into CommonJS
                    }, {
                        loader: "less-loader" // compiles Less to CSS
                    }
                ]
            },{
                test: [/\.gif$/, /\.jpe?g$/, /\.png$/],
                loader: 'url-loader',
                options: {
                  limit: 10000, //1w字节以下大小的图片会自动转成base64
                },
            }
        ]
      },
    plugins: [new HtmlWebpackPlugin({
        template: './public/index.html', //指定模板路径
        filename: 'index.html', //指定文件名
    }),new CleanWebpackPlugin()],//打包前，帮助将dist内的文件清除掉
  
}