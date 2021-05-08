import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import Card from 'react-bootstrap/Card';
import { CardGroup } from 'react-bootstrap';


export class Movie extends Component {
  render() {
    return (
      this.props.movieData.map(data => {
        console.log(data);
        return (
          <div>

            <CardGroup>
              <Card style={{ margin: '20px', width: '100rem' }}>
                <Card.Img style={{ width: '100px' }} variant="top" src={`https://www.themoviedb.org/t/p/original/${data.img}`} alt='null' />
                <Card.Body>
                  <Card.Title>{data.title}</Card.Title>
                  <Card.Text>
                    {data.description}
                  </Card.Text>
                </Card.Body>

              </Card>
            </CardGroup>

          </div>
        );

      })
    );
  }
}

export default Movie;
