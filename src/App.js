import React, { Component } from 'react';
import Header from './Components/Header'
import GalleryList from './Components/GalleryList';
import './App.css';
import Routing from './Components/Routings';
class App extends Component {
  constructor(prop){
    super(prop);
    this.state={showgallerylist:false};
    this.hideGallery=this.hideGallery.bind(this);
  }
  hideGallery(){
     this.setstate({showgallerylist:true});
  }
  render() {
    let showroting
    return (
      <div className="App">
        <Header />
        <Routing/>
      </div>
    );
  }
}

export default App;
