import React, { Component } from 'react'
import {
  View,
  StatusBar
} from 'react-native';
import HomeContainer from '../containers/HomeContainer';
import SerieDetail from './SerieDetail'
import {detailRoute} from '../routes';

import {
  BackAndroid,
  NavigationExperimental
} from 'react-native'

const {
  CardStack: NavigationCardStack
} = NavigationExperimental

class NavRoot extends Component {
  constructor (props) {
    super(props)
    this._renderScene = this._renderScene.bind(this)
    this._handleBackAction = this._handleBackAction.bind(this)
  }
  componentDidMount () {
    BackAndroid.addEventListener('hardwareBackPress', this._handleBackAction)
  }
  componentWillUnmount () {
    BackAndroid.removeEventListener('hardwareBackPress', this._handleBackAction)
  }
  _renderScene (props) {
    const { route } = props.scene
    switch (route.key) {
      case 'home':
      return <HomeContainer showDetail={(serieItem) =>{this._handleNavigate(detailRoute(serieItem))}} />
      break;
      case 'detail':
      return <SerieDetail goBack={()=>this._handleBackAction()} serieItem={route.serieItem} />
      break;
    }
  }
  _handleBackAction () {
    if (this.props.navigation.index === 0) {
      return false
    }
    this.props.popRoute()
    return true
  }
  _handleNavigate (action) {
    switch (action && action.type) {
      case 'push':
      this.props.pushRoute(action.route)
      return true
      case 'back':
      case 'pop':
      return this._handleBackAction()
      default:
      return false
    }
  }
  render () {
    return (
      <View style={{flex:1}}>
        <StatusBar backgroundColor={'black'} barStyle="light-content"/>
        <NavigationCardStack
          direction='vertical'
          navigationState={this.props.navigation}
          onNavigate={this._handleNavigate.bind(this)}
          onNavigateBack={this._handleBackAction.bind(this)}
          renderScene={this._renderScene} />
      </View>
    )
  }
}
export default NavRoot;
