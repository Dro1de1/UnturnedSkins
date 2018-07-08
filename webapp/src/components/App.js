import React, { Component } from 'react';
import '../assets/styles/index.css';
import SkinCard from './SkinCard';
import skins from '../data/EconInfo';
import { Button, Typography, Toolbar, AppBar, menuButton, TextField } from '@material-ui/core'

class App extends Component {
  generateCards(){
    var cards = [];

    for (let i = 0; i < 20; i++) {
      cards.push(<SkinCard key={i} skin={skins[i]} />)
    }
    return cards;
  }
  render() {
    
    console.log(skins);
    
    return (
    <div className="blockinline">
      <AppBar position="fixed" color="default" id="Header">
        <Toolbar>
          <Typography variant="title" color="inherit">
            UnturnedStock.tk
          </Typography>
          <TextField
          className="searcher"
          id="search"
          label="Search field"
          type="search"
          margin="normal"
        />
        </Toolbar>
        
      </AppBar>
      <br/>
      <br/>
      <br/>
        {this.generateCards()}
      </div>
    );
  }
}

export default App;
