import React from 'react';

export default function NavBar (props) {

return (
    <nav className="navbar navbar-default">
  <div className="container-fluid">
    <div className="navbar-header">
      <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
        <span className="sr-only">Toggle navigation</span>
        <span className="icon-bar"></span>
        <span className="icon-bar"></span>
        <span className="icon-bar"></span>
      </button>
      <a className="navbar-brand" href="#">SkyCast, Inc.</a>
    </div>
    <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
      <ul className="nav navbar-nav">
        <li className="active"><a href="#">Weather <span className="sr-only">(current)</span></a></li>
        <li><a href="#">Profile</a></li>
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
