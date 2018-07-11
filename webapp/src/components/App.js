import React, { Component } from 'react';
import '../assets/styles/index.css';
import SkinCard from './SkinCard';
import skins from '../data/EconInfo';
import { Typography, Toolbar, AppBar, TextField } from '@material-ui/core'

class App extends Component {
  generateCards(){
    var cards = [];

    for (let i = 0; i < 50; i++) {
      cards.push(<SkinCard key={i} skin={skins[i]} />)
    }
    return cards;
  }
  render() {
    
    console.log(skins);
    
    return (
    <div className="blockinline">
      <AppBar position="fixed" color="default" id="Header">
        <Toolbar><a href="192.168.1.108:3000">
          <Typography variant="title" color="inherit">
            UnturnedStock.tk
          </Typography></a>
          <TextField className="searcher" id="search" label="Search field" type="search" margin="normal"/>
        </Toolbar> 
        
      </AppBar>
      
      <br/>
      <br/>
      <br/>
        {this.generateCards()}
        <img alt =""asdasd src="C:\Users\schad\OneDrive\Dokumente\GitHub\UnturnedSkins\webapp\src\assets\other img\gradient_blue.png"></img>
      </div>
    );
  }
}

export default App;
