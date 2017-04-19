import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
export default function Past (props) {
const data = [
      {name: '7 Days Ago', Hi: props.forecast[0].daily.data[0].temperatureMax, Low: props.forecast[0].daily.data[0].temperatureMin},
      {name: '6 Days Ago', Hi: props.forecast[1].daily.data[0].temperatureMax, Low: props.forecast[1].daily.data[0].temperatureMin},
      {name: '5 Days Ago', Hi: props.forecast[2].daily.data[0].temperatureMax, Low: props.forecast[2].daily.data[0].temperatureMin},
      {name: '4 Days Ago', Hi: props.forecast[3].daily.data[0].temperatureMax, Low: props.forecast[3].daily.data[0].temperatureMin},
      {name: '3 Days Ago', Hi: props.forecast[4].daily.data[0].temperatureMax, Low: props.forecast[4].daily.data[0].temperatureMin},
      {name: '2 Days Ago', Hi: props.forecast[5].daily.data[0].temperatureMax, Low: props.forecast[5].daily.data[0].temperatureMin},
      {name: '1 Day Ago', Hi: props.forecast[6].daily.data[0].temperatureMax, Low: props.forecast[6].daily.data[0].temperatureMin},
];

return (
    <div className="forecast">
      <h3>Past</h3>
      <div className="panel panel-default">
      <div className="panel-body">
        <LineChart
          width={1000}
          height={200}
          data={data}
          margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
          <XAxis dataKey="name" />
          <YAxis />
          <CartesianGrid strokeDasharray="3 3" />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="Hi" stroke="#d82e22" />
          <Line type="monotone" dataKey="Low" stroke="#437ad3" />
        </LineChart>
      </div>
      </div>
    </div>
  );
}
