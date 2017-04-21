import HomePage from '../components/HomePage';
import { connect } from 'react-redux';
import {fetchForecast} from '../reducers/forecast';

const mapStateToProps = (state) => {
  return {
    currentForecast: state.currentForecast,
    usersQueries: state.usersQueries,
    isUserLoggedIn: state.isUserLoggedIn
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchForecast: function(address){
      dispatch(fetchForecast(address));
    }
  };
};


export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
