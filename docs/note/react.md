## 怎么开发React

## 1.安装

安装脚手架
```
// 国内使用 npm 速度很慢，切换镜像（如果npm教快可以忽略这一步）
npm install -g cnpm --registry=https://registry.npm.taobao.org
npm config set registry https://registry.npm.taobao.org

// 安装脚手架
cnpm install -g create-react-app
```

## 2. 创建项目

```
create-react-app longYi
```

## 3. 运行项目

```
// 进入项目目录
cd longYi
// 运行
npm start
```

## 4. 安装ui库
```
npm install antd --save
```

> 以上是通过脚手架安装的项目，没有webpack配置

下面介绍通过webpack配置来安装项目

## 1. 初始化
```
npm init 
// 然后全部执行回车，相关信息，后面完成项目再修改
```


## 2. 安装webpack
```
// 全局安装---全局安装以后才可以直接在命令行使用webpack
npm install webpack -g
```

## 3. 新建webpack.config.js
```
const path = require('path');

module.exports = {
    entry: './src/index.js', //相对路径
    output: {
        path: path.resolve(__dirname, 'build'), //打包文件的输出路径
        filename: 'bundle.js' //打包文件名
    }
}

```
**如图**
<a data-fancybox title="react" href="/reactNote1.png">![order](/reactNote1.png)</a>

## 4. 新建src根目录 ，src里面新增index.js文件
```
function hello() {
    console.log('hello world');
}
```
**如图**
<a data-fancybox title="react" href="/reactNote2.png">![order](/reactNote2.png)</a>

## 5. 运行
命令行直接输入webpack，此时可能会出现下面的情况：

### 5-1. webpack命令不支持，无法运行脚本
**如图**
<a data-fancybox title="react" href="/reactNote3.png">![order](/reactNote3.png)</a>
**解决：**

- 使用管理员身份运行powershell
- 设置 Set-ExecutionPolicy RemoteSigned为y
- 再次运行就可以了

**如图**

图1 
<a data-fancybox title="react" href="/reactNote4.png">![order](/reactNote4.png)</a>
图2
<a data-fancybox title="react" href="/reactNote5.png">![order](/reactNote5.png)</a>
图3
<a data-fancybox title="react" href="/reactNote6.png">![order](/reactNote7.png)</a>

### 5-2. webpack运行提示要安装脚手架

**如图**
<a data-fancybox title="react" href="/reactNote8.png">![order](/reactNote8.png)</a>

**解决**

安装：

```
npm install webpack -g
npm install webpack-cli -g
```

### 5-3 :安装好后，再运行可能会发现打出的包没有任何内容
**如图**

提示没有配置环境信息
<a data-fancybox title="react" href="/reactNote9.png">![order](/reactNote9.png)</a>

**解决**：

此时是因为我们没有配置环境信息，就需要配置环境

**配置环境**

解决方法：

1.package.json中设置：
```
”scripts": {
    "dev": "webpack --mode development",  // 开发环境
     "build": "webpack --mode production",  // 生产环境
  }
```
2.webpack.config.js中设置：
```
module.exports = {
    entry: './src/app.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'main.js'
    },
    mode: 'development' // 设置mode
}
```



配置好后，再运行webpack可以看到打包到build文件夹的文件的内容了

**大公告成**
<a data-fancybox title="react" href="/reactNote10.png">![order](/reactNote10.png)</a>


## 6. 给package.json添加帮助指令

```
"scripts": {
    "dev": "webpack --mode development --progress --watch --hot",  
  },
```
`progress`是显示打包进程，`watch`是监听文件变化，`hot`是启动热加载。
以后只需要执行npm run dev 就可以了。

## 7.添加模板文件index.html
配置react项目最重要的`两个文件`是`入口文件`（这里是src/index.js）和`html模板文件`(这里是public/index.html)

入口文件是整个项目`开始运行`的地方，模板文件是构建DOM树的地方，相信有一部分小伙伴在网上看到的教程，是直接在打包路径build里面建一个index.html，
然后手动或者使用`html-webpack-plugin`将打包后的`js引入`

这样存在一个问题是build本身是`打包路径`，而这个路径的所有文件都不应该是我们手动去添加的，甚至包括这个文件夹也不是我们事先建好的。

所以最好是按照create-react-app的方式，将这类`不需要`被webpack`编译`的文件放到`public`路径下。

