import { connect } from 'react-redux';
import SerieListView from '../components/SerieListView';
import {bindActionCreators} from 'redux';
import * as fetchActions from '../actions/fetchActions';

function mapStateToProps (state,ownProps) {
  return {
    nextPage:state.fetchReducer.nextPage,
    hasMoreResult:state.fetchReducer.hasMoreResult,
    fetchSuccess:state.fetchReducer.fetchSuccess,
    isFetching:state.fetchReducer.isFetching,
    errorMsg:state.fetchReducer.errorMsg,
    showDetail:ownProps.showDetail,
    data:state.fetchReducer.series,
  };
}

export default connect(
  mapStateToProps,
  (dispatch) => ({
    actions: bindActionCreators(fetchActions, dispatch)
  })
