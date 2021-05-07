import React, { Component } from 'react';

export class Movie extends Component {
  render() {
    return (
      this.props.movieData.map(data => {
        console.log(data);
        return (
          <div>
            <p>{data.original_title}</p>

            <p>{data.overview}</p>

          </div>
        );

      })
    );
  }
}

export default Movie;
