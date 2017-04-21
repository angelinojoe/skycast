import React, {Component} from 'react';
import axios from 'axios';
import NavBarContainer from '../containers/NavBarContainer';
import Past from './Past';
import Present from './Present';
import Future from './Future';
import Footer from './Footer';

export default class HomePage extends Component {
  constructor(props){
    super(props);
    this.onLocationSubmit = this.onLocationSubmit.bind(this);
    this.saveQuery = this.saveQuery.bind(this);
    this.recentLocationSubmit = this.recentLocationSubmit.bind(this);
  }

  onLocationSubmit(event){
    event.preventDefault();
    //replace spaces with plus signs for the API call
    const loc = document.getElementById('location').value.split(' ').join('+');
    this.props.fetchForecast(loc);
  }

  recentLocationSubmit(location){
    this.props.fetchForecast(location.split(' ').join('+'));
  }

  saveQuery(){
    //only save if a user is logged in
    if (this.props.userQueries.isLoggedIn){
      const loc = document.getElementById('location').value;
      axios.post('/api/user/query', {
        location: loc
      })
      .then(() => {
        axios.get('/api/user/queries')
          .then((response) => response.data)
          .then((queries) => {
            this.props.setTrue(queries);
          });
    });
    }
  }

  render () {
    return (
    <div>
    <NavBarContainer />
      <div id="searchBar" className="container input-group">
        <form onSubmit={this.onLocationSubmit}>
          <input id="location" type="text" className="form-control" placeholder="Search by State, City, or Address..." />
          <button type="submit" className="btn btn-primary" onClick={this.saveQuery}>Go!</button>
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
    <Footer user={this.props.userQueries} recentLocationSubmit={this.recentLocationSubmit} />
    </div>);

  }
}
