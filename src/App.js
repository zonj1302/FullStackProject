import React, { Component } from 'react';
import Clarifai from 'clarifai';
import Navigation from './components/Navigation/Navigation';
import FaceRecognition from './components/FaceRecognition/FaceRecognition';
import Logo from './components/Logo/Logo';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm';
import Rank from './components/Rank/Rank';
import ParticlesBg from 'particles-bg';
import './App.css';

// const app = new Clarifai.App({
//  apiKey: 'd26f0b1241194550885d238ae4400bb7'
// });

class App extends Component {
  constructor() {
    super();
    this.state = {
      input: '',
    }
  }

  onInputChange = (event) => {
    console.log(event.target.value);
  }

  onButtonSubmit = () => {
    console.log('click');
    // app.models.predict("6dc7e46bc9124c5c8824be4822abe105", 
    //   "https://clarifai.com/clarifai/main/models/face-detection?utm_source=clarifai&utm_medium=referral&inputId=https%3A%2F%2Fs3.amazonaws.com%2Fsamples.clarifai.com%2Ffeatured-models%2Fface-crowd-at-concert.jpg")
    // .then(
    //   function(response) {
    //       console.log(response);
    //   },
    //   function(err) {
    //       // error
    //   }
    // );
}

  render(){
    return (
      <div className="App">
        <ParticlesBg type="cobweb" bg={true} />
        <Navigation />
        <Logo />
        <Rank />
        <ImageLinkForm onInputChange={this.onInputChange} onButtonSubmit={this.onButtonSubmit}/>
        <FaceRecognition />
      </div>
    );
  }
}

export default App;
