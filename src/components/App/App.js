import React from 'react';
import './App.css';
import Settings from '../Settings/Settings';
import SetTable from '../SetTable/SetTable';
import SetExercise from '../SetExercise/SetExercise';
import ScoreBoard from '../ScoreBoard/ScoreBoard';

//const series = [1,2,3,4,5,6,7,8,9,10];
//const series = [2];
//let step = 1;
//const term = 12;
//const direction = 3;
//const square = false;

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      series: [],
      term: 0,
      square: true,
      step: 1,
      direction: 0,
      showSettings: true,
      showTable: false, //should be FALSE
      showExercise: false, //should be FALSE
      showScoreBoard: false, //should be FALSE
      reset: false
    };
    this.toggleSettingsOn = this.toggleSettingsOn.bind(this);
    this.toggleExerciseOn = this.toggleExerciseOn.bind(this);
    this.changeReset = this.changeReset.bind(this);
    this.getResetCall = this.getResetCall.bind(this);
    this.getSubmit = this.getSubmit.bind(this);
  }
  toggleSettingsOn(){
    this.setState({ showSettings: true, showTable: false, showExercise: false, showScoreBoard: false})
  }
  toggleExerciseOn(){
    this.setState({ showExercise: true, showScoreBoard: true, showTable: false });
  }
  changeReset(){
    this.setState({
      reset: true
    });
  }
  getResetCall(){
    this.setState({
      reset: false
    })
  }
  getSubmit(two, three, four, five, six, seven, eight, nine, ten, eleven, twelve, termTen, termTwelve, forward, random, backward, showSettings, showTable){
    let series = [];
    let term, direction;
    let checked54 = true;
    let square = false;
    
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
    if(checked === 54 && checked54 && termTen !== 0){
      series.unshift(1);
      square = true;
    }
    if(checked === 77 && termTwelve !== 0){
      series.unshift(1);
      square = true;
    }
    this.setState({series: series, term: term, square: square, direction: direction, showSettings: showSettings, showTable: showTable});
    //console.log('['+series+'] '+term+' '+direction+' '+checked+' '+checked54+' '+square);
  }
  render(){
    return (
      <div className="App">
        <h1>Multiplication Table</h1>
        {this.state.showSettings && <Settings getSubmit={this.getSubmit}/>}
        {this.state.showTable && <SetTable 
                                    series={this.state.series}
                                    term={this.state.term}
                                    square={this.state.square} />}
        {this.state.showTable && <div className="Table-button">
          <button onClick={this.toggleExerciseOn}>Start Exercise</button>
          <button onClick={this.toggleSettingsOn}>Show Settings</button>
        </div>}
        {this.state.showExercise && <SetExercise 
                                      series={this.state.series}
                                      step={this.state.step}
                                      term={this.state.term}
                                      direction={this.state.direction}
                                      reset={this.state.reset}
                                      resetCall={this.getResetCall} 
                                      settingsOn={this.toggleSettingsOn}  />}
        {this.state.showScoreBoard && <ScoreBoard />}
      </div>
    );
  }
}

export default App;
