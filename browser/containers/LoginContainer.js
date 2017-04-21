import Login from '../components/Login';
import { connect } from 'react-redux';
import {logInUser} from '../reducers/user';

const mapDispatchToProps = (dispatch) => {
  return {
    logInUser: function(type, email, password){
      dispatch(logInUser(type, email, password));
    }
  };
};


export default connect(null, mapDispatchToProps)(Login);
