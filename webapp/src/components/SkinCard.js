import React, { Component } from 'react';
import '../assets/styles/index.css';
import { Typography, Paper } from '@material-ui/core'

class SkinCard extends Component {
    constructor(props){
        super(props);

        this.state = {
            skin: props.skin,
        }
    }
    changeTitle(){
        var skin = this.state.skin;
        skin.name = " I got changed";
        this.setState({
            skin : skin
        })
    }
  render() {
    return (
          /* <div className='container'>
            <Typography variant="headline" gutterBottom>
                {this.state.skin.name}
            </Typography>
            <h4 id='rarity' style={{background: "#"+this.state.skin.name_color}}>{this.state.skin.type}</h4>
            {this.state.skin.marketable?
                <Button variant="contained" color="primary">marketable</Button>
            :   <Button variant="contained" color="secondary"> not marketable</Button>
            }
            <Button variant="contained" color={this.state.skin.scrapable?"primary":"secondary"}>{this.state.skin.scrapable?"scrapable":"not scrapable"}</Button>
            <h4 className={this.state.skin.marketable?"_able marketable":"_able nmarketable"}>{this.state.skin.marketable?"marketable":"not marketable"}</h4>
           
            
            <Button variant="outlined" onClick={() => this.changeTitle()}>
                View ingame
            </Button>
            
          </div>*/
            <Paper elevation={1} className='container'>
            <Typography variant="headline" gutterBottom>
                    <nobr className='Headline'>{this.state.skin.name}</nobr>
                </Typography>
                <Paper elevation={1} className='rarity' style={{background: "#"+this.state.skin.name_color}}>
                    <Typography variant="body1" gutterBottom>
                        {this.state.skin.type}
                    </Typography>    
                </Paper>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                
                <a href="http://youtube.com/dro1de1"><Paper elevation={1} className='market' className={this.state.skin.marketable? "goodable": "notable"}>
                    <Typography variant="body1" gutterBottom>
                        {this.state.skin.marketable? "marketable": "non marketable"}
                    </Typography>    
                </Paper></a>
                <a href="http://youtube.com/dro1de1"><Paper elevation={1} className='market' className={this.state.skin.scrapable? "goodable": "notable"}>
                    <Typography variant="body1" gutterBottom>
                        {this.state.skin.scrapable? "scrapable": "non scrapable"}
                    </Typography>    
                </Paper></a>
                <a href="https://www.youtube.com/channel/UCb-alIHXpU_K7esFxmDL59Q"><Paper elevation={1} className='market' className={this.state.skin.video? "goodable": "notable"}>
                    <Typography variant="body1" gutterBottom>
                        view ingame
                    </Typography>    
                </Paper></a>
                <a href="http://youtube.com/dro1de1"><Paper elevation={1} className='market'>
                    <Typography variant="body1" gutterBottom>
                        {this.state.skin.type}
                    </Typography>    
                </Paper></a>
            </Paper>
    );
  }
}

export default SkinCard;
