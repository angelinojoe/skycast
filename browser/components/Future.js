import React from 'react';

export default function Future (props) {

return (
    <div className="forecast">
      <h3>Future</h3>
        <div className="panel panel-default">
        <div className="panel-body">
        <h4>7 Day Forecast:</h4>
        {props.forecast.data && props.forecast.data.map((forecast) => {
          return (<div key={forecast.time} className="list">
          <p>{`Low: ${forecast.temperatureMin}° High:${forecast.temperatureMax}°`}</p>
          <p>{forecast.summary}</p>
          </div>);
        })}
      </div>
      </div>
    </div>
  );
}
