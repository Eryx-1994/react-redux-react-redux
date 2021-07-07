import React, { Component } from 'react'
import { connect } from 'react-redux'
import { add, del, asyncAdd } from '../../store/action/count_action.js'
import './Home.scss'
import { test } from '../../utils/api.js'
class Home extends Component {
    componentDidMount() {
        test().then(res => {
            console.log(res, '@')
        })
    }
    render() {
        const { count } = this.props
        const add = () => {
            this.props.add(1)
        }
        const del = () => {
            this.props.del(1)
        }
        //通过解构赋值得到相应的属性里面的值
        //在这里Home是UI组件(展示组件)其属性是其外面的容器组件中的state是通过react-redux中的connect操作之后传递过来的
        return (
            <div id='home'>
                <p>简单计数器</p>
                <span>{count}</span>
                <button onClick={add}>加</button>
                <button onClick={del}>减</button>
                {/*通过点击事件触发绑定的属性,很明显,在这里onIncreaseClick是一个方法或者是一个对象的key值,其映射的value值是一个函数*/}
            </div>
        )
    }

}


export default connect(
    state => ({
        count: state.count,
    }),
    { add, del, asyncAdd }
)(Home)
