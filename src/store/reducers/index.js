//这里是所有组件的
import { combineReducers } from 'redux'
import count from './reducers_components/count.js'

//汇总所有的reducer变为一个总的reducer
export default combineReducers({
    count
})

