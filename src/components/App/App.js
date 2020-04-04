import React from 'react';
import './App.css';
import Settings from '../Settings/Settings';
import SetTable from '../SetTable/SetTable';

const series = [2];
const term = 10;
const direction = 1;

class App extends React.Component {
  getSubmit(two, three, four, five, six, seven, eight, nine, ten, eleven, twelve, termTen, termTwelve, forward, random, backward){
    let series = [];
    let term, direction;
    let checked54 = true;
    if(two !== 0) series.push(two);
    if(three !== 0) series.push(three);
    if(four !== 0) series.push(four);
    if(five !== 0) series.push(five);
    if(six !== 0) series.push(six);
    if(seven !== 0) series.push(seven);
    if(eight !== 0) series.push(eight);
    if(nine !== 0) series.push(nine);
    if(ten !== 0) series.push(ten);
    if(eleven !== 0){ 
      series.push(eleven);
      checked54 = false;
    }
    if(twelve !== 0){
      series.push(twelve);
      checked54 = false;
    }
    if(termTen !== 0) term = termTen;
    if(termTwelve !== 0) term = termTwelve;
    if(forward !== 0) direction = forward;
    if(random !== 0) direction = random;
    if(backward !== 0) direction = backward;

    const checked = series.reduce((a,b) => a + b, 0);
    if(checked === 54 && checked54) series.unshift(1);
    if(checked === 77) series.unshift(1);

    console.log('['+series+'] '+term+' '+direction+' '+checked);
  }
  render(){
    return (
      <div className="App">
        <h1>Multiplication Table</h1>
        <Settings getSubmit={this.getSubmit}/>
        <SetTable series={series} term={term}/>
      </div>
    );
  }
}

export default App;
