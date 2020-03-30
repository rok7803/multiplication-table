import React from 'react';
import './App.css';
import Settings from '../Settings/Settings';

class App extends React.Component {
  getSubmit(all, two){
    let series = [];
    //console.log(all);
    if(all !== 0) series.push(1);
    if(two !== 0) series.push(2);
    console.log(series);
  }
  render(){
    return (
      <div className="App">
        <h1>Multiplication Table</h1>
        <Settings getSubmit={this.getSubmit}/>
      </div>
    );
  }
}

export default App;
