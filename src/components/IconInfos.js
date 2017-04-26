'use strict'
import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

class IconInfos extends Component{

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={styles.container}>
        <Icon name={this.props.iconName} size={16} color={this.props.color}/>
        <Text style={{marginLeft:13,fontWeight:'bold',color:this.props.color}}>{this.props.text}</Text>
      </View>
    );
  }
}

IconInfos.propTypes = {
  iconName: React.PropTypes.string.isRequired,
  color: React.PropTypes.string.isRequired,
  text: React.PropTypes.string.isRequired,
}
IconInfos.defaultProps = {
  iconName:'flag',
  color:'#575050',
  text:'FR'
}

export default IconInfos;

const styles = StyleSheet.create({
  container: {
    justifyContent: 'flex-start',
    flexDirection:'row'
  },
});
