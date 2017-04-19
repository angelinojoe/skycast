import React, {Component} from 'react';
import NavBar from './NavBar';
import Past from './Past';
import Present from './Present';
import Future from './Future';

export default class HomePage extends Component {
  constructor(props){
    super(props);
    this.onLocationSubmit = this.onLocationSubmit.bind(this);
  }

  onLocationSubmit(event){
    event.preventDefault();
    //replace spaces with plus signs for the API call
    const loc = document.getElementById('location').value.split(' ').join('+');
    this.props.fetchForecast(loc);
  }

  render () {
    return (
    <div>
    <NavBar />
      <div id="searchBar" className="container input-group">
        <form onSubmit={this.onLocationSubmit}>
          <input id="location" type="text" className="form-control" placeholder="Search by State, City, or Address..." />
          <button type="submit" className="btn btn-primary">Go!</button>
        </form>
      </div>
      {this.props.currentForecast.address ?
      <div id="locLabel" className="container">
        <h2>{this.props.currentForecast.address}</h2>
        <div><Past forecast={this.props.currentForecast.past} /></div>
        <div><Present forecast={this.props.currentForecast.currently} /></div>
        <div><Future forecast={this.props.currentForecast.daily} /></div>
      </div>
      : null}
    </div>);
  }
}
