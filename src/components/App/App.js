import React from 'react';
import './App.css';
import Settings from '../Settings/Settings';

class App extends React.Component {
  getSubmit(two, three, four, five, six, seven, eight, nine, ten, eleven, twelve, termTen, termTwelve, forward, random, backward){
    let series = [];
    let term, direction;
    //console.log(all);
    if(two !== 0) series.push(two);
    if(three !== 0) series.push(three);
    if(four !== 0) series.push(four);
    if(five !== 0) series.push(five);
    if(six !== 0) series.push(six);
    if(seven !== 0) series.push(seven);
    if(eight !== 0) series.push(eight);
    if(nine !== 0) series.push(nine);
    if(ten !== 0) series.push(ten);
    if(eleven !== 0) series.push(eleven);
    if(twelve !== 0) series.push(twelve);
    if(termTen !== 0) term = termTen;
    if(termTwelve !== 0) term = termTwelve;
    if(forward !== 0) direction = forward;
    if(random !== 0) direction = random;
    if(backward !== 0) direction = backward;
    console.log('['+series+'] '+term+' '+direction);
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
