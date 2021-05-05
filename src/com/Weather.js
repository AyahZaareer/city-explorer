import React, { Component } from 'react';

export class Weather extends Component {
  render() {
    return (
      this.props.weatherData.map(data => {
        return (
          <div>
            <p>{data.date}</p>
            <p>{data.description}</p>

          </div>
        );

      })
    );
  }
}

export default Weather;