**public/index.html：**
```
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>My App</title>
</head>
<body>
    <div id="root"></div>
</body>
</html>
```

如图：
<a data-fancybox title="react" href="/reactNote11.png">![order](/reactNote11.png)</a>

现在要让`webpack`知道,这就是我们的`html入口文件`，并且我们不需要`手动`引入`打包后`的`js文件`，需要安装`html-webpack-plugin`:
```
npm install html-webpack-plugin --save-dev
```

## 8. 配置plugins
> plugins是用于`扩展`webpack功能的，它帮助webpack构建项目，比如上面的`html-webpack-plugin`自动生成模板文件，以及后面用到的分离CSS等。

webpack.config.js
```
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
    plugins: [
        new HtmlWebpackPlugin({
            template: './public/index.html', //指定模板路径
            filename: 'index.html', //指定文件名
        })
    ]
}
```
如图：
<a data-fancybox title="react" href="/reactNote12.png">![order](/reactNote12.png)</a>


这里提示一下：

- 生成的HTML路径就是`output.path`指定的路径
- 不仅如此，像`extract-text-webpack-plugin`分离CSS文件打包的文件路径也是这个路径。

重新运行一下：`npm run dev`

现在可以看到build路径下已经生成好了一个index.html文件，并且这个文件已经`引入了bundle.js`文件了。

如图：
<a data-fancybox title="react" href="/reactNote14.png">![order](/reactNote14.png)</a>

## 9. 开始React项目

安装: `npm install react react-dom --save-dev`

如图：
<a data-fancybox title="react" href="/reactNote15.png">![order](/reactNote15.png)</a>

现在来修改我们的入口文件

**src/index.js：**
```
import React, { Component } from 'react';
import ReactDom from 'react-dom';

class App extends Component {
    render() {
        return <h1> Hello, world! </h1>
    }
}

ReactDom.render(
    <App />,
    document.getElementById('root')
)
```
如图：
<a data-fancybox title="react" href="/reactNote17.png">![order](/reactNote17.png)</a>

**别着急运行，react里面的`JSX`语法普通浏览器`解析不了`，需要安装`babel`来解析：**

`npm install babel babel-cli babel-loader --save-dev`

如图：
<a data-fancybox title="react" href="/reactNote18.png">![order](/reactNote18.png)</a>

**再安装两个分别用于解析`es6`和`jsx`语法的插件：**

`npm install babel-preset-env babel-preset-react --save-dev`

如图：
<a data-fancybox title="react" href="/reactNote19.png">![order](/reactNote19.png)</a>

> 注：以前编译es6以上语法用的是babel-preset-es2015，现在是时候说再见了，babel-preset-env是一个更定制化的插件，你可以指定你要兼容的浏览器版本，这样babel会选择编译该版本不支持的语法而不是全部编译成旧的语法

**接下来，配置webpack的module：**

```
module.exports = {
...
  module: {
        rules: [ //配置加载器
            {
                test: /\.js$/, //配置要处理的文件格式，一般使用正则表达式匹配
                use:[
                    {
                        loader:'babel-loader', //使用的加载器名称
                        options:{  //babel的配置参数，可以写在.babelrc文件里也可以写在这里
                            presets: ['env', 'react']
                        }
                    }
                ]
            }
        ]
    }
```
如图：
<a data-fancybox title="react" href="/reactNote24.png">![order](/reactNote24.png)</a>

webpack最重要的配置都在`modules`（模块）里。

`loaders`（加载器）是处理`源文件`的：

- loader可以处理不同的`js`（jsx, es6等）`编译成js`
- 将`less`等编译成`css`
- 将项目中引用的图片等`静态资源路径`处理成打包以后可以正确识别的路径等。

现在试着运行一下，没有报错的话，直接双击打开build/index.html就可以看到hello world!了。

如图：

<a data-fancybox title="react" href="/reactNote26.png">![order](/reactNote26.png)</a>

如果报错了，就需要改对应的配置，以上配置是基于webpack 4.6.0来编写的

## 10. 加载和解析CSS样式

我们以前写CSS大致是两种方式，一写在html里，二写在CSS文件里。

现在我们没有html只有JSX了，`JSX`通俗一点理解就是可以在`js`里面`写html`，所以我们如果要在jsx里面写css，就是在js里面写css，写过RN的小伙伴应该对这种写法比较熟悉。

