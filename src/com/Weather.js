import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import CardColumns from 'react-bootstrap/CardColumns';
import Card from 'react-bootstrap/Card';

export class Weather extends Component {
  render() {
    return (
      this.props.weatherData.map(data => {
        return (
          <div>
            {/* <p>{data.date}</p>
            <p>{data.description}</p> */}
            <CardColumns>
              <Card style={{ width: '20rem', marginLeft: '10px', marginTop: '10px' }} >
                <Card.Body style={{ width: '300rem' }}>
                  <Card.Title>{data.date}</Card.Title>
                  <Card.Text>
                    {data.description}
                  </Card.Text>
                </Card.Body>
              </Card>

            </CardColumns>

          </div >
        );

      })
    );
  }
}

export default Weather;
