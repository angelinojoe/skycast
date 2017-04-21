import React from 'react';
import {Link, browserHistory} from 'react-router';

export default function Login (props) {

let logIn = function(type){
  let email = document.getElementById('email').value;
  let pass = document.getElementById('pass').value;
  props.logInUser(type, email, pass);
  browserHistory.push('/');
};

return (
    <div id="login">
      <Link to={'/'}><button  className="btn btn-default">Back</button></Link>
      <div className="input-group">
        <h3>Welcome To SkyCast, Please Sign In or Sign Up If You're New!</h3>
        <input id="email" type="text" className="form-control loginInputs" placeholder="Email" aria-describedby="basic-addon1" />
        <input id="pass" type="text" className="form-control loginInputs" placeholder="Password" aria-describedby="basic-addon1" />
        <button id="signup" type="submit" className="btn btn-primary" onClick={() => logIn('signup')}>Sign Up</button>
        <button id="signin" type="submit" className="btn btn-warning" onClick={() => logIn('login')}>Sign In</button>
      </div>
    </div>
  );
}
