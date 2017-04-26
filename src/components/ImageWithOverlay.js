'use strict'
import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Image
} from 'react-native';

class ImageWithOverlay extends Component{

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View>
        <Image resizeMode='stretch' style={{height:this.props.height,width:this.props.width}} source={{uri: this.props.src}}/>
        <View style={styles.overlay}/>
      </View>
    );
  }
}

ImageWithOverlay.defaultProps = {
  src: 'https://image.tmdb.org/t/p/w600_and_h900_bestv2/3iYNC7Iw6a65ed5GZz7KbInSHBd.jpg',
  width: 375, //iphone 6
  height: 667, // iphone 6
};

ImageWithOverlay.propTypes = {
  src: React.PropTypes.string.isRequired,
  width: React.PropTypes.number.isRequired,
  height: React.PropTypes.number.isRequired,
};

export default ImageWithOverlay;

const styles = StyleSheet.create({
  overlay:{
    position: 'absolute',
    left: 0,
    top: 0,
    bottom:0,
    right:0,
    opacity: 0.7,
    backgroundColor: 'black',
  }
});
