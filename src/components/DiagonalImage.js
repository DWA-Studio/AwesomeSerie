'use strict'
import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Image
} from 'react-native';

class DiagonalImage extends Component{

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View>
        <Image resizeMode='stretch' style={{height:this.props.height,width:this.props.width}} source={{uri: this.props.src}}/>
        <View  style={[{borderRightWidth: this.props.width,borderTopWidth: this.props.height/3.5},styles.triangle]}/>
      </View>
    );
  }
}

DiagonalImage.defaultProps = {
  src: 'https://image.tmdb.org/t/p/w600_and_h900_bestv2/3iYNC7Iw6a65ed5GZz7KbInSHBd.jpg',
  width: 375, //iphone 6
  height: 667, // iphone 6
};

DiagonalImage.propTypes = {
  src: React.PropTypes.string.isRequired,
  width: React.PropTypes.number.isRequired,
  height: React.PropTypes.number.isRequired,
};


export default DiagonalImage;

const styles = StyleSheet.create({
  triangle:{
    width: 0,
    height: 0,
    backgroundColor: 'transparent',
    borderStyle: 'solid',
    borderRightColor: 'transparent',
    borderTopColor: 'white',
    transform: [
      {rotate: '180deg'}
    ],
    position:'absolute',
    bottom:0,
    right:0,
  }
});
