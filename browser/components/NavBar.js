import React from 'react';
import {Link} from 'react-router';
import axios from 'axios';

export default function NavBar (props) {
var logout = function(){
  axios.get('/api/user/logout')
  .then(() => {
    props.setFalse();
  });
};

return (
  <nav className="navbar navbar-default">
    <div className="container-fluid">
      <div className="navbar-header">
        <a className="navbar-brand" href="#">SkyCast, Inc.</a>
      </div>
      <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
        <ul className="nav navbar-nav">
          <li className="active"><a href="#">Weather <span className="sr-only">(current)</span></a></li>
        </ul>
        <p className="navbar-text"><a href="https://darksky.net">Powered By Dark Sky</a></p>
        {props.userQueries.isLoggedIn === 'false' ?
        <ul className="nav navbar-nav navbar-right">
          <li><Link to={'/login'}><button type="submit" className="btn btn-default">Sign In/Up</button></Link></li>
        </ul>
        :
        <ul className="nav navbar-nav navbar-right">
          <li><button type="submit" className="btn btn-default" onClick={logout}>Log Out</button></li>
        </ul>
        }
    </div>
  </div>
</nav>
  );
}
