import React from 'react';

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
      <ul className="nav navbar-nav navbar-right">
        <li><button type="submit" className="btn btn-default">Sign Up</button></li>
        <li><button type="submit" className="btn btn-default">Log In</button></li>
      </ul>
    </div>
  </div>
</nav>
  );
}
