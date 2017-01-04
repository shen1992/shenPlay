/**
 * Created by shen on 2016/12/26.
 */
import {createStore, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import reducer from '../reducers/component'
//路由跳转的时候也发一个action，改变state的状态
import {routerMiddleware} from 'react-router-redux'

let middlewares = [thunk]
let MODE = process.env.MODE

if(MODE !== 'release') {
    let createLogger = require('redux-thunk')
    const logger = createLogger({
        level: 'info',
        logger: console,
        collapsed: true
    })
    
    middlewares = [...middlewares, logger]
}

module.exports = function (history, initialState) {
    middlewares = [...middlewares, routerMiddleware(history)]
    const createStoreWithMiddleware = applyMiddleware(...middlewares)(createStore)
    return createStoreWithMiddleware(reducer, initialState)
}