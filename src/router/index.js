import { HashRouter, Switch } from 'react-router-dom';
import AuthRoute from '../router/authRoute'
import routes from '../router/routes'
const Index = () => {
    // const { name } = useContext(AppContext)
    // console.log("@",name)
    return (
        <HashRouter>
            <Switch>
                {
                    routes.map((item, index) => {
                        return (
                            <AuthRoute key={index} routeData={routes}></AuthRoute>
                        )
                    })
                }
            </Switch>
        </HashRouter>
    )
}

export default Index;