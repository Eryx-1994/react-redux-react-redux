import React from 'react'

import { Redirect, Route } from "react-router-dom"

const AuthRoute = (props) => {

    let { location, routeData } = props
    
    let { pathname } = location

    const isLogin = localStorage.getItem("isLogin")

    //当前路径所在的路由item信息

    // eslint-disable-next-line eqeqeq
    const targetRouteObj = routeData.find((item) => item.path == pathname)

    //未登录，路径存在，且不需要拦截则直接进入该页面 

    if (targetRouteObj && !targetRouteObj.auth && !isLogin) {

        let { component } = targetRouteObj

        return <Route path={pathname} component={component}></Route>

    }

    //登录

    if (isLogin) {
        // 如果要进入登录页面

        // eslint-disable-next-line eqeqeq
        if (pathname == "/Login") {
            return <Redirect to="/Home"></Redirect>

        } else {
            //页面地址存在

            if (targetRouteObj) {
                return <Route path={pathname} component={targetRouteObj.component}></Route>

            } else {

                //页面地址不存在 

                return <Redirect to="/Error"></Redirect>

            }

        }

    } else {
        if (targetRouteObj && targetRouteObj.auth) {
            return <Redirect to="/Login" />

        } else {

            return <Redirect to="/Error" />

        }

    }

}

export default AuthRoute