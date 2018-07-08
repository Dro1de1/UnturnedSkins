import React, { Component } from 'react';
import '../assets/styles/index.css';
import SkinCard from './SkinCard';
import skins from '../data/EconInfo'

class App extends Component {
  generateCards(){
    var cards = [];

    for (let i = 0; i < 10; i++) {
      
      
      cards.push(<SkinCard key={i} skin={skins[i]} />)
    }
    return cards;
  }
  render() {
    console.log(skins);
    
    return (
      <div className="blockinline">
        {this.generateCards()}
      </div>
    );
  }
}

export default App;
