// import React from 'react';
// // import MyForm from './myForm';
// import axios from 'axios';
// import Form from 'react-bootstrap/Form';
// import Button from 'react-bootstrap/Button';
// import Card from 'react-bootstrap/Card';

// class Main extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       searchQuery: '',
//       data: '',
//       show: false,
//       output1: '',
//       output2: ''
//     };
//   }
//   getLocation = async (e) => {
//     e.preventDefault();
//     const url = `https://us1.locationiq.com/v1/search.php?key=pk.d36871f015649f915282f374cff76628&q=${this.state.searchQuery}&format=json`;
//     const req = await axios.get(url);
//     this.setState({
//       data: req.data[0],
//       show: true,
//       output1: 'Welcome to',
//       output2: 'is located at'
//     });
//   };
//   updateSearchQuery = (e) => {
//     this.setState({ searchQuery: e.target.value });


//   }
//   render() {
//     return (
//       <div>
//         {/* <MyForm getLocation={this.getLocation} /> */}
//         <Form onSubmit={this.getLocation}>
//           <Form.Group  >
//             <Form.Label> where would you like to explore?</Form.Label>
//             <br />
//             <Form.Control type="text" placeholder="city name" onChange={this.updateSearchQuery} />
//           </Form.Group>
//           <br />
//           <Button type='submit' value='get site' >Explore !</Button>
//           <Card>
//             <Card.Body>
//               <Card.Text>
//                 {this.state.output1} {this.state.data.display_name}
//               </Card.Text>
//               <Card.Text>
//                 {this.state.data.display_name} {this.state.output2} {this.state.data.lat} {this.state.data.lon}
//               </Card.Text>
//             </Card.Body>
//             {this.state.data ? <Card.Img variant="bottom" src={`https://maps.locationiq.com/v3/staticmap?key=pk.d36871f015649f915282f374cff76628&q&center=${this.state.data.lat},${this.state.data.lon}&zoom=10`} alt='' /> : ''}
//           </Card>


//         </Form>

//       </div>
//     );
//   }
// }

// export default Main;


