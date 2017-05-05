'use strict'
import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  ListView,
  TouchableOpacity
} from 'react-native';
import ListViewItem from './ListViewItem';
import Icon from 'react-native-vector-icons/FontAwesome';

class SerieListView extends Component{

  constructor(props) {
    super(props);
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2})
    this.state = {
      ds:ds,
      dataSource: ds.cloneWithRows(this.props.data),
    };
  }

  _onLayout(event){
    var {x, y, width, height} = event.nativeEvent.layout;
    this.setState({
      width:width,
      height:height
    });
  }

  _onEndReached(){
    if(this.props.hasMoreResult){
      if(this.props.hasMoreResult){
        this.props.actions.fetchData(this.props.nextPage);
      }
    }
  }

  componentDidMount() {
    this.props.actions.fetchData(this.props.nextPage);
  }

  render() {
    return (
      <View style={{flex:1}}>
        <ListView style={{backgroundColor:'#706666'}}
          onEndReached={()=>this._onEndReached()} onEndReachedThreshold = {10}
          enableEmptySections={true}
          onLayout={(event) => { this._onLayout(event) }}
          dataSource={this.state.dataSource}
          renderRow={(rowData) => <ListViewItem onItemPress={()=>this.props.showDetail(rowData)} title={rowData.original_name} description={rowData.overview} image={'https://image.tmdb.org/t/p/w500/'+rowData.poster_path} height={this.state.height} width={this.state.width}/>}>
        </ListView>
        {this.renderLoader()}
      </View>
    );
  }

  renderLoader(){
    if(this.props.isFetching){
      return(
        <View style={{position:'absolute',bottom:0,left:0,right:0,justifyContent: 'center',alignItems: 'center'}}>
          <ActivityIndicator animating={true} color='red' size='large' />
        </View>
      );
    }
  }
}
SerieListView.propTypes = {
  data:React.PropTypes.array.isRequired,
  showDetail:React.PropTypes.func.isRequired,
  nextPage:React.PropTypes.number.isRequired,
  hasMoreResult:React.PropTypes.bool.isRequired,
};

SerieListView.defaultProps = {
  data:[{"poster_path":"/mBDlsOhNOV1MkNii81aT14EYQ4S.jpg","popularity":54.910076,"id":44217,"backdrop_path":"/A30ZqEoDbchvE7mCZcSp6TEwB1Q.jpg","vote_average":6.88,"overview":"Vikings follows the adventures of Ragnar Lothbrok, the greatest hero of his age. The series tells the sagas of Ragnar's band of Viking brothers and his family, as he rises to become King of the Viking tribes. As well as being a fearless warrior, Ragnar embodies the Norse traditions of devotion to the gods. Legend has it that he was a direct descendant of Odin, the god of war and warriors.","first_air_date":"2013-03-03","origin_country":["IE","CA"],"genre_ids":[18,10759],"original_language":"en","vote_count":399,"name":"Vikings","original_name":"Vikings"},{"poster_path":"/vHXZGe5tz4fcrqki9ZANkJISVKg.jpg","popularity":35.357012,"id":19885,"backdrop_path":"/bvS50jBZXtglmLu72EAt5KgJBrL.jpg","vote_average":7.79,"overview":"A modern update finds the famous sleuth and his doctor partner solving crime in 21st century London.","first_air_date":"2010-07-25","origin_country":["GB"],"genre_ids":[80,18,9648],"original_language":"en","vote_count":381,"name":"Sherlock","original_name":"Sherlock"},{"poster_path":"/igDhbYQTvact1SbNDbzoeiFBGda.jpg","popularity":30.675316,"id":57243,"backdrop_path":"/cVWsigSx97cTw1QfYFFsCMcR4bp.jpg","vote_average":6.83,"overview":"The Doctor looks and seems human. He's handsome, witty, and could be mistaken for just another man in the street. But he is a Time Lord: a 900 year old alien with 2 hearts, part of a gifted civilization who mastered time travel. The Doctor saves planets for a living – more of a hobby actually, and he's very, very good at it. He's saved us from alien menaces and evil from before time began – but just who is he?","first_air_date":"2005-03-26","origin_country":["GB"],"genre_ids":[10759,18,10765],"original_language":"en","vote_count":339,"name":"Doctor Who","original_name":"Doctor Who"}],
  showDetail:(serie)=>console.log("show detail "+JSON.stringify(serie)),
  nextPage:1,
  hasMoreResult:true,
};
export default SerieListView;
