'use strict'
import React, { Component } from 'react';
import configureStore from './store/configureStore'
const store = configureStore()

import NavigationRootContainer from './containers/NavRootContainer'
import { Provider } from 'react-redux'


export default class App extends Component{

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Provider store={store}>
        <NavigationRootContainer />
      </Provider>
    );
  }
}
