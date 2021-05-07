import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import Card from 'react-bootstrap/Card';


export class Movie extends Component {
  render() {
    return (
      this.props.movieData.map(data => {
        console.log(data);
        return (
          <div>
            {/* <p>{data.title}</p>
            <img src={`https://www.themoviedb.org/t/p/original/${data.img}`} alt='' />
            <p>{data.description}</p> */}
            <Card border="primary" style={{ width: '80rem', height: '15rem', marginTop: '30px' }}>
              <Card.Header>{data.title}</Card.Header>
              <Card.Body>
                <Card.Img variant="top" src={`https://www.themoviedb.org/t/p/original/${data.img}`} alt='null' />

                <Card.Text>
                  {data.description}
                </Card.Text>
              </Card.Body>
            </Card>
            <br />

          </div>
        );

      })
    );
  }
}

export default Movie;
