import React from 'react';
import './Settings.css';

class Settings extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            all: 0,
            two: 2,
            three: 3,
            four: 4,
            five: 5,
            six: 6,
            seven: 7,
            eight: 8,
            nine: 9,
            ten: 10,
            eleven: 0,
            twelve: 0,
            termTen: 10,
            termTwelve: 0,
            forward: 1,
            random: 0,
            backward: 0
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleAllChange = this.handleAllChange.bind(this);
        this.handleTwoChange = this.handleTwoChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChange(event){
        //this.props.onChange(event.target.checked);
        console.log(event.target.checked);
    }
    handleAllChange(event){
        if(event.target.checked){
            this.setState({all: 1});
            //console.log('In TRUE');
        }
        else{
            this.setState({all: 0});
            //console.log('In FALSE');
        }
        //console.log(event.target.checked+' '+this.state.all);
    }
    handleTwoChange(event){
        if(event.target.checked) this.setState({two: 2});
        else this.setState({two: 0});
    }
    handleSubmit(event){
        this.props.getSubmit(this.state.all, this.state.two);
        event.preventDefault();
    }
    render(){
        return(
            <div>
                <div className="choose">
                    <h4 className="heading">Choose Serie:</h4>
                    <label htmlFor="choose-serie1">All</label>
                    <input id="choose-serie1" type="checkbox" value={this.state.all} onChange={this.handleAllChange}/>
                    <label htmlFor="choose-serie2">2</label>
                    <input id="choose-serie2" type="checkbox" value={this.state.two} onChange={this.handleTwoChange} defaultChecked />
                    <label htmlFor="choose-serie3">3</label>
                    <input id="choose-serie3" type="checkbox" value={this.state.three} defaultChecked />
                    <label htmlFor="choose-serie3">4</label>
                    <input id="choose-serie4" type="checkbox" value={this.state.four} defaultChecked />
                    <label htmlFor="choose-serie4">5</label>
                    <input id="choose-serie5" type="checkbox" value={this.state.five} defaultChecked />
                    <label htmlFor="choose-serie6">6</label>
                    <input id="choose-serie6" type="checkbox" value={this.state.six} defaultChecked />
                    <label htmlFor="choose-serie7">7</label>
                    <input id="choose-serie7" type="checkbox" value={this.state.seven} defaultChecked />
                    <label htmlFor="choose-serie8">8</label>
                    <input id="choose-serie8" type="checkbox" value={this.state.eight} defaultChecked />
                    <label htmlFor="choose-serie9">9</label>
                    <input id="choose-serie9" type="checkbox" value={this.state.nine} defaultChecked />
                    <label htmlFor="choose-serie10">10</label>
                    <input id="choose-serie10" type="checkbox" value={this.state.ten} defaultChecked />
                    <label htmlFor="choose-serie11">11</label>
                    <input id="choose-serie11" type="checkbox" value={this.state.eleven} />
                    <label htmlFor="choose-serie12">12</label>
                    <input id="choose-serie12" type="checkbox" value={this.state.twelve} />
                </div>
                <div className="choose">
                    <h4 className="heading">Terms per Serie:</h4>
                    <label htmlFor="choose-term10">10</label>
                    <input id="choose-term10" type="radio" name="term" value={this.state.termTen}  defaultChecked />
                    <label htmlFor="choose-term12">12</label>
                    <input id="choose-term12" type="radio" name="term" value={this.state.termTwelve} />
                </div>
                <div className="choose">
                    <h4 className="heading">Choose direction:</h4>
                    <label htmlFor="direction-forward">Forward</label>
                    <input id="direction-forward" type="radio" name="direction" value={this.state.forward}  defaultChecked />
                    <label htmlFor="direction-random">Random</label>
                    <input id="direction-random" type="radio" name="direction" value={this.state.random} />
                    <label htmlFor="direction-backward">Backward</label>
                    <input id="direction-backward" type="radio" name="direction" value={this.state.backward} />
                </div>
                <div className="choose">
                    <button onClick={this.handleSubmit}>Create Table</button>
                </div>
            </div>
        )
    }
}

export default Settings;