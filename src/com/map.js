import React, { Component } from 'react';

class Map extends Component {
  render() {
    return (
      <div>
        <img src={`https://maps.locationiq.com/v3/staticmap?key=pk.d36871f015649f915282f374cff76628&q&center=${this.props.lat},${this.props.lon}&zoom=10`} alt='' />
      </div>
    );
  }
}

export default Map;
