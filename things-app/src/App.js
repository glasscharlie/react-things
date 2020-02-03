import React, { Component } from 'react';
import Footer from './components/footer'
import Header from './componenets/header'
import ThingContainer from './componenets/ThingContainer'

class App extends Componenet {
  constructor(props) {
    super(props);

    this.state = {
      things : [
        {id:45, name:'rake'},
        {id:57, name:'gogurt'}
      ]
    }

    this.createThingHandler = this.createThingHandler.bind(this);
  }

  createThingHandler(thing) {
    thing.id = Math.floor(Math.random() * 1000)
    this.setState ({
      things : this.state.things.concat(thing),
    })
  }

  render() {
    return (
      <>
      <Header thing-count={0} />
      <ThingContainer things={this.state.things} onCreated={this.createThingHandler}/>
      <Footer copyright="1999" />
      </>
    )
  }
}
export default App;