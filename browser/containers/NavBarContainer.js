import NavBar from '../components/NavBar';
import { connect } from 'react-redux';
import {setFalse} from '../reducers/user';

const mapStateToProps = (state) => {
  return {
    userQueries: state.userQueries
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setFalse: function(){
      dispatch(setFalse());
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(NavBar);
