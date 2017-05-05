import {FETCH_START,FETCH_DONE,FETCH_FAILED} from '../constants/ActionTypes';
import apiKey from '../constants/api';

export function fetchData(page){
  return async dispatch => {
    dispatch(_fetchStart());
    try {
      var path='https://api.themoviedb.org/3/discover/tv?include_null_first_air_dates=false&timezone=America%2FNew_York&page='+page+'&sort_by=popularity.desc&language=en-US&api_key='+apiKey;
      var response = await fetch(path);
      var data = await response.json();

      data = {
        hasMoreResult:page < data.total_pages,
        series: data.results,
        nextPage: page < data.total_pages ? page + 1 : page
      };
      dispatch(_fetchDone(data));
    } catch (error) {
      dispatch(_fetchDone(error.message));
    }
  };
}

const _fetchStart = () => ({type:FETCH_START});
const _fetchDone = (data) => ({type:FETCH_DONE,data});
const _fetchFailed = (msg) => ({type:FETCH_FAILED,msg});
