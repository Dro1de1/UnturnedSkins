import React, { Component } from 'react';
import '../assets/styles/index.css';
import { Button } from '@material-ui/core'

class SkinCard extends Component {
    constructor(props){
        super(props);

        this.state = {
            title: props.title,
        }
    }
    changeTitle(){
        this.setState({
            title : " I got changed"
        })
    }
  render() {
    return (
          <div className='container'>
            <h1 id='header'>{this.state.title}</h1>
            <h4 id='rarity'>Premium Workshop Rocket Launcher Skin</h4>
            <h4 className="_able" id="marketable">not marktable</h4>
            <h4 className="_able" id="scrapable">not scrapable</h4>
            <Button variant="outlined" onClick={() => this.changeTitle()}>
                View ingame
            </Button>
          </div>
    );
  }
}

export default SkinCard;