//方式一：
```
const styles = {
    container: {
        textAlign: 'center',
        marginTop: '50px'
    },
    containerBtn: {
        margin: '0 20px',
        backgroundColor: '#dde18e'
    }
}
```
//使用：
```
<div style={styles.container}>
        <button style={styles.containerBtn}>count+1</button>
</div>  
```

//方式二：
```
<div style={{textAlign: 'center', marginTop: '50px'}}>

</div>  
```

而如果想在JSX文件里面像我们以前的用法一样去`引入CSS文件`，就只能使用`import`语句，但是import引入的都会被`当做js处理`。

所以，我们需要`对css文件`做一个`转换`。这就需要`css-loader`和`style-loader`。

其中css-loader用于将`css转换成对象`，而style-loader则`将解析后的样式嵌入js代码`。

安装：`npm install style-loader css-loader --save`

**webpack.config.js：**
```
module: {
        rules: [
            {
                test: /\.css/,
                use:[
                    {loader:'style-loader'},
					{loader:'css-loader'}
                ]
            },
            
        ]
    }
```

如图:

<a data-fancybox title="react" href="/reactNote28.png">![order](/reactNote28.png)</a>

**新建css 文件：**
```
//index.css
.container {
    text-align: center;
    margin-top: 40px;
}
```
如图:

<a data-fancybox title="react" href="/reactNote30.png">![order](/reactNote30.png)</a>

**引入css 文件：**
```
//index.js
import '../css/index.css

// 需要注意用className而不是class
<div className="container">
</div>
```
如图：

<a data-fancybox title="react" href="/reactNote31.png">![order](/reactNote31.png)</a>


运行后，如图:

<a data-fancybox title="react" href="/reactNote29.png">![order](/reactNote29.png)</a>


<!-- ## 11.单独编译CSS文件（只在生产环境配置）
一般发布到`线上`以后，为了加载速度更快会把CSS和JS打包到`不同的文件`中，使用`extract-text-webpack-plugin`插件可以`分离CSS`。

而其实，开发的时候是不需要单独编译CSS文件的。如果你在开发环境加了这个，又配置了热更新，那么你会发现CSS发生变化时热更新用不了了，所以建议开发环境就不要配置这个了。

安装
```
npm install extract-text-webpack-plugin --save
```

**webpack.config.js**

```

``` -->

## 13. 使用PostCSS或者Less, Sass等CSS工具

PostCSS可能有的小伙伴没有用过，它不是什么预处理后处理语言，而是一个平台，那我们就可以在平台上做很多事情，比如说：检查CSS（像eslint检查js那样）、添加浏览器前缀（该平台目前最火的插件）、使用未来的CSS语法（大概就像现在的花呗？？）、函数式语法（类似Sass语法）等等。

之前写过Sass或Less的童鞋估计会问：既然它是个平台那我可以在它上面写Sass(Less)吗？答案是可以的，另外，它也有一个类似于Sass语法的插件，在它上面配置起来非常容易。
```
//安装
npm install postcss-loader --save

//安装一些需要的工具
npm install autoprefixer precss postcss-flexbugs-fixes --save
```
> 注：`autoprefixer`是自动添加浏览器前缀的插件，`precss`是类似Sass语法的css插件，`postcss-flexbugs-fixes`是修复了flex布局bug的插件.

**webpack.config.js：**

```
{
                test: /\.css$/,
                use:[
                    {loader:'style-loader'},
					{loader:'css-loader'},
                    {
                        loader: 'postcss-loader',
                        options: {
                            postcssOptions:{
                                plugins: [
                                    require('autoprefixer'),
                                    require('precss'),
                                    require('postcss-flexbugs-fixes')
                                ]
                            }
                            
                        }
            
                    }
                ]
            },
```

如图：

<a data-fancybox title="react" href="/reactNote33.png">![order](/reactNote33.png)</a>

**src\css\index.css：**
```
$mainColor: #8ce7b4;
$fontSize: 1rem;

@keyframes rotate {
    0%      {transform: rotate(0deg);left:0px;}
    100%    {transform: rotate(360deg);left:0px;}

}
button {
    background: $mainColor;
    font-size: calc(1.5 * $fontSize);
}


```
如图：

<a data-fancybox title="react" href="/reactNote35.png">![order](/reactNote35.png)</a>



