import NavBar from '../components/NavBar';
import { connect } from 'react-redux';
import logOutUser from '../reducers/user';

const mapStateToProps = (state) => {
  return {
    userQueries: state.userQueries
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    logOutUser: function(){
      dispatch(logOutUser());
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(NavBar);
