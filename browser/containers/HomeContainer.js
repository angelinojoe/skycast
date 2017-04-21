import HomePage from '../components/HomePage';
import { connect } from 'react-redux';
import {fetchForecast} from '../reducers/forecast';
import {setTrue} from '../reducers/user';

const mapStateToProps = (state) => {
  return {
    currentForecast: state.currentForecast,
    userQueries: state.userQueries,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchForecast: function(address){
      dispatch(fetchForecast(address));
    },
    setTrue: function(queries){
      dispatch(setTrue(queries));
    }
  };
};


export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
