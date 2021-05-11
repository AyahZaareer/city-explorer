import React from 'react';
import axios from 'axios';
// import Main from './component/main';
// import Header from './component/header';
import Footer from './com/footer';
import Weather from './com/Weather';
import Movie from './com/movie';
import { CardColumns } from 'react-bootstrap';




export class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchQuery: '',
      data: '',
      show: true,
      output1: '',
      output2: '',
      pro: process.env.REACT_APP_LOCATION,
      keyin: process.env.REACT_APP_LOCATION_IQ_KEY,
      weatherData: false,
      we: process.env.REACT_APP_WEATHER,
      movieData: false

    };
  }
  getLocation = async (e) => {
    try {

      e.preventDefault();


      const url = `${this.state.pro}key=${this.state.keyin}&q=${this.state.searchQuery}&format=json`;
      const req = await axios.get(url);
      this.setState({
        data: req.data[0],
        output1: 'Welcome to',
        output2: 'is located at'
      });
      // console.log(this.state.data);
      // console.log(this.state.data);
      // console.log(this.state.weatherData[0].date);
      this.getMovieData();
      this.getWeatherData();

    }

    catch (erorr) {
      this.setState({
        show: false
      });
    }
  };
  getWeatherData = async () => {
    const weatherurl = `${this.state.we}/weather?lat=${this.state.data.lat}&lon=${this.state.data.lon}`;
    const req2 = await axios.get(weatherurl);
    // console.log(req2);
    this.setState({
      weatherData: req2.data,
      show: true,

    });

  }
  getMovieData = async () => {
    const movieurl = `${this.state.we}/movie?query=${this.state.searchQuery}&limit=10`;
    const req3 = await axios.get(movieurl);
    console.log(req3);
    this.setState({
      movieData: req3.data,
      show: true,

    });
    console.log(this.state.movieData);

  }
  updateSearchQuery = (e) => {
    this.setState({ searchQuery: e.target.value });

  }
  again = () => {
    window.location.reload();
  }
  render() {
    return (
      <div>
        {
          this.state.show === false &&
          <div>
            <header>
              <h1>City Exploder</h1>
            </header>
            <h4>you didn't put correct data</h4>
            <button id="try" onClick={this.again}>try again</button>
            <h4>&copy;Code Fellows</h4>

          </div>
        }
        {
          this.state.show === true &&
          <div>
            <header>
              <h1>City Exploder</h1>
            </header>

            <form onSubmit={this.getLocation}>
              <label for='city name'>Where would you like explorer?</label>
              <br />
              <input onChange={this.updateSearchQuery} type='text' placeholder='city name' />
              {/* <input type='submit' value='get city' /> */}
              <br />
              <br />
              <button type='submit'>Exploer!</button>
            </form>
            <p>
              {this.state.output1}{this.state.data.display_name}
            </p>

            <b />
            <p>
              {this.state.data.display_name} {this.state.output2} {this.state.data.lat} {this.state.data.lon}
            </p>
            {this.state.data ? <img src={`https://maps.locationiq.com/v3/staticmap?key=pk.d36871f015649f915282f374cff76628&q&center=${this.state.data.lat},${this.state.data.lon}&zoom=10`} alt='' /> : ''}
            {this.state.weatherData &&
              // <p>{this.state.weatherData[0].description}</p>} /}
              <div>
                <CardColumns>
                  <Weather
                    weatherData={this.state.weatherData} />
                </CardColumns>


              </div>
            }

            {this.state.movieData &&
              <div >

                <Movie
                  movieData={this.state.movieData} />




              </div>}

          </div>







        }
        <Footer />
      </div>

    );
  }


}




export default App;
