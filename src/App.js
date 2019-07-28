import React, { Component } from 'react';
import Footer from "./components/Footer";
import Header from "./components/Header";
import Jumbotron from "./components/Jumbotron";
import ImageCard from "./components/ImageCard";
import Wrapper from "./components/Wrapper"
import images from "./images.json"
import BackgroundArea from "./components/BackgroundArea"
import Modal from "./components/Modal"
import './App.css';

class App extends Component {
  state = {
    images,
    chosenImageArray: [],
    highScore: 0,
    userScore: 0,
    message: "Click an Image to Start!",
    modal: false,
    gif: "",
    imgName: ""
  };

  selectImage = id => {

    this.setState({ images: this.shuffle(this.state.images) });

    if (this.state.chosenImageArray.indexOf(id) === -1) {
      
      this.state.chosenImageArray.push(id)

      this.setState({
        chosenImageArray: this.state.chosenImageArray,
        userScore: this.state.userScore + 1,
        message: "Good choice!"
      })

      if(this.state.userScore >= this.state.highScore) {
        this.setState({ highScore: this.state.userScore + 1 })
      }

      if (this.state.chosenImageArray.length === this.state.images.length ) {
        this.setState({
          chosenImageArray: [],
          modal: true,
          highScore: 0,
          userScore: 0,
          message: "You won! Spiddy's proud of you!",
          gif: "./images/happySpiddy.gif",
          imgName: "Happy Spiddy"
        })
      }

    } else {
      this.setState({
        chosenImageArray: [],
        userScore: 0,
        message: "Better luck next time!",
        modal: true,
        gif: "./images/sadSpiddy.gif",
        imgName: "Sad Spiddy"
      })

      if (this.state.userScore > this.state.highScore) {
        this.setState({
          highScore: this.state.userScore
        })
      }
    }

  };

  shuffle = a => {
    var j, x, i;
    for (i = a.length - 1; i > 0; i--) {
      j = Math.floor(Math.random() * (i + 1));
      x = a[i];
      a[i] = a[j];
      a[j] = x;
    }
    return a;
  }

  closeModal = () => {
    this.setState({
      modal: false
    })
  }

  render() {
    return (
      <Wrapper>
        <Header 
        userScore={this.state.userScore}
        highScore={this.state.highScore}
        message={this.state.message}
        />
        <Jumbotron />
        <BackgroundArea>
        {this.state.images.map(image => (
          <ImageCard
            selectImage={this.selectImage}
            id={image.id}
            key={image.id}
            name={image.name}
            image={image.image}
          />
        ))}
        <Modal 
        modal={this.state.modal}
        closeModal={this.closeModal}
        message={this.state.message}
        gif={this.state.gif}
        imgName={this.state.imgName} />
        </BackgroundArea>
        <Footer />
      </Wrapper>
    );
  }
}

export default App;