react 开发记录

## 1. 怎么做路由配置
安装插件
```
npm install --save react-router-dom
```

入口文件 index.js
```
import React from 'react';
import ReactDOM from 'react-dom';
import Route from './router'
import {AppContainer} from 'react-hot-loader'



const render = Component => {
  ReactDOM.render(

      <AppContainer>
        <Component/>
      </AppContainer>,
    document.getElementById('root')
  )
}

render(Route)

```


如图：
<a data-fancybox title="react" href="/reactNote62.png">![order](/reactNote62.png)</a>




组件
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

如图：

<a data-fancybox title="react" href="/reactNote64.png">![order](/reactNote64.png)</a>

路由文件 index.js
```
import React, {Component} from 'react'
import {HashRouter, Switch, Route, Redirect} from 'react-router-dom'
import asyncComponent from '@/utils/asyncComponent.jsx'
const home = asyncComponent(() => import("@/pages/home/index.jsx"))

export default class RouteConfig extends Component {
  render () {
    return (
      <HashRouter>
        <Switch>
          <Route path="/home" component= {home}/>
        </Switch>
      </HashRouter>
    )
  }
}
```


如图：
<a data-fancybox title="react" href="/reactNote63.png">![order](/reactNote63.png)</a>

效果：

如图：
<a data-fancybox title="react" href="/reactNote65.png">![order](/reactNote65.png)</a>

## 2. 怎么重置样式库组件的样式

1. 新建样式文件

main.css
```
.ant-layout-header{
    background: none!important;
}
```

2. 入口文件index.js直接引入
```
import React from 'react';
import ReactDOM from 'react-dom';
import Route from './router'
import {AppContainer} from 'react-hot-loader'
import '@/css/main.less'



const render = Component => {
  ReactDOM.render(

      <AppContainer>
        <Component/>
      </AppContainer>,
    document.getElementById('root')
  )
}

render(Route)

```

## 3. 怎么做静态类型检查

安装
```
npm install --save prop-types
```

组件
```
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Tabs } from 'antd';
const { TabPane } = Tabs;

function callback(key) {
  console.log(key);
}

class Home extends Component {
    static propTypes = {
        // saveAttrInfo: PropTypes.func.isRequired,
        userInfo: PropTypes.object,
        addressName: PropTypes.string
    }

    state = {
        verify:false,			//姓名
    }
}
```
如图：

<a data-fancybox title="react" href="/reactNote71.png">![order](/reactNote71.png)</a>

此时，运行可能会报错

需要安装插件：

```
npm i -D @babel/plugin-proposal-class-properties
```
webpack.config.js
```
options: {
        plugins: ['@babel/plugin-proposal-class-properties']
      }
 },

```

如图：

<a data-fancybox title="react" href="/reactNote72.png">![order](/reactNote72.png)</a>

## 4. react 如何使用遍历
```
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Tabs } from 'antd';

const { TabPane } = Tabs;

class Home extends Component {
    state = {
        tabList:[   //定义数组
            {
                value: 'html',
                in: 0
            },
            {
                value: 'css',
                in: 1
            },
        ]
    }

    callback = (key) => {  //定义函数
        console.log(key);
    }

    render () {
        return (
          <div className='adddetail'>
          // onChange为事件的写法，事件外面用{}包裹
            <Tabs defaultActiveKey="1" onChange={this.callback}>  
                {   // js要用{}包裹
                    this.state.tabList.map((item, index) => {  //遍历
                        return (
                            <TabPane tab={item.value} key={index}>
                              {item.value}
                            </TabPane> 
                        )
                    })
                }
           </Tabs>
          </div>
        )
      }
    }

export default Home
```

和vue的区别
- 遍历不是用指令，而是写js
- 事件也不是指令@click等，而是onClick
- 事件名要加大括号，并且事件要用this引用
- 类的写法不是class而是className
- 函数，变量的分隔不用逗号


