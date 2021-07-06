import {ADD,DEL} from '../constant.js'

const add = data =>({type:ADD,data})

const del = data =>({type:DEL,data})

//异步action
const asyncAdd = (data,time)=>{
    return dispatch =>{
        setTimeout(() => {
            dispatch(add(data))
        }, time);
    }
}

export {add,del,asyncAdd}