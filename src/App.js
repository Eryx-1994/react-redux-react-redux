import React, { Component } from 'react'
import { Provider } from 'react-redux'
import Index from './router/index';
import store from './store/index'
export default class App extends Component {
  
  render() {
    return (
      <div>
        <Provider store={store}>
          <Index />
        </Provider>
      </div>
    )
  }
}
