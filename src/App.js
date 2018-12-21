import React, { Component } from 'react';
import Ninjas from './Ninjas';
import AddNinja from "./AddNinja";

class App extends Component {
    state = {
        ninjas : [
            {name: "Quang", age: 20, belt: "super", id: 1},
            {name: "Aidan", age: 21, belt: "white", id: 2},
            {name: "Yoshi", age: 200, belt: "black", id: 3},
        ]
    };

    addNinja = (ninja) => {
        ninja.id = Math.random();
        let ninjas = [...this.state.ninjas, ninja];
        this.setState({
            ninjas: ninjas
        })
    };

    deleteNinja = (id) => {
        let ninjas = this.state.ninjas.filter(ninja => {
            return ninja.id !== id;
        });
        console.log(ninjas);
        this.setState({
            ninjas: ninjas
        })
    };

  render() {
    return (
      <div className="App">
          <h1>
              My first React App
          </h1>
          <p>Welcome =D</p>
          <Ninjas ninjas={ this.state.ninjas } deleteNinja={this.deleteNinja}/>
          <AddNinja addNinja={this.addNinja}/>
      </div>
    );
  }
}

export default App;
