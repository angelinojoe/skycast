import React from 'react';

export default function Present (props) {

return (
    <div className="forecast">
      <h3>Present</h3>
      <div className="panel panel-default">
      <div className="panel-body">
        <h4 className="col-md-3">{props.forecast.temperature}°</h4>
        <h4 className="col-md-3">{props.forecast.summary}</h4>
        <h4 className="col-md-3">Wind Speed: {props.forecast.windSpeed}</h4>
        <h4 className="col-md-3">Precipitation: {props.forecast.precipProbability}%</h4>
        </div>
      </div>
    </div>
  );
}