运行后，如图：

<a data-fancybox title="react" href="/reactNote34.png">![order](/reactNote34.png)</a>


可以看到已经自动帮我们添加了前缀以及可以使用sass语法了,而且这是在css文件里直接写，不需要建其他后缀的文件。
如果你非要用less或者sass，也可以，但我还是会建议你保留postcss，毕竟它有很多有用的插件，只是`去掉precss`即可。
```
// 安装 less less-loader2个都要安装
npm install less less-loader --save
```

**webpack.config.js：**
```
{
                test: /\.(css|less)$/,
                use:[
                    {loader:'style-loader'},
					{loader:'css-loader'},
                    {loader: 'less-loader'},
                    {
                        loader: 'postcss-loader',
                        options: {
                            postcssOptions:{
                                plugins: [
                                    require('autoprefixer'),
                                    // require('precss'), //先去掉precss
                                    require('postcss-flexbugs-fixes')
                                ]
                            }
                            
                        }
            
                    },
                    
                ]
            }, 
```

如图：

<a data-fancybox title="react" href="/reactNote37.png">![order](/reactNote37.png)</a>

**src\css\index.less：**

```
// 将样式改为less语法的
.container{
    button {
        background: #8ce7b4;
        font-size: 20px;
    }
}
```

如图：

<a data-fancybox title="react" href="/reactNote38.png">![order](/reactNote38.png)</a>

## 14. 加载图片资源
我们知道webpack打包会将所有模块打包成一个文件，而我们在开发项目时引入图片资源的时候是相对于当前文件的路径，打包以后这个路径是错误的路径，会导致引入图片失败，所以我们需要一个处理静态资源的加载器，url-loader和file-loader。

我看到网上说url-loader是包含了file-loader的功能的，所以我们只需要下载url-loader就可以了，但是我下载完以后它却提示我url-loader依赖file-loader，并且运行项目会报错，所以我又下载了file-loader。

url-loader有一个功能是对于指定大小以下的图片会转成base64，这样可以有效减少http请求。

`安装：npm install file-loader url-loader --save`


**webpack.config.js**
```
{
    test: [/\.gif$/, /\.jpe?g$/, /\.png$/],
    loader: 'url-loader',
    options: {
      limit: 10000, //1w字节以下大小的图片会自动转成base64
    },
}
```


如图：

<a data-fancybox title="react" href="/reactNote40.png">![order](/reactNote40.png)</a>


使用图片有两种情况，一在CSS里面设置背景，二在JSX里面设置背景或src，
CSS里面和以前的使用方式一样，假如你的目录结构长这样：

```
src
  |
  ---pages/
  --- css/
  --- images/
```
那么在CSS文件里引入背景图的路径就为：
```
.container {
    background: url('../images/typescript.jpeg') no-repeat center / contain;
}
```
在JSX里面引入图片有几种方式：(该页面在pages/下)
```
//引入方式一：
import tsIcon from '../images/typescript.jpeg';

//引入方式二：
const tsIcon = require('../images/typescript.jpeg');

//使用方式一：
<img src={tsIcon} alt="" />

//使用方式二：
<div style={{background: `url(${tsIcon}) no-repeat`}}></div>

//使用方式三：
const styles = {
    test: {
        background: `url(${tsIcon}) no-repeat center`
    }
}

render() {
  return (
    <div style={styles.test}></div>
  )
}
```

另外，你也可以测试一些小的icon，看看是不是转换成了很长的一串字符串。

如图：

<a data-fancybox title="react" href="/reactNote41.png">![order](/reactNote41.png)</a>


# 下面来配置webpack的热更新

## 1.模块热替换(Hot Module Replacement)

HMR是webpack最令人兴奋的特性之一，当你对代码进行修改并保存后，webpack 将对代码重新打包，并将新的模块发送到浏览器端，浏览器通过新的模块替换老的模块，这样在不刷新浏览器的前提下就能够对应用进行更新。HMR是一个非常值得去深入研究的东西，它绝不是目前我们看到的大多数技术文章说的配置一个hot参数这么简单，有兴趣的小伙伴可以去看看它的实现原理，目前为止我也只看过一点点。

其实实现HMR的插件有很多，webpack-dev-server只是其中的一个，当然也是优秀的一个，它能很好的与webpack配合。

