import React from 'react';

export default function Footer (props) {

let renderSearches = function(){
  if (props.user.isLoggedIn === 'false'){
    return (<p className="navbar-text">Sign In To Save Past Queries!</p>);
  }
  else {
    //only get past 5 most recent searches
    let recentQueries;
    if (props.user.queries.length > 5){
      recentQueries = props.user.queries.slice(props.user.queries.length - 5);
    }
    else {
      recentQueries = props.user.queries;
    }
    return (
    recentQueries.map((query) => {
      return (
        <div key={query.id}>
          <p className="navbar-text makeBlue" onClick={() => props.recentLocationSubmit(query.location)}>{query.location}</p>
        </div>
      );
    }));
  }
};


return (
  <nav className="navbar navbar-default navbar-fixed-bottom">
    <div className="container">
      <p className="navbar-text">Recent Searches:</p>
    {renderSearches()}
    </div>
  </nav>
  );
}

