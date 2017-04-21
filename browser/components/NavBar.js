import React from 'react';
import {Link} from 'react-router';

export default function NavBar (props) {

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
        {props.isUserLoggedIn === 'false' ?
        <ul className="nav navbar-nav navbar-right">
          <li><Link to={'/login'}><button type="submit" className="btn btn-default">Sign In/Up</button></Link></li>
        </ul>
        :
        <ul className="nav navbar-nav navbar-right">
          <li><button type="submit" className="btn btn-default" onClick={() => props.logOutUser()}>Log Out</button></li>
        </ul>
        }
    </div>
  </div>
</nav>
  );
}
