'use strict'
import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  TouchableOpacity
} from 'react-native';
import DiagonalImage from './DiagonalImage';
import IconInfos from './IconInfos';
import Icon from 'react-native-vector-icons/FontAwesome';


class SerieDetail extends Component{

  constructor(props) {
    super(props);
    this.state = {
      width:0,
      height:0
    }
  }

  _onLayout(event){
    var {x, y, width, height} = event.nativeEvent.layout;
    this.setState({
      width:width,
      height:height
    });
  }

  render() {
    const diagonalImageHeight = this.state.height/2.1;
    return (
      <ScrollView style={{backgroundColor:'white'}} onLayout={(event) => { this._onLayout(event) }}>
        <View style={styles.container}>
          <DiagonalImage src={'https://image.tmdb.org/t/p/w500/'+this.props.serieItem.poster_path}
            height={diagonalImageHeight} width={this.state.width}/>
          <TouchableOpacity style={styles.back} onPress={()=>this.props.goBack()}>
            <Icon name='chevron-left' color='white' size={26}/>
          </TouchableOpacity>
          <View style={[styles.subInfos,{width:this.state.width}]}>
            <IconInfos iconName='flag' text={this.props.serieItem.origin_country[0]}/>
            <IconInfos iconName='star' text={this.props.serieItem.vote_average.toString()}/>
            <IconInfos iconName='calendar' text={this.props.serieItem.first_air_date.split('-')[0]}/>
          </View>
          <View>
            <View style={styles.infos}>
              <Text style={styles.title}>{this.props.serieItem.original_name}</Text>
              <Text style={styles.description}>{this.props.serieItem.overview}</Text>
            </View>
          </View>
        </View>
      </ScrollView>
    );
  }
}

SerieDetail.propTypes = {
  serieItem: React.PropTypes.object.isRequired,
  goBack:React.PropTypes.func.isRequired,
}
SerieDetail.defaultProps = {
  serieItem: {"poster_path":"/mBDlsOhNOV1MkNii81aT14EYQ4S.jpg","popularity":54.910076,"id":44217,"backdrop_path":"/A30ZqEoDbchvE7mCZcSp6TEwB1Q.jpg","vote_average":6.88,"overview":"Vikings follows the adventures of Ragnar Lothbrok, the greatest hero of his age. The series tells the sagas of Ragnar's band of Viking brothers and his family, as he rises to become King of the Viking tribes. As well as being a fearless warrior, Ragnar embodies the Norse traditions of devotion to the gods. Legend has it that he was a direct descendant of Odin, the god of war and warriors.","first_air_date":"2013-03-03","origin_country":["IE","CA"],"genre_ids":[18,10759],"original_language":"en","vote_count":399,"name":"Vikings","original_name":"Vikings"},
  goBack: ()=>console.log("go back"),
};


export default SerieDetail;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor:'white',
  },
  back:{
    position:'absolute',
    top:24,
    left:16,
    backgroundColor:'transparent'
  },
  infos:{
    justifyContent: 'flex-start',
    alignItems: 'center',
    padding:16,
    marginTop:12
  },
  subInfos:{
    justifyContent: 'space-between',
    flexDirection:'row',
    paddingHorizontal:16,
    marginTop:12,
  },
  title:{
    color:'#575050',
    fontWeight:'bold',
    fontSize:18,
    marginBottom:20
  },
  description:{
    color:'#575050',
    fontWeight:'500',
    fontSize:14,
    textAlign:'center'
  },
});
