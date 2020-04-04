import React from 'react';
import './Settings.css';

class Settings extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            all: {value: 0, checked: false},
            two: {value: 2, checked: true},
            three: {value: 3, checked: true},
            four: {value: 4, checked: true},
            five: {value: 5, checked: true},
            six: {value: 6, checked: true},
            seven: {value: 7, checked: true},
            eight: {value: 8, checked: true},
            nine: {value: 9, checked: true},
            ten: {value: 10, checked: true},
            eleven: {value: 0, checked: false},
            twelve: {value: 0, checked: false},
            termTen: 10,
            termTwelve: 0,
            forward: 1,
            random: 0,
            backward: 0
        }
        this.handleAllChange = this.handleAllChange.bind(this);
        this.handleTwoChange = this.handleTwoChange.bind(this);
        this.handleThreeChange = this.handleThreeChange.bind(this);
        this.handleFourChange = this.handleFourChange.bind(this);
        this.handleFiveChange = this.handleFiveChange.bind(this);
        this.handleSixChange = this.handleSixChange.bind(this);
        this.handleSevenChange = this.handleSevenChange.bind(this);
        this.handleEightChange = this.handleEightChange.bind(this);
        this.handleNineChange = this.handleNineChange.bind(this);
        this.handleTenChange = this.handleTenChange.bind(this);
        this.handleElevenChange = this.handleElevenChange.bind(this);
        this.handleTwelveChange = this.handleTwelveChange.bind(this);
        this.handleTermTenChange = this.handleTermTenChange.bind(this);
        this.handleTermTwelveChange = this.handleTermTwelveChange.bind(this);
        this.handleDirectionForwardChange = this.handleDirectionForwardChange.bind(this);
        this.handleDirectionRandomChange = this.handleDirectionRandomChange.bind(this);
        this.handleDirectionBackwardChange = this.handleDirectionBackwardChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleAllChange(event){
        if(event.target.checked){
            this.setState({
                all: {value: 1, checked: true},
                two: {value: 2, checked: true},
                three: {value: 3, checked: true},
                four: {value: 4, checked: true},
                five: {value: 5, checked: true},
                six: {value: 6, checked: true},
                seven: {value: 7, checked: true},
                eight: {value: 8, checked: true},
                nine: {value: 9, checked: true},
                ten: {value: 10, checked: true},
                eleven: {value: 11, checked: true},
                twelve: {value: 12, checked: true},
            });
            //console.log('In TRUE');
        }
        else{
            this.setState({
                all: {value: 0, checked: false},
                two: {value: 0, checked: false},
                three: {value: 0, checked: false},
                four: {value: 0, checked: false},
                five: {value: 0, checked: false},
                six: {value: 0, checked: false},
                seven: {value: 0, checked: false},
                eight: {value: 0, checked: false},
                nine: {value: 0, checked: false},
                ten: {value: 0, checked: false},
                eleven: {value: 0, checked: false},
                twelve: {value: 0, checked: false},
            });
            //console.log('In FALSE');
        }
        //console.log(event.target.checked+' '+this.state.all);
    }
    handleTwoChange(event){
        if(event.target.checked) this.setState({two: {value: 2, checked: true}});
        else{
            this.setState({
                two: {value: 0, checked: false},
                all: {value: 0, checked: false}
            });
        }
        //console.log(this.state.two.checked +' '+ this.state.three.checked +' '+ this.state.four.checked +' '+ this.state.five.checked +' '+ this.state.six.checked +' '+ this.state.seven.checked +' '+ this.state.eight.checked +' '+ this.state.nine.checked +' '+ this.state.ten.checked +' '+ this.state.eleven.checked +' '+ this.state.twelve.checked);
        if(!this.state.two.checked && 
            this.state.three.checked && 
            this.state.four.checked &&
            this.state.five.checked &&
            this.state.six.checked &&
            this.state.seven.checked &&
            this.state.eight.checked &&
            this.state.nine.checked &&
            this.state.ten.checked &&
            this.state.eleven.checked &&
            this.state.twelve.checked
            ) {
            this.setState({all: {value: 1, checked: true}});
            //console.log('In this.state...')
        }
    }
    handleThreeChange(event){
        if(event.target.checked) this.setState({three: {value: 3, checked: true}});
        else{
            this.setState({
                three: {value: 0, checked: false},
                all: {value: 0, checked: false}
            });
        }
        //console.log(this.state.two.checked +' '+ this.state.three.checked +' '+ this.state.four.checked +' '+ this.state.five.checked +' '+ this.state.six.checked +' '+ this.state.seven.checked +' '+ this.state.eight.checked +' '+ this.state.nine.checked +' '+ this.state.ten.checked +' '+ this.state.eleven.checked +' '+ this.state.twelve.checked);
        if(this.state.two.checked && 
            !this.state.three.checked && 
            this.state.four.checked &&
            this.state.five.checked &&
            this.state.six.checked &&
            this.state.seven.checked &&
            this.state.eight.checked &&
            this.state.nine.checked &&
            this.state.ten.checked &&
            this.state.eleven.checked &&
            this.state.twelve.checked
            ) {
            this.setState({all: {value: 1, checked: true}});
            //console.log('In this.state...')
        }
    }
    handleFourChange(event){
        if(event.target.checked) this.setState({four: {value: 4, checked: true}});
        else{
            this.setState({
                four: {value: 0, checked: false},
                all: {value: 0, checked: false}
            });
        }
        //console.log(this.state.two.checked +' '+ this.state.three.checked +' '+ this.state.four.checked +' '+ this.state.five.checked +' '+ this.state.six.checked +' '+ this.state.seven.checked +' '+ this.state.eight.checked +' '+ this.state.nine.checked +' '+ this.state.ten.checked +' '+ this.state.eleven.checked +' '+ this.state.twelve.checked);
        if(this.state.two.checked && 
            this.state.three.checked && 
            !this.state.four.checked &&
            this.state.five.checked &&
            this.state.six.checked &&
            this.state.seven.checked &&
            this.state.eight.checked &&
            this.state.nine.checked &&
            this.state.ten.checked &&
            this.state.eleven.checked &&
            this.state.twelve.checked
            ) {
            this.setState({all: {value: 1, checked: true}});
            //console.log('In this.state...')
        }
    }
    handleFiveChange(event){
        if(event.target.checked) this.setState({five: {value: 5, checked: true}});
        else{
            this.setState({
                five: {value: 0, checked: false},
                all: {value: 0, checked: false}
            });
        }
        //console.log(this.state.two.checked +' '+ this.state.three.checked +' '+ this.state.four.checked +' '+ this.state.five.checked +' '+ this.state.six.checked +' '+ this.state.seven.checked +' '+ this.state.eight.checked +' '+ this.state.nine.checked +' '+ this.state.ten.checked +' '+ this.state.eleven.checked +' '+ this.state.twelve.checked);
        if(this.state.two.checked && 
            this.state.three.checked && 
            this.state.four.checked &&
            !this.state.five.checked &&
            this.state.six.checked &&
            this.state.seven.checked &&
            this.state.eight.checked &&
            this.state.nine.checked &&
            this.state.ten.checked &&
            this.state.eleven.checked &&
            this.state.twelve.checked
            ) {
            this.setState({all: {value: 1, checked: true}});
            //console.log('In this.state...')
        }
    }
    handleSixChange(event){
        if(event.target.checked) this.setState({six: {value: 6, checked: true}});
        else{
            this.setState({
                six: {value: 0, checked: false},
                all: {value: 0, checked: false}
            });
        }
        //console.log(this.state.two.checked +' '+ this.state.three.checked +' '+ this.state.four.checked +' '+ this.state.five.checked +' '+ this.state.six.checked +' '+ this.state.seven.checked +' '+ this.state.eight.checked +' '+ this.state.nine.checked +' '+ this.state.ten.checked +' '+ this.state.eleven.checked +' '+ this.state.twelve.checked);
        if(this.state.two.checked && 
            this.state.three.checked && 
            this.state.four.checked &&
            this.state.five.checked &&
            !this.state.six.checked &&
            this.state.seven.checked &&
            this.state.eight.checked &&
            this.state.nine.checked &&
            this.state.ten.checked &&
            this.state.eleven.checked &&
            this.state.twelve.checked
            ) {
            this.setState({all: {value: 1, checked: true}});
            //console.log('In this.state...')
        }
    }
    handleSevenChange(event){
        if(event.target.checked) this.setState({seven: {value: 7, checked: true}});
        else{
            this.setState({
                seven: {value: 0, checked: false},
                all: {value: 0, checked: false}
            });
        }
        //console.log(this.state.two.checked +' '+ this.state.three.checked +' '+ this.state.four.checked +' '+ this.state.five.checked +' '+ this.state.six.checked +' '+ this.state.seven.checked +' '+ this.state.eight.checked +' '+ this.state.nine.checked +' '+ this.state.ten.checked +' '+ this.state.eleven.checked +' '+ this.state.twelve.checked);
        if(this.state.two.checked && 
            this.state.three.checked && 
            this.state.four.checked &&
            this.state.five.checked &&
            this.state.six.checked &&
            !this.state.seven.checked &&
            this.state.eight.checked &&
            this.state.nine.checked &&
            this.state.ten.checked &&
            this.state.eleven.checked &&
            this.state.twelve.checked
            ) {
            this.setState({all: {value: 1, checked: true}});
            //console.log('In this.state...')
        }
    }
    handleEightChange(event){
        if(event.target.checked) this.setState({eight: {value: 8, checked: true}});
        else{
            this.setState({
                eight: {value: 0, checked: false},
                all: {value: 0, checked: false}
            });
        }
        //console.log(this.state.two.checked +' '+ this.state.three.checked +' '+ this.state.four.checked +' '+ this.state.five.checked +' '+ this.state.six.checked +' '+ this.state.seven.checked +' '+ this.state.eight.checked +' '+ this.state.nine.checked +' '+ this.state.ten.checked +' '+ this.state.eleven.checked +' '+ this.state.twelve.checked);
        if(this.state.two.checked && 
            this.state.three.checked && 
            this.state.four.checked &&
            this.state.five.checked &&
            this.state.six.checked &&
            this.state.seven.checked &&
            !this.state.eight.checked &&
            this.state.nine.checked &&
            this.state.ten.checked &&
            this.state.eleven.checked &&
            this.state.twelve.checked
            ) {
            this.setState({all: {value: 1, checked: true}});
            //console.log('In this.state...')
        }
    }
    handleNineChange(event){
        if(event.target.checked) this.setState({nine: {value: 9, checked: true}});
        else{
            this.setState({
                nine: {value: 0, checked: false},
                all: {value: 0, checked: false}
            });
        }
        //console.log(this.state.two.checked +' '+ this.state.three.checked +' '+ this.state.four.checked +' '+ this.state.five.checked +' '+ this.state.six.checked +' '+ this.state.seven.checked +' '+ this.state.eight.checked +' '+ this.state.nine.checked +' '+ this.state.ten.checked +' '+ this.state.eleven.checked +' '+ this.state.twelve.checked);
        if(this.state.two.checked && 
            this.state.three.checked && 
            this.state.four.checked &&
            this.state.five.checked &&
            this.state.six.checked &&
            this.state.seven.checked &&
            this.state.eight.checked &&
            !this.state.nine.checked &&
            this.state.ten.checked &&
            this.state.eleven.checked &&
            this.state.twelve.checked
            ) {
            this.setState({all: {value: 1, checked: true}});
            //console.log('In this.state...')
        }
    }
    handleTenChange(event){
        if(event.target.checked) this.setState({ten: {value: 10, checked: true}});
        else{
            this.setState({
                ten: {value: 0, checked: false},
                all: {value: 0, checked: false}
            });
        }
        //console.log(this.state.two.checked +' '+ this.state.three.checked +' '+ this.state.four.checked +' '+ this.state.five.checked +' '+ this.state.six.checked +' '+ this.state.seven.checked +' '+ this.state.eight.checked +' '+ this.state.nine.checked +' '+ this.state.ten.checked +' '+ this.state.eleven.checked +' '+ this.state.twelve.checked);
        if(this.state.two.checked && 
            this.state.three.checked && 
            this.state.four.checked &&
            this.state.five.checked &&
            this.state.six.checked &&
            this.state.seven.checked &&
            this.state.eight.checked &&
            this.state.nine.checked &&
            !this.state.ten.checked &&
            this.state.eleven.checked &&
            this.state.twelve.checked
            ) {
            this.setState({all: {value: 1, checked: true}});
            //console.log('In this.state...')
        }
    }
    handleElevenChange(event){
        if(event.target.checked) this.setState({eleven: {value: 11, checked: true}});
        else{
            this.setState({
                eleven: {value: 0, checked: false},
                all: {value: 0, checked: false}
            });
        }
        //console.log(this.state.two.checked +' '+ this.state.three.checked +' '+ this.state.four.checked +' '+ this.state.five.checked +' '+ this.state.six.checked +' '+ this.state.seven.checked +' '+ this.state.eight.checked +' '+ this.state.nine.checked +' '+ this.state.ten.checked +' '+ this.state.eleven.checked +' '+ this.state.twelve.checked);
        if(this.state.two.checked && 
            this.state.three.checked && 
            this.state.four.checked &&
            this.state.five.checked &&
            this.state.six.checked &&
            this.state.seven.checked &&
            this.state.eight.checked &&
            this.state.nine.checked &&
            this.state.ten.checked &&
            !this.state.eleven.checked &&
            this.state.twelve.checked
            ) {
            this.setState({all: {value: 1, checked: true}});
            //console.log('In this.state...')
        }
    }
    handleTwelveChange(event){
        if(event.target.checked) this.setState({twelve: {value: 12, checked: true}});
        else{
            this.setState({
                twelve: {value: 0, checked: false},
                all: {value: 0, checked: false}
            });
        }
        //console.log(this.state.two.checked +' '+ this.state.three.checked +' '+ this.state.four.checked +' '+ this.state.five.checked +' '+ this.state.six.checked +' '+ this.state.seven.checked +' '+ this.state.eight.checked +' '+ this.state.nine.checked +' '+ this.state.ten.checked +' '+ this.state.eleven.checked +' '+ this.state.twelve.checked);
        if(this.state.two.checked && 
            this.state.three.checked && 
            this.state.four.checked &&
            this.state.five.checked &&
            this.state.six.checked &&
            this.state.seven.checked &&
            this.state.eight.checked &&
            this.state.nine.checked &&
            this.state.ten.checked &&
            this.state.eleven.checked &&
            !this.state.twelve.checked
            ) {
            this.setState({all: {value: 1, checked: true}});
            //console.log('In this.state...')
        }
    }
    handleTermTenChange(event){
        if(event.target.checked) this.setState({termTen: 10, termTwelve: 0});
        //else this.setState({termTen: 0});
    }
    handleTermTwelveChange(event){
        if(event.target.checked) this.setState({termTwelve: 12, termTen: 0});
        //else this.setState({termTwelve: 0});
    }
    handleDirectionForwardChange(event){
        if(event.target.checked) this.setState({forward: 1, random: 0, backward: 0});
        //else this.setState({forward: 0});
    }
    handleDirectionRandomChange(event){
        if(event.target.checked) this.setState({random: 2, forward: 0, backward: 0});
        //else this.setState({random: 0});
    }
    handleDirectionBackwardChange(event){
        if(event.target.checked) this.setState({backward: 3, forward: 0, random: 0});
        //else this.setState({backward: 0});
    }
    handleSubmit(event){
        if(
            this.state.two.value !== 0 ||
            this.state.two.value !== 0 ||
            this.state.three.value !== 0 ||
            this.state.four.value !== 0 ||
            this.state.five.value !== 0 ||
            this.state.six.value !== 0 ||
            this.state.seven.value !== 0 ||
            this.state.eight.value !== 0 ||
            this.state.nine.value !== 0 ||
            this.state.ten.value !== 0 ||
            this.state.eleven.value !== 0 ||
            this.state.twelve.value !== 0
        )
        this.props.getSubmit(
            this.state.two.value,
            this.state.three.value,
            this.state.four.value,
            this.state.five.value,
            this.state.six.value,
            this.state.seven.value,
            this.state.eight.value,
            this.state.nine.value,
            this.state.ten.value,
            this.state.eleven.value,
            this.state.twelve.value,
            this.state.termTen,
            this.state.termTwelve,
            this.state.forward,
            this.state.random,
            this.state.backward
            );
        else alert('Please, choose a serie!');
        event.preventDefault();
    }
    render(){
        return(
            <div>
                <div className="choose">
                    <h4 className="heading">Choose Serie:</h4>
                    <label htmlFor="choose-serie1">All</label>
                    <input id="choose-serie1" type="checkbox" onChange={this.handleAllChange} checked={this.state.all.checked} />
                    <label htmlFor="choose-serie2">2</label>
                    <input id="choose-serie2" type="checkbox" onChange={this.handleTwoChange} checked={this.state.two.checked} />
                    <label htmlFor="choose-serie3">3</label>
                    <input id="choose-serie3" type="checkbox" onChange={this.handleThreeChange} checked={this.state.three.checked} />
                    <label htmlFor="choose-serie3">4</label>
                    <input id="choose-serie4" type="checkbox" onChange={this.handleFourChange} checked={this.state.four.checked} />
                    <label htmlFor="choose-serie4">5</label>
                    <input id="choose-serie5" type="checkbox" onChange={this.handleFiveChange} checked={this.state.five.checked} />
                    <label htmlFor="choose-serie6">6</label>
                    <input id="choose-serie6" type="checkbox" onChange={this.handleSixChange} checked={this.state.six.checked} />
                    <label htmlFor="choose-serie7">7</label>
                    <input id="choose-serie7" type="checkbox" onChange={this.handleSevenChange} checked={this.state.seven.checked} />
                    <label htmlFor="choose-serie8">8</label>
                    <input id="choose-serie8" type="checkbox" onChange={this.handleEightChange} checked={this.state.eight.checked} />
                    <label htmlFor="choose-serie9">9</label>
                    <input id="choose-serie9" type="checkbox" onChange={this.handleNineChange} checked={this.state.nine.checked} />
                    <label htmlFor="choose-serie10">10</label>
                    <input id="choose-serie10" type="checkbox" onChange={this.handleTenChange} checked={this.state.ten.checked} />
                    <label htmlFor="choose-serie11">11</label>
                    <input id="choose-serie11" type="checkbox" onChange={this.handleElevenChange} checked={this.state.eleven.checked} />
                    <label htmlFor="choose-serie12">12</label>
                    <input id="choose-serie12" type="checkbox" onChange={this.handleTwelveChange} checked={this.state.twelve.checked} />
                </div>
                <div className="choose">
                    <h4 className="heading">Terms per Serie:</h4>
                    <label htmlFor="choose-term10">10</label>
                    <input id="choose-term10" type="radio" name="term" onChange={this.handleTermTenChange} defaultChecked />
                    <label htmlFor="choose-term12">12</label>
                    <input id="choose-term12" type="radio" name="term" onChange={this.handleTermTwelveChange} />
                </div>
                <div className="choose">
                    <h4 className="heading">Choose direction:</h4>
                    <label htmlFor="direction-forward">Forward</label>
                    <input id="direction-forward" type="radio" name="direction" onChange={this.handleDirectionForwardChange} defaultChecked />
                    <label htmlFor="direction-random">Random</label>
                    <input id="direction-random" type="radio" name="direction" onChange={this.handleDirectionRandomChange} />
                    <label htmlFor="direction-backward">Backward</label>
                    <input id="direction-backward" type="radio" name="direction" onChange={this.handleDirectionBackwardChange} />
                </div>
                <div className="choose">
                    <button onClick={this.handleSubmit}>Create Table</button>
                </div>
            </div>
        )
    }
}

export default Settings;