另外，webpack-dev-server只是用于开发环境的。


## 2.webpack-dev-server实现自动刷新

全局安装：
```
npm install webpack-dev-server --g
(全局安装以后才可以直接在命令行使用webpack-dev-server)
```

在webpack的配置文件里添加webpack-dev-server的配置：
```
module.exports = {
    devServer: {
        contentBase: path.resolve(__dirname, 'build'),
    },
}
```
如图：

<a data-fancybox title="react" href="/reactNote42.png">![order](/reactNote42.png)</a>


webpack-dev-server为了加快打包进程是将打包后的文件放到内存中的，所以我们在项目中是看不到它打包以后生成的文件／文件夹的，

但是，这不代表我们就不用配置路径了，配置过webpack.config.js的小伙伴都知道output.path这个参数是配置打包文件的保存路径的，

contentBase就和output.path是一样的作用，如果不配置这个参数就会打包到项目的根路径下。


## 3. 配置webpack-dev-server实现本地访问

安装3个模块：
```
npm install webpack webpack-cli webpack-dev-server -D(-D是开发时依赖)
```

## 4. 总设置
此时如果运行能正常打开，就没问题了

如果不能打开，大概率是webpack各个插件版本不兼容导致

可能会出现，升级了这个插件，另外一个插件又不兼容了，改起来非常麻烦，所以：这里给出一份总的配置：

**package.json:**

```
{
  "name": "mybolg",
  "version": "1.0.0",
  "description": "zhangmiao's blog",
  "private": true,
  "scripts": {
    "start": "webpack-dev-server"
  },
  "keywords": [],
  "author": "zhangmiao",
  "license": "ISC",
  "devDependencies": {
    "@babel/core": "^7.9.6",
    "@babel/preset-env": "^7.9.6",
    "@babel/preset-react": "^7.9.4",
    "babel-loader": "^8.1.0",
    "clean-webpack-plugin": "^3.0.0",
    "css-loader": "^3.5.3",
    "file-loader": "^6.0.0",
    "html-webpack-plugin": "^4.3.0",
    "less": "^3.11.1",
    "less-loader": "^6.1.0",
    "style-loader": "^1.2.1",
    "url-loader": "^4.1.0",
    "webpack": "^4.46.0",
    "webpack-cli": "^3.3.12",
    "webpack-dev-server": "^3.11.2"
  },
  "dependencies": {
    "@babel/polyfill": "^7.8.7",
    "file-loader": "^6.2.0",
    "react": "^16.13.1",
    "react-dom": "^16.13.1",
    "url-loader": "^4.1.1"
  }
}

```

**webpack.config.js:**
```
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
```


具体参照demo1


## 15. 引入样式库

安装样式库
```
npm install antd --save
```

webpack.config.js
```
	module: {
		rules: [
			{
				test: /\.(js|jsx)$/,
				exclude: /node_modules/, //不会去翻译node_modules中的文件
				loader: 'babel-loader',
				options: {
					presets: [
						[
							'@babel/preset-env',
							{
								useBuiltIns: 'usage', //按需加入es6新特性
							},
						],
						'@babel/preset-react',
					],
					plugins: [
						[
							'babel-plugin-import',
							{
								libraryName: 'antd', //暴露antd
								style: true,
							},
						],
					],
				},
			},
```

如图：

<a data-fancybox title="react" href="/reactNote61.png">![order](/reactNote61.png)</a>

index.jsx 引入
```
import { Layout } from 'antd'
import React, { Component } from 'react'
import ReactDOM from 'react-dom'

const { Header, Footer, Sider, Content } = Layout
class apps extends Component {
	render() {
		return (
			<>
				<Layout>
					<Header>Header</Header>
					<Content>Content</Content>
					<Footer>Footer</Footer>
				</Layout>
			</>
		)
	}
}

export default apps

```


## 16. webpack给文件起别名，用@提代src

webpack.config.js
```
  resolve: {
        extensions: ['.js', '.vue', '.json','.jsx'], //文件引入的时候后缀可以省略
        alias: {
          '@': path.resolve('src'), // 给src起了个别名
          'assets': path.resolve('@/assets'),
          'components': path.resolve('@/components'),
          'views': path.resolve('@/views')
        }
    }
```

如图：

<a data-fancybox title="react" href="/reactNote67.png">![order](/reactNote67.png)</a>



