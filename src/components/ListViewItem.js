'use strict'
import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity
} from 'react-native';
import ImageWithOverlay from './ImageWithOverlay';

class ListViewItem extends Component{

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <TouchableOpacity activeOpacity={0.5} onPress={()=>this.props.onItemPress()}>
        <ImageWithOverlay src={this.props.image} height={this.props.height} width={this.props.width}/>
        <View style={styles.infosContainer}>
          <Text elispsisMode='tail' numberOfLines={1} style={styles.title}>{this.props.title}</Text>
          <View style={styles.separator}/>
          <Text elispsisMode='tail' numberOfLines={4} style={styles.description}>{this.props.description}</Text>
        </View>
      </TouchableOpacity>
    );
  }
}

export default ListViewItem;

const styles = StyleSheet.create({
  infosContainer:{
    position:'absolute',
    bottom:0,
    left:0,
    right:0,
    height:150,
    padding:16,
    backgroundColor:'transparent'
  },
  title:{
    color:'white',
    fontWeight:'bold',
    fontSize:18
  },
  description:{
    color:'white',
    textAlign:'justify'
  },
  separator:{
    backgroundColor:'white',
    height:1,
    marginTop:8,
    marginBottom:8,
  },
});
