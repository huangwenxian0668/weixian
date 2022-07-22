import React, { Component } from 'react';
import ReactDom from 'react-dom';
import './css/index.less'
import tools from './tools1.png'

class App extends Component {
    render() {
        return <h1 className="container"> Hello, world!
                    <div style={{background: `url(${tools}) no-repeat`}}></div>
                </h1>
    }
}

ReactDom.render(
    <App />,
    document.getElementById('root')
)
