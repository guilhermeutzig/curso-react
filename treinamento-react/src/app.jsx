import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'

import Index from './components/index/index'
import CSS from './../application.styl'
import Header from './commons/header/header'

import reducers from './main/reducers'

const store = createStore(reducers)

ReactDOM.render(
    <Provider store={store}>
        <Index />
    </Provider>
, document.getElementById('app'))