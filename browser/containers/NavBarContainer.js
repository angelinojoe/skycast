import NavBar from '../components/NavBar';
import { connect } from 'react-redux';
import logOutUser from '../reducers/user';

const mapStateToProps = (state) => {
  return {
    isUserLoggedIn: state.isUserLoggedIn
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
