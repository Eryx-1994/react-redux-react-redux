import { ADD, DEL } from '../../constant.js';

const initState = 0;

export default function countReducer(preState = initState, action) {

    const { type, data } = action;
    switch (type) {
        case ADD: //如果是加
            return preState + data
        case DEL: //若果是减
            return preState - data
        default:
            return preState
    }

}