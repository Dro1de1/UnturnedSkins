import React, { Component } from 'react';
import '../assets/styles/index.css';
import SkinCard from './SkinCard';

class App extends Component {
  render() {
    return (
      <div className="blockinline">
        <SkinCard title="This" />
        <SkinCard title="is"/>
        <SkinCard title="America"/>
      </div>
    );
  }
}

export default App;
