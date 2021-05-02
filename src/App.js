
import React from 'react';
import axios from 'axios';


export class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchQuery: '',
      data: '',
      show: false,
      output1:'',
      output2:''
    };
  }
  getLocation = async (e) => {
    e.preventDefault();
    const url = `https://us1.locationiq.com/v1/search.php?key=pk.d36871f015649f915282f374cff76628&q=${this.state.searchQuery}&format=json`;
    const req = await axios.get(url);
    this.setState({
      data: req.data[0],
      show: true,
      output1:'Welcome to',
      output2:'is located at'
    });
  };
  updateSearchQuery = (e) => {
    this.setState({ searchQuery: e.target.value });

  }
  render() {
    return (
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
        <img src={`https://maps.locationiq.com/v3/staticmap?key=pk.d36871f015649f915282f374cff76628&q&center=${this.state.data.lat},${this.state.data.lon}&zoom=10`} alt='' />
        <h4>&copy;Code Fellows</h4>

      </div>
    );
  }
}




export default App;